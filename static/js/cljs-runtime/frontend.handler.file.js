goog.provide('frontend.handler.file');
frontend.handler.file.load_file = (function frontend$handler$file$load_file(repo_url,path){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo_url),path),(function (content){
return promesa.protocols._promise(content);
}));
})),(function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Load file failed: ",path], 0));

return console.error(e);
}));
});
frontend.handler.file.load_multiple_files = (function frontend$handler$file$load_multiple_files(repo_url,paths){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__94309_SHARP_){
return frontend.handler.file.load_file(repo_url,p1__94309_SHARP_);
}),paths));
});
frontend.handler.file.keep_formats = (function frontend$handler$file$keep_formats(files,formats){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
var format = frontend.format.get_format(file);
return cljs.core.contains_QMARK_(formats,format);
}),files);
});
frontend.handler.file.only_text_formats = (function frontend$handler$file$only_text_formats(files){
return frontend.handler.file.keep_formats(files,frontend.config.text_formats());
});
frontend.handler.file.only_image_formats = (function frontend$handler$file$only_image_formats(files){
return frontend.handler.file.keep_formats(files,frontend.config.img_formats());
});
frontend.handler.file.restore_config_BANG_ = (function frontend$handler$file$restore_config_BANG_(var_args){
var G__94311 = arguments.length;
switch (G__94311) {
case 2:
return frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,project_changed_check_QMARK_){
return frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,null,project_changed_check_QMARK_);
}));

(frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,config_content,_project_changed_check_QMARK_){
var config_content__$1 = (cljs.core.truth_(config_content)?config_content:frontend.handler.common.get_config(repo_url));
if(cljs.core.truth_(config_content__$1)){
return frontend.handler.common.reset_config_BANG_(repo_url,config_content__$1);
} else {
return null;
}
}));

(frontend.handler.file.restore_config_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.file.load_files_contents_BANG_ = (function frontend$handler$file$load_files_contents_BANG_(repo_url,files,ok_handler){
var images = frontend.handler.file.only_image_formats(files);
var files__$1 = frontend.handler.file.only_text_formats(files);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(frontend.handler.file.load_multiple_files(repo_url,files__$1)),(function (contents){
var file_contents = (function (){var G__94312 = cljs.core.zipmap(files__$1,contents);
if(cljs.core.seq(images)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__94312,cljs.core.zipmap(images,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(images),""))], 0));
} else {
return G__94312;
}
})();
var file_contents__$1 = (function (){var iter__4652__auto__ = (function frontend$handler$file$load_files_contents_BANG__$_iter__94313(s__94314){
return (new cljs.core.LazySeq(null,(function (){
var s__94314__$1 = s__94314;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__94314__$1);
if(temp__5720__auto__){
var s__94314__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94314__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__94314__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__94316 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__94315 = (0);
while(true){
if((i__94315 < size__4651__auto__)){
var vec__94317 = cljs.core._nth(c__4650__auto__,i__94315);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94317,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94317,(1),null);
cljs.core.chunk_append(b__94316,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(file),new cljs.core.Keyword("file","content","file/content",12680964),content], null));

var G__94527 = (i__94315 + (1));
i__94315 = G__94527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94316),frontend$handler$file$load_files_contents_BANG__$_iter__94313(cljs.core.chunk_rest(s__94314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94316),null);
}
} else {
var vec__94320 = cljs.core.first(s__94314__$2);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94320,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94320,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(file),new cljs.core.Keyword("file","content","file/content",12680964),content], null),frontend$handler$file$load_files_contents_BANG__$_iter__94313(cljs.core.rest(s__94314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(file_contents);
})();
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(file_contents__$1) : ok_handler.call(null,file_contents__$1));
})),(function (error){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nfs","load-files-error","nfs/load-files-error",1672347248),repo_url,new cljs.core.Keyword(null,"line","line",212345235),83], null)),null);

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),84], null)),error);
}));
});
/**
 * Conflict of files towards same page
 */
