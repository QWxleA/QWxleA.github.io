goog.provide('frontend.handler.repo');
frontend.handler.repo.create_config_file_if_not_exists = (function frontend$handler$repo$create_config_file_if_not_exists(repo_url){
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

var repo_dir = frontend.config.get_repo_dir(repo_url);
var app_dir = frontend.config.app_name;
var dir = [repo_dir,"/",app_dir].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(dir),(function (_){
return promesa.protocols._promise((function (){var default_content = frontend.config.config_default_content;
var path = [app_dir,"/",frontend.config.config_file].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,[app_dir,"/",frontend.config.config_file].join(''),default_content),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:(function (){
frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,default_content);

return frontend.handler.common.reset_config_BANG_(repo_url,default_content);
})()
));
}));
}));
})());
}));
}));
});
frontend.handler.repo.create_contents_file = (function frontend$handler$repo$create_contents_file(repo_url){
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo_url),(function (repo_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.get_pages_directory(),(function (pages_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63779_SHARP_){
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pages_dir),"/contents.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63779_SHARP_)].join('');
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["org","md"], null)),(function (p__63781){
var vec__63782 = p__63781;
var org_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63782,(0),null);
var md_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63782,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.some((function (p1__63780_SHARP_){
return frontend.fs.file_exists_QMARK_(repo_dir,p1__63780_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [org_path,md_path], null)),(function (contents_file_exist_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(contents_file_exist_QMARK_)?null:(function (){var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pages_dir),"/contents.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_file_extension(format))].join('');
var file_path = ["/",path].join('');
var default_content = (function (){var G__63785 = cljs.core.name(format);
switch (G__63785) {
case "org":
return "*\n";

break;
case "markdown":
return "-\n";

break;
default:
return "";

}
})();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pages_dir)].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_path,default_content),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,default_content)));
}));
}));
}));
})()));
}));
}));
}));
}));
}));
});
frontend.handler.repo.create_custom_theme = (function frontend$handler$repo$create_custom_theme(repo_url){
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

var repo_dir = frontend.config.get_repo_dir(repo_url);
var path = [frontend.config.app_name,"/",frontend.config.custom_css_file].join('');
var file_path = ["/",path].join('');
var default_content = "";
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",frontend.config.app_name].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_path,default_content),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,default_content)));
}));
}));
}));
});
frontend.handler.repo.create_dummy_notes_page = (function frontend$handler$repo$create_dummy_notes_page(repo_url,content){
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

var repo_dir = frontend.config.get_repo_dir(repo_url);
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_pages_directory()),"/how_to_make_dummy_notes.md"].join('');
var file_path = ["/",path].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_pages_directory())].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_path,content),(function (_file_exists_QMARK_){
return promesa.protocols._promise(frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,content));
}));
}));
}));
});
frontend.handler.repo.create_today_journal_if_not_exists = (function frontend$handler$repo$create_today_journal_if_not_exists(repo_url,p__63786){
var map__63787 = p__63786;
var map__63787__$1 = cljs.core.__destructure_map(map__63787);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63787__$1,new cljs.core.Keyword(null,"content","content",15833224));
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

if(frontend.state.enable_journals_QMARK_(repo_url)){
var repo_dir = frontend.config.get_repo_dir(repo_url);
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1(repo_url);
var title = frontend.date.today();
var file_name = frontend.date.journal_title__GT_default(title);
var default_content = frontend.util.default_content_with_title(format);
var template = frontend.state.get_default_journal_template();
var template__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = template;
if(cljs.core.truth_(and__4251__auto__)){
return (!(clojure.string.blank_QMARK_(template)));
} else {
return and__4251__auto__;
}
})())?template:null);
var content__$1 = (cljs.core.truth_(content)?content:(cljs.core.truth_(template__$1)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(default_content),template__$1].join(''):default_content
));
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_journals_directory()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_file_extension(format))].join('');
var file_path = ["/",path].join('');
var page_exists_QMARK_ = (function (){var G__63788 = repo_url;
var G__63789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$2 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$2(G__63788,G__63789) : frontend.db.entity.call(null,G__63788,G__63789));
})();
var empty_blocks_QMARK_ = (function (){var G__63790 = repo_url;
var G__63791 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(title) : frontend.util.page_name_sanity_lc.call(null,title));
return (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(G__63790,G__63791) : frontend.db.page_empty_QMARK_.call(null,G__63790,G__63791));
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = empty_blocks_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not(page_exists_QMARK_);
}
})())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.check_directory_permission_BANG_(repo_url),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_journals_directory())].join('')),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_(repo_dir,file_path),(function (file_exists_QMARK_){
return promesa.protocols._promise((function (){
if(cljs.core.truth_(file_exists_QMARK_)){
} else {
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,content__$1),(function (___$2){
return promesa.protocols._promise(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_path,content__$1),(function (___$3){
return promesa.protocols._promise((cljs.core.truth_(frontend.state.editing_QMARK_())?null:frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0()));
}));
})));
}));
}));
}

