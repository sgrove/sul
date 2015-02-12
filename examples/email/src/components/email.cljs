(ns examples.email.components.email
  (:require [cljs.reader :as reader]
            [datascript :as d]
            [goog.events :as events]
            [goog.events.EventType]
            [sul.component :as com]
            [sul.dom :as dom :include-macros true]
            [sul.replay :as replay]
            [sul.utils :as utils])
  (:require-macros [sul.macros :as m])
  (:import [goog.events EventType]))

;;******************************************************************************
;;  Description
;;******************************************************************************
;;
;; The Sul listener for d/transact is looking for two keys in tx
;; metadata right now: :undo? and :transient?
;;
;; :undo? indicates that the transaction should be undoable in a
;; tree-history fashion (built in). If a transaction is *not* undoable
;; (moving the mouse, etc.), it will still be captured and added to
;; the replay list for potential analysis later
;;
;; :transient? indicates that the action is not undoable, and
;; shouldn't even be included in the lists of reports for later
;; analysis. Perhaps you have a timer updating/transacting into the db
;; with the current time every 1ms - you probably don't want to stream
;; those tx's to the server. Be careful marking transactions as
;; transient, as it can make it difficult to analyze a breakdown later.


;;******************************************************************************
;;  State history
;;******************************************************************************

(def reports
  (atom []))

;;******************************************************************************
;;  Demo App Component Behaviors
;;******************************************************************************

(defn update-song-sort-field! [db field]
  (d/transact! db [{:db/id 10
                    :ui/song-sort-field field}]))

(defn valid-email? [s]
  (and (string? s)
       (re-find #".+@.+\..+" s)))

;;******************************************************************************
;;  Demo App Components
;;******************************************************************************

;; When a component is first mounted, or its query is invalidated, its
;; query (q) will be run against the db passed to the component (you
;; can have multiple db's in an app). The results of the query will be
;; processed by a post-processing fn (p). The return value from p will
;; be passed into the render fn with the latest db values.
(m/defsul mouse-position [params]
  {:render (fn [{:keys [title x y]}]
             (dom/h2 #js{:style #js{:backgroundColor (utils/rand-color)}} (pr-str [x y])))})

(defn selected-emails [conn selected?]
  (d/q '[:find [?eid ...]
         :in $ ?selected
         :where
         [?eid :email/selected? ?selected]]
       conn
       selected?))

;; The meta hash map is optional, you can just pass in a render fn to
;; com/sul-com if that's all you care about.
(m/defsul mouse-circle [params]
  {:q      '[:find [?x ?y]
             :where
             [?eid :mouse/x ?x]
             [?eid :mouse/y ?y]]
   :render (fn [{:keys [q r conn]}]
             (let [[x y]  r]
               (dom/div #js{:className "mouse-circle"
                            :style #js{:top             (or (- y 50) 0)
                                       :left            (or (inc x) 0)
                                       :position        "absolute"
                                       :borderRadius    25
                                       :width           50
                                       :height          50
                                       :backgroundColor "red"}})))})

(m/defsul title [params]
  {:q      '[:find  [?v ...]
             :where
             [?e :app/title ?v]]
   :render (fn [{:keys [q r]}]
             (let [[title] r]
               (dom/div nil
                        (dom/h1 #js{:style #js{:backgroundColor (utils/rand-color)}}
                                (str title " - " (.getTime (js/Date.)))))))})

(m/defsul keyboard-inspector [params]
  {:q      '[:find ?code ?name ?depressed
             :where
             [?eid :key/code ?code]
             [?eid :key/name ?name]
             [?eid :key/depressed? ?depressed]]
   :render (fn [{:keys [r]}]
             (apply dom/ul nil
                    (map (fn [[code name depressed?]]
                           (dom/li nil (pr-str code) "-" (pr-str name)  "-" (pr-str depressed?))) (sort-by first r))))})

;; TODO: Handle passing data explicitly from parent (bypass query mechanism)
;; TODO: Figure out if ^^ is a good idea (convenient, but differing semantics)
;; Multiple queries used a named-query format
(m/defsul email-subjects [params]
  {:q      {:emails       '[:find [?e ...]
                            :where
                            [?e :email/selected? ?subject]]
            :unread-only? '[:find [?unread-only? ...]
                            :in $
                            :where
                            [?eid :ui/inbox-show-unread-only? ?unread-only?]]}
   :render (fn [{:keys [q r conn]}]
             (let [[unread-only?] (:unread-only? r)
                   emails         (as-> (:emails r) emails
                                        (map (juxt identity (comp (partial into {}) ;; Force entity -> Hashmap
                                                                  (partial d/entity @conn))) emails)
                                        (if unread-only?
                                          (remove (comp :email/read? second) emails)
                                          emails)
                                        (sort-by (comp - :email/date second) emails))]
               (apply dom/div nil
                      (mapv (fn [[id email]]
                              (let [open? (boolean (:email/open? email))]
                                (dom/div #js{:style #js{:backgroundColor (when (:email/selected? email)
                                                                           "yellow")
                                                        :color "black"}
                                             :className "email-subject"}
                                         (dom/input #js{:style #js{:cursor "pointer"}
                                                        :type "checkbox"
                                                        :checked (:email/selected? email)
                                                        :onClick #(let [datom [:db/add id :email/selected? (not (:email/selected? email))]]
                                                                    (d/transact! conn [datom] {:undo? true}))})
                                         (dom/strong nil (if open? "▼" "▲"))
                                         (dom/a #js{:href    (str id)
                                                    :onClick (fn [event]
                                                               (.preventDefault event)
                                                               (d/transact! conn [[:db/add id :email/open? (not open?)]
                                                                                  [:db/add id :email/read? true]]
                                                                            {:undo? true}))
                                                    :style #js{:backgroundColor (utils/rand-color)}}
                                                (if (:email/read? email)
                                                  (dom/span nil (:email/subject email))
                                                  (dom/strong nil (:email/subject email))))
                                         (if open?
                                           (dom/p nil (:email/body email)))))) emails))))})

