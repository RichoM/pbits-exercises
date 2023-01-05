goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21095 = arguments.length;
var i__5770__auto___21096 = (0);
while(true){
if((i__5770__auto___21096 < len__5769__auto___21095)){
args__5775__auto__.push((arguments[i__5770__auto___21096]));

var G__21097 = (i__5770__auto___21096 + (1));
i__5770__auto___21096 = G__21097;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20805){
var G__20806 = cljs.core.first(seq20805);
var seq20805__$1 = cljs.core.next(seq20805);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20806,seq20805__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20810 = cljs.core.seq(sources);
var chunk__20811 = null;
var count__20812 = (0);
var i__20813 = (0);
while(true){
if((i__20813 < count__20812)){
var map__20823 = chunk__20811.cljs$core$IIndexed$_nth$arity$2(null,i__20813);
var map__20823__$1 = cljs.core.__destructure_map(map__20823);
var src = map__20823__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20824){var e_21098 = e20824;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21098);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21098.message)].join('')));
}

var G__21099 = seq__20810;
var G__21100 = chunk__20811;
var G__21101 = count__20812;
var G__21102 = (i__20813 + (1));
seq__20810 = G__21099;
chunk__20811 = G__21100;
count__20812 = G__21101;
i__20813 = G__21102;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20810);
if(temp__5804__auto__){
var seq__20810__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20810__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20810__$1);
var G__21103 = cljs.core.chunk_rest(seq__20810__$1);
var G__21104 = c__5568__auto__;
var G__21105 = cljs.core.count(c__5568__auto__);
var G__21106 = (0);
seq__20810 = G__21103;
chunk__20811 = G__21104;
count__20812 = G__21105;
i__20813 = G__21106;
continue;
} else {
var map__20825 = cljs.core.first(seq__20810__$1);
var map__20825__$1 = cljs.core.__destructure_map(map__20825);
var src = map__20825__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20826){var e_21107 = e20826;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21107);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21107.message)].join('')));
}

var G__21108 = cljs.core.next(seq__20810__$1);
var G__21109 = null;
var G__21110 = (0);
var G__21111 = (0);
seq__20810 = G__21108;
chunk__20811 = G__21109;
count__20812 = G__21110;
i__20813 = G__21111;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20829 = cljs.core.seq(js_requires);
var chunk__20830 = null;
var count__20831 = (0);
var i__20832 = (0);
while(true){
if((i__20832 < count__20831)){
var js_ns = chunk__20830.cljs$core$IIndexed$_nth$arity$2(null,i__20832);
var require_str_21112 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21112);


var G__21113 = seq__20829;
var G__21114 = chunk__20830;
var G__21115 = count__20831;
var G__21116 = (i__20832 + (1));
seq__20829 = G__21113;
chunk__20830 = G__21114;
count__20831 = G__21115;
i__20832 = G__21116;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20829);
if(temp__5804__auto__){
var seq__20829__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20829__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20829__$1);
var G__21117 = cljs.core.chunk_rest(seq__20829__$1);
var G__21118 = c__5568__auto__;
var G__21119 = cljs.core.count(c__5568__auto__);
var G__21120 = (0);
seq__20829 = G__21117;
chunk__20830 = G__21118;
count__20831 = G__21119;
i__20832 = G__21120;
continue;
} else {
var js_ns = cljs.core.first(seq__20829__$1);
var require_str_21121 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21121);


