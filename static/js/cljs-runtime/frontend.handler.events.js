goog.provide('frontend.handler.events');
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.events !== 'undefined') && (typeof frontend.handler.events.handle !== 'undefined')){
} else {
frontend.handler.events.handle = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__70791 = cljs.core.get_global_hierarchy;
return (fexpr__70791.cljs$core$IFn$_invoke$arity$0 ? fexpr__70791.cljs$core$IFn$_invoke$arity$0() : fexpr__70791.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.handler.events","handle"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","added","graph/added",2021754774),(function (p__70792){
var vec__70793 = p__70792;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70793,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70793,(1),null);
var map__70796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70793,(2),null);
var map__70796__$1 = cljs.core.__destructure_map(map__70796);
var empty_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70796__$1,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639));
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42616__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.persist_var.load_vars(),(function (___42615__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.sync_stop(),(function (___42615__auto____$1){
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

var temp__5720__auto___71121 = frontend.config.get_repo_dir(graph);
if(cljs.core.truth_(temp__5720__auto___71121)){
var dir_name_71122 = temp__5720__auto___71121;
frontend.fs.watch_dir_BANG_(dir_name_71122);
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42616__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42616__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(current_repo,frontend.handler.events.persist_db_noti_m),(function (___42615__auto__){
return promesa.protocols._promise(frontend.handler.repo.broadcast_persist_db_BANG_(graph));
}));
})):null),(function (___42615__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$1(graph),(function (___42615__auto____$1){
return promesa.protocols._promise(frontend.handler.events.graph_switch(graph));
}));
}));
}));
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","switch","graph/switch",178853840),(function (p__70809){
var vec__70810 = p__70809;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70810,(0),null);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70810,(1),null);
if(frontend.modules.outliner.file.writes_finished_QMARK_()){
return frontend.handler.events.graph_switch_on_persisted(graph);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Please wait seconds until all changes are saved for the current graph.",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),(function (p__70813){
var vec__70814 = p__70813;
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70814,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70814,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),(function (current_repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = repo;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","migrated","graph/migrated",1907299703),(function (p__70817){
var vec__70818 = p__70817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70818,(0),null);
var _repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70818,(1),null);
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
if(((cljs.core.not(frontend.util.electron_QMARK_())) && (cljs.core.not(frontend.mobile.util.is_native_platform_QMARK_())))){
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
return daiquiri.core.create_element("div",{'className':"p-4"},[daiquiri.core.create_element("div",{'className':"font-bold"},["Properties settings for this query:"]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$handler$events$iter__70826(s__70827){
return (new cljs.core.LazySeq(null,(function (){
var s__70827__$1 = s__70827;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70827__$1);
if(temp__5720__auto__){
var s__70827__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70827__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70827__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70829 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70828 = (0);
while(true){
if((i__70828 < size__4651__auto__)){
var property = cljs.core._nth(c__4650__auto__,i__70828);
cljs.core.chunk_append(b__70829,(function (){var property_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_properties,property);
var shown_QMARK_ = (((property_value == null))?cljs.core.contains_QMARK_(shown_properties,property):property_value);
return daiquiri.core.create_element("div",{'className':"flex flex-row m-2 justify-between align-items"},[daiquiri.core.create_element("div",null,[cljs.core.name(property)]),(function (){var attrs70842 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(shown_QMARK_,((function (i__70828,property_value,shown_QMARK_,property,c__4650__auto__,size__4651__auto__,b__70829,s__70827__$2,temp__5720__auto__,query_properties){
return (function (){
var value = cljs.core.not(shown_QMARK_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.events._STAR_query_properties,cljs.core.assoc,property,value);

return frontend.handler.editor.set_block_query_properties_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),all_properties,property,value);
});})(i__70828,property_value,shown_QMARK_,property,c__4650__auto__,size__4651__auto__,b__70829,s__70827__$2,temp__5720__auto__,query_properties))
,true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs70842))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1"], null)], null),attrs70842], 0))):{'className':"mt-1"}),((cljs.core.map_QMARK_(attrs70842))?null:[daiquiri.interpreter.interpret(attrs70842)]));
})()]);
})());

var G__71124 = (i__70828 + (1));
i__70828 = G__71124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70829),frontend$handler$events$iter__70826(cljs.core.chunk_rest(s__70827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70829),null);
}
} else {
var property = cljs.core.first(s__70827__$2);
return cljs.core.cons((function (){var property_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_properties,property);
var shown_QMARK_ = (((property_value == null))?cljs.core.contains_QMARK_(shown_properties,property):property_value);
return daiquiri.core.create_element("div",{'className':"flex flex-row m-2 justify-between align-items"},[daiquiri.core.create_element("div",null,[cljs.core.name(property)]),(function (){var attrs70842 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(shown_QMARK_,((function (property_value,shown_QMARK_,property,s__70827__$2,temp__5720__auto__,query_properties){
return (function (){
var value = cljs.core.not(shown_QMARK_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.events._STAR_query_properties,cljs.core.assoc,property,value);

return frontend.handler.editor.set_block_query_properties_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),all_properties,property,value);
});})(property_value,shown_QMARK_,property,s__70827__$2,temp__5720__auto__,query_properties))
,true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs70842))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1"], null)], null),attrs70842], 0))):{'className':"mt-1"}),((cljs.core.map_QMARK_(attrs70842))?null:[daiquiri.interpreter.interpret(attrs70842)]));
})()]);
})(),frontend$handler$events$iter__70826(cljs.core.rest(s__70827__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(all_properties);
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
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),(function (p__70849){
var vec__70850 = p__70849;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70850,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70850,(1),null);
var all_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70850,(2),null);
var block_properties = (function (){var G__70853 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null));
if((G__70853 == null)){
return null;
} else {
return frontend.handler.common.safe_read_string(G__70853,"Parsing query properties failed");
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
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","show","modal/show",-748944018),(function (p__70857){
var vec__70858 = p__70857;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70858,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70858,(1),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.handler.events.modal_output(content);
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","set-git-username-and-email","modal/set-git-username-and-email",-1189789991),(function (p__70862){
var vec__70863 = p__70862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70863,(0),null);
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70863,(1),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.git.set_git_username_and_email);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("page","title-property-changed","page/title-property-changed",-1938781817),(function (p__70866){
var vec__70867 = p__70866;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70867,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70867,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70867,(2),null);
return frontend.handler.page.rename_BANG_(old_title,new_title);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("page","create","page/create",-1304816391),(function (p__70871){
var vec__70872 = p__70871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70872,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70872,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70872,(2),null);
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,opts);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("page","create-today-journal","page/create-today-journal",-248526088),(function (p__70875){
var vec__70876 = p__70875;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70876,(0),null);
var _repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70876,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.create_today_journal_BANG_(),(function (___$1){
return promesa.protocols._promise(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0());
}));
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file","not-matched-from-disk","file/not-matched-from-disk",1915939272),(function (p__70888){
var vec__70890 = p__70888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70890,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70890,(1),null);
var disk_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70890,(2),null);
var db_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70890,(3),null);
frontend.state.clear_edit_BANG_();

