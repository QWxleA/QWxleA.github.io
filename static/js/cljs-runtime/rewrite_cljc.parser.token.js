goog.provide('rewrite_cljc.parser.token');
rewrite_cljc.parser.token.read_to_boundary = (function rewrite_cljc$parser$token$read_to_boundary(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78576 = arguments.length;
var i__5767__auto___78577 = (0);
while(true){
if((i__5767__auto___78577 < len__5766__auto___78576)){
args__5772__auto__.push((arguments[i__5767__auto___78577]));

var G__78578 = (i__5767__auto___78577 + (1));
i__5767__auto___78577 = G__78578;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (reader,p__78572){
var vec__78573 = p__78572;
var allowed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78573,(0),null);
var allowed_QMARK_ = cljs.core.set(allowed);
return rewrite_cljc.reader.read_until(reader,(function (p1__78568_SHARP_){
var and__5041__auto__ = cljs.core.not((allowed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? allowed_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__78568_SHARP_) : allowed_QMARK_.call(null,p1__78568_SHARP_)));
if(and__5041__auto__){
return rewrite_cljc.reader.whitespace_or_boundary_QMARK_(p1__78568_SHARP_);
} else {
return and__5041__auto__;
}
}));
}));

(rewrite_cljc.parser.token.read_to_boundary.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.parser.token.read_to_boundary.cljs$lang$applyTo = (function (seq78569){
var G__78570 = cljs.core.first(seq78569);
var seq78569__$1 = cljs.core.next(seq78569);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78570,seq78569__$1);
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
