goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44240 = arguments.length;
switch (G__44240) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44249 = (function (f,blockable,meta44250){
this.f = f;
this.blockable = blockable;
this.meta44250 = meta44250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44251,meta44250__$1){
var self__ = this;
var _44251__$1 = this;
return (new cljs.core.async.t_cljs$core$async44249(self__.f,self__.blockable,meta44250__$1));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44251){
var self__ = this;
var _44251__$1 = this;
return self__.meta44250;
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44250","meta44250",825774025,null)], null);
}));

(cljs.core.async.t_cljs$core$async44249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44249");

(cljs.core.async.t_cljs$core$async44249.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44249.
 */
cljs.core.async.__GT_t_cljs$core$async44249 = (function cljs$core$async$__GT_t_cljs$core$async44249(f__$1,blockable__$1,meta44250){
return (new cljs.core.async.t_cljs$core$async44249(f__$1,blockable__$1,meta44250));
});

}

return (new cljs.core.async.t_cljs$core$async44249(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44290 = arguments.length;
switch (G__44290) {
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
var G__44292 = arguments.length;
switch (G__44292) {
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
var G__44294 = arguments.length;
switch (G__44294) {
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
var val_46379 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46379) : fn1.call(null,val_46379));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46379) : fn1.call(null,val_46379));
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
var G__44305 = arguments.length;
switch (G__44305) {
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
var n__5633__auto___46388 = n;
var x_46389 = (0);
while(true){
if((x_46389 < n__5633__auto___46388)){
(a[x_46389] = x_46389);

var G__46390 = (x_46389 + (1));
x_46389 = G__46390;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44324 = (function (flag,meta44325){
this.flag = flag;
this.meta44325 = meta44325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44326,meta44325__$1){
var self__ = this;
var _44326__$1 = this;
return (new cljs.core.async.t_cljs$core$async44324(self__.flag,meta44325__$1));
}));

(cljs.core.async.t_cljs$core$async44324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44326){
var self__ = this;
var _44326__$1 = this;
return self__.meta44325;
}));

(cljs.core.async.t_cljs$core$async44324.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44324.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44325","meta44325",1854030748,null)], null);
}));

(cljs.core.async.t_cljs$core$async44324.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44324");

(cljs.core.async.t_cljs$core$async44324.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44324");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44324.
 */
cljs.core.async.__GT_t_cljs$core$async44324 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44324(flag__$1,meta44325){
return (new cljs.core.async.t_cljs$core$async44324(flag__$1,meta44325));
});

}

return (new cljs.core.async.t_cljs$core$async44324(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44333 = (function (flag,cb,meta44334){
this.flag = flag;
this.cb = cb;
this.meta44334 = meta44334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44335,meta44334__$1){
var self__ = this;
var _44335__$1 = this;
return (new cljs.core.async.t_cljs$core$async44333(self__.flag,self__.cb,meta44334__$1));
}));

(cljs.core.async.t_cljs$core$async44333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44335){
var self__ = this;
var _44335__$1 = this;
return self__.meta44334;
}));

(cljs.core.async.t_cljs$core$async44333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44334","meta44334",-138334200,null)], null);
}));

(cljs.core.async.t_cljs$core$async44333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44333");

(cljs.core.async.t_cljs$core$async44333.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44333.
 */
cljs.core.async.__GT_t_cljs$core$async44333 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44333(flag__$1,cb__$1,meta44334){
return (new cljs.core.async.t_cljs$core$async44333(flag__$1,cb__$1,meta44334));
});

}