if(cljs.core.truth_(frontend.state.editing_QMARK_())){
return null;
} else {
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
}
})()
);
}));
}));
}));
}));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.repo.create_default_files_BANG_ = (function frontend$handler$repo$create_default_files_BANG_(var_args){
var G__63793 = arguments.length;
switch (G__63793) {
case 1:
return frontend.handler.repo.create_default_files_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.repo.create_default_files_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.repo.create_default_files_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return frontend.handler.repo.create_default_files_BANG_.cljs$core$IFn$_invoke$arity$2(repo_url,false);
}));

(frontend.handler.repo.create_default_files_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,encrypted_QMARK_){
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

var repo_dir = frontend.config.get_repo_dir(repo_url);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",frontend.config.app_name].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",frontend.config.app_name,"/",frontend.config.recycle_dir].join('')),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_journals_directory())].join('')),(function (___$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.create_metadata_file(repo_url,encrypted_QMARK_),(function (___$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.create_config_file_if_not_exists(repo_url),(function (___$4){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.create_contents_file(repo_url),(function (___$5){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.create_custom_theme(repo_url),(function (___$6){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create-today-journal","page/create-today-journal",-248526088),repo_url], null)));
}));
}));
}));
}));
}));
}));
}));
}));
}));

(frontend.handler.repo.create_default_files_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * force?: if set true, skip the metadata timestamp range check
 */
frontend.handler.repo.load_pages_metadata_BANG_ = (function frontend$handler$repo$load_pages_metadata_BANG_(var_args){
var G__63796 = arguments.length;
switch (G__63796) {
case 3:
return frontend.handler.repo.load_pages_metadata_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.repo.load_pages_metadata_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.repo.load_pages_metadata_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo,file_paths,files){
return frontend.handler.repo.load_pages_metadata_BANG_.cljs$core$IFn$_invoke$arity$4(repo,file_paths,files,false);
}));

(frontend.handler.repo.load_pages_metadata_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (repo,file_paths,files,force_QMARK_){
try{var file = frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.contains_QMARK_(cljs.core.set(file_paths),file)){
var temp__5720__auto__ = cljs.core.some((function (p1__63794_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__63794_SHARP_),file)){
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(p1__63794_SHARP_);
} else {
return null;
}
}),files);
if(cljs.core.truth_(temp__5720__auto__)){
var content = temp__5720__auto__;
var metadata = frontend.handler.common.safe_read_string(content,"Parsing pages metadata file failed: ");
var pages = (frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_all_pages.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_all_pages.call(null,repo));
var pages__$1 = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),pages),pages);
var metadata__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__63798){
var map__63799 = p__63798;
var map__63799__$1 = cljs.core.__destructure_map(map__63799);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63799__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63799__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63799__$1,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var temp__5720__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pages__$1,name);
if(cljs.core.truth_(temp__5720__auto____$1)){
var page = temp__5720__auto____$1;
var and__4251__auto__ = (updated_at >= created_at);
if(and__4251__auto__){
var and__4251__auto____$1 = (function (){var or__4253__auto__ = force_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (((((new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(page) == null)) || ((created_at >= new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(page))))) && ((((new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(page) == null)) || ((updated_at >= new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(page))))));
}
})();
if(cljs.core.truth_(and__4251__auto____$1)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(created_at,new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(page))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(updated_at,new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(page))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
} else {
return null;
}
}),metadata));
if(cljs.core.seq(metadata__$1)){
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(repo,metadata__$1) : frontend.db.transact_BANG_.call(null,repo,metadata__$1));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}catch (e63797){if((e63797 instanceof Error)){
var e = e63797;
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.repo",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),175], null)),e);
} else {
throw e63797;

}
}}));

