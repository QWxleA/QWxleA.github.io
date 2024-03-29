goog.provide('frontend.handler.file');
frontend.handler.file.load_file = (function frontend$handler$file$load_file(repo_url,path){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo_url),path),(function (content){
return promesa.protocols._promise(content);
}));
})),(function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Load file failed: ",path], 0));

return console.error(e);
}));
});
frontend.handler.file.load_multiple_files = (function frontend$handler$file$load_multiple_files(repo_url,paths){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49226_SHARP_){
return frontend.handler.file.load_file(repo_url,p1__49226_SHARP_);
}),paths));
});
frontend.handler.file.keep_formats = (function frontend$handler$file$keep_formats(files,formats){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
var format = logseq.graph_parser.util.get_format(file);
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
var G__49236 = arguments.length;
switch (G__49236) {
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
var file_contents = (function (){var G__49239 = cljs.core.zipmap(files__$1,contents);
if(cljs.core.seq(images)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__49239,cljs.core.zipmap(images,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(images),""))], 0));
} else {
return G__49239;
}
})();
var file_contents__$1 = (function (){var iter__5520__auto__ = (function frontend$handler$file$load_files_contents_BANG__$_iter__49240(s__49241){
return (new cljs.core.LazySeq(null,(function (){
var s__49241__$1 = s__49241;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__49241__$1);
if(temp__5720__auto__){
var s__49241__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49241__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49241__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49243 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49242 = (0);
while(true){
if((i__49242 < size__5519__auto__)){
var vec__49254 = cljs.core._nth(c__5518__auto__,i__49242);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49254,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49254,(1),null);
cljs.core.chunk_append(b__49243,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(file),new cljs.core.Keyword("file","content","file/content",12680964),content], null));

var G__49461 = (i__49242 + (1));
i__49242 = G__49461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49243),frontend$handler$file$load_files_contents_BANG__$_iter__49240(cljs.core.chunk_rest(s__49241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49243),null);
}
} else {
var vec__49257 = cljs.core.first(s__49241__$2);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49257,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49257,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(file),new cljs.core.Keyword("file","content","file/content",12680964),content], null),frontend$handler$file$load_files_contents_BANG__$_iter__49240(cljs.core.rest(s__49241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(file_contents);
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
var G__49283 = arguments.length;
switch (G__49283) {
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
return frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4(repo_url,file,content,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (repo_url,file,content,p__49284){
var map__49285 = p__49284;
var map__49285__$1 = cljs.core.__destructure_map(map__49285);
var new_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49285__$1,new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695));
var from_disk_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49285__$1,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161));
var electron_local_repo_QMARK_ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__5041__auto__;
}
})();
var file__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = electron_local_repo_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = frontend.util.win32_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return module$frontend$utils.win32(file);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?file:(cljs.core.truth_((function (){var and__5041__auto__ = electron_local_repo_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = frontend.util.win32_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(file));
}
} else {
return and__5041__auto__;
}
})())?[frontend.config.get_repo_dir(repo_url),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(file));
} else {
return and__5041__auto__;
}
})())?file:(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_ios_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(file));
} else {
return and__5041__auto__;
}
})())?file:file
))));
var file__$2 = logseq.graph_parser.util.path_normalize(file__$1);
var new_QMARK_ = ((function (){var G__49286 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),file__$2], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49286) : frontend.db.entity.call(null,G__49286));
})() == null);
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,file__$2,content) : frontend.db.set_file_content_BANG_.call(null,repo_url,file__$2,content));

var format = logseq.graph_parser.util.get_format(file__$2);
var file_content = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),file__$2], null)], null);
var tx = ((cljs.core.contains_QMARK_(logseq.graph_parser.config.mldoc_support_formats,format))?(function (){var vec__49287 = logseq.graph_parser.extract.extract_blocks_pages(file__$2,content,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"user-config","user-config",-1138679827),frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),frontend.state.get_date_formatter(),new cljs.core.Keyword(null,"page-name-order","page-name-order",-1625414065),frontend.state.page_name_order(),new cljs.core.Keyword(null,"block-pattern","block-pattern",297259959),frontend.config.get_block_pattern(format),new cljs.core.Keyword(null,"supported-formats","supported-formats",2085828616),frontend.config.supported_formats(),new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__49290 = frontend.state.get_current_repo();
return (frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(G__49290) : frontend.db.get_db.call(null,G__49290));
})()], null));
var pages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49287,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49287,(1),null);
var first_page = cljs.core.first(pages);
var delete_blocks = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((frontend.db.delete_file_blocks_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.delete_file_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(repo_url,file__$2) : frontend.db.delete_file_blocks_BANG_.call(null,repo_url,file__$2)),(cljs.core.truth_(first_page)?(function (){var G__49291 = repo_url;
var G__49292 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(first_page);
return (frontend.db.delete_page_blocks.cljs$core$IFn$_invoke$arity$2 ? frontend.db.delete_page_blocks.cljs$core$IFn$_invoke$arity$2(G__49291,G__49292) : frontend.db.delete_page_blocks.call(null,G__49291,G__49292));
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
var pages__$1 = logseq.graph_parser.extract.with_ref_pages(pages,blocks);
var pages_index = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49281_SHARP_){
return cljs.core.select_keys(p1__49281_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316)], null));
}),pages__$1);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(file_content,pages_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delete_blocks,pages__$1,block_ids__$1,blocks], 0));
})():file_content);
var tx__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var t = cljs_time.coerce.to_long(cljs_time.core.now());
var G__49293 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","path","file/path",-191335748),file__$2], null);
if(new_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49293,new cljs.core.Keyword("file","created-at","file/created-at",-92397056),t);
} else {
return G__49293;
}
})()], null));
var G__49294 = repo_url;
var G__49295 = tx__$1;
var G__49296 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new_graph_QMARK_,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),from_disk_QMARK_], null);
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(G__49294,G__49295,G__49296) : frontend.db.transact_BANG_.call(null,G__49294,G__49295,G__49296));
}));

