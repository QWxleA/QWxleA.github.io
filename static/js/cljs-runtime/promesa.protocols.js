goog.provide('promesa.protocols');

/**
 * A basic promise abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_map$dyn_50909 = (function() {
var G__50910 = null;
var G__50910__2 = (function (_,f){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._map[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5391__auto__.call(null,_,f));
} else {
var m__5389__auto__ = (promesa.protocols._map["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5389__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
var G__50910__3 = (function (_,f,executor){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._map[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5391__auto__.call(null,_,f,executor));
} else {
var m__5389__auto__ = (promesa.protocols._map["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5389__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
G__50910 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__50910__2.call(this,_,f);
case 3:
return G__50910__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50910.cljs$core$IFn$_invoke$arity$2 = G__50910__2;
G__50910.cljs$core$IFn$_invoke$arity$3 = G__50910__3;
return G__50910;
})()
;
/**
 * Chain a computation to be executed in a microtask.
 */
promesa.protocols._map = (function promesa$protocols$_map(var_args){
var G__50854 = arguments.length;
switch (G__50854) {
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
return promesa$protocols$IPromise$_map$dyn_50909(_,f);
}
}));

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_map$dyn_50909(_,f,executor);
}
}));

(promesa.protocols._map.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_bind$dyn_50912 = (function() {
var G__50913 = null;
var G__50913__2 = (function (_,f){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._bind[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5391__auto__.call(null,_,f));
} else {
var m__5389__auto__ = (promesa.protocols._bind["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5389__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
var G__50913__3 = (function (_,f,executor){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._bind[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5391__auto__.call(null,_,f,executor));
} else {
var m__5389__auto__ = (promesa.protocols._bind["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5389__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
G__50913 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__50913__2.call(this,_,f);
case 3:
return G__50913__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50913.cljs$core$IFn$_invoke$arity$2 = G__50913__2;
G__50913.cljs$core$IFn$_invoke$arity$3 = G__50913__3;
return G__50913;
})()
;
/**
 * Chain a computation to be executed in a microtask.
 */
promesa.protocols._bind = (function promesa$protocols$_bind(var_args){
var G__50881 = arguments.length;
switch (G__50881) {
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
return promesa$protocols$IPromise$_bind$dyn_50912(_,f);
}
}));

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_bind$dyn_50912(_,f,executor);
}
}));

(promesa.protocols._bind.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_handle$dyn_50915 = (function() {
var G__50916 = null;
var G__50916__2 = (function (_,f){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._handle[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5391__auto__.call(null,_,f));
} else {
var m__5389__auto__ = (promesa.protocols._handle["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5389__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
var G__50916__3 = (function (_,f,executor){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._handle[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5391__auto__.call(null,_,f,executor));
} else {
var m__5389__auto__ = (promesa.protocols._handle["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5389__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
G__50916 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__50916__2.call(this,_,f);
case 3:
return G__50916__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50916.cljs$core$IFn$_invoke$arity$2 = G__50916__2;
G__50916.cljs$core$IFn$_invoke$arity$3 = G__50916__3;
return G__50916;
})()
;
/**
 * Chain a computation when promise completes either normally or
 *  exceptionally.
 */
promesa.protocols._handle = (function promesa$protocols$_handle(var_args){
var G__50896 = arguments.length;
switch (G__50896) {
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
return promesa$protocols$IPromise$_handle$dyn_50915(_,f);
}
}));

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_handle$dyn_50915(_,f,executor);
}
}));

(promesa.protocols._handle.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_catch$dyn_50929 = (function (_,f){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._catch[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5391__auto__.call(null,_,f));
} else {
var m__5389__auto__ = (promesa.protocols._catch["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5389__auto__.call(null,_,f));
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
return promesa$protocols$IPromise$_catch$dyn_50929(_,f);
}
});

var promesa$protocols$IPromise$_finally$dyn_50933 = (function() {
var G__50934 = null;
var G__50934__2 = (function (_,f){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._finally[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5391__auto__.call(null,_,f));
} else {
var m__5389__auto__ = (promesa.protocols._finally["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5389__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
var G__50934__3 = (function (_,f,executor){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._finally[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5391__auto__.call(null,_,f,executor));
} else {
var m__5389__auto__ = (promesa.protocols._finally["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__5389__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
G__50934 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__50934__2.call(this,_,f);
case 3:
return G__50934__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50934.cljs$core$IFn$_invoke$arity$2 = G__50934__2;
G__50934.cljs$core$IFn$_invoke$arity$3 = G__50934__3;
return G__50934;
})()
;
/**
 * Runs side-effectful code after completion or rejection, returns
 *  the original promise.
 */
promesa.protocols._finally = (function promesa$protocols$_finally(var_args){
var G__50904 = arguments.length;
switch (G__50904) {
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
return promesa$protocols$IPromise$_finally$dyn_50933(_,f);
}
}));

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_finally$dyn_50933(_,f,executor);
}
}));

(promesa.protocols._finally.cljs$lang$maxFixedArity = 3);



/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.protocols.IState = function(){};

var promesa$protocols$IState$_extract$dyn_50936 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._extract[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (promesa.protocols._extract["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
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
return promesa$protocols$IState$_extract$dyn_50936(_);
}
});

var promesa$protocols$IState$_resolved_QMARK_$dyn_50937 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._resolved_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (promesa.protocols._resolved_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
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
return promesa$protocols$IState$_resolved_QMARK_$dyn_50937(_);
}
});

var promesa$protocols$IState$_rejected_QMARK_$dyn_50938 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._rejected_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (promesa.protocols._rejected_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
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
return promesa$protocols$IState$_rejected_QMARK_$dyn_50938(_);
}
});

var promesa$protocols$IState$_pending_QMARK_$dyn_50939 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._pending_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (promesa.protocols._pending_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
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
return promesa$protocols$IState$_pending_QMARK_$dyn_50939(_);
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_50940 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._promise[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (promesa.protocols._promise["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
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
return promesa$protocols$IPromiseFactory$_promise$dyn_50940(_);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_50941 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._cancel_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (promesa.protocols._cancel_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancel!",_);
}
}
});
promesa.protocols._cancel_BANG_ = (function promesa$protocols$_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancel_BANG_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_50941(_);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_50945 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._cancelled_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (promesa.protocols._cancelled_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancelled?",_);
}
}
});
promesa.protocols._cancelled_QMARK_ = (function promesa$protocols$_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_50945(_);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_50946 = (function (_,v){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._resolve_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5391__auto__.call(null,_,v));
} else {
var m__5389__auto__ = (promesa.protocols._resolve_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__5389__auto__.call(null,_,v));
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
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_50946(_,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_50947 = (function (_,e){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._reject_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__5391__auto__.call(null,_,e));
} else {
var m__5389__auto__ = (promesa.protocols._reject_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__5389__auto__.call(null,_,e));
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
return promesa$protocols$ICompletable$_reject_BANG_$dyn_50947(_,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_run_BANG_$dyn_50948 = (function (_,task){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._run_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__5391__auto__.call(null,_,task));
} else {
var m__5389__auto__ = (promesa.protocols._run_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__5389__auto__.call(null,_,task));
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
return promesa$protocols$IExecutor$_run_BANG_$dyn_50948(_,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_50950 = (function (_,task){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._submit_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__5391__auto__.call(null,_,task));
} else {
var m__5389__auto__ = (promesa.protocols._submit_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__5389__auto__.call(null,_,task));
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
return promesa$protocols$IExecutor$_submit_BANG_$dyn_50950(_,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_50957 = (function (_,ms,func){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (promesa.protocols._schedule_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__5391__auto__.call(null,_,ms,func));
} else {
var m__5389__auto__ = (promesa.protocols._schedule_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__5389__auto__.call(null,_,ms,func));
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
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_50957(_,ms,func);
}
});


//# sourceMappingURL=promesa.protocols.js.map
