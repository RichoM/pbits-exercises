goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14531 = arguments.length;
switch (G__14531) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14543 = (function (f,blockable,meta14544){
this.f = f;
this.blockable = blockable;
this.meta14544 = meta14544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14545,meta14544__$1){
var self__ = this;
var _14545__$1 = this;
return (new cljs.core.async.t_cljs$core$async14543(self__.f,self__.blockable,meta14544__$1));
}));

(cljs.core.async.t_cljs$core$async14543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14545){
var self__ = this;
var _14545__$1 = this;
return self__.meta14544;
}));

(cljs.core.async.t_cljs$core$async14543.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14544","meta14544",-921810246,null)], null);
}));

(cljs.core.async.t_cljs$core$async14543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14543");

(cljs.core.async.t_cljs$core$async14543.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14543.
 */
cljs.core.async.__GT_t_cljs$core$async14543 = (function cljs$core$async$__GT_t_cljs$core$async14543(f__$1,blockable__$1,meta14544){
return (new cljs.core.async.t_cljs$core$async14543(f__$1,blockable__$1,meta14544));
});

}

return (new cljs.core.async.t_cljs$core$async14543(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14561 = arguments.length;
switch (G__14561) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14574 = arguments.length;
switch (G__14574) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14587 = arguments.length;
switch (G__14587) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17482 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17482) : fn1.call(null,val_17482));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17482) : fn1.call(null,val_17482));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14596 = arguments.length;
switch (G__14596) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17492 = n;
var x_17494 = (0);
while(true){
if((x_17494 < n__5636__auto___17492)){
(a[x_17494] = x_17494);

var G__17496 = (x_17494 + (1));
x_17494 = G__17496;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14611 = (function (flag,meta14612){
this.flag = flag;
this.meta14612 = meta14612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14613,meta14612__$1){
var self__ = this;
var _14613__$1 = this;
return (new cljs.core.async.t_cljs$core$async14611(self__.flag,meta14612__$1));
}));

(cljs.core.async.t_cljs$core$async14611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14613){
var self__ = this;
var _14613__$1 = this;
return self__.meta14612;
}));

(cljs.core.async.t_cljs$core$async14611.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14611.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14612","meta14612",-239603310,null)], null);
}));

(cljs.core.async.t_cljs$core$async14611.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14611");

(cljs.core.async.t_cljs$core$async14611.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14611");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14611.
 */
cljs.core.async.__GT_t_cljs$core$async14611 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14611(flag__$1,meta14612){
return (new cljs.core.async.t_cljs$core$async14611(flag__$1,meta14612));
});

}

return (new cljs.core.async.t_cljs$core$async14611(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14620 = (function (flag,cb,meta14621){
this.flag = flag;
this.cb = cb;
this.meta14621 = meta14621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14622,meta14621__$1){
var self__ = this;
var _14622__$1 = this;
return (new cljs.core.async.t_cljs$core$async14620(self__.flag,self__.cb,meta14621__$1));
}));

(cljs.core.async.t_cljs$core$async14620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14622){
var self__ = this;
var _14622__$1 = this;
return self__.meta14621;
}));

(cljs.core.async.t_cljs$core$async14620.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14621","meta14621",-425649148,null)], null);
}));

(cljs.core.async.t_cljs$core$async14620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14620");

(cljs.core.async.t_cljs$core$async14620.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14620.
 */
cljs.core.async.__GT_t_cljs$core$async14620 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14620(flag__$1,cb__$1,meta14621){
return (new cljs.core.async.t_cljs$core$async14620(flag__$1,cb__$1,meta14621));
});

}

