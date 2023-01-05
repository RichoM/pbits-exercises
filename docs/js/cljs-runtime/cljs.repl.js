goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20091){
var map__20092 = p__20091;
var map__20092__$1 = cljs.core.__destructure_map(map__20092);
var m = map__20092__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20092__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20095_20352 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20096_20353 = null;
var count__20097_20354 = (0);
var i__20098_20355 = (0);
while(true){
if((i__20098_20355 < count__20097_20354)){
var f_20357 = chunk__20096_20353.cljs$core$IIndexed$_nth$arity$2(null,i__20098_20355);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20357], 0));


var G__20358 = seq__20095_20352;
var G__20359 = chunk__20096_20353;
var G__20360 = count__20097_20354;
var G__20361 = (i__20098_20355 + (1));
seq__20095_20352 = G__20358;
chunk__20096_20353 = G__20359;
count__20097_20354 = G__20360;
i__20098_20355 = G__20361;
continue;
} else {
var temp__5804__auto___20362 = cljs.core.seq(seq__20095_20352);
if(temp__5804__auto___20362){
var seq__20095_20363__$1 = temp__5804__auto___20362;
if(cljs.core.chunked_seq_QMARK_(seq__20095_20363__$1)){
var c__5568__auto___20364 = cljs.core.chunk_first(seq__20095_20363__$1);
var G__20365 = cljs.core.chunk_rest(seq__20095_20363__$1);
var G__20366 = c__5568__auto___20364;
var G__20367 = cljs.core.count(c__5568__auto___20364);
var G__20368 = (0);
seq__20095_20352 = G__20365;
chunk__20096_20353 = G__20366;
count__20097_20354 = G__20367;
i__20098_20355 = G__20368;
continue;
} else {
var f_20369 = cljs.core.first(seq__20095_20363__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20369], 0));


var G__20370 = cljs.core.next(seq__20095_20363__$1);
var G__20371 = null;
var G__20372 = (0);
var G__20373 = (0);
seq__20095_20352 = G__20370;
chunk__20096_20353 = G__20371;
count__20097_20354 = G__20372;
i__20098_20355 = G__20373;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20374 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20374], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20374)))?cljs.core.second(arglists_20374):arglists_20374)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20124_20379 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20125_20380 = null;
var count__20126_20381 = (0);
var i__20127_20382 = (0);
while(true){
if((i__20127_20382 < count__20126_20381)){
var vec__20139_20383 = chunk__20125_20380.cljs$core$IIndexed$_nth$arity$2(null,i__20127_20382);
var name_20384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20139_20383,(0),null);
var map__20142_20385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20139_20383,(1),null);
var map__20142_20386__$1 = cljs.core.__destructure_map(map__20142_20385);
var doc_20387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20142_20386__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20142_20386__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20384], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20388], 0));

if(cljs.core.truth_(doc_20387)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20387], 0));
} else {
}


var G__20389 = seq__20124_20379;
var G__20390 = chunk__20125_20380;
var G__20391 = count__20126_20381;
var G__20392 = (i__20127_20382 + (1));
seq__20124_20379 = G__20389;
chunk__20125_20380 = G__20390;
count__20126_20381 = G__20391;
i__20127_20382 = G__20392;
continue;
} else {
var temp__5804__auto___20394 = cljs.core.seq(seq__20124_20379);
if(temp__5804__auto___20394){
var seq__20124_20395__$1 = temp__5804__auto___20394;
if(cljs.core.chunked_seq_QMARK_(seq__20124_20395__$1)){
var c__5568__auto___20396 = cljs.core.chunk_first(seq__20124_20395__$1);
var G__20397 = cljs.core.chunk_rest(seq__20124_20395__$1);
var G__20398 = c__5568__auto___20396;
var G__20399 = cljs.core.count(c__5568__auto___20396);
var G__20400 = (0);
seq__20124_20379 = G__20397;
chunk__20125_20380 = G__20398;
count__20126_20381 = G__20399;
i__20127_20382 = G__20400;
continue;
} else {
var vec__20149_20401 = cljs.core.first(seq__20124_20395__$1);
var name_20402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20149_20401,(0),null);
var map__20152_20403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20149_20401,(1),null);
var map__20152_20404__$1 = cljs.core.__destructure_map(map__20152_20403);
var doc_20405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20152_20404__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20152_20404__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20402], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20406], 0));

if(cljs.core.truth_(doc_20405)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20405], 0));
} else {
}


var G__20407 = cljs.core.next(seq__20124_20395__$1);
var G__20408 = null;
var G__20409 = (0);
var G__20410 = (0);
seq__20124_20379 = G__20407;
chunk__20125_20380 = G__20408;
count__20126_20381 = G__20409;
i__20127_20382 = G__20410;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20155 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20156 = null;
var count__20157 = (0);
var i__20158 = (0);
while(true){
if((i__20158 < count__20157)){
var role = chunk__20156.cljs$core$IIndexed$_nth$arity$2(null,i__20158);
var temp__5804__auto___20411__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20411__$1)){
var spec_20412 = temp__5804__auto___20411__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20412)], 0));
} else {
}


