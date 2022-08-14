(ns pbits-exercises.main
  (:require [clojure.core.async :as a :refer [go <!]]
            [cljs.core.async.interop :refer [p->c] :refer-macros [<p!]]
            [oops.core :refer [oget oset! ocall!]]
            [crate.core :as crate]
            [utils.bootstrap :as b]))

(enable-console-print!)

(def dialog (oget (js/require "@electron/remote") :dialog))
(def fs (oget (js/require "fs") :promises))

(defn show-open-dialog! [options]
  (p->c (ocall! dialog :showOpenDialog (clj->js options))))

(defn read-file! [file-path]
  (p->c (ocall! fs :readFile file-path "utf-8")))

(defn get-element-by-id [id]
  (js/document.getElementById id))

(defn load-solution-attempt []
  (go (let [result (<! (show-open-dialog!
                        {:filters [{:name "Physical Bits project"
                                    :extensions ["phb"]}]
                         :properties ["openFile"]}))
            out (get-element-by-id "test-output")]
        (js/console.log result)
        (if (oget result :canceled)
          (oset! out :innerText "CANCELED!")
          (let [[file-path] (oget result :filePaths)
                contents (<! (read-file! file-path))]
            (js/console.log (js/JSON.parse contents))
            (oset! out :innerText contents))))))

(defn init []
  (print "RICHO!")
  (doto js/document.body
    (oset! :innerHTML "")
    (.appendChild (crate/html
                   [:div
                    [:button#open-file-btn.btn.btn-lg.btn-outline-dark.rounded-pill
                     {:type "button" :data-bs-toggle "button"}
                     "Cargar solución"]
                    [:div#test-output]])))
  (doto (get-element-by-id "open-file-btn")
    (b/on-click load-solution-attempt)))


(defn ^:dev/before-load-async reload-begin* [done]
  (go (b/hide-modals)
      (done)))

(defn ^:dev/after-load-async reload-end* [done]
  (go (init)
      (done)))

(comment

  (init)

  (go (let [contents (<! (read-file! "main.js"))]
        (print contents)))
  

  (oset! js/document.body :innerText "RICHO CAPO!"))