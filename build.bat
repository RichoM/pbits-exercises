rmdir /S /Q "public/main/js"
call shadow-cljs release main
call electron-packager . Ejercicios --out=out --overwrite --ignore="solutions|\.(shadow-cljs|calva|clj-kondo)" --icon=my-homework.ico