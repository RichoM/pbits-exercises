goog.provide('crate.binding');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.atm)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path);
} else {
return null;
}
}));

(crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<SubAtom: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path)], 0)),">"].join(''));
}));

(crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__23924 = cljs.core.seq(self__.watches);
var chunk__23925 = null;
var count__23926 = (0);
var i__23927 = (0);
while(true){
if((i__23927 < count__23926)){
var vec__23941 = chunk__23925.cljs$core$IIndexed$_nth$arity$2(null,i__23927);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23941,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23941,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));


var G__24062 = seq__23924;
var G__24063 = chunk__23925;
var G__24064 = count__23926;
var G__24065 = (i__23927 + (1));
seq__23924 = G__24062;
chunk__23925 = G__24063;
count__23926 = G__24064;
i__23927 = G__24065;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23924);
if(temp__5804__auto__){
var seq__23924__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23924__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23924__$1);
var G__24066 = cljs.core.chunk_rest(seq__23924__$1);
var G__24067 = c__5568__auto__;
var G__24068 = cljs.core.count(c__5568__auto__);
var G__24069 = (0);
seq__23924 = G__24066;
chunk__23925 = G__24067;
count__23926 = G__24068;
i__23927 = G__24069;
continue;
} else {
var vec__23944 = cljs.core.first(seq__23924__$1);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23944,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23944,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));


var G__24070 = cljs.core.next(seq__23924__$1);
var G__24071 = null;
var G__24072 = (0);
var G__24073 = (0);
seq__23924 = G__24070;
chunk__23925 = G__24071;
count__23926 = G__24072;
i__23927 = G__24073;
continue;
}
} else {
return null;
}
}
break;
}
}));

(crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return (this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,f));
} else {
return null;
}
}));

(crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1));
}));

(crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(crate.binding.SubAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"prevhash","prevhash",1446045952,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(crate.binding.SubAtom.cljs$lang$type = true);

(crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom");

(crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"crate.binding/SubAtom");
}));

/**
 * Positional factory function for crate.binding/SubAtom.
 */
crate.binding.__GT_SubAtom = (function crate$binding$__GT_SubAtom(atm,path,prevhash,watches,key){
return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});

crate.binding.subatom = (function crate$binding$subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var vec__23951 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));
var atm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23951,(0),null);
var path__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23951,(1),null);
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(atm__$1),path__$2)),null,k));
cljs.core.add_watch(atm__$1,k,(function (_,___$1,ov,nv){
var latest = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nv,path__$2);
var prev = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2);
var latest_hash = cljs.core.hash(latest);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,latest)))){
(sa.prevhash = latest_hash);

return sa.cljs$core$IWatchable$_notify_watches$arity$3(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ov,path__$2),latest);
} else {
return null;
}
}));

return sa;
});
/**
 * Sets the value of atom to newval without regard for the
 *   current value. Returns newval.
 */
crate.binding.sub_reset_BANG_ = (function crate$binding$sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sa.atm,cljs.core.assoc_in,sa.path,new_value);

return new_value;
});
/**
 * Atomically swaps the value of atom to be:
 *   (apply f current-value-of-atom args). Note that f may be called
 *   multiple times, and thus should be free of side effects.  Returns
 *   the value that was swapped in.
 */
crate.binding.sub_swap_BANG_ = (function crate$binding$sub_swap_BANG_(var_args){
var G__23971 = arguments.length;
switch (G__23971) {
case 2:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___24075 = arguments.length;
var i__5770__auto___24076 = (0);
while(true){
if((i__5770__auto___24076 < len__5769__auto___24075)){
args_arr__5794__auto__.push((arguments[i__5770__auto___24076]));

var G__24077 = (i__5770__auto___24076 + (1));
i__5770__auto___24076 = G__24077;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((5)),(0),null));
return crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5795__auto__);

}
});

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sa,f){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__23972 = cljs.core.deref(sa);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23972) : f.call(null,G__23972));
})());
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__23973 = cljs.core.deref(sa);
var G__23974 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23973,G__23974) : f.call(null,G__23973,G__23974));
})());
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__23975 = cljs.core.deref(sa);
var G__23976 = x;
var G__23977 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23975,G__23976,G__23977) : f.call(null,G__23975,G__23976,G__23977));
})());
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_(sa,(function (){var G__23978 = cljs.core.deref(sa);
var G__23979 = x;
var G__23980 = y;
var G__23981 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__23978,G__23979,G__23980,G__23981) : f.call(null,G__23978,G__23979,G__23980,G__23981));
})());
}));

