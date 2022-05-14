goog.provide('rewrite_cljc.interop');
/**
 * Interop version of string format
 *   Note that there a big differences between Java's format and Google Closure's format - we don't address them.
 *   %d and %s are known to work in both.
 */
rewrite_cljc.interop.simple_format = (function rewrite_cljc$interop$simple_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___91288 = arguments.length;
var i__4865__auto___91289 = (0);
while(true){
if((i__4865__auto___91289 < len__4864__auto___91288)){
args__4870__auto__.push((arguments[i__4865__auto___91289]));

var G__91290 = (i__4865__auto___91289 + (1));
i__4865__auto___91289 = G__91290;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rewrite_cljc.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,template,args);
}));

(rewrite_cljc.interop.simple_format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.interop.simple_format.cljs$lang$applyTo = (function (seq91285){
var G__91286 = cljs.core.first(seq91285);
var seq91285__$1 = cljs.core.next(seq91285);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91286,seq91285__$1);
}));

rewrite_cljc.interop.str__GT_int = (function rewrite_cljc$interop$str__GT_int(s){
return parseInt(s);
});
rewrite_cljc.interop.int__GT_str = (function rewrite_cljc$interop$int__GT_str(n,base){
return n.toString(base);
});
rewrite_cljc.interop.min_int = (function rewrite_cljc$interop$min_int(){
return Number.MIN_SAFE_INTEGER;
});
rewrite_cljc.interop.max_int = (function rewrite_cljc$interop$max_int(){
return Number.MAX_SAFE_INTEGER;
});
rewrite_cljc.interop.clojure_whitespace_QMARK_ = (function rewrite_cljc$interop$clojure_whitespace_QMARK_(c){
var and__4251__auto__ = c;
if(cljs.core.truth_(and__4251__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__4251__auto__;
}
});
rewrite_cljc.interop.meta_available_QMARK_ = (function rewrite_cljc$interop$meta_available_QMARK_(data){
if((!((data == null)))){
if((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

//# sourceMappingURL=rewrite_cljc.interop.js.map