var G__21122 = cljs.core.next(seq__20829__$1);
var G__21123 = null;
var G__21124 = (0);
var G__21125 = (0);
seq__20829 = G__21122;
chunk__20830 = G__21123;
count__20831 = G__21124;
i__20832 = G__21125;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20834){
var map__20835 = p__20834;
var map__20835__$1 = cljs.core.__destructure_map(map__20835);
var msg = map__20835__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20836(s__20837){
return (new cljs.core.LazySeq(null,(function (){
var s__20837__$1 = s__20837;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20837__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20842 = cljs.core.first(xs__6360__auto__);
var map__20842__$1 = cljs.core.__destructure_map(map__20842);
var src = map__20842__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20842__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20842__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20837__$1,map__20842,map__20842__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20835,map__20835__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20836_$_iter__20838(s__20839){
return (new cljs.core.LazySeq(null,((function (s__20837__$1,map__20842,map__20842__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20835,map__20835__$1,msg,info,reload_info){
return (function (){
var s__20839__$1 = s__20839;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20839__$1);
if(temp__5804__auto____$1){
var s__20839__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20839__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20839__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20841 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20840 = (0);
while(true){
if((i__20840 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20840);
cljs.core.chunk_append(b__20841,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21126 = (i__20840 + (1));
i__20840 = G__21126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20841),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20836_$_iter__20838(cljs.core.chunk_rest(s__20839__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20841),null);
}
} else {
var warning = cljs.core.first(s__20839__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20836_$_iter__20838(cljs.core.rest(s__20839__$2)));
}
} else {
return null;
}
break;
}
});})(s__20837__$1,map__20842,map__20842__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20835,map__20835__$1,msg,info,reload_info))
,null,null));
});})(s__20837__$1,map__20842,map__20842__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20835,map__20835__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20836(cljs.core.rest(s__20837__$1)));
} else {
var G__21127 = cljs.core.rest(s__20837__$1);
s__20837__$1 = G__21127;
continue;
}
} else {
var G__21128 = cljs.core.rest(s__20837__$1);
s__20837__$1 = G__21128;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20843_21129 = cljs.core.seq(warnings);
var chunk__20844_21130 = null;
var count__20845_21131 = (0);
var i__20846_21132 = (0);
while(true){
if((i__20846_21132 < count__20845_21131)){
var map__20849_21133 = chunk__20844_21130.cljs$core$IIndexed$_nth$arity$2(null,i__20846_21132);
var map__20849_21134__$1 = cljs.core.__destructure_map(map__20849_21133);
var w_21135 = map__20849_21134__$1;
var msg_21136__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849_21134__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849_21134__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849_21134__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849_21134__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21139)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21137),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21138),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21136__$1)].join(''));


var G__21140 = seq__20843_21129;
var G__21141 = chunk__20844_21130;
var G__21142 = count__20845_21131;
var G__21143 = (i__20846_21132 + (1));
seq__20843_21129 = G__21140;
chunk__20844_21130 = G__21141;
count__20845_21131 = G__21142;
i__20846_21132 = G__21143;
continue;
} else {
var temp__5804__auto___21144 = cljs.core.seq(seq__20843_21129);
if(temp__5804__auto___21144){
var seq__20843_21145__$1 = temp__5804__auto___21144;
if(cljs.core.chunked_seq_QMARK_(seq__20843_21145__$1)){
var c__5568__auto___21146 = cljs.core.chunk_first(seq__20843_21145__$1);
var G__21147 = cljs.core.chunk_rest(seq__20843_21145__$1);
var G__21148 = c__5568__auto___21146;
var G__21149 = cljs.core.count(c__5568__auto___21146);
var G__21150 = (0);
seq__20843_21129 = G__21147;
chunk__20844_21130 = G__21148;
count__20845_21131 = G__21149;
i__20846_21132 = G__21150;
continue;
} else {
var map__20850_21151 = cljs.core.first(seq__20843_21145__$1);
var map__20850_21152__$1 = cljs.core.__destructure_map(map__20850_21151);
var w_21153 = map__20850_21152__$1;
var msg_21154__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850_21152__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850_21152__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850_21152__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850_21152__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21157)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21155),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21156),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21154__$1)].join(''));


