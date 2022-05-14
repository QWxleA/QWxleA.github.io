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
var temp__5720__auto__ = (cljs.core.truth_(journal_QMARK_)?frontend.date.journal_title__GT_default(title):frontend.util.page_name_sanity.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(title)));
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(s,(0),(200));
} else {
return null;
}
});
frontend.handler.page.get_page_file_path = (function frontend$handler$page$get_page_file_path(var_args){
var G__63213 = arguments.length;
switch (G__63213) {
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
var page_name__$1 = frontend.util.page_name_sanity_lc(page_name);
var temp__5720__auto__ = (function (){var G__63214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__63214) : frontend.db.entity.call(null,G__63214));
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
var G__63216 = arguments.length;
switch (G__63216) {
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
var refs = frontend.format.block.get_page_refs_from_properties(properties);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873),new cljs.core.Keyword("block","format","block/format",-1212045901),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","page","block/page",822314108)],[frontend.db.new_block_id(),ps,page,refs,cljs.core.keys(ps),format,content,page,page]);
}));

(frontend.handler.page.default_properties_block.cljs$lang$maxFixedArity = 4);

frontend.handler.page.create_title_property_QMARK_ = (function frontend$handler$page$create_title_property_QMARK_(journal_QMARK_,page_name){
var and__4251__auto__ = cljs.core.not(journal_QMARK_);
if(and__4251__auto__){
return frontend.util.create_title_property_QMARK_(page_name);
} else {
return and__4251__auto__;
}
});
frontend.handler.page.build_page_tx = (function frontend$handler$page$build_page_tx(format,properties,page,journal_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))){
var page_entity = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)], null);
var create_title_QMARK_ = frontend.handler.page.create_title_property_QMARK_(journal_QMARK_,(function (){var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
})());
var page__$1 = ((cljs.core.seq(properties))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword("block","properties","block/properties",708347145),properties):page);
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
} else {
return null;
}
});
frontend.handler.page.create_BANG_ = (function frontend$handler$page$create_BANG_(var_args){
var G__63219 = arguments.length;
switch (G__63219) {
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

(frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (title,p__63220){
var map__63221 = p__63220;
var map__63221__$1 = cljs.core.__destructure_map(map__63221);
var redirect_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63221__$1,new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),true);
var create_first_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63221__$1,new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),true);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63221__$1,new cljs.core.Keyword(null,"format","format",-1306924766),null);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63221__$1,new cljs.core.Keyword(null,"properties","properties",685819552),null);
var split_namespace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63221__$1,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),true);
var journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63221__$1,new cljs.core.Keyword(null,"journal?","journal?",-897756522));
var title__$1 = clojure.string.trim(title);
var title__$2 = frontend.util.remove_boundary_slashes(title__$1);
var page_name = frontend.util.page_name_sanity_lc(title__$2);
var repo = frontend.state.get_current_repo();
if(cljs.core.truth_((frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(repo,page_name) : frontend.db.page_empty_QMARK_.call(null,repo,page_name)))){
var pages_63687 = (cljs.core.truth_(split_namespace_QMARK_)?frontend.util.split_namespace_pages(title__$2):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$2], null));
var format_63688__$1 = (function (){var or__4253__auto__ = format;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})();
var pages_63689__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.format.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$2(page,true),new cljs.core.Keyword("block","format","block/format",-1212045901),format_63688__$1);
}),pages_63687);
var txs_63690 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (m){
return (!(((function (){var G__63222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(m)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__63222) : frontend.db.entity.call(null,G__63222));
})() == null)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__63217_SHARP_){
return frontend.handler.page.build_page_tx(format_63688__$1,null,p1__63217_SHARP_,journal_QMARK_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(pages_63689__$1)], 0))));
var last_txs_63691 = frontend.handler.page.build_page_tx(format_63688__$1,properties,cljs.core.last(pages_63689__$1),journal_QMARK_);
var txs_63692__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs_63690,last_txs_63691);
if(cljs.core.seq(txs_63692__$1)){
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(txs_63692__$1) : frontend.db.transact_BANG_.call(null,txs_63692__$1));
} else {
}

