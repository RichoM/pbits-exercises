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

(defn read-solutions-file! [{:keys [name]}]
  (go (try
        (if-let [contents (<? (read-file! (join-path SOLUTIONS-PATH (str name ".edn"))))]
          (reader/read-string contents)
          (throw "ERROR!"))
        (catch :default _ {:attempts []}))))

(defn write-solutions-file! [{:keys [name]} solutions]
  (go (<! (write-file! (join-path SOLUTIONS-PATH (str name ".edn"))
                       (pr-str solutions)))))

(defn load-solution-attempt! [{:keys [idx name] :as exercise}]
  (go (let [result (<! (show-open-dialog!
                        {:filters [{:name "Physical Bits project"
                                    :extensions ["phb"]}]
                         :properties ["openFile"]}))]
        (when-not (oget result :canceled)
          (let [solutions (<! (read-solutions-file! exercise))
                [file-path] (oget result :filePaths)
                solution-path (join-path SOLUTIONS-PATH (str name "." (count (:attempts solutions)) ".phb"))]
            (<! (copy-file! file-path solution-path))
            (<! (write-solutions-file! exercise
                                       (update solutions :attempts conj
                                               {:ts (js/Date.)
                                                :file solution-path})))))
        (swap! state assoc :current-exercise idx))))


(defn load-exercises! []
  (go
    (<! (try-make-dir! SOLUTIONS-PATH))
    (let [solved (->> (<! (read-dir! SOLUTIONS-PATH))
                      (filter #(str/ends-with? % ".edn"))
                      (map #(first (str/split % #"\.")))
                      (set))
          exercises (->> (<! (read-dir! EXERCISES-PATH))
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
         [:div#main-container.container-fluid.fullheight
          [:div.row.fullheight
           [:div#side-bar.col-2.scrollable.fullheight
            [:ul.list-group.py-2
             (map (fn [{:keys [idx name]}]
                    (let [btn (crate/html [:button.list-group-item.list-group-item-action {:type "button"} name])]
                      (oset! btn :disabled (> idx (get first-unsolved :idx ##Inf)))
                      (when (= idx (:idx current-exercise))
                        (ocall! btn :classList.add "active"))
                      (b/on-click btn #(swap! state assoc :current-exercise idx))
                      btn))
                  exercises)]]
           [:div.col.p-3.scrollable.fullheight
            [:h1.text-center (:name current-exercise)]
            [:hr]
            (:contents current-exercise)
            [:hr]
            [:div.row.g-1
             [:div.col-auto
              (doto (crate/html [:button#open-file-btn.btn.btn-lg.btn-primary
                                 {:type "button" :data-bs-toggle "button"}
                                 [:i.fa-solid.fa-upload.me-2]
                                 "Cargar solución"])
                (b/on-click #(do (oset! (get-element-by-id "overlay") :hidden false)
                                 (load-solution-attempt! current-exercise))))]
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
                                      (inc (:idx current-exercise)))))])]]]]))))

(defn build-overlay! []
  (go
    (doto (crate/html [:div#overlay.overlay
                       {:style "background-color: black; opacity: 0.5;"}])
      (oset! :hidden true))))

(defn update-ui! []
  (go (doto js/document.body
        (oset! :innerHTML "")
        (ocall! :appendChild (<! (build-html!)))
        (ocall! :appendChild (<! (build-overlay!))))))

(defn init []
  (go (<! (update-ui!))
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
