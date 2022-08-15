(ns pbits-exercises.main
  (:require [clojure.core.async :as a :refer [go <!]]
            [cljs.core.async.interop :refer [p->c] :refer-macros [<p!]]
            [clojure.string :as str]
            [cljs.reader :as reader]
            [oops.core :refer [oget oset! ocall!]]
            [crate.core :as crate]
            [utils.bootstrap :as b]
            [utils.async :refer [go-try <?]]))

(def electron-remote (js/require "@electron/remote"))
(def dialog (oget electron-remote :dialog))
(def fs (oget (js/require "fs") :promises))
(def path (js/require "path"))
(def app (oget electron-remote :app))


(enable-console-print!)

(defn join-path [parent child]
  (ocall! path :resolve parent child))

(def EXERCISES-PATH (join-path (ocall! app :getAppPath) "public/main/exercises"))
(def SOLUTIONS-PATH (join-path (ocall! app :getAppPath) "solutions"))

(defonce state (atom {}))

(defn get-element-by-id [id]
  (js/document.getElementById id))

(defn show-open-dialog! [options]
  (p->c (ocall! dialog :showOpenDialog (clj->js options))))

(defn write-file! [file-path data]
  (p->c (ocall! fs :writeFile file-path data)))

(defn read-file! [file-path]
  (p->c (ocall! fs :readFile file-path "utf-8")))

(defn try-read-file! [file-path]
  (go (try (<? (read-file! file-path))
           (catch :default _ nil))))

(defn copy-file! [src-path dest-path]
  (p->c (ocall! fs :copyFile src-path dest-path)))

(defn read-dir! [dir-path]
  (p->c (ocall! fs :readdir dir-path)))

(defn make-dir! [dir-path]
  (p->c (ocall! fs :mkdir dir-path)))

(defn try-make-dir! [dir-path]
  (go (try (<? (make-dir! dir-path))
           (catch :default _ nil))))

(defn show-overlay! []
  (doto (get-element-by-id "overlay")
    (ocall! :classList.remove "hidden")
    (ocall! :classList.add "visible")))

(defn hide-overlay! []
  (doto (get-element-by-id "overlay")
    (ocall! :classList.remove "visible")
    (ocall! :classList.add "hidden")))

(defn read-solutions-file! [{:keys [name]}]
  (go (try
        (if-let [contents (<? (read-file! (join-path SOLUTIONS-PATH (str name ".edn"))))]
          (reader/read-string contents)
          (throw "ERROR!"))
        (catch :default _ {:attempts []}))))

(defn write-solutions-file! [{:keys [name]} solutions]
  (go (<! (write-file! (join-path SOLUTIONS-PATH (str name ".edn"))
                       (pr-str solutions)))))

(defn validate-phb! [file-path]
  (go (try
        (let [{:strs [blockly code]} (js->clj (js/JSON.parse (<? (read-file! file-path))))]
          (and blockly code))
        (catch :default _ false))))

(defn check-for-duplicates! [file-path]
  (go-try
   (let [result (atom false)
         contents-1 (<? (read-file! file-path))]
     (doseq [each (map (partial join-path SOLUTIONS-PATH)
                       (filter #(str/ends-with? % ".phb")
                          (<? (read-dir! SOLUTIONS-PATH))))]
       (when-let [contents-2 (<! (try-read-file! each))]
         (when (= contents-1 contents-2)
           (reset! result true))))
     @result)))

(defn show-spinner-dialog! []
  (-> (b/make-modal
       :body [:div.container.overflow-hidden
              [:div.row.text-center [:h3 "Validando solución..."]]
              [:div.row.m-1]
              [:div.row.text-center [:i.fas.fa-circle-notch.fa-spin.fa-4x]]])
      (b/show-modal {:backdrop "static"
                     :keyboard false})))

(defn load-solution-attempt! [{:keys [idx name] :as exercise}]
  (go    
    (try
      (show-overlay!)
      (let [result (<! (show-open-dialog!
                        {:filters [{:name "Physical Bits project"
                                    :extensions ["phb"]}]
                         :properties ["openFile"]}))]
        (hide-overlay!)
        (when-not (oget result :canceled)
          (show-spinner-dialog!)
          (let [[file-path] (oget result :filePaths)
                valid? (<! (validate-phb! file-path))]
            (if-not valid?
              (<! (b/alert "ERROR" "El archivo seleccionado NO es un proyecto de Physical Bits válido"))
              (let [duplicated? (<! (check-for-duplicates! file-path))]
                (if duplicated?
                  (<! (b/alert "ERROR" "El archivo seleccionado ya fue cargado como solución a un ejercicio. Intente nuevamente."))
                  (let [solutions (<! (read-solutions-file! exercise))
                        solution-path (join-path SOLUTIONS-PATH (str name "." (count (:attempts solutions)) ".phb"))]
                    (<! (copy-file! file-path solution-path))
                    (<! (write-solutions-file! exercise
                                               (update solutions :attempts conj
                                                       {:ts (js/Date.)
                                                        :file solution-path})))
                    (<! (b/alert "Éxito" "La solución se guardó correctamente"))
                    (swap! state assoc :current-exercise idx))))))))
      (catch :default error
        (js/console.error error)
        (b/alert "ERROR" "Ocurrió un error al tratar de cargar la solución. Intente nuevamente.")))))

