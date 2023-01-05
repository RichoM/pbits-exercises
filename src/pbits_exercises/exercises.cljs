(ns pbits-exercises.exercises
  (:require [pbits-exercises.exercises-macros :as m]
            [clojure.core.async :as a :refer [go <!]]))

(defn read-all-exercises []
  (m/read-all-exercises*))