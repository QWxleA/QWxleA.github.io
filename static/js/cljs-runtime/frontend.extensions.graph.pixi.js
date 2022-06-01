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
frontend.extensions.graph.pixi.default_style = (function frontend$extensions$graph$pixi$default_style(dark_QMARK_,nodes){
var nodes_count = cljs.core.count(nodes);
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
}),new cljs.core.Keyword(null,"type","type",1174270348),module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs.TextType.TEXT,new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(((nodes_count < (100)))?(12):(24)),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(dark_QMARK_)?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"),new cljs.core.Keyword(null,"padding","padding",1660304693),(4)], null)], null),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(((nodes_count < (100)))?(1):(2)),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(dark_QMARK_)?"#094b5a":"#cccccc")], null)], null);
});
frontend.extensions.graph.pixi.default_hover_style = (function frontend$extensions$graph$pixi$default_hover_style(_dark_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6366F1",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(238, 238, 238, 1)",new cljs.core.Keyword(null,"color","color",1011675173),"#333333"], null)], null),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#A5B4FC"], null)], null);
});
frontend.extensions.graph.pixi.layout_BANG_ = (function frontend$extensions$graph$pixi$layout_BANG_(nodes,links){
var nodes_count = cljs.core.count(nodes);
var simulation = module$node_modules$d3_force$src$index.forceSimulation(nodes);
var qwxlea_forceLink_large = (300);
var qwxlea_forceLink_small = (100);
var qwxlea_forceLink_tiny = (50);
var qwxlea_forceManyBody_large = (4000);
var qwxlea_forceManyBody_small = (400);
var qwxlea_forceManyBody_tiny = (10);
var qwxlea_charge_strength = (-600);
var qwxlea_forceXY = 0.1;
var qwxlea_velocityDecay = 0.8;
simulation.force("link",module$node_modules$d3_force$src$index.forceLink().id((function (d){
return d.id;
})).distance((((nodes_count < (50)))?qwxlea_forceLink_tiny:(((nodes_count < (100)))?qwxlea_forceLink_small:qwxlea_forceLink_large))).links(links)).force("charge",module$node_modules$d3_force$src$index.forceManyBody().distanceMax((((nodes_count < (50)))?qwxlea_forceManyBody_tiny:(((nodes_count < (500)))?qwxlea_forceManyBody_small:qwxlea_forceManyBody_large))).theta(0.5).strength(qwxlea_charge_strength)).force("collision",module$node_modules$d3_force$src$index.forceCollide().radius(((8) + (18))).iterations((2))).force("x",module$node_modules$d3_force$src$index.forceX((0)).strength(qwxlea_forceXY)).force("y",module$node_modules$d3_force$src$index.forceY((0)).strength(qwxlea_forceXY)).force("center",module$node_modules$d3_force$src$index.forceCenter().strength(0.1)).velocityDecay(qwxlea_velocityDecay);

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
var seq__59251_59281 = cljs.core.seq(nodes_js);
var chunk__59252_59282 = null;
var count__59253_59283 = (0);
var i__59254_59284 = (0);
while(true){
if((i__59254_59284 < count__59253_59283)){
var node_59285 = chunk__59252_59282.cljs$core$IIndexed$_nth$arity$2(null,i__59254_59284);
var temp__5720__auto___59286 = nodes_objects.get(node_59285.id);
if(cljs.core.truth_(temp__5720__auto___59286)){
var node_object_59287 = temp__5720__auto___59286;
frontend.extensions.graph.pixi.update_position_BANG_(node_object_59287,node_59285);
} else {
}


var G__59288 = seq__59251_59281;
var G__59289 = chunk__59252_59282;
var G__59290 = count__59253_59283;
var G__59291 = (i__59254_59284 + (1));
seq__59251_59281 = G__59288;
chunk__59252_59282 = G__59289;
count__59253_59283 = G__59290;
i__59254_59284 = G__59291;
continue;
} else {
var temp__5720__auto___59292 = cljs.core.seq(seq__59251_59281);
if(temp__5720__auto___59292){
var seq__59251_59293__$1 = temp__5720__auto___59292;
if(cljs.core.chunked_seq_QMARK_(seq__59251_59293__$1)){
var c__5565__auto___59294 = cljs.core.chunk_first(seq__59251_59293__$1);
var G__59295 = cljs.core.chunk_rest(seq__59251_59293__$1);
var G__59296 = c__5565__auto___59294;
var G__59297 = cljs.core.count(c__5565__auto___59294);
var G__59298 = (0);
seq__59251_59281 = G__59295;
chunk__59252_59282 = G__59296;
count__59253_59283 = G__59297;
i__59254_59284 = G__59298;
continue;
} else {
var node_59299 = cljs.core.first(seq__59251_59293__$1);
var temp__5720__auto___59300__$1 = nodes_objects.get(node_59299.id);
if(cljs.core.truth_(temp__5720__auto___59300__$1)){
var node_object_59301 = temp__5720__auto___59300__$1;
frontend.extensions.graph.pixi.update_position_BANG_(node_object_59301,node_59299);
} else {
}


var G__59302 = cljs.core.next(seq__59251_59293__$1);
var G__59303 = null;
var G__59304 = (0);
var G__59305 = (0);
seq__59251_59281 = G__59302;
chunk__59252_59282 = G__59303;
count__59253_59283 = G__59304;
i__59254_59284 = G__59305;
continue;
}
} else {
}
}
break;
}

var seq__59255 = cljs.core.seq(links_js);
var chunk__59256 = null;
var count__59257 = (0);
var i__59258 = (0);
while(true){
if((i__59258 < count__59257)){
var edge = chunk__59256.cljs$core$IIndexed$_nth$arity$2(null,i__59258);
var temp__5720__auto___59306 = edges_objects.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge.index));
if(cljs.core.truth_(temp__5720__auto___59306)){
var edge_object_59307 = temp__5720__auto___59306;
edge_object_59307.updatePosition(({"x": edge.source.x, "y": edge.source.y}),({"x": edge.target.x, "y": edge.target.y}));
} else {
}


var G__59308 = seq__59255;
var G__59309 = chunk__59256;
var G__59310 = count__59257;
var G__59311 = (i__59258 + (1));
seq__59255 = G__59308;
chunk__59256 = G__59309;
count__59257 = G__59310;
i__59258 = G__59311;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59255);
if(temp__5720__auto__){
var seq__59255__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59255__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__59255__$1);
var G__59312 = cljs.core.chunk_rest(seq__59255__$1);
var G__59313 = c__5565__auto__;
var G__59314 = cljs.core.count(c__5565__auto__);
var G__59315 = (0);
seq__59255 = G__59312;
chunk__59256 = G__59313;
count__59257 = G__59314;
i__59258 = G__59315;
continue;
} else {
var edge = cljs.core.first(seq__59255__$1);
var temp__5720__auto___59316__$1 = edges_objects.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge.index));
if(cljs.core.truth_(temp__5720__auto___59316__$1)){
var edge_object_59317 = temp__5720__auto___59316__$1;
edge_object_59317.updatePosition(({"x": edge.source.x, "y": edge.source.y}),({"x": edge.target.x, "y": edge.target.y}));
} else {
}


