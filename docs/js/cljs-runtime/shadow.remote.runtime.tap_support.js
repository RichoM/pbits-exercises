goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20583,p__20584){
var map__20585 = p__20583;
var map__20585__$1 = cljs.core.__destructure_map(map__20585);
var svc = map__20585__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20585__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20585__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20585__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20586 = p__20584;
var map__20586__$1 = cljs.core.__destructure_map(map__20586);
var msg = map__20586__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20586__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20597,p__20598){
var map__20599 = p__20597;
var map__20599__$1 = cljs.core.__destructure_map(map__20599);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20599__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20600 = p__20598;
var map__20600__$1 = cljs.core.__destructure_map(map__20600);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20600__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20603,p__20604){
var map__20605 = p__20603;
var map__20605__$1 = cljs.core.__destructure_map(map__20605);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20605__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20605__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20606 = p__20604;
var map__20606__$1 = cljs.core.__destructure_map(map__20606);
var msg = map__20606__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20606__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20607,tid){
var map__20610 = p__20607;
var map__20610__$1 = cljs.core.__destructure_map(map__20610);
var svc = map__20610__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20610__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20618 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20619 = null;
var count__20620 = (0);
var i__20621 = (0);
while(true){
if((i__20621 < count__20620)){
var vec__20632 = chunk__20619.cljs$core$IIndexed$_nth$arity$2(null,i__20621);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20632,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20632,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20644 = seq__20618;
var G__20645 = chunk__20619;
var G__20646 = count__20620;
var G__20647 = (i__20621 + (1));
seq__20618 = G__20644;
chunk__20619 = G__20645;
count__20620 = G__20646;
i__20621 = G__20647;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20618);
if(temp__5804__auto__){
var seq__20618__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20618__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20618__$1);
var G__20648 = cljs.core.chunk_rest(seq__20618__$1);
var G__20649 = c__5568__auto__;
var G__20650 = cljs.core.count(c__5568__auto__);
var G__20651 = (0);
seq__20618 = G__20648;
chunk__20619 = G__20649;
count__20620 = G__20650;
i__20621 = G__20651;
continue;
} else {
var vec__20639 = cljs.core.first(seq__20618__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20639,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20639,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20652 = cljs.core.next(seq__20618__$1);
var G__20653 = null;
var G__20654 = (0);
var G__20655 = (0);
seq__20618 = G__20652;
chunk__20619 = G__20653;
count__20620 = G__20654;
i__20621 = G__20655;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20614_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20614_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20615_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20615_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20616_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20616_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20617_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20617_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20642){
var map__20643 = p__20642;
var map__20643__$1 = cljs.core.__destructure_map(map__20643);
var svc = map__20643__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20643__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20643__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
