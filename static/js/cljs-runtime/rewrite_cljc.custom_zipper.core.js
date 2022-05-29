goog.provide('rewrite_cljc.custom_zipper.core');
rewrite_cljc.custom_zipper.core.custom_zipper = (function rewrite_cljc$custom_zipper$core$custom_zipper(root){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-cljc.custom-zipper.core","custom?","rewrite-cljc.custom-zipper.core/custom?",462907050),true,new cljs.core.Keyword(null,"node","node",581201198),root,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.List.EMPTY], null);
});
rewrite_cljc.custom_zipper.core.zipper = (function rewrite_cljc$custom_zipper$core$zipper(root){
return clojure.zip.zipper(rewrite_cljc.node.protocols.inner_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,rewrite_cljc.node.protocols.children),rewrite_cljc.node.protocols.replace_children,root);
});
rewrite_cljc.custom_zipper.core.custom_zipper_QMARK_ = (function rewrite_cljc$custom_zipper$core$custom_zipper_QMARK_(value){
return new cljs.core.Keyword("rewrite-cljc.custom-zipper.core","custom?","rewrite-cljc.custom-zipper.core/custom?",462907050).cljs$core$IFn$_invoke$arity$1(value);
});
/**
 * Returns the current node in `zloc`.
 */
rewrite_cljc.custom_zipper.core.node = (function rewrite_cljc$custom_zipper$core$node(G__78579){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78579))){
var zloc = G__78579;
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.node(G__78579);
}
});
/**
 * Returns true if the current node in `zloc` is a branch.
 */
rewrite_cljc.custom_zipper.core.branch_QMARK_ = (function rewrite_cljc$custom_zipper$core$branch_QMARK_(G__78580){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78580))){
var zloc = G__78580;
return rewrite_cljc.node.protocols.inner_QMARK_(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.branch_QMARK_(G__78580);
}
});
/**
 * Returns a seq of the children of current node in `zloc`, which must be a branch.
 */
rewrite_cljc.custom_zipper.core.children = (function rewrite_cljc$custom_zipper$core$children(G__78581){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78581))){
var map__78582 = G__78581;
var map__78582__$1 = cljs.core.__destructure_map(map__78582);
var zloc = map__78582__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78582__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc))){
return cljs.core.seq(rewrite_cljc.node.protocols.children(node));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("called children on a leaf node",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return clojure.zip.children(G__78581);
}
});
/**
 * Returns a new branch node, given an existing `node` and new
 *   `children`. 
 */
rewrite_cljc.custom_zipper.core.make_node = (function rewrite_cljc$custom_zipper$core$make_node(G__78583,G__78584,G__78585){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78583))){
var _zloc = G__78583;
var node = G__78584;
var children = G__78585;
return rewrite_cljc.node.protocols.replace_children(node,children);
} else {
return clojure.zip.make_node(G__78583,G__78584,G__78585);
}
});
/**
 * Returns the ones-based `[row col]` of the start of the current node in `zloc`.
 */
