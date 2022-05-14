goog.provide('frontend.handler.export$');
frontend.handler.export$.get_page_content = (function frontend$handler$export$get_page_content(repo,page){
return frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$2(repo,page) : frontend.db.get_page_blocks_no_cache.call(null,repo,page)),page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1)], null));
});
frontend.handler.export$.get_file_content = (function frontend$handler$export$get_file_content(repo,file_path){
var temp__5718__auto__ = cljs.core.ffirst((function (){var G__109497 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?pn","?pn",704318294,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?pn","?pn",704318294,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null)], null);
var G__109498 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var G__109499 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__109497,G__109498,G__109499) : datascript.core.q.call(null,G__109497,G__109498,G__109499));
})());
if(cljs.core.truth_(temp__5718__auto__)){
var page_name = temp__5718__auto__;
return frontend.handler.export$.get_page_content(repo,page_name);
} else {
return cljs.core.ffirst((function (){var G__109500 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?path","?path",385070032,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?path","?path",385070032,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","content","file/content",12680964),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null)], null);
var G__109501 = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var G__109502 = file_path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__109500,G__109501,G__109502) : datascript.core.q.call(null,G__109500,G__109501,G__109502));
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
var vec__109503 = ((frontend.state.all_pages_public_QMARK_())?(frontend.db.clean_export_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.clean_export_BANG_.cljs$core$IFn$_invoke$arity$1(db) : frontend.db.clean_export_BANG_.call(null,db)):(frontend.db.filter_only_public_pages_and_blocks.cljs$core$IFn$_invoke$arity$1 ? frontend.db.filter_only_public_pages_and_blocks.cljs$core$IFn$_invoke$arity$1(db) : frontend.db.filter_only_public_pages_and_blocks.call(null,db)));
var db__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109503,(0),null);
var asset_filenames = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109503,(1),null);
var db_str = (frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1 ? frontend.db.db__GT_string.cljs$core$IFn$_invoke$arity$1(db__$1) : frontend.db.db__GT_string.call(null,db__$1));
var state = cljs.core.select_keys(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),new cljs.core.Keyword("ui","show-recent?","ui/show-recent?",927656089),new cljs.core.Keyword(null,"config","config",994861415)], null));
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"config","config",994861415),(function (config){
return new cljs.core.PersistentArrayMap(null, 1, ["local",cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,repo)], null);
}));
var raw_html_str = frontend.publishing.html.publishing_html(db_str,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state__$1], 0)));
var html_str = ["data:text/html;charset=UTF-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(raw_html_str))].join('');
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return window.apis.exportPublishAssets(raw_html_str,frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0(),frontend.config.get_repo_dir(repo),cljs.core.clj__GT_js(asset_filenames),frontend.util.mocked_open_dir_path());
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
var G__109507 = arguments.length;
switch (G__109507) {
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__109508){
var vec__109509 = p__109508;
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109509,(0),null);
var file_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109509,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_path,frontend.modules.file.core.tree__GT_file_content(frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_blocks_no_cache.call(null,page_name)),page_name),file_opts)], null);
}),(function (){var G__109512 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Symbol(null,"?fp","?fp",-1936386163,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?f","?f",-1121766265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?f","?f",-1121766265,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?fp","?fp",-1936386163,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)], null)], null);
var G__109513 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__109512,G__109513) : datascript.core.q.call(null,G__109512,G__109513));
})());
}));

(frontend.handler.export$.get_file_contents.cljs$lang$maxFixedArity = 2);

