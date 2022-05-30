goog.provide('frontend.debug');
frontend.debug.pprint = (function frontend$debug$pprint(var_args){
var args__5772__auto__ = [];
var len__5766__auto___32993 = arguments.length;
var i__5767__auto___32994 = (0);
while(true){
if((i__5767__auto___32994 < len__5766__auto___32993)){
args__5772__auto__.push((arguments[i__5767__auto___32994]));

var G__32995 = (i__5767__auto___32994 + (1));
i__5767__auto___32994 = G__32995;
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
var seq__32978 = cljs.core.seq(xs);
var chunk__32979 = null;
var count__32980 = (0);
var i__32981 = (0);
while(true){
if((i__32981 < count__32980)){
var x = chunk__32979.cljs$core$IIndexed$_nth$arity$2(null,i__32981);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__32996 = seq__32978;
var G__32997 = chunk__32979;
var G__32998 = count__32980;
var G__32999 = (i__32981 + (1));
seq__32978 = G__32996;
chunk__32979 = G__32997;
count__32980 = G__32998;
i__32981 = G__32999;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__32978);
if(temp__5720__auto__){
var seq__32978__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32978__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__32978__$1);
var G__33000 = cljs.core.chunk_rest(seq__32978__$1);
var G__33001 = c__5565__auto__;
var G__33002 = cljs.core.count(c__5565__auto__);
var G__33003 = (0);
seq__32978 = G__33000;
chunk__32979 = G__33001;
count__32980 = G__33002;
i__32981 = G__33003;
continue;
} else {
var x = cljs.core.first(seq__32978__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__33004 = cljs.core.next(seq__32978__$1);
var G__33005 = null;
var G__33006 = (0);
var G__33007 = (0);
seq__32978 = G__33004;
chunk__32979 = G__33005;
count__32980 = G__33006;
i__32981 = G__33007;
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
(frontend.debug.pprint.cljs$lang$applyTo = (function (seq32970){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32970));
}));


//# sourceMappingURL=frontend.debug.js.map
