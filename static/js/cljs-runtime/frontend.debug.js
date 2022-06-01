goog.provide('frontend.debug');
frontend.debug.pprint = (function frontend$debug$pprint(var_args){
var args__5772__auto__ = [];
var len__5766__auto___33352 = arguments.length;
var i__5767__auto___33353 = (0);
while(true){
if((i__5767__auto___33353 < len__5766__auto___33352)){
args__5772__auto__.push((arguments[i__5767__auto___33353]));

var G__33355 = (i__5767__auto___33353 + (1));
i__5767__auto___33353 = G__33355;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(cljs.core.truth_(frontend.state.developer_mode_QMARK_())){
var seq__33346 = cljs.core.seq(xs);
var chunk__33347 = null;
var count__33348 = (0);
var i__33349 = (0);
while(true){
if((i__33349 < count__33348)){
var x = chunk__33347.cljs$core$IIndexed$_nth$arity$2(null,i__33349);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__33357 = seq__33346;
var G__33358 = chunk__33347;
var G__33359 = count__33348;
var G__33360 = (i__33349 + (1));
seq__33346 = G__33357;
chunk__33347 = G__33358;
count__33348 = G__33359;
i__33349 = G__33360;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33346);
if(temp__5720__auto__){
var seq__33346__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33346__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__33346__$1);
var G__33361 = cljs.core.chunk_rest(seq__33346__$1);
var G__33362 = c__5565__auto__;
var G__33363 = cljs.core.count(c__5565__auto__);
var G__33364 = (0);
seq__33346 = G__33361;
chunk__33347 = G__33362;
count__33348 = G__33363;
i__33349 = G__33364;
continue;
} else {
var x = cljs.core.first(seq__33346__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__33365 = cljs.core.next(seq__33346__$1);
var G__33366 = null;
var G__33367 = (0);
var G__33368 = (0);
seq__33346 = G__33365;
chunk__33347 = G__33366;
count__33348 = G__33367;
i__33349 = G__33368;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(frontend.debug.pprint.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.debug.pprint.cljs$lang$applyTo = (function (seq33344){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33344));
}));


//# sourceMappingURL=frontend.debug.js.map
