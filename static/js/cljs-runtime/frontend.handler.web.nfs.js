goog.provide('frontend.handler.web.nfs');
goog.scope(function(){
  frontend.handler.web.nfs.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.web.nfs.remove_ignore_files = (function frontend$handler$web$nfs$remove_ignore_files(files){
var files__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (f){
var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(f);
var or__4253__auto__ = clojure.string.starts_with_QMARK_(path,".git/");
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = clojure.string.includes_QMARK_(path,".git/");
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto__ = frontend.util.fs.ignored_path_QMARK_("",path);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","name","file/name",1848919477).cljs$core$IFn$_invoke$arity$1(f),".gitignore");
} else {
return and__4251__auto__;
}
}
}
}),files);
var temp__5718__auto__ = cljs.core.some((function (p1__63926_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","name","file/name",1848919477).cljs$core$IFn$_invoke$arity$1(p1__63926_SHARP_),".gitignore")){
return p1__63926_SHARP_;
} else {
return null;
}
}),files__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var ignore_file = temp__5718__auto__;
var temp__5718__auto____$1 = new cljs.core.Keyword("file","file","file/file",-1241327538).cljs$core$IFn$_invoke$arity$1(ignore_file);
if(cljs.core.truth_(temp__5718__auto____$1)){
var file = temp__5718__auto____$1;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),(cljs.core.truth_(mobile_native_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63930){
var map__63931 = p__63930;
var map__63931__$1 = cljs.core.__destructure_map(map__63931);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63931__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63931__$1,new cljs.core.Keyword(null,"content","content",15833224));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63931__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var mtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63931__$1,new cljs.core.Keyword(null,"mtime","mtime",963165087));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(uri),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),mtime,new cljs.core.Keyword("file","size","file/size",1053598731),size,new cljs.core.Keyword("file","content","file/content",12680964),content], null);
}),result):(cljs.core.truth_(electron_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63933){
var map__63935 = p__63933;
var map__63935__$1 = cljs.core.__destructure_map(map__63935);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63935__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63935__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63935__$1,new cljs.core.Keyword(null,"content","content",15833224));
var map__63936 = stat;
var map__63936__$1 = cljs.core.__destructure_map(map__63936);
var mtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63936__$1,new cljs.core.Keyword(null,"mtime","mtime",963165087));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63936__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("file","path","file/path",-191335748),logseq.graph_parser.util.path_normalize(path),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),mtime,new cljs.core.Keyword("file","size","file/size",1053598731),size,new cljs.core.Keyword("file","content","file/content",12680964),content], null);
}),result):(function (){var result__$1 = cljs.core.flatten(cljs_bean.core.__GT_clj(result));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
var handle = frontend.handler.web.nfs.goog$module$goog$object.get(file,"handle");
var get_attr = (function (p1__63929_SHARP_){
return frontend.handler.web.nfs.goog$module$goog$object.get(file,p1__63929_SHARP_);
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
var handles__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63941){
var vec__63942 = p__63941;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63942,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63942,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),path,new cljs.core.Keyword(null,"value","value",305978217),handle], null);
}),handles);
return frontend.idb.set_batch_BANG_(handles__$1);
});
frontend.handler.web.nfs.set_files_aux_BANG_ = (function frontend$handler$web$nfs$set_files_aux_BANG_(handles){
if(cljs.core.seq(handles)){
var vec__63947 = cljs.core.split_at((50),handles);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63947,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63947,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
var handles__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63973){
var vec__63975 = p__63973;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63975,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63975,(1),null);
var handle_path = [frontend.config.local_handle_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [handle_path,handle], null);
}),handles);
var seq__63979_64220 = cljs.core.seq(handles__$1);
var chunk__63980_64221 = null;
var count__63981_64222 = (0);
var i__63982_64223 = (0);
while(true){
if((i__63982_64223 < count__63981_64222)){
var vec__63991_64224 = chunk__63980_64221.cljs$core$IIndexed$_nth$arity$2(null,i__63982_64223);
var path_64225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63991_64224,(0),null);
var handle_64226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63991_64224,(1),null);
frontend.fs.nfs.add_nfs_file_handle_BANG_(path_64225,handle_64226);


