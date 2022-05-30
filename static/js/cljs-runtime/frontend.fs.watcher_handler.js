goog.provide('frontend.fs.watcher_handler');
frontend.fs.watcher_handler.set_missing_block_ids_BANG_ = (function frontend$fs$watcher_handler$set_missing_block_ids_BANG_(content){
if(typeof content === 'string'){
var seq__53582 = cljs.core.seq(logseq.graph_parser.extract.extract_all_block_refs(content));
var chunk__53583 = null;
var count__53584 = (0);
var i__53585 = (0);
while(true){
if((i__53585 < count__53584)){
var block_id = chunk__53583.cljs$core$IIndexed$_nth$arity$2(null,i__53585);
var temp__5720__auto___53672 = (function (){try{return frontend.db.model.get_block_by_uuid(block_id);
}catch (e53599){if((e53599 instanceof Error)){
var _e = e53599;
return null;
} else {
throw e53599;

}
}})();
if(cljs.core.truth_(temp__5720__auto___53672)){
var block_53675 = temp__5720__auto___53672;
var id_property_53676 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_53675));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_property_53676),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id))){
} else {
frontend.handler.editor.set_block_property_BANG_(block_id,"id",block_id);
}
} else {
}


var G__53677 = seq__53582;
var G__53678 = chunk__53583;
var G__53679 = count__53584;
var G__53680 = (i__53585 + (1));
seq__53582 = G__53677;
chunk__53583 = G__53678;
count__53584 = G__53679;
i__53585 = G__53680;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__53582);
if(temp__5720__auto__){
var seq__53582__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53582__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__53582__$1);
var G__53686 = cljs.core.chunk_rest(seq__53582__$1);
var G__53687 = c__5565__auto__;
var G__53688 = cljs.core.count(c__5565__auto__);
var G__53689 = (0);
seq__53582 = G__53686;
chunk__53583 = G__53687;
count__53584 = G__53688;
i__53585 = G__53689;
continue;
} else {
var block_id = cljs.core.first(seq__53582__$1);
var temp__5720__auto___53691__$1 = (function (){try{return frontend.db.model.get_block_by_uuid(block_id);
}catch (e53600){if((e53600 instanceof Error)){
var _e = e53600;
return null;
} else {
throw e53600;

}
}})();
if(cljs.core.truth_(temp__5720__auto___53691__$1)){
var block_53694 = temp__5720__auto___53691__$1;
var id_property_53696 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block_53694));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_property_53696),cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id))){
} else {
frontend.handler.editor.set_block_property_BANG_(block_id,"id",block_id);
}
} else {
}


var G__53697 = cljs.core.next(seq__53582__$1);
var G__53698 = null;
var G__53699 = (0);
var G__53700 = (0);
seq__53582 = G__53697;
chunk__53583 = G__53698;
count__53584 = G__53699;
i__53585 = G__53700;
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
frontend.fs.watcher_handler.handle_add_and_change_BANG_ = (function frontend$fs$watcher_handler$handle_add_and_change_BANG_(repo,path,content,db_content,mtime,backup_QMARK_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(backup_QMARK_)?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["backupDbFile",frontend.config.get_local_dir(repo),path,db_content,content], 0)):null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.alter_file(repo,path,content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true,new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),true], null)),(function (___$1){
return promesa.protocols._promise((function (){
frontend.fs.watcher_handler.set_missing_block_ids_BANG_(content);

return (frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path,mtime) : frontend.db.set_file_last_modified_at_BANG_.call(null,repo,path,mtime));
})()
);
}));
}));
}));
});
frontend.fs.watcher_handler.handle_changed_BANG_ = (function frontend$fs$watcher_handler$handle_changed_BANG_(type,p__53619){
var map__53620 = p__53619;
var map__53620__$1 = cljs.core.__destructure_map(map__53620);
var payload = map__53620__$1;
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"content","content",15833224));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
if(cljs.core.truth_(dir)){
var path__$1 = logseq.graph_parser.util.path_normalize(path);
var repo = frontend.config.get_local_repo(dir);
var pages_metadata_path = frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$0();
var map__53625 = stat;
var map__53625__$1 = cljs.core.__destructure_map(map__53625);
var mtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53625__$1,new cljs.core.Keyword(null,"mtime","mtime",963165087));
var db_content = (function (){var or__5043__auto__ = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path__$1) : frontend.db.get_file.call(null,repo,path__$1));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"unlink");
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(frontend.encrypt.content_encrypted_QMARK_(content))) && (cljs.core.not(new cljs.core.Keyword("encryption","graph-parsing?","encryption/graph-parsing?",1059330925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))));
} else {
return and__5041__auto__;
}
})())){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("add",type)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),clojure.string.trim(db_content))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,pages_metadata_path)))))){
var backup_QMARK__53739 = (!(clojure.string.blank_QMARK_(db_content)));
frontend.fs.watcher_handler.handle_add_and_change_BANG_(repo,path__$1,content,db_content,mtime,backup_QMARK__53739);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("change",type)) && (cljs.core.not((frontend.db.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(repo,path__$1) : frontend.db.file_exists_QMARK_.call(null,repo,path__$1)))))){
console.error("Can't get file in the db: ",path__$1);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("change",type)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),clojure.string.trim(db_content))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,pages_metadata_path)))))){
if(((clojure.string.includes_QMARK_(path__$1,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_journals_directory()),"/"].join(''))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),clojure.string.trim((function (){var or__5043__auto__ = frontend.state.get_default_journal_template();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})()))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),"-")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(content),"*")))))))){
} else {
frontend.fs.watcher_handler.handle_add_and_change_BANG_(repo,path__$1,content,db_content,mtime,true);
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("unlink",type);
if(and__5041__auto__){
return (frontend.db.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(repo,path__$1) : frontend.db.file_exists_QMARK_.call(null,repo,path__$1));
} else {
return and__5041__auto__;
}
})())){
var temp__5720__auto___53783 = (frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1(path__$1) : frontend.db.get_file_page.call(null,path__$1));
if(cljs.core.truth_(temp__5720__auto___53783)){
var page_name_53784 = temp__5720__auto___53783;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Delete page: ",page_name_53784,", file path: ",path__$1,"."], 0));

frontend.handler.page.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic(page_name_53784,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"delete-file?","delete-file?",668245808),false], 0));
} else {
}
} else {
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["unlink",null,"add",null,"change",null], null), null),type)) && (clojure.string.ends_with_QMARK_(path__$1,"logseq/custom.css")))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reloading custom.css"], 0));

frontend.handler.ui.add_style_if_exists_BANG_();
} else {
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["add",null], null), null),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,pages_metadata_path)))){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.protocols._promise(frontend.handler.repo.update_pages_metadata_BANG_(repo,content,true));
}));
} else {
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["change",null], null), null),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,pages_metadata_path)))){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28350__auto__){
return promesa.protocols._promise(frontend.handler.repo.update_pages_metadata_BANG_(repo,content,false));
}));
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["unlink",null,"add",null,"change",null], null), null),type)){
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.watcher-handler",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fs","watcher-no-handler","fs/watcher-no-handler",1727093639),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null),new cljs.core.Keyword(null,"line","line",212345235),106], null)),null);

}
}
}
}
}
}
}
}
} else {
}

return null;
} else {
return null;
}
});

//# sourceMappingURL=frontend.fs.watcher_handler.js.map