if(cljs.core.truth_(create_first_block_QMARK_)){
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var G__63223 = repo;
var G__63224 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__63225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__63225) : frontend.db.entity.call(null,G__63225));
})());
return (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(G__63223,G__63224) : frontend.db.page_empty_QMARK_.call(null,G__63223,G__63224));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var G__63226_63698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),file_path], null)], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__63226_63698) : frontend.db.transact_BANG_.call(null,G__63226_63698));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__4251__auto__ = frontend.config.local_db_QMARK_(repo);
if(and__4251__auto__){
var and__4251__auto____$1 = frontend.mobile.util.is_native_platform_QMARK_();
if(cljs.core.truth_(and__4251__auto____$1)){
return frontend.fs.delete_file_BANG_(repo,file_path,file_path,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
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
var file_name = frontend.util.page_name_sanity.cljs$core$IFn$_invoke$arity$2(new_name,true);
var ext = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.last(result),"."));
var new_file = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
var parts = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_file], null));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",parts);
});
frontend.handler.page.rename_file_BANG_ = (function frontend$handler$page$rename_file_BANG_(file,new_name,ok_handler){
var repo = frontend.state.get_current_repo();
var file__$1 = (function (){var G__63227 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(file);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__63227) : frontend.db.pull.call(null,G__63227));
})();
var old_path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file__$1);
var new_path = frontend.handler.page.compute_new_file_path(old_path,new_name);
var G__63228_63715 = repo;
var G__63229_63716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(file__$1),new cljs.core.Keyword("file","path","file/path",-191335748),new_path], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__63228_63715,G__63229_63716) : frontend.db.transact_BANG_.call(null,G__63228_63715,G__63229_63716));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
var vec__63232 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_name,new_name], null));
var original_old_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63232,(0),null);
var original_new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63232,(1),null);
var vec__63235 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63230_SHARP_){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__63230_SHARP_], 0));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_name,new_name], null));
var old_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63235,(0),null);
var new_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63235,(1),null);
var vec__63238 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63231_SHARP_){
if(clojure.string.includes_QMARK_(p1__63231_SHARP_,"/")){
return clojure.string.replace(p1__63231_SHARP_,"/",".");
} else {
return p1__63231_SHARP_;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_old_name,original_new_name], null));
var old_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63238,(0),null);
var new_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63238,(1),null);
var old_org_ref = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
if(and__4251__auto__){
var and__4251__auto____$1 = new cljs.core.Keyword("org-mode","insert-file-link?","org-mode/insert-file-link?",-1472433842).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.re_find(cljs.core.re_pattern(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("\\[\\[file:\\.*/.*%s\\.org\\]\\[(.*?)\\]\\]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_name__$1], 0))),content);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
return clojure.string.replace((cljs.core.truth_(old_org_ref)?(function (){var vec__63241 = old_org_ref;
var old_full_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63241,(0),null);
var old_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63241,(1),null);
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
var favorites = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(page_name,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var favorites = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63244_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(p1__63244_SHARP_),clojure.string.lower_case(page_name));
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
var args__4870__auto__ = [];
var len__4864__auto___63725 = arguments.length;
var i__4865__auto___63726 = (0);
while(true){
if((i__4865__auto___63726 < len__4864__auto___63725)){
args__4870__auto__.push((arguments[i__4865__auto___63726]));

var G__63728 = (i__4865__auto___63726 + (1));
i__4865__auto___63726 = G__63728;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return frontend.handler.page.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(frontend.handler.page.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (page_name,ok_handler,p__63273){
var map__63274 = p__63273;
var map__63274__$1 = cljs.core.__destructure_map(map__63274);
var delete_file_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63274__$1,new cljs.core.Keyword(null,"delete-file?","delete-file?",668245808),true);
if(cljs.core.truth_(page_name)){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var page_name__$1 = frontend.util.page_name_sanity_lc(page_name);
var blocks = (frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(page_name__$1) : frontend.db.get_page_blocks_no_cache.call(null,page_name__$1));
var tx_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null)], null);
}),blocks);
var page = (function (){var G__63276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__63276) : frontend.db.entity.call(null,G__63276));
})();
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(tx_data) : frontend.db.transact_BANG_.call(null,tx_data));

if(cljs.core.truth_(delete_file_QMARK_)){
frontend.handler.page.delete_file_BANG_(repo,page_name__$1);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword("block","_namespace","block/_namespace",1151541806).cljs$core$IFn$_invoke$arity$1(page))){
} else {
if(cljs.core.truth_(frontend.db.model.get_alias_source_page(frontend.state.get_current_repo(),page_name__$1))){
var temp__5720__auto___63731__$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__63283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__63283) : frontend.db.entity.call(null,G__63283));
})());
if(cljs.core.truth_(temp__5720__auto___63731__$1)){
var id_63732 = temp__5720__auto___63731__$1;
var txs_63733 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (attribute){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id_63732,attribute], null);
}),frontend.db_schema.retract_page_attributes);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(txs_63733) : frontend.db.transact_BANG_.call(null,txs_63733));
} else {
}
} else {
var G__63293_63734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null)], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__63293_63734) : frontend.db.transact_BANG_.call(null,G__63293_63734));
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
(frontend.handler.page.delete_BANG_.cljs$lang$applyTo = (function (seq63262){
var G__63263 = cljs.core.first(seq63262);
var seq63262__$1 = cljs.core.next(seq63262);
var G__63264 = cljs.core.first(seq63262__$1);
var seq63262__$2 = cljs.core.next(seq63262__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63263,G__63264,seq63262__$2);
}));