var G__59318 = cljs.core.next(seq__59255__$1);
var G__59319 = null;
var G__59320 = (0);
var G__59321 = (0);
seq__59255 = G__59318;
chunk__59256 = G__59319;
count__59257 = G__59320;
i__59258 = G__59321;
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

var temp__5720__auto___59322 = cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation);
if(cljs.core.truth_(temp__5720__auto___59322)){
var s_59323 = temp__5720__auto___59322;
if(cljs.core.truth_(event.active)){
} else {
s_59323.alphaTarget((0));
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

var map__59260_59324 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var map__59260_59325__$1 = cljs.core.__destructure_map(map__59260_59324);
var nodes_59326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260_59325__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var links_59327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260_59325__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var style_59328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260_59325__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var hover_style_59329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260_59325__$1,new cljs.core.Keyword(null,"hover-style","hover-style",976094077));
var height_59330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260_59325__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var register_handlers_fn_59331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260_59325__$1,new cljs.core.Keyword(null,"register-handlers-fn","register-handlers-fn",2000178094));
var dark_QMARK__59332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59260_59325__$1,new cljs.core.Keyword(null,"dark?","dark?",622933231));
var style_59333__$1 = (function (){var or__5043__auto__ = style_59328;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.extensions.graph.pixi.default_style(dark_QMARK__59332,nodes_59326);
}
})();
var hover_style_59334__$1 = (function (){var or__5043__auto__ = hover_style_59329;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.extensions.graph.pixi.default_hover_style(dark_QMARK__59332);
}
})();
var graph_59335 = (new frontend.extensions.graph.pixi.Graph());
var nodes_set_59336 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),nodes_59326));
var links_59337__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (link){
var and__5041__auto__ = (function (){var G__59261 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(link);
return (nodes_set_59336.cljs$core$IFn$_invoke$arity$1 ? nodes_set_59336.cljs$core$IFn$_invoke$arity$1(G__59261) : nodes_set_59336.call(null,G__59261));
})();
if(cljs.core.truth_(and__5041__auto__)){
var G__59262 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link);
return (nodes_set_59336.cljs$core$IFn$_invoke$arity$1 ? nodes_set_59336.cljs$core$IFn$_invoke$arity$1(G__59262) : nodes_set_59336.call(null,G__59262));
} else {
return and__5041__auto__;
}
}),links_59327));
var nodes_59338__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,nodes_59326);
var links_59339__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59263){
var map__59264 = p__59263;
var map__59264__$1 = cljs.core.__destructure_map(map__59264);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59264__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59264__$1,new cljs.core.Keyword(null,"target","target",253001721));
return (((source == null)) || ((target == null)));
}),links_59337__$1);
var nodes_js_59340 = cljs_bean.core.__GT_js(nodes_59338__$1);
var links_js_59341 = cljs_bean.core.__GT_js(links_59339__$2);
var simulation_59342 = frontend.extensions.graph.pixi.layout_BANG_(nodes_js_59340,links_js_59341);
var seq__59265_59343 = cljs.core.seq(nodes_js_59340);
var chunk__59266_59344 = null;
var count__59267_59345 = (0);
var i__59268_59346 = (0);
while(true){
if((i__59268_59346 < count__59267_59345)){
var node_59347 = chunk__59266_59344.cljs$core$IIndexed$_nth$arity$2(null,i__59268_59346);
try{graph_59335.addNode(node_59347.id,node_59347);
}catch (e59271){if((e59271 instanceof Error)){
var e_59348 = e59271;
console.error(e_59348);
} else {
throw e59271;

}
}

var G__59349 = seq__59265_59343;
var G__59350 = chunk__59266_59344;
var G__59351 = count__59267_59345;
var G__59352 = (i__59268_59346 + (1));
seq__59265_59343 = G__59349;
chunk__59266_59344 = G__59350;
count__59267_59345 = G__59351;
i__59268_59346 = G__59352;
continue;
} else {
var temp__5720__auto___59353 = cljs.core.seq(seq__59265_59343);
if(temp__5720__auto___59353){
var seq__59265_59354__$1 = temp__5720__auto___59353;
if(cljs.core.chunked_seq_QMARK_(seq__59265_59354__$1)){
var c__5565__auto___59355 = cljs.core.chunk_first(seq__59265_59354__$1);
var G__59356 = cljs.core.chunk_rest(seq__59265_59354__$1);
var G__59357 = c__5565__auto___59355;
var G__59358 = cljs.core.count(c__5565__auto___59355);
var G__59359 = (0);
seq__59265_59343 = G__59356;
chunk__59266_59344 = G__59357;
count__59267_59345 = G__59358;
i__59268_59346 = G__59359;
continue;
} else {
var node_59360 = cljs.core.first(seq__59265_59354__$1);
try{graph_59335.addNode(node_59360.id,node_59360);
}catch (e59272){if((e59272 instanceof Error)){
var e_59361 = e59272;
console.error(e_59361);
} else {
throw e59272;

}
}

var G__59362 = cljs.core.next(seq__59265_59354__$1);
var G__59363 = null;
var G__59364 = (0);
var G__59365 = (0);
seq__59265_59343 = G__59362;
chunk__59266_59344 = G__59363;
count__59267_59345 = G__59364;
i__59268_59346 = G__59365;
continue;
}
} else {
}
}
break;
}

