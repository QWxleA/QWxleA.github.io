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
var G__43569 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("schema","version","schema/version",1396190655),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null);
var G__43570 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__43569,G__43570) : datascript.core.q.call(null,G__43569,G__43570));
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
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
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.input_idle_QMARK_(repo);
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.db_idle_QMARK_(repo);
} else {
return and__5041__auto__;
}
})())){
return frontend.db.persist_BANG_(repo);
} else {
return (frontend.db.persist_if_idle_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.persist_if_idle_BANG_.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.persist_if_idle_BANG_.call(null,repo));
}
}),(3000));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.persistent_jobs,cljs.core.assoc,repo,job);
});
frontend.db._STAR_db_listener = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.db.repo_listen_to_tx_BANG_ = (function frontend$db$repo_listen_to_tx_BANG_(repo,conn){
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.Keyword(null,"persistence","persistence",-203044807),(function (tx_report){
frontend.db.react.refresh_BANG_(repo,tx_report);

if((((!(frontend.config.publishing_QMARK_))) && (cljs.core.not(new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)))))){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dbsync?","dbsync?",931937939).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report)))){
} else {
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["graphHasOtherWindow",repo], 0)),(function (graph_has_other_window_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(graph_has_other_window_QMARK_)?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dbsync",repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var G__43571 = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report);
return (frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1 ? frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1(G__43571) : frontend.db.db__GT_string.call(null,G__43571));
})()], null)], 0)):null));
}));
}));
}
} else {
frontend.state.set_last_transact_time_BANG_(repo,frontend.util.time_ms());

frontend.db.persist_if_idle_BANG_(repo);
}

var temp__5720__auto__ = cljs.core.deref(frontend.db._STAR_db_listener);
if(cljs.core.truth_(temp__5720__auto__)){
var db_listener = temp__5720__auto__;
return (db_listener.cljs$core$IFn$_invoke$arity$2 ? db_listener.cljs$core$IFn$_invoke$arity$2(repo,tx_report) : db_listener.call(null,repo,tx_report));
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
var G__43573 = arguments.length;
switch (G__43573) {
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.db.datascript_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.datascript_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.datascript_db.call(null,repo)),(function (db_name){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(frontend.db_schema.schema),(function (db_conn){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.conns,cljs.core.assoc,db_name,db_conn),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.persist.get_serialized_graph(db_name),(function (stored){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(stored)?(function (){var stored_db = (function (){try{return (frontend.db.string__GT_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.string__GT_db.cljs$core$IFn$_invoke$arity$1(stored) : frontend.db.string__GT_db.call(null,stored));
}catch (e43574){if((e43574 instanceof Error)){
var _e = e43574;
console.warn("Invalid graph cache");

return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(frontend.db_schema.schema) : datascript.core.empty_db.call(null,frontend.db_schema.schema));
} else {
throw e43574;

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
frontend.db.restore_BANG_ = (function frontend$db$restore_BANG_(p__43575,_old_db_schema,restore_config_handler){
var map__43576 = p__43575;
var map__43576__$1 = cljs.core.__destructure_map(map__43576);
var me__$1 = map__43576__$1;
var repos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43576__$1,new cljs.core.Keyword(null,"repos","repos",647483789));
var repo = (function (){var or__5043__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.first(repos));
}
})();
if(cljs.core.truth_(repo)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
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
var c__27595__auto___43596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_43585){
var state_val_43586 = (state_43585[(1)]);
if((state_val_43586 === (1))){
var state_43585__$1 = state_43585;
var statearr_43587_43597 = state_43585__$1;
(statearr_43587_43597[(2)] = null);

(statearr_43587_43597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43586 === (2))){
var state_43585__$1 = state_43585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43585__$1,(4),chan);
} else {
if((state_val_43586 === (3))){
var inst_43583 = (state_43585[(2)]);
var state_43585__$1 = state_43585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43585__$1,inst_43583);
} else {
if((state_val_43586 === (4))){
var inst_43579 = (state_43585[(2)]);
var inst_43580 = (inst_43579.cljs$core$IFn$_invoke$arity$0 ? inst_43579.cljs$core$IFn$_invoke$arity$0() : inst_43579.call(null));
var state_43585__$1 = (function (){var statearr_43588 = state_43585;
(statearr_43588[(7)] = inst_43580);

return statearr_43588;
})();
var statearr_43589_43598 = state_43585__$1;
(statearr_43589_43598[(2)] = null);

(statearr_43589_43598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto__ = null;
var frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto____0 = (function (){
var statearr_43590 = [null,null,null,null,null,null,null,null];
(statearr_43590[(0)] = frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto__);

(statearr_43590[(1)] = (1));

return statearr_43590;
});
var frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto____1 = (function (state_43585){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_43585);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e43591){var ex__27576__auto__ = e43591;
var statearr_43592_43599 = state_43585;
(statearr_43592_43599[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_43585[(4)]))){
var statearr_43593_43600 = state_43585;
(statearr_43593_43600[(1)] = cljs.core.first((state_43585[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43601 = state_43585;
state_43585 = G__43601;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto__ = function(state_43585){
switch(arguments.length){
case 0:
return frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto____1.call(this,state_43585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto____0;
frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto____1;
return frontend$db$run_batch_txs_BANG__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_43594 = f__27596__auto__();
(statearr_43594[(6)] = c__27595__auto___43596);

return statearr_43594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return chan;
});
frontend.db.new_block_id = (function frontend$db$new_block_id(){
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();
});

//# sourceMappingURL=frontend.db.js.map