frontend.handler.page.rename_update_block_refs_BANG_ = (function frontend$handler$page$rename_update_block_refs_BANG_(refs,from_id,to_id){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),from_id], null)]),refs))));
});
/**
 * Unsanitized only
 */
frontend.handler.page.rename_update_refs_BANG_ = (function frontend$handler$page$rename_update_refs_BANG_(page,old_original_name,new_name){
var repo = frontend.state.get_current_repo();
var to_page = (function (){var G__63302 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(new_name)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__63302) : frontend.db.entity.call(null,G__63302));
})();
var blocks = (function (){var G__63303 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.get_page_referenced_blocks_no_cache.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_referenced_blocks_no_cache.cljs$core$IFn$_invoke$arity$1(G__63303) : frontend.db.get_page_referenced_blocks_no_cache.call(null,G__63303));
})();
var page_ids = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108),blocks)));
var tx = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63305){
var map__63306 = p__63305;
var map__63306__$1 = cljs.core.__destructure_map(map__63306);
var block = map__63306__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63306__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63306__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63306__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
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
if(cljs.core.truth_((function (){var or__4253__auto__ = content__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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

var seq__63307 = cljs.core.seq(page_ids);
var chunk__63308 = null;
var count__63309 = (0);
var i__63310 = (0);
while(true){
if((i__63310 < count__63309)){
var page_id = chunk__63308.cljs$core$IIndexed$_nth$arity$2(null,i__63310);
frontend.modules.outliner.file.sync_to_file(page_id);


var G__63757 = seq__63307;
var G__63758 = chunk__63308;
var G__63759 = count__63309;
var G__63760 = (i__63310 + (1));
seq__63307 = G__63757;
chunk__63308 = G__63758;
count__63309 = G__63759;
i__63310 = G__63760;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63307);
if(temp__5720__auto__){
var seq__63307__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63307__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63307__$1);
var G__63761 = cljs.core.chunk_rest(seq__63307__$1);
var G__63762 = c__4679__auto__;
var G__63763 = cljs.core.count(c__4679__auto__);
var G__63764 = (0);
seq__63307 = G__63761;
chunk__63308 = G__63762;
count__63309 = G__63763;
i__63310 = G__63764;
continue;
} else {
var page_id = cljs.core.first(seq__63307__$1);
frontend.modules.outliner.file.sync_to_file(page_id);


var G__63765 = cljs.core.next(seq__63307__$1);
var G__63766 = null;
var G__63767 = (0);
var G__63768 = (0);
seq__63307 = G__63765;
chunk__63308 = G__63766;
count__63309 = G__63767;
i__63310 = G__63768;
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
var old_page_name = frontend.util.page_name_sanity_lc(old_name);
var new_file_name = frontend.util.file_name_sanity(new_name);
var new_page_name = frontend.util.page_name_sanity_lc(new_name);
var repo = frontend.state.get_current_repo();
var page = (function (){var G__63355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),old_page_name], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__63355) : frontend.db.pull.call(null,G__63355));
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
return page;
} else {
return and__4251__auto__;
}
})())){
var old_original_name_63769 = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var file_63770 = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
var journal_QMARK__63771 = new cljs.core.Keyword("block","journal?","block/journal?",-970683127).cljs$core$IFn$_invoke$arity$1(page);
var properties_block_63772 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(frontend.modules.outliner.tree._get_down(frontend.modules.outliner.core.block(page)));
var properties_block_tx_63773 = (cljs.core.truth_((function (){var and__4251__auto__ = properties_block_63772;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(frontend.util.page_name_sanity_lc(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(properties_block_63772)),old_page_name);
} else {
return and__4251__auto__;
}
})())?(function (){var front_matter_QMARK_ = ((frontend.util.property.front_matter_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(properties_block_63772))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(properties_block_63772))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(properties_block_63772),new cljs.core.Keyword("block","content","block/content",-161885195),frontend.util.property.insert_property.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(properties_block_63772),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(properties_block_63772),new cljs.core.Keyword(null,"title","title",636505583),new_name,front_matter_QMARK_)], null);
})():null);
var page_txs_63775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","name","block/name",1619760316),new_page_name,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),new_name], null)], null);
var page_txs_63776__$1 = (cljs.core.truth_(properties_block_tx_63773)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(page_txs_63775,properties_block_tx_63773):page_txs_63775);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((frontend.db.get_db.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$2(repo,false) : frontend.db.get_db.call(null,repo,false)),page_txs_63776__$1);

if(cljs.core.truth_((function (){var or__4253__auto__ = frontend.util.create_title_property_QMARK_(new_page_name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.page_name_sanity.cljs$core$IFn$_invoke$arity$2(new_name,false),new_name);
}
})())){
frontend.util.page_property.add_property_BANG_(new_page_name,new cljs.core.Keyword(null,"title","title",636505583),new_name);
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = file_63770;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(journal_QMARK__63771);
} else {
return and__4251__auto__;
}
})())){
frontend.handler.page.rename_file_BANG_(file_63770,new_file_name,(function (){
return null;
}));
} else {
}