;; TODO: make a dropdown component and enable local-state, clean this
;; up
(m/defsul history-playback [params]
  {:q '[:find [?eid ?open]
        :where
        [?eid :history/open? ?open]]
   :render (fn [{:keys [r conn]}]
             (let [[eid open?] r
                   open? (if (nil? open?) true open?)]
               (dom/div nil
                        (dom/div #js{:onClick (fn []
                                                ;; TODO: Figure out
                                                ;; how to track eid of
                                                ;; specific
                                                ;; attribute/entities. Perhaps
                                                ;; there should be one
                                                ;; entity with lots of
                                                ;; attributes?
                                                (d/transact! conn [[:db/add (or eid 999003) :history/open? (not open?)]]
                                                             ;; Uncomment to make toggling the dropdown undoable
                                                             ;;{:undo? true}
                                                             ))
                                     :style #js{:cursor "pointer"}} (if open? "▼" "▲") " Controls")
                        (when open?
                          (dom/div nil
                                   (dom/div #js{:className "controls"}
                                            (dom/button #js{:onClick (partial replay/replay-all-reports! params)} "Quick Replay")
                                            (dom/button #js{:onClick (partial replay/replay-all-reports-with-delay! params 1000)} "Timed Replay")
                                            (dom/button #js{:onClick (partial replay/load-and-replay-playback! "example_playback")} "Load & Replay")
                                            (dom/button #js{:onClick (partial replay/load-and-replay-playback! "example_playback" 1000)} "Timed Load & Replay"))
                                   (dom/p nil "Quick replay will step through each of the successive replays steps as close to 60fps as possible")
                                   (dom/p nil "Timed will replay the events with the original time delta between each step")
                                   (dom/p nil "Load will load an example edn file and play it back, so you can see how the user used your app, or how an error occurred.")
                                   (dom/a #js{:href "example_playback.edn"} "Example Playback File"))))))})

(comment
  ;; TODO: Ideal, bring in Sablono
  (m/defsul history-playback [params]
    [:div
     [:div {:class "controls"}
      [:button #js{:onClick replay/replay-all-reports!} "Quick Replay"]
      [:button #js{:onClick (partial replay/replay-all-reports-with-delay! 1000)} "Timed Replay"]
      [:button #js{:onClick (partial replay/load-and-replay-playback! "example_playback")} "Load & Replay"]
      [:button #js{:onClick (partial replay/load-and-replay-playback! "example_playback" 1000)} "Timed Load & Replay"]]
     [:h2 "Quick replay will step through each of the successive replays steps as close to 60fps as possible"]
     [:h2 "Timed will replay the events with the original time delta between each step"]
     [:h2 "Load will load an example edn file and play it back, so you can see how the user used your app, or how an error occurred."]
     [:a {:href "example_playback.edn"} "Example Playback File"]]))

(m/defsul state-spitter [params]
  (dom/div nil
           (pr-str (keys params))
           (dom/br nil)
           (pr-str (js/Date.))))

;; Hack component until figure out multiple queries. Alternatively,
;; should also figure out non-db component local state. Local state
;; won't work for this component since the inbox view also needs to
;; know. This "unread-only" infection indicates that we need a way of
;; building shared/derived-views, and querying against that. Imagine
;; an email filtering view by phrase, date, and other criteria. Not every component should know about all of those criteria - they should be able to request (or be parameterized by) 
(m/defsul unread-only-filter [param]
  {:q      {:emails       '[:find ?eid ?read ?selected
                            :in $
                            :where
                            [?eid :email/selected? ?selected]
                            [?eid :email/read? ?read]]
            :unread-only? '[:find [?unread-only? ...]
                            :in $
                            :where
                            [?eid :ui/inbox-show-unread-only? ?unread-only?]]}
   :render (fn [{:keys [r conn]}]
             (let [[unread-only?] (:unread-only? r)]
               (dom/label #js{:for "unread-filter"}
                          (dom/input #js{:type    "checkbox"
                                         :onClick (fn [event]
                                                    (let [newly-unselected (mapv (fn [[eid read? selected?]]
                                                                                   [:db/add eid :email/selected? (if read? false selected?)]) (:emails r))
                                                          datoms           (conj newly-unselected [:db/add 999001 :ui/inbox-show-unread-only? (not unread-only?)])]
                                                      (d/transact! conn datoms)))
                                         :checked (boolean unread-only?)})
                          "Unread only? " (pr-str (boolean unread-only?)))))})

;; XXX: Delete should delete all selected emails. Emails that aren't
;; shown shouldn't be selected/selectable. But right this component
;; has to know whether "unread-only" is selected before
;; deleting. Could fix via some shared derived-view (sounds cool/fun,
;; but not sure about semantics at all), or via some extra data in the
;; db (easier) e.g. :email/shown?, but doesn't feel clean/scalable at
;; all.
(m/defsul inbox-toolbar [params]
  {:q      {:emails       '[:find ?eid ?selected ?unread
                            :in $
                            :where
                            [?eid :email/selected? ?selected]
                            [?eid :email/read? ?unread]]
            :unread-only? '[:find [?unread-only? ...]
                            :in $
                            :where
                            [?eid :ui/inbox-show-unread-only? ?unread-only?]]}
   :render (fn [{:keys [r conn]}]
             (let [[unread-only?] (:unread-only? r)
                   emails         (:emails r)
                   grouped        (group-by second emails)
                   selected       (get grouped true)
                   unselected     (get grouped false)]
               (dom/div nil
                        (dom/button #js{:onClick (fn []
                                                   (let [affected      (if unread-only?
                                                                         (remove last emails)
                                                                         emails)
                                                         all-selected? (zero? (count (remove second affected)))
                                                         new-selected? (not all-selected?)
                                                         ids           (map first affected)
                                                         datoms        (mapv (fn [eid] [:db/add eid :email/selected? new-selected?]) ids)]
                                                     (d/transact! conn datoms)))}
                                    "Select All")
                        (dom/button #js{:disabled (not (pos? (count selected)))
                                        :onClick  (fn []
                                                    (let [datoms (mapv (fn [email] [:db.fn/retractEntity (first email)])
                                                                       selected)]
                                                      (d/transact! conn datoms {:undo? true})))} "Delete")
                        (com/build unread-only-filter params)
                        (let [x (count selected)
                              y (count unselected)]
                          (dom/span nil x " of " (+ x y) " selected")))))})

;; TODO: Figure out how to allow multiple queries per component,
;; without harming the usual one-query component
(defn container [params]
  (com/sul-com params
   {:display-name (fn [] "SulContainer")
    :render       (fn []
                    (let [conn             (:sul/conn params)]
                      (dom/div #js{}
                               (com/build history-playback params)
                               (com/build keyboard-inspector params)
                               (com/build title params)
                               (com/build inbox-toolbar params)
                               (com/build email-subjects params)
                               (dom/br nil)
                               
                               (com/build mouse-circle params))))}))

;;******************************************************************************
;;  Create DB, add tx listener, install demo app
;;******************************************************************************

(defn mouse-move-handler [conn event]
  (let [scroll-top  (or (.-pageYOffset js/window)
                        (.-scrollTop js/document)
                        (.-scrollTop js/document.body))
        scroll-left (or (.-pageXOffset js/window)
                        (.-scrollLeft js/document)
                        (.-scrollLeft js/document.body))
        top         (.-clientY event)
        left        (.-clientX event)
        datoms      [{:db/id   100
                      :mouse/x (+ left scroll-left)
                      :mouse/y (+ top scroll-top)}]]
    (d/transact! conn datoms {:transient? true})))

(defn trickle-data! [conn]
  (let [freq 1]
    (js/setTimeout
     (partial (fn load-song [songs]
          (when (seq songs)
            (d/transact! conn [(first songs)] {:undo? true})
            (js/setTimeout (partial load-song (rest songs)) freq)))
        (mapv (fn [n]
                {:db/id            -1
                 :email/subject    (str "This is an email subject " n)
                 :email/from       99
                 :email/body       "This is an email body"
                 :email/date       (js/Date. (* n 10000))
                 :email/read?      (rand-nth [true false])
                 :email/selected?  false
                 :email/view-count 0
                 :email/open?      false})
              (range 1 40 1)))
     freq)))

;;******************************************************************************
;;  Console helpers
;;******************************************************************************

(defn ^:export add-song [conn title year]
  (d/transact! conn
               [{:db/id -1 :song/title title :song/album "User Album" :song/year year}]))

(defn ^:export set-title! [conn title]
  (d/transact! conn
               [{:db/id 1 :app/title title}]))

(defn ^:export report-count []
  (count @reports))

(defn ^:export reports-pr-count []
  (pr-str (mapv drop-last @reports)))

;;******************************************************************************
;;  Example entry point
;;******************************************************************************

(defn setup! [conn]
  (events/listen js/window EventType/MOUSEMOVE (partial mouse-move-handler conn))
  ;; Push some data into DS
  (print "Conn: " @conn)
  (d/transact! conn [{:db/id 5
                      :app/started? true}])
  (d/transact! conn [{:app/title "Sumail Example"}])
  (trickle-data! conn))
