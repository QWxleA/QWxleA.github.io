goog.provide('frontend.extensions.graph.pixi');
goog.scope(function(){
  frontend.extensions.graph.pixi.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$d3_force$src$index=shadow.js.require("module$node_modules$d3_force$src$index", {});
var module$node_modules$graphology$dist$graphology_umd_min=shadow.js.require("module$node_modules$graphology$dist$graphology_umd_min", {});
var module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs=shadow.js.require("module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs", {});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi._STAR_graph_instance !== 'undefined')){
} else {
frontend.extensions.graph.pixi._STAR_graph_instance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi._STAR_simulation !== 'undefined')){
} else {
frontend.extensions.graph.pixi._STAR_simulation = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.extensions.graph.pixi.Graph = frontend.extensions.graph.pixi.goog$module$goog$object.get(module$node_modules$graphology$dist$graphology_umd_min,"Graph");
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.graph !== 'undefined') && (typeof frontend.extensions.graph.pixi !== 'undefined') && (typeof frontend.extensions.graph.pixi.colors !== 'undefined')){
} else {
frontend.extensions.graph.pixi.colors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"], null);
}
frontend.extensions.graph.pixi.default_style = (function frontend$extensions$graph$pixi$default_style(dark_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),(function (node){
var or__5043__auto__ = node.size;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (8);
}
}),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(0)], null),new cljs.core.Keyword(null,"color","color",1011675173),(function (node){
var temp__5718__auto__ = frontend.extensions.graph.pixi.goog$module$goog$object.get(node,"parent");
if(cljs.core.truth_(temp__5718__auto__)){
var parent = temp__5718__auto__;
var temp__5720__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,"ls-selected-nodes"))?parent:node.id);
if(cljs.core.truth_(temp__5720__auto__)){
var parent__$1 = temp__5720__auto__;
var v = Math.abs(cljs.core.hash(parent__$1));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frontend.extensions.graph.pixi.colors,cljs.core.mod(v,cljs.core.count(frontend.extensions.graph.pixi.colors)));
} else {
return null;
}
} else {
return node.color;
}
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),(function (node){
return node.id;
}),new cljs.core.Keyword(null,"type","type",1174270348),module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs.TextType.TEXT,new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(12),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(dark_QMARK_)?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"),new cljs.core.Keyword(null,"padding","padding",1660304693),(4)], null)], null),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(dark_QMARK_)?"#094b5a":"#cccccc")], null)], null);
});
frontend.extensions.graph.pixi.default_hover_style = (function frontend$extensions$graph$pixi$default_hover_style(_dark_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6366F1",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(238, 238, 238, 1)",new cljs.core.Keyword(null,"color","color",1011675173),"#333333"], null)], null),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#A5B4FC"], null)], null);
});
frontend.extensions.graph.pixi.layout_BANG_ = (function frontend$extensions$graph$pixi$layout_BANG_(nodes,links){
var nodes_count = cljs.core.count(nodes);
var simulation = module$node_modules$d3_force$src$index.forceSimulation(nodes);
simulation.force("link",module$node_modules$d3_force$src$index.forceLink().id((function (d){
return d.id;
})).distance((180)).links(links)).force("charge",module$node_modules$d3_force$src$index.forceManyBody().distanceMax((((nodes_count > (500)))?(4000):(600))).theta(0.5).strength((-600))).force("collision",module$node_modules$d3_force$src$index.forceCollide().radius(((8) + (18))).iterations((2))).force("x",module$node_modules$d3_force$src$index.forceX((0)).strength(0.02)).force("y",module$node_modules$d3_force$src$index.forceY((0)).strength(0.02)).force("center",module$node_modules$d3_force$src$index.forceCenter()).velocityDecay(0.8);

cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_simulation,simulation);

return simulation;
});
frontend.extensions.graph.pixi.clear_nodes_BANG_ = (function frontend$extensions$graph$pixi$clear_nodes_BANG_(graph){
return graph.forEachNode((function (node){
return graph.dropNode(node);
}));
});
frontend.extensions.graph.pixi.destroy_instance_BANG_ = (function frontend$extensions$graph$pixi$destroy_instance_BANG_(){
var temp__5720__auto__ = new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instance));
if(cljs.core.truth_(temp__5720__auto__)){
var instance = temp__5720__auto__;
instance.destroy();

cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_graph_instance,null);

return cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_simulation,null);
} else {
return null;
}
});
frontend.extensions.graph.pixi.update_position_BANG_ = (function frontend$extensions$graph$pixi$update_position_BANG_(node,obj){
return node.updatePosition(({"x": obj.x, "y": obj.y}));
});
frontend.extensions.graph.pixi.tick_BANG_ = (function frontend$extensions$graph$pixi$tick_BANG_(pixi,_graph,nodes_js,links_js){
return (function (){
var nodes_objects = pixi.getNodesObjects();
var edges_objects = pixi.getEdgesObjects();
var seq__93458_93503 = cljs.core.seq(nodes_js);
var chunk__93459_93504 = null;
var count__93460_93505 = (0);
var i__93461_93506 = (0);
while(true){
if((i__93461_93506 < count__93460_93505)){
var node_93507 = chunk__93459_93504.cljs$core$IIndexed$_nth$arity$2(null,i__93461_93506);
var temp__5720__auto___93508 = nodes_objects.get(node_93507.id);
if(cljs.core.truth_(temp__5720__auto___93508)){
var node_object_93509 = temp__5720__auto___93508;
frontend.extensions.graph.pixi.update_position_BANG_(node_object_93509,node_93507);
} else {
}


var G__93510 = seq__93458_93503;
var G__93511 = chunk__93459_93504;
var G__93512 = count__93460_93505;
var G__93513 = (i__93461_93506 + (1));
seq__93458_93503 = G__93510;
chunk__93459_93504 = G__93511;
count__93460_93505 = G__93512;
i__93461_93506 = G__93513;
continue;
} else {
var temp__5720__auto___93514 = cljs.core.seq(seq__93458_93503);
if(temp__5720__auto___93514){
var seq__93458_93515__$1 = temp__5720__auto___93514;
if(cljs.core.chunked_seq_QMARK_(seq__93458_93515__$1)){
var c__5565__auto___93516 = cljs.core.chunk_first(seq__93458_93515__$1);
var G__93517 = cljs.core.chunk_rest(seq__93458_93515__$1);
var G__93518 = c__5565__auto___93516;
var G__93519 = cljs.core.count(c__5565__auto___93516);
var G__93520 = (0);
seq__93458_93503 = G__93517;
chunk__93459_93504 = G__93518;
count__93460_93505 = G__93519;
i__93461_93506 = G__93520;
continue;
} else {
var node_93521 = cljs.core.first(seq__93458_93515__$1);
var temp__5720__auto___93522__$1 = nodes_objects.get(node_93521.id);
if(cljs.core.truth_(temp__5720__auto___93522__$1)){
var node_object_93523 = temp__5720__auto___93522__$1;
frontend.extensions.graph.pixi.update_position_BANG_(node_object_93523,node_93521);
} else {
}


var G__93524 = cljs.core.next(seq__93458_93515__$1);
var G__93525 = null;
var G__93526 = (0);
var G__93527 = (0);
seq__93458_93503 = G__93524;
chunk__93459_93504 = G__93525;
count__93460_93505 = G__93526;
i__93461_93506 = G__93527;
continue;
}
} else {
}
}
break;
}

var seq__93466 = cljs.core.seq(links_js);
var chunk__93467 = null;
var count__93468 = (0);
var i__93469 = (0);
while(true){
if((i__93469 < count__93468)){
var edge = chunk__93467.cljs$core$IIndexed$_nth$arity$2(null,i__93469);
var temp__5720__auto___93528 = edges_objects.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge.index));
if(cljs.core.truth_(temp__5720__auto___93528)){
var edge_object_93529 = temp__5720__auto___93528;
edge_object_93529.updatePosition(({"x": edge.source.x, "y": edge.source.y}),({"x": edge.target.x, "y": edge.target.y}));
} else {
}


var G__93530 = seq__93466;
var G__93531 = chunk__93467;
var G__93532 = count__93468;
var G__93533 = (i__93469 + (1));
seq__93466 = G__93530;
chunk__93467 = G__93531;
count__93468 = G__93532;
i__93469 = G__93533;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__93466);
if(temp__5720__auto__){
var seq__93466__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__93466__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__93466__$1);
var G__93534 = cljs.core.chunk_rest(seq__93466__$1);
var G__93535 = c__5565__auto__;
var G__93536 = cljs.core.count(c__5565__auto__);
var G__93537 = (0);
seq__93466 = G__93534;
chunk__93467 = G__93535;
count__93468 = G__93536;
i__93469 = G__93537;
continue;
} else {
var edge = cljs.core.first(seq__93466__$1);
var temp__5720__auto___93538__$1 = edges_objects.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge.index));
if(cljs.core.truth_(temp__5720__auto___93538__$1)){
var edge_object_93539 = temp__5720__auto___93538__$1;
edge_object_93539.updatePosition(({"x": edge.source.x, "y": edge.source.y}),({"x": edge.target.x, "y": edge.target.y}));
} else {
}


var G__93540 = cljs.core.next(seq__93466__$1);
var G__93541 = null;
var G__93542 = (0);
var G__93543 = (0);
seq__93466 = G__93540;
chunk__93467 = G__93541;
count__93468 = G__93542;
i__93469 = G__93543;
continue;
}
} else {
return null;
}
}
break;
}
});
});
frontend.extensions.graph.pixi.set_up_listeners_BANG_ = (function frontend$extensions$graph$pixi$set_up_listeners_BANG_(pixi_graph){
if(cljs.core.truth_(pixi_graph)){
var _STAR_dragging_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var nodes = pixi_graph.getNodesObjects();
var on_drag_end = (function (_node,event){
event.stopPropagation();

var temp__5720__auto___93544 = cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation);
if(cljs.core.truth_(temp__5720__auto___93544)){
var s_93545 = temp__5720__auto___93544;
if(cljs.core.truth_(event.active)){
} else {
s_93545.alphaTarget((0));
}
} else {
}

return cljs.core.reset_BANG_(_STAR_dragging_QMARK_,false);
});
pixi_graph.on("nodeMousedown",(function (event,node_key){
var temp__5720__auto__ = nodes.get(node_key);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
var temp__5720__auto____$1 = cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation);
if(cljs.core.truth_(temp__5720__auto____$1)){
var s = temp__5720__auto____$1;
if(cljs.core.truth_(event.active)){
} else {
s.alphaTarget(0.3).restart();

setTimeout((function (){
return s.alphaTarget((0));
}),(2000));
}

return cljs.core.reset_BANG_(_STAR_dragging_QMARK_,true);
} else {
return null;
}
} else {
return null;
}
}));