frontend.handler.page.rename_update_refs_BANG_(page,old_original_name_63769,new_name);

frontend.modules.outliner.file.sync_to_file(page);

if(cljs.core.truth_(redirect_QMARK_)){
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"push","push",799791267),false,new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new_page_name], null)], null));
} else {
}

if(frontend.handler.page.favorited_QMARK_(old_page_name)){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42616__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.unfavorite_page_BANG_(old_page_name),(function (___42615__auto__){
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
var nested_page_str = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.page_name_sanity_lc(old_ns_name)], 0));
var ns_prefix = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.page_name_sanity_lc(old_ns_name)], 0));
var nested_pages = (frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2(repo,nested_page_str) : frontend.db.get_pages_by_name_partition.call(null,repo,nested_page_str));
var nested_pages_ns = (frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pages_by_name_partition.cljs$core$IFn$_invoke$arity$2(repo,ns_prefix) : frontend.db.get_pages_by_name_partition.call(null,repo,ns_prefix));
if(cljs.core.truth_(nested_pages)){
var seq__63366_63789 = cljs.core.seq(nested_pages);
var chunk__63367_63790 = null;
var count__63368_63791 = (0);
var i__63369_63792 = (0);
while(true){
if((i__63369_63792 < count__63368_63791)){
var map__63391_63793 = chunk__63367_63790.cljs$core$IIndexed$_nth$arity$2(null,i__63369_63792);
var map__63391_63794__$1 = cljs.core.__destructure_map(map__63391_63793);
var name_63795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63391_63794__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name_63796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63391_63794__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_63797 = (function (){var or__4253__auto__ = original_name_63796;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return name_63795;
}
})();
var new_page_title_63798 = clojure.string.replace(old_page_title_63797,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_ns_name], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ns_name], 0)));
if(cljs.core.truth_((function (){var and__4251__auto__ = old_page_title_63797;
if(cljs.core.truth_(and__4251__auto__)){
return new_page_title_63798;
} else {
return and__4251__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__63366_63789,chunk__63367_63790,count__63368_63791,i__63369_63792,old_page_title_63797,new_page_title_63798,map__63391_63793,map__63391_63794__$1,name_63795,original_name_63796,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___42616__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_63797,new_page_title_63798,false),((function (seq__63366_63789,chunk__63367_63790,count__63368_63791,i__63369_63792,old_page_title_63797,new_page_title_63798,map__63391_63793,map__63391_63794__$1,name_63795,original_name_63796,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___42615__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_63797," to ",new_page_title_63798], 0)));
});})(seq__63366_63789,chunk__63367_63790,count__63368_63791,i__63369_63792,old_page_title_63797,new_page_title_63798,map__63391_63793,map__63391_63794__$1,name_63795,original_name_63796,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__63366_63789,chunk__63367_63790,count__63368_63791,i__63369_63792,old_page_title_63797,new_page_title_63798,map__63391_63793,map__63391_63794__$1,name_63795,original_name_63796,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__63821 = seq__63366_63789;
var G__63822 = chunk__63367_63790;
var G__63823 = count__63368_63791;
var G__63824 = (i__63369_63792 + (1));
seq__63366_63789 = G__63821;
chunk__63367_63790 = G__63822;
count__63368_63791 = G__63823;
i__63369_63792 = G__63824;
continue;
} else {
var temp__5720__auto___63825 = cljs.core.seq(seq__63366_63789);
if(temp__5720__auto___63825){
var seq__63366_63826__$1 = temp__5720__auto___63825;
if(cljs.core.chunked_seq_QMARK_(seq__63366_63826__$1)){
var c__4679__auto___63827 = cljs.core.chunk_first(seq__63366_63826__$1);
var G__63828 = cljs.core.chunk_rest(seq__63366_63826__$1);
var G__63829 = c__4679__auto___63827;
var G__63830 = cljs.core.count(c__4679__auto___63827);
var G__63831 = (0);
seq__63366_63789 = G__63828;
chunk__63367_63790 = G__63829;
count__63368_63791 = G__63830;
i__63369_63792 = G__63831;
continue;
} else {
var map__63394_63832 = cljs.core.first(seq__63366_63826__$1);
var map__63394_63833__$1 = cljs.core.__destructure_map(map__63394_63832);
var name_63834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63394_63833__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name_63835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63394_63833__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_63836 = (function (){var or__4253__auto__ = original_name_63835;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return name_63834;
}
})();
var new_page_title_63837 = clojure.string.replace(old_page_title_63836,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_ns_name], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ns_name], 0)));
if(cljs.core.truth_((function (){var and__4251__auto__ = old_page_title_63836;
if(cljs.core.truth_(and__4251__auto__)){
return new_page_title_63837;
} else {
return and__4251__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__63366_63789,chunk__63367_63790,count__63368_63791,i__63369_63792,old_page_title_63836,new_page_title_63837,map__63394_63832,map__63394_63833__$1,name_63834,original_name_63835,seq__63366_63826__$1,temp__5720__auto___63825,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___42616__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_63836,new_page_title_63837,false),((function (seq__63366_63789,chunk__63367_63790,count__63368_63791,i__63369_63792,old_page_title_63836,new_page_title_63837,map__63394_63832,map__63394_63833__$1,name_63834,original_name_63835,seq__63366_63826__$1,temp__5720__auto___63825,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___42615__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_63836," to ",new_page_title_63837], 0)));
});})(seq__63366_63789,chunk__63367_63790,count__63368_63791,i__63369_63792,old_page_title_63836,new_page_title_63837,map__63394_63832,map__63394_63833__$1,name_63834,original_name_63835,seq__63366_63826__$1,temp__5720__auto___63825,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__63366_63789,chunk__63367_63790,count__63368_63791,i__63369_63792,old_page_title_63836,new_page_title_63837,map__63394_63832,map__63394_63833__$1,name_63834,original_name_63835,seq__63366_63826__$1,temp__5720__auto___63825,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__63842 = cljs.core.next(seq__63366_63826__$1);
var G__63843 = null;
var G__63844 = (0);
var G__63845 = (0);
seq__63366_63789 = G__63842;
chunk__63367_63790 = G__63843;
count__63368_63791 = G__63844;
i__63369_63792 = G__63845;
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
var seq__63403 = cljs.core.seq(nested_pages_ns);
var chunk__63404 = null;
var count__63405 = (0);
var i__63406 = (0);
while(true){
if((i__63406 < count__63405)){
var map__63425 = chunk__63404.cljs$core$IIndexed$_nth$arity$2(null,i__63406);
var map__63425__$1 = cljs.core.__destructure_map(map__63425);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_63847 = (function (){var or__4253__auto__ = original_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return name;
}
})();
var new_page_title_63848 = clojure.string.replace(old_page_title_63847,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_ns_name], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ns_name], 0)));
if(cljs.core.truth_((function (){var and__4251__auto__ = old_page_title_63847;
if(cljs.core.truth_(and__4251__auto__)){
return new_page_title_63848;
} else {
return and__4251__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__63403,chunk__63404,count__63405,i__63406,old_page_title_63847,new_page_title_63848,map__63425,map__63425__$1,name,original_name,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___42616__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_63847,new_page_title_63848,false),((function (seq__63403,chunk__63404,count__63405,i__63406,old_page_title_63847,new_page_title_63848,map__63425,map__63425__$1,name,original_name,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___42615__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_63847," to ",new_page_title_63848], 0)));
});})(seq__63403,chunk__63404,count__63405,i__63406,old_page_title_63847,new_page_title_63848,map__63425,map__63425__$1,name,original_name,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__63403,chunk__63404,count__63405,i__63406,old_page_title_63847,new_page_title_63848,map__63425,map__63425__$1,name,original_name,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__63853 = seq__63403;
var G__63854 = chunk__63404;
var G__63855 = count__63405;
var G__63856 = (i__63406 + (1));
seq__63403 = G__63853;
chunk__63404 = G__63854;
count__63405 = G__63855;
i__63406 = G__63856;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63403);
if(temp__5720__auto__){
var seq__63403__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63403__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63403__$1);
var G__63858 = cljs.core.chunk_rest(seq__63403__$1);
var G__63859 = c__4679__auto__;
var G__63860 = cljs.core.count(c__4679__auto__);
var G__63861 = (0);
seq__63403 = G__63858;
chunk__63404 = G__63859;
count__63405 = G__63860;
i__63406 = G__63861;
continue;
} else {
var map__63447 = cljs.core.first(seq__63403__$1);
var map__63447__$1 = cljs.core.__destructure_map(map__63447);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63447__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63447__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_63877 = (function (){var or__4253__auto__ = original_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return name;
}
})();
var new_page_title_63878 = clojure.string.replace(old_page_title_63877,frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_ns_name], 0)),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ns_name], 0)));
if(cljs.core.truth_((function (){var and__4251__auto__ = old_page_title_63877;
if(cljs.core.truth_(and__4251__auto__)){
return new_page_title_63878;
} else {
return and__4251__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__63403,chunk__63404,count__63405,i__63406,old_page_title_63877,new_page_title_63878,map__63447,map__63447__$1,name,original_name,seq__63403__$1,temp__5720__auto__,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___42616__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_63877,new_page_title_63878,false),((function (seq__63403,chunk__63404,count__63405,i__63406,old_page_title_63877,new_page_title_63878,map__63447,map__63447__$1,name,original_name,seq__63403__$1,temp__5720__auto__,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns){
return (function (___42615__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_63877," to ",new_page_title_63878], 0)));
});})(seq__63403,chunk__63404,count__63405,i__63406,old_page_title_63877,new_page_title_63878,map__63447,map__63447__$1,name,original_name,seq__63403__$1,temp__5720__auto__,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
});})(seq__63403,chunk__63404,count__63405,i__63406,old_page_title_63877,new_page_title_63878,map__63447,map__63447__$1,name,original_name,seq__63403__$1,temp__5720__auto__,repo,nested_page_str,ns_prefix,nested_pages,nested_pages_ns))
);
} else {
}