var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
if(cljs.core.truth_((function (){var and__4251__auto__ = disk_content;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = db_content;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.trim_safe(disk_content),frontend.util.trim_safe(db_content));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
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
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","display-file-version","modal/display-file-version",1594347634),(function (p__70893){
var vec__70895 = p__70893;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70895,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70895,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70895,(2),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70895,(3),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(content)?frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(content):null),(function (content__$1){
return promesa.protocols._promise(frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.git.file_specific_version(path,hash,content__$1);
})));
}));
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","ready","graph/ready",1121782733),(function (p__70929){
var vec__70930 = p__70929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70930,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70930,(1),null);
frontend.handler.search.rebuild_indices_when_stale_BANG_.cljs$core$IFn$_invoke$arity$1(repo);

return frontend.handler.repo.graph_ready_BANG_(repo);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("notification","show","notification/show",1864741804),(function (p__70934){
var vec__70935 = p__70934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70935,(0),null);
var map__70938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70935,(1),null);
var map__70938__$1 = cljs.core.__destructure_map(map__70938);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70938__$1,new cljs.core.Keyword(null,"content","content",15833224));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70938__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var clear_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70938__$1,new cljs.core.Keyword(null,"clear?","clear?",1363344639));
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
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),(function (p__70941){
var vec__70942 = p__70941;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70942,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70942,(1),null);
var nav_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70942,(2),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70942,(3),null);
if(cljs.core.truth_(pid)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),pid);

frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","navs-settings?","plugin/navs-settings?",-615901808),(!(nav_QMARK_ === false)));

return frontend.components.plugins.open_focused_settings_modal_BANG_(title);
} else {
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1("ls-focused-settings-modal");
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),(function (p__70946){
var vec__70947 = p__70946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70947,(0),null);
var agent_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70947,(1),null);
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (___$1){
return frontend.components.plugins.user_proxy_settings_panel(agent_opts);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"https-proxy-panel","https-proxy-panel",-1589308406),new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"redirect-to-home","redirect-to-home",236144576),(function (_){
return frontend.handler.page.create_today_journal_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(function (p__70950){
var vec__70955 = p__70950;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70955,(0),null);
var map__70958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70955,(1),null);
var map__70958__$1 = cljs.core.__destructure_map(map__70958);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70958__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70958__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return frontend.modules.instrumentation.posthog.capture(type,payload);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"exec-plugin-cmd","exec-plugin-cmd",1049730302),(function (p__70960){
var vec__70961 = p__70960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70961,(0),null);
var map__70964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70961,(1),null);
var map__70964__$1 = cljs.core.__destructure_map(map__70964);
var pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70964__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var cmd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70964__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70964__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cmd,action);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"shortcut-handler-refreshed","shortcut-handler-refreshed",1293579011),(function (p__70965){
var vec__70967 = p__70965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70967,(0),null);
if(cljs.core.truth_(cljs.core.deref(frontend.modules.shortcut.core._STAR_inited_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(frontend.modules.shortcut.core._STAR_inited_QMARK_,true);

return frontend.modules.shortcut.core.consume_pending_shortcuts_BANG_();
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mobile","keyboard-will-show","mobile/keyboard-will-show",2010922836),(function (p__70973){
var vec__70974 = p__70973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70974,(0),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.get_left_sidebar_open_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.state.editing_QMARK_();
} else {
return and__4251__auto__;
}
})())){
return frontend.state.set_left_sidebar_open_BANG_(false);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mobile","keyboard-did-show","mobile/keyboard-did-show",484981963),(function (p__70977){
var vec__70978 = p__70977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70978,(0),null);
var temp__5720__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5720__auto__)){
var input = temp__5720__auto__;
return frontend.util.make_el_cursor_position_into_center_viewport(input);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("plugin","consume-updates","plugin/consume-updates",-331798674),(function (p__70988){
var vec__70989 = p__70988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70989,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70989,(1),null);
var pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70989,(2),null);
var updated_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70989,(3),null);
var downloading_QMARK_ = new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var temp__5720__auto___71128 = (function (){var and__4251__auto__ = cljs.core.not(downloading_QMARK_);
if(and__4251__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),id], null));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto___71128)){
var coming_71129 = temp__5720__auto___71128;
var error_code_71130 = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(coming_71129);
var error_code_71131__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error_code_71130,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"no-new-version","no-new-version",-944956961))))?null:error_code_71130);
if(cljs.core.truth_((function (){var or__4253__auto__ = pending_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not(error_code_71131__$1);
}
})())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["[Checked]<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(coming_71129)),"> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_code_71131__$1)].join(''),(cljs.core.truth_(error_code_71131__$1)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"success","success",1890645906)));
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = updated_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return downloading_QMARK_;
} else {
return and__4251__auto__;
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
if(cljs.core.truth_((function (){var and__4251__auto__ = pending_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(frontend.state.all_available_coming_updates());
} else {
return and__4251__auto__;
}
})())){
return frontend.components.plugins.open_waiting_updates_modal_BANG_();
} else {
return null;
}
}
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("plugin","hook-db-tx","plugin/hook-db-tx",1065547419),(function (p__70997){
var vec__70998 = p__70997;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70998,(0),null);
var map__71001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70998,(1),null);
var map__71001__$1 = cljs.core.__destructure_map(map__71001);
var payload = map__71001__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71001__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71001__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71001__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var temp__5720__auto__ = (function (){var and__4251__auto__ = cljs.core.seq(blocks);
if(and__4251__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70996_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__70996_SHARP_);
}),tx_data),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tx_meta,new cljs.core.Keyword(null,"editor-cursor","editor-cursor",-1794173800))], null)], 0));
} else {
return and__4251__auto__;
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
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("backup","broken-config","backup/broken-config",1040905879),(function (p__71011){
var vec__71012 = p__71011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71012,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71012,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71012,(2),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
return content;
} else {
return and__4251__auto__;
}
})())){
var path = frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$0();
var broken_path = clojure.string.replace(path,"/config.edn","/broken-config.edn");
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file-watcher","changed","file-watcher/changed",-365229680),(function (p__71018){
var vec__71019 = p__71018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71019,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71019,(1),null);
var type = event.event;
var payload = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.Keyword(null,"path","path",-188191168),decodeURI);
frontend.fs.watcher_handler.handle_changed_BANG_(type,payload);