(frontend.handler.repo.load_pages_metadata_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * update pages meta content -> db. Only accept non-encrypted content!
 */
frontend.handler.repo.update_pages_metadata_BANG_ = (function frontend$handler$repo$update_pages_metadata_BANG_(repo,content,force_QMARK_){
var path = frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$0();
var files = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),path,new cljs.core.Keyword("file","content","file/content",12680964),content], null)], null);
var file_paths = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null);
if(cljs.core.truth_(goog.DEBUG)){
var k__44805__auto__ = "update-pages-metadata!";
console.time(k__44805__auto__);

var res__44806__auto__ = frontend.handler.repo.load_pages_metadata_BANG_.cljs$core$IFn$_invoke$arity$4(repo,file_paths,files,force_QMARK_);
console.timeEnd(k__44805__auto__);

return res__44806__auto__;
} else {
return frontend.handler.repo.load_pages_metadata_BANG_.cljs$core$IFn$_invoke$arity$4(repo,file_paths,files,force_QMARK_);
}
});
frontend.handler.repo.parse_and_load_file_BANG_ = (function frontend$handler$repo$parse_and_load_file_BANG_(repo_url,file,new_graph_QMARK_){
try{frontend.handler.file.alter_file(repo_url,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new_graph_QMARK_,new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),false,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),true], null));
}catch (e63801){var e_63894 = e63801;
frontend.state.set_parsing_state_BANG_((function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.Keyword(null,"failed-parsing-files","failed-parsing-files",1012423223),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),e_63894], null));
}));
}
return frontend.state.set_parsing_state_BANG_((function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"finished","finished",-1018867731),cljs.core.inc);
}));
});
frontend.handler.repo.after_parse = (function frontend$handler$repo$after_parse(repo_url,files,file_paths,db_encrypted_QMARK_,re_render_QMARK_,re_render_opts,opts,graph_added_chan){
frontend.handler.repo.load_pages_metadata_BANG_.cljs$core$IFn$_invoke$arity$4(repo_url,file_paths,files,true);

if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570).cljs$core$IFn$_invoke$arity$1(opts));
}
})())){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(db_encrypted_QMARK_);
if(and__4251__auto__){
return frontend.state.enable_encryption_QMARK_(repo_url);
} else {
return and__4251__auto__;
}
})())){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","encryption-setup-dialog","modal/encryption-setup-dialog",-1390123497),repo_url,(function (p1__63806_SHARP_){
return frontend.handler.repo.create_default_files_BANG_.cljs$core$IFn$_invoke$arity$2(repo_url,p1__63806_SHARP_);
})], null));
} else {
frontend.handler.repo.create_default_files_BANG_.cljs$core$IFn$_invoke$arity$2(repo_url,db_encrypted_QMARK_);
}
} else {
}

if(cljs.core.truth_(re_render_QMARK_)){
frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$1(re_render_opts);
} else {
}

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","added","graph/added",2021754774),repo_url,opts], null));

frontend.state.reset_parsing_state_BANG_();

frontend.state.set_loading_files_BANG_(repo_url,false);

return cljs.core.async.offer_BANG_(graph_added_chan,true);
});
frontend.handler.repo.parse_files_and_create_default_files_inner_BANG_ = (function frontend$handler$repo$parse_files_and_create_default_files_inner_BANG_(repo_url,files,delete_files,delete_blocks,file_paths,db_encrypted_QMARK_,re_render_QMARK_,re_render_opts,opts){
var support_files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
var format = logseq.graph_parser.util.get_format(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file));
return cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null], null), null),logseq.graph_parser.config.mldoc_support_formats),format);
}),files);
var support_files__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),support_files);
var map__63813 = cljs.core.group_by((function (file){
return clojure.string.includes_QMARK_(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),"journals/");
}),support_files__$1);
var map__63813__$1 = cljs.core.__destructure_map(map__63813);
var journals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63813__$1,true);
var non_journals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63813__$1,false);
var map__63814 = cljs.core.group_by((function (file){
return ((clojure.string.includes_QMARK_(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),"contents.")) || (((clojure.string.includes_QMARK_(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),".edn")) || (clojure.string.includes_QMARK_(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),"custom.css")))));
}),non_journals);
var map__63814__$1 = cljs.core.__destructure_map(map__63814);
var built_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63814__$1,true);
var others = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63814__$1,false);
var support_files_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reverse(journals),built_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([others], 0));
var new_graph_QMARK_ = new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695).cljs$core$IFn$_invoke$arity$1(opts);
var delete_data = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(delete_files,delete_blocks));
var chan = cljs.core.async.to_chan_BANG_(support_files_SINGLEQUOTE_);
var graph_added_chan = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.seq(delete_data)){
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(repo_url,delete_data) : frontend.db.transact_BANG_.call(null,repo_url,delete_data));
} else {
}

frontend.state.set_current_repo_BANG_(repo_url);

frontend.state.set_parsing_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count(support_files_SINGLEQUOTE_)], null));