var G__63882 = cljs.core.next(seq__63403__$1);
var G__63883 = null;
var G__63884 = (0);
var G__63885 = (0);
seq__63403 = G__63882;
chunk__63404 = G__63883;
count__63405 = G__63884;
i__63406 = G__63885;
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
var page = (function (){var G__63455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(old_name)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__63455) : frontend.db.pull.call(null,G__63455));
})();
var pages__$1 = cljs.core.cons(page,pages);
var seq__63456 = cljs.core.seq(pages__$1);
var chunk__63457 = null;
var count__63458 = (0);
var i__63459 = (0);
while(true){
if((i__63459 < count__63458)){
var map__63484 = chunk__63457.cljs$core$IIndexed$_nth$arity$2(null,i__63459);
var map__63484__$1 = cljs.core.__destructure_map(map__63484);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63484__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63484__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_63888 = (function (){var or__4253__auto__ = original_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return name;
}
})();
var new_page_title_63889 = clojure.string.replace(old_page_title_63888,old_name,new_name);
var redirect_QMARK__63890 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
if(cljs.core.truth_((function (){var and__4251__auto__ = old_page_title_63888;
if(cljs.core.truth_(and__4251__auto__)){
return new_page_title_63889;
} else {
return and__4251__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__63456,chunk__63457,count__63458,i__63459,old_page_title_63888,new_page_title_63889,redirect_QMARK__63890,map__63484,map__63484__$1,name,original_name,pages,page,pages__$1){
return (function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_63888,new_page_title_63889,redirect_QMARK__63890),((function (seq__63456,chunk__63457,count__63458,i__63459,old_page_title_63888,new_page_title_63889,redirect_QMARK__63890,map__63484,map__63484__$1,name,original_name,pages,page,pages__$1){
return (function (_){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_63888," to ",new_page_title_63889], 0)));
});})(seq__63456,chunk__63457,count__63458,i__63459,old_page_title_63888,new_page_title_63889,redirect_QMARK__63890,map__63484,map__63484__$1,name,original_name,pages,page,pages__$1))
);
});})(seq__63456,chunk__63457,count__63458,i__63459,old_page_title_63888,new_page_title_63889,redirect_QMARK__63890,map__63484,map__63484__$1,name,original_name,pages,page,pages__$1))
);
} else {
}


