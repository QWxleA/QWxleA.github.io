goog.provide('promesa.impl');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x65149 = obj;
(x65149.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x65149.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x65149.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x65149;
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
return it__$1.then((function (p1__65154_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__65154_SHARP_) : f.call(null,p1__65154_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__65156_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__65156_SHARP_) : f.call(null,p1__65156_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__65157_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__65157_SHARP_) : f.call(null,p1__65157_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__65161_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__65161_SHARP_) : f.call(null,p1__65161_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__65162_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__65162_SHARP_,null) : f.call(null,p1__65162_SHARP_,null));
}),(function (p1__65163_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__65163_SHARP_) : f.call(null,null,p1__65163_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__65164_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__65164_SHARP_,null) : f.call(null,p1__65164_SHARP_,null));
}),(function (p1__65165_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__65165_SHARP_) : f.call(null,null,p1__65165_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__65166_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__65166_SHARP_,null) : f.call(null,p1__65166_SHARP_,null));
}),(function (p1__65167_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__65167_SHARP_) : f.call(null,null,p1__65167_SHARP_));
}));

return it__$1;
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__65168_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__65168_SHARP_,null) : f.call(null,p1__65168_SHARP_,null));
}),(function (p1__65169_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__65169_SHARP_) : f.call(null,null,p1__65169_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__65170_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__65170_SHARP_) : f.call(null,p1__65170_SHARP_));
}));
}));
});
promesa.impl.extend_promise_BANG_(Promise);
(promesa.protocols.IPromise["_"] = true);

(promesa.protocols._map["_"] = (function() {
var G__65243 = null;
var G__65243__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__65243__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__65243 = function(it,f,e){
switch(arguments.length){
case 2:
return G__65243__2.call(this,it,f);
case 3:
return G__65243__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65243.cljs$core$IFn$_invoke$arity$2 = G__65243__2;
G__65243.cljs$core$IFn$_invoke$arity$3 = G__65243__3;
return G__65243;
})()
);

(promesa.protocols._bind["_"] = (function() {
var G__65244 = null;
var G__65244__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__65244__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__65244 = function(it,f,e){
switch(arguments.length){
case 2:
return G__65244__2.call(this,it,f);
case 3:
return G__65244__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65244.cljs$core$IFn$_invoke$arity$2 = G__65244__2;
G__65244.cljs$core$IFn$_invoke$arity$3 = G__65244__3;
return G__65244;
})()
);

(promesa.protocols._handle["_"] = (function() {
var G__65245 = null;
var G__65245__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__65245__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__65245 = function(it,f,e){
switch(arguments.length){
case 2:
return G__65245__2.call(this,it,f);
case 3:
return G__65245__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65245.cljs$core$IFn$_invoke$arity$2 = G__65245__2;
G__65245.cljs$core$IFn$_invoke$arity$3 = G__65245__3;
return G__65245;
})()
);

(promesa.protocols._finally["_"] = (function() {
var G__65246 = null;
var G__65246__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__65246__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__65246 = function(it,f,e){
switch(arguments.length){
case 2:
return G__65246__2.call(this,it,f);
case 3:
return G__65246__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65246.cljs$core$IFn$_invoke$arity$2 = G__65246__2;
G__65246.cljs$core$IFn$_invoke$arity$3 = G__65246__3;
return G__65246;
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
