goog.provide('electron.ipc');
electron.ipc.ipc = (function electron$ipc$ipc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45879 = arguments.length;
var i__4865__auto___45880 = (0);
while(true){
if((i__4865__auto___45880 < len__4864__auto___45879)){
args__4870__auto__.push((arguments[i__4865__auto___45880]));

var G__45881 = (i__4865__auto___45880 + (1));
i__4865__auto___45880 = G__45881;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.apis.doAction(cljs_bean.core.__GT_js(args)),(function (result){
return promesa.protocols._promise(result);
}));
}));
} else {
return null;
}
}));

(electron.ipc.ipc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(electron.ipc.ipc.cljs$lang$applyTo = (function (seq45876){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45876));
}));

electron.ipc.invoke = (function electron$ipc$invoke(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45882 = arguments.length;
var i__4865__auto___45883 = (0);
while(true){
if((i__4865__auto___45883 < len__4864__auto___45882)){
args__4870__auto__.push((arguments[i__4865__auto___45883]));

var G__45884 = (i__4865__auto___45883 + (1));
i__4865__auto___45883 = G__45884;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (channel,args){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.apis.invoke(channel,cljs_bean.core.__GT_js(args)),(function (result){
return promesa.protocols._promise(result);
}));
}));
} else {
return null;
}
}));

(electron.ipc.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(electron.ipc.invoke.cljs$lang$applyTo = (function (seq45877){
var G__45878 = cljs.core.first(seq45877);
var seq45877__$1 = cljs.core.next(seq45877);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45878,seq45877__$1);
}));


//# sourceMappingURL=electron.ipc.js.map