(crate.binding.sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_(sa,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.deref(sa),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
}));

/** @this {Function} */
(crate.binding.sub_swap_BANG_.cljs$lang$applyTo = (function (seq23965){
var G__23966 = cljs.core.first(seq23965);
var seq23965__$1 = cljs.core.next(seq23965);
var G__23967 = cljs.core.first(seq23965__$1);
var seq23965__$2 = cljs.core.next(seq23965__$1);
var G__23968 = cljs.core.first(seq23965__$2);
var seq23965__$3 = cljs.core.next(seq23965__$2);
var G__23969 = cljs.core.first(seq23965__$3);
var seq23965__$4 = cljs.core.next(seq23965__$3);
var G__23970 = cljs.core.first(seq23965__$4);
var seq23965__$5 = cljs.core.next(seq23965__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23966,G__23967,G__23968,G__23969,G__23970,seq23965__$5);
}));

(crate.binding.sub_swap_BANG_.cljs$lang$maxFixedArity = (5));

crate.binding.sub_destroy_BANG_ = (function crate$binding$sub_destroy_BANG_(sa){
cljs.core.remove_watch(sa.atm,sa.key);

(sa.watches = null);

return (sa.atm = null);
});

/**
 * @interface
 */
crate.binding.computable = function(){};

var crate$binding$computable$_depend$dyn_24078 = (function (this$,atm){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (crate.binding._depend[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,atm) : m__5394__auto__.call(null,this$,atm));
} else {
var m__5392__auto__ = (crate.binding._depend["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,atm) : m__5392__auto__.call(null,this$,atm));
} else {
throw cljs.core.missing_protocol("computable.-depend",this$);
}
}
});
/**
 * depend on an atom
 */
crate.binding._depend = (function crate$binding$_depend(this$,atm){
if((((!((this$ == null)))) && ((!((this$.crate$binding$computable$_depend$arity$2 == null)))))){
return this$.crate$binding$computable$_depend$arity$2(this$,atm);
} else {
return crate$binding$computable$_depend$dyn_24078(this$,atm);
}
});

var crate$binding$computable$_compute$dyn_24084 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (crate.binding._compute[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (crate.binding._compute["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("computable.-compute",this$);
}
}
});
/**
 * compute the latest value
 */
crate.binding._compute = (function crate$binding$_compute(this$){
if((((!((this$ == null)))) && ((!((this$.crate$binding$computable$_compute$arity$1 == null)))))){
return this$.crate$binding$computable$_compute$arity$1(this$);
} else {
return crate$binding$computable$_compute$dyn_24084(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {crate.binding.computable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
crate.binding.Computed = (function (atms,value,func,watches,key,meta){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<Computed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.value], 0)),">"].join(''));
}));

(crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__23982 = cljs.core.seq(self__.watches);
var chunk__23983 = null;
var count__23984 = (0);
var i__23985 = (0);
while(true){
if((i__23985 < count__23984)){
var vec__23992 = chunk__23983.cljs$core$IIndexed$_nth$arity$2(null,i__23985);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23992,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23992,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));


var G__24087 = seq__23982;
var G__24088 = chunk__23983;
var G__24089 = count__23984;
var G__24090 = (i__23985 + (1));
seq__23982 = G__24087;
chunk__23983 = G__24088;
count__23984 = G__24089;
i__23985 = G__24090;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23982);
if(temp__5804__auto__){
var seq__23982__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23982__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23982__$1);
var G__24093 = cljs.core.chunk_rest(seq__23982__$1);
var G__24094 = c__5568__auto__;
var G__24095 = cljs.core.count(c__5568__auto__);
var G__24096 = (0);
seq__23982 = G__24093;
chunk__23983 = G__24094;
count__23984 = G__24095;
i__23985 = G__24096;
continue;
} else {
var vec__23995 = cljs.core.first(seq__23982__$1);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23995,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23995,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key__$1,this$__$1,oldval,newval) : f.call(null,key__$1,this$__$1,oldval,newval));


