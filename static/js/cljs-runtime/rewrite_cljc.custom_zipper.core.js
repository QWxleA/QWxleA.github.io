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
rewrite_cljc.custom_zipper.core.node = (function rewrite_cljc$custom_zipper$core$node(G__92738){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92738))){
var zloc = G__92738;
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.node(G__92738);
}
});
/**
 * Returns true if the current node in `zloc` is a branch.
 */
rewrite_cljc.custom_zipper.core.branch_QMARK_ = (function rewrite_cljc$custom_zipper$core$branch_QMARK_(G__92739){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92739))){
var zloc = G__92739;
return rewrite_cljc.node.protocols.inner_QMARK_(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.branch_QMARK_(G__92739);
}
});
/**
 * Returns a seq of the children of current node in `zloc`, which must be a branch.
 */
rewrite_cljc.custom_zipper.core.children = (function rewrite_cljc$custom_zipper$core$children(G__92740){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92740))){
var map__92741 = G__92740;
var map__92741__$1 = cljs.core.__destructure_map(map__92741);
var zloc = map__92741__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92741__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc))){
return cljs.core.seq(rewrite_cljc.node.protocols.children(node));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("called children on a leaf node",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return clojure.zip.children(G__92740);
}
});
/**
 * Returns a new branch node, given an existing `node` and new
 *   `children`. 
 */
rewrite_cljc.custom_zipper.core.make_node = (function rewrite_cljc$custom_zipper$core$make_node(G__92742,G__92743,G__92744){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92742))){
var _zloc = G__92742;
var node = G__92743;
var children = G__92744;
return rewrite_cljc.node.protocols.replace_children(node,children);
} else {
return clojure.zip.make_node(G__92742,G__92743,G__92744);
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
rewrite_cljc.custom_zipper.core.lefts = (function rewrite_cljc$custom_zipper$core$lefts(G__92745){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92745))){
var zloc = G__92745;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.lefts(G__92745);
}
});
/**
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 */
rewrite_cljc.custom_zipper.core.down = (function rewrite_cljc$custom_zipper$core$down(G__92746){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92746))){
var zloc = G__92746;
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc))){
var map__92747 = zloc;
var map__92747__$1 = cljs.core.__destructure_map(map__92747);
var vec__92748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92747__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92748,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92748,(1),null);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92747__$1,new cljs.core.Keyword(null,"node","node",581201198));
var vec__92751 = rewrite_cljc.custom_zipper.core.children(zloc);
var seq__92752 = cljs.core.seq(vec__92751);
var first__92753 = cljs.core.first(seq__92752);
var seq__92752__$1 = cljs.core.next(seq__92752);
var c = first__92753;
var cnext = seq__92752__$1;
var cs = vec__92751;
if(cljs.core.truth_(cs)){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-cljc.custom-zipper.core","custom?","rewrite-cljc.custom-zipper.core/custom?",462907050),true,new cljs.core.Keyword(null,"node","node",581201198),c,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + rewrite_cljc.node.protocols.leader_length(node))], null),new cljs.core.Keyword(null,"parent","parent",-878878779),zloc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cnext], null);
} else {
return null;
}
} else {
return null;
}
} else {
return clojure.zip.down(G__92746);
}
});
/**
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 */
rewrite_cljc.custom_zipper.core.up = (function rewrite_cljc$custom_zipper$core$up(G__92754){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92754))){
var zloc = G__92754;
var map__92755 = zloc;
var map__92755__$1 = cljs.core.__destructure_map(map__92755);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92755__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92755__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92755__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92755__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92755__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
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
return clojure.zip.up(G__92754);
}
});
/**
 * Zips all the way up `zloc` and returns zipper at the root node, reflecting any changes.
 */
