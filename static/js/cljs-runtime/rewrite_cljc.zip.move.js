goog.provide('rewrite_cljc.zip.move');
/**
 * Return zipper with location moved right to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.right = (function rewrite_cljc$zip$move$right(zloc){
var G__92938 = zloc;
var G__92938__$1 = (((G__92938 == null))?null:rewrite_cljc.custom_zipper.core.right(G__92938));
if((G__92938__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__92938__$1);
}
});
/**
 * Return zipper with location moved left to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.left = (function rewrite_cljc$zip$move$left(zloc){
var G__92939 = zloc;
var G__92939__$1 = (((G__92939 == null))?null:rewrite_cljc.custom_zipper.core.left(G__92939));
if((G__92939__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace_left(G__92939__$1);
}
});
/**
 * Return zipper with location moved down to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.down = (function rewrite_cljc$zip$move$down(zloc){
var G__92940 = zloc;
var G__92940__$1 = (((G__92940 == null))?null:rewrite_cljc.custom_zipper.core.down(G__92940));
if((G__92940__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__92940__$1);
}
});
/**
 * Return zipper with location moved up to next non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.up = (function rewrite_cljc$zip$move$up(zloc){
var G__92941 = zloc;
var G__92941__$1 = (((G__92941 == null))?null:rewrite_cljc.custom_zipper.core.up(G__92941));
if((G__92941__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace_left(G__92941__$1);
}
});
/**
 * Return zipper with location moved to the next depth-first non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.next = (function rewrite_cljc$zip$move$next(zloc){
if(cljs.core.truth_(zloc)){
var or__4253__auto__ = (function (){var G__92942 = zloc;
var G__92942__$1 = (((G__92942 == null))?null:rewrite_cljc.custom_zipper.core.next(G__92942));
if((G__92942__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.next,G__92942__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var or__4253__auto__ = cljs.core.not(zloc);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = rewrite_cljc.custom_zipper.core.end_QMARK_(zloc);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
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
var G__92944 = zloc;
var G__92944__$1 = (((G__92944 == null))?null:rewrite_cljc.custom_zipper.core.prev(G__92944));
if((G__92944__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.prev,G__92944__$1);
}
});
/**
 * Return zipper with location moved to the leftmost non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.leftmost = (function rewrite_cljc$zip$move$leftmost(zloc){
var G__92946 = zloc;
var G__92946__$1 = (((G__92946 == null))?null:rewrite_cljc.custom_zipper.core.leftmost(G__92946));
if((G__92946__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__92946__$1);
}
});
/**
 * Return zipper with location moved to the rightmost non-whitespace/non-comment node in `zloc`.
 */
rewrite_cljc.zip.move.rightmost = (function rewrite_cljc$zip$move$rightmost(zloc){
var G__92947 = zloc;
var G__92947__$1 = (((G__92947 == null))?null:rewrite_cljc.custom_zipper.core.rightmost(G__92947));
if((G__92947__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.whitespace.skip_whitespace_left(G__92947__$1);
}
});

//# sourceMappingURL=rewrite_cljc.zip.move.js.map
