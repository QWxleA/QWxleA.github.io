goog.provide('frontend.handler.page');
goog.scope(function(){
  frontend.handler.page.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.page.get_directory = (function frontend$handler$page$get_directory(journal_QMARK_){
if(cljs.core.truth_(journal_QMARK_)){
return frontend.config.get_journals_directory();
} else {
return frontend.config.get_pages_directory();
}
});
frontend.handler.page.get_file_name = (function frontend$handler$page$get_file_name(journal_QMARK_,title){
var temp__5720__auto__ = (cljs.core.truth_(journal_QMARK_)?frontend.date.journal_title__GT_default(title):logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(title)));
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(s,(0),(200));
} else {
return null;
}
});
frontend.handler.page.get_page_file_path = (function frontend$handler$page$get_page_file_path(var_args){
var G__52483 = arguments.length;
switch (G__52483) {
case 0:
return frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_page());
}));

(frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$1 = (function (page_name){
if(cljs.core.truth_(page_name)){
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var temp__5720__auto__ = (function (){var G__52486 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52486) : frontend.db.entity.call(null,G__52486));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
return new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.handler.page.get_page_file_path.cljs$lang$maxFixedArity = 1);

frontend.handler.page.build_title = (function frontend$handler$page$build_title(page){
var original_name = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(clojure.string.includes_QMARK_(original_name,",")){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("\"%s\"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([original_name], 0));
} else {
return original_name;
}
});
frontend.handler.page.default_properties_block = (function frontend$handler$page$default_properties_block(var_args){
var G__52488 = arguments.length;
switch (G__52488) {
case 3:
return frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$3 = (function (title,format,page){
return frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$4(title,format,page,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$4 = (function (title,format,page,properties){
var p = frontend.handler.common.get_page_default_properties(title);
var ps = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,properties], 0));
var content = frontend.util.page_property.insert_properties(format,"",ps);
var refs = logseq.graph_parser.block.get_page_refs_from_properties(properties,(function (){var G__52496 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__52496) : frontend.db.get_db.call(null,G__52496));
})(),frontend.state.get_date_formatter());
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","page","block/page",822314108)],[frontend.db.new_block_id(),ps,page,refs,cljs.core.keys(ps),format,content,page,page]);
}));

(frontend.handler.page.default_properties_block.cljs$lang$maxFixedArity = 4);

frontend.handler.page.create_title_property_QMARK_ = (function frontend$handler$page$create_title_property_QMARK_(journal_QMARK_,page_name){
var and__5041__auto__ = cljs.core.not(journal_QMARK_);
if(and__5041__auto__){
return frontend.util.create_title_property_QMARK_(page_name);
} else {
return and__5041__auto__;
}
});
frontend.handler.page.build_page_tx = (function frontend$handler$page$build_page_tx(format,properties,page,journal_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))){
var page_entity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)], null);
var create_title_QMARK_ = frontend.handler.page.create_title_property_QMARK_(journal_QMARK_,(function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
})());
var page__$1 = ((cljs.core.seq(properties))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","properties","block/properties",708347145),properties):page);
var page_empty_QMARK_ = (function (){var G__52526 = frontend.state.get_current_repo();
var G__52527 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page__$1);
return (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(G__52526,G__52527) : frontend.db.page_empty_QMARK_.call(null,G__52526,G__52527));
})();
if(cljs.core.not(page_empty_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1], null);
} else {
if(cljs.core.truth_(create_title_QMARK_)){
var properties_block = frontend.handler.page.default_properties_block.cljs$core$IFn$_invoke$arity$4(frontend.handler.page.build_title(page__$1),format,page_entity,properties);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,properties_block], null);
} else {
if(cljs.core.seq(properties)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1,frontend.handler.editor.properties_block(properties,format,page_entity)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page__$1], null);

}
}
}
} else {
return null;
}
});
frontend.handler.page.create_BANG_ = (function frontend$handler$page$create_BANG_(var_args){
var G__52530 = arguments.length;
switch (G__52530) {
case 1:
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (title){
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(title,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (title,p__52535){
var map__52536 = p__52535;
var map__52536__$1 = cljs.core.__destructure_map(map__52536);
var redirect_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52536__$1,new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),true);
var create_first_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52536__$1,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),true);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52536__$1,new cljs.core.Keyword(null,"format","format",-1306924766),null);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52536__$1,new cljs.core.Keyword(null,"properties","properties",685819552),null);
var split_namespace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52536__$1,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),true);
var journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52536__$1,new cljs.core.Keyword(null,"journal?","journal?",-897756522));
var title__$1 = clojure.string.trim(title);
var title__$2 = logseq.graph_parser.util.remove_boundary_slashes(title__$1);
var page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title__$2) : frontend.util.page_name_sanity_lc.call(null,title__$2));
var repo = frontend.state.get_current_repo();
if(cljs.core.truth_((frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(repo,page_name) : frontend.db.page_empty_QMARK_.call(null,repo,page_name)))){
var pages_53461 = (cljs.core.truth_(split_namespace_QMARK_)?logseq.graph_parser.util.split_namespace_pages(title__$2):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$2], null));
var format_53462__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var pages_53463__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2(page,true),new cljs.core.Keyword("block","format","block/format",-1212045901),format_53462__$1);
}),pages_53461);
var txs_53464 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (m){
return (!(((function (){var G__52537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52537) : frontend.db.entity.call(null,G__52537));
})() == null)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52528_SHARP_){
return frontend.handler.page.build_page_tx(format_53462__$1,null,p1__52528_SHARP_,journal_QMARK_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(pages_53463__$1)], 0))));
var last_txs_53465 = frontend.handler.page.build_page_tx(format_53462__$1,properties,cljs.core.last(pages_53463__$1),journal_QMARK_);
var txs_53466__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs_53464,last_txs_53465);
if(cljs.core.seq(txs_53466__$1)){
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(txs_53466__$1) : frontend.db.transact_BANG_.call(null,txs_53466__$1));
} else {
}

if(cljs.core.truth_(create_first_block_QMARK_)){
if(cljs.core.truth_((function (){var or__5043__auto__ = (function (){var G__52539 = repo;
var G__52540 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__52541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52541) : frontend.db.entity.call(null,G__52541));
})());
return (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(G__52539,G__52540) : frontend.db.page_empty_QMARK_.call(null,G__52539,G__52540));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.page.create_title_property_QMARK_(journal_QMARK_,page_name);
}
})())){
frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_name], null));
} else {
}
} else {
}
} else {
}

if(cljs.core.truth_(redirect_QMARK_)){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_name);
} else {
}

return page_name;
}));