var G__20413 = seq__20155;
var G__20414 = chunk__20156;
var G__20415 = count__20157;
var G__20416 = (i__20158 + (1));
seq__20155 = G__20413;
chunk__20156 = G__20414;
count__20157 = G__20415;
i__20158 = G__20416;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20155);
if(temp__5804__auto____$1){
var seq__20155__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20155__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20155__$1);
var G__20417 = cljs.core.chunk_rest(seq__20155__$1);
var G__20418 = c__5568__auto__;
var G__20419 = cljs.core.count(c__5568__auto__);
var G__20420 = (0);
seq__20155 = G__20417;
chunk__20156 = G__20418;
count__20157 = G__20419;
i__20158 = G__20420;
continue;
} else {
var role = cljs.core.first(seq__20155__$1);
var temp__5804__auto___20421__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20421__$2)){
var spec_20422 = temp__5804__auto___20421__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20422)], 0));
} else {
}


var G__20423 = cljs.core.next(seq__20155__$1);
var G__20424 = null;
var G__20425 = (0);
var G__20426 = (0);
seq__20155 = G__20423;
chunk__20156 = G__20424;
count__20157 = G__20425;
i__20158 = G__20426;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20431 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20432 = cljs.core.ex_cause(t);
via = G__20431;
t = G__20432;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20271 = datafied_throwable;
var map__20271__$1 = cljs.core.__destructure_map(map__20271);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20271__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20272 = cljs.core.last(via);
var map__20272__$1 = cljs.core.__destructure_map(map__20272);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20272__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20272__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20272__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20273 = data;
var map__20273__$1 = cljs.core.__destructure_map(map__20273);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20273__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20273__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20273__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20274 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20274__$1 = cljs.core.__destructure_map(map__20274);
var top_data = map__20274__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20274__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20276 = phase;
var G__20276__$1 = (((G__20276 instanceof cljs.core.Keyword))?G__20276.fqn:null);
switch (G__20276__$1) {
case "read-source":
var map__20278 = data;
var map__20278__$1 = cljs.core.__destructure_map(map__20278);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20278__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20278__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20279 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20279__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20279,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20279);
var G__20279__$2 = (cljs.core.truth_((function (){var fexpr__20280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20280.cljs$core$IFn$_invoke$arity$1 ? fexpr__20280.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20280.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20279__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20279__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20279__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20279__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20282 = top_data;
var G__20282__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20282,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20282);
var G__20282__$2 = (cljs.core.truth_((function (){var fexpr__20283 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20283.cljs$core$IFn$_invoke$arity$1 ? fexpr__20283.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20283.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20282__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20282__$1);
var G__20282__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20282__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20282__$2);
var G__20282__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20282__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20282__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20282__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20282__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20285 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20285,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20285,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20285,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20285,(3),null);
var G__20289 = top_data;
var G__20289__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20289,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20289);
var G__20289__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20289__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20289__$1);
var G__20289__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20289__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20289__$2);
var G__20289__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20289__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20289__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20289__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20289__$4;
}

break;
case "execution":
var vec__20290 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20290,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20290,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20290,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20290,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20269_SHARP_){
var or__5045__auto__ = (p1__20269_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20293 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20293.cljs$core$IFn$_invoke$arity$1 ? fexpr__20293.cljs$core$IFn$_invoke$arity$1(p1__20269_SHARP_) : fexpr__20293.call(null,p1__20269_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20298 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20298__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20298,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20298);
var G__20298__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20298__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20298__$1);
var G__20298__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20298__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20298__$2);
var G__20298__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20298__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20298__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20298__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20298__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20276__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20305){
var map__20306 = p__20305;
var map__20306__$1 = cljs.core.__destructure_map(map__20306);
var triage_data = map__20306__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20306__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20306__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20306__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20306__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20306__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20306__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20306__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20306__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20308 = phase;
var G__20308__$1 = (((G__20308 instanceof cljs.core.Keyword))?G__20308.fqn:null);
switch (G__20308__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20309 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20310 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20311 = loc;
var G__20312 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20313_20445 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20314_20446 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20315_20447 = true;
var _STAR_print_fn_STAR__temp_val__20316_20448 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20315_20447);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20316_20448);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20303_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20303_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20314_20446);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20313_20445);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20309,G__20310,G__20311,G__20312) : format.call(null,G__20309,G__20310,G__20311,G__20312));

break;
case "macroexpansion":
var G__20318 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20319 = cause_type;
var G__20320 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20321 = loc;
var G__20322 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20318,G__20319,G__20320,G__20321,G__20322) : format.call(null,G__20318,G__20319,G__20320,G__20321,G__20322));

break;
case "compile-syntax-check":
var G__20323 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20324 = cause_type;
var G__20325 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20326 = loc;
var G__20327 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20323,G__20324,G__20325,G__20326,G__20327) : format.call(null,G__20323,G__20324,G__20325,G__20326,G__20327));

break;
case "compilation":
var G__20328 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20329 = cause_type;
var G__20330 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20331 = loc;
var G__20332 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20328,G__20329,G__20330,G__20331,G__20332) : format.call(null,G__20328,G__20329,G__20330,G__20331,G__20332));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20333 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20334 = symbol;
var G__20335 = loc;
var G__20336 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20337_20450 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20338_20451 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20339_20452 = true;
var _STAR_print_fn_STAR__temp_val__20340_20453 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20339_20452);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20340_20453);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20304_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20304_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20338_20451);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20337_20450);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20333,G__20334,G__20335,G__20336) : format.call(null,G__20333,G__20334,G__20335,G__20336));
} else {
var G__20342 = "Execution error%s at %s(%s).\n%s\n";
var G__20343 = cause_type;
var G__20344 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20345 = loc;
var G__20346 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20342,G__20343,G__20344,G__20345,G__20346) : format.call(null,G__20342,G__20343,G__20344,G__20345,G__20346));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20308__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