(frontend.handler.file.reset_file_BANG_.cljs$lang$maxFixedArity = 4);

frontend.handler.file.alter_file = (function frontend$handler$file$alter_file(repo,path,content,p__49297){
var map__49298 = p__49297;
var map__49298__$1 = cljs.core.__destructure_map(map__49298);
var reset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49298__$1,new cljs.core.Keyword(null,"reset?","reset?",-1051875415),true);
var re_render_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49298__$1,new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),false);
var from_disk_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49298__$1,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),false);
var skip_compare_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49298__$1,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),false);
var new_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49298__$1,new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695));
var original_content = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path));
var write_file_BANG_ = (cljs.core.truth_(from_disk_QMARK_)?(function (){
return promesa.core.resolved(null);
}):(function (){
return frontend.fs.write_file_BANG_(repo,frontend.config.get_repo_dir(repo),path,content,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(original_content)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),original_content], null):null),new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),skip_compare_QMARK_));
}));
if(cljs.core.truth_(reset_QMARK_)){
var temp__5720__auto___49501 = (frontend.db.get_file_page_id.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page_id.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file_page_id.call(null,path));
if(cljs.core.truth_(temp__5720__auto___49501)){
var page_id_49502 = temp__5720__auto___49501;
var G__49299_49503 = repo;
var G__49300_49504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),page_id_49502,new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),page_id_49502,new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__49299_49503,G__49300_49504) : frontend.db.transact_BANG_.call(null,G__49299_49503,G__49300_49504));
} else {
}

frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$4(repo,path,content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new_graph_QMARK_,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),from_disk_QMARK_], null));
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

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("write","failed","write/failed",-1544073021),error,new cljs.core.Keyword(null,"line","line",212345235),200], null)),null);
}));
});
frontend.handler.file.set_file_content_BANG_ = (function frontend$handler$file$set_file_content_BANG_(repo,path,new_content){
return frontend.handler.file.alter_file(repo,path,new_content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset?","reset?",-1051875415),false,new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),false], null));
});
frontend.handler.file.alter_files = (function frontend$handler$file$alter_files(repo,files,p__49301){
var map__49302 = p__49301;
var map__49302__$1 = cljs.core.__destructure_map(map__49302);
var opts = map__49302__$1;
var reset_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49302__$1,new cljs.core.Keyword(null,"reset?","reset?",-1051875415),false);
var update_db_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49302__$1,new cljs.core.Keyword(null,"update-db?","update-db?",-1641846808),true);
var file__GT_content = (function (){var paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,files);
return cljs.core.zipmap(paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path));
}),paths));
})();
if(cljs.core.truth_(update_db_QMARK_)){
var seq__49303_49505 = cljs.core.seq(files);
var chunk__49304_49506 = null;
var count__49305_49507 = (0);
var i__49306_49508 = (0);
while(true){
if((i__49306_49508 < count__49305_49507)){
var vec__49313_49509 = chunk__49304_49506.cljs$core$IIndexed$_nth$arity$2(null,i__49306_49508);
var path_49510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49313_49509,(0),null);
var content_49511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49313_49509,(1),null);
if(cljs.core.truth_(reset_QMARK_)){
frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_49510,content_49511);
} else {
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_49510,content_49511) : frontend.db.set_file_content_BANG_.call(null,repo,path_49510,content_49511));
}


