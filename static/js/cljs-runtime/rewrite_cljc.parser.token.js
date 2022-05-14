goog.provide('rewrite_cljc.parser.token');
rewrite_cljc.parser.token.read_to_boundary = (function rewrite_cljc$parser$token$read_to_boundary(var_args){
var args__4870__auto__ = [];
var len__4864__auto___92808 = arguments.length;
var i__4865__auto___92809 = (0);
while(true){
if((i__4865__auto___92809 < len__4864__auto___92808)){
args__4870__auto__.push((arguments[i__4865__auto___92809]));

var G__92810 = (i__4865__auto___92809 + (1));
i__4865__auto___92809 = G__92810;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rewrite_cljc.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (reader,p__92797){
var vec__92798 = p__92797;
var allowed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92798,(0),null);
var allowed_QMARK_ = cljs.core.set(allowed);
return rewrite_cljc.reader.read_until(reader,(function (p1__92791_SHARP_){
var and__4251__auto__ = cljs.core.not((allowed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? allowed_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__92791_SHARP_) : allowed_QMARK_.call(null,p1__92791_SHARP_)));
if(and__4251__auto__){
return rewrite_cljc.reader.whitespace_or_boundary_QMARK_(p1__92791_SHARP_);
} else {
return and__4251__auto__;
}
}));
}));

(rewrite_cljc.parser.token.read_to_boundary.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.parser.token.read_to_boundary.cljs$lang$applyTo = (function (seq92792){
var G__92793 = cljs.core.first(seq92792);
var seq92792__$1 = cljs.core.next(seq92792);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92793,seq92792__$1);
}));

rewrite_cljc.parser.token.read_to_char_boundary = (function rewrite_cljc$parser$token$read_to_char_boundary(reader){
var c = rewrite_cljc.reader.next(reader);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,"\\"))?rewrite_cljc.parser.token.read_to_boundary(reader):""))].join('');
});
/**
 * Symbols allow for certain boundary characters that have
 * to be handled explicitly.
 */
rewrite_cljc.parser.token.symbol_node = (function rewrite_cljc$parser$token$symbol_node(reader,value,value_string){
var suffix = rewrite_cljc.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'",":"], null)], 0));
if(cljs.core.empty_QMARK_(suffix)){
return rewrite_cljc.node.token_node.cljs$core$IFn$_invoke$arity$2(value,value_string);
} else {
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
return rewrite_cljc.node.token_node.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.reader.string__GT_edn(s),s);
}
});
/**
 * Parse a single token.
 */
rewrite_cljc.parser.token.parse_token = (function rewrite_cljc$parser$token$parse_token(reader){
var first_char = rewrite_cljc.reader.next(reader);
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_char),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_char,"\\"))?rewrite_cljc.parser.token.read_to_char_boundary(reader):rewrite_cljc.parser.token.read_to_boundary(reader)))].join('');
var v = rewrite_cljc.reader.string__GT_edn(s);
if((v instanceof cljs.core.Symbol)){
return rewrite_cljc.parser.token.symbol_node(reader,v,s);
} else {
return rewrite_cljc.node.token_node.cljs$core$IFn$_invoke$arity$2(v,s);
}
});

//# sourceMappingURL=rewrite_cljc.parser.token.js.map