if(frontend.util.node_test_QMARK_){
var seq__63816_63895 = cljs.core.seq(support_files_SINGLEQUOTE_);
var chunk__63817_63896 = null;
var count__63818_63897 = (0);
var i__63819_63898 = (0);
while(true){
if((i__63819_63898 < count__63818_63897)){
var file_63899 = chunk__63817_63896.cljs$core$IIndexed$_nth$arity$2(null,i__63819_63898);
frontend.state.set_parsing_state_BANG_(((function (seq__63816_63895,chunk__63817_63896,count__63818_63897,i__63819_63898,file_63899,support_files,support_files__$1,map__63813,map__63813__$1,journals,non_journals,map__63814,map__63814__$1,built_in,others,support_files_SINGLEQUOTE_,new_graph_QMARK_,delete_data,chan,graph_added_chan){
return (function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"current-parsing-file","current-parsing-file",1063090327),new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file_63899));
});})(seq__63816_63895,chunk__63817_63896,count__63818_63897,i__63819_63898,file_63899,support_files,support_files__$1,map__63813,map__63813__$1,journals,non_journals,map__63814,map__63814__$1,built_in,others,support_files_SINGLEQUOTE_,new_graph_QMARK_,delete_data,chan,graph_added_chan))
);

frontend.handler.repo.parse_and_load_file_BANG_(repo_url,file_63899,new_graph_QMARK_);


var G__63900 = seq__63816_63895;
var G__63901 = chunk__63817_63896;
var G__63902 = count__63818_63897;
var G__63903 = (i__63819_63898 + (1));
seq__63816_63895 = G__63900;
chunk__63817_63896 = G__63901;
count__63818_63897 = G__63902;
i__63819_63898 = G__63903;
continue;
} else {
var temp__5720__auto___63904 = cljs.core.seq(seq__63816_63895);
if(temp__5720__auto___63904){
var seq__63816_63905__$1 = temp__5720__auto___63904;
if(cljs.core.chunked_seq_QMARK_(seq__63816_63905__$1)){
var c__4679__auto___63906 = cljs.core.chunk_first(seq__63816_63905__$1);
var G__63907 = cljs.core.chunk_rest(seq__63816_63905__$1);
var G__63908 = c__4679__auto___63906;
var G__63909 = cljs.core.count(c__4679__auto___63906);
var G__63910 = (0);
seq__63816_63895 = G__63907;
chunk__63817_63896 = G__63908;
count__63818_63897 = G__63909;
i__63819_63898 = G__63910;
continue;
} else {
var file_63911 = cljs.core.first(seq__63816_63905__$1);
frontend.state.set_parsing_state_BANG_(((function (seq__63816_63895,chunk__63817_63896,count__63818_63897,i__63819_63898,file_63911,seq__63816_63905__$1,temp__5720__auto___63904,support_files,support_files__$1,map__63813,map__63813__$1,journals,non_journals,map__63814,map__63814__$1,built_in,others,support_files_SINGLEQUOTE_,new_graph_QMARK_,delete_data,chan,graph_added_chan){
return (function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"current-parsing-file","current-parsing-file",1063090327),new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file_63911));
});})(seq__63816_63895,chunk__63817_63896,count__63818_63897,i__63819_63898,file_63911,seq__63816_63905__$1,temp__5720__auto___63904,support_files,support_files__$1,map__63813,map__63813__$1,journals,non_journals,map__63814,map__63814__$1,built_in,others,support_files_SINGLEQUOTE_,new_graph_QMARK_,delete_data,chan,graph_added_chan))
);

frontend.handler.repo.parse_and_load_file_BANG_(repo_url,file_63911,new_graph_QMARK_);


var G__63912 = cljs.core.next(seq__63816_63905__$1);
var G__63913 = null;
var G__63914 = (0);
var G__63915 = (0);
seq__63816_63895 = G__63912;
chunk__63817_63896 = G__63913;
count__63818_63897 = G__63914;
i__63819_63898 = G__63915;
continue;
}
} else {
}
}
break;
}