var G__21158 = cljs.core.next(seq__20843_21145__$1);
var G__21159 = null;
var G__21160 = (0);
var G__21161 = (0);
seq__20843_21129 = G__21158;
chunk__20844_21130 = G__21159;
count__20845_21131 = G__21160;
i__20846_21132 = G__21161;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20833_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20833_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20851){
var map__20852 = p__20851;
var map__20852__$1 = cljs.core.__destructure_map(map__20852);
var msg = map__20852__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20852__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20852__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20853 = cljs.core.seq(updates);
var chunk__20855 = null;
var count__20856 = (0);
var i__20857 = (0);
while(true){
if((i__20857 < count__20856)){
var path = chunk__20855.cljs$core$IIndexed$_nth$arity$2(null,i__20857);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20967_21162 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20971_21163 = null;
var count__20972_21164 = (0);
var i__20973_21165 = (0);
while(true){
if((i__20973_21165 < count__20972_21164)){
var node_21166 = chunk__20971_21163.cljs$core$IIndexed$_nth$arity$2(null,i__20973_21165);
if(cljs.core.not(node_21166.shadow$old)){
var path_match_21167 = shadow.cljs.devtools.client.browser.match_paths(node_21166.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21167)){
var new_link_21168 = (function (){var G__20999 = node_21166.cloneNode(true);
G__20999.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21167),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20999;
})();
(node_21166.shadow$old = true);

(new_link_21168.onload = ((function (seq__20967_21162,chunk__20971_21163,count__20972_21164,i__20973_21165,seq__20853,chunk__20855,count__20856,i__20857,new_link_21168,path_match_21167,node_21166,path,map__20852,map__20852__$1,msg,updates,reload_info){
return (function (e){
var seq__21000_21169 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21002_21170 = null;
var count__21003_21171 = (0);
var i__21004_21172 = (0);
while(true){
if((i__21004_21172 < count__21003_21171)){
var map__21008_21173 = chunk__21002_21170.cljs$core$IIndexed$_nth$arity$2(null,i__21004_21172);
var map__21008_21174__$1 = cljs.core.__destructure_map(map__21008_21173);
var task_21175 = map__21008_21174__$1;
var fn_str_21176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008_21174__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008_21174__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21178 = goog.getObjectByName(fn_str_21176,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21177)].join(''));

(fn_obj_21178.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21178.cljs$core$IFn$_invoke$arity$2(path,new_link_21168) : fn_obj_21178.call(null,path,new_link_21168));


var G__21179 = seq__21000_21169;
var G__21180 = chunk__21002_21170;
var G__21181 = count__21003_21171;
var G__21182 = (i__21004_21172 + (1));
seq__21000_21169 = G__21179;
chunk__21002_21170 = G__21180;
count__21003_21171 = G__21181;
i__21004_21172 = G__21182;
continue;
} else {
var temp__5804__auto___21183 = cljs.core.seq(seq__21000_21169);
if(temp__5804__auto___21183){
var seq__21000_21184__$1 = temp__5804__auto___21183;
if(cljs.core.chunked_seq_QMARK_(seq__21000_21184__$1)){
var c__5568__auto___21185 = cljs.core.chunk_first(seq__21000_21184__$1);
var G__21186 = cljs.core.chunk_rest(seq__21000_21184__$1);
var G__21187 = c__5568__auto___21185;
var G__21188 = cljs.core.count(c__5568__auto___21185);
var G__21189 = (0);
seq__21000_21169 = G__21186;
chunk__21002_21170 = G__21187;
count__21003_21171 = G__21188;
i__21004_21172 = G__21189;
continue;
} else {
var map__21009_21190 = cljs.core.first(seq__21000_21184__$1);
var map__21009_21191__$1 = cljs.core.__destructure_map(map__21009_21190);
var task_21192 = map__21009_21191__$1;
var fn_str_21193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21009_21191__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21009_21191__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21195 = goog.getObjectByName(fn_str_21193,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21194)].join(''));

(fn_obj_21195.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21195.cljs$core$IFn$_invoke$arity$2(path,new_link_21168) : fn_obj_21195.call(null,path,new_link_21168));


var G__21196 = cljs.core.next(seq__21000_21184__$1);
var G__21197 = null;
var G__21198 = (0);
var G__21199 = (0);
seq__21000_21169 = G__21196;
chunk__21002_21170 = G__21197;
count__21003_21171 = G__21198;
i__21004_21172 = G__21199;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21166);
});})(seq__20967_21162,chunk__20971_21163,count__20972_21164,i__20973_21165,seq__20853,chunk__20855,count__20856,i__20857,new_link_21168,path_match_21167,node_21166,path,map__20852,map__20852__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21167], 0));

goog.dom.insertSiblingAfter(new_link_21168,node_21166);


var G__21200 = seq__20967_21162;
var G__21201 = chunk__20971_21163;
var G__21202 = count__20972_21164;
var G__21203 = (i__20973_21165 + (1));
seq__20967_21162 = G__21200;
chunk__20971_21163 = G__21201;
count__20972_21164 = G__21202;
i__20973_21165 = G__21203;
continue;
} else {
var G__21204 = seq__20967_21162;
var G__21205 = chunk__20971_21163;
var G__21206 = count__20972_21164;
var G__21207 = (i__20973_21165 + (1));
seq__20967_21162 = G__21204;
chunk__20971_21163 = G__21205;
count__20972_21164 = G__21206;
i__20973_21165 = G__21207;
continue;
}
} else {
var G__21208 = seq__20967_21162;
var G__21209 = chunk__20971_21163;
var G__21210 = count__20972_21164;
var G__21211 = (i__20973_21165 + (1));
seq__20967_21162 = G__21208;
chunk__20971_21163 = G__21209;
count__20972_21164 = G__21210;
i__20973_21165 = G__21211;
continue;
}
} else {
var temp__5804__auto___21212 = cljs.core.seq(seq__20967_21162);
if(temp__5804__auto___21212){
var seq__20967_21213__$1 = temp__5804__auto___21212;
if(cljs.core.chunked_seq_QMARK_(seq__20967_21213__$1)){
var c__5568__auto___21214 = cljs.core.chunk_first(seq__20967_21213__$1);
var G__21215 = cljs.core.chunk_rest(seq__20967_21213__$1);
var G__21216 = c__5568__auto___21214;
var G__21217 = cljs.core.count(c__5568__auto___21214);
var G__21218 = (0);
seq__20967_21162 = G__21215;
chunk__20971_21163 = G__21216;
count__20972_21164 = G__21217;
i__20973_21165 = G__21218;
continue;
} else {
var node_21219 = cljs.core.first(seq__20967_21213__$1);
if(cljs.core.not(node_21219.shadow$old)){
var path_match_21220 = shadow.cljs.devtools.client.browser.match_paths(node_21219.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21220)){
var new_link_21221 = (function (){var G__21010 = node_21219.cloneNode(true);
G__21010.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21220),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21010;
})();
(node_21219.shadow$old = true);

(new_link_21221.onload = ((function (seq__20967_21162,chunk__20971_21163,count__20972_21164,i__20973_21165,seq__20853,chunk__20855,count__20856,i__20857,new_link_21221,path_match_21220,node_21219,seq__20967_21213__$1,temp__5804__auto___21212,path,map__20852,map__20852__$1,msg,updates,reload_info){
return (function (e){
var seq__21011_21222 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21013_21223 = null;
var count__21014_21224 = (0);
var i__21015_21225 = (0);
while(true){
if((i__21015_21225 < count__21014_21224)){
var map__21019_21226 = chunk__21013_21223.cljs$core$IIndexed$_nth$arity$2(null,i__21015_21225);
var map__21019_21227__$1 = cljs.core.__destructure_map(map__21019_21226);
var task_21228 = map__21019_21227__$1;
var fn_str_21229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019_21227__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019_21227__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21231 = goog.getObjectByName(fn_str_21229,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21230)].join(''));

(fn_obj_21231.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21231.cljs$core$IFn$_invoke$arity$2(path,new_link_21221) : fn_obj_21231.call(null,path,new_link_21221));


var G__21232 = seq__21011_21222;
var G__21233 = chunk__21013_21223;
var G__21234 = count__21014_21224;
var G__21235 = (i__21015_21225 + (1));
seq__21011_21222 = G__21232;
chunk__21013_21223 = G__21233;
count__21014_21224 = G__21234;
i__21015_21225 = G__21235;
continue;
} else {
var temp__5804__auto___21236__$1 = cljs.core.seq(seq__21011_21222);
if(temp__5804__auto___21236__$1){
var seq__21011_21237__$1 = temp__5804__auto___21236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21011_21237__$1)){
var c__5568__auto___21238 = cljs.core.chunk_first(seq__21011_21237__$1);
var G__21239 = cljs.core.chunk_rest(seq__21011_21237__$1);
var G__21240 = c__5568__auto___21238;
var G__21241 = cljs.core.count(c__5568__auto___21238);
var G__21242 = (0);
seq__21011_21222 = G__21239;
chunk__21013_21223 = G__21240;
count__21014_21224 = G__21241;
i__21015_21225 = G__21242;
continue;
} else {
var map__21020_21243 = cljs.core.first(seq__21011_21237__$1);
var map__21020_21244__$1 = cljs.core.__destructure_map(map__21020_21243);
var task_21245 = map__21020_21244__$1;
var fn_str_21246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21020_21244__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21020_21244__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21248 = goog.getObjectByName(fn_str_21246,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21247)].join(''));

(fn_obj_21248.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21248.cljs$core$IFn$_invoke$arity$2(path,new_link_21221) : fn_obj_21248.call(null,path,new_link_21221));


var G__21249 = cljs.core.next(seq__21011_21237__$1);
var G__21250 = null;
var G__21251 = (0);
var G__21252 = (0);
seq__21011_21222 = G__21249;
chunk__21013_21223 = G__21250;
count__21014_21224 = G__21251;
i__21015_21225 = G__21252;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21219);
});})(seq__20967_21162,chunk__20971_21163,count__20972_21164,i__20973_21165,seq__20853,chunk__20855,count__20856,i__20857,new_link_21221,path_match_21220,node_21219,seq__20967_21213__$1,temp__5804__auto___21212,path,map__20852,map__20852__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21220], 0));

goog.dom.insertSiblingAfter(new_link_21221,node_21219);


var G__21253 = cljs.core.next(seq__20967_21213__$1);
var G__21254 = null;
var G__21255 = (0);
var G__21256 = (0);
seq__20967_21162 = G__21253;
chunk__20971_21163 = G__21254;
count__20972_21164 = G__21255;
i__20973_21165 = G__21256;
continue;
} else {
var G__21257 = cljs.core.next(seq__20967_21213__$1);
var G__21258 = null;
var G__21259 = (0);
var G__21260 = (0);
seq__20967_21162 = G__21257;
chunk__20971_21163 = G__21258;
count__20972_21164 = G__21259;
i__20973_21165 = G__21260;
continue;
}
} else {
var G__21261 = cljs.core.next(seq__20967_21213__$1);
var G__21262 = null;
var G__21263 = (0);
var G__21264 = (0);
seq__20967_21162 = G__21261;
chunk__20971_21163 = G__21262;
count__20972_21164 = G__21263;
i__20973_21165 = G__21264;
continue;
}
}
} else {
}
}
break;
}


