(ns sul.macros
  (:require [clojure.string :as s]))

(defn camel-case [n]
  (-> n 
      (s/split #"[ |-]")
      (->>
       (map s/capitalize)
       s/join)))

(defn normalize-fn [method-name body map?]
  `(~method-name ~(first body)
                 ~@(drop 1 body)))

(defmacro defcom [name args & body]
  ;; TODO: Handle open-ended protocols that user might want to add
  (let [map?       (map? (first body))
        body       (if map?
                     (first body)
                     {:render `([~'_] ~@body)})
        add-method (fn [protocol method-name body]
                     (list protocol (normalize-fn method-name body map?)))
        dname      (if-let [display-name (:display-name (meta name))]
                     `([~'_] ~display-name)
                     `([~'_] ~(str name))
                     )
        methods    (merge {'display-name dname}
                          body)
        lookup     {'display-name ['om/IDisplayName 'display-name]
                    'will-mount   ['om/IWillMount 'will-mount]
                    'did-mount    ['om/IDidMount 'did-mount]
                    'will-unmount ['om/IWillUnmount 'will-mount]
                    'did-unmount  ['om/IDidUnmount 'did-unmount]
                    'render       ['om/IRender 'render []]}]
    `(defn ~name ~args
       (reify
         ~@(mapcat (fn helper [[method-name method-body]]
                     (let [[pname mname] (get lookup method-name)]
                       (add-method pname mname method-body))) methods)))))

(defmacro defsul [name args & body]
  ;; TODO: Handle open-ended protocols that user might want to add
  (let [map?       (map? (first body))
        body       (if map?
                     (first body)
                     {:render `(fn [] ~@body)})
        add-method (fn [protocol method-name body]
                     (list protocol (normalize-fn method-name body map?)))
        dname      (if-let [display-name (:display-name (meta name))]
                     `(fn [] ~display-name)
                     `(fn [] ~(camel-case (str name))))
        q           (or (and map? (:q body))
                        (:q (meta name)))
        methods    (merge {:display-name dname
                           :q            q}
                          body)]
    `(defn ~name ~args
       (com/sul-com ~(first args)
        ~methods))))