rewrite_cljc.custom_zipper.core.position = (function rewrite_cljc$custom_zipper$core$position(zloc){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["to use position functions, please construct your zipper with ","':track-position?'  set to true."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Returns the ones-based `[[start-row start-col] [end-row end-col]]` of the current node in `zloc`.
 */
rewrite_cljc.custom_zipper.core.position_span = (function rewrite_cljc$custom_zipper$core$position_span(zloc){
var start_pos = rewrite_cljc.custom_zipper.core.position(zloc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_pos,rewrite_cljc.node.protocols._PLUS_extent(start_pos,rewrite_cljc.node.protocols.extent(rewrite_cljc.custom_zipper.core.node(zloc)))], null);
});
/**
 * Returns a seq of the left siblings of current node in `zloc`.
 */
rewrite_cljc.custom_zipper.core.lefts = (function rewrite_cljc$custom_zipper$core$lefts(G__78588){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78588))){
var zloc = G__78588;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.lefts(G__78588);
}
});
/**
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 */
rewrite_cljc.custom_zipper.core.down = (function rewrite_cljc$custom_zipper$core$down(G__78591){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78591))){
var zloc = G__78591;
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc))){
var map__78592 = zloc;
var map__78592__$1 = cljs.core.__destructure_map(map__78592);
var vec__78593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78592__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78593,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78593,(1),null);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78592__$1,new cljs.core.Keyword(null,"node","node",581201198));
var vec__78596 = rewrite_cljc.custom_zipper.core.children(zloc);
var seq__78597 = cljs.core.seq(vec__78596);
var first__78598 = cljs.core.first(seq__78597);
var seq__78597__$1 = cljs.core.next(seq__78597);
var c = first__78598;
var cnext = seq__78597__$1;
var cs = vec__78596;
if(cljs.core.truth_(cs)){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-cljc.custom-zipper.core","custom?","rewrite-cljc.custom-zipper.core/custom?",462907050),true,new cljs.core.Keyword(null,"node","node",581201198),c,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + rewrite_cljc.node.protocols.leader_length(node))], null),new cljs.core.Keyword(null,"parent","parent",-878878779),zloc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cnext], null);
} else {
return null;
}
} else {
return null;
}
} else {
return clojure.zip.down(G__78591);
}
});
/**
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 */
rewrite_cljc.custom_zipper.core.up = (function rewrite_cljc$custom_zipper$core$up(G__78599){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78599))){
var zloc = G__78599;
var map__78600 = zloc;
var map__78600__$1 = cljs.core.__destructure_map(map__78600);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78600__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78600__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78600__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78600__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78600__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
if(cljs.core.truth_(parent)){
if(cljs.core.truth_(changed_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_cljc.custom_zipper.core.make_node(zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,left),cljs.core.cons(node,right)))], 0));
} else {
return parent;
}
} else {
return null;
}
} else {
return clojure.zip.up(G__78599);
}
});
/**
 * Zips all the way up `zloc` and returns zipper at the root node, reflecting any changes.
 */
rewrite_cljc.custom_zipper.core.root = (function rewrite_cljc$custom_zipper$core$root(G__78601){
while(true){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78601))){
var map__78602 = G__78601;
var map__78602__$1 = cljs.core.__destructure_map(map__78602);
var zloc = map__78602__$1;
var end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78602__$1,new cljs.core.Keyword(null,"end?","end?",-1423391609));
if(cljs.core.truth_(end_QMARK_)){
return rewrite_cljc.custom_zipper.core.node(zloc);
} else {
var p = rewrite_cljc.custom_zipper.core.up(zloc);
if(cljs.core.truth_(p)){
var G__78696 = p;
G__78601 = G__78696;
continue;
} else {
return rewrite_cljc.custom_zipper.core.node(zloc);
}
}
} else {
return clojure.zip.root(G__78601);
}
break;
}
});
/**
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 */
rewrite_cljc.custom_zipper.core.right = (function rewrite_cljc$custom_zipper$core$right(G__78603){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78603))){
var zloc = G__78603;
var map__78604 = zloc;
var map__78604__$1 = cljs.core.__destructure_map(map__78604);
var vec__78605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78604__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__78606 = cljs.core.seq(vec__78605);
var first__78607 = cljs.core.first(seq__78606);
var seq__78606__$1 = cljs.core.next(seq__78606);
var r = first__78607;
var rnext = seq__78606__$1;
var right = vec__78605;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78604__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78604__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78604__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78604__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return right;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,position], null)),new cljs.core.Keyword(null,"right","right",-452581833),rnext,new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_cljc.node.protocols._PLUS_extent(position,rewrite_cljc.node.protocols.extent(node))], 0));
} else {
return null;
}
} else {
return clojure.zip.right(G__78603);
}
});
/**
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 */
rewrite_cljc.custom_zipper.core.rightmost = (function rewrite_cljc$custom_zipper$core$rightmost(G__78608){
while(true){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78608))){
var zloc = G__78608;
var temp__5718__auto__ = rewrite_cljc.custom_zipper.core.right(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var next = temp__5718__auto__;
var G__78701 = next;
G__78608 = G__78701;
continue;
} else {
return zloc;
}
} else {
return clojure.zip.rightmost(G__78608);
}
break;
}
});
/**
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 */
rewrite_cljc.custom_zipper.core.left = (function rewrite_cljc$custom_zipper$core$left(G__78609){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78609))){
var zloc = G__78609;
var map__78610 = zloc;
var map__78610__$1 = cljs.core.__destructure_map(map__78610);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78610__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78610__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78610__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78610__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(left);
} else {
return and__5041__auto__;
}
})())){
var vec__78611 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78611,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78611,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(node,right)], 0));
} else {
return null;
}
} else {
return clojure.zip.left(G__78609);
}
});
/**
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 */
rewrite_cljc.custom_zipper.core.leftmost = (function rewrite_cljc$custom_zipper$core$leftmost(G__78616){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78616))){
var zloc = G__78616;
var map__78623 = zloc;
var map__78623__$1 = cljs.core.__destructure_map(map__78623);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78623__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78623__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78623__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78623__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(left);
} else {
return and__5041__auto__;
}
})())){
var vec__78628 = cljs.core.first(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78628,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78628,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(left)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([right], 0))], 0));
} else {
return zloc;
}
} else {
return clojure.zip.leftmost(G__78616);
}
});
/**
 * Returns zipper with `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 */