frontend.handler.export$.export_repo_as_zip_BANG_ = (function frontend$handler$export$export_repo_as_zip_BANG_(repo){
var files = frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$1(repo);
var vec__109514 = frontend.util.get_git_owner_and_repo(repo);
var owner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109514,(0),null);
var repo_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109514,(1),null);
var repo_name__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(owner),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo_name)].join('');
if(cljs.core.seq(files)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__109517){
var vec__109518 = p__109517;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109518,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109518,(1),null);
var path__$1 = clojure.string.lower_case(path);
return cljs.core.re_find(/\.(?:md|markdown)$/,path__$1);
}),frontend.handler.export$.get_file_contents.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-level","init-level",-1605905283),(1),new cljs.core.Keyword(null,"heading-to-list?","heading-to-list?",2108324466),true], null)));
});
frontend.handler.export$.get_embed_pages_from_ast = (function frontend$handler$export$get_embed_pages_from_ast(ast){
var result = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var seq__109522_109639 = cljs.core.seq(ast);
var chunk__109523_109640 = null;
var count__109524_109641 = (0);
var i__109525_109642 = (0);
while(true){
if((i__109525_109642 < count__109524_109641)){
var item_109643 = chunk__109523_109640.cljs$core$IIndexed$_nth$arity$2(null,i__109525_109642);
clojure.walk.prewalk(((function (seq__109522_109639,chunk__109523_109640,count__109524_109641,i__109525_109642,item_109643,result){
return (function (i){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.vector_QMARK_(i);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__109532 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__109532 == null)){
return null;
} else {
return clojure.string.lower_case(G__109532);
}
})());
if(and__4251__auto____$2){
var and__4251__auto____$3 = (function (){var G__109533 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__109533__$1 = (((G__109533 == null))?null:cljs.core.first(G__109533));
if((G__109533__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__109533__$1,"[[");
}
})();
if(cljs.core.truth_(and__4251__auto____$3)){
var G__109534 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__109534__$1 = (((G__109534 == null))?null:cljs.core.first(G__109534));
if((G__109534__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__109534__$1,"]]");
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var page_ref = cljs.core.first(arguments$);
var page_name = clojure.string.lower_case(((function (seq__109522_109639,chunk__109523_109640,count__109524_109641,i__109525_109642,arguments$,page_ref,item_109643,result){
return (function (p1__109521_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__109521_SHARP_,(0),(cljs.core.count(p1__109521_SHARP_) - (2)));
});})(seq__109522_109639,chunk__109523_109640,count__109524_109641,i__109525_109642,arguments$,page_ref,item_109643,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(page_ref,(2))));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,page_name);

return i;
} else {
return i;

}
});})(seq__109522_109639,chunk__109523_109640,count__109524_109641,i__109525_109642,item_109643,result))
,item_109643);


var G__109644 = seq__109522_109639;
var G__109645 = chunk__109523_109640;
var G__109646 = count__109524_109641;
var G__109647 = (i__109525_109642 + (1));
seq__109522_109639 = G__109644;
chunk__109523_109640 = G__109645;
count__109524_109641 = G__109646;
i__109525_109642 = G__109647;
continue;
} else {
var temp__5720__auto___109648 = cljs.core.seq(seq__109522_109639);
if(temp__5720__auto___109648){
var seq__109522_109649__$1 = temp__5720__auto___109648;
if(cljs.core.chunked_seq_QMARK_(seq__109522_109649__$1)){
var c__4679__auto___109650 = cljs.core.chunk_first(seq__109522_109649__$1);
var G__109651 = cljs.core.chunk_rest(seq__109522_109649__$1);
var G__109652 = c__4679__auto___109650;
var G__109653 = cljs.core.count(c__4679__auto___109650);
var G__109654 = (0);
seq__109522_109639 = G__109651;
chunk__109523_109640 = G__109652;
count__109524_109641 = G__109653;
i__109525_109642 = G__109654;
continue;
} else {
var item_109655 = cljs.core.first(seq__109522_109649__$1);
clojure.walk.prewalk(((function (seq__109522_109639,chunk__109523_109640,count__109524_109641,i__109525_109642,item_109655,seq__109522_109649__$1,temp__5720__auto___109648,result){
return (function (i){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.vector_QMARK_(i);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__109535 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__109535 == null)){
return null;
} else {
return clojure.string.lower_case(G__109535);
}
})());
if(and__4251__auto____$2){
var and__4251__auto____$3 = (function (){var G__109536 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__109536__$1 = (((G__109536 == null))?null:cljs.core.first(G__109536));
if((G__109536__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__109536__$1,"[[");
}
})();
if(cljs.core.truth_(and__4251__auto____$3)){
var G__109537 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__109537__$1 = (((G__109537 == null))?null:cljs.core.first(G__109537));
if((G__109537__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__109537__$1,"]]");
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var page_ref = cljs.core.first(arguments$);
var page_name = clojure.string.lower_case(((function (seq__109522_109639,chunk__109523_109640,count__109524_109641,i__109525_109642,arguments$,page_ref,item_109655,seq__109522_109649__$1,temp__5720__auto___109648,result){
return (function (p1__109521_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__109521_SHARP_,(0),(cljs.core.count(p1__109521_SHARP_) - (2)));
});})(seq__109522_109639,chunk__109523_109640,count__109524_109641,i__109525_109642,arguments$,page_ref,item_109655,seq__109522_109649__$1,temp__5720__auto___109648,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(page_ref,(2))));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,page_name);

return i;
} else {
return i;

}
});})(seq__109522_109639,chunk__109523_109640,count__109524_109641,i__109525_109642,item_109655,seq__109522_109649__$1,temp__5720__auto___109648,result))
,item_109655);


