goog.provide('frontend.handler.events');
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.events !== 'undefined') && (typeof frontend.handler.events.handle !== 'undefined')){
} else {
frontend.handler.events.handle = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__60977 = cljs.core.get_global_hierarchy;
return (fexpr__60977.cljs$core$IFn$_invoke$arity$0 ? fexpr__60977.cljs$core$IFn$_invoke$arity$0() : fexpr__60977.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.handler.events","handle"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","added","graph/added",2021754774),(function (p__60978){
var vec__60979 = p__60978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60979,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60979,(1),null);
var map__60982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60979,(2),null);
var map__60982__$1 = cljs.core.__destructure_map(map__60982);
var empty_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60982__$1,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639));
(frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword("ast","version","ast/version",425392416),frontend.db_schema.ast_version) : frontend.db.set_key_value.call(null,repo,new cljs.core.Keyword("ast","version","ast/version",425392416),frontend.db_schema.ast_version));

frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.db.persist_BANG_(repo);

if(frontend.state.setups_picker_QMARK_()){
if(cljs.core.truth_(empty_graph_QMARK_)){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),"picker"], null)], null));
} else {
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
}
} else {
return null;
}
}));
frontend.handler.events.file_sync_stop_when_switch_graph = (function frontend$handler$events$file_sync_stop_when_switch_graph(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.persist_var.load_vars(),(function (___28349__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.sync_stop(),(function (___28349__auto____$1){
return promesa.protocols._promise(frontend.fs.sync.sync_start());
}));
}));
}));
});
frontend.handler.events.graph_switch = (function frontend$handler$events$graph_switch(graph){
frontend.state.set_current_repo_BANG_(graph);

frontend.handler.common.reset_config_BANG_(graph,null);

frontend.modules.shortcut.core.refresh_BANG_();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),frontend.state.get_current_route())){
} else {
frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
}

var temp__5720__auto___61271 = frontend.config.get_repo_dir(graph);
if(cljs.core.truth_(temp__5720__auto___61271)){
var dir_name_61272 = temp__5720__auto___61271;
frontend.fs.watch_dir_BANG_(dir_name_61272);
} else {
}

frontend.extensions.srs.update_cards_due_count_BANG_();

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ready","graph/ready",1121782733),graph], null));

return frontend.handler.events.file_sync_stop_when_switch_graph();
});
frontend.handler.events.persist_db_noti_m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.ui.loading(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","persist","graph/persist",846795802)], 0))),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","persist-error","graph/persist-error",341856949)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
})], null);
/**
 * Logic for keeping db sync when switching graphs
 * Only works for electron
 */
