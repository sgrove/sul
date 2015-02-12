(ns sul.core
  (:require [datascript :as d]
            [sul.component :as com]
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
  (atom {:sul/schema   (:schema opts)
         :sul/conn     (:conn opts (d/create-conn schema))
         :sul/reports  (:reports opts (atom []))
         :sul/statuses (:statuses opts (atom {}))}))

(def app
  (sul-state {:schema schema}))

(defn install! [f state el]
  (let [app      (js/React.render (js/React.createElement (f @state)) el)]
    (print state)
    (swap! state assoc :sul/app app)
    (let [state @state
          conn     (:sul/conn state)
          reports  (:sul/reports state)
          statuses (:sul/statuses state)]
      (when (and reports statuses)
        (replay/add-tx-report-listener! conn state))
      (com/add-tx-render-listener! conn app))))

;;(install! basic/container app (js/document.getElementById "app"))
;;(basic/setup! (:sul/conn app))

