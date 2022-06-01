goog.provide('frontend.handler.export$');
frontend.handler.export$.get_page_content = (function frontend$handler$export$get_page_content(repo,page){
return frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2(repo,page) : frontend.db.get_page_blocks_no_cache.call(null,repo,page)),page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
});
frontend.handler.export$.get_file_content = (function frontend$handler$export$get_file_content(repo,file_path){
var temp__5718__auto__ = cljs.core.ffirst((function (){var G__50503 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?pn","?pn",704318294,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?pn","?pn",704318294,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null)], null);
var G__50504 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var G__50505 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__50503,G__50504,G__50505) : datascript.core.q.call(null,G__50503,G__50504,G__50505));
})());
if(cljs.core.truth_(temp__5718__auto__)){
var page_name = temp__5718__auto__;
return frontend.handler.export$.get_page_content(repo,page_name);
} else {
return cljs.core.ffirst((function (){var G__50506 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","content","file/content",12680964),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null)], null);
var G__50507 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var G__50508 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__50506,G__50507,G__50508) : datascript.core.q.call(null,G__50506,G__50507,G__50508));
})());
}
});
frontend.handler.export$.get_blocks_contents = (function frontend$handler$export$get_blocks_contents(repo,root_block_uuid){
return frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(repo,root_block_uuid) : frontend.db.get_block_and_children.call(null,repo,root_block_uuid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(root_block_uuid)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
});
frontend.handler.export$.get_block_content = (function frontend$handler$export$get_block_content(block){
return frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
});
frontend.handler.export$.download_file_BANG_ = (function frontend$handler$export$download_file_BANG_(file_path){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.handler.export$.get_file_content(repo,file_path);
if(cljs.core.truth_(temp__5720__auto____$1)){
var content = temp__5720__auto____$1;
var data = (new Blob(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\uFEFF",[content]], null),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/plain;charset=utf-8,"], null))));
var anchor = goog.dom.getElement("download");
var url = window.URL.createObjectURL(data);
anchor.setAttribute("href",url);

anchor.setAttribute("download",file_path);

return anchor.click();
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.export$.export_repo_as_html_BANG_ = (function frontend$handler$export$export_repo_as_html_BANG_(repo){
var temp__5720__auto__ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var vec__50513 = ((frontend.state.all_pages_public_QMARK_())?(frontend.db.clean_export_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.clean_export_BANG_.cljs$core$IFn$_invoke$arity$1(db) : frontend.db.clean_export_BANG_.call(null,db)):(frontend.db.filter_only_public_pages_and_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.filter_only_public_pages_and_blocks.cljs$core$IFn$_invoke$arity$1(db) : frontend.db.filter_only_public_pages_and_blocks.call(null,db)));
var db__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50513,(0),null);
var asset_filenames = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50513,(1),null);
var db_str = (frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1 ? frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1(db__$1) : frontend.db.db__GT_string.call(null,db__$1));
var state = cljs.core.select_keys(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),new cljs.core.Keyword("ui","show-recent?","ui/show-recent?",927656089),new cljs.core.Keyword(null,"config","config",994861415)], null));
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"config","config",994861415),(function (config){
return new cljs.core.PersistentArrayMap(null, 1, ["local",cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,repo)], null);
}));
var raw_html_str = frontend.publishing.html.publishing_html(db_str,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state__$1], 0)));
var html_str = ["data:text/html;charset=UTF-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(raw_html_str))].join('');
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return window.apis.exportPublishAssets(raw_html_str,frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0(),frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0(),frontend.config.get_repo_dir(repo),cljs.core.clj__GT_js(asset_filenames),frontend.util.mocked_open_dir_path());
} else {
var temp__5720__auto____$1 = goog.dom.getElement("download-as-html");
if(cljs.core.truth_(temp__5720__auto____$1)){
var anchor = temp__5720__auto____$1;
anchor.setAttribute("href",html_str);

anchor.setAttribute("download","index.html");

return anchor.click();
} else {
return null;
}
}
} else {
return null;
}
});
frontend.handler.export$.get_file_contents = (function frontend$handler$export$get_file_contents(var_args){
var G__50517 = arguments.length;
switch (G__50517) {
case 1:
return frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
}));

(frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$2 = (function (repo,file_opts){
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50518){
var vec__50519 = p__50518;
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50519,(0),null);
var file_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50519,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_path,frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_blocks_no_cache.call(null,page_name)),page_name),file_opts)], null);
}),(function (){var G__50522 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Symbol(null,"?fp","?fp",-1936386163,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?fp","?fp",-1936386163,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)], null)], null);
var G__50523 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__50522,G__50523) : datascript.core.q.call(null,G__50522,G__50523));
})());
}));

(frontend.handler.export$.get_file_contents.cljs$lang$maxFixedArity = 2);

