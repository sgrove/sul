(ns sul.core
  (:require [ajax.core :as ajax :refer [GET POST]]
            [cljs.reader :as reader]
            [datascript :as d]
            [goog.events :as events]
            [sul.dom :as dom])
  (:import [goog.events EventType]))

(enable-console-print!)

;;******************************************************************************
;;  State history
;;******************************************************************************

(def reports
  (atom []))

;;******************************************************************************
;;  Debug helpers
;;******************************************************************************

(defn rand-color
  "Useful to visually see if a component has been rerendered"
  []
  (let [r (rand-int 255)
        g (rand-int 255)
        b (rand-int 255)]
    (str "rgb(" r "," g "," b ")")))

;; Declare this here because of the slightly hacky way I'm calling out
;; from the components
(declare replay-all-reports!
         replay-all-reports-with-delay!
         load-and-replay-playback!)

;;******************************************************************************
;;  Sul Component Helpers
;;******************************************************************************

;; Used for knowing when an attribute was last updated in the db, used
;; for query invalidation
(def attr-statuses
  ;; :attr => ts-at-last-invalidation
  (atom {}))

(defn get-where [q]
  (rest (drop-while #(not= :where %) q)))

(defn invalidated-query? [query last-updated]
  (some
   (fn [attr]
     (assert (keyword? attr) "Can only invalidate queries with keyword attrs")
     (if-let [attr-last-updated (get @attr-statuses attr)]
       ;; Attr is outdated, query invalidated
       (< last-updated attr-last-updated)
       ;; Attr is nil, query invalidated
       true))
   (map second (get-where query))))

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

;; Injects default Sul behaviors
(defn sul-com [meta & [render]]
  (let [config          (js-obj)
        meta             (if (and (nil? render)
                                  (fn? meta))
                           {:render meta}
                           meta)
        will-update     (:will-update meta)
        will-mount      (:will-mount meta)
        display-name    (:display-name meta)
        user-render     (:render meta)
        sul-name        (if (string? display-name)
                          (fn [] display-name)
                          display-name)
        sul-render      (fn [_]
                          (this-as this
                                   (let [{:keys [q p conn]} (aget this "__sul")
                                         r (d/q q @conn)]
                                     (user-render (p r)))))
        sul-update?     (fn []
                          (this-as this
                                   (let [props            (.-props this)
                                         {:keys [q conn]} (aget this "__sul")
                                         last-rendered    (aget this "__sul_last_rendered")]
                                     (invalidated-query? q last-rendered))))
        sul-will-mount  (fn []
                          (this-as this
                                   (let [props (.-props this)
                                         q     (aget props "q")
                                         p     (aget props "p")
                                         conn  (aget props "conn")]
                                     (aset this "__sul_last_rendered" (.getTime (js/Date.)))
                                     (aset this "__sul" {:q    q
                                                         :p    p
                                                         :conn conn})
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
(def mouse-position
  (sul-com
   {:display-name "MousePosition"
    :render
    (fn [{:keys [title x y]}]
      (dom/h2 #js{:style #js{:backgroundColor (rand-color)}} (pr-str [x y])))}))


;; The meta hash map is optional, you can just pass in a render fn to
;; sul-com if that's all you care about.
(def mouse-circle
  (sul-com
   (fn [com-data]
     (this-as this
              (let [{:keys [x y]} com-data]
                (dom/div #js{:className "mouse-circle"
                             :style #js{:top  (or (- y 25) 0)
                                        :left (or (inc x) 0)}}))))))

(def title
  (sul-com
   {:display-name "Title"
    :render
    (fn [{:keys [title]} com-data]
      (dom/div
       nil
       (dom/h1 #js{:style #js{:backgroundColor (rand-color)}} (str title " - " (.getTime (js/Date.))))))}))

(def song-list
  (sul-com
   {:display-name "SongList"
    :render (fn [songs]
              (dom/ul #js{:style #js{:backgroundColor (rand-color)}}
                      (clj->js (map #(dom/li #js{:key (:song/title %)} (str (:song/year %) " - " (:song/title %) " [" (:song/album %) "]")) songs))))}))

(defn build [com params & children]
  (apply (.-createElement js/React) com params children))

(def app-el
  (js/document.getElementById "app"))

;; Just a normal React component to tie it all together for now
(def container
  (js/React.createClass
   #js
   {:getDisplayName
    (fn [] "Container")
    :render
    (fn []
      (this-as this
               (let [conn (aget (.-props this) "conn")]
                 (dom/div #js{}
                          (dom/div #js{:className "controls"}
                                   (dom/button #js{:onClick replay-all-reports!} "Quick Replay")
                                   (dom/button #js{:onClick (partial replay-all-reports-with-delay! 1000)} "Timed Replay")
                                   (dom/button #js{:onClick (partial load-and-replay-playback! "example_playback")} "Load & Replay")
                                   (dom/button #js{:onClick (partial load-and-replay-playback! "example_playback" 1000)} "Timed Load & Replay"))
                          (dom/h2 nil "Quick replay will step through each of the successive replays steps as close to 60fps as possible")
                          (dom/h2 nil "Timed will replay the events with the original time delta between each step")
                          (dom/h2 nil "Load will load an example edn file and play it back, so you can see how the user used your app, or how an error occurred.")
                          (dom/a #js{:href "example_playback.edn"} "Example Playback File")
                          (dom/h1 nil "Sul")
                          (build title #js{:q '[:find  ?v
                                                :where
                                                [?e :app/title ?v]]
                                           :p (fn [r]
                                                ;; Post-process to
                                                ;; create the
                                                ;; component-specific
                                                ;; data from the
                                                ;; query result
                                                (let [[title] (last r)]
                                                  {:title title}))
                                           :conn conn})
                          (dom/br nil)
                          (build mouse-position #js{:q '[:find ?x ?y
                                                           :where
                                                           [?e :mouse/x ?x]
                                                           [?e :mouse/y ?y]]
                                                      :p (fn [r]
                                                           (let [[x y] (last r)]
                                                             {:x x
                                                              :y y}))
                                                      :conn conn})
                          (dom/br nil)
                          (dom/select #js{:onChange (fn [event]
                                                      (update-song-sort-field! conn (reader/read-string (.. event -target -value))))}
                                      (build "option" #js{:value :song/year} "Year")
                                      (build "option" #js{:value :song/title} "Title")
                                      (build "option" #js{:value :song/album} "Album"))
                          (build song-list #js{:q '[:find ?title ?album ?year ?sort-by
                                                      :where
                                                      [?e :song/title ?title]
                                                      [?e :song/album ?album]
                                                      [?e :song/year ?year]
                                                      [?e2 :ui/song-sort-field ?sort-by]]
                                                 :p (fn [r]
                                                      (let [sort-field (or (last (first r))
                                                                           :song/year)]
                                                        (->> r
                                                             (map #(let [[title album year sort-by] %]
                                                                     {:song/title title
                                                                      :song/album album
                                                                      :song/year  year}))
                                                             (sort-by sort-field))))
                                                 :conn conn})
                          (build mouse-circle #js{:q '[:find ?x ?y
                                                                          :where
                                                                          [?e :mouse/x ?x]
                                                                          [?e :mouse/y ?y]]
                                                                     :p (fn [r]
                                                                          (let [[x y] (last r)]
                                                                            {:x x
                                                                             :y y}))
                                                                     :conn conn})))))}))

(def schema
  {})

(def conn
  (d/create-conn schema))

(def app
  (js/React.render (js/React.createElement container #js{:conn conn}) app-el))

;;******************************************************************************
;;  Create DB, add tx listener, install demo app
;;******************************************************************************

(defn add-tx-report-listener! [conn]
  (d/listen! conn :reports
             (fn [report]
               (let [now   (.getTime (js/Date.))
                     attrs (into {} (map (fn [datum]
                                           [(.-a datum) now]) (:tx-data report)))]
                 (swap! reports conj [now attrs (:tx-data report) report])
                 (swap! attr-statuses merge attrs)))))

(defn add-tx-render-listener! [conn]
  (d/listen! conn :render
             (fn [report]
               (.forceUpdate app))))

(defn remove-tx-report-listener! [conn]
  (d/unlisten! conn :reports))

(defn remove-tx-render-listener! [conn]
  (d/unlisten! conn :render))

(add-tx-report-listener! conn)
(add-tx-render-listener! conn)

(defn mouse-move-handler [event]
  (let [scroll-top  (or (.-pageYOffset js/window)
                        (.-scrollTop js/document)
                        (.-scrollTop js/document.body))
        scroll-left (or (.-pageXOffset js/window)
                        (.-scrollLeft js/document)
                        (.-scrollLeft js/document.body))
        top         (.-clientY event)
        left        (.-clientX event)]
    (d/transact! conn [{:db/id   100
                        :mouse/x (+ left scroll-left)
                        :mouse/y (+ top scroll-top)}])))

(events/listen js/window EventType/MOUSEMOVE mouse-move-handler)

;; Push some data into DS
(d/transact! conn [{:db/id 5
                    :app/started? true}])

(d/transact! conn [{:db/id 999
                    :app/title "Sul Testbed"}
                   {:db/id 10
                    :ui/song-sort-field :song/year}])
(let [freq 50]
  (js/setTimeout
   (partial (fn load-song [songs]
        (when (seq songs)
          (d/transact! conn [(first songs)])
          (js/setTimeout (partial load-song (rest songs)) freq)))
      [{:db/id -1 :song/title "Creep" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Karma Police" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "No Surprises" :song/album "Ok Computer" :song/year 2009}
       {:db/id -1 :song/title "Paranoid Android" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "High And Dry" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Everything In Its Right Place" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Fake Plastic Trees" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Idioteque" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Let Down" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Airbag" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Lucky" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Exit Music (For A Film)" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Street Spirit (Fade Out)" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Just" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "All I Need" :song/album "Live In Paris 2nd Night (Bootleg)" :song/year 2008}
       {:db/id -1 :song/title "Reckoner" :song/album "Live In Paris 2nd Night (Bootleg)" :song/year 2008}
       {:db/id -1 :song/title "Subterranean Homesick Alien" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "The National Anthem" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Pyramid Song" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Jigsaw Falling Into Place" :song/album "Live In Paris 2nd Night (Bootleg)" :song/year 2008}
       {:db/id -1 :song/title "Nude" :song/album "Live In Paris 2nd Night (Bootleg)" :song/year 2008}
       {:db/id -1 :song/title "15 Step" :song/album "Live In Paris 2nd Night (Bootleg)" :song/year 2008}
       {:db/id -1 :song/title "My Iron Lung" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Kid A" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Climbing Up The Walls" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "House Of Cards" :song/album "Live In Paris 2nd Night (Bootleg)" :song/year 2008}
       {:db/id -1 :song/title "Optimistic" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Bodysnatchers" :song/album "Live In Paris 2nd Night (Bootleg)" :song/year 2008}
       {:db/id -1 :song/title "The Bends" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "How To Disappear Completely" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Electioneering" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Knives Out" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "The Tourist" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Fitter Happier" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Faust Arp" :song/album "Live In Paris 2nd Night (Bootleg)" :song/year 2008}
       {:db/id -1 :song/title "I Might Be Wrong" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Planet Telex" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Videotape" :song/album "Live In Paris 2nd Night (Bootleg)" :song/year 2008}
       {:db/id -1 :song/title "Treefingers" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Morning Bell" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "In Limbo" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Bones" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Black Star" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Motion Picture Soundtrack" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "You And Whose Army?" :song/album "Radiohead (Boxset)" :song/year 2007}
       {:db/id -1 :song/title "Kid A's" :song/album "Radiohead (Boxset)" :song/year 2006}])
   freq))

;;******************************************************************************
;;  Console helpers
;;******************************************************************************

(defn ^:export add-song [title year]
  (d/transact! conn
               [{:db/id -1 :song/title title :song/album "User Album" :song/year year}]))

(defn ^:export set-title! [title]
  (d/transact! conn
               [{:db/id 1 :app/title title}]))

(defn ^:export report-count []
  (count @reports))

(defn ^:export reports-pr-count []
  (pr-str (mapv drop-last @reports)))

(defn ^:export restore-point! [n]
  (reset! conn (:db-before (last (nth @reports n))))
  (reset! attr-statuses {})
  (.forceUpdate app))

(defn ^:export show-statuses []
  (print (pr-str @attr-statuses)))

(defn ^:export replay-all-reports! []
  (reset! attr-statuses {})
  (.requestAnimationFrame js/window
                          (partial (fn helper [states]
                                     (when (seq states)
                                       (let [now      (.getTime (js/Date.))
                                             [t
                                              attrs
                                              tx-data
                                              report] (first states)
                                             attrs    (into {} (mapv (fn [[k v]]
                                                                       [k now]) attrs))]
                                         (swap! attr-statuses merge attrs)
                                         (reset! conn (:db-after (last (first states))))
                                         (.forceUpdate app)
                                         (.requestAnimationFrame js/window
                                                                 (partial helper (rest states))))))
                                   @reports)))

(defn ^:export replay-all-reports-with-delay! [max-step-delay]
  (reset! attr-statuses {})
  (.requestAnimationFrame js/window
                          (partial (fn helper [states time-at-last-step]
                               (when (seq states)
                                 (let [now      (.getTime (js/Date.))
                                       [t
                                        attrs
                                        tx-data
                                        report] (first states)
                                       pause    (min (- t (or time-at-last-step t)) max-step-delay)
                                       attrs    (into {} (mapv (fn [[k v]]
                                                                 [k now]) attrs))]
                                   ;; Mark the updated attrs as dirty
                                   (swap! attr-statuses merge attrs)
                                   ;; Restore the DB
                                   (reset! conn (:db-after report))
                                   (.forceUpdate app)
                                   (js/window.setTimeout
                                    #(.requestAnimationFrame js/window
                                                             (partial helper (rest states) t))
                                    pause))))
                             @reports)))

(set! (.-replayAllReports js/window) replay-all-reports!)

(defn datom->transactionable-data [datom]
  (let [intermediate (select-keys datom [:e :a :v :tx :added])]
    {:db/id            (:e intermediate)
     (:a intermediate) (:v intermediate)}))

(defn load-transactions! [playback]
  (doseq [step playback]
    (let [plain-data (map datom->transactionable-data (last step))]
      (d/transact! conn plain-data))))

;; Super hacky, but need this to reset the tx-timings post-reload
(defn reset-report-timings! [reports playback]
  (let [timings (mapv first playback)]
    (swap! reports
           (fn [reports]
             (vec (map-indexed (fn [idx [t & report]]
                                 (if (< idx (count timings))
                                   (vec (concat [(nth timings idx)] report))
                                   (vec (concat [t] report)))) reports))))))

(defn load-and-replay-playback! [playback-name & [max-delay]]
  (ajax/ajax-request (str playback-name ".edn") :get
                     {:handler (fn [[ok resp]]
                                 (binding [cljs.reader/*tag-table* (atom {"datascript/Datom" d/datom-from-reader})]
                                   (let [playback (reader/read-string (str resp))]
                                     (remove-tx-render-listener! conn)
                                     (reset! conn (d/empty-db schema))
                                     (reset! attr-statuses {})
                                     (reset! reports [])
                                     (load-transactions! playback)
                                     (reset-report-timings! reports playback)
                                     (add-tx-render-listener! conn))
                                   (if max-delay
                                     (replay-all-reports-with-delay! max-delay)
                                     (replay-all-reports!))))
                      :error-handler (fn [resp]
                                       (print "Error loading playback: " resp))
                      :format (ajax/raw-format)
                      :response-format (ajax/raw-format)}))
