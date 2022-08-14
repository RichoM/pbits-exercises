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

(defn main-container []
  (crate/html
   [:div#main-container.container-fluid.fullheight
    [:div.row.fullheight
     [:div#side-bar.col-2.scrollable.fullheight
      [:ul.list-group.py-2
       [:button.list-group-item.list-group-item-action.active {:type "button" :aria-current "true"} "Ejercicio 1"]
       (map (fn [i] [:button.list-group-item.list-group-item-action {:type "button"}
                     (str "Ejercicio " i)])
            (range 2 10))
       (map (fn [i] [:button.list-group-item.list-group-item-action {:disabled "true"} (str "Ejercicio " i)])
            (range 10 60))]]
     [:div.col.p-3.scrollable.fullheight
      [:h1.text-center "Ejercicio 1"]
      [:hr]
      [:div.d-grid.gap-2
       [:h3 "Consigna"]
       [:p "Prender todos los leds la mitad de la intensidad máxima, elegir el valor a ojo para que la intensidad de la luz se aproxime al valor deseado (la relación no es lineal)"]
       [:table.table.table-striped.table-sm.w-50
        [:thead
         [:th.col "Componente"]
         [:th.col "Pin"]]
        [:tbody
         [:tr [:td "LED rojo"] [:td "D11"]]
         [:tr [:td "LED amarillo"] [:td "D10"]]
         [:tr [:td "LED verde"] [:td "D9"]]]]
       [:h4 "Ejemplo"]
       [:img.img-fluid {:src "imgs/debugger.gif"}]]
      [:hr]
      [:div.row.g-1
       
       [:div.col-auto
        [:button#open-file-btn.btn.btn-lg.btn-primary
         {:type "button" :data-bs-toggle "button"}
         [:i.fa-solid.fa-upload.me-2]
         "Cargar solución"]]
       [:div.col]
       [:div.col-auto
        [:button#next-exercise-btn.btn.btn-lg.btn-success
         {:type "button" :data-bs-toggle "button" :disabled "true"}
         "Siguiente"
         [:i.fa-solid.fa-arrow-right.ms-2]]]]
      [:pre#test-output]]]]))

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
                contents (<! (read-file! file-path))
                json-contents (js/JSON.parse contents)]
            (js/console.log json-contents)
            (oset! out :innerText (oget json-contents :code)))))))

(defn init []
  (print "RICHO!")
  (doto js/document.body
    (oset! :innerHTML "")
    (.appendChild (main-container)))
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