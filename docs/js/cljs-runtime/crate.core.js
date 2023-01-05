goog.provide('crate.core');
crate.core.group_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
crate.core.raw = (function crate$core$raw(html_str){
return goog.dom.htmlToDocumentFragment(html_str);
});
crate.core.html = (function crate$core$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24303 = arguments.length;
var i__5770__auto___24304 = (0);
while(true){
if((i__5770__auto___24304 < len__5769__auto___24303)){
args__5775__auto__.push((arguments[i__5770__auto___24304]));

var G__24305 = (i__5770__auto___24304 + (1));
i__5770__auto___24304 = G__24305;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(crate.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$2(crate.compiler.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second(res))){
return res;
} else {
return cljs.core.first(res);
}
}));

(crate.core.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(crate.core.html.cljs$lang$applyTo = (function (seq24289){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24289));
}));

/**
 * Alias for crate.util/escape-html
 */
crate.core.h = crate.util.escape_html;

//# sourceMappingURL=crate.core.js.map