var G__24097 = cljs.core.next(seq__23982__$1);
var G__24098 = null;
var G__24099 = (0);
var G__24100 = (0);
seq__23982 = G__24097;
chunk__23983 = G__24098;
count__23984 = G__24099;
i__23985 = G__24100;
continue;
}
} else {
return null;
}
}
break;
}
}));

(crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(f)){
return (this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__$1,f));
} else {
return null;
}
}));

(crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__$1));
}));

(crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(crate.binding.Computed.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(crate.binding.Computed.prototype.crate$binding$computable$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.Computed.prototype.crate$binding$computable$_depend$arity$2 = (function (this$,atm){
var self__ = this;
var this$__$1 = this;
(this$__$1.atms = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(this$__$1.atms,atm));

return cljs.core.add_watch(atm,self__.key,(function (_,___$1,___$2,___$3){
return this$__$1.crate$binding$computable$_compute$arity$1(null);
}));
}));

(crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var old = this$__$1.value;
var nv = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.func,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,self__.atms));
(this$__$1.value = nv);

return this$__$1.cljs$core$IWatchable$_notify_watches$arity$3(null,old,nv);
}));

(crate.binding.Computed.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atms","atms",-855465715,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(crate.binding.Computed.cljs$lang$type = true);

(crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed");

(crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"crate.binding/Computed");
}));

/**
 * Positional factory function for crate.binding/Computed.
 */
crate.binding.__GT_Computed = (function crate$binding$__GT_Computed(atms,value,func,watches,key,meta){
return (new crate.binding.Computed(atms,value,func,watches,key,meta));
});

crate.binding.computed = (function crate$binding$computed(atms,func){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("computed");
var neue = (new crate.binding.Computed(cljs.core.PersistentVector.EMPTY,null,func,null,k,null));
neue.crate$binding$computable$_compute$arity$1(null);

var seq__23998_24101 = cljs.core.seq(atms);
var chunk__23999_24102 = null;
var count__24000_24103 = (0);
var i__24001_24104 = (0);
while(true){
if((i__24001_24104 < count__24000_24103)){
var atm_24105 = chunk__23999_24102.cljs$core$IIndexed$_nth$arity$2(null,i__24001_24104);
neue.crate$binding$computable$_depend$arity$2(null,atm_24105);


var G__24106 = seq__23998_24101;
var G__24107 = chunk__23999_24102;
var G__24108 = count__24000_24103;
var G__24109 = (i__24001_24104 + (1));
seq__23998_24101 = G__24106;
chunk__23999_24102 = G__24107;
count__24000_24103 = G__24108;
i__24001_24104 = G__24109;
continue;
} else {
var temp__5804__auto___24110 = cljs.core.seq(seq__23998_24101);
if(temp__5804__auto___24110){
var seq__23998_24111__$1 = temp__5804__auto___24110;
if(cljs.core.chunked_seq_QMARK_(seq__23998_24111__$1)){
var c__5568__auto___24112 = cljs.core.chunk_first(seq__23998_24111__$1);
var G__24114 = cljs.core.chunk_rest(seq__23998_24111__$1);
var G__24115 = c__5568__auto___24112;
var G__24116 = cljs.core.count(c__5568__auto___24112);
var G__24117 = (0);
seq__23998_24101 = G__24114;
chunk__23999_24102 = G__24115;
count__24000_24103 = G__24116;
i__24001_24104 = G__24117;
continue;
} else {
var atm_24118 = cljs.core.first(seq__23998_24111__$1);
neue.crate$binding$computable$_depend$arity$2(null,atm_24118);


var G__24119 = cljs.core.next(seq__23998_24111__$1);
var G__24120 = null;
var G__24121 = (0);
var G__24122 = (0);
seq__23998_24101 = G__24119;
chunk__23999_24102 = G__24120;
count__24000_24103 = G__24121;
i__24001_24104 = G__24122;
continue;
}
} else {
}
}
break;
}

return neue;
});
crate.binding.compute = (function crate$binding$compute(compu){
return crate.binding._compute(compu);
});
crate.binding.depend_on = (function crate$binding$depend_on(compu,atm){
return crate.binding._depend(compu,atm);
});
crate.binding.notify = (function crate$binding$notify(w,o,v){
return cljs.core._notify_watches(w,o,v);
});

