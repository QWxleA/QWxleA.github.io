goog.provide('frontend.db');
frontend.db.conns = frontend.db.conn.conns;

frontend.db.get_repo_path = frontend.db.conn.get_repo_path;

frontend.db.get_repo_name = frontend.db.conn.get_repo_name;

frontend.db.get_short_repo_name = frontend.db.conn.get_short_repo_name;

frontend.db.datascript_db = frontend.db.conn.datascript_db;

frontend.db.get_db = frontend.db.conn.get_db;

frontend.db.me_tx = frontend.db.conn.me_tx;

frontend.db.remove_conn_BANG_ = frontend.db.conn.remove_conn_BANG_;

frontend.db.date__GT_int = frontend.db.utils.date__GT_int;

frontend.db.db__GT_json = frontend.db.utils.db__GT_json;

frontend.db.db__GT_edn_str = frontend.db.utils.db__GT_edn_str;

frontend.db.db__GT_string = frontend.db.utils.db__GT_string;

frontend.db.get_max_tx_id = frontend.db.utils.get_max_tx_id;

frontend.db.get_tx_id = frontend.db.utils.get_tx_id;

frontend.db.group_by_page = frontend.db.utils.group_by_page;

frontend.db.seq_flatten = frontend.db.utils.seq_flatten;

frontend.db.string__GT_db = frontend.db.utils.string__GT_db;

frontend.db.entity = frontend.db.utils.entity;

frontend.db.pull = frontend.db.utils.pull;

frontend.db.pull_many = frontend.db.utils.pull_many;

frontend.db.transact_BANG_ = frontend.db.utils.transact_BANG_;

frontend.db.get_key_value = frontend.db.utils.get_key_value;

frontend.db.blocks_count = frontend.db.model.blocks_count;

frontend.db.blocks_count_cache = frontend.db.model.blocks_count_cache;

frontend.db.clean_export_BANG_ = frontend.db.model.clean_export_BANG_;

frontend.db.delete_blocks = frontend.db.model.delete_blocks;

frontend.db.get_pre_block = frontend.db.model.get_pre_block;

frontend.db.delete_file_BANG_ = frontend.db.model.delete_file_BANG_;

frontend.db.delete_file_blocks_BANG_ = frontend.db.model.delete_file_blocks_BANG_;

frontend.db.delete_page_blocks = frontend.db.model.delete_page_blocks;

frontend.db.delete_file_pages_BANG_ = frontend.db.model.delete_file_pages_BANG_;

frontend.db.delete_file_tx = frontend.db.model.delete_file_tx;

frontend.db.delete_files = frontend.db.model.delete_files;

frontend.db.delete_pages_by_files = frontend.db.model.delete_pages_by_files;

frontend.db.filter_only_public_pages_and_blocks = frontend.db.model.filter_only_public_pages_and_blocks;

frontend.db.get_all_block_contents = frontend.db.model.get_all_block_contents;

frontend.db.get_all_tagged_pages = frontend.db.model.get_all_tagged_pages;

frontend.db.get_all_templates = frontend.db.model.get_all_templates;

frontend.db.get_block_and_children = frontend.db.model.get_block_and_children;

frontend.db.get_block_by_uuid = frontend.db.model.get_block_by_uuid;

frontend.db.get_block_children = frontend.db.model.get_block_children;

frontend.db.sort_by_left = frontend.db.model.sort_by_left;

frontend.db.get_block_parent = frontend.db.model.get_block_parent;

frontend.db.get_block_parents = frontend.db.model.get_block_parents;

frontend.db.parents_collapsed_QMARK_ = frontend.db.model.parents_collapsed_QMARK_;

frontend.db.get_block_referenced_blocks = frontend.db.model.get_block_referenced_blocks;

frontend.db.get_block_children_ids = frontend.db.model.get_block_children_ids;

frontend.db.get_block_immediate_children = frontend.db.model.get_block_immediate_children;

frontend.db.get_block_page = frontend.db.model.get_block_page;

