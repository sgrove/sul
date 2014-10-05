(defproject sul "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[cljs-ajax "0.2.6"]
                 [com.facebook/react "0.11.2"]
                 [datascript "0.4.1"]
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2356"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "sul.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}
             {:id           "prod"
              :source-paths ["src"]
              :compiler     {:pretty-print  false
                             :output-dir    "prod_out"
                             :optimizations :advanced
                             :output-to     "sul.js"
                             :preamble      ["react/react.min.js"]
                             :externs       ["datascript/externs.js"
                                             "react/externs/react.js"]}}]})