pixi_graph.on("nodeMouseup",(function (event,node_key){
var temp__5720__auto__ = nodes.get(node_key);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return on_drag_end(node,event);
} else {
return null;
}
}));

return pixi_graph.on("nodeMousemove",(function (event,node_key){
var temp__5720__auto__ = nodes.get(node_key);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.truth_(cljs.core.deref(_STAR_dragging_QMARK_))){
return frontend.extensions.graph.pixi.update_position_BANG_(node,event);
} else {
return null;
}
} else {
return null;
}
}));
} else {
return null;
}
});
frontend.extensions.graph.pixi.render_BANG_ = (function frontend$extensions$graph$pixi$render_BANG_(state){
try{if(cljs.core.truth_(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instance))){
frontend.extensions.graph.pixi.clear_nodes_BANG_(new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.extensions.graph.pixi._STAR_graph_instance)));

frontend.extensions.graph.pixi.destroy_instance_BANG_();
} else {
}

var map__93477_93546 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var map__93477_93547__$1 = cljs.core.__destructure_map(map__93477_93546);
var nodes_93548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93477_93547__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var links_93549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93477_93547__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var style_93550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93477_93547__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var hover_style_93551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93477_93547__$1,new cljs.core.Keyword(null,"hover-style","hover-style",976094077));
var height_93552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93477_93547__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var register_handlers_fn_93553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93477_93547__$1,new cljs.core.Keyword(null,"register-handlers-fn","register-handlers-fn",2000178094));
var dark_QMARK__93554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93477_93547__$1,new cljs.core.Keyword(null,"dark?","dark?",622933231));
var style_93555__$1 = (function (){var or__5043__auto__ = style_93550;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.extensions.graph.pixi.default_style(dark_QMARK__93554);
}
})();
var hover_style_93556__$1 = (function (){var or__5043__auto__ = hover_style_93551;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.extensions.graph.pixi.default_hover_style(dark_QMARK__93554);
}
})();
var graph_93557 = (new frontend.extensions.graph.pixi.Graph());
var nodes_set_93558 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),nodes_93548));
var links_93559__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (link){
var and__5041__auto__ = (function (){var G__93480 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(link);
return (nodes_set_93558.cljs$core$IFn$_invoke$arity$1 ? nodes_set_93558.cljs$core$IFn$_invoke$arity$1(G__93480) : nodes_set_93558.call(null,G__93480));
})();
if(cljs.core.truth_(and__5041__auto__)){
var G__93481 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link);
return (nodes_set_93558.cljs$core$IFn$_invoke$arity$1 ? nodes_set_93558.cljs$core$IFn$_invoke$arity$1(G__93481) : nodes_set_93558.call(null,G__93481));
} else {
return and__5041__auto__;
}
}),links_93549));
var nodes_93560__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,nodes_93548);
var links_93561__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__93483){
var map__93484 = p__93483;
var map__93484__$1 = cljs.core.__destructure_map(map__93484);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93484__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93484__$1,new cljs.core.Keyword(null,"target","target",253001721));
return (((source == null)) || ((target == null)));
}),links_93559__$1);
var nodes_js_93562 = cljs_bean.core.__GT_js(nodes_93560__$1);
var links_js_93563 = cljs_bean.core.__GT_js(links_93561__$2);
var simulation_93564 = frontend.extensions.graph.pixi.layout_BANG_(nodes_js_93562,links_js_93563);
var seq__93485_93565 = cljs.core.seq(nodes_js_93562);
var chunk__93486_93566 = null;
var count__93487_93567 = (0);
var i__93488_93568 = (0);
while(true){
if((i__93488_93568 < count__93487_93567)){
var node_93569 = chunk__93486_93566.cljs$core$IIndexed$_nth$arity$2(null,i__93488_93568);
try{graph_93557.addNode(node_93569.id,node_93569);
}catch (e93491){if((e93491 instanceof Error)){
var e_93570 = e93491;
console.error(e_93570);
} else {
throw e93491;

}
}

var G__93571 = seq__93485_93565;
var G__93572 = chunk__93486_93566;
var G__93573 = count__93487_93567;
var G__93574 = (i__93488_93568 + (1));
seq__93485_93565 = G__93571;
chunk__93486_93566 = G__93572;
count__93487_93567 = G__93573;
i__93488_93568 = G__93574;
continue;
} else {
var temp__5720__auto___93575 = cljs.core.seq(seq__93485_93565);
if(temp__5720__auto___93575){
var seq__93485_93576__$1 = temp__5720__auto___93575;
if(cljs.core.chunked_seq_QMARK_(seq__93485_93576__$1)){
var c__5565__auto___93577 = cljs.core.chunk_first(seq__93485_93576__$1);
var G__93578 = cljs.core.chunk_rest(seq__93485_93576__$1);
var G__93579 = c__5565__auto___93577;
var G__93580 = cljs.core.count(c__5565__auto___93577);
var G__93581 = (0);
seq__93485_93565 = G__93578;
chunk__93486_93566 = G__93579;
count__93487_93567 = G__93580;
i__93488_93568 = G__93581;
continue;
} else {
var node_93582 = cljs.core.first(seq__93485_93576__$1);
try{graph_93557.addNode(node_93582.id,node_93582);
}catch (e93492){if((e93492 instanceof Error)){
var e_93583 = e93492;
console.error(e_93583);
} else {
throw e93492;

}
}

var G__93584 = cljs.core.next(seq__93485_93576__$1);
var G__93585 = null;
var G__93586 = (0);
var G__93587 = (0);
seq__93485_93565 = G__93584;
chunk__93486_93566 = G__93585;
count__93487_93567 = G__93586;
i__93488_93568 = G__93587;
continue;
}
} else {
}
}
break;
}