rewrite_cljc.custom_zipper.core.insert_left = (function rewrite_cljc$custom_zipper$core$insert_left(G__78631,G__78632){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78631))){
var zloc = G__78631;
var item = G__78632;
var map__78633 = zloc;
var map__78633__$1 = cljs.core.__destructure_map(map__78633);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78633__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78633__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78633__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert left at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,position], null)),new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_cljc.node.protocols._PLUS_extent(position,rewrite_cljc.node.protocols.extent(item))], 0));
}
} else {
return clojure.zip.insert_left(G__78631,G__78632);
}
});
/**
 * Returns zipper with `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 */
rewrite_cljc.custom_zipper.core.insert_right = (function rewrite_cljc$custom_zipper$core$insert_right(G__78634,G__78635){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78634))){
var zloc = G__78634;
var item = G__78635;
var map__78636 = zloc;
var map__78636__$1 = cljs.core.__destructure_map(map__78636);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78636__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78636__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert right at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(item,right)], 0));
}
} else {
return clojure.zip.insert_right(G__78634,G__78635);
}
});
/**
 * Returns zipper with `node` replacing current node in `zloc`, without moving location.
 */
rewrite_cljc.custom_zipper.core.replace = (function rewrite_cljc$custom_zipper$core$replace(G__78638,G__78639){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78638))){
var zloc = G__78638;
var node = G__78639;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),node], 0));
} else {
return clojure.zip.replace(G__78638,G__78639);
}
});
/**
 * Returns zipper with value of `(f current-node args)` replacing current node in `zloc`
 */
rewrite_cljc.custom_zipper.core.edit = (function rewrite_cljc$custom_zipper$core$edit(var_args){
var args__5772__auto__ = [];
var len__5766__auto___78710 = arguments.length;
var i__5767__auto___78712 = (0);
while(true){
if((i__5767__auto___78712 < len__5766__auto___78710)){
args__5772__auto__.push((arguments[i__5767__auto___78712]));

var G__78714 = (i__5767__auto___78712 + (1));
i__5767__auto___78712 = G__78714;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return rewrite_cljc.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(rewrite_cljc.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return rewrite_cljc.custom_zipper.core.replace(zloc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rewrite_cljc.custom_zipper.core.node(zloc),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.zip.edit,zloc,f,args);
}
}));

(rewrite_cljc.custom_zipper.core.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_cljc.custom_zipper.core.edit.cljs$lang$applyTo = (function (seq78640){
var G__78641 = cljs.core.first(seq78640);
var seq78640__$1 = cljs.core.next(seq78640);
var G__78642 = cljs.core.first(seq78640__$1);
var seq78640__$2 = cljs.core.next(seq78640__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78641,G__78642,seq78640__$2);
}));

/**
 * Returns zipper with `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 */
rewrite_cljc.custom_zipper.core.insert_child = (function rewrite_cljc$custom_zipper$core$insert_child(G__78644,G__78645){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78644))){
var zloc = G__78644;
var item = G__78645;
return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.custom_zipper.core.make_node(zloc,rewrite_cljc.custom_zipper.core.node(zloc),cljs.core.cons(item,rewrite_cljc.custom_zipper.core.children(zloc))));
} else {
return clojure.zip.insert_child(G__78644,G__78645);
}
});
/**
 * Returns zipper with `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 */