frontend.handler.repo.after_parse(repo_url,files,file_paths,db_encrypted_QMARK_,re_render_QMARK_,re_render_opts,opts,graph_added_chan);
} else {
var c__41861__auto___63916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63856){
var state_val_63857 = (state_63856[(1)]);
if((state_val_63857 === (1))){
var state_63856__$1 = state_63856;
var statearr_63858_63917 = state_63856__$1;
(statearr_63858_63917[(2)] = null);

(statearr_63858_63917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63857 === (2))){
var state_63856__$1 = state_63856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63856__$1,(4),chan);
} else {
if((state_val_63857 === (3))){
var inst_63854 = (state_63856[(2)]);
var state_63856__$1 = state_63856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63856__$1,inst_63854);
} else {
if((state_val_63857 === (4))){
var inst_63840 = (state_63856[(7)]);
var inst_63840__$1 = (state_63856[(2)]);
var state_63856__$1 = (function (){var statearr_63859 = state_63856;
(statearr_63859[(7)] = inst_63840__$1);

return statearr_63859;
})();
if(cljs.core.truth_(inst_63840__$1)){
var statearr_63860_63918 = state_63856__$1;
(statearr_63860_63918[(1)] = (5));

} else {
var statearr_63861_63919 = state_63856__$1;
(statearr_63861_63919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63857 === (5))){
var inst_63840 = (state_63856[(7)]);
var inst_63842 = (function (){var temp__5718__auto__ = inst_63840;
var file = inst_63840;
return (function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"current-parsing-file","current-parsing-file",1063090327),new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file));
});
})();
var inst_63843 = frontend.state.set_parsing_state_BANG_(inst_63842);
var inst_63844 = cljs.core.async.timeout((10));
var state_63856__$1 = (function (){var statearr_63862 = state_63856;
(statearr_63862[(8)] = inst_63843);

return statearr_63862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63856__$1,(8),inst_63844);
} else {
if((state_val_63857 === (6))){
var inst_63850 = frontend.handler.repo.after_parse(repo_url,files,file_paths,db_encrypted_QMARK_,re_render_QMARK_,re_render_opts,opts,graph_added_chan);
var state_63856__$1 = state_63856;
var statearr_63863_63920 = state_63856__$1;
(statearr_63863_63920[(2)] = inst_63850);

(statearr_63863_63920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63857 === (7))){
var inst_63852 = (state_63856[(2)]);
var state_63856__$1 = state_63856;
var statearr_63864_63921 = state_63856__$1;
(statearr_63864_63921[(2)] = inst_63852);

(statearr_63864_63921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63857 === (8))){
var inst_63840 = (state_63856[(7)]);
var inst_63846 = (state_63856[(2)]);
var inst_63847 = frontend.handler.repo.parse_and_load_file_BANG_(repo_url,inst_63840,new_graph_QMARK_);
var state_63856__$1 = (function (){var statearr_63865 = state_63856;
(statearr_63865[(9)] = inst_63847);

(statearr_63865[(10)] = inst_63846);

return statearr_63865;
})();
var statearr_63866_63922 = state_63856__$1;
(statearr_63866_63922[(2)] = null);

(statearr_63866_63922[(1)] = (2));


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
var frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto__ = null;
var frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto____0 = (function (){
var statearr_63867 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63867[(0)] = frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto__);

(statearr_63867[(1)] = (1));

return statearr_63867;
});
var frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto____1 = (function (state_63856){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63856);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63868){var ex__41842__auto__ = e63868;
var statearr_63869_63923 = state_63856;
(statearr_63869_63923[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63856[(4)]))){
var statearr_63870_63924 = state_63856;
(statearr_63870_63924[(1)] = cljs.core.first((state_63856[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63925 = state_63856;
state_63856 = G__63925;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto__ = function(state_63856){
switch(arguments.length){
case 0:
return frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto____1.call(this,state_63856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto____0;
frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto____1;
return frontend$handler$repo$parse_files_and_create_default_files_inner_BANG__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63871 = f__41862__auto__();
(statearr_63871[(6)] = c__41861__auto___63916);

return statearr_63871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

}

return graph_added_chan;
});
frontend.handler.repo.parse_files_and_create_default_files_BANG_ = (function frontend$handler$repo$parse_files_and_create_default_files_BANG_(repo_url,files,delete_files,delete_blocks,file_paths,db_encrypted_QMARK_,re_render_QMARK_,re_render_opts,opts){
if(cljs.core.truth_(db_encrypted_QMARK_)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file)),(function (content){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword("file","content","file/content",12680964),content));
}));
}));
}),files)),(function (files__$1){
return promesa.protocols._promise(frontend.handler.repo.parse_files_and_create_default_files_inner_BANG_(repo_url,files__$1,delete_files,delete_blocks,file_paths,db_encrypted_QMARK_,re_render_QMARK_,re_render_opts,opts));
}));
}));
} else {
return frontend.handler.repo.parse_files_and_create_default_files_inner_BANG_(repo_url,files,delete_files,delete_blocks,file_paths,db_encrypted_QMARK_,re_render_QMARK_,re_render_opts,opts);
}
});
frontend.handler.repo.parse_files_and_load_to_db_BANG_ = (function frontend$handler$repo$parse_files_and_load_to_db_BANG_(repo_url,files,p__63873){
var map__63874 = p__63873;
var map__63874__$1 = cljs.core.__destructure_map(map__63874);
var opts = map__63874__$1;
var delete_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63874__$1,new cljs.core.Keyword(null,"delete-files","delete-files",-1930731439));
var delete_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63874__$1,new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596));
var re_render_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63874__$1,new cljs.core.Keyword(null,"re-render?","re-render?",-1390644928),true);
var re_render_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63874__$1,new cljs.core.Keyword(null,"re-render-opts","re-render-opts",-832360338));
var _refresh_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63874__$1,new cljs.core.Keyword(null,"_refresh?","_refresh?",677352006));
var file_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),files);
var metadata_file = frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$0();
var metadata_content = cljs.core.some((function (p1__63872_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__63872_SHARP_),metadata_file)){
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(p1__63872_SHARP_);
} else {
return null;
}
}),files);
var metadata = (cljs.core.truth_(metadata_content)?frontend.handler.common.read_metadata_BANG_(metadata_content):null);
var db_encrypted_QMARK_ = new cljs.core.Keyword("db","encrypted?","db/encrypted?",491114125).cljs$core$IFn$_invoke$arity$1(metadata);
var db_encrypted_secret = (cljs.core.truth_(db_encrypted_QMARK_)?new cljs.core.Keyword("db","encrypted-secret","db/encrypted-secret",1946959297).cljs$core$IFn$_invoke$arity$1(metadata):null);
if(cljs.core.truth_(db_encrypted_QMARK_)){
var close_fn = (function (){
return frontend.handler.repo.parse_files_and_create_default_files_BANG_(repo_url,files,delete_files,delete_blocks,file_paths,db_encrypted_QMARK_,re_render_QMARK_,re_render_opts,opts);
});
frontend.state.set_state_BANG_(new cljs.core.Keyword("encryption","graph-parsing?","encryption/graph-parsing?",1059330925),true);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","encryption-input-secret-dialog","modal/encryption-input-secret-dialog",1202500574),repo_url,db_encrypted_secret,close_fn], null));
} else {
return frontend.handler.repo.parse_files_and_create_default_files_BANG_(repo_url,files,delete_files,delete_blocks,file_paths,db_encrypted_QMARK_,re_render_QMARK_,re_render_opts,opts);
}
});
frontend.handler.repo.load_repo_to_db_BANG_ = (function frontend$handler$repo$load_repo_to_db_BANG_(repo_url,p__63878){
var map__63879 = p__63878;
var map__63879__$1 = cljs.core.__destructure_map(map__63879);
var diffs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63879__$1,new cljs.core.Keyword(null,"diffs","diffs",-1720136241));
var nfs_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63879__$1,new cljs.core.Keyword(null,"nfs-files","nfs-files",-360703182));
var refresh_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63879__$1,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570));
var new_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63879__$1,new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695));
var empty_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63879__$1,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639));
frontend.spec.validate(new cljs.core.Keyword("repos","url","repos/url",454158615),repo_url);

frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.state.set_parsing_state_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-loading?","graph-loading?",1136649541),true], null));

var config = (function (){var or__4253__auto__ = frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo_url);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5720__auto__ = (function (){var G__63880 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63875_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$1(repo_url),new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__63875_SHARP_));
}),nfs_files));
if((G__63880 == null)){
return null;
} else {
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(G__63880);
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var content = temp__5720__auto__;
return frontend.handler.common.read_config(content);
} else {
return null;
}
}
})();
var relate_path_fn = (function (m,k){
var G__63881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if((G__63881 == null)){
return null;
} else {
return clojure.string.replace(G__63881,decodeURI(frontend.config.get_local_dir(repo_url)),"");
}
});
var nfs_files__$1 = frontend.handler.common.remove_hidden_files(nfs_files,config,(function (p1__63876_SHARP_){
return relate_path_fn(p1__63876_SHARP_,new cljs.core.Keyword("file","path","file/path",-191335748));
}));
var diffs__$1 = frontend.handler.common.remove_hidden_files(diffs,config,(function (p1__63877_SHARP_){
return relate_path_fn(p1__63877_SHARP_,new cljs.core.Keyword(null,"path","path",-188191168));
}));
var load_contents = (function (files,option){
return frontend.handler.file.load_files_contents_BANG_(repo_url,files,(function (files_contents){
return frontend.handler.repo.parse_files_and_load_to_db_BANG_(repo_url,files_contents,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570),refresh_QMARK_));
}));
});
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(cljs.core.seq(diffs__$1));
if(and__4251__auto__){
return nfs_files__$1;
} else {
return and__4251__auto__;
}
})())){
return frontend.handler.repo.parse_files_and_load_to_db_BANG_(repo_url,nfs_files__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new_graph_QMARK_,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639),empty_graph_QMARK_], null));
} else {
if(cljs.core.seq(diffs__$1)){
var filter_diffs = (function (type){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(f));
}),diffs__$1));
});
var remove_files = filter_diffs("remove");
var modify_files = filter_diffs("modify");
var add_files = filter_diffs("add");
var delete_files = ((cljs.core.seq(remove_files))?(frontend.db.delete_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.delete_files.cljs$core$IFn$_invoke$arity$1(remove_files) : frontend.db.delete_files.call(null,remove_files)):null);
var delete_blocks = (frontend.db.delete_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.delete_blocks.cljs$core$IFn$_invoke$arity$3(repo_url,remove_files,true) : frontend.db.delete_blocks.call(null,repo_url,remove_files,true));
var delete_blocks__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(delete_blocks,(frontend.db.delete_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.delete_blocks.cljs$core$IFn$_invoke$arity$3(repo_url,modify_files,false) : frontend.db.delete_blocks.call(null,repo_url,modify_files,false))));
var delete_pages = ((cljs.core.seq(remove_files))?(frontend.db.delete_pages_by_files.cljs$core$IFn$_invoke$arity$1 ? frontend.db.delete_pages_by_files.cljs$core$IFn$_invoke$arity$1(remove_files) : frontend.db.delete_pages_by_files.call(null,remove_files)):cljs.core.PersistentVector.EMPTY);
var add_or_modify_files = (function (){var G__63882 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(modify_files,add_files);
if((G__63882 == null)){
return null;
} else {
return logseq.graph_parser.util.remove_nils(G__63882);
}
})();
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"delete-files","delete-files",-1930731439),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(delete_files,delete_pages),new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),delete_blocks__$1,new cljs.core.Keyword(null,"re-render?","re-render?",-1390644928),true], null);
if(cljs.core.seq(nfs_files__$1)){
return frontend.handler.repo.parse_files_and_load_to_db_BANG_(repo_url,nfs_files__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570),refresh_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-render-opts","re-render-opts",-832360338),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-all-query-state?","clear-all-query-state?",-289780993),true], null)], 0)));
} else {
return load_contents(add_or_modify_files,options);
}
} else {
return null;
}

}
});
frontend.handler.repo.remove_repo_BANG_ = (function frontend$handler$repo$remove_repo_BANG_(p__63883){
var map__63884 = p__63883;
var map__63884__$1 = cljs.core.__destructure_map(map__63884);
var repo = map__63884__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63884__$1,new cljs.core.Keyword(null,"url","url",276297046));
var delete_db_f = (function (){
var graph_exists_QMARK_ = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.get_db.call(null,url));
(frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.remove_conn_BANG_.call(null,url));

frontend.db.persist.delete_graph_BANG_(url);

frontend.search.remove_db_BANG_(url);

frontend.state.delete_repo_BANG_(repo);

if(cljs.core.truth_(graph_exists_QMARK_)){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["graphUnlinked",repo], 0));
} else {
return null;
}
});
if(((frontend.config.local_db_QMARK_(url)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(url,"local")))){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.clear_local_db_BANG_(url),(function (_){
return promesa.protocols._promise(delete_db_f());
}));
}));
} else {
return null;
}
});
frontend.handler.repo.start_repo_db_if_not_exists_BANG_ = (function frontend$handler$repo$start_repo_db_if_not_exists_BANG_(repo,option){
frontend.state.set_current_repo_BANG_(repo);

return frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$3(null,repo,option);
});
frontend.handler.repo.setup_local_repo_if_not_exists_BANG_ = (function frontend$handler$repo$setup_local_repo_if_not_exists_BANG_(){
if(cljs.core.truth_(window.pfs)){
var repo = frontend.config.local_repo;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42616__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(["/",repo].join('')),(function (___42615__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.set_current_repo_BANG_(repo),(function (___42615__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$2(null,repo),(function (___42615__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((frontend.config.publishing_QMARK_)?null:(function (){var dummy_notes = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tutorial","dummy-notes","tutorial/dummy-notes",-1163921856)], 0));
return frontend.handler.repo.create_dummy_notes_page(repo,dummy_notes);
})()),(function (___42615__auto____$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((frontend.config.publishing_QMARK_)?null:(function (){var tutorial = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tutorial","text","tutorial/text",-1708662915)], 0));
var tutorial__$1 = clojure.string.replace_first(tutorial,"$today",frontend.date.today());
return frontend.handler.repo.create_today_journal_if_not_exists(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),tutorial__$1], null));
})()),(function (___42615__auto____$4){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.create_config_file_if_not_exists(repo),(function (___42615__auto____$5){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.create_contents_file(repo),(function (___42615__auto____$6){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.create_custom_theme(repo),(function (___42615__auto____$7){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.set_db_restoring_BANG_(false),(function (___42615__auto____$8){
return promesa.protocols._promise(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0());
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
} else {
return setTimeout(frontend.handler.repo.setup_local_repo_if_not_exists_BANG_,(100));
}
});
/**
 * Restore the db of a graph from the persisted data, and setup.
 * Create a new conn, or replace the conn in state with a new one.
 * me: optional, identity data, can be retrieved from `(state/get-me)` or `nil`
 */
frontend.handler.repo.restore_and_setup_repo_BANG_ = (function frontend$handler$repo$restore_and_setup_repo_BANG_(var_args){
var G__63886 = arguments.length;
switch (G__63886) {
case 1:
return frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$2(repo,frontend.state.get_me());
}));

(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,me__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.set_db_restoring_BANG_(true),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.restore_graph_BANG_(repo,me__$1),(function (___$1){
return promesa.protocols._promise((function (){
frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$2(repo,false);

frontend.db.listen_and_persist_BANG_(repo);

frontend.handler.ui.add_style_if_exists_BANG_();

return frontend.state.set_db_restoring_BANG_(false);
})()
);
}));
}));
}));
}));

(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.repo.rebuild_index_BANG_ = (function frontend$handler$repo$rebuild_index_BANG_(url){
if(cljs.core.truth_(url)){
frontend.search.reset_indice_BANG_(url);

(frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.remove_conn_BANG_.call(null,url));

(frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.db.clear_query_state_BANG_.call(null));

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42616__auto__){
return promesa.protocols._promise(frontend.db.persist.delete_graph_BANG_(url));
})),(function (error){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Delete repo failed, error: ",error], 0));
}));
} else {
return null;
}
});
frontend.handler.repo.re_index_BANG_ = (function frontend$handler$repo$re_index_BANG_(nfs_rebuild_index_BANG_,ok_handler){
frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var local_QMARK_ = frontend.config.local_db_QMARK_(repo);
if(local_QMARK_){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.metadata.set_pages_metadata_BANG_(repo),(function (_){
return promesa.protocols._promise((nfs_rebuild_index_BANG_.cljs$core$IFn$_invoke$arity$2 ? nfs_rebuild_index_BANG_.cljs$core$IFn$_invoke$arity$2(repo,ok_handler) : nfs_rebuild_index_BANG_.call(null,repo,ok_handler)));
}));
}));
} else {
frontend.handler.repo.rebuild_index_BANG_(repo);
}

return setTimeout(frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0(),(500));
} else {
return null;
}
});
frontend.handler.repo.persist_db_BANG_ = (function frontend$handler$repo$persist_db_BANG_(var_args){
var G__63888 = arguments.length;
switch (G__63888) {
case 0:
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (handlers){
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),handlers);
}));