rewrite_cljc.custom_zipper.core.root = (function rewrite_cljc$custom_zipper$core$root(G__92758){
while(true){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92758))){
var map__92759 = G__92758;
var map__92759__$1 = cljs.core.__destructure_map(map__92759);
var zloc = map__92759__$1;
var end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92759__$1,new cljs.core.Keyword(null,"end?","end?",-1423391609));
if(cljs.core.truth_(end_QMARK_)){
return rewrite_cljc.custom_zipper.core.node(zloc);
} else {
var p = rewrite_cljc.custom_zipper.core.up(zloc);
if(cljs.core.truth_(p)){
var G__92839 = p;
G__92758 = G__92839;
continue;
} else {
return rewrite_cljc.custom_zipper.core.node(zloc);
}
}
} else {
return clojure.zip.root(G__92758);
}
break;
}
});
/**
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 */
rewrite_cljc.custom_zipper.core.right = (function rewrite_cljc$custom_zipper$core$right(G__92760){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92760))){
var zloc = G__92760;
var map__92761 = zloc;
var map__92761__$1 = cljs.core.__destructure_map(map__92761);
var vec__92762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92761__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__92763 = cljs.core.seq(vec__92762);
var first__92764 = cljs.core.first(seq__92763);
var seq__92763__$1 = cljs.core.next(seq__92763);
var r = first__92764;
var rnext = seq__92763__$1;
var right = vec__92762;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92761__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92761__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92761__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92761__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_((function (){var and__4251__auto__ = parent;
if(cljs.core.truth_(and__4251__auto__)){
return right;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,position], null)),new cljs.core.Keyword(null,"right","right",-452581833),rnext,new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_cljc.node.protocols._PLUS_extent(position,rewrite_cljc.node.protocols.extent(node))], 0));
} else {
return null;
}
} else {
return clojure.zip.right(G__92760);
}
});
/**
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 */
rewrite_cljc.custom_zipper.core.rightmost = (function rewrite_cljc$custom_zipper$core$rightmost(G__92771){
while(true){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92771))){
var zloc = G__92771;
var temp__5718__auto__ = rewrite_cljc.custom_zipper.core.right(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var next = temp__5718__auto__;
var G__92840 = next;
G__92771 = G__92840;
continue;
} else {
return zloc;
}
} else {
return clojure.zip.rightmost(G__92771);
}
break;
}
});
/**
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 */
rewrite_cljc.custom_zipper.core.left = (function rewrite_cljc$custom_zipper$core$left(G__92778){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92778))){
var zloc = G__92778;
var map__92779 = zloc;
var map__92779__$1 = cljs.core.__destructure_map(map__92779);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92779__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92779__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92779__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92779__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__4251__auto__ = parent;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(left);
} else {
return and__4251__auto__;
}
})())){
var vec__92780 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92780,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92780,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(node,right)], 0));
} else {
return null;
}
} else {
return clojure.zip.left(G__92778);
}
});
/**
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 */
rewrite_cljc.custom_zipper.core.leftmost = (function rewrite_cljc$custom_zipper$core$leftmost(G__92783){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92783))){
var zloc = G__92783;
var map__92784 = zloc;
var map__92784__$1 = cljs.core.__destructure_map(map__92784);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92784__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92784__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92784__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92784__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__4251__auto__ = parent;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(left);
} else {
return and__4251__auto__;
}
})())){
var vec__92785 = cljs.core.first(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92785,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92785,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(left)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([right], 0))], 0));
} else {
return zloc;
}
} else {
return clojure.zip.leftmost(G__92783);
}
});
/**
 * Returns zipper with `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 */
rewrite_cljc.custom_zipper.core.insert_left = (function rewrite_cljc$custom_zipper$core$insert_left(G__92788,G__92789){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92788))){
var zloc = G__92788;
var item = G__92789;
var map__92790 = zloc;
var map__92790__$1 = cljs.core.__destructure_map(map__92790);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92790__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92790__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92790__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert left at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,position], null)),new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_cljc.node.protocols._PLUS_extent(position,rewrite_cljc.node.protocols.extent(item))], 0));
}
} else {
return clojure.zip.insert_left(G__92788,G__92789);
}
});
/**
 * Returns zipper with `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 */
rewrite_cljc.custom_zipper.core.insert_right = (function rewrite_cljc$custom_zipper$core$insert_right(G__92794,G__92795){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92794))){
var zloc = G__92794;
var item = G__92795;
var map__92796 = zloc;
var map__92796__$1 = cljs.core.__destructure_map(map__92796);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92796__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92796__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert right at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons(item,right)], 0));
}
} else {
return clojure.zip.insert_right(G__92794,G__92795);
}
});
/**
 * Returns zipper with `node` replacing current node in `zloc`, without moving location.
 */
rewrite_cljc.custom_zipper.core.replace = (function rewrite_cljc$custom_zipper$core$replace(G__92801,G__92802){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92801))){
var zloc = G__92801;
var node = G__92802;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),node], 0));
} else {
return clojure.zip.replace(G__92801,G__92802);
}
});
/**
 * Returns zipper with value of `(f current-node args)` replacing current node in `zloc`
 */
