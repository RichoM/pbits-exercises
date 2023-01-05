goog.provide('crate.util');
crate.util._STAR_base_url_STAR_ = null;
crate.util.as_str = (function crate$util$as_str(var_args){
var G__23923 = arguments.length;
switch (G__23923) {
case 0:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return crate.util.as_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___23955 = arguments.length;
var i__5770__auto___23956 = (0);
while(true){
if((i__5770__auto___23956 < len__5769__auto___23955)){
args_arr__5794__auto__.push((arguments[i__5770__auto___23956]));

var G__23957 = (i__5770__auto___23956 + (1));
i__5770__auto___23956 = G__23957;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(crate.util.as_str.cljs$core$IFn$_invoke$arity$0 = (function (){
return "";
}));

(crate.util.as_str.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((((x instanceof cljs.core.Symbol)) || ((x instanceof cljs.core.Keyword)))){
return cljs.core.name(x);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
}));

(crate.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
return (function (s,more){
while(true){
if(cljs.core.truth_(more)){
var G__23958 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),crate.util.as_str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more))].join('');
var G__23959 = cljs.core.next(more);
s = G__23958;
more = G__23959;
continue;
} else {
return s;
}
break;
}
})(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(x),xs);
}));

/** @this {Function} */
(crate.util.as_str.cljs$lang$applyTo = (function (seq23921){
var G__23922 = cljs.core.first(seq23921);
var seq23921__$1 = cljs.core.next(seq23921);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23922,seq23921__$1);
}));

(crate.util.as_str.cljs$lang$maxFixedArity = (1));

/**
 * Change special characters into HTML character entities.
 */
crate.util.escape_html = (function crate$util$escape_html(text){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(text),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
/**
 * Prepends the base-url to the supplied URI.
 */
crate.util.to_uri = (function crate$util$to_uri(uri){
if(cljs.core.truth_(cljs.core.re_matches(/^\w+:.*/,uri))){
return uri;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util._STAR_base_url_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
}
});
crate.util.url_encode_component = (function crate$util$url_encode_component(s){

return encodeURIComponent(crate.util.as_str.cljs$core$IFn$_invoke$arity$1(s));
});
/**
 * Turn a map of parameters into a urlencoded string.
 */
crate.util.url_encode = (function crate$util$url_encode(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",(function (){var iter__5523__auto__ = (function crate$util$url_encode_$_iter__23931(s__23932){
return (new cljs.core.LazySeq(null,(function (){
var s__23932__$1 = s__23932;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23932__$1);
if(temp__5804__auto__){
var s__23932__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23932__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23932__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23934 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23933 = (0);
while(true){
if((i__23933 < size__5522__auto__)){
var vec__23938 = cljs.core._nth(c__5521__auto__,i__23933);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23938,(1),null);
cljs.core.chunk_append(b__23934,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component(v))].join(''));

var G__23960 = (i__23933 + (1));
i__23933 = G__23960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23934),crate$util$url_encode_$_iter__23931(cljs.core.chunk_rest(s__23932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23934),null);
}
} else {
var vec__23947 = cljs.core.first(s__23932__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23947,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.url_encode_component(v))].join(''),crate$util$url_encode_$_iter__23931(cljs.core.rest(s__23932__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(params);
})());
});
/**
 * Creates a URL string from a variable list of arguments and an optional
 *   parameter map as the last argument. For example:
 *  (url "/group/" 4 "/products" {:page 9})
 *  => "/group/4/products?page=9"
 */
crate.util.url = (function crate$util$url(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23961 = arguments.length;
var i__5770__auto___23962 = (0);
while(true){
if((i__5770__auto___23962 < len__5769__auto___23961)){
args__5775__auto__.push((arguments[i__5770__auto___23962]));

var G__23963 = (i__5770__auto___23962 + (1));
i__5770__auto___23962 = G__23963;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return crate.util.url.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(crate.util.url.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var params = cljs.core.last(args);
var args__$1 = cljs.core.butlast(args);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(crate.util.to_uri([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.map_QMARK_(params))?["?",crate.util.url_encode(params)].join(''):params))].join('')));
}));

(crate.util.url.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(crate.util.url.cljs$lang$applyTo = (function (seq23950){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23950));
}));


//# sourceMappingURL=crate.util.js.map
