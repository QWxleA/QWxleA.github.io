goog.provide('frontend.debug');
frontend.debug.pprint = (function frontend$debug$pprint(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47825 = arguments.length;
var i__4865__auto___47826 = (0);
while(true){
if((i__4865__auto___47826 < len__4864__auto___47825)){
args__4870__auto__.push((arguments[i__4865__auto___47826]));

var G__47827 = (i__4865__auto___47826 + (1));
i__4865__auto___47826 = G__47827;
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
var seq__47819 = cljs.core.seq(xs);
var chunk__47820 = null;
var count__47821 = (0);
var i__47822 = (0);
while(true){
if((i__47822 < count__47821)){
var x = chunk__47820.cljs$core$IIndexed$_nth$arity$2(null,i__47822);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__47829 = seq__47819;
var G__47830 = chunk__47820;
var G__47831 = count__47821;
var G__47832 = (i__47822 + (1));
seq__47819 = G__47829;
chunk__47820 = G__47830;
count__47821 = G__47831;
i__47822 = G__47832;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__47819);
if(temp__5720__auto__){
var seq__47819__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47819__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47819__$1);
var G__47834 = cljs.core.chunk_rest(seq__47819__$1);
var G__47835 = c__4679__auto__;
var G__47836 = cljs.core.count(c__4679__auto__);
var G__47837 = (0);
seq__47819 = G__47834;
chunk__47820 = G__47835;
count__47821 = G__47836;
i__47822 = G__47837;
continue;
} else {
var x = cljs.core.first(seq__47819__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__47839 = cljs.core.next(seq__47819__$1);
var G__47840 = null;
var G__47841 = (0);
var G__47842 = (0);
seq__47819 = G__47839;
chunk__47820 = G__47840;
count__47821 = G__47841;
i__47822 = G__47842;
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
(frontend.debug.pprint.cljs$lang$applyTo = (function (seq47802){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47802));
}));


//# sourceMappingURL=frontend.debug.js.map