(defn load-exercises! []
  (go
    (<! (try-make-dir! SOLUTIONS-PATH))
    (let [solved (->> (<! (read-dir! SOLUTIONS-PATH))
                      (filter #(str/ends-with? % ".edn"))
                      (map #(first (str/split % #"\.")))
                      (set))
          exercises (->> (<! (read-dir! EXERCISES-PATH))
                         (filter #(str/ends-with? % ".edn"))
                         (map (fn [file-name]
                                (let [[idx name] (str/split file-name #"\.")]
                                  {:idx (js/parseInt idx)
                                   :name (str/trim name)
                                   :file-path (join-path EXERCISES-PATH file-name)
                                   :solved? (contains? solved name)})))
                         (sort-by :idx)
                         (map-indexed (fn [idx ex] (assoc ex :idx idx)))
                         (vec))]
      exercises)))

(defn read-exercise! [exercise]
  (go (let [contents (<! (read-file! (:file-path exercise)))]
        (assoc exercise :contents (reader/read-string contents)))))


(defn build-html! []
  (go (let [exercises (<! (load-exercises!))
            first-unsolved (first (remove :solved? exercises))
            current-exercise (<! (read-exercise! (nth exercises
                                                      (get @state :current-exercise -1)
                                                      (or first-unsolved (first exercises)))))]
        (crate/html
         [:div.row.fullheight
          [:div#side-bar.col-2.scrollable.fullheight
           [:ul.list-group.py-2
            (map (fn [{:keys [idx name solved?]}]
                   (let [btn (crate/html [:button.list-group-item.list-group-item-action {:type "button"} name])]
                     (oset! btn :disabled (> idx (get first-unsolved :idx ##Inf)))
                     (if (= idx (:idx current-exercise))
                       (ocall! btn :classList.add "active")
                       (if solved?
                         (ocall! btn :classList.add "list-group-item-success")
                         (ocall! btn :classList.add "list-group-item-primary")))
                     
                     (b/on-click btn #(swap! state assoc :current-exercise idx))
                     btn))
                 exercises)]]
          [:div.col.p-3.scrollable.fullheight
           [:div.row
            [:div.col (if (:solved? current-exercise)
                        [:i.fs-1.text-success.fa-solid.fa-circle-check]
                        [:i.fs-1.text-danger.fa-solid.fa-circle-xmark])]
            [:div.col-auto [:h1.text-center (:name current-exercise)]]
            [:div.col]]
           [:hr]
           (:contents current-exercise)
           [:hr]
           [:div.row.g-1
            [:div.col-auto
             (doto (crate/html [:button#open-file-btn.btn.btn-lg.btn-primary
                                {:type "button" :data-bs-toggle "button"}
                                [:i.fa-solid.fa-upload.me-2]
                                "Cargar solución"])
               (b/on-click #(load-solution-attempt! current-exercise)))]
            [:div.col]
            (when (< (:idx current-exercise)
                     (dec (count exercises)))
              [:div.col-auto
               (doto (crate/html [:button#next-exercise-btn.btn.btn-lg.btn-success
                                  {:type "button" :data-bs-toggle "button"}
                                  "Siguiente"
                                  [:i.fa-solid.fa-arrow-right.ms-2]])
                 (oset! :disabled (not (:solved? current-exercise)))
                 (b/on-click #(swap! state assoc :current-exercise
                                     (inc (:idx current-exercise)))))])]]]))))

(defn update-ui! []
  (go (doto (get-element-by-id "main-container")
        (oset! :innerHTML "")
        (ocall! :appendChild (<! (build-html!))))))

(defn init []
  (go (hide-overlay!)
      (<! (update-ui!))

      (add-watch state ::ui-update
                 (fn [_ _ _ new]
                   (update-ui!)))))

(defn ^:dev/before-load-async reload-begin* [done]
  (go (remove-watch state ::ui-update)
      (b/hide-modals)
      (done)))

(defn ^:dev/after-load-async reload-end* [done]
  (go (<! (init))
      (done)))