var G__109657 = cljs.core.next(seq__109522_109649__$1);
var G__109658 = null;
var G__109659 = (0);
var G__109660 = (0);
seq__109522_109639 = G__109657;
chunk__109523_109640 = G__109658;
count__109524_109641 = G__109659;
i__109525_109642 = G__109660;
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
var seq__109539_109661 = cljs.core.seq(ast);
var chunk__109540_109662 = null;
var count__109541_109663 = (0);
var i__109542_109664 = (0);
while(true){
if((i__109542_109664 < count__109541_109663)){
var item_109665 = chunk__109540_109662.cljs$core$IIndexed$_nth$arity$2(null,i__109542_109664);
clojure.walk.prewalk(((function (seq__109539_109661,chunk__109540_109662,count__109541_109663,i__109542_109664,item_109665,result){
return (function (i){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.vector_QMARK_(i);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__109549 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__109549 == null)){
return null;
} else {
return clojure.string.lower_case(G__109549);
}
})());
if(and__4251__auto____$2){
var and__4251__auto____$3 = (function (){var G__109550 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__109550__$1 = (((G__109550 == null))?null:cljs.core.first(G__109550));
if((G__109550__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__109550__$1,"((");
}
})();
if(cljs.core.truth_(and__4251__auto____$3)){
var G__109551 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__109551__$1 = (((G__109551 == null))?null:cljs.core.first(G__109551));
if((G__109551__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__109551__$1,"))");
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var block_ref = cljs.core.first(arguments$);
var block_uuid = ((function (seq__109539_109661,chunk__109540_109662,count__109541_109663,i__109542_109664,arguments$,block_ref,item_109665,result){
return (function (p1__109538_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__109538_SHARP_,(0),(cljs.core.count(p1__109538_SHARP_) - (2)));
});})(seq__109539_109661,chunk__109540_109662,count__109541_109663,i__109542_109664,arguments$,block_ref,item_109665,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(block_ref,(2)));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__109539_109661,chunk__109540_109662,count__109541_109663,i__109542_109664,item_109665,result))
,item_109665);


var G__109671 = seq__109539_109661;
var G__109672 = chunk__109540_109662;
var G__109673 = count__109541_109663;
var G__109674 = (i__109542_109664 + (1));
seq__109539_109661 = G__109671;
chunk__109540_109662 = G__109672;
count__109541_109663 = G__109673;
i__109542_109664 = G__109674;
continue;
} else {
var temp__5720__auto___109675 = cljs.core.seq(seq__109539_109661);
if(temp__5720__auto___109675){
var seq__109539_109676__$1 = temp__5720__auto___109675;
if(cljs.core.chunked_seq_QMARK_(seq__109539_109676__$1)){
var c__4679__auto___109677 = cljs.core.chunk_first(seq__109539_109676__$1);
var G__109678 = cljs.core.chunk_rest(seq__109539_109676__$1);
var G__109679 = c__4679__auto___109677;
var G__109680 = cljs.core.count(c__4679__auto___109677);
var G__109681 = (0);
seq__109539_109661 = G__109678;
chunk__109540_109662 = G__109679;
count__109541_109663 = G__109680;
i__109542_109664 = G__109681;
continue;
} else {
var item_109685 = cljs.core.first(seq__109539_109676__$1);
clojure.walk.prewalk(((function (seq__109539_109661,chunk__109540_109662,count__109541_109663,i__109542_109664,item_109685,seq__109539_109676__$1,temp__5720__auto___109675,result){
return (function (i){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.vector_QMARK_(i);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Macro",cljs.core.first(i));
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("embed",(function (){var G__109552 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
if((G__109552 == null)){
return null;
} else {
return clojure.string.lower_case(G__109552);
}
})());
if(and__4251__auto____$2){
var and__4251__auto____$3 = (function (){var G__109553 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__109553__$1 = (((G__109553 == null))?null:cljs.core.first(G__109553));
if((G__109553__$1 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__109553__$1,"((");
}
})();
if(cljs.core.truth_(and__4251__auto____$3)){
var G__109554 = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var G__109554__$1 = (((G__109554 == null))?null:cljs.core.first(G__109554));
if((G__109554__$1 == null)){
return null;
} else {
return clojure.string.ends_with_QMARK_(G__109554__$1,"))");
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var arguments$ = new cljs.core.Keyword(null,"arguments","arguments",-1182834456).cljs$core$IFn$_invoke$arity$1(cljs.core.second(i));
var block_ref = cljs.core.first(arguments$);
var block_uuid = ((function (seq__109539_109661,chunk__109540_109662,count__109541_109663,i__109542_109664,arguments$,block_ref,item_109685,seq__109539_109676__$1,temp__5720__auto___109675,result){
return (function (p1__109538_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__109538_SHARP_,(0),(cljs.core.count(p1__109538_SHARP_) - (2)));
});})(seq__109539_109661,chunk__109540_109662,count__109541_109663,i__109542_109664,arguments$,block_ref,item_109685,seq__109539_109676__$1,temp__5720__auto___109675,result))
(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(block_ref,(2)));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__109539_109661,chunk__109540_109662,count__109541_109663,i__109542_109664,item_109685,seq__109539_109676__$1,temp__5720__auto___109675,result))
,item_109685);


var G__109686 = cljs.core.next(seq__109539_109676__$1);
var G__109687 = null;
var G__109688 = (0);
var G__109689 = (0);
seq__109539_109661 = G__109686;
chunk__109540_109662 = G__109687;
count__109541_109663 = G__109688;
i__109542_109664 = G__109689;
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
var seq__109555_109690 = cljs.core.seq(ast);
var chunk__109556_109691 = null;
var count__109557_109692 = (0);
var i__109558_109693 = (0);
while(true){
if((i__109558_109693 < count__109557_109692)){
var item_109694 = chunk__109556_109691.cljs$core$IIndexed$_nth$arity$2(null,i__109558_109693);
clojure.walk.prewalk(((function (seq__109555_109690,chunk__109556_109691,count__109557_109692,i__109558_109693,item_109694,result){
return (function (i){
if(((cljs.core.vector_QMARK_(i)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_ref",cljs.core.first(i))) && ((!((cljs.core.second(i) == null)))))))){
var block_uuid = cljs.core.second(i);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__109555_109690,chunk__109556_109691,count__109557_109692,i__109558_109693,item_109694,result))
,item_109694);


var G__109698 = seq__109555_109690;
var G__109699 = chunk__109556_109691;
var G__109700 = count__109557_109692;
var G__109701 = (i__109558_109693 + (1));
seq__109555_109690 = G__109698;
chunk__109556_109691 = G__109699;
count__109557_109692 = G__109700;
i__109558_109693 = G__109701;
continue;
} else {
var temp__5720__auto___109702 = cljs.core.seq(seq__109555_109690);
if(temp__5720__auto___109702){
var seq__109555_109703__$1 = temp__5720__auto___109702;
if(cljs.core.chunked_seq_QMARK_(seq__109555_109703__$1)){
var c__4679__auto___109704 = cljs.core.chunk_first(seq__109555_109703__$1);
var G__109705 = cljs.core.chunk_rest(seq__109555_109703__$1);
var G__109706 = c__4679__auto___109704;
var G__109707 = cljs.core.count(c__4679__auto___109704);
var G__109708 = (0);
seq__109555_109690 = G__109705;
chunk__109556_109691 = G__109706;
count__109557_109692 = G__109707;
i__109558_109693 = G__109708;
continue;
} else {
var item_109709 = cljs.core.first(seq__109555_109703__$1);
clojure.walk.prewalk(((function (seq__109555_109690,chunk__109556_109691,count__109557_109692,i__109558_109693,item_109709,seq__109555_109703__$1,temp__5720__auto___109702,result){
return (function (i){
if(((cljs.core.vector_QMARK_(i)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Block_ref",cljs.core.first(i))) && ((!((cljs.core.second(i) == null)))))))){
var block_uuid = cljs.core.second(i);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,block_uuid);

return i;
} else {
return i;

}
});})(seq__109555_109690,chunk__109556_109691,count__109557_109692,i__109558_109693,item_109709,seq__109555_109703__$1,temp__5720__auto___109702,result))
,item_109709);


var G__109710 = cljs.core.next(seq__109555_109703__$1);
var G__109711 = null;
var G__109712 = (0);
var G__109713 = (0);
seq__109555_109690 = G__109710;
chunk__109556_109691 = G__109711;
count__109557_109692 = G__109712;
i__109558_109693 = G__109713;
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
var block = (function (){var G__109567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(block_uuid)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109567) : frontend.db.entity.call(null,G__109567));
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
var vec__109561 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__109559_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__109559_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page_name){
var map__109568 = (frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5 ? frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5(repo,page_name,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_) : frontend.handler.export$.get_page_page_AMPERSAND_block_refs.call(null,repo,page_name,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_));
var map__109568__$1 = cljs.core.__destructure_map(map__109568);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109568__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109568__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109568__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),embed_pages_diff)));
var embed_pages_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109561,(0),null);
var embed_blocks_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109561,(1),null);
var block_refs_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109561,(2),null);
var vec__109564 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__109560_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__109560_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_uuid__$1){
var map__109569 = (frontend.handler.export$.get_block_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5 ? frontend.handler.export$.get_block_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5(repo,block_uuid__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_) : frontend.handler.export$.get_block_page_AMPERSAND_block_refs.call(null,repo,block_uuid__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_));
var map__109569__$1 = cljs.core.__destructure_map(map__109569);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109569__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109569__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109569__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks_diff,block_refs_diff))));
var embed_pages_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109564,(0),null);
var embed_blocks_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109564,(1),null);
var block_refs_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109564,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_pages_1,embed_pages_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_pages_STAR_], 0)),new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_blocks_1,embed_blocks_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_blocks_STAR_], 0)),new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(block_refs_1,block_refs_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_refs_STAR_], 0))], null);
});
frontend.handler.export$.get_blocks_page_AMPERSAND_block_refs = (function frontend$handler$export$get_blocks_page_AMPERSAND_block_refs(repo,block_uuids,embed_pages,embed_blocks,block_refs){
var vec__109570 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__109573,block_uuid){
var vec__109574 = p__109573;
var embed_pages__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109574,(0),null);
var embed_blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109574,(1),null);
var block_refs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109574,(2),null);
var result = frontend.handler.export$.get_block_page_AMPERSAND_block_refs(repo,block_uuid,embed_pages__$1,embed_blocks__$1,block_refs__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"block-refs","block-refs",1507119654).cljs$core$IFn$_invoke$arity$1(result)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages,embed_blocks,block_refs], null),block_uuids);
var embed_pages__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109570,(0),null);
var embed_blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109570,(1),null);
var block_refs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109570,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876),embed_pages__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334),embed_blocks__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),block_refs__$1], null);
});
frontend.handler.export$.get_page_page_AMPERSAND_block_refs = (function frontend$handler$export$get_page_page_AMPERSAND_block_refs(repo,page_name,embed_pages,embed_blocks,block_refs){
var page_name_STAR_ = frontend.util.page_name_sanity_lc(page_name);
var page_content = frontend.handler.export$.get_page_content(repo,page_name_STAR_);
var format = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1((function (){var G__109585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name_STAR_], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109585) : frontend.db.entity.call(null,G__109585));
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
var vec__109579 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__109577_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__109577_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page_name__$1){
var map__109586 = (frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5 ? frontend.handler.export$.get_page_page_AMPERSAND_block_refs.cljs$core$IFn$_invoke$arity$5(repo,page_name__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_) : frontend.handler.export$.get_page_page_AMPERSAND_block_refs.call(null,repo,page_name__$1,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_));
var map__109586__$1 = cljs.core.__destructure_map(map__109586);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109586__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109586__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109586__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),embed_pages_diff)));
var embed_pages_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109579,(0),null);
var embed_blocks_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109579,(1),null);
var block_refs_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109579,(2),null);
var vec__109582 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__109578_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,p1__109578_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_uuid){
var map__109587 = frontend.handler.export$.get_block_page_AMPERSAND_block_refs(repo,block_uuid,embed_pages_STAR_,embed_blocks_STAR_,block_refs_STAR_);
var map__109587__$1 = cljs.core.__destructure_map(map__109587);
var embed_pages__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109587__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109587__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109587__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [embed_pages__$1,embed_blocks__$1,block_refs__$1], null);
}),clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks_diff,block_refs_diff))));
var embed_pages_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109582,(0),null);
var embed_blocks_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109582,(1),null);
var block_refs_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109582,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_pages_1,embed_pages_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_pages_STAR_], 0)),new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(embed_blocks_1,embed_blocks_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([embed_blocks_STAR_], 0)),new cljs.core.Keyword(null,"block-refs","block-refs",1507119654),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(block_refs_1,block_refs_2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_refs_STAR_], 0))], null);
});
frontend.handler.export$.get_export_references = (function frontend$handler$export$get_export_references(repo,p__109588){
var map__109589 = p__109588;
var map__109589__$1 = cljs.core.__destructure_map(map__109589);
var embed_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109589__$1,new cljs.core.Keyword(null,"embed-pages","embed-pages",889277876));
var embed_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109589__$1,new cljs.core.Keyword(null,"embed-blocks","embed-blocks",-816470334));
var block_refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109589__$1,new cljs.core.Keyword(null,"block-refs","block-refs",1507119654));
var embed_blocks_and_contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
var id_s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(id);
var id__$1 = cljs.core.uuid(id_s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.handler.export$.get_blocks_contents(repo,id__$1),frontend.handler.export$.get_block_content((function (){var G__109590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__109590) : frontend.db.pull.call(null,G__109590));
})())], null)], null);
}),clojure.set.union.cljs$core$IFn$_invoke$arity$2(embed_blocks,block_refs));
var embed_pages_and_contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name,frontend.handler.export$.get_page_content(repo,page_name)], null);
}),embed_pages);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"embed_blocks","embed_blocks",785928846),embed_blocks_and_contents,new cljs.core.Keyword(null,"embed_pages","embed_pages",94877387),embed_pages_and_contents], null);
});
frontend.handler.export$.export_files_as_markdown = (function frontend$handler$export$export_files_as_markdown(repo,files,heading_to_list_QMARK_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__109591){
var map__109592 = p__109591;
var map__109592__$1 = cljs.core.__destructure_map(map__109592);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109592__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109592__$1,new cljs.core.Keyword(null,"content","content",15833224));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109592__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109592__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
if(cljs.core.truth_(cljs.core.first(names))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,frontend.format.mldoc_record.frontend$format$protocol$Format$exportMarkdown$arity$4(null,content,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export-heading-to-list?","export-heading-to-list?",-596132321),heading_to_list_QMARK_], null)),JSON.stringify(cljs.core.clj__GT_js(frontend.handler.export$.get_export_references(repo,frontend.handler.export$.get_page_page_AMPERSAND_block_refs(repo,cljs.core.first(names),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY)))))], null);
} else {
return null;
}
}),files);
});
frontend.handler.export$.export_files_as_opml = (function frontend$handler$export$export_files_as_opml(repo,files){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__109593){
var map__109594 = p__109593;
var map__109594__$1 = cljs.core.__destructure_map(map__109594);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109594__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109594__$1,new cljs.core.Keyword(null,"content","content",15833224));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109594__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109594__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
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

var f = (function (p1__109595_SHARP_){
return frontend.handler.export$.get_export_references(repo,frontend.handler.export$.get_blocks_page_AMPERSAND_block_refs(repo,p1__109595_SHARP_,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY));
});
var root_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__109596_SHARP_){
var G__109600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__109596_SHARP_], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__109600) : frontend.db.entity.call(null,G__109600));
}),root_block_uuids);
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__109597_SHARP_){
return (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(repo,p1__109597_SHARP_) : frontend.db.get_block_and_children.call(null,repo,p1__109597_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root_block_uuids], 0));
var refs = f(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__109598_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__109598_SHARP_));
}),blocks));
var contents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__109599_SHARP_){
return frontend.handler.export$.get_blocks_contents(repo,p1__109599_SHARP_);
}),root_block_uuids);
var content = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim_newline,contents));
var format = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(cljs.core.first(root_blocks));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
return (auxf.cljs$core$IFn$_invoke$arity$3 ? auxf.cljs$core$IFn$_invoke$arity$3(content,format,refs) : auxf.call(null,content,format,refs));
});
frontend.handler.export$.export_blocks_as_opml = (function frontend$handler$export$export_blocks_as_opml(repo,root_block_uuids){
return frontend.handler.export$.export_blocks_as_aux(repo,root_block_uuids,(function (p1__109601_SHARP_,p2__109602_SHARP_,p3__109603_SHARP_){
return frontend.format.mldoc_record.frontend$format$protocol$Format$exportOPML$arity$5(null,p1__109601_SHARP_,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(p2__109602_SHARP_),"untitled",JSON.stringify(cljs.core.clj__GT_js(p3__109603_SHARP_)));
}));
});
frontend.handler.export$.export_blocks_as_markdown = (function frontend$handler$export$export_blocks_as_markdown(repo,root_block_uuids,indent_style,remove_options){
return frontend.handler.export$.export_blocks_as_aux(repo,root_block_uuids,(function (p1__109604_SHARP_,p2__109605_SHARP_,p3__109606_SHARP_){
return frontend.format.mldoc_record.frontend$format$protocol$Format$exportMarkdown$arity$4(null,p1__109604_SHARP_,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$2(p2__109605_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"export-md-indent-style","export-md-indent-style",481813710),indent_style,new cljs.core.Keyword(null,"export-md-remove-options","export-md-remove-options",-1015252352),remove_options], null)),JSON.stringify(cljs.core.clj__GT_js(p3__109606_SHARP_)));
}));
});
frontend.handler.export$.export_blocks_as_html = (function frontend$handler$export$export_blocks_as_html(repo,root_block_uuids){
return frontend.handler.export$.export_blocks_as_aux(repo,root_block_uuids,(function (p1__109607_SHARP_,p2__109608_SHARP_,p3__109609_SHARP_){
return frontend.format.mldoc_record.frontend$format$protocol$Format$toHtml$arity$4(null,p1__109607_SHARP_,frontend.format.get_default_config.cljs$core$IFn$_invoke$arity$1(p2__109608_SHARP_),JSON.stringify(cljs.core.clj__GT_js(p3__109609_SHARP_)));
}));
});
frontend.handler.export$.get_file_contents_with_suffix = (function frontend$handler$export$get_file_contents_with_suffix(repo){
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_db.call(null,repo));
var md_files = frontend.handler.export$.get_md_file_contents(repo);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__109610){
var vec__109611 = p__109610;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109611,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109611,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"names","names",-1943074658),(function (){var G__109614 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Symbol(null,"?n2","?n2",1059960511,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","file","block/file",183171933),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new cljs.core.Symbol(null,"?n2","?n2",1059960511,null)], null)], null);
var G__109615 = db;
var G__109616 = path;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__109614,G__109615,G__109616) : datascript.core.q.call(null,G__109614,G__109615,G__109616));
})(),new cljs.core.Keyword(null,"format","format",-1306924766),frontend.format.get_format(path)], null);
}),md_files);
});
frontend.handler.export$.export_repo_as_markdown_BANG_ = (function frontend$handler$export$export_repo_as_markdown_BANG_(repo){
var temp__5720__auto__ = frontend.handler.export$.get_file_contents_with_suffix(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var files = temp__5720__auto__;
var heading_to_list_QMARK_ = frontend.state.export_heading_to_list_QMARK_();
var files__$1 = frontend.handler.export$.export_files_as_markdown(repo,files,heading_to_list_QMARK_);
var zip_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"_markdown_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot(frontend.util.time_ms(),(1000)))].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(1),new cljs.core.Keyword(null,"blocks","blocks",-610462153),frontend.handler.export$.nested_select_keys(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","id","block/id",-1461684825),new cljs.core.Keyword("block","page-name","block/page-name",780489999),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","heading-level","block/heading-level",661361785),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","content","block/content",-161885195)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__109617){
var vec__109618 = p__109617;
var map__109621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109618,(0),null);
var map__109621__$1 = cljs.core.__destructure_map(map__109621);
var page = map__109621__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109621__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","children","block/children",-1040716209),frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((function (){var G__109622 = frontend.state.get_current_repo();
var G__109623 = name;
var G__109624 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform?","transform?",-2042672609),false], null);
return (frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(G__109622,G__109623,G__109624) : frontend.db.get_page_blocks_no_cache.call(null,G__109622,G__109623,G__109624));
})(),name));
}),(function (){var G__109625 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","file","block/file",183171933)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null);
var G__109626 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__109625,G__109626) : datascript.core.q.call(null,G__109625,G__109626));
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
var temp__5720__auto__ = (function (){var G__109627 = frontend.handler.export$.export_repo_as_edn_str(repo);
var G__109627__$1 = (((G__109627 == null))?null:encodeURIComponent(G__109627));
if((G__109627__$1 == null)){
return null;
} else {
return ["data:text/edn;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109627__$1)].join('');
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
return frontend.external.roam_export.traverse(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","title","page/title",628894782),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","children","block/children",-1040716209)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__109628){
var vec__109629 = p__109628;
var map__109632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109629,(0),null);
var map__109632__$1 = cljs.core.__destructure_map(map__109632);
var page = map__109632__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109632__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","children","block/children",-1040716209),frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2((function (){var G__109633 = frontend.state.get_current_repo();
var G__109634 = name;
var G__109635 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform?","transform?",-2042672609),false], null);
return (frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$3(G__109633,G__109634,G__109635) : frontend.db.get_page_blocks_no_cache.call(null,G__109633,G__109634,G__109635));
})(),name));
}),(function (){var G__109636 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","file","block/file",183171933)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","name","block/name",1619760316)], null)], null);
var G__109637 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__109636,G__109637) : datascript.core.q.call(null,G__109636,G__109637));
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
