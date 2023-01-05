(ns pbits-exercises.exercises-macros
  (:require [clojure.java.io :as io]
            [clojure.string :as str]))

(def EXERCISES-PATH "public/main/exercises")

(defmacro read-all-exercises* []
  (let [data (->> (file-seq (io/file EXERCISES-PATH))
                  (filter (memfn isFile))
                  (filter #(str/ends-with? % ".edn"))
                  (mapv (fn [file]
                          (let [[idx name] (str/split (.getName file) #"\.")]
                            {:idx (Integer/parseInt idx)
                             :name (str/trim name)
                             :contents (read-string (slurp file))
                             :solved? true}))))]
    `(identity ~data)))