rewrite_cljc.custom_zipper.core.edit = (function rewrite_cljc$custom_zipper$core$edit(var_args){
var args__4870__auto__ = [];
var len__4864__auto___92841 = arguments.length;
var i__4865__auto___92842 = (0);
while(true){
if((i__4865__auto___92842 < len__4864__auto___92841)){
args__4870__auto__.push((arguments[i__4865__auto___92842]));

var G__92843 = (i__4865__auto___92842 + (1));
i__4865__auto___92842 = G__92843;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return rewrite_cljc.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
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
(rewrite_cljc.custom_zipper.core.edit.cljs$lang$applyTo = (function (seq92803){
var G__92804 = cljs.core.first(seq92803);
var seq92803__$1 = cljs.core.next(seq92803);
var G__92805 = cljs.core.first(seq92803__$1);
var seq92803__$2 = cljs.core.next(seq92803__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92804,G__92805,seq92803__$2);
}));

/**
 * Returns zipper with `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 */
rewrite_cljc.custom_zipper.core.insert_child = (function rewrite_cljc$custom_zipper$core$insert_child(G__92806,G__92807){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92806))){
var zloc = G__92806;
var item = G__92807;
return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.custom_zipper.core.make_node(zloc,rewrite_cljc.custom_zipper.core.node(zloc),cljs.core.cons(item,rewrite_cljc.custom_zipper.core.children(zloc))));
} else {
return clojure.zip.insert_child(G__92806,G__92807);
}
});
/**
 * Returns zipper with `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 */
rewrite_cljc.custom_zipper.core.append_child = (function rewrite_cljc$custom_zipper$core$append_child(G__92811,G__92812){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92811))){
var zloc = G__92811;
var item = G__92812;
return rewrite_cljc.custom_zipper.core.replace(zloc,rewrite_cljc.custom_zipper.core.make_node(zloc,rewrite_cljc.custom_zipper.core.node(zloc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.custom_zipper.core.children(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
} else {
return clojure.zip.append_child(G__92811,G__92812);
}
});
/**
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 */
rewrite_cljc.custom_zipper.core.next = (function rewrite_cljc$custom_zipper$core$next(G__92813){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92813))){
var map__92814 = G__92813;
var map__92814__$1 = cljs.core.__destructure_map(map__92814);
var zloc = map__92814__$1;
var end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92814__$1,new cljs.core.Keyword(null,"end?","end?",-1423391609));
if(cljs.core.truth_(end_QMARK_)){
return zloc;
} else {
var or__4253__auto__ = (function (){var and__4251__auto__ = rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc);
if(cljs.core.truth_(and__4251__auto__)){
return rewrite_cljc.custom_zipper.core.down(zloc);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = rewrite_cljc.custom_zipper.core.right(zloc);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var p = zloc;
while(true){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.core.up(p))){
var or__4253__auto____$2 = rewrite_cljc.custom_zipper.core.right(rewrite_cljc.custom_zipper.core.up(p));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var G__92855 = rewrite_cljc.custom_zipper.core.up(p);
p = G__92855;
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
return clojure.zip.next(G__92813);
}
});
/**
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 */
rewrite_cljc.custom_zipper.core.prev = (function rewrite_cljc$custom_zipper$core$prev(G__92815){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92815))){
var zloc = G__92815;
var temp__5718__auto__ = rewrite_cljc.custom_zipper.core.left(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var lloc = temp__5718__auto__;
var zloc__$1 = lloc;
while(true){
var temp__5718__auto____$1 = (function (){var and__4251__auto__ = rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__4251__auto__)){
return rewrite_cljc.custom_zipper.core.down(zloc__$1);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var child = temp__5718__auto____$1;
var G__92859 = rewrite_cljc.custom_zipper.core.rightmost(child);
zloc__$1 = G__92859;
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
return clojure.zip.prev(G__92815);
}
});
/**
 * Returns true if at end of depth-first walk in `zloc`.
 */
rewrite_cljc.custom_zipper.core.end_QMARK_ = (function rewrite_cljc$custom_zipper$core$end_QMARK_(G__92816){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92816))){
var zloc = G__92816;
return new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.end_QMARK_(G__92816);
}
});
/**
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 */
rewrite_cljc.custom_zipper.core.remove = (function rewrite_cljc$custom_zipper$core$remove(G__92818){
if(cljs.core.truth_(rewrite_cljc.custom_zipper.switchable.custom_zipper_QMARK_(G__92818))){
var zloc = G__92818;
var map__92819 = zloc;
var map__92819__$1 = cljs.core.__destructure_map(map__92819);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92819__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92819__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92819__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.seq(left)){
var zloc__$1 = (function (){var vec__92834 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92834,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92834,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop(left)], 0));
})();
while(true){
var temp__5718__auto__ = (function (){var and__4251__auto__ = rewrite_cljc.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__4251__auto__)){
return rewrite_cljc.custom_zipper.core.down(zloc__$1);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
var G__92870 = rewrite_cljc.custom_zipper.core.rightmost(child);
zloc__$1 = G__92870;
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
return clojure.zip.remove(G__92818);
}
});

//# sourceMappingURL=rewrite_cljc.custom_zipper.core.js.map