(frontend.handler.page.create_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.page.delete_file_BANG_ = (function frontend$handler$page$delete_file_BANG_(repo,page_name){
var file = (frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_file.call(null,page_name));
var file_path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
if(clojure.string.blank_QMARK_(file_path)){
return null;
} else {
var G__52544_53499 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),file_path], null)], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__52544_53499) : frontend.db.transact_BANG_.call(null,G__52544_53499));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__5041__auto__ = frontend.config.local_db_QMARK_(repo);
if(and__5041__auto__){
var and__5041__auto____$1 = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5041__auto____$1)){
return frontend.fs.delete_file_BANG_(repo,file_path,file_path,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})(),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.unlink_BANG_(repo,frontend.config.get_repo_path(repo,file_path),null),(function (___$1){
return promesa.protocols._promise(null);
}));
}));
})),(function (err){
return console.error("error: ",err);
}));
}
});
frontend.handler.page.compute_new_file_path = (function frontend$handler$page$compute_new_file_path(old_path,new_name){
var result = clojure.string.split.cljs$core$IFn$_invoke$arity$2(old_path,"/");
var file_name = logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$2(new_name,true);
var ext = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.last(result),"."));
var new_file = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
var parts = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_file], null));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",parts);
});
frontend.handler.page.rename_file_BANG_ = (function frontend$handler$page$rename_file_BANG_(file,new_name,ok_handler){
var repo = frontend.state.get_current_repo();
var file__$1 = (function (){var G__52547 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(file);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__52547) : frontend.db.pull.call(null,G__52547));
})();
var old_path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file__$1);
var new_path = frontend.handler.page.compute_new_file_path(old_path,new_name);
var G__52548_53514 = repo;
var G__52549_53515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(file__$1),new cljs.core.Keyword("file","path","file/path",-191335748),new_path], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__52548_53514,G__52549_53515) : frontend.db.transact_BANG_.call(null,G__52548_53514,G__52549_53515));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.rename_BANG_(repo,old_path,new_path),(function (_){
return promesa.protocols._promise((ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null)));
}));
})),(function (error){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["file rename failed: ",error], 0));
}));
});
/**
 * Unsanitized names
 */
frontend.handler.page.replace_page_ref_BANG_ = (function frontend$handler$page$replace_page_ref_BANG_(content,old_name,new_name){
var vec__52566 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_name,new_name], null));
var original_old_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52566,(0),null);
var original_new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52566,(1),null);
var vec__52569 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52561_SHARP_){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__52561_SHARP_], 0));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_name,new_name], null));
var old_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52569,(0),null);
var new_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52569,(1),null);
var vec__52572 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52563_SHARP_){
if(clojure.string.includes_QMARK_(p1__52563_SHARP_,"/")){
return clojure.string.replace(p1__52563_SHARP_,"/",".");
} else {
return p1__52563_SHARP_;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_old_name,original_new_name], null));
var old_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52572,(0),null);
var new_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52572,(1),null);
var old_org_ref = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
if(and__5041__auto__){
var and__5041__auto____$1 = new cljs.core.Keyword("org-mode","insert-file-link?","org-mode/insert-file-link?",-1472433842).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.re_find(cljs.core.re_pattern(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("\\[\\[file:\\.*/.*%s\\.org\\]\\[(.*?)\\]\\]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_name__$1], 0))),content);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
return clojure.string.replace((cljs.core.truth_(old_org_ref)?(function (){var vec__52577 = old_org_ref;
var old_full_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52577,(0),null);
var old_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52577,(1),null);
var new_label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_label,original_old_name))?original_new_name:old_label);
var new_full_ref = clojure.string.replace(clojure.string.replace(old_full_ref,old_name__$1,new_name__$1),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_label),"]"].join(''),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_label),"]"].join(''));
return clojure.string.replace(content,old_full_ref,new_full_ref);
})():content),old_ref,new_ref);
});
frontend.handler.page.replace_tag_ref_BANG_ = (function frontend$handler$page$replace_tag_ref_BANG_(content,old_name,new_name){
var old_tag = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("#%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_name], 0));
var new_tag = (cljs.core.truth_(cljs.core.re_find(/[\s\t]+/,new_name))?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("#[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_name], 0)):["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_name)].join(''));
return frontend.util.replace_ignore_case(frontend.util.replace_ignore_case(frontend.util.replace_ignore_case(content,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_tag),"\\b"].join(''),new_tag),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_tag)," "].join(''),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_tag)," "].join('')),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_tag),"$"].join(''),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_tag)].join(''));
});
/**
 * Unsanitized names
 */
frontend.handler.page.replace_old_page_BANG_ = (function frontend$handler$page$replace_old_page_BANG_(content,old_name,new_name){
if(((typeof content === 'string') && (((typeof old_name === 'string') && (typeof new_name === 'string'))))){
return frontend.handler.page.replace_tag_ref_BANG_(frontend.handler.page.replace_page_ref_BANG_(content,old_name,new_name),old_name,new_name);
} else {
return null;
}
});
/**
 * Unsanitized names
 */
frontend.handler.page.walk_replace_old_page_BANG_ = (function frontend$handler$page$walk_replace_old_page_BANG_(form,old_name,new_name){
return clojure.walk.postwalk((function (f){
if(((cljs.core.vector_QMARK_(f)) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Label",null,"Search",null], null), null),cljs.core.first(f))) && (clojure.string.starts_with_QMARK_(cljs.core.second(f),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_name),"/"].join(''))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(f),clojure.string.replace_first(cljs.core.second(f),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_name),"/"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_name),"/"].join(''))], null);
} else {
if(typeof f === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,old_name)){
return new_name;
} else {
return frontend.handler.page.replace_old_page_BANG_(f,old_name,new_name);
}
} else {
return f;

}
}
}),form);
});
frontend.handler.page.favorited_QMARK_ = (function frontend$handler$page$favorited_QMARK_(page_name){
var favorites = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()))));
return cljs.core.contains_QMARK_(favorites,page_name);
});
frontend.handler.page.favorite_page_BANG_ = (function frontend$handler$page$favorite_page_BANG_(page_name){
if(clojure.string.blank_QMARK_(page_name)){
return null;
} else {
var favorites = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(page_name,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())));
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"favorites","favorites",1740773480),favorites);
}
});
frontend.handler.page.unfavorite_page_BANG_ = (function frontend$handler$page$unfavorite_page_BANG_(page_name){
if(clojure.string.blank_QMARK_(page_name)){
return null;
} else {
var favorites = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52799_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(p1__52799_SHARP_),clojure.string.lower_case(page_name));
}),new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0())));
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"favorites","favorites",1740773480),favorites);
}
});
frontend.handler.page.toggle_favorite_BANG_ = (function frontend$handler$page$toggle_favorite_BANG_(){
var temp__5720__auto__ = frontend.state.get_current_page();
if(cljs.core.truth_(temp__5720__auto__)){
var page_name = temp__5720__auto__;
var favorites = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_graph_config());
var favorited_QMARK_ = cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,favorites)),clojure.string.lower_case(page_name));
if(favorited_QMARK_){
return frontend.handler.page.unfavorite_page_BANG_(page_name);
} else {
return frontend.handler.page.favorite_page_BANG_(page_name);
}
} else {
return null;
}
});
frontend.handler.page.delete_BANG_ = (function frontend$handler$page$delete_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53531 = arguments.length;
var i__5767__auto___53532 = (0);
while(true){
if((i__5767__auto___53532 < len__5766__auto___53531)){
args__5772__auto__.push((arguments[i__5767__auto___53532]));

var G__53533 = (i__5767__auto___53532 + (1));
i__5767__auto___53532 = G__53533;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.handler.page.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.handler.page.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (page_name,ok_handler,p__52809){
var map__52810 = p__52809;
var map__52810__$1 = cljs.core.__destructure_map(map__52810);
var delete_file_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52810__$1,new cljs.core.Keyword(null,"delete-file?","delete-file?",668245808),true);
if(cljs.core.truth_(page_name)){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var blocks = (frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page_name__$1) : frontend.db.get_page_blocks_no_cache.call(null,page_name__$1));
var tx_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null)], null);
}),blocks);
var page = (function (){var G__52811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52811) : frontend.db.entity.call(null,G__52811));
})();
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(tx_data) : frontend.db.transact_BANG_.call(null,tx_data));