rewrite_cljc.custom_zipper.core.append_child = (function rewrite_cljc$custom_zipper$core$append_child(G__78646,G__78647){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78646))){
var zloc = G__78646;
var item = G__78647;
return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.custom_zipper.core.make_node(zloc,rewrite_cljc.custom_zipper.core.node(zloc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.children(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
} else {
return clojure.zip.append_child(G__78646,G__78647);
}
});
/**
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 */
rewrite_cljc.custom_zipper.core.next = (function rewrite_cljc$custom_zipper$core$next(G__78648){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78648))){
var map__78649 = G__78648;
var map__78649__$1 = cljs.core.__destructure_map(map__78649);
var zloc = map__78649__$1;
var end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78649__$1,new cljs.core.Keyword(null,"end?","end?",-1423391609));
if(cljs.core.truth_(end_QMARK_)){
return zloc;
} else {
var or__5043__auto__ = (function (){var and__5041__auto__ = rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc);
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_cljc.custom_zipper.core.down(zloc);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = rewrite_cljc.custom_zipper.core.right(zloc);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var p = zloc;
while(true){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.up(p))){
var or__5043__auto____$2 = rewrite_cljc.custom_zipper.core.right(rewrite_cljc.custom_zipper.core.up(p));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var G__78733 = rewrite_cljc.custom_zipper.core.up(p);
p = G__78733;
continue;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"end?","end?",-1423391609),true);
}
break;
}
}
}
}
} else {
return clojure.zip.next(G__78648);
}
});
/**
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 */
rewrite_cljc.custom_zipper.core.prev = (function rewrite_cljc$custom_zipper$core$prev(G__78650){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78650))){
var zloc = G__78650;
var temp__5718__auto__ = rewrite_cljc.custom_zipper.core.left(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var lloc = temp__5718__auto__;
var zloc__$1 = lloc;
while(true){
var temp__5718__auto____$1 = (function (){var and__5041__auto__ = rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_cljc.custom_zipper.core.down(zloc__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var child = temp__5718__auto____$1;
var G__78740 = rewrite_cljc.custom_zipper.core.rightmost(child);
zloc__$1 = G__78740;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return rewrite_cljc.custom_zipper.core.up(zloc);
}
} else {
return clojure.zip.prev(G__78650);
}
});
/**
 * Returns true if at end of depth-first walk in `zloc`.
 */
rewrite_cljc.custom_zipper.core.end_QMARK_ = (function rewrite_cljc$custom_zipper$core$end_QMARK_(G__78651){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78651))){
var zloc = G__78651;
return new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.end_QMARK_(G__78651);
}
});
/**
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 */
rewrite_cljc.custom_zipper.core.remove = (function rewrite_cljc$custom_zipper$core$remove(G__78652){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__78652))){
var zloc = G__78652;
var map__78653 = zloc;
var map__78653__$1 = cljs.core.__destructure_map(map__78653);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78653__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78653__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78653__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.seq(left)){
var zloc__$1 = (function (){var vec__78657 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78657,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78657,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left)], 0));
})();
while(true){
var temp__5718__auto__ = (function (){var and__5041__auto__ = rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5041__auto__)){
return rewrite_cljc.custom_zipper.core.down(zloc__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
var G__78741 = rewrite_cljc.custom_zipper.core.rightmost(child);
zloc__$1 = G__78741;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),rewrite_cljc.custom_zipper.core.make_node(zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),right)], 0));
}
}
} else {
return clojure.zip.remove(G__78652);
}
});

//# sourceMappingURL=rewrite_cljc.custom_zipper.core.js.map
