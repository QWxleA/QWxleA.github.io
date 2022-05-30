goog.provide('frontend.components.header');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
frontend.components.header.home_button = rum.core.lazy_build(rum.core.build_defc,(function (){
return frontend.ui.with_shortcut(new cljs.core.Keyword("go","home","go/home",-74562325),"left",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(frontend.mobile.util.native_iphone_QMARK_())){
frontend.state.set_left_sidebar_open_BANG_(false);
} else {
}

return frontend.handler.route.go_to_journals_BANG_();
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("home",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null))], null));
}),null,"frontend.components.header/home-button");
frontend.components.header.login = rum.core.lazy_build(rum.core.build_defc,(function (){
var _ = frontend.state.sub(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
if(frontend.config.publishing_QMARK_){
return null;
} else {
if(frontend.handler.user.logged_in_QMARK_()){
return frontend.ui.dropdown_with_links((function (p__61428){
var map__61429 = p__61428;
var map__61429__$1 = cljs.core.__destructure_map(map__61429);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61429__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium","span.text-sm.font-medium",-2002622722),frontend.handler.user.email()], null)], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logout","logout",1418564329)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.logout], null)], null)], null),cljs.core.PersistentArrayMap.EMPTY);
} else {
return daiquiri.core.create_element("a",{'onClick':(function (){
return window.open(frontend.config.LOGIN_URL);
}),'className':"button text-sm font-medium block"},[(function (){var attrs61430 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login","login",55217519)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs61430))?daiquiri.interpreter.element_attributes(attrs61430):null),((cljs.core.map_QMARK_(attrs61430))?null:[daiquiri.interpreter.interpret(attrs61430)]));
})()]);
}
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.header/login");
frontend.components.header.file_sync_remote_graphs = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var _STAR_remote_graphs = new cljs.core.Keyword("frontend.components.header","remote-graphs","frontend.components.header/remote-graphs",-188597940).cljs$core$IFn$_invoke$arity$1(state);
var refresh_list_fn = (function (){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_61436){
var state_val_61437 = (state_61436[(1)]);
if((state_val_61437 === (1))){
var inst_61431 = frontend.handler.file_sync.list_graphs();
var state_61436__$1 = state_61436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61436__$1,(2),inst_61431);
} else {
if((state_val_61437 === (2))){
var inst_61433 = (state_61436[(2)]);
var inst_61434 = cljs.core.reset_BANG_(_STAR_remote_graphs,inst_61433);
var state_61436__$1 = state_61436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61436__$1,inst_61434);
} else {
return null;
}
}
});
return (function() {
var frontend$components$header$state_machine__27573__auto__ = null;
var frontend$components$header$state_machine__27573__auto____0 = (function (){
var statearr_61438 = [null,null,null,null,null,null,null];
(statearr_61438[(0)] = frontend$components$header$state_machine__27573__auto__);

(statearr_61438[(1)] = (1));

return statearr_61438;
});
var frontend$components$header$state_machine__27573__auto____1 = (function (state_61436){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_61436);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e61439){var ex__27576__auto__ = e61439;
var statearr_61440_61514 = state_61436;
(statearr_61440_61514[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_61436[(4)]))){
var statearr_61441_61515 = state_61436;
(statearr_61441_61515[(1)] = cljs.core.first((state_61436[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61516 = state_61436;
state_61436 = G__61516;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$components$header$state_machine__27573__auto__ = function(state_61436){
switch(arguments.length){
case 0:
return frontend$components$header$state_machine__27573__auto____0.call(this);
case 1:
return frontend$components$header$state_machine__27573__auto____1.call(this,state_61436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$header$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$header$state_machine__27573__auto____0;
frontend$components$header$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$header$state_machine__27573__auto____1;
return frontend$components$header$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_61442 = f__27596__auto__();
(statearr_61442[(6)] = c__27595__auto__);

return statearr_61442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
if((cljs.core.deref(_STAR_remote_graphs) == null)){
refresh_list_fn();
} else {
}

return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"flex"},[daiquiri.core.create_element("h1",{'className':"title"},["Remote Graphs"]),daiquiri.core.create_element("div",{'onClick':refresh_list_fn},[daiquiri.interpreter.interpret(frontend.components.svg.refresh)])]),daiquiri.core.create_element("p",{'className':"text-sm"},["click to delete the selected graph"]),daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$header$iter__61447(s__61448){
return (new cljs.core.LazySeq(null,(function (){
var s__61448__$1 = s__61448;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__61448__$1);
if(temp__5720__auto__){
var s__61448__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61448__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__61448__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__61450 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__61449 = (0);
while(true){
if((i__61449 < size__5519__auto__)){
var graph = cljs.core._nth(c__5518__auto__,i__61449);
cljs.core.chunk_append(b__61450,daiquiri.core.create_element("li",{'className':"mb-4"},[daiquiri.core.create_element("a",{'onClick':((function (i__61449,graph,c__5518__auto__,size__5519__auto__,b__61450,s__61448__$2,temp__5720__auto__,_STAR_remote_graphs,refresh_list_fn){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete graph",new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(graph)], 0));

return frontend.handler.file_sync.delete_graph(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(graph));
});})(i__61449,graph,c__5518__auto__,size__5519__auto__,b__61450,s__61448__$2,temp__5720__auto__,_STAR_remote_graphs,refresh_list_fn))
,'className':"font-medium"},[daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(graph))])]));

var G__61517 = (i__61449 + (1));
i__61449 = G__61517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61450),frontend$components$header$iter__61447(cljs.core.chunk_rest(s__61448__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61450),null);
}
} else {
var graph = cljs.core.first(s__61448__$2);
return cljs.core.cons(daiquiri.core.create_element("li",{'className':"mb-4"},[daiquiri.core.create_element("a",{'onClick':((function (graph,s__61448__$2,temp__5720__auto__,_STAR_remote_graphs,refresh_list_fn){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete graph",new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(graph)], 0));

return frontend.handler.file_sync.delete_graph(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(graph));
});})(graph,s__61448__$2,temp__5720__auto__,_STAR_remote_graphs,refresh_list_fn))
,'className':"font-medium"},[daiquiri.interpreter.interpret(new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(graph))])]),frontend$components$header$iter__61447(cljs.core.rest(s__61448__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.deref(_STAR_remote_graphs));
})())])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.header","remote-graphs","frontend.components.header/remote-graphs",-188597940))], null),"frontend.components.header/file-sync-remote-graphs");
frontend.components.header.file_sync = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var _ = frontend.state.sub(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
var sync_state = frontend.state.sub(new cljs.core.Keyword("file-sync","sync-state","file-sync/sync-state",-474069969));
var not_syncing_QMARK_ = (((sync_state == null)) || (frontend.fs.sync.sync_state__stopped_QMARK_(sync_state)));
var _STAR_existed_graphs = new cljs.core.Keyword("frontend.components.header","existed-graphs","frontend.components.header/existed-graphs",1149590230).cljs$core$IFn$_invoke$arity$1(state);
var ___$1 = rum.core.react(frontend.handler.file_sync.refresh_file_sync_component);
var graph_txid_exists_QMARK_ = frontend.handler.file_sync.graph_txid_exists_QMARK_();
var uploading_files = new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256).cljs$core$IFn$_invoke$arity$1(sync_state);
var downloading_files = new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085).cljs$core$IFn$_invoke$arity$1(sync_state);
if(frontend.config.publishing_QMARK_){
return null;
} else {
if(frontend.handler.user.logged_in_QMARK_()){
if(frontend.handler.file_sync.graph_txid_exists_QMARK_()){
} else {
daiquiri.interpreter.interpret((function (){var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_61469){
var state_val_61470 = (state_61469[(1)]);
if((state_val_61470 === (1))){
var inst_61464 = frontend.handler.file_sync.list_graphs();
var state_61469__$1 = state_61469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61469__$1,(2),inst_61464);
} else {
if((state_val_61470 === (2))){
var inst_61466 = (state_61469[(2)]);
var inst_61467 = cljs.core.reset_BANG_(_STAR_existed_graphs,inst_61466);
var state_61469__$1 = state_61469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61469__$1,inst_61467);
} else {
return null;
}
}
});
return (function() {
var frontend$components$header$state_machine__27573__auto__ = null;
var frontend$components$header$state_machine__27573__auto____0 = (function (){
var statearr_61471 = [null,null,null,null,null,null,null];
(statearr_61471[(0)] = frontend$components$header$state_machine__27573__auto__);

(statearr_61471[(1)] = (1));

return statearr_61471;
});
var frontend$components$header$state_machine__27573__auto____1 = (function (state_61469){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_61469);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e61472){var ex__27576__auto__ = e61472;
var statearr_61473_61518 = state_61469;
(statearr_61473_61518[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_61469[(4)]))){
var statearr_61474_61519 = state_61469;
(statearr_61474_61519[(1)] = cljs.core.first((state_61469[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61520 = state_61469;
state_61469 = G__61520;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$components$header$state_machine__27573__auto__ = function(state_61469){
switch(arguments.length){
case 0:
return frontend$components$header$state_machine__27573__auto____0.call(this);
case 1:
return frontend$components$header$state_machine__27573__auto____1.call(this,state_61469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$header$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$header$state_machine__27573__auto____0;
frontend$components$header$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$header$state_machine__27573__auto____1;
return frontend$components$header$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_61475 = f__27596__auto__();
(statearr_61475[(6)] = c__27595__auto__);

return statearr_61475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})());
}

return frontend.ui.dropdown_with_links((function (p__61480){
var map__61481 = p__61480;
var map__61481__$1 = cljs.core.__destructure_map(map__61481);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61481__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
if(not_syncing_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("cloud-off",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("cloud",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null))], null);
}
}),(function (){var G__61482 = cljs.core.PersistentVector.EMPTY;
var G__61482__$1 = (((!(graph_txid_exists_QMARK_)))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__61482,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (graph){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.file_sync.switch_graph(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(graph));
})], null)], null);
}),cljs.core.filterv((function (p1__61451_SHARP_){
var and__5041__auto__ = new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(p1__61451_SHARP_);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(p1__61451_SHARP_);
} else {
return and__5041__auto__;
}
}),cljs.core.deref(_STAR_existed_graphs))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"create graph",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.file_sync.create_graph(module$node_modules$path$path.basename(frontend.state.get_current_repo()));
})], null)], null)], null)], 0)):G__61482);
if(graph_txid_exists_QMARK_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__61482__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"toggle file sync",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(not_syncing_QMARK_){
return frontend.fs.sync.sync_start();
} else {
return frontend.fs.sync.sync_stop();
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"remote graph list",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.header.file_sync_remote_graphs);
})], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),f,new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("arrow-narrow-up")], null);
}),uploading_files),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),f,new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("arrow-narrow-down")], null);
}),downloading_files),(cljs.core.truth_(sync_state)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,f){
new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(f);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.util.time_ago(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(f))], null)], null)], null);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(sync_state))):null)], 0));
} else {
return G__61482__$1;
}
})(),(function (){var G__61483 = cljs.core.PersistentArrayMap.EMPTY;
if((!(graph_txid_exists_QMARK_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61483,new cljs.core.Keyword(null,"links-header","links-header",-1729119536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.text-sm.opacity-60.px-4.pt-2","div.font-medium.text-sm.opacity-60.px-4.pt-2",917690640),"Switch to:"], null));
} else {
return G__61483;
}
})());
} else {
return null;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.header","existed-graphs","frontend.components.header/existed-graphs",1149590230))], null),"frontend.components.header/file-sync");
frontend.components.header.left_menu_button = rum.core.lazy_build(rum.core.build_defc,(function (p__61484){
var map__61485 = p__61484;
var map__61485__$1 = cljs.core.__destructure_map(map__61485);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61485__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return frontend.ui.with_shortcut(new cljs.core.Keyword("ui","toggle-left-sidebar","ui/toggle-left-sidebar",-468835605),"bottom",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#left-menu.cp__header-left-menu.button","a#left-menu.cp__header-left-menu.button",1966843162),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(12)], null)], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("menu-2",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null))], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.header/left-menu-button");
frontend.components.header.dropdown_menu = rum.core.lazy_build(rum.core.build_defc,(function (p__61486){
var map__61487 = p__61486;
var map__61487__$1 = cljs.core.__destructure_map(map__61487);
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61487__$1,new cljs.core.Keyword(null,"current-repo","current-repo",134812359));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61487__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var page_menu = frontend.components.page_menu.page_menu(null);
var page_menu_and_hr = ((cljs.core.seq(page_menu))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(page_menu,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null)], null)):null);
return frontend.ui.dropdown_with_links((function (p__61490){
var map__61491 = p__61490;
var map__61491__$1 = cljs.core.__destructure_map(map__61491);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61491__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("dots",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null))], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(page_menu_and_hr,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(frontend.state.enable_editing_QMARK_())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings","settings",1556144875)) : t.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.state.open_settings_BANG_], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("settings")], null):null),(cljs.core.truth_(frontend.handler.plugin.lsp_enabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plugins","plugins",1900073717)) : t.call(null,new cljs.core.Keyword(null,"plugins","plugins",1900073717))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.goto_plugins_dashboard_BANG_();
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("apps")], null):null),(cljs.core.truth_(frontend.handler.plugin.lsp_enabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642)) : t.call(null,new cljs.core.Keyword(null,"themes","themes",-702786642))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.plugins.open_select_theme_BANG_();
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("palette")], null):null),(cljs.core.truth_(current_repo)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"export-graph","export-graph",1223786998)) : t.call(null,new cljs.core.Keyword(null,"export-graph","export-graph",1223786998))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.export$.export$);
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("database-export")], null):null),(cljs.core.truth_((function (){var and__5041__auto__ = current_repo;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.enable_editing_QMARK_();
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"import","import",-1399500709)) : t.call(null,new cljs.core.Keyword(null,"import","import",-1399500709))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"import","import",-1399500709))], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("file-upload")], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row.flex.justify-between.items-center","div.flex-row.flex.justify-between.items-center",-810974321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"join-community","join-community",2044624173)) : t.call(null,new cljs.core.Keyword(null,"join-community","join-community",2044624173)))], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.gg/KpN4eHY",new cljs.core.Keyword(null,"title","title",636505583),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"discord-title","discord-title",-994885340)) : t.call(null,new cljs.core.Keyword(null,"discord-title","discord-title",-994885340))),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("brand-discord")], null)], null))),cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.header/dropdown-menu");
frontend.components.header.back_and_forward = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"flex flex-row"},[frontend.ui.with_shortcut(new cljs.core.Keyword("go","backward","go/backward",554039684),"bottom",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.it.navigation.nav-left.button","a.it.navigation.nav-left.button",209021717),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Go back",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.history.back();
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("arrow-left",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null))], null)),frontend.ui.with_shortcut(new cljs.core.Keyword("go","forward","go/forward",-557348207),"bottom",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.it.navigation.nav-right.button","a.it.navigation.nav-right.button",-1173891169),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Go forward",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.history.forward();
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("arrow-right",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null))], null))]);
}),null,"frontend.components.header/back-and-forward");
frontend.components.header.updater_tips_new_version = rum.core.lazy_build(rum.core.build_defc,(function (t){
var vec__61492 = rum.core.use_state(null);
var downloaded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61492,(0),null);
var set_downloaded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61492,(1),null);
var _ = rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return "auto-updater-downloaded";
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var channel = temp__5720__auto__;
var callback = (function (_,args){
console.debug("[new-version downloaded] args:",args);

var args_61537__$1 = cljs_bean.core.__GT_clj(args);
(set_downloaded.cljs$core$IFn$_invoke$arity$1 ? set_downloaded.cljs$core$IFn$_invoke$arity$1(args_61537__$1) : set_downloaded.call(null,args_61537__$1));

frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","auto-updater-downloaded","electron/auto-updater-downloaded",760067750),args_61537__$1);

return null;
});
apis.addListener(channel,callback);

return (function (){
return apis.removeListener(channel,callback);
});
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(downloaded)){
return daiquiri.core.create_element("div",{'className':"cp__header-tips"},[(function (){var attrs61495 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("updater","new-version-install","updater/new-version-install",1958846611)) : t.call(null,new cljs.core.Keyword("updater","new-version-install","updater/new-version-install",1958846611)));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs61495))?daiquiri.interpreter.element_attributes(attrs61495):null),((cljs.core.map_QMARK_(attrs61495))?[daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.quit_and_install_new_version_BANG_();
}),'className':"restart ml-2"},[daiquiri.interpreter.interpret(frontend.components.svg.reload.cljs$core$IFn$_invoke$arity$1((16))),(function (){var attrs61496 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("updater","quit-and-install","updater/quit-and-install",-1112335838)) : t.call(null,new cljs.core.Keyword("updater","quit-and-install","updater/quit-and-install",-1112335838)));
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs61496))?daiquiri.interpreter.element_attributes(attrs61496):null),((cljs.core.map_QMARK_(attrs61496))?null:[daiquiri.interpreter.interpret(attrs61496)]));
})()])]:[daiquiri.interpreter.interpret(attrs61495),daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.quit_and_install_new_version_BANG_();
}),'className':"restart ml-2"},[daiquiri.interpreter.interpret(frontend.components.svg.reload.cljs$core$IFn$_invoke$arity$1((16))),(function (){var attrs61497 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("updater","quit-and-install","updater/quit-and-install",-1112335838)) : t.call(null,new cljs.core.Keyword("updater","quit-and-install","updater/quit-and-install",-1112335838)));
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs61497))?daiquiri.interpreter.element_attributes(attrs61497):null),((cljs.core.map_QMARK_(attrs61497))?null:[daiquiri.interpreter.interpret(attrs61497)]));
})()])]));
})()]);
} else {
return null;
}
}),null,"frontend.components.header/updater-tips-new-version");
frontend.components.header.header = rum.core.lazy_build(rum.core.build_defc,(function (p__61499){
var map__61500 = p__61499;
var map__61500__$1 = cljs.core.__destructure_map(map__61500);
var open_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61500__$1,new cljs.core.Keyword(null,"open-fn","open-fn",1265855718));
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61500__$1,new cljs.core.Keyword(null,"current-repo","current-repo",134812359));
var default_home = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61500__$1,new cljs.core.Keyword(null,"default-home","default-home",171104159));
var new_block_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61500__$1,new cljs.core.Keyword(null,"new-block-mode","new-block-mode",1189333509));
var repos = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61498_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__61498_SHARP_),frontend.config.local_repo);
}),frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null)));
var electron_mac_QMARK_ = (function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.electron_QMARK_();
} else {
return and__5041__auto__;
}
})();
var show_open_folder_QMARK_ = (function (){var and__5041__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return ((((cljs.core.empty_QMARK_(repos)) || ((frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)) == null)))) && (((cljs.core.not(frontend.mobile.util.native_platform_QMARK_())) && ((!(frontend.config.publishing_QMARK_))))));
} else {
return and__5041__auto__;
}
})();
var left_menu = frontend.components.header.left_menu_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(open_fn.cljs$core$IFn$_invoke$arity$0 ? open_fn.cljs$core$IFn$_invoke$arity$0() : open_fn.call(null));