var seq__93493_93588 = cljs.core.seq(links_js_93563);
var chunk__93494_93589 = null;
var count__93495_93590 = (0);
var i__93496_93591 = (0);
while(true){
if((i__93496_93591 < count__93495_93590)){
var link_93592 = chunk__93494_93589.cljs$core$IIndexed$_nth$arity$2(null,i__93496_93591);
var source_93593 = link_93592.source.id;
var target_93594 = link_93592.target.id;
try{graph_93557.addEdge(source_93593,target_93594,link_93592);
}catch (e93500){if((e93500 instanceof Error)){
var e_93595 = e93500;
console.error(e_93595);
} else {
throw e93500;

}
}

var G__93596 = seq__93493_93588;
var G__93597 = chunk__93494_93589;
var G__93598 = count__93495_93590;
var G__93599 = (i__93496_93591 + (1));
seq__93493_93588 = G__93596;
chunk__93494_93589 = G__93597;
count__93495_93590 = G__93598;
i__93496_93591 = G__93599;
continue;
} else {
var temp__5720__auto___93600 = cljs.core.seq(seq__93493_93588);
if(temp__5720__auto___93600){
var seq__93493_93601__$1 = temp__5720__auto___93600;
if(cljs.core.chunked_seq_QMARK_(seq__93493_93601__$1)){
var c__5565__auto___93602 = cljs.core.chunk_first(seq__93493_93601__$1);
var G__93603 = cljs.core.chunk_rest(seq__93493_93601__$1);
var G__93604 = c__5565__auto___93602;
var G__93605 = cljs.core.count(c__5565__auto___93602);
var G__93606 = (0);
seq__93493_93588 = G__93603;
chunk__93494_93589 = G__93604;
count__93495_93590 = G__93605;
i__93496_93591 = G__93606;
continue;
} else {
var link_93607 = cljs.core.first(seq__93493_93601__$1);
var source_93608 = link_93607.source.id;
var target_93609 = link_93607.target.id;
try{graph_93557.addEdge(source_93608,target_93609,link_93607);
}catch (e93501){if((e93501 instanceof Error)){
var e_93610 = e93501;
console.error(e_93610);
} else {
throw e93501;

}
}

var G__93611 = cljs.core.next(seq__93493_93601__$1);
var G__93612 = null;
var G__93613 = (0);
var G__93614 = (0);
seq__93493_93588 = G__93611;
chunk__93494_93589 = G__93612;
count__93495_93590 = G__93613;
i__93496_93591 = G__93614;
continue;
}
} else {
}
}
break;
}

