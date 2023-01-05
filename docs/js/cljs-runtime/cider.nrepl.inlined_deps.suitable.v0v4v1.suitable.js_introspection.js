goog.provide('cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection');
goog.scope(function(){
  cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object = goog.module.get('goog.object');
});
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__20868 = Object.getPrototypeOf(obj__$1);
var G__20869 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__20868;
protos = G__20869;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$property_names_and_types(var_args){
var G__20855 = arguments.length;
switch (G__20855) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var iter__5523__auto__ = (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__20856(s__20857){
return (new cljs.core.LazySeq(null,(function (){
var s__20857__$1 = s__20857;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20857__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__20862 = cljs.core.first(xs__6360__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20862,(0),null);
var map__20865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20862,(1),null);
var map__20865__$1 = cljs.core.__destructure_map(map__20865);
var _obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20865__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20865__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__5519__auto__ = ((function (s__20857__$1,vec__20862,i,map__20865,map__20865__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__20856_$_iter__20858(s__20859){
return (new cljs.core.LazySeq(null,((function (s__20857__$1,vec__20862,i,map__20865,map__20865__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function (){
var s__20859__$1 = s__20859;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20859__$1);
if(temp__5804__auto____$1){
var s__20859__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20859__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20859__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20861 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20860 = (0);
while(true){
if((i__20860 < size__5522__auto__)){
var key = cljs.core._nth(c__5521__auto__,i__20860);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__20861,(function (){var prop = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5045__auto__ = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e20866){if((e20866 instanceof Error)){
var _e = e20866;
return "var";
} else {
throw e20866;

}
}})()], null);
})());

var G__20871 = (i__20860 + (1));
i__20860 = G__20871;
continue;
} else {
var G__20872 = (i__20860 + (1));
i__20860 = G__20872;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20861),cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__20856_$_iter__20858(cljs.core.chunk_rest(s__20859__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20861),null);
}
} else {
var key = cljs.core.first(s__20859__$2);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5045__auto__ = cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e20867){if((e20867 instanceof Error)){
var _e = e20867;
return "var";
} else {
throw e20867;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__20856_$_iter__20858(cljs.core.rest(s__20859__$2)));
} else {
var G__20873 = cljs.core.rest(s__20859__$2);
s__20859__$1 = G__20873;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__20857__$1,vec__20862,i,map__20865,map__20865__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
,null,null));
});})(s__20857__$1,vec__20862,i,map__20865,map__20865__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.js_keys(props)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,cider$nrepl$inlined_deps$suitable$v0v4v1$suitable$js_introspection$iter__20856(cljs.core.rest(s__20857__$1)));
} else {
var G__20874 = cljs.core.rest(s__20857__$1);
s__20857__$1 = G__20874;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined_deps.suitable.v0v4v1.suitable.js_introspection.js.map
