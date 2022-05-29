goog.provide('frontend.handler.web.nfs');
goog.scope(function(){
  frontend.handler.web.nfs.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.web.nfs.remove_ignore_files = (function frontend$handler$web$nfs$remove_ignore_files(files,dir_name,nfs_QMARK_){
var files__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (f){
var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(f);
var or__5043__auto__ = clojure.string.starts_with_QMARK_(path,".git/");
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = clojure.string.includes_QMARK_(path,".git/");
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto__ = frontend.util.fs.ignored_path_QMARK_((cljs.core.truth_(nfs_QMARK_)?"":dir_name),path);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","name","file/name",1848919477).cljs$core$IFn$_invoke$arity$1(f),".gitignore");
} else {
return and__5041__auto__;
}
}
}
}),files);
var temp__5718__auto__ = cljs.core.some((function (p1__51296_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","name","file/name",1848919477).cljs$core$IFn$_invoke$arity$1(p1__51296_SHARP_),".gitignore")){
return p1__51296_SHARP_;
} else {
return null;
}
}),files__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var ignore_file = temp__5718__auto__;
var temp__5718__auto____$1 = new cljs.core.Keyword("file","file","file/file",-1241327538).cljs$core$IFn$_invoke$arity$1(ignore_file);
if(cljs.core.truth_(temp__5718__auto____$1)){
var file = temp__5718__auto____$1;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.text(),(function (content){
return promesa.protocols._promise((cljs.core.truth_(content)?(function (){var paths = cljs.core.set(frontend.handler.common.ignore_files(content,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),files__$1)));
if(cljs.core.seq(paths)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core.contains_QMARK_(paths,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(f));
}),files__$1);
} else {
return null;
}
})():null));
}));
}));
} else {
return promesa.core.resolved(files__$1);
}
} else {
return promesa.core.resolved(files__$1);
}
});
frontend.handler.web.nfs.__GT_db_files = (function frontend$handler$web$nfs$__GT_db_files(mobile_native_QMARK_,electron_QMARK_,dir_name,result){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),(cljs.core.truth_(mobile_native_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51323){
var map__51325 = p__51323;
var map__51325__$1 = cljs.core.__destructure_map(map__51325);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51325__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51325__$1,new cljs.core.Keyword(null,"content","content",15833224));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51325__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var mtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51325__$1,new cljs.core.Keyword(null,"mtime","mtime",963165087));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(uri),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),mtime,new cljs.core.Keyword("file","size","file/size",1053598731),size,new cljs.core.Keyword("file","content","file/content",12680964),content], null);
}),result):(cljs.core.truth_(electron_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51328){
var map__51329 = p__51328;
var map__51329__$1 = cljs.core.__destructure_map(map__51329);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51329__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51329__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51329__$1,new cljs.core.Keyword(null,"content","content",15833224));
var map__51330 = stat;
var map__51330__$1 = cljs.core.__destructure_map(map__51330);
var mtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword(null,"mtime","mtime",963165087));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51330__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(path),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),mtime,new cljs.core.Keyword("file","size","file/size",1053598731),size,new cljs.core.Keyword("file","content","file/content",12680964),content], null);
}),result):(function (){var result__$1 = cljs.core.flatten(cljs_bean.core.__GT_clj(result));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
var handle = frontend.handler.web.nfs.goog$module$goog$object.get(file,"handle");
var get_attr = (function (p1__51308_SHARP_){
return frontend.handler.web.nfs.goog$module$goog$object.get(file,p1__51308_SHARP_);
});
var path = clojure.string.replace_first(get_attr("webkitRelativePath"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name),"/"].join(''),"");
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("file","name","file/name",1848919477),get_attr("name"),new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(path),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),get_attr("lastModified"),new cljs.core.Keyword("file","size","file/size",1053598731),get_attr("size"),new cljs.core.Keyword("file","type","file/type",1177401880),get_attr("type"),new cljs.core.Keyword("file","file","file/file",-1241327538),file,new cljs.core.Keyword("file","handle","file/handle",1544192618),handle], null);
}),result__$1);
})()
)));
});
frontend.handler.web.nfs.filter_markup_and_built_in_files = (function frontend$handler$web$nfs$filter_markup_and_built_in_files(files){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
return cljs.core.contains_QMARK_(clojure.set.union.cljs$core$IFn$_invoke$arity$2(frontend.config.markup_formats,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),null,new cljs.core.Keyword(null,"edn","edn",1317840885),null], null), null)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.get_file_ext(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file))));
}),files);
});
frontend.handler.web.nfs.set_batch_BANG_ = (function frontend$handler$web$nfs$set_batch_BANG_(handles){
var handles__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51334){
var vec__51335 = p__51334;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),path,new cljs.core.Keyword(null,"value","value",305978217),handle], null);
}),handles);
return frontend.idb.set_batch_BANG_(handles__$1);
});
frontend.handler.web.nfs.set_files_aux_BANG_ = (function frontend$handler$web$nfs$set_files_aux_BANG_(handles){
if(cljs.core.seq(handles)){
var vec__51339 = cljs.core.split_at((50),handles);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51339,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51339,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1((function (_){
return setTimeout((function (){
return promesa.core.resolved(null);
}),(10));
})),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.set_batch_BANG_(h),(function (___$1){
return promesa.protocols._promise(((cljs.core.seq(t))?(frontend.handler.web.nfs.set_files_aux_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.web.nfs.set_files_aux_BANG_.cljs$core$IFn$_invoke$arity$1(t) : frontend.handler.web.nfs.set_files_aux_BANG_.call(null,t)):null));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.web.nfs.set_files_BANG_ = (function frontend$handler$web$nfs$set_files_BANG_(handles){
var handles__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51342){
var vec__51343 = p__51342;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51343,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51343,(1),null);
var handle_path = [frontend.config.local_handle_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [handle_path,handle], null);
}),handles);
var seq__51346_51677 = cljs.core.seq(handles__$1);
var chunk__51347_51678 = null;
var count__51348_51679 = (0);
var i__51349_51680 = (0);
while(true){
if((i__51349_51680 < count__51348_51679)){
var vec__51356_51682 = chunk__51347_51678.cljs$core$IIndexed$_nth$arity$2(null,i__51349_51680);
var path_51683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51356_51682,(0),null);
var handle_51684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51356_51682,(1),null);
frontend.fs.nfs.add_nfs_file_handle_BANG_(path_51683,handle_51684);


var G__51687 = seq__51346_51677;
var G__51688 = chunk__51347_51678;
var G__51689 = count__51348_51679;
var G__51690 = (i__51349_51680 + (1));
seq__51346_51677 = G__51687;
chunk__51347_51678 = G__51688;
count__51348_51679 = G__51689;
i__51349_51680 = G__51690;
continue;
} else {
var temp__5720__auto___51692 = cljs.core.seq(seq__51346_51677);
if(temp__5720__auto___51692){
var seq__51346_51693__$1 = temp__5720__auto___51692;
if(cljs.core.chunked_seq_QMARK_(seq__51346_51693__$1)){
var c__5565__auto___51694 = cljs.core.chunk_first(seq__51346_51693__$1);
var G__51695 = cljs.core.chunk_rest(seq__51346_51693__$1);
var G__51696 = c__5565__auto___51694;
var G__51697 = cljs.core.count(c__5565__auto___51694);
var G__51698 = (0);
seq__51346_51677 = G__51695;
chunk__51347_51678 = G__51696;
count__51348_51679 = G__51697;
i__51349_51680 = G__51698;
continue;
} else {
var vec__51359_51699 = cljs.core.first(seq__51346_51693__$1);
var path_51700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51359_51699,(0),null);
var handle_51701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51359_51699,(1),null);
frontend.fs.nfs.add_nfs_file_handle_BANG_(path_51700,handle_51701);


var G__51702 = cljs.core.next(seq__51346_51693__$1);
var G__51703 = null;
var G__51704 = (0);
var G__51705 = (0);
seq__51346_51677 = G__51702;
chunk__51347_51678 = G__51703;
count__51348_51679 = G__51704;
i__51349_51680 = G__51705;
continue;
}
} else {
}
}
break;
}

