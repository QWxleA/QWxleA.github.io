goog.provide('rewrite_cljc.zip.whitespace');
/**
 * Returns true when the current the node in `zloc` is a Clojure whitespace (which includes the comma).
 */
rewrite_cljc.zip.whitespace.whitespace_QMARK_ = (function rewrite_cljc$zip$whitespace$whitespace_QMARK_(zloc){
var G__78697 = zloc;
var G__78697__$1 = (((G__78697 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78697));
if((G__78697__$1 == null)){
return null;
} else {
return rewrite_cljc.node.whitespace_QMARK_(G__78697__$1);
}
});
/**
 * Returns true when the current node in `zloc` is a linebreak.
 */
rewrite_cljc.zip.whitespace.linebreak_QMARK_ = (function rewrite_cljc$zip$whitespace$linebreak_QMARK_(zloc){
var G__78698 = zloc;
var G__78698__$1 = (((G__78698 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78698));
if((G__78698__$1 == null)){
return null;
} else {
return rewrite_cljc.node.linebreak_QMARK_(G__78698__$1);
}
});
/**
 * Returns true when the current node in `zloc` is a comment.
 */
rewrite_cljc.zip.whitespace.comment_QMARK_ = (function rewrite_cljc$zip$whitespace$comment_QMARK_(zloc){
var G__78699 = zloc;
var G__78699__$1 = (((G__78699 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78699));
if((G__78699__$1 == null)){
return null;
} else {
return rewrite_cljc.node.comment_QMARK_(G__78699__$1);
}
});
/**
 * Returns true when current node in `zloc` is a whitespace but not a linebreak.
 */
rewrite_cljc.zip.whitespace.whitespace_not_linebreak_QMARK_ = (function rewrite_cljc$zip$whitespace$whitespace_not_linebreak_QMARK_(zloc){
var and__5041__auto__ = rewrite_cljc.zip.whitespace.whitespace_QMARK_(zloc);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(rewrite_cljc.zip.whitespace.linebreak_QMARK_(zloc));
} else {
return and__5041__auto__;
}
});
/**
 * Returns true when current node in `zloc` is whitespace or a comment.
 */
rewrite_cljc.zip.whitespace.whitespace_or_comment_QMARK_ = (function rewrite_cljc$zip$whitespace$whitespace_or_comment_QMARK_(zloc){
var G__78700 = zloc;
var G__78700__$1 = (((G__78700 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78700));
if((G__78700__$1 == null)){
return null;
} else {
return rewrite_cljc.node.whitespace_or_comment_QMARK_(G__78700__$1);
}
});
/**
 * Return zipper with location moved to first location not satisfying predicate `p?` starting from the node in
 * `zloc` and traversing by function `f`.
 */
rewrite_cljc.zip.whitespace.skip = (function rewrite_cljc$zip$whitespace$skip(f,p_QMARK_,zloc){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_cljc.custom_zipper.core.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(f,zloc)))));
});
/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc`
 * and traversing by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.whitespace.skip_whitespace = (function rewrite_cljc$zip$whitespace$skip_whitespace(var_args){
var G__78703 = arguments.length;
switch (G__78703) {
case 1:
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.right,zloc);
}));

(rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return rewrite_cljc.zip.whitespace.skip(f,rewrite_cljc.zip.whitespace.whitespace_or_comment_QMARK_,zloc);
}));

(rewrite_cljc.zip.whitespace.skip_whitespace.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc` traversing left.
 */
rewrite_cljc.zip.whitespace.skip_whitespace_left = (function rewrite_cljc$zip$whitespace$skip_whitespace_left(zloc){
return rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.left,zloc);
});
/**
 * Return zipper with `n` space whitespace node inserted to the left of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.whitespace.insert_space_left = (function rewrite_cljc$zip$whitespace$insert_space_left(var_args){
var G__78705 = arguments.length;
switch (G__78705) {
case 1:
return rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((n > (0))){
return rewrite_cljc.custom_zipper.core.insert_left(zloc,rewrite_cljc.node.spaces(n));
} else {
return zloc;
}
}));

(rewrite_cljc.zip.whitespace.insert_space_left.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` space whitespace node inserted to the right of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.whitespace.insert_space_right = (function rewrite_cljc$zip$whitespace$insert_space_right(var_args){
var G__78707 = arguments.length;
switch (G__78707) {
case 1:
return rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((n > (0))){
return rewrite_cljc.custom_zipper.core.insert_right(zloc,rewrite_cljc.node.spaces(n));
} else {
return zloc;
}
}));

(rewrite_cljc.zip.whitespace.insert_space_right.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` newlines node inserted to the left of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.whitespace.insert_newline_left = (function rewrite_cljc$zip$whitespace$insert_newline_left(var_args){
var G__78709 = arguments.length;
switch (G__78709) {
case 1:
return rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_cljc.custom_zipper.core.insert_left(zloc,rewrite_cljc.node.newlines(n));
}));

(rewrite_cljc.zip.whitespace.insert_newline_left.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` newlines node inserted to the right of the current node in `zloc`.
 * `n` defaults to 1.
 */