/**
 * @interface
 */
crate.binding.bindable_coll = function(){};


/**
 * @interface
 */
crate.binding.bindable = function(){};

var crate$binding$bindable$_value$dyn_24123 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (crate.binding._value[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (crate.binding._value["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("bindable.-value",this$);
}
}
});
/**
 * get the current value of this binding
 */
crate.binding._value = (function crate$binding$_value(this$){
if((((!((this$ == null)))) && ((!((this$.crate$binding$bindable$_value$arity$1 == null)))))){
return this$.crate$binding$bindable$_value$arity$1(this$);
} else {
return crate$binding$bindable$_value$dyn_24123(this$);
}
});

var crate$binding$bindable$_on_change$dyn_24126 = (function (this$,func){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (crate.binding._on_change[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,func) : m__5394__auto__.call(null,this$,func));
} else {
var m__5392__auto__ = (crate.binding._on_change["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,func) : m__5392__auto__.call(null,this$,func));
} else {
throw cljs.core.missing_protocol("bindable.-on-change",this$);
}
}
});
/**
 * On change of this binding execute func
 */
crate.binding._on_change = (function crate$binding$_on_change(this$,func){
if((((!((this$ == null)))) && ((!((this$.crate$binding$bindable$_on_change$arity$2 == null)))))){
return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else {
return crate$binding$bindable$_on_change$dyn_24126(this$,func);
}
});


/**
* @constructor
 * @implements {crate.binding.bindable}
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
});
(crate.binding.atom_binding.prototype.crate$binding$bindable$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__24002 = cljs.core.deref(self__.atm);
return (self__.value_func.cljs$core$IFn$_invoke$arity$1 ? self__.value_func.cljs$core$IFn$_invoke$arity$1(G__24002) : self__.value_func.call(null,G__24002));
}));

(crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__.atm,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("atom-binding"),(function (){
var G__24003 = this$__$1.crate$binding$bindable$_value$arity$1(null);
return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(G__24003) : func.call(null,G__24003));
}));
}));

(crate.binding.atom_binding.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"value-func","value-func",2077951825,null)], null);
}));

(crate.binding.atom_binding.cljs$lang$type = true);

(crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding");

(crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"crate.binding/atom-binding");
}));

/**
 * Positional factory function for crate.binding/atom-binding.
 */
crate.binding.__GT_atom_binding = (function crate$binding$__GT_atom_binding(atm,value_func){
return (new crate.binding.atom_binding(atm,value_func));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 2;
this.cljs$lang$protocol_mask$partition0$ = 0;
});
(crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__24004 = cljs.core.seq(self__.watches);
var chunk__24005 = null;
var count__24006 = (0);
var i__24007 = (0);
while(true){
if((i__24007 < count__24006)){
var vec__24014 = chunk__24005.cljs$core$IIndexed$_nth$arity$2(null,i__24007);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));


var G__24129 = seq__24004;
var G__24131 = chunk__24005;
var G__24132 = count__24006;
var G__24133 = (i__24007 + (1));
seq__24004 = G__24129;
chunk__24005 = G__24131;
count__24006 = G__24132;
i__24007 = G__24133;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24004);
if(temp__5804__auto__){
var seq__24004__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24004__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24004__$1);
var G__24134 = cljs.core.chunk_rest(seq__24004__$1);
var G__24135 = c__5568__auto__;
var G__24136 = cljs.core.count(c__5568__auto__);
var G__24137 = (0);
seq__24004 = G__24134;
chunk__24005 = G__24135;
count__24006 = G__24136;
i__24007 = G__24137;
continue;
} else {
var vec__24017 = cljs.core.first(seq__24004__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24017,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));


var G__24138 = cljs.core.next(seq__24004__$1);
var G__24139 = null;
var G__24140 = (0);
var G__24141 = (0);
seq__24004 = G__24138;
chunk__24005 = G__24139;
count__24006 = G__24140;
i__24007 = G__24141;
continue;
}
} else {
return null;
}
}
break;
}
}));

(crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f));
}));

(crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key));
}));

(crate.binding.notifier.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
}));

(crate.binding.notifier.cljs$lang$type = true);

(crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier");

(crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"crate.binding/notifier");
}));

/**
 * Positional factory function for crate.binding/notifier.
 */
crate.binding.__GT_notifier = (function crate$binding$__GT_notifier(watches){
return (new crate.binding.notifier(watches));
});


/**
* @constructor
 * @implements {crate.binding.bindable}
 * @implements {crate.binding.bindable_coll}
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
});
(crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.bound_collection.prototype.crate$binding$bindable$ = cljs.core.PROTOCOL_SENTINEL);

(crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elem","elem",618631056),cljs.core.vals(this$__$1.stuff));
}));

(crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__.notif,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),(function (_,___$1,___$2,p__24020){
var vec__24021 = p__24020;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24021,(0),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24021,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24021,(2),null);
return (func.cljs$core$IFn$_invoke$arity$3 ? func.cljs$core$IFn$_invoke$arity$3(event,el,v) : func.call(null,event,el,v));
}));
}));

(crate.binding.bound_collection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"notif","notif",-1551848296,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"stuff","stuff",-411032116,null)], null);
}));

(crate.binding.bound_collection.cljs$lang$type = true);

(crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection");

(crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"crate.binding/bound-collection");
}));

/**
 * Positional factory function for crate.binding/bound-collection.
 */
crate.binding.__GT_bound_collection = (function crate$binding$__GT_bound_collection(atm,notif,opts,stuff){
return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});

crate.binding.opt = (function crate$binding$opt(bc,k){
var fexpr__24024 = bc.opts;
return (fexpr__24024.cljs$core$IFn$_invoke$arity$1 ? fexpr__24024.cljs$core$IFn$_invoke$arity$1(k) : fexpr__24024.call(null,k));
});
crate.binding.bc_add = (function crate$binding$bc_add(bc,path,key){
var sa = crate.binding.subatom(bc.atm,path);
var elem = (function (){var fexpr__24025 = crate.binding.opt(bc,new cljs.core.Keyword(null,"as","as",1148689641));
return (fexpr__24025.cljs$core$IFn$_invoke$arity$1 ? fexpr__24025.cljs$core$IFn$_invoke$arity$1(sa) : fexpr__24025.call(null,sa));
})();
(bc.stuff = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"subatom","subatom",-95454370),sa], null)));

return crate.binding.notify(bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",235287739),elem,cljs.core.deref(sa)], null));
});
crate.binding.bc_remove = (function crate$binding$bc_remove(bc,key){
var notif = bc.notif;
var prev = (function (){var fexpr__24026 = bc.stuff;
return (fexpr__24026.cljs$core$IFn$_invoke$arity$1 ? fexpr__24026.cljs$core$IFn$_invoke$arity$1(key) : fexpr__24026.call(null,key));
})();
(bc.stuff = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bc.stuff,key));

crate.binding.notify(bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"elem","elem",618631056).cljs$core$IFn$_invoke$arity$1(prev),null], null));

