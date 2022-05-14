goog.provide('electron.ipc');
electron.ipc.ipc = (function electron$ipc$ipc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68008 = arguments.length;
var i__4865__auto___68009 = (0);
while(true){
if((i__4865__auto___68009 < len__4864__auto___68008)){
args__4870__auto__.push((arguments[i__4865__auto___68009]));

var G__68010 = (i__4865__auto___68009 + (1));
i__4865__auto___68009 = G__68010;
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___50821__auto__){
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
(electron.ipc.ipc.cljs$lang$applyTo = (function (seq67995){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67995));
}));

electron.ipc.invoke = (function electron$ipc$invoke(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68014 = arguments.length;
var i__4865__auto___68015 = (0);
while(true){
if((i__4865__auto___68015 < len__4864__auto___68014)){
args__4870__auto__.push((arguments[i__4865__auto___68015]));

var G__68016 = (i__4865__auto___68015 + (1));
i__4865__auto___68015 = G__68016;
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___50821__auto__){
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
(electron.ipc.invoke.cljs$lang$applyTo = (function (seq68001){
var G__68002 = cljs.core.first(seq68001);
var seq68001__$1 = cljs.core.next(seq68001);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68002,seq68001__$1);
}));


//# sourceMappingURL=electron.ipc.js.map