frontend.handler.file.page_exists_in_another_file = (function frontend$handler$file$page_exists_in_another_file(repo_url,page,file){
var temp__5720__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5720__auto__)){
var page_name = temp__5720__auto__;
var current_file = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_file.cljs$core$IFn$_invoke$arity$2(repo_url,page_name) : frontend.db.get_page_file.call(null,repo_url,page_name)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file,current_file)){
return current_file;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.file.reset_file_BANG_ = (function frontend$handler$file$reset_file_BANG_(var_args){
var G__94345 = arguments.length;
switch (G__94345) {
case 3:
return frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,file,content){
return frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4(repo_url,file,content,false);
}));

(frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (repo_url,file,content,new_graph_QMARK_){
var electron_local_repo_QMARK_ = (function (){var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__4251__auto__;
}
})();
var file__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = electron_local_repo_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = frontend.util.win32_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return module$frontend$utils.win32(file);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?file:(cljs.core.truth_((function (){var and__4251__auto__ = electron_local_repo_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
var or__4253__auto__ = frontend.util.win32_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(file));
}
} else {
return and__4251__auto__;
}
})())?[frontend.config.get_repo_dir(repo_url),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_((function (){var and__4251__auto__ = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(file));
} else {
return and__4251__auto__;
}
})())?file:(cljs.core.truth_((function (){var and__4251__auto__ = frontend.mobile.util.native_ios_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(file));
} else {
return and__4251__auto__;
}
})())?file:file
))));
var file__$2 = logseq.graph_parser.util.path_normalize(file__$1);
var new_QMARK_ = ((function (){var G__94346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),file__$2], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__94346) : frontend.db.entity.call(null,G__94346));
})() == null);
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,file__$2,content) : frontend.db.set_file_content_BANG_.call(null,repo_url,file__$2,content));

var format = frontend.format.get_format(file__$2);
var file_content = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),file__$2], null)], null);
var tx = ((cljs.core.contains_QMARK_(frontend.config.mldoc_support_formats,format))?(function (){var vec__94347 = frontend.handler.extract.extract_blocks_pages(repo_url,file__$2,content);
var pages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94347,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94347,(1),null);
var first_page = cljs.core.first(pages);
var delete_blocks = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((frontend.db.delete_file_blocks_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.delete_file_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(repo_url,file__$2) : frontend.db.delete_file_blocks_BANG_.call(null,repo_url,file__$2)),(cljs.core.truth_(first_page)?(function (){var G__94350 = repo_url;
var G__94351 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(first_page);
return (frontend.db.delete_page_blocks.cljs$core$IFn$_invoke$arity$2 ? frontend.db.delete_page_blocks.cljs$core$IFn$_invoke$arity$2(G__94350,G__94351) : frontend.db.delete_page_blocks.call(null,G__94350,G__94351));
})():null)));
var _ = (function (){var temp__5720__auto__ = frontend.handler.file.page_exists_in_another_file(repo_url,first_page,file__$2);
if(cljs.core.truth_(temp__5720__auto__)){
var current_file = temp__5720__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file__$2,current_file)){
var error = ["Page already exists with another file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_file),", current file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file__$2)].join('');
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),error,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null)], null));
} else {
return null;
}
} else {
return null;
}
})();
var block_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
}),blocks);
var block_refs_ids = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.second(ref)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (ref){
return ((cljs.core.vector_QMARK_(ref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ref))));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","refs","block/refs",-1214495349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0)))));
var block_ids__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(block_ids),cljs.core.set(block_refs_ids));
var pages__$1 = frontend.handler.extract.with_ref_pages(pages,blocks);
var pages_index = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__94328_SHARP_){
return cljs.core.select_keys(p1__94328_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316)], null));
}),pages__$1);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(file_content,pages_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delete_blocks,pages__$1,block_ids__$1,blocks], 0));
})():file_content);
var tx__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var t = cljs_time.coerce.to_long(cljs_time.core.now());
var G__94357 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),file__$2], null);
if(new_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__94357,new cljs.core.Keyword("file","created-at","file/created-at",-92397056),t);
} else {
return G__94357;
}
})()], null));
var G__94358 = repo_url;
var G__94359 = tx__$1;
var G__94360 = (cljs.core.truth_(new_graph_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),true], null):null);
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(G__94358,G__94359,G__94360) : frontend.db.transact_BANG_.call(null,G__94358,G__94359,G__94360));
}));