var G__21265 = seq__20853;
var G__21266 = chunk__20855;
var G__21267 = count__20856;
var G__21268 = (i__20857 + (1));
seq__20853 = G__21265;
chunk__20855 = G__21266;
count__20856 = G__21267;
i__20857 = G__21268;
continue;
} else {
var G__21269 = seq__20853;
var G__21270 = chunk__20855;
var G__21271 = count__20856;
var G__21272 = (i__20857 + (1));
seq__20853 = G__21269;
chunk__20855 = G__21270;
count__20856 = G__21271;
i__20857 = G__21272;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20853);
if(temp__5804__auto__){
var seq__20853__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20853__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20853__$1);
var G__21273 = cljs.core.chunk_rest(seq__20853__$1);
var G__21274 = c__5568__auto__;
var G__21275 = cljs.core.count(c__5568__auto__);
var G__21276 = (0);
seq__20853 = G__21273;
chunk__20855 = G__21274;
count__20856 = G__21275;
i__20857 = G__21276;
continue;
} else {
var path = cljs.core.first(seq__20853__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21021_21277 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21025_21278 = null;
var count__21026_21279 = (0);
var i__21027_21280 = (0);
while(true){
if((i__21027_21280 < count__21026_21279)){
var node_21281 = chunk__21025_21278.cljs$core$IIndexed$_nth$arity$2(null,i__21027_21280);
if(cljs.core.not(node_21281.shadow$old)){
var path_match_21282 = shadow.cljs.devtools.client.browser.match_paths(node_21281.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21282)){
var new_link_21283 = (function (){var G__21053 = node_21281.cloneNode(true);
G__21053.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21282),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21053;
})();
(node_21281.shadow$old = true);

(new_link_21283.onload = ((function (seq__21021_21277,chunk__21025_21278,count__21026_21279,i__21027_21280,seq__20853,chunk__20855,count__20856,i__20857,new_link_21283,path_match_21282,node_21281,path,seq__20853__$1,temp__5804__auto__,map__20852,map__20852__$1,msg,updates,reload_info){
return (function (e){
var seq__21054_21284 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21056_21285 = null;
var count__21057_21286 = (0);
var i__21058_21287 = (0);
while(true){
if((i__21058_21287 < count__21057_21286)){
var map__21062_21288 = chunk__21056_21285.cljs$core$IIndexed$_nth$arity$2(null,i__21058_21287);
var map__21062_21289__$1 = cljs.core.__destructure_map(map__21062_21288);
var task_21290 = map__21062_21289__$1;
var fn_str_21291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062_21289__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062_21289__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21293 = goog.getObjectByName(fn_str_21291,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21292)].join(''));

(fn_obj_21293.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21293.cljs$core$IFn$_invoke$arity$2(path,new_link_21283) : fn_obj_21293.call(null,path,new_link_21283));


var G__21294 = seq__21054_21284;
var G__21295 = chunk__21056_21285;
var G__21296 = count__21057_21286;
var G__21297 = (i__21058_21287 + (1));
seq__21054_21284 = G__21294;
chunk__21056_21285 = G__21295;
count__21057_21286 = G__21296;
i__21058_21287 = G__21297;
continue;
} else {
var temp__5804__auto___21298__$1 = cljs.core.seq(seq__21054_21284);
if(temp__5804__auto___21298__$1){
var seq__21054_21299__$1 = temp__5804__auto___21298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21054_21299__$1)){
var c__5568__auto___21300 = cljs.core.chunk_first(seq__21054_21299__$1);
var G__21301 = cljs.core.chunk_rest(seq__21054_21299__$1);
var G__21302 = c__5568__auto___21300;
var G__21303 = cljs.core.count(c__5568__auto___21300);
var G__21304 = (0);
seq__21054_21284 = G__21301;
chunk__21056_21285 = G__21302;
count__21057_21286 = G__21303;
i__21058_21287 = G__21304;
continue;
} else {
var map__21063_21305 = cljs.core.first(seq__21054_21299__$1);
var map__21063_21306__$1 = cljs.core.__destructure_map(map__21063_21305);
var task_21307 = map__21063_21306__$1;
var fn_str_21308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21063_21306__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21063_21306__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21310 = goog.getObjectByName(fn_str_21308,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21309)].join(''));

(fn_obj_21310.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21310.cljs$core$IFn$_invoke$arity$2(path,new_link_21283) : fn_obj_21310.call(null,path,new_link_21283));


var G__21311 = cljs.core.next(seq__21054_21299__$1);
var G__21312 = null;
var G__21313 = (0);
var G__21314 = (0);
seq__21054_21284 = G__21311;
chunk__21056_21285 = G__21312;
count__21057_21286 = G__21313;
i__21058_21287 = G__21314;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21281);
});})(seq__21021_21277,chunk__21025_21278,count__21026_21279,i__21027_21280,seq__20853,chunk__20855,count__20856,i__20857,new_link_21283,path_match_21282,node_21281,path,seq__20853__$1,temp__5804__auto__,map__20852,map__20852__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21282], 0));

goog.dom.insertSiblingAfter(new_link_21283,node_21281);


var G__21315 = seq__21021_21277;
var G__21316 = chunk__21025_21278;
var G__21317 = count__21026_21279;
var G__21318 = (i__21027_21280 + (1));
seq__21021_21277 = G__21315;
chunk__21025_21278 = G__21316;
count__21026_21279 = G__21317;
i__21027_21280 = G__21318;
continue;
} else {
var G__21319 = seq__21021_21277;
var G__21320 = chunk__21025_21278;
var G__21321 = count__21026_21279;
var G__21322 = (i__21027_21280 + (1));
seq__21021_21277 = G__21319;
chunk__21025_21278 = G__21320;
count__21026_21279 = G__21321;
i__21027_21280 = G__21322;
continue;
}
} else {
var G__21323 = seq__21021_21277;
var G__21324 = chunk__21025_21278;
var G__21325 = count__21026_21279;
var G__21326 = (i__21027_21280 + (1));
seq__21021_21277 = G__21323;
chunk__21025_21278 = G__21324;
count__21026_21279 = G__21325;
i__21027_21280 = G__21326;
continue;
}
} else {
var temp__5804__auto___21327__$1 = cljs.core.seq(seq__21021_21277);
if(temp__5804__auto___21327__$1){
var seq__21021_21328__$1 = temp__5804__auto___21327__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21021_21328__$1)){
var c__5568__auto___21329 = cljs.core.chunk_first(seq__21021_21328__$1);
var G__21330 = cljs.core.chunk_rest(seq__21021_21328__$1);
var G__21331 = c__5568__auto___21329;
var G__21332 = cljs.core.count(c__5568__auto___21329);
var G__21333 = (0);
seq__21021_21277 = G__21330;
chunk__21025_21278 = G__21331;
count__21026_21279 = G__21332;
i__21027_21280 = G__21333;
continue;
} else {
var node_21334 = cljs.core.first(seq__21021_21328__$1);
if(cljs.core.not(node_21334.shadow$old)){
var path_match_21335 = shadow.cljs.devtools.client.browser.match_paths(node_21334.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21335)){
var new_link_21336 = (function (){var G__21064 = node_21334.cloneNode(true);
G__21064.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21335),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21064;
})();
(node_21334.shadow$old = true);

(new_link_21336.onload = ((function (seq__21021_21277,chunk__21025_21278,count__21026_21279,i__21027_21280,seq__20853,chunk__20855,count__20856,i__20857,new_link_21336,path_match_21335,node_21334,seq__21021_21328__$1,temp__5804__auto___21327__$1,path,seq__20853__$1,temp__5804__auto__,map__20852,map__20852__$1,msg,updates,reload_info){
return (function (e){
var seq__21065_21337 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21067_21338 = null;
var count__21068_21339 = (0);
var i__21069_21340 = (0);
while(true){
if((i__21069_21340 < count__21068_21339)){
var map__21073_21341 = chunk__21067_21338.cljs$core$IIndexed$_nth$arity$2(null,i__21069_21340);
var map__21073_21342__$1 = cljs.core.__destructure_map(map__21073_21341);
var task_21343 = map__21073_21342__$1;
var fn_str_21344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21073_21342__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21073_21342__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21346 = goog.getObjectByName(fn_str_21344,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21345)].join(''));

(fn_obj_21346.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21346.cljs$core$IFn$_invoke$arity$2(path,new_link_21336) : fn_obj_21346.call(null,path,new_link_21336));


var G__21347 = seq__21065_21337;
var G__21348 = chunk__21067_21338;
var G__21349 = count__21068_21339;
var G__21350 = (i__21069_21340 + (1));
seq__21065_21337 = G__21347;
chunk__21067_21338 = G__21348;
count__21068_21339 = G__21349;
i__21069_21340 = G__21350;
continue;
} else {
var temp__5804__auto___21351__$2 = cljs.core.seq(seq__21065_21337);
if(temp__5804__auto___21351__$2){
var seq__21065_21352__$1 = temp__5804__auto___21351__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21065_21352__$1)){
var c__5568__auto___21353 = cljs.core.chunk_first(seq__21065_21352__$1);
var G__21354 = cljs.core.chunk_rest(seq__21065_21352__$1);
var G__21355 = c__5568__auto___21353;
var G__21356 = cljs.core.count(c__5568__auto___21353);
var G__21357 = (0);
seq__21065_21337 = G__21354;
chunk__21067_21338 = G__21355;
count__21068_21339 = G__21356;
i__21069_21340 = G__21357;
continue;
} else {
var map__21074_21358 = cljs.core.first(seq__21065_21352__$1);
var map__21074_21359__$1 = cljs.core.__destructure_map(map__21074_21358);
var task_21360 = map__21074_21359__$1;
var fn_str_21361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074_21359__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21074_21359__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21363 = goog.getObjectByName(fn_str_21361,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21362)].join(''));

(fn_obj_21363.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21363.cljs$core$IFn$_invoke$arity$2(path,new_link_21336) : fn_obj_21363.call(null,path,new_link_21336));


var G__21364 = cljs.core.next(seq__21065_21352__$1);
var G__21365 = null;
var G__21366 = (0);
var G__21367 = (0);
seq__21065_21337 = G__21364;
chunk__21067_21338 = G__21365;
count__21068_21339 = G__21366;
i__21069_21340 = G__21367;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21334);
});})(seq__21021_21277,chunk__21025_21278,count__21026_21279,i__21027_21280,seq__20853,chunk__20855,count__20856,i__20857,new_link_21336,path_match_21335,node_21334,seq__21021_21328__$1,temp__5804__auto___21327__$1,path,seq__20853__$1,temp__5804__auto__,map__20852,map__20852__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21335], 0));