if(cljs.core.truth_(delete_file_QMARK_)){
frontend.handler.page.delete_file_BANG_(repo,page_name__$1);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword("block","_namespace","block/_namespace",1151541806).cljs$core$IFn$_invoke$arity$1(page))){
} else {
if(cljs.core.truth_(frontend.db.model.get_alias_source_page(frontend.state.get_current_repo(),page_name__$1))){
var temp__5720__auto___53536__$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__52812 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52812) : frontend.db.entity.call(null,G__52812));
})());
if(cljs.core.truth_(temp__5720__auto___53536__$1)){
var id_53537 = temp__5720__auto___53536__$1;
var txs_53538 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (attribute){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id_53537,attribute], null);
}),frontend.db_schema.retract_page_attributes);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(txs_53538) : frontend.db.transact_BANG_.call(null,txs_53538));
} else {
}
} else {
var G__52813_53539 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null)], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__52813_53539) : frontend.db.transact_BANG_.call(null,G__52813_53539));
}
}

frontend.handler.page.unfavorite_page_BANG_(page_name__$1);

if(cljs.core.fn_QMARK_(ok_handler)){
(ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null));
} else {
}

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
} else {
return null;
}
}));

(frontend.handler.page.delete_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.handler.page.delete_BANG_.cljs$lang$applyTo = (function (seq52805){
var G__52806 = cljs.core.first(seq52805);
var seq52805__$1 = cljs.core.next(seq52805);
var G__52807 = cljs.core.first(seq52805__$1);
var seq52805__$2 = cljs.core.next(seq52805__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52806,G__52807,seq52805__$2);
}));

frontend.handler.page.rename_update_block_refs_BANG_ = (function frontend$handler$page$rename_update_block_refs_BANG_(refs,from_id,to_id){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),from_id], null)]),refs))));
});
/**
 * Unsanitized only
 */
frontend.handler.page.rename_update_refs_BANG_ = (function frontend$handler$page$rename_update_refs_BANG_(page,old_original_name,new_name){
var repo = frontend.state.get_current_repo();
var to_page = (function (){var G__52843 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(new_name) : frontend.util.page_name_sanity_lc.call(null,new_name))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__52843) : frontend.db.entity.call(null,G__52843));
})();
var blocks = (function (){var G__52847 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.get_page_referenced_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_referenced_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(G__52847) : frontend.db.get_page_referenced_blocks_no_cache.call(null,G__52847));
})();
var page_ids = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108),blocks)));
var tx = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52856){
var map__52859 = p__52856;
var map__52859__$1 = cljs.core.__destructure_map(map__52859);
var block = map__52859__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52859__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52859__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52859__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var content__$1 = (function (){var content_SINGLEQUOTE_ = frontend.handler.page.replace_old_page_BANG_(content,old_original_name,new_name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(content_SINGLEQUOTE_,content)){
return null;
} else {
return content_SINGLEQUOTE_;
}
})();
var properties__$1 = (function (){var properties_SINGLEQUOTE_ = frontend.handler.page.walk_replace_old_page_BANG_(properties,old_original_name,new_name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(properties_SINGLEQUOTE_,properties)){
return null;
} else {
return properties_SINGLEQUOTE_;
}
})();
if(cljs.core.truth_((function (){var or__5043__auto__ = content__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return properties__$1;
}
})())){
return frontend.util.remove_nils_non_nested(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","content","block/content",-161885195),content__$1,new cljs.core.Keyword("block","properties","block/properties",708347145),properties__$1,new cljs.core.Keyword("block","refs","block/refs",-1214495349),frontend.handler.page.rename_update_block_refs_BANG_(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(to_page)),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),frontend.handler.page.rename_update_block_refs_BANG_(new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(to_page))], null));
} else {
return null;
}
}),blocks));
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(repo,tx) : frontend.db.transact_BANG_.call(null,repo,tx));

var seq__52862 = cljs.core.seq(page_ids);
var chunk__52863 = null;
var count__52864 = (0);
var i__52865 = (0);
while(true){
if((i__52865 < count__52864)){
var page_id = chunk__52863.cljs$core$IIndexed$_nth$arity$2(null,i__52865);
frontend.modules.outliner.file.sync_to_file(page_id);


var G__53554 = seq__52862;
var G__53555 = chunk__52863;
var G__53556 = count__52864;
var G__53557 = (i__52865 + (1));
seq__52862 = G__53554;
chunk__52863 = G__53555;
count__52864 = G__53556;
i__52865 = G__53557;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52862);
if(temp__5720__auto__){
var seq__52862__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52862__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__52862__$1);
var G__53559 = cljs.core.chunk_rest(seq__52862__$1);
var G__53560 = c__5565__auto__;
var G__53561 = cljs.core.count(c__5565__auto__);
var G__53562 = (0);
seq__52862 = G__53559;
chunk__52863 = G__53560;
count__52864 = G__53561;
i__52865 = G__53562;
continue;
} else {
var page_id = cljs.core.first(seq__52862__$1);
frontend.modules.outliner.file.sync_to_file(page_id);


var G__53563 = cljs.core.next(seq__52862__$1);
var G__53564 = null;
var G__53565 = (0);
var G__53566 = (0);
seq__52862 = G__53563;
chunk__52863 = G__53564;
count__52864 = G__53565;
i__52865 = G__53566;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Only accepts unsanitized page names
 */
frontend.handler.page.rename_page_aux = (function frontend$handler$page$rename_page_aux(old_name,new_name,redirect_QMARK_){
var old_page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(old_name) : frontend.util.page_name_sanity_lc.call(null,old_name));
var new_file_name = frontend.util.file_name_sanity(new_name);
var new_page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(new_name) : frontend.util.page_name_sanity_lc.call(null,new_name));
var repo = frontend.state.get_current_repo();
var page = (function (){var G__52876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),old_page_name], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__52876) : frontend.db.pull.call(null,G__52876));
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return page;
} else {
return and__5041__auto__;
}
})())){
var old_original_name_53568 = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var file_53569 = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
var journal_QMARK__53570 = new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(page);
var properties_block_53571 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.tree._get_down(frontend.modules.outliner.core.block(page)));
var properties_block_tx_53572 = (cljs.core.truth_((function (){var and__5041__auto__ = properties_block_53571;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_((function (){var G__52877 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(properties_block_53571);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__52877) : frontend.util.page_name_sanity_lc.call(null,G__52877));
})(),old_page_name);
} else {
return and__5041__auto__;
}
})())?(function (){var front_matter_QMARK_ = ((frontend.util.property.front_matter_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(properties_block_53571))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(properties_block_53571))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(properties_block_53571),new cljs.core.Keyword("block","content","block/content",-161885195),frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(properties_block_53571),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(properties_block_53571),new cljs.core.Keyword(null,"title","title",636505583),new_name,front_matter_QMARK_)], null);
})():null);
var page_txs_53573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","name","block/name",1619760316),new_page_name,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new_name], null)], null);
var page_txs_53574__$1 = (cljs.core.truth_(properties_block_tx_53572)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(page_txs_53573,properties_block_tx_53572):page_txs_53573);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((frontend.db.get_db.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$2(repo,false) : frontend.db.get_db.call(null,repo,false)),page_txs_53574__$1);