frontend.handler.events.graph_switch_on_persisted = (function frontend$handler$events$graph_switch_on_persisted(graph){
var current_repo = frontend.state.get_current_repo();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(current_repo,frontend.handler.events.persist_db_noti_m),(function (___28349__auto__){
return promesa.protocols._promise(frontend.handler.repo.broadcast_persist_db_BANG_(graph));
}));
})):null),(function (___28349__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$1(graph),(function (___28349__auto____$1){
return promesa.protocols._promise(frontend.handler.events.graph_switch(graph));
}));
}));
}));
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","switch","graph/switch",178853840),(function (p__60988){
var vec__60989 = p__60988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60989,(0),null);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60989,(1),null);
if(frontend.modules.outliner.file.writes_finished_QMARK_()){
return frontend.handler.events.graph_switch_on_persisted(graph);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Please wait seconds until all changes are saved for the current graph.",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),(function (p__60994){
var vec__60995 = p__60994;
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60995,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60995,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),(function (current_repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return current_repo;
}
})(),(function (target_repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(current_repo,frontend.handler.events.persist_db_noti_m),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,target_repo))?null:frontend.handler.repo.broadcast_persist_db_BANG_(repo)),(function (___$1){
return promesa.protocols._promise(frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$2(ev,repo));
}));
}));
}));
}));
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","migrated","graph/migrated",1907299703),(function (p__60999){
var vec__61000 = p__60999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61000,(0),null);
var _repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61000,(1),null);
return alert("Graph migrated.");
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","save","graph/save",1751198815),(function (_){
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.ui.loading(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","save","graph/save",1751198815)], 0))),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.ui.loading(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","save-success","graph/save-success",1004614712)], 0))),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","save-error","graph/save-error",848849018)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
})], null));
}));
frontend.handler.events.get_local_repo = (function frontend$handler$events$get_local_repo(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
if(frontend.config.local_db_QMARK_(repo)){
return repo;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.events.ask_permission = (function frontend$handler$events$ask_permission(repo){
if(((cljs.core.not(frontend.util.electron_QMARK_())) && (cljs.core.not(frontend.mobile.util.native_platform_QMARK_())))){
return (function (close_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Grant native filesystem permission for directory: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),frontend.config.get_local_dir(repo)], null)], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Grant",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"ui__modal-enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.fs.nfs.check_directory_permission_BANG_(repo);

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
})], 0))], null);
});
} else {
return null;
}
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","nfs-ask-permission","modal/nfs-ask-permission",-1078859519),(function (){
var temp__5720__auto__ = frontend.handler.events.get_local_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.handler.events.ask_permission(repo));
} else {
return null;
}
}));
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.events !== 'undefined') && (typeof frontend.handler.events._STAR_query_properties !== 'undefined')){
} else {
frontend.handler.events._STAR_query_properties = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.handler.events.query_properties_settings_inner = rum.core.lazy_build(rum.core.build_defc,(function (block,shown_properties,all_properties,_close_fn){
var query_properties = rum.core.react(frontend.handler.events._STAR_query_properties);
return daiquiri.core.create_element("div",{'className':"p-4"},[daiquiri.core.create_element("div",{'className':"font-bold"},["Properties settings for this query:"]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$handler$events$iter__61009(s__61010){
return (new cljs.core.LazySeq(null,(function (){
var s__61010__$1 = s__61010;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__61010__$1);
if(temp__5720__auto__){
var s__61010__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61010__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__61010__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__61012 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__61011 = (0);
while(true){
if((i__61011 < size__5519__auto__)){
var property = cljs.core._nth(c__5518__auto__,i__61011);
cljs.core.chunk_append(b__61012,(function (){var property_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_properties,property);
var shown_QMARK_ = (((property_value == null))?cljs.core.contains_QMARK_(shown_properties,property):property_value);
return daiquiri.core.create_element("div",{'className':"flex flex-row m-2 justify-between align-items"},[daiquiri.core.create_element("div",null,[cljs.core.name(property)]),(function (){var attrs61013 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(shown_QMARK_,((function (i__61011,property_value,shown_QMARK_,property,c__5518__auto__,size__5519__auto__,b__61012,s__61010__$2,temp__5720__auto__,query_properties){
return (function (){
var value = cljs.core.not(shown_QMARK_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.events._STAR_query_properties,cljs.core.assoc,property,value);

return frontend.handler.editor.set_block_query_properties_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),all_properties,property,value);
});})(i__61011,property_value,shown_QMARK_,property,c__5518__auto__,size__5519__auto__,b__61012,s__61010__$2,temp__5720__auto__,query_properties))
,true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs61013))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1"], null)], null),attrs61013], 0))):{'className':"mt-1"}),((cljs.core.map_QMARK_(attrs61013))?null:[daiquiri.interpreter.interpret(attrs61013)]));
})()]);
})());

var G__61323 = (i__61011 + (1));
i__61011 = G__61323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61012),frontend$handler$events$iter__61009(cljs.core.chunk_rest(s__61010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61012),null);
}
} else {
var property = cljs.core.first(s__61010__$2);
return cljs.core.cons((function (){var property_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_properties,property);
var shown_QMARK_ = (((property_value == null))?cljs.core.contains_QMARK_(shown_properties,property):property_value);
return daiquiri.core.create_element("div",{'className':"flex flex-row m-2 justify-between align-items"},[daiquiri.core.create_element("div",null,[cljs.core.name(property)]),(function (){var attrs61013 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(shown_QMARK_,((function (property_value,shown_QMARK_,property,s__61010__$2,temp__5720__auto__,query_properties){
return (function (){
var value = cljs.core.not(shown_QMARK_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.events._STAR_query_properties,cljs.core.assoc,property,value);

return frontend.handler.editor.set_block_query_properties_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),all_properties,property,value);
});})(property_value,shown_QMARK_,property,s__61010__$2,temp__5720__auto__,query_properties))
,true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs61013))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1"], null)], null),attrs61013], 0))):{'className':"mt-1"}),((cljs.core.map_QMARK_(attrs61013))?null:[daiquiri.interpreter.interpret(attrs61013)]));
})()]);
})(),frontend$handler$events$iter__61009(cljs.core.rest(s__61010__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(all_properties);
})())]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.handler.events._STAR_query_properties,cljs.core.PersistentArrayMap.EMPTY);

return state;
})], null)], null),"frontend.handler.events/query-properties-settings-inner");
frontend.handler.events.query_properties_settings = (function frontend$handler$events$query_properties_settings(block,shown_properties,all_properties){
return (function (close_fn){
return frontend.handler.events.query_properties_settings_inner(block,shown_properties,all_properties,close_fn);
});
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),(function (p__61014){
var vec__61015 = p__61014;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61015,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61015,(1),null);
var all_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61015,(2),null);
var block_properties = (function (){var G__61018 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null));
if((G__61018 == null)){
return null;
} else {
return frontend.handler.common.safe_read_string(G__61018,"Parsing query properties failed");
}
})();
var shown_properties = ((cljs.core.seq(block_properties))?cljs.core.set(block_properties):cljs.core.set(all_properties));
var shown_properties__$1 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(all_properties),shown_properties);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.handler.events.query_properties_settings(block,shown_properties__$1,all_properties));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906),(function (_){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.extensions.srs.global_cards,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"srs","srs",1327991978),new cljs.core.Keyword(null,"label","label",1718410804),"flashcards__cp"], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","show-instruction","modal/show-instruction",-270524467),(function (_){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.fs.capacitor_fs.instruction,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"instruction","instruction",915804765),new cljs.core.Keyword(null,"label","label",1718410804),"instruction__cp"], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","show-themes-modal","modal/show-themes-modal",238725999),(function (_){
return frontend.components.plugins.open_select_theme_BANG_();
}));
frontend.handler.events.modal_output = rum.core.lazy_build(rum.core.build_defc,(function (content){
return daiquiri.interpreter.interpret(content);
}),null,"frontend.handler.events/modal-output");
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","show","modal/show",-748944018),(function (p__61019){
var vec__61020 = p__61019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61020,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61020,(1),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.handler.events.modal_output(content);
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","set-git-username-and-email","modal/set-git-username-and-email",-1189789991),(function (p__61030){
var vec__61034 = p__61030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61034,(0),null);
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61034,(1),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.git.set_git_username_and_email);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("page","title-property-changed","page/title-property-changed",-1938781817),(function (p__61037){
var vec__61038 = p__61037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61038,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61038,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61038,(2),null);
return frontend.handler.page.rename_BANG_(old_title,new_title);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("page","create","page/create",-1304816391),(function (p__61045){
var vec__61046 = p__61045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61046,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61046,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61046,(2),null);
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,opts);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("page","create-today-journal","page/create-today-journal",-248526088),(function (p__61049){
var vec__61050 = p__61049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61050,(0),null);
var _repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61050,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.create_today_journal_BANG_(),(function (___$1){
return promesa.protocols._promise(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0());
}));
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file","not-matched-from-disk","file/not-matched-from-disk",1915939272),(function (p__61053){
var vec__61054 = p__61053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61054,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61054,(1),null);
var disk_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61054,(2),null);
var db_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61054,(3),null);
frontend.state.clear_edit_BANG_();

