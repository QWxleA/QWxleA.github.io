goog.provide('rewrite_cljc.zip.move');
/**
 * Return zipper with location moved right to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.right = (function rewrite_cljc$zip$move$right(zloc){
var G__78761 = zloc;
var G__78761__$1 = (((G__78761 == null))?null:rewrite_cljc.custom_zipper.core.right(G__78761));
if((G__78761__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__78761__$1);
}
});
/**
 * Return zipper with location moved left to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.left = (function rewrite_cljc$zip$move$left(zloc){
var G__78762 = zloc;
var G__78762__$1 = (((G__78762 == null))?null:rewrite_cljc.custom_zipper.core.left(G__78762));
if((G__78762__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace_left(G__78762__$1);
}
});
/**
 * Return zipper with location moved down to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.down = (function rewrite_cljc$zip$move$down(zloc){
var G__78764 = zloc;
var G__78764__$1 = (((G__78764 == null))?null:rewrite_cljc.custom_zipper.core.down(G__78764));
if((G__78764__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__78764__$1);
}
});
/**
 * Return zipper with location moved up to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.up = (function rewrite_cljc$zip$move$up(zloc){
var G__78766 = zloc;
var G__78766__$1 = (((G__78766 == null))?null:rewrite_cljc.custom_zipper.core.up(G__78766));
if((G__78766__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace_left(G__78766__$1);
}
});
/**
 * Return zipper with location moved to the next depth-first non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.next = (function rewrite_cljc$zip$move$next(zloc){
if(cljs.core.truth_(zloc)){
var or__5043__auto__ = (function (){var G__78769 = zloc;
var G__78769__$1 = (((G__78769 == null))?null:rewrite_cljc.custom_zipper.core.next(G__78769));
if((G__78769__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.next,G__78769__$1);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(zloc,cljs.core.assoc,new cljs.core.Keyword("rewrite-cljc.zip.move","end?","rewrite-cljc.zip.move/end?",-786585712),true);
}
} else {
return null;
}
});
/**
 * Return true if `zloc` is at end of depth-first traversal.
 */
rewrite_cljc.zip.move.end_QMARK_ = (function rewrite_cljc$zip$move$end_QMARK_(zloc){
var or__5043__auto__ = cljs.core.not(zloc);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = rewrite_cljc.custom_zipper.core.end_QMARK_(zloc);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword("rewrite-cljc.zip.move","end?","rewrite-cljc.zip.move/end?",-786585712).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(zloc));
}
}
});
/**
 * Return true if at rightmost non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.rightmost_QMARK_ = (function rewrite_cljc$zip$move$rightmost_QMARK_(zloc){
return (rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.custom_zipper.core.right(zloc)) == null);
});
/**
 * Return true if at leftmost non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.leftmost_QMARK_ = (function rewrite_cljc$zip$move$leftmost_QMARK_(zloc){
return (rewrite_cljc.zip.whitespace.skip_whitespace_left(rewrite_cljc.custom_zipper.core.left(zloc)) == null);
});
/**
 * Return zipper with location moved to the previous depth-first non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.prev = (function rewrite_cljc$zip$move$prev(zloc){
var G__78772 = zloc;
var G__78772__$1 = (((G__78772 == null))?null:rewrite_cljc.custom_zipper.core.prev(G__78772));
if((G__78772__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.prev,G__78772__$1);
}
});
/**
 * Return zipper with location moved to the leftmost non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.leftmost = (function rewrite_cljc$zip$move$leftmost(zloc){
var G__78774 = zloc;
var G__78774__$1 = (((G__78774 == null))?null:rewrite_cljc.custom_zipper.core.leftmost(G__78774));
if((G__78774__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__78774__$1);
}
});
/**
 * Return zipper with location moved to the rightmost non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.rightmost = (function rewrite_cljc$zip$move$rightmost(zloc){
var G__78776 = zloc;
var G__78776__$1 = (((G__78776 == null))?null:rewrite_cljc.custom_zipper.core.rightmost(G__78776));
if((G__78776__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace_left(G__78776__$1);
}
});

//# sourceMappingURL=rewrite_cljc.zip.move.js.map