if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.create_title_property_QMARK_(new_page_name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.util.page_name_sanity.cljs$core$IFn$_invoke$arity$2(new_name,false),new_name);
}
})())){
frontend.util.page_property.add_property_BANG_(new_page_name,new cljs.core.Keyword(null,"title","title",636505583),new_name);
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = file_53569;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(journal_QMARK__53570);
} else {
return and__5041__auto__;
}
})())){
frontend.handler.page.rename_file_BANG_(file_53569,new_file_name,(function (){
return null;
}));
} else {
}

frontend.handler.page.rename_update_refs_BANG_(page,old_original_name_53568,new_name);

frontend.modules.outliner.file.sync_to_file(page);

if(cljs.core.truth_(redirect_QMARK_)){
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"push","push",799791267),false,new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new_page_name], null)], null));
} else {
}

if(frontend.handler.page.favorited_QMARK_(old_page_name)){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.unfavorite_page_BANG_(old_page_name),(function (___28349__auto__){
return promesa.protocols._promise(frontend.handler.page.favorite_page_BANG_(new_page_name));
}));
}));
} else {
}

frontend.handler.recent.update_or_add_renamed_page(repo,old_page_name,new_page_name);

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
});
/**
 * Unsanitized names only
 */
frontend.handler.page.rename_nested_pages = (function frontend$handler$page$rename_nested_pages(old_ns_name,new_ns_name){
var repo = frontend.state.get_current_repo();
var nested_page_str = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(old_ns_name) : frontend.util.page_name_sanity_lc.call(null,old_ns_name))], 0));
var ns_prefix = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(old_ns_name) : frontend.util.page_name_sanity_lc.call(null,old_ns_name))], 0));
var nested_pages = (frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2(repo,nested_page_str) : frontend.db.get_pages_by_name_partition.call(null,repo,nested_page_str));
var nested_pages_ns = (frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2(repo,ns_prefix) : frontend.db.get_pages_by_name_partition.call(null,repo,ns_prefix));
if(cljs.core.truth_(nested_pages)){
var seq__52912_53587 = cljs.core.seq(nested_pages);
var chunk__52913_53588 = null;
var count__52914_53589 = (0);
var i__52915_53590 = (0);
while(true){
if((i__52915_53590 < count__52914_53589)){
var map__52922_53592 = chunk__52913_53588.cljs$core$IIndexed$_nth$arity$2(null,i__52915_53590);
var map__52922_53593__$1 = cljs.core.__destructure_map(map__52922_53592);
var name_53594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52922_53593__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name_53595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52922_53593__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_53597 = (function (){var or__5043__auto__ = original_name_53595;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name_53594;
}
})();
var new_page_title_53598 = clojure.string.replace(old_page_title_53597,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_ns_name], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ns_name], 0)));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_53597;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_53598;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__52912_53587,chunk__52913_53588,count__52914_53589,i__52915_53590,old_page_title_53597,new_page_title_53598,map__52922_53592,map__52922_53593__$1,name_53594,original_name_53595,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___28350__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_53597,new_page_title_53598,false),((function (seq__52912_53587,chunk__52913_53588,count__52914_53589,i__52915_53590,old_page_title_53597,new_page_title_53598,map__52922_53592,map__52922_53593__$1,name_53594,original_name_53595,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___28349__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_53597," to ",new_page_title_53598], 0)));
});})(seq__52912_53587,chunk__52913_53588,count__52914_53589,i__52915_53590,old_page_title_53597,new_page_title_53598,map__52922_53592,map__52922_53593__$1,name_53594,original_name_53595,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__52912_53587,chunk__52913_53588,count__52914_53589,i__52915_53590,old_page_title_53597,new_page_title_53598,map__52922_53592,map__52922_53593__$1,name_53594,original_name_53595,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__53601 = seq__52912_53587;
var G__53602 = chunk__52913_53588;
var G__53603 = count__52914_53589;
var G__53604 = (i__52915_53590 + (1));
seq__52912_53587 = G__53601;
chunk__52913_53588 = G__53602;
count__52914_53589 = G__53603;
i__52915_53590 = G__53604;
continue;
} else {
var temp__5720__auto___53605 = cljs.core.seq(seq__52912_53587);
if(temp__5720__auto___53605){
var seq__52912_53606__$1 = temp__5720__auto___53605;
if(cljs.core.chunked_seq_QMARK_(seq__52912_53606__$1)){
var c__5565__auto___53607 = cljs.core.chunk_first(seq__52912_53606__$1);
var G__53609 = cljs.core.chunk_rest(seq__52912_53606__$1);
var G__53610 = c__5565__auto___53607;
var G__53611 = cljs.core.count(c__5565__auto___53607);
var G__53612 = (0);
seq__52912_53587 = G__53609;
chunk__52913_53588 = G__53610;
count__52914_53589 = G__53611;
i__52915_53590 = G__53612;
continue;
} else {
var map__52923_53613 = cljs.core.first(seq__52912_53606__$1);
var map__52923_53614__$1 = cljs.core.__destructure_map(map__52923_53613);
var name_53615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52923_53614__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name_53616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52923_53614__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_53617 = (function (){var or__5043__auto__ = original_name_53616;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name_53615;
}
})();
var new_page_title_53618 = clojure.string.replace(old_page_title_53617,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_ns_name], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ns_name], 0)));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_53617;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_53618;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__52912_53587,chunk__52913_53588,count__52914_53589,i__52915_53590,old_page_title_53617,new_page_title_53618,map__52923_53613,map__52923_53614__$1,name_53615,original_name_53616,seq__52912_53606__$1,temp__5720__auto___53605,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___28350__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_53617,new_page_title_53618,false),((function (seq__52912_53587,chunk__52913_53588,count__52914_53589,i__52915_53590,old_page_title_53617,new_page_title_53618,map__52923_53613,map__52923_53614__$1,name_53615,original_name_53616,seq__52912_53606__$1,temp__5720__auto___53605,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___28349__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_53617," to ",new_page_title_53618], 0)));
});})(seq__52912_53587,chunk__52913_53588,count__52914_53589,i__52915_53590,old_page_title_53617,new_page_title_53618,map__52923_53613,map__52923_53614__$1,name_53615,original_name_53616,seq__52912_53606__$1,temp__5720__auto___53605,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__52912_53587,chunk__52913_53588,count__52914_53589,i__52915_53590,old_page_title_53617,new_page_title_53618,map__52923_53613,map__52923_53614__$1,name_53615,original_name_53616,seq__52912_53606__$1,temp__5720__auto___53605,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__53621 = cljs.core.next(seq__52912_53606__$1);
var G__53622 = null;
var G__53623 = (0);
var G__53624 = (0);
seq__52912_53587 = G__53621;
chunk__52913_53588 = G__53622;
count__52914_53589 = G__53623;
i__52915_53590 = G__53624;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(nested_pages_ns)){
var seq__52925 = cljs.core.seq(nested_pages_ns);
var chunk__52926 = null;
var count__52927 = (0);
var i__52928 = (0);
while(true){
if((i__52928 < count__52927)){
var map__52935 = chunk__52926.cljs$core$IIndexed$_nth$arity$2(null,i__52928);
var map__52935__$1 = cljs.core.__destructure_map(map__52935);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_53626 = (function (){var or__5043__auto__ = original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
var new_page_title_53627 = clojure.string.replace(old_page_title_53626,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_ns_name], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ns_name], 0)));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_53626;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_53627;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__52925,chunk__52926,count__52927,i__52928,old_page_title_53626,new_page_title_53627,map__52935,map__52935__$1,name,original_name,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___28350__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_53626,new_page_title_53627,false),((function (seq__52925,chunk__52926,count__52927,i__52928,old_page_title_53626,new_page_title_53627,map__52935,map__52935__$1,name,original_name,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___28349__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_53626," to ",new_page_title_53627], 0)));
});})(seq__52925,chunk__52926,count__52927,i__52928,old_page_title_53626,new_page_title_53627,map__52935,map__52935__$1,name,original_name,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__52925,chunk__52926,count__52927,i__52928,old_page_title_53626,new_page_title_53627,map__52935,map__52935__$1,name,original_name,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__53628 = seq__52925;
var G__53629 = chunk__52926;
var G__53630 = count__52927;
var G__53631 = (i__52928 + (1));
seq__52925 = G__53628;
chunk__52926 = G__53629;
count__52927 = G__53630;
i__52928 = G__53631;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52925);
if(temp__5720__auto__){
var seq__52925__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52925__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__52925__$1);
var G__53632 = cljs.core.chunk_rest(seq__52925__$1);
var G__53633 = c__5565__auto__;
var G__53634 = cljs.core.count(c__5565__auto__);
var G__53635 = (0);
seq__52925 = G__53632;
chunk__52926 = G__53633;
count__52927 = G__53634;
i__52928 = G__53635;
continue;
} else {
var map__52937 = cljs.core.first(seq__52925__$1);
var map__52937__$1 = cljs.core.__destructure_map(map__52937);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_53636 = (function (){var or__5043__auto__ = original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
var new_page_title_53637 = clojure.string.replace(old_page_title_53636,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_ns_name], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ns_name], 0)));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_53636;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_53637;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__52925,chunk__52926,count__52927,i__52928,old_page_title_53636,new_page_title_53637,map__52937,map__52937__$1,name,original_name,seq__52925__$1,temp__5720__auto__,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___28350__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_53636,new_page_title_53637,false),((function (seq__52925,chunk__52926,count__52927,i__52928,old_page_title_53636,new_page_title_53637,map__52937,map__52937__$1,name,original_name,seq__52925__$1,temp__5720__auto__,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___28349__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_53636," to ",new_page_title_53637], 0)));
});})(seq__52925,chunk__52926,count__52927,i__52928,old_page_title_53636,new_page_title_53637,map__52937,map__52937__$1,name,original_name,seq__52925__$1,temp__5720__auto__,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__52925,chunk__52926,count__52927,i__52928,old_page_title_53636,new_page_title_53637,map__52937,map__52937__$1,name,original_name,seq__52925__$1,temp__5720__auto__,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__53638 = cljs.core.next(seq__52925__$1);
var G__53639 = null;
var G__53640 = (0);
var G__53641 = (0);
seq__52925 = G__53638;
chunk__52926 = G__53639;
count__52927 = G__53640;
i__52928 = G__53641;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Original names (unsanitized only)
 */
frontend.handler.page.rename_namespace_pages_BANG_ = (function frontend$handler$page$rename_namespace_pages_BANG_(repo,old_name,new_name){
var pages = (frontend.db.get_namespace_pages.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_namespace_pages.cljs$core$IFn$_invoke$arity$2(repo,old_name) : frontend.db.get_namespace_pages.call(null,repo,old_name));
var page = (function (){var G__52939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(old_name) : frontend.util.page_name_sanity_lc.call(null,old_name))], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__52939) : frontend.db.pull.call(null,G__52939));
})();
var pages__$1 = cljs.core.cons(page,pages);
var seq__52940 = cljs.core.seq(pages__$1);
var chunk__52941 = null;
var count__52942 = (0);
var i__52943 = (0);
while(true){
if((i__52943 < count__52942)){
var map__52947 = chunk__52941.cljs$core$IIndexed$_nth$arity$2(null,i__52943);
var map__52947__$1 = cljs.core.__destructure_map(map__52947);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52947__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52947__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_53642 = (function (){var or__5043__auto__ = original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
var new_page_title_53643 = clojure.string.replace(old_page_title_53642,old_name,new_name);
var redirect_QMARK__53644 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_53642;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_53643;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__52940,chunk__52941,count__52942,i__52943,old_page_title_53642,new_page_title_53643,redirect_QMARK__53644,map__52947,map__52947__$1,name,original_name,pages,page,pages__$1){
return (function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_53642,new_page_title_53643,redirect_QMARK__53644),((function (seq__52940,chunk__52941,count__52942,i__52943,old_page_title_53642,new_page_title_53643,redirect_QMARK__53644,map__52947,map__52947__$1,name,original_name,pages,page,pages__$1){
return (function (_){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_53642," to ",new_page_title_53643], 0)));
});})(seq__52940,chunk__52941,count__52942,i__52943,old_page_title_53642,new_page_title_53643,redirect_QMARK__53644,map__52947,map__52947__$1,name,original_name,pages,page,pages__$1))
);
});})(seq__52940,chunk__52941,count__52942,i__52943,old_page_title_53642,new_page_title_53643,redirect_QMARK__53644,map__52947,map__52947__$1,name,original_name,pages,page,pages__$1))
);
} else {
}


