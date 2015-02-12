(ns sul.examples.email.core
  (:require [datascript :as d]
            [sul.component :as com]
            [sul.examples.email.components.email :as email-com]
            [sul.examples.email.keyboard :as keyq]
            [sul.replay :as replay]))

;; Every Sul app needs:
;; attr-statuses (to track invalid queries)
;; 

(enable-console-print!)

(def schema
  {})

(def conn
  (d/create-conn schema))

;; Used for knowing when an attribute was last updated in the db, used
;; for query invalidation. Just a temporary implementation of the
;; bigger ideas at
;; https://github.com/allgress/datascript/compare/tonsky:master...master
(def attr-statuses
  ;; :attr => ts-at-last-invalidation
  (atom {}))

(def reports
  (atom []))

(defn sul-state [opts]
  {:pre [(:schema opts)]}
  (atom {:sul/schema                (:schema opts)
         :sul/conn                  (:conn opts (d/create-conn schema))
         :sul/reports               (:reports opts (atom []))
         :sul/statuses              (:statuses opts (atom {}))
         :sul/history-indices       []
         :sul/current-history-index [0]
         :sul/in-undo-phase?        false}))

(def app-state
  (sul-state {:schema schema}))

(defn install! [f state el]
  (print "State: " (pr-str (type state)))
  (email-com/setup! (:sul/conn @app-state))
  (let [app                   (js/React.render (js/React.createElement (f @state)) el)
        cast!                 (fn [msg [data]]
                                (let [{:keys [code key-name-kw
                                              depressed? repeat?]} data
                                      history-idx (:sul/current-history-index @state)
                                      id     (* code 100000)
                                      datoms (if (= :up msg)
                                               [[:db.fn/retractEntity id]]
                                               [[:db/add id :key/code code]
                                                [:db/add id :key/name key-name-kw]
                                                [:db/add id :key/depressed? depressed?]])]
                                  (d/transact! (:sul/conn @state) datoms)
                                  (print "Keyboard check: ")
                                  (replay/report-history-info! state)
                                  (cond
                                   (and (:shift? data)
                                        (:meta? data)
                                        (= (:char data) "Z")) (let [history-idx-path [(inc (first history-idx))]
                                                                    idx-path [(get-in (:sul/history-indices @state) history-idx-path)]]
                                                                (print "Redo idx-path: " idx-path)
                                                                (when-let [state-at-point (last (get-in @(:sul/reports @state) idx-path))]
                                                                  (print "Incing idx path " (boolean state-at-point))
                                                                  (swap! state assoc-in [:sul/current-history-index 0]
                                                                         (inc (first history-idx)))
                                                                  (swap! state assoc :sul/in-undo-phase? true)
                                                                  (replay/restore-point! state [(inc (first history-idx))])
                                                                  (replay/report-history-info! state)))
                                   (and (:meta? data)
                                        (= (:char data) "Z")
                                        (< -1 (dec (first history-idx)))) (do
                                                                            
                                                                    (swap! state assoc-in [:sul/current-history-index 0]
                                                                           (dec history-idx))
                                                                    (swap! state assoc :sul/in-undo-phase? true)
                                                                    (print "Undo! (phase? " (:sul/in-undo-phase? @state))
                                                                    (replay/restore-point! state [(dec (first history-idx))])
                                                                    (replay/report-history-info! state))))
                                (js/console.log "Some message: " (pr-str msg) (pr-str data)))
        suppressed-key-combos #{"meta+A" "meta+D" "meta+Z" "shift+meta+Z" "backspace"
                                "shift+meta+D" "up" "down" "left" "right" "meta+G"}
        handle-key-down       (partial keyq/track-key-state cast! :down suppressed-key-combos)
        handle-key-up         (partial keyq/track-key-state cast! :up   suppressed-key-combos)]
    (js/document.addEventListener "keydown" handle-key-down false)
    (js/document.addEventListener "keyup" handle-key-up false)
    (print state)
    (swap! state assoc :sul/app app)
    (let [conn     (:sul/conn @state)]
      (print "Install report listener?")
      (when (and (:sul/reports @state)
                 (:sul/statuses @state))
        (print "State: " (pr-str (type state)))
        (replay/add-tx-report-listener! conn state))
      (com/add-tx-render-listener! conn app)
      (set! (.-restoreStateAtPoint js/window) (fn [idx] (replay/restore-point! state idx))))))

(install! email-com/container app-state (js/document.getElementById "app"))

(set! (.-touch js/window)
      (fn [v d?]
        (clj->js
         (if d?
           @v
           v))))

(set! (.-getHistory js/window)
      (fn []
        (pr-str (keys @app-state))))