frontend.db.get_blocks_contents = frontend.db.model.get_blocks_contents;

frontend.db.get_custom_css = frontend.db.model.get_custom_css;

frontend.db.get_date_scheduled_or_deadlines = frontend.db.model.get_date_scheduled_or_deadlines;

frontend.db.get_db_type = frontend.db.model.get_db_type;

frontend.db.get_file_blocks = frontend.db.model.get_file_blocks;

frontend.db.get_file_contents = frontend.db.model.get_file_contents;

frontend.db.get_file_last_modified_at = frontend.db.model.get_file_last_modified_at;

frontend.db.get_file = frontend.db.model.get_file;

frontend.db.get_file_page = frontend.db.model.get_file_page;

frontend.db.get_file_page_id = frontend.db.model.get_file_page_id;

frontend.db.file_exists_QMARK_ = frontend.db.model.file_exists_QMARK_;

frontend.db.get_file_pages = frontend.db.model.get_file_pages;

frontend.db.get_files = frontend.db.model.get_files;

frontend.db.get_files_blocks = frontend.db.model.get_files_blocks;

frontend.db.get_files_full = frontend.db.model.get_files_full;

frontend.db.get_journals_length = frontend.db.model.get_journals_length;

frontend.db.get_latest_journals = frontend.db.model.get_latest_journals;

frontend.db.get_matched_blocks = frontend.db.model.get_matched_blocks;

frontend.db.get_page = frontend.db.model.get_page;

frontend.db.get_page_alias = frontend.db.model.get_page_alias;

frontend.db.get_page_alias_names = frontend.db.model.get_page_alias_names;

frontend.db.get_paginated_blocks = frontend.db.model.get_paginated_blocks;

frontend.db.get_page_linked_refs_refed_pages = frontend.db.model.get_page_linked_refs_refed_pages;

frontend.db.get_page_blocks_count = frontend.db.model.get_page_blocks_count;

frontend.db.get_page_blocks_no_cache = frontend.db.model.get_page_blocks_no_cache;

frontend.db.get_page_file = frontend.db.model.get_page_file;

frontend.db.get_page_format = frontend.db.model.get_page_format;

frontend.db.get_page_properties = frontend.db.model.get_page_properties;

frontend.db.get_page_referenced_blocks = frontend.db.model.get_page_referenced_blocks;

frontend.db.get_page_referenced_pages = frontend.db.model.get_page_referenced_pages;

frontend.db.get_page_unlinked_references = frontend.db.model.get_page_unlinked_references;

frontend.db.get_page_referenced_blocks_no_cache = frontend.db.model.get_page_referenced_blocks_no_cache;

frontend.db.get_all_pages = frontend.db.model.get_all_pages;

frontend.db.get_pages = frontend.db.model.get_pages;

frontend.db.get_pages_relation = frontend.db.model.get_pages_relation;

frontend.db.get_pages_that_mentioned_page = frontend.db.model.get_pages_that_mentioned_page;

frontend.db.get_public_pages = frontend.db.model.get_public_pages;

frontend.db.get_tag_pages = frontend.db.model.get_tag_pages;

frontend.db.journal_page_QMARK_ = frontend.db.model.journal_page_QMARK_;

frontend.db.page_alias_set = frontend.db.model.page_alias_set;

frontend.db.pull_block = frontend.db.model.pull_block;

frontend.db.set_file_last_modified_at_BANG_ = frontend.db.model.set_file_last_modified_at_BANG_;

frontend.db.transact_files_db_BANG_ = frontend.db.model.transact_files_db_BANG_;

frontend.db.page_empty_QMARK_ = frontend.db.model.page_empty_QMARK_;

frontend.db.page_exists_QMARK_ = frontend.db.model.page_exists_QMARK_;

frontend.db.page_empty_or_dummy_QMARK_ = frontend.db.model.page_empty_or_dummy_QMARK_;

frontend.db.get_alias_source_page = frontend.db.model.get_alias_source_page;

