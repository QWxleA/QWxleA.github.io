goog.provide('rewrite_cljc.zip.findz');
rewrite_cljc.zip.findz.tag_predicate = (function rewrite_cljc$zip$findz$tag_predicate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78870 = arguments.length;
var i__5767__auto___78871 = (0);
while(true){
if((i__5767__auto___78871 < len__5766__auto___78870)){
args__5772__auto__.push((arguments[i__5767__auto___78871]));

var G__78872 = (i__5767__auto___78871 + (1));
i__5767__auto___78871 = G__78872;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return rewrite_cljc.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(rewrite_cljc.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic = (function (t,p__78819){
var vec__78820 = p__78819;
var additional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78820,(0),null);
if(cljs.core.truth_(additional)){
return (function (node){
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.zip.base.tag(node),t);
if(and__5041__auto__){
return (additional.cljs$core$IFn$_invoke$arity$1 ? additional.cljs$core$IFn$_invoke$arity$1(node) : additional.call(null,node));
} else {
return and__5041__auto__;
}
});
} else {
return (function (p1__78811_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.zip.base.tag(p1__78811_SHARP_),t);
});
}
}));

(rewrite_cljc.zip.findz.tag_predicate.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_cljc.zip.findz.tag_predicate.cljs$lang$applyTo = (function (seq78817){
var G__78818 = cljs.core.first(seq78817);
var seq78817__$1 = cljs.core.next(seq78817);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78818,seq78817__$1);
}));

rewrite_cljc.zip.findz.position_in_range_QMARK_ = (function rewrite_cljc$zip$findz$position_in_range_QMARK_(zloc,pos){
var vec__78832 = ((cljs.core.map_QMARK_(pos))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(pos)], null):pos);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78832,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78832,(1),null);
if((((r <= (0))) || ((c <= (0))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("zipper row and col positions are ones-based",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null));
} else {
}

var vec__78837 = rewrite_cljc.custom_zipper.core.position_span(zloc);
var vec__78840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78837,(0),null);
var zstart_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78840,(0),null);
var zstart_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78840,(1),null);
var vec__78843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78837,(1),null);
var zend_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78843,(0),null);
var zend_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78843,(1),null);
var and__5041__auto__ = (r >= zstart_row);
if(and__5041__auto__){
var and__5041__auto____$1 = (r <= zend_row);
if(and__5041__auto____$1){
var and__5041__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,zstart_row))?(c >= zstart_col):true);
if(and__5041__auto____$2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,zend_row)){
return (c < zend_col);
} else {
return true;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
/**
 * Return the first node satisfying predicate `p?` seaching from the current node
 * in `zloc` traversing by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.findz.find = (function rewrite_cljc$zip$findz$find(var_args){
var G__78848 = arguments.length;
switch (G__78848) {
case 2:
return rewrite_cljc.zip.findz.find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.findz.find.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.findz.find.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_cljc.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_cljc.zip.move.right,p_QMARK_);
}));

(rewrite_cljc.zip.findz.find.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(p_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_cljc.zip.move.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(f,zloc)))));
}));

(rewrite_cljc.zip.findz.find.cljs$lang$maxFixedArity = 3);

/**
 * Return the last node spanning position `pos` that satisfies predicate `p?`
 * searching depth-first from the current node in `zloc`.
 * 
 *   NOTE: Does not ignore whitespace/comment nodes.
 */
rewrite_cljc.zip.findz.find_last_by_pos = (function rewrite_cljc$zip$findz$find_last_by_pos(var_args){
var G__78851 = arguments.length;
switch (G__78851) {
case 2:
return rewrite_cljc.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$2 = (function (zloc,pos){
return rewrite_cljc.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3(zloc,pos,cljs.core.constantly(true));
}));

(rewrite_cljc.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3 = (function (zloc,pos,p_QMARK_){
return cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78849_SHARP_){
var and__5041__auto__ = (p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__78849_SHARP_) : p_QMARK_.call(null,p1__78849_SHARP_));
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_cljc.zip.findz.position_in_range_QMARK_(p1__78849_SHARP_,pos);
} else {
return and__5041__auto__;
}
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_cljc.zip.move.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(rewrite_cljc.custom_zipper.core.next,zloc)))));
}));

(rewrite_cljc.zip.findz.find_last_by_pos.cljs$lang$maxFixedArity = 3);

/**
 * Return first node satisfying predicate `p?` searching depth-first from
 * the current node in `zloc`.
 */
rewrite_cljc.zip.findz.find_depth_first = (function rewrite_cljc$zip$findz$find_depth_first(zloc,p_QMARK_){
return rewrite_cljc.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_cljc.zip.move.next,p_QMARK_);
});
/**
 * Return the first node satisfying predicate `p?` searching one movement `f` from the current
 * node in `zloc` traversing by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.findz.find_next = (function rewrite_cljc$zip$findz$find_next(var_args){
var G__78853 = arguments.length;
switch (G__78853) {
case 2:
return rewrite_cljc.zip.findz.find_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.findz.find_next.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_cljc.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_cljc.zip.move.right,p_QMARK_);
}));

(rewrite_cljc.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
var G__78854 = zloc;
var G__78854__$1 = (((G__78854 == null))?null:(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__78854) : f.call(null,G__78854)));
if((G__78854__$1 == null)){
return null;
} else {
return rewrite_cljc.zip.findz.find.cljs$core$IFn$_invoke$arity$3(G__78854__$1,f,p_QMARK_);
}
}));

(rewrite_cljc.zip.findz.find_next.cljs$lang$maxFixedArity = 3);

/**
 * Return the first node satisfying predicate `p?` searching depth-first from one
 * node after the current node in `zloc`
 */
