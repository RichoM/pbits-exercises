(ns pbits-exercises.main
  (:require [clojure.core.async :as a :refer [go <!]]
            [cljs.core.async.interop :refer [p->c] :refer-macros [<p!]]
            [clojure.string :as str]
            [cljs.reader :as reader]
            [oops.core :refer [oget oset! ocall! ocall!+]]
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
  (go-try (<? (write-file! (join-path SOLUTIONS-PATH (str name ".edn"))
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
              (<! (b/alert "ERROR" "El archivo seleccionado NO es un proyecto de Physical Bits válido."))
              (let [duplicated? (<! (check-for-duplicates! file-path))]
                (if duplicated?
                  (<! (b/alert "ERROR" "El archivo seleccionado ya fue cargado como solución a un ejercicio. Intente nuevamente."))
                  (let [solutions (<? (read-solutions-file! exercise))
                        solution-path (join-path SOLUTIONS-PATH (str name "." (count (:attempts solutions)) ".phb"))]
                    (<? (copy-file! file-path solution-path))
                    (<? (write-solutions-file! exercise
                                               (update solutions :attempts conj
                                                       {:ts (js/Date.)
                                                        :file solution-path})))
                    (<! (b/alert "Éxito" "La solución se guardó correctamente."))
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

(def main-container
  (crate/html
   [:div.row.fullheight
    [:div#side-bar-container.col-2.scrollable.fullheight
     [:ul#exercises-bar.list-group.py-2]]
    [:div#current-exercise-container.col.p-3.scrollable.fullheight
     [:div.row
      [:div#current-exercise-solved-mark.col]
      [:div.col-auto [:h1#current-exercise-name.text-center]]
      [:div.col]]
     [:hr]
     [:div#current-exercise-contents]
     [:hr]
     [:div.row.g-1
      [:div.col-auto
       [:button#load-solution-btn.btn.btn-lg.btn-primary
        {:type "button" :data-bs-toggle "button"}
        [:i.fa-solid.fa-upload.me-2]
        "Cargar solución"]]
      [:div.col]
      [:div.col-auto
       [:button#next-exercise-btn.btn.btn-lg.btn-success
        {:type "button" :data-bs-toggle "button"}
        "Siguiente"
        [:i.fa-solid.fa-arrow-right.ms-2]]]]]]))

(defn update-ui! [dirty-contents?]
  (go (let [exercises (<! (load-exercises!))
            first-unsolved (first (remove :solved? exercises))
            current-exercise (<! (read-exercise! (nth exercises
                                                      (get @state :current-exercise -1)
                                                      (or first-unsolved (first exercises)))))]
        (doto (get-element-by-id "current-exercise-solved-mark")
          (oset! :innerHTML "")
          (ocall! :appendChild
                  (crate/html (if (:solved? current-exercise)
                                [:i.fs-1.text-success.fa-solid.fa-circle-check]
                                [:i.fs-1.text-danger.fa-solid.fa-circle-xmark]))))
        (oset! (get-element-by-id "current-exercise-name")
               :innerText (:name current-exercise))
        (when dirty-contents?
          (oset! (get-element-by-id "current-exercise-container") :scrollTop 0)
          (doto (get-element-by-id "current-exercise-contents")
            (oset! :innerHTML "")
            (ocall! :appendChild (crate/html (:contents current-exercise)))))
        (doto (b/replace-with-clone! (get-element-by-id "load-solution-btn"))
          (b/on-click #(load-solution-attempt! current-exercise)))
        (doto (b/replace-with-clone! (get-element-by-id "next-exercise-btn"))
          (oset! :hidden (>= (:idx current-exercise)
                             (dec (count exercises))))
          (oset! :disabled (not (:solved? current-exercise)))
          (b/on-click #(swap! state assoc :current-exercise
                              (inc (:idx current-exercise)))))
        (let [exercises-bar (get-element-by-id "exercises-bar")]
          (doseq [{:keys [idx name solved?]} exercises]
            (let [element-id (str "exercise-" idx "-btn")
                  update-btn! (fn [btn]
                                (oset! btn :disabled (> idx (get first-unsolved :idx ##Inf)))
                                (if (= idx (:idx current-exercise))
                                  (doto btn
                                    (ocall! :classList.add "active")
                                    (ocall! :classList.remove "list-group-item-success")
                                    (ocall! :classList.remove "list-group-item-primary"))
                                  (doto btn
                                    (ocall! :classList.remove "active")
                                    (ocall!+ (if solved? :classList.add :classList.remove) "list-group-item-success")
                                    (ocall!+ (if solved? :classList.remove :classList.add) "list-group-item-primary"))))]
              (if-let [btn (ocall! exercises-bar :querySelector (str "#" element-id))]
                (update-btn! btn)
                (let [btn (crate/html [:button.list-group-item.list-group-item-action
                                       {:id element-id :type "button"} name])]
                  (ocall! exercises-bar :appendChild btn)
                  (b/on-click btn #(swap! state assoc :current-exercise idx))
                  (update-btn! btn)))))
          (doseq [to-remove (filter #(let [idx (js/parseInt (second (str/split (oget % :id) "-")))]
                                       (>= idx (count exercises)))
                                    (oget exercises-bar :childNodes))]
            (ocall! to-remove :remove))))))

(defn init []
  (go (doto (get-element-by-id "main-container")
        (oset! :innerHTML "")
        (ocall! :appendChild main-container))
      (add-watch state ::ui-update
                 (fn [_ _ prev curr]
                   (update-ui! (not= (:current-exercise prev)
                                     (:current-exercise curr)))))
      (<! (update-ui! true))
      (hide-overlay!)))

(defn ^:dev/before-load-async reload-begin* [done]
  (go (remove-watch state ::ui-update)
      (b/hide-modals)
      (done)))

(defn ^:dev/after-load-async reload-end* [done]
  (go (<! (init))
      (done)))
