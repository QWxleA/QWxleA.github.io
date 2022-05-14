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
var or__4253__auto__ = node.size;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var seq__107057_107152 = cljs.core.seq(nodes_js);
var chunk__107058_107153 = null;
var count__107059_107154 = (0);
var i__107060_107155 = (0);
while(true){
if((i__107060_107155 < count__107059_107154)){
var node_107156 = chunk__107058_107153.cljs$core$IIndexed$_nth$arity$2(null,i__107060_107155);
var temp__5720__auto___107157 = nodes_objects.get(node_107156.id);
if(cljs.core.truth_(temp__5720__auto___107157)){
var node_object_107159 = temp__5720__auto___107157;
frontend.extensions.graph.pixi.update_position_BANG_(node_object_107159,node_107156);
} else {
}


var G__107160 = seq__107057_107152;
var G__107161 = chunk__107058_107153;
var G__107162 = count__107059_107154;
var G__107163 = (i__107060_107155 + (1));
seq__107057_107152 = G__107160;
chunk__107058_107153 = G__107161;
count__107059_107154 = G__107162;
i__107060_107155 = G__107163;
continue;
} else {
var temp__5720__auto___107164 = cljs.core.seq(seq__107057_107152);
if(temp__5720__auto___107164){
var seq__107057_107165__$1 = temp__5720__auto___107164;
if(cljs.core.chunked_seq_QMARK_(seq__107057_107165__$1)){
var c__4679__auto___107166 = cljs.core.chunk_first(seq__107057_107165__$1);
var G__107167 = cljs.core.chunk_rest(seq__107057_107165__$1);
var G__107168 = c__4679__auto___107166;
var G__107169 = cljs.core.count(c__4679__auto___107166);
var G__107170 = (0);
seq__107057_107152 = G__107167;
chunk__107058_107153 = G__107168;
count__107059_107154 = G__107169;
i__107060_107155 = G__107170;
continue;
} else {
var node_107171 = cljs.core.first(seq__107057_107165__$1);
var temp__5720__auto___107172__$1 = nodes_objects.get(node_107171.id);
if(cljs.core.truth_(temp__5720__auto___107172__$1)){
var node_object_107173 = temp__5720__auto___107172__$1;
frontend.extensions.graph.pixi.update_position_BANG_(node_object_107173,node_107171);
} else {
}


var G__107174 = cljs.core.next(seq__107057_107165__$1);
var G__107175 = null;
var G__107176 = (0);
var G__107177 = (0);
seq__107057_107152 = G__107174;
chunk__107058_107153 = G__107175;
count__107059_107154 = G__107176;
i__107060_107155 = G__107177;
continue;
}
} else {
}
}
break;
}

var seq__107086 = cljs.core.seq(links_js);
var chunk__107087 = null;
var count__107088 = (0);
var i__107089 = (0);
while(true){
if((i__107089 < count__107088)){
var edge = chunk__107087.cljs$core$IIndexed$_nth$arity$2(null,i__107089);
var temp__5720__auto___107179 = edges_objects.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge.index));
if(cljs.core.truth_(temp__5720__auto___107179)){
var edge_object_107180 = temp__5720__auto___107179;
edge_object_107180.updatePosition(({"x": edge.source.x, "y": edge.source.y}),({"x": edge.target.x, "y": edge.target.y}));
} else {
}


var G__107181 = seq__107086;
var G__107182 = chunk__107087;
var G__107183 = count__107088;
var G__107184 = (i__107089 + (1));
seq__107086 = G__107181;
chunk__107087 = G__107182;
count__107088 = G__107183;
i__107089 = G__107184;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__107086);
if(temp__5720__auto__){
var seq__107086__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__107086__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__107086__$1);
var G__107185 = cljs.core.chunk_rest(seq__107086__$1);
var G__107186 = c__4679__auto__;
var G__107187 = cljs.core.count(c__4679__auto__);
var G__107188 = (0);
seq__107086 = G__107185;
chunk__107087 = G__107186;
count__107088 = G__107187;
i__107089 = G__107188;
continue;
} else {
var edge = cljs.core.first(seq__107086__$1);
var temp__5720__auto___107189__$1 = edges_objects.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edge.index));
if(cljs.core.truth_(temp__5720__auto___107189__$1)){
var edge_object_107190 = temp__5720__auto___107189__$1;
edge_object_107190.updatePosition(({"x": edge.source.x, "y": edge.source.y}),({"x": edge.target.x, "y": edge.target.y}));
} else {
}


var G__107192 = cljs.core.next(seq__107086__$1);
var G__107193 = null;
var G__107194 = (0);
var G__107195 = (0);
seq__107086 = G__107192;
chunk__107087 = G__107193;
count__107088 = G__107194;
i__107089 = G__107195;
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