goog.dom.insertSiblingAfter(new_link_21336,node_21334);


var G__21368 = cljs.core.next(seq__21021_21328__$1);
var G__21369 = null;
var G__21370 = (0);
var G__21371 = (0);
seq__21021_21277 = G__21368;
chunk__21025_21278 = G__21369;
count__21026_21279 = G__21370;
i__21027_21280 = G__21371;
continue;
} else {
var G__21372 = cljs.core.next(seq__21021_21328__$1);
var G__21373 = null;
var G__21374 = (0);
var G__21375 = (0);
seq__21021_21277 = G__21372;
chunk__21025_21278 = G__21373;
count__21026_21279 = G__21374;
i__21027_21280 = G__21375;
continue;
}
} else {
var G__21376 = cljs.core.next(seq__21021_21328__$1);
var G__21377 = null;
var G__21378 = (0);
var G__21379 = (0);
seq__21021_21277 = G__21376;
chunk__21025_21278 = G__21377;
count__21026_21279 = G__21378;
i__21027_21280 = G__21379;
continue;
}
}
} else {
}
}
break;
}


var G__21380 = cljs.core.next(seq__20853__$1);
var G__21381 = null;
var G__21382 = (0);
var G__21383 = (0);
seq__20853 = G__21380;
chunk__20855 = G__21381;
count__20856 = G__21382;
i__20857 = G__21383;
continue;
} else {
var G__21384 = cljs.core.next(seq__20853__$1);
var G__21385 = null;
var G__21386 = (0);
var G__21387 = (0);
seq__20853 = G__21384;
chunk__20855 = G__21385;
count__20856 = G__21386;
i__20857 = G__21387;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21075){
var map__21076 = p__21075;
var map__21076__$1 = cljs.core.__destructure_map(map__21076);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21076__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21077){
var map__21078 = p__21077;
var map__21078__$1 = cljs.core.__destructure_map(map__21078);
var _ = map__21078__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21078__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21079,done,error){
var map__21080 = p__21079;
var map__21080__$1 = cljs.core.__destructure_map(map__21080);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21080__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21081,done,error){
var map__21082 = p__21081;
var map__21082__$1 = cljs.core.__destructure_map(map__21082);
var msg = map__21082__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21082__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21082__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21082__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21083){
var map__21084 = p__21083;
var map__21084__$1 = cljs.core.__destructure_map(map__21084);
var src = map__21084__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21084__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21085 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21085) : done.call(null,G__21085));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21086){
var map__21087 = p__21086;
var map__21087__$1 = cljs.core.__destructure_map(map__21087);
var msg__$1 = map__21087__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21087__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21088){var ex = e21088;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21089){
var map__21090 = p__21089;
var map__21090__$1 = cljs.core.__destructure_map(map__21090);
var env = map__21090__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21091){
var map__21092 = p__21091;
var map__21092__$1 = cljs.core.__destructure_map(map__21092);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21092__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21092__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21093){
var map__21094 = p__21093;
var map__21094__$1 = cljs.core.__destructure_map(map__21094);
var svc = map__21094__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
