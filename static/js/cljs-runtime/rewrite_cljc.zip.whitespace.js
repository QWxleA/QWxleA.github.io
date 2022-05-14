goog.provide('rewrite_cljc.zip.whitespace');
/**
 * Returns true when the current the node in `zloc` is a Clojure whitespace (which includes the comma).
 */
rewrite_cljc.zip.whitespace.whitespace_QMARK_ = (function rewrite_cljc$zip$whitespace$whitespace_QMARK_(zloc){
var G__92844 = zloc;
var G__92844__$1 = (((G__92844 == null))?null:rewrite_cljc.custom_zipper.core.node(G__92844));
if((G__92844__$1 == null)){
return null;
} else {
return rewrite_cljc.node.whitespace_QMARK_(G__92844__$1);
}
});
/**
 * Returns true when the current node in `zloc` is a linebreak.
 */
rewrite_cljc.zip.whitespace.linebreak_QMARK_ = (function rewrite_cljc$zip$whitespace$linebreak_QMARK_(zloc){
var G__92845 = zloc;
var G__92845__$1 = (((G__92845 == null))?null:rewrite_cljc.custom_zipper.core.node(G__92845));
if((G__92845__$1 == null)){
return null;
} else {
return rewrite_cljc.node.linebreak_QMARK_(G__92845__$1);
}
});
/**
 * Returns true when the current node in `zloc` is a comment.
 */
rewrite_cljc.zip.whitespace.comment_QMARK_ = (function rewrite_cljc$zip$whitespace$comment_QMARK_(zloc){
var G__92846 = zloc;
var G__92846__$1 = (((G__92846 == null))?null:rewrite_cljc.custom_zipper.core.node(G__92846));
if((G__92846__$1 == null)){
return null;
} else {
return rewrite_cljc.node.comment_QMARK_(G__92846__$1);
}
});
/**
 * Returns true when current node in `zloc` is a whitespace but not a linebreak.
 */
rewrite_cljc.zip.whitespace.whitespace_not_linebreak_QMARK_ = (function rewrite_cljc$zip$whitespace$whitespace_not_linebreak_QMARK_(zloc){
var and__4251__auto__ = rewrite_cljc.zip.whitespace.whitespace_QMARK_(zloc);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(rewrite_cljc.zip.whitespace.linebreak_QMARK_(zloc));
} else {
return and__4251__auto__;
}
});
/**
 * Returns true when current node in `zloc` is whitespace or a comment.
 */
rewrite_cljc.zip.whitespace.whitespace_or_comment_QMARK_ = (function rewrite_cljc$zip$whitespace$whitespace_or_comment_QMARK_(zloc){
var G__92847 = zloc;
var G__92847__$1 = (((G__92847 == null))?null:rewrite_cljc.custom_zipper.core.node(G__92847));
if((G__92847__$1 == null)){
return null;
} else {
return rewrite_cljc.node.whitespace_or_comment_QMARK_(G__92847__$1);
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
var G__92851 = arguments.length;
switch (G__92851) {
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
var G__92854 = arguments.length;
switch (G__92854) {
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
var G__92857 = arguments.length;
switch (G__92857) {
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
var G__92860 = arguments.length;
switch (G__92860) {
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
var G__92862 = arguments.length;
switch (G__92862) {
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
var args__4870__auto__ = [];
var len__4864__auto___92926 = arguments.length;
var i__4865__auto___92927 = (0);
while(true){
if((i__4865__auto___92927 < len__4864__auto___92926)){
args__4870__auto__.push((arguments[i__4865__auto___92927]));

var G__92928 = (i__4865__auto___92927 + (1));
i__4865__auto___92927 = G__92928;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rewrite_cljc.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__92865){
var vec__92866 = p__92865;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92866,(0),null);
return rewrite_cljc.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__4253__auto__ = n;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.prepend_space.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.prepend_space.cljs$lang$applyTo = (function (seq92863){
var G__92864 = cljs.core.first(seq92863);
var seq92863__$1 = cljs.core.next(seq92863);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92864,seq92863__$1);
}));

/**
 * DEPRECATED: renamed to [[insert-space-right]].
 */
rewrite_cljc.zip.whitespace.append_space = (function rewrite_cljc$zip$whitespace$append_space(var_args){
var args__4870__auto__ = [];
var len__4864__auto___92929 = arguments.length;
var i__4865__auto___92930 = (0);
while(true){
if((i__4865__auto___92930 < len__4864__auto___92929)){
args__4870__auto__.push((arguments[i__4865__auto___92930]));

var G__92931 = (i__4865__auto___92930 + (1));
i__4865__auto___92930 = G__92931;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rewrite_cljc.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__92873){
var vec__92874 = p__92873;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92874,(0),null);
return rewrite_cljc.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__4253__auto__ = n;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.append_space.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.append_space.cljs$lang$applyTo = (function (seq92871){
var G__92872 = cljs.core.first(seq92871);
var seq92871__$1 = cljs.core.next(seq92871);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92872,seq92871__$1);
}));

/**
 * DEPRECATED: renamed to [[insert-newline-left]].
 */
rewrite_cljc.zip.whitespace.prepend_newline = (function rewrite_cljc$zip$whitespace$prepend_newline(var_args){
var args__4870__auto__ = [];
var len__4864__auto___92932 = arguments.length;
var i__4865__auto___92933 = (0);
while(true){
if((i__4865__auto___92933 < len__4864__auto___92932)){
args__4870__auto__.push((arguments[i__4865__auto___92933]));

var G__92934 = (i__4865__auto___92933 + (1));
i__4865__auto___92933 = G__92934;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rewrite_cljc.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__92899){
var vec__92900 = p__92899;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92900,(0),null);
return rewrite_cljc.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__4253__auto__ = n;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.prepend_newline.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.prepend_newline.cljs$lang$applyTo = (function (seq92889){
var G__92890 = cljs.core.first(seq92889);
var seq92889__$1 = cljs.core.next(seq92889);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92890,seq92889__$1);
}));

/**
 * DEPRECATED: renamed to [[insert-newline-right]].
 */
rewrite_cljc.zip.whitespace.append_newline = (function rewrite_cljc$zip$whitespace$append_newline(var_args){
var args__4870__auto__ = [];
var len__4864__auto___92935 = arguments.length;
var i__4865__auto___92936 = (0);
while(true){
if((i__4865__auto___92936 < len__4864__auto___92935)){
args__4870__auto__.push((arguments[i__4865__auto___92936]));

var G__92937 = (i__4865__auto___92936 + (1));
i__4865__auto___92936 = G__92937;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rewrite_cljc.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__92917){
var vec__92918 = p__92917;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92918,(0),null);
return rewrite_cljc.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2(zloc,(function (){var or__4253__auto__ = n;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})());
}));

(rewrite_cljc.zip.whitespace.append_newline.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.whitespace.append_newline.cljs$lang$applyTo = (function (seq92913){
var G__92914 = cljs.core.first(seq92913);
var seq92913__$1 = cljs.core.next(seq92913);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92914,seq92913__$1);
}));


//# sourceMappingURL=rewrite_cljc.zip.whitespace.js.map