(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,p__63889){
var map__63890 = p__63889;
var map__63890__$1 = cljs.core.__destructure_map(map__63890);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63890__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63890__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63890__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42616__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(before)?(before.cljs$core$IFn$_invoke$arity$0 ? before.cljs$core$IFn$_invoke$arity$0() : before.call(null)):null),(function (___42615__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.metadata.set_pages_metadata_BANG_(repo),(function (___42615__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.db.persist_BANG_(repo),(function (___42615__auto____$2){
return promesa.protocols._promise((cljs.core.truth_(on_success)?(on_success.cljs$core$IFn$_invoke$arity$0 ? on_success.cljs$core$IFn$_invoke$arity$0() : on_success.call(null)):null));
}));
}));
}));
})),(function (error){
console.error(error);

if(cljs.core.truth_(on_error)){
return (on_error.cljs$core$IFn$_invoke$arity$0 ? on_error.cljs$core$IFn$_invoke$arity$0() : on_error.call(null));
} else {
return null;
}
}));
}));

(frontend.handler.repo.persist_db_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Only works for electron
 * Call backend to handle persisting a specific db on other window
 * Skip persisting if no other windows is open (controlled by electron)
 *   step 1. [In HERE]  a window         ---broadcastPersistGraph---->   electron
 *   step 2.            electron         ---------persistGraph------->   window holds the graph
 *   step 3.            window w/ graph  --broadcastPersistGraphDone->   electron
 *   step 4. [In HERE]  a window         <---broadcastPersistGraph----   electron
 */
frontend.handler.repo.broadcast_persist_db_BANG_ = (function frontend$handler$repo$broadcast_persist_db_BANG_(graph){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["broadcastPersistGraph",graph], 0)),(function (_){
return promesa.protocols._promise(null);
}));
}));
});
/**
 * Call electron that the graph is loaded.
 */
frontend.handler.repo.graph_ready_BANG_ = (function frontend$handler$repo$graph_ready_BANG_(graph){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["graphReady",graph], 0));
});

//# sourceMappingURL=frontend.handler.repo.js.map