var seq__59273_59366 = cljs.core.seq(links_js_59341);
var chunk__59274_59367 = null;
var count__59275_59368 = (0);
var i__59276_59369 = (0);
while(true){
if((i__59276_59369 < count__59275_59368)){
var link_59370 = chunk__59274_59367.cljs$core$IIndexed$_nth$arity$2(null,i__59276_59369);
var source_59371 = link_59370.source.id;
var target_59372 = link_59370.target.id;
try{graph_59335.addEdge(source_59371,target_59372,link_59370);
}catch (e59279){if((e59279 instanceof Error)){
var e_59373 = e59279;
console.error(e_59373);
} else {
throw e59279;

}
}

var G__59374 = seq__59273_59366;
var G__59375 = chunk__59274_59367;
var G__59376 = count__59275_59368;
var G__59377 = (i__59276_59369 + (1));
seq__59273_59366 = G__59374;
chunk__59274_59367 = G__59375;
count__59275_59368 = G__59376;
i__59276_59369 = G__59377;
continue;
} else {
var temp__5720__auto___59378 = cljs.core.seq(seq__59273_59366);
if(temp__5720__auto___59378){
var seq__59273_59379__$1 = temp__5720__auto___59378;
if(cljs.core.chunked_seq_QMARK_(seq__59273_59379__$1)){
var c__5565__auto___59380 = cljs.core.chunk_first(seq__59273_59379__$1);
var G__59381 = cljs.core.chunk_rest(seq__59273_59379__$1);
var G__59382 = c__5565__auto___59380;
var G__59383 = cljs.core.count(c__5565__auto___59380);
var G__59384 = (0);
seq__59273_59366 = G__59381;
chunk__59274_59367 = G__59382;
count__59275_59368 = G__59383;
i__59276_59369 = G__59384;
continue;
} else {
var link_59385 = cljs.core.first(seq__59273_59379__$1);
var source_59386 = link_59385.source.id;
var target_59387 = link_59385.target.id;
try{graph_59335.addEdge(source_59386,target_59387,link_59385);
}catch (e59280){if((e59280 instanceof Error)){
var e_59388 = e59280;
console.error(e_59388);
} else {
throw e59280;

}
}

var G__59389 = cljs.core.next(seq__59273_59379__$1);
var G__59390 = null;
var G__59391 = (0);
var G__59392 = (0);
seq__59273_59366 = G__59389;
chunk__59274_59367 = G__59390;
count__59275_59368 = G__59391;
i__59276_59369 = G__59392;
continue;
}
} else {
}
}
break;
}

