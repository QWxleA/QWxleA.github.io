goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4870__auto__ = [];
var len__4864__auto___109730 = arguments.length;
var i__4865__auto___109731 = (0);
while(true){
if((i__4865__auto___109731 < len__4864__auto___109730)){
args__4870__auto__.push((arguments[i__4865__auto___109731]));

var G__109732 = (i__4865__auto___109731 + (1));
i__4865__auto___109731 = G__109732;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq109714){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq109714));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4870__auto__ = [];
var len__4864__auto___109734 = arguments.length;
var i__4865__auto___109735 = (0);
while(true){
if((i__4865__auto___109735 < len__4864__auto___109734)){
args__4870__auto__.push((arguments[i__4865__auto___109735]));

var G__109736 = (i__4865__auto___109735 + (1));
i__4865__auto___109735 = G__109736;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq109715){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq109715));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__109725 = "";
var G__109725__$1 = (cljs.core.truth_(re.ignoreCase)?[G__109725,"i"].join(''):G__109725);
var G__109725__$2 = (cljs.core.truth_(re.multiline)?[G__109725__$1,"m"].join(''):G__109725__$1);
if(cljs.core.truth_(re.unicode)){
return [G__109725__$2,"u"].join('');
} else {
return G__109725__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
