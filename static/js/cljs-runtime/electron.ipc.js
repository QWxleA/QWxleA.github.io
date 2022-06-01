goog.provide('electron.ipc');
electron.ipc.ipc = (function electron$ipc$ipc(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31530 = arguments.length;
var i__5767__auto___31531 = (0);
while(true){
if((i__5767__auto___31531 < len__5766__auto___31530)){
args__5772__auto__.push((arguments[i__5767__auto___31531]));

var G__31532 = (i__5767__auto___31531 + (1));
i__5767__auto___31531 = G__31532;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
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
(electron.ipc.ipc.cljs$lang$applyTo = (function (seq31520){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31520));
}));

electron.ipc.invoke = (function electron$ipc$invoke(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31541 = arguments.length;
var i__5767__auto___31542 = (0);
while(true){
if((i__5767__auto___31542 < len__5766__auto___31541)){
args__5772__auto__.push((arguments[i__5767__auto___31542]));

var G__31543 = (i__5767__auto___31542 + (1));
i__5767__auto___31542 = G__31543;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (channel,args){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
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
(electron.ipc.invoke.cljs$lang$applyTo = (function (seq31526){
var G__31527 = cljs.core.first(seq31526);
var seq31526__$1 = cljs.core.next(seq31526);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31527,seq31526__$1);
}));


//# sourceMappingURL=electron.ipc.js.map
