goog.provide('promesa.protocols');

/**
 * A basic promise abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_map$dyn_63706 = (function() {
var G__63707 = null;
var G__63707__2 = (function (_,f){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._map[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4551__auto__.call(null,_,f));
} else {
var m__4549__auto__ = (promesa.protocols._map["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4549__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
var G__63707__3 = (function (_,f,executor){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._map[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4551__auto__.call(null,_,f,executor));
} else {
var m__4549__auto__ = (promesa.protocols._map["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4549__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
G__63707 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__63707__2.call(this,_,f);
case 3:
return G__63707__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63707.cljs$core$IFn$_invoke$arity$2 = G__63707__2;
G__63707.cljs$core$IFn$_invoke$arity$3 = G__63707__3;
return G__63707;
})()
;
/**
 * Chain a computation to be executed in a microtask.
 */
promesa.protocols._map = (function promesa$protocols$_map(var_args){
var G__63605 = arguments.length;
switch (G__63605) {
case 2:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_map$dyn_63706(_,f);
}
}));

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_map$dyn_63706(_,f,executor);
}
}));

(promesa.protocols._map.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_bind$dyn_63712 = (function() {
var G__63713 = null;
var G__63713__2 = (function (_,f){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._bind[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4551__auto__.call(null,_,f));
} else {
var m__4549__auto__ = (promesa.protocols._bind["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4549__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
var G__63713__3 = (function (_,f,executor){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._bind[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4551__auto__.call(null,_,f,executor));
} else {
var m__4549__auto__ = (promesa.protocols._bind["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4549__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
G__63713 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__63713__2.call(this,_,f);
case 3:
return G__63713__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63713.cljs$core$IFn$_invoke$arity$2 = G__63713__2;
G__63713.cljs$core$IFn$_invoke$arity$3 = G__63713__3;
return G__63713;
})()
;
/**
 * Chain a computation to be executed in a microtask.
 */
promesa.protocols._bind = (function promesa$protocols$_bind(var_args){
var G__63610 = arguments.length;
switch (G__63610) {
case 2:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_bind$dyn_63712(_,f);
}
}));

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_bind$dyn_63712(_,f,executor);
}
}));

(promesa.protocols._bind.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_handle$dyn_63722 = (function() {
var G__63723 = null;
var G__63723__2 = (function (_,f){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._handle[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4551__auto__.call(null,_,f));
} else {
var m__4549__auto__ = (promesa.protocols._handle["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4549__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
var G__63723__3 = (function (_,f,executor){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._handle[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4551__auto__.call(null,_,f,executor));
} else {
var m__4549__auto__ = (promesa.protocols._handle["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4549__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
G__63723 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__63723__2.call(this,_,f);
case 3:
return G__63723__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63723.cljs$core$IFn$_invoke$arity$2 = G__63723__2;
G__63723.cljs$core$IFn$_invoke$arity$3 = G__63723__3;
return G__63723;
})()
;
/**
 * Chain a computation when promise completes either normally or
 *  exceptionally.
 */
promesa.protocols._handle = (function promesa$protocols$_handle(var_args){
var G__63614 = arguments.length;
switch (G__63614) {
case 2:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_handle$dyn_63722(_,f);
}
}));

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_handle$dyn_63722(_,f,executor);
}
}));

(promesa.protocols._handle.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_catch$dyn_63728 = (function (_,f){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._catch[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4551__auto__.call(null,_,f));
} else {
var m__4549__auto__ = (promesa.protocols._catch["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4549__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-catch",_);
}
}
});
/**
 * Catch a error in a promise.
 */
promesa.protocols._catch = (function promesa$protocols$_catch(_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_catch$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_catch$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_catch$dyn_63728(_,f);
}
});

var promesa$protocols$IPromise$_finally$dyn_63729 = (function() {
var G__63730 = null;
var G__63730__2 = (function (_,f){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._finally[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4551__auto__.call(null,_,f));
} else {
var m__4549__auto__ = (promesa.protocols._finally["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4549__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
var G__63730__3 = (function (_,f,executor){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._finally[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4551__auto__.call(null,_,f,executor));
} else {
var m__4549__auto__ = (promesa.protocols._finally["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4549__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
G__63730 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__63730__2.call(this,_,f);
case 3:
return G__63730__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63730.cljs$core$IFn$_invoke$arity$2 = G__63730__2;
G__63730.cljs$core$IFn$_invoke$arity$3 = G__63730__3;
return G__63730;
})()
;
/**
 * Runs side-effectful code after completion or rejection, returns
 *  the original promise.
 */
promesa.protocols._finally = (function promesa$protocols$_finally(var_args){
var G__63625 = arguments.length;
switch (G__63625) {
case 2:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_finally$dyn_63729(_,f);
}
}));

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_finally$dyn_63729(_,f,executor);
}
}));

(promesa.protocols._finally.cljs$lang$maxFixedArity = 3);



/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.protocols.IState = function(){};

var promesa$protocols$IState$_extract$dyn_63734 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._extract[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (promesa.protocols._extract["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-extract",_);
}
}
});
/**
 * Extract the current value.
 */
promesa.protocols._extract = (function promesa$protocols$_extract(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_extract$arity$1 == null)))))){
return _.promesa$protocols$IState$_extract$arity$1(_);
} else {
return promesa$protocols$IState$_extract$dyn_63734(_);
}
});

var promesa$protocols$IState$_resolved_QMARK_$dyn_63736 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._resolved_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (promesa.protocols._resolved_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-resolved?",_);
}
}
});
/**
 * Returns true if a promise is resolved.
 */