var G__63892 = seq__63456;
var G__63893 = chunk__63457;
var G__63894 = count__63458;
var G__63895 = (i__63459 + (1));
seq__63456 = G__63892;
chunk__63457 = G__63893;
count__63458 = G__63894;
i__63459 = G__63895;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63456);
if(temp__5720__auto__){
var seq__63456__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63456__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63456__$1);
var G__63898 = cljs.core.chunk_rest(seq__63456__$1);
var G__63899 = c__4679__auto__;
var G__63900 = cljs.core.count(c__4679__auto__);
var G__63901 = (0);
seq__63456 = G__63898;
chunk__63457 = G__63899;
count__63458 = G__63900;
i__63459 = G__63901;
continue;
} else {
var map__63487 = cljs.core.first(seq__63456__$1);
var map__63487__$1 = cljs.core.__destructure_map(map__63487);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63487__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var original_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63487__$1,new cljs.core.Keyword("block","original-name","block/original-name",-1620099234));
var old_page_title_63903 = (function (){var or__4253__auto__ = original_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return name;
}
})();
var new_page_title_63904 = clojure.string.replace(old_page_title_63903,old_name,new_name);
var redirect_QMARK__63905 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
if(cljs.core.truth_((function (){var and__4251__auto__ = old_page_title_63903;
if(cljs.core.truth_(and__4251__auto__)){
return new_page_title_63904;
} else {
return and__4251__auto__;
}
})())){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,((function (seq__63456,chunk__63457,count__63458,i__63459,old_page_title_63903,new_page_title_63904,redirect_QMARK__63905,map__63487,map__63487__$1,name,original_name,seq__63456__$1,temp__5720__auto__,pages,page,pages__$1){
return (function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.rename_page_aux(old_page_title_63903,new_page_title_63904,redirect_QMARK__63905),((function (seq__63456,chunk__63457,count__63458,i__63459,old_page_title_63903,new_page_title_63904,redirect_QMARK__63905,map__63487,map__63487__$1,name,original_name,seq__63456__$1,temp__5720__auto__,pages,page,pages__$1){
return (function (_){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Renamed ",old_page_title_63903," to ",new_page_title_63904], 0)));
});})(seq__63456,chunk__63457,count__63458,i__63459,old_page_title_63903,new_page_title_63904,redirect_QMARK__63905,map__63487,map__63487__$1,name,original_name,seq__63456__$1,temp__5720__auto__,pages,page,pages__$1))
);
});})(seq__63456,chunk__63457,count__63458,i__63459,old_page_title_63903,new_page_title_63904,redirect_QMARK__63905,map__63487,map__63487__$1,name,original_name,seq__63456__$1,temp__5720__auto__,pages,page,pages__$1))
);
} else {
}