var G__53645 = seq__52940;
var G__53646 = chunk__52941;
var G__53647 = count__52942;
var G__53648 = (i__52943 + (1));
seq__52940 = G__53645;
chunk__52941 = G__53646;
count__52942 = G__53647;
i__52943 = G__53648;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52940);
if(temp__5720__auto__){
var seq__52940__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52940__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__52940__$1);
var G__53649 = cljs.core.chunk_rest(seq__52940__$1);
var G__53650 = c__5565__auto__;
var G__53651 = cljs.core.count(c__5565__auto__);
var G__53652 = (0);
seq__52940 = G__53649;
chunk__52941 = G__53650;
count__52942 = G__53651;
i__52943 = G__53652;
continue;
} else {
var map__52972 = cljs.core.first(seq__52940__$1);
var map__52972__$1 = cljs.core.__destructure_map(map__52972);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52972__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52972__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_53653 = (function (){var or__5043__auto__ = original_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
var new_page_title_53654 = clojure.string.replace(old_page_title_53653,old_name,new_name);
var redirect_QMARK__53655 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
if(cljs.core.truth_((function (){var and__5041__auto__ = old_page_title_53653;
if(cljs.core.truth_(and__5041__auto__)){
return new_page_title_53654;
} else {
return and__5041__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__52940,chunk__52941,count__52942,i__52943,old_page_title_53653,new_page_title_53654,redirect_QMARK__53655,map__52972,map__52972__$1,name,original_name,seq__52940__$1,temp__5720__auto__,pages,page,pages__$1){
return (function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_53653,new_page_title_53654,redirect_QMARK__53655),((function (seq__52940,chunk__52941,count__52942,i__52943,old_page_title_53653,new_page_title_53654,redirect_QMARK__53655,map__52972,map__52972__$1,name,original_name,seq__52940__$1,temp__5720__auto__,pages,page,pages__$1){
return (function (_){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_53653," to ",new_page_title_53654], 0)));
});})(seq__52940,chunk__52941,count__52942,i__52943,old_page_title_53653,new_page_title_53654,redirect_QMARK__53655,map__52972,map__52972__$1,name,original_name,seq__52940__$1,temp__5720__auto__,pages,page,pages__$1))
);
});})(seq__52940,chunk__52941,count__52942,i__52943,old_page_title_53653,new_page_title_53654,redirect_QMARK__53655,map__52972,map__52972__$1,name,original_name,seq__52940__$1,temp__5720__auto__,pages,page,pages__$1))
);
} else {
}


