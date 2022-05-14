goog.provide('rewrite_cljc.zip.base');
/**
 * Create and return zipper from Clojure/ClojureScript/EDN `node` (likely parsed by [[rewrite-cljc.parse]]).
 * 
 * Set `:track-position?` in `options` to enable ones-based row/column tracking.
 * See [[rewrite-cljc.zip/position]].
 * 
 * NOTE: when position tracking is enabled, `clojure.zip` is not interchangeable with `rewrite-cljc.zip`, you must use `rewrite-cljc.zip`.
 */
rewrite_cljc.zip.base.edn_STAR_ = (function rewrite_cljc$zip$base$edn_STAR_(var_args){
var G__92945 = arguments.length;
switch (G__92945) {
case 1:
return rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,p__92948){
var map__92949 = p__92948;
var map__92949__$1 = cljs.core.__destructure_map(map__92949);
var track_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92949__$1,new cljs.core.Keyword(null,"track-position?","track-position?",1860535489));
if(cljs.core.truth_(track_position_QMARK_)){
return rewrite_cljc.custom_zipper.core.custom_zipper(node);
} else {
return rewrite_cljc.custom_zipper.core.zipper(node);
}
}));

(rewrite_cljc.zip.base.edn_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Create and return zipper from Clojure/ClojureScript/EDN `node` (likely parsed by [[rewrite-cljc.parse]])
 * and move to the first non-whitespace/non-comment child.
 * 
 * Set `:track-position?` in `options` to enable ones-based row/column tracking.
 * See [[rewrite-cljc.zip/position]].
 * 
 * NOTE: when position tracking is enabled, `clojure.zip` is not interchangeable with `rewrite-cljc.zip`, you must use `rewrite-cljc.zip`.
 */
rewrite_cljc.zip.base.edn = (function rewrite_cljc$zip$base$edn(var_args){
var G__92951 = arguments.length;
switch (G__92951) {
case 1:
return rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$1 = (function (node){
return rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$2(node,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$2 = (function (node,options){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.tag(node),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2(node,options);
var or__4253__auto__ = rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.custom_zipper.core.down(top));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return top;
}
} else {
var G__92981 = rewrite_cljc.node.forms_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
var G__92982 = options;
node = G__92981;
options = G__92982;
continue;
}
break;
}
}));

(rewrite_cljc.zip.base.edn.cljs$lang$maxFixedArity = 2);

/**
 * Return tag of current node in `zloc`.
 */
rewrite_cljc.zip.base.tag = (function rewrite_cljc$zip$base$tag(zloc){
var G__92952 = zloc;
var G__92952__$1 = (((G__92952 == null))?null:rewrite_cljc.custom_zipper.core.node(G__92952));
if((G__92952__$1 == null)){
return null;
} else {
return rewrite_cljc.node.tag(G__92952__$1);
}
});
/**
 * Return s-expression of current node in `zloc`.
 */
rewrite_cljc.zip.base.sexpr = (function rewrite_cljc$zip$base$sexpr(zloc){
var G__92953 = zloc;
var G__92953__$1 = (((G__92953 == null))?null:rewrite_cljc.custom_zipper.core.node(G__92953));
if((G__92953__$1 == null)){
return null;
} else {
return rewrite_cljc.node.sexpr(G__92953__$1);
}
});
/**
 * Return s-expression of children of current node in `zloc`.
 */
rewrite_cljc.zip.base.child_sexprs = (function rewrite_cljc$zip$base$child_sexprs(zloc){
var G__92954 = zloc;
var G__92954__$1 = (((G__92954 == null))?null:rewrite_cljc.custom_zipper.core.node(G__92954));
if((G__92954__$1 == null)){
return null;
} else {
return rewrite_cljc.node.child_sexprs(G__92954__$1);
}
});
/**
 * Return length of printable string of current node in `zloc`.
 */
rewrite_cljc.zip.base.length = (function rewrite_cljc$zip$base$length(zloc){
var or__4253__auto__ = (function (){var G__92955 = zloc;
var G__92955__$1 = (((G__92955 == null))?null:rewrite_cljc.custom_zipper.core.node(G__92955));
if((G__92955__$1 == null)){
return null;
} else {
return rewrite_cljc.node.length(G__92955__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
});
/**
 * DEPRECATED. Return a tag/s-expression pair for inner nodes, or
 * the s-expression itself for leaves.
 */
rewrite_cljc.zip.base.value = (function rewrite_cljc$zip$base$value(zloc){
var G__92956 = zloc;
var G__92956__$1 = (((G__92956 == null))?null:rewrite_cljc.custom_zipper.core.node(G__92956));
if((G__92956__$1 == null)){
return null;
} else {
return rewrite_cljc.node.value(G__92956__$1);
}
});
/**
 * Create and return zipper from all forms in Clojure/ClojureScript/EDN string `s`.
 * 
 * Set `:track-position?` in `options` to enable ones-based row/column tracking.
 * See [[rewrite-cljc.zip/position]].
 * 
 * NOTE: when position tracking is enabled, `clojure.zip` is not interchangeable with `rewrite-cljc.zip`, you must use `rewrite-cljc.zip`.
 */
rewrite_cljc.zip.base.of_string = (function rewrite_cljc$zip$base$of_string(var_args){
var G__92958 = arguments.length;
switch (G__92958) {
case 1:
return rewrite_cljc.zip.base.of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.zip.base.of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.base.of_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return rewrite_cljc.zip.base.of_string.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.zip.base.of_string.cljs$core$IFn$_invoke$arity$2 = (function (s,options){
var G__92959 = s;
var G__92959__$1 = (((G__92959 == null))?null:rewrite_cljc.parser.parse_string_all(G__92959));
if((G__92959__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$2(G__92959__$1,options);
}
}));

(rewrite_cljc.zip.base.of_string.cljs$lang$maxFixedArity = 2);

/**
 * Return string representing the current node in `zloc`.
 */
rewrite_cljc.zip.base.string = (function rewrite_cljc$zip$base$string(zloc){
var G__92962 = zloc;
var G__92962__$1 = (((G__92962 == null))?null:rewrite_cljc.custom_zipper.core.node(G__92962));
if((G__92962__$1 == null)){
return null;
} else {
return rewrite_cljc.node.string(G__92962__$1);
}
});
/**
 * Return string representing the zipped-up `zloc` zipper.
 */
rewrite_cljc.zip.base.root_string = (function rewrite_cljc$zip$base$root_string(zloc){
var G__92964 = zloc;
var G__92964__$1 = (((G__92964 == null))?null:rewrite_cljc.custom_zipper.core.root(G__92964));
if((G__92964__$1 == null)){
return null;
} else {
return rewrite_cljc.node.string(G__92964__$1);
}
});
rewrite_cljc.zip.base.print_BANG_ = (function rewrite_cljc$zip$base$print_BANG_(s,_writer){
return cljs.core.string_print(s);
});
/**
 * Print current node in `zloc`.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_cljc.zip.base.print = (function rewrite_cljc$zip$base$print(var_args){
var args__4870__auto__ = [];
var len__4864__auto___92984 = arguments.length;
var i__4865__auto___92985 = (0);
while(true){
if((i__4865__auto___92985 < len__4864__auto___92984)){
args__4870__auto__.push((arguments[i__4865__auto___92985]));

var G__92986 = (i__4865__auto___92985 + (1));
i__4865__auto___92985 = G__92986;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.base.print.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rewrite_cljc.zip.base.print.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__92967){
var vec__92968 = p__92967;
var writer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92968,(0),null);
var G__92971 = zloc;
var G__92971__$1 = (((G__92971 == null))?null:rewrite_cljc.zip.base.string(G__92971));
if((G__92971__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.base.print_BANG_(G__92971__$1,writer);
}
}));

(rewrite_cljc.zip.base.print.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.base.print.cljs$lang$applyTo = (function (seq92965){
var G__92966 = cljs.core.first(seq92965);
var seq92965__$1 = cljs.core.next(seq92965);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92966,seq92965__$1);
}));

/**
 * Zip up and print `zloc` from root node.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_cljc.zip.base.print_root = (function rewrite_cljc$zip$base$print_root(var_args){
var args__4870__auto__ = [];
var len__4864__auto___92987 = arguments.length;
var i__4865__auto___92988 = (0);
while(true){
if((i__4865__auto___92988 < len__4864__auto___92987)){
args__4870__auto__.push((arguments[i__4865__auto___92988]));

var G__92989 = (i__4865__auto___92988 + (1));
i__4865__auto___92988 = G__92989;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.base.print_root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rewrite_cljc.zip.base.print_root.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__92974){
var vec__92975 = p__92974;
var writer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92975,(0),null);
var G__92978 = zloc;
var G__92978__$1 = (((G__92978 == null))?null:rewrite_cljc.zip.base.root_string(G__92978));
if((G__92978__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.base.print_BANG_(G__92978__$1,writer);
}
}));

(rewrite_cljc.zip.base.print_root.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.base.print_root.cljs$lang$applyTo = (function (seq92972){
var G__92973 = cljs.core.first(seq92972);
var seq92972__$1 = cljs.core.next(seq92972);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92973,seq92972__$1);
}));


//# sourceMappingURL=rewrite_cljc.zip.base.js.map