return frontend.handler.web.nfs.set_files_aux_BANG_(handles__$1);
});
frontend.handler.web.nfs.ls_dir_files_with_handler_BANG_ = (function frontend$handler$web$nfs$ls_dir_files_with_handler_BANG_(ok_handler){
var path_handles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var electron_QMARK_ = frontend.util.electron_QMARK_();
var mobile_native_QMARK_ = frontend.mobile.util.native_platform_QMARK_();
var nfs_QMARK_ = ((cljs.core.not(electron_QMARK_)) && (cljs.core.not(mobile_native_QMARK_)));
var _STAR_repo = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.open_dir((function (path,handle){
if(nfs_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(path_handles,cljs.core.assoc,path,handle);
} else {
return null;
}
})),(function (result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.first(result),(function (root_handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?frontend.handler.web.nfs.goog$module$goog$object.get(root_handle,"name"):root_handle),(function (dir_name){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([frontend.config.local_db_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name)].join(''),(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.set_loading_files_BANG_(repo,true),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((((frontend.state.home_QMARK_()) || (frontend.state.setups_picker_QMARK_())))?null:frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$1(false)),(function (___$1){
return promesa.protocols._promise((function (){
cljs.core.reset_BANG_(_STAR_repo,repo);

if(clojure.string.blank_QMARK_(dir_name)){
return null;
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([frontend.config.local_handle_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name)].join(''),(function (root_handle_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?(function (){
frontend.idb.set_item_BANG_(root_handle_path,root_handle);

return frontend.fs.nfs.add_nfs_file_handle_BANG_(root_handle_path,root_handle);
})()
:null),(function (___$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(1)),(function (result__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.remove_ignore_files(frontend.handler.web.nfs.__GT_db_files(mobile_native_QMARK_,electron_QMARK_,dir_name,result__$1),dir_name,nfs_QMARK_),(function (files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?(function (){
var file_paths_51708 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),files));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(path_handles,(function (handles){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51363){
var vec__51364 = p__51363;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51364,(0),null);
var _handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51364,(1),null);
var or__5043__auto__ = cljs.core.contains_QMARK_(file_paths_51708,clojure.string.replace_first(path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name),"/"].join(''),""));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var last_part = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,"/"));
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([frontend.config.get_pages_directory(),logseq.graph_parser.config.default_draw_directory,frontend.config.app_name,frontend.config.get_journals_directory()]),last_part);
}
}),handles));
}));

return frontend.handler.web.nfs.set_files_BANG_(cljs.core.deref(path_handles));
})()
:null),(function (___$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.filter_markup_and_built_in_files(files),(function (markup_files){
return promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?new cljs.core.Keyword("file","file","file/file",-1241327538).cljs$core$IFn$_invoke$arity$1(file).text():new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file)),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(content),(function (content__$1){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword("file","content","file/content",12680964),content__$1));
}));
}));
}));
}),markup_files)),(function (result__$2){
var files__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51362_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51362_SHARP_,new cljs.core.Keyword("file","file","file/file",-1241327538));
}),result__$2);
frontend.handler.repo.start_repo_db_if_not_exists_BANG_(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db-type","db-type",404552925),new cljs.core.Keyword(null,"local-native-fs","local-native-fs",1517221766)], null));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51392){
var state_val_51395 = (state_51392[(1)]);
if((state_val_51395 === (1))){
var inst_51367 = [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639),new cljs.core.Keyword(null,"nfs-files","nfs-files",-360703182)];
var inst_51368 = cljs.core.seq(markup_files);
var inst_51369 = (inst_51368 == null);
var inst_51370 = [true,inst_51369,files__$1];
var inst_51371 = cljs.core.PersistentHashMap.fromArrays(inst_51367,inst_51370);
var inst_51372 = frontend.handler.repo.load_repo_to_db_BANG_(repo,inst_51371);
var state_51392__$1 = state_51392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51392__$1,(2),inst_51372);
} else {
if((state_val_51395 === (2))){
var inst_51374 = (state_51392[(2)]);
var inst_51375 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"nfs?","nfs?",-544337673)];
var inst_51376 = [repo,true];
var inst_51377 = cljs.core.PersistentHashMap.fromArrays(inst_51375,inst_51376);
var inst_51378 = frontend.state.add_repo_BANG_(inst_51377);
var inst_51379 = frontend.state.set_loading_files_BANG_(repo,false);
var state_51392__$1 = (function (){var statearr_51400 = state_51392;
(statearr_51400[(7)] = inst_51378);

(statearr_51400[(8)] = inst_51374);

(statearr_51400[(9)] = inst_51379);

return statearr_51400;
})();
if(cljs.core.truth_(ok_handler)){
var statearr_51401_51710 = state_51392__$1;
(statearr_51401_51710[(1)] = (3));

} else {
var statearr_51402_51711 = state_51392__$1;
(statearr_51402_51711[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51395 === (3))){
var inst_51381 = (ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null));
var state_51392__$1 = state_51392;
var statearr_51405_51712 = state_51392__$1;
(statearr_51405_51712[(2)] = inst_51381);

(statearr_51405_51712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51395 === (4))){
var state_51392__$1 = state_51392;
var statearr_51408_51713 = state_51392__$1;
(statearr_51408_51713[(2)] = null);

(statearr_51408_51713[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51395 === (5))){
var inst_51384 = (state_51392[(2)]);
var inst_51385 = frontend.fs.watch_dir_BANG_(dir_name);
var inst_51386 = frontend.db.persist_if_idle_BANG_(repo);
var state_51392__$1 = (function (){var statearr_51415 = state_51392;
(statearr_51415[(10)] = inst_51384);

(statearr_51415[(11)] = inst_51385);

return statearr_51415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51392__$1,inst_51386);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__ = null;
var frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____0 = (function (){
var statearr_51421 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51421[(0)] = frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__);

(statearr_51421[(1)] = (1));

return statearr_51421;
});
var frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____1 = (function (state_51392){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51392);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51422){var ex__27576__auto__ = e51422;
var statearr_51423_51714 = state_51392;
(statearr_51423_51714[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51392[(4)]))){
var statearr_51426_51715 = state_51392;
(statearr_51426_51715[(1)] = cljs.core.first((state_51392[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51716 = state_51392;
state_51392 = G__51716;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__ = function(state_51392){
switch(arguments.length){
case 0:
return frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____1.call(this,state_51392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____0;
frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto____1;
return frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51432 = f__27596__auto__();
(statearr_51432[(6)] = c__27595__auto__);

return statearr_51432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})),(function (error){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.web.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nfs","load-files-error","nfs/load-files-error",1672347248),repo,new cljs.core.Keyword(null,"line","line",212345235),189], null)),null);

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.web.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),190], null)),error);
})));
}));
}));
}));
}));
}));
}));
}));
}
})()
);
}));
}));
}));
}));
}));
}));
})),(function (error){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.web.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),192], null)),error);

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Error",null,"AbortError",null], null), null),frontend.handler.web.nfs.goog$module$goog$object.get(error,"name"))){
if(cljs.core.truth_(cljs.core.deref(_STAR_repo))){
return frontend.state.set_loading_files_BANG_(cljs.core.deref(_STAR_repo),false);
} else {
return null;
}
} else {
return null;
}
}));
});
frontend.handler.web.nfs.compute_diffs = (function frontend$handler$web$nfs$compute_diffs(old_files,new_files){
var ks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),new cljs.core.Keyword("file","content","file/content",12680964)], null);
var __GT_set = (function (files,ks__$1){
if(cljs.core.seq(files)){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51449_SHARP_){
return cljs.core.select_keys(p1__51449_SHARP_,ks__$1);
}),files));
} else {
return null;
}
});
var old_files__$1 = __GT_set(old_files,ks);
var new_files__$1 = __GT_set(new_files,ks);
var file_path_set_f = (function (col){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),col));
});
var get_file_f = (function (files,path){
return cljs.core.some((function (p1__51450_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__51450_SHARP_),path)){
return p1__51450_SHARP_;
} else {
return null;
}
}),files);
});
var old_file_paths = file_path_set_f(old_files__$1);
var new_file_paths = file_path_set_f(new_files__$1);
var added = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_file_paths,old_file_paths);
var deleted = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old_file_paths,new_file_paths);
var modified = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (path){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(get_file_f(old_files__$1,path)),new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(get_file_f(new_files__$1,path)));
}),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new_file_paths,old_file_paths)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"added","added",2057651688),added,new cljs.core.Keyword(null,"modified","modified",-2134587826),modified,new cljs.core.Keyword(null,"deleted","deleted",-510100639),deleted], null);
});
frontend.handler.web.nfs.handle_diffs_BANG_ = (function frontend$handler$web$nfs$handle_diffs_BANG_(repo,nfs_QMARK_,old_files,new_files,handle_path,path_handles,re_index_QMARK_){
var get_last_modified_at = (function (path){
return cljs.core.some((function (file){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file))){
return new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310).cljs$core$IFn$_invoke$arity$1(file);
} else {
return null;
}
}),new_files);
});
var get_file_f = (function (path,files){
return cljs.core.some((function (p1__51481_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__51481_SHARP_),path)){
return p1__51481_SHARP_;
} else {
return null;
}
}),files);
});
var map__51486 = frontend.handler.web.nfs.compute_diffs(old_files,new_files);
var map__51486__$1 = cljs.core.__destructure_map(map__51486);
var added = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,new cljs.core.Keyword(null,"added","added",2057651688));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,new cljs.core.Keyword(null,"modified","modified",-2134587826));
var deleted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51486__$1,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
var rename_f = (function (typ,col){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (file){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),typ,new cljs.core.Keyword(null,"path","path",-188191168),file,new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),get_last_modified_at(file)], null);
}),col);
});
var _ = (cljs.core.truth_((function (){var and__5041__auto__ = nfs_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(deleted);
} else {
return and__5041__auto__;
}
})())?(function (){var deleted__$1 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(path))){
return path;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
}
}),deleted)));
return promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
var handle_path__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(handle_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
frontend.idb.remove_item_BANG_(handle_path__$1);

return frontend.fs.nfs.remove_nfs_file_handle_BANG_(handle_path__$1);
}),deleted__$1));
})():null);
var added_or_modified = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(added,modified));
var ___$1 = (cljs.core.truth_((function (){var and__5041__auto__ = nfs_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(added_or_modified);
} else {
return and__5041__auto__;
}
})())?promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(path_handles),path);
if(cljs.core.truth_(temp__5720__auto__)){
var handle = temp__5720__auto__;
return frontend.idb.set_item_BANG_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(handle_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),handle);
} else {
return null;
}
}),added_or_modified)):null);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
var temp__5720__auto__ = get_file_f(path,new_files);
if(cljs.core.truth_(temp__5720__auto__)){
var file = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(nfs_QMARK_)?new cljs.core.Keyword("file","file","file/file",-1241327538).cljs$core$IFn$_invoke$arity$1(file).text():new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file)),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(content),(function (content__$1){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword("file","content","file/content",12680964),content__$1));
}));
}));
}));
} else {
return null;
}
}),added_or_modified)),(function (result){
var files = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51482_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__51482_SHARP_,new cljs.core.Keyword("file","file","file/file",-1241327538),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","handle","file/handle",1544192618)], 0));
}),result);
var vec__51510 = (cljs.core.truth_(re_index_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [files,cljs.core.set(modified)], null):(function (){var modified_files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
return cljs.core.contains_QMARK_(added_or_modified,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file));
}),files);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modified_files,cljs.core.set(modified)], null);
})());
var modified_files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51510,(0),null);
var modified__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51510,(1),null);
var diffs = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(rename_f("remove",deleted),rename_f("add",added),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rename_f("modify",modified__$1)], 0));
if(((((cljs.core.seq(diffs)) && (cljs.core.seq(modified_files)))) || (cljs.core.seq(diffs)))){

frontend.handler.repo.load_repo_to_db_BANG_(repo,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"diffs","diffs",-1720136241),diffs,new cljs.core.Keyword(null,"nfs-files","nfs-files",-360703182),modified_files,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570),cljs.core.not(re_index_QMARK_)], null));
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(re_index_QMARK_);
} else {
return and__5041__auto__;
}
})())){
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(repo,new_files) : frontend.db.transact_BANG_.call(null,repo,new_files));
} else {
return null;
}
}));
});
frontend.handler.web.nfs.reload_dir_BANG_ = (function frontend$handler$web$nfs$reload_dir_BANG_(var_args){
var G__51534 = arguments.length;
switch (G__51534) {
case 1:
return frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$2(repo,false);
}));

(frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,re_index_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo);
} else {
return and__5041__auto__;
}
})())){
var old_files = (frontend.db.get_files_full.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files_full.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_files_full.call(null,repo));
var dir_name = frontend.config.get_local_dir(repo);
var handle_path = [frontend.config.local_handle_prefix,dir_name].join('');
var path_handles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var electron_QMARK_ = frontend.util.electron_QMARK_();
var mobile_native_QMARK_ = frontend.mobile.util.native_platform_QMARK_();
var nfs_QMARK_ = ((cljs.core.not(electron_QMARK_)) && (cljs.core.not(mobile_native_QMARK_)));
if(cljs.core.truth_(re_index_QMARK_)){
frontend.state.set_graph_syncing_QMARK_(true);
} else {
}

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(electron_QMARK_)?null:frontend.idb.get_item(handle_path)),(function (handle){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5043__auto__ = handle;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = electron_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return mobile_native_QMARK_;
}
}
})())?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(handle)?frontend.fs.nfs.verify_permission(repo,handle,true):null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.get_files(((nfs_QMARK_)?handle:frontend.config.get_local_dir(repo)),(function (path,handle__$1){
if(nfs_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(path_handles,cljs.core.assoc,path,handle__$1);
} else {
return null;
}
})),(function (files_result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.remove_ignore_files(frontend.handler.web.nfs.__GT_db_files(mobile_native_QMARK_,electron_QMARK_,dir_name,files_result),dir_name,nfs_QMARK_),(function (new_files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?(function (){
var file_paths_51722 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),new_files));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(path_handles,(function (handles){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51622){
var vec__51623 = p__51622;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51623,(0),null);
var _handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51623,(1),null);
return cljs.core.contains_QMARK_(file_paths_51722,clojure.string.replace_first(path,[dir_name,"/"].join(''),""));
}),handles));
}));