return (new cljs.core.async.t_cljs$core$async14620(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14637_SHARP_){
var G__14639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14637_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14639) : fret.call(null,G__14639));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14638_SHARP_){
var G__14640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14638_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14640) : fret.call(null,G__14640));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17535 = (i + (1));
i = G__17535;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17536 = arguments.length;
var i__5770__auto___17537 = (0);
while(true){
if((i__5770__auto___17537 < len__5769__auto___17536)){
args__5775__auto__.push((arguments[i__5770__auto___17537]));

var G__17538 = (i__5770__auto___17537 + (1));
i__5770__auto___17537 = G__17538;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14651){
var map__14655 = p__14651;
var map__14655__$1 = cljs.core.__destructure_map(map__14655);
var opts = map__14655__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14646){
var G__14647 = cljs.core.first(seq14646);
var seq14646__$1 = cljs.core.next(seq14646);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14647,seq14646__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14659 = arguments.length;
switch (G__14659) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14437__auto___17541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_14708){
var state_val_14709 = (state_14708[(1)]);
if((state_val_14709 === (7))){
var inst_14703 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
var statearr_14710_17542 = state_14708__$1;
(statearr_14710_17542[(2)] = inst_14703);

(statearr_14710_17542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (1))){
var state_14708__$1 = state_14708;
var statearr_14711_17543 = state_14708__$1;
(statearr_14711_17543[(2)] = null);

(statearr_14711_17543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (4))){
var inst_14685 = (state_14708[(7)]);
var inst_14685__$1 = (state_14708[(2)]);
var inst_14686 = (inst_14685__$1 == null);
var state_14708__$1 = (function (){var statearr_14712 = state_14708;
(statearr_14712[(7)] = inst_14685__$1);

return statearr_14712;
})();
if(cljs.core.truth_(inst_14686)){
var statearr_14713_17547 = state_14708__$1;
(statearr_14713_17547[(1)] = (5));

} else {
var statearr_14714_17548 = state_14708__$1;
(statearr_14714_17548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (13))){
var state_14708__$1 = state_14708;
var statearr_14716_17549 = state_14708__$1;
(statearr_14716_17549[(2)] = null);

(statearr_14716_17549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (6))){
var inst_14685 = (state_14708[(7)]);
var state_14708__$1 = state_14708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14708__$1,(11),to,inst_14685);
} else {
if((state_val_14709 === (3))){
var inst_14706 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14708__$1,inst_14706);
} else {
if((state_val_14709 === (12))){
var state_14708__$1 = state_14708;
var statearr_14725_17550 = state_14708__$1;
(statearr_14725_17550[(2)] = null);

(statearr_14725_17550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (2))){
var state_14708__$1 = state_14708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14708__$1,(4),from);
} else {
if((state_val_14709 === (11))){
var inst_14695 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
if(cljs.core.truth_(inst_14695)){
var statearr_14726_17552 = state_14708__$1;
(statearr_14726_17552[(1)] = (12));

} else {
var statearr_14727_17553 = state_14708__$1;
(statearr_14727_17553[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (9))){
var state_14708__$1 = state_14708;
var statearr_14728_17554 = state_14708__$1;
(statearr_14728_17554[(2)] = null);

(statearr_14728_17554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (5))){
var state_14708__$1 = state_14708;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14729_17555 = state_14708__$1;
(statearr_14729_17555[(1)] = (8));

} else {
var statearr_14730_17556 = state_14708__$1;
(statearr_14730_17556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (14))){
var inst_14701 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
var statearr_14734_17557 = state_14708__$1;
(statearr_14734_17557[(2)] = inst_14701);

(statearr_14734_17557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (10))){
var inst_14692 = (state_14708[(2)]);
var state_14708__$1 = state_14708;
var statearr_14735_17558 = state_14708__$1;
(statearr_14735_17558[(2)] = inst_14692);

(statearr_14735_17558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14709 === (8))){
var inst_14689 = cljs.core.async.close_BANG_(to);
var state_14708__$1 = state_14708;
var statearr_14736_17559 = state_14708__$1;
(statearr_14736_17559[(2)] = inst_14689);

(statearr_14736_17559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_14737 = [null,null,null,null,null,null,null,null];
(statearr_14737[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_14737[(1)] = (1));

return statearr_14737;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_14708){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_14708);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e14738){var ex__14197__auto__ = e14738;
var statearr_14739_17560 = state_14708;
(statearr_14739_17560[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_14708[(4)]))){
var statearr_14740_17561 = state_14708;
(statearr_14740_17561[(1)] = cljs.core.first((state_14708[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17562 = state_14708;
state_14708 = G__17562;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_14708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_14708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_14744 = f__14438__auto__();
(statearr_14744[(6)] = c__14437__auto___17541);

return statearr_14744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14748){
var vec__14749 = p__14748;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14749,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14749,(1),null);
var job = vec__14749;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14437__auto___17563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_14756){
var state_val_14757 = (state_14756[(1)]);
if((state_val_14757 === (1))){
var state_14756__$1 = state_14756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14756__$1,(2),res,v);
} else {
if((state_val_14757 === (2))){
var inst_14753 = (state_14756[(2)]);
var inst_14754 = cljs.core.async.close_BANG_(res);
var state_14756__$1 = (function (){var statearr_14763 = state_14756;
(statearr_14763[(7)] = inst_14753);

return statearr_14763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14756__$1,inst_14754);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0 = (function (){
var statearr_14766 = [null,null,null,null,null,null,null,null];
(statearr_14766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__);

(statearr_14766[(1)] = (1));

return statearr_14766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1 = (function (state_14756){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_14756);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e14769){var ex__14197__auto__ = e14769;
var statearr_14770_17568 = state_14756;
(statearr_14770_17568[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_14756[(4)]))){
var statearr_14772_17569 = state_14756;
(statearr_14772_17569[(1)] = cljs.core.first((state_14756[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17570 = state_14756;
state_14756 = G__17570;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__ = function(state_14756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1.call(this,state_14756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_14773 = f__14438__auto__();
(statearr_14773[(6)] = c__14437__auto___17563);

return statearr_14773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14774){
var vec__14775 = p__14774;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14775,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14775,(1),null);
var job = vec__14775;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17575 = n;
var __17576 = (0);
while(true){
if((__17576 < n__5636__auto___17575)){
var G__14782_17577 = type;
var G__14782_17578__$1 = (((G__14782_17577 instanceof cljs.core.Keyword))?G__14782_17577.fqn:null);
switch (G__14782_17578__$1) {
case "compute":
var c__14437__auto___17580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17576,c__14437__auto___17580,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async){
return (function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = ((function (__17576,c__14437__auto___17580,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async){
return (function (state_14797){
var state_val_14798 = (state_14797[(1)]);
if((state_val_14798 === (1))){
var state_14797__$1 = state_14797;
var statearr_14802_17581 = state_14797__$1;
(statearr_14802_17581[(2)] = null);

(statearr_14802_17581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (2))){
var state_14797__$1 = state_14797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14797__$1,(4),jobs);
} else {
if((state_val_14798 === (3))){
var inst_14795 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14797__$1,inst_14795);
} else {
if((state_val_14798 === (4))){
var inst_14787 = (state_14797[(2)]);
var inst_14788 = process__$1(inst_14787);
var state_14797__$1 = state_14797;
if(cljs.core.truth_(inst_14788)){
var statearr_14803_17582 = state_14797__$1;
(statearr_14803_17582[(1)] = (5));

} else {
var statearr_14804_17583 = state_14797__$1;
(statearr_14804_17583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (5))){
var state_14797__$1 = state_14797;
var statearr_14805_17584 = state_14797__$1;
(statearr_14805_17584[(2)] = null);

(statearr_14805_17584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (6))){
var state_14797__$1 = state_14797;
var statearr_14806_17588 = state_14797__$1;
(statearr_14806_17588[(2)] = null);

(statearr_14806_17588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (7))){
var inst_14793 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
var statearr_14810_17589 = state_14797__$1;
(statearr_14810_17589[(2)] = inst_14793);

(statearr_14810_17589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17576,c__14437__auto___17580,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async))
;
return ((function (__17576,switch__14193__auto__,c__14437__auto___17580,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0 = (function (){
var statearr_14811 = [null,null,null,null,null,null,null];
(statearr_14811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__);

(statearr_14811[(1)] = (1));

return statearr_14811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1 = (function (state_14797){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_14797);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e14812){var ex__14197__auto__ = e14812;
var statearr_14813_17592 = state_14797;
(statearr_14813_17592[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_14797[(4)]))){
var statearr_14814_17593 = state_14797;
(statearr_14814_17593[(1)] = cljs.core.first((state_14797[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17594 = state_14797;
state_14797 = G__17594;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__ = function(state_14797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1.call(this,state_14797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__;
})()
;})(__17576,switch__14193__auto__,c__14437__auto___17580,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async))
})();
var state__14439__auto__ = (function (){var statearr_14816 = f__14438__auto__();
(statearr_14816[(6)] = c__14437__auto___17580);

return statearr_14816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
});})(__17576,c__14437__auto___17580,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async))
);


break;
case "async":
var c__14437__auto___17603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17576,c__14437__auto___17603,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async){
return (function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = ((function (__17576,c__14437__auto___17603,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async){
return (function (state_14829){
var state_val_14830 = (state_14829[(1)]);
if((state_val_14830 === (1))){
var state_14829__$1 = state_14829;
var statearr_14831_17604 = state_14829__$1;
(statearr_14831_17604[(2)] = null);

(statearr_14831_17604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14830 === (2))){
var state_14829__$1 = state_14829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14829__$1,(4),jobs);
} else {
if((state_val_14830 === (3))){
var inst_14827 = (state_14829[(2)]);
var state_14829__$1 = state_14829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14829__$1,inst_14827);
} else {
if((state_val_14830 === (4))){
var inst_14819 = (state_14829[(2)]);
var inst_14820 = async(inst_14819);
var state_14829__$1 = state_14829;
if(cljs.core.truth_(inst_14820)){
var statearr_14834_17605 = state_14829__$1;
(statearr_14834_17605[(1)] = (5));

} else {
var statearr_14835_17606 = state_14829__$1;
(statearr_14835_17606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14830 === (5))){
var state_14829__$1 = state_14829;
var statearr_14839_17607 = state_14829__$1;
(statearr_14839_17607[(2)] = null);

(statearr_14839_17607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14830 === (6))){
var state_14829__$1 = state_14829;
var statearr_14840_17608 = state_14829__$1;
(statearr_14840_17608[(2)] = null);

(statearr_14840_17608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14830 === (7))){
var inst_14825 = (state_14829[(2)]);
var state_14829__$1 = state_14829;
var statearr_14841_17609 = state_14829__$1;
(statearr_14841_17609[(2)] = inst_14825);

(statearr_14841_17609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17576,c__14437__auto___17603,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async))
;
return ((function (__17576,switch__14193__auto__,c__14437__auto___17603,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0 = (function (){
var statearr_14842 = [null,null,null,null,null,null,null];
(statearr_14842[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__);

(statearr_14842[(1)] = (1));

return statearr_14842;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1 = (function (state_14829){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_14829);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e14843){var ex__14197__auto__ = e14843;
var statearr_14847_17610 = state_14829;
(statearr_14847_17610[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_14829[(4)]))){
var statearr_14848_17611 = state_14829;
(statearr_14848_17611[(1)] = cljs.core.first((state_14829[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17612 = state_14829;
state_14829 = G__17612;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__ = function(state_14829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1.call(this,state_14829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__;
})()
;})(__17576,switch__14193__auto__,c__14437__auto___17603,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async))
})();
var state__14439__auto__ = (function (){var statearr_14850 = f__14438__auto__();
(statearr_14850[(6)] = c__14437__auto___17603);

return statearr_14850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
});})(__17576,c__14437__auto___17603,G__14782_17577,G__14782_17578__$1,n__5636__auto___17575,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14782_17578__$1)].join('')));

}

var G__17617 = (__17576 + (1));
__17576 = G__17617;
continue;
} else {
}
break;
}

var c__14437__auto___17618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_14883){
var state_val_14884 = (state_14883[(1)]);
if((state_val_14884 === (7))){
var inst_14879 = (state_14883[(2)]);
var state_14883__$1 = state_14883;
var statearr_14893_17619 = state_14883__$1;
(statearr_14893_17619[(2)] = inst_14879);

(statearr_14893_17619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (1))){
var state_14883__$1 = state_14883;
var statearr_14895_17620 = state_14883__$1;
(statearr_14895_17620[(2)] = null);

(statearr_14895_17620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (4))){
var inst_14859 = (state_14883[(7)]);
var inst_14859__$1 = (state_14883[(2)]);
var inst_14860 = (inst_14859__$1 == null);
var state_14883__$1 = (function (){var statearr_14899 = state_14883;
(statearr_14899[(7)] = inst_14859__$1);

return statearr_14899;
})();
if(cljs.core.truth_(inst_14860)){
var statearr_14903_17622 = state_14883__$1;
(statearr_14903_17622[(1)] = (5));

} else {
var statearr_14904_17623 = state_14883__$1;
(statearr_14904_17623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (6))){
var inst_14868 = (state_14883[(8)]);
var inst_14859 = (state_14883[(7)]);
var inst_14868__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14870 = [inst_14859,inst_14868__$1];
var inst_14871 = (new cljs.core.PersistentVector(null,2,(5),inst_14869,inst_14870,null));
var state_14883__$1 = (function (){var statearr_14908 = state_14883;
(statearr_14908[(8)] = inst_14868__$1);

return statearr_14908;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14883__$1,(8),jobs,inst_14871);
} else {
if((state_val_14884 === (3))){
var inst_14881 = (state_14883[(2)]);
var state_14883__$1 = state_14883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14883__$1,inst_14881);
} else {
if((state_val_14884 === (2))){
var state_14883__$1 = state_14883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14883__$1,(4),from);
} else {
if((state_val_14884 === (9))){
var inst_14876 = (state_14883[(2)]);
var state_14883__$1 = (function (){var statearr_14910 = state_14883;
(statearr_14910[(9)] = inst_14876);

return statearr_14910;
})();
var statearr_14911_17629 = state_14883__$1;
(statearr_14911_17629[(2)] = null);

(statearr_14911_17629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (5))){
var inst_14862 = cljs.core.async.close_BANG_(jobs);
var state_14883__$1 = state_14883;
var statearr_14912_17630 = state_14883__$1;
(statearr_14912_17630[(2)] = inst_14862);

(statearr_14912_17630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (8))){
var inst_14868 = (state_14883[(8)]);
var inst_14873 = (state_14883[(2)]);
var state_14883__$1 = (function (){var statearr_14913 = state_14883;
(statearr_14913[(10)] = inst_14873);

return statearr_14913;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14883__$1,(9),results,inst_14868);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0 = (function (){
var statearr_14914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__);

(statearr_14914[(1)] = (1));

return statearr_14914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1 = (function (state_14883){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_14883);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e14915){var ex__14197__auto__ = e14915;
var statearr_14917_17632 = state_14883;
(statearr_14917_17632[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_14883[(4)]))){
var statearr_14919_17633 = state_14883;
(statearr_14919_17633[(1)] = cljs.core.first((state_14883[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17634 = state_14883;
state_14883 = G__17634;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__ = function(state_14883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1.call(this,state_14883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_14921 = f__14438__auto__();
(statearr_14921[(6)] = c__14437__auto___17618);

return statearr_14921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


var c__14437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_14964){
var state_val_14965 = (state_14964[(1)]);
if((state_val_14965 === (7))){
var inst_14960 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
var statearr_14969_17635 = state_14964__$1;
(statearr_14969_17635[(2)] = inst_14960);

(statearr_14969_17635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (20))){
var state_14964__$1 = state_14964;
var statearr_14970_17636 = state_14964__$1;
(statearr_14970_17636[(2)] = null);

(statearr_14970_17636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (1))){
var state_14964__$1 = state_14964;
var statearr_14971_17637 = state_14964__$1;
(statearr_14971_17637[(2)] = null);

(statearr_14971_17637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (4))){
var inst_14924 = (state_14964[(7)]);
var inst_14924__$1 = (state_14964[(2)]);
var inst_14925 = (inst_14924__$1 == null);
var state_14964__$1 = (function (){var statearr_14972 = state_14964;
(statearr_14972[(7)] = inst_14924__$1);

return statearr_14972;
})();
if(cljs.core.truth_(inst_14925)){
var statearr_14973_17638 = state_14964__$1;
(statearr_14973_17638[(1)] = (5));

} else {
var statearr_14974_17639 = state_14964__$1;
(statearr_14974_17639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (15))){
var inst_14939 = (state_14964[(8)]);
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14964__$1,(18),to,inst_14939);
} else {
if((state_val_14965 === (21))){
var inst_14955 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
var statearr_14979_17640 = state_14964__$1;
(statearr_14979_17640[(2)] = inst_14955);

(statearr_14979_17640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (13))){
var inst_14957 = (state_14964[(2)]);
var state_14964__$1 = (function (){var statearr_14980 = state_14964;
(statearr_14980[(9)] = inst_14957);

return statearr_14980;
})();
var statearr_14981_17641 = state_14964__$1;
(statearr_14981_17641[(2)] = null);

(statearr_14981_17641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (6))){
var inst_14924 = (state_14964[(7)]);
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14964__$1,(11),inst_14924);
} else {
if((state_val_14965 === (17))){
var inst_14950 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
if(cljs.core.truth_(inst_14950)){
var statearr_14982_17642 = state_14964__$1;
(statearr_14982_17642[(1)] = (19));

} else {
var statearr_14983_17643 = state_14964__$1;
(statearr_14983_17643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (3))){
var inst_14962 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14964__$1,inst_14962);
} else {
if((state_val_14965 === (12))){
var inst_14935 = (state_14964[(10)]);
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14964__$1,(14),inst_14935);
} else {
if((state_val_14965 === (2))){
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14964__$1,(4),results);
} else {
if((state_val_14965 === (19))){
var state_14964__$1 = state_14964;
var statearr_15003_17644 = state_14964__$1;
(statearr_15003_17644[(2)] = null);

(statearr_15003_17644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (11))){
var inst_14935 = (state_14964[(2)]);
var state_14964__$1 = (function (){var statearr_15017 = state_14964;
(statearr_15017[(10)] = inst_14935);

return statearr_15017;
})();
var statearr_15024_17645 = state_14964__$1;
(statearr_15024_17645[(2)] = null);

(statearr_15024_17645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (9))){
var state_14964__$1 = state_14964;
var statearr_15034_17646 = state_14964__$1;
(statearr_15034_17646[(2)] = null);

(statearr_15034_17646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (5))){
var state_14964__$1 = state_14964;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15036_17647 = state_14964__$1;
(statearr_15036_17647[(1)] = (8));

} else {
var statearr_15043_17648 = state_14964__$1;
(statearr_15043_17648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (14))){
var inst_14939 = (state_14964[(8)]);
var inst_14944 = (state_14964[(11)]);
var inst_14939__$1 = (state_14964[(2)]);
var inst_14943 = (inst_14939__$1 == null);
var inst_14944__$1 = cljs.core.not(inst_14943);
var state_14964__$1 = (function (){var statearr_15051 = state_14964;
(statearr_15051[(8)] = inst_14939__$1);

(statearr_15051[(11)] = inst_14944__$1);

return statearr_15051;
})();
if(inst_14944__$1){
var statearr_15052_17649 = state_14964__$1;
(statearr_15052_17649[(1)] = (15));

} else {
var statearr_15053_17650 = state_14964__$1;
(statearr_15053_17650[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (16))){
var inst_14944 = (state_14964[(11)]);
var state_14964__$1 = state_14964;
var statearr_15054_17651 = state_14964__$1;
(statearr_15054_17651[(2)] = inst_14944);

(statearr_15054_17651[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (10))){
var inst_14932 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
var statearr_15055_17652 = state_14964__$1;
(statearr_15055_17652[(2)] = inst_14932);

(statearr_15055_17652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (18))){
var inst_14947 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
var statearr_15056_17653 = state_14964__$1;
(statearr_15056_17653[(2)] = inst_14947);

(statearr_15056_17653[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (8))){
var inst_14929 = cljs.core.async.close_BANG_(to);
var state_14964__$1 = state_14964;
var statearr_15059_17654 = state_14964__$1;
(statearr_15059_17654[(2)] = inst_14929);

(statearr_15059_17654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0 = (function (){
var statearr_15061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__);

(statearr_15061[(1)] = (1));

return statearr_15061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1 = (function (state_14964){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_14964);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e15062){var ex__14197__auto__ = e15062;
var statearr_15063_17655 = state_14964;
(statearr_15063_17655[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_14964[(4)]))){
var statearr_15064_17656 = state_14964;
(statearr_15064_17656[(1)] = cljs.core.first((state_14964[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17657 = state_14964;
state_14964 = G__17657;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__ = function(state_14964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1.call(this,state_14964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14194__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_15065 = f__14438__auto__();
(statearr_15065[(6)] = c__14437__auto__);

return statearr_15065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));

return c__14437__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15077 = arguments.length;
switch (G__15077) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15087 = arguments.length;
switch (G__15087) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15100 = arguments.length;
switch (G__15100) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14437__auto___17664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_15131){
var state_val_15132 = (state_15131[(1)]);
if((state_val_15132 === (7))){
var inst_15127 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15141_17665 = state_15131__$1;
(statearr_15141_17665[(2)] = inst_15127);

(statearr_15141_17665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (1))){
var state_15131__$1 = state_15131;
var statearr_15154_17666 = state_15131__$1;
(statearr_15154_17666[(2)] = null);

(statearr_15154_17666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (4))){
var inst_15108 = (state_15131[(7)]);
var inst_15108__$1 = (state_15131[(2)]);
var inst_15109 = (inst_15108__$1 == null);
var state_15131__$1 = (function (){var statearr_15162 = state_15131;
(statearr_15162[(7)] = inst_15108__$1);

return statearr_15162;
})();
if(cljs.core.truth_(inst_15109)){
var statearr_15163_17667 = state_15131__$1;
(statearr_15163_17667[(1)] = (5));

} else {
var statearr_15164_17668 = state_15131__$1;
(statearr_15164_17668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (13))){
var state_15131__$1 = state_15131;
var statearr_15165_17670 = state_15131__$1;
(statearr_15165_17670[(2)] = null);

(statearr_15165_17670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (6))){
var inst_15108 = (state_15131[(7)]);
var inst_15114 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15108) : p.call(null,inst_15108));
var state_15131__$1 = state_15131;
if(cljs.core.truth_(inst_15114)){
var statearr_15168_17671 = state_15131__$1;
(statearr_15168_17671[(1)] = (9));

} else {
var statearr_15169_17673 = state_15131__$1;
(statearr_15169_17673[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (3))){
var inst_15129 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15131__$1,inst_15129);
} else {
if((state_val_15132 === (12))){
var state_15131__$1 = state_15131;
var statearr_15173_17674 = state_15131__$1;
(statearr_15173_17674[(2)] = null);

(statearr_15173_17674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (2))){
var state_15131__$1 = state_15131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15131__$1,(4),ch);
} else {
if((state_val_15132 === (11))){
var inst_15108 = (state_15131[(7)]);
var inst_15118 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15131__$1,(8),inst_15118,inst_15108);
} else {
if((state_val_15132 === (9))){
var state_15131__$1 = state_15131;
var statearr_15174_17675 = state_15131__$1;
(statearr_15174_17675[(2)] = tc);

(statearr_15174_17675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (5))){
var inst_15111 = cljs.core.async.close_BANG_(tc);
var inst_15112 = cljs.core.async.close_BANG_(fc);
var state_15131__$1 = (function (){var statearr_15177 = state_15131;
(statearr_15177[(8)] = inst_15111);

return statearr_15177;
})();
var statearr_15182_17676 = state_15131__$1;
(statearr_15182_17676[(2)] = inst_15112);

(statearr_15182_17676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (14))){
var inst_15125 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
var statearr_15196_17677 = state_15131__$1;
(statearr_15196_17677[(2)] = inst_15125);

(statearr_15196_17677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (10))){
var state_15131__$1 = state_15131;
var statearr_15201_17678 = state_15131__$1;
(statearr_15201_17678[(2)] = fc);

(statearr_15201_17678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15132 === (8))){
var inst_15120 = (state_15131[(2)]);
var state_15131__$1 = state_15131;
if(cljs.core.truth_(inst_15120)){
var statearr_15202_17679 = state_15131__$1;
(statearr_15202_17679[(1)] = (12));

} else {
var statearr_15203_17680 = state_15131__$1;
(statearr_15203_17680[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_15220 = [null,null,null,null,null,null,null,null,null];
(statearr_15220[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_15220[(1)] = (1));

return statearr_15220;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_15131){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_15131);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e15226){var ex__14197__auto__ = e15226;
var statearr_15227_17681 = state_15131;
(statearr_15227_17681[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_15131[(4)]))){
var statearr_15228_17682 = state_15131;
(statearr_15228_17682[(1)] = cljs.core.first((state_15131[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17683 = state_15131;
state_15131 = G__17683;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_15131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_15131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_15241 = f__14438__auto__();
(statearr_15241[(6)] = c__14437__auto___17664);

return statearr_15241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_15288){
var state_val_15289 = (state_15288[(1)]);
if((state_val_15289 === (7))){
var inst_15283 = (state_15288[(2)]);
var state_15288__$1 = state_15288;
var statearr_15290_17687 = state_15288__$1;
(statearr_15290_17687[(2)] = inst_15283);

(statearr_15290_17687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15289 === (1))){
var inst_15255 = init;
var inst_15259 = inst_15255;
var state_15288__$1 = (function (){var statearr_15291 = state_15288;
(statearr_15291[(7)] = inst_15259);

return statearr_15291;
})();
var statearr_15294_17689 = state_15288__$1;
(statearr_15294_17689[(2)] = null);

(statearr_15294_17689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15289 === (4))){
var inst_15264 = (state_15288[(8)]);
var inst_15264__$1 = (state_15288[(2)]);
var inst_15265 = (inst_15264__$1 == null);
var state_15288__$1 = (function (){var statearr_15311 = state_15288;
(statearr_15311[(8)] = inst_15264__$1);

return statearr_15311;
})();
if(cljs.core.truth_(inst_15265)){
var statearr_15312_17690 = state_15288__$1;
(statearr_15312_17690[(1)] = (5));

} else {
var statearr_15313_17691 = state_15288__$1;
(statearr_15313_17691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15289 === (6))){
var inst_15259 = (state_15288[(7)]);
var inst_15264 = (state_15288[(8)]);
var inst_15268 = (state_15288[(9)]);
var inst_15268__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15259,inst_15264) : f.call(null,inst_15259,inst_15264));
var inst_15269 = cljs.core.reduced_QMARK_(inst_15268__$1);
var state_15288__$1 = (function (){var statearr_15315 = state_15288;
(statearr_15315[(9)] = inst_15268__$1);

return statearr_15315;
})();
if(inst_15269){
var statearr_15316_17698 = state_15288__$1;
(statearr_15316_17698[(1)] = (8));

} else {
var statearr_15317_17699 = state_15288__$1;
(statearr_15317_17699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15289 === (3))){
var inst_15285 = (state_15288[(2)]);
var state_15288__$1 = state_15288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15288__$1,inst_15285);
} else {
if((state_val_15289 === (2))){
var state_15288__$1 = state_15288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15288__$1,(4),ch);
} else {
if((state_val_15289 === (9))){
var inst_15268 = (state_15288[(9)]);
var inst_15259 = inst_15268;
var state_15288__$1 = (function (){var statearr_15318 = state_15288;
(statearr_15318[(7)] = inst_15259);

return statearr_15318;
})();
var statearr_15319_17700 = state_15288__$1;
(statearr_15319_17700[(2)] = null);

(statearr_15319_17700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15289 === (5))){
var inst_15259 = (state_15288[(7)]);
var state_15288__$1 = state_15288;
var statearr_15320_17701 = state_15288__$1;
(statearr_15320_17701[(2)] = inst_15259);

(statearr_15320_17701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15289 === (10))){
var inst_15281 = (state_15288[(2)]);
var state_15288__$1 = state_15288;
var statearr_15321_17702 = state_15288__$1;
(statearr_15321_17702[(2)] = inst_15281);

(statearr_15321_17702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15289 === (8))){
var inst_15268 = (state_15288[(9)]);
var inst_15277 = cljs.core.deref(inst_15268);
var state_15288__$1 = state_15288;
var statearr_15322_17703 = state_15288__$1;
(statearr_15322_17703[(2)] = inst_15277);

(statearr_15322_17703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14194__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14194__auto____0 = (function (){
var statearr_15323 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15323[(0)] = cljs$core$async$reduce_$_state_machine__14194__auto__);

(statearr_15323[(1)] = (1));

return statearr_15323;
});
var cljs$core$async$reduce_$_state_machine__14194__auto____1 = (function (state_15288){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_15288);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e15330){var ex__14197__auto__ = e15330;
var statearr_15331_17704 = state_15288;
(statearr_15331_17704[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_15288[(4)]))){
var statearr_15332_17709 = state_15288;
(statearr_15332_17709[(1)] = cljs.core.first((state_15288[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17710 = state_15288;
state_15288 = G__17710;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14194__auto__ = function(state_15288){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14194__auto____1.call(this,state_15288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14194__auto____0;
cljs$core$async$reduce_$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14194__auto____1;
return cljs$core$async$reduce_$_state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_15333 = f__14438__auto__();
(statearr_15333[(6)] = c__14437__auto__);

return statearr_15333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));

return c__14437__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_15339){
var state_val_15340 = (state_15339[(1)]);
if((state_val_15340 === (1))){
var inst_15334 = cljs.core.async.reduce(f__$1,init,ch);
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15339__$1,(2),inst_15334);
} else {
if((state_val_15340 === (2))){
var inst_15336 = (state_15339[(2)]);
var inst_15337 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15336) : f__$1.call(null,inst_15336));
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15339__$1,inst_15337);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14194__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14194__auto____0 = (function (){
var statearr_15351 = [null,null,null,null,null,null,null];
(statearr_15351[(0)] = cljs$core$async$transduce_$_state_machine__14194__auto__);

(statearr_15351[(1)] = (1));

return statearr_15351;
});
var cljs$core$async$transduce_$_state_machine__14194__auto____1 = (function (state_15339){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_15339);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e15352){var ex__14197__auto__ = e15352;
var statearr_15353_17712 = state_15339;
(statearr_15353_17712[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_15339[(4)]))){
var statearr_15354_17713 = state_15339;
(statearr_15354_17713[(1)] = cljs.core.first((state_15339[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17714 = state_15339;
state_15339 = G__17714;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14194__auto__ = function(state_15339){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14194__auto____1.call(this,state_15339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14194__auto____0;
cljs$core$async$transduce_$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14194__auto____1;
return cljs$core$async$transduce_$_state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_15355 = f__14438__auto__();
(statearr_15355[(6)] = c__14437__auto__);

return statearr_15355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));

return c__14437__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15357 = arguments.length;
switch (G__15357) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_15387){
var state_val_15388 = (state_15387[(1)]);
if((state_val_15388 === (7))){
var inst_15369 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
var statearr_15390_17718 = state_15387__$1;
(statearr_15390_17718[(2)] = inst_15369);

(statearr_15390_17718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (1))){
var inst_15363 = cljs.core.seq(coll);
var inst_15364 = inst_15363;
var state_15387__$1 = (function (){var statearr_15394 = state_15387;
(statearr_15394[(7)] = inst_15364);

return statearr_15394;
})();
var statearr_15395_17721 = state_15387__$1;
(statearr_15395_17721[(2)] = null);

(statearr_15395_17721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (4))){
var inst_15364 = (state_15387[(7)]);
var inst_15367 = cljs.core.first(inst_15364);
var state_15387__$1 = state_15387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15387__$1,(7),ch,inst_15367);
} else {
if((state_val_15388 === (13))){
var inst_15381 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
var statearr_15396_17722 = state_15387__$1;
(statearr_15396_17722[(2)] = inst_15381);

(statearr_15396_17722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (6))){
var inst_15372 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
if(cljs.core.truth_(inst_15372)){
var statearr_15397_17723 = state_15387__$1;
(statearr_15397_17723[(1)] = (8));

} else {
var statearr_15398_17724 = state_15387__$1;
(statearr_15398_17724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (3))){
var inst_15385 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15387__$1,inst_15385);
} else {
if((state_val_15388 === (12))){
var state_15387__$1 = state_15387;
var statearr_15399_17725 = state_15387__$1;
(statearr_15399_17725[(2)] = null);

(statearr_15399_17725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (2))){
var inst_15364 = (state_15387[(7)]);
var state_15387__$1 = state_15387;
if(cljs.core.truth_(inst_15364)){
var statearr_15405_17726 = state_15387__$1;
(statearr_15405_17726[(1)] = (4));

} else {
var statearr_15406_17727 = state_15387__$1;
(statearr_15406_17727[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (11))){
var inst_15378 = cljs.core.async.close_BANG_(ch);
var state_15387__$1 = state_15387;
var statearr_15407_17728 = state_15387__$1;
(statearr_15407_17728[(2)] = inst_15378);

(statearr_15407_17728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (9))){
var state_15387__$1 = state_15387;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15408_17729 = state_15387__$1;
(statearr_15408_17729[(1)] = (11));

} else {
var statearr_15410_17730 = state_15387__$1;
(statearr_15410_17730[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (5))){
var inst_15364 = (state_15387[(7)]);
var state_15387__$1 = state_15387;
var statearr_15412_17731 = state_15387__$1;
(statearr_15412_17731[(2)] = inst_15364);

(statearr_15412_17731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (10))){
var inst_15383 = (state_15387[(2)]);
var state_15387__$1 = state_15387;
var statearr_15413_17732 = state_15387__$1;
(statearr_15413_17732[(2)] = inst_15383);

(statearr_15413_17732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15388 === (8))){
var inst_15364 = (state_15387[(7)]);
var inst_15374 = cljs.core.next(inst_15364);
var inst_15364__$1 = inst_15374;
var state_15387__$1 = (function (){var statearr_15414 = state_15387;
(statearr_15414[(7)] = inst_15364__$1);

return statearr_15414;
})();
var statearr_15415_17733 = state_15387__$1;
(statearr_15415_17733[(2)] = null);

(statearr_15415_17733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_15418 = [null,null,null,null,null,null,null,null];
(statearr_15418[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_15418[(1)] = (1));

return statearr_15418;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_15387){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_15387);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e15422){var ex__14197__auto__ = e15422;
var statearr_15423_17735 = state_15387;
(statearr_15423_17735[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_15387[(4)]))){
var statearr_15424_17736 = state_15387;
(statearr_15424_17736[(1)] = cljs.core.first((state_15387[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17737 = state_15387;
state_15387 = G__17737;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_15387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_15387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_15426 = f__14438__auto__();
(statearr_15426[(6)] = c__14437__auto__);

return statearr_15426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));

return c__14437__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15436 = arguments.length;
switch (G__15436) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17739 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17739(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17741 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17741(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17743 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17743(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17744 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17744(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15480 = (function (ch,cs,meta15481){
this.ch = ch;
this.cs = cs;
this.meta15481 = meta15481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15482,meta15481__$1){
var self__ = this;
var _15482__$1 = this;
return (new cljs.core.async.t_cljs$core$async15480(self__.ch,self__.cs,meta15481__$1));
}));

(cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15482){
var self__ = this;
var _15482__$1 = this;
return self__.meta15481;
}));

(cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15481","meta15481",-1695790873,null)], null);
}));

(cljs.core.async.t_cljs$core$async15480.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15480");

(cljs.core.async.t_cljs$core$async15480.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15480");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15480.
 */
cljs.core.async.__GT_t_cljs$core$async15480 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15480(ch__$1,cs__$1,meta15481){
return (new cljs.core.async.t_cljs$core$async15480(ch__$1,cs__$1,meta15481));
});

}

return (new cljs.core.async.t_cljs$core$async15480(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14437__auto___17745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_15649){
var state_val_15650 = (state_15649[(1)]);
if((state_val_15650 === (7))){
var inst_15643 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15653_17746 = state_15649__$1;
(statearr_15653_17746[(2)] = inst_15643);

(statearr_15653_17746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (20))){
var inst_15543 = (state_15649[(7)]);
var inst_15555 = cljs.core.first(inst_15543);
var inst_15556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15555,(0),null);
var inst_15557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15555,(1),null);
var state_15649__$1 = (function (){var statearr_15654 = state_15649;
(statearr_15654[(8)] = inst_15556);

return statearr_15654;
})();
if(cljs.core.truth_(inst_15557)){
var statearr_15655_17747 = state_15649__$1;
(statearr_15655_17747[(1)] = (22));

} else {
var statearr_15656_17748 = state_15649__$1;
(statearr_15656_17748[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (27))){
var inst_15588 = (state_15649[(9)]);
var inst_15593 = (state_15649[(10)]);
var inst_15586 = (state_15649[(11)]);
var inst_15504 = (state_15649[(12)]);
var inst_15593__$1 = cljs.core._nth(inst_15586,inst_15588);
var inst_15594 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15593__$1,inst_15504,done);
var state_15649__$1 = (function (){var statearr_15657 = state_15649;
(statearr_15657[(10)] = inst_15593__$1);

return statearr_15657;
})();
if(cljs.core.truth_(inst_15594)){
var statearr_15664_17753 = state_15649__$1;
(statearr_15664_17753[(1)] = (30));

} else {
var statearr_15665_17754 = state_15649__$1;
(statearr_15665_17754[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (1))){
var state_15649__$1 = state_15649;
var statearr_15666_17759 = state_15649__$1;
(statearr_15666_17759[(2)] = null);

(statearr_15666_17759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (24))){
var inst_15543 = (state_15649[(7)]);
var inst_15562 = (state_15649[(2)]);
var inst_15563 = cljs.core.next(inst_15543);
var inst_15515 = inst_15563;
var inst_15516 = null;
var inst_15517 = (0);
var inst_15518 = (0);
var state_15649__$1 = (function (){var statearr_15667 = state_15649;
(statearr_15667[(13)] = inst_15517);

(statearr_15667[(14)] = inst_15515);

(statearr_15667[(15)] = inst_15516);

(statearr_15667[(16)] = inst_15562);

(statearr_15667[(17)] = inst_15518);

return statearr_15667;
})();
var statearr_15668_17762 = state_15649__$1;
(statearr_15668_17762[(2)] = null);

(statearr_15668_17762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (39))){
var state_15649__$1 = state_15649;
var statearr_15672_17763 = state_15649__$1;
(statearr_15672_17763[(2)] = null);

(statearr_15672_17763[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (4))){
var inst_15504 = (state_15649[(12)]);
var inst_15504__$1 = (state_15649[(2)]);
var inst_15505 = (inst_15504__$1 == null);
var state_15649__$1 = (function (){var statearr_15673 = state_15649;
(statearr_15673[(12)] = inst_15504__$1);

return statearr_15673;
})();
if(cljs.core.truth_(inst_15505)){
var statearr_15674_17765 = state_15649__$1;
(statearr_15674_17765[(1)] = (5));

} else {
var statearr_15675_17767 = state_15649__$1;
(statearr_15675_17767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (15))){
var inst_15517 = (state_15649[(13)]);
var inst_15515 = (state_15649[(14)]);
var inst_15516 = (state_15649[(15)]);
var inst_15518 = (state_15649[(17)]);
var inst_15539 = (state_15649[(2)]);
var inst_15540 = (inst_15518 + (1));
var tmp15669 = inst_15517;
var tmp15670 = inst_15515;
var tmp15671 = inst_15516;
var inst_15515__$1 = tmp15670;
var inst_15516__$1 = tmp15671;
var inst_15517__$1 = tmp15669;
var inst_15518__$1 = inst_15540;
var state_15649__$1 = (function (){var statearr_15677 = state_15649;
(statearr_15677[(13)] = inst_15517__$1);

(statearr_15677[(14)] = inst_15515__$1);

(statearr_15677[(15)] = inst_15516__$1);

(statearr_15677[(17)] = inst_15518__$1);

(statearr_15677[(18)] = inst_15539);

return statearr_15677;
})();
var statearr_15679_17774 = state_15649__$1;
(statearr_15679_17774[(2)] = null);

(statearr_15679_17774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (21))){
var inst_15566 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15686_17777 = state_15649__$1;
(statearr_15686_17777[(2)] = inst_15566);

(statearr_15686_17777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (31))){
var inst_15593 = (state_15649[(10)]);
var inst_15597 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15593);
var state_15649__$1 = state_15649;
var statearr_15692_17779 = state_15649__$1;
(statearr_15692_17779[(2)] = inst_15597);

(statearr_15692_17779[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (32))){
var inst_15588 = (state_15649[(9)]);
var inst_15585 = (state_15649[(19)]);
var inst_15587 = (state_15649[(20)]);
var inst_15586 = (state_15649[(11)]);
var inst_15599 = (state_15649[(2)]);
var inst_15600 = (inst_15588 + (1));
var tmp15682 = inst_15585;
var tmp15683 = inst_15587;
var tmp15684 = inst_15586;
var inst_15585__$1 = tmp15682;
var inst_15586__$1 = tmp15684;
var inst_15587__$1 = tmp15683;
var inst_15588__$1 = inst_15600;
var state_15649__$1 = (function (){var statearr_15694 = state_15649;
(statearr_15694[(9)] = inst_15588__$1);

(statearr_15694[(19)] = inst_15585__$1);

(statearr_15694[(20)] = inst_15587__$1);

(statearr_15694[(11)] = inst_15586__$1);

(statearr_15694[(21)] = inst_15599);

return statearr_15694;
})();
var statearr_15695_17783 = state_15649__$1;
(statearr_15695_17783[(2)] = null);

(statearr_15695_17783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (40))){
var inst_15614 = (state_15649[(22)]);
var inst_15620 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15614);
var state_15649__$1 = state_15649;
var statearr_15697_17784 = state_15649__$1;
(statearr_15697_17784[(2)] = inst_15620);

(statearr_15697_17784[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (33))){
var inst_15603 = (state_15649[(23)]);
var inst_15605 = cljs.core.chunked_seq_QMARK_(inst_15603);
var state_15649__$1 = state_15649;
if(inst_15605){
var statearr_15703_17785 = state_15649__$1;
(statearr_15703_17785[(1)] = (36));

} else {
var statearr_15704_17786 = state_15649__$1;
(statearr_15704_17786[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (13))){
var inst_15529 = (state_15649[(24)]);
var inst_15533 = cljs.core.async.close_BANG_(inst_15529);
var state_15649__$1 = state_15649;
var statearr_15707_17787 = state_15649__$1;
(statearr_15707_17787[(2)] = inst_15533);

(statearr_15707_17787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (22))){
var inst_15556 = (state_15649[(8)]);
var inst_15559 = cljs.core.async.close_BANG_(inst_15556);
var state_15649__$1 = state_15649;
var statearr_15710_17791 = state_15649__$1;
(statearr_15710_17791[(2)] = inst_15559);

(statearr_15710_17791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (36))){
var inst_15603 = (state_15649[(23)]);
var inst_15608 = cljs.core.chunk_first(inst_15603);
var inst_15609 = cljs.core.chunk_rest(inst_15603);
var inst_15610 = cljs.core.count(inst_15608);
var inst_15585 = inst_15609;
var inst_15586 = inst_15608;
var inst_15587 = inst_15610;
var inst_15588 = (0);
var state_15649__$1 = (function (){var statearr_15716 = state_15649;
(statearr_15716[(9)] = inst_15588);

(statearr_15716[(19)] = inst_15585);

(statearr_15716[(20)] = inst_15587);

(statearr_15716[(11)] = inst_15586);

return statearr_15716;
})();
var statearr_15718_17792 = state_15649__$1;
(statearr_15718_17792[(2)] = null);

(statearr_15718_17792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (41))){
var inst_15603 = (state_15649[(23)]);
var inst_15622 = (state_15649[(2)]);
var inst_15623 = cljs.core.next(inst_15603);
var inst_15585 = inst_15623;
var inst_15586 = null;
var inst_15587 = (0);
var inst_15588 = (0);
var state_15649__$1 = (function (){var statearr_15721 = state_15649;
(statearr_15721[(9)] = inst_15588);

(statearr_15721[(19)] = inst_15585);

(statearr_15721[(20)] = inst_15587);

(statearr_15721[(11)] = inst_15586);

(statearr_15721[(25)] = inst_15622);

return statearr_15721;
})();
var statearr_15722_17793 = state_15649__$1;
(statearr_15722_17793[(2)] = null);

(statearr_15722_17793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (43))){
var state_15649__$1 = state_15649;
var statearr_15723_17794 = state_15649__$1;
(statearr_15723_17794[(2)] = null);

(statearr_15723_17794[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (29))){
var inst_15631 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15725_17795 = state_15649__$1;
(statearr_15725_17795[(2)] = inst_15631);

(statearr_15725_17795[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (44))){
var inst_15640 = (state_15649[(2)]);
var state_15649__$1 = (function (){var statearr_15726 = state_15649;
(statearr_15726[(26)] = inst_15640);

return statearr_15726;
})();
var statearr_15727_17800 = state_15649__$1;
(statearr_15727_17800[(2)] = null);

(statearr_15727_17800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (6))){
var inst_15576 = (state_15649[(27)]);
var inst_15575 = cljs.core.deref(cs);
var inst_15576__$1 = cljs.core.keys(inst_15575);
var inst_15577 = cljs.core.count(inst_15576__$1);
var inst_15578 = cljs.core.reset_BANG_(dctr,inst_15577);
var inst_15584 = cljs.core.seq(inst_15576__$1);
var inst_15585 = inst_15584;
var inst_15586 = null;
var inst_15587 = (0);
var inst_15588 = (0);
var state_15649__$1 = (function (){var statearr_15732 = state_15649;
(statearr_15732[(9)] = inst_15588);

(statearr_15732[(19)] = inst_15585);

(statearr_15732[(20)] = inst_15587);

(statearr_15732[(28)] = inst_15578);

(statearr_15732[(11)] = inst_15586);

(statearr_15732[(27)] = inst_15576__$1);

return statearr_15732;
})();
var statearr_15733_17804 = state_15649__$1;
(statearr_15733_17804[(2)] = null);

(statearr_15733_17804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (28))){
var inst_15585 = (state_15649[(19)]);
var inst_15603 = (state_15649[(23)]);
var inst_15603__$1 = cljs.core.seq(inst_15585);
var state_15649__$1 = (function (){var statearr_15735 = state_15649;
(statearr_15735[(23)] = inst_15603__$1);

return statearr_15735;
})();
if(inst_15603__$1){
var statearr_15736_17806 = state_15649__$1;
(statearr_15736_17806[(1)] = (33));

} else {
var statearr_15737_17807 = state_15649__$1;
(statearr_15737_17807[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (25))){
var inst_15588 = (state_15649[(9)]);
var inst_15587 = (state_15649[(20)]);
var inst_15590 = (inst_15588 < inst_15587);
var inst_15591 = inst_15590;
var state_15649__$1 = state_15649;
if(cljs.core.truth_(inst_15591)){
var statearr_15743_17808 = state_15649__$1;
(statearr_15743_17808[(1)] = (27));

} else {
var statearr_15744_17809 = state_15649__$1;
(statearr_15744_17809[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (34))){
var state_15649__$1 = state_15649;
var statearr_15745_17810 = state_15649__$1;
(statearr_15745_17810[(2)] = null);

(statearr_15745_17810[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (17))){
var state_15649__$1 = state_15649;
var statearr_15746_17811 = state_15649__$1;
(statearr_15746_17811[(2)] = null);

(statearr_15746_17811[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (3))){
var inst_15645 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15649__$1,inst_15645);
} else {
if((state_val_15650 === (12))){
var inst_15571 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15747_17822 = state_15649__$1;
(statearr_15747_17822[(2)] = inst_15571);

(statearr_15747_17822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (2))){
var state_15649__$1 = state_15649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15649__$1,(4),ch);
} else {
if((state_val_15650 === (23))){
var state_15649__$1 = state_15649;
var statearr_15748_17823 = state_15649__$1;
(statearr_15748_17823[(2)] = null);

(statearr_15748_17823[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (35))){
var inst_15629 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15749_17824 = state_15649__$1;
(statearr_15749_17824[(2)] = inst_15629);

(statearr_15749_17824[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (19))){
var inst_15543 = (state_15649[(7)]);
var inst_15547 = cljs.core.chunk_first(inst_15543);
var inst_15548 = cljs.core.chunk_rest(inst_15543);
var inst_15549 = cljs.core.count(inst_15547);
var inst_15515 = inst_15548;
var inst_15516 = inst_15547;
var inst_15517 = inst_15549;
var inst_15518 = (0);
var state_15649__$1 = (function (){var statearr_15750 = state_15649;
(statearr_15750[(13)] = inst_15517);

(statearr_15750[(14)] = inst_15515);

(statearr_15750[(15)] = inst_15516);

(statearr_15750[(17)] = inst_15518);

return statearr_15750;
})();
var statearr_15751_17825 = state_15649__$1;
(statearr_15751_17825[(2)] = null);

(statearr_15751_17825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (11))){
var inst_15515 = (state_15649[(14)]);
var inst_15543 = (state_15649[(7)]);
var inst_15543__$1 = cljs.core.seq(inst_15515);
var state_15649__$1 = (function (){var statearr_15752 = state_15649;
(statearr_15752[(7)] = inst_15543__$1);

return statearr_15752;
})();
if(inst_15543__$1){
var statearr_15753_17827 = state_15649__$1;
(statearr_15753_17827[(1)] = (16));

} else {
var statearr_15754_17828 = state_15649__$1;
(statearr_15754_17828[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (9))){
var inst_15573 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15759_17829 = state_15649__$1;
(statearr_15759_17829[(2)] = inst_15573);

(statearr_15759_17829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (5))){
var inst_15513 = cljs.core.deref(cs);
var inst_15514 = cljs.core.seq(inst_15513);
var inst_15515 = inst_15514;
var inst_15516 = null;
var inst_15517 = (0);
var inst_15518 = (0);
var state_15649__$1 = (function (){var statearr_15768 = state_15649;
(statearr_15768[(13)] = inst_15517);

(statearr_15768[(14)] = inst_15515);

(statearr_15768[(15)] = inst_15516);

(statearr_15768[(17)] = inst_15518);

return statearr_15768;
})();
var statearr_15774_17830 = state_15649__$1;
(statearr_15774_17830[(2)] = null);

(statearr_15774_17830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (14))){
var state_15649__$1 = state_15649;
var statearr_15775_17831 = state_15649__$1;
(statearr_15775_17831[(2)] = null);

(statearr_15775_17831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (45))){
var inst_15637 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15778_17832 = state_15649__$1;
(statearr_15778_17832[(2)] = inst_15637);

(statearr_15778_17832[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (26))){
var inst_15576 = (state_15649[(27)]);
var inst_15633 = (state_15649[(2)]);
var inst_15634 = cljs.core.seq(inst_15576);
var state_15649__$1 = (function (){var statearr_15779 = state_15649;
(statearr_15779[(29)] = inst_15633);

return statearr_15779;
})();
if(inst_15634){
var statearr_15780_17833 = state_15649__$1;
(statearr_15780_17833[(1)] = (42));

} else {
var statearr_15781_17834 = state_15649__$1;
(statearr_15781_17834[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (16))){
var inst_15543 = (state_15649[(7)]);
var inst_15545 = cljs.core.chunked_seq_QMARK_(inst_15543);
var state_15649__$1 = state_15649;
if(inst_15545){
var statearr_15782_17835 = state_15649__$1;
(statearr_15782_17835[(1)] = (19));

} else {
var statearr_15783_17836 = state_15649__$1;
(statearr_15783_17836[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (38))){
var inst_15626 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15785_17837 = state_15649__$1;
(statearr_15785_17837[(2)] = inst_15626);

(statearr_15785_17837[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (30))){
var state_15649__$1 = state_15649;
var statearr_15786_17838 = state_15649__$1;
(statearr_15786_17838[(2)] = null);

(statearr_15786_17838[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (10))){
var inst_15516 = (state_15649[(15)]);
var inst_15518 = (state_15649[(17)]);
var inst_15528 = cljs.core._nth(inst_15516,inst_15518);
var inst_15529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15528,(0),null);
var inst_15531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15528,(1),null);
var state_15649__$1 = (function (){var statearr_15789 = state_15649;
(statearr_15789[(24)] = inst_15529);

return statearr_15789;
})();
if(cljs.core.truth_(inst_15531)){
var statearr_15791_17840 = state_15649__$1;
(statearr_15791_17840[(1)] = (13));

} else {
var statearr_15792_17841 = state_15649__$1;
(statearr_15792_17841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (18))){
var inst_15569 = (state_15649[(2)]);
var state_15649__$1 = state_15649;
var statearr_15793_17842 = state_15649__$1;
(statearr_15793_17842[(2)] = inst_15569);

(statearr_15793_17842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (42))){
var state_15649__$1 = state_15649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15649__$1,(45),dchan);
} else {
if((state_val_15650 === (37))){
var inst_15614 = (state_15649[(22)]);
var inst_15603 = (state_15649[(23)]);
var inst_15504 = (state_15649[(12)]);
var inst_15614__$1 = cljs.core.first(inst_15603);
var inst_15617 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15614__$1,inst_15504,done);
var state_15649__$1 = (function (){var statearr_15797 = state_15649;
(statearr_15797[(22)] = inst_15614__$1);

return statearr_15797;
})();
if(cljs.core.truth_(inst_15617)){
var statearr_15804_17843 = state_15649__$1;
(statearr_15804_17843[(1)] = (39));

} else {
var statearr_15805_17844 = state_15649__$1;
(statearr_15805_17844[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15650 === (8))){
var inst_15517 = (state_15649[(13)]);
var inst_15518 = (state_15649[(17)]);
var inst_15520 = (inst_15518 < inst_15517);
var inst_15521 = inst_15520;
var state_15649__$1 = state_15649;
if(cljs.core.truth_(inst_15521)){
var statearr_15806_17845 = state_15649__$1;
(statearr_15806_17845[(1)] = (10));

} else {
var statearr_15807_17846 = state_15649__$1;
(statearr_15807_17846[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14194__auto__ = null;
var cljs$core$async$mult_$_state_machine__14194__auto____0 = (function (){
var statearr_15822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15822[(0)] = cljs$core$async$mult_$_state_machine__14194__auto__);

(statearr_15822[(1)] = (1));

return statearr_15822;
});
var cljs$core$async$mult_$_state_machine__14194__auto____1 = (function (state_15649){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_15649);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e15827){var ex__14197__auto__ = e15827;
var statearr_15828_17847 = state_15649;
(statearr_15828_17847[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_15649[(4)]))){
var statearr_15831_17848 = state_15649;
(statearr_15831_17848[(1)] = cljs.core.first((state_15649[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17849 = state_15649;
state_15649 = G__17849;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14194__auto__ = function(state_15649){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14194__auto____1.call(this,state_15649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14194__auto____0;
cljs$core$async$mult_$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14194__auto____1;
return cljs$core$async$mult_$_state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_15834 = f__14438__auto__();
(statearr_15834[(6)] = c__14437__auto___17745);

return statearr_15834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15841 = arguments.length;
switch (G__15841) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17851 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17851(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17852 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17852(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17853 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17853(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17854 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17854(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17856 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17856(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17858 = arguments.length;
var i__5770__auto___17859 = (0);
while(true){
if((i__5770__auto___17859 < len__5769__auto___17858)){
args__5775__auto__.push((arguments[i__5770__auto___17859]));

var G__17860 = (i__5770__auto___17859 + (1));
i__5770__auto___17859 = G__17860;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15886){
var map__15887 = p__15886;
var map__15887__$1 = cljs.core.__destructure_map(map__15887);
var opts = map__15887__$1;
var statearr_15888_17861 = state;
(statearr_15888_17861[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15889_17862 = state;
(statearr_15889_17862[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15892_17863 = state;
(statearr_15892_17863[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15879){
var G__15880 = cljs.core.first(seq15879);
var seq15879__$1 = cljs.core.next(seq15879);
var G__15881 = cljs.core.first(seq15879__$1);
var seq15879__$2 = cljs.core.next(seq15879__$1);
var G__15882 = cljs.core.first(seq15879__$2);
var seq15879__$3 = cljs.core.next(seq15879__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15880,G__15881,G__15882,seq15879__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15906 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15907){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15907 = meta15907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15908,meta15907__$1){
var self__ = this;
var _15908__$1 = this;
return (new cljs.core.async.t_cljs$core$async15906(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15907__$1));
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15908){
var self__ = this;
var _15908__$1 = this;
return self__.meta15907;
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15907","meta15907",-209303361,null)], null);
}));

(cljs.core.async.t_cljs$core$async15906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15906");

(cljs.core.async.t_cljs$core$async15906.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15906.
 */
cljs.core.async.__GT_t_cljs$core$async15906 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15906(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15907){
return (new cljs.core.async.t_cljs$core$async15906(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15907));
});

}

return (new cljs.core.async.t_cljs$core$async15906(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14437__auto___17873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_16023){
var state_val_16027 = (state_16023[(1)]);
if((state_val_16027 === (7))){
var inst_15978 = (state_16023[(2)]);
var state_16023__$1 = state_16023;
if(cljs.core.truth_(inst_15978)){
var statearr_16028_17874 = state_16023__$1;
(statearr_16028_17874[(1)] = (8));

} else {
var statearr_16029_17875 = state_16023__$1;
(statearr_16029_17875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (20))){
var inst_15963 = (state_16023[(7)]);
var state_16023__$1 = state_16023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16023__$1,(23),out,inst_15963);
} else {
if((state_val_16027 === (1))){
var inst_15946 = calc_state();
var inst_15947 = cljs.core.__destructure_map(inst_15946);
var inst_15948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15947,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15947,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15947,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15951 = inst_15946;
var state_16023__$1 = (function (){var statearr_16030 = state_16023;
(statearr_16030[(8)] = inst_15951);

(statearr_16030[(9)] = inst_15950);

(statearr_16030[(10)] = inst_15948);

(statearr_16030[(11)] = inst_15949);

return statearr_16030;
})();
var statearr_16031_17876 = state_16023__$1;
(statearr_16031_17876[(2)] = null);

(statearr_16031_17876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (24))){
var inst_15954 = (state_16023[(12)]);
var inst_15951 = inst_15954;
var state_16023__$1 = (function (){var statearr_16032 = state_16023;
(statearr_16032[(8)] = inst_15951);

return statearr_16032;
})();
var statearr_16033_17877 = state_16023__$1;
(statearr_16033_17877[(2)] = null);

(statearr_16033_17877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (4))){
var inst_15969 = (state_16023[(13)]);
var inst_15963 = (state_16023[(7)]);
var inst_15962 = (state_16023[(2)]);
var inst_15963__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15962,(0),null);
var inst_15968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15962,(1),null);
var inst_15969__$1 = (inst_15963__$1 == null);
var state_16023__$1 = (function (){var statearr_16034 = state_16023;
(statearr_16034[(13)] = inst_15969__$1);

(statearr_16034[(7)] = inst_15963__$1);

(statearr_16034[(14)] = inst_15968);

return statearr_16034;
})();
if(cljs.core.truth_(inst_15969__$1)){
var statearr_16036_17878 = state_16023__$1;
(statearr_16036_17878[(1)] = (5));

} else {
var statearr_16037_17879 = state_16023__$1;
(statearr_16037_17879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (15))){
var inst_15955 = (state_16023[(15)]);
var inst_15996 = (state_16023[(16)]);
var inst_15996__$1 = cljs.core.empty_QMARK_(inst_15955);
var state_16023__$1 = (function (){var statearr_16038 = state_16023;
(statearr_16038[(16)] = inst_15996__$1);

return statearr_16038;
})();
if(inst_15996__$1){
var statearr_16039_17880 = state_16023__$1;
(statearr_16039_17880[(1)] = (17));

} else {
var statearr_16040_17881 = state_16023__$1;
(statearr_16040_17881[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (21))){
var inst_15954 = (state_16023[(12)]);
var inst_15951 = inst_15954;
var state_16023__$1 = (function (){var statearr_16041 = state_16023;
(statearr_16041[(8)] = inst_15951);

return statearr_16041;
})();
var statearr_16042_17882 = state_16023__$1;
(statearr_16042_17882[(2)] = null);

(statearr_16042_17882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (13))){
var inst_15986 = (state_16023[(2)]);
var inst_15990 = calc_state();
var inst_15951 = inst_15990;
var state_16023__$1 = (function (){var statearr_16047 = state_16023;
(statearr_16047[(8)] = inst_15951);

(statearr_16047[(17)] = inst_15986);

return statearr_16047;
})();
var statearr_16048_17884 = state_16023__$1;
(statearr_16048_17884[(2)] = null);

(statearr_16048_17884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (22))){
var inst_16016 = (state_16023[(2)]);
var state_16023__$1 = state_16023;
var statearr_16049_17888 = state_16023__$1;
(statearr_16049_17888[(2)] = inst_16016);

(statearr_16049_17888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (6))){
var inst_15968 = (state_16023[(14)]);
var inst_15976 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15968,change);
var state_16023__$1 = state_16023;
var statearr_16055_17889 = state_16023__$1;
(statearr_16055_17889[(2)] = inst_15976);

(statearr_16055_17889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (25))){
var state_16023__$1 = state_16023;
var statearr_16056_17890 = state_16023__$1;
(statearr_16056_17890[(2)] = null);

(statearr_16056_17890[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (17))){
var inst_15956 = (state_16023[(18)]);
var inst_15968 = (state_16023[(14)]);
var inst_15998 = (inst_15956.cljs$core$IFn$_invoke$arity$1 ? inst_15956.cljs$core$IFn$_invoke$arity$1(inst_15968) : inst_15956.call(null,inst_15968));
var inst_15999 = cljs.core.not(inst_15998);
var state_16023__$1 = state_16023;
var statearr_16059_17892 = state_16023__$1;
(statearr_16059_17892[(2)] = inst_15999);

(statearr_16059_17892[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (3))){
var inst_16020 = (state_16023[(2)]);
var state_16023__$1 = state_16023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16023__$1,inst_16020);
} else {
if((state_val_16027 === (12))){
var state_16023__$1 = state_16023;
var statearr_16063_17895 = state_16023__$1;
(statearr_16063_17895[(2)] = null);

(statearr_16063_17895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (2))){
var inst_15954 = (state_16023[(12)]);
var inst_15951 = (state_16023[(8)]);
var inst_15954__$1 = cljs.core.__destructure_map(inst_15951);
var inst_15955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15954__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15954__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15954__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16023__$1 = (function (){var statearr_16067 = state_16023;
(statearr_16067[(15)] = inst_15955);

(statearr_16067[(12)] = inst_15954__$1);

(statearr_16067[(18)] = inst_15956);

return statearr_16067;
})();
return cljs.core.async.ioc_alts_BANG_(state_16023__$1,(4),inst_15957);
} else {
if((state_val_16027 === (23))){
var inst_16007 = (state_16023[(2)]);
var state_16023__$1 = state_16023;
if(cljs.core.truth_(inst_16007)){
var statearr_16075_17898 = state_16023__$1;
(statearr_16075_17898[(1)] = (24));

} else {
var statearr_16076_17899 = state_16023__$1;
(statearr_16076_17899[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (19))){
var inst_16002 = (state_16023[(2)]);
var state_16023__$1 = state_16023;
var statearr_16078_17900 = state_16023__$1;
(statearr_16078_17900[(2)] = inst_16002);

(statearr_16078_17900[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (11))){
var inst_15968 = (state_16023[(14)]);
var inst_15982 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15968);
var state_16023__$1 = state_16023;
var statearr_16082_17901 = state_16023__$1;
(statearr_16082_17901[(2)] = inst_15982);

(statearr_16082_17901[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (9))){
var inst_15955 = (state_16023[(15)]);
var inst_15993 = (state_16023[(19)]);
var inst_15968 = (state_16023[(14)]);
var inst_15993__$1 = (inst_15955.cljs$core$IFn$_invoke$arity$1 ? inst_15955.cljs$core$IFn$_invoke$arity$1(inst_15968) : inst_15955.call(null,inst_15968));
var state_16023__$1 = (function (){var statearr_16088 = state_16023;
(statearr_16088[(19)] = inst_15993__$1);

return statearr_16088;
})();
if(cljs.core.truth_(inst_15993__$1)){
var statearr_16089_17902 = state_16023__$1;
(statearr_16089_17902[(1)] = (14));

} else {
var statearr_16090_17903 = state_16023__$1;
(statearr_16090_17903[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (5))){
var inst_15969 = (state_16023[(13)]);
var state_16023__$1 = state_16023;
var statearr_16093_17904 = state_16023__$1;
(statearr_16093_17904[(2)] = inst_15969);

(statearr_16093_17904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (14))){
var inst_15993 = (state_16023[(19)]);
var state_16023__$1 = state_16023;
var statearr_16095_17905 = state_16023__$1;
(statearr_16095_17905[(2)] = inst_15993);

(statearr_16095_17905[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (26))){
var inst_16012 = (state_16023[(2)]);
var state_16023__$1 = state_16023;
var statearr_16096_17906 = state_16023__$1;
(statearr_16096_17906[(2)] = inst_16012);

(statearr_16096_17906[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (16))){
var inst_16004 = (state_16023[(2)]);
var state_16023__$1 = state_16023;
if(cljs.core.truth_(inst_16004)){
var statearr_16103_17910 = state_16023__$1;
(statearr_16103_17910[(1)] = (20));

} else {
var statearr_16104_17912 = state_16023__$1;
(statearr_16104_17912[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (10))){
var inst_16018 = (state_16023[(2)]);
var state_16023__$1 = state_16023;
var statearr_16105_17917 = state_16023__$1;
(statearr_16105_17917[(2)] = inst_16018);

(statearr_16105_17917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (18))){
var inst_15996 = (state_16023[(16)]);
var state_16023__$1 = state_16023;
var statearr_16112_17919 = state_16023__$1;
(statearr_16112_17919[(2)] = inst_15996);

(statearr_16112_17919[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16027 === (8))){
var inst_15963 = (state_16023[(7)]);
var inst_15980 = (inst_15963 == null);
var state_16023__$1 = state_16023;
if(cljs.core.truth_(inst_15980)){
var statearr_16116_17920 = state_16023__$1;
(statearr_16116_17920[(1)] = (11));

} else {
var statearr_16117_17921 = state_16023__$1;
(statearr_16117_17921[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14194__auto__ = null;
var cljs$core$async$mix_$_state_machine__14194__auto____0 = (function (){
var statearr_16119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16119[(0)] = cljs$core$async$mix_$_state_machine__14194__auto__);

(statearr_16119[(1)] = (1));

return statearr_16119;
});
var cljs$core$async$mix_$_state_machine__14194__auto____1 = (function (state_16023){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_16023);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e16123){var ex__14197__auto__ = e16123;
var statearr_16124_17928 = state_16023;
(statearr_16124_17928[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_16023[(4)]))){
var statearr_16125_17929 = state_16023;
(statearr_16125_17929[(1)] = cljs.core.first((state_16023[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17931 = state_16023;
state_16023 = G__17931;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14194__auto__ = function(state_16023){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14194__auto____1.call(this,state_16023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14194__auto____0;
cljs$core$async$mix_$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14194__auto____1;
return cljs$core$async$mix_$_state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_16130 = f__14438__auto__();
(statearr_16130[(6)] = c__14437__auto___17873);

return statearr_16130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17932 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17932(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17951 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17951(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17957 = (function() {
var G__17958 = null;
var G__17958__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17958__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17958 = function(p,v){
switch(arguments.length){
case 1:
return G__17958__1.call(this,p);
case 2:
return G__17958__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17958.cljs$core$IFn$_invoke$arity$1 = G__17958__1;
G__17958.cljs$core$IFn$_invoke$arity$2 = G__17958__2;
return G__17958;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16143 = arguments.length;
switch (G__16143) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17957(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17957(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16148 = arguments.length;
switch (G__16148) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16146_SHARP_){
if(cljs.core.truth_((p1__16146_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16146_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16146_SHARP_.call(null,topic)))){
return p1__16146_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16146_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16153 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16154){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16154 = meta16154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16155,meta16154__$1){
var self__ = this;
var _16155__$1 = this;
return (new cljs.core.async.t_cljs$core$async16153(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16154__$1));
}));

(cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16155){
var self__ = this;
var _16155__$1 = this;
return self__.meta16154;
}));

(cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16154","meta16154",-1842708656,null)], null);
}));

(cljs.core.async.t_cljs$core$async16153.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16153");

(cljs.core.async.t_cljs$core$async16153.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16153");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16153.
 */
cljs.core.async.__GT_t_cljs$core$async16153 = (function cljs$core$async$__GT_t_cljs$core$async16153(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16154){
return (new cljs.core.async.t_cljs$core$async16153(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16154));
});

}

return (new cljs.core.async.t_cljs$core$async16153(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14437__auto___17989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_16237){
var state_val_16238 = (state_16237[(1)]);
if((state_val_16238 === (7))){
var inst_16232 = (state_16237[(2)]);
var state_16237__$1 = state_16237;
var statearr_16241_17992 = state_16237__$1;
(statearr_16241_17992[(2)] = inst_16232);

(statearr_16241_17992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (20))){
var state_16237__$1 = state_16237;
var statearr_16243_17993 = state_16237__$1;
(statearr_16243_17993[(2)] = null);

(statearr_16243_17993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (1))){
var state_16237__$1 = state_16237;
var statearr_16247_17996 = state_16237__$1;
(statearr_16247_17996[(2)] = null);

(statearr_16247_17996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (24))){
var inst_16215 = (state_16237[(7)]);
var inst_16224 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16215);
var state_16237__$1 = state_16237;
var statearr_16249_17997 = state_16237__$1;
(statearr_16249_17997[(2)] = inst_16224);

(statearr_16249_17997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (4))){
var inst_16164 = (state_16237[(8)]);
var inst_16164__$1 = (state_16237[(2)]);
var inst_16165 = (inst_16164__$1 == null);
var state_16237__$1 = (function (){var statearr_16250 = state_16237;
(statearr_16250[(8)] = inst_16164__$1);

return statearr_16250;
})();
if(cljs.core.truth_(inst_16165)){
var statearr_16251_17998 = state_16237__$1;
(statearr_16251_17998[(1)] = (5));

} else {
var statearr_16252_17999 = state_16237__$1;
(statearr_16252_17999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (15))){
var inst_16209 = (state_16237[(2)]);
var state_16237__$1 = state_16237;
var statearr_16254_18000 = state_16237__$1;
(statearr_16254_18000[(2)] = inst_16209);

(statearr_16254_18000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (21))){
var inst_16229 = (state_16237[(2)]);
var state_16237__$1 = (function (){var statearr_16260 = state_16237;
(statearr_16260[(9)] = inst_16229);

return statearr_16260;
})();
var statearr_16261_18001 = state_16237__$1;
(statearr_16261_18001[(2)] = null);

(statearr_16261_18001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (13))){
var inst_16191 = (state_16237[(10)]);
var inst_16193 = cljs.core.chunked_seq_QMARK_(inst_16191);
var state_16237__$1 = state_16237;
if(inst_16193){
var statearr_16265_18002 = state_16237__$1;
(statearr_16265_18002[(1)] = (16));

} else {
var statearr_16266_18003 = state_16237__$1;
(statearr_16266_18003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (22))){
var inst_16221 = (state_16237[(2)]);
var state_16237__$1 = state_16237;
if(cljs.core.truth_(inst_16221)){
var statearr_16268_18004 = state_16237__$1;
(statearr_16268_18004[(1)] = (23));

} else {
var statearr_16272_18005 = state_16237__$1;
(statearr_16272_18005[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (6))){
var inst_16164 = (state_16237[(8)]);
var inst_16215 = (state_16237[(7)]);
var inst_16217 = (state_16237[(11)]);
var inst_16215__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16164) : topic_fn.call(null,inst_16164));
var inst_16216 = cljs.core.deref(mults);
var inst_16217__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16216,inst_16215__$1);
var state_16237__$1 = (function (){var statearr_16273 = state_16237;
(statearr_16273[(7)] = inst_16215__$1);

(statearr_16273[(11)] = inst_16217__$1);

return statearr_16273;
})();
if(cljs.core.truth_(inst_16217__$1)){
var statearr_16274_18020 = state_16237__$1;
(statearr_16274_18020[(1)] = (19));

} else {
var statearr_16275_18022 = state_16237__$1;
(statearr_16275_18022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (25))){
var inst_16226 = (state_16237[(2)]);
var state_16237__$1 = state_16237;
var statearr_16280_18023 = state_16237__$1;
(statearr_16280_18023[(2)] = inst_16226);

(statearr_16280_18023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (17))){
var inst_16191 = (state_16237[(10)]);
var inst_16200 = cljs.core.first(inst_16191);
var inst_16201 = cljs.core.async.muxch_STAR_(inst_16200);
var inst_16202 = cljs.core.async.close_BANG_(inst_16201);
var inst_16203 = cljs.core.next(inst_16191);
var inst_16175 = inst_16203;
var inst_16176 = null;
var inst_16177 = (0);
var inst_16178 = (0);
var state_16237__$1 = (function (){var statearr_16287 = state_16237;
(statearr_16287[(12)] = inst_16176);

(statearr_16287[(13)] = inst_16177);

(statearr_16287[(14)] = inst_16178);

(statearr_16287[(15)] = inst_16175);

(statearr_16287[(16)] = inst_16202);

return statearr_16287;
})();
var statearr_16289_18035 = state_16237__$1;
(statearr_16289_18035[(2)] = null);

(statearr_16289_18035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (3))){
var inst_16234 = (state_16237[(2)]);
var state_16237__$1 = state_16237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16237__$1,inst_16234);
} else {
if((state_val_16238 === (12))){
var inst_16211 = (state_16237[(2)]);
var state_16237__$1 = state_16237;
var statearr_16294_18040 = state_16237__$1;
(statearr_16294_18040[(2)] = inst_16211);

(statearr_16294_18040[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (2))){
var state_16237__$1 = state_16237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16237__$1,(4),ch);
} else {
if((state_val_16238 === (23))){
var state_16237__$1 = state_16237;
var statearr_16298_18042 = state_16237__$1;
(statearr_16298_18042[(2)] = null);

(statearr_16298_18042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (19))){
var inst_16164 = (state_16237[(8)]);
var inst_16217 = (state_16237[(11)]);
var inst_16219 = cljs.core.async.muxch_STAR_(inst_16217);
var state_16237__$1 = state_16237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16237__$1,(22),inst_16219,inst_16164);
} else {
if((state_val_16238 === (11))){
var inst_16175 = (state_16237[(15)]);
var inst_16191 = (state_16237[(10)]);
var inst_16191__$1 = cljs.core.seq(inst_16175);
var state_16237__$1 = (function (){var statearr_16306 = state_16237;
(statearr_16306[(10)] = inst_16191__$1);

return statearr_16306;
})();
if(inst_16191__$1){
var statearr_16307_18046 = state_16237__$1;
(statearr_16307_18046[(1)] = (13));

} else {
var statearr_16309_18047 = state_16237__$1;
(statearr_16309_18047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (9))){
var inst_16213 = (state_16237[(2)]);
var state_16237__$1 = state_16237;
var statearr_16312_18048 = state_16237__$1;
(statearr_16312_18048[(2)] = inst_16213);

(statearr_16312_18048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (5))){
var inst_16172 = cljs.core.deref(mults);
var inst_16173 = cljs.core.vals(inst_16172);
var inst_16174 = cljs.core.seq(inst_16173);
var inst_16175 = inst_16174;
var inst_16176 = null;
var inst_16177 = (0);
var inst_16178 = (0);
var state_16237__$1 = (function (){var statearr_16316 = state_16237;
(statearr_16316[(12)] = inst_16176);

(statearr_16316[(13)] = inst_16177);

(statearr_16316[(14)] = inst_16178);

(statearr_16316[(15)] = inst_16175);

return statearr_16316;
})();
var statearr_16317_18050 = state_16237__$1;
(statearr_16317_18050[(2)] = null);

(statearr_16317_18050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (14))){
var state_16237__$1 = state_16237;
var statearr_16322_18051 = state_16237__$1;
(statearr_16322_18051[(2)] = null);

(statearr_16322_18051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (16))){
var inst_16191 = (state_16237[(10)]);
var inst_16195 = cljs.core.chunk_first(inst_16191);
var inst_16196 = cljs.core.chunk_rest(inst_16191);
var inst_16197 = cljs.core.count(inst_16195);
var inst_16175 = inst_16196;
var inst_16176 = inst_16195;
var inst_16177 = inst_16197;
var inst_16178 = (0);
var state_16237__$1 = (function (){var statearr_16327 = state_16237;
(statearr_16327[(12)] = inst_16176);

(statearr_16327[(13)] = inst_16177);

(statearr_16327[(14)] = inst_16178);

(statearr_16327[(15)] = inst_16175);

return statearr_16327;
})();
var statearr_16329_18054 = state_16237__$1;
(statearr_16329_18054[(2)] = null);

(statearr_16329_18054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (10))){
var inst_16176 = (state_16237[(12)]);
var inst_16177 = (state_16237[(13)]);
var inst_16178 = (state_16237[(14)]);
var inst_16175 = (state_16237[(15)]);
var inst_16183 = cljs.core._nth(inst_16176,inst_16178);
var inst_16186 = cljs.core.async.muxch_STAR_(inst_16183);
var inst_16187 = cljs.core.async.close_BANG_(inst_16186);
var inst_16188 = (inst_16178 + (1));
var tmp16318 = inst_16176;
var tmp16319 = inst_16177;
var tmp16320 = inst_16175;
var inst_16175__$1 = tmp16320;
var inst_16176__$1 = tmp16318;
var inst_16177__$1 = tmp16319;
var inst_16178__$1 = inst_16188;
var state_16237__$1 = (function (){var statearr_16340 = state_16237;
(statearr_16340[(17)] = inst_16187);

(statearr_16340[(12)] = inst_16176__$1);

(statearr_16340[(13)] = inst_16177__$1);

(statearr_16340[(14)] = inst_16178__$1);

(statearr_16340[(15)] = inst_16175__$1);

return statearr_16340;
})();
var statearr_16341_18058 = state_16237__$1;
(statearr_16341_18058[(2)] = null);

(statearr_16341_18058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (18))){
var inst_16206 = (state_16237[(2)]);
var state_16237__$1 = state_16237;
var statearr_16342_18059 = state_16237__$1;
(statearr_16342_18059[(2)] = inst_16206);

(statearr_16342_18059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16238 === (8))){
var inst_16177 = (state_16237[(13)]);
var inst_16178 = (state_16237[(14)]);
var inst_16180 = (inst_16178 < inst_16177);
var inst_16181 = inst_16180;
var state_16237__$1 = state_16237;
if(cljs.core.truth_(inst_16181)){
var statearr_16343_18061 = state_16237__$1;
(statearr_16343_18061[(1)] = (10));

} else {
var statearr_16344_18062 = state_16237__$1;
(statearr_16344_18062[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_16345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16345[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_16345[(1)] = (1));

return statearr_16345;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_16237){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_16237);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e16346){var ex__14197__auto__ = e16346;
var statearr_16347_18065 = state_16237;
(statearr_16347_18065[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_16237[(4)]))){
var statearr_16348_18067 = state_16237;
(statearr_16348_18067[(1)] = cljs.core.first((state_16237[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18068 = state_16237;
state_16237 = G__18068;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_16237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_16237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_16357 = f__14438__auto__();
(statearr_16357[(6)] = c__14437__auto___17989);

return statearr_16357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16364 = arguments.length;
switch (G__16364) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16382 = arguments.length;
switch (G__16382) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16385 = arguments.length;
switch (G__16385) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14437__auto___18080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_16491){
var state_val_16492 = (state_16491[(1)]);
if((state_val_16492 === (7))){
var state_16491__$1 = state_16491;
var statearr_16495_18082 = state_16491__$1;
(statearr_16495_18082[(2)] = null);

(statearr_16495_18082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (1))){
var state_16491__$1 = state_16491;
var statearr_16498_18084 = state_16491__$1;
(statearr_16498_18084[(2)] = null);

(statearr_16498_18084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (4))){
var inst_16450 = (state_16491[(7)]);
var inst_16448 = (state_16491[(8)]);
var inst_16452 = (inst_16450 < inst_16448);
var state_16491__$1 = state_16491;
if(cljs.core.truth_(inst_16452)){
var statearr_16499_18086 = state_16491__$1;
(statearr_16499_18086[(1)] = (6));

} else {
var statearr_16500_18087 = state_16491__$1;
(statearr_16500_18087[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (15))){
var inst_16475 = (state_16491[(9)]);
var inst_16480 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16475);
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16491__$1,(17),out,inst_16480);
} else {
if((state_val_16492 === (13))){
var inst_16475 = (state_16491[(9)]);
var inst_16475__$1 = (state_16491[(2)]);
var inst_16476 = cljs.core.some(cljs.core.nil_QMARK_,inst_16475__$1);
var state_16491__$1 = (function (){var statearr_16518 = state_16491;
(statearr_16518[(9)] = inst_16475__$1);

return statearr_16518;
})();
if(cljs.core.truth_(inst_16476)){
var statearr_16519_18088 = state_16491__$1;
(statearr_16519_18088[(1)] = (14));

} else {
var statearr_16522_18090 = state_16491__$1;
(statearr_16522_18090[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (6))){
var state_16491__$1 = state_16491;
var statearr_16525_18091 = state_16491__$1;
(statearr_16525_18091[(2)] = null);

(statearr_16525_18091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (17))){
var inst_16482 = (state_16491[(2)]);
var state_16491__$1 = (function (){var statearr_16530 = state_16491;
(statearr_16530[(10)] = inst_16482);

return statearr_16530;
})();
var statearr_16531_18094 = state_16491__$1;
(statearr_16531_18094[(2)] = null);

(statearr_16531_18094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (3))){
var inst_16487 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16491__$1,inst_16487);
} else {
if((state_val_16492 === (12))){
var _ = (function (){var statearr_16532 = state_16491;
(statearr_16532[(4)] = cljs.core.rest((state_16491[(4)])));

return statearr_16532;
})();
var state_16491__$1 = state_16491;
var ex16528 = (state_16491__$1[(2)]);
var statearr_16533_18095 = state_16491__$1;
(statearr_16533_18095[(5)] = ex16528);


if((ex16528 instanceof Object)){
var statearr_16534_18096 = state_16491__$1;
(statearr_16534_18096[(1)] = (11));

(statearr_16534_18096[(5)] = null);

} else {
throw ex16528;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (2))){
var inst_16445 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16448 = cnt;
var inst_16450 = (0);
var state_16491__$1 = (function (){var statearr_16537 = state_16491;
(statearr_16537[(7)] = inst_16450);

(statearr_16537[(11)] = inst_16445);

(statearr_16537[(8)] = inst_16448);

return statearr_16537;
})();
var statearr_16539_18100 = state_16491__$1;
(statearr_16539_18100[(2)] = null);

(statearr_16539_18100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (11))){
var inst_16454 = (state_16491[(2)]);
var inst_16455 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16491__$1 = (function (){var statearr_16543 = state_16491;
(statearr_16543[(12)] = inst_16454);

return statearr_16543;
})();
var statearr_16544_18103 = state_16491__$1;
(statearr_16544_18103[(2)] = inst_16455);

(statearr_16544_18103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (9))){
var inst_16450 = (state_16491[(7)]);
var _ = (function (){var statearr_16545 = state_16491;
(statearr_16545[(4)] = cljs.core.cons((12),(state_16491[(4)])));

return statearr_16545;
})();
var inst_16461 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16450) : chs__$1.call(null,inst_16450));
var inst_16462 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16450) : done.call(null,inst_16450));
var inst_16463 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16461,inst_16462);
var ___$1 = (function (){var statearr_16546 = state_16491;
(statearr_16546[(4)] = cljs.core.rest((state_16491[(4)])));

return statearr_16546;
})();
var state_16491__$1 = state_16491;
var statearr_16549_18106 = state_16491__$1;
(statearr_16549_18106[(2)] = inst_16463);

(statearr_16549_18106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (5))){
var inst_16473 = (state_16491[(2)]);
var state_16491__$1 = (function (){var statearr_16550 = state_16491;
(statearr_16550[(13)] = inst_16473);

return statearr_16550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16491__$1,(13),dchan);
} else {
if((state_val_16492 === (14))){
var inst_16478 = cljs.core.async.close_BANG_(out);
var state_16491__$1 = state_16491;
var statearr_16551_18111 = state_16491__$1;
(statearr_16551_18111[(2)] = inst_16478);

(statearr_16551_18111[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (16))){
var inst_16485 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16552_18124 = state_16491__$1;
(statearr_16552_18124[(2)] = inst_16485);

(statearr_16552_18124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (10))){
var inst_16450 = (state_16491[(7)]);
var inst_16466 = (state_16491[(2)]);
var inst_16467 = (inst_16450 + (1));
var inst_16450__$1 = inst_16467;
var state_16491__$1 = (function (){var statearr_16553 = state_16491;
(statearr_16553[(7)] = inst_16450__$1);

(statearr_16553[(14)] = inst_16466);

return statearr_16553;
})();
var statearr_16556_18125 = state_16491__$1;
(statearr_16556_18125[(2)] = null);

(statearr_16556_18125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16492 === (8))){
var inst_16471 = (state_16491[(2)]);
var state_16491__$1 = state_16491;
var statearr_16565_18126 = state_16491__$1;
(statearr_16565_18126[(2)] = inst_16471);

(statearr_16565_18126[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_16566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16566[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_16566[(1)] = (1));

return statearr_16566;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_16491){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_16491);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e16567){var ex__14197__auto__ = e16567;
var statearr_16568_18127 = state_16491;
(statearr_16568_18127[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_16491[(4)]))){
var statearr_16569_18128 = state_16491;
(statearr_16569_18128[(1)] = cljs.core.first((state_16491[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18129 = state_16491;
state_16491 = G__18129;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_16491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_16491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_16571 = f__14438__auto__();
(statearr_16571[(6)] = c__14437__auto___18080);

return statearr_16571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16574 = arguments.length;
switch (G__16574) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14437__auto___18136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_16609){
var state_val_16610 = (state_16609[(1)]);
if((state_val_16610 === (7))){
var inst_16585 = (state_16609[(7)]);
var inst_16586 = (state_16609[(8)]);
var inst_16585__$1 = (state_16609[(2)]);
var inst_16586__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16585__$1,(0),null);
var inst_16587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16585__$1,(1),null);
var inst_16588 = (inst_16586__$1 == null);
var state_16609__$1 = (function (){var statearr_16620 = state_16609;
(statearr_16620[(7)] = inst_16585__$1);

(statearr_16620[(9)] = inst_16587);

(statearr_16620[(8)] = inst_16586__$1);

return statearr_16620;
})();
if(cljs.core.truth_(inst_16588)){
var statearr_16621_18139 = state_16609__$1;
(statearr_16621_18139[(1)] = (8));

} else {
var statearr_16622_18141 = state_16609__$1;
(statearr_16622_18141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (1))){
var inst_16575 = cljs.core.vec(chs);
var inst_16576 = inst_16575;
var state_16609__$1 = (function (){var statearr_16623 = state_16609;
(statearr_16623[(10)] = inst_16576);

return statearr_16623;
})();
var statearr_16624_18142 = state_16609__$1;
(statearr_16624_18142[(2)] = null);

(statearr_16624_18142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (4))){
var inst_16576 = (state_16609[(10)]);
var state_16609__$1 = state_16609;
return cljs.core.async.ioc_alts_BANG_(state_16609__$1,(7),inst_16576);
} else {
if((state_val_16610 === (6))){
var inst_16603 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16625_18145 = state_16609__$1;
(statearr_16625_18145[(2)] = inst_16603);

(statearr_16625_18145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (3))){
var inst_16605 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16609__$1,inst_16605);
} else {
if((state_val_16610 === (2))){
var inst_16576 = (state_16609[(10)]);
var inst_16578 = cljs.core.count(inst_16576);
var inst_16579 = (inst_16578 > (0));
var state_16609__$1 = state_16609;
if(cljs.core.truth_(inst_16579)){
var statearr_16627_18149 = state_16609__$1;
(statearr_16627_18149[(1)] = (4));

} else {
var statearr_16628_18150 = state_16609__$1;
(statearr_16628_18150[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (11))){
var inst_16576 = (state_16609[(10)]);
var inst_16595 = (state_16609[(2)]);
var tmp16626 = inst_16576;
var inst_16576__$1 = tmp16626;
var state_16609__$1 = (function (){var statearr_16632 = state_16609;
(statearr_16632[(11)] = inst_16595);

(statearr_16632[(10)] = inst_16576__$1);

return statearr_16632;
})();
var statearr_16633_18153 = state_16609__$1;
(statearr_16633_18153[(2)] = null);

(statearr_16633_18153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (9))){
var inst_16586 = (state_16609[(8)]);
var state_16609__$1 = state_16609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16609__$1,(11),out,inst_16586);
} else {
if((state_val_16610 === (5))){
var inst_16601 = cljs.core.async.close_BANG_(out);
var state_16609__$1 = state_16609;
var statearr_16638_18158 = state_16609__$1;
(statearr_16638_18158[(2)] = inst_16601);

(statearr_16638_18158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (10))){
var inst_16599 = (state_16609[(2)]);
var state_16609__$1 = state_16609;
var statearr_16639_18159 = state_16609__$1;
(statearr_16639_18159[(2)] = inst_16599);

(statearr_16639_18159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16610 === (8))){
var inst_16585 = (state_16609[(7)]);
var inst_16576 = (state_16609[(10)]);
var inst_16587 = (state_16609[(9)]);
var inst_16586 = (state_16609[(8)]);
var inst_16590 = (function (){var cs = inst_16576;
var vec__16581 = inst_16585;
var v = inst_16586;
var c = inst_16587;
return (function (p1__16572_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16572_SHARP_);
});
})();
var inst_16591 = cljs.core.filterv(inst_16590,inst_16576);
var inst_16576__$1 = inst_16591;
var state_16609__$1 = (function (){var statearr_16645 = state_16609;
(statearr_16645[(10)] = inst_16576__$1);

return statearr_16645;
})();
var statearr_16648_18164 = state_16609__$1;
(statearr_16648_18164[(2)] = null);

(statearr_16648_18164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_16650 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16650[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_16650[(1)] = (1));

return statearr_16650;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_16609){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_16609);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e16662){var ex__14197__auto__ = e16662;
var statearr_16663_18171 = state_16609;
(statearr_16663_18171[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_16609[(4)]))){
var statearr_16664_18172 = state_16609;
(statearr_16664_18172[(1)] = cljs.core.first((state_16609[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18173 = state_16609;
state_16609 = G__18173;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_16609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_16609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_16666 = f__14438__auto__();
(statearr_16666[(6)] = c__14437__auto___18136);

return statearr_16666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16671 = arguments.length;
switch (G__16671) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14437__auto___18177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_16700){
var state_val_16701 = (state_16700[(1)]);
if((state_val_16701 === (7))){
var inst_16681 = (state_16700[(7)]);
var inst_16681__$1 = (state_16700[(2)]);
var inst_16682 = (inst_16681__$1 == null);
var inst_16683 = cljs.core.not(inst_16682);
var state_16700__$1 = (function (){var statearr_16704 = state_16700;
(statearr_16704[(7)] = inst_16681__$1);

return statearr_16704;
})();
if(inst_16683){
var statearr_16705_18183 = state_16700__$1;
(statearr_16705_18183[(1)] = (8));

} else {
var statearr_16706_18184 = state_16700__$1;
(statearr_16706_18184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (1))){
var inst_16676 = (0);
var state_16700__$1 = (function (){var statearr_16707 = state_16700;
(statearr_16707[(8)] = inst_16676);

return statearr_16707;
})();
var statearr_16708_18185 = state_16700__$1;
(statearr_16708_18185[(2)] = null);

(statearr_16708_18185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (4))){
var state_16700__$1 = state_16700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16700__$1,(7),ch);
} else {
if((state_val_16701 === (6))){
var inst_16695 = (state_16700[(2)]);
var state_16700__$1 = state_16700;
var statearr_16712_18186 = state_16700__$1;
(statearr_16712_18186[(2)] = inst_16695);

(statearr_16712_18186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (3))){
var inst_16697 = (state_16700[(2)]);
var inst_16698 = cljs.core.async.close_BANG_(out);
var state_16700__$1 = (function (){var statearr_16715 = state_16700;
(statearr_16715[(9)] = inst_16697);

return statearr_16715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16700__$1,inst_16698);
} else {
if((state_val_16701 === (2))){
var inst_16676 = (state_16700[(8)]);
var inst_16678 = (inst_16676 < n);
var state_16700__$1 = state_16700;
if(cljs.core.truth_(inst_16678)){
var statearr_16717_18189 = state_16700__$1;
(statearr_16717_18189[(1)] = (4));

} else {
var statearr_16719_18190 = state_16700__$1;
(statearr_16719_18190[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (11))){
var inst_16676 = (state_16700[(8)]);
var inst_16686 = (state_16700[(2)]);
var inst_16687 = (inst_16676 + (1));
var inst_16676__$1 = inst_16687;
var state_16700__$1 = (function (){var statearr_16796 = state_16700;
(statearr_16796[(8)] = inst_16676__$1);

(statearr_16796[(10)] = inst_16686);

return statearr_16796;
})();
var statearr_16815_18191 = state_16700__$1;
(statearr_16815_18191[(2)] = null);

(statearr_16815_18191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (9))){
var state_16700__$1 = state_16700;
var statearr_16816_18192 = state_16700__$1;
(statearr_16816_18192[(2)] = null);

(statearr_16816_18192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (5))){
var state_16700__$1 = state_16700;
var statearr_16817_18193 = state_16700__$1;
(statearr_16817_18193[(2)] = null);

(statearr_16817_18193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (10))){
var inst_16692 = (state_16700[(2)]);
var state_16700__$1 = state_16700;
var statearr_16819_18195 = state_16700__$1;
(statearr_16819_18195[(2)] = inst_16692);

(statearr_16819_18195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16701 === (8))){
var inst_16681 = (state_16700[(7)]);
var state_16700__$1 = state_16700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16700__$1,(11),out,inst_16681);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_16820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16820[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_16820[(1)] = (1));

return statearr_16820;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_16700){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_16700);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e16821){var ex__14197__auto__ = e16821;
var statearr_16822_18199 = state_16700;
(statearr_16822_18199[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_16700[(4)]))){
var statearr_16823_18200 = state_16700;
(statearr_16823_18200[(1)] = cljs.core.first((state_16700[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18201 = state_16700;
state_16700 = G__18201;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_16700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_16700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_16824 = f__14438__auto__();
(statearr_16824[(6)] = c__14437__auto___18177);

return statearr_16824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16826 = (function (f,ch,meta16827){
this.f = f;
this.ch = ch;
this.meta16827 = meta16827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16828,meta16827__$1){
var self__ = this;
var _16828__$1 = this;
return (new cljs.core.async.t_cljs$core$async16826(self__.f,self__.ch,meta16827__$1));
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16828){
var self__ = this;
var _16828__$1 = this;
return self__.meta16827;
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16867 = (function (f,ch,meta16827,_,fn1,meta16868){
this.f = f;
this.ch = ch;
this.meta16827 = meta16827;
this._ = _;
this.fn1 = fn1;
this.meta16868 = meta16868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16869,meta16868__$1){
var self__ = this;
var _16869__$1 = this;
return (new cljs.core.async.t_cljs$core$async16867(self__.f,self__.ch,self__.meta16827,self__._,self__.fn1,meta16868__$1));
}));

(cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16869){
var self__ = this;
var _16869__$1 = this;
return self__.meta16868;
}));

(cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16825_SHARP_){
var G__16874 = (((p1__16825_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16825_SHARP_) : self__.f.call(null,p1__16825_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16874) : f1.call(null,G__16874));
});
}));

(cljs.core.async.t_cljs$core$async16867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16827","meta16827",1078854221,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16826","cljs.core.async/t_cljs$core$async16826",-851932628,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16868","meta16868",-2026350883,null)], null);
}));

(cljs.core.async.t_cljs$core$async16867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16867");

(cljs.core.async.t_cljs$core$async16867.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16867.
 */
cljs.core.async.__GT_t_cljs$core$async16867 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16867(f__$1,ch__$1,meta16827__$1,___$2,fn1__$1,meta16868){
return (new cljs.core.async.t_cljs$core$async16867(f__$1,ch__$1,meta16827__$1,___$2,fn1__$1,meta16868));
});

}

return (new cljs.core.async.t_cljs$core$async16867(self__.f,self__.ch,self__.meta16827,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16884 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16884) : self__.f.call(null,G__16884));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16827","meta16827",1078854221,null)], null);
}));

(cljs.core.async.t_cljs$core$async16826.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16826");

(cljs.core.async.t_cljs$core$async16826.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16826");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16826.
 */
cljs.core.async.__GT_t_cljs$core$async16826 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16826(f__$1,ch__$1,meta16827){
return (new cljs.core.async.t_cljs$core$async16826(f__$1,ch__$1,meta16827));
});

}

return (new cljs.core.async.t_cljs$core$async16826(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16890 = (function (f,ch,meta16891){
this.f = f;
this.ch = ch;
this.meta16891 = meta16891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16892,meta16891__$1){
var self__ = this;
var _16892__$1 = this;
return (new cljs.core.async.t_cljs$core$async16890(self__.f,self__.ch,meta16891__$1));
}));

(cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16892){
var self__ = this;
var _16892__$1 = this;
return self__.meta16891;
}));

(cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16891","meta16891",-1906046879,null)], null);
}));

(cljs.core.async.t_cljs$core$async16890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16890");

(cljs.core.async.t_cljs$core$async16890.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16890.
 */
cljs.core.async.__GT_t_cljs$core$async16890 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16890(f__$1,ch__$1,meta16891){
return (new cljs.core.async.t_cljs$core$async16890(f__$1,ch__$1,meta16891));
});

}

return (new cljs.core.async.t_cljs$core$async16890(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16911 = (function (p,ch,meta16912){
this.p = p;
this.ch = ch;
this.meta16912 = meta16912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16913,meta16912__$1){
var self__ = this;
var _16913__$1 = this;
return (new cljs.core.async.t_cljs$core$async16911(self__.p,self__.ch,meta16912__$1));
}));

(cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16913){
var self__ = this;
var _16913__$1 = this;
return self__.meta16912;
}));

(cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16912","meta16912",1846469001,null)], null);
}));

(cljs.core.async.t_cljs$core$async16911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16911");

(cljs.core.async.t_cljs$core$async16911.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16911.
 */
cljs.core.async.__GT_t_cljs$core$async16911 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16911(p__$1,ch__$1,meta16912){
return (new cljs.core.async.t_cljs$core$async16911(p__$1,ch__$1,meta16912));
});

}

return (new cljs.core.async.t_cljs$core$async16911(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16932 = arguments.length;
switch (G__16932) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14437__auto___18234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_16955){
var state_val_16956 = (state_16955[(1)]);
if((state_val_16956 === (7))){
var inst_16951 = (state_16955[(2)]);
var state_16955__$1 = state_16955;
var statearr_16958_18235 = state_16955__$1;
(statearr_16958_18235[(2)] = inst_16951);

(statearr_16958_18235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (1))){
var state_16955__$1 = state_16955;
var statearr_16959_18239 = state_16955__$1;
(statearr_16959_18239[(2)] = null);

(statearr_16959_18239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (4))){
var inst_16937 = (state_16955[(7)]);
var inst_16937__$1 = (state_16955[(2)]);
var inst_16938 = (inst_16937__$1 == null);
var state_16955__$1 = (function (){var statearr_16960 = state_16955;
(statearr_16960[(7)] = inst_16937__$1);

return statearr_16960;
})();
if(cljs.core.truth_(inst_16938)){
var statearr_16962_18240 = state_16955__$1;
(statearr_16962_18240[(1)] = (5));

} else {
var statearr_16963_18241 = state_16955__$1;
(statearr_16963_18241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (6))){
var inst_16937 = (state_16955[(7)]);
var inst_16942 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16937) : p.call(null,inst_16937));
var state_16955__$1 = state_16955;
if(cljs.core.truth_(inst_16942)){
var statearr_16964_18243 = state_16955__$1;
(statearr_16964_18243[(1)] = (8));

} else {
var statearr_16965_18244 = state_16955__$1;
(statearr_16965_18244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (3))){
var inst_16953 = (state_16955[(2)]);
var state_16955__$1 = state_16955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16955__$1,inst_16953);
} else {
if((state_val_16956 === (2))){
var state_16955__$1 = state_16955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16955__$1,(4),ch);
} else {
if((state_val_16956 === (11))){
var inst_16945 = (state_16955[(2)]);
var state_16955__$1 = state_16955;
var statearr_16966_18245 = state_16955__$1;
(statearr_16966_18245[(2)] = inst_16945);

(statearr_16966_18245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (9))){
var state_16955__$1 = state_16955;
var statearr_16967_18246 = state_16955__$1;
(statearr_16967_18246[(2)] = null);

(statearr_16967_18246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (5))){
var inst_16940 = cljs.core.async.close_BANG_(out);
var state_16955__$1 = state_16955;
var statearr_16970_18247 = state_16955__$1;
(statearr_16970_18247[(2)] = inst_16940);

(statearr_16970_18247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (10))){
var inst_16948 = (state_16955[(2)]);
var state_16955__$1 = (function (){var statearr_16973 = state_16955;
(statearr_16973[(8)] = inst_16948);

return statearr_16973;
})();
var statearr_16975_18248 = state_16955__$1;
(statearr_16975_18248[(2)] = null);

(statearr_16975_18248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (8))){
var inst_16937 = (state_16955[(7)]);
var state_16955__$1 = state_16955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16955__$1,(11),out,inst_16937);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_16977 = [null,null,null,null,null,null,null,null,null];
(statearr_16977[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_16977[(1)] = (1));

return statearr_16977;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_16955){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_16955);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e16979){var ex__14197__auto__ = e16979;
var statearr_16981_18252 = state_16955;
(statearr_16981_18252[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_16955[(4)]))){
var statearr_16982_18253 = state_16955;
(statearr_16982_18253[(1)] = cljs.core.first((state_16955[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18258 = state_16955;
state_16955 = G__18258;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_16955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_16955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_16990 = f__14438__auto__();
(statearr_16990[(6)] = c__14437__auto___18234);

return statearr_16990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17006 = arguments.length;
switch (G__17006) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_17088){
var state_val_17089 = (state_17088[(1)]);
if((state_val_17089 === (7))){
var inst_17082 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
var statearr_17092_18265 = state_17088__$1;
(statearr_17092_18265[(2)] = inst_17082);

(statearr_17092_18265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (20))){
var inst_17044 = (state_17088[(7)]);
var inst_17062 = (state_17088[(2)]);
var inst_17064 = cljs.core.next(inst_17044);
var inst_17025 = inst_17064;
var inst_17026 = null;
var inst_17027 = (0);
var inst_17028 = (0);
var state_17088__$1 = (function (){var statearr_17093 = state_17088;
(statearr_17093[(8)] = inst_17026);

(statearr_17093[(9)] = inst_17062);

(statearr_17093[(10)] = inst_17028);

(statearr_17093[(11)] = inst_17027);

(statearr_17093[(12)] = inst_17025);

return statearr_17093;
})();
var statearr_17094_18266 = state_17088__$1;
(statearr_17094_18266[(2)] = null);

(statearr_17094_18266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (1))){
var state_17088__$1 = state_17088;
var statearr_17095_18267 = state_17088__$1;
(statearr_17095_18267[(2)] = null);

(statearr_17095_18267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (4))){
var inst_17010 = (state_17088[(13)]);
var inst_17010__$1 = (state_17088[(2)]);
var inst_17011 = (inst_17010__$1 == null);
var state_17088__$1 = (function (){var statearr_17098 = state_17088;
(statearr_17098[(13)] = inst_17010__$1);

return statearr_17098;
})();
if(cljs.core.truth_(inst_17011)){
var statearr_17099_18268 = state_17088__$1;
(statearr_17099_18268[(1)] = (5));

} else {
var statearr_17100_18269 = state_17088__$1;
(statearr_17100_18269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (15))){
var state_17088__$1 = state_17088;
var statearr_17111_18271 = state_17088__$1;
(statearr_17111_18271[(2)] = null);

(statearr_17111_18271[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (21))){
var state_17088__$1 = state_17088;
var statearr_17115_18272 = state_17088__$1;
(statearr_17115_18272[(2)] = null);

(statearr_17115_18272[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (13))){
var inst_17026 = (state_17088[(8)]);
var inst_17028 = (state_17088[(10)]);
var inst_17027 = (state_17088[(11)]);
var inst_17025 = (state_17088[(12)]);
var inst_17039 = (state_17088[(2)]);
var inst_17040 = (inst_17028 + (1));
var tmp17107 = inst_17026;
var tmp17108 = inst_17027;
var tmp17109 = inst_17025;
var inst_17025__$1 = tmp17109;
var inst_17026__$1 = tmp17107;
var inst_17027__$1 = tmp17108;
var inst_17028__$1 = inst_17040;
var state_17088__$1 = (function (){var statearr_17118 = state_17088;
(statearr_17118[(8)] = inst_17026__$1);

(statearr_17118[(10)] = inst_17028__$1);

(statearr_17118[(11)] = inst_17027__$1);

(statearr_17118[(14)] = inst_17039);

(statearr_17118[(12)] = inst_17025__$1);

return statearr_17118;
})();
var statearr_17120_18273 = state_17088__$1;
(statearr_17120_18273[(2)] = null);

(statearr_17120_18273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (22))){
var state_17088__$1 = state_17088;
var statearr_17124_18274 = state_17088__$1;
(statearr_17124_18274[(2)] = null);

(statearr_17124_18274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (6))){
var inst_17010 = (state_17088[(13)]);
var inst_17023 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17010) : f.call(null,inst_17010));
var inst_17024 = cljs.core.seq(inst_17023);
var inst_17025 = inst_17024;
var inst_17026 = null;
var inst_17027 = (0);
var inst_17028 = (0);
var state_17088__$1 = (function (){var statearr_17129 = state_17088;
(statearr_17129[(8)] = inst_17026);

(statearr_17129[(10)] = inst_17028);

(statearr_17129[(11)] = inst_17027);

(statearr_17129[(12)] = inst_17025);

return statearr_17129;
})();
var statearr_17132_18275 = state_17088__$1;
(statearr_17132_18275[(2)] = null);

(statearr_17132_18275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (17))){
var inst_17044 = (state_17088[(7)]);
var inst_17049 = cljs.core.chunk_first(inst_17044);
var inst_17051 = cljs.core.chunk_rest(inst_17044);
var inst_17056 = cljs.core.count(inst_17049);
var inst_17025 = inst_17051;
var inst_17026 = inst_17049;
var inst_17027 = inst_17056;
var inst_17028 = (0);
var state_17088__$1 = (function (){var statearr_17133 = state_17088;
(statearr_17133[(8)] = inst_17026);

(statearr_17133[(10)] = inst_17028);

(statearr_17133[(11)] = inst_17027);

(statearr_17133[(12)] = inst_17025);

return statearr_17133;
})();
var statearr_17134_18276 = state_17088__$1;
(statearr_17134_18276[(2)] = null);

(statearr_17134_18276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (3))){
var inst_17085 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17088__$1,inst_17085);
} else {
if((state_val_17089 === (12))){
var inst_17072 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
var statearr_17140_18277 = state_17088__$1;
(statearr_17140_18277[(2)] = inst_17072);

(statearr_17140_18277[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (2))){
var state_17088__$1 = state_17088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17088__$1,(4),in$);
} else {
if((state_val_17089 === (23))){
var inst_17080 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
var statearr_17151_18278 = state_17088__$1;
(statearr_17151_18278[(2)] = inst_17080);

(statearr_17151_18278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (19))){
var inst_17067 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
var statearr_17152_18279 = state_17088__$1;
(statearr_17152_18279[(2)] = inst_17067);

(statearr_17152_18279[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (11))){
var inst_17025 = (state_17088[(12)]);
var inst_17044 = (state_17088[(7)]);
var inst_17044__$1 = cljs.core.seq(inst_17025);
var state_17088__$1 = (function (){var statearr_17153 = state_17088;
(statearr_17153[(7)] = inst_17044__$1);

return statearr_17153;
})();
if(inst_17044__$1){
var statearr_17154_18281 = state_17088__$1;
(statearr_17154_18281[(1)] = (14));

} else {
var statearr_17155_18282 = state_17088__$1;
(statearr_17155_18282[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (9))){
var inst_17074 = (state_17088[(2)]);
var inst_17075 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17088__$1 = (function (){var statearr_17156 = state_17088;
(statearr_17156[(15)] = inst_17074);

return statearr_17156;
})();
if(cljs.core.truth_(inst_17075)){
var statearr_17157_18283 = state_17088__$1;
(statearr_17157_18283[(1)] = (21));

} else {
var statearr_17158_18284 = state_17088__$1;
(statearr_17158_18284[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (5))){
var inst_17013 = cljs.core.async.close_BANG_(out);
var state_17088__$1 = state_17088;
var statearr_17160_18285 = state_17088__$1;
(statearr_17160_18285[(2)] = inst_17013);

(statearr_17160_18285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (14))){
var inst_17044 = (state_17088[(7)]);
var inst_17047 = cljs.core.chunked_seq_QMARK_(inst_17044);
var state_17088__$1 = state_17088;
if(inst_17047){
var statearr_17167_18286 = state_17088__$1;
(statearr_17167_18286[(1)] = (17));

} else {
var statearr_17181_18288 = state_17088__$1;
(statearr_17181_18288[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (16))){
var inst_17070 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
var statearr_17188_18289 = state_17088__$1;
(statearr_17188_18289[(2)] = inst_17070);

(statearr_17188_18289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (10))){
var inst_17026 = (state_17088[(8)]);
var inst_17028 = (state_17088[(10)]);
var inst_17033 = cljs.core._nth(inst_17026,inst_17028);
var state_17088__$1 = state_17088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17088__$1,(13),out,inst_17033);
} else {
if((state_val_17089 === (18))){
var inst_17044 = (state_17088[(7)]);
var inst_17060 = cljs.core.first(inst_17044);
var state_17088__$1 = state_17088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17088__$1,(20),out,inst_17060);
} else {
if((state_val_17089 === (8))){
var inst_17028 = (state_17088[(10)]);
var inst_17027 = (state_17088[(11)]);
var inst_17030 = (inst_17028 < inst_17027);
var inst_17031 = inst_17030;
var state_17088__$1 = state_17088;
if(cljs.core.truth_(inst_17031)){
var statearr_17190_18292 = state_17088__$1;
(statearr_17190_18292[(1)] = (10));

} else {
var statearr_17191_18293 = state_17088__$1;
(statearr_17191_18293[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14194__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14194__auto____0 = (function (){
var statearr_17192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17192[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14194__auto__);

(statearr_17192[(1)] = (1));

return statearr_17192;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14194__auto____1 = (function (state_17088){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_17088);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e17193){var ex__14197__auto__ = e17193;
var statearr_17194_18295 = state_17088;
(statearr_17194_18295[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_17088[(4)]))){
var statearr_17195_18297 = state_17088;
(statearr_17195_18297[(1)] = cljs.core.first((state_17088[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18298 = state_17088;
state_17088 = G__18298;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14194__auto__ = function(state_17088){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14194__auto____1.call(this,state_17088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14194__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14194__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_17196 = f__14438__auto__();
(statearr_17196[(6)] = c__14437__auto__);

return statearr_17196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));

return c__14437__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17199 = arguments.length;
switch (G__17199) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17207 = arguments.length;
switch (G__17207) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17209 = arguments.length;
switch (G__17209) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14437__auto___18316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_17236){
var state_val_17237 = (state_17236[(1)]);
if((state_val_17237 === (7))){
var inst_17231 = (state_17236[(2)]);
var state_17236__$1 = state_17236;
var statearr_17238_18317 = state_17236__$1;
(statearr_17238_18317[(2)] = inst_17231);

(statearr_17238_18317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (1))){
var inst_17213 = null;
var state_17236__$1 = (function (){var statearr_17239 = state_17236;
(statearr_17239[(7)] = inst_17213);

return statearr_17239;
})();
var statearr_17240_18319 = state_17236__$1;
(statearr_17240_18319[(2)] = null);

(statearr_17240_18319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (4))){
var inst_17216 = (state_17236[(8)]);
var inst_17216__$1 = (state_17236[(2)]);
var inst_17217 = (inst_17216__$1 == null);
var inst_17218 = cljs.core.not(inst_17217);
var state_17236__$1 = (function (){var statearr_17245 = state_17236;
(statearr_17245[(8)] = inst_17216__$1);

return statearr_17245;
})();
if(inst_17218){
var statearr_17248_18320 = state_17236__$1;
(statearr_17248_18320[(1)] = (5));

} else {
var statearr_17249_18321 = state_17236__$1;
(statearr_17249_18321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (6))){
var state_17236__$1 = state_17236;
var statearr_17250_18322 = state_17236__$1;
(statearr_17250_18322[(2)] = null);

(statearr_17250_18322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (3))){
var inst_17233 = (state_17236[(2)]);
var inst_17234 = cljs.core.async.close_BANG_(out);
var state_17236__$1 = (function (){var statearr_17252 = state_17236;
(statearr_17252[(9)] = inst_17233);

return statearr_17252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17236__$1,inst_17234);
} else {
if((state_val_17237 === (2))){
var state_17236__$1 = state_17236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17236__$1,(4),ch);
} else {
if((state_val_17237 === (11))){
var inst_17216 = (state_17236[(8)]);
var inst_17225 = (state_17236[(2)]);
var inst_17213 = inst_17216;
var state_17236__$1 = (function (){var statearr_17253 = state_17236;
(statearr_17253[(10)] = inst_17225);

(statearr_17253[(7)] = inst_17213);

return statearr_17253;
})();
var statearr_17254_18327 = state_17236__$1;
(statearr_17254_18327[(2)] = null);

(statearr_17254_18327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (9))){
var inst_17216 = (state_17236[(8)]);
var state_17236__$1 = state_17236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17236__$1,(11),out,inst_17216);
} else {
if((state_val_17237 === (5))){
var inst_17213 = (state_17236[(7)]);
var inst_17216 = (state_17236[(8)]);
var inst_17220 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17216,inst_17213);
var state_17236__$1 = state_17236;
if(inst_17220){
var statearr_17256_18328 = state_17236__$1;
(statearr_17256_18328[(1)] = (8));

} else {
var statearr_17257_18329 = state_17236__$1;
(statearr_17257_18329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (10))){
var inst_17228 = (state_17236[(2)]);
var state_17236__$1 = state_17236;
var statearr_17260_18330 = state_17236__$1;
(statearr_17260_18330[(2)] = inst_17228);

(statearr_17260_18330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (8))){
var inst_17213 = (state_17236[(7)]);
var tmp17255 = inst_17213;
var inst_17213__$1 = tmp17255;
var state_17236__$1 = (function (){var statearr_17261 = state_17236;
(statearr_17261[(7)] = inst_17213__$1);

return statearr_17261;
})();
var statearr_17262_18331 = state_17236__$1;
(statearr_17262_18331[(2)] = null);

(statearr_17262_18331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_17263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17263[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_17263[(1)] = (1));

return statearr_17263;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_17236){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_17236);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e17264){var ex__14197__auto__ = e17264;
var statearr_17265_18332 = state_17236;
(statearr_17265_18332[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_17236[(4)]))){
var statearr_17266_18334 = state_17236;
(statearr_17266_18334[(1)] = cljs.core.first((state_17236[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18335 = state_17236;
state_17236 = G__18335;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_17236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_17236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_17267 = f__14438__auto__();
(statearr_17267[(6)] = c__14437__auto___18316);

return statearr_17267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17272 = arguments.length;
switch (G__17272) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14437__auto___18337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_17311){
var state_val_17312 = (state_17311[(1)]);
if((state_val_17312 === (7))){
var inst_17307 = (state_17311[(2)]);
var state_17311__$1 = state_17311;
var statearr_17315_18338 = state_17311__$1;
(statearr_17315_18338[(2)] = inst_17307);

(statearr_17315_18338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (1))){
var inst_17273 = (new Array(n));
var inst_17274 = inst_17273;
var inst_17275 = (0);
var state_17311__$1 = (function (){var statearr_17316 = state_17311;
(statearr_17316[(7)] = inst_17274);

(statearr_17316[(8)] = inst_17275);

return statearr_17316;
})();
var statearr_17317_18339 = state_17311__$1;
(statearr_17317_18339[(2)] = null);

(statearr_17317_18339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (4))){
var inst_17279 = (state_17311[(9)]);
var inst_17279__$1 = (state_17311[(2)]);
var inst_17280 = (inst_17279__$1 == null);
var inst_17281 = cljs.core.not(inst_17280);
var state_17311__$1 = (function (){var statearr_17319 = state_17311;
(statearr_17319[(9)] = inst_17279__$1);

return statearr_17319;
})();
if(inst_17281){
var statearr_17320_18340 = state_17311__$1;
(statearr_17320_18340[(1)] = (5));

} else {
var statearr_17321_18341 = state_17311__$1;
(statearr_17321_18341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (15))){
var inst_17301 = (state_17311[(2)]);
var state_17311__$1 = state_17311;
var statearr_17322_18342 = state_17311__$1;
(statearr_17322_18342[(2)] = inst_17301);

(statearr_17322_18342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (13))){
var state_17311__$1 = state_17311;
var statearr_17323_18343 = state_17311__$1;
(statearr_17323_18343[(2)] = null);

(statearr_17323_18343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (6))){
var inst_17275 = (state_17311[(8)]);
var inst_17297 = (inst_17275 > (0));
var state_17311__$1 = state_17311;
if(cljs.core.truth_(inst_17297)){
var statearr_17324_18358 = state_17311__$1;
(statearr_17324_18358[(1)] = (12));

} else {
var statearr_17325_18359 = state_17311__$1;
(statearr_17325_18359[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (3))){
var inst_17309 = (state_17311[(2)]);
var state_17311__$1 = state_17311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17311__$1,inst_17309);
} else {
if((state_val_17312 === (12))){
var inst_17274 = (state_17311[(7)]);
var inst_17299 = cljs.core.vec(inst_17274);
var state_17311__$1 = state_17311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17311__$1,(15),out,inst_17299);
} else {
if((state_val_17312 === (2))){
var state_17311__$1 = state_17311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17311__$1,(4),ch);
} else {
if((state_val_17312 === (11))){
var inst_17291 = (state_17311[(2)]);
var inst_17292 = (new Array(n));
var inst_17274 = inst_17292;
var inst_17275 = (0);
var state_17311__$1 = (function (){var statearr_17327 = state_17311;
(statearr_17327[(7)] = inst_17274);

(statearr_17327[(8)] = inst_17275);

(statearr_17327[(10)] = inst_17291);

return statearr_17327;
})();
var statearr_17328_18360 = state_17311__$1;
(statearr_17328_18360[(2)] = null);

(statearr_17328_18360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (9))){
var inst_17274 = (state_17311[(7)]);
var inst_17289 = cljs.core.vec(inst_17274);
var state_17311__$1 = state_17311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17311__$1,(11),out,inst_17289);
} else {
if((state_val_17312 === (5))){
var inst_17274 = (state_17311[(7)]);
var inst_17279 = (state_17311[(9)]);
var inst_17284 = (state_17311[(11)]);
var inst_17275 = (state_17311[(8)]);
var inst_17283 = (inst_17274[inst_17275] = inst_17279);
var inst_17284__$1 = (inst_17275 + (1));
var inst_17285 = (inst_17284__$1 < n);
var state_17311__$1 = (function (){var statearr_17329 = state_17311;
(statearr_17329[(11)] = inst_17284__$1);

(statearr_17329[(12)] = inst_17283);

return statearr_17329;
})();
if(cljs.core.truth_(inst_17285)){
var statearr_17330_18365 = state_17311__$1;
(statearr_17330_18365[(1)] = (8));

} else {
var statearr_17331_18366 = state_17311__$1;
(statearr_17331_18366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (14))){
var inst_17304 = (state_17311[(2)]);
var inst_17305 = cljs.core.async.close_BANG_(out);
var state_17311__$1 = (function (){var statearr_17334 = state_17311;
(statearr_17334[(13)] = inst_17304);

return statearr_17334;
})();
var statearr_17335_18368 = state_17311__$1;
(statearr_17335_18368[(2)] = inst_17305);

(statearr_17335_18368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (10))){
var inst_17295 = (state_17311[(2)]);
var state_17311__$1 = state_17311;
var statearr_17336_18369 = state_17311__$1;
(statearr_17336_18369[(2)] = inst_17295);

(statearr_17336_18369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17312 === (8))){
var inst_17274 = (state_17311[(7)]);
var inst_17284 = (state_17311[(11)]);
var tmp17332 = inst_17274;
var inst_17274__$1 = tmp17332;
var inst_17275 = inst_17284;
var state_17311__$1 = (function (){var statearr_17338 = state_17311;
(statearr_17338[(7)] = inst_17274__$1);

(statearr_17338[(8)] = inst_17275);

return statearr_17338;
})();
var statearr_17340_18370 = state_17311__$1;
(statearr_17340_18370[(2)] = null);

(statearr_17340_18370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_17343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17343[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_17343[(1)] = (1));

return statearr_17343;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_17311){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_17311);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e17344){var ex__14197__auto__ = e17344;
var statearr_17345_18372 = state_17311;
(statearr_17345_18372[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_17311[(4)]))){
var statearr_17346_18373 = state_17311;
(statearr_17346_18373[(1)] = cljs.core.first((state_17311[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18377 = state_17311;
state_17311 = G__18377;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_17311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_17311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_17347 = f__14438__auto__();
(statearr_17347[(6)] = c__14437__auto___18337);

return statearr_17347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17350 = arguments.length;
switch (G__17350) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14437__auto___18379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_17396){
var state_val_17397 = (state_17396[(1)]);
if((state_val_17397 === (7))){
var inst_17392 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
var statearr_17399_18380 = state_17396__$1;
(statearr_17399_18380[(2)] = inst_17392);

(statearr_17399_18380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (1))){
var inst_17351 = [];
var inst_17352 = inst_17351;
var inst_17353 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17396__$1 = (function (){var statearr_17400 = state_17396;
(statearr_17400[(7)] = inst_17353);

(statearr_17400[(8)] = inst_17352);

return statearr_17400;
})();
var statearr_17401_18381 = state_17396__$1;
(statearr_17401_18381[(2)] = null);

(statearr_17401_18381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (4))){
var inst_17357 = (state_17396[(9)]);
var inst_17357__$1 = (state_17396[(2)]);
var inst_17358 = (inst_17357__$1 == null);
var inst_17359 = cljs.core.not(inst_17358);
var state_17396__$1 = (function (){var statearr_17408 = state_17396;
(statearr_17408[(9)] = inst_17357__$1);

return statearr_17408;
})();
if(inst_17359){
var statearr_17409_18382 = state_17396__$1;
(statearr_17409_18382[(1)] = (5));

} else {
var statearr_17410_18383 = state_17396__$1;
(statearr_17410_18383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (15))){
var inst_17352 = (state_17396[(8)]);
var inst_17384 = cljs.core.vec(inst_17352);
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17396__$1,(18),out,inst_17384);
} else {
if((state_val_17397 === (13))){
var inst_17379 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
var statearr_17412_18384 = state_17396__$1;
(statearr_17412_18384[(2)] = inst_17379);

(statearr_17412_18384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (6))){
var inst_17352 = (state_17396[(8)]);
var inst_17381 = inst_17352.length;
var inst_17382 = (inst_17381 > (0));
var state_17396__$1 = state_17396;
if(cljs.core.truth_(inst_17382)){
var statearr_17413_18385 = state_17396__$1;
(statearr_17413_18385[(1)] = (15));

} else {
var statearr_17414_18386 = state_17396__$1;
(statearr_17414_18386[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (17))){
var inst_17389 = (state_17396[(2)]);
var inst_17390 = cljs.core.async.close_BANG_(out);
var state_17396__$1 = (function (){var statearr_17415 = state_17396;
(statearr_17415[(10)] = inst_17389);

return statearr_17415;
})();
var statearr_17416_18387 = state_17396__$1;
(statearr_17416_18387[(2)] = inst_17390);

(statearr_17416_18387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (3))){
var inst_17394 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17396__$1,inst_17394);
} else {
if((state_val_17397 === (12))){
var inst_17352 = (state_17396[(8)]);
var inst_17372 = cljs.core.vec(inst_17352);
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17396__$1,(14),out,inst_17372);
} else {
if((state_val_17397 === (2))){
var state_17396__$1 = state_17396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17396__$1,(4),ch);
} else {
if((state_val_17397 === (11))){
var inst_17357 = (state_17396[(9)]);
var inst_17361 = (state_17396[(11)]);
var inst_17352 = (state_17396[(8)]);
var inst_17369 = inst_17352.push(inst_17357);
var tmp17417 = inst_17352;
var inst_17352__$1 = tmp17417;
var inst_17353 = inst_17361;
var state_17396__$1 = (function (){var statearr_17424 = state_17396;
(statearr_17424[(7)] = inst_17353);

(statearr_17424[(12)] = inst_17369);

(statearr_17424[(8)] = inst_17352__$1);

return statearr_17424;
})();
var statearr_17425_18388 = state_17396__$1;
(statearr_17425_18388[(2)] = null);

(statearr_17425_18388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (9))){
var inst_17353 = (state_17396[(7)]);
var inst_17365 = cljs.core.keyword_identical_QMARK_(inst_17353,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17396__$1 = state_17396;
var statearr_17429_18389 = state_17396__$1;
(statearr_17429_18389[(2)] = inst_17365);

(statearr_17429_18389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (5))){
var inst_17357 = (state_17396[(9)]);
var inst_17353 = (state_17396[(7)]);
var inst_17361 = (state_17396[(11)]);
var inst_17362 = (state_17396[(13)]);
var inst_17361__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17357) : f.call(null,inst_17357));
var inst_17362__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17361__$1,inst_17353);
var state_17396__$1 = (function (){var statearr_17430 = state_17396;
(statearr_17430[(11)] = inst_17361__$1);

(statearr_17430[(13)] = inst_17362__$1);

return statearr_17430;
})();
if(inst_17362__$1){
var statearr_17431_18391 = state_17396__$1;
(statearr_17431_18391[(1)] = (8));

} else {
var statearr_17432_18393 = state_17396__$1;
(statearr_17432_18393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (14))){
var inst_17357 = (state_17396[(9)]);
var inst_17361 = (state_17396[(11)]);
var inst_17374 = (state_17396[(2)]);
var inst_17375 = [];
var inst_17376 = inst_17375.push(inst_17357);
var inst_17352 = inst_17375;
var inst_17353 = inst_17361;
var state_17396__$1 = (function (){var statearr_17433 = state_17396;
(statearr_17433[(14)] = inst_17374);

(statearr_17433[(7)] = inst_17353);

(statearr_17433[(15)] = inst_17376);

(statearr_17433[(8)] = inst_17352);

return statearr_17433;
})();
var statearr_17434_18394 = state_17396__$1;
(statearr_17434_18394[(2)] = null);

(statearr_17434_18394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (16))){
var state_17396__$1 = state_17396;
var statearr_17435_18395 = state_17396__$1;
(statearr_17435_18395[(2)] = null);

(statearr_17435_18395[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (10))){
var inst_17367 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
if(cljs.core.truth_(inst_17367)){
var statearr_17436_18396 = state_17396__$1;
(statearr_17436_18396[(1)] = (11));

} else {
var statearr_17439_18397 = state_17396__$1;
(statearr_17439_18397[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (18))){
var inst_17386 = (state_17396[(2)]);
var state_17396__$1 = state_17396;
var statearr_17444_18398 = state_17396__$1;
(statearr_17444_18398[(2)] = inst_17386);

(statearr_17444_18398[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17397 === (8))){
var inst_17362 = (state_17396[(13)]);
var state_17396__$1 = state_17396;
var statearr_17445_18399 = state_17396__$1;
(statearr_17445_18399[(2)] = inst_17362);

(statearr_17445_18399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14194__auto__ = null;
var cljs$core$async$state_machine__14194__auto____0 = (function (){
var statearr_17449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17449[(0)] = cljs$core$async$state_machine__14194__auto__);

(statearr_17449[(1)] = (1));

return statearr_17449;
});
var cljs$core$async$state_machine__14194__auto____1 = (function (state_17396){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_17396);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e17450){var ex__14197__auto__ = e17450;
var statearr_17451_18401 = state_17396;
(statearr_17451_18401[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_17396[(4)]))){
var statearr_17452_18402 = state_17396;
(statearr_17452_18402[(1)] = cljs.core.first((state_17396[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18403 = state_17396;
state_17396 = G__18403;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
cljs$core$async$state_machine__14194__auto__ = function(state_17396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14194__auto____1.call(this,state_17396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14194__auto____0;
cljs$core$async$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14194__auto____1;
return cljs$core$async$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_17462 = f__14438__auto__();
(statearr_17462[(6)] = c__14437__auto___18379);

return statearr_17462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