var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
if(cljs.core.truth_((function (){var and__5041__auto__ = disk_content;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = db_content;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.trim_safe(disk_content),frontend.util.trim_safe(db_content));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.components.diff.local_file(repo,path,disk_content,db_content);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"diff__cp"], null));
} else {
return null;
}
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","display-file-version","modal/display-file-version",1594347634),(function (p__61057){
var vec__61058 = p__61057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61058,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61058,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61058,(2),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61058,(3),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(content)?frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(content):null),(function (content__$1){
return promesa.protocols._promise(frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.git.file_specific_version(path,hash,content__$1);
})));
}));
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","ready","graph/ready",1121782733),(function (p__61061){
var vec__61062 = p__61061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61062,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61062,(1),null);
frontend.handler.search.rebuild_indices_when_stale_BANG_.cljs$core$IFn$_invoke$arity$1(repo);

return frontend.handler.repo.graph_ready_BANG_(repo);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("notification","show","notification/show",1864741804),(function (p__61065){
var vec__61066 = p__61065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61066,(0),null);
var map__61069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61066,(1),null);
var map__61069__$1 = cljs.core.__destructure_map(map__61069);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"content","content",15833224));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var clear_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword(null,"clear?","clear?",1363344639));
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(content,status,clear_QMARK_);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("command","run","command/run",1545408256),(function (_){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.shell.shell);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","search","go/search",1564957958),(function (_){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.search.search_modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),false,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","plugins","go/plugins",1900072925),(function (_){
return frontend.components.plugins.open_plugins_modal_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","plugins-waiting-lists","go/plugins-waiting-lists",-660383344),(function (_){
return frontend.components.plugins.open_waiting_updates_modal_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),(function (p__61070){
var vec__61071 = p__61070;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61071,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61071,(1),null);
var nav_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61071,(2),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61071,(3),null);
if(cljs.core.truth_(pid)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),pid);

frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","navs-settings?","plugin/navs-settings?",-615901808),(!(nav_QMARK_ === false)));

return frontend.components.plugins.open_focused_settings_modal_BANG_(title);
} else {
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1("ls-focused-settings-modal");
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),(function (p__61074){
var vec__61075 = p__61074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61075,(0),null);
var agent_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61075,(1),null);
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (___$1){
return frontend.components.plugins.user_proxy_settings_panel(agent_opts);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"https-proxy-panel","https-proxy-panel",-1589308406),new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"redirect-to-home","redirect-to-home",236144576),(function (_){
return frontend.handler.page.create_today_journal_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(function (p__61078){
var vec__61079 = p__61078;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61079,(0),null);
var map__61082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61079,(1),null);
var map__61082__$1 = cljs.core.__destructure_map(map__61082);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61082__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return frontend.modules.instrumentation.posthog.capture(type,payload);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"exec-plugin-cmd","exec-plugin-cmd",1049730302),(function (p__61083){
var vec__61084 = p__61083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61084,(0),null);
var map__61087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61084,(1),null);
var map__61087__$1 = cljs.core.__destructure_map(map__61087);
var pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61087__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var cmd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61087__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61087__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cmd,action);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"shortcut-handler-refreshed","shortcut-handler-refreshed",1293579011),(function (p__61088){
var vec__61089 = p__61088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61089,(0),null);
if(cljs.core.truth_(cljs.core.deref(frontend.modules.shortcut.core._STAR_inited_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(frontend.modules.shortcut.core._STAR_inited_QMARK_,true);

return frontend.modules.shortcut.core.consume_pending_shortcuts_BANG_();
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mobile","keyboard-will-show","mobile/keyboard-will-show",2010922836),(function (p__61092){
var vec__61093 = p__61092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61093,(0),null);
var keyboard_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61093,(1),null);
var main_node = frontend.util.app_scroll_container_node();
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-tabbar?","mobile/show-tabbar?",925227298),false);

frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-toolbar?","mobile/show-toolbar?",-1615839821),true);

if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
cljs.core.reset_BANG_(frontend.util.keyboard_height,keyboard_height);

(main_node.style.marginBottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyboard_height),"px"].join(''));

var temp__5720__auto___61343 = document.querySelector(".cards-review");
if(cljs.core.truth_(temp__5720__auto___61343)){
var card_preview_el_61344 = temp__5720__auto___61343;
(card_preview_el_61344.style.marginBottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyboard_height),"px"].join(''));
} else {
}

return setTimeout((function (){
var toolbar = main_node.querySelector("#mobile-editor-toolbar");
return (toolbar.style.bottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyboard_height),"px"].join(''));
}),(100));
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mobile","keyboard-will-hide","mobile/keyboard-will-hide",-1974048806),(function (p__61096){
var vec__61097 = p__61096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61097,(0),null);
var main_node = frontend.util.app_scroll_container_node();
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-toolbar?","mobile/show-toolbar?",-1615839821),false);

frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-tabbar?","mobile/show-tabbar?",925227298),true);

if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
var temp__5720__auto___61345 = document.querySelector(".cards-review");
if(cljs.core.truth_(temp__5720__auto___61345)){
var card_preview_el_61346 = temp__5720__auto___61345;
(card_preview_el_61346.style.marginBottom = "0px");
} else {
}

return (main_node.style.marginBottom = "0px");
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("plugin","consume-updates","plugin/consume-updates",-331798674),(function (p__61100){
var vec__61101 = p__61100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61101,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61101,(1),null);
var pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61101,(2),null);
var updated_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61101,(3),null);
var downloading_QMARK_ = new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var temp__5720__auto___61347 = (function (){var and__5041__auto__ = cljs.core.not(downloading_QMARK_);
if(and__5041__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),id], null));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto___61347)){
var coming_61348 = temp__5720__auto___61347;
var error_code_61349 = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(coming_61348);
var error_code_61350__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error_code_61349,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"no-new-version","no-new-version",-944956961))))?null:error_code_61349);
if(cljs.core.truth_((function (){var or__5043__auto__ = pending_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(error_code_61350__$1);
}
})())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["[Checked]<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(coming_61348)),"> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_code_61350__$1)].join(''),(cljs.core.truth_(error_code_61350__$1)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"success","success",1890645906)));
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = updated_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return downloading_QMARK_;
} else {
return and__5041__auto__;
}
})())){
var temp__5718__auto__ = frontend.state.get_next_selected_coming_update();
if(cljs.core.truth_(temp__5718__auto__)){
var n = temp__5718__auto__;
return frontend.handler.plugin.check_or_update_marketplace_plugin(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(n,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-code","error-code",180497232),null], 0)),(function (e){
return console.error("[Download Err]",n,e);
}));
} else {
return frontend.handler.plugin.close_updates_downloading();
}
} else {
var temp__5718__auto__ = cljs.core.second(cljs.core.first(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
if(cljs.core.truth_(temp__5718__auto__)){
var n = temp__5718__auto__;
return frontend.handler.plugin.check_or_update_marketplace_plugin(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(n,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-code","error-code",180497232),null], 0)),(function (e){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));

return console.error("[Check Err]",n,e);
}));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = pending_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(frontend.state.all_available_coming_updates());
} else {
return and__5041__auto__;
}
})())){
return frontend.components.plugins.open_waiting_updates_modal_BANG_();
} else {
return null;
}
}
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("plugin","hook-db-tx","plugin/hook-db-tx",1065547419),(function (p__61108){
var vec__61109 = p__61108;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61109,(0),null);
var map__61112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61109,(1),null);
var map__61112__$1 = cljs.core.__destructure_map(map__61112);
var payload = map__61112__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61112__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61112__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61112__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var temp__5720__auto__ = (function (){var and__5041__auto__ = cljs.core.seq(blocks);
if(and__5041__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61107_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__61107_SHARP_);
}),tx_data),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tx_meta,new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800))], null)], 0));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var payload__$1 = temp__5720__auto__;
frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"changed","changed",570724917),payload__$1);

return frontend.handler.plugin.hook_plugin_block_changes(payload__$1);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("backup","broken-config","backup/broken-config",1040905879),(function (p__61114){
var vec__61115 = p__61114;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61115,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61115,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61115,(2),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return content;
} else {
return and__5041__auto__;
}
})())){
var path = frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$0();
var broken_path = clojure.string.replace(path,"/config.edn","/broken-config.edn");
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,frontend.config.get_repo_dir(repo),broken_path,content,cljs.core.PersistentArrayMap.EMPTY),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.alter_file(repo,path,frontend.config.config_default_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)),(function (___$2){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.content","p.content",-1435376888),"It seems that your config.edn is broken. We've restored it with the default content and saved the previous content to the file logseq/broken-config.edn."], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false));
}));
}));
}));
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file-watcher","changed","file-watcher/changed",-365229680),(function (p__61118){
var vec__61119 = p__61118;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61119,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61119,(1),null);
var type = event.event;
var payload = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.Keyword(null,"path","path",-188191168),decodeURI);
frontend.fs.watcher_handler.handle_changed_BANG_(type,payload);