var G__53656 = cljs.core.next(seq__52940__$1);
var G__53657 = null;
var G__53658 = (0);
var G__53659 = (0);
seq__52940 = G__53656;
chunk__52941 = G__53657;
count__52942 = G__53658;
i__52943 = G__53659;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Only accepts sanitized page names
 */
frontend.handler.page.merge_pages_BANG_ = (function frontend$handler$page$merge_pages_BANG_(from_page_name,to_page_name){
if(cljs.core.truth_((function (){var and__5041__auto__ = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(from_page_name) : frontend.db.page_exists_QMARK_.call(null,from_page_name));
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(to_page_name) : frontend.db.page_exists_QMARK_.call(null,to_page_name));
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_page_name,to_page_name);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var to_page_53660 = (function (){var G__53001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),to_page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__53001) : frontend.db.entity.call(null,G__53001));
})();
var to_id_53661 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(to_page_53660);
var from_page_53662 = (function (){var G__53002 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),from_page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__53002) : frontend.db.entity.call(null,G__53002));
})();
var from_id_53663 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(from_page_53662);
var from_first_child_53664 = (function (){var G__53003 = (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(from_id_53663) : frontend.db.pull.call(null,from_id_53663));
var G__53003__$1 = (((G__53003 == null))?null:frontend.modules.outliner.core.block(G__53003));
var G__53003__$2 = (((G__53003__$1 == null))?null:frontend.modules.outliner.tree._get_down(G__53003__$1));
if((G__53003__$2 == null)){
return null;
} else {
return frontend.modules.outliner.core.get_data(G__53003__$2);
}
})();
var to_last_direct_child_id_53665 = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3((frontend.db.get_db.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_db.call(null)),to_id_53661,false);
var repo_53666 = frontend.state.get_current_repo();
var conn_53667 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo_53666,false);
var datoms_53668 = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(conn_53667),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),from_id_53663);
var block_eids_53669 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms_53668);
var blocks_53670 = frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_53666,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null),block_eids_53669);
var tx_data_53671 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var G__53047 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id_53661], null),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),frontend.handler.page.rename_update_block_refs_BANG_(new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1(block),from_id_53663,to_id_53661),new cljs.core.Keyword("block","refs","block/refs",-1214495349),frontend.handler.page.rename_update_block_refs_BANG_(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),from_id_53663,to_id_53661)], null);
var G__53047__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = from_first_child_53664;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(from_first_child_53664));
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53047,new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(function (){var or__5043__auto__ = to_last_direct_child_id_53665;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return to_id_53661;
}
})()], null)):G__53047);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),from_id_53663], null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53047__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id_53661], null));
} else {
return G__53047__$1;
}
}),blocks_53670);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn_53667,tx_data_53671);

frontend.modules.outliner.file.sync_to_file(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id_53661], null));

frontend.handler.page.rename_update_refs_BANG_(from_page_53662,frontend.util.get_page_original_name(from_page_53662),frontend.util.get_page_original_name(to_page_53660));

frontend.handler.page.delete_BANG_(from_page_name,null);

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"push","push",799791267),false,new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),to_page_name], null)], null));
} else {
return null;
}
});
/**
 * Accepts unsanitized page names
 */
