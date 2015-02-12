(ns sul.utils)

;;******************************************************************************
;;  Debug helpers
;;******************************************************************************

(defn rand-color
  "Useful to visually see if a component has been rerendered"
  []
  (let [r (rand-int 255)
        g (rand-int 255)
        b (rand-int 255)]
    (str "rgb(" r "," g "," b ")")
    "white"))
