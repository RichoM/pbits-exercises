goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16381,res){
var map__16383 = p__16381;
var map__16383__$1 = cljs.core.__destructure_map(map__16383);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16383__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16383__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16399 = res;
var G__16399__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16399,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16399);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16399__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16399__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16405 = arguments.length;
switch (G__16405) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16423,msg,handlers,timeout_after_ms){
var map__16424 = p__16423;
var map__16424__$1 = cljs.core.__destructure_map(map__16424);
var runtime = map__16424__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16424__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16734 = arguments.length;
var i__5770__auto___16735 = (0);
while(true){
if((i__5770__auto___16735 < len__5769__auto___16734)){
args__5775__auto__.push((arguments[i__5770__auto___16735]));

var G__16736 = (i__5770__auto___16735 + (1));
i__5770__auto___16735 = G__16736;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16431,ev,args){
var map__16432 = p__16431;
var map__16432__$1 = cljs.core.__destructure_map(map__16432);
var runtime = map__16432__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16433 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16436 = null;
var count__16437 = (0);
var i__16438 = (0);
while(true){
if((i__16438 < count__16437)){
var ext = chunk__16436.cljs$core$IIndexed$_nth$arity$2(null,i__16438);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16771 = seq__16433;
var G__16772 = chunk__16436;
var G__16773 = count__16437;
var G__16774 = (i__16438 + (1));
seq__16433 = G__16771;
chunk__16436 = G__16772;
count__16437 = G__16773;
i__16438 = G__16774;
continue;
} else {
var G__16780 = seq__16433;
var G__16781 = chunk__16436;
var G__16782 = count__16437;
var G__16783 = (i__16438 + (1));
seq__16433 = G__16780;
chunk__16436 = G__16781;
count__16437 = G__16782;
i__16438 = G__16783;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16433);
if(temp__5804__auto__){
var seq__16433__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16433__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16433__$1);
var G__16798 = cljs.core.chunk_rest(seq__16433__$1);
var G__16799 = c__5568__auto__;
var G__16800 = cljs.core.count(c__5568__auto__);
var G__16801 = (0);
seq__16433 = G__16798;
chunk__16436 = G__16799;
count__16437 = G__16800;
i__16438 = G__16801;
continue;
} else {
var ext = cljs.core.first(seq__16433__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16802 = cljs.core.next(seq__16433__$1);
var G__16803 = null;
var G__16804 = (0);
var G__16805 = (0);
seq__16433 = G__16802;
chunk__16436 = G__16803;
count__16437 = G__16804;
i__16438 = G__16805;
continue;
} else {
var G__16806 = cljs.core.next(seq__16433__$1);
var G__16807 = null;
var G__16808 = (0);
var G__16809 = (0);
seq__16433 = G__16806;
chunk__16436 = G__16807;
count__16437 = G__16808;
i__16438 = G__16809;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16428){
var G__16429 = cljs.core.first(seq16428);
var seq16428__$1 = cljs.core.next(seq16428);
var G__16430 = cljs.core.first(seq16428__$1);
var seq16428__$2 = cljs.core.next(seq16428__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16429,G__16430,seq16428__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16520,p__16521){
var map__16523 = p__16520;
var map__16523__$1 = cljs.core.__destructure_map(map__16523);
var runtime = map__16523__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16523__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16524 = p__16521;
var map__16524__$1 = cljs.core.__destructure_map(map__16524);
var msg = map__16524__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16524__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__16527 = cljs.core.deref(state_ref);
var map__16527__$1 = cljs.core.__destructure_map(map__16527);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16527__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16527__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16535){
var map__16536 = p__16535;
var map__16536__$1 = cljs.core.__destructure_map(map__16536);
var runtime = map__16536__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16536__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16540,msg){
var map__16541 = p__16540;
var map__16541__$1 = cljs.core.__destructure_map(map__16541);
var runtime = map__16541__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16541__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16606,key,p__16607){
var map__16611 = p__16606;
var map__16611__$1 = cljs.core.__destructure_map(map__16611);
var state = map__16611__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16611__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16612 = p__16607;
var map__16612__$1 = cljs.core.__destructure_map(map__16612);
var spec = map__16612__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16612__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16613,key,spec){
var map__16614 = p__16613;
var map__16614__$1 = cljs.core.__destructure_map(map__16614);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16614__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16615_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16615_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16616_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16616_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16617_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16617_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16618_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16618_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16619_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16619_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16629,key){
var map__16631 = p__16629;
var map__16631__$1 = cljs.core.__destructure_map(map__16631);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16631__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16640,msg){
var map__16641 = p__16640;
var map__16641__$1 = cljs.core.__destructure_map(map__16641);
var runtime = map__16641__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16641__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16643,p__16644){
var map__16646 = p__16643;
var map__16646__$1 = cljs.core.__destructure_map(map__16646);
var runtime = map__16646__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16646__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16647 = p__16644;
var map__16647__$1 = cljs.core.__destructure_map(map__16647);
var msg = map__16647__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16647__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16647__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__16653 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16655 = null;
var count__16656 = (0);
var i__16657 = (0);
while(true){
if((i__16657 < count__16656)){
var map__16668 = chunk__16655.cljs$core$IIndexed$_nth$arity$2(null,i__16657);
var map__16668__$1 = cljs.core.__destructure_map(map__16668);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16668__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16847 = seq__16653;
var G__16848 = chunk__16655;
var G__16849 = count__16656;
var G__16850 = (i__16657 + (1));
seq__16653 = G__16847;
chunk__16655 = G__16848;
count__16656 = G__16849;
i__16657 = G__16850;
continue;
} else {
var G__16851 = seq__16653;
var G__16852 = chunk__16655;
var G__16853 = count__16656;
var G__16854 = (i__16657 + (1));
seq__16653 = G__16851;
chunk__16655 = G__16852;
count__16656 = G__16853;
i__16657 = G__16854;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16653);
if(temp__5804__auto__){
var seq__16653__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16653__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16653__$1);
var G__16855 = cljs.core.chunk_rest(seq__16653__$1);
var G__16856 = c__5568__auto__;
var G__16857 = cljs.core.count(c__5568__auto__);
var G__16858 = (0);
seq__16653 = G__16855;
chunk__16655 = G__16856;
count__16656 = G__16857;
i__16657 = G__16858;
continue;
} else {
var map__16718 = cljs.core.first(seq__16653__$1);
var map__16718__$1 = cljs.core.__destructure_map(map__16718);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16718__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16859 = cljs.core.next(seq__16653__$1);
var G__16860 = null;
var G__16861 = (0);
var G__16862 = (0);
seq__16653 = G__16859;
chunk__16655 = G__16860;
count__16656 = G__16861;
i__16657 = G__16862;
continue;
} else {
var G__16863 = cljs.core.next(seq__16653__$1);
var G__16864 = null;
var G__16865 = (0);
var G__16866 = (0);
seq__16653 = G__16863;
chunk__16655 = G__16864;
count__16656 = G__16865;
i__16657 = G__16866;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