frontend.handler.export$.export_repo_as_zip_BANG_ = (function frontend$handler$export$export_repo_as_zip_BANG_(repo){
var files = frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$1(repo);
var vec__50524 = frontend.util.get_git_owner_and_repo(repo);
var owner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50524,(0),null);
var repo_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50524,(1),null);
var repo_name__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo_name)].join('');
if(cljs.core.seq(files)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zip.make_zip(repo_name__$1,files,repo),(function (zipfile){
return promesa.protocols._promise((function (){var temp__5720__auto__ = goog.dom.getElement("download");
if(cljs.core.truth_(temp__5720__auto__)){
var anchor = temp__5720__auto__;
anchor.setAttribute("href",window.URL.createObjectURL(zipfile));

anchor.setAttribute("download",zipfile.name);

return anchor.click();
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.export$.get_md_file_contents = (function frontend$handler$export$get_md_file_contents(repo){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50527){
var vec__50528 = p__50527;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50528,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50528,(1),null);
var path__$1 = clojure.string.lower_case(path);
return cljs.core.re_find(/\.(?:md|markdown)$/,path__$1);
}),frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1),new cljs.core.Keyword(null,"heading-to-list?","heading-to-list?",2108324466),true], null)));
});
frontend.handler.export$.get_embed_pages_from_ast = (function frontend$handler$export$get_embed_pages_from_ast(ast){
var result = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var seq__50532_50846 = cljs.core.seq(ast);
var chunk__50533_50847 = null;
var count__50534_50848 = (0);
var i__50535_50849 = (0);
while(true){
if((i__50535_50849 < count__50534_50848)){
var item_50850 = chunk__50533_50847.cljs$core$IIndexed$_nth$arity$2(null,i__50535_50849);
clojure.walk.prewalk(((function (seq__50532_50846,chunk__50533_50847,count__50534_50848,i__50535_50849,item_50850,result){
return (function (i){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.vector_QMARK_(i);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__50546 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__50546 == null)){
return null;
} else {
return clojure.string.lower_case(G__50546);
}
})());
if(and__5041__auto____$2){
var and__5041__auto____$3 = (function (){var G__50547 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__50547__$1 = (((G__50547 == null))?null:cljs.core.first(G__50547));
if((G__50547__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__50547__$1,"[[");
}
})();
if(cljs.core.truth_(and__5041__auto____$3)){
var G__50548 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__50548__$1 = (((G__50548 == null))?null:cljs.core.first(G__50548));
if((G__50548__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__50548__$1,"]]");
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var page_ref = cljs.core.first(arguments$);
var page_name = clojure.string.lower_case(((function (seq__50532_50846,chunk__50533_50847,count__50534_50848,i__50535_50849,arguments$,page_ref,item_50850,result){
return (function (p1__50531_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__50531_SHARP_,(0),(cljs.core.count(p1__50531_SHARP_) - (2)));
});})(seq__50532_50846,chunk__50533_50847,count__50534_50848,i__50535_50849,arguments$,page_ref,item_50850,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(page_ref,(2))));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,page_name);

return i;
} else {
return i;

}
});})(seq__50532_50846,chunk__50533_50847,count__50534_50848,i__50535_50849,item_50850,result))
,item_50850);


var G__50855 = seq__50532_50846;
var G__50856 = chunk__50533_50847;
var G__50857 = count__50534_50848;
var G__50858 = (i__50535_50849 + (1));
seq__50532_50846 = G__50855;
chunk__50533_50847 = G__50856;
count__50534_50848 = G__50857;
i__50535_50849 = G__50858;
continue;
} else {
var temp__5720__auto___50859 = cljs.core.seq(seq__50532_50846);
if(temp__5720__auto___50859){
var seq__50532_50860__$1 = temp__5720__auto___50859;
if(cljs.core.chunked_seq_QMARK_(seq__50532_50860__$1)){
var c__5565__auto___50861 = cljs.core.chunk_first(seq__50532_50860__$1);
var G__50862 = cljs.core.chunk_rest(seq__50532_50860__$1);
var G__50863 = c__5565__auto___50861;
var G__50864 = cljs.core.count(c__5565__auto___50861);
var G__50865 = (0);
seq__50532_50846 = G__50862;
chunk__50533_50847 = G__50863;
count__50534_50848 = G__50864;
i__50535_50849 = G__50865;
continue;
} else {
var item_50869 = cljs.core.first(seq__50532_50860__$1);
clojure.walk.prewalk(((function (seq__50532_50846,chunk__50533_50847,count__50534_50848,i__50535_50849,item_50869,seq__50532_50860__$1,temp__5720__auto___50859,result){
return (function (i){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.vector_QMARK_(i);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__50549 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__50549 == null)){
return null;
} else {
return clojure.string.lower_case(G__50549);
}
})());
if(and__5041__auto____$2){
var and__5041__auto____$3 = (function (){var G__50550 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__50550__$1 = (((G__50550 == null))?null:cljs.core.first(G__50550));
if((G__50550__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__50550__$1,"[[");
}
})();
if(cljs.core.truth_(and__5041__auto____$3)){
var G__50553 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__50553__$1 = (((G__50553 == null))?null:cljs.core.first(G__50553));
if((G__50553__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__50553__$1,"]]");
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var page_ref = cljs.core.first(arguments$);
var page_name = clojure.string.lower_case(((function (seq__50532_50846,chunk__50533_50847,count__50534_50848,i__50535_50849,arguments$,page_ref,item_50869,seq__50532_50860__$1,temp__5720__auto___50859,result){
return (function (p1__50531_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__50531_SHARP_,(0),(cljs.core.count(p1__50531_SHARP_) - (2)));
});})(seq__50532_50846,chunk__50533_50847,count__50534_50848,i__50535_50849,arguments$,page_ref,item_50869,seq__50532_50860__$1,temp__5720__auto___50859,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(page_ref,(2))));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,page_name);

return i;
} else {
return i;

}
});})(seq__50532_50846,chunk__50533_50847,count__50534_50848,i__50535_50849,item_50869,seq__50532_50860__$1,temp__5720__auto___50859,result))
,item_50869);


