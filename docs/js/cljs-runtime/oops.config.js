goog.provide('oops.config');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

(oops.config._STAR_runtime_config_STAR_ = new_config);

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22079 = arguments.length;
var i__5770__auto___22080 = (0);
while(true){
if((i__5770__auto___22080 < len__5769__auto___22079)){
args__5775__auto__.push((arguments[i__5770__auto___22080]));

var G__22081 = (i__5770__auto___22080 + (1));
i__5770__auto___22080 = G__22081;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
}));

(oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq21959){
var G__21960 = cljs.core.first(seq21959);
var seq21959__$1 = cljs.core.next(seq21959);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21960,seq21959__$1);
}));

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22088 = arguments.length;
var i__5770__auto___22089 = (0);
while(true){
if((i__5770__auto___22089 < len__5769__auto___22088)){
args__5775__auto__.push((arguments[i__5770__auto___22089]));

var G__22090 = (i__5770__auto___22089 + (1));
i__5770__auto___22089 = G__22090;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__21977){
var vec__21978 = p__21977;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21978,(0),null);
var G__21981 = (function (){var or__5045__auto__ = config;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__21981) : key.call(null,G__21981));
}));

(oops.config.get_config_key.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.get_config_key.cljs$lang$applyTo = (function (seq21967){
var G__21968 = cljs.core.first(seq21967);
var seq21967__$1 = cljs.core.next(seq21967);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21968,seq21967__$1);
}));

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22095 = arguments.length;
var i__5770__auto___22096 = (0);
while(true){
if((i__5770__auto___22096 < len__5769__auto___22095)){
args__5775__auto__.push((arguments[i__5770__auto___22096]));

var G__22097 = (i__5770__auto___22096 + (1));
i__5770__auto___22096 = G__22097;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__21993){
var vec__21994 = p__21993;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21994,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__5045__auto__ = config;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
}));

(oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq21987){
var G__21988 = cljs.core.first(seq21987);
var seq21987__$1 = cljs.core.next(seq21987);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21988,seq21987__$1);
}));

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22098 = arguments.length;
var i__5770__auto___22099 = (0);
while(true){
if((i__5770__auto___22099 < len__5769__auto___22098)){
args__5775__auto__.push((arguments[i__5770__auto___22099]));

var G__22100 = (i__5770__auto___22099 + (1));
i__5770__auto___22099 = G__22100;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__22016){
var vec__22017 = p__22016;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22017,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq22009){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22009));
}));

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22101 = arguments.length;
var i__5770__auto___22102 = (0);
while(true){
if((i__5770__auto___22102 < len__5769__auto___22101)){
args__5775__auto__.push((arguments[i__5770__auto___22102]));

var G__22103 = (i__5770__auto___22102 + (1));
i__5770__auto___22102 = G__22103;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__22029){
var vec__22030 = p__22029;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22030,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq22024){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22024));
}));

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22104 = arguments.length;
var i__5770__auto___22105 = (0);
while(true){
if((i__5770__auto___22105 < len__5769__auto___22104)){
args__5775__auto__.push((arguments[i__5770__auto___22105]));

var G__22106 = (i__5770__auto___22105 + (1));
i__5770__auto___22105 = G__22106;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__22039){
var vec__22041 = p__22039;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22041,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq22035){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22035));
}));

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22110 = arguments.length;
var i__5770__auto___22111 = (0);
while(true){
if((i__5770__auto___22111 < len__5769__auto___22110)){
args__5775__auto__.push((arguments[i__5770__auto___22111]));

var G__22112 = (i__5770__auto___22111 + (1));
i__5770__auto___22111 = G__22112;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__22052){
var vec__22053 = p__22052;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22053,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_child_factory.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_child_factory.cljs$lang$applyTo = (function (seq22051){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22051));
}));

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22115 = arguments.length;
var i__5770__auto___22116 = (0);
while(true){
if((i__5770__auto___22116 < len__5769__auto___22115)){
args__5775__auto__.push((arguments[i__5770__auto___22116]));

var G__22117 = (i__5770__auto___22116 + (1));
i__5770__auto___22116 = G__22117;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22063){
var vec__22064 = p__22063;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22064,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq22059){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22059));
}));

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22122 = arguments.length;
var i__5770__auto___22123 = (0);
while(true){
if((i__5770__auto___22123 < len__5769__auto___22122)){
args__5775__auto__.push((arguments[i__5770__auto___22123]));

var G__22124 = (i__5770__auto___22123 + (1));
i__5770__auto___22123 = G__22124;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22071){
var vec__22072 = p__22071;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22072,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq22067){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22067));
}));


//# sourceMappingURL=oops.config.js.map
