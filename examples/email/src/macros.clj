(ns examples.email.macros)

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
