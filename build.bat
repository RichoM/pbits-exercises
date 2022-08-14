rmdir /S /Q "public/main/js"
call shadow-cljs release main
call electron-packager . Ejercicios --out=out --overwrite --ignore="\.(shadow-cljs|calva|clj-kondo)"