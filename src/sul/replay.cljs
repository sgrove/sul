(ns sul.replay
  (:require [ajax.core :as ajax :refer [GET POST]]
            [cljs.reader :as reader]
            [datascript :as d]))

;; Declare this here because of the slightly hacky way I'm calling out
;; from the components
(declare replay-all-reports!
         replay-all-reports-with-delay!
         load-and-replay-playback!)

(defn report-history-info! [sul]
  (print "index pointing at: " (:sul/current-history-index @sul) " from states: " (:sul/history-indices @sul)))

(defn add-tx-report-listener! [conn sul]
  (let [reports        (:sul/reports @sul)
        attr-statuses  (:sul/statuses @sul)]
    (print "add-tx-report-listener! " (pr-str (keys @sul)))
    (print "report: " (pr-str (type reports)))
    (d/listen! conn :reports
               (fn [report]
                 (let [in-undo-phase? (:sul/in-undo-phase? @sul)
                       now            (.getTime (js/Date.))
                       attrs          (into {} (map (fn [datum]
                                                      [(.-a datum) now]) (:tx-data report)))]
                   (when-not (get-in report [:tx-meta :transient?])
                     (swap! reports conj [now attrs (:tx-data report) report]))
                   (swap! attr-statuses merge attrs)
                   (when (get-in report [:tx-meta :undo?])
                     (if in-undo-phase?
                       ;; Drop all future undo-states from this point
                       (do
                         (let [[p] (:sul/current-history-index @sul)]
                           (swap! sul (fn [old-state]
                                        (-> old-state
                                            (update-in [:sul/history-indices] (comp vec (partial take p)))
                                            (update-in [:sul/history-indices] conj (count @reports))
                                            (assoc :sul/in-undo-phase? false))))))
                       ;; Continue appending undo states
                       (swap! sul update-in [:sul/history-indices] conj (count @reports)))
                     (swap! sul assoc-in [:sul/current-history-index] [(count (:sul/history-indices @sul))]))
                   (print "Now have " (count @reports) " previous states, index pointing at: " (:sul/current-history-index @sul) " from states: " (:sul/history-indices @sul)))))))

#_(defn ^:export restore-point! [n]
  (reset! conn (:db-before (last (nth @reports n))))
  (reset! attr-statuses {})
  (.forceUpdate app))

(defn restore-point! [state idx-path]
  (let [old-conn       (:sul/conn @state)
        idx            (get-in (:sul/history-indices @state) idx-path)
        state-at-point (last (get-in @(:sul/reports @state) [idx]))]
    (when state-at-point
      (reset! old-conn (:db-before state-at-point))
      (print (:sul/current-history-index @state))
      (swap! state (fn [old-state]
                     (-> old-state
                         (assoc :sul/current-history-index idx-path)
                         (assoc :sul/in-undo-phase? true)))))))

#_(defn ^:export show-statuses []
  (print (pr-str @attr-statuses)))

(defn ^:export replay-all-reports! [sul-state]
  (let [attr-statuses (:sul/statuses sul-state)
        conn          (:sul/conn sul-state)
        app           (:sul/app sul-state)
        reports       (:sul/reports sul-state)]
    (print "Replaying " (count @reports) "Previous states")
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
                                     ;;(.forceUpdate app)
                                     (print "Updating app...")
                                     (.requestAnimationFrame js/window
                                                             (partial helper (rest states))))))
                               @reports))))

(defn ^:export replay-all-reports-with-delay! [sul-state max-step-delay]
  (let [attr-statuses (:sul/statuses sul-state)
        conn          (:sul/conn sul-state)
        app           (:sul/app sul-state)
        reports       (:sul/reports sul-state)]
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
                                     (js/window.setTimeout
                                      #(.requestAnimationFrame js/window
                                                               (partial helper (rest states) t))
                                      pause))))
                               @reports))))

(set! (.-replayAllReports js/window) replay-all-reports!)

(defn datom->transactionable-data [datom]
  (let [intermediate (select-keys datom [:e :a :v :tx :added])]
    {:db/id            (:e intermediate)
     (:a intermediate) (:v intermediate)}))

(defn load-transactions! [conn playback]
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

(defn load-and-replay-playback! [sul-state playback-name & [max-delay]]
  (let [attr-statuses (:sul/statuses sul-state)
        conn          (:sul/conn sul-state)
        app           (:sul/app sul-state)
        reports       (:sul/reports sul-state)
        schema        (:sul/schema sul-state)]
    (ajax/ajax-request (str playback-name ".edn") :get
                       {:handler (fn [[ok resp]]
                                   (binding [cljs.reader/*tag-table* (atom {"datascript/Datom" d/datom-from-reader})]
                                     (let [playback (reader/read-string (str resp))]
                                       ;;(remove-tx-render-listener! conn)
                                       (reset! conn (d/empty-db schema))
                                       (reset! attr-statuses {})
                                       (reset! reports [])
                                       (load-transactions! conn playback)
                                       (reset-report-timings! reports playback)
                                       ;;(add-tx-render-listener! conn)
                                       )
                                     (if max-delay
                                       (replay-all-reports-with-delay! sul-state max-delay)
                                       (replay-all-reports! sul-state))))
                        :error-handler (fn [resp]
                                         (print "Error loading playback: " resp))
                        :format (ajax/raw-format)
                        :response-format (ajax/raw-format)})))