rewrite_cljc.zip.findz.find_next_depth_first = (function rewrite_cljc$zip$findz$find_next_depth_first(zloc,p_QMARK_){
return rewrite_cljc.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_cljc.zip.move.next,p_QMARK_);
});
/**
 * Return the first node with tag `t` searching from the current node in `zloc` traversing by
 * function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.findz.find_tag = (function rewrite_cljc$zip$findz$find_tag(var_args){
var G__78857 = arguments.length;
switch (G__78857) {
case 2:
return rewrite_cljc.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_cljc.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_cljc.zip.move.right,t);
}));

(rewrite_cljc.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_cljc.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,f,(function (p1__78855_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.zip.base.tag(p1__78855_SHARP_),t);
}));
}));

(rewrite_cljc.zip.findz.find_tag.cljs$lang$maxFixedArity = 3);

/**
 * Return the first node with tag `t` searching one movement `f` from the current
 * node in `zloc` traversing by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.findz.find_next_tag = (function rewrite_cljc$zip$findz$find_next_tag(var_args){
var G__78859 = arguments.length;
switch (G__78859) {
case 2:
return rewrite_cljc.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_cljc.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_cljc.zip.move.right,t);
}));

(rewrite_cljc.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_cljc.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3(zloc,f,rewrite_cljc.zip.findz.tag_predicate(t));
}));

(rewrite_cljc.zip.findz.find_next_tag.cljs$lang$maxFixedArity = 3);

/**
 * Return the last node spanning position `pos` with tag `t` searching depth-first from the current node in `zloc`.
 */
rewrite_cljc.zip.findz.find_tag_by_pos = (function rewrite_cljc$zip$findz$find_tag_by_pos(zloc,pos,t){
return rewrite_cljc.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3(zloc,pos,(function (p1__78860_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.zip.base.tag(p1__78860_SHARP_),t);
}));
});
/**
 * Return the first token node satisfying predicate `p?` searching from the current node in `zloc` traversing
 * by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.findz.find_token = (function rewrite_cljc$zip$findz$find_token(var_args){
var G__78862 = arguments.length;
switch (G__78862) {
case 2:
return rewrite_cljc.zip.findz.find_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.findz.find_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_cljc.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_cljc.zip.move.right,p_QMARK_);
}));

(rewrite_cljc.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_cljc.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,f,rewrite_cljc.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0)));
}));

(rewrite_cljc.zip.findz.find_token.cljs$lang$maxFixedArity = 3);

/**
 * Return the first token node satisfying predicate `p?` searching from the current node in `zloc` traversing
 * by function `f`.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.findz.find_next_token = (function rewrite_cljc$zip$findz$find_next_token(var_args){
var G__78864 = arguments.length;
switch (G__78864) {
case 2:
return rewrite_cljc.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_cljc.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_cljc.zip.move.right,p_QMARK_);
}));

(rewrite_cljc.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_cljc.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(zloc) : f.call(null,zloc)),f,p_QMARK_);
}));

(rewrite_cljc.zip.findz.find_next_token.cljs$lang$maxFixedArity = 3);

/**
 * Return the first token node with value `v` searching one movement `f` from the current node in `zloc` traversing
 * by function `f`.
 * 
 * `v` can be a single value or a set. When `v` is a set matches on any value in set.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.findz.find_value = (function rewrite_cljc$zip$findz$find_value(var_args){
var G__78867 = arguments.length;
switch (G__78867) {
case 2:
return rewrite_cljc.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_cljc.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_cljc.zip.move.right,v);
}));

(rewrite_cljc.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
var p_QMARK_ = ((cljs.core.set_QMARK_(v))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(v,rewrite_cljc.zip.base.sexpr):(function (p1__78865_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.zip.base.sexpr(p1__78865_SHARP_),v);
}));
return rewrite_cljc.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3(zloc,f,p_QMARK_);
}));

(rewrite_cljc.zip.findz.find_value.cljs$lang$maxFixedArity = 3);

/**
 * Return the first token node with value `v` searching one movement `f` from the current node in `zloc` traversing
 * by function `f`.
 * 
 * `v` can be a single value or a set. When `v` is a set matches on any value in set.
 * 
 * `f` defaults to [[rewrite-cljc.zip/right]]
 */
rewrite_cljc.zip.findz.find_next_value = (function rewrite_cljc$zip$findz$find_next_value(var_args){
var G__78869 = arguments.length;
switch (G__78869) {
case 2:
return rewrite_cljc.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_cljc.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_cljc.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_cljc.zip.move.right,v);
}));

(rewrite_cljc.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
return rewrite_cljc.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(zloc) : f.call(null,zloc)),f,v);
}));

(rewrite_cljc.zip.findz.find_next_value.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=rewrite_cljc.zip.findz.js.map