return crate.binding.sub_destroy_BANG_(new cljs.core.Keyword(null,"subatom","subatom",-95454370).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function crate$binding$__GT_indexed(coll){
if(cljs.core.map_QMARK_(coll)){
return cljs.core.seq(coll);
} else {
if(cljs.core.set_QMARK_(coll)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.identity),coll);
} else {
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);

}
}
});
crate.binding.__GT_keyed = (function crate$binding$__GT_keyed(coll,keyfn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(keyfn,crate.binding.__GT_indexed(coll)));
});
crate.binding.__GT_path = (function crate$binding$__GT_path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24151 = arguments.length;
var i__5770__auto___24152 = (0);
while(true){
if((i__5770__auto___24152 < len__5769__auto___24151)){
args__5775__auto__.push((arguments[i__5770__auto___24152]));

var G__24153 = (i__5770__auto___24152 + (1));
i__5770__auto___24152 = G__24153;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(crate.binding.__GT_path.cljs$core$IFn$_invoke$arity$variadic = (function (bc,segs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = crate.binding.opt(bc,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
}));

(crate.binding.__GT_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crate.binding.__GT_path.cljs$lang$applyTo = (function (seq24027){
var G__24028 = cljs.core.first(seq24027);
var seq24027__$1 = cljs.core.next(seq24027);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24028,seq24027__$1);
}));

crate.binding.bc_compare = (function crate$binding$bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(prev));
var nset = crate.binding.__GT_keyed(neue,crate.binding.opt(bc,new cljs.core.Keyword(null,"keyfn","keyfn",780060332)));
var added = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(nset,pset));
var removed = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(pset,nset));
var seq__24029_24155 = cljs.core.seq(added);
var chunk__24030_24156 = null;
var count__24031_24157 = (0);
var i__24032_24158 = (0);
while(true){
if((i__24032_24158 < count__24031_24157)){
var a_24159 = chunk__24030_24156.cljs$core$IIndexed$_nth$arity$2(null,i__24032_24158);
crate.binding.bc_add(bc,a_24159,a_24159);


var G__24160 = seq__24029_24155;
var G__24161 = chunk__24030_24156;
var G__24162 = count__24031_24157;
var G__24163 = (i__24032_24158 + (1));
seq__24029_24155 = G__24160;
chunk__24030_24156 = G__24161;
count__24031_24157 = G__24162;
i__24032_24158 = G__24163;
continue;
} else {
var temp__5804__auto___24164 = cljs.core.seq(seq__24029_24155);
if(temp__5804__auto___24164){
var seq__24029_24165__$1 = temp__5804__auto___24164;
if(cljs.core.chunked_seq_QMARK_(seq__24029_24165__$1)){
var c__5568__auto___24166 = cljs.core.chunk_first(seq__24029_24165__$1);
var G__24167 = cljs.core.chunk_rest(seq__24029_24165__$1);
var G__24168 = c__5568__auto___24166;
var G__24169 = cljs.core.count(c__5568__auto___24166);
var G__24170 = (0);
seq__24029_24155 = G__24167;
chunk__24030_24156 = G__24168;
count__24031_24157 = G__24169;
i__24032_24158 = G__24170;
continue;
} else {
var a_24171 = cljs.core.first(seq__24029_24165__$1);
crate.binding.bc_add(bc,a_24171,a_24171);


var G__24172 = cljs.core.next(seq__24029_24165__$1);
var G__24173 = null;
var G__24174 = (0);
var G__24175 = (0);
seq__24029_24155 = G__24172;
chunk__24030_24156 = G__24173;
count__24031_24157 = G__24174;
i__24032_24158 = G__24175;
continue;
}
} else {
}
}
break;
}

var seq__24033 = cljs.core.seq(removed);
var chunk__24034 = null;
var count__24035 = (0);
var i__24036 = (0);
while(true){
if((i__24036 < count__24035)){
var r = chunk__24034.cljs$core$IIndexed$_nth$arity$2(null,i__24036);
crate.binding.bc_remove(bc,r);


var G__24176 = seq__24033;
var G__24177 = chunk__24034;
var G__24178 = count__24035;
var G__24179 = (i__24036 + (1));
seq__24033 = G__24176;
chunk__24034 = G__24177;
count__24035 = G__24178;
i__24036 = G__24179;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24033);
if(temp__5804__auto__){
var seq__24033__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24033__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24033__$1);
var G__24184 = cljs.core.chunk_rest(seq__24033__$1);
var G__24185 = c__5568__auto__;
var G__24186 = cljs.core.count(c__5568__auto__);
var G__24187 = (0);
seq__24033 = G__24184;
chunk__24034 = G__24185;
count__24035 = G__24186;
i__24036 = G__24187;
continue;
} else {
var r = cljs.core.first(seq__24033__$1);
crate.binding.bc_remove(bc,r);


var G__24188 = cljs.core.next(seq__24033__$1);
var G__24189 = null;
var G__24190 = (0);
var G__24191 = (0);
seq__24033 = G__24188;
chunk__24034 = G__24189;
count__24035 = G__24190;
i__24036 = G__24191;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.binding.bound_coll = (function crate$binding$bound_coll(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24192 = arguments.length;
var i__5770__auto___24193 = (0);
while(true){
if((i__5770__auto___24193 < len__5769__auto___24192)){
args__5775__auto__.push((arguments[i__5770__auto___24193]));

var G__24194 = (i__5770__auto___24193 + (1));
i__5770__auto___24193 = G__24194;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(crate.binding.bound_coll.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__24039){
var vec__24040 = p__24039;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24040,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24040,(1),null);
var vec__24043 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24043,(0),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24043,(1),null);
var atm__$1 = ((cljs.core.not(path__$1))?atm:crate.binding.subatom(atm,path__$1));
var opts__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
var opts__$3 = ((cljs.core.not(new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map()));
cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare(bc,neue);
}));

crate.binding.bc_compare(bc,cljs.core.deref(atm__$1));

return bc;
}));

