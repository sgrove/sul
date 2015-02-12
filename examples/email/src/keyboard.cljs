(ns sul.examples.email.keyboard
  (:require [clojure.string :as string]))

(def code->key
  "map from a character code (read from events with event.which)
  to a string representation of it.
  Only need to add 'special' things here."
  {8   "backspace"
   13  "enter"
   16  "shift"
   17  "ctrl"
   18  "alt"
   27  "esc"
   37  "left"
   38  "up"
   39  "right"
   40  "down"
   46  "del"
   91  "meta"
   32  "space"
   186 ";"
   191 "/"
   219 "["
   221 "]"
   187 "="
   189 "-"
   190 "."})

(defn track-key-state [cast! direction suppressed-key-combos event]
  (let [meta?          (when (.-metaKey event) "meta")
        shift?         (when (.-shiftKey event) "shift")
        ctrl?          (when (.-ctrlKey event) "ctrl")
        alt?           (when (.-altKey event) "alt")
        char           (or (get code->key (.-which event))
                           (js/String.fromCharCode (.-which event)))
        tokens         [shift? meta? ctrl? alt? char]
        key-string     (string/join "+" (filter identity tokens))
        target-el-type (.. event -target -type)
        input-el?      (#{"text" "textarea" "input"} target-el-type)]
    (when (and (get suppressed-key-combos key-string)
               ;; Example problem: Backspace causes the browser to
               ;; navigate to the previous page normally. We want to
               ;; hijack backspace to prevent that default behavior,
               ;; and instead cause it delete selected layers. We
               ;; therefore add it to the suppressed key-combos (along
               ;; with meta-a, etc. that we make use of).  But now
               ;; backspace (and meta-a, etc.) doesn't work when
               ;; typing in textareas/text-inputs, because the default
               ;; behavior there is to delete the selected text (or
               ;; highlight it with meta-a, etc.).

               ;; As a hack, we .preventDefault on the event iff it's
               ;; listed in suppressed-key-combos *and* the currently
               ;; active element in the browser is not some kind of
               ;; text-input (in which case, none of our key shortcuts
               ;; should work anyway).
               (not input-el?))
      (.preventDefault event))
    (let [human-name (get code->key (.-which event))]
      (let [key-name (keyword (str human-name "?"))]
        (cast! :key-state-changed [{:key-name-kw key-name
                                    :code        (.-which event)
                                    :depressed?  (= direction :down)
                                    :meta?       meta?
                                    :shift?      shift?
                                    :ctrl?       ctrl?
                                    :alt?        alt?
                                    :char        char
                                    :repeat?     (.-repeat event)}])))))
