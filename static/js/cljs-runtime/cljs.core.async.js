goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__58377 = arguments.length;
switch (G__58377) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58388 = (function (f,blockable,meta58389){
this.f = f;
this.blockable = blockable;
this.meta58389 = meta58389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58390,meta58389__$1){
var self__ = this;
var _58390__$1 = this;
return (new cljs.core.async.t_cljs$core$async58388(self__.f,self__.blockable,meta58389__$1));
}));

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58390){
var self__ = this;
var _58390__$1 = this;
return self__.meta58389;
}));

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async58388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async58388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58389","meta58389",-1559666934,null)], null);
}));

(cljs.core.async.t_cljs$core$async58388.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58388");

(cljs.core.async.t_cljs$core$async58388.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58388");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58388.
 */
cljs.core.async.__GT_t_cljs$core$async58388 = (function cljs$core$async$__GT_t_cljs$core$async58388(f__$1,blockable__$1,meta58389){
return (new cljs.core.async.t_cljs$core$async58388(f__$1,blockable__$1,meta58389));
});

}

return (new cljs.core.async.t_cljs$core$async58388(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__58413 = arguments.length;
switch (G__58413) {
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
var G__58415 = arguments.length;
switch (G__58415) {
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
var G__58418 = arguments.length;
switch (G__58418) {
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
var val_60549 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60549) : fn1.call(null,val_60549));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60549) : fn1.call(null,val_60549));
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
var G__58420 = arguments.length;
switch (G__58420) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
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
var n__4741__auto___60553 = n;
var x_60554 = (0);
while(true){
if((x_60554 < n__4741__auto___60553)){
(a[x_60554] = x_60554);

var G__60556 = (x_60554 + (1));
x_60554 = G__60556;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58432 = (function (flag,meta58433){
this.flag = flag;
this.meta58433 = meta58433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58434,meta58433__$1){
var self__ = this;
var _58434__$1 = this;
return (new cljs.core.async.t_cljs$core$async58432(self__.flag,meta58433__$1));
}));

(cljs.core.async.t_cljs$core$async58432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58434){
var self__ = this;
var _58434__$1 = this;
return self__.meta58433;
}));

(cljs.core.async.t_cljs$core$async58432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async58432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58433","meta58433",-250314413,null)], null);
}));

(cljs.core.async.t_cljs$core$async58432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58432");

(cljs.core.async.t_cljs$core$async58432.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58432.
 */
cljs.core.async.__GT_t_cljs$core$async58432 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58432(flag__$1,meta58433){
return (new cljs.core.async.t_cljs$core$async58432(flag__$1,meta58433));
});

}

return (new cljs.core.async.t_cljs$core$async58432(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58445 = (function (flag,cb,meta58446){
this.flag = flag;
this.cb = cb;
this.meta58446 = meta58446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58447,meta58446__$1){
var self__ = this;
var _58447__$1 = this;
return (new cljs.core.async.t_cljs$core$async58445(self__.flag,self__.cb,meta58446__$1));
}));

(cljs.core.async.t_cljs$core$async58445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58447){
var self__ = this;
var _58447__$1 = this;
return self__.meta58446;
}));

(cljs.core.async.t_cljs$core$async58445.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async58445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58446","meta58446",-29041962,null)], null);
}));

(cljs.core.async.t_cljs$core$async58445.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58445");

(cljs.core.async.t_cljs$core$async58445.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58445");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58445.
 */
cljs.core.async.__GT_t_cljs$core$async58445 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58445(flag__$1,cb__$1,meta58446){
return (new cljs.core.async.t_cljs$core$async58445(flag__$1,cb__$1,meta58446));
});

}