return frontend.state.set_left_sidebar_open_BANG_(cljs.core.not(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
})], null));
return daiquiri.core.create_element("div",{'id':"head",'onDoubleClick':(function (e){
var temp__5720__auto__ = e.target;
if(cljs.core.truth_(temp__5720__auto__)){
var target = temp__5720__auto__;
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return target.classList.contains("cp__header");
} else {
return and__5041__auto__;
}
})())){
return window.apis.toggleMaxOrMinActiveWindow();
} else {
return null;
}
} else {
return null;
}
}),'style':{'fontSize':(50)},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__header",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"electron-mac","electron-mac",776021658),electron_mac_QMARK_,new cljs.core.Keyword(null,"native-ios","native-ios",1665559494),frontend.mobile.util.native_ios_QMARK_(),new cljs.core.Keyword(null,"native-android","native-android",1622968152),frontend.mobile.util.native_android_QMARK_()], null)], null))], null))},[(function (){var attrs61501 = (cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_menu,(cljs.core.truth_(current_repo)?frontend.ui.with_shortcut(new cljs.core.Keyword("go","search","go/search",1564957958),"right",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button#search-button","a.button#search-button",-1752326186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_iphone_QMARK_();
}
})())){
frontend.state.set_left_sidebar_open_BANG_(false);
} else {
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","search","go/search",1564957958)], null));
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),frontend.ui.icon_size], null)], null))], null)):null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs61501))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l","flex"], null)], null),attrs61501], 0))):{'className':"l flex"}),((cljs.core.map_QMARK_(attrs61501))?[(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?((frontend.state.home_QMARK_())?daiquiri.interpreter.interpret(left_menu):frontend.ui.with_shortcut(new cljs.core.Keyword("go","backward","go/backward",554039684),"bottom",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.it.navigation.nav-left.button","a.it.navigation.nav-left.button",209021717),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Go back",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.history.back();
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("chevron-left",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(25)], null)], null))], null))):null)]:[daiquiri.interpreter.interpret(attrs61501),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?((frontend.state.home_QMARK_())?daiquiri.interpreter.interpret(left_menu):frontend.ui.with_shortcut(new cljs.core.Keyword("go","backward","go/backward",554039684),"bottom",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.it.navigation.nav-left.button","a.it.navigation.nav-left.button",209021717),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Go back",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.history.back();
})], null),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("chevron-left",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(25)], null)], null))], null))):null)]));
})(),(function (){var attrs61502 = ((frontend.handler.file_sync.hiding_login_AMPERSAND_file_sync)?null:frontend.components.header.file_sync());
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs61502))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r","flex"], null)], null),attrs61502], 0))):{'className':"r flex"}),((cljs.core.map_QMARK_(attrs61502))?[((frontend.handler.file_sync.hiding_login_AMPERSAND_file_sync)?null:frontend.components.header.login()),(cljs.core.truth_(frontend.handler.plugin.lsp_enabled_QMARK_)?frontend.components.plugins.hook_ui_items(new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_route(),new cljs.core.Keyword(null,"home","home",-74557309)))?frontend.components.header.home_button():null),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.header.back_and_forward():null),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:daiquiri.interpreter.interpret((new_block_mode.cljs$core$IFn$_invoke$arity$0 ? new_block_mode.cljs$core$IFn$_invoke$arity$0() : new_block_mode.call(null)))),(cljs.core.truth_(show_open_folder_QMARK_)?daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"repo-add","repo-add",458734484)], null));
}),'className':"text-sm font-medium button add-graph-btn flex items-center"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("folder-plus")),(cljs.core.truth_(frontend.config.mobile_QMARK_)?null:daiquiri.core.create_element("strong",{'style':{'marginTop':(cljs.core.truth_(electron_mac_QMARK_)?(0):(2))}},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","add-graph","on-boarding/add-graph",-1235230195)], 0)))]))]):null),((frontend.config.publishing_QMARK_)?daiquiri.core.create_element("a",{'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509)),'className':"text-sm font-medium button"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph","graph",1558099509)], 0)))]):null),frontend.components.header.dropdown_menu(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),frontend.context.i18n.t,new cljs.core.Keyword(null,"current-repo","current-repo",134812359),current_repo,new cljs.core.Keyword(null,"default-home","default-home",171104159),default_home], null)),((cljs.core.not(frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887))))?frontend.components.right_sidebar.toggle():null),frontend.components.header.updater_tips_new_version(frontend.context.i18n.t)]:[daiquiri.interpreter.interpret(attrs61502),((frontend.handler.file_sync.hiding_login_AMPERSAND_file_sync)?null:frontend.components.header.login()),(cljs.core.truth_(frontend.handler.plugin.lsp_enabled_QMARK_)?frontend.components.plugins.hook_ui_items(new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065)):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_route(),new cljs.core.Keyword(null,"home","home",-74557309)))?frontend.components.header.home_button():null),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.header.back_and_forward():null),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:daiquiri.interpreter.interpret((new_block_mode.cljs$core$IFn$_invoke$arity$0 ? new_block_mode.cljs$core$IFn$_invoke$arity$0() : new_block_mode.call(null)))),(cljs.core.truth_(show_open_folder_QMARK_)?daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"repo-add","repo-add",458734484)], null));
}),'className':"text-sm font-medium button add-graph-btn flex items-center"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("folder-plus")),(cljs.core.truth_(frontend.config.mobile_QMARK_)?null:daiquiri.core.create_element("strong",{'style':{'marginTop':(cljs.core.truth_(electron_mac_QMARK_)?(0):(2))}},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","add-graph","on-boarding/add-graph",-1235230195)], 0)))]))]):null),((frontend.config.publishing_QMARK_)?daiquiri.core.create_element("a",{'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph","graph",1558099509)),'className':"text-sm font-medium button"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph","graph",1558099509)], 0)))]):null),frontend.components.header.dropdown_menu(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),frontend.context.i18n.t,new cljs.core.Keyword(null,"current-repo","current-repo",134812359),current_repo,new cljs.core.Keyword(null,"default-home","default-home",171104159),default_home], null)),((cljs.core.not(frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887))))?frontend.components.right_sidebar.toggle():null),frontend.components.header.updater_tips_new_version(frontend.context.i18n.t)]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.header/header");

//# sourceMappingURL=frontend.components.header.js.map