rewrite_cljc.zip.whitespace.insert_newline_right = (function rewrite_cljc$zip$whitespace$insert_newline_right(var_args){
var G__78713 = arguments.length;
switch (G__78713) {
case 1:
return rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2(zloc,(1));
}));

(rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_cljc.custom_zipper.core.insert_right(zloc,rewrite_cljc.node.newlines(n));
}));

(rewrite_cljc.zip.whitespace.insert_newline_right.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-space-left]].
 */
rewrite_cljc.zip.whitespace.prepend_space = (function rewrite_cljc$zip$whitespace$prepend_space(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78747 = arguments.length;
var i__5767__auto___78748 = (0);
while(true){
if((i__5767__auto___78748 < len__5766__auto___78747)){
args__5772__auto__.push((arguments[i__5767__auto___78748]));

var G__78749 = (i__5767__auto___78748 + (1));
i__5767__auto___78748 = G__78749;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78717){
var vec__78718 = p__78717;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78718,(0),null);
return rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5043__auto__ = n;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.prepend_space.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.prepend_space.cljs$lang$applyTo = (function (seq78715){
var G__78716 = cljs.core.first(seq78715);
var seq78715__$1 = cljs.core.next(seq78715);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78716,seq78715__$1);
}));

/**
 * DEPRECATED: renamed to [[insert-space-right]].
 */
rewrite_cljc.zip.whitespace.append_space = (function rewrite_cljc$zip$whitespace$append_space(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78750 = arguments.length;
var i__5767__auto___78751 = (0);
while(true){
if((i__5767__auto___78751 < len__5766__auto___78750)){
args__5772__auto__.push((arguments[i__5767__auto___78751]));

var G__78752 = (i__5767__auto___78751 + (1));
i__5767__auto___78751 = G__78752;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78723){
var vec__78724 = p__78723;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78724,(0),null);
return rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5043__auto__ = n;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.append_space.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.append_space.cljs$lang$applyTo = (function (seq78721){
var G__78722 = cljs.core.first(seq78721);
var seq78721__$1 = cljs.core.next(seq78721);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78722,seq78721__$1);
}));

/**
 * DEPRECATED: renamed to [[insert-newline-left]].
 */
rewrite_cljc.zip.whitespace.prepend_newline = (function rewrite_cljc$zip$whitespace$prepend_newline(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78753 = arguments.length;
var i__5767__auto___78754 = (0);
while(true){
if((i__5767__auto___78754 < len__5766__auto___78753)){
args__5772__auto__.push((arguments[i__5767__auto___78754]));

var G__78755 = (i__5767__auto___78754 + (1));
i__5767__auto___78754 = G__78755;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78729){
var vec__78730 = p__78729;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78730,(0),null);
return rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5043__auto__ = n;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.prepend_newline.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.prepend_newline.cljs$lang$applyTo = (function (seq78727){
var G__78728 = cljs.core.first(seq78727);
var seq78727__$1 = cljs.core.next(seq78727);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78728,seq78727__$1);
}));

/**
 * DEPRECATED: renamed to [[insert-newline-right]].
 */
rewrite_cljc.zip.whitespace.append_newline = (function rewrite_cljc$zip$whitespace$append_newline(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78756 = arguments.length;
var i__5767__auto___78757 = (0);
while(true){
if((i__5767__auto___78757 < len__5766__auto___78756)){
args__5772__auto__.push((arguments[i__5767__auto___78757]));

var G__78758 = (i__5767__auto___78757 + (1));
i__5767__auto___78757 = G__78758;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78736){
var vec__78737 = p__78736;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78737,(0),null);
return rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__5043__auto__ = n;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.append_newline.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.append_newline.cljs$lang$applyTo = (function (seq78734){
var G__78735 = cljs.core.first(seq78734);
var seq78734__$1 = cljs.core.next(seq78734);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78735,seq78734__$1);
}));


//# sourceMappingURL=rewrite_cljc.zip.whitespace.js.map
