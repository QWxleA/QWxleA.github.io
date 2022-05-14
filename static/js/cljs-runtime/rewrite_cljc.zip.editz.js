goog.provide('rewrite_cljc.zip.editz');
/**
 * Return zipper with the current node in `zloc` replaced with `value`
 * which will be coerced to a node if possible.
 */
rewrite_cljc.zip.editz.replace = (function rewrite_cljc$zip$editz$replace(zloc,value){
return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.node.coerce(value));
});
/**
 * Create s-expression from node, apply the function and create
 * node from the result.
 */
rewrite_cljc.zip.editz.edit_node = (function rewrite_cljc$zip$editz$edit_node(node,f){
return rewrite_cljc.node.coerce((function (){var G__93011 = rewrite_cljc.node.sexpr(node);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__93011) : f.call(null,G__93011));
})());
});
/**
 * Return zipper with the current node in `zloc` replaced with the result of:
 * 
 * (`f` (s-expression node) `args`)
 * 
 * The result of `f` will be coerced to a node if possible.
 */
rewrite_cljc.zip.editz.edit = (function rewrite_cljc$zip$editz$edit(var_args){
var args__4870__auto__ = [];
var len__4864__auto___93040 = arguments.length;
var i__4865__auto___93041 = (0);
while(true){
if((i__4865__auto___93041 < len__4864__auto___93040)){
args__4870__auto__.push((arguments[i__4865__auto___93041]));

var G__93042 = (i__4865__auto___93041 + (1));
i__4865__auto___93041 = G__93042;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return rewrite_cljc.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(rewrite_cljc.zip.editz.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
return rewrite_cljc.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic(zloc,rewrite_cljc.zip.editz.edit_node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__93012_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__93012_SHARP_,args);
})], 0));
}));

(rewrite_cljc.zip.editz.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_cljc.zip.editz.edit.cljs$lang$applyTo = (function (seq93013){
var G__93014 = cljs.core.first(seq93013);
var seq93013__$1 = cljs.core.next(seq93013);
var G__93015 = cljs.core.first(seq93013__$1);
var seq93013__$2 = cljs.core.next(seq93013__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__93014,G__93015,seq93013__$2);
}));

/**
 * Return zipper with the children of the current node in `zloc` merged into itself.
 * (akin to Clojure's `unquote-splicing` macro: `~@...`).
 * - if the node is not one that can have children, no modification will
 *   be performed.
 * - if the node has no or only whitespace children, it will be removed.
 * - otherwise, splicing will be performed, moving the zipper to the first
 *   non-whitespace child afterwards.
 */
rewrite_cljc.zip.editz.splice = (function rewrite_cljc$zip$editz$splice(zloc){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc))){
var temp__5718__auto__ = cljs.core.seq(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.whitespace_QMARK_,cljs.core.reverse(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.whitespace_QMARK_,rewrite_cljc.custom_zipper.core.children(zloc)))));
if(temp__5718__auto__){
var children = temp__5718__auto__;
var loc = rewrite_cljc.custom_zipper.utils.remove_and_move_right(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_cljc.custom_zipper.core.insert_right,zloc,children));
var or__4253__auto__ = rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(loc);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return loc;
}
} else {
return rewrite_cljc.zip.removez.remove(zloc);
}
} else {
return zloc;
}
});
rewrite_cljc.zip.editz.edit_token = (function rewrite_cljc$zip$editz$edit_token(zloc,str_fn){
var e = rewrite_cljc.zip.base.sexpr(zloc);
var e_SINGLEQUOTE_ = ((typeof e === 'string')?(str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(e) : str_fn.call(null,e)):(((e instanceof cljs.core.Keyword))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(e),(function (){var G__93021 = cljs.core.name(e);
return (str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(G__93021) : str_fn.call(null,G__93021));
})()):(((e instanceof cljs.core.Symbol))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(e),(function (){var G__93023 = cljs.core.name(e);
return (str_fn.cljs$core$IFn$_invoke$arity$1 ? str_fn.cljs$core$IFn$_invoke$arity$1(G__93023) : str_fn.call(null,G__93023));
})()):null)));
return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.node.token_node.cljs$core$IFn$_invoke$arity$1(e_SINGLEQUOTE_));
});
rewrite_cljc.zip.editz.edit_multi_line = (function rewrite_cljc$zip$editz$edit_multi_line(zloc,line_fn){
var n = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(rewrite_cljc.custom_zipper.core.node(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(line_fn,cljs.core.vec));
return rewrite_cljc.custom_zipper.core.replace(zloc,n);
});
/**
 * Return zipper with the current node in `zloc` prefixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, first line is prefixed.
 */
rewrite_cljc.zip.editz.prefix = (function rewrite_cljc$zip$editz$prefix(zloc,s){
var G__93030 = rewrite_cljc.zip.base.tag(zloc);
var G__93030__$1 = (((G__93030 instanceof cljs.core.Keyword))?G__93030.fqn:null);
switch (G__93030__$1) {
case "token":
return rewrite_cljc.zip.editz.edit_token(zloc,(function (p1__93028_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__93028_SHARP_)].join('');
}));

break;
case "multi-line":
return rewrite_cljc.zip.editz.edit_multi_line(zloc,(function (lines){
if(cljs.core.empty_QMARK_(lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),(function (p1__93029_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__93029_SHARP_)].join('');
}));
}
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__93030__$1)].join('')));

}
});
/**
 * Return zipper with the current node in `zloc` suffixed with string `s`.
 * Operates on token node or a multi-line node, else exception is thrown.
 * When multi-line, last line is suffixed.
 */
rewrite_cljc.zip.editz.suffix = (function rewrite_cljc$zip$editz$suffix(zloc,s){
var G__93037 = rewrite_cljc.zip.base.tag(zloc);
var G__93037__$1 = (((G__93037 instanceof cljs.core.Keyword))?G__93037.fqn:null);
switch (G__93037__$1) {
case "token":
return rewrite_cljc.zip.editz.edit_token(zloc,(function (p1__93036_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__93036_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}));

break;
case "multi-line":
return rewrite_cljc.zip.editz.edit_multi_line(zloc,(function (lines){
if(cljs.core.empty_QMARK_(lines)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(lines),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null));
}
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__93037__$1)].join('')));

}
});

//# sourceMappingURL=rewrite_cljc.zip.editz.js.map