frontend.db.set_file_content_BANG_ = frontend.db.model.set_file_content_BANG_;

frontend.db.has_children_QMARK_ = frontend.db.model.has_children_QMARK_;

frontend.db.get_namespace_pages = frontend.db.model.get_namespace_pages;

frontend.db.get_all_namespace_relation = frontend.db.model.get_all_namespace_relation;

frontend.db.get_pages_by_name_partition = frontend.db.model.get_pages_by_name_partition;

frontend.db.get_current_page = frontend.db.react.get_current_page;

frontend.db.set_key_value = frontend.db.react.set_key_value;

frontend.db.remove_key_BANG_ = frontend.db.react.remove_key_BANG_;

frontend.db.remove_q_BANG_ = frontend.db.react.remove_q_BANG_;

frontend.db.remove_query_component_BANG_ = frontend.db.react.remove_query_component_BANG_;

frontend.db.add_q_BANG_ = frontend.db.react.add_q_BANG_;

frontend.db.add_query_component_BANG_ = frontend.db.react.add_query_component_BANG_;

frontend.db.clear_query_state_BANG_ = frontend.db.react.clear_query_state_BANG_;

frontend.db.clear_query_state_without_refs_and_embeds_BANG_ = frontend.db.react.clear_query_state_without_refs_and_embeds_BANG_;

frontend.db.kv = frontend.db.react.kv;

frontend.db.q = frontend.db.react.q;

frontend.db.query_state = frontend.db.react.query_state;

frontend.db.query_components = frontend.db.react.query_components;

frontend.db.query_entity_in_component = frontend.db.react.query_entity_in_component;

frontend.db.remove_custom_query_BANG_ = frontend.db.react.remove_custom_query_BANG_;

frontend.db.set_new_result_BANG_ = frontend.db.react.set_new_result_BANG_;

frontend.db.sub_key_value = frontend.db.react.sub_key_value;

frontend.db.refresh_BANG_ = frontend.db.react.refresh_BANG_;

frontend.db.custom_query = frontend.db.query_custom.custom_query;

frontend.db.react_query = frontend.db.query_react.react_query;

frontend.db.custom_query_result_transform = frontend.db.query_react.custom_query_result_transform;

frontend.db.built_in_pages_names = frontend.db.default$.built_in_pages_names;

frontend.db.built_in_pages = frontend.db.default$.built_in_pages;
frontend.db.get_schema_version = (function frontend$db$get_schema_version(db){
var G__77287 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("schema","version","schema/version",1396190655),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null);
var G__77288 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__77287,G__77288) : datascript.core.q.call(null,G__77287,G__77288));
});
frontend.db.old_schema_QMARK_ = (function frontend$db$old_schema_QMARK_(db){
var v = frontend.db.get_schema_version(db);
if(cljs.core.integer_QMARK_(v)){
return (frontend.db_schema.version > v);
} else {
return true;
}
});
frontend.db.persist_BANG_ = (function frontend$db$persist_BANG_(repo){
var key = (frontend.db.datascript_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.datascript_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.datascript_db.call(null,repo));
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(db)){
var db_str = (cljs.core.truth_(db)?(frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1 ? frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1(db) : frontend.db.db__GT_string.call(null,db)):"");
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.persist.save_graph_BANG_(key,db_str),(function (_){
return promesa.protocols._promise(null);
}));
}));
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.persistent_jobs !== 'undefined')){
} else {
frontend.db.persistent_jobs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.db.clear_repo_persistent_job_BANG_ = (function frontend$db$clear_repo_persistent_job_BANG_(repo){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.db.persistent_jobs),repo);
if(cljs.core.truth_(temp__5720__auto__)){
var old_job = temp__5720__auto__;
return clearTimeout(old_job);
} else {
return null;
}
});
frontend.db.persist_if_idle_BANG_ = (function frontend$db$persist_if_idle_BANG_(repo){
frontend.db.clear_repo_persistent_job_BANG_(repo);

var job = setTimeout((function (){
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.input_idle_QMARK_(repo);
if(cljs.core.truth_(and__4251__auto__)){
return frontend.state.db_idle_QMARK_(repo);
} else {
return and__4251__auto__;
}
})())){
return frontend.db.persist_BANG_(repo);
} else {
return (frontend.db.persist_if_idle_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.persist_if_idle_BANG_.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.persist_if_idle_BANG_.call(null,repo));
}
}),(3000));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.persistent_jobs,cljs.core.assoc,repo,job);
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db._STAR_sync_search_indice_f !== 'undefined')){
} else {
frontend.db._STAR_sync_search_indice_f = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.db.repo_listen_to_tx_BANG_ = (function frontend$db$repo_listen_to_tx_BANG_(repo,conn){
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.Keyword(null,"persistence","persistence",-203044807),(function (tx_report){
frontend.db.react.refresh_BANG_(repo,tx_report);

if((((!(frontend.config.publishing_QMARK_))) && (cljs.core.not(new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)))))){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbsync?","dbsync?",931937939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)))){
} else {
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["graphHasOtherWindow",repo], 0)),(function (graph_has_other_window_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(graph_has_other_window_QMARK_)?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dbsync",repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var G__77289 = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
return (frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1 ? frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1(G__77289) : frontend.db.db__GT_string.call(null,G__77289));
})()], null)], 0)):null));
}));
}));
}
} else {
frontend.state.set_last_transact_time_BANG_(repo,frontend.util.time_ms());

frontend.db.persist_if_idle_BANG_(repo);
}