promesa.protocols._resolved_QMARK_ = (function promesa$protocols$_resolved_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_resolved_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_resolved_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_resolved_QMARK_$dyn_63736(_);
}
});

var promesa$protocols$IState$_rejected_QMARK_$dyn_63737 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._rejected_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (promesa.protocols._rejected_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-rejected?",_);
}
}
});
/**
 * Returns true if a promise is rejected.
 */
promesa.protocols._rejected_QMARK_ = (function promesa$protocols$_rejected_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_rejected_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_rejected_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_rejected_QMARK_$dyn_63737(_);
}
});

var promesa$protocols$IState$_pending_QMARK_$dyn_63740 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._pending_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (promesa.protocols._pending_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-pending?",_);
}
}
});
/**
 * Retutns true if a promise is pending.
 */
promesa.protocols._pending_QMARK_ = (function promesa$protocols$_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_pending_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_pending_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_pending_QMARK_$dyn_63740(_);
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_63741 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._promise[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (promesa.protocols._promise["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IPromiseFactory.-promise",_);
}
}
});
/**
 * Create a promise instance from other types
 */
promesa.protocols._promise = (function promesa$protocols$_promise(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromiseFactory$_promise$arity$1 == null)))))){
return _.promesa$protocols$IPromiseFactory$_promise$arity$1(_);
} else {
return promesa$protocols$IPromiseFactory$_promise$dyn_63741(_);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_63743 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._cancel_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (promesa.protocols._cancel_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancel!",_);
}
}
});
promesa.protocols._cancel_BANG_ = (function promesa$protocols$_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancel_BANG_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_63743(_);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_63745 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._cancelled_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (promesa.protocols._cancelled_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancelled?",_);
}
}
});
promesa.protocols._cancelled_QMARK_ = (function promesa$protocols$_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_63745(_);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_63748 = (function (_,v){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._resolve_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4551__auto__.call(null,_,v));
} else {
var m__4549__auto__ = (promesa.protocols._resolve_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4549__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("ICompletable.-resolve!",_);
}
}
});
/**
 * Deliver a value to empty promise.
 */
promesa.protocols._resolve_BANG_ = (function promesa$protocols$_resolve_BANG_(_,v){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_resolve_BANG_$arity$2(_,v);
} else {
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_63748(_,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_63749 = (function (_,e){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._reject_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__4551__auto__.call(null,_,e));
} else {
var m__4549__auto__ = (promesa.protocols._reject_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__4549__auto__.call(null,_,e));
} else {
throw cljs.core.missing_protocol("ICompletable.-reject!",_);
}
}
});
/**
 * Deliver an error to empty promise.
 */
promesa.protocols._reject_BANG_ = (function promesa$protocols$_reject_BANG_(_,e){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_reject_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_reject_BANG_$arity$2(_,e);
} else {
return promesa$protocols$ICompletable$_reject_BANG_$dyn_63749(_,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_run_BANG_$dyn_63750 = (function (_,task){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._run_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4551__auto__.call(null,_,task));
} else {
var m__4549__auto__ = (promesa.protocols._run_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4549__auto__.call(null,_,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-run!",_);
}
}
});
/**
 * Run a task and return a promise.
 */
promesa.protocols._run_BANG_ = (function promesa$protocols$_run_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_run_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_run_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_run_BANG_$dyn_63750(_,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_63752 = (function (_,task){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._submit_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4551__auto__.call(null,_,task));
} else {
var m__4549__auto__ = (promesa.protocols._submit_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4549__auto__.call(null,_,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-submit!",_);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._submit_BANG_ = (function promesa$protocols$_submit_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_submit_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_submit_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_submit_BANG_$dyn_63752(_,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_63753 = (function (_,ms,func){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (promesa.protocols._schedule_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__4551__auto__.call(null,_,ms,func));
} else {
var m__4549__auto__ = (promesa.protocols._schedule_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__4549__auto__.call(null,_,ms,func));
} else {
throw cljs.core.missing_protocol("IScheduler.-schedule!",_);
}
}
});
/**
 * Schedule a function to be executed in future.
 */
promesa.protocols._schedule_BANG_ = (function promesa$protocols$_schedule_BANG_(_,ms,func){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 == null)))))){
return _.promesa$protocols$IScheduler$_schedule_BANG_$arity$3(_,ms,func);
} else {
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_63753(_,ms,func);
}
});


//# sourceMappingURL=promesa.protocols.js.map