(frontend.handler.file.reset_file_BANG_.cljs$lang$maxFixedArity = 4);

frontend.handler.file.alter_file = (function frontend$handler$file$alter_file(repo,path,content,p__94364){
var map__94365 = p__94364;
var map__94365__$1 = cljs.core.__destructure_map(map__94365);
var reset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94365__$1,new cljs.core.Keyword(null,"reset?","reset?",-1051875415),true);
var re_render_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94365__$1,new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),false);
var from_disk_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94365__$1,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),false);
var skip_compare_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94365__$1,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),false);
var new_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94365__$1,new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695));
var original_content = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path));
var write_file_BANG_ = (cljs.core.truth_(from_disk_QMARK_)?(function (){
return promesa.core.resolved(null);
}):(function (){
return frontend.fs.write_file_BANG_(repo,frontend.config.get_repo_dir(repo),path,content,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(original_content)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),original_content], null):null),new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),skip_compare_QMARK_));
}));
if(cljs.core.truth_(reset_QMARK_)){
var temp__5720__auto___94532 = (frontend.db.get_file_page_id.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page_id.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file_page_id.call(null,path));
if(cljs.core.truth_(temp__5720__auto___94532)){
var page_id_94533 = temp__5720__auto___94532;
var G__94366_94534 = repo;
var G__94367_94535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),page_id_94533,new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),page_id_94533,new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__94366_94534,G__94367_94535) : frontend.db.transact_BANG_.call(null,G__94366_94534,G__94367_94535));
} else {
}

frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4(repo,path,content,new_graph_QMARK_);
} else {
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path,content) : frontend.db.set_file_content_BANG_.call(null,repo,path,content));
}

return frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(write_file_BANG_(),(function (_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$1(repo))){
frontend.handler.file.restore_config_BANG_.cljs$core$IFn$_invoke$arity$2(repo,true);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1(repo))){
frontend.handler.ui.add_style_if_exists_BANG_();
} else {
}

if(cljs.core.truth_(re_render_root_QMARK_)){
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
}),(function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Write file failed, path: ",path,", content: ",content], 0));

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("write","failed","write/failed",-1544073021),error,new cljs.core.Keyword(null,"line","line",212345235),189], null)),null);
}));
});
frontend.handler.file.set_file_content_BANG_ = (function frontend$handler$file$set_file_content_BANG_(repo,path,new_content){
return frontend.handler.file.alter_file(repo,path,new_content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset?","reset?",-1051875415),false,new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),false], null));
});
frontend.handler.file.alter_files = (function frontend$handler$file$alter_files(repo,files,p__94368){
var map__94369 = p__94368;
var map__94369__$1 = cljs.core.__destructure_map(map__94369);
var opts = map__94369__$1;
var reset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94369__$1,new cljs.core.Keyword(null,"reset?","reset?",-1051875415),false);
var update_db_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94369__$1,new cljs.core.Keyword(null,"update-db?","update-db?",-1641846808),true);
var file__GT_content = (function (){var paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,files);
return cljs.core.zipmap(paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path));
}),paths));
})();
if(cljs.core.truth_(update_db_QMARK_)){
var seq__94370_94536 = cljs.core.seq(files);
var chunk__94371_94537 = null;
var count__94372_94538 = (0);
var i__94373_94539 = (0);
while(true){
if((i__94373_94539 < count__94372_94538)){
var vec__94380_94540 = chunk__94371_94537.cljs$core$IIndexed$_nth$arity$2(null,i__94373_94539);
var path_94541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94380_94540,(0),null);
var content_94542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94380_94540,(1),null);
if(cljs.core.truth_(reset_QMARK_)){
frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_94541,content_94542);
} else {
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_94541,content_94542) : frontend.db.set_file_content_BANG_.call(null,repo,path_94541,content_94542));
}


