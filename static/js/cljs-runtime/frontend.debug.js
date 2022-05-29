goog.provide('frontend.debug');
frontend.debug.pprint = (function frontend$debug$pprint(var_args){
var args__5772__auto__ = [];
var len__5766__auto___33339 = arguments.length;
var i__5767__auto___33340 = (0);
while(true){
if((i__5767__auto___33340 < len__5766__auto___33339)){
args__5772__auto__.push((arguments[i__5767__auto___33340]));

var G__33341 = (i__5767__auto___33340 + (1));
i__5767__auto___33340 = G__33341;
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
var seq__33335 = cljs.core.seq(xs);
var chunk__33336 = null;
var count__33337 = (0);
var i__33338 = (0);
while(true){
if((i__33338 < count__33337)){
var x = chunk__33336.cljs$core$IIndexed$_nth$arity$2(null,i__33338);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__33342 = seq__33335;
var G__33343 = chunk__33336;
var G__33344 = count__33337;
var G__33345 = (i__33338 + (1));
seq__33335 = G__33342;
chunk__33336 = G__33343;
count__33337 = G__33344;
i__33338 = G__33345;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33335);
if(temp__5720__auto__){
var seq__33335__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33335__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__33335__$1);
var G__33346 = cljs.core.chunk_rest(seq__33335__$1);
var G__33347 = c__5565__auto__;
var G__33348 = cljs.core.count(c__5565__auto__);
var G__33349 = (0);
seq__33335 = G__33346;
chunk__33336 = G__33347;
count__33337 = G__33348;
i__33338 = G__33349;
continue;
} else {
var x = cljs.core.first(seq__33335__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__33351 = cljs.core.next(seq__33335__$1);
var G__33352 = null;
var G__33353 = (0);
var G__33354 = (0);
seq__33335 = G__33351;
chunk__33336 = G__33352;
count__33337 = G__33353;
i__33338 = G__33354;
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
(frontend.debug.pprint.cljs$lang$applyTo = (function (seq33334){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33334));
}));


//# sourceMappingURL=frontend.debug.js.map
