goog.provide('frontend.debug');
frontend.debug.pprint = (function frontend$debug$pprint(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73598 = arguments.length;
var i__4865__auto___73599 = (0);
while(true){
if((i__4865__auto___73599 < len__4864__auto___73598)){
args__4870__auto__.push((arguments[i__4865__auto___73599]));

var G__73600 = (i__4865__auto___73599 + (1));
i__4865__auto___73599 = G__73600;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(cljs.core.truth_(frontend.state.developer_mode_QMARK_())){
var seq__73591 = cljs.core.seq(xs);
var chunk__73592 = null;
var count__73593 = (0);
var i__73594 = (0);
while(true){
if((i__73594 < count__73593)){
var x = chunk__73592.cljs$core$IIndexed$_nth$arity$2(null,i__73594);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__73605 = seq__73591;
var G__73606 = chunk__73592;
var G__73607 = count__73593;
var G__73608 = (i__73594 + (1));
seq__73591 = G__73605;
chunk__73592 = G__73606;
count__73593 = G__73607;
i__73594 = G__73608;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__73591);
if(temp__5720__auto__){
var seq__73591__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73591__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__73591__$1);
var G__73614 = cljs.core.chunk_rest(seq__73591__$1);
var G__73615 = c__4679__auto__;
var G__73616 = cljs.core.count(c__4679__auto__);
var G__73617 = (0);
seq__73591 = G__73614;
chunk__73592 = G__73615;
count__73593 = G__73616;
i__73594 = G__73617;
continue;
} else {
var x = cljs.core.first(seq__73591__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__73618 = cljs.core.next(seq__73591__$1);
var G__73619 = null;
var G__73620 = (0);
var G__73621 = (0);
seq__73591 = G__73618;
chunk__73592 = G__73619;
count__73593 = G__73620;
i__73594 = G__73621;
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
(frontend.debug.pprint.cljs$lang$applyTo = (function (seq73587){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73587));
}));


//# sourceMappingURL=frontend.debug.js.map