var G__49512 = seq__49303_49505;
var G__49513 = chunk__49304_49506;
var G__49514 = count__49305_49507;
var G__49515 = (i__49306_49508 + (1));
seq__49303_49505 = G__49512;
chunk__49304_49506 = G__49513;
count__49305_49507 = G__49514;
i__49306_49508 = G__49515;
continue;
} else {
var temp__5720__auto___49516 = cljs.core.seq(seq__49303_49505);
if(temp__5720__auto___49516){
var seq__49303_49517__$1 = temp__5720__auto___49516;
if(cljs.core.chunked_seq_QMARK_(seq__49303_49517__$1)){
var c__5565__auto___49523 = cljs.core.chunk_first(seq__49303_49517__$1);
var G__49524 = cljs.core.chunk_rest(seq__49303_49517__$1);
var G__49525 = c__5565__auto___49523;
var G__49526 = cljs.core.count(c__5565__auto___49523);
var G__49527 = (0);
seq__49303_49505 = G__49524;
chunk__49304_49506 = G__49525;
count__49305_49507 = G__49526;
i__49306_49508 = G__49527;
continue;
} else {
var vec__49316_49528 = cljs.core.first(seq__49303_49517__$1);
var path_49529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49316_49528,(0),null);
var content_49530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49316_49528,(1),null);
if(cljs.core.truth_(reset_QMARK_)){
frontend.handler.file.reset_file_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_49529,content_49530);
} else {
(frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path_49529,content_49530) : frontend.db.set_file_content_BANG_.call(null,repo,path_49529,content_49530));
}