return (new cljs.core.async.t_cljs$core$async58445(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__58451_SHARP_){
var G__58455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58451_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58455) : fret.call(null,G__58455));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58452_SHARP_){
var G__58458 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58452_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58458) : fret.call(null,G__58458));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__60560 = (i + (1));
i = G__60560;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___60561 = arguments.length;
var i__4865__auto___60562 = (0);
while(true){
if((i__4865__auto___60562 < len__4864__auto___60561)){
args__4870__auto__.push((arguments[i__4865__auto___60562]));

var G__60563 = (i__4865__auto___60562 + (1));
i__4865__auto___60562 = G__60563;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58461){
var map__58462 = p__58461;
var map__58462__$1 = cljs.core.__destructure_map(map__58462);
var opts = map__58462__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58459){
var G__58460 = cljs.core.first(seq58459);
var seq58459__$1 = cljs.core.next(seq58459);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58460,seq58459__$1);
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
var G__58464 = arguments.length;
switch (G__58464) {
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
var c__48598__auto___60567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_58490){
var state_val_58491 = (state_58490[(1)]);
if((state_val_58491 === (7))){
var inst_58485 = (state_58490[(2)]);
var state_58490__$1 = state_58490;
var statearr_58492_60569 = state_58490__$1;
(statearr_58492_60569[(2)] = inst_58485);

(statearr_58492_60569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (1))){
var state_58490__$1 = state_58490;
var statearr_58493_60570 = state_58490__$1;
(statearr_58493_60570[(2)] = null);

(statearr_58493_60570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (4))){
var inst_58468 = (state_58490[(7)]);
var inst_58468__$1 = (state_58490[(2)]);
var inst_58469 = (inst_58468__$1 == null);
var state_58490__$1 = (function (){var statearr_58494 = state_58490;
(statearr_58494[(7)] = inst_58468__$1);

return statearr_58494;
})();
if(cljs.core.truth_(inst_58469)){
var statearr_58495_60571 = state_58490__$1;
(statearr_58495_60571[(1)] = (5));

} else {
var statearr_58496_60573 = state_58490__$1;
(statearr_58496_60573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (13))){
var state_58490__$1 = state_58490;
var statearr_58497_60574 = state_58490__$1;
(statearr_58497_60574[(2)] = null);

(statearr_58497_60574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (6))){
var inst_58468 = (state_58490[(7)]);
var state_58490__$1 = state_58490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58490__$1,(11),to,inst_58468);
} else {
if((state_val_58491 === (3))){
var inst_58488 = (state_58490[(2)]);
var state_58490__$1 = state_58490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58490__$1,inst_58488);
} else {
if((state_val_58491 === (12))){
var state_58490__$1 = state_58490;
var statearr_58498_60575 = state_58490__$1;
(statearr_58498_60575[(2)] = null);

(statearr_58498_60575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (2))){
var state_58490__$1 = state_58490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58490__$1,(4),from);
} else {
if((state_val_58491 === (11))){
var inst_58478 = (state_58490[(2)]);
var state_58490__$1 = state_58490;
if(cljs.core.truth_(inst_58478)){
var statearr_58501_60576 = state_58490__$1;
(statearr_58501_60576[(1)] = (12));

} else {
var statearr_58502_60577 = state_58490__$1;
(statearr_58502_60577[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (9))){
var state_58490__$1 = state_58490;
var statearr_58503_60578 = state_58490__$1;
(statearr_58503_60578[(2)] = null);

(statearr_58503_60578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (5))){
var state_58490__$1 = state_58490;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58504_60579 = state_58490__$1;
(statearr_58504_60579[(1)] = (8));

} else {
var statearr_58505_60580 = state_58490__$1;
(statearr_58505_60580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (14))){
var inst_58483 = (state_58490[(2)]);
var state_58490__$1 = state_58490;
var statearr_58510_60581 = state_58490__$1;
(statearr_58510_60581[(2)] = inst_58483);

(statearr_58510_60581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (10))){
var inst_58475 = (state_58490[(2)]);
var state_58490__$1 = state_58490;
var statearr_58511_60582 = state_58490__$1;
(statearr_58511_60582[(2)] = inst_58475);

(statearr_58511_60582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (8))){
var inst_58472 = cljs.core.async.close_BANG_(to);
var state_58490__$1 = state_58490;
var statearr_58516_60583 = state_58490__$1;
(statearr_58516_60583[(2)] = inst_58472);

(statearr_58516_60583[(1)] = (10));


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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_58531 = [null,null,null,null,null,null,null,null];
(statearr_58531[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_58531[(1)] = (1));

return statearr_58531;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_58490){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_58490);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e58532){var ex__48473__auto__ = e58532;
var statearr_58533_60584 = state_58490;
(statearr_58533_60584[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_58490[(4)]))){
var statearr_58534_60585 = state_58490;
(statearr_58534_60585[(1)] = cljs.core.first((state_58490[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60586 = state_58490;
state_58490 = G__60586;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_58490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_58490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_58537 = f__48599__auto__();
(statearr_58537[(6)] = c__48598__auto___60567);

return statearr_58537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
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
var process = (function (p__58552){
var vec__58553 = p__58552;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58553,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58553,(1),null);
var job = vec__58553;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48598__auto___60588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_58564){
var state_val_58565 = (state_58564[(1)]);
if((state_val_58565 === (1))){
var state_58564__$1 = state_58564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58564__$1,(2),res,v);
} else {
if((state_val_58565 === (2))){
var inst_58561 = (state_58564[(2)]);
var inst_58562 = cljs.core.async.close_BANG_(res);
var state_58564__$1 = (function (){var statearr_58566 = state_58564;
(statearr_58566[(7)] = inst_58561);

return statearr_58566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58564__$1,inst_58562);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0 = (function (){
var statearr_58573 = [null,null,null,null,null,null,null,null];
(statearr_58573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__);

(statearr_58573[(1)] = (1));

return statearr_58573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1 = (function (state_58564){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_58564);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e58585){var ex__48473__auto__ = e58585;
var statearr_58586_60591 = state_58564;
(statearr_58586_60591[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_58564[(4)]))){
var statearr_58587_60593 = state_58564;
(statearr_58587_60593[(1)] = cljs.core.first((state_58564[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60594 = state_58564;
state_58564 = G__60594;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__ = function(state_58564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1.call(this,state_58564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_58592 = f__48599__auto__();
(statearr_58592[(6)] = c__48598__auto___60588);

return statearr_58592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__58593){
var vec__58594 = p__58593;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58594,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58594,(1),null);
var job = vec__58594;
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
var n__4741__auto___60602 = n;
var __60603 = (0);
while(true){
if((__60603 < n__4741__auto___60602)){
var G__58597_60604 = type;
var G__58597_60605__$1 = (((G__58597_60604 instanceof cljs.core.Keyword))?G__58597_60604.fqn:null);
switch (G__58597_60605__$1) {
case "compute":
var c__48598__auto___60607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60603,c__48598__auto___60607,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async){
return (function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = ((function (__60603,c__48598__auto___60607,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async){
return (function (state_58616){
var state_val_58618 = (state_58616[(1)]);
if((state_val_58618 === (1))){
var state_58616__$1 = state_58616;
var statearr_58624_60608 = state_58616__$1;
(statearr_58624_60608[(2)] = null);

(statearr_58624_60608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58618 === (2))){
var state_58616__$1 = state_58616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58616__$1,(4),jobs);
} else {
if((state_val_58618 === (3))){
var inst_58613 = (state_58616[(2)]);
var state_58616__$1 = state_58616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58616__$1,inst_58613);
} else {
if((state_val_58618 === (4))){
var inst_58604 = (state_58616[(2)]);
var inst_58606 = process(inst_58604);
var state_58616__$1 = state_58616;
if(cljs.core.truth_(inst_58606)){
var statearr_58637_60613 = state_58616__$1;
(statearr_58637_60613[(1)] = (5));

} else {
var statearr_58638_60614 = state_58616__$1;
(statearr_58638_60614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58618 === (5))){
var state_58616__$1 = state_58616;
var statearr_58639_60615 = state_58616__$1;
(statearr_58639_60615[(2)] = null);

(statearr_58639_60615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58618 === (6))){
var state_58616__$1 = state_58616;
var statearr_58640_60616 = state_58616__$1;
(statearr_58640_60616[(2)] = null);

(statearr_58640_60616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58618 === (7))){
var inst_58611 = (state_58616[(2)]);
var state_58616__$1 = state_58616;
var statearr_58641_60617 = state_58616__$1;
(statearr_58641_60617[(2)] = inst_58611);

(statearr_58641_60617[(1)] = (3));


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
});})(__60603,c__48598__auto___60607,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async))
;
return ((function (__60603,switch__48469__auto__,c__48598__auto___60607,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0 = (function (){
var statearr_58642 = [null,null,null,null,null,null,null];
(statearr_58642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__);

(statearr_58642[(1)] = (1));

return statearr_58642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1 = (function (state_58616){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_58616);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e58643){var ex__48473__auto__ = e58643;
var statearr_58644_60621 = state_58616;
(statearr_58644_60621[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_58616[(4)]))){
var statearr_58645_60623 = state_58616;
(statearr_58645_60623[(1)] = cljs.core.first((state_58616[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60625 = state_58616;
state_58616 = G__60625;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__ = function(state_58616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1.call(this,state_58616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__;
})()
;})(__60603,switch__48469__auto__,c__48598__auto___60607,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async))
})();
var state__48600__auto__ = (function (){var statearr_58646 = f__48599__auto__();
(statearr_58646[(6)] = c__48598__auto___60607);

return statearr_58646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
});})(__60603,c__48598__auto___60607,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async))
);


break;
case "async":
var c__48598__auto___60628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60603,c__48598__auto___60628,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async){
return (function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = ((function (__60603,c__48598__auto___60628,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async){
return (function (state_58659){
var state_val_58660 = (state_58659[(1)]);
if((state_val_58660 === (1))){
var state_58659__$1 = state_58659;
var statearr_58661_60629 = state_58659__$1;
(statearr_58661_60629[(2)] = null);

(statearr_58661_60629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (2))){
var state_58659__$1 = state_58659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58659__$1,(4),jobs);
} else {
if((state_val_58660 === (3))){
var inst_58657 = (state_58659[(2)]);
var state_58659__$1 = state_58659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58659__$1,inst_58657);
} else {
if((state_val_58660 === (4))){
var inst_58649 = (state_58659[(2)]);
var inst_58650 = async(inst_58649);
var state_58659__$1 = state_58659;
if(cljs.core.truth_(inst_58650)){
var statearr_58665_60634 = state_58659__$1;
(statearr_58665_60634[(1)] = (5));

} else {
var statearr_58669_60636 = state_58659__$1;
(statearr_58669_60636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (5))){
var state_58659__$1 = state_58659;
var statearr_58671_60638 = state_58659__$1;
(statearr_58671_60638[(2)] = null);

(statearr_58671_60638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (6))){
var state_58659__$1 = state_58659;
var statearr_58673_60652 = state_58659__$1;
(statearr_58673_60652[(2)] = null);

(statearr_58673_60652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58660 === (7))){
var inst_58655 = (state_58659[(2)]);
var state_58659__$1 = state_58659;
var statearr_58674_60661 = state_58659__$1;
(statearr_58674_60661[(2)] = inst_58655);

(statearr_58674_60661[(1)] = (3));


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
});})(__60603,c__48598__auto___60628,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async))
;
return ((function (__60603,switch__48469__auto__,c__48598__auto___60628,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0 = (function (){
var statearr_58675 = [null,null,null,null,null,null,null];
(statearr_58675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__);

(statearr_58675[(1)] = (1));

return statearr_58675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1 = (function (state_58659){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_58659);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e58676){var ex__48473__auto__ = e58676;
var statearr_58677_60674 = state_58659;
(statearr_58677_60674[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_58659[(4)]))){
var statearr_58678_60678 = state_58659;
(statearr_58678_60678[(1)] = cljs.core.first((state_58659[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60681 = state_58659;
state_58659 = G__60681;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__ = function(state_58659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1.call(this,state_58659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__;
})()
;})(__60603,switch__48469__auto__,c__48598__auto___60628,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async))
})();
var state__48600__auto__ = (function (){var statearr_58679 = f__48599__auto__();
(statearr_58679[(6)] = c__48598__auto___60628);

return statearr_58679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
});})(__60603,c__48598__auto___60628,G__58597_60604,G__58597_60605__$1,n__4741__auto___60602,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58597_60605__$1)].join('')));

}

var G__60682 = (__60603 + (1));
__60603 = G__60682;
continue;
} else {
}
break;
}

var c__48598__auto___60683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_58703){
var state_val_58704 = (state_58703[(1)]);
if((state_val_58704 === (7))){
var inst_58699 = (state_58703[(2)]);
var state_58703__$1 = state_58703;
var statearr_58712_60688 = state_58703__$1;
(statearr_58712_60688[(2)] = inst_58699);

(statearr_58712_60688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58704 === (1))){
var state_58703__$1 = state_58703;
var statearr_58713_60689 = state_58703__$1;
(statearr_58713_60689[(2)] = null);

(statearr_58713_60689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58704 === (4))){
var inst_58682 = (state_58703[(7)]);
var inst_58682__$1 = (state_58703[(2)]);
var inst_58683 = (inst_58682__$1 == null);
var state_58703__$1 = (function (){var statearr_58717 = state_58703;
(statearr_58717[(7)] = inst_58682__$1);

return statearr_58717;
})();
if(cljs.core.truth_(inst_58683)){
var statearr_58718_60691 = state_58703__$1;
(statearr_58718_60691[(1)] = (5));

} else {
var statearr_58719_60693 = state_58703__$1;
(statearr_58719_60693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58704 === (6))){
var inst_58688 = (state_58703[(8)]);
var inst_58682 = (state_58703[(7)]);
var inst_58688__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_58689 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58690 = [inst_58682,inst_58688__$1];
var inst_58691 = (new cljs.core.PersistentVector(null,2,(5),inst_58689,inst_58690,null));
var state_58703__$1 = (function (){var statearr_58723 = state_58703;
(statearr_58723[(8)] = inst_58688__$1);

return statearr_58723;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58703__$1,(8),jobs,inst_58691);
} else {
if((state_val_58704 === (3))){
var inst_58701 = (state_58703[(2)]);
var state_58703__$1 = state_58703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58703__$1,inst_58701);
} else {
if((state_val_58704 === (2))){
var state_58703__$1 = state_58703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58703__$1,(4),from);
} else {
if((state_val_58704 === (9))){
var inst_58695 = (state_58703[(2)]);
var state_58703__$1 = (function (){var statearr_58727 = state_58703;
(statearr_58727[(9)] = inst_58695);

return statearr_58727;
})();
var statearr_58728_60694 = state_58703__$1;
(statearr_58728_60694[(2)] = null);

(statearr_58728_60694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58704 === (5))){
var inst_58685 = cljs.core.async.close_BANG_(jobs);
var state_58703__$1 = state_58703;
var statearr_58729_60695 = state_58703__$1;
(statearr_58729_60695[(2)] = inst_58685);

(statearr_58729_60695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58704 === (8))){
var inst_58688 = (state_58703[(8)]);
var inst_58693 = (state_58703[(2)]);
var state_58703__$1 = (function (){var statearr_58730 = state_58703;
(statearr_58730[(10)] = inst_58693);

return statearr_58730;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58703__$1,(9),results,inst_58688);
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
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0 = (function (){
var statearr_58731 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58731[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__);

(statearr_58731[(1)] = (1));

return statearr_58731;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1 = (function (state_58703){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_58703);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e58732){var ex__48473__auto__ = e58732;
var statearr_58733_60700 = state_58703;
(statearr_58733_60700[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_58703[(4)]))){
var statearr_58734_60701 = state_58703;
(statearr_58734_60701[(1)] = cljs.core.first((state_58703[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60702 = state_58703;
state_58703 = G__60702;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__ = function(state_58703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1.call(this,state_58703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_58736 = f__48599__auto__();
(statearr_58736[(6)] = c__48598__auto___60683);

return statearr_58736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));


var c__48598__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_58775){
var state_val_58776 = (state_58775[(1)]);
if((state_val_58776 === (7))){
var inst_58771 = (state_58775[(2)]);
var state_58775__$1 = state_58775;
var statearr_58780_60707 = state_58775__$1;
(statearr_58780_60707[(2)] = inst_58771);

(statearr_58780_60707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (20))){
var state_58775__$1 = state_58775;
var statearr_58781_60708 = state_58775__$1;
(statearr_58781_60708[(2)] = null);

(statearr_58781_60708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (1))){
var state_58775__$1 = state_58775;
var statearr_58782_60709 = state_58775__$1;
(statearr_58782_60709[(2)] = null);

(statearr_58782_60709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (4))){
var inst_58740 = (state_58775[(7)]);
var inst_58740__$1 = (state_58775[(2)]);
var inst_58741 = (inst_58740__$1 == null);
var state_58775__$1 = (function (){var statearr_58783 = state_58775;
(statearr_58783[(7)] = inst_58740__$1);

return statearr_58783;
})();
if(cljs.core.truth_(inst_58741)){
var statearr_58784_60711 = state_58775__$1;
(statearr_58784_60711[(1)] = (5));

} else {
var statearr_58785_60712 = state_58775__$1;
(statearr_58785_60712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (15))){
var inst_58753 = (state_58775[(8)]);
var state_58775__$1 = state_58775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58775__$1,(18),to,inst_58753);
} else {
if((state_val_58776 === (21))){
var inst_58766 = (state_58775[(2)]);
var state_58775__$1 = state_58775;
var statearr_58786_60714 = state_58775__$1;
(statearr_58786_60714[(2)] = inst_58766);

(statearr_58786_60714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (13))){
var inst_58768 = (state_58775[(2)]);
var state_58775__$1 = (function (){var statearr_58787 = state_58775;
(statearr_58787[(9)] = inst_58768);

return statearr_58787;
})();
var statearr_58788_60715 = state_58775__$1;
(statearr_58788_60715[(2)] = null);

(statearr_58788_60715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (6))){
var inst_58740 = (state_58775[(7)]);
var state_58775__$1 = state_58775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58775__$1,(11),inst_58740);
} else {
if((state_val_58776 === (17))){
var inst_58761 = (state_58775[(2)]);
var state_58775__$1 = state_58775;
if(cljs.core.truth_(inst_58761)){
var statearr_58789_60716 = state_58775__$1;
(statearr_58789_60716[(1)] = (19));

} else {
var statearr_58790_60717 = state_58775__$1;
(statearr_58790_60717[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (3))){
var inst_58773 = (state_58775[(2)]);
var state_58775__$1 = state_58775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58775__$1,inst_58773);
} else {
if((state_val_58776 === (12))){
var inst_58750 = (state_58775[(10)]);
var state_58775__$1 = state_58775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58775__$1,(14),inst_58750);
} else {
if((state_val_58776 === (2))){
var state_58775__$1 = state_58775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58775__$1,(4),results);
} else {
if((state_val_58776 === (19))){
var state_58775__$1 = state_58775;
var statearr_58791_60719 = state_58775__$1;
(statearr_58791_60719[(2)] = null);

(statearr_58791_60719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (11))){
var inst_58750 = (state_58775[(2)]);
var state_58775__$1 = (function (){var statearr_58792 = state_58775;
(statearr_58792[(10)] = inst_58750);

return statearr_58792;
})();
var statearr_58793_60720 = state_58775__$1;
(statearr_58793_60720[(2)] = null);

(statearr_58793_60720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (9))){
var state_58775__$1 = state_58775;
var statearr_58794_60721 = state_58775__$1;
(statearr_58794_60721[(2)] = null);

(statearr_58794_60721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (5))){
var state_58775__$1 = state_58775;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58795_60722 = state_58775__$1;
(statearr_58795_60722[(1)] = (8));

} else {
var statearr_58796_60723 = state_58775__$1;
(statearr_58796_60723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (14))){
var inst_58753 = (state_58775[(8)]);
var inst_58755 = (state_58775[(11)]);
var inst_58753__$1 = (state_58775[(2)]);
var inst_58754 = (inst_58753__$1 == null);
var inst_58755__$1 = cljs.core.not(inst_58754);
var state_58775__$1 = (function (){var statearr_58797 = state_58775;
(statearr_58797[(8)] = inst_58753__$1);

(statearr_58797[(11)] = inst_58755__$1);

return statearr_58797;
})();
if(inst_58755__$1){
var statearr_58798_60724 = state_58775__$1;
(statearr_58798_60724[(1)] = (15));

} else {
var statearr_58799_60725 = state_58775__$1;
(statearr_58799_60725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (16))){
var inst_58755 = (state_58775[(11)]);
var state_58775__$1 = state_58775;
var statearr_58800_60726 = state_58775__$1;
(statearr_58800_60726[(2)] = inst_58755);

(statearr_58800_60726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (10))){
var inst_58747 = (state_58775[(2)]);
var state_58775__$1 = state_58775;
var statearr_58801_60727 = state_58775__$1;
(statearr_58801_60727[(2)] = inst_58747);

(statearr_58801_60727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (18))){
var inst_58758 = (state_58775[(2)]);
var state_58775__$1 = state_58775;
var statearr_58802_60732 = state_58775__$1;
(statearr_58802_60732[(2)] = inst_58758);

(statearr_58802_60732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58776 === (8))){
var inst_58744 = cljs.core.async.close_BANG_(to);
var state_58775__$1 = state_58775;
var statearr_58803_60733 = state_58775__$1;
(statearr_58803_60733[(2)] = inst_58744);

(statearr_58803_60733[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0 = (function (){
var statearr_58804 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__);

(statearr_58804[(1)] = (1));

return statearr_58804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1 = (function (state_58775){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_58775);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e58805){var ex__48473__auto__ = e58805;
var statearr_58806_60736 = state_58775;
(statearr_58806_60736[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_58775[(4)]))){
var statearr_58807_60737 = state_58775;
(statearr_58807_60737[(1)] = cljs.core.first((state_58775[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60738 = state_58775;
state_58775 = G__60738;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__ = function(state_58775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1.call(this,state_58775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48470__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_58808 = f__48599__auto__();
(statearr_58808[(6)] = c__48598__auto__);

return statearr_58808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));

return c__48598__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__58810 = arguments.length;
switch (G__58810) {
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
var G__58812 = arguments.length;
switch (G__58812) {
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
var G__58814 = arguments.length;
switch (G__58814) {
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
var c__48598__auto___60749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_58841){
var state_val_58842 = (state_58841[(1)]);
if((state_val_58842 === (7))){
var inst_58837 = (state_58841[(2)]);
var state_58841__$1 = state_58841;
var statearr_58866_60750 = state_58841__$1;
(statearr_58866_60750[(2)] = inst_58837);

(statearr_58866_60750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58842 === (1))){
var state_58841__$1 = state_58841;
var statearr_58867_60751 = state_58841__$1;
(statearr_58867_60751[(2)] = null);

(statearr_58867_60751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58842 === (4))){
var inst_58818 = (state_58841[(7)]);
var inst_58818__$1 = (state_58841[(2)]);
var inst_58819 = (inst_58818__$1 == null);
var state_58841__$1 = (function (){var statearr_58868 = state_58841;
(statearr_58868[(7)] = inst_58818__$1);

return statearr_58868;
})();
if(cljs.core.truth_(inst_58819)){
var statearr_58869_60752 = state_58841__$1;
(statearr_58869_60752[(1)] = (5));

} else {
var statearr_58870_60753 = state_58841__$1;
(statearr_58870_60753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58842 === (13))){
var state_58841__$1 = state_58841;
var statearr_58872_60754 = state_58841__$1;
(statearr_58872_60754[(2)] = null);

(statearr_58872_60754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58842 === (6))){
var inst_58818 = (state_58841[(7)]);
var inst_58824 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58818) : p.call(null,inst_58818));
var state_58841__$1 = state_58841;
if(cljs.core.truth_(inst_58824)){
var statearr_58873_60755 = state_58841__$1;
(statearr_58873_60755[(1)] = (9));

} else {
var statearr_58874_60756 = state_58841__$1;
(statearr_58874_60756[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58842 === (3))){
var inst_58839 = (state_58841[(2)]);
var state_58841__$1 = state_58841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58841__$1,inst_58839);
} else {
if((state_val_58842 === (12))){
var state_58841__$1 = state_58841;
var statearr_58877_60757 = state_58841__$1;
(statearr_58877_60757[(2)] = null);

(statearr_58877_60757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58842 === (2))){
var state_58841__$1 = state_58841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58841__$1,(4),ch);
} else {
if((state_val_58842 === (11))){
var inst_58818 = (state_58841[(7)]);
var inst_58828 = (state_58841[(2)]);
var state_58841__$1 = state_58841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58841__$1,(8),inst_58828,inst_58818);
} else {
if((state_val_58842 === (9))){
var state_58841__$1 = state_58841;
var statearr_58878_60758 = state_58841__$1;
(statearr_58878_60758[(2)] = tc);

(statearr_58878_60758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58842 === (5))){
var inst_58821 = cljs.core.async.close_BANG_(tc);
var inst_58822 = cljs.core.async.close_BANG_(fc);
var state_58841__$1 = (function (){var statearr_58879 = state_58841;
(statearr_58879[(8)] = inst_58821);

return statearr_58879;
})();
var statearr_58880_60759 = state_58841__$1;
(statearr_58880_60759[(2)] = inst_58822);

(statearr_58880_60759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58842 === (14))){
var inst_58835 = (state_58841[(2)]);
var state_58841__$1 = state_58841;
var statearr_58881_60764 = state_58841__$1;
(statearr_58881_60764[(2)] = inst_58835);

(statearr_58881_60764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58842 === (10))){
var state_58841__$1 = state_58841;
var statearr_58886_60768 = state_58841__$1;
(statearr_58886_60768[(2)] = fc);

(statearr_58886_60768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58842 === (8))){
var inst_58830 = (state_58841[(2)]);
var state_58841__$1 = state_58841;
if(cljs.core.truth_(inst_58830)){
var statearr_58893_60769 = state_58841__$1;
(statearr_58893_60769[(1)] = (12));

} else {
var statearr_58896_60770 = state_58841__$1;
(statearr_58896_60770[(1)] = (13));

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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_58906 = [null,null,null,null,null,null,null,null,null];
(statearr_58906[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_58906[(1)] = (1));

return statearr_58906;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_58841){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_58841);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e58907){var ex__48473__auto__ = e58907;
var statearr_58908_60774 = state_58841;
(statearr_58908_60774[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_58841[(4)]))){
var statearr_58909_60775 = state_58841;
(statearr_58909_60775[(1)] = cljs.core.first((state_58841[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60776 = state_58841;
state_58841 = G__60776;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_58841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_58841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_58921 = f__48599__auto__();
(statearr_58921[(6)] = c__48598__auto___60749);

return statearr_58921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
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
var c__48598__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_58974){
var state_val_58975 = (state_58974[(1)]);
if((state_val_58975 === (7))){
var inst_58970 = (state_58974[(2)]);
var state_58974__$1 = state_58974;
var statearr_58976_60784 = state_58974__$1;
(statearr_58976_60784[(2)] = inst_58970);

(statearr_58976_60784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (1))){
var inst_58937 = init;
var inst_58942 = inst_58937;
var state_58974__$1 = (function (){var statearr_58977 = state_58974;
(statearr_58977[(7)] = inst_58942);

return statearr_58977;
})();
var statearr_58978_60786 = state_58974__$1;
(statearr_58978_60786[(2)] = null);

(statearr_58978_60786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (4))){
var inst_58946 = (state_58974[(8)]);
var inst_58946__$1 = (state_58974[(2)]);
var inst_58953 = (inst_58946__$1 == null);
var state_58974__$1 = (function (){var statearr_58980 = state_58974;
(statearr_58980[(8)] = inst_58946__$1);

return statearr_58980;
})();
if(cljs.core.truth_(inst_58953)){
var statearr_58981_60790 = state_58974__$1;
(statearr_58981_60790[(1)] = (5));

} else {
var statearr_58982_60791 = state_58974__$1;
(statearr_58982_60791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (6))){
var inst_58942 = (state_58974[(7)]);
var inst_58957 = (state_58974[(9)]);
var inst_58946 = (state_58974[(8)]);
var inst_58957__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_58942,inst_58946) : f.call(null,inst_58942,inst_58946));
var inst_58958 = cljs.core.reduced_QMARK_(inst_58957__$1);
var state_58974__$1 = (function (){var statearr_58983 = state_58974;
(statearr_58983[(9)] = inst_58957__$1);

return statearr_58983;
})();
if(inst_58958){
var statearr_58984_60794 = state_58974__$1;
(statearr_58984_60794[(1)] = (8));

} else {
var statearr_58985_60795 = state_58974__$1;
(statearr_58985_60795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (3))){
var inst_58972 = (state_58974[(2)]);
var state_58974__$1 = state_58974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58974__$1,inst_58972);
} else {
if((state_val_58975 === (2))){
var state_58974__$1 = state_58974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58974__$1,(4),ch);
} else {
if((state_val_58975 === (9))){
var inst_58957 = (state_58974[(9)]);
var inst_58942 = inst_58957;
var state_58974__$1 = (function (){var statearr_58986 = state_58974;
(statearr_58986[(7)] = inst_58942);

return statearr_58986;
})();
var statearr_58991_60803 = state_58974__$1;
(statearr_58991_60803[(2)] = null);

(statearr_58991_60803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (5))){
var inst_58942 = (state_58974[(7)]);
var state_58974__$1 = state_58974;
var statearr_58996_60804 = state_58974__$1;
(statearr_58996_60804[(2)] = inst_58942);

(statearr_58996_60804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (10))){
var inst_58968 = (state_58974[(2)]);
var state_58974__$1 = state_58974;
var statearr_58997_60805 = state_58974__$1;
(statearr_58997_60805[(2)] = inst_58968);

(statearr_58997_60805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58975 === (8))){
var inst_58957 = (state_58974[(9)]);
var inst_58964 = cljs.core.deref(inst_58957);
var state_58974__$1 = state_58974;
var statearr_59002_60806 = state_58974__$1;
(statearr_59002_60806[(2)] = inst_58964);

(statearr_59002_60806[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__48470__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48470__auto____0 = (function (){
var statearr_59004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59004[(0)] = cljs$core$async$reduce_$_state_machine__48470__auto__);

(statearr_59004[(1)] = (1));

return statearr_59004;
});
var cljs$core$async$reduce_$_state_machine__48470__auto____1 = (function (state_58974){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_58974);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e59005){var ex__48473__auto__ = e59005;
var statearr_59006_60812 = state_58974;
(statearr_59006_60812[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_58974[(4)]))){
var statearr_59007_60813 = state_58974;
(statearr_59007_60813[(1)] = cljs.core.first((state_58974[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60814 = state_58974;
state_58974 = G__60814;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48470__auto__ = function(state_58974){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48470__auto____1.call(this,state_58974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48470__auto____0;
cljs$core$async$reduce_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48470__auto____1;
return cljs$core$async$reduce_$_state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_59008 = f__48599__auto__();
(statearr_59008[(6)] = c__48598__auto__);

return statearr_59008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));

return c__48598__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__48598__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_59014){
var state_val_59015 = (state_59014[(1)]);
if((state_val_59015 === (1))){
var inst_59009 = cljs.core.async.reduce(f__$1,init,ch);
var state_59014__$1 = state_59014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59014__$1,(2),inst_59009);
} else {
if((state_val_59015 === (2))){
var inst_59011 = (state_59014[(2)]);
var inst_59012 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_59011) : f__$1.call(null,inst_59011));
var state_59014__$1 = state_59014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59014__$1,inst_59012);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48470__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48470__auto____0 = (function (){
var statearr_59016 = [null,null,null,null,null,null,null];
(statearr_59016[(0)] = cljs$core$async$transduce_$_state_machine__48470__auto__);

(statearr_59016[(1)] = (1));

return statearr_59016;
});
var cljs$core$async$transduce_$_state_machine__48470__auto____1 = (function (state_59014){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_59014);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e59017){var ex__48473__auto__ = e59017;
var statearr_59018_60824 = state_59014;
(statearr_59018_60824[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_59014[(4)]))){
var statearr_59019_60825 = state_59014;
(statearr_59019_60825[(1)] = cljs.core.first((state_59014[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60826 = state_59014;
state_59014 = G__60826;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48470__auto__ = function(state_59014){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48470__auto____1.call(this,state_59014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48470__auto____0;
cljs$core$async$transduce_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48470__auto____1;
return cljs$core$async$transduce_$_state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_59020 = f__48599__auto__();
(statearr_59020[(6)] = c__48598__auto__);

return statearr_59020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));

return c__48598__auto__;
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
var G__59022 = arguments.length;
switch (G__59022) {
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
var c__48598__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_59047){
var state_val_59048 = (state_59047[(1)]);
if((state_val_59048 === (7))){
var inst_59029 = (state_59047[(2)]);
var state_59047__$1 = state_59047;
var statearr_59049_60829 = state_59047__$1;
(statearr_59049_60829[(2)] = inst_59029);

(statearr_59049_60829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (1))){
var inst_59023 = cljs.core.seq(coll);
var inst_59024 = inst_59023;
var state_59047__$1 = (function (){var statearr_59050 = state_59047;
(statearr_59050[(7)] = inst_59024);

return statearr_59050;
})();
var statearr_59051_60830 = state_59047__$1;
(statearr_59051_60830[(2)] = null);

(statearr_59051_60830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (4))){
var inst_59024 = (state_59047[(7)]);
var inst_59027 = cljs.core.first(inst_59024);
var state_59047__$1 = state_59047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59047__$1,(7),ch,inst_59027);
} else {
if((state_val_59048 === (13))){
var inst_59041 = (state_59047[(2)]);
var state_59047__$1 = state_59047;
var statearr_59052_60831 = state_59047__$1;
(statearr_59052_60831[(2)] = inst_59041);

(statearr_59052_60831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (6))){
var inst_59032 = (state_59047[(2)]);
var state_59047__$1 = state_59047;
if(cljs.core.truth_(inst_59032)){
var statearr_59053_60832 = state_59047__$1;
(statearr_59053_60832[(1)] = (8));

} else {
var statearr_59054_60833 = state_59047__$1;
(statearr_59054_60833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (3))){
var inst_59045 = (state_59047[(2)]);
var state_59047__$1 = state_59047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59047__$1,inst_59045);
} else {
if((state_val_59048 === (12))){
var state_59047__$1 = state_59047;
var statearr_59055_60834 = state_59047__$1;
(statearr_59055_60834[(2)] = null);

(statearr_59055_60834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (2))){
var inst_59024 = (state_59047[(7)]);
var state_59047__$1 = state_59047;
if(cljs.core.truth_(inst_59024)){
var statearr_59056_60835 = state_59047__$1;
(statearr_59056_60835[(1)] = (4));

} else {
var statearr_59057_60836 = state_59047__$1;
(statearr_59057_60836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (11))){
var inst_59038 = cljs.core.async.close_BANG_(ch);
var state_59047__$1 = state_59047;
var statearr_59058_60837 = state_59047__$1;
(statearr_59058_60837[(2)] = inst_59038);

(statearr_59058_60837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (9))){
var state_59047__$1 = state_59047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59059_60842 = state_59047__$1;
(statearr_59059_60842[(1)] = (11));

} else {
var statearr_59060_60843 = state_59047__$1;
(statearr_59060_60843[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (5))){
var inst_59024 = (state_59047[(7)]);
var state_59047__$1 = state_59047;
var statearr_59061_60844 = state_59047__$1;
(statearr_59061_60844[(2)] = inst_59024);

(statearr_59061_60844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (10))){
var inst_59043 = (state_59047[(2)]);
var state_59047__$1 = state_59047;
var statearr_59062_60845 = state_59047__$1;
(statearr_59062_60845[(2)] = inst_59043);

(statearr_59062_60845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (8))){
var inst_59024 = (state_59047[(7)]);
var inst_59034 = cljs.core.next(inst_59024);
var inst_59024__$1 = inst_59034;
var state_59047__$1 = (function (){var statearr_59063 = state_59047;
(statearr_59063[(7)] = inst_59024__$1);

return statearr_59063;
})();
var statearr_59064_60846 = state_59047__$1;
(statearr_59064_60846[(2)] = null);

(statearr_59064_60846[(1)] = (2));


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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_59065 = [null,null,null,null,null,null,null,null];
(statearr_59065[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_59065[(1)] = (1));

return statearr_59065;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_59047){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_59047);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e59066){var ex__48473__auto__ = e59066;
var statearr_59067_60847 = state_59047;
(statearr_59067_60847[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_59047[(4)]))){
var statearr_59068_60849 = state_59047;
(statearr_59068_60849[(1)] = cljs.core.first((state_59047[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60853 = state_59047;
state_59047 = G__60853;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_59047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_59047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_59069 = f__48599__auto__();
(statearr_59069[(6)] = c__48598__auto__);

return statearr_59069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));

return c__48598__auto__;
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
var G__59073 = arguments.length;
switch (G__59073) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_60855 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_60855(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_60856 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_60856(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_60858 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_60858(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_60863 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_60863(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59080 = (function (ch,cs,meta59081){
this.ch = ch;
this.cs = cs;
this.meta59081 = meta59081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59082,meta59081__$1){
var self__ = this;
var _59082__$1 = this;
return (new cljs.core.async.t_cljs$core$async59080(self__.ch,self__.cs,meta59081__$1));
}));

(cljs.core.async.t_cljs$core$async59080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59082){
var self__ = this;
var _59082__$1 = this;
return self__.meta59081;
}));

(cljs.core.async.t_cljs$core$async59080.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59080.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59080.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async59080.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async59080.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async59080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59081","meta59081",1012033069,null)], null);
}));

(cljs.core.async.t_cljs$core$async59080.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59080");

(cljs.core.async.t_cljs$core$async59080.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59080");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59080.
 */
cljs.core.async.__GT_t_cljs$core$async59080 = (function cljs$core$async$mult_$___GT_t_cljs$core$async59080(ch__$1,cs__$1,meta59081){
return (new cljs.core.async.t_cljs$core$async59080(ch__$1,cs__$1,meta59081));
});

}

return (new cljs.core.async.t_cljs$core$async59080(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__48598__auto___60872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_59217){
var state_val_59218 = (state_59217[(1)]);
if((state_val_59218 === (7))){
var inst_59211 = (state_59217[(2)]);
var state_59217__$1 = state_59217;
var statearr_59219_60873 = state_59217__$1;
(statearr_59219_60873[(2)] = inst_59211);

(statearr_59219_60873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (20))){
var inst_59116 = (state_59217[(7)]);
var inst_59128 = cljs.core.first(inst_59116);
var inst_59129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59128,(0),null);
var inst_59130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59128,(1),null);
var state_59217__$1 = (function (){var statearr_59220 = state_59217;
(statearr_59220[(8)] = inst_59129);

return statearr_59220;
})();
if(cljs.core.truth_(inst_59130)){
var statearr_59221_60874 = state_59217__$1;
(statearr_59221_60874[(1)] = (22));

} else {
var statearr_59222_60876 = state_59217__$1;
(statearr_59222_60876[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (27))){
var inst_59158 = (state_59217[(9)]);
var inst_59165 = (state_59217[(10)]);
var inst_59085 = (state_59217[(11)]);
var inst_59160 = (state_59217[(12)]);
var inst_59165__$1 = cljs.core._nth(inst_59158,inst_59160);
var inst_59166 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59165__$1,inst_59085,done);
var state_59217__$1 = (function (){var statearr_59223 = state_59217;
(statearr_59223[(10)] = inst_59165__$1);

return statearr_59223;
})();
if(cljs.core.truth_(inst_59166)){
var statearr_59224_60880 = state_59217__$1;
(statearr_59224_60880[(1)] = (30));

} else {
var statearr_59225_60881 = state_59217__$1;
(statearr_59225_60881[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (1))){
var state_59217__$1 = state_59217;
var statearr_59226_60882 = state_59217__$1;
(statearr_59226_60882[(2)] = null);

(statearr_59226_60882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (24))){
var inst_59116 = (state_59217[(7)]);
var inst_59135 = (state_59217[(2)]);
var inst_59136 = cljs.core.next(inst_59116);
var inst_59094 = inst_59136;
var inst_59095 = null;
var inst_59096 = (0);
var inst_59097 = (0);
var state_59217__$1 = (function (){var statearr_59227 = state_59217;
(statearr_59227[(13)] = inst_59097);

(statearr_59227[(14)] = inst_59094);

(statearr_59227[(15)] = inst_59096);

(statearr_59227[(16)] = inst_59135);

(statearr_59227[(17)] = inst_59095);

return statearr_59227;
})();
var statearr_59228_60887 = state_59217__$1;
(statearr_59228_60887[(2)] = null);

(statearr_59228_60887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (39))){
var state_59217__$1 = state_59217;
var statearr_59232_60888 = state_59217__$1;
(statearr_59232_60888[(2)] = null);

(statearr_59232_60888[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (4))){
var inst_59085 = (state_59217[(11)]);
var inst_59085__$1 = (state_59217[(2)]);
var inst_59086 = (inst_59085__$1 == null);
var state_59217__$1 = (function (){var statearr_59233 = state_59217;
(statearr_59233[(11)] = inst_59085__$1);

return statearr_59233;
})();
if(cljs.core.truth_(inst_59086)){
var statearr_59234_60889 = state_59217__$1;
(statearr_59234_60889[(1)] = (5));

} else {
var statearr_59235_60890 = state_59217__$1;
(statearr_59235_60890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (15))){
var inst_59097 = (state_59217[(13)]);
var inst_59094 = (state_59217[(14)]);
var inst_59096 = (state_59217[(15)]);
var inst_59095 = (state_59217[(17)]);
var inst_59112 = (state_59217[(2)]);
var inst_59113 = (inst_59097 + (1));
var tmp59229 = inst_59094;
var tmp59230 = inst_59096;
var tmp59231 = inst_59095;
var inst_59094__$1 = tmp59229;
var inst_59095__$1 = tmp59231;
var inst_59096__$1 = tmp59230;
var inst_59097__$1 = inst_59113;
var state_59217__$1 = (function (){var statearr_59236 = state_59217;
(statearr_59236[(13)] = inst_59097__$1);

(statearr_59236[(14)] = inst_59094__$1);

(statearr_59236[(15)] = inst_59096__$1);

(statearr_59236[(17)] = inst_59095__$1);

(statearr_59236[(18)] = inst_59112);

return statearr_59236;
})();
var statearr_59237_60898 = state_59217__$1;
(statearr_59237_60898[(2)] = null);

(statearr_59237_60898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (21))){
var inst_59139 = (state_59217[(2)]);
var state_59217__$1 = state_59217;
var statearr_59242_60899 = state_59217__$1;
(statearr_59242_60899[(2)] = inst_59139);

(statearr_59242_60899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (31))){
var inst_59165 = (state_59217[(10)]);
var inst_59169 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59165);
var state_59217__$1 = state_59217;
var statearr_59243_60906 = state_59217__$1;
(statearr_59243_60906[(2)] = inst_59169);

(statearr_59243_60906[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (32))){
var inst_59158 = (state_59217[(9)]);
var inst_59159 = (state_59217[(19)]);
var inst_59157 = (state_59217[(20)]);
var inst_59160 = (state_59217[(12)]);
var inst_59171 = (state_59217[(2)]);
var inst_59172 = (inst_59160 + (1));
var tmp59238 = inst_59158;
var tmp59239 = inst_59159;
var tmp59240 = inst_59157;
var inst_59157__$1 = tmp59240;
var inst_59158__$1 = tmp59238;
var inst_59159__$1 = tmp59239;
var inst_59160__$1 = inst_59172;
var state_59217__$1 = (function (){var statearr_59244 = state_59217;
(statearr_59244[(9)] = inst_59158__$1);

(statearr_59244[(19)] = inst_59159__$1);

(statearr_59244[(20)] = inst_59157__$1);

(statearr_59244[(12)] = inst_59160__$1);

(statearr_59244[(21)] = inst_59171);

return statearr_59244;
})();
var statearr_59245_60907 = state_59217__$1;
(statearr_59245_60907[(2)] = null);

(statearr_59245_60907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (40))){
var inst_59184 = (state_59217[(22)]);
var inst_59188 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59184);
var state_59217__$1 = state_59217;
var statearr_59246_60908 = state_59217__$1;
(statearr_59246_60908[(2)] = inst_59188);

(statearr_59246_60908[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (33))){
var inst_59175 = (state_59217[(23)]);
var inst_59177 = cljs.core.chunked_seq_QMARK_(inst_59175);
var state_59217__$1 = state_59217;
if(inst_59177){
var statearr_59247_60909 = state_59217__$1;
(statearr_59247_60909[(1)] = (36));

} else {
var statearr_59248_60910 = state_59217__$1;
(statearr_59248_60910[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (13))){
var inst_59106 = (state_59217[(24)]);
var inst_59109 = cljs.core.async.close_BANG_(inst_59106);
var state_59217__$1 = state_59217;
var statearr_59249_60911 = state_59217__$1;
(statearr_59249_60911[(2)] = inst_59109);

(statearr_59249_60911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (22))){
var inst_59129 = (state_59217[(8)]);
var inst_59132 = cljs.core.async.close_BANG_(inst_59129);
var state_59217__$1 = state_59217;
var statearr_59250_60912 = state_59217__$1;
(statearr_59250_60912[(2)] = inst_59132);

(statearr_59250_60912[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (36))){
var inst_59175 = (state_59217[(23)]);
var inst_59179 = cljs.core.chunk_first(inst_59175);
var inst_59180 = cljs.core.chunk_rest(inst_59175);
var inst_59181 = cljs.core.count(inst_59179);
var inst_59157 = inst_59180;
var inst_59158 = inst_59179;
var inst_59159 = inst_59181;
var inst_59160 = (0);
var state_59217__$1 = (function (){var statearr_59251 = state_59217;
(statearr_59251[(9)] = inst_59158);

(statearr_59251[(19)] = inst_59159);

(statearr_59251[(20)] = inst_59157);

(statearr_59251[(12)] = inst_59160);

return statearr_59251;
})();
var statearr_59252_60913 = state_59217__$1;
(statearr_59252_60913[(2)] = null);

(statearr_59252_60913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (41))){
var inst_59175 = (state_59217[(23)]);
var inst_59190 = (state_59217[(2)]);
var inst_59191 = cljs.core.next(inst_59175);
var inst_59157 = inst_59191;
var inst_59158 = null;
var inst_59159 = (0);
var inst_59160 = (0);
var state_59217__$1 = (function (){var statearr_59253 = state_59217;
(statearr_59253[(9)] = inst_59158);

(statearr_59253[(19)] = inst_59159);

(statearr_59253[(25)] = inst_59190);

(statearr_59253[(20)] = inst_59157);

(statearr_59253[(12)] = inst_59160);

return statearr_59253;
})();
var statearr_59254_60914 = state_59217__$1;
(statearr_59254_60914[(2)] = null);

(statearr_59254_60914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (43))){
var state_59217__$1 = state_59217;
var statearr_59255_60915 = state_59217__$1;
(statearr_59255_60915[(2)] = null);

(statearr_59255_60915[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (29))){
var inst_59199 = (state_59217[(2)]);
var state_59217__$1 = state_59217;
var statearr_59256_60916 = state_59217__$1;
(statearr_59256_60916[(2)] = inst_59199);

(statearr_59256_60916[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (44))){
var inst_59208 = (state_59217[(2)]);
var state_59217__$1 = (function (){var statearr_59257 = state_59217;
(statearr_59257[(26)] = inst_59208);

return statearr_59257;
})();
var statearr_59258_60923 = state_59217__$1;
(statearr_59258_60923[(2)] = null);

(statearr_59258_60923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (6))){
var inst_59149 = (state_59217[(27)]);
var inst_59148 = cljs.core.deref(cs);
var inst_59149__$1 = cljs.core.keys(inst_59148);
var inst_59150 = cljs.core.count(inst_59149__$1);
var inst_59151 = cljs.core.reset_BANG_(dctr,inst_59150);
var inst_59156 = cljs.core.seq(inst_59149__$1);
var inst_59157 = inst_59156;
var inst_59158 = null;
var inst_59159 = (0);
var inst_59160 = (0);
var state_59217__$1 = (function (){var statearr_59259 = state_59217;
(statearr_59259[(9)] = inst_59158);

(statearr_59259[(28)] = inst_59151);

(statearr_59259[(19)] = inst_59159);

(statearr_59259[(20)] = inst_59157);

(statearr_59259[(27)] = inst_59149__$1);

(statearr_59259[(12)] = inst_59160);

return statearr_59259;
})();
var statearr_59260_60924 = state_59217__$1;
(statearr_59260_60924[(2)] = null);

(statearr_59260_60924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (28))){
var inst_59175 = (state_59217[(23)]);
var inst_59157 = (state_59217[(20)]);
var inst_59175__$1 = cljs.core.seq(inst_59157);
var state_59217__$1 = (function (){var statearr_59261 = state_59217;
(statearr_59261[(23)] = inst_59175__$1);

return statearr_59261;
})();
if(inst_59175__$1){
var statearr_59262_60925 = state_59217__$1;
(statearr_59262_60925[(1)] = (33));

} else {
var statearr_59263_60926 = state_59217__$1;
(statearr_59263_60926[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (25))){
var inst_59159 = (state_59217[(19)]);
var inst_59160 = (state_59217[(12)]);
var inst_59162 = (inst_59160 < inst_59159);
var inst_59163 = inst_59162;
var state_59217__$1 = state_59217;
if(cljs.core.truth_(inst_59163)){
var statearr_59264_60927 = state_59217__$1;
(statearr_59264_60927[(1)] = (27));

} else {
var statearr_59265_60928 = state_59217__$1;
(statearr_59265_60928[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (34))){
var state_59217__$1 = state_59217;
var statearr_59266_60929 = state_59217__$1;
(statearr_59266_60929[(2)] = null);

(statearr_59266_60929[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (17))){
var state_59217__$1 = state_59217;
var statearr_59268_60930 = state_59217__$1;
(statearr_59268_60930[(2)] = null);

(statearr_59268_60930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (3))){
var inst_59213 = (state_59217[(2)]);
var state_59217__$1 = state_59217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59217__$1,inst_59213);
} else {
if((state_val_59218 === (12))){
var inst_59144 = (state_59217[(2)]);
var state_59217__$1 = state_59217;
var statearr_59269_60931 = state_59217__$1;
(statearr_59269_60931[(2)] = inst_59144);

(statearr_59269_60931[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (2))){
var state_59217__$1 = state_59217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59217__$1,(4),ch);
} else {
if((state_val_59218 === (23))){
var state_59217__$1 = state_59217;
var statearr_59270_60932 = state_59217__$1;
(statearr_59270_60932[(2)] = null);

(statearr_59270_60932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (35))){
var inst_59197 = (state_59217[(2)]);
var state_59217__$1 = state_59217;
var statearr_59271_60933 = state_59217__$1;
(statearr_59271_60933[(2)] = inst_59197);

(statearr_59271_60933[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (19))){
var inst_59116 = (state_59217[(7)]);
var inst_59120 = cljs.core.chunk_first(inst_59116);
var inst_59121 = cljs.core.chunk_rest(inst_59116);
var inst_59122 = cljs.core.count(inst_59120);
var inst_59094 = inst_59121;
var inst_59095 = inst_59120;
var inst_59096 = inst_59122;
var inst_59097 = (0);
var state_59217__$1 = (function (){var statearr_59272 = state_59217;
(statearr_59272[(13)] = inst_59097);

(statearr_59272[(14)] = inst_59094);

(statearr_59272[(15)] = inst_59096);

(statearr_59272[(17)] = inst_59095);

return statearr_59272;
})();
var statearr_59273_60940 = state_59217__$1;
(statearr_59273_60940[(2)] = null);

(statearr_59273_60940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (11))){
var inst_59094 = (state_59217[(14)]);
var inst_59116 = (state_59217[(7)]);
var inst_59116__$1 = cljs.core.seq(inst_59094);
var state_59217__$1 = (function (){var statearr_59274 = state_59217;
(statearr_59274[(7)] = inst_59116__$1);

return statearr_59274;
})();
if(inst_59116__$1){
var statearr_59275_60941 = state_59217__$1;
(statearr_59275_60941[(1)] = (16));

} else {
var statearr_59276_60942 = state_59217__$1;
(statearr_59276_60942[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (9))){
var inst_59146 = (state_59217[(2)]);
var state_59217__$1 = state_59217;
var statearr_59277_60943 = state_59217__$1;
(statearr_59277_60943[(2)] = inst_59146);

(statearr_59277_60943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (5))){
var inst_59092 = cljs.core.deref(cs);
var inst_59093 = cljs.core.seq(inst_59092);
var inst_59094 = inst_59093;
var inst_59095 = null;
var inst_59096 = (0);
var inst_59097 = (0);
var state_59217__$1 = (function (){var statearr_59278 = state_59217;
(statearr_59278[(13)] = inst_59097);

(statearr_59278[(14)] = inst_59094);

(statearr_59278[(15)] = inst_59096);

(statearr_59278[(17)] = inst_59095);

return statearr_59278;
})();
var statearr_59279_60944 = state_59217__$1;
(statearr_59279_60944[(2)] = null);

(statearr_59279_60944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (14))){
var state_59217__$1 = state_59217;
var statearr_59280_60945 = state_59217__$1;
(statearr_59280_60945[(2)] = null);

(statearr_59280_60945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (45))){
var inst_59205 = (state_59217[(2)]);
var state_59217__$1 = state_59217;
var statearr_59281_60946 = state_59217__$1;
(statearr_59281_60946[(2)] = inst_59205);

(statearr_59281_60946[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (26))){
var inst_59149 = (state_59217[(27)]);
var inst_59201 = (state_59217[(2)]);
var inst_59202 = cljs.core.seq(inst_59149);
var state_59217__$1 = (function (){var statearr_59282 = state_59217;
(statearr_59282[(29)] = inst_59201);

return statearr_59282;
})();
if(inst_59202){
var statearr_59283_60948 = state_59217__$1;
(statearr_59283_60948[(1)] = (42));

} else {
var statearr_59284_60949 = state_59217__$1;
(statearr_59284_60949[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (16))){
var inst_59116 = (state_59217[(7)]);
var inst_59118 = cljs.core.chunked_seq_QMARK_(inst_59116);
var state_59217__$1 = state_59217;
if(inst_59118){
var statearr_59285_60950 = state_59217__$1;
(statearr_59285_60950[(1)] = (19));

} else {
var statearr_59286_60951 = state_59217__$1;
(statearr_59286_60951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (38))){
var inst_59194 = (state_59217[(2)]);
var state_59217__$1 = state_59217;
var statearr_59287_60952 = state_59217__$1;
(statearr_59287_60952[(2)] = inst_59194);

(statearr_59287_60952[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (30))){
var state_59217__$1 = state_59217;
var statearr_59288_60953 = state_59217__$1;
(statearr_59288_60953[(2)] = null);

(statearr_59288_60953[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (10))){
var inst_59097 = (state_59217[(13)]);
var inst_59095 = (state_59217[(17)]);
var inst_59105 = cljs.core._nth(inst_59095,inst_59097);
var inst_59106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59105,(0),null);
var inst_59107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59105,(1),null);
var state_59217__$1 = (function (){var statearr_59289 = state_59217;
(statearr_59289[(24)] = inst_59106);

return statearr_59289;
})();
if(cljs.core.truth_(inst_59107)){
var statearr_59290_60960 = state_59217__$1;
(statearr_59290_60960[(1)] = (13));

} else {
var statearr_59291_60961 = state_59217__$1;
(statearr_59291_60961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (18))){
var inst_59142 = (state_59217[(2)]);
var state_59217__$1 = state_59217;
var statearr_59292_60962 = state_59217__$1;
(statearr_59292_60962[(2)] = inst_59142);

(statearr_59292_60962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (42))){
var state_59217__$1 = state_59217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59217__$1,(45),dchan);
} else {
if((state_val_59218 === (37))){
var inst_59175 = (state_59217[(23)]);
var inst_59085 = (state_59217[(11)]);
var inst_59184 = (state_59217[(22)]);
var inst_59184__$1 = cljs.core.first(inst_59175);
var inst_59185 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59184__$1,inst_59085,done);
var state_59217__$1 = (function (){var statearr_59293 = state_59217;
(statearr_59293[(22)] = inst_59184__$1);

return statearr_59293;
})();
if(cljs.core.truth_(inst_59185)){
var statearr_59294_60963 = state_59217__$1;
(statearr_59294_60963[(1)] = (39));

} else {
var statearr_59295_60964 = state_59217__$1;
(statearr_59295_60964[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59218 === (8))){
var inst_59097 = (state_59217[(13)]);
var inst_59096 = (state_59217[(15)]);
var inst_59099 = (inst_59097 < inst_59096);
var inst_59100 = inst_59099;
var state_59217__$1 = state_59217;
if(cljs.core.truth_(inst_59100)){
var statearr_59296_60968 = state_59217__$1;
(statearr_59296_60968[(1)] = (10));

} else {
var statearr_59297_60969 = state_59217__$1;
(statearr_59297_60969[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__48470__auto__ = null;
var cljs$core$async$mult_$_state_machine__48470__auto____0 = (function (){
var statearr_59298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59298[(0)] = cljs$core$async$mult_$_state_machine__48470__auto__);

(statearr_59298[(1)] = (1));

return statearr_59298;
});
var cljs$core$async$mult_$_state_machine__48470__auto____1 = (function (state_59217){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_59217);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e59299){var ex__48473__auto__ = e59299;
var statearr_59300_60970 = state_59217;
(statearr_59300_60970[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_59217[(4)]))){
var statearr_59301_60971 = state_59217;
(statearr_59301_60971[(1)] = cljs.core.first((state_59217[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60972 = state_59217;
state_59217 = G__60972;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48470__auto__ = function(state_59217){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48470__auto____1.call(this,state_59217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48470__auto____0;
cljs$core$async$mult_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48470__auto____1;
return cljs$core$async$mult_$_state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_59302 = f__48599__auto__();
(statearr_59302[(6)] = c__48598__auto___60872);

return statearr_59302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
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
var G__59304 = arguments.length;
switch (G__59304) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_60975 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_60975(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_60979 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_60979(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_60980 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_60980(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_60981 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_60981(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_60982 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_60982(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60988 = arguments.length;
var i__4865__auto___60989 = (0);
while(true){
if((i__4865__auto___60989 < len__4864__auto___60988)){
args__4870__auto__.push((arguments[i__4865__auto___60989]));

var G__60990 = (i__4865__auto___60989 + (1));
i__4865__auto___60989 = G__60990;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59309){
var map__59310 = p__59309;
var map__59310__$1 = cljs.core.__destructure_map(map__59310);
var opts = map__59310__$1;
var statearr_59311_60991 = state;
(statearr_59311_60991[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_59312_60992 = state;
(statearr_59312_60992[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_59315_60993 = state;
(statearr_59315_60993[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq59305){
var G__59306 = cljs.core.first(seq59305);
var seq59305__$1 = cljs.core.next(seq59305);
var G__59307 = cljs.core.first(seq59305__$1);
var seq59305__$2 = cljs.core.next(seq59305__$1);
var G__59308 = cljs.core.first(seq59305__$2);
var seq59305__$3 = cljs.core.next(seq59305__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59306,G__59307,G__59308,seq59305__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59335 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta59336){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta59336 = meta59336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59337,meta59336__$1){
var self__ = this;
var _59337__$1 = this;
return (new cljs.core.async.t_cljs$core$async59335(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta59336__$1));
}));

(cljs.core.async.t_cljs$core$async59335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59337){
var self__ = this;
var _59337__$1 = this;
return self__.meta59336;
}));

(cljs.core.async.t_cljs$core$async59335.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async59335.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59335.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59335.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59335.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59335.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59335.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta59336","meta59336",1516813237,null)], null);
}));

(cljs.core.async.t_cljs$core$async59335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59335");

(cljs.core.async.t_cljs$core$async59335.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59335.
 */
cljs.core.async.__GT_t_cljs$core$async59335 = (function cljs$core$async$mix_$___GT_t_cljs$core$async59335(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59336){
return (new cljs.core.async.t_cljs$core$async59335(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59336));
});

}

return (new cljs.core.async.t_cljs$core$async59335(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48598__auto___61038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_59418){
var state_val_59419 = (state_59418[(1)]);
if((state_val_59419 === (7))){
var inst_59376 = (state_59418[(2)]);
var state_59418__$1 = state_59418;
if(cljs.core.truth_(inst_59376)){
var statearr_59425_61039 = state_59418__$1;
(statearr_59425_61039[(1)] = (8));

} else {
var statearr_59427_61040 = state_59418__$1;
(statearr_59427_61040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (20))){
var inst_59369 = (state_59418[(7)]);
var state_59418__$1 = state_59418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59418__$1,(23),out,inst_59369);
} else {
if((state_val_59419 === (1))){
var inst_59350 = calc_state();
var inst_59351 = cljs.core.__destructure_map(inst_59350);
var inst_59352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59351,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59351,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59351,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59355 = inst_59350;
var state_59418__$1 = (function (){var statearr_59430 = state_59418;
(statearr_59430[(8)] = inst_59352);

(statearr_59430[(9)] = inst_59355);

(statearr_59430[(10)] = inst_59354);

(statearr_59430[(11)] = inst_59353);

return statearr_59430;
})();
var statearr_59432_61043 = state_59418__$1;
(statearr_59432_61043[(2)] = null);

(statearr_59432_61043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (24))){
var inst_59359 = (state_59418[(12)]);
var inst_59355 = inst_59359;
var state_59418__$1 = (function (){var statearr_59438 = state_59418;
(statearr_59438[(9)] = inst_59355);

return statearr_59438;
})();
var statearr_59439_61044 = state_59418__$1;
(statearr_59439_61044[(2)] = null);

(statearr_59439_61044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (4))){
var inst_59369 = (state_59418[(7)]);
var inst_59371 = (state_59418[(13)]);
var inst_59368 = (state_59418[(2)]);
var inst_59369__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59368,(0),null);
var inst_59370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59368,(1),null);
var inst_59371__$1 = (inst_59369__$1 == null);
var state_59418__$1 = (function (){var statearr_59440 = state_59418;
(statearr_59440[(7)] = inst_59369__$1);

(statearr_59440[(14)] = inst_59370);

(statearr_59440[(13)] = inst_59371__$1);

return statearr_59440;
})();
if(cljs.core.truth_(inst_59371__$1)){
var statearr_59441_61048 = state_59418__$1;
(statearr_59441_61048[(1)] = (5));

} else {
var statearr_59442_61049 = state_59418__$1;
(statearr_59442_61049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (15))){
var inst_59361 = (state_59418[(15)]);
var inst_59391 = (state_59418[(16)]);
var inst_59391__$1 = cljs.core.empty_QMARK_(inst_59361);
var state_59418__$1 = (function (){var statearr_59443 = state_59418;
(statearr_59443[(16)] = inst_59391__$1);

return statearr_59443;
})();
if(inst_59391__$1){
var statearr_59444_61050 = state_59418__$1;
(statearr_59444_61050[(1)] = (17));

} else {
var statearr_59445_61051 = state_59418__$1;
(statearr_59445_61051[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (21))){
var inst_59359 = (state_59418[(12)]);
var inst_59355 = inst_59359;
var state_59418__$1 = (function (){var statearr_59448 = state_59418;
(statearr_59448[(9)] = inst_59355);

return statearr_59448;
})();
var statearr_59450_61052 = state_59418__$1;
(statearr_59450_61052[(2)] = null);

(statearr_59450_61052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (13))){
var inst_59383 = (state_59418[(2)]);
var inst_59384 = calc_state();
var inst_59355 = inst_59384;
var state_59418__$1 = (function (){var statearr_59451 = state_59418;
(statearr_59451[(9)] = inst_59355);

(statearr_59451[(17)] = inst_59383);

return statearr_59451;
})();
var statearr_59452_61053 = state_59418__$1;
(statearr_59452_61053[(2)] = null);

(statearr_59452_61053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (22))){
var inst_59411 = (state_59418[(2)]);
var state_59418__$1 = state_59418;
var statearr_59455_61054 = state_59418__$1;
(statearr_59455_61054[(2)] = inst_59411);

(statearr_59455_61054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (6))){
var inst_59370 = (state_59418[(14)]);
var inst_59374 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59370,change);
var state_59418__$1 = state_59418;
var statearr_59456_61058 = state_59418__$1;
(statearr_59456_61058[(2)] = inst_59374);

(statearr_59456_61058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (25))){
var state_59418__$1 = state_59418;
var statearr_59458_61059 = state_59418__$1;
(statearr_59458_61059[(2)] = null);

(statearr_59458_61059[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (17))){
var inst_59370 = (state_59418[(14)]);
var inst_59362 = (state_59418[(18)]);
var inst_59393 = (inst_59362.cljs$core$IFn$_invoke$arity$1 ? inst_59362.cljs$core$IFn$_invoke$arity$1(inst_59370) : inst_59362.call(null,inst_59370));
var inst_59394 = cljs.core.not(inst_59393);
var state_59418__$1 = state_59418;
var statearr_59459_61060 = state_59418__$1;
(statearr_59459_61060[(2)] = inst_59394);

(statearr_59459_61060[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (3))){
var inst_59415 = (state_59418[(2)]);
var state_59418__$1 = state_59418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59418__$1,inst_59415);
} else {
if((state_val_59419 === (12))){
var state_59418__$1 = state_59418;
var statearr_59460_61061 = state_59418__$1;
(statearr_59460_61061[(2)] = null);

(statearr_59460_61061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (2))){
var inst_59355 = (state_59418[(9)]);
var inst_59359 = (state_59418[(12)]);
var inst_59359__$1 = cljs.core.__destructure_map(inst_59355);
var inst_59361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59359__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59359__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59359__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59418__$1 = (function (){var statearr_59461 = state_59418;
(statearr_59461[(12)] = inst_59359__$1);

(statearr_59461[(15)] = inst_59361);

(statearr_59461[(18)] = inst_59362);

return statearr_59461;
})();
return cljs.core.async.ioc_alts_BANG_(state_59418__$1,(4),inst_59363);
} else {
if((state_val_59419 === (23))){
var inst_59402 = (state_59418[(2)]);
var state_59418__$1 = state_59418;
if(cljs.core.truth_(inst_59402)){
var statearr_59465_61062 = state_59418__$1;
(statearr_59465_61062[(1)] = (24));

} else {
var statearr_59466_61063 = state_59418__$1;
(statearr_59466_61063[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (19))){
var inst_59397 = (state_59418[(2)]);
var state_59418__$1 = state_59418;
var statearr_59468_61064 = state_59418__$1;
(statearr_59468_61064[(2)] = inst_59397);

(statearr_59468_61064[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (11))){
var inst_59370 = (state_59418[(14)]);
var inst_59380 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_59370);
var state_59418__$1 = state_59418;
var statearr_59470_61065 = state_59418__$1;
(statearr_59470_61065[(2)] = inst_59380);

(statearr_59470_61065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (9))){
var inst_59387 = (state_59418[(19)]);
var inst_59370 = (state_59418[(14)]);
var inst_59361 = (state_59418[(15)]);
var inst_59387__$1 = (inst_59361.cljs$core$IFn$_invoke$arity$1 ? inst_59361.cljs$core$IFn$_invoke$arity$1(inst_59370) : inst_59361.call(null,inst_59370));
var state_59418__$1 = (function (){var statearr_59471 = state_59418;
(statearr_59471[(19)] = inst_59387__$1);

return statearr_59471;
})();
if(cljs.core.truth_(inst_59387__$1)){
var statearr_59472_61067 = state_59418__$1;
(statearr_59472_61067[(1)] = (14));

} else {
var statearr_59473_61068 = state_59418__$1;
(statearr_59473_61068[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (5))){
var inst_59371 = (state_59418[(13)]);
var state_59418__$1 = state_59418;
var statearr_59474_61069 = state_59418__$1;
(statearr_59474_61069[(2)] = inst_59371);

(statearr_59474_61069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (14))){
var inst_59387 = (state_59418[(19)]);
var state_59418__$1 = state_59418;
var statearr_59476_61070 = state_59418__$1;
(statearr_59476_61070[(2)] = inst_59387);

(statearr_59476_61070[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (26))){
var inst_59407 = (state_59418[(2)]);
var state_59418__$1 = state_59418;
var statearr_59483_61071 = state_59418__$1;
(statearr_59483_61071[(2)] = inst_59407);

(statearr_59483_61071[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (16))){
var inst_59399 = (state_59418[(2)]);
var state_59418__$1 = state_59418;
if(cljs.core.truth_(inst_59399)){
var statearr_59485_61072 = state_59418__$1;
(statearr_59485_61072[(1)] = (20));

} else {
var statearr_59487_61077 = state_59418__$1;
(statearr_59487_61077[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (10))){
var inst_59413 = (state_59418[(2)]);
var state_59418__$1 = state_59418;
var statearr_59489_61078 = state_59418__$1;
(statearr_59489_61078[(2)] = inst_59413);

(statearr_59489_61078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (18))){
var inst_59391 = (state_59418[(16)]);
var state_59418__$1 = state_59418;
var statearr_59491_61079 = state_59418__$1;
(statearr_59491_61079[(2)] = inst_59391);

(statearr_59491_61079[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (8))){
var inst_59369 = (state_59418[(7)]);
var inst_59378 = (inst_59369 == null);
var state_59418__$1 = state_59418;
if(cljs.core.truth_(inst_59378)){
var statearr_59492_61080 = state_59418__$1;
(statearr_59492_61080[(1)] = (11));

} else {
var statearr_59493_61081 = state_59418__$1;
(statearr_59493_61081[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__48470__auto__ = null;
var cljs$core$async$mix_$_state_machine__48470__auto____0 = (function (){
var statearr_59494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59494[(0)] = cljs$core$async$mix_$_state_machine__48470__auto__);

(statearr_59494[(1)] = (1));

return statearr_59494;
});
var cljs$core$async$mix_$_state_machine__48470__auto____1 = (function (state_59418){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_59418);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e59495){var ex__48473__auto__ = e59495;
var statearr_59496_61082 = state_59418;
(statearr_59496_61082[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_59418[(4)]))){
var statearr_59497_61083 = state_59418;
(statearr_59497_61083[(1)] = cljs.core.first((state_59418[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61084 = state_59418;
state_59418 = G__61084;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48470__auto__ = function(state_59418){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48470__auto____1.call(this,state_59418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48470__auto____0;
cljs$core$async$mix_$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48470__auto____1;
return cljs$core$async$mix_$_state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_59498 = f__48599__auto__();
(statearr_59498[(6)] = c__48598__auto___61038);

return statearr_59498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_61085 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_61085(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_61090 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_61090(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_61107 = (function() {
var G__61108 = null;
var G__61108__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__61108__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__61108 = function(p,v){
switch(arguments.length){
case 1:
return G__61108__1.call(this,p);
case 2:
return G__61108__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61108.cljs$core$IFn$_invoke$arity$1 = G__61108__1;
G__61108.cljs$core$IFn$_invoke$arity$2 = G__61108__2;
return G__61108;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__59526 = arguments.length;
switch (G__59526) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61107(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61107(p,v);
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
var G__59530 = arguments.length;
switch (G__59530) {
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
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__59527_SHARP_){
if(cljs.core.truth_((p1__59527_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__59527_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__59527_SHARP_.call(null,topic)))){
return p1__59527_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59527_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59531 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59532){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59532 = meta59532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59533,meta59532__$1){
var self__ = this;
var _59533__$1 = this;
return (new cljs.core.async.t_cljs$core$async59531(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59532__$1));
}));

(cljs.core.async.t_cljs$core$async59531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59533){
var self__ = this;
var _59533__$1 = this;
return self__.meta59532;
}));

(cljs.core.async.t_cljs$core$async59531.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59531.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59531.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async59531.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async59531.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async59531.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async59531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59532","meta59532",1747344334,null)], null);
}));

(cljs.core.async.t_cljs$core$async59531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59531");

(cljs.core.async.t_cljs$core$async59531.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59531.
 */
cljs.core.async.__GT_t_cljs$core$async59531 = (function cljs$core$async$__GT_t_cljs$core$async59531(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59532){
return (new cljs.core.async.t_cljs$core$async59531(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59532));
});

}

return (new cljs.core.async.t_cljs$core$async59531(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48598__auto___61146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_59632){
var state_val_59633 = (state_59632[(1)]);
if((state_val_59633 === (7))){
var inst_59627 = (state_59632[(2)]);
var state_59632__$1 = state_59632;
var statearr_59636_61151 = state_59632__$1;
(statearr_59636_61151[(2)] = inst_59627);

(statearr_59636_61151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (20))){
var state_59632__$1 = state_59632;
var statearr_59637_61155 = state_59632__$1;
(statearr_59637_61155[(2)] = null);

(statearr_59637_61155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (1))){
var state_59632__$1 = state_59632;
var statearr_59639_61156 = state_59632__$1;
(statearr_59639_61156[(2)] = null);

(statearr_59639_61156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (24))){
var inst_59610 = (state_59632[(7)]);
var inst_59619 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_59610);
var state_59632__$1 = state_59632;
var statearr_59641_61157 = state_59632__$1;
(statearr_59641_61157[(2)] = inst_59619);

(statearr_59641_61157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (4))){
var inst_59539 = (state_59632[(8)]);
var inst_59539__$1 = (state_59632[(2)]);
var inst_59540 = (inst_59539__$1 == null);
var state_59632__$1 = (function (){var statearr_59642 = state_59632;
(statearr_59642[(8)] = inst_59539__$1);

return statearr_59642;
})();
if(cljs.core.truth_(inst_59540)){
var statearr_59643_61161 = state_59632__$1;
(statearr_59643_61161[(1)] = (5));

} else {
var statearr_59644_61162 = state_59632__$1;
(statearr_59644_61162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (15))){
var inst_59604 = (state_59632[(2)]);
var state_59632__$1 = state_59632;
var statearr_59645_61167 = state_59632__$1;
(statearr_59645_61167[(2)] = inst_59604);

(statearr_59645_61167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (21))){
var inst_59624 = (state_59632[(2)]);
var state_59632__$1 = (function (){var statearr_59647 = state_59632;
(statearr_59647[(9)] = inst_59624);

return statearr_59647;
})();
var statearr_59648_61171 = state_59632__$1;
(statearr_59648_61171[(2)] = null);

(statearr_59648_61171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (13))){
var inst_59585 = (state_59632[(10)]);
var inst_59587 = cljs.core.chunked_seq_QMARK_(inst_59585);
var state_59632__$1 = state_59632;
if(inst_59587){
var statearr_59649_61175 = state_59632__$1;
(statearr_59649_61175[(1)] = (16));

} else {
var statearr_59650_61176 = state_59632__$1;
(statearr_59650_61176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (22))){
var inst_59616 = (state_59632[(2)]);
var state_59632__$1 = state_59632;
if(cljs.core.truth_(inst_59616)){
var statearr_59651_61177 = state_59632__$1;
(statearr_59651_61177[(1)] = (23));

} else {
var statearr_59652_61178 = state_59632__$1;
(statearr_59652_61178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (6))){
var inst_59610 = (state_59632[(7)]);
var inst_59612 = (state_59632[(11)]);
var inst_59539 = (state_59632[(8)]);
var inst_59610__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_59539) : topic_fn.call(null,inst_59539));
var inst_59611 = cljs.core.deref(mults);
var inst_59612__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59611,inst_59610__$1);
var state_59632__$1 = (function (){var statearr_59653 = state_59632;
(statearr_59653[(7)] = inst_59610__$1);

(statearr_59653[(11)] = inst_59612__$1);

return statearr_59653;
})();
if(cljs.core.truth_(inst_59612__$1)){
var statearr_59654_61179 = state_59632__$1;
(statearr_59654_61179[(1)] = (19));

} else {
var statearr_59655_61180 = state_59632__$1;
(statearr_59655_61180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (25))){
var inst_59621 = (state_59632[(2)]);
var state_59632__$1 = state_59632;
var statearr_59657_61181 = state_59632__$1;
(statearr_59657_61181[(2)] = inst_59621);

(statearr_59657_61181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (17))){
var inst_59585 = (state_59632[(10)]);
var inst_59595 = cljs.core.first(inst_59585);
var inst_59596 = cljs.core.async.muxch_STAR_(inst_59595);
var inst_59597 = cljs.core.async.close_BANG_(inst_59596);
var inst_59598 = cljs.core.next(inst_59585);
var inst_59549 = inst_59598;
var inst_59550 = null;
var inst_59551 = (0);
var inst_59552 = (0);
var state_59632__$1 = (function (){var statearr_59658 = state_59632;
(statearr_59658[(12)] = inst_59597);

(statearr_59658[(13)] = inst_59552);

(statearr_59658[(14)] = inst_59551);

(statearr_59658[(15)] = inst_59550);

(statearr_59658[(16)] = inst_59549);

return statearr_59658;
})();
var statearr_59659_61189 = state_59632__$1;
(statearr_59659_61189[(2)] = null);

(statearr_59659_61189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (3))){
var inst_59629 = (state_59632[(2)]);
var state_59632__$1 = state_59632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59632__$1,inst_59629);
} else {
if((state_val_59633 === (12))){
var inst_59606 = (state_59632[(2)]);
var state_59632__$1 = state_59632;
var statearr_59660_61193 = state_59632__$1;
(statearr_59660_61193[(2)] = inst_59606);

(statearr_59660_61193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (2))){
var state_59632__$1 = state_59632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59632__$1,(4),ch);
} else {
if((state_val_59633 === (23))){
var state_59632__$1 = state_59632;
var statearr_59661_61194 = state_59632__$1;
(statearr_59661_61194[(2)] = null);

(statearr_59661_61194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (19))){
var inst_59612 = (state_59632[(11)]);
var inst_59539 = (state_59632[(8)]);
var inst_59614 = cljs.core.async.muxch_STAR_(inst_59612);
var state_59632__$1 = state_59632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59632__$1,(22),inst_59614,inst_59539);
} else {
if((state_val_59633 === (11))){
var inst_59585 = (state_59632[(10)]);
var inst_59549 = (state_59632[(16)]);
var inst_59585__$1 = cljs.core.seq(inst_59549);
var state_59632__$1 = (function (){var statearr_59663 = state_59632;
(statearr_59663[(10)] = inst_59585__$1);

return statearr_59663;
})();
if(inst_59585__$1){
var statearr_59664_61195 = state_59632__$1;
(statearr_59664_61195[(1)] = (13));

} else {
var statearr_59665_61199 = state_59632__$1;
(statearr_59665_61199[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (9))){
var inst_59608 = (state_59632[(2)]);
var state_59632__$1 = state_59632;
var statearr_59666_61200 = state_59632__$1;
(statearr_59666_61200[(2)] = inst_59608);

(statearr_59666_61200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (5))){
var inst_59546 = cljs.core.deref(mults);
var inst_59547 = cljs.core.vals(inst_59546);
var inst_59548 = cljs.core.seq(inst_59547);
var inst_59549 = inst_59548;
var inst_59550 = null;
var inst_59551 = (0);
var inst_59552 = (0);
var state_59632__$1 = (function (){var statearr_59667 = state_59632;
(statearr_59667[(13)] = inst_59552);

(statearr_59667[(14)] = inst_59551);

(statearr_59667[(15)] = inst_59550);

(statearr_59667[(16)] = inst_59549);

return statearr_59667;
})();
var statearr_59668_61208 = state_59632__$1;
(statearr_59668_61208[(2)] = null);

(statearr_59668_61208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (14))){
var state_59632__$1 = state_59632;
var statearr_59673_61212 = state_59632__$1;
(statearr_59673_61212[(2)] = null);

(statearr_59673_61212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (16))){
var inst_59585 = (state_59632[(10)]);
var inst_59589 = cljs.core.chunk_first(inst_59585);
var inst_59590 = cljs.core.chunk_rest(inst_59585);
var inst_59591 = cljs.core.count(inst_59589);
var inst_59549 = inst_59590;
var inst_59550 = inst_59589;
var inst_59551 = inst_59591;
var inst_59552 = (0);
var state_59632__$1 = (function (){var statearr_59675 = state_59632;
(statearr_59675[(13)] = inst_59552);

(statearr_59675[(14)] = inst_59551);

(statearr_59675[(15)] = inst_59550);

(statearr_59675[(16)] = inst_59549);

return statearr_59675;
})();
var statearr_59676_61217 = state_59632__$1;
(statearr_59676_61217[(2)] = null);

(statearr_59676_61217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (10))){
var inst_59552 = (state_59632[(13)]);
var inst_59551 = (state_59632[(14)]);
var inst_59550 = (state_59632[(15)]);
var inst_59549 = (state_59632[(16)]);
var inst_59578 = cljs.core._nth(inst_59550,inst_59552);
var inst_59579 = cljs.core.async.muxch_STAR_(inst_59578);
var inst_59580 = cljs.core.async.close_BANG_(inst_59579);
var inst_59582 = (inst_59552 + (1));
var tmp59670 = inst_59551;
var tmp59671 = inst_59550;
var tmp59672 = inst_59549;
var inst_59549__$1 = tmp59672;
var inst_59550__$1 = tmp59671;
var inst_59551__$1 = tmp59670;
var inst_59552__$1 = inst_59582;
var state_59632__$1 = (function (){var statearr_59679 = state_59632;
(statearr_59679[(17)] = inst_59580);

(statearr_59679[(13)] = inst_59552__$1);

(statearr_59679[(14)] = inst_59551__$1);

(statearr_59679[(15)] = inst_59550__$1);

(statearr_59679[(16)] = inst_59549__$1);

return statearr_59679;
})();
var statearr_59680_61221 = state_59632__$1;
(statearr_59680_61221[(2)] = null);

(statearr_59680_61221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (18))){
var inst_59601 = (state_59632[(2)]);
var state_59632__$1 = state_59632;
var statearr_59682_61222 = state_59632__$1;
(statearr_59682_61222[(2)] = inst_59601);

(statearr_59682_61222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59633 === (8))){
var inst_59552 = (state_59632[(13)]);
var inst_59551 = (state_59632[(14)]);
var inst_59555 = (inst_59552 < inst_59551);
var inst_59556 = inst_59555;
var state_59632__$1 = state_59632;
if(cljs.core.truth_(inst_59556)){
var statearr_59684_61223 = state_59632__$1;
(statearr_59684_61223[(1)] = (10));

} else {
var statearr_59685_61224 = state_59632__$1;
(statearr_59685_61224[(1)] = (11));

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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_59687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59687[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_59687[(1)] = (1));

return statearr_59687;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_59632){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_59632);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e59688){var ex__48473__auto__ = e59688;
var statearr_59689_61225 = state_59632;
(statearr_59689_61225[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_59632[(4)]))){
var statearr_59690_61226 = state_59632;
(statearr_59690_61226[(1)] = cljs.core.first((state_59632[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61227 = state_59632;
state_59632 = G__61227;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_59632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_59632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_59691 = f__48599__auto__();
(statearr_59691[(6)] = c__48598__auto___61146);

return statearr_59691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
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
var G__59694 = arguments.length;
switch (G__59694) {
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
var G__59697 = arguments.length;
switch (G__59697) {
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
var G__59699 = arguments.length;
switch (G__59699) {
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
var c__48598__auto___61231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_59744){
var state_val_59745 = (state_59744[(1)]);
if((state_val_59745 === (7))){
var state_59744__$1 = state_59744;
var statearr_59746_61232 = state_59744__$1;
(statearr_59746_61232[(2)] = null);

(statearr_59746_61232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (1))){
var state_59744__$1 = state_59744;
var statearr_59748_61233 = state_59744__$1;
(statearr_59748_61233[(2)] = null);

(statearr_59748_61233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (4))){
var inst_59703 = (state_59744[(7)]);
var inst_59705 = (state_59744[(8)]);
var inst_59707 = (inst_59705 < inst_59703);
var state_59744__$1 = state_59744;
if(cljs.core.truth_(inst_59707)){
var statearr_59749_61234 = state_59744__$1;
(statearr_59749_61234[(1)] = (6));

} else {
var statearr_59750_61235 = state_59744__$1;
(statearr_59750_61235[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (15))){
var inst_59730 = (state_59744[(9)]);
var inst_59735 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_59730);
var state_59744__$1 = state_59744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59744__$1,(17),out,inst_59735);
} else {
if((state_val_59745 === (13))){
var inst_59730 = (state_59744[(9)]);
var inst_59730__$1 = (state_59744[(2)]);
var inst_59731 = cljs.core.some(cljs.core.nil_QMARK_,inst_59730__$1);
var state_59744__$1 = (function (){var statearr_59751 = state_59744;
(statearr_59751[(9)] = inst_59730__$1);

return statearr_59751;
})();
if(cljs.core.truth_(inst_59731)){
var statearr_59752_61236 = state_59744__$1;
(statearr_59752_61236[(1)] = (14));

} else {
var statearr_59753_61237 = state_59744__$1;
(statearr_59753_61237[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (6))){
var state_59744__$1 = state_59744;
var statearr_59754_61238 = state_59744__$1;
(statearr_59754_61238[(2)] = null);

(statearr_59754_61238[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (17))){
var inst_59737 = (state_59744[(2)]);
var state_59744__$1 = (function (){var statearr_59757 = state_59744;
(statearr_59757[(10)] = inst_59737);

return statearr_59757;
})();
var statearr_59758_61239 = state_59744__$1;
(statearr_59758_61239[(2)] = null);

(statearr_59758_61239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (3))){
var inst_59742 = (state_59744[(2)]);
var state_59744__$1 = state_59744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59744__$1,inst_59742);
} else {
if((state_val_59745 === (12))){
var _ = (function (){var statearr_59759 = state_59744;
(statearr_59759[(4)] = cljs.core.rest((state_59744[(4)])));

return statearr_59759;
})();
var state_59744__$1 = state_59744;
var ex59755 = (state_59744__$1[(2)]);
var statearr_59760_61240 = state_59744__$1;
(statearr_59760_61240[(5)] = ex59755);


if((ex59755 instanceof Object)){
var statearr_59761_61241 = state_59744__$1;
(statearr_59761_61241[(1)] = (11));

(statearr_59761_61241[(5)] = null);

} else {
throw ex59755;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (2))){
var inst_59702 = cljs.core.reset_BANG_(dctr,cnt);
var inst_59703 = cnt;
var inst_59705 = (0);
var state_59744__$1 = (function (){var statearr_59762 = state_59744;
(statearr_59762[(7)] = inst_59703);

(statearr_59762[(8)] = inst_59705);

(statearr_59762[(11)] = inst_59702);

return statearr_59762;
})();
var statearr_59763_61242 = state_59744__$1;
(statearr_59763_61242[(2)] = null);

(statearr_59763_61242[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (11))){
var inst_59709 = (state_59744[(2)]);
var inst_59710 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_59744__$1 = (function (){var statearr_59765 = state_59744;
(statearr_59765[(12)] = inst_59709);

return statearr_59765;
})();
var statearr_59766_61243 = state_59744__$1;
(statearr_59766_61243[(2)] = inst_59710);

(statearr_59766_61243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (9))){
var inst_59705 = (state_59744[(8)]);
var _ = (function (){var statearr_59767 = state_59744;
(statearr_59767[(4)] = cljs.core.cons((12),(state_59744[(4)])));

return statearr_59767;
})();
var inst_59716 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_59705) : chs__$1.call(null,inst_59705));
var inst_59717 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_59705) : done.call(null,inst_59705));
var inst_59718 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59716,inst_59717);
var ___$1 = (function (){var statearr_59768 = state_59744;
(statearr_59768[(4)] = cljs.core.rest((state_59744[(4)])));

return statearr_59768;
})();
var state_59744__$1 = state_59744;
var statearr_59769_61244 = state_59744__$1;
(statearr_59769_61244[(2)] = inst_59718);

(statearr_59769_61244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (5))){
var inst_59728 = (state_59744[(2)]);
var state_59744__$1 = (function (){var statearr_59770 = state_59744;
(statearr_59770[(13)] = inst_59728);

return statearr_59770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59744__$1,(13),dchan);
} else {
if((state_val_59745 === (14))){
var inst_59733 = cljs.core.async.close_BANG_(out);
var state_59744__$1 = state_59744;
var statearr_59771_61246 = state_59744__$1;
(statearr_59771_61246[(2)] = inst_59733);

(statearr_59771_61246[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (16))){
var inst_59740 = (state_59744[(2)]);
var state_59744__$1 = state_59744;
var statearr_59772_61248 = state_59744__$1;
(statearr_59772_61248[(2)] = inst_59740);

(statearr_59772_61248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (10))){
var inst_59705 = (state_59744[(8)]);
var inst_59721 = (state_59744[(2)]);
var inst_59722 = (inst_59705 + (1));
var inst_59705__$1 = inst_59722;
var state_59744__$1 = (function (){var statearr_59774 = state_59744;
(statearr_59774[(8)] = inst_59705__$1);

(statearr_59774[(14)] = inst_59721);

return statearr_59774;
})();
var statearr_59775_61249 = state_59744__$1;
(statearr_59775_61249[(2)] = null);

(statearr_59775_61249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59745 === (8))){
var inst_59726 = (state_59744[(2)]);
var state_59744__$1 = state_59744;
var statearr_59776_61252 = state_59744__$1;
(statearr_59776_61252[(2)] = inst_59726);

(statearr_59776_61252[(1)] = (5));


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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_59777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59777[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_59777[(1)] = (1));

return statearr_59777;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_59744){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_59744);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e59778){var ex__48473__auto__ = e59778;
var statearr_59779_61255 = state_59744;
(statearr_59779_61255[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_59744[(4)]))){
var statearr_59780_61256 = state_59744;
(statearr_59780_61256[(1)] = cljs.core.first((state_59744[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61258 = state_59744;
state_59744 = G__61258;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_59744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_59744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_59782 = f__48599__auto__();
(statearr_59782[(6)] = c__48598__auto___61231);

return statearr_59782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));


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
var G__59785 = arguments.length;
switch (G__59785) {
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
var c__48598__auto___61271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_59818){
var state_val_59819 = (state_59818[(1)]);
if((state_val_59819 === (7))){
var inst_59797 = (state_59818[(7)]);
var inst_59798 = (state_59818[(8)]);
var inst_59797__$1 = (state_59818[(2)]);
var inst_59798__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59797__$1,(0),null);
var inst_59799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59797__$1,(1),null);
var inst_59800 = (inst_59798__$1 == null);
var state_59818__$1 = (function (){var statearr_59821 = state_59818;
(statearr_59821[(7)] = inst_59797__$1);

(statearr_59821[(8)] = inst_59798__$1);

(statearr_59821[(9)] = inst_59799);

return statearr_59821;
})();
if(cljs.core.truth_(inst_59800)){
var statearr_59822_61273 = state_59818__$1;
(statearr_59822_61273[(1)] = (8));

} else {
var statearr_59823_61274 = state_59818__$1;
(statearr_59823_61274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59819 === (1))){
var inst_59787 = cljs.core.vec(chs);
var inst_59788 = inst_59787;
var state_59818__$1 = (function (){var statearr_59824 = state_59818;
(statearr_59824[(10)] = inst_59788);

return statearr_59824;
})();
var statearr_59825_61275 = state_59818__$1;
(statearr_59825_61275[(2)] = null);

(statearr_59825_61275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59819 === (4))){
var inst_59788 = (state_59818[(10)]);
var state_59818__$1 = state_59818;
return cljs.core.async.ioc_alts_BANG_(state_59818__$1,(7),inst_59788);
} else {
if((state_val_59819 === (6))){
var inst_59814 = (state_59818[(2)]);
var state_59818__$1 = state_59818;
var statearr_59826_61277 = state_59818__$1;
(statearr_59826_61277[(2)] = inst_59814);

(statearr_59826_61277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59819 === (3))){
var inst_59816 = (state_59818[(2)]);
var state_59818__$1 = state_59818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59818__$1,inst_59816);
} else {
if((state_val_59819 === (2))){
var inst_59788 = (state_59818[(10)]);
var inst_59790 = cljs.core.count(inst_59788);
var inst_59791 = (inst_59790 > (0));
var state_59818__$1 = state_59818;
if(cljs.core.truth_(inst_59791)){
var statearr_59829_61278 = state_59818__$1;
(statearr_59829_61278[(1)] = (4));

} else {
var statearr_59830_61279 = state_59818__$1;
(statearr_59830_61279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59819 === (11))){
var inst_59788 = (state_59818[(10)]);
var inst_59807 = (state_59818[(2)]);
var tmp59827 = inst_59788;
var inst_59788__$1 = tmp59827;
var state_59818__$1 = (function (){var statearr_59831 = state_59818;
(statearr_59831[(11)] = inst_59807);

(statearr_59831[(10)] = inst_59788__$1);

return statearr_59831;
})();
var statearr_59832_61280 = state_59818__$1;
(statearr_59832_61280[(2)] = null);

(statearr_59832_61280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59819 === (9))){
var inst_59798 = (state_59818[(8)]);
var state_59818__$1 = state_59818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59818__$1,(11),out,inst_59798);
} else {
if((state_val_59819 === (5))){
var inst_59812 = cljs.core.async.close_BANG_(out);
var state_59818__$1 = state_59818;
var statearr_59835_61281 = state_59818__$1;
(statearr_59835_61281[(2)] = inst_59812);

(statearr_59835_61281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59819 === (10))){
var inst_59810 = (state_59818[(2)]);
var state_59818__$1 = state_59818;
var statearr_59836_61282 = state_59818__$1;
(statearr_59836_61282[(2)] = inst_59810);

(statearr_59836_61282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59819 === (8))){
var inst_59797 = (state_59818[(7)]);
var inst_59798 = (state_59818[(8)]);
var inst_59788 = (state_59818[(10)]);
var inst_59799 = (state_59818[(9)]);
var inst_59802 = (function (){var cs = inst_59788;
var vec__59793 = inst_59797;
var v = inst_59798;
var c = inst_59799;
return (function (p1__59783_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__59783_SHARP_);
});
})();
var inst_59803 = cljs.core.filterv(inst_59802,inst_59788);
var inst_59788__$1 = inst_59803;
var state_59818__$1 = (function (){var statearr_59837 = state_59818;
(statearr_59837[(10)] = inst_59788__$1);

return statearr_59837;
})();
var statearr_59838_61283 = state_59818__$1;
(statearr_59838_61283[(2)] = null);

(statearr_59838_61283[(1)] = (2));


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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_59839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59839[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_59839[(1)] = (1));

return statearr_59839;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_59818){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_59818);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e59840){var ex__48473__auto__ = e59840;
var statearr_59841_61284 = state_59818;
(statearr_59841_61284[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_59818[(4)]))){
var statearr_59842_61285 = state_59818;
(statearr_59842_61285[(1)] = cljs.core.first((state_59818[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61286 = state_59818;
state_59818 = G__61286;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_59818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_59818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_59845 = f__48599__auto__();
(statearr_59845[(6)] = c__48598__auto___61271);

return statearr_59845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
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
var G__59847 = arguments.length;
switch (G__59847) {
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
var c__48598__auto___61288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_59871){
var state_val_59872 = (state_59871[(1)]);
if((state_val_59872 === (7))){
var inst_59853 = (state_59871[(7)]);
var inst_59853__$1 = (state_59871[(2)]);
var inst_59854 = (inst_59853__$1 == null);
var inst_59855 = cljs.core.not(inst_59854);
var state_59871__$1 = (function (){var statearr_59873 = state_59871;
(statearr_59873[(7)] = inst_59853__$1);

return statearr_59873;
})();
if(inst_59855){
var statearr_59874_61296 = state_59871__$1;
(statearr_59874_61296[(1)] = (8));

} else {
var statearr_59875_61297 = state_59871__$1;
(statearr_59875_61297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59872 === (1))){
var inst_59848 = (0);
var state_59871__$1 = (function (){var statearr_59876 = state_59871;
(statearr_59876[(8)] = inst_59848);

return statearr_59876;
})();
var statearr_59878_61299 = state_59871__$1;
(statearr_59878_61299[(2)] = null);

(statearr_59878_61299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59872 === (4))){
var state_59871__$1 = state_59871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59871__$1,(7),ch);
} else {
if((state_val_59872 === (6))){
var inst_59866 = (state_59871[(2)]);
var state_59871__$1 = state_59871;
var statearr_59880_61300 = state_59871__$1;
(statearr_59880_61300[(2)] = inst_59866);

(statearr_59880_61300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59872 === (3))){
var inst_59868 = (state_59871[(2)]);
var inst_59869 = cljs.core.async.close_BANG_(out);
var state_59871__$1 = (function (){var statearr_59881 = state_59871;
(statearr_59881[(9)] = inst_59868);

return statearr_59881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59871__$1,inst_59869);
} else {
if((state_val_59872 === (2))){
var inst_59848 = (state_59871[(8)]);
var inst_59850 = (inst_59848 < n);
var state_59871__$1 = state_59871;
if(cljs.core.truth_(inst_59850)){
var statearr_59882_61311 = state_59871__$1;
(statearr_59882_61311[(1)] = (4));

} else {
var statearr_59883_61312 = state_59871__$1;
(statearr_59883_61312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59872 === (11))){
var inst_59848 = (state_59871[(8)]);
var inst_59858 = (state_59871[(2)]);
var inst_59859 = (inst_59848 + (1));
var inst_59848__$1 = inst_59859;
var state_59871__$1 = (function (){var statearr_59884 = state_59871;
(statearr_59884[(10)] = inst_59858);

(statearr_59884[(8)] = inst_59848__$1);

return statearr_59884;
})();
var statearr_59885_61313 = state_59871__$1;
(statearr_59885_61313[(2)] = null);

(statearr_59885_61313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59872 === (9))){
var state_59871__$1 = state_59871;
var statearr_59886_61314 = state_59871__$1;
(statearr_59886_61314[(2)] = null);

(statearr_59886_61314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59872 === (5))){
var state_59871__$1 = state_59871;
var statearr_59887_61316 = state_59871__$1;
(statearr_59887_61316[(2)] = null);

(statearr_59887_61316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59872 === (10))){
var inst_59863 = (state_59871[(2)]);
var state_59871__$1 = state_59871;
var statearr_59888_61317 = state_59871__$1;
(statearr_59888_61317[(2)] = inst_59863);

(statearr_59888_61317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59872 === (8))){
var inst_59853 = (state_59871[(7)]);
var state_59871__$1 = state_59871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59871__$1,(11),out,inst_59853);
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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_59889 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59889[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_59889[(1)] = (1));

return statearr_59889;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_59871){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_59871);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e59890){var ex__48473__auto__ = e59890;
var statearr_59891_61321 = state_59871;
(statearr_59891_61321[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_59871[(4)]))){
var statearr_59892_61322 = state_59871;
(statearr_59892_61322[(1)] = cljs.core.first((state_59871[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61323 = state_59871;
state_59871 = G__61323;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_59871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_59871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_59893 = f__48599__auto__();
(statearr_59893[(6)] = c__48598__auto___61288);

return statearr_59893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59895 = (function (f,ch,meta59896){
this.f = f;
this.ch = ch;
this.meta59896 = meta59896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59897,meta59896__$1){
var self__ = this;
var _59897__$1 = this;
return (new cljs.core.async.t_cljs$core$async59895(self__.f,self__.ch,meta59896__$1));
}));

(cljs.core.async.t_cljs$core$async59895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59897){
var self__ = this;
var _59897__$1 = this;
return self__.meta59896;
}));

(cljs.core.async.t_cljs$core$async59895.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59895.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59895.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59907 = (function (f,ch,meta59896,_,fn1,meta59908){
this.f = f;
this.ch = ch;
this.meta59896 = meta59896;
this._ = _;
this.fn1 = fn1;
this.meta59908 = meta59908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59909,meta59908__$1){
var self__ = this;
var _59909__$1 = this;
return (new cljs.core.async.t_cljs$core$async59907(self__.f,self__.ch,self__.meta59896,self__._,self__.fn1,meta59908__$1));
}));

(cljs.core.async.t_cljs$core$async59907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59909){
var self__ = this;
var _59909__$1 = this;
return self__.meta59908;
}));

(cljs.core.async.t_cljs$core$async59907.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async59907.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__59894_SHARP_){
var G__59919 = (((p1__59894_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__59894_SHARP_) : self__.f.call(null,p1__59894_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__59919) : f1.call(null,G__59919));
});
}));

(cljs.core.async.t_cljs$core$async59907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59896","meta59896",-1565279786,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59895","cljs.core.async/t_cljs$core$async59895",-65090185,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59908","meta59908",710885792,null)], null);
}));

(cljs.core.async.t_cljs$core$async59907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59907");

(cljs.core.async.t_cljs$core$async59907.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59907.
 */
cljs.core.async.__GT_t_cljs$core$async59907 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59907(f__$1,ch__$1,meta59896__$1,___$2,fn1__$1,meta59908){
return (new cljs.core.async.t_cljs$core$async59907(f__$1,ch__$1,meta59896__$1,___$2,fn1__$1,meta59908));
});

}

return (new cljs.core.async.t_cljs$core$async59907(self__.f,self__.ch,self__.meta59896,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__59928 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__59928) : self__.f.call(null,G__59928));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async59895.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async59895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59896","meta59896",-1565279786,null)], null);
}));

(cljs.core.async.t_cljs$core$async59895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59895");

(cljs.core.async.t_cljs$core$async59895.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59895.
 */
cljs.core.async.__GT_t_cljs$core$async59895 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59895(f__$1,ch__$1,meta59896){
return (new cljs.core.async.t_cljs$core$async59895(f__$1,ch__$1,meta59896));
});

}

return (new cljs.core.async.t_cljs$core$async59895(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59939 = (function (f,ch,meta59940){
this.f = f;
this.ch = ch;
this.meta59940 = meta59940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59941,meta59940__$1){
var self__ = this;
var _59941__$1 = this;
return (new cljs.core.async.t_cljs$core$async59939(self__.f,self__.ch,meta59940__$1));
}));

(cljs.core.async.t_cljs$core$async59939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59941){
var self__ = this;
var _59941__$1 = this;
return self__.meta59940;
}));

(cljs.core.async.t_cljs$core$async59939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async59939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59940","meta59940",1327217288,null)], null);
}));

(cljs.core.async.t_cljs$core$async59939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59939");

(cljs.core.async.t_cljs$core$async59939.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59939.
 */
cljs.core.async.__GT_t_cljs$core$async59939 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59939(f__$1,ch__$1,meta59940){
return (new cljs.core.async.t_cljs$core$async59939(f__$1,ch__$1,meta59940));
});

}

return (new cljs.core.async.t_cljs$core$async59939(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59958 = (function (p,ch,meta59959){
this.p = p;
this.ch = ch;
this.meta59959 = meta59959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59960,meta59959__$1){
var self__ = this;
var _59960__$1 = this;
return (new cljs.core.async.t_cljs$core$async59958(self__.p,self__.ch,meta59959__$1));
}));

(cljs.core.async.t_cljs$core$async59958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59960){
var self__ = this;
var _59960__$1 = this;
return self__.meta59959;
}));

(cljs.core.async.t_cljs$core$async59958.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59958.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59958.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59958.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async59958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59959","meta59959",-583638518,null)], null);
}));

(cljs.core.async.t_cljs$core$async59958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59958");

(cljs.core.async.t_cljs$core$async59958.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59958.
 */
cljs.core.async.__GT_t_cljs$core$async59958 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59958(p__$1,ch__$1,meta59959){
return (new cljs.core.async.t_cljs$core$async59958(p__$1,ch__$1,meta59959));
});

}

return (new cljs.core.async.t_cljs$core$async59958(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__59983 = arguments.length;
switch (G__59983) {
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
var c__48598__auto___61351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_60012){
var state_val_60013 = (state_60012[(1)]);
if((state_val_60013 === (7))){
var inst_60008 = (state_60012[(2)]);
var state_60012__$1 = state_60012;
var statearr_60018_61356 = state_60012__$1;
(statearr_60018_61356[(2)] = inst_60008);

(statearr_60018_61356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60013 === (1))){
var state_60012__$1 = state_60012;
var statearr_60019_61357 = state_60012__$1;
(statearr_60019_61357[(2)] = null);

(statearr_60019_61357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60013 === (4))){
var inst_59991 = (state_60012[(7)]);
var inst_59991__$1 = (state_60012[(2)]);
var inst_59992 = (inst_59991__$1 == null);
var state_60012__$1 = (function (){var statearr_60021 = state_60012;
(statearr_60021[(7)] = inst_59991__$1);

return statearr_60021;
})();
if(cljs.core.truth_(inst_59992)){
var statearr_60024_61358 = state_60012__$1;
(statearr_60024_61358[(1)] = (5));

} else {
var statearr_60026_61362 = state_60012__$1;
(statearr_60026_61362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60013 === (6))){
var inst_59991 = (state_60012[(7)]);
var inst_59998 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59991) : p.call(null,inst_59991));
var state_60012__$1 = state_60012;
if(cljs.core.truth_(inst_59998)){
var statearr_60027_61366 = state_60012__$1;
(statearr_60027_61366[(1)] = (8));

} else {
var statearr_60029_61367 = state_60012__$1;
(statearr_60029_61367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60013 === (3))){
var inst_60010 = (state_60012[(2)]);
var state_60012__$1 = state_60012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60012__$1,inst_60010);
} else {
if((state_val_60013 === (2))){
var state_60012__$1 = state_60012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60012__$1,(4),ch);
} else {
if((state_val_60013 === (11))){
var inst_60001 = (state_60012[(2)]);
var state_60012__$1 = state_60012;
var statearr_60033_61368 = state_60012__$1;
(statearr_60033_61368[(2)] = inst_60001);

(statearr_60033_61368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60013 === (9))){
var state_60012__$1 = state_60012;
var statearr_60035_61376 = state_60012__$1;
(statearr_60035_61376[(2)] = null);

(statearr_60035_61376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60013 === (5))){
var inst_59994 = cljs.core.async.close_BANG_(out);
var state_60012__$1 = state_60012;
var statearr_60038_61377 = state_60012__$1;
(statearr_60038_61377[(2)] = inst_59994);

(statearr_60038_61377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60013 === (10))){
var inst_60004 = (state_60012[(2)]);
var state_60012__$1 = (function (){var statearr_60040 = state_60012;
(statearr_60040[(8)] = inst_60004);

return statearr_60040;
})();
var statearr_60041_61378 = state_60012__$1;
(statearr_60041_61378[(2)] = null);

(statearr_60041_61378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60013 === (8))){
var inst_59991 = (state_60012[(7)]);
var state_60012__$1 = state_60012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60012__$1,(11),out,inst_59991);
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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_60046 = [null,null,null,null,null,null,null,null,null];
(statearr_60046[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_60046[(1)] = (1));

return statearr_60046;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_60012){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_60012);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e60048){var ex__48473__auto__ = e60048;
var statearr_60049_61380 = state_60012;
(statearr_60049_61380[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_60012[(4)]))){
var statearr_60050_61381 = state_60012;
(statearr_60050_61381[(1)] = cljs.core.first((state_60012[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61382 = state_60012;
state_60012 = G__61382;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_60012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_60012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_60055 = f__48599__auto__();
(statearr_60055[(6)] = c__48598__auto___61351);

return statearr_60055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__60060 = arguments.length;
switch (G__60060) {
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
var c__48598__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_60144){
var state_val_60145 = (state_60144[(1)]);
if((state_val_60145 === (7))){
var inst_60139 = (state_60144[(2)]);
var state_60144__$1 = state_60144;
var statearr_60152_61391 = state_60144__$1;
(statearr_60152_61391[(2)] = inst_60139);

(statearr_60152_61391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (20))){
var inst_60105 = (state_60144[(7)]);
var inst_60120 = (state_60144[(2)]);
var inst_60121 = cljs.core.next(inst_60105);
var inst_60090 = inst_60121;
var inst_60091 = null;
var inst_60092 = (0);
var inst_60093 = (0);
var state_60144__$1 = (function (){var statearr_60155 = state_60144;
(statearr_60155[(8)] = inst_60092);

(statearr_60155[(9)] = inst_60093);

(statearr_60155[(10)] = inst_60091);

(statearr_60155[(11)] = inst_60090);

(statearr_60155[(12)] = inst_60120);

return statearr_60155;
})();
var statearr_60156_61392 = state_60144__$1;
(statearr_60156_61392[(2)] = null);

(statearr_60156_61392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (1))){
var state_60144__$1 = state_60144;
var statearr_60160_61393 = state_60144__$1;
(statearr_60160_61393[(2)] = null);

(statearr_60160_61393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (4))){
var inst_60076 = (state_60144[(13)]);
var inst_60076__$1 = (state_60144[(2)]);
var inst_60077 = (inst_60076__$1 == null);
var state_60144__$1 = (function (){var statearr_60162 = state_60144;
(statearr_60162[(13)] = inst_60076__$1);

return statearr_60162;
})();
if(cljs.core.truth_(inst_60077)){
var statearr_60163_61395 = state_60144__$1;
(statearr_60163_61395[(1)] = (5));

} else {
var statearr_60165_61396 = state_60144__$1;
(statearr_60165_61396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (15))){
var state_60144__$1 = state_60144;
var statearr_60172_61397 = state_60144__$1;
(statearr_60172_61397[(2)] = null);

(statearr_60172_61397[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (21))){
var state_60144__$1 = state_60144;
var statearr_60174_61401 = state_60144__$1;
(statearr_60174_61401[(2)] = null);

(statearr_60174_61401[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (13))){
var inst_60092 = (state_60144[(8)]);
var inst_60093 = (state_60144[(9)]);
var inst_60091 = (state_60144[(10)]);
var inst_60090 = (state_60144[(11)]);
var inst_60100 = (state_60144[(2)]);
var inst_60101 = (inst_60093 + (1));
var tmp60168 = inst_60092;
var tmp60169 = inst_60091;
var tmp60170 = inst_60090;
var inst_60090__$1 = tmp60170;
var inst_60091__$1 = tmp60169;
var inst_60092__$1 = tmp60168;
var inst_60093__$1 = inst_60101;
var state_60144__$1 = (function (){var statearr_60179 = state_60144;
(statearr_60179[(8)] = inst_60092__$1);

(statearr_60179[(9)] = inst_60093__$1);

(statearr_60179[(10)] = inst_60091__$1);

(statearr_60179[(11)] = inst_60090__$1);

(statearr_60179[(14)] = inst_60100);

return statearr_60179;
})();
var statearr_60181_61403 = state_60144__$1;
(statearr_60181_61403[(2)] = null);

(statearr_60181_61403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (22))){
var state_60144__$1 = state_60144;
var statearr_60182_61404 = state_60144__$1;
(statearr_60182_61404[(2)] = null);

(statearr_60182_61404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (6))){
var inst_60076 = (state_60144[(13)]);
var inst_60087 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60076) : f.call(null,inst_60076));
var inst_60088 = cljs.core.seq(inst_60087);
var inst_60090 = inst_60088;
var inst_60091 = null;
var inst_60092 = (0);
var inst_60093 = (0);
var state_60144__$1 = (function (){var statearr_60186 = state_60144;
(statearr_60186[(8)] = inst_60092);

(statearr_60186[(9)] = inst_60093);

(statearr_60186[(10)] = inst_60091);

(statearr_60186[(11)] = inst_60090);

return statearr_60186;
})();
var statearr_60188_61405 = state_60144__$1;
(statearr_60188_61405[(2)] = null);

(statearr_60188_61405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (17))){
var inst_60105 = (state_60144[(7)]);
var inst_60110 = cljs.core.chunk_first(inst_60105);
var inst_60112 = cljs.core.chunk_rest(inst_60105);
var inst_60114 = cljs.core.count(inst_60110);
var inst_60090 = inst_60112;
var inst_60091 = inst_60110;
var inst_60092 = inst_60114;
var inst_60093 = (0);
var state_60144__$1 = (function (){var statearr_60192 = state_60144;
(statearr_60192[(8)] = inst_60092);

(statearr_60192[(9)] = inst_60093);

(statearr_60192[(10)] = inst_60091);

(statearr_60192[(11)] = inst_60090);

return statearr_60192;
})();
var statearr_60193_61407 = state_60144__$1;
(statearr_60193_61407[(2)] = null);

(statearr_60193_61407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (3))){
var inst_60142 = (state_60144[(2)]);
var state_60144__$1 = state_60144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60144__$1,inst_60142);
} else {
if((state_val_60145 === (12))){
var inst_60129 = (state_60144[(2)]);
var state_60144__$1 = state_60144;
var statearr_60197_61408 = state_60144__$1;
(statearr_60197_61408[(2)] = inst_60129);

(statearr_60197_61408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (2))){
var state_60144__$1 = state_60144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60144__$1,(4),in$);
} else {
if((state_val_60145 === (23))){
var inst_60137 = (state_60144[(2)]);
var state_60144__$1 = state_60144;
var statearr_60200_61409 = state_60144__$1;
(statearr_60200_61409[(2)] = inst_60137);

(statearr_60200_61409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (19))){
var inst_60124 = (state_60144[(2)]);
var state_60144__$1 = state_60144;
var statearr_60202_61420 = state_60144__$1;
(statearr_60202_61420[(2)] = inst_60124);

(statearr_60202_61420[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (11))){
var inst_60090 = (state_60144[(11)]);
var inst_60105 = (state_60144[(7)]);
var inst_60105__$1 = cljs.core.seq(inst_60090);
var state_60144__$1 = (function (){var statearr_60206 = state_60144;
(statearr_60206[(7)] = inst_60105__$1);

return statearr_60206;
})();
if(inst_60105__$1){
var statearr_60208_61421 = state_60144__$1;
(statearr_60208_61421[(1)] = (14));

} else {
var statearr_60209_61422 = state_60144__$1;
(statearr_60209_61422[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (9))){
var inst_60131 = (state_60144[(2)]);
var inst_60132 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_60144__$1 = (function (){var statearr_60212 = state_60144;
(statearr_60212[(15)] = inst_60131);

return statearr_60212;
})();
if(cljs.core.truth_(inst_60132)){
var statearr_60214_61427 = state_60144__$1;
(statearr_60214_61427[(1)] = (21));

} else {
var statearr_60215_61428 = state_60144__$1;
(statearr_60215_61428[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (5))){
var inst_60079 = cljs.core.async.close_BANG_(out);
var state_60144__$1 = state_60144;
var statearr_60220_61433 = state_60144__$1;
(statearr_60220_61433[(2)] = inst_60079);

(statearr_60220_61433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (14))){
var inst_60105 = (state_60144[(7)]);
var inst_60107 = cljs.core.chunked_seq_QMARK_(inst_60105);
var state_60144__$1 = state_60144;
if(inst_60107){
var statearr_60224_61434 = state_60144__$1;
(statearr_60224_61434[(1)] = (17));

} else {
var statearr_60225_61435 = state_60144__$1;
(statearr_60225_61435[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (16))){
var inst_60127 = (state_60144[(2)]);
var state_60144__$1 = state_60144;
var statearr_60226_61436 = state_60144__$1;
(statearr_60226_61436[(2)] = inst_60127);

(statearr_60226_61436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60145 === (10))){
var inst_60093 = (state_60144[(9)]);
var inst_60091 = (state_60144[(10)]);
var inst_60098 = cljs.core._nth(inst_60091,inst_60093);
var state_60144__$1 = state_60144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60144__$1,(13),out,inst_60098);
} else {
if((state_val_60145 === (18))){
var inst_60105 = (state_60144[(7)]);
var inst_60118 = cljs.core.first(inst_60105);
var state_60144__$1 = state_60144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60144__$1,(20),out,inst_60118);
} else {
if((state_val_60145 === (8))){
var inst_60092 = (state_60144[(8)]);
var inst_60093 = (state_60144[(9)]);
var inst_60095 = (inst_60093 < inst_60092);
var inst_60096 = inst_60095;
var state_60144__$1 = state_60144;
if(cljs.core.truth_(inst_60096)){
var statearr_60232_61440 = state_60144__$1;
(statearr_60232_61440[(1)] = (10));

} else {
var statearr_60233_61441 = state_60144__$1;
(statearr_60233_61441[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__48470__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48470__auto____0 = (function (){
var statearr_60234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60234[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48470__auto__);

(statearr_60234[(1)] = (1));

return statearr_60234;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48470__auto____1 = (function (state_60144){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_60144);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e60235){var ex__48473__auto__ = e60235;
var statearr_60236_61444 = state_60144;
(statearr_60236_61444[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_60144[(4)]))){
var statearr_60237_61448 = state_60144;
(statearr_60237_61448[(1)] = cljs.core.first((state_60144[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61451 = state_60144;
state_60144 = G__61451;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48470__auto__ = function(state_60144){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48470__auto____1.call(this,state_60144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48470__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48470__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_60238 = f__48599__auto__();
(statearr_60238[(6)] = c__48598__auto__);

return statearr_60238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));

return c__48598__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__60240 = arguments.length;
switch (G__60240) {
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
var G__60242 = arguments.length;
switch (G__60242) {
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
var G__60244 = arguments.length;
switch (G__60244) {
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
var c__48598__auto___61460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_60270){
var state_val_60271 = (state_60270[(1)]);
if((state_val_60271 === (7))){
var inst_60265 = (state_60270[(2)]);
var state_60270__$1 = state_60270;
var statearr_60272_61462 = state_60270__$1;
(statearr_60272_61462[(2)] = inst_60265);

(statearr_60272_61462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60271 === (1))){
var inst_60247 = null;
var state_60270__$1 = (function (){var statearr_60273 = state_60270;
(statearr_60273[(7)] = inst_60247);

return statearr_60273;
})();
var statearr_60274_61463 = state_60270__$1;
(statearr_60274_61463[(2)] = null);

(statearr_60274_61463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60271 === (4))){
var inst_60250 = (state_60270[(8)]);
var inst_60250__$1 = (state_60270[(2)]);
var inst_60251 = (inst_60250__$1 == null);
var inst_60252 = cljs.core.not(inst_60251);
var state_60270__$1 = (function (){var statearr_60275 = state_60270;
(statearr_60275[(8)] = inst_60250__$1);

return statearr_60275;
})();
if(inst_60252){
var statearr_60276_61464 = state_60270__$1;
(statearr_60276_61464[(1)] = (5));

} else {
var statearr_60277_61468 = state_60270__$1;
(statearr_60277_61468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60271 === (6))){
var state_60270__$1 = state_60270;
var statearr_60278_61469 = state_60270__$1;
(statearr_60278_61469[(2)] = null);

(statearr_60278_61469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60271 === (3))){
var inst_60267 = (state_60270[(2)]);
var inst_60268 = cljs.core.async.close_BANG_(out);
var state_60270__$1 = (function (){var statearr_60279 = state_60270;
(statearr_60279[(9)] = inst_60267);

return statearr_60279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60270__$1,inst_60268);
} else {
if((state_val_60271 === (2))){
var state_60270__$1 = state_60270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60270__$1,(4),ch);
} else {
if((state_val_60271 === (11))){
var inst_60250 = (state_60270[(8)]);
var inst_60259 = (state_60270[(2)]);
var inst_60247 = inst_60250;
var state_60270__$1 = (function (){var statearr_60280 = state_60270;
(statearr_60280[(7)] = inst_60247);

(statearr_60280[(10)] = inst_60259);

return statearr_60280;
})();
var statearr_60281_61476 = state_60270__$1;
(statearr_60281_61476[(2)] = null);

(statearr_60281_61476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60271 === (9))){
var inst_60250 = (state_60270[(8)]);
var state_60270__$1 = state_60270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60270__$1,(11),out,inst_60250);
} else {
if((state_val_60271 === (5))){
var inst_60247 = (state_60270[(7)]);
var inst_60250 = (state_60270[(8)]);
var inst_60254 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60250,inst_60247);
var state_60270__$1 = state_60270;
if(inst_60254){
var statearr_60283_61483 = state_60270__$1;
(statearr_60283_61483[(1)] = (8));

} else {
var statearr_60284_61484 = state_60270__$1;
(statearr_60284_61484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60271 === (10))){
var inst_60262 = (state_60270[(2)]);
var state_60270__$1 = state_60270;
var statearr_60285_61485 = state_60270__$1;
(statearr_60285_61485[(2)] = inst_60262);

(statearr_60285_61485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60271 === (8))){
var inst_60247 = (state_60270[(7)]);
var tmp60282 = inst_60247;
var inst_60247__$1 = tmp60282;
var state_60270__$1 = (function (){var statearr_60286 = state_60270;
(statearr_60286[(7)] = inst_60247__$1);

return statearr_60286;
})();
var statearr_60287_61486 = state_60270__$1;
(statearr_60287_61486[(2)] = null);

(statearr_60287_61486[(1)] = (2));


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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_60288 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60288[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_60288[(1)] = (1));

return statearr_60288;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_60270){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_60270);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e60289){var ex__48473__auto__ = e60289;
var statearr_60290_61491 = state_60270;
(statearr_60290_61491[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_60270[(4)]))){
var statearr_60291_61492 = state_60270;
(statearr_60291_61492[(1)] = cljs.core.first((state_60270[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61493 = state_60270;
state_60270 = G__61493;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_60270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_60270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_60292 = f__48599__auto__();
(statearr_60292[(6)] = c__48598__auto___61460);

return statearr_60292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60296 = arguments.length;
switch (G__60296) {
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
var c__48598__auto___61496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_60343){
var state_val_60344 = (state_60343[(1)]);
if((state_val_60344 === (7))){
var inst_60339 = (state_60343[(2)]);
var state_60343__$1 = state_60343;
var statearr_60345_61497 = state_60343__$1;
(statearr_60345_61497[(2)] = inst_60339);

(statearr_60345_61497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (1))){
var inst_60301 = (new Array(n));
var inst_60302 = inst_60301;
var inst_60303 = (0);
var state_60343__$1 = (function (){var statearr_60353 = state_60343;
(statearr_60353[(7)] = inst_60302);

(statearr_60353[(8)] = inst_60303);

return statearr_60353;
})();
var statearr_60354_61498 = state_60343__$1;
(statearr_60354_61498[(2)] = null);

(statearr_60354_61498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (4))){
var inst_60310 = (state_60343[(9)]);
var inst_60310__$1 = (state_60343[(2)]);
var inst_60311 = (inst_60310__$1 == null);
var inst_60312 = cljs.core.not(inst_60311);
var state_60343__$1 = (function (){var statearr_60356 = state_60343;
(statearr_60356[(9)] = inst_60310__$1);

return statearr_60356;
})();
if(inst_60312){
var statearr_60357_61511 = state_60343__$1;
(statearr_60357_61511[(1)] = (5));

} else {
var statearr_60358_61512 = state_60343__$1;
(statearr_60358_61512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (15))){
var inst_60333 = (state_60343[(2)]);
var state_60343__$1 = state_60343;
var statearr_60359_61513 = state_60343__$1;
(statearr_60359_61513[(2)] = inst_60333);

(statearr_60359_61513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (13))){
var state_60343__$1 = state_60343;
var statearr_60363_61517 = state_60343__$1;
(statearr_60363_61517[(2)] = null);

(statearr_60363_61517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (6))){
var inst_60303 = (state_60343[(8)]);
var inst_60329 = (inst_60303 > (0));
var state_60343__$1 = state_60343;
if(cljs.core.truth_(inst_60329)){
var statearr_60365_61518 = state_60343__$1;
(statearr_60365_61518[(1)] = (12));

} else {
var statearr_60366_61519 = state_60343__$1;
(statearr_60366_61519[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (3))){
var inst_60341 = (state_60343[(2)]);
var state_60343__$1 = state_60343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60343__$1,inst_60341);
} else {
if((state_val_60344 === (12))){
var inst_60302 = (state_60343[(7)]);
var inst_60331 = cljs.core.vec(inst_60302);
var state_60343__$1 = state_60343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60343__$1,(15),out,inst_60331);
} else {
if((state_val_60344 === (2))){
var state_60343__$1 = state_60343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60343__$1,(4),ch);
} else {
if((state_val_60344 === (11))){
var inst_60323 = (state_60343[(2)]);
var inst_60324 = (new Array(n));
var inst_60302 = inst_60324;
var inst_60303 = (0);
var state_60343__$1 = (function (){var statearr_60371 = state_60343;
(statearr_60371[(7)] = inst_60302);

(statearr_60371[(10)] = inst_60323);

(statearr_60371[(8)] = inst_60303);

return statearr_60371;
})();
var statearr_60372_61524 = state_60343__$1;
(statearr_60372_61524[(2)] = null);

(statearr_60372_61524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (9))){
var inst_60302 = (state_60343[(7)]);
var inst_60321 = cljs.core.vec(inst_60302);
var state_60343__$1 = state_60343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60343__$1,(11),out,inst_60321);
} else {
if((state_val_60344 === (5))){
var inst_60315 = (state_60343[(11)]);
var inst_60310 = (state_60343[(9)]);
var inst_60302 = (state_60343[(7)]);
var inst_60303 = (state_60343[(8)]);
var inst_60314 = (inst_60302[inst_60303] = inst_60310);
var inst_60315__$1 = (inst_60303 + (1));
var inst_60317 = (inst_60315__$1 < n);
var state_60343__$1 = (function (){var statearr_60377 = state_60343;
(statearr_60377[(11)] = inst_60315__$1);

(statearr_60377[(12)] = inst_60314);

return statearr_60377;
})();
if(cljs.core.truth_(inst_60317)){
var statearr_60378_61525 = state_60343__$1;
(statearr_60378_61525[(1)] = (8));

} else {
var statearr_60379_61526 = state_60343__$1;
(statearr_60379_61526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (14))){
var inst_60336 = (state_60343[(2)]);
var inst_60337 = cljs.core.async.close_BANG_(out);
var state_60343__$1 = (function (){var statearr_60382 = state_60343;
(statearr_60382[(13)] = inst_60336);

return statearr_60382;
})();
var statearr_60383_61527 = state_60343__$1;
(statearr_60383_61527[(2)] = inst_60337);

(statearr_60383_61527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (10))){
var inst_60327 = (state_60343[(2)]);
var state_60343__$1 = state_60343;
var statearr_60384_61534 = state_60343__$1;
(statearr_60384_61534[(2)] = inst_60327);

(statearr_60384_61534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60344 === (8))){
var inst_60315 = (state_60343[(11)]);
var inst_60302 = (state_60343[(7)]);
var tmp60381 = inst_60302;
var inst_60302__$1 = tmp60381;
var inst_60303 = inst_60315;
var state_60343__$1 = (function (){var statearr_60385 = state_60343;
(statearr_60385[(7)] = inst_60302__$1);

(statearr_60385[(8)] = inst_60303);

return statearr_60385;
})();
var statearr_60386_61541 = state_60343__$1;
(statearr_60386_61541[(2)] = null);

(statearr_60386_61541[(1)] = (2));


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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_60394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60394[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_60394[(1)] = (1));

return statearr_60394;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_60343){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_60343);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e60396){var ex__48473__auto__ = e60396;
var statearr_60397_61548 = state_60343;
(statearr_60397_61548[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_60343[(4)]))){
var statearr_60398_61549 = state_60343;
(statearr_60398_61549[(1)] = cljs.core.first((state_60343[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61550 = state_60343;
state_60343 = G__61550;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_60343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_60343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_60402 = f__48599__auto__();
(statearr_60402[(6)] = c__48598__auto___61496);

return statearr_60402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60409 = arguments.length;
switch (G__60409) {
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
var c__48598__auto___61552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48599__auto__ = (function (){var switch__48469__auto__ = (function (state_60463){
var state_val_60464 = (state_60463[(1)]);
if((state_val_60464 === (7))){
var inst_60455 = (state_60463[(2)]);
var state_60463__$1 = state_60463;
var statearr_60469_61554 = state_60463__$1;
(statearr_60469_61554[(2)] = inst_60455);

(statearr_60469_61554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (1))){
var inst_60415 = [];
var inst_60416 = inst_60415;
var inst_60417 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60463__$1 = (function (){var statearr_60473 = state_60463;
(statearr_60473[(7)] = inst_60417);

(statearr_60473[(8)] = inst_60416);

return statearr_60473;
})();
var statearr_60474_61555 = state_60463__$1;
(statearr_60474_61555[(2)] = null);

(statearr_60474_61555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (4))){
var inst_60420 = (state_60463[(9)]);
var inst_60420__$1 = (state_60463[(2)]);
var inst_60421 = (inst_60420__$1 == null);
var inst_60422 = cljs.core.not(inst_60421);
var state_60463__$1 = (function (){var statearr_60476 = state_60463;
(statearr_60476[(9)] = inst_60420__$1);

return statearr_60476;
})();
if(inst_60422){
var statearr_60477_61556 = state_60463__$1;
(statearr_60477_61556[(1)] = (5));

} else {
var statearr_60481_61558 = state_60463__$1;
(statearr_60481_61558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (15))){
var inst_60416 = (state_60463[(8)]);
var inst_60447 = cljs.core.vec(inst_60416);
var state_60463__$1 = state_60463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60463__$1,(18),out,inst_60447);
} else {
if((state_val_60464 === (13))){
var inst_60442 = (state_60463[(2)]);
var state_60463__$1 = state_60463;
var statearr_60483_61565 = state_60463__$1;
(statearr_60483_61565[(2)] = inst_60442);

(statearr_60483_61565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (6))){
var inst_60416 = (state_60463[(8)]);
var inst_60444 = inst_60416.length;
var inst_60445 = (inst_60444 > (0));
var state_60463__$1 = state_60463;
if(cljs.core.truth_(inst_60445)){
var statearr_60484_61566 = state_60463__$1;
(statearr_60484_61566[(1)] = (15));

} else {
var statearr_60488_61567 = state_60463__$1;
(statearr_60488_61567[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (17))){
var inst_60452 = (state_60463[(2)]);
var inst_60453 = cljs.core.async.close_BANG_(out);
var state_60463__$1 = (function (){var statearr_60490 = state_60463;
(statearr_60490[(10)] = inst_60452);

return statearr_60490;
})();
var statearr_60491_61568 = state_60463__$1;
(statearr_60491_61568[(2)] = inst_60453);

(statearr_60491_61568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (3))){
var inst_60457 = (state_60463[(2)]);
var state_60463__$1 = state_60463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60463__$1,inst_60457);
} else {
if((state_val_60464 === (12))){
var inst_60416 = (state_60463[(8)]);
var inst_60435 = cljs.core.vec(inst_60416);
var state_60463__$1 = state_60463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60463__$1,(14),out,inst_60435);
} else {
if((state_val_60464 === (2))){
var state_60463__$1 = state_60463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60463__$1,(4),ch);
} else {
if((state_val_60464 === (11))){
var inst_60424 = (state_60463[(11)]);
var inst_60420 = (state_60463[(9)]);
var inst_60416 = (state_60463[(8)]);
var inst_60432 = inst_60416.push(inst_60420);
var tmp60492 = inst_60416;
var inst_60416__$1 = tmp60492;
var inst_60417 = inst_60424;
var state_60463__$1 = (function (){var statearr_60494 = state_60463;
(statearr_60494[(7)] = inst_60417);

(statearr_60494[(12)] = inst_60432);

(statearr_60494[(8)] = inst_60416__$1);

return statearr_60494;
})();
var statearr_60495_61574 = state_60463__$1;
(statearr_60495_61574[(2)] = null);

(statearr_60495_61574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (9))){
var inst_60417 = (state_60463[(7)]);
var inst_60428 = cljs.core.keyword_identical_QMARK_(inst_60417,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_60463__$1 = state_60463;
var statearr_60496_61575 = state_60463__$1;
(statearr_60496_61575[(2)] = inst_60428);

(statearr_60496_61575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (5))){
var inst_60417 = (state_60463[(7)]);
var inst_60424 = (state_60463[(11)]);
var inst_60425 = (state_60463[(13)]);
var inst_60420 = (state_60463[(9)]);
var inst_60424__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60420) : f.call(null,inst_60420));
var inst_60425__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60424__$1,inst_60417);
var state_60463__$1 = (function (){var statearr_60504 = state_60463;
(statearr_60504[(11)] = inst_60424__$1);

(statearr_60504[(13)] = inst_60425__$1);

return statearr_60504;
})();
if(inst_60425__$1){
var statearr_60506_61581 = state_60463__$1;
(statearr_60506_61581[(1)] = (8));

} else {
var statearr_60507_61582 = state_60463__$1;
(statearr_60507_61582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (14))){
var inst_60424 = (state_60463[(11)]);
var inst_60420 = (state_60463[(9)]);
var inst_60437 = (state_60463[(2)]);
var inst_60438 = [];
var inst_60439 = inst_60438.push(inst_60420);
var inst_60416 = inst_60438;
var inst_60417 = inst_60424;
var state_60463__$1 = (function (){var statearr_60508 = state_60463;
(statearr_60508[(7)] = inst_60417);

(statearr_60508[(14)] = inst_60437);

(statearr_60508[(8)] = inst_60416);

(statearr_60508[(15)] = inst_60439);

return statearr_60508;
})();
var statearr_60509_61583 = state_60463__$1;
(statearr_60509_61583[(2)] = null);

(statearr_60509_61583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (16))){
var state_60463__$1 = state_60463;
var statearr_60513_61584 = state_60463__$1;
(statearr_60513_61584[(2)] = null);

(statearr_60513_61584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (10))){
var inst_60430 = (state_60463[(2)]);
var state_60463__$1 = state_60463;
if(cljs.core.truth_(inst_60430)){
var statearr_60515_61585 = state_60463__$1;
(statearr_60515_61585[(1)] = (11));

} else {
var statearr_60516_61586 = state_60463__$1;
(statearr_60516_61586[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (18))){
var inst_60449 = (state_60463[(2)]);
var state_60463__$1 = state_60463;
var statearr_60520_61587 = state_60463__$1;
(statearr_60520_61587[(2)] = inst_60449);

(statearr_60520_61587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60464 === (8))){
var inst_60425 = (state_60463[(13)]);
var state_60463__$1 = state_60463;
var statearr_60522_61589 = state_60463__$1;
(statearr_60522_61589[(2)] = inst_60425);

(statearr_60522_61589[(1)] = (10));


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
var cljs$core$async$state_machine__48470__auto__ = null;
var cljs$core$async$state_machine__48470__auto____0 = (function (){
var statearr_60526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60526[(0)] = cljs$core$async$state_machine__48470__auto__);

(statearr_60526[(1)] = (1));

return statearr_60526;
});
var cljs$core$async$state_machine__48470__auto____1 = (function (state_60463){
while(true){
var ret_value__48471__auto__ = (function (){try{while(true){
var result__48472__auto__ = switch__48469__auto__(state_60463);
if(cljs.core.keyword_identical_QMARK_(result__48472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48472__auto__;
}
break;
}
}catch (e60528){var ex__48473__auto__ = e60528;
var statearr_60529_61591 = state_60463;
(statearr_60529_61591[(2)] = ex__48473__auto__);


if(cljs.core.seq((state_60463[(4)]))){
var statearr_60530_61592 = state_60463;
(statearr_60530_61592[(1)] = cljs.core.first((state_60463[(4)])));

} else {
throw ex__48473__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61593 = state_60463;
state_60463 = G__61593;
continue;
} else {
return ret_value__48471__auto__;
}
break;
}
});
cljs$core$async$state_machine__48470__auto__ = function(state_60463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48470__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48470__auto____1.call(this,state_60463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48470__auto____0;
cljs$core$async$state_machine__48470__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48470__auto____1;
return cljs$core$async$state_machine__48470__auto__;
})()
})();
var state__48600__auto__ = (function (){var statearr_60531 = f__48599__auto__();
(statearr_60531[(6)] = c__48598__auto___61552);

return statearr_60531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48600__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