var temp__5720__auto___93615 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___93615)){
var container_ref_93616 = temp__5720__auto___93615;
var pixi_graph_93617 = (new module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs.PixiGraph(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"container","container",-1736937707),cljs.core.deref(container_ref_93616),new cljs.core.Keyword(null,"graph","graph",1558099509),graph_93557,new cljs.core.Keyword(null,"style","style",-496642736),style_93555__$1,new cljs.core.Keyword(null,"hoverStyle","hoverStyle",1695150190),hover_style_93556__$1,new cljs.core.Keyword(null,"height","height",1025178622),height_93552], null))));
cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_graph_instance,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph_93557,new cljs.core.Keyword(null,"pixi","pixi",808009198),pixi_graph_93617], null));

if(cljs.core.truth_(register_handlers_fn_93553)){
(register_handlers_fn_93553.cljs$core$IFn$_invoke$arity$1 ? register_handlers_fn_93553.cljs$core$IFn$_invoke$arity$1(pixi_graph_93617) : register_handlers_fn_93553.call(null,pixi_graph_93617));
} else {
}

frontend.extensions.graph.pixi.set_up_listeners_BANG_(pixi_graph_93617);

simulation_93564.on("tick",frontend.extensions.graph.pixi.tick_BANG_(pixi_graph_93617,graph_93557,nodes_js_93562,links_js_93563));
} else {
}
}catch (e93476){if((e93476 instanceof Error)){
var e_93618 = e93476;
console.error(e_93618);
} else {
throw e93476;

}
}
return state;
});

//# sourceMappingURL=frontend.extensions.graph.pixi.js.map
