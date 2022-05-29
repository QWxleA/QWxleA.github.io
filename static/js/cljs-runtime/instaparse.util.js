goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__5772__auto__ = [];
var len__5766__auto___96291 = arguments.length;
var i__5767__auto___96292 = (0);
while(true){
if((i__5767__auto___96292 < len__5766__auto___96291)){
args__5772__auto__.push((arguments[i__5767__auto___96292]));

var G__96293 = (i__5767__auto___96292 + (1));
i__5767__auto___96292 = G__96293;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq96262){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq96262));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__5772__auto__ = [];
var len__5766__auto___96294 = arguments.length;
var i__5767__auto___96295 = (0);
while(true){
if((i__5767__auto___96295 < len__5766__auto___96294)){
args__5772__auto__.push((arguments[i__5767__auto___96295]));

var G__96296 = (i__5767__auto___96295 + (1));
i__5767__auto___96295 = G__96296;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq96263){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq96263));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__96284 = "";
var G__96284__$1 = (cljs.core.truth_(re.ignoreCase)?[G__96284,"i"].join(''):G__96284);
var G__96284__$2 = (cljs.core.truth_(re.multiline)?[G__96284__$1,"m"].join(''):G__96284__$1);
if(cljs.core.truth_(re.unicode)){
return [G__96284__$2,"u"].join('');
} else {
return G__96284__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
