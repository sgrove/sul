(ns sul.dom
  (:refer-clojure :exclude [map meta time]))

;; Just completely lifted from
;; https://github.com/swannodette/om/blob/master/src/om/dom.clj

(def tags
  '[a
    abbr
    address
    area
    article
    aside
    audio
    b
    base
    bdi
    bdo
    big
    blockquote
    body
    br
    button
    canvas
    caption
    cite
    code
    col
    colgroup
    data
    datalist
    dd
    del
    dfn
    div
    dl
    dt
    em
    embed
    fieldset
    figcaption
    figure
    footer
    form
    h1
    h2
    h3
    h4
    h5
    h6
    head
    header
    hr
    html
    i
    iframe
    img
    ins
    kbd
    keygen
    label
    legend
    li
    link
    main
    map
    mark
    marquee
    menu
    menuitem
    meta
    meter
    nav
    noscript
    object
    ol
    optgroup
    output
    p
    param
    pre
    progress
    q
    rp
    rt
    ruby
    s
    samp
    script
    section
    select
    small
    source
    span
    strong
    style
    sub
    summary
    sup
    table
    tbody
    td
    tfoot
    th
    thead
    time
    title
    tr
    track
    u
    ul
    var
    video
    wbr
    
    ;; svg
    circle
    ellipse
    g
    line
    path
    polyline
    rect
    svg
    text
    defs
    linearGradient
    polygon
    radialGradient
    stop
    tspan])

(defn ^:private gen-react-dom-inline-fn [tag]
  `(defmacro ~tag [opts# & children#]
     `(~'~(symbol "js" (str "React.createElement")) (name tag) ~opts# ~@children#)))

(defmacro ^:private gen-react-dom-inline-fns []
  `(do
     ~@(clojure.core/map gen-react-dom-inline-fn tags)))

(gen-react-dom-inline-fns)

(defn ^:private gen-react-dom-fn [tag]
  `(defn ~tag [opts# & children#]
     (.apply ~(symbol "js" "React.createElement") nil (cljs.core/into-array (cons ~(name tag) (cons opts# children#))))))

(defmacro ^:private gen-react-dom-fns []
  `(do
     ~@(clojure.core/map gen-react-dom-fn tags)))