return (new cljs.core.async.t_cljs$core$async44333(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44336_SHARP_){
var G__44338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44336_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44338) : fret.call(null,G__44338));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44337_SHARP_){
var G__44339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44337_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44339) : fret.call(null,G__44339));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46437 = (i + (1));
i = G__46437;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
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
var args__5772__auto__ = [];
var len__5766__auto___46439 = arguments.length;
var i__5767__auto___46440 = (0);
while(true){
if((i__5767__auto___46440 < len__5766__auto___46439)){
args__5772__auto__.push((arguments[i__5767__auto___46440]));

var G__46441 = (i__5767__auto___46440 + (1));
i__5767__auto___46440 = G__46441;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44342){
var map__44343 = p__44342;
var map__44343__$1 = cljs.core.__destructure_map(map__44343);
var opts = map__44343__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44340){
var G__44341 = cljs.core.first(seq44340);
var seq44340__$1 = cljs.core.next(seq44340);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44341,seq44340__$1);
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
var G__44345 = arguments.length;
switch (G__44345) {
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
var c__34441__auto___46443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_44369){
var state_val_44370 = (state_44369[(1)]);
if((state_val_44370 === (7))){
var inst_44365 = (state_44369[(2)]);
var state_44369__$1 = state_44369;
var statearr_44371_46444 = state_44369__$1;
(statearr_44371_46444[(2)] = inst_44365);

(statearr_44371_46444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44370 === (1))){
var state_44369__$1 = state_44369;
var statearr_44372_46445 = state_44369__$1;
(statearr_44372_46445[(2)] = null);

(statearr_44372_46445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44370 === (4))){
var inst_44348 = (state_44369[(7)]);
var inst_44348__$1 = (state_44369[(2)]);
var inst_44349 = (inst_44348__$1 == null);
var state_44369__$1 = (function (){var statearr_44373 = state_44369;
(statearr_44373[(7)] = inst_44348__$1);

return statearr_44373;
})();
if(cljs.core.truth_(inst_44349)){
var statearr_44374_46446 = state_44369__$1;
(statearr_44374_46446[(1)] = (5));

} else {
var statearr_44375_46447 = state_44369__$1;
(statearr_44375_46447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44370 === (13))){
var state_44369__$1 = state_44369;
var statearr_44376_46448 = state_44369__$1;
(statearr_44376_46448[(2)] = null);

(statearr_44376_46448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44370 === (6))){
var inst_44348 = (state_44369[(7)]);
var state_44369__$1 = state_44369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44369__$1,(11),to,inst_44348);
} else {
if((state_val_44370 === (3))){
var inst_44367 = (state_44369[(2)]);
var state_44369__$1 = state_44369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44369__$1,inst_44367);
} else {
if((state_val_44370 === (12))){
var state_44369__$1 = state_44369;
var statearr_44377_46450 = state_44369__$1;
(statearr_44377_46450[(2)] = null);

(statearr_44377_46450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44370 === (2))){
var state_44369__$1 = state_44369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44369__$1,(4),from);
} else {
if((state_val_44370 === (11))){
var inst_44358 = (state_44369[(2)]);
var state_44369__$1 = state_44369;
if(cljs.core.truth_(inst_44358)){
var statearr_44378_46451 = state_44369__$1;
(statearr_44378_46451[(1)] = (12));

} else {
var statearr_44379_46452 = state_44369__$1;
(statearr_44379_46452[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44370 === (9))){
var state_44369__$1 = state_44369;
var statearr_44380_46453 = state_44369__$1;
(statearr_44380_46453[(2)] = null);

(statearr_44380_46453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44370 === (5))){
var state_44369__$1 = state_44369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44381_46455 = state_44369__$1;
(statearr_44381_46455[(1)] = (8));

} else {
var statearr_44382_46456 = state_44369__$1;
(statearr_44382_46456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44370 === (14))){
var inst_44363 = (state_44369[(2)]);
var state_44369__$1 = state_44369;
var statearr_44383_46457 = state_44369__$1;
(statearr_44383_46457[(2)] = inst_44363);

(statearr_44383_46457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44370 === (10))){
var inst_44355 = (state_44369[(2)]);
var state_44369__$1 = state_44369;
var statearr_44384_46458 = state_44369__$1;
(statearr_44384_46458[(2)] = inst_44355);

(statearr_44384_46458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44370 === (8))){
var inst_44352 = cljs.core.async.close_BANG_(to);
var state_44369__$1 = state_44369;
var statearr_44385_46459 = state_44369__$1;
(statearr_44385_46459[(2)] = inst_44352);

(statearr_44385_46459[(1)] = (10));


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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_44386 = [null,null,null,null,null,null,null,null];
(statearr_44386[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_44386[(1)] = (1));

return statearr_44386;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_44369){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44369);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44387){var ex__34228__auto__ = e44387;
var statearr_44392_46460 = state_44369;
(statearr_44392_46460[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44369[(4)]))){
var statearr_44393_46461 = state_44369;
(statearr_44393_46461[(1)] = cljs.core.first((state_44369[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46462 = state_44369;
state_44369 = G__46462;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_44369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_44369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_44394 = f__34442__auto__();
(statearr_44394[(6)] = c__34441__auto___46443);

return statearr_44394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
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
var process__$1 = (function (p__44395){
var vec__44396 = p__44395;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44396,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44396,(1),null);
var job = vec__44396;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34441__auto___46464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_44404){
var state_val_44405 = (state_44404[(1)]);
if((state_val_44405 === (1))){
var state_44404__$1 = state_44404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44404__$1,(2),res,v);
} else {
if((state_val_44405 === (2))){
var inst_44400 = (state_44404[(2)]);
var inst_44401 = cljs.core.async.close_BANG_(res);
var state_44404__$1 = (function (){var statearr_44407 = state_44404;
(statearr_44407[(7)] = inst_44400);

return statearr_44407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44404__$1,inst_44401);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_44408 = [null,null,null,null,null,null,null,null];
(statearr_44408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__);

(statearr_44408[(1)] = (1));

return statearr_44408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1 = (function (state_44404){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44404);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44409){var ex__34228__auto__ = e44409;
var statearr_44410_46467 = state_44404;
(statearr_44410_46467[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44404[(4)]))){
var statearr_44411_46468 = state_44404;
(statearr_44411_46468[(1)] = cljs.core.first((state_44404[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46470 = state_44404;
state_44404 = G__46470;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = function(state_44404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1.call(this,state_44404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_44412 = f__34442__auto__();
(statearr_44412[(6)] = c__34441__auto___46464);

return statearr_44412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44413){
var vec__44414 = p__44413;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44414,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44414,(1),null);
var job = vec__44414;
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
var n__5633__auto___46471 = n;
var __46472 = (0);
while(true){
if((__46472 < n__5633__auto___46471)){
var G__44417_46473 = type;
var G__44417_46474__$1 = (((G__44417_46473 instanceof cljs.core.Keyword))?G__44417_46473.fqn:null);
switch (G__44417_46474__$1) {
case "compute":
var c__34441__auto___46476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46472,c__34441__auto___46476,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async){
return (function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = ((function (__46472,c__34441__auto___46476,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async){
return (function (state_44430){
var state_val_44431 = (state_44430[(1)]);
if((state_val_44431 === (1))){
var state_44430__$1 = state_44430;
var statearr_44432_46477 = state_44430__$1;
(statearr_44432_46477[(2)] = null);

(statearr_44432_46477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (2))){
var state_44430__$1 = state_44430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44430__$1,(4),jobs);
} else {
if((state_val_44431 === (3))){
var inst_44428 = (state_44430[(2)]);
var state_44430__$1 = state_44430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44430__$1,inst_44428);
} else {
if((state_val_44431 === (4))){
var inst_44420 = (state_44430[(2)]);
var inst_44421 = process__$1(inst_44420);
var state_44430__$1 = state_44430;
if(cljs.core.truth_(inst_44421)){
var statearr_44433_46478 = state_44430__$1;
(statearr_44433_46478[(1)] = (5));

} else {
var statearr_44434_46480 = state_44430__$1;
(statearr_44434_46480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (5))){
var state_44430__$1 = state_44430;
var statearr_44435_46481 = state_44430__$1;
(statearr_44435_46481[(2)] = null);

(statearr_44435_46481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (6))){
var state_44430__$1 = state_44430;
var statearr_44436_46483 = state_44430__$1;
(statearr_44436_46483[(2)] = null);

(statearr_44436_46483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44431 === (7))){
var inst_44426 = (state_44430[(2)]);
var state_44430__$1 = state_44430;
var statearr_44437_46484 = state_44430__$1;
(statearr_44437_46484[(2)] = inst_44426);

(statearr_44437_46484[(1)] = (3));


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
});})(__46472,c__34441__auto___46476,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async))
;
return ((function (__46472,switch__34224__auto__,c__34441__auto___46476,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_44438 = [null,null,null,null,null,null,null];
(statearr_44438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__);

(statearr_44438[(1)] = (1));

return statearr_44438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1 = (function (state_44430){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44430);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44439){var ex__34228__auto__ = e44439;
var statearr_44440_46485 = state_44430;
(statearr_44440_46485[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44430[(4)]))){
var statearr_44441_46486 = state_44430;
(statearr_44441_46486[(1)] = cljs.core.first((state_44430[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46487 = state_44430;
state_44430 = G__46487;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = function(state_44430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1.call(this,state_44430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__;
})()
;})(__46472,switch__34224__auto__,c__34441__auto___46476,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async))
})();
var state__34443__auto__ = (function (){var statearr_44442 = f__34442__auto__();
(statearr_44442[(6)] = c__34441__auto___46476);

return statearr_44442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
});})(__46472,c__34441__auto___46476,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async))
);


break;
case "async":
var c__34441__auto___46488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46472,c__34441__auto___46488,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async){
return (function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = ((function (__46472,c__34441__auto___46488,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async){
return (function (state_44455){
var state_val_44456 = (state_44455[(1)]);
if((state_val_44456 === (1))){
var state_44455__$1 = state_44455;
var statearr_44457_46489 = state_44455__$1;
(statearr_44457_46489[(2)] = null);

(statearr_44457_46489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (2))){
var state_44455__$1 = state_44455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44455__$1,(4),jobs);
} else {
if((state_val_44456 === (3))){
var inst_44453 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44455__$1,inst_44453);
} else {
if((state_val_44456 === (4))){
var inst_44445 = (state_44455[(2)]);
var inst_44446 = async(inst_44445);
var state_44455__$1 = state_44455;
if(cljs.core.truth_(inst_44446)){
var statearr_44458_46490 = state_44455__$1;
(statearr_44458_46490[(1)] = (5));

} else {
var statearr_44459_46491 = state_44455__$1;
(statearr_44459_46491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (5))){
var state_44455__$1 = state_44455;
var statearr_44460_46492 = state_44455__$1;
(statearr_44460_46492[(2)] = null);

(statearr_44460_46492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (6))){
var state_44455__$1 = state_44455;
var statearr_44461_46494 = state_44455__$1;
(statearr_44461_46494[(2)] = null);

(statearr_44461_46494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (7))){
var inst_44451 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
var statearr_44462_46495 = state_44455__$1;
(statearr_44462_46495[(2)] = inst_44451);

(statearr_44462_46495[(1)] = (3));


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
});})(__46472,c__34441__auto___46488,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async))
;
return ((function (__46472,switch__34224__auto__,c__34441__auto___46488,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_44463 = [null,null,null,null,null,null,null];
(statearr_44463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__);

(statearr_44463[(1)] = (1));

return statearr_44463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1 = (function (state_44455){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44455);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44464){var ex__34228__auto__ = e44464;
var statearr_44465_46496 = state_44455;
(statearr_44465_46496[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44455[(4)]))){
var statearr_44466_46497 = state_44455;
(statearr_44466_46497[(1)] = cljs.core.first((state_44455[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46498 = state_44455;
state_44455 = G__46498;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = function(state_44455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1.call(this,state_44455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__;
})()
;})(__46472,switch__34224__auto__,c__34441__auto___46488,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async))
})();
var state__34443__auto__ = (function (){var statearr_44467 = f__34442__auto__();
(statearr_44467[(6)] = c__34441__auto___46488);

return statearr_44467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
});})(__46472,c__34441__auto___46488,G__44417_46473,G__44417_46474__$1,n__5633__auto___46471,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44417_46474__$1)].join('')));

}

var G__46499 = (__46472 + (1));
__46472 = G__46499;
continue;
} else {
}
break;
}

var c__34441__auto___46500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_44489){
var state_val_44490 = (state_44489[(1)]);
if((state_val_44490 === (7))){
var inst_44485 = (state_44489[(2)]);
var state_44489__$1 = state_44489;
var statearr_44491_46501 = state_44489__$1;
(statearr_44491_46501[(2)] = inst_44485);

(statearr_44491_46501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (1))){
var state_44489__$1 = state_44489;
var statearr_44492_46504 = state_44489__$1;
(statearr_44492_46504[(2)] = null);

(statearr_44492_46504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (4))){
var inst_44470 = (state_44489[(7)]);
var inst_44470__$1 = (state_44489[(2)]);
var inst_44471 = (inst_44470__$1 == null);
var state_44489__$1 = (function (){var statearr_44493 = state_44489;
(statearr_44493[(7)] = inst_44470__$1);

return statearr_44493;
})();
if(cljs.core.truth_(inst_44471)){
var statearr_44494_46506 = state_44489__$1;
(statearr_44494_46506[(1)] = (5));

} else {
var statearr_44495_46507 = state_44489__$1;
(statearr_44495_46507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (6))){
var inst_44470 = (state_44489[(7)]);
var inst_44475 = (state_44489[(8)]);
var inst_44475__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44476 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44477 = [inst_44470,inst_44475__$1];
var inst_44478 = (new cljs.core.PersistentVector(null,2,(5),inst_44476,inst_44477,null));
var state_44489__$1 = (function (){var statearr_44496 = state_44489;
(statearr_44496[(8)] = inst_44475__$1);

return statearr_44496;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44489__$1,(8),jobs,inst_44478);
} else {
if((state_val_44490 === (3))){
var inst_44487 = (state_44489[(2)]);
var state_44489__$1 = state_44489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44489__$1,inst_44487);
} else {
if((state_val_44490 === (2))){
var state_44489__$1 = state_44489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44489__$1,(4),from);
} else {
if((state_val_44490 === (9))){
var inst_44482 = (state_44489[(2)]);
var state_44489__$1 = (function (){var statearr_44497 = state_44489;
(statearr_44497[(9)] = inst_44482);

return statearr_44497;
})();
var statearr_44498_46511 = state_44489__$1;
(statearr_44498_46511[(2)] = null);

(statearr_44498_46511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (5))){
var inst_44473 = cljs.core.async.close_BANG_(jobs);
var state_44489__$1 = state_44489;
var statearr_44499_46512 = state_44489__$1;
(statearr_44499_46512[(2)] = inst_44473);

(statearr_44499_46512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44490 === (8))){
var inst_44475 = (state_44489[(8)]);
var inst_44480 = (state_44489[(2)]);
var state_44489__$1 = (function (){var statearr_44504 = state_44489;
(statearr_44504[(10)] = inst_44480);

return statearr_44504;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44489__$1,(9),results,inst_44475);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_44505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44505[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__);

(statearr_44505[(1)] = (1));

return statearr_44505;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1 = (function (state_44489){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44489);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44506){var ex__34228__auto__ = e44506;
var statearr_44507_46513 = state_44489;
(statearr_44507_46513[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44489[(4)]))){
var statearr_44508_46514 = state_44489;
(statearr_44508_46514[(1)] = cljs.core.first((state_44489[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46515 = state_44489;
state_44489 = G__46515;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = function(state_44489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1.call(this,state_44489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_44513 = f__34442__auto__();
(statearr_44513[(6)] = c__34441__auto___46500);

return statearr_44513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));


var c__34441__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_44551){
var state_val_44552 = (state_44551[(1)]);
if((state_val_44552 === (7))){
var inst_44547 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
var statearr_44555_46517 = state_44551__$1;
(statearr_44555_46517[(2)] = inst_44547);

(statearr_44555_46517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (20))){
var state_44551__$1 = state_44551;
var statearr_44556_46518 = state_44551__$1;
(statearr_44556_46518[(2)] = null);

(statearr_44556_46518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (1))){
var state_44551__$1 = state_44551;
var statearr_44561_46520 = state_44551__$1;
(statearr_44561_46520[(2)] = null);

(statearr_44561_46520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (4))){
var inst_44516 = (state_44551[(7)]);
var inst_44516__$1 = (state_44551[(2)]);
var inst_44517 = (inst_44516__$1 == null);
var state_44551__$1 = (function (){var statearr_44564 = state_44551;
(statearr_44564[(7)] = inst_44516__$1);

return statearr_44564;
})();
if(cljs.core.truth_(inst_44517)){
var statearr_44565_46521 = state_44551__$1;
(statearr_44565_46521[(1)] = (5));

} else {
var statearr_44567_46522 = state_44551__$1;
(statearr_44567_46522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (15))){
var inst_44529 = (state_44551[(8)]);
var state_44551__$1 = state_44551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44551__$1,(18),to,inst_44529);
} else {
if((state_val_44552 === (21))){
var inst_44542 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
var statearr_44571_46523 = state_44551__$1;
(statearr_44571_46523[(2)] = inst_44542);

(statearr_44571_46523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (13))){
var inst_44544 = (state_44551[(2)]);
var state_44551__$1 = (function (){var statearr_44572 = state_44551;
(statearr_44572[(9)] = inst_44544);

return statearr_44572;
})();
var statearr_44573_46524 = state_44551__$1;
(statearr_44573_46524[(2)] = null);

(statearr_44573_46524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (6))){
var inst_44516 = (state_44551[(7)]);
var state_44551__$1 = state_44551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44551__$1,(11),inst_44516);
} else {
if((state_val_44552 === (17))){
var inst_44537 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
if(cljs.core.truth_(inst_44537)){
var statearr_44574_46525 = state_44551__$1;
(statearr_44574_46525[(1)] = (19));

} else {
var statearr_44575_46526 = state_44551__$1;
(statearr_44575_46526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (3))){
var inst_44549 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44551__$1,inst_44549);
} else {
if((state_val_44552 === (12))){
var inst_44526 = (state_44551[(10)]);
var state_44551__$1 = state_44551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44551__$1,(14),inst_44526);
} else {
if((state_val_44552 === (2))){
var state_44551__$1 = state_44551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44551__$1,(4),results);
} else {
if((state_val_44552 === (19))){
var state_44551__$1 = state_44551;
var statearr_44576_46527 = state_44551__$1;
(statearr_44576_46527[(2)] = null);

(statearr_44576_46527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (11))){
var inst_44526 = (state_44551[(2)]);
var state_44551__$1 = (function (){var statearr_44577 = state_44551;
(statearr_44577[(10)] = inst_44526);

return statearr_44577;
})();
var statearr_44578_46528 = state_44551__$1;
(statearr_44578_46528[(2)] = null);

(statearr_44578_46528[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (9))){
var state_44551__$1 = state_44551;
var statearr_44579_46529 = state_44551__$1;
(statearr_44579_46529[(2)] = null);

(statearr_44579_46529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (5))){
var state_44551__$1 = state_44551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44580_46531 = state_44551__$1;
(statearr_44580_46531[(1)] = (8));

} else {
var statearr_44581_46532 = state_44551__$1;
(statearr_44581_46532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (14))){
var inst_44529 = (state_44551[(8)]);
var inst_44531 = (state_44551[(11)]);
var inst_44529__$1 = (state_44551[(2)]);
var inst_44530 = (inst_44529__$1 == null);
var inst_44531__$1 = cljs.core.not(inst_44530);
var state_44551__$1 = (function (){var statearr_44582 = state_44551;
(statearr_44582[(8)] = inst_44529__$1);

(statearr_44582[(11)] = inst_44531__$1);

return statearr_44582;
})();
if(inst_44531__$1){
var statearr_44583_46533 = state_44551__$1;
(statearr_44583_46533[(1)] = (15));

} else {
var statearr_44584_46534 = state_44551__$1;
(statearr_44584_46534[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (16))){
var inst_44531 = (state_44551[(11)]);
var state_44551__$1 = state_44551;
var statearr_44585_46535 = state_44551__$1;
(statearr_44585_46535[(2)] = inst_44531);

(statearr_44585_46535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (10))){
var inst_44523 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
var statearr_44586_46536 = state_44551__$1;
(statearr_44586_46536[(2)] = inst_44523);

(statearr_44586_46536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (18))){
var inst_44534 = (state_44551[(2)]);
var state_44551__$1 = state_44551;
var statearr_44587_46537 = state_44551__$1;
(statearr_44587_46537[(2)] = inst_44534);

(statearr_44587_46537[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44552 === (8))){
var inst_44520 = cljs.core.async.close_BANG_(to);
var state_44551__$1 = state_44551;
var statearr_44588_46538 = state_44551__$1;
(statearr_44588_46538[(2)] = inst_44520);

(statearr_44588_46538[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_44589 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__);

(statearr_44589[(1)] = (1));

return statearr_44589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1 = (function (state_44551){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44551);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44590){var ex__34228__auto__ = e44590;
var statearr_44591_46539 = state_44551;
(statearr_44591_46539[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44551[(4)]))){
var statearr_44592_46540 = state_44551;
(statearr_44592_46540[(1)] = cljs.core.first((state_44551[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46541 = state_44551;
state_44551 = G__46541;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__ = function(state_44551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1.call(this,state_44551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_44593 = f__34442__auto__();
(statearr_44593[(6)] = c__34441__auto__);

return statearr_44593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));

return c__34441__auto__;
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
var G__44595 = arguments.length;
switch (G__44595) {
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
var G__44599 = arguments.length;
switch (G__44599) {
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
var G__44601 = arguments.length;
switch (G__44601) {
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
var c__34441__auto___46549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_44627){
var state_val_44628 = (state_44627[(1)]);
if((state_val_44628 === (7))){
var inst_44623 = (state_44627[(2)]);
var state_44627__$1 = state_44627;
var statearr_44629_46550 = state_44627__$1;
(statearr_44629_46550[(2)] = inst_44623);

(statearr_44629_46550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44628 === (1))){
var state_44627__$1 = state_44627;
var statearr_44630_46551 = state_44627__$1;
(statearr_44630_46551[(2)] = null);

(statearr_44630_46551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44628 === (4))){
var inst_44604 = (state_44627[(7)]);
var inst_44604__$1 = (state_44627[(2)]);
var inst_44605 = (inst_44604__$1 == null);
var state_44627__$1 = (function (){var statearr_44631 = state_44627;
(statearr_44631[(7)] = inst_44604__$1);

return statearr_44631;
})();
if(cljs.core.truth_(inst_44605)){
var statearr_44632_46552 = state_44627__$1;
(statearr_44632_46552[(1)] = (5));

} else {
var statearr_44633_46553 = state_44627__$1;
(statearr_44633_46553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44628 === (13))){
var state_44627__$1 = state_44627;
var statearr_44634_46554 = state_44627__$1;
(statearr_44634_46554[(2)] = null);

(statearr_44634_46554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44628 === (6))){
var inst_44604 = (state_44627[(7)]);
var inst_44610 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44604) : p.call(null,inst_44604));
var state_44627__$1 = state_44627;
if(cljs.core.truth_(inst_44610)){
var statearr_44635_46555 = state_44627__$1;
(statearr_44635_46555[(1)] = (9));

} else {
var statearr_44636_46556 = state_44627__$1;
(statearr_44636_46556[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44628 === (3))){
var inst_44625 = (state_44627[(2)]);
var state_44627__$1 = state_44627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44627__$1,inst_44625);
} else {
if((state_val_44628 === (12))){
var state_44627__$1 = state_44627;
var statearr_44637_46557 = state_44627__$1;
(statearr_44637_46557[(2)] = null);

(statearr_44637_46557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44628 === (2))){
var state_44627__$1 = state_44627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44627__$1,(4),ch);
} else {
if((state_val_44628 === (11))){
var inst_44604 = (state_44627[(7)]);
var inst_44614 = (state_44627[(2)]);
var state_44627__$1 = state_44627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44627__$1,(8),inst_44614,inst_44604);
} else {
if((state_val_44628 === (9))){
var state_44627__$1 = state_44627;
var statearr_44638_46558 = state_44627__$1;
(statearr_44638_46558[(2)] = tc);

(statearr_44638_46558[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44628 === (5))){
var inst_44607 = cljs.core.async.close_BANG_(tc);
var inst_44608 = cljs.core.async.close_BANG_(fc);
var state_44627__$1 = (function (){var statearr_44639 = state_44627;
(statearr_44639[(8)] = inst_44607);

return statearr_44639;
})();
var statearr_44640_46561 = state_44627__$1;
(statearr_44640_46561[(2)] = inst_44608);

(statearr_44640_46561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44628 === (14))){
var inst_44621 = (state_44627[(2)]);
var state_44627__$1 = state_44627;
var statearr_44641_46562 = state_44627__$1;
(statearr_44641_46562[(2)] = inst_44621);

(statearr_44641_46562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44628 === (10))){
var state_44627__$1 = state_44627;
var statearr_44642_46563 = state_44627__$1;
(statearr_44642_46563[(2)] = fc);

(statearr_44642_46563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44628 === (8))){
var inst_44616 = (state_44627[(2)]);
var state_44627__$1 = state_44627;
if(cljs.core.truth_(inst_44616)){
var statearr_44643_46564 = state_44627__$1;
(statearr_44643_46564[(1)] = (12));

} else {
var statearr_44644_46565 = state_44627__$1;
(statearr_44644_46565[(1)] = (13));

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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_44645 = [null,null,null,null,null,null,null,null,null];
(statearr_44645[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_44645[(1)] = (1));

return statearr_44645;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_44627){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44627);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44646){var ex__34228__auto__ = e44646;
var statearr_44647_46566 = state_44627;
(statearr_44647_46566[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44627[(4)]))){
var statearr_44648_46567 = state_44627;
(statearr_44648_46567[(1)] = cljs.core.first((state_44627[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46568 = state_44627;
state_44627 = G__46568;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_44627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_44627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_44649 = f__34442__auto__();
(statearr_44649[(6)] = c__34441__auto___46549);

return statearr_44649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
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
var c__34441__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_44671){
var state_val_44672 = (state_44671[(1)]);
if((state_val_44672 === (7))){
var inst_44667 = (state_44671[(2)]);
var state_44671__$1 = state_44671;
var statearr_44673_46579 = state_44671__$1;
(statearr_44673_46579[(2)] = inst_44667);

(statearr_44673_46579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44672 === (1))){
var inst_44650 = init;
var inst_44651 = inst_44650;
var state_44671__$1 = (function (){var statearr_44674 = state_44671;
(statearr_44674[(7)] = inst_44651);

return statearr_44674;
})();
var statearr_44675_46588 = state_44671__$1;
(statearr_44675_46588[(2)] = null);

(statearr_44675_46588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44672 === (4))){
var inst_44654 = (state_44671[(8)]);
var inst_44654__$1 = (state_44671[(2)]);
var inst_44655 = (inst_44654__$1 == null);
var state_44671__$1 = (function (){var statearr_44676 = state_44671;
(statearr_44676[(8)] = inst_44654__$1);

return statearr_44676;
})();
if(cljs.core.truth_(inst_44655)){
var statearr_44677_46594 = state_44671__$1;
(statearr_44677_46594[(1)] = (5));

} else {
var statearr_44678_46595 = state_44671__$1;
(statearr_44678_46595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44672 === (6))){
var inst_44651 = (state_44671[(7)]);
var inst_44658 = (state_44671[(9)]);
var inst_44654 = (state_44671[(8)]);
var inst_44658__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44651,inst_44654) : f.call(null,inst_44651,inst_44654));
var inst_44659 = cljs.core.reduced_QMARK_(inst_44658__$1);
var state_44671__$1 = (function (){var statearr_44679 = state_44671;
(statearr_44679[(9)] = inst_44658__$1);

return statearr_44679;
})();
if(inst_44659){
var statearr_44680_46603 = state_44671__$1;
(statearr_44680_46603[(1)] = (8));

} else {
var statearr_44681_46608 = state_44671__$1;
(statearr_44681_46608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44672 === (3))){
var inst_44669 = (state_44671[(2)]);
var state_44671__$1 = state_44671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44671__$1,inst_44669);
} else {
if((state_val_44672 === (2))){
var state_44671__$1 = state_44671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44671__$1,(4),ch);
} else {
if((state_val_44672 === (9))){
var inst_44658 = (state_44671[(9)]);
var inst_44651 = inst_44658;
var state_44671__$1 = (function (){var statearr_44682 = state_44671;
(statearr_44682[(7)] = inst_44651);

return statearr_44682;
})();
var statearr_44683_46616 = state_44671__$1;
(statearr_44683_46616[(2)] = null);

(statearr_44683_46616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44672 === (5))){
var inst_44651 = (state_44671[(7)]);
var state_44671__$1 = state_44671;
var statearr_44684_46620 = state_44671__$1;
(statearr_44684_46620[(2)] = inst_44651);

(statearr_44684_46620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44672 === (10))){
var inst_44665 = (state_44671[(2)]);
var state_44671__$1 = state_44671;
var statearr_44685_46621 = state_44671__$1;
(statearr_44685_46621[(2)] = inst_44665);

(statearr_44685_46621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44672 === (8))){
var inst_44658 = (state_44671[(9)]);
var inst_44661 = cljs.core.deref(inst_44658);
var state_44671__$1 = state_44671;
var statearr_44687_46623 = state_44671__$1;
(statearr_44687_46623[(2)] = inst_44661);

(statearr_44687_46623[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34225__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34225__auto____0 = (function (){
var statearr_44688 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44688[(0)] = cljs$core$async$reduce_$_state_machine__34225__auto__);

(statearr_44688[(1)] = (1));

return statearr_44688;
});
var cljs$core$async$reduce_$_state_machine__34225__auto____1 = (function (state_44671){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44671);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44689){var ex__34228__auto__ = e44689;
var statearr_44690_46624 = state_44671;
(statearr_44690_46624[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44671[(4)]))){
var statearr_44691_46625 = state_44671;
(statearr_44691_46625[(1)] = cljs.core.first((state_44671[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46630 = state_44671;
state_44671 = G__46630;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34225__auto__ = function(state_44671){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34225__auto____1.call(this,state_44671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34225__auto____0;
cljs$core$async$reduce_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34225__auto____1;
return cljs$core$async$reduce_$_state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_44692 = f__34442__auto__();
(statearr_44692[(6)] = c__34441__auto__);

return statearr_44692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));

return c__34441__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34441__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_44698){
var state_val_44699 = (state_44698[(1)]);
if((state_val_44699 === (1))){
var inst_44693 = cljs.core.async.reduce(f__$1,init,ch);
var state_44698__$1 = state_44698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44698__$1,(2),inst_44693);
} else {
if((state_val_44699 === (2))){
var inst_44695 = (state_44698[(2)]);
var inst_44696 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44695) : f__$1.call(null,inst_44695));
var state_44698__$1 = state_44698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44698__$1,inst_44696);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34225__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34225__auto____0 = (function (){
var statearr_44700 = [null,null,null,null,null,null,null];
(statearr_44700[(0)] = cljs$core$async$transduce_$_state_machine__34225__auto__);

(statearr_44700[(1)] = (1));

return statearr_44700;
});
var cljs$core$async$transduce_$_state_machine__34225__auto____1 = (function (state_44698){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44698);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44701){var ex__34228__auto__ = e44701;
var statearr_44702_46637 = state_44698;
(statearr_44702_46637[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44698[(4)]))){
var statearr_44703_46641 = state_44698;
(statearr_44703_46641[(1)] = cljs.core.first((state_44698[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46643 = state_44698;
state_44698 = G__46643;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34225__auto__ = function(state_44698){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34225__auto____1.call(this,state_44698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34225__auto____0;
cljs$core$async$transduce_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34225__auto____1;
return cljs$core$async$transduce_$_state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_44704 = f__34442__auto__();
(statearr_44704[(6)] = c__34441__auto__);

return statearr_44704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));

return c__34441__auto__;
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
var G__44706 = arguments.length;
switch (G__44706) {
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
var c__34441__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_44734){
var state_val_44735 = (state_44734[(1)]);
if((state_val_44735 === (7))){
var inst_44716 = (state_44734[(2)]);
var state_44734__$1 = state_44734;
var statearr_44737_46656 = state_44734__$1;
(statearr_44737_46656[(2)] = inst_44716);

(statearr_44737_46656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44735 === (1))){
var inst_44709 = cljs.core.seq(coll);
var inst_44710 = inst_44709;
var state_44734__$1 = (function (){var statearr_44739 = state_44734;
(statearr_44739[(7)] = inst_44710);

return statearr_44739;
})();
var statearr_44740_46661 = state_44734__$1;
(statearr_44740_46661[(2)] = null);

(statearr_44740_46661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44735 === (4))){
var inst_44710 = (state_44734[(7)]);
var inst_44714 = cljs.core.first(inst_44710);
var state_44734__$1 = state_44734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44734__$1,(7),ch,inst_44714);
} else {
if((state_val_44735 === (13))){
var inst_44728 = (state_44734[(2)]);
var state_44734__$1 = state_44734;
var statearr_44751_46675 = state_44734__$1;
(statearr_44751_46675[(2)] = inst_44728);

(statearr_44751_46675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44735 === (6))){
var inst_44719 = (state_44734[(2)]);
var state_44734__$1 = state_44734;
if(cljs.core.truth_(inst_44719)){
var statearr_44755_46676 = state_44734__$1;
(statearr_44755_46676[(1)] = (8));

} else {
var statearr_44759_46677 = state_44734__$1;
(statearr_44759_46677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44735 === (3))){
var inst_44732 = (state_44734[(2)]);
var state_44734__$1 = state_44734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44734__$1,inst_44732);
} else {
if((state_val_44735 === (12))){
var state_44734__$1 = state_44734;
var statearr_44760_46684 = state_44734__$1;
(statearr_44760_46684[(2)] = null);

(statearr_44760_46684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44735 === (2))){
var inst_44710 = (state_44734[(7)]);
var state_44734__$1 = state_44734;
if(cljs.core.truth_(inst_44710)){
var statearr_44761_46691 = state_44734__$1;
(statearr_44761_46691[(1)] = (4));

} else {
var statearr_44762_46692 = state_44734__$1;
(statearr_44762_46692[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44735 === (11))){
var inst_44725 = cljs.core.async.close_BANG_(ch);
var state_44734__$1 = state_44734;
var statearr_44763_46693 = state_44734__$1;
(statearr_44763_46693[(2)] = inst_44725);

(statearr_44763_46693[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44735 === (9))){
var state_44734__$1 = state_44734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44764_46694 = state_44734__$1;
(statearr_44764_46694[(1)] = (11));

} else {
var statearr_44765_46695 = state_44734__$1;
(statearr_44765_46695[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44735 === (5))){
var inst_44710 = (state_44734[(7)]);
var state_44734__$1 = state_44734;
var statearr_44766_46697 = state_44734__$1;
(statearr_44766_46697[(2)] = inst_44710);

(statearr_44766_46697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44735 === (10))){
var inst_44730 = (state_44734[(2)]);
var state_44734__$1 = state_44734;
var statearr_44767_46698 = state_44734__$1;
(statearr_44767_46698[(2)] = inst_44730);

(statearr_44767_46698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44735 === (8))){
var inst_44710 = (state_44734[(7)]);
var inst_44721 = cljs.core.next(inst_44710);
var inst_44710__$1 = inst_44721;
var state_44734__$1 = (function (){var statearr_44768 = state_44734;
(statearr_44768[(7)] = inst_44710__$1);

return statearr_44768;
})();
var statearr_44770_46708 = state_44734__$1;
(statearr_44770_46708[(2)] = null);

(statearr_44770_46708[(1)] = (2));


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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_44773 = [null,null,null,null,null,null,null,null];
(statearr_44773[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_44773[(1)] = (1));

return statearr_44773;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_44734){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44734);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e44774){var ex__34228__auto__ = e44774;
var statearr_44775_46709 = state_44734;
(statearr_44775_46709[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44734[(4)]))){
var statearr_44776_46710 = state_44734;
(statearr_44776_46710[(1)] = cljs.core.first((state_44734[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46715 = state_44734;
state_44734 = G__46715;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_44734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_44734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_44777 = f__34442__auto__();
(statearr_44777[(6)] = c__34441__auto__);

return statearr_44777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));

return c__34441__auto__;
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
var G__44783 = arguments.length;
switch (G__44783) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_46722 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_46722(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46729 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_46729(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46746 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_46746(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46769 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_46769(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44802 = (function (ch,cs,meta44803){
this.ch = ch;
this.cs = cs;
this.meta44803 = meta44803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44804,meta44803__$1){
var self__ = this;
var _44804__$1 = this;
return (new cljs.core.async.t_cljs$core$async44802(self__.ch,self__.cs,meta44803__$1));
}));

(cljs.core.async.t_cljs$core$async44802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44804){
var self__ = this;
var _44804__$1 = this;
return self__.meta44803;
}));

(cljs.core.async.t_cljs$core$async44802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44802.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44802.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44802.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44802.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44803","meta44803",-1995810810,null)], null);
}));

(cljs.core.async.t_cljs$core$async44802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44802");

(cljs.core.async.t_cljs$core$async44802.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async44802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44802.
 */
cljs.core.async.__GT_t_cljs$core$async44802 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44802(ch__$1,cs__$1,meta44803){
return (new cljs.core.async.t_cljs$core$async44802(ch__$1,cs__$1,meta44803));
});

}

return (new cljs.core.async.t_cljs$core$async44802(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34441__auto___46796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_44944){
var state_val_44945 = (state_44944[(1)]);
if((state_val_44945 === (7))){
var inst_44939 = (state_44944[(2)]);
var state_44944__$1 = state_44944;
var statearr_44946_46800 = state_44944__$1;
(statearr_44946_46800[(2)] = inst_44939);

(statearr_44946_46800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (20))){
var inst_44840 = (state_44944[(7)]);
var inst_44852 = cljs.core.first(inst_44840);
var inst_44853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44852,(0),null);
var inst_44854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44852,(1),null);
var state_44944__$1 = (function (){var statearr_44949 = state_44944;
(statearr_44949[(8)] = inst_44853);

return statearr_44949;
})();
if(cljs.core.truth_(inst_44854)){
var statearr_44950_46813 = state_44944__$1;
(statearr_44950_46813[(1)] = (22));

} else {
var statearr_44951_46817 = state_44944__$1;
(statearr_44951_46817[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (27))){
var inst_44808 = (state_44944[(9)]);
var inst_44882 = (state_44944[(10)]);
var inst_44889 = (state_44944[(11)]);
var inst_44884 = (state_44944[(12)]);
var inst_44889__$1 = cljs.core._nth(inst_44882,inst_44884);
var inst_44890 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44889__$1,inst_44808,done);
var state_44944__$1 = (function (){var statearr_44954 = state_44944;
(statearr_44954[(11)] = inst_44889__$1);

return statearr_44954;
})();
if(cljs.core.truth_(inst_44890)){
var statearr_44959_46820 = state_44944__$1;
(statearr_44959_46820[(1)] = (30));

} else {
var statearr_44961_46821 = state_44944__$1;
(statearr_44961_46821[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (1))){
var state_44944__$1 = state_44944;
var statearr_44968_46822 = state_44944__$1;
(statearr_44968_46822[(2)] = null);

(statearr_44968_46822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (24))){
var inst_44840 = (state_44944[(7)]);
var inst_44859 = (state_44944[(2)]);
var inst_44860 = cljs.core.next(inst_44840);
var inst_44817 = inst_44860;
var inst_44818 = null;
var inst_44819 = (0);
var inst_44820 = (0);
var state_44944__$1 = (function (){var statearr_44984 = state_44944;
(statearr_44984[(13)] = inst_44818);

(statearr_44984[(14)] = inst_44820);

(statearr_44984[(15)] = inst_44819);

(statearr_44984[(16)] = inst_44859);

(statearr_44984[(17)] = inst_44817);

return statearr_44984;
})();
var statearr_44987_46823 = state_44944__$1;
(statearr_44987_46823[(2)] = null);

(statearr_44987_46823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (39))){
var state_44944__$1 = state_44944;
var statearr_45000_46824 = state_44944__$1;
(statearr_45000_46824[(2)] = null);

(statearr_45000_46824[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (4))){
var inst_44808 = (state_44944[(9)]);
var inst_44808__$1 = (state_44944[(2)]);
var inst_44809 = (inst_44808__$1 == null);
var state_44944__$1 = (function (){var statearr_45006 = state_44944;
(statearr_45006[(9)] = inst_44808__$1);

return statearr_45006;
})();
if(cljs.core.truth_(inst_44809)){
var statearr_45019_46825 = state_44944__$1;
(statearr_45019_46825[(1)] = (5));

} else {
var statearr_45026_46826 = state_44944__$1;
(statearr_45026_46826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (15))){
var inst_44818 = (state_44944[(13)]);
var inst_44820 = (state_44944[(14)]);
var inst_44819 = (state_44944[(15)]);
var inst_44817 = (state_44944[(17)]);
var inst_44836 = (state_44944[(2)]);
var inst_44837 = (inst_44820 + (1));
var tmp44992 = inst_44818;
var tmp44993 = inst_44819;
var tmp44994 = inst_44817;
var inst_44817__$1 = tmp44994;
var inst_44818__$1 = tmp44992;
var inst_44819__$1 = tmp44993;
var inst_44820__$1 = inst_44837;
var state_44944__$1 = (function (){var statearr_45051 = state_44944;
(statearr_45051[(18)] = inst_44836);

(statearr_45051[(13)] = inst_44818__$1);

(statearr_45051[(14)] = inst_44820__$1);

(statearr_45051[(15)] = inst_44819__$1);

(statearr_45051[(17)] = inst_44817__$1);

return statearr_45051;
})();
var statearr_45076_46827 = state_44944__$1;
(statearr_45076_46827[(2)] = null);

(statearr_45076_46827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (21))){
var inst_44863 = (state_44944[(2)]);
var state_44944__$1 = state_44944;
var statearr_45085_46829 = state_44944__$1;
(statearr_45085_46829[(2)] = inst_44863);

(statearr_45085_46829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (31))){
var inst_44889 = (state_44944[(11)]);
var inst_44893 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44889);
var state_44944__$1 = state_44944;
var statearr_45090_46831 = state_44944__$1;
(statearr_45090_46831[(2)] = inst_44893);

(statearr_45090_46831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (32))){
var inst_44881 = (state_44944[(19)]);
var inst_44883 = (state_44944[(20)]);
var inst_44882 = (state_44944[(10)]);
var inst_44884 = (state_44944[(12)]);
var inst_44895 = (state_44944[(2)]);
var inst_44896 = (inst_44884 + (1));
var tmp45077 = inst_44881;
var tmp45078 = inst_44883;
var tmp45079 = inst_44882;
var inst_44881__$1 = tmp45077;
var inst_44882__$1 = tmp45079;
var inst_44883__$1 = tmp45078;
var inst_44884__$1 = inst_44896;
var state_44944__$1 = (function (){var statearr_45093 = state_44944;
(statearr_45093[(21)] = inst_44895);

(statearr_45093[(19)] = inst_44881__$1);

(statearr_45093[(20)] = inst_44883__$1);

(statearr_45093[(10)] = inst_44882__$1);

(statearr_45093[(12)] = inst_44884__$1);

return statearr_45093;
})();
var statearr_45094_46840 = state_44944__$1;
(statearr_45094_46840[(2)] = null);

(statearr_45094_46840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (40))){
var inst_44908 = (state_44944[(22)]);
var inst_44914 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44908);
var state_44944__$1 = state_44944;
var statearr_45095_46843 = state_44944__$1;
(statearr_45095_46843[(2)] = inst_44914);

(statearr_45095_46843[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (33))){
var inst_44899 = (state_44944[(23)]);
var inst_44901 = cljs.core.chunked_seq_QMARK_(inst_44899);
var state_44944__$1 = state_44944;
if(inst_44901){
var statearr_45096_46844 = state_44944__$1;
(statearr_45096_46844[(1)] = (36));

} else {
var statearr_45097_46845 = state_44944__$1;
(statearr_45097_46845[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (13))){
var inst_44829 = (state_44944[(24)]);
var inst_44832 = cljs.core.async.close_BANG_(inst_44829);
var state_44944__$1 = state_44944;
var statearr_45098_46846 = state_44944__$1;
(statearr_45098_46846[(2)] = inst_44832);

(statearr_45098_46846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (22))){
var inst_44853 = (state_44944[(8)]);
var inst_44856 = cljs.core.async.close_BANG_(inst_44853);
var state_44944__$1 = state_44944;
var statearr_45099_46849 = state_44944__$1;
(statearr_45099_46849[(2)] = inst_44856);

(statearr_45099_46849[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (36))){
var inst_44899 = (state_44944[(23)]);
var inst_44903 = cljs.core.chunk_first(inst_44899);
var inst_44904 = cljs.core.chunk_rest(inst_44899);
var inst_44905 = cljs.core.count(inst_44903);
var inst_44881 = inst_44904;
var inst_44882 = inst_44903;
var inst_44883 = inst_44905;
var inst_44884 = (0);
var state_44944__$1 = (function (){var statearr_45100 = state_44944;
(statearr_45100[(19)] = inst_44881);

(statearr_45100[(20)] = inst_44883);

(statearr_45100[(10)] = inst_44882);

(statearr_45100[(12)] = inst_44884);

return statearr_45100;
})();
var statearr_45101_46856 = state_44944__$1;
(statearr_45101_46856[(2)] = null);

(statearr_45101_46856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (41))){
var inst_44899 = (state_44944[(23)]);
var inst_44916 = (state_44944[(2)]);
var inst_44917 = cljs.core.next(inst_44899);
var inst_44881 = inst_44917;
var inst_44882 = null;
var inst_44883 = (0);
var inst_44884 = (0);
var state_44944__$1 = (function (){var statearr_45103 = state_44944;
(statearr_45103[(25)] = inst_44916);

(statearr_45103[(19)] = inst_44881);

(statearr_45103[(20)] = inst_44883);

(statearr_45103[(10)] = inst_44882);

(statearr_45103[(12)] = inst_44884);

return statearr_45103;
})();
var statearr_45104_46857 = state_44944__$1;
(statearr_45104_46857[(2)] = null);

(statearr_45104_46857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (43))){
var state_44944__$1 = state_44944;
var statearr_45109_46858 = state_44944__$1;
(statearr_45109_46858[(2)] = null);

(statearr_45109_46858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (29))){
var inst_44927 = (state_44944[(2)]);
var state_44944__$1 = state_44944;
var statearr_45114_46865 = state_44944__$1;
(statearr_45114_46865[(2)] = inst_44927);

(statearr_45114_46865[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (44))){
var inst_44936 = (state_44944[(2)]);
var state_44944__$1 = (function (){var statearr_45122 = state_44944;
(statearr_45122[(26)] = inst_44936);

return statearr_45122;
})();
var statearr_45123_46873 = state_44944__$1;
(statearr_45123_46873[(2)] = null);

(statearr_45123_46873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (6))){
var inst_44873 = (state_44944[(27)]);
var inst_44872 = cljs.core.deref(cs);
var inst_44873__$1 = cljs.core.keys(inst_44872);
var inst_44874 = cljs.core.count(inst_44873__$1);
var inst_44875 = cljs.core.reset_BANG_(dctr,inst_44874);
var inst_44880 = cljs.core.seq(inst_44873__$1);
var inst_44881 = inst_44880;
var inst_44882 = null;
var inst_44883 = (0);
var inst_44884 = (0);
var state_44944__$1 = (function (){var statearr_45133 = state_44944;
(statearr_45133[(28)] = inst_44875);

(statearr_45133[(19)] = inst_44881);

(statearr_45133[(27)] = inst_44873__$1);

(statearr_45133[(20)] = inst_44883);

(statearr_45133[(10)] = inst_44882);

(statearr_45133[(12)] = inst_44884);

return statearr_45133;
})();
var statearr_45138_46885 = state_44944__$1;
(statearr_45138_46885[(2)] = null);

(statearr_45138_46885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (28))){
var inst_44881 = (state_44944[(19)]);
var inst_44899 = (state_44944[(23)]);
var inst_44899__$1 = cljs.core.seq(inst_44881);
var state_44944__$1 = (function (){var statearr_45147 = state_44944;
(statearr_45147[(23)] = inst_44899__$1);

return statearr_45147;
})();
if(inst_44899__$1){
var statearr_45148_46886 = state_44944__$1;
(statearr_45148_46886[(1)] = (33));

} else {
var statearr_45149_46887 = state_44944__$1;
(statearr_45149_46887[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (25))){
var inst_44883 = (state_44944[(20)]);
var inst_44884 = (state_44944[(12)]);
var inst_44886 = (inst_44884 < inst_44883);
var inst_44887 = inst_44886;
var state_44944__$1 = state_44944;
if(cljs.core.truth_(inst_44887)){
var statearr_45150_46888 = state_44944__$1;
(statearr_45150_46888[(1)] = (27));

} else {
var statearr_45151_46889 = state_44944__$1;
(statearr_45151_46889[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (34))){
var state_44944__$1 = state_44944;
var statearr_45152_46890 = state_44944__$1;
(statearr_45152_46890[(2)] = null);

(statearr_45152_46890[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (17))){
var state_44944__$1 = state_44944;
var statearr_45153_46892 = state_44944__$1;
(statearr_45153_46892[(2)] = null);

(statearr_45153_46892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (3))){
var inst_44941 = (state_44944[(2)]);
var state_44944__$1 = state_44944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44944__$1,inst_44941);
} else {
if((state_val_44945 === (12))){
var inst_44868 = (state_44944[(2)]);
var state_44944__$1 = state_44944;
var statearr_45154_46899 = state_44944__$1;
(statearr_45154_46899[(2)] = inst_44868);

(statearr_45154_46899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (2))){
var state_44944__$1 = state_44944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44944__$1,(4),ch);
} else {
if((state_val_44945 === (23))){
var state_44944__$1 = state_44944;
var statearr_45155_46900 = state_44944__$1;
(statearr_45155_46900[(2)] = null);

(statearr_45155_46900[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (35))){
var inst_44925 = (state_44944[(2)]);
var state_44944__$1 = state_44944;
var statearr_45156_46901 = state_44944__$1;
(statearr_45156_46901[(2)] = inst_44925);

(statearr_45156_46901[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (19))){
var inst_44840 = (state_44944[(7)]);
var inst_44844 = cljs.core.chunk_first(inst_44840);
var inst_44845 = cljs.core.chunk_rest(inst_44840);
var inst_44846 = cljs.core.count(inst_44844);
var inst_44817 = inst_44845;
var inst_44818 = inst_44844;
var inst_44819 = inst_44846;
var inst_44820 = (0);
var state_44944__$1 = (function (){var statearr_45157 = state_44944;
(statearr_45157[(13)] = inst_44818);

(statearr_45157[(14)] = inst_44820);

(statearr_45157[(15)] = inst_44819);

(statearr_45157[(17)] = inst_44817);

return statearr_45157;
})();
var statearr_45158_46906 = state_44944__$1;
(statearr_45158_46906[(2)] = null);

(statearr_45158_46906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (11))){
var inst_44840 = (state_44944[(7)]);
var inst_44817 = (state_44944[(17)]);
var inst_44840__$1 = cljs.core.seq(inst_44817);
var state_44944__$1 = (function (){var statearr_45167 = state_44944;
(statearr_45167[(7)] = inst_44840__$1);

return statearr_45167;
})();
if(inst_44840__$1){
var statearr_45180_46910 = state_44944__$1;
(statearr_45180_46910[(1)] = (16));

} else {
var statearr_45181_46911 = state_44944__$1;
(statearr_45181_46911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (9))){
var inst_44870 = (state_44944[(2)]);
var state_44944__$1 = state_44944;
var statearr_45182_46912 = state_44944__$1;
(statearr_45182_46912[(2)] = inst_44870);

(statearr_45182_46912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (5))){
var inst_44815 = cljs.core.deref(cs);
var inst_44816 = cljs.core.seq(inst_44815);
var inst_44817 = inst_44816;
var inst_44818 = null;
var inst_44819 = (0);
var inst_44820 = (0);
var state_44944__$1 = (function (){var statearr_45183 = state_44944;
(statearr_45183[(13)] = inst_44818);

(statearr_45183[(14)] = inst_44820);

(statearr_45183[(15)] = inst_44819);

(statearr_45183[(17)] = inst_44817);

return statearr_45183;
})();
var statearr_45184_46913 = state_44944__$1;
(statearr_45184_46913[(2)] = null);

(statearr_45184_46913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (14))){
var state_44944__$1 = state_44944;
var statearr_45185_46914 = state_44944__$1;
(statearr_45185_46914[(2)] = null);

(statearr_45185_46914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (45))){
var inst_44933 = (state_44944[(2)]);
var state_44944__$1 = state_44944;
var statearr_45186_46922 = state_44944__$1;
(statearr_45186_46922[(2)] = inst_44933);

(statearr_45186_46922[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (26))){
var inst_44873 = (state_44944[(27)]);
var inst_44929 = (state_44944[(2)]);
var inst_44930 = cljs.core.seq(inst_44873);
var state_44944__$1 = (function (){var statearr_45187 = state_44944;
(statearr_45187[(29)] = inst_44929);

return statearr_45187;
})();
if(inst_44930){
var statearr_45188_46925 = state_44944__$1;
(statearr_45188_46925[(1)] = (42));

} else {
var statearr_45189_46926 = state_44944__$1;
(statearr_45189_46926[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (16))){
var inst_44840 = (state_44944[(7)]);
var inst_44842 = cljs.core.chunked_seq_QMARK_(inst_44840);
var state_44944__$1 = state_44944;
if(inst_44842){
var statearr_45190_46927 = state_44944__$1;
(statearr_45190_46927[(1)] = (19));

} else {
var statearr_45191_46928 = state_44944__$1;
(statearr_45191_46928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (38))){
var inst_44921 = (state_44944[(2)]);
var state_44944__$1 = state_44944;
var statearr_45192_46929 = state_44944__$1;
(statearr_45192_46929[(2)] = inst_44921);

(statearr_45192_46929[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (30))){
var state_44944__$1 = state_44944;
var statearr_45193_46930 = state_44944__$1;
(statearr_45193_46930[(2)] = null);

(statearr_45193_46930[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (10))){
var inst_44818 = (state_44944[(13)]);
var inst_44820 = (state_44944[(14)]);
var inst_44828 = cljs.core._nth(inst_44818,inst_44820);
var inst_44829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44828,(0),null);
var inst_44830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44828,(1),null);
var state_44944__$1 = (function (){var statearr_45194 = state_44944;
(statearr_45194[(24)] = inst_44829);

return statearr_45194;
})();
if(cljs.core.truth_(inst_44830)){
var statearr_45195_46932 = state_44944__$1;
(statearr_45195_46932[(1)] = (13));

} else {
var statearr_45196_46933 = state_44944__$1;
(statearr_45196_46933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (18))){
var inst_44866 = (state_44944[(2)]);
var state_44944__$1 = state_44944;
var statearr_45197_46937 = state_44944__$1;
(statearr_45197_46937[(2)] = inst_44866);

(statearr_45197_46937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (42))){
var state_44944__$1 = state_44944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44944__$1,(45),dchan);
} else {
if((state_val_44945 === (37))){
var inst_44808 = (state_44944[(9)]);
var inst_44899 = (state_44944[(23)]);
var inst_44908 = (state_44944[(22)]);
var inst_44908__$1 = cljs.core.first(inst_44899);
var inst_44911 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44908__$1,inst_44808,done);
var state_44944__$1 = (function (){var statearr_45198 = state_44944;
(statearr_45198[(22)] = inst_44908__$1);

return statearr_45198;
})();
if(cljs.core.truth_(inst_44911)){
var statearr_45199_46938 = state_44944__$1;
(statearr_45199_46938[(1)] = (39));

} else {
var statearr_45200_46939 = state_44944__$1;
(statearr_45200_46939[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44945 === (8))){
var inst_44820 = (state_44944[(14)]);
var inst_44819 = (state_44944[(15)]);
var inst_44822 = (inst_44820 < inst_44819);
var inst_44823 = inst_44822;
var state_44944__$1 = state_44944;
if(cljs.core.truth_(inst_44823)){
var statearr_45201_46941 = state_44944__$1;
(statearr_45201_46941[(1)] = (10));

} else {
var statearr_45202_46942 = state_44944__$1;
(statearr_45202_46942[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34225__auto__ = null;
var cljs$core$async$mult_$_state_machine__34225__auto____0 = (function (){
var statearr_45203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45203[(0)] = cljs$core$async$mult_$_state_machine__34225__auto__);

(statearr_45203[(1)] = (1));

return statearr_45203;
});
var cljs$core$async$mult_$_state_machine__34225__auto____1 = (function (state_44944){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_44944);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45204){var ex__34228__auto__ = e45204;
var statearr_45205_46945 = state_44944;
(statearr_45205_46945[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_44944[(4)]))){
var statearr_45206_46951 = state_44944;
(statearr_45206_46951[(1)] = cljs.core.first((state_44944[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46963 = state_44944;
state_44944 = G__46963;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34225__auto__ = function(state_44944){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34225__auto____1.call(this,state_44944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34225__auto____0;
cljs$core$async$mult_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34225__auto____1;
return cljs$core$async$mult_$_state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_45207 = f__34442__auto__();
(statearr_45207[(6)] = c__34441__auto___46796);

return statearr_45207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
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
var G__45209 = arguments.length;
switch (G__45209) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_46972 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_46972(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_46973 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_46973(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_46991 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_46991(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_46993 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_46993(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_46994 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_46994(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47005 = arguments.length;
var i__5767__auto___47006 = (0);
while(true){
if((i__5767__auto___47006 < len__5766__auto___47005)){
args__5772__auto__.push((arguments[i__5767__auto___47006]));

var G__47007 = (i__5767__auto___47006 + (1));
i__5767__auto___47006 = G__47007;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45214){
var map__45215 = p__45214;
var map__45215__$1 = cljs.core.__destructure_map(map__45215);
var opts = map__45215__$1;
var statearr_45216_47010 = state;
(statearr_45216_47010[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45217_47011 = state;
(statearr_45217_47011[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_45218_47012 = state;
(statearr_45218_47012[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45210){
var G__45211 = cljs.core.first(seq45210);
var seq45210__$1 = cljs.core.next(seq45210);
var G__45212 = cljs.core.first(seq45210__$1);
var seq45210__$2 = cljs.core.next(seq45210__$1);
var G__45213 = cljs.core.first(seq45210__$2);
var seq45210__$3 = cljs.core.next(seq45210__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45211,G__45212,G__45213,seq45210__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45220 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45220 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45221){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45221 = meta45221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45222,meta45221__$1){
var self__ = this;
var _45222__$1 = this;
return (new cljs.core.async.t_cljs$core$async45220(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45221__$1));
}));

(cljs.core.async.t_cljs$core$async45220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45222){
var self__ = this;
var _45222__$1 = this;
return self__.meta45221;
}));

(cljs.core.async.t_cljs$core$async45220.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45220.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45220.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45220.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45220.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45220.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45220.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45221","meta45221",-1152084657,null)], null);
}));

(cljs.core.async.t_cljs$core$async45220.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45220");

(cljs.core.async.t_cljs$core$async45220.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45220");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45220.
 */
cljs.core.async.__GT_t_cljs$core$async45220 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45220(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45221){
return (new cljs.core.async.t_cljs$core$async45220(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45221));
});

}

return (new cljs.core.async.t_cljs$core$async45220(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34441__auto___47111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_45292){
var state_val_45293 = (state_45292[(1)]);
if((state_val_45293 === (7))){
var inst_45251 = (state_45292[(2)]);
var state_45292__$1 = state_45292;
if(cljs.core.truth_(inst_45251)){
var statearr_45295_47113 = state_45292__$1;
(statearr_45295_47113[(1)] = (8));

} else {
var statearr_45297_47114 = state_45292__$1;
(statearr_45297_47114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (20))){
var inst_45244 = (state_45292[(7)]);
var state_45292__$1 = state_45292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45292__$1,(23),out,inst_45244);
} else {
if((state_val_45293 === (1))){
var inst_45227 = calc_state();
var inst_45228 = cljs.core.__destructure_map(inst_45227);
var inst_45229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45228,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45228,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45228,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45232 = inst_45227;
var state_45292__$1 = (function (){var statearr_45299 = state_45292;
(statearr_45299[(8)] = inst_45230);

(statearr_45299[(9)] = inst_45229);

(statearr_45299[(10)] = inst_45231);

(statearr_45299[(11)] = inst_45232);

return statearr_45299;
})();
var statearr_45300_47125 = state_45292__$1;
(statearr_45300_47125[(2)] = null);

(statearr_45300_47125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (24))){
var inst_45235 = (state_45292[(12)]);
var inst_45232 = inst_45235;
var state_45292__$1 = (function (){var statearr_45301 = state_45292;
(statearr_45301[(11)] = inst_45232);

return statearr_45301;
})();
var statearr_45302_47128 = state_45292__$1;
(statearr_45302_47128[(2)] = null);

(statearr_45302_47128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (4))){
var inst_45244 = (state_45292[(7)]);
var inst_45246 = (state_45292[(13)]);
var inst_45243 = (state_45292[(2)]);
var inst_45244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45243,(0),null);
var inst_45245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45243,(1),null);
var inst_45246__$1 = (inst_45244__$1 == null);
var state_45292__$1 = (function (){var statearr_45303 = state_45292;
(statearr_45303[(7)] = inst_45244__$1);

(statearr_45303[(13)] = inst_45246__$1);

(statearr_45303[(14)] = inst_45245);

return statearr_45303;
})();
if(cljs.core.truth_(inst_45246__$1)){
var statearr_45304_47131 = state_45292__$1;
(statearr_45304_47131[(1)] = (5));

} else {
var statearr_45305_47132 = state_45292__$1;
(statearr_45305_47132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (15))){
var inst_45236 = (state_45292[(15)]);
var inst_45265 = (state_45292[(16)]);
var inst_45265__$1 = cljs.core.empty_QMARK_(inst_45236);
var state_45292__$1 = (function (){var statearr_45306 = state_45292;
(statearr_45306[(16)] = inst_45265__$1);

return statearr_45306;
})();
if(inst_45265__$1){
var statearr_45307_47141 = state_45292__$1;
(statearr_45307_47141[(1)] = (17));

} else {
var statearr_45309_47143 = state_45292__$1;
(statearr_45309_47143[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (21))){
var inst_45235 = (state_45292[(12)]);
var inst_45232 = inst_45235;
var state_45292__$1 = (function (){var statearr_45310 = state_45292;
(statearr_45310[(11)] = inst_45232);

return statearr_45310;
})();
var statearr_45311_47147 = state_45292__$1;
(statearr_45311_47147[(2)] = null);

(statearr_45311_47147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (13))){
var inst_45258 = (state_45292[(2)]);
var inst_45259 = calc_state();
var inst_45232 = inst_45259;
var state_45292__$1 = (function (){var statearr_45313 = state_45292;
(statearr_45313[(11)] = inst_45232);

(statearr_45313[(17)] = inst_45258);

return statearr_45313;
})();
var statearr_45314_47150 = state_45292__$1;
(statearr_45314_47150[(2)] = null);

(statearr_45314_47150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (22))){
var inst_45286 = (state_45292[(2)]);
var state_45292__$1 = state_45292;
var statearr_45315_47151 = state_45292__$1;
(statearr_45315_47151[(2)] = inst_45286);

(statearr_45315_47151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (6))){
var inst_45245 = (state_45292[(14)]);
var inst_45249 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45245,change);
var state_45292__$1 = state_45292;
var statearr_45317_47156 = state_45292__$1;
(statearr_45317_47156[(2)] = inst_45249);

(statearr_45317_47156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (25))){
var state_45292__$1 = state_45292;
var statearr_45318_47157 = state_45292__$1;
(statearr_45318_47157[(2)] = null);

(statearr_45318_47157[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (17))){
var inst_45245 = (state_45292[(14)]);
var inst_45237 = (state_45292[(18)]);
var inst_45267 = (inst_45237.cljs$core$IFn$_invoke$arity$1 ? inst_45237.cljs$core$IFn$_invoke$arity$1(inst_45245) : inst_45237.call(null,inst_45245));
var inst_45268 = cljs.core.not(inst_45267);
var state_45292__$1 = state_45292;
var statearr_45320_47165 = state_45292__$1;
(statearr_45320_47165[(2)] = inst_45268);

(statearr_45320_47165[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (3))){
var inst_45290 = (state_45292[(2)]);
var state_45292__$1 = state_45292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45292__$1,inst_45290);
} else {
if((state_val_45293 === (12))){
var state_45292__$1 = state_45292;
var statearr_45322_47169 = state_45292__$1;
(statearr_45322_47169[(2)] = null);

(statearr_45322_47169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (2))){
var inst_45235 = (state_45292[(12)]);
var inst_45232 = (state_45292[(11)]);
var inst_45235__$1 = cljs.core.__destructure_map(inst_45232);
var inst_45236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45235__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45235__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45235__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45292__$1 = (function (){var statearr_45324 = state_45292;
(statearr_45324[(15)] = inst_45236);

(statearr_45324[(12)] = inst_45235__$1);

(statearr_45324[(18)] = inst_45237);

return statearr_45324;
})();
return cljs.core.async.ioc_alts_BANG_(state_45292__$1,(4),inst_45238);
} else {
if((state_val_45293 === (23))){
var inst_45277 = (state_45292[(2)]);
var state_45292__$1 = state_45292;
if(cljs.core.truth_(inst_45277)){
var statearr_45325_47170 = state_45292__$1;
(statearr_45325_47170[(1)] = (24));

} else {
var statearr_45326_47172 = state_45292__$1;
(statearr_45326_47172[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (19))){
var inst_45271 = (state_45292[(2)]);
var state_45292__$1 = state_45292;
var statearr_45327_47176 = state_45292__$1;
(statearr_45327_47176[(2)] = inst_45271);

(statearr_45327_47176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (11))){
var inst_45245 = (state_45292[(14)]);
var inst_45255 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45245);
var state_45292__$1 = state_45292;
var statearr_45329_47177 = state_45292__$1;
(statearr_45329_47177[(2)] = inst_45255);

(statearr_45329_47177[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (9))){
var inst_45262 = (state_45292[(19)]);
var inst_45236 = (state_45292[(15)]);
var inst_45245 = (state_45292[(14)]);
var inst_45262__$1 = (inst_45236.cljs$core$IFn$_invoke$arity$1 ? inst_45236.cljs$core$IFn$_invoke$arity$1(inst_45245) : inst_45236.call(null,inst_45245));
var state_45292__$1 = (function (){var statearr_45330 = state_45292;
(statearr_45330[(19)] = inst_45262__$1);

return statearr_45330;
})();
if(cljs.core.truth_(inst_45262__$1)){
var statearr_45331_47178 = state_45292__$1;
(statearr_45331_47178[(1)] = (14));

} else {
var statearr_45332_47185 = state_45292__$1;
(statearr_45332_47185[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (5))){
var inst_45246 = (state_45292[(13)]);
var state_45292__$1 = state_45292;
var statearr_45333_47186 = state_45292__$1;
(statearr_45333_47186[(2)] = inst_45246);

(statearr_45333_47186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (14))){
var inst_45262 = (state_45292[(19)]);
var state_45292__$1 = state_45292;
var statearr_45334_47193 = state_45292__$1;
(statearr_45334_47193[(2)] = inst_45262);

(statearr_45334_47193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (26))){
var inst_45282 = (state_45292[(2)]);
var state_45292__$1 = state_45292;
var statearr_45335_47195 = state_45292__$1;
(statearr_45335_47195[(2)] = inst_45282);

(statearr_45335_47195[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (16))){
var inst_45273 = (state_45292[(2)]);
var state_45292__$1 = state_45292;
if(cljs.core.truth_(inst_45273)){
var statearr_45336_47197 = state_45292__$1;
(statearr_45336_47197[(1)] = (20));

} else {
var statearr_45337_47198 = state_45292__$1;
(statearr_45337_47198[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (10))){
var inst_45288 = (state_45292[(2)]);
var state_45292__$1 = state_45292;
var statearr_45339_47199 = state_45292__$1;
(statearr_45339_47199[(2)] = inst_45288);

(statearr_45339_47199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (18))){
var inst_45265 = (state_45292[(16)]);
var state_45292__$1 = state_45292;
var statearr_45340_47200 = state_45292__$1;
(statearr_45340_47200[(2)] = inst_45265);

(statearr_45340_47200[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45293 === (8))){
var inst_45244 = (state_45292[(7)]);
var inst_45253 = (inst_45244 == null);
var state_45292__$1 = state_45292;
if(cljs.core.truth_(inst_45253)){
var statearr_45341_47202 = state_45292__$1;
(statearr_45341_47202[(1)] = (11));

} else {
var statearr_45342_47204 = state_45292__$1;
(statearr_45342_47204[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__34225__auto__ = null;
var cljs$core$async$mix_$_state_machine__34225__auto____0 = (function (){
var statearr_45343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45343[(0)] = cljs$core$async$mix_$_state_machine__34225__auto__);

(statearr_45343[(1)] = (1));

return statearr_45343;
});
var cljs$core$async$mix_$_state_machine__34225__auto____1 = (function (state_45292){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45292);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45344){var ex__34228__auto__ = e45344;
var statearr_45345_47210 = state_45292;
(statearr_45345_47210[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45292[(4)]))){
var statearr_45346_47212 = state_45292;
(statearr_45346_47212[(1)] = cljs.core.first((state_45292[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47213 = state_45292;
state_45292 = G__47213;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34225__auto__ = function(state_45292){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34225__auto____1.call(this,state_45292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34225__auto____0;
cljs$core$async$mix_$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34225__auto____1;
return cljs$core$async$mix_$_state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_45347 = f__34442__auto__();
(statearr_45347[(6)] = c__34441__auto___47111);

return statearr_45347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_47257 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47257(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47269 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47269(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47312 = (function() {
var G__47317 = null;
var G__47317__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47317__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47317 = function(p,v){
switch(arguments.length){
case 1:
return G__47317__1.call(this,p);
case 2:
return G__47317__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47317.cljs$core$IFn$_invoke$arity$1 = G__47317__1;
G__47317.cljs$core$IFn$_invoke$arity$2 = G__47317__2;
return G__47317;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45351 = arguments.length;
switch (G__45351) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47312(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47312(p,v);
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
var G__45355 = arguments.length;
switch (G__45355) {
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
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45353_SHARP_){
if(cljs.core.truth_((p1__45353_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45353_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45353_SHARP_.call(null,topic)))){
return p1__45353_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45353_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45357 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45358){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45358 = meta45358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45359,meta45358__$1){
var self__ = this;
var _45359__$1 = this;
return (new cljs.core.async.t_cljs$core$async45357(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45358__$1));
}));

(cljs.core.async.t_cljs$core$async45357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45359){
var self__ = this;
var _45359__$1 = this;
return self__.meta45358;
}));

(cljs.core.async.t_cljs$core$async45357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45357.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45357.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45357.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async45357.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45357.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45358","meta45358",1806827846,null)], null);
}));

(cljs.core.async.t_cljs$core$async45357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45357");

(cljs.core.async.t_cljs$core$async45357.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45357.
 */
cljs.core.async.__GT_t_cljs$core$async45357 = (function cljs$core$async$__GT_t_cljs$core$async45357(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45358){
return (new cljs.core.async.t_cljs$core$async45357(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45358));
});

}

return (new cljs.core.async.t_cljs$core$async45357(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34441__auto___47418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_45435){
var state_val_45436 = (state_45435[(1)]);
if((state_val_45436 === (7))){
var inst_45431 = (state_45435[(2)]);
var state_45435__$1 = state_45435;
var statearr_45438_47419 = state_45435__$1;
(statearr_45438_47419[(2)] = inst_45431);

(statearr_45438_47419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (20))){
var state_45435__$1 = state_45435;
var statearr_45439_47420 = state_45435__$1;
(statearr_45439_47420[(2)] = null);

(statearr_45439_47420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (1))){
var state_45435__$1 = state_45435;
var statearr_45441_47425 = state_45435__$1;
(statearr_45441_47425[(2)] = null);

(statearr_45441_47425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (24))){
var inst_45414 = (state_45435[(7)]);
var inst_45423 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45414);
var state_45435__$1 = state_45435;
var statearr_45442_47426 = state_45435__$1;
(statearr_45442_47426[(2)] = inst_45423);

(statearr_45442_47426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (4))){
var inst_45365 = (state_45435[(8)]);
var inst_45365__$1 = (state_45435[(2)]);
var inst_45366 = (inst_45365__$1 == null);
var state_45435__$1 = (function (){var statearr_45443 = state_45435;
(statearr_45443[(8)] = inst_45365__$1);

return statearr_45443;
})();
if(cljs.core.truth_(inst_45366)){
var statearr_45444_47431 = state_45435__$1;
(statearr_45444_47431[(1)] = (5));

} else {
var statearr_45445_47432 = state_45435__$1;
(statearr_45445_47432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (15))){
var inst_45407 = (state_45435[(2)]);
var state_45435__$1 = state_45435;
var statearr_45446_47433 = state_45435__$1;
(statearr_45446_47433[(2)] = inst_45407);

(statearr_45446_47433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (21))){
var inst_45428 = (state_45435[(2)]);
var state_45435__$1 = (function (){var statearr_45447 = state_45435;
(statearr_45447[(9)] = inst_45428);

return statearr_45447;
})();
var statearr_45449_47438 = state_45435__$1;
(statearr_45449_47438[(2)] = null);

(statearr_45449_47438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (13))){
var inst_45389 = (state_45435[(10)]);
var inst_45391 = cljs.core.chunked_seq_QMARK_(inst_45389);
var state_45435__$1 = state_45435;
if(inst_45391){
var statearr_45450_47440 = state_45435__$1;
(statearr_45450_47440[(1)] = (16));

} else {
var statearr_45451_47441 = state_45435__$1;
(statearr_45451_47441[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (22))){
var inst_45420 = (state_45435[(2)]);
var state_45435__$1 = state_45435;
if(cljs.core.truth_(inst_45420)){
var statearr_45452_47446 = state_45435__$1;
(statearr_45452_47446[(1)] = (23));

} else {
var statearr_45453_47448 = state_45435__$1;
(statearr_45453_47448[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (6))){
var inst_45414 = (state_45435[(7)]);
var inst_45365 = (state_45435[(8)]);
var inst_45416 = (state_45435[(11)]);
var inst_45414__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45365) : topic_fn.call(null,inst_45365));
var inst_45415 = cljs.core.deref(mults);
var inst_45416__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45415,inst_45414__$1);
var state_45435__$1 = (function (){var statearr_45454 = state_45435;
(statearr_45454[(7)] = inst_45414__$1);

(statearr_45454[(11)] = inst_45416__$1);

return statearr_45454;
})();
if(cljs.core.truth_(inst_45416__$1)){
var statearr_45455_47456 = state_45435__$1;
(statearr_45455_47456[(1)] = (19));

} else {
var statearr_45456_47457 = state_45435__$1;
(statearr_45456_47457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (25))){
var inst_45425 = (state_45435[(2)]);
var state_45435__$1 = state_45435;
var statearr_45458_47458 = state_45435__$1;
(statearr_45458_47458[(2)] = inst_45425);

(statearr_45458_47458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (17))){
var inst_45389 = (state_45435[(10)]);
var inst_45398 = cljs.core.first(inst_45389);
var inst_45399 = cljs.core.async.muxch_STAR_(inst_45398);
var inst_45400 = cljs.core.async.close_BANG_(inst_45399);
var inst_45401 = cljs.core.next(inst_45389);
var inst_45375 = inst_45401;
var inst_45376 = null;
var inst_45377 = (0);
var inst_45378 = (0);
var state_45435__$1 = (function (){var statearr_45459 = state_45435;
(statearr_45459[(12)] = inst_45400);

(statearr_45459[(13)] = inst_45378);

(statearr_45459[(14)] = inst_45375);

(statearr_45459[(15)] = inst_45376);

(statearr_45459[(16)] = inst_45377);

return statearr_45459;
})();
var statearr_45460_47464 = state_45435__$1;
(statearr_45460_47464[(2)] = null);

(statearr_45460_47464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (3))){
var inst_45433 = (state_45435[(2)]);
var state_45435__$1 = state_45435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45435__$1,inst_45433);
} else {
if((state_val_45436 === (12))){
var inst_45410 = (state_45435[(2)]);
var state_45435__$1 = state_45435;
var statearr_45461_47465 = state_45435__$1;
(statearr_45461_47465[(2)] = inst_45410);

(statearr_45461_47465[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (2))){
var state_45435__$1 = state_45435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45435__$1,(4),ch);
} else {
if((state_val_45436 === (23))){
var state_45435__$1 = state_45435;
var statearr_45462_47466 = state_45435__$1;
(statearr_45462_47466[(2)] = null);

(statearr_45462_47466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (19))){
var inst_45365 = (state_45435[(8)]);
var inst_45416 = (state_45435[(11)]);
var inst_45418 = cljs.core.async.muxch_STAR_(inst_45416);
var state_45435__$1 = state_45435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45435__$1,(22),inst_45418,inst_45365);
} else {
if((state_val_45436 === (11))){
var inst_45375 = (state_45435[(14)]);
var inst_45389 = (state_45435[(10)]);
var inst_45389__$1 = cljs.core.seq(inst_45375);
var state_45435__$1 = (function (){var statearr_45464 = state_45435;
(statearr_45464[(10)] = inst_45389__$1);

return statearr_45464;
})();
if(inst_45389__$1){
var statearr_45465_47467 = state_45435__$1;
(statearr_45465_47467[(1)] = (13));

} else {
var statearr_45466_47468 = state_45435__$1;
(statearr_45466_47468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (9))){
var inst_45412 = (state_45435[(2)]);
var state_45435__$1 = state_45435;
var statearr_45467_47469 = state_45435__$1;
(statearr_45467_47469[(2)] = inst_45412);

(statearr_45467_47469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (5))){
var inst_45372 = cljs.core.deref(mults);
var inst_45373 = cljs.core.vals(inst_45372);
var inst_45374 = cljs.core.seq(inst_45373);
var inst_45375 = inst_45374;
var inst_45376 = null;
var inst_45377 = (0);
var inst_45378 = (0);
var state_45435__$1 = (function (){var statearr_45468 = state_45435;
(statearr_45468[(13)] = inst_45378);

(statearr_45468[(14)] = inst_45375);

(statearr_45468[(15)] = inst_45376);

(statearr_45468[(16)] = inst_45377);

return statearr_45468;
})();
var statearr_45469_47470 = state_45435__$1;
(statearr_45469_47470[(2)] = null);

(statearr_45469_47470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (14))){
var state_45435__$1 = state_45435;
var statearr_45474_47471 = state_45435__$1;
(statearr_45474_47471[(2)] = null);

(statearr_45474_47471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (16))){
var inst_45389 = (state_45435[(10)]);
var inst_45393 = cljs.core.chunk_first(inst_45389);
var inst_45394 = cljs.core.chunk_rest(inst_45389);
var inst_45395 = cljs.core.count(inst_45393);
var inst_45375 = inst_45394;
var inst_45376 = inst_45393;
var inst_45377 = inst_45395;
var inst_45378 = (0);
var state_45435__$1 = (function (){var statearr_45475 = state_45435;
(statearr_45475[(13)] = inst_45378);

(statearr_45475[(14)] = inst_45375);

(statearr_45475[(15)] = inst_45376);

(statearr_45475[(16)] = inst_45377);

return statearr_45475;
})();
var statearr_45476_47472 = state_45435__$1;
(statearr_45476_47472[(2)] = null);

(statearr_45476_47472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (10))){
var inst_45378 = (state_45435[(13)]);
var inst_45375 = (state_45435[(14)]);
var inst_45376 = (state_45435[(15)]);
var inst_45377 = (state_45435[(16)]);
var inst_45383 = cljs.core._nth(inst_45376,inst_45378);
var inst_45384 = cljs.core.async.muxch_STAR_(inst_45383);
var inst_45385 = cljs.core.async.close_BANG_(inst_45384);
var inst_45386 = (inst_45378 + (1));
var tmp45471 = inst_45375;
var tmp45472 = inst_45376;
var tmp45473 = inst_45377;
var inst_45375__$1 = tmp45471;
var inst_45376__$1 = tmp45472;
var inst_45377__$1 = tmp45473;
var inst_45378__$1 = inst_45386;
var state_45435__$1 = (function (){var statearr_45477 = state_45435;
(statearr_45477[(13)] = inst_45378__$1);

(statearr_45477[(14)] = inst_45375__$1);

(statearr_45477[(17)] = inst_45385);

(statearr_45477[(15)] = inst_45376__$1);

(statearr_45477[(16)] = inst_45377__$1);

return statearr_45477;
})();
var statearr_45478_47474 = state_45435__$1;
(statearr_45478_47474[(2)] = null);

(statearr_45478_47474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (18))){
var inst_45404 = (state_45435[(2)]);
var state_45435__$1 = state_45435;
var statearr_45479_47475 = state_45435__$1;
(statearr_45479_47475[(2)] = inst_45404);

(statearr_45479_47475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45436 === (8))){
var inst_45378 = (state_45435[(13)]);
var inst_45377 = (state_45435[(16)]);
var inst_45380 = (inst_45378 < inst_45377);
var inst_45381 = inst_45380;
var state_45435__$1 = state_45435;
if(cljs.core.truth_(inst_45381)){
var statearr_45480_47476 = state_45435__$1;
(statearr_45480_47476[(1)] = (10));

} else {
var statearr_45481_47477 = state_45435__$1;
(statearr_45481_47477[(1)] = (11));

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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45483[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45483[(1)] = (1));

return statearr_45483;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45435){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45435);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45484){var ex__34228__auto__ = e45484;
var statearr_45485_47478 = state_45435;
(statearr_45485_47478[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45435[(4)]))){
var statearr_45486_47479 = state_45435;
(statearr_45486_47479[(1)] = cljs.core.first((state_45435[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47480 = state_45435;
state_45435 = G__47480;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_45487 = f__34442__auto__();
(statearr_45487[(6)] = c__34441__auto___47418);

return statearr_45487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
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
var G__45489 = arguments.length;
switch (G__45489) {
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
var G__45491 = arguments.length;
switch (G__45491) {
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
var G__45493 = arguments.length;
switch (G__45493) {
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
var c__34441__auto___47484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_45537){
var state_val_45538 = (state_45537[(1)]);
if((state_val_45538 === (7))){
var state_45537__$1 = state_45537;
var statearr_45539_47485 = state_45537__$1;
(statearr_45539_47485[(2)] = null);

(statearr_45539_47485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (1))){
var state_45537__$1 = state_45537;
var statearr_45540_47486 = state_45537__$1;
(statearr_45540_47486[(2)] = null);

(statearr_45540_47486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (4))){
var inst_45498 = (state_45537[(7)]);
var inst_45497 = (state_45537[(8)]);
var inst_45500 = (inst_45498 < inst_45497);
var state_45537__$1 = state_45537;
if(cljs.core.truth_(inst_45500)){
var statearr_45541_47487 = state_45537__$1;
(statearr_45541_47487[(1)] = (6));

} else {
var statearr_45542_47488 = state_45537__$1;
(statearr_45542_47488[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (15))){
var inst_45523 = (state_45537[(9)]);
var inst_45528 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45523);
var state_45537__$1 = state_45537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45537__$1,(17),out,inst_45528);
} else {
if((state_val_45538 === (13))){
var inst_45523 = (state_45537[(9)]);
var inst_45523__$1 = (state_45537[(2)]);
var inst_45524 = cljs.core.some(cljs.core.nil_QMARK_,inst_45523__$1);
var state_45537__$1 = (function (){var statearr_45544 = state_45537;
(statearr_45544[(9)] = inst_45523__$1);

return statearr_45544;
})();
if(cljs.core.truth_(inst_45524)){
var statearr_45545_47490 = state_45537__$1;
(statearr_45545_47490[(1)] = (14));

} else {
var statearr_45546_47491 = state_45537__$1;
(statearr_45546_47491[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (6))){
var state_45537__$1 = state_45537;
var statearr_45547_47492 = state_45537__$1;
(statearr_45547_47492[(2)] = null);

(statearr_45547_47492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (17))){
var inst_45530 = (state_45537[(2)]);
var state_45537__$1 = (function (){var statearr_45549 = state_45537;
(statearr_45549[(10)] = inst_45530);

return statearr_45549;
})();
var statearr_45550_47493 = state_45537__$1;
(statearr_45550_47493[(2)] = null);

(statearr_45550_47493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (3))){
var inst_45535 = (state_45537[(2)]);
var state_45537__$1 = state_45537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45537__$1,inst_45535);
} else {
if((state_val_45538 === (12))){
var _ = (function (){var statearr_45551 = state_45537;
(statearr_45551[(4)] = cljs.core.rest((state_45537[(4)])));

return statearr_45551;
})();
var state_45537__$1 = state_45537;
var ex45548 = (state_45537__$1[(2)]);
var statearr_45552_47494 = state_45537__$1;
(statearr_45552_47494[(5)] = ex45548);


if((ex45548 instanceof Object)){
var statearr_45553_47498 = state_45537__$1;
(statearr_45553_47498[(1)] = (11));

(statearr_45553_47498[(5)] = null);

} else {
throw ex45548;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (2))){
var inst_45496 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45497 = cnt;
var inst_45498 = (0);
var state_45537__$1 = (function (){var statearr_45555 = state_45537;
(statearr_45555[(7)] = inst_45498);

(statearr_45555[(11)] = inst_45496);

(statearr_45555[(8)] = inst_45497);

return statearr_45555;
})();
var statearr_45556_47499 = state_45537__$1;
(statearr_45556_47499[(2)] = null);

(statearr_45556_47499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (11))){
var inst_45502 = (state_45537[(2)]);
var inst_45503 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45537__$1 = (function (){var statearr_45557 = state_45537;
(statearr_45557[(12)] = inst_45502);

return statearr_45557;
})();
var statearr_45558_47500 = state_45537__$1;
(statearr_45558_47500[(2)] = inst_45503);

(statearr_45558_47500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (9))){
var inst_45498 = (state_45537[(7)]);
var _ = (function (){var statearr_45559 = state_45537;
(statearr_45559[(4)] = cljs.core.cons((12),(state_45537[(4)])));

return statearr_45559;
})();
var inst_45509 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45498) : chs__$1.call(null,inst_45498));
var inst_45510 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45498) : done.call(null,inst_45498));
var inst_45511 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45509,inst_45510);
var ___$1 = (function (){var statearr_45560 = state_45537;
(statearr_45560[(4)] = cljs.core.rest((state_45537[(4)])));

return statearr_45560;
})();
var state_45537__$1 = state_45537;
var statearr_45561_47505 = state_45537__$1;
(statearr_45561_47505[(2)] = inst_45511);

(statearr_45561_47505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (5))){
var inst_45521 = (state_45537[(2)]);
var state_45537__$1 = (function (){var statearr_45562 = state_45537;
(statearr_45562[(13)] = inst_45521);

return statearr_45562;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45537__$1,(13),dchan);
} else {
if((state_val_45538 === (14))){
var inst_45526 = cljs.core.async.close_BANG_(out);
var state_45537__$1 = state_45537;
var statearr_45563_47506 = state_45537__$1;
(statearr_45563_47506[(2)] = inst_45526);

(statearr_45563_47506[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (16))){
var inst_45533 = (state_45537[(2)]);
var state_45537__$1 = state_45537;
var statearr_45565_47510 = state_45537__$1;
(statearr_45565_47510[(2)] = inst_45533);

(statearr_45565_47510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (10))){
var inst_45498 = (state_45537[(7)]);
var inst_45514 = (state_45537[(2)]);
var inst_45515 = (inst_45498 + (1));
var inst_45498__$1 = inst_45515;
var state_45537__$1 = (function (){var statearr_45566 = state_45537;
(statearr_45566[(14)] = inst_45514);

(statearr_45566[(7)] = inst_45498__$1);

return statearr_45566;
})();
var statearr_45567_47515 = state_45537__$1;
(statearr_45567_47515[(2)] = null);

(statearr_45567_47515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45538 === (8))){
var inst_45519 = (state_45537[(2)]);
var state_45537__$1 = state_45537;
var statearr_45568_47516 = state_45537__$1;
(statearr_45568_47516[(2)] = inst_45519);

(statearr_45568_47516[(1)] = (5));


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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45569[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45569[(1)] = (1));

return statearr_45569;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45537){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45537);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45570){var ex__34228__auto__ = e45570;
var statearr_45571_47522 = state_45537;
(statearr_45571_47522[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45537[(4)]))){
var statearr_45573_47523 = state_45537;
(statearr_45573_47523[(1)] = cljs.core.first((state_45537[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47524 = state_45537;
state_45537 = G__47524;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_45574 = f__34442__auto__();
(statearr_45574[(6)] = c__34441__auto___47484);

return statearr_45574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
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
var G__45577 = arguments.length;
switch (G__45577) {
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
var c__34441__auto___47529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_45610){
var state_val_45611 = (state_45610[(1)]);
if((state_val_45611 === (7))){
var inst_45590 = (state_45610[(7)]);
var inst_45589 = (state_45610[(8)]);
var inst_45589__$1 = (state_45610[(2)]);
var inst_45590__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45589__$1,(0),null);
var inst_45591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45589__$1,(1),null);
var inst_45592 = (inst_45590__$1 == null);
var state_45610__$1 = (function (){var statearr_45613 = state_45610;
(statearr_45613[(7)] = inst_45590__$1);

(statearr_45613[(9)] = inst_45591);

(statearr_45613[(8)] = inst_45589__$1);

return statearr_45613;
})();
if(cljs.core.truth_(inst_45592)){
var statearr_45614_47532 = state_45610__$1;
(statearr_45614_47532[(1)] = (8));

} else {
var statearr_45615_47533 = state_45610__$1;
(statearr_45615_47533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (1))){
var inst_45579 = cljs.core.vec(chs);
var inst_45580 = inst_45579;
var state_45610__$1 = (function (){var statearr_45616 = state_45610;
(statearr_45616[(10)] = inst_45580);

return statearr_45616;
})();
var statearr_45617_47540 = state_45610__$1;
(statearr_45617_47540[(2)] = null);

(statearr_45617_47540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (4))){
var inst_45580 = (state_45610[(10)]);
var state_45610__$1 = state_45610;
return cljs.core.async.ioc_alts_BANG_(state_45610__$1,(7),inst_45580);
} else {
if((state_val_45611 === (6))){
var inst_45606 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45618_47548 = state_45610__$1;
(statearr_45618_47548[(2)] = inst_45606);

(statearr_45618_47548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (3))){
var inst_45608 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45610__$1,inst_45608);
} else {
if((state_val_45611 === (2))){
var inst_45580 = (state_45610[(10)]);
var inst_45582 = cljs.core.count(inst_45580);
var inst_45583 = (inst_45582 > (0));
var state_45610__$1 = state_45610;
if(cljs.core.truth_(inst_45583)){
var statearr_45621_47549 = state_45610__$1;
(statearr_45621_47549[(1)] = (4));

} else {
var statearr_45622_47550 = state_45610__$1;
(statearr_45622_47550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (11))){
var inst_45580 = (state_45610[(10)]);
var inst_45599 = (state_45610[(2)]);
var tmp45620 = inst_45580;
var inst_45580__$1 = tmp45620;
var state_45610__$1 = (function (){var statearr_45623 = state_45610;
(statearr_45623[(10)] = inst_45580__$1);

(statearr_45623[(11)] = inst_45599);

return statearr_45623;
})();
var statearr_45624_47556 = state_45610__$1;
(statearr_45624_47556[(2)] = null);

(statearr_45624_47556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (9))){
var inst_45590 = (state_45610[(7)]);
var state_45610__$1 = state_45610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45610__$1,(11),out,inst_45590);
} else {
if((state_val_45611 === (5))){
var inst_45604 = cljs.core.async.close_BANG_(out);
var state_45610__$1 = state_45610;
var statearr_45625_47562 = state_45610__$1;
(statearr_45625_47562[(2)] = inst_45604);

(statearr_45625_47562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (10))){
var inst_45602 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45626_47568 = state_45610__$1;
(statearr_45626_47568[(2)] = inst_45602);

(statearr_45626_47568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (8))){
var inst_45580 = (state_45610[(10)]);
var inst_45590 = (state_45610[(7)]);
var inst_45591 = (state_45610[(9)]);
var inst_45589 = (state_45610[(8)]);
var inst_45594 = (function (){var cs = inst_45580;
var vec__45585 = inst_45589;
var v = inst_45590;
var c = inst_45591;
return (function (p1__45575_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45575_SHARP_);
});
})();
var inst_45595 = cljs.core.filterv(inst_45594,inst_45580);
var inst_45580__$1 = inst_45595;
var state_45610__$1 = (function (){var statearr_45628 = state_45610;
(statearr_45628[(10)] = inst_45580__$1);

return statearr_45628;
})();
var statearr_45629_47570 = state_45610__$1;
(statearr_45629_47570[(2)] = null);

(statearr_45629_47570[(1)] = (2));


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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45630 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45630[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45630[(1)] = (1));

return statearr_45630;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45610){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45610);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45631){var ex__34228__auto__ = e45631;
var statearr_45632_47574 = state_45610;
(statearr_45632_47574[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45610[(4)]))){
var statearr_45633_47575 = state_45610;
(statearr_45633_47575[(1)] = cljs.core.first((state_45610[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47576 = state_45610;
state_45610 = G__47576;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_45635 = f__34442__auto__();
(statearr_45635[(6)] = c__34441__auto___47529);

return statearr_45635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
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
var G__45637 = arguments.length;
switch (G__45637) {
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
var c__34441__auto___47589 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_45662){
var state_val_45663 = (state_45662[(1)]);
if((state_val_45663 === (7))){
var inst_45644 = (state_45662[(7)]);
var inst_45644__$1 = (state_45662[(2)]);
var inst_45645 = (inst_45644__$1 == null);
var inst_45646 = cljs.core.not(inst_45645);
var state_45662__$1 = (function (){var statearr_45665 = state_45662;
(statearr_45665[(7)] = inst_45644__$1);

return statearr_45665;
})();
if(inst_45646){
var statearr_45666_47597 = state_45662__$1;
(statearr_45666_47597[(1)] = (8));

} else {
var statearr_45667_47602 = state_45662__$1;
(statearr_45667_47602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45663 === (1))){
var inst_45639 = (0);
var state_45662__$1 = (function (){var statearr_45669 = state_45662;
(statearr_45669[(8)] = inst_45639);

return statearr_45669;
})();
var statearr_45670_47617 = state_45662__$1;
(statearr_45670_47617[(2)] = null);

(statearr_45670_47617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45663 === (4))){
var state_45662__$1 = state_45662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45662__$1,(7),ch);
} else {
if((state_val_45663 === (6))){
var inst_45657 = (state_45662[(2)]);
var state_45662__$1 = state_45662;
var statearr_45671_47629 = state_45662__$1;
(statearr_45671_47629[(2)] = inst_45657);

(statearr_45671_47629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45663 === (3))){
var inst_45659 = (state_45662[(2)]);
var inst_45660 = cljs.core.async.close_BANG_(out);
var state_45662__$1 = (function (){var statearr_45672 = state_45662;
(statearr_45672[(9)] = inst_45659);

return statearr_45672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45662__$1,inst_45660);
} else {
if((state_val_45663 === (2))){
var inst_45639 = (state_45662[(8)]);
var inst_45641 = (inst_45639 < n);
var state_45662__$1 = state_45662;
if(cljs.core.truth_(inst_45641)){
var statearr_45673_47674 = state_45662__$1;
(statearr_45673_47674[(1)] = (4));

} else {
var statearr_45674_47680 = state_45662__$1;
(statearr_45674_47680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45663 === (11))){
var inst_45639 = (state_45662[(8)]);
var inst_45649 = (state_45662[(2)]);
var inst_45650 = (inst_45639 + (1));
var inst_45639__$1 = inst_45650;
var state_45662__$1 = (function (){var statearr_45675 = state_45662;
(statearr_45675[(10)] = inst_45649);

(statearr_45675[(8)] = inst_45639__$1);

return statearr_45675;
})();
var statearr_45677_47712 = state_45662__$1;
(statearr_45677_47712[(2)] = null);

(statearr_45677_47712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45663 === (9))){
var state_45662__$1 = state_45662;
var statearr_45678_47717 = state_45662__$1;
(statearr_45678_47717[(2)] = null);

(statearr_45678_47717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45663 === (5))){
var state_45662__$1 = state_45662;
var statearr_45679_47725 = state_45662__$1;
(statearr_45679_47725[(2)] = null);

(statearr_45679_47725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45663 === (10))){
var inst_45654 = (state_45662[(2)]);
var state_45662__$1 = state_45662;
var statearr_45680_47726 = state_45662__$1;
(statearr_45680_47726[(2)] = inst_45654);

(statearr_45680_47726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45663 === (8))){
var inst_45644 = (state_45662[(7)]);
var state_45662__$1 = state_45662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45662__$1,(11),out,inst_45644);
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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45681[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45681[(1)] = (1));

return statearr_45681;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45662){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45662);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45682){var ex__34228__auto__ = e45682;
var statearr_45683_47730 = state_45662;
(statearr_45683_47730[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45662[(4)]))){
var statearr_45685_47731 = state_45662;
(statearr_45685_47731[(1)] = cljs.core.first((state_45662[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47732 = state_45662;
state_45662 = G__47732;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_45686 = f__34442__auto__();
(statearr_45686[(6)] = c__34441__auto___47589);

return statearr_45686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45688 = (function (f,ch,meta45689){
this.f = f;
this.ch = ch;
this.meta45689 = meta45689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45690,meta45689__$1){
var self__ = this;
var _45690__$1 = this;
return (new cljs.core.async.t_cljs$core$async45688(self__.f,self__.ch,meta45689__$1));
}));

(cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45690){
var self__ = this;
var _45690__$1 = this;
return self__.meta45689;
}));

(cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45693 = (function (f,ch,meta45689,_,fn1,meta45694){
this.f = f;
this.ch = ch;
this.meta45689 = meta45689;
this._ = _;
this.fn1 = fn1;
this.meta45694 = meta45694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45695,meta45694__$1){
var self__ = this;
var _45695__$1 = this;
return (new cljs.core.async.t_cljs$core$async45693(self__.f,self__.ch,self__.meta45689,self__._,self__.fn1,meta45694__$1));
}));

(cljs.core.async.t_cljs$core$async45693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45695){
var self__ = this;
var _45695__$1 = this;
return self__.meta45694;
}));

(cljs.core.async.t_cljs$core$async45693.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45693.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__45687_SHARP_){
var G__45697 = (((p1__45687_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45687_SHARP_) : self__.f.call(null,p1__45687_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45697) : f1.call(null,G__45697));
});
}));

(cljs.core.async.t_cljs$core$async45693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45689","meta45689",-1670233734,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45688","cljs.core.async/t_cljs$core$async45688",1014585145,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45694","meta45694",-91261908,null)], null);
}));

(cljs.core.async.t_cljs$core$async45693.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45693");

(cljs.core.async.t_cljs$core$async45693.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45693");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45693.
 */
cljs.core.async.__GT_t_cljs$core$async45693 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45693(f__$1,ch__$1,meta45689__$1,___$2,fn1__$1,meta45694){
return (new cljs.core.async.t_cljs$core$async45693(f__$1,ch__$1,meta45689__$1,___$2,fn1__$1,meta45694));
});

}

return (new cljs.core.async.t_cljs$core$async45693(self__.f,self__.ch,self__.meta45689,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45700 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45700) : self__.f.call(null,G__45700));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45688.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45689","meta45689",-1670233734,null)], null);
}));

(cljs.core.async.t_cljs$core$async45688.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45688");

(cljs.core.async.t_cljs$core$async45688.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45688");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45688.
 */
cljs.core.async.__GT_t_cljs$core$async45688 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45688(f__$1,ch__$1,meta45689){
return (new cljs.core.async.t_cljs$core$async45688(f__$1,ch__$1,meta45689));
});

}

return (new cljs.core.async.t_cljs$core$async45688(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45703 = (function (f,ch,meta45704){
this.f = f;
this.ch = ch;
this.meta45704 = meta45704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45705,meta45704__$1){
var self__ = this;
var _45705__$1 = this;
return (new cljs.core.async.t_cljs$core$async45703(self__.f,self__.ch,meta45704__$1));
}));

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45705){
var self__ = this;
var _45705__$1 = this;
return self__.meta45704;
}));

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async45703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45704","meta45704",689779425,null)], null);
}));

(cljs.core.async.t_cljs$core$async45703.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45703");

(cljs.core.async.t_cljs$core$async45703.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45703");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45703.
 */
cljs.core.async.__GT_t_cljs$core$async45703 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45703(f__$1,ch__$1,meta45704){
return (new cljs.core.async.t_cljs$core$async45703(f__$1,ch__$1,meta45704));
});

}

return (new cljs.core.async.t_cljs$core$async45703(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45706 = (function (p,ch,meta45707){
this.p = p;
this.ch = ch;
this.meta45707 = meta45707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45708,meta45707__$1){
var self__ = this;
var _45708__$1 = this;
return (new cljs.core.async.t_cljs$core$async45706(self__.p,self__.ch,meta45707__$1));
}));

(cljs.core.async.t_cljs$core$async45706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45708){
var self__ = this;
var _45708__$1 = this;
return self__.meta45707;
}));

(cljs.core.async.t_cljs$core$async45706.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45706.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45706.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async45706.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45706.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45706.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45706.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45707","meta45707",508277227,null)], null);
}));

(cljs.core.async.t_cljs$core$async45706.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45706");

(cljs.core.async.t_cljs$core$async45706.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async45706");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45706.
 */
cljs.core.async.__GT_t_cljs$core$async45706 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45706(p__$1,ch__$1,meta45707){
return (new cljs.core.async.t_cljs$core$async45706(p__$1,ch__$1,meta45707));
});

}

return (new cljs.core.async.t_cljs$core$async45706(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45712 = arguments.length;
switch (G__45712) {
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
var c__34441__auto___47752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_45742){
var state_val_45743 = (state_45742[(1)]);
if((state_val_45743 === (7))){
var inst_45735 = (state_45742[(2)]);
var state_45742__$1 = state_45742;
var statearr_45744_47753 = state_45742__$1;
(statearr_45744_47753[(2)] = inst_45735);

(statearr_45744_47753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45743 === (1))){
var state_45742__$1 = state_45742;
var statearr_45745_47754 = state_45742__$1;
(statearr_45745_47754[(2)] = null);

(statearr_45745_47754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45743 === (4))){
var inst_45721 = (state_45742[(7)]);
var inst_45721__$1 = (state_45742[(2)]);
var inst_45722 = (inst_45721__$1 == null);
var state_45742__$1 = (function (){var statearr_45747 = state_45742;
(statearr_45747[(7)] = inst_45721__$1);

return statearr_45747;
})();
if(cljs.core.truth_(inst_45722)){
var statearr_45750_47755 = state_45742__$1;
(statearr_45750_47755[(1)] = (5));

} else {
var statearr_45752_47756 = state_45742__$1;
(statearr_45752_47756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45743 === (6))){
var inst_45721 = (state_45742[(7)]);
var inst_45726 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45721) : p.call(null,inst_45721));
var state_45742__$1 = state_45742;
if(cljs.core.truth_(inst_45726)){
var statearr_45754_47757 = state_45742__$1;
(statearr_45754_47757[(1)] = (8));

} else {
var statearr_45755_47758 = state_45742__$1;
(statearr_45755_47758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45743 === (3))){
var inst_45737 = (state_45742[(2)]);
var state_45742__$1 = state_45742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45742__$1,inst_45737);
} else {
if((state_val_45743 === (2))){
var state_45742__$1 = state_45742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45742__$1,(4),ch);
} else {
if((state_val_45743 === (11))){
var inst_45729 = (state_45742[(2)]);
var state_45742__$1 = state_45742;
var statearr_45759_47759 = state_45742__$1;
(statearr_45759_47759[(2)] = inst_45729);

(statearr_45759_47759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45743 === (9))){
var state_45742__$1 = state_45742;
var statearr_45761_47760 = state_45742__$1;
(statearr_45761_47760[(2)] = null);

(statearr_45761_47760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45743 === (5))){
var inst_45724 = cljs.core.async.close_BANG_(out);
var state_45742__$1 = state_45742;
var statearr_45765_47761 = state_45742__$1;
(statearr_45765_47761[(2)] = inst_45724);

(statearr_45765_47761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45743 === (10))){
var inst_45732 = (state_45742[(2)]);
var state_45742__$1 = (function (){var statearr_45766 = state_45742;
(statearr_45766[(8)] = inst_45732);

return statearr_45766;
})();
var statearr_45768_47762 = state_45742__$1;
(statearr_45768_47762[(2)] = null);

(statearr_45768_47762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45743 === (8))){
var inst_45721 = (state_45742[(7)]);
var state_45742__$1 = state_45742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45742__$1,(11),out,inst_45721);
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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_45773 = [null,null,null,null,null,null,null,null,null];
(statearr_45773[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_45773[(1)] = (1));

return statearr_45773;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_45742){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45742);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45774){var ex__34228__auto__ = e45774;
var statearr_45775_47763 = state_45742;
(statearr_45775_47763[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45742[(4)]))){
var statearr_45778_47764 = state_45742;
(statearr_45778_47764[(1)] = cljs.core.first((state_45742[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47765 = state_45742;
state_45742 = G__47765;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_45742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_45742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_45781 = f__34442__auto__();
(statearr_45781[(6)] = c__34441__auto___47752);

return statearr_45781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45787 = arguments.length;
switch (G__45787) {
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
var c__34441__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_45869){
var state_val_45870 = (state_45869[(1)]);
if((state_val_45870 === (7))){
var inst_45863 = (state_45869[(2)]);
var state_45869__$1 = state_45869;
var statearr_45877_47767 = state_45869__$1;
(statearr_45877_47767[(2)] = inst_45863);

(statearr_45877_47767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (20))){
var inst_45830 = (state_45869[(7)]);
var inst_45842 = (state_45869[(2)]);
var inst_45843 = cljs.core.next(inst_45830);
var inst_45813 = inst_45843;
var inst_45814 = null;
var inst_45815 = (0);
var inst_45816 = (0);
var state_45869__$1 = (function (){var statearr_45880 = state_45869;
(statearr_45880[(8)] = inst_45842);

(statearr_45880[(9)] = inst_45815);

(statearr_45880[(10)] = inst_45816);

(statearr_45880[(11)] = inst_45813);

(statearr_45880[(12)] = inst_45814);

return statearr_45880;
})();
var statearr_45881_47770 = state_45869__$1;
(statearr_45881_47770[(2)] = null);

(statearr_45881_47770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (1))){
var state_45869__$1 = state_45869;
var statearr_45885_47771 = state_45869__$1;
(statearr_45885_47771[(2)] = null);

(statearr_45885_47771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (4))){
var inst_45801 = (state_45869[(13)]);
var inst_45801__$1 = (state_45869[(2)]);
var inst_45802 = (inst_45801__$1 == null);
var state_45869__$1 = (function (){var statearr_45887 = state_45869;
(statearr_45887[(13)] = inst_45801__$1);

return statearr_45887;
})();
if(cljs.core.truth_(inst_45802)){
var statearr_45888_47772 = state_45869__$1;
(statearr_45888_47772[(1)] = (5));

} else {
var statearr_45889_47774 = state_45869__$1;
(statearr_45889_47774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (15))){
var state_45869__$1 = state_45869;
var statearr_45896_47775 = state_45869__$1;
(statearr_45896_47775[(2)] = null);

(statearr_45896_47775[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (21))){
var state_45869__$1 = state_45869;
var statearr_45898_47776 = state_45869__$1;
(statearr_45898_47776[(2)] = null);

(statearr_45898_47776[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (13))){
var inst_45815 = (state_45869[(9)]);
var inst_45816 = (state_45869[(10)]);
var inst_45813 = (state_45869[(11)]);
var inst_45814 = (state_45869[(12)]);
var inst_45825 = (state_45869[(2)]);
var inst_45826 = (inst_45816 + (1));
var tmp45893 = inst_45815;
var tmp45894 = inst_45813;
var tmp45895 = inst_45814;
var inst_45813__$1 = tmp45894;
var inst_45814__$1 = tmp45895;
var inst_45815__$1 = tmp45893;
var inst_45816__$1 = inst_45826;
var state_45869__$1 = (function (){var statearr_45902 = state_45869;
(statearr_45902[(14)] = inst_45825);

(statearr_45902[(9)] = inst_45815__$1);

(statearr_45902[(10)] = inst_45816__$1);

(statearr_45902[(11)] = inst_45813__$1);

(statearr_45902[(12)] = inst_45814__$1);

return statearr_45902;
})();
var statearr_45904_47777 = state_45869__$1;
(statearr_45904_47777[(2)] = null);

(statearr_45904_47777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (22))){
var state_45869__$1 = state_45869;
var statearr_45907_47780 = state_45869__$1;
(statearr_45907_47780[(2)] = null);

(statearr_45907_47780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (6))){
var inst_45801 = (state_45869[(13)]);
var inst_45811 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45801) : f.call(null,inst_45801));
var inst_45812 = cljs.core.seq(inst_45811);
var inst_45813 = inst_45812;
var inst_45814 = null;
var inst_45815 = (0);
var inst_45816 = (0);
var state_45869__$1 = (function (){var statearr_45910 = state_45869;
(statearr_45910[(9)] = inst_45815);

(statearr_45910[(10)] = inst_45816);

(statearr_45910[(11)] = inst_45813);

(statearr_45910[(12)] = inst_45814);

return statearr_45910;
})();
var statearr_45911_47782 = state_45869__$1;
(statearr_45911_47782[(2)] = null);

(statearr_45911_47782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (17))){
var inst_45830 = (state_45869[(7)]);
var inst_45834 = cljs.core.chunk_first(inst_45830);
var inst_45836 = cljs.core.chunk_rest(inst_45830);
var inst_45837 = cljs.core.count(inst_45834);
var inst_45813 = inst_45836;
var inst_45814 = inst_45834;
var inst_45815 = inst_45837;
var inst_45816 = (0);
var state_45869__$1 = (function (){var statearr_45915 = state_45869;
(statearr_45915[(9)] = inst_45815);

(statearr_45915[(10)] = inst_45816);

(statearr_45915[(11)] = inst_45813);

(statearr_45915[(12)] = inst_45814);

return statearr_45915;
})();
var statearr_45917_47788 = state_45869__$1;
(statearr_45917_47788[(2)] = null);

(statearr_45917_47788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (3))){
var inst_45865 = (state_45869[(2)]);
var state_45869__$1 = state_45869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45869__$1,inst_45865);
} else {
if((state_val_45870 === (12))){
var inst_45851 = (state_45869[(2)]);
var state_45869__$1 = state_45869;
var statearr_45921_47789 = state_45869__$1;
(statearr_45921_47789[(2)] = inst_45851);

(statearr_45921_47789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (2))){
var state_45869__$1 = state_45869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45869__$1,(4),in$);
} else {
if((state_val_45870 === (23))){
var inst_45861 = (state_45869[(2)]);
var state_45869__$1 = state_45869;
var statearr_45926_47791 = state_45869__$1;
(statearr_45926_47791[(2)] = inst_45861);

(statearr_45926_47791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (19))){
var inst_45846 = (state_45869[(2)]);
var state_45869__$1 = state_45869;
var statearr_45928_47796 = state_45869__$1;
(statearr_45928_47796[(2)] = inst_45846);

(statearr_45928_47796[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (11))){
var inst_45830 = (state_45869[(7)]);
var inst_45813 = (state_45869[(11)]);
var inst_45830__$1 = cljs.core.seq(inst_45813);
var state_45869__$1 = (function (){var statearr_45932 = state_45869;
(statearr_45932[(7)] = inst_45830__$1);

return statearr_45932;
})();
if(inst_45830__$1){
var statearr_45933_47797 = state_45869__$1;
(statearr_45933_47797[(1)] = (14));

} else {
var statearr_45934_47798 = state_45869__$1;
(statearr_45934_47798[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (9))){
var inst_45853 = (state_45869[(2)]);
var inst_45854 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45869__$1 = (function (){var statearr_45937 = state_45869;
(statearr_45937[(15)] = inst_45853);

return statearr_45937;
})();
if(cljs.core.truth_(inst_45854)){
var statearr_45940_47799 = state_45869__$1;
(statearr_45940_47799[(1)] = (21));

} else {
var statearr_45941_47800 = state_45869__$1;
(statearr_45941_47800[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (5))){
var inst_45804 = cljs.core.async.close_BANG_(out);
var state_45869__$1 = state_45869;
var statearr_45943_47801 = state_45869__$1;
(statearr_45943_47801[(2)] = inst_45804);

(statearr_45943_47801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (14))){
var inst_45830 = (state_45869[(7)]);
var inst_45832 = cljs.core.chunked_seq_QMARK_(inst_45830);
var state_45869__$1 = state_45869;
if(inst_45832){
var statearr_45948_47802 = state_45869__$1;
(statearr_45948_47802[(1)] = (17));

} else {
var statearr_45949_47803 = state_45869__$1;
(statearr_45949_47803[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (16))){
var inst_45849 = (state_45869[(2)]);
var state_45869__$1 = state_45869;
var statearr_45951_47804 = state_45869__$1;
(statearr_45951_47804[(2)] = inst_45849);

(statearr_45951_47804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45870 === (10))){
var inst_45816 = (state_45869[(10)]);
var inst_45814 = (state_45869[(12)]);
var inst_45821 = cljs.core._nth(inst_45814,inst_45816);
var state_45869__$1 = state_45869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45869__$1,(13),out,inst_45821);
} else {
if((state_val_45870 === (18))){
var inst_45830 = (state_45869[(7)]);
var inst_45840 = cljs.core.first(inst_45830);
var state_45869__$1 = state_45869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45869__$1,(20),out,inst_45840);
} else {
if((state_val_45870 === (8))){
var inst_45815 = (state_45869[(9)]);
var inst_45816 = (state_45869[(10)]);
var inst_45818 = (inst_45816 < inst_45815);
var inst_45819 = inst_45818;
var state_45869__$1 = state_45869;
if(cljs.core.truth_(inst_45819)){
var statearr_45957_47805 = state_45869__$1;
(statearr_45957_47805[(1)] = (10));

} else {
var statearr_45958_47806 = state_45869__$1;
(statearr_45958_47806[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____0 = (function (){
var statearr_45961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45961[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__);

(statearr_45961[(1)] = (1));

return statearr_45961;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____1 = (function (state_45869){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_45869);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e45964){var ex__34228__auto__ = e45964;
var statearr_45965_47807 = state_45869;
(statearr_45965_47807[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_45869[(4)]))){
var statearr_45967_47808 = state_45869;
(statearr_45967_47808[(1)] = cljs.core.first((state_45869[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47809 = state_45869;
state_45869 = G__47809;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__ = function(state_45869){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____1.call(this,state_45869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34225__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_45971 = f__34442__auto__();
(statearr_45971[(6)] = c__34441__auto__);

return statearr_45971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));

return c__34441__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45978 = arguments.length;
switch (G__45978) {
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
var G__45992 = arguments.length;
switch (G__45992) {
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
var G__46004 = arguments.length;
switch (G__46004) {
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
var c__34441__auto___47817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_46038){
var state_val_46039 = (state_46038[(1)]);
if((state_val_46039 === (7))){
var inst_46031 = (state_46038[(2)]);
var state_46038__$1 = state_46038;
var statearr_46045_47819 = state_46038__$1;
(statearr_46045_47819[(2)] = inst_46031);

(statearr_46045_47819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (1))){
var inst_46012 = null;
var state_46038__$1 = (function (){var statearr_46046 = state_46038;
(statearr_46046[(7)] = inst_46012);

return statearr_46046;
})();
var statearr_46048_47820 = state_46038__$1;
(statearr_46048_47820[(2)] = null);

(statearr_46048_47820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (4))){
var inst_46015 = (state_46038[(8)]);
var inst_46015__$1 = (state_46038[(2)]);
var inst_46016 = (inst_46015__$1 == null);
var inst_46017 = cljs.core.not(inst_46016);
var state_46038__$1 = (function (){var statearr_46052 = state_46038;
(statearr_46052[(8)] = inst_46015__$1);

return statearr_46052;
})();
if(inst_46017){
var statearr_46053_47821 = state_46038__$1;
(statearr_46053_47821[(1)] = (5));

} else {
var statearr_46054_47822 = state_46038__$1;
(statearr_46054_47822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (6))){
var state_46038__$1 = state_46038;
var statearr_46056_47823 = state_46038__$1;
(statearr_46056_47823[(2)] = null);

(statearr_46056_47823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (3))){
var inst_46033 = (state_46038[(2)]);
var inst_46034 = cljs.core.async.close_BANG_(out);
var state_46038__$1 = (function (){var statearr_46060 = state_46038;
(statearr_46060[(9)] = inst_46033);

return statearr_46060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46038__$1,inst_46034);
} else {
if((state_val_46039 === (2))){
var state_46038__$1 = state_46038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46038__$1,(4),ch);
} else {
if((state_val_46039 === (11))){
var inst_46015 = (state_46038[(8)]);
var inst_46025 = (state_46038[(2)]);
var inst_46012 = inst_46015;
var state_46038__$1 = (function (){var statearr_46062 = state_46038;
(statearr_46062[(10)] = inst_46025);

(statearr_46062[(7)] = inst_46012);

return statearr_46062;
})();
var statearr_46066_47825 = state_46038__$1;
(statearr_46066_47825[(2)] = null);

(statearr_46066_47825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (9))){
var inst_46015 = (state_46038[(8)]);
var state_46038__$1 = state_46038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46038__$1,(11),out,inst_46015);
} else {
if((state_val_46039 === (5))){
var inst_46015 = (state_46038[(8)]);
var inst_46012 = (state_46038[(7)]);
var inst_46020 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46015,inst_46012);
var state_46038__$1 = state_46038;
if(inst_46020){
var statearr_46071_47826 = state_46038__$1;
(statearr_46071_47826[(1)] = (8));

} else {
var statearr_46073_47827 = state_46038__$1;
(statearr_46073_47827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (10))){
var inst_46028 = (state_46038[(2)]);
var state_46038__$1 = state_46038;
var statearr_46074_47828 = state_46038__$1;
(statearr_46074_47828[(2)] = inst_46028);

(statearr_46074_47828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (8))){
var inst_46012 = (state_46038[(7)]);
var tmp46068 = inst_46012;
var inst_46012__$1 = tmp46068;
var state_46038__$1 = (function (){var statearr_46076 = state_46038;
(statearr_46076[(7)] = inst_46012__$1);

return statearr_46076;
})();
var statearr_46080_47829 = state_46038__$1;
(statearr_46080_47829[(2)] = null);

(statearr_46080_47829[(1)] = (2));


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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_46084 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46084[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_46084[(1)] = (1));

return statearr_46084;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_46038){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_46038);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e46088){var ex__34228__auto__ = e46088;
var statearr_46089_47830 = state_46038;
(statearr_46089_47830[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_46038[(4)]))){
var statearr_46090_47831 = state_46038;
(statearr_46090_47831[(1)] = cljs.core.first((state_46038[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47832 = state_46038;
state_46038 = G__47832;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_46038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_46038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_46094 = f__34442__auto__();
(statearr_46094[(6)] = c__34441__auto___47817);

return statearr_46094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46096 = arguments.length;
switch (G__46096) {
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
var c__34441__auto___47834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_46134){
var state_val_46135 = (state_46134[(1)]);
if((state_val_46135 === (7))){
var inst_46130 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46136_47835 = state_46134__$1;
(statearr_46136_47835[(2)] = inst_46130);

(statearr_46136_47835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (1))){
var inst_46097 = (new Array(n));
var inst_46098 = inst_46097;
var inst_46099 = (0);
var state_46134__$1 = (function (){var statearr_46137 = state_46134;
(statearr_46137[(7)] = inst_46098);

(statearr_46137[(8)] = inst_46099);

return statearr_46137;
})();
var statearr_46138_47836 = state_46134__$1;
(statearr_46138_47836[(2)] = null);

(statearr_46138_47836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (4))){
var inst_46102 = (state_46134[(9)]);
var inst_46102__$1 = (state_46134[(2)]);
var inst_46103 = (inst_46102__$1 == null);
var inst_46104 = cljs.core.not(inst_46103);
var state_46134__$1 = (function (){var statearr_46139 = state_46134;
(statearr_46139[(9)] = inst_46102__$1);

return statearr_46139;
})();
if(inst_46104){
var statearr_46140_47837 = state_46134__$1;
(statearr_46140_47837[(1)] = (5));

} else {
var statearr_46141_47838 = state_46134__$1;
(statearr_46141_47838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (15))){
var inst_46124 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46142_47839 = state_46134__$1;
(statearr_46142_47839[(2)] = inst_46124);

(statearr_46142_47839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (13))){
var state_46134__$1 = state_46134;
var statearr_46143_47840 = state_46134__$1;
(statearr_46143_47840[(2)] = null);

(statearr_46143_47840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (6))){
var inst_46099 = (state_46134[(8)]);
var inst_46120 = (inst_46099 > (0));
var state_46134__$1 = state_46134;
if(cljs.core.truth_(inst_46120)){
var statearr_46144_47841 = state_46134__$1;
(statearr_46144_47841[(1)] = (12));

} else {
var statearr_46145_47842 = state_46134__$1;
(statearr_46145_47842[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (3))){
var inst_46132 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46134__$1,inst_46132);
} else {
if((state_val_46135 === (12))){
var inst_46098 = (state_46134[(7)]);
var inst_46122 = cljs.core.vec(inst_46098);
var state_46134__$1 = state_46134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46134__$1,(15),out,inst_46122);
} else {
if((state_val_46135 === (2))){
var state_46134__$1 = state_46134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46134__$1,(4),ch);
} else {
if((state_val_46135 === (11))){
var inst_46114 = (state_46134[(2)]);
var inst_46115 = (new Array(n));
var inst_46098 = inst_46115;
var inst_46099 = (0);
var state_46134__$1 = (function (){var statearr_46146 = state_46134;
(statearr_46146[(7)] = inst_46098);

(statearr_46146[(10)] = inst_46114);

(statearr_46146[(8)] = inst_46099);

return statearr_46146;
})();
var statearr_46147_47843 = state_46134__$1;
(statearr_46147_47843[(2)] = null);

(statearr_46147_47843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (9))){
var inst_46098 = (state_46134[(7)]);
var inst_46112 = cljs.core.vec(inst_46098);
var state_46134__$1 = state_46134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46134__$1,(11),out,inst_46112);
} else {
if((state_val_46135 === (5))){
var inst_46098 = (state_46134[(7)]);
var inst_46107 = (state_46134[(11)]);
var inst_46102 = (state_46134[(9)]);
var inst_46099 = (state_46134[(8)]);
var inst_46106 = (inst_46098[inst_46099] = inst_46102);
var inst_46107__$1 = (inst_46099 + (1));
var inst_46108 = (inst_46107__$1 < n);
var state_46134__$1 = (function (){var statearr_46148 = state_46134;
(statearr_46148[(11)] = inst_46107__$1);

(statearr_46148[(12)] = inst_46106);

return statearr_46148;
})();
if(cljs.core.truth_(inst_46108)){
var statearr_46149_47844 = state_46134__$1;
(statearr_46149_47844[(1)] = (8));

} else {
var statearr_46150_47845 = state_46134__$1;
(statearr_46150_47845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (14))){
var inst_46127 = (state_46134[(2)]);
var inst_46128 = cljs.core.async.close_BANG_(out);
var state_46134__$1 = (function (){var statearr_46152 = state_46134;
(statearr_46152[(13)] = inst_46127);

return statearr_46152;
})();
var statearr_46153_47846 = state_46134__$1;
(statearr_46153_47846[(2)] = inst_46128);

(statearr_46153_47846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (10))){
var inst_46118 = (state_46134[(2)]);
var state_46134__$1 = state_46134;
var statearr_46154_47847 = state_46134__$1;
(statearr_46154_47847[(2)] = inst_46118);

(statearr_46154_47847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46135 === (8))){
var inst_46098 = (state_46134[(7)]);
var inst_46107 = (state_46134[(11)]);
var tmp46151 = inst_46098;
var inst_46098__$1 = tmp46151;
var inst_46099 = inst_46107;
var state_46134__$1 = (function (){var statearr_46155 = state_46134;
(statearr_46155[(7)] = inst_46098__$1);

(statearr_46155[(8)] = inst_46099);

return statearr_46155;
})();
var statearr_46156_47848 = state_46134__$1;
(statearr_46156_47848[(2)] = null);

(statearr_46156_47848[(1)] = (2));


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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_46157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46157[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_46157[(1)] = (1));

return statearr_46157;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_46134){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_46134);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e46158){var ex__34228__auto__ = e46158;
var statearr_46159_47853 = state_46134;
(statearr_46159_47853[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_46134[(4)]))){
var statearr_46160_47854 = state_46134;
(statearr_46160_47854[(1)] = cljs.core.first((state_46134[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47856 = state_46134;
state_46134 = G__47856;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_46134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_46134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_46161 = f__34442__auto__();
(statearr_46161[(6)] = c__34441__auto___47834);

return statearr_46161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46163 = arguments.length;
switch (G__46163) {
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
var c__34441__auto___47858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34442__auto__ = (function (){var switch__34224__auto__ = (function (state_46208){
var state_val_46209 = (state_46208[(1)]);
if((state_val_46209 === (7))){
var inst_46204 = (state_46208[(2)]);
var state_46208__$1 = state_46208;
var statearr_46210_47860 = state_46208__$1;
(statearr_46210_47860[(2)] = inst_46204);

(statearr_46210_47860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (1))){
var inst_46164 = [];
var inst_46165 = inst_46164;
var inst_46166 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46208__$1 = (function (){var statearr_46212 = state_46208;
(statearr_46212[(7)] = inst_46165);

(statearr_46212[(8)] = inst_46166);

return statearr_46212;
})();
var statearr_46214_47861 = state_46208__$1;
(statearr_46214_47861[(2)] = null);

(statearr_46214_47861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (4))){
var inst_46169 = (state_46208[(9)]);
var inst_46169__$1 = (state_46208[(2)]);
var inst_46170 = (inst_46169__$1 == null);
var inst_46171 = cljs.core.not(inst_46170);
var state_46208__$1 = (function (){var statearr_46215 = state_46208;
(statearr_46215[(9)] = inst_46169__$1);

return statearr_46215;
})();
if(inst_46171){
var statearr_46216_47862 = state_46208__$1;
(statearr_46216_47862[(1)] = (5));

} else {
var statearr_46217_47863 = state_46208__$1;
(statearr_46217_47863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (15))){
var inst_46165 = (state_46208[(7)]);
var inst_46196 = cljs.core.vec(inst_46165);
var state_46208__$1 = state_46208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46208__$1,(18),out,inst_46196);
} else {
if((state_val_46209 === (13))){
var inst_46191 = (state_46208[(2)]);
var state_46208__$1 = state_46208;
var statearr_46222_47865 = state_46208__$1;
(statearr_46222_47865[(2)] = inst_46191);

(statearr_46222_47865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (6))){
var inst_46165 = (state_46208[(7)]);
var inst_46193 = inst_46165.length;
var inst_46194 = (inst_46193 > (0));
var state_46208__$1 = state_46208;
if(cljs.core.truth_(inst_46194)){
var statearr_46228_47866 = state_46208__$1;
(statearr_46228_47866[(1)] = (15));

} else {
var statearr_46229_47867 = state_46208__$1;
(statearr_46229_47867[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (17))){
var inst_46201 = (state_46208[(2)]);
var inst_46202 = cljs.core.async.close_BANG_(out);
var state_46208__$1 = (function (){var statearr_46238 = state_46208;
(statearr_46238[(10)] = inst_46201);

return statearr_46238;
})();
var statearr_46239_47868 = state_46208__$1;
(statearr_46239_47868[(2)] = inst_46202);

(statearr_46239_47868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (3))){
var inst_46206 = (state_46208[(2)]);
var state_46208__$1 = state_46208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46208__$1,inst_46206);
} else {
if((state_val_46209 === (12))){
var inst_46165 = (state_46208[(7)]);
var inst_46184 = cljs.core.vec(inst_46165);
var state_46208__$1 = state_46208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46208__$1,(14),out,inst_46184);
} else {
if((state_val_46209 === (2))){
var state_46208__$1 = state_46208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46208__$1,(4),ch);
} else {
if((state_val_46209 === (11))){
var inst_46169 = (state_46208[(9)]);
var inst_46165 = (state_46208[(7)]);
var inst_46173 = (state_46208[(11)]);
var inst_46181 = inst_46165.push(inst_46169);
var tmp46248 = inst_46165;
var inst_46165__$1 = tmp46248;
var inst_46166 = inst_46173;
var state_46208__$1 = (function (){var statearr_46254 = state_46208;
(statearr_46254[(7)] = inst_46165__$1);

(statearr_46254[(12)] = inst_46181);

(statearr_46254[(8)] = inst_46166);

return statearr_46254;
})();
var statearr_46262_47870 = state_46208__$1;
(statearr_46262_47870[(2)] = null);

(statearr_46262_47870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (9))){
var inst_46166 = (state_46208[(8)]);
var inst_46177 = cljs.core.keyword_identical_QMARK_(inst_46166,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46208__$1 = state_46208;
var statearr_46268_47871 = state_46208__$1;
(statearr_46268_47871[(2)] = inst_46177);

(statearr_46268_47871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (5))){
var inst_46169 = (state_46208[(9)]);
var inst_46174 = (state_46208[(13)]);
var inst_46166 = (state_46208[(8)]);
var inst_46173 = (state_46208[(11)]);
var inst_46173__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46169) : f.call(null,inst_46169));
var inst_46174__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46173__$1,inst_46166);
var state_46208__$1 = (function (){var statearr_46277 = state_46208;
(statearr_46277[(13)] = inst_46174__$1);

(statearr_46277[(11)] = inst_46173__$1);

return statearr_46277;
})();
if(inst_46174__$1){
var statearr_46278_47876 = state_46208__$1;
(statearr_46278_47876[(1)] = (8));

} else {
var statearr_46280_47877 = state_46208__$1;
(statearr_46280_47877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (14))){
var inst_46169 = (state_46208[(9)]);
var inst_46173 = (state_46208[(11)]);
var inst_46186 = (state_46208[(2)]);
var inst_46187 = [];
var inst_46188 = inst_46187.push(inst_46169);
var inst_46165 = inst_46187;
var inst_46166 = inst_46173;
var state_46208__$1 = (function (){var statearr_46289 = state_46208;
(statearr_46289[(14)] = inst_46186);

(statearr_46289[(7)] = inst_46165);

(statearr_46289[(8)] = inst_46166);

(statearr_46289[(15)] = inst_46188);

return statearr_46289;
})();
var statearr_46290_47878 = state_46208__$1;
(statearr_46290_47878[(2)] = null);

(statearr_46290_47878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (16))){
var state_46208__$1 = state_46208;
var statearr_46295_47879 = state_46208__$1;
(statearr_46295_47879[(2)] = null);

(statearr_46295_47879[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (10))){
var inst_46179 = (state_46208[(2)]);
var state_46208__$1 = state_46208;
if(cljs.core.truth_(inst_46179)){
var statearr_46296_47880 = state_46208__$1;
(statearr_46296_47880[(1)] = (11));

} else {
var statearr_46300_47881 = state_46208__$1;
(statearr_46300_47881[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (18))){
var inst_46198 = (state_46208[(2)]);
var state_46208__$1 = state_46208;
var statearr_46302_47882 = state_46208__$1;
(statearr_46302_47882[(2)] = inst_46198);

(statearr_46302_47882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46209 === (8))){
var inst_46174 = (state_46208[(13)]);
var state_46208__$1 = state_46208;
var statearr_46303_47883 = state_46208__$1;
(statearr_46303_47883[(2)] = inst_46174);

(statearr_46303_47883[(1)] = (10));


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
var cljs$core$async$state_machine__34225__auto__ = null;
var cljs$core$async$state_machine__34225__auto____0 = (function (){
var statearr_46308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46308[(0)] = cljs$core$async$state_machine__34225__auto__);

(statearr_46308[(1)] = (1));

return statearr_46308;
});
var cljs$core$async$state_machine__34225__auto____1 = (function (state_46208){
while(true){
var ret_value__34226__auto__ = (function (){try{while(true){
var result__34227__auto__ = switch__34224__auto__(state_46208);
if(cljs.core.keyword_identical_QMARK_(result__34227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34227__auto__;
}
break;
}
}catch (e46309){var ex__34228__auto__ = e46309;
var statearr_46310_47884 = state_46208;
(statearr_46310_47884[(2)] = ex__34228__auto__);


if(cljs.core.seq((state_46208[(4)]))){
var statearr_46311_47885 = state_46208;
(statearr_46311_47885[(1)] = cljs.core.first((state_46208[(4)])));

} else {
throw ex__34228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47886 = state_46208;
state_46208 = G__47886;
continue;
} else {
return ret_value__34226__auto__;
}
break;
}
});
cljs$core$async$state_machine__34225__auto__ = function(state_46208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34225__auto____1.call(this,state_46208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34225__auto____0;
cljs$core$async$state_machine__34225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34225__auto____1;
return cljs$core$async$state_machine__34225__auto__;
})()
})();
var state__34443__auto__ = (function (){var statearr_46313 = f__34442__auto__();
(statearr_46313[(6)] = c__34441__auto___47858);

return statearr_46313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34443__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
