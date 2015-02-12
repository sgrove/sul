(defproject sul "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :jvm-opts ^:replace ["-Xms2G" "-Xmx4G" "-server"]

  :dependencies [[ankha                                          "0.1.4"]
                 [cljs-ajax                                      "0.2.6"]
                 [cljsjs/react                                   "0.12.2-5"]
                 [datascript                                     "0.9.0"]
                 [ff-om-draggable                                "0.0.18"]
                 [garden                                         "1.2.5"]
                 [hiccup                                         "1.0.5"]
                 [org.clojure/clojure                            "1.6.0"]
                 [org.clojure/clojurescript                      "0.0-2760" :scope "provided"]
                 [org.clojure/core.async                         "0.1.346.0-17112a-alpha" :scope "provided"]
                 [org.clojure/google-closure-library             "0.0-20140718-946a7d39"]
                 [org.clojure/google-closure-library-third-party "0.0-20140718-946a7d39"]
                 [ring/ring-jetty-adapter                        "1.3.2"]
                 [rm-hull/ring-gzip-middleware                   "0.1.7"]
                 [sablono                                        "0.3.1"]]

  :plugins [[lein-cljsbuild "1.0.4"]]

  :source-paths ["src"
                 "examples/email/src"]

  :clean-targets ["email_out" "sul.email.js"
                  "out" "sul.dev.js" "sul.prod.js"]

  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src"]
                        :compiler     {:output-to     "sul.dev.js"
                                       :output-dir    "out"
                                       :optimizations :none
                                       :source-map    true}}
                       {:id           "prod"
                        :source-paths ["src"]
                        :compiler     {:pretty-print  false
                                       :output-dir    "prod_out"
                                       :optimizations :advanced
                                       :output-to     "sul.js"
                                       :preamble      ["META-INF/resources/webjars/react/0.12.0/react.min.js"]
                                       :externs       ["datascript/externs.js"
                                                       "react/externs/react.js"]}}
                       ;; Examples
                       {:id           "email"
                        :source-paths ["src"
                                       "examples/email/src"]
                        :compiler     {:preamble      ["react/react.min.js"]
                                       :output-to     "sul.email.dev.js"
                                       :output-dir    "email_out"
                                       :pretty-print  true
                                       :optimizations :none
                                       :source-map    true}}
                       {:id           "email-prod"
                        :source-paths ["src"
                                       "examples/email/src"]
                        :compiler     {:preamble      ["react/react.min.js"]
                                       :output-to     "sul.email.prod.js"
                                       :output-dir    "email_prod_out"
                                       :pretty-print  false
                                       :optimizations :advanced
                                       :source-map    true?}}]})