var temp__5720__auto___59393 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___59393)){
var container_ref_59394 = temp__5720__auto___59393;
var pixi_graph_59395 = (new module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs.PixiGraph(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"container","container",-1736937707),cljs.core.deref(container_ref_59394),new cljs.core.Keyword(null,"graph","graph",1558099509),graph_59335,new cljs.core.Keyword(null,"style","style",-496642736),style_59333__$1,new cljs.core.Keyword(null,"hoverStyle","hoverStyle",1695150190),hover_style_59334__$1,new cljs.core.Keyword(null,"height","height",1025178622),height_59330], null))));
cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_graph_instance,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph_59335,new cljs.core.Keyword(null,"pixi","pixi",808009198),pixi_graph_59395], null));

if(cljs.core.truth_(register_handlers_fn_59331)){
(register_handlers_fn_59331.cljs$core$IFn$_invoke$arity$1 ? register_handlers_fn_59331.cljs$core$IFn$_invoke$arity$1(pixi_graph_59395) : register_handlers_fn_59331.call(null,pixi_graph_59395));
} else {
}

frontend.extensions.graph.pixi.set_up_listeners_BANG_(pixi_graph_59395);

simulation_59342.on("tick",frontend.extensions.graph.pixi.tick_BANG_(pixi_graph_59395,graph_59335,nodes_js_59340,links_js_59341));
} else {
}
}catch (e59259){if((e59259 instanceof Error)){
var e_59396 = e59259;
console.error(e_59396);
} else {
throw e59259;

}
}
return state;
});

//# sourceMappingURL=frontend.extensions.graph.pixi.js.map