var data = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
var datoms = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (datom){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","content","block/content",-161885195),null,new cljs.core.Keyword("block","name","block/name",1619760316),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom));
}),data);
var temp__5720__auto__ = cljs.core.deref(frontend.db._STAR_sync_search_indice_f);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(datoms) : f.call(null,datoms));
} else {
return null;
}
} else {
return null;
}
}));
});
frontend.db.listen_and_persist_BANG_ = (function frontend$db$listen_and_persist_BANG_(repo){
var temp__5720__auto__ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$2(repo,false) : frontend.db.get_db.call(null,repo,false));
if(cljs.core.truth_(temp__5720__auto__)){
var conn = temp__5720__auto__;
return frontend.db.repo_listen_to_tx_BANG_(repo,conn);
} else {
return null;
}
});
frontend.db.start_db_conn_BANG_ = (function frontend$db$start_db_conn_BANG_(var_args){
var G__77291 = arguments.length;
switch (G__77291) {
case 2:
return frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (me__$1,repo){
return frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$3(me__$1,repo,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (me__$1,repo,option){
return frontend.db.conn.start_BANG_.cljs$core$IFn$_invoke$arity$3(me__$1,repo,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword(null,"listen-handler","listen-handler",-1690024921),frontend.db.listen_and_persist_BANG_));
}));

(frontend.db.start_db_conn_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Restore db from serialized db cache, and swap into the current db status
 */
frontend.db.restore_graph_BANG_ = (function frontend$db$restore_graph_BANG_(repo,me__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.db.datascript_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.datascript_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.datascript_db.call(null,repo)),(function (db_name){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(frontend.db_schema.schema),(function (db_conn){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.conns,cljs.core.assoc,db_name,db_conn),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.persist.get_serialized_graph(db_name),(function (stored){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(stored)?(function (){var stored_db = (function (){try{return (frontend.db.string__GT_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.string__GT_db.cljs$core$IFn$_invoke$arity$1(stored) : frontend.db.string__GT_db.call(null,stored));
}catch (e77292){if((e77292 instanceof Error)){
var _e = e77292;
console.warn("Invalid graph cache");

return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(frontend.db_schema.schema) : datascript.core.empty_db.call(null,frontend.db_schema.schema));
} else {
throw e77292;

}
}})();
var attached_db = datascript.core.db_with(stored_db,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(frontend.db.me_tx.cljs$core$IFn$_invoke$arity$2 ? frontend.db.me_tx.cljs$core$IFn$_invoke$arity$2(stored_db,me__$1) : frontend.db.me_tx.call(null,stored_db,me__$1))], null),frontend.db.default$.built_in_pages));
var db = ((frontend.db.old_schema_QMARK_(attached_db))?frontend.db.migrate.migrate(attached_db):attached_db);
return frontend.db.conn.reset_conn_BANG_(db_conn,db);
})():null),(function (___$1){
return promesa.protocols._promise(datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(db_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("schema","version","schema/version",1396190655),frontend.db_schema.version], null)], null)));
}));
}));
}));
}));
}));
}));
});
frontend.db.restore_BANG_ = (function frontend$db$restore_BANG_(p__77293,_old_db_schema,restore_config_handler){
var map__77294 = p__77293;
var map__77294__$1 = cljs.core.__destructure_map(map__77294);
var me__$1 = map__77294__$1;
var repos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77294__$1,new cljs.core.Keyword(null,"repos","repos",647483789));
var repo = (function (){var or__4253__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.first(repos));
}
})();
if(cljs.core.truth_(repo)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.restore_graph_BANG_(repo,me__$1),(function (_){
return promesa.protocols._promise((function (){
(restore_config_handler.cljs$core$IFn$_invoke$arity$1 ? restore_config_handler.cljs$core$IFn$_invoke$arity$1(repo) : restore_config_handler.call(null,repo));

return frontend.db.listen_and_persist_BANG_(repo);
})()
);
}));
}));
} else {
return null;
}
});
frontend.db.run_batch_txs_BANG_ = (function frontend$db$run_batch_txs_BANG_(){
var chan = frontend.state.get_db_batch_txs_chan();
var c__41861__auto___77340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_77303){
var state_val_77304 = (state_77303[(1)]);
if((state_val_77304 === (1))){
var state_77303__$1 = state_77303;
var statearr_77305_77344 = state_77303__$1;
(statearr_77305_77344[(2)] = null);

(statearr_77305_77344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77304 === (2))){
var state_77303__$1 = state_77303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77303__$1,(4),chan);
} else {
if((state_val_77304 === (3))){
var inst_77301 = (state_77303[(2)]);
var state_77303__$1 = state_77303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77303__$1,inst_77301);
} else {
if((state_val_77304 === (4))){
var inst_77297 = (state_77303[(2)]);
var inst_77298 = (inst_77297.cljs$core$IFn$_invoke$arity$0 ? inst_77297.cljs$core$IFn$_invoke$arity$0() : inst_77297.call(null));
var state_77303__$1 = (function (){var statearr_77306 = state_77303;
(statearr_77306[(7)] = inst_77298);

return statearr_77306;
})();
var statearr_77307_77380 = state_77303__$1;
(statearr_77307_77380[(2)] = null);

(statearr_77307_77380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto__ = null;
var frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto____0 = (function (){
var statearr_77308 = [null,null,null,null,null,null,null,null];
(statearr_77308[(0)] = frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto__);

(statearr_77308[(1)] = (1));

return statearr_77308;
});
var frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto____1 = (function (state_77303){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_77303);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e77309){var ex__41842__auto__ = e77309;
var statearr_77310_77385 = state_77303;
(statearr_77310_77385[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_77303[(4)]))){
var statearr_77311_77386 = state_77303;
(statearr_77311_77386[(1)] = cljs.core.first((state_77303[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77387 = state_77303;
state_77303 = G__77387;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto__ = function(state_77303){
switch(arguments.length){
case 0:
return frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto____1.call(this,state_77303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto____0;
frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto____1;
return frontend$db$run_batch_txs_BANG__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_77312 = f__41862__auto__();
(statearr_77312[(6)] = c__41861__auto___77340);

return statearr_77312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));


return chan;
});
frontend.db.new_block_id = (function frontend$db$new_block_id(){
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();
});

//# sourceMappingURL=frontend.db.js.map
