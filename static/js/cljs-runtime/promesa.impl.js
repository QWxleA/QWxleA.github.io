goog.provide('promesa.impl');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x51159 = obj;
(x51159.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x51159.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x51159.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x51159;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__51161_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__51161_SHARP_) : f.call(null,p1__51161_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__51162_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__51162_SHARP_) : f.call(null,p1__51162_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__51163_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__51163_SHARP_) : f.call(null,p1__51163_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__51164_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__51164_SHARP_) : f.call(null,p1__51164_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__51165_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__51165_SHARP_,null) : f.call(null,p1__51165_SHARP_,null));
}),(function (p1__51166_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__51166_SHARP_) : f.call(null,null,p1__51166_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__51167_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__51167_SHARP_,null) : f.call(null,p1__51167_SHARP_,null));
}),(function (p1__51168_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__51168_SHARP_) : f.call(null,null,p1__51168_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__51169_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__51169_SHARP_,null) : f.call(null,p1__51169_SHARP_,null));
}),(function (p1__51170_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__51170_SHARP_) : f.call(null,null,p1__51170_SHARP_));
}));

return it__$1;
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__51171_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__51171_SHARP_,null) : f.call(null,p1__51171_SHARP_,null));
}),(function (p1__51172_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__51172_SHARP_) : f.call(null,null,p1__51172_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__51173_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__51173_SHARP_) : f.call(null,p1__51173_SHARP_));
}));
}));
});
promesa.impl.extend_promise_BANG_(Promise);
(promesa.protocols.IPromise["_"] = true);

(promesa.protocols._map["_"] = (function() {
var G__51186 = null;
var G__51186__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__51186__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__51186 = function(it,f,e){
switch(arguments.length){
case 2:
return G__51186__2.call(this,it,f);
case 3:
return G__51186__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51186.cljs$core$IFn$_invoke$arity$2 = G__51186__2;
G__51186.cljs$core$IFn$_invoke$arity$3 = G__51186__3;
return G__51186;
})()
);

(promesa.protocols._bind["_"] = (function() {
var G__51187 = null;
var G__51187__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__51187__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__51187 = function(it,f,e){
switch(arguments.length){
case 2:
return G__51187__2.call(this,it,f);
case 3:
return G__51187__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51187.cljs$core$IFn$_invoke$arity$2 = G__51187__2;
G__51187.cljs$core$IFn$_invoke$arity$3 = G__51187__3;
return G__51187;
})()
);

(promesa.protocols._handle["_"] = (function() {
var G__51192 = null;
var G__51192__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__51192__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__51192 = function(it,f,e){
switch(arguments.length){
case 2:
return G__51192__2.call(this,it,f);
case 3:
return G__51192__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51192.cljs$core$IFn$_invoke$arity$2 = G__51192__2;
G__51192.cljs$core$IFn$_invoke$arity$3 = G__51192__3;
return G__51192;
})()
);

(promesa.protocols._finally["_"] = (function() {
var G__51193 = null;
var G__51193__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__51193__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__51193 = function(it,f,e){
switch(arguments.length){
case 2:
return G__51193__2.call(this,it,f);
case 3:
return G__51193__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__51193.cljs$core$IFn$_invoke$arity$2 = G__51193__2;
G__51193.cljs$core$IFn$_invoke$arity$3 = G__51193__3;
return G__51193;
})()
);

(promesa.protocols._catch["_"] = (function (it,f){
return promesa.protocols._catch(promesa.protocols._promise(it),f);
}));
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

(promesa.protocols.IPromiseFactory["_"] = true);

(promesa.protocols._promise["_"] = (function (v){
return promesa.impl.resolved(v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.js.map