var G__63907 = cljs.core.next(seq__63456__$1);
var G__63908 = null;
var G__63909 = (0);
var G__63910 = (0);
seq__63456 = G__63907;
chunk__63457 = G__63908;
count__63458 = G__63909;
i__63459 = G__63910;
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
if(cljs.core.truth_((function (){var and__4251__auto__ = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(from_page_name) : frontend.db.page_exists_QMARK_.call(null,from_page_name));
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(to_page_name) : frontend.db.page_exists_QMARK_.call(null,to_page_name));
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_page_name,to_page_name);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var to_page_63911 = (function (){var G__63497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),to_page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__63497) : frontend.db.entity.call(null,G__63497));
})();
var to_id_63912 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(to_page_63911);
var from_page_63913 = (function (){var G__63499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),from_page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__63499) : frontend.db.entity.call(null,G__63499));
})();
var from_id_63914 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(from_page_63913);
var from_first_child_63915 = (function (){var G__63506 = (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(from_id_63914) : frontend.db.pull.call(null,from_id_63914));
var G__63506__$1 = (((G__63506 == null))?null:frontend.modules.outliner.core.block(G__63506));
var G__63506__$2 = (((G__63506__$1 == null))?null:frontend.modules.outliner.tree._get_down(G__63506__$1));
if((G__63506__$2 == null)){
return null;
} else {
return frontend.modules.outliner.core.get_data(G__63506__$2);
}
})();
var to_last_direct_child_id_63916 = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3((frontend.db.get_db.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_db.call(null)),to_id_63912,false);
var repo_63917 = frontend.state.get_current_repo();
var conn_63918 = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo_63917,false);
var datoms_63919 = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(conn_63918),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),from_id_63914);
var block_eids_63920 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datoms_63919);
var blocks_63921 = frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(repo_63917,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null),block_eids_63920);
var tx_data_63922 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var G__63516 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id_63912], null),new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352),frontend.handler.page.rename_update_block_refs_BANG_(new cljs.core.Keyword("block","path-refs","block/path-refs",-2109181352).cljs$core$IFn$_invoke$arity$1(block),from_id_63914,to_id_63912),new cljs.core.Keyword("block","refs","block/refs",-1214495349),frontend.handler.page.rename_update_block_refs_BANG_(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block),from_id_63914,to_id_63912)], null);
var G__63516__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = from_first_child_63915;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(from_first_child_63915));
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63516,new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(function (){var or__4253__auto__ = to_last_direct_child_id_63916;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return to_id_63912;
}
})()], null)):G__63516);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),from_id_63914], null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63516__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id_63912], null));
} else {
return G__63516__$1;
}
}),blocks_63921);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn_63918,tx_data_63922);

frontend.modules.outliner.file.sync_to_file(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),to_id_63912], null));