frontend.handler.page.rename_BANG_ = (function frontend$handler$page$rename_BANG_(old_name,new_name){
var repo = frontend.state.get_current_repo();
var old_name__$1 = clojure.string.trim(old_name);
var new_name__$1 = clojure.string.trim(new_name);
var old_page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(old_name__$1) : frontend.util.page_name_sanity_lc.call(null,old_name__$1));
var new_page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(new_name__$1) : frontend.util.page_name_sanity_lc.call(null,new_name__$1));
var name_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_name__$1,new_name__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = old_name__$1;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = new_name__$1;
if(cljs.core.truth_(and__5041__auto____$1)){
return (((!(clojure.string.blank_QMARK_(new_name__$1)))) && (name_changed_QMARK_));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_page_name,new_page_name)){
frontend.handler.page.rename_page_aux(old_name__$1,new_name__$1,true);
} else {
if(cljs.core.truth_((function (){var G__53079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new_page_name], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__53079) : frontend.db.pull.call(null,G__53079));
})())){
frontend.handler.page.merge_pages_BANG_(old_page_name,new_page_name);
} else {
frontend.handler.page.rename_namespace_pages_BANG_(repo,old_name__$1,new_name__$1);

}
}

return frontend.handler.page.rename_nested_pages(old_name__$1,new_name__$1);
} else {
if(clojure.string.blank_QMARK_(new_name__$1)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Please use a valid name, empty name is not allowed!",new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return null;
}
}
});
frontend.handler.page.split_col_by_element = (function frontend$handler$page$split_col_by_element(col,element){
var col__$1 = cljs.core.vec(col);
var idx = col__$1.indexOf(element);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(col__$1,(0),(idx + (1))),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(col__$1,(idx + (1)))], null);
});
frontend.handler.page.reorder_favorites_BANG_ = (function frontend$handler$page$reorder_favorites_BANG_(p__53084){
var map__53085 = p__53084;
var map__53085__$1 = cljs.core.__destructure_map(map__53085);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53085__$1,new cljs.core.Keyword(null,"to","to",192099007));
var up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53085__$1,new cljs.core.Keyword(null,"up?","up?",77854972));
var favorites = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178));
if(cljs.core.truth_((function (){var and__5041__auto__ = from;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = to;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var vec__53111 = frontend.handler.page.split_col_by_element(favorites,to);
var prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53111,(0),null);
var next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53111,(1),null);
var vec__53114 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53083_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,e);
}),p1__53083_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev,next], null));
var prev__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53114,(0),null);
var next__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53114,(1),null);
var favorites__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(cljs.core.truth_(up_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(prev__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,cljs.core.last(prev__$1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next__$1], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(prev__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([next__$1], 0)))));
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"favorites","favorites",1740773480),favorites__$1);
} else {
return null;
}
});
frontend.handler.page.has_more_journals_QMARK_ = (function frontend$handler$page$has_more_journals_QMARK_(){
var current_length = new cljs.core.Keyword(null,"journals-length","journals-length",1463764186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
return (current_length < (frontend.db.get_journals_length.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_journals_length.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_journals_length.call(null)));
});
frontend.handler.page.load_more_journals_BANG_ = (function frontend$handler$page$load_more_journals_BANG_(){
if(frontend.handler.page.has_more_journals_QMARK_()){
return frontend.state.set_journals_length_BANG_((new cljs.core.Keyword(null,"journals-length","journals-length",1463764186).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)) + (7)));
} else {
return null;
}
});
frontend.handler.page.update_public_attribute_BANG_ = (function frontend$handler$page$update_public_attribute_BANG_(page_name,value){
return frontend.util.page_property.add_property_BANG_(page_name,new cljs.core.Keyword(null,"public","public",1566243851),value);
});
frontend.handler.page.get_page_ref_text = (function frontend$handler$page$get_page_ref_text(page){
var edit_block_file_path = frontend.db.model.get_block_file_path(frontend.state.get_edit_block());
var page_name = clojure.string.lower_case(page);
if(cljs.core.truth_((function (){var and__5041__auto__ = edit_block_file_path;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.org_mode_file_link_QMARK_(frontend.state.get_current_repo());
} else {
return and__5041__auto__;
}
})())){
var temp__5718__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_file.call(null,page_name)));
if(cljs.core.truth_(temp__5718__auto__)){
var ref_file_path = temp__5718__auto__;
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[file:%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.get_relative_path(edit_block_file_path,ref_file_path),page], 0));
} else {
var journal_QMARK_ = frontend.date.valid_journal_title_QMARK_(page);
var ref_file_path = [(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?[clojure.string.replace(decodeURI(frontend.config.get_repo_dir(frontend.state.get_current_repo())),/\/+$/,""),"/"].join(''):""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.page.get_directory(journal_QMARK_)),"/",frontend.handler.page.get_file_name(journal_QMARK_,page),".org"].join('');
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null));

return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[file:%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.get_relative_path(edit_block_file_path,ref_file_path),page], 0));
}
} else {
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page], 0));
}
});
frontend.handler.page.init_commands_BANG_ = (function frontend$handler$page$init_commands_BANG_(){
return frontend.commands.init_commands_BANG_(frontend.handler.page.get_page_ref_text);
});
frontend.handler.page.rebuild_slash_commands_list_BANG_ = goog.functions.debounce(frontend.handler.page.init_commands_BANG_,(1500));
frontend.handler.page.template_exists_QMARK_ = (function frontend$handler$page$template_exists_QMARK_(title){
if(cljs.core.truth_(title)){
var templates = cljs.core.keys((frontend.db.get_all_templates.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_all_templates.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_all_templates.call(null)));
if(cljs.core.seq(templates)){
var templates__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,templates);
return cljs.core.contains_QMARK_(cljs.core.set(templates__$1),clojure.string.lower_case(title));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.page.ls_dir_files_BANG_ = (function frontend$handler$page$ls_dir_files_BANG_(ok_handler){
return frontend.handler.web.nfs.ls_dir_files_with_handler_BANG_((function (){
frontend.handler.page.init_commands_BANG_();

if(cljs.core.truth_(ok_handler)){
return (ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null));
} else {
return null;
}
}));
});
frontend.handler.page.get_all_pages = (function frontend$handler$page$get_all_pages(repo){
return frontend.handler.common.fix_pages_timestamps(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p){
var name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p);
var or__5043__auto__ = frontend.util.uuid_string_QMARK_(name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = logseq.graph_parser.config.draw_QMARK_(name);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var G__53247 = clojure.string.upper_case(name);
return (frontend.db.built_in_pages_names.cljs$core$IFn$_invoke$arity$1 ? frontend.db.built_in_pages_names.cljs$core$IFn$_invoke$arity$1(G__53247) : frontend.db.built_in_pages_names.call(null,G__53247));
}
}
}),(frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_pages.call(null,repo))));
});
frontend.handler.page.get_filters = (function frontend$handler$page$get_filters(page_name){
var properties = (frontend.db.get_page_properties.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_properties.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_properties.call(null,page_name));
var properties_str = cljs.core.get.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"filters","filters",974726919),"{}");
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(properties_str);
}catch (e53250){if((e53250 instanceof Error)){
var e = e53250;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.page",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("syntax","filters","syntax/filters",1060305692),e,new cljs.core.Keyword(null,"line","line",212345235),655], null)),null);
} else {
throw e53250;

}
}});
frontend.handler.page.save_filter_BANG_ = (function frontend$handler$page$save_filter_BANG_(page_name,filter_state){
return frontend.util.page_property.add_property_BANG_(page_name,new cljs.core.Keyword(null,"filters","filters",974726919),filter_state);
});
frontend.handler.page.page_not_exists_handler = (function frontend$handler$page$page_not_exists_handler(input,id,q,current_pos){
frontend.state.set_editor_show_page_search_BANG_(false);

if(cljs.core.truth_(frontend.state.org_mode_file_link_QMARK_(frontend.state.get_current_repo()))){
var page_ref_text = frontend.handler.page.get_page_ref_text(q);
var value = frontend.handler.page.goog$module$goog$object.get(input,"value");
var old_page_ref = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q], 0));
var new_value = clojure.string.replace(value,old_page_ref,page_ref_text);
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(id,new_value);