var G__94543 = seq__94370_94536;
var G__94544 = chunk__94371_94537;
var G__94545 = count__94372_94538;
var G__94546 = (i__94373_94539 + (1));
seq__94370_94536 = G__94543;
chunk__94371_94537 = G__94544;
count__94372_94538 = G__94545;
i__94373_94539 = G__94546;
continue;
} else {
var temp__5720__auto___94547 = cljs.core.seq(seq__94370_94536);
if(temp__5720__auto___94547){
var seq__94370_94548__$1 = temp__5720__auto___94547;
if(cljs.core.chunked_seq_QMARK_(seq__94370_94548__$1)){
var c__4679__auto___94549 = cljs.core.chunk_first(seq__94370_94548__$1);
var G__94550 = cljs.core.chunk_rest(seq__94370_94548__$1);
var G__94551 = c__4679__auto___94549;
var G__94552 = cljs.core.count(c__4679__auto___94549);
var G__94553 = (0);
seq__94370_94536 = G__94550;
chunk__94371_94537 = G__94551;
count__94372_94538 = G__94552;
i__94373_94539 = G__94553;
continue;
} else {
var vec__94383_94554 = cljs.core.first(seq__94370_94548__$1);
var path_94555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94383_94554,(0),null);
var content_94556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94383_94554,(1),null);
if(cljs.core.truth_(reset_QMARK_)){
frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_94555,content_94556);
} else {
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_94555,content_94556) : frontend.db.set_file_content_BANG_.call(null,repo,path_94555,content_94556));
}


var G__94557 = cljs.core.next(seq__94370_94548__$1);
var G__94558 = null;
var G__94559 = (0);
var G__94560 = (0);
seq__94370_94536 = G__94557;
chunk__94371_94537 = G__94558;
count__94372_94538 = G__94559;
i__94373_94539 = G__94560;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5720__auto__ = frontend.state.get_file_write_chan();
if(cljs.core.truth_(temp__5720__auto__)){
var chan = temp__5720__auto__;
var chan_callback = new cljs.core.Keyword(null,"chan-callback","chan-callback",-1852200968).cljs$core$IFn$_invoke$arity$1(opts);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,files,opts,file__GT_content], null));