var G__49534 = cljs.core.next(seq__49303_49517__$1);
var G__49535 = null;
var G__49536 = (0);
var G__49537 = (0);
seq__49303_49505 = G__49534;
chunk__49304_49506 = G__49535;
count__49305_49507 = G__49536;
i__49306_49508 = G__49537;
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
frontend.handler.file.alter_files_handler_BANG_ = (function frontend$handler$file$alter_files_handler_BANG_(repo,files,p__49319,file__GT_content){
var map__49320 = p__49319;
var map__49320__$1 = cljs.core.__destructure_map(map__49320);
var finish_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49320__$1,new cljs.core.Keyword(null,"finish-handler","finish-handler",770511735));
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49320__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var write_file_f = (function (p__49321){
var vec__49322 = p__49321;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49322,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49322,(1),null);
if(cljs.core.truth_(path)){
var original_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file__GT_content,path);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.fs.nfs.check_directory_permission_BANG_(repo);
}
})(),(function (_){
return promesa.protocols._promise(frontend.fs.write_file_BANG_(repo,frontend.config.get_repo_dir(repo),path,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"old-content","old-content",1851086779),original_content], null)));
}));
})),(function (error){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["Failed to save the file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),". Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null)], null));

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("write-file","failed","write-file/failed",325307384),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content-length","content-length",441319507),cljs.core.count(content),new cljs.core.Keyword(null,"error-str","error-str",-1967189260),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"error","error",-978969032),error], null)], null)], null));

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("write-file","failed","write-file/failed",325307384),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),250], null)),null);
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
var c__27595__auto___49541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49365){
var state_val_49366 = (state_49365[(1)]);
if((state_val_49366 === (7))){
var inst_49330 = (state_49365[(2)]);
var inst_49331 = [new cljs.core.Keyword("file","write-failed","file/write-failed",-229053199),new cljs.core.Keyword(null,"line","line",212345235)];
var inst_49332 = [inst_49330,276];
var inst_49333 = cljs.core.PersistentHashMap.fromArrays(inst_49331,inst_49332);
var inst_49334 = cljs.core.identity(inst_49333);
var inst_49335 = lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file",new cljs.core.Keyword(null,"error","error",-978969032),inst_49334,null);
var state_49365__$1 = state_49365;
var statearr_49367_49542 = state_49365__$1;
(statearr_49367_49542[(2)] = inst_49335);

(statearr_49367_49542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (1))){
var state_49365__$1 = state_49365;
var statearr_49368_49545 = state_49365__$1;
(statearr_49368_49545[(2)] = null);

(statearr_49368_49545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (4))){
var inst_49329 = (state_49365[(2)]);
var state_49365__$1 = (function (){var statearr_49369 = state_49365;
(statearr_49369[(7)] = inst_49329);

return statearr_49369;
})();
var statearr_49370_49546 = state_49365__$1;
(statearr_49370_49546[(2)] = null);

(statearr_49370_49546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (15))){
var inst_49357 = (state_49365[(2)]);
var _ = (function (){var statearr_49371 = state_49365;
(statearr_49371[(4)] = cljs.core.rest((state_49365[(4)])));

return statearr_49371;
})();
var state_49365__$1 = state_49365;
var statearr_49372_49550 = state_49365__$1;
(statearr_49372_49550[(2)] = inst_49357);

(statearr_49372_49550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (13))){
var inst_49344 = (state_49365[(8)]);
var inst_49354 = (function(){throw inst_49344})();
var state_49365__$1 = state_49365;
var statearr_49375_49551 = state_49365__$1;
(statearr_49375_49551[(2)] = inst_49354);

(statearr_49375_49551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (6))){
var inst_49360 = (state_49365[(2)]);
var state_49365__$1 = (function (){var statearr_49376 = state_49365;
(statearr_49376[(9)] = inst_49360);

return statearr_49376;
})();
var statearr_49377_49552 = state_49365__$1;
(statearr_49377_49552[(2)] = null);

(statearr_49377_49552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (3))){
var inst_49363 = (state_49365[(2)]);
var state_49365__$1 = state_49365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49365__$1,inst_49363);
} else {
if((state_val_49366 === (12))){
var inst_49352 = (state_49365[(2)]);
var state_49365__$1 = state_49365;
if(cljs.core.truth_(inst_49352)){
var statearr_49378_49553 = state_49365__$1;
(statearr_49378_49553[(1)] = (13));

} else {
var statearr_49379_49554 = state_49365__$1;
(statearr_49379_49554[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (2))){
var state_49365__$1 = state_49365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49365__$1,(4),chan);
} else {
if((state_val_49366 === (11))){
var inst_49345 = (state_49365[(10)]);
var state_49365__$1 = state_49365;
var statearr_49382_49555 = state_49365__$1;
(statearr_49382_49555[(2)] = inst_49345);

(statearr_49382_49555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (9))){
var inst_49345 = (state_49365[(10)]);
var inst_49344 = (state_49365[(8)]);
var inst_49344__$1 = (state_49365[(2)]);
var inst_49345__$1 = (inst_49344__$1 instanceof cljs.core.ExceptionInfo);
var state_49365__$1 = (function (){var statearr_49383 = state_49365;
(statearr_49383[(10)] = inst_49345__$1);

(statearr_49383[(8)] = inst_49344__$1);

return statearr_49383;
})();
if(cljs.core.truth_(inst_49345__$1)){
var statearr_49384_49556 = state_49365__$1;
(statearr_49384_49556[(1)] = (10));

} else {
var statearr_49385_49557 = state_49365__$1;
(statearr_49385_49557[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (5))){
var inst_49329 = (state_49365[(7)]);
var _ = (function (){var statearr_49388 = state_49365;
(statearr_49388[(4)] = cljs.core.cons((8),(state_49365[(4)])));

return statearr_49388;
})();
var inst_49341 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.alter_files_handler_BANG_,inst_49329);
var inst_49342 = cljs.core.async.interop.p__GT_c(inst_49341);
var state_49365__$1 = state_49365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49365__$1,(9),inst_49342);
} else {
if((state_val_49366 === (14))){
var inst_49344 = (state_49365[(8)]);
var state_49365__$1 = state_49365;
var statearr_49390_49559 = state_49365__$1;
(statearr_49390_49559[(2)] = inst_49344);

(statearr_49390_49559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (10))){
var inst_49344 = (state_49365[(8)]);
var inst_49347 = cljs.core.ex_data(inst_49344);
var inst_49348 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_49347);
var inst_49349 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49348,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_49365__$1 = state_49365;
var statearr_49394_49560 = state_49365__$1;
(statearr_49394_49560[(2)] = inst_49349);

(statearr_49394_49560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49366 === (8))){
var _ = (function (){var statearr_49396 = state_49365;
(statearr_49396[(4)] = cljs.core.rest((state_49365[(4)])));

return statearr_49396;
})();
var state_49365__$1 = state_49365;
var ex49389 = (state_49365__$1[(2)]);
var statearr_49398_49561 = state_49365__$1;
(statearr_49398_49561[(5)] = ex49389);


if((ex49389 instanceof Error)){
var statearr_49401_49562 = state_49365__$1;
(statearr_49401_49562[(1)] = (7));

(statearr_49401_49562[(5)] = null);

} else {
throw ex49389;

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
var frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__ = null;
var frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____0 = (function (){
var statearr_49404 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49404[(0)] = frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__);

(statearr_49404[(1)] = (1));

return statearr_49404;
});
var frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____1 = (function (state_49365){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49365);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49405){var ex__27576__auto__ = e49405;
var statearr_49406_49563 = state_49365;
(statearr_49406_49563[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49365[(4)]))){
var statearr_49407_49564 = state_49365;
(statearr_49407_49564[(1)] = cljs.core.first((state_49365[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49565 = state_49365;
state_49365 = G__49565;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__ = function(state_49365){
switch(arguments.length){
case 0:
return frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____1.call(this,state_49365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____0;
frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto____1;
return frontend$handler$file$run_writes_chan_BANG__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49411 = f__27596__auto__();
(statearr_49411[(6)] = c__27595__auto___49541);

return statearr_49411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
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