var new_pos = ((current_pos + (cljs.core.count(page_ref_text) - cljs.core.count(old_page_ref))) + (2));
return frontend.util.cursor.move_cursor_to(input,new_pos);
} else {
var current_selected = frontend.util.get_selected_text();
return frontend.util.cursor.move_cursor_forward.cljs$core$IFn$_invoke$arity$2(input,((2) + cljs.core.count(current_selected)));
}
});
frontend.handler.page.on_chosen_handler = (function frontend$handler$page$on_chosen_handler(input,id,_q,pos,format){
var current_pos = frontend.util.cursor.pos(input);
var edit_content = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
var q = (function (){var or__5043__auto__ = cljs.core.deref(frontend.handler.editor._STAR_selected_text);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-page-search-hashtag?","editor/show-page-search-hashtag?",1934478614)))?logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
if((cljs.core.count(edit_content) > current_pos)){
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos);
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-page-search-hashtag?","editor/show-page-search-hashtag?",1934478614)))){
return (function (chosen,_click_QMARK_){
frontend.state.set_editor_show_page_search_BANG_(false);

var wrapped_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[[",logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,(pos - (2)),pos));
var chosen__$1 = ((clojure.string.starts_with_QMARK_(chosen,"New page: "))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(chosen,(10)):chosen);
var chosen__$2 = (cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.safe_re_find(/\s+/,chosen__$1);
if(cljs.core.truth_(and__5041__auto__)){
return (!(wrapped_QMARK_));
} else {
return and__5041__auto__;
}
})())?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chosen__$1], 0)):chosen__$1);
var q__$1 = (cljs.core.truth_(cljs.core.deref(frontend.handler.editor._STAR_selected_text))?"":q);
var vec__53269 = ((wrapped_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$1,(3)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(q__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(q__$1,(1)),(1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$1,(2)], null)));
var last_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53269,(0),null);
var forward_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53269,(1),null);
var last_pattern__$1 = ["#",((wrapped_QMARK_)?"[[":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_pattern)].join('');
return frontend.handler.editor.insert_command_BANG_(id,["#",((wrapped_QMARK_)?"[[":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chosen__$2)].join(''),format,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),last_pattern__$1,new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),((wrapped_QMARK_)?"]]":null),new cljs.core.Keyword(null,"forward-pos","forward-pos",-1445897715),forward_pos], null));
});
} else {
return (function (chosen,_click_QMARK_){
frontend.state.set_editor_show_page_search_BANG_(false);

var chosen__$1 = ((clojure.string.starts_with_QMARK_(chosen,"New page: "))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(chosen,(10)):chosen);
var page_ref_text = frontend.handler.page.get_page_ref_text(chosen__$1);
return frontend.handler.editor.insert_command_BANG_(id,page_ref_text,format,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"last-pattern","last-pattern",-104197189),["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(frontend.handler.editor._STAR_selected_text))?"":q))].join(''),new cljs.core.Keyword(null,"end-pattern","end-pattern",-963594078),"]]",new cljs.core.Keyword(null,"postfix-fn","postfix-fn",-1393704144),(function (s){
return frontend.util.replace_first("]]",s,"");
}),new cljs.core.Keyword(null,"forward-pos","forward-pos",-1445897715),(3)], null));
});
}
});
frontend.handler.page.create_today_journal_BANG_ = (function frontend$handler$page$create_today_journal_BANG_(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
if(((frontend.state.enable_journals_QMARK_(repo)) && (cljs.core.not(frontend.state.loading_files_QMARK_(repo))))){
frontend.state.set_today_BANG_(frontend.date.today());

if(((frontend.config.local_db_QMARK_(repo)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("local",repo)) && (cljs.core.not(frontend.mobile.util.native_platform_QMARK_())))))){
var title = frontend.date.today();
var today_page = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title));
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1(repo);
var file_name = frontend.date.journal_title__GT_default(title);
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_journals_directory()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_file_extension(format))].join('');
var file_path = ["/",path].join('');
var repo_dir = frontend.config.get_repo_dir(repo);
var template = frontend.state.get_default_journal_template();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_(repo_dir,file_path),(function (file_exists_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(file_exists_QMARK_)?frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(repo_dir,file_path):null),(function (file_content){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5041__auto__ = (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(repo,today_page) : frontend.db.page_empty_QMARK_.call(null,repo,today_page));
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = cljs.core.not(file_exists_QMARK_);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto____$1 = file_exists_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return clojure.string.blank_QMARK_(file_content);
} else {
return and__5041__auto____$1;
}
}
} else {
return and__5041__auto__;
}
})())?(function (){
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(title,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),false,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),cljs.core.not(template),new cljs.core.Keyword(null,"journal?","journal?",-897756522),true], null));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("journal","insert-template","journal/insert-template",-1273735332),today_page], null));

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
})()
:null));
}));
}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.page.open_today_in_sidebar = (function frontend$handler$page$open_today_in_sidebar(){
var temp__5720__auto__ = (function (){var G__53295 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var G__53297 = frontend.date.today();
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__53297) : frontend.util.page_name_sanity_lc.call(null,G__53297));
})()], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__53295) : frontend.db.entity.call(null,G__53295));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
});
frontend.handler.page.open_file_in_default_app = (function frontend$handler$page$open_file_in_default_app(){
var temp__5720__auto__ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$0();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var file_path = temp__5720__auto__;
return window.apis.openPath(file_path);
} else {
return null;
}
});
frontend.handler.page.copy_current_file = (function frontend$handler$page$copy_current_file(){
var temp__5720__auto__ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$0();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var file_path = temp__5720__auto__;
return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1(file_path);
} else {
return null;
}
});
frontend.handler.page.open_file_in_directory = (function frontend$handler$page$open_file_in_directory(){
var temp__5720__auto__ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$0();
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var file_path = temp__5720__auto__;
return window.apis.showItemInFolder(file_path);
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.page.js.map