(crate.binding.bound_coll.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crate.binding.bound_coll.cljs$lang$applyTo = (function (seq24037){
var G__24038 = cljs.core.first(seq24037);
var seq24037__$1 = cljs.core.next(seq24037);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24038,seq24037__$1);
}));

crate.binding.map_bound = (function crate$binding$map_bound(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24199 = arguments.length;
var i__5770__auto___24200 = (0);
while(true){
if((i__5770__auto___24200 < len__5769__auto___24199)){
args__5775__auto__.push((arguments[i__5770__auto___24200]));

var G__24201 = (i__5770__auto___24200 + (1));
i__5770__auto___24200 = G__24201;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(crate.binding.map_bound.cljs$core$IFn$_invoke$arity$variadic = (function (as,atm,p__24049){
var vec__24050 = p__24049;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24050,(0),null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"as","as",1148689641),as);
var atm__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom(atm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts__$1)));
var opts__$2 = ((cljs.core.not(new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.first):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map()));
cljs.core.add_watch(atm__$1,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare(bc,neue);
}));

crate.binding.bc_compare(bc,cljs.core.deref(atm__$1));

return bc;
}));

(crate.binding.map_bound.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(crate.binding.map_bound.cljs$lang$applyTo = (function (seq24046){
var G__24047 = cljs.core.first(seq24046);
var seq24046__$1 = cljs.core.next(seq24046);
var G__24048 = cljs.core.first(seq24046__$1);
var seq24046__$2 = cljs.core.next(seq24046__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24047,G__24048,seq24046__$2);
}));

crate.binding.binding_QMARK_ = (function crate$binding$binding_QMARK_(b){
if((!((b == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === b.crate$binding$bindable$)))){
return true;
} else {
if((!b.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable,b);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable,b);
}
});
crate.binding.binding_coll_QMARK_ = (function crate$binding$binding_coll_QMARK_(b){
if((!((b == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === b.crate$binding$bindable_coll$)))){
return true;
} else {
if((!b.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable_coll,b);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(crate.binding.bindable_coll,b);
}
});
crate.binding.deref_QMARK_ = (function crate$binding$deref_QMARK_(atm){
if((!((atm == null)))){
if((((atm.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === atm.cljs$core$IDeref$)))){
return true;
} else {
if((!atm.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atm);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atm);
}
});
crate.binding.value = (function crate$binding$value(b){
return crate.binding._value(b);
});
crate.binding.index = (function crate$binding$index(sub_atom){
return cljs.core.last(sub_atom.path);
});
crate.binding.on_change = (function crate$binding$on_change(b,func){
return crate.binding._on_change(b,func);
});
crate.binding.bound = (function crate$binding$bound(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24202 = arguments.length;
var i__5770__auto___24203 = (0);
while(true){
if((i__5770__auto___24203 < len__5769__auto___24202)){
args__5775__auto__.push((arguments[i__5770__auto___24203]));

var G__24204 = (i__5770__auto___24203 + (1));
i__5770__auto___24203 = G__24204;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(crate.binding.bound.cljs$core$IFn$_invoke$arity$variadic = (function (atm,p__24058){
var vec__24059 = p__24058;
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24059,(0),null);
var func__$1 = (function (){var or__5045__auto__ = func;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
}));

(crate.binding.bound.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crate.binding.bound.cljs$lang$applyTo = (function (seq24056){
var G__24057 = cljs.core.first(seq24056);
var seq24056__$1 = cljs.core.next(seq24056);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24057,seq24056__$1);
}));


//# sourceMappingURL=crate.binding.js.map
