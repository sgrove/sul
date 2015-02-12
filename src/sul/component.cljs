(ns sul.component
  (:require [ajax.core :as ajax :refer [GET POST]]
            [cljs.reader :as reader]
            [datascript :as d]
            [goog.events :as events]
            [sul.dom :as dom])
  (:import [goog.events EventType]))

(defn add-tx-render-listener! [conn app]
  (add-watch conn :render-t
             (fn [report]
               (.forceUpdate app)))
  ;; Use standard add-watch so tooling can work properly
  #_(d/listen! conn :render
               (fn [report]
                 (js/console.log "Listen!")
                 (.forceUpdate app))))

(defn remove-tx-report-listener! [conn]
  (d/unlisten! conn :reports))

(defn remove-tx-render-listener! [conn]
  (d/unlisten! conn :render))

;;******************************************************************************
;;  Sul Component Helpers
;;******************************************************************************

(defn get-where [q]
  (rest (drop-while #(not= :where %) q)))

(defn invalidated-query? [attr-statuses query last-updated]
  (some
   (fn [attr]
     (assert (keyword? attr) "Can only invalidate queries with keyword attrs")
     (if-let [attr-last-updated (get @attr-statuses attr)]
       ;; Attr is outdated, query invalidated
       (< last-updated attr-last-updated)
       ;; Attr is nil, query invalidated
       (do
         (print "Attr is nil, invalidated query" )
         true)))
   (map second (get-where query)))
  true)

;; Some sugar to clean up component maps
(defn translate-class-attrs [class]
  (let [known-keys {:display-name   "getDisplayName"
                    :will-mount     "componentWillMount"
                    :will-update    "componentWillUpdate"
                    :should-update? "shouldComponentUpdate"
                    :did-update     "componentDidUpdate"
                    :render         "render"}]
    (loop [new-class {}
           attrs      (seq class)]
      (if (seq attrs)
        (let [[k v]     (first attrs)
              new-class (assoc new-class (get known-keys k k) v)]
          (recur new-class (rest attrs)))
        new-class))))

(defn get-sul [com]
  (aget (.-props com) "___sul"))

;; Injects default Sul behaviors
(defn sul-com [params meta & [render]]
  (let [config          (js-obj)
        meta            (if (and (nil? render)
                                 (fn? meta))
                          {:render meta}
                          meta)
        will-update     (:will-update meta)
        will-mount      (:will-mount meta)
        display-name    (if (string? (:display-name meta))
                          (fn [] (:display-name meta))
                          (:display-name meta))
        user-render     (:render meta)
        q               (:q meta)
        multiple-q?     (map? q)
        sul-name        (if (string? display-name)
                          (fn [] display-name)
                          display-name)
        sul-render      (fn [_]
                          (this-as this
                                   (let [sul  (get-sul this)
                                         conn (:sul/conn params)
                                         r    (if multiple-q?
                                                ;; Multi-query map form
                                                (into {}
                                                      (map (fn [[k query]]
                                                             [k (d/q query @conn)]) q))
                                                ;; Normal single-query comp
                                                (when (seq q)
                                                  (d/q q @conn)))]
                                     (user-render {:q    q
                                                   :r    r
                                                   :conn conn}))))
        sul-update?     (fn []
                          (this-as this
                                   (let [sul           (get-sul this)
                                         conn          (:sul/conn sul)
                                         statuses      (:sul/statuses sul)
                                         last-rendered (aget this "__sul_last_rendered")]
                                     ;; TODO: Invalidate for map/multiple queries
                                     (when (seq q)
                                       (invalidated-query? statuses q last-rendered)))))
        sul-will-mount  (fn []
                          (this-as this
                                   (let [props (.-props this)
                                         p     (aget props "p")
                                         conn  (aget props "conn")
                                         sul   (get-sul this)]
                                     (aset this "__sul_last_rendered" (.getTime (js/Date.)))
                                     (aset this "__sul" {:q   q
                                                         :p   p
                                                         :sul sul})
                                     (when will-mount
                                       (will-mount)))))
        sul-will-update (fn []
                          (this-as this
                                   (aset this "__sul_last_rendered" (.getTime (js/Date.)))))
        new-class       (-> meta
                            (merge {:will-update    sul-will-update
                                    :will-mount     sul-will-mount
                                    :should-update? sul-update?
                                    :display-name   sul-name
                                    :render         sul-render})
                            translate-class-attrs)]
    (doseq [[k v] new-class]
      (aset config (name k) v))
    (js/React.createClass config)))

(defn build [com params & children]
  (apply (.-createElement js/React) (com params) children))