if(cljs.core.truth_(chan_callback)){
return (chan_callback.cljs$core$IFn$_invoke$arity$0 ? chan_callback.cljs$core$IFn$_invoke$arity$0() : chan_callback.call(null));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.file.alter_files_handler_BANG_ = (function frontend$handler$file$alter_files_handler_BANG_(repo,files,p__94386,file__GT_content){
var map__94387 = p__94386;
var map__94387__$1 = cljs.core.__destructure_map(map__94387);
var finish_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94387__$1,new cljs.core.Keyword(null,"finish-handler","finish-handler",770511735));
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94387__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var write_file_f = (function (p__94388){
var vec__94389 = p__94388;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94389,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94389,(1),null);
if(cljs.core.truth_(path)){
var original_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file__GT_content,path);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.fs.nfs.check_directory_permission_BANG_(repo);
}
})(),(function (_){
return promesa.protocols._promise(frontend.fs.write_file_BANG_(repo,frontend.config.get_repo_dir(repo),path,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),original_content], null)));
}));
})),(function (error){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["Failed to save the file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),". Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null)], null));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("write-file","failed","write-file/failed",325307384),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content-length","content-length",441319507),cljs.core.count(content),new cljs.core.Keyword(null,"error-str","error-str",-1967189260),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null)], null));

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("write-file","failed","write-file/failed",325307384),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),239], null)),null);
}));
} else {
return null;
}
});
var finish_handler__$1 = (function (){
if(cljs.core.truth_(finish_handler)){
(finish_handler.cljs$core$IFn$_invoke$arity$0 ? finish_handler.cljs$core$IFn$_invoke$arity$0() : finish_handler.call(null));
} else {
}

return frontend.handler.ui.re_render_file_BANG_();
});
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(write_file_f,files)),(function (){
finish_handler__$1();

if(cljs.core.truth_(chan)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,true);
} else {
return null;
}
})),(function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Alter files failed:"], 0));

console.error(error);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,false);
}));
});
frontend.handler.file.run_writes_chan_BANG_ = (function frontend$handler$file$run_writes_chan_BANG_(){
var chan = frontend.state.get_file_write_chan();
var c__41861__auto___94567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_94430){
var state_val_94431 = (state_94430[(1)]);
if((state_val_94431 === (7))){
var inst_94395 = (state_94430[(2)]);
var inst_94396 = [new cljs.core.Keyword("file","write-failed","file/write-failed",-229053199),new cljs.core.Keyword(null,"line","line",212345235)];
var inst_94397 = [inst_94395,265];
var inst_94398 = cljs.core.PersistentHashMap.fromArrays(inst_94396,inst_94397);
var inst_94399 = cljs.core.identity(inst_94398);
var inst_94400 = lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),inst_94399,null);
var state_94430__$1 = state_94430;
var statearr_94432_94569 = state_94430__$1;
(statearr_94432_94569[(2)] = inst_94400);

(statearr_94432_94569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (1))){
var state_94430__$1 = state_94430;
var statearr_94433_94570 = state_94430__$1;
(statearr_94433_94570[(2)] = null);

(statearr_94433_94570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (4))){
var inst_94394 = (state_94430[(2)]);
var state_94430__$1 = (function (){var statearr_94434 = state_94430;
(statearr_94434[(7)] = inst_94394);

return statearr_94434;
})();
var statearr_94435_94571 = state_94430__$1;
(statearr_94435_94571[(2)] = null);

(statearr_94435_94571[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (15))){
var inst_94422 = (state_94430[(2)]);
var _ = (function (){var statearr_94436 = state_94430;
(statearr_94436[(4)] = cljs.core.rest((state_94430[(4)])));

return statearr_94436;
})();
var state_94430__$1 = state_94430;
var statearr_94437_94572 = state_94430__$1;
(statearr_94437_94572[(2)] = inst_94422);

(statearr_94437_94572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (13))){
var inst_94409 = (state_94430[(8)]);
var inst_94419 = (function(){throw inst_94409})();
var state_94430__$1 = state_94430;
var statearr_94438_94573 = state_94430__$1;
(statearr_94438_94573[(2)] = inst_94419);

(statearr_94438_94573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (6))){
var inst_94425 = (state_94430[(2)]);
var state_94430__$1 = (function (){var statearr_94439 = state_94430;
(statearr_94439[(9)] = inst_94425);

return statearr_94439;
})();
var statearr_94440_94574 = state_94430__$1;
(statearr_94440_94574[(2)] = null);

(statearr_94440_94574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (3))){
var inst_94428 = (state_94430[(2)]);
var state_94430__$1 = state_94430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94430__$1,inst_94428);
} else {
if((state_val_94431 === (12))){
var inst_94417 = (state_94430[(2)]);
var state_94430__$1 = state_94430;
if(cljs.core.truth_(inst_94417)){
var statearr_94441_94575 = state_94430__$1;
(statearr_94441_94575[(1)] = (13));

} else {
var statearr_94442_94576 = state_94430__$1;
(statearr_94442_94576[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (2))){
var state_94430__$1 = state_94430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94430__$1,(4),chan);
} else {
if((state_val_94431 === (11))){
var inst_94410 = (state_94430[(10)]);
var state_94430__$1 = state_94430;
var statearr_94443_94577 = state_94430__$1;
(statearr_94443_94577[(2)] = inst_94410);

(statearr_94443_94577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (9))){
var inst_94409 = (state_94430[(8)]);
var inst_94410 = (state_94430[(10)]);
var inst_94409__$1 = (state_94430[(2)]);
var inst_94410__$1 = (inst_94409__$1 instanceof cljs.core.ExceptionInfo);
var state_94430__$1 = (function (){var statearr_94444 = state_94430;
(statearr_94444[(8)] = inst_94409__$1);

(statearr_94444[(10)] = inst_94410__$1);

return statearr_94444;
})();
if(cljs.core.truth_(inst_94410__$1)){
var statearr_94445_94578 = state_94430__$1;
(statearr_94445_94578[(1)] = (10));

} else {
var statearr_94446_94579 = state_94430__$1;
(statearr_94446_94579[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (5))){
var inst_94394 = (state_94430[(7)]);
var _ = (function (){var statearr_94451 = state_94430;
(statearr_94451[(4)] = cljs.core.cons((8),(state_94430[(4)])));

return statearr_94451;
})();
var inst_94406 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.alter_files_handler_BANG_,inst_94394);
var inst_94407 = cljs.core.async.interop.p__GT_c(inst_94406);
var state_94430__$1 = state_94430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94430__$1,(9),inst_94407);
} else {
if((state_val_94431 === (14))){
var inst_94409 = (state_94430[(8)]);
var state_94430__$1 = state_94430;
var statearr_94462_94580 = state_94430__$1;
(statearr_94462_94580[(2)] = inst_94409);

(statearr_94462_94580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (10))){
var inst_94409 = (state_94430[(8)]);
var inst_94412 = cljs.core.ex_data(inst_94409);
var inst_94413 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_94412);
var inst_94414 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_94413,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_94430__$1 = state_94430;
var statearr_94466_94581 = state_94430__$1;
(statearr_94466_94581[(2)] = inst_94414);

(statearr_94466_94581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94431 === (8))){
var _ = (function (){var statearr_94467 = state_94430;
(statearr_94467[(4)] = cljs.core.rest((state_94430[(4)])));

return statearr_94467;
})();
var state_94430__$1 = state_94430;
var ex94458 = (state_94430__$1[(2)]);
var statearr_94468_94582 = state_94430__$1;
(statearr_94468_94582[(5)] = ex94458);


if((ex94458 instanceof Error)){
var statearr_94469_94583 = state_94430__$1;
(statearr_94469_94583[(1)] = (7));

(statearr_94469_94583[(5)] = null);

} else {
throw ex94458;

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
}
}
}
}
}
}
}
});
return (function() {
var frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto__ = null;
var frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto____0 = (function (){
var statearr_94470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_94470[(0)] = frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto__);

(statearr_94470[(1)] = (1));

return statearr_94470;
});
var frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto____1 = (function (state_94430){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_94430);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e94471){var ex__41842__auto__ = e94471;
var statearr_94472_94584 = state_94430;
(statearr_94472_94584[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_94430[(4)]))){
var statearr_94473_94585 = state_94430;
(statearr_94473_94585[(1)] = cljs.core.first((state_94430[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94586 = state_94430;
state_94430 = G__94586;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto__ = function(state_94430){
switch(arguments.length){
case 0:
return frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto____1.call(this,state_94430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto____0;
frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto____1;
return frontend$handler$file$run_writes_chan_BANG__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_94474 = f__41862__auto__();
(statearr_94474[(6)] = c__41861__auto___94567);

return statearr_94474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));


return chan;
});
frontend.handler.file.watch_for_current_graph_dir_BANG_ = (function frontend$handler$file$watch_for_current_graph_dir_BANG_(){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5720__auto____$1)){
var dir = temp__5720__auto____$1;
return frontend.fs.watch_dir_BANG_(dir);
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.file.create_metadata_file = (function frontend$handler$file$create_metadata_file(repo_url,encrypted_QMARK_){
var repo_dir = frontend.config.get_repo_dir(repo_url);
var path = [frontend.config.app_name,"/",frontend.config.metadata_file].join('');
var file_path = ["/",path].join('');
var default_content = (cljs.core.truth_(encrypted_QMARK_)?"{:db/encrypted? true}":"{}");
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",frontend.config.app_name].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_path,default_content),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,default_content)));
}));
}));
}));
});
frontend.handler.file.create_pages_metadata_file = (function frontend$handler$file$create_pages_metadata_file(repo_url){
var repo_dir = frontend.config.get_repo_dir(repo_url);
var path = [frontend.config.app_name,"/",frontend.config.pages_metadata_file].join('');
var file_path = ["/",path].join('');
var default_content = "{}";
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists([repo_dir,"/",frontend.config.app_name].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$4(repo_url,repo_dir,file_path,default_content),(function (file_exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(file_exists_QMARK_)?null:frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,path,default_content)));
}));
}));
}));
});
frontend.handler.file.edn_file_set_key_value = (function frontend$handler$file$edn_file_set_key_value(path,k,v){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file.call(null,path));
if(cljs.core.truth_(temp__5720__auto____$1)){
var content = temp__5720__auto____$1;
frontend.handler.common.read_config(content);

var result = frontend.handler.common.parse_config(content);
var ks = ((cljs.core.vector_QMARK_(k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var new_result = borkdude.rewrite_edn.assoc_in(result,ks,v);
var new_content = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_result);
return frontend.handler.file.set_file_content_BANG_(repo,path,new_content);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.file.js.map