var G__50874 = cljs.core.next(seq__50532_50860__$1);
var G__50875 = null;
var G__50876 = (0);
var G__50877 = (0);
seq__50532_50846 = G__50874;
chunk__50533_50847 = G__50875;
count__50534_50848 = G__50876;
i__50535_50849 = G__50877;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_(result);
});
frontend.handler.export$.get_embed_blocks_from_ast = (function frontend$handler$export$get_embed_blocks_from_ast(ast){
var result = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var seq__50560_50880 = cljs.core.seq(ast);
var chunk__50561_50881 = null;
var count__50562_50882 = (0);
var i__50563_50883 = (0);
while(true){
if((i__50563_50883 < count__50562_50882)){
var item_50886 = chunk__50561_50881.cljs$core$IIndexed$_nth$arity$2(null,i__50563_50883);
clojure.walk.prewalk(((function (seq__50560_50880,chunk__50561_50881,count__50562_50882,i__50563_50883,item_50886,result){
return (function (i){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.vector_QMARK_(i);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__50575 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__50575 == null)){
return null;
} else {
return clojure.string.lower_case(G__50575);
}
})());
if(and__5041__auto____$2){
var and__5041__auto____$3 = (function (){var G__50577 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__50577__$1 = (((G__50577 == null))?null:cljs.core.first(G__50577));
if((G__50577__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__50577__$1,"((");
}
})();
if(cljs.core.truth_(and__5041__auto____$3)){
var G__50578 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__50578__$1 = (((G__50578 == null))?null:cljs.core.first(G__50578));
if((G__50578__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__50578__$1,"))");
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var block_ref = cljs.core.first(arguments$);
var block_uuid = ((function (seq__50560_50880,chunk__50561_50881,count__50562_50882,i__50563_50883,arguments$,block_ref,item_50886,result){
return (function (p1__50557_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__50557_SHARP_,(0),(cljs.core.count(p1__50557_SHARP_) - (2)));
});})(seq__50560_50880,chunk__50561_50881,count__50562_50882,i__50563_50883,arguments$,block_ref,item_50886,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(block_ref,(2)));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__50560_50880,chunk__50561_50881,count__50562_50882,i__50563_50883,item_50886,result))
,item_50886);


var G__50908 = seq__50560_50880;
var G__50909 = chunk__50561_50881;
var G__50910 = count__50562_50882;
var G__50911 = (i__50563_50883 + (1));
seq__50560_50880 = G__50908;
chunk__50561_50881 = G__50909;
count__50562_50882 = G__50910;
i__50563_50883 = G__50911;
continue;
} else {
var temp__5720__auto___50913 = cljs.core.seq(seq__50560_50880);
if(temp__5720__auto___50913){
var seq__50560_50914__$1 = temp__5720__auto___50913;
if(cljs.core.chunked_seq_QMARK_(seq__50560_50914__$1)){
var c__5565__auto___50922 = cljs.core.chunk_first(seq__50560_50914__$1);
var G__50923 = cljs.core.chunk_rest(seq__50560_50914__$1);
var G__50924 = c__5565__auto___50922;
var G__50925 = cljs.core.count(c__5565__auto___50922);
var G__50926 = (0);
seq__50560_50880 = G__50923;
chunk__50561_50881 = G__50924;
count__50562_50882 = G__50925;
i__50563_50883 = G__50926;
continue;
} else {
var item_50928 = cljs.core.first(seq__50560_50914__$1);
clojure.walk.prewalk(((function (seq__50560_50880,chunk__50561_50881,count__50562_50882,i__50563_50883,item_50928,seq__50560_50914__$1,temp__5720__auto___50913,result){
return (function (i){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.vector_QMARK_(i);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__50585 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__50585 == null)){
return null;
} else {
return clojure.string.lower_case(G__50585);
}
})());
if(and__5041__auto____$2){
var and__5041__auto____$3 = (function (){var G__50586 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__50586__$1 = (((G__50586 == null))?null:cljs.core.first(G__50586));
if((G__50586__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__50586__$1,"((");
}
})();
if(cljs.core.truth_(and__5041__auto____$3)){
var G__50587 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__50587__$1 = (((G__50587 == null))?null:cljs.core.first(G__50587));
if((G__50587__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__50587__$1,"))");
}
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var block_ref = cljs.core.first(arguments$);
var block_uuid = ((function (seq__50560_50880,chunk__50561_50881,count__50562_50882,i__50563_50883,arguments$,block_ref,item_50928,seq__50560_50914__$1,temp__5720__auto___50913,result){
return (function (p1__50557_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__50557_SHARP_,(0),(cljs.core.count(p1__50557_SHARP_) - (2)));
});})(seq__50560_50880,chunk__50561_50881,count__50562_50882,i__50563_50883,arguments$,block_ref,item_50928,seq__50560_50914__$1,temp__5720__auto___50913,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(block_ref,(2)));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__50560_50880,chunk__50561_50881,count__50562_50882,i__50563_50883,item_50928,seq__50560_50914__$1,temp__5720__auto___50913,result))
,item_50928);


var G__50932 = cljs.core.next(seq__50560_50914__$1);
var G__50933 = null;
var G__50934 = (0);
var G__50935 = (0);
seq__50560_50880 = G__50932;
chunk__50561_50881 = G__50933;
count__50562_50882 = G__50934;
i__50563_50883 = G__50935;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_(result);
});
frontend.handler.export$.get_block_refs_from_ast = (function frontend$handler$export$get_block_refs_from_ast(ast){
var result = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var seq__50588_50939 = cljs.core.seq(ast);
var chunk__50589_50940 = null;
var count__50590_50941 = (0);
var i__50591_50942 = (0);
while(true){
if((i__50591_50942 < count__50590_50941)){
var item_50943 = chunk__50589_50940.cljs$core$IIndexed$_nth$arity$2(null,i__50591_50942);
clojure.walk.prewalk(((function (seq__50588_50939,chunk__50589_50940,count__50590_50941,i__50591_50942,item_50943,result){
return (function (i){
if(((cljs.core.vector_QMARK_(i)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_ref",cljs.core.first(i))) && ((!((cljs.core.second(i) == null)))))))){
var block_uuid = cljs.core.second(i);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__50588_50939,chunk__50589_50940,count__50590_50941,i__50591_50942,item_50943,result))
,item_50943);


var G__50948 = seq__50588_50939;
var G__50949 = chunk__50589_50940;
var G__50950 = count__50590_50941;
var G__50951 = (i__50591_50942 + (1));
seq__50588_50939 = G__50948;
chunk__50589_50940 = G__50949;
count__50590_50941 = G__50950;
i__50591_50942 = G__50951;
continue;
} else {
var temp__5720__auto___50955 = cljs.core.seq(seq__50588_50939);
if(temp__5720__auto___50955){
var seq__50588_50956__$1 = temp__5720__auto___50955;
if(cljs.core.chunked_seq_QMARK_(seq__50588_50956__$1)){
var c__5565__auto___50957 = cljs.core.chunk_first(seq__50588_50956__$1);
var G__50958 = cljs.core.chunk_rest(seq__50588_50956__$1);
var G__50959 = c__5565__auto___50957;
var G__50960 = cljs.core.count(c__5565__auto___50957);
var G__50961 = (0);
seq__50588_50939 = G__50958;
chunk__50589_50940 = G__50959;
count__50590_50941 = G__50960;
i__50591_50942 = G__50961;
continue;
} else {
var item_50962 = cljs.core.first(seq__50588_50956__$1);
clojure.walk.prewalk(((function (seq__50588_50939,chunk__50589_50940,count__50590_50941,i__50591_50942,item_50962,seq__50588_50956__$1,temp__5720__auto___50955,result){
return (function (i){
if(((cljs.core.vector_QMARK_(i)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_ref",cljs.core.first(i))) && ((!((cljs.core.second(i) == null)))))))){
var block_uuid = cljs.core.second(i);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__50588_50939,chunk__50589_50940,count__50590_50941,i__50591_50942,item_50962,seq__50588_50956__$1,temp__5720__auto___50955,result))
,item_50962);


var G__50964 = cljs.core.next(seq__50588_50956__$1);
var G__50965 = null;
var G__50966 = (0);
var G__50967 = (0);
seq__50588_50939 = G__50964;
chunk__50589_50940 = G__50965;
count__50590_50941 = G__50966;
i__50591_50942 = G__50967;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_(result);
});
frontend.handler.export$.get_block_page_AMPERSAND_block_refs = (function frontend$handler$export$get_block_page_AMPERSAND_block_refs(repo,block_uuid,embed_pages,embed_blocks,block_refs){
var block = (function (){var G__50600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(block_uuid)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__50600) : frontend.db.entity.call(null,G__50600));
})();
var block_content = frontend.handler.export$.get_blocks_contents(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block);
var ast = frontend.format.mldoc.__GT_edn(block_content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var embed_pages_new = frontend.handler.export$.get_embed_pages_from_ast(ast);
var embed_blocks_new = frontend.handler.export$.get_embed_blocks_from_ast(ast);
var block_refs_new = frontend.handler.export$.get_block_refs_from_ast(ast);
var embed_pages_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(embed_pages_new,embed_pages);
var embed_blocks_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(embed_blocks_new,embed_blocks);
var block_refs_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(block_refs_new,block_refs);
var embed_pages_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_pages_new,embed_pages);
var embed_blocks_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks_new,embed_blocks);
var block_refs_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(block_refs_new,block_refs);
var vec__50594 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50592_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__50592_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page_name){
var map__50602 = (frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5 ? frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5(repo,page_name,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_) : frontend.handler.export$.get_page_page_AMPERSAND_block_refs.call(null,repo,page_name,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_));
var map__50602__$1 = cljs.core.__destructure_map(map__50602);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50602__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50602__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50602__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),embed_pages_diff)));
var embed_pages_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50594,(0),null);
var embed_blocks_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50594,(1),null);
var block_refs_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50594,(2),null);
var vec__50597 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50593_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__50593_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_uuid__$1){
var map__50606 = (frontend.handler.export$.get_block_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5 ? frontend.handler.export$.get_block_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5(repo,block_uuid__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_) : frontend.handler.export$.get_block_page_AMPERSAND_block_refs.call(null,repo,block_uuid__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_));
var map__50606__$1 = cljs.core.__destructure_map(map__50606);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50606__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50606__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50606__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks_diff,block_refs_diff))));
var embed_pages_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50597,(0),null);
var embed_blocks_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50597,(1),null);
var block_refs_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50597,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_pages_1,embed_pages_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_pages_STAR_], 0)),new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_blocks_1,embed_blocks_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_blocks_STAR_], 0)),new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(block_refs_1,block_refs_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_refs_STAR_], 0))], null);
});
frontend.handler.export$.get_blocks_page_AMPERSAND_block_refs = (function frontend$handler$export$get_blocks_page_AMPERSAND_block_refs(repo,block_uuids,embed_pages,embed_blocks,block_refs){
var vec__50614 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50619,block_uuid){
var vec__50620 = p__50619;
var embed_pages__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50620,(0),null);
var embed_blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50620,(1),null);
var block_refs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50620,(2),null);
var result = frontend.handler.export$.get_block_page_AMPERSAND_block_refs(repo,block_uuid,embed_pages__$1,embed_blocks__$1,block_refs__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"block-refs","block-refs",1507119654).cljs$core$IFn$_invoke$arity$1(result)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages,embed_blocks,block_refs], null),block_uuids);
var embed_pages__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50614,(0),null);
var embed_blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50614,(1),null);
var block_refs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50614,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876),embed_pages__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334),embed_blocks__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),block_refs__$1], null);
});
frontend.handler.export$.get_page_page_AMPERSAND_block_refs = (function frontend$handler$export$get_page_page_AMPERSAND_block_refs(repo,page_name,embed_pages,embed_blocks,block_refs){
var page_name_STAR_ = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var page_content = frontend.handler.export$.get_page_content(repo,page_name_STAR_);
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1((function (){var G__50638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name_STAR_], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__50638) : frontend.db.entity.call(null,G__50638));
})());
var ast = frontend.format.mldoc.__GT_edn(page_content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
var embed_pages_new = frontend.handler.export$.get_embed_pages_from_ast(ast);
var embed_blocks_new = frontend.handler.export$.get_embed_blocks_from_ast(ast);
var block_refs_new = frontend.handler.export$.get_block_refs_from_ast(ast);
var embed_pages_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(embed_pages_new,embed_pages);
var embed_blocks_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(embed_blocks_new,embed_blocks);
var block_refs_diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(block_refs_new,block_refs);
var embed_pages_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_pages_new,embed_pages);
var embed_blocks_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks_new,embed_blocks);
var block_refs_STAR_ = clojure.set.union.cljs$core$IFn$_invoke$arity$2(block_refs_new,block_refs);
var vec__50632 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50624_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__50624_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page_name__$1){
var map__50641 = (frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5 ? frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5(repo,page_name__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_) : frontend.handler.export$.get_page_page_AMPERSAND_block_refs.call(null,repo,page_name__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_));
var map__50641__$1 = cljs.core.__destructure_map(map__50641);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50641__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50641__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50641__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),embed_pages_diff)));
var embed_pages_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50632,(0),null);
var embed_blocks_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50632,(1),null);
var block_refs_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50632,(2),null);
var vec__50635 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50627_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__50627_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_uuid){
var map__50654 = frontend.handler.export$.get_block_page_AMPERSAND_block_refs(repo,block_uuid,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_);
var map__50654__$1 = cljs.core.__destructure_map(map__50654);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50654__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50654__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50654__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks_diff,block_refs_diff))));
var embed_pages_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50635,(0),null);
var embed_blocks_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50635,(1),null);
var block_refs_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50635,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_pages_1,embed_pages_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_pages_STAR_], 0)),new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_blocks_1,embed_blocks_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_blocks_STAR_], 0)),new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(block_refs_1,block_refs_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_refs_STAR_], 0))], null);
});
frontend.handler.export$.get_export_references = (function frontend$handler$export$get_export_references(repo,p__50673){
var map__50674 = p__50673;
var map__50674__$1 = cljs.core.__destructure_map(map__50674);
var embed_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50674__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50674__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50674__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
var embed_blocks_and_contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
var id_s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
var id__$1 = cljs.core.uuid(id_s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.get_blocks_contents(repo,id__$1),frontend.handler.export$.get_block_content((function (){var G__50675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__50675) : frontend.db.pull.call(null,G__50675));
})())], null)], null);
}),clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks,block_refs));
var embed_pages_and_contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name,frontend.handler.export$.get_page_content(repo,page_name)], null);
}),embed_pages);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"embed_blocks","embed_blocks",785928846),embed_blocks_and_contents,new cljs.core.Keyword(null,"embed_pages","embed_pages",94877387),embed_pages_and_contents], null);
});
frontend.handler.export$.export_files_as_markdown = (function frontend$handler$export$export_files_as_markdown(repo,files,heading_to_list_QMARK_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50677){
var map__50678 = p__50677;
var map__50678__$1 = cljs.core.__destructure_map(map__50678);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,new cljs.core.Keyword(null,"content","content",15833224));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
if(cljs.core.truth_(cljs.core.first(names))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,frontend.format.mldoc_record.frontend$format$protocol$Format$exportMarkdown$arity$4(null,content,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-heading-to-list?","export-heading-to-list?",-596132321),heading_to_list_QMARK_], null)),JSON.stringify(cljs.core.clj__GT_js(frontend.handler.export$.get_export_references(repo,frontend.handler.export$.get_page_page_AMPERSAND_block_refs(repo,cljs.core.first(names),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY)))))], null);
} else {
return null;
}
}),files);
});
frontend.handler.export$.export_files_as_opml = (function frontend$handler$export$export_files_as_opml(repo,files){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50679){
var map__50680 = p__50679;
var map__50680__$1 = cljs.core.__destructure_map(map__50680);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50680__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50680__$1,new cljs.core.Keyword(null,"content","content",15833224));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50680__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50680__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
if(cljs.core.truth_(cljs.core.first(names))){
var path__$1 = clojure.string.replace(clojure.string.lower_case(path),/(.+)\.(md|markdown|org)/,"$1.opml");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path__$1,frontend.format.mldoc_record.frontend$format$protocol$Format$exportOPML$arity$5(null,content,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(format),cljs.core.first(names),JSON.stringify(cljs.core.clj__GT_js(frontend.handler.export$.get_export_references(repo,frontend.handler.export$.get_page_page_AMPERSAND_block_refs(repo,cljs.core.first(names),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY)))))], null);
} else {
return null;
}
}),files);
});
frontend.handler.export$.export_blocks_as_aux = (function frontend$handler$export$export_blocks_as_aux(repo,root_block_uuids,auxf){
if((cljs.core.count(root_block_uuids) > (0))){
} else {
throw (new Error("Assert failed: (> (count root-block-uuids) 0)"));
}

var f = (function (p1__50685_SHARP_){
return frontend.handler.export$.get_export_references(repo,frontend.handler.export$.get_blocks_page_AMPERSAND_block_refs(repo,p1__50685_SHARP_,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY));
});
var root_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50686_SHARP_){
var G__50694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__50686_SHARP_], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__50694) : frontend.db.entity.call(null,G__50694));
}),root_block_uuids);
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__50687_SHARP_){
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(repo,p1__50687_SHARP_) : frontend.db.get_block_and_children.call(null,repo,p1__50687_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root_block_uuids], 0));
var refs = f(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50688_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__50688_SHARP_));
}),blocks));
var contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50689_SHARP_){
return frontend.handler.export$.get_blocks_contents(repo,p1__50689_SHARP_);
}),root_block_uuids);
var content = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim_newline,contents));
var format = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(cljs.core.first(root_blocks));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
return (auxf.cljs$core$IFn$_invoke$arity$3 ? auxf.cljs$core$IFn$_invoke$arity$3(content,format,refs) : auxf.call(null,content,format,refs));
});
frontend.handler.export$.export_blocks_as_opml = (function frontend$handler$export$export_blocks_as_opml(repo,root_block_uuids){
return frontend.handler.export$.export_blocks_as_aux(repo,root_block_uuids,(function (p1__50699_SHARP_,p2__50700_SHARP_,p3__50701_SHARP_){
return frontend.format.mldoc_record.frontend$format$protocol$Format$exportOPML$arity$5(null,p1__50699_SHARP_,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(p2__50700_SHARP_),"untitled",JSON.stringify(cljs.core.clj__GT_js(p3__50701_SHARP_)));
}));
});
frontend.handler.export$.export_blocks_as_markdown = (function frontend$handler$export$export_blocks_as_markdown(repo,root_block_uuids,indent_style,remove_options){
return frontend.handler.export$.export_blocks_as_aux(repo,root_block_uuids,(function (p1__50702_SHARP_,p2__50703_SHARP_,p3__50704_SHARP_){
return frontend.format.mldoc_record.frontend$format$protocol$Format$exportMarkdown$arity$4(null,p1__50702_SHARP_,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$2(p2__50703_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"export-md-indent-style","export-md-indent-style",481813710),indent_style,new cljs.core.Keyword(null,"export-md-remove-options","export-md-remove-options",-1015252352),remove_options], null)),JSON.stringify(cljs.core.clj__GT_js(p3__50704_SHARP_)));
}));
});
frontend.handler.export$.export_blocks_as_html = (function frontend$handler$export$export_blocks_as_html(repo,root_block_uuids){
return frontend.handler.export$.export_blocks_as_aux(repo,root_block_uuids,(function (p1__50706_SHARP_,p2__50707_SHARP_,p3__50708_SHARP_){
return frontend.format.mldoc_record.frontend$format$protocol$Format$toHtml$arity$4(null,p1__50706_SHARP_,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(p2__50707_SHARP_),JSON.stringify(cljs.core.clj__GT_js(p3__50708_SHARP_)));
}));
});
frontend.handler.export$.get_file_contents_with_suffix = (function frontend$handler$export$get_file_contents_with_suffix(repo){
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var md_files = frontend.handler.export$.get_md_file_contents(repo);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50718){
var vec__50720 = p__50718;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50720,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50720,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"names","names",-1943074658),(function (){var G__50723 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Symbol(null,"?n2","?n2",1059960511,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?n2","?n2",1059960511,null)], null)], null);
var G__50724 = db;
var G__50725 = path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__50723,G__50724,G__50725) : datascript.core.q.call(null,G__50723,G__50724,G__50725));
})(),new cljs.core.Keyword(null,"format","format",-1306924766),logseq.graph_parser.util.get_format(path)], null);
}),md_files);
});
frontend.handler.export$.export_repo_as_markdown_BANG_ = (function frontend$handler$export$export_repo_as_markdown_BANG_(repo){
var temp__5720__auto__ = frontend.handler.export$.get_file_contents_with_suffix(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var files = temp__5720__auto__;
var heading_to_list_QMARK_ = frontend.state.export_heading_to_list_QMARK_();
var files__$1 = frontend.handler.export$.export_files_as_markdown(repo,files,heading_to_list_QMARK_);
var zip_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"_markdown_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot(frontend.util.time_ms(),(1000)))].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zip.make_zip(zip_file_name,files__$1,repo),(function (zipfile){
return promesa.protocols._promise((function (){var temp__5720__auto____$1 = goog.dom.getElement("export-as-markdown");
if(cljs.core.truth_(temp__5720__auto____$1)){
var anchor = temp__5720__auto____$1;
anchor.setAttribute("href",window.URL.createObjectURL(zipfile));

anchor.setAttribute("download",zipfile.name);

return anchor.click();
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.export$.export_repo_as_opml_BANG_ = (function frontend$handler$export$export_repo_as_opml_BANG_(repo){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo__$1 = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.handler.export$.get_file_contents_with_suffix(repo__$1);
if(cljs.core.truth_(temp__5720__auto____$1)){
var files = temp__5720__auto____$1;
var files__$1 = frontend.handler.export$.export_files_as_opml(repo__$1,files);
var zip_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo__$1),"_opml_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot(frontend.util.time_ms(),(1000)))].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zip.make_zip(zip_file_name,files__$1,repo__$1),(function (zipfile){
return promesa.protocols._promise((function (){var temp__5720__auto____$2 = goog.dom.getElement("export-as-opml");
if(cljs.core.truth_(temp__5720__auto____$2)){
var anchor = temp__5720__auto____$2;
anchor.setAttribute("href",window.URL.createObjectURL(zipfile));

anchor.setAttribute("download",zipfile.name);

return anchor.click();
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.export$.dissoc_properties = (function frontend$handler$export$dissoc_properties(m,ks){
if(cljs.core.truth_(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("block","properties","block/properties",708347145),(function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,v,ks);
}));
} else {
return m;
}
});
frontend.handler.export$.nested_select_keys = (function frontend$handler$export$nested_select_keys(keyseq,vec_tree){
return clojure.walk.postwalk((function (x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552))))){
return cljs.core.select_keys(frontend.handler.export$.dissoc_properties(clojure.set.rename_keys(x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","id","block/id",-1461684825),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Keyword("block","page-name","block/page-name",780489999)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null)),keyseq);
} else {
return x;

}
}),vec_tree);
});
frontend.handler.export$.blocks = (function frontend$handler$export$blocks(db){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(1),new cljs.core.Keyword(null,"blocks","blocks",-610462153),frontend.handler.export$.nested_select_keys(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","id","block/id",-1461684825),new cljs.core.Keyword("block","page-name","block/page-name",780489999),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","heading-level","block/heading-level",661361785),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","content","block/content",-161885195)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50756){
var vec__50757 = p__50756;
var map__50760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50757,(0),null);
var map__50760__$1 = cljs.core.__destructure_map(map__50760);
var page = map__50760__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50760__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var blocks = (function (){var G__50761 = frontend.state.get_current_repo();
var G__50762 = name;
var G__50763 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform?","transform?",-2042672609),false], null);
return (frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(G__50761,G__50762,G__50763) : frontend.db.get_page_blocks_no_cache.call(null,G__50761,G__50762,G__50763));
})();
var blocks_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
if(cljs.core.seq(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","content","block/content",-161885195),(function (content){
return frontend.util.property.remove_properties(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(b),content);
}));
} else {
return b;
}
}),blocks);
var children = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks_SINGLEQUOTE_,name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","children","block/children",-1040716209),children);
}),(function (){var G__50769 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","file","block/file",183171933)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null);
var G__50770 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__50769,G__50770) : datascript.core.q.call(null,G__50769,G__50770));
})()))], null);
});
frontend.handler.export$.file_name = (function frontend$handler$export$file_name(repo,extension){
return [[clojure.string.replace(clojure.string.replace(repo,frontend.config.local_db_prefix,""),/^\/+/,""),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot(frontend.util.time_ms(),(1000)))].join(''),".",clojure.string.lower_case(cljs.core.name(extension))].join('');
});
frontend.handler.export$.export_repo_as_edn_str = (function frontend$handler$export$export_repo_as_edn_str(repo){
var temp__5720__auto__ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var sb = (new goog.string.StringBuffer());
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.blocks(db),(new cljs.core.StringBufferWriter(sb)));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
});
frontend.handler.export$.export_repo_as_edn_v2_BANG_ = (function frontend$handler$export$export_repo_as_edn_v2_BANG_(repo){
var temp__5720__auto__ = (function (){var G__50784 = frontend.handler.export$.export_repo_as_edn_str(repo);
var G__50784__$1 = (((G__50784 == null))?null:encodeURIComponent(G__50784));
if((G__50784__$1 == null)){
return null;
} else {
return ["data:text/edn;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50784__$1)].join('');
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var data_str = temp__5720__auto__;
var temp__5720__auto____$1 = goog.dom.getElement("download-as-edn-v2");
if(cljs.core.truth_(temp__5720__auto____$1)){
var anchor = temp__5720__auto____$1;
anchor.setAttribute("href",data_str);

anchor.setAttribute("download",frontend.handler.export$.file_name(repo,new cljs.core.Keyword(null,"edn","edn",1317840885)));

return anchor.click();
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.export$.nested_update_id = (function frontend$handler$export$nested_update_id(vec_tree){
return clojure.walk.postwalk((function (x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword("block","id","block/id",-1461684825))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword("block","id","block/id",-1461684825),cljs.core.str);
} else {
return x;
}
}),vec_tree);
});
frontend.handler.export$.export_repo_as_json_v2_BANG_ = (function frontend$handler$export$export_repo_as_json_v2_BANG_(repo){
var temp__5720__auto__ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var json_str = JSON.stringify(cljs.core.clj__GT_js(frontend.handler.export$.nested_update_id(frontend.handler.export$.blocks(db))));
var data_str = ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(json_str))].join('');
var temp__5720__auto____$1 = goog.dom.getElement("download-as-json-v2");
if(cljs.core.truth_(temp__5720__auto____$1)){
var anchor = temp__5720__auto____$1;
anchor.setAttribute("href",data_str);

anchor.setAttribute("download",frontend.handler.export$.file_name(repo,new cljs.core.Keyword(null,"json","json",1279968570)));

return anchor.click();
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.export$.roam_json = (function frontend$handler$export$roam_json(db){
return frontend.external.roam_export.traverse(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","title","page/title",628894782),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","children","block/children",-1040716209)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50792){
var vec__50793 = p__50792;
var map__50796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50793,(0),null);
var map__50796__$1 = cljs.core.__destructure_map(map__50796);
var page = map__50796__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50796__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","children","block/children",-1040716209),frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((function (){var G__50797 = frontend.state.get_current_repo();
var G__50798 = name;
var G__50799 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform?","transform?",-2042672609),false], null);
return (frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(G__50797,G__50798,G__50799) : frontend.db.get_page_blocks_no_cache.call(null,G__50797,G__50798,G__50799));
})(),name));
}),(function (){var G__50800 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","file","block/file",183171933)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null);
var G__50801 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__50800,G__50801) : datascript.core.q.call(null,G__50800,G__50801));
})()));
});
frontend.handler.export$.export_repo_as_roam_json_BANG_ = (function frontend$handler$export$export_repo_as_roam_json_BANG_(repo){
var temp__5720__auto__ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var json_str = JSON.stringify(cljs.core.clj__GT_js(frontend.handler.export$.roam_json(db)));
var data_str = ["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(json_str))].join('');
var temp__5720__auto____$1 = goog.dom.getElement("download-as-roam-json");
if(cljs.core.truth_(temp__5720__auto____$1)){
var anchor = temp__5720__auto____$1;
anchor.setAttribute("href",data_str);

anchor.setAttribute("download",frontend.handler.export$.file_name([cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"_roam"].join(''),new cljs.core.Keyword(null,"json","json",1279968570)));

return anchor.click();
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.export.js.map