return frontend.fs.sync.file_watch_handler(type,payload);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rebuild-slash-commands-list","rebuild-slash-commands-list",-639662306),(function (p__71022){
var vec__71026 = p__71022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71026,(0),null);
return (frontend.handler.page.rebuild_slash_commands_list_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.page.rebuild_slash_commands_list_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.page.rebuild_slash_commands_list_BANG_.call(null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","ask-for-re-index","graph/ask-for-re-index",2038098533),(function (p__71030){
var vec__71031 = p__71030;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71031,(0),null);
var _STAR_multiple_windows_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71031,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.atom_QMARK_(_STAR_multiple_windows_QMARK_);
if(and__4251__auto__){
return cljs.core.deref(_STAR_multiple_windows_QMARK_);
} else {
return and__4251__auto__;
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
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","encryption-setup-dialog","modal/encryption-setup-dialog",-1390123497),(function (p__71036){
var vec__71037 = p__71036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71037,(0),null);
var repo_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71037,(1),null);
var close_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71037,(2),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.encryption.encryption_setup_dialog(repo_url,close_fn));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","encryption-input-secret-dialog","modal/encryption-input-secret-dialog",1202500574),(function (p__71040){
var vec__71041 = p__71040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71041,(0),null);
var repo_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71041,(1),null);
var db_encrypted_secret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71041,(2),null);
var close_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71041,(3),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.encryption.encryption_input_secret_dialog(repo_url,db_encrypted_secret,close_fn));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("journal","insert-template","journal/insert-template",-1273735332),(function (p__71045){
var vec__71046 = p__71045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71046,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71046,(1),null);
var page_name__$1 = frontend.util.page_name_sanity_lc(page_name);
var temp__5720__auto__ = (function (){var G__71053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__71053) : frontend.db.pull.call(null,G__71053));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
if(cljs.core.truth_((function (){var G__71054 = frontend.state.get_current_repo();
var G__71055 = page_name__$1;
return (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(G__71054,G__71055) : frontend.db.page_empty_QMARK_.call(null,G__71054,G__71055));
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
var c__41861__auto___71133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_71085){
var state_val_71086 = (state_71085[(1)]);
if((state_val_71086 === (1))){
var state_71085__$1 = state_71085;
var statearr_71087_71134 = state_71085__$1;
(statearr_71087_71134[(2)] = null);

(statearr_71087_71134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71086 === (2))){
var state_71085__$1 = state_71085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71085__$1,(4),chan);
} else {
if((state_val_71086 === (3))){
var inst_71083 = (state_71085[(2)]);
var state_71085__$1 = state_71085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71085__$1,inst_71083);
} else {
if((state_val_71086 === (4))){
var inst_71060 = (state_71085[(2)]);
var state_71085__$1 = (function (){var statearr_71088 = state_71085;
(statearr_71088[(7)] = inst_71060);

return statearr_71088;
})();
var statearr_71089_71135 = state_71085__$1;
(statearr_71089_71135[(2)] = null);

(statearr_71089_71135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71086 === (5))){
var inst_71060 = (state_71085[(7)]);
var _ = (function (){var statearr_71090 = state_71085;
(statearr_71090[(4)] = cljs.core.cons((8),(state_71085[(4)])));

return statearr_71090;
})();
var inst_71077 = frontend.handler.events.handle.cljs$core$IFn$_invoke$arity$1(inst_71060);
var ___$1 = (function (){var statearr_71091 = state_71085;
(statearr_71091[(4)] = cljs.core.rest((state_71085[(4)])));

return statearr_71091;
})();
var state_71085__$1 = state_71085;
var statearr_71092_71136 = state_71085__$1;
(statearr_71092_71136[(2)] = inst_71077);

(statearr_71092_71136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71086 === (6))){
var inst_71080 = (state_71085[(2)]);
var state_71085__$1 = (function (){var statearr_71094 = state_71085;
(statearr_71094[(8)] = inst_71080);

return statearr_71094;
})();
var statearr_71095_71137 = state_71085__$1;
(statearr_71095_71137[(2)] = null);

(statearr_71095_71137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71086 === (7))){
var inst_71060 = (state_71085[(7)]);
var inst_71061 = (state_71085[(2)]);
var inst_71062 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("handle-system-events","failed","handle-system-events/failed",-2079184624));
var inst_71063 = cljs.core.clj__GT_js(inst_71060);
var inst_71064 = console.error(inst_71062,inst_71063,"\n",inst_71061);
var inst_71065 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71066 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_71067 = [new cljs.core.Keyword("handle-system-events","failed","handle-system-events/failed",-2079184624),inst_71060,inst_71061];
var inst_71068 = cljs.core.PersistentHashMap.fromArrays(inst_71066,inst_71067);
var inst_71069 = [new cljs.core.Keyword(null,"instrument","instrument",-960698844),inst_71068];
var inst_71070 = (new cljs.core.PersistentVector(null,2,(5),inst_71065,inst_71069,null));
var inst_71071 = frontend.state.pub_event_BANG_(inst_71070);
var state_71085__$1 = (function (){var statearr_71096 = state_71085;
(statearr_71096[(9)] = inst_71064);

return statearr_71096;
})();
var statearr_71097_71138 = state_71085__$1;
(statearr_71097_71138[(2)] = inst_71071);

(statearr_71097_71138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71086 === (8))){
var _ = (function (){var statearr_71098 = state_71085;
(statearr_71098[(4)] = cljs.core.rest((state_71085[(4)])));

return statearr_71098;
})();
var state_71085__$1 = state_71085;
var ex71093 = (state_71085__$1[(2)]);
var statearr_71099_71139 = state_71085__$1;
(statearr_71099_71139[(5)] = ex71093);


if((ex71093 instanceof Error)){
var statearr_71100_71140 = state_71085__$1;
(statearr_71100_71140[(1)] = (7));

(statearr_71100_71140[(5)] = null);

} else {
throw ex71093;

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
var frontend$handler$events$run_BANG__$_state_machine__41839__auto__ = null;
var frontend$handler$events$run_BANG__$_state_machine__41839__auto____0 = (function (){
var statearr_71107 = [null,null,null,null,null,null,null,null,null,null];
(statearr_71107[(0)] = frontend$handler$events$run_BANG__$_state_machine__41839__auto__);

(statearr_71107[(1)] = (1));

return statearr_71107;
});
var frontend$handler$events$run_BANG__$_state_machine__41839__auto____1 = (function (state_71085){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_71085);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e71108){var ex__41842__auto__ = e71108;
var statearr_71109_71141 = state_71085;
(statearr_71109_71141[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_71085[(4)]))){
var statearr_71111_71142 = state_71085;
(statearr_71111_71142[(1)] = cljs.core.first((state_71085[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71143 = state_71085;
state_71085 = G__71143;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$events$run_BANG__$_state_machine__41839__auto__ = function(state_71085){
switch(arguments.length){
case 0:
return frontend$handler$events$run_BANG__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$events$run_BANG__$_state_machine__41839__auto____1.call(this,state_71085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$events$run_BANG__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$events$run_BANG__$_state_machine__41839__auto____0;
frontend$handler$events$run_BANG__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$events$run_BANG__$_state_machine__41839__auto____1;
return frontend$handler$events$run_BANG__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_71112 = f__41862__auto__();
(statearr_71112[(6)] = c__41861__auto___71133);

return statearr_71112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));


return chan;
});

//# sourceMappingURL=frontend.handler.events.js.map
