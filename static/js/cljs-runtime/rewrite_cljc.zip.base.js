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
var G__78765 = arguments.length;
switch (G__78765) {
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

(rewrite_cljc.zip.base.edn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (node,p__78767){
var map__78768 = p__78767;
var map__78768__$1 = cljs.core.__destructure_map(map__78768);
var track_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78768__$1,new cljs.core.Keyword(null,"track-position?","track-position?",1860535489));
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
var G__78771 = arguments.length;
switch (G__78771) {
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
var or__5043__auto__ = rewrite_cljc.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.custom_zipper.core.down(top));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return top;
}
} else {
var G__78802 = rewrite_cljc.node.forms_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
var G__78803 = options;
node = G__78802;
options = G__78803;
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
var G__78773 = zloc;
var G__78773__$1 = (((G__78773 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78773));
if((G__78773__$1 == null)){
return null;
} else {
return rewrite_cljc.node.tag(G__78773__$1);
}
});
/**
 * Return s-expression of current node in `zloc`.
 */
rewrite_cljc.zip.base.sexpr = (function rewrite_cljc$zip$base$sexpr(zloc){
var G__78775 = zloc;
var G__78775__$1 = (((G__78775 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78775));
if((G__78775__$1 == null)){
return null;
} else {
return rewrite_cljc.node.sexpr(G__78775__$1);
}
});
/**
 * Return s-expression of children of current node in `zloc`.
 */
rewrite_cljc.zip.base.child_sexprs = (function rewrite_cljc$zip$base$child_sexprs(zloc){
var G__78777 = zloc;
var G__78777__$1 = (((G__78777 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78777));
if((G__78777__$1 == null)){
return null;
} else {
return rewrite_cljc.node.child_sexprs(G__78777__$1);
}
});
/**
 * Return length of printable string of current node in `zloc`.
 */
rewrite_cljc.zip.base.length = (function rewrite_cljc$zip$base$length(zloc){
var or__5043__auto__ = (function (){var G__78778 = zloc;
var G__78778__$1 = (((G__78778 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78778));
if((G__78778__$1 == null)){
return null;
} else {
return rewrite_cljc.node.length(G__78778__$1);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
});
/**
 * DEPRECATED. Return a tag/s-expression pair for inner nodes, or
 * the s-expression itself for leaves.
 */
rewrite_cljc.zip.base.value = (function rewrite_cljc$zip$base$value(zloc){
var G__78779 = zloc;
var G__78779__$1 = (((G__78779 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78779));
if((G__78779__$1 == null)){
return null;
} else {
return rewrite_cljc.node.value(G__78779__$1);
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
var G__78781 = arguments.length;
switch (G__78781) {
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
var G__78782 = s;
var G__78782__$1 = (((G__78782 == null))?null:rewrite_cljc.parser.parse_string_all(G__78782));
if((G__78782__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.base.edn.cljs$core$IFn$_invoke$arity$2(G__78782__$1,options);
}
}));

(rewrite_cljc.zip.base.of_string.cljs$lang$maxFixedArity = 2);

/**
 * Return string representing the current node in `zloc`.
 */
rewrite_cljc.zip.base.string = (function rewrite_cljc$zip$base$string(zloc){
var G__78783 = zloc;
var G__78783__$1 = (((G__78783 == null))?null:rewrite_cljc.custom_zipper.core.node(G__78783));
if((G__78783__$1 == null)){
return null;
} else {
return rewrite_cljc.node.string(G__78783__$1);
}
});
/**
 * Return string representing the zipped-up `zloc` zipper.
 */
rewrite_cljc.zip.base.root_string = (function rewrite_cljc$zip$base$root_string(zloc){
var G__78784 = zloc;
var G__78784__$1 = (((G__78784 == null))?null:rewrite_cljc.custom_zipper.core.root(G__78784));
if((G__78784__$1 == null)){
return null;
} else {
return rewrite_cljc.node.string(G__78784__$1);
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
var args__5772__auto__ = [];
var len__5766__auto___78805 = arguments.length;
var i__5767__auto___78806 = (0);
while(true){
if((i__5767__auto___78806 < len__5766__auto___78805)){
args__5772__auto__.push((arguments[i__5767__auto___78806]));

var G__78807 = (i__5767__auto___78806 + (1));
i__5767__auto___78806 = G__78807;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.base.print.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.base.print.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78787){
var vec__78788 = p__78787;
var writer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78788,(0),null);
var G__78791 = zloc;
var G__78791__$1 = (((G__78791 == null))?null:rewrite_cljc.zip.base.string(G__78791));
if((G__78791__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.base.print_BANG_(G__78791__$1,writer);
}
}));

(rewrite_cljc.zip.base.print.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.base.print.cljs$lang$applyTo = (function (seq78785){
var G__78786 = cljs.core.first(seq78785);
var seq78785__$1 = cljs.core.next(seq78785);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78786,seq78785__$1);
}));

/**
 * Zip up and print `zloc` from root node.
 * 
 * NOTE: Optional `writer` is currently ignored for ClojureScript.
 */
rewrite_cljc.zip.base.print_root = (function rewrite_cljc$zip$base$print_root(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78808 = arguments.length;
var i__5767__auto___78809 = (0);
while(true){
if((i__5767__auto___78809 < len__5766__auto___78808)){
args__5772__auto__.push((arguments[i__5767__auto___78809]));

var G__78810 = (i__5767__auto___78809 + (1));
i__5767__auto___78809 = G__78810;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.base.print_root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.base.print_root.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,p__78794){
var vec__78795 = p__78794;
var writer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78795,(0),null);
var G__78798 = zloc;
var G__78798__$1 = (((G__78798 == null))?null:rewrite_cljc.zip.base.root_string(G__78798));
if((G__78798__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.base.print_BANG_(G__78798__$1,writer);
}
}));

(rewrite_cljc.zip.base.print_root.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.base.print_root.cljs$lang$applyTo = (function (seq78792){
var G__78793 = cljs.core.first(seq78792);
var seq78792__$1 = cljs.core.next(seq78792);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78793,seq78792__$1);
}));


//# sourceMappingURL=rewrite_cljc.zip.base.js.map
