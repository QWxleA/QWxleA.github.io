goog.provide('frontend.extensions.graph');
goog.scope(function(){
  frontend.extensions.graph.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.extensions.graph.highlight_neighbours_BANG_ = (function frontend$extensions$graph$highlight_neighbours_BANG_(graph,node,focus_nodes,_dark_QMARK_){
return graph.graph.forEachNeighbor(node,(function (node__$1,attributes){
if(cljs.core.contains_QMARK_(focus_nodes,node__$1)){
return null;
} else {
var attributes__$1 = cljs_bean.core.__GT_clj(attributes);
var attributes__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attributes__$1,new cljs.core.Keyword(null,"color","color",1011675173),"#6366F1",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#6366F1"], null)], 0));
return graph.resetNodeStyle(node__$1,cljs_bean.core.__GT_js(attributes__$2));
}
}));
});
frontend.extensions.graph.highlight_edges_BANG_ = (function frontend$extensions$graph$highlight_edges_BANG_(graph,node,dark_QMARK_){
return graph.graph.forEachEdge(node,(function (edge,_attributes){
return graph.resetEdgeStyle(edge,cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(dark_QMARK_)?"#999":"#A5B4FC")], null)));
}));
});
frontend.extensions.graph.on_click_handler = (function frontend$extensions$graph$on_click_handler(graph,node,event,_STAR_focus_nodes,_STAR_n_hops,drag_QMARK_,dark_QMARK_){
if(cljs.core.truth_((function (){var or__4253__auto__ = frontend.extensions.graph.goog$module$goog$object.get(event,"shiftKey");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return drag_QMARK_;
}
})())){
if(cljs.core.truth_(cljs.core.deref(_STAR_n_hops))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_focus_nodes,(function (v){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,node)));
}));
}

graph.graph.setNodeAttribute(node,"parent","ls-selected-nodes");

frontend.extensions.graph.highlight_neighbours_BANG_(graph,node,cljs.core.set(cljs.core.deref(_STAR_focus_nodes)),dark_QMARK_);

return frontend.extensions.graph.highlight_edges_BANG_(graph,node,dark_QMARK_);
} else {
if(cljs.core.truth_(drag_QMARK_)){
return null;
} else {
var page_name = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(node);
graph.unhoverNode(node);

return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
}
}
});
frontend.extensions.graph.graph_2d = rum.core.lazy_build(rum.core.build_defcs,(function (state,_opts){
return daiquiri.core.create_element("div",{'ref':(function (value){
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"ref","ref",1289896967));
if(cljs.core.truth_((function (){var and__4251__auto__ = ref;
if(cljs.core.truth_(and__4251__auto__)){
return value;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.reset_BANG_(ref,value);
} else {
return null;
}
}),'className':"graph"},[]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword(null,"ref","ref",1289896967)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),frontend.extensions.graph.pixi.render_BANG_,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.Keyword(null,"dark?","dark?",622933231)], null)),cljs.core.select_keys(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.Keyword(null,"dark?","dark?",622933231)], null)));
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_graph_instance,null);

return state;
})], null)], null),"frontend.extensions.graph/graph-2d");

//# sourceMappingURL=frontend.extensions.graph.js.map