var temp__5720__auto___107197 = cljs.core.deref(frontend.extensions.graph.pixi._STAR_simulation);
if(cljs.core.truth_(temp__5720__auto___107197)){
var s_107198 = temp__5720__auto___107197;
if(cljs.core.truth_(event.active)){
} else {
s_107198.alphaTarget((0));
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

var map__107104_107203 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var map__107104_107204__$1 = cljs.core.__destructure_map(map__107104_107203);
var nodes_107205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107104_107204__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var links_107206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107104_107204__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var style_107207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107104_107204__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var hover_style_107208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107104_107204__$1,new cljs.core.Keyword(null,"hover-style","hover-style",976094077));
var height_107209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107104_107204__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var register_handlers_fn_107210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107104_107204__$1,new cljs.core.Keyword(null,"register-handlers-fn","register-handlers-fn",2000178094));
var dark_QMARK__107211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107104_107204__$1,new cljs.core.Keyword(null,"dark?","dark?",622933231));
var style_107212__$1 = (function (){var or__4253__auto__ = style_107207;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.extensions.graph.pixi.default_style(dark_QMARK__107211);
}
})();
var hover_style_107213__$1 = (function (){var or__4253__auto__ = hover_style_107208;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.extensions.graph.pixi.default_hover_style(dark_QMARK__107211);
}
})();
var graph_107214 = (new frontend.extensions.graph.pixi.Graph());
var nodes_set_107215 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),nodes_107205));
var links_107216__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (link){
var and__4251__auto__ = (function (){var G__107114 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(link);
return (nodes_set_107215.cljs$core$IFn$_invoke$arity$1 ? nodes_set_107215.cljs$core$IFn$_invoke$arity$1(G__107114) : nodes_set_107215.call(null,G__107114));
})();
if(cljs.core.truth_(and__4251__auto__)){
var G__107115 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link);
return (nodes_set_107215.cljs$core$IFn$_invoke$arity$1 ? nodes_set_107215.cljs$core$IFn$_invoke$arity$1(G__107115) : nodes_set_107215.call(null,G__107115));
} else {
return and__4251__auto__;
}
}),links_107206));
var nodes_107217__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,nodes_107205);
var links_107218__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__107116){
var map__107117 = p__107116;
var map__107117__$1 = cljs.core.__destructure_map(map__107117);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107117__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__107117__$1,new cljs.core.Keyword(null,"target","target",253001721));
return (((source == null)) || ((target == null)));
}),links_107216__$1);
var nodes_js_107219 = cljs_bean.core.__GT_js(nodes_107217__$1);
var links_js_107220 = cljs_bean.core.__GT_js(links_107218__$2);
var simulation_107221 = frontend.extensions.graph.pixi.layout_BANG_(nodes_js_107219,links_js_107220);
var seq__107122_107226 = cljs.core.seq(nodes_js_107219);
var chunk__107123_107227 = null;
var count__107124_107228 = (0);
var i__107125_107229 = (0);
while(true){
if((i__107125_107229 < count__107124_107228)){
var node_107230 = chunk__107123_107227.cljs$core$IIndexed$_nth$arity$2(null,i__107125_107229);
try{graph_107214.addNode(node_107230.id,node_107230);
}catch (e107137){if((e107137 instanceof Error)){
var e_107231 = e107137;
console.error(e_107231);
} else {
throw e107137;

}
}

var G__107232 = seq__107122_107226;
var G__107233 = chunk__107123_107227;
var G__107234 = count__107124_107228;
var G__107235 = (i__107125_107229 + (1));
seq__107122_107226 = G__107232;
chunk__107123_107227 = G__107233;
count__107124_107228 = G__107234;
i__107125_107229 = G__107235;
continue;
} else {
var temp__5720__auto___107236 = cljs.core.seq(seq__107122_107226);
if(temp__5720__auto___107236){
var seq__107122_107237__$1 = temp__5720__auto___107236;
if(cljs.core.chunked_seq_QMARK_(seq__107122_107237__$1)){
var c__4679__auto___107238 = cljs.core.chunk_first(seq__107122_107237__$1);
var G__107239 = cljs.core.chunk_rest(seq__107122_107237__$1);
var G__107240 = c__4679__auto___107238;
var G__107241 = cljs.core.count(c__4679__auto___107238);
var G__107242 = (0);
seq__107122_107226 = G__107239;
chunk__107123_107227 = G__107240;
count__107124_107228 = G__107241;
i__107125_107229 = G__107242;
continue;
} else {
var node_107243 = cljs.core.first(seq__107122_107237__$1);
try{graph_107214.addNode(node_107243.id,node_107243);
}catch (e107140){if((e107140 instanceof Error)){
var e_107244 = e107140;
console.error(e_107244);
} else {
throw e107140;

}
}

var G__107245 = cljs.core.next(seq__107122_107237__$1);
var G__107246 = null;
var G__107247 = (0);
var G__107248 = (0);
seq__107122_107226 = G__107245;
chunk__107123_107227 = G__107246;
count__107124_107228 = G__107247;
i__107125_107229 = G__107248;
continue;
}
} else {
}
}
break;
}