return frontend.fs.sync.file_watch_handler(type,payload);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rebuild-slash-commands-list","rebuild-slash-commands-list",-639662306),(function (p__61122){
var vec__61123 = p__61122;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61123,(0),null);
return (frontend.handler.page.rebuild_slash_commands_list_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.page.rebuild_slash_commands_list_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.page.rebuild_slash_commands_list_BANG_.call(null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","ask-for-re-index","graph/ask-for-re-index",2038098533),(function (p__61126){
var vec__61127 = p__61126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61127,(0),null);
var _STAR_multiple_windows_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61127,(1),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.atom_QMARK_(_STAR_multiple_windows_QMARK_);
if(and__5041__auto__){
return cljs.core.deref(_STAR_multiple_windows_QMARK_);
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.events.handle.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show","modal/show",-748944018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-index-multiple-windows-warning","re-index-multiple-windows-warning",-1586754166)], 0))], null)], null)], null));
} else {
return frontend.handler.events.handle.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show","modal/show",-748944018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(700)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-index-discard-unsaved-changes-warning","re-index-discard-unsaved-changes-warning",2059145826)], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),"on",new cljs.core.Keyword(null,"large?","large?",1460879088),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_modal_BANG_();

return frontend.handler.repo.re_index_BANG_(frontend.handler.web.nfs.rebuild_index_BANG_,frontend.handler.page.create_today_journal_BANG_);
})], 0))], null)], null));
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","encryption-setup-dialog","modal/encryption-setup-dialog",-1390123497),(function (p__61130){
var vec__61131 = p__61130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61131,(0),null);
var repo_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61131,(1),null);
var close_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61131,(2),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.encryption.encryption_setup_dialog(repo_url,close_fn));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","encryption-input-secret-dialog","modal/encryption-input-secret-dialog",1202500574),(function (p__61134){
var vec__61135 = p__61134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61135,(0),null);
var repo_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61135,(1),null);
var db_encrypted_secret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61135,(2),null);
var close_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61135,(3),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.encryption.encryption_input_secret_dialog(repo_url,db_encrypted_secret,close_fn));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("journal","insert-template","journal/insert-template",-1273735332),(function (p__61138){
var vec__61139 = p__61138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61139,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61139,(1),null);
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var temp__5720__auto__ = (function (){var G__61142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__61142) : frontend.db.pull.call(null,G__61142));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
if(cljs.core.truth_((function (){var G__61143 = frontend.state.get_current_repo();
var G__61144 = page_name__$1;
return (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(G__61143,G__61144) : frontend.db.page_empty_QMARK_.call(null,G__61143,G__61144));
})())){
var temp__5720__auto____$1 = frontend.state.get_default_journal_template();
if(cljs.core.truth_(temp__5720__auto____$1)){
var template = temp__5720__auto____$1;
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(null,template,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),page], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
frontend.handler.events.run_BANG_ = (function frontend$handler$events$run_BANG_(){
var chan = frontend.state.get_events_chan();
var c__27595__auto___61356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_61186){
var state_val_61187 = (state_61186[(1)]);
if((state_val_61187 === (1))){
var state_61186__$1 = state_61186;
var statearr_61190_61361 = state_61186__$1;
(statearr_61190_61361[(2)] = null);

(statearr_61190_61361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61187 === (2))){
var state_61186__$1 = state_61186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61186__$1,(4),chan);
} else {
if((state_val_61187 === (3))){
var inst_61174 = (state_61186[(2)]);
var state_61186__$1 = state_61186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61186__$1,inst_61174);
} else {
if((state_val_61187 === (4))){
var inst_61147 = (state_61186[(2)]);
var state_61186__$1 = (function (){var statearr_61192 = state_61186;
(statearr_61192[(7)] = inst_61147);

return statearr_61192;
})();
var statearr_61194_61364 = state_61186__$1;
(statearr_61194_61364[(2)] = null);

(statearr_61194_61364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61187 === (5))){
var inst_61147 = (state_61186[(7)]);
var _ = (function (){var statearr_61201 = state_61186;
(statearr_61201[(4)] = cljs.core.cons((8),(state_61186[(4)])));

return statearr_61201;
})();
var inst_61167 = frontend.handler.events.handle.cljs$core$IFn$_invoke$arity$1(inst_61147);
var ___$1 = (function (){var statearr_61203 = state_61186;
(statearr_61203[(4)] = cljs.core.rest((state_61186[(4)])));

return statearr_61203;
})();
var state_61186__$1 = state_61186;
var statearr_61206_61368 = state_61186__$1;
(statearr_61206_61368[(2)] = inst_61167);

(statearr_61206_61368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61187 === (6))){
var inst_61171 = (state_61186[(2)]);
var state_61186__$1 = (function (){var statearr_61208 = state_61186;
(statearr_61208[(8)] = inst_61171);

return statearr_61208;
})();
var statearr_61209_61370 = state_61186__$1;
(statearr_61209_61370[(2)] = null);

(statearr_61209_61370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61187 === (7))){
var inst_61147 = (state_61186[(7)]);
var inst_61148 = (state_61186[(2)]);
var inst_61151 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("handle-system-events","failed","handle-system-events/failed",-2079184624));
var inst_61152 = cljs.core.clj__GT_js(inst_61147);
var inst_61153 = console.error(inst_61151,inst_61152,"\n",inst_61148);
var inst_61154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61155 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_61157 = [new cljs.core.Keyword("handle-system-events","failed","handle-system-events/failed",-2079184624),inst_61147,inst_61148];
var inst_61158 = cljs.core.PersistentHashMap.fromArrays(inst_61155,inst_61157);
var inst_61159 = [new cljs.core.Keyword(null,"instrument","instrument",-960698844),inst_61158];
var inst_61160 = (new cljs.core.PersistentVector(null,2,(5),inst_61154,inst_61159,null));
var inst_61161 = frontend.state.pub_event_BANG_(inst_61160);
var state_61186__$1 = (function (){var statearr_61211 = state_61186;
(statearr_61211[(9)] = inst_61153);

return statearr_61211;
})();
var statearr_61212_61375 = state_61186__$1;
(statearr_61212_61375[(2)] = inst_61161);

(statearr_61212_61375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61187 === (8))){
var _ = (function (){var statearr_61215 = state_61186;
(statearr_61215[(4)] = cljs.core.rest((state_61186[(4)])));

return statearr_61215;
})();
var state_61186__$1 = state_61186;
var ex61207 = (state_61186__$1[(2)]);
var statearr_61216_61376 = state_61186__$1;
(statearr_61216_61376[(5)] = ex61207);


if((ex61207 instanceof Error)){
var statearr_61219_61377 = state_61186__$1;
(statearr_61219_61377[(1)] = (7));

(statearr_61219_61377[(5)] = null);

} else {
throw ex61207;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$handler$events$run_BANG__$_state_machine__27573__auto__ = null;
var frontend$handler$events$run_BANG__$_state_machine__27573__auto____0 = (function (){
var statearr_61226 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61226[(0)] = frontend$handler$events$run_BANG__$_state_machine__27573__auto__);

(statearr_61226[(1)] = (1));

return statearr_61226;
});
var frontend$handler$events$run_BANG__$_state_machine__27573__auto____1 = (function (state_61186){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_61186);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e61227){var ex__27576__auto__ = e61227;
var statearr_61228_61390 = state_61186;
(statearr_61228_61390[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_61186[(4)]))){
var statearr_61229_61395 = state_61186;
(statearr_61229_61395[(1)] = cljs.core.first((state_61186[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61396 = state_61186;
state_61186 = G__61396;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$events$run_BANG__$_state_machine__27573__auto__ = function(state_61186){
switch(arguments.length){
case 0:
return frontend$handler$events$run_BANG__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$events$run_BANG__$_state_machine__27573__auto____1.call(this,state_61186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$events$run_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$events$run_BANG__$_state_machine__27573__auto____0;
frontend$handler$events$run_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$events$run_BANG__$_state_machine__27573__auto____1;
return frontend$handler$events$run_BANG__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_61231 = f__27596__auto__();
(statearr_61231[(6)] = c__27595__auto___61356);

return statearr_61231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return chan;
});

//# sourceMappingURL=frontend.handler.events.js.map