var G__64227 = seq__63979_64220;
var G__64228 = chunk__63980_64221;
var G__64229 = count__63981_64222;
var G__64230 = (i__63982_64223 + (1));
seq__63979_64220 = G__64227;
chunk__63980_64221 = G__64228;
count__63981_64222 = G__64229;
i__63982_64223 = G__64230;
continue;
} else {
var temp__5720__auto___64231 = cljs.core.seq(seq__63979_64220);
if(temp__5720__auto___64231){
var seq__63979_64232__$1 = temp__5720__auto___64231;
if(cljs.core.chunked_seq_QMARK_(seq__63979_64232__$1)){
var c__4679__auto___64233 = cljs.core.chunk_first(seq__63979_64232__$1);
var G__64234 = cljs.core.chunk_rest(seq__63979_64232__$1);
var G__64235 = c__4679__auto___64233;
var G__64236 = cljs.core.count(c__4679__auto___64233);
var G__64237 = (0);
seq__63979_64220 = G__64234;
chunk__63980_64221 = G__64235;
count__63981_64222 = G__64236;
i__63982_64223 = G__64237;
continue;
} else {
var vec__63998_64238 = cljs.core.first(seq__63979_64232__$1);
var path_64239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63998_64238,(0),null);
var handle_64240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63998_64238,(1),null);
frontend.fs.nfs.add_nfs_file_handle_BANG_(path_64239,handle_64240);


var G__64241 = cljs.core.next(seq__63979_64232__$1);
var G__64242 = null;
var G__64243 = (0);
var G__64244 = (0);
seq__63979_64220 = G__64241;
chunk__63980_64221 = G__64242;
count__63981_64222 = G__64243;
i__63982_64223 = G__64244;
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
var mobile_native_QMARK_ = frontend.mobile.util.is_native_platform_QMARK_();
var nfs_QMARK_ = ((cljs.core.not(electron_QMARK_)) && (cljs.core.not(mobile_native_QMARK_)));
var _STAR_repo = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([frontend.config.local_handle_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name)].join(''),(function (root_handle_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?(function (){
frontend.idb.set_item_BANG_(root_handle_path,root_handle);

return frontend.fs.nfs.add_nfs_file_handle_BANG_(root_handle_path,root_handle);
})()
:null),(function (___$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(1)),(function (result__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.remove_ignore_files(frontend.handler.web.nfs.__GT_db_files(mobile_native_QMARK_,electron_QMARK_,dir_name,result__$1)),(function (files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?(function (){
var file_paths_64246 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),files));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(path_handles,(function (handles){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__64050){
var vec__64051 = p__64050;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64051,(0),null);
var _handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64051,(1),null);
var or__4253__auto__ = cljs.core.contains_QMARK_(file_paths_64246,clojure.string.replace_first(path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir_name),"/"].join(''),""));
if(or__4253__auto__){
return or__4253__auto__;
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?new cljs.core.Keyword("file","file","file/file",-1241327538).cljs$core$IFn$_invoke$arity$1(file).text():new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file)),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(content),(function (content__$1){
return promesa.protocols._promise(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword("file","content","file/content",12680964),content__$1));
}));
}));
}));
}),markup_files)),(function (result__$2){
var files__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64003_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__64003_SHARP_,new cljs.core.Keyword("file","file","file/file",-1241327538));
}),result__$2);
frontend.handler.repo.start_repo_db_if_not_exists_BANG_(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db-type","db-type",404552925),new cljs.core.Keyword(null,"local-native-fs","local-native-fs",1517221766)], null));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64106){
var state_val_64110 = (state_64106[(1)]);
if((state_val_64110 === (1))){
var inst_64062 = [new cljs.core.Keyword(null,"new-graph?","new-graph?",-843567695),new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639),new cljs.core.Keyword(null,"nfs-files","nfs-files",-360703182)];
var inst_64065 = cljs.core.seq(markup_files);
var inst_64066 = (inst_64065 == null);
var inst_64067 = [true,inst_64066,files__$1];
var inst_64068 = cljs.core.PersistentHashMap.fromArrays(inst_64062,inst_64067);
var inst_64069 = frontend.handler.repo.load_repo_to_db_BANG_(repo,inst_64068);
var state_64106__$1 = state_64106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64106__$1,(2),inst_64069);
} else {
if((state_val_64110 === (2))){
var inst_64072 = (state_64106[(2)]);
var inst_64080 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"nfs?","nfs?",-544337673)];
var inst_64081 = [repo,true];
var inst_64082 = cljs.core.PersistentHashMap.fromArrays(inst_64080,inst_64081);
var inst_64083 = frontend.state.add_repo_BANG_(inst_64082);
var inst_64084 = frontend.state.set_loading_files_BANG_(repo,false);
var state_64106__$1 = (function (){var statearr_64117 = state_64106;
(statearr_64117[(7)] = inst_64084);

(statearr_64117[(8)] = inst_64083);

(statearr_64117[(9)] = inst_64072);

return statearr_64117;
})();
if(cljs.core.truth_(ok_handler)){
var statearr_64119_64248 = state_64106__$1;
(statearr_64119_64248[(1)] = (3));

} else {
var statearr_64121_64249 = state_64106__$1;
(statearr_64121_64249[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64110 === (3))){
var inst_64086 = (ok_handler.cljs$core$IFn$_invoke$arity$0 ? ok_handler.cljs$core$IFn$_invoke$arity$0() : ok_handler.call(null));
var state_64106__$1 = state_64106;
var statearr_64122_64250 = state_64106__$1;
(statearr_64122_64250[(2)] = inst_64086);

(statearr_64122_64250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64110 === (4))){
var state_64106__$1 = state_64106;
var statearr_64124_64251 = state_64106__$1;
(statearr_64124_64251[(2)] = null);

(statearr_64124_64251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64110 === (5))){
var inst_64089 = (state_64106[(2)]);
var inst_64090 = frontend.fs.watch_dir_BANG_(dir_name);
var inst_64095 = frontend.db.persist_if_idle_BANG_(repo);
var state_64106__$1 = (function (){var statearr_64127 = state_64106;
(statearr_64127[(10)] = inst_64090);

(statearr_64127[(11)] = inst_64089);

return statearr_64127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64106__$1,inst_64095);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto__ = null;
var frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto____0 = (function (){
var statearr_64130 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64130[(0)] = frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto__);

(statearr_64130[(1)] = (1));

return statearr_64130;
});
var frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto____1 = (function (state_64106){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64106);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64132){var ex__41842__auto__ = e64132;
var statearr_64133_64252 = state_64106;
(statearr_64133_64252[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64106[(4)]))){
var statearr_64135_64253 = state_64106;
(statearr_64135_64253[(1)] = cljs.core.first((state_64106[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64254 = state_64106;
state_64106 = G__64254;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto__ = function(state_64106){
switch(arguments.length){
case 0:
return frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto____1.call(this,state_64106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto____0;
frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto____1;
return frontend$handler$web$nfs$ls_dir_files_with_handler_BANG__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64137 = f__41862__auto__();
(statearr_64137[(6)] = c__41861__auto__);

return statearr_64137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
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
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64141_SHARP_){
return cljs.core.select_keys(p1__64141_SHARP_,ks__$1);
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
return cljs.core.some((function (p1__64142_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__64142_SHARP_),path)){
return p1__64142_SHARP_;
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
return cljs.core.some((function (p1__64154_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(p1__64154_SHARP_),path)){
return p1__64154_SHARP_;
} else {
return null;
}
}),files);
});
var map__64158 = frontend.handler.web.nfs.compute_diffs(old_files,new_files);
var map__64158__$1 = cljs.core.__destructure_map(map__64158);
var added = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64158__$1,new cljs.core.Keyword(null,"added","added",2057651688));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64158__$1,new cljs.core.Keyword(null,"modified","modified",-2134587826));
var deleted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64158__$1,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
var rename_f = (function (typ,col){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (file){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),typ,new cljs.core.Keyword(null,"path","path",-188191168),file,new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),get_last_modified_at(file)], null);
}),col);
});
var _ = (cljs.core.truth_((function (){var and__4251__auto__ = nfs_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(deleted);
} else {
return and__4251__auto__;
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
var ___$1 = (cljs.core.truth_((function (){var and__4251__auto__ = nfs_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(added_or_modified);
} else {
return and__4251__auto__;
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
var files = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64156_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__64156_SHARP_,new cljs.core.Keyword("file","file","file/file",-1241327538),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","handle","file/handle",1544192618)], 0));
}),result);
var vec__64166 = (cljs.core.truth_(re_index_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [files,cljs.core.set(modified)], null):(function (){var modified_files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
return cljs.core.contains_QMARK_(added_or_modified,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file));
}),files);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modified_files,cljs.core.set(modified)], null);
})());
var modified_files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64166,(0),null);
var modified__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64166,(1),null);
var diffs = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(rename_f("remove",deleted),rename_f("add",added),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rename_f("modify",modified__$1)], 0));
if(((((cljs.core.seq(diffs)) && (cljs.core.seq(modified_files)))) || (cljs.core.seq(diffs)))){

frontend.handler.repo.load_repo_to_db_BANG_(repo,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"diffs","diffs",-1720136241),diffs,new cljs.core.Keyword(null,"nfs-files","nfs-files",-360703182),modified_files,new cljs.core.Keyword(null,"refresh?","refresh?",-1507960570),cljs.core.not(re_index_QMARK_)], null));
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(re_index_QMARK_);
} else {
return and__4251__auto__;
}
})())){
return (frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(repo,new_files) : frontend.db.transact_BANG_.call(null,repo,new_files));
} else {
return null;
}
}));
});
frontend.handler.web.nfs.reload_dir_BANG_ = (function frontend$handler$web$nfs$reload_dir_BANG_(var_args){
var G__64181 = arguments.length;
switch (G__64181) {
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
if(cljs.core.truth_((function (){var and__4251__auto__ = repo;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(repo);
} else {
return and__4251__auto__;
}
})())){
var old_files = (frontend.db.get_files_full.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_files_full.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_files_full.call(null,repo));
var dir_name = frontend.config.get_local_dir(repo);
var handle_path = [frontend.config.local_handle_prefix,dir_name].join('');
var path_handles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var electron_QMARK_ = frontend.util.electron_QMARK_();
var mobile_native_QMARK_ = frontend.mobile.util.is_native_platform_QMARK_();
var nfs_QMARK_ = ((cljs.core.not(electron_QMARK_)) && (cljs.core.not(mobile_native_QMARK_)));
if(cljs.core.truth_(re_index_QMARK_)){
frontend.state.set_graph_syncing_QMARK_(true);
} else {
}

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(electron_QMARK_)?null:frontend.idb.get_item(handle_path)),(function (handle){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__4253__auto__ = handle;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = electron_QMARK_;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return mobile_native_QMARK_;
}
}
})())?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(handle)?frontend.fs.nfs.verify_permission(repo,handle,true):null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.get_files(((nfs_QMARK_)?handle:frontend.config.get_local_dir(repo)),(function (path,handle__$1){
if(nfs_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(path_handles,cljs.core.assoc,path,handle__$1);
} else {
return null;
}
})),(function (files_result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.web.nfs.remove_ignore_files(frontend.handler.web.nfs.__GT_db_files(mobile_native_QMARK_,electron_QMARK_,dir_name,files_result)),(function (new_files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((nfs_QMARK_)?(function (){
var file_paths_64265 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),new_files));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(path_handles,(function (handles){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__64212){
var vec__64213 = p__64212;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64213,(0),null);
var _handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64213,(1),null);
return cljs.core.contains_QMARK_(file_paths_64265,clojure.string.replace_first(path,[dir_name,"/"].join(''),""));
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

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
var or__4253__auto__ = module$frontend$utils.nfsSupported();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.util.electron_QMARK_();
}
});

//# sourceMappingURL=frontend.handler.web.nfs.js.map