frontend.handler.page.rename_update_refs_BANG_(from_page_63913,frontend.util.get_page_original_name(from_page_63913),frontend.util.get_page_original_name(to_page_63911));

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
var old_page_name = frontend.util.page_name_sanity_lc(old_name__$1);
var new_page_name = frontend.util.page_name_sanity_lc(new_name__$1);
var name_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_name__$1,new_name__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = old_name__$1;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = new_name__$1;
if(cljs.core.truth_(and__4251__auto____$1)){
return (((!(clojure.string.blank_QMARK_(new_name__$1)))) && (name_changed_QMARK_));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_page_name,new_page_name)){
frontend.handler.page.rename_page_aux(old_name__$1,new_name__$1,true);
} else {
if(cljs.core.truth_((function (){var G__63530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new_page_name], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__63530) : frontend.db.pull.call(null,G__63530));
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
frontend.handler.page.reorder_favorites_BANG_ = (function frontend$handler$page$reorder_favorites_BANG_(p__63547){
var map__63548 = p__63547;
var map__63548__$1 = cljs.core.__destructure_map(map__63548);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63548__$1,new cljs.core.Keyword(null,"to","to",192099007));
var up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63548__$1,new cljs.core.Keyword(null,"up?","up?",77854972));
var favorites = new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178));
if(cljs.core.truth_((function (){var and__4251__auto__ = from;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = to;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var vec__63561 = frontend.handler.page.split_col_by_element(favorites,to);
var prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63561,(0),null);
var next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63561,(1),null);
var vec__63564 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__63545_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,e);
}),p1__63545_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev,next], null));
var prev__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63564,(0),null);
var next__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63564,(1),null);
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
if(cljs.core.truth_((function (){var and__4251__auto__ = edit_block_file_path;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.state.org_mode_file_link_QMARK_(frontend.state.get_current_repo());
} else {
return and__4251__auto__;
}
})())){
var temp__5718__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_file.call(null,page_name)));
if(cljs.core.truth_(temp__5718__auto__)){
var ref_file_path = temp__5718__auto__;
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[file:%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.util.get_relative_path(edit_block_file_path,ref_file_path),page], 0));
} else {
var journal_QMARK_ = frontend.date.valid_journal_title_QMARK_(page);
var ref_file_path = [(cljs.core.truth_((function (){var or__4253__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.mobile.util.is_native_platform_QMARK_();
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
var or__4253__auto__ = logseq.graph_parser.util.uuid_string_QMARK_(name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = logseq.graph_parser.config.draw_QMARK_(name);
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var G__63590 = clojure.string.upper_case(name);
return (frontend.db.built_in_pages_names.cljs$core$IFn$_invoke$arity$1 ? frontend.db.built_in_pages_names.cljs$core$IFn$_invoke$arity$1(G__63590) : frontend.db.built_in_pages_names.call(null,G__63590));
}
}
}),(frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_pages.call(null,repo))));
});
frontend.handler.page.get_filters = (function frontend$handler$page$get_filters(page_name){
var properties = (frontend.db.get_page_properties.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_page_properties.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.db.get_page_properties.call(null,page_name));
var properties_str = cljs.core.get.cljs$core$IFn$_invoke$arity$3(properties,new cljs.core.Keyword(null,"filters","filters",974726919),"{}");
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(properties_str);
}catch (e63591){if((e63591 instanceof Error)){
var e = e63591;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.page",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("syntax","filters","syntax/filters",1060305692),e,new cljs.core.Keyword(null,"line","line",212345235),648], null)),null);
} else {
throw e63591;

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
var q = (function (){var or__4253__auto__ = cljs.core.deref(frontend.handler.editor._STAR_selected_text);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("editor","show-page-search-hashtag?","editor/show-page-search-hashtag?",1934478614)))?logseq.graph_parser.util.safe_subs.cljs$core$IFn$_invoke$arity$3(edit_content,pos,current_pos):null);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
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
var chosen__$2 = (cljs.core.truth_((function (){var and__4251__auto__ = logseq.graph_parser.util.safe_re_find(/\s+/,chosen__$1);
if(cljs.core.truth_(and__4251__auto__)){
return (!(wrapped_QMARK_));
} else {
return and__4251__auto__;
}
})())?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([chosen__$1], 0)):chosen__$1);
var q__$1 = (cljs.core.truth_(cljs.core.deref(frontend.handler.editor._STAR_selected_text))?"":q);
var vec__63616 = ((wrapped_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$1,(3)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(q__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(q__$1,(1)),(1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$1,(2)], null)));
var last_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63616,(0),null);
var forward_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63616,(1),null);
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

if(((frontend.config.local_db_QMARK_(repo)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("local",repo)) && (cljs.core.not(frontend.mobile.util.is_native_platform_QMARK_())))))){
var title = frontend.date.today();
var today_page = frontend.util.page_name_sanity_lc(title);
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1(repo);
var file_name = frontend.date.journal_title__GT_default(title);
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_journals_directory()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_file_extension(format))].join('');
var file_path = ["/",path].join('');
var repo_dir = frontend.config.get_repo_dir(repo);
var template = frontend.state.get_default_journal_template();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_(repo_dir,file_path),(function (file_exists_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(file_exists_QMARK_)?frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(repo_dir,file_path):null),(function (file_content){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__4251__auto__ = (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(repo,today_page) : frontend.db.page_empty_QMARK_.call(null,repo,today_page));
if(cljs.core.truth_(and__4251__auto__)){
var or__4253__auto__ = cljs.core.not(file_exists_QMARK_);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto____$1 = file_exists_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return clojure.string.blank_QMARK_(file_content);
} else {
return and__4251__auto____$1;
}
}
} else {
return and__4251__auto__;
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
var temp__5720__auto__ = (function (){var G__63640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(frontend.date.today())], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__63640) : frontend.db.entity.call(null,G__63640));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397));
} else {
return null;
}
});
frontend.handler.page.open_file_in_default_app = (function frontend$handler$page$open_file_in_default_app(){
var temp__5720__auto__ = (function (){var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$0();
} else {
return and__4251__auto__;
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
var temp__5720__auto__ = (function (){var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$0();
} else {
return and__4251__auto__;
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
var temp__5720__auto__ = (function (){var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.handler.page.get_page_file_path.cljs$core$IFn$_invoke$arity$0();
} else {
return and__4251__auto__;
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