return frontend.handler.web.nfs.set_files_BANG_(cljs.core.deref(path_handles));
})()
:null),(function (___$1){
return promesa.protocols._promise(frontend.handler.web.nfs.handle_diffs_BANG_(repo,nfs_QMARK_,old_files,new_files,handle_path,path_handles,re_index_QMARK_));
}));
}));
}));
}));
})):null));
}));
})),(function (error){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.web.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("nfs","load-files-error","nfs/load-files-error",1672347248),repo,new cljs.core.Keyword(null,"line","line",212345235),312], null)),null);

return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.web.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),313], null)),error);
})),(function (_){
return frontend.state.set_graph_syncing_QMARK_(false);
}));
} else {
return null;
}
}));

(frontend.handler.web.nfs.reload_dir_BANG_.cljs$lang$maxFixedArity = 2);

frontend.handler.web.nfs.rebuild_index_BANG_ = (function frontend$handler$web$nfs$rebuild_index_BANG_(repo,ok_handler){
if(cljs.core.truth_(repo)){
frontend.state.set_nfs_refreshing_BANG_(true);

frontend.search.reset_indice_BANG_(repo);

(frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.remove_conn_BANG_.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.remove_conn_BANG_.call(null,repo));

(frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.db.clear_query_state_BANG_.call(null));

frontend.db.start_db_conn_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_me(),repo);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$2(repo,true),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null)),(function (___$1){
return promesa.protocols._promise(frontend.state.set_nfs_refreshing_BANG_(false));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.web.nfs.refresh_BANG_ = (function frontend$handler$web$nfs$refresh_BANG_(repo,ok_handler){
if(cljs.core.truth_(repo)){
frontend.state.set_nfs_refreshing_BANG_(true);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.reload_dir_BANG_.cljs$core$IFn$_invoke$arity$1(repo),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null)),(function (___$1){
return promesa.protocols._promise(frontend.state.set_nfs_refreshing_BANG_(false));
}));
}));
}));
} else {
return null;
}
});
frontend.handler.web.nfs.supported_QMARK_ = (function frontend$handler$web$nfs$supported_QMARK_(){
var or__5043__auto__ = module$frontend$utils.nfsSupported();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.electron_QMARK_();
}
});

//# sourceMappingURL=frontend.handler.web.nfs.js.map