var seq__107141_107249 = cljs.core.seq(links_js_107220);
var chunk__107142_107250 = null;
var count__107143_107251 = (0);
var i__107144_107252 = (0);
while(true){
if((i__107144_107252 < count__107143_107251)){
var link_107256 = chunk__107142_107250.cljs$core$IIndexed$_nth$arity$2(null,i__107144_107252);
var source_107257 = link_107256.source.id;
var target_107258 = link_107256.target.id;
try{graph_107214.addEdge(source_107257,target_107258,link_107256);
}catch (e107148){if((e107148 instanceof Error)){
var e_107259 = e107148;
console.error(e_107259);
} else {
throw e107148;

}
}

var G__107260 = seq__107141_107249;
var G__107261 = chunk__107142_107250;
var G__107262 = count__107143_107251;
var G__107263 = (i__107144_107252 + (1));
seq__107141_107249 = G__107260;
chunk__107142_107250 = G__107261;
count__107143_107251 = G__107262;
i__107144_107252 = G__107263;
continue;
} else {
var temp__5720__auto___107264 = cljs.core.seq(seq__107141_107249);
if(temp__5720__auto___107264){
var seq__107141_107265__$1 = temp__5720__auto___107264;
if(cljs.core.chunked_seq_QMARK_(seq__107141_107265__$1)){
var c__4679__auto___107266 = cljs.core.chunk_first(seq__107141_107265__$1);
var G__107267 = cljs.core.chunk_rest(seq__107141_107265__$1);
var G__107268 = c__4679__auto___107266;
var G__107269 = cljs.core.count(c__4679__auto___107266);
var G__107270 = (0);
seq__107141_107249 = G__107267;
chunk__107142_107250 = G__107268;
count__107143_107251 = G__107269;
i__107144_107252 = G__107270;
continue;
} else {
var link_107271 = cljs.core.first(seq__107141_107265__$1);
var source_107272 = link_107271.source.id;
var target_107273 = link_107271.target.id;
try{graph_107214.addEdge(source_107272,target_107273,link_107271);
}catch (e107149){if((e107149 instanceof Error)){
var e_107274 = e107149;
console.error(e_107274);
} else {
throw e107149;

}
}

var G__107275 = cljs.core.next(seq__107141_107265__$1);
var G__107276 = null;
var G__107277 = (0);
var G__107278 = (0);
seq__107141_107249 = G__107275;
chunk__107142_107250 = G__107276;
count__107143_107251 = G__107277;
i__107144_107252 = G__107278;
continue;
}
} else {
}
}
break;
}

var temp__5720__auto___107279 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___107279)){
var container_ref_107280 = temp__5720__auto___107279;
var pixi_graph_107281 = (new module$node_modules$pixi_graph_fork$dist$pixi_graph_cjs.PixiGraph(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"container","container",-1736937707),cljs.core.deref(container_ref_107280),new cljs.core.Keyword(null,"graph","graph",1558099509),graph_107214,new cljs.core.Keyword(null,"style","style",-496642736),style_107212__$1,new cljs.core.Keyword(null,"hoverStyle","hoverStyle",1695150190),hover_style_107213__$1,new cljs.core.Keyword(null,"height","height",1025178622),height_107209], null))));
cljs.core.reset_BANG_(frontend.extensions.graph.pixi._STAR_graph_instance,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph_107214,new cljs.core.Keyword(null,"pixi","pixi",808009198),pixi_graph_107281], null));

if(cljs.core.truth_(register_handlers_fn_107210)){
(register_handlers_fn_107210.cljs$core$IFn$_invoke$arity$1 ? register_handlers_fn_107210.cljs$core$IFn$_invoke$arity$1(pixi_graph_107281) : register_handlers_fn_107210.call(null,pixi_graph_107281));
} else {
}

frontend.extensions.graph.pixi.set_up_listeners_BANG_(pixi_graph_107281);

simulation_107221.on("tick",frontend.extensions.graph.pixi.tick_BANG_(pixi_graph_107281,graph_107214,nodes_js_107219,links_js_107220));
} else {
}
}catch (e107103){if((e107103 instanceof Error)){
var e_107282 = e107103;
console.error(e_107282);
} else {
throw e107103;

}
}
return state;
});

//# sourceMappingURL=frontend.extensions.graph.pixi.js.map
