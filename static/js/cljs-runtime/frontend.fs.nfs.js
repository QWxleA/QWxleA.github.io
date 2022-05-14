goog.provide('frontend.fs.nfs');
goog.scope(function(){
  frontend.fs.nfs.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.nfs !== 'undefined') && (typeof frontend.fs.nfs.nfs_file_handles_cache !== 'undefined')){
} else {
frontend.fs.nfs.nfs_file_handles_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.fs.nfs.get_nfs_file_handle = (function frontend$fs$nfs$get_nfs_file_handle(handle_path){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.fs.nfs.nfs_file_handles_cache),handle_path);
});
frontend.fs.nfs.add_nfs_file_handle_BANG_ = (function frontend$fs$nfs$add_nfs_file_handle_BANG_(handle_path,handle){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.fs.nfs.nfs_file_handles_cache,cljs.core.assoc,handle_path,handle);
});
frontend.fs.nfs.remove_nfs_file_handle_BANG_ = (function frontend$fs$nfs$remove_nfs_file_handle_BANG_(handle_path){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.fs.nfs.nfs_file_handles_cache,cljs.core.dissoc,handle_path);
});
frontend.fs.nfs.nfs_saved_handler = (function frontend$fs$nfs$nfs_saved_handler(repo,path,file){
var temp__5720__auto__ = frontend.fs.nfs.goog$module$goog$object.get(file,"lastModified");
if(cljs.core.truth_(temp__5720__auto__)){
var last_modified = temp__5720__auto__;
var path__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(path)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,(1)):path);
return (frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_last_modified_at_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path__$1,last_modified) : frontend.db.set_file_last_modified_at_BANG_.call(null,repo,path__$1,last_modified));
} else {
return null;
}
});
frontend.fs.nfs.verify_permission = (function frontend$fs$nfs$verify_permission(repo,handle,read_write_QMARK_){
var repo__$1 = (function (){var or__4253__auto__ = repo;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.verifyPermission(handle,read_write_QMARK_),(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nfs","user-granted?","nfs/user-granted?",-1655101253),repo__$1], null),true);

return true;
}));
});
frontend.fs.nfs.check_directory_permission_BANG_ = (function frontend$fs$nfs$check_directory_permission_BANG_(repo){
if(frontend.config.local_db_QMARK_(repo)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)].join('')),(function (handle){
return promesa.protocols._promise((cljs.core.truth_(handle)?frontend.fs.nfs.verify_permission(repo,handle,true):null));
}));
}));
} else {
return null;
}
});
frontend.fs.nfs.contents_matched_QMARK_ = (function frontend$fs$nfs$contents_matched_QMARK_(disk_content,db_content){
if(((typeof disk_content === 'string') && (typeof db_content === 'string'))){
if(cljs.core.truth_(frontend.encrypt.encrypted_db_QMARK_(frontend.state.get_current_repo()))){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(disk_content),(function (decrypted_content){
return promesa.protocols._promise(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(decrypted_content),clojure.string.trim(db_content)));
}));
}));
} else {
return promesa.core.resolved(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(disk_content),clojure.string.trim(db_content)));
}
} else {
return null;
}
});

/**
* @constructor
 * @implements {frontend.fs.protocol.Fs}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.fs.nfs.Nfs = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.nfs.Nfs.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k93937,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__93943 = k93937;
switch (G__93943) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k93937,else__4505__auto__);

}
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__93944){
var vec__93945 = p__93944;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93945,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93945,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#frontend.fs.nfs.Nfs{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__93936){
var self__ = this;
var G__93936__$1 = this;
return (new cljs.core.RecordIter((0),G__93936__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new frontend.fs.nfs.Nfs(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-207953394 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this93938,other93939){
var self__ = this;
var this93938__$1 = this;
return (((!((other93939 == null)))) && ((((this93938__$1.constructor === other93939.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this93938__$1.__extmap,other93939.__extmap)))));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new frontend.fs.nfs.Nfs(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k93937){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k93937);
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__93936){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__93950 = cljs.core.keyword_identical_QMARK_;
var expr__93951 = k__4511__auto__;
return (new frontend.fs.nfs.Nfs(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__93936),null));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__93936){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.fs.nfs.Nfs(G__93936,self__.__extmap,self__.__hash));
}));

(frontend.fs.nfs.Nfs.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
var parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(dir,"/"));
var root = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.butlast(parts));
var new_dir = cljs.core.last(parts);
var root_handle = ["handle/",root].join('');
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(root_handle),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(handle)?frontend.fs.nfs.verify_permission(null,handle,true):null),(function (_){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__4251__auto__ = handle;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = new_dir;
if(cljs.core.truth_(and__4251__auto____$1)){
return (!(clojure.string.blank_QMARK_(new_dir)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(handle.getDirectoryHandle(new_dir,({"create": true})),(function (handle__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([root_handle,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_dir)].join(''),(function (handle_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.set_item_BANG_(handle_path,handle__$1),(function (___$1){
return promesa.protocols._promise((function (){
frontend.fs.nfs.add_nfs_file_handle_BANG_(handle_path,handle__$1);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Stored handle: ",[root_handle,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_dir)].join('')], 0));
})()
);
}));
}));
}));
})):null));
}));
}));
})),(function (error){
console.debug("mkdir error: ",error,", dir: ",dir);

throw error;
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$unlink_BANG_$arity$4 = (function (this$,repo,path,_opts){
var self__ = this;
var this$__$1 = this;
var vec__93975 = frontend.util.get_dir_and_basename(path);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93975,(0),null);
var basename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93975,(1),null);
var handle_path = ["handle",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("/%s/%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name,frontend.config.recycle_dir], 0)))].join(''),(function (recycle_dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(this$__$1.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2(null,recycle_dir),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(handle_path),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(handle.getFile(),(function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.text(),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(["handle",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join('')),(function (handle__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.remove_item_BANG_(handle_path),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(clojure.string.replace(clojure.string.replace(path,["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"/"].join(''),""),"/","_"),"\\","_"),(function (file_name){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(recycle_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name)].join(''),(function (new_path){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(this$__$1.frontend$fs$protocol$Fs$write_file_BANG_$arity$6(null,repo,"/",new_path,content,null),(function (___$2){
return promesa.protocols._promise((function (){
if(cljs.core.truth_(handle__$1)){
handle__$1.removeEntry(basename);
} else {
}

return frontend.fs.nfs.remove_nfs_file_handle_BANG_(handle_path);
})()
);
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
})),(function (error){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.fs.nfs",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("unlink","path","unlink/path",-1629444045),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),121], null)),null);
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$get_files$arity$3 = (function (_this,path_or_handle,ok_handler){
var self__ = this;
var _this__$1 = this;
return module$frontend$utils.getFiles(path_or_handle,true,ok_handler);
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$rename_BANG_$arity$4 = (function (this$,repo,old_path,new_path){
var self__ = this;
var this$__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new_path,"/")),(function (parts){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(parts))].join(''),(function (dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.rest(parts)),(function (new_path__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(["handle",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_path)].join('')),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(handle.getFile(),(function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.text(),(function (content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(this$__$1.frontend$fs$protocol$Fs$write_file_BANG_$arity$6(null,repo,dir,new_path__$1,content,null),(function (_){
return promesa.protocols._promise(this$__$1.frontend$fs$protocol$Fs$unlink_BANG_$arity$4(null,repo,old_path,null));
}));
}));
}));
}));
}));
}));
}));
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$readdir$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
var prefix = ["handle/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join('');
var cached_files = cljs.core.keys(cljs.core.deref(frontend.fs.nfs.nfs_file_handles_cache));
return promesa.core.resolved(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
return clojure.string.replace(path,prefix,"");
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__93927_SHARP_){
return clojure.string.starts_with_QMARK_(p1__93927_SHARP_,[prefix,"/"].join(''));
}),cached_files)));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$stat$arity$3 = (function (_this,dir,path){
var self__ = this;
var _this__$1 = this;
var temp__5718__auto__ = frontend.fs.nfs.get_nfs_file_handle(["handle/",clojure.string.replace_first(dir,"/",""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
if(cljs.core.truth_(temp__5718__auto__)){
var file = temp__5718__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.getFile(),(function (file__$1){
return promesa.protocols._promise((function (){var get_attr = (function (p1__93934_SHARP_){
return frontend.fs.nfs.goog$module$goog$object.get(file__$1,p1__93934_SHARP_);
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310),get_attr("lastModified"),new cljs.core.Keyword("file","size","file/size",1053598731),get_attr("size"),new cljs.core.Keyword("file","type","file/type",1177401880),get_attr("type")], null);
})());
}));
}));
} else {
return promesa.core.rejected("File not exists");
}
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$watch_dir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$rmdir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$write_file_BANG_$arity$6 = (function (_this,repo,dir,path,content,opts){
var self__ = this;
var _this__$1 = this;
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,"/");
var basename = cljs.core.last(parts);
var sub_dir = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.butlast(parts)));
var sub_dir_handle_path = ["handle/",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(dir,(1)),(cljs.core.truth_(sub_dir)?["/",sub_dir].join(''):null)].join('');
var handle_path = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.last(sub_dir_handle_path)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(sub_dir_handle_path,(0),(((sub_dir_handle_path).length) - (1))):sub_dir_handle_path);
var handle_path__$1 = clojure.string.replace(handle_path,"//","/");
var basename_handle_path = [handle_path__$1,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basename)].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(basename_handle_path),(function (file_handle){
return promesa.protocols._promise(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(file_handle)?promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file_handle.getFile(),(function (_){
return promesa.protocols._promise(true);
}));
})),(function (e){
console.dir(e);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("NotFoundError",e.name)){
frontend.idb.remove_item_BANG_(basename_handle_path);

frontend.fs.nfs.remove_nfs_file_handle_BANG_(basename_handle_path);
} else {
}

return false;
})):null),(function (test_get_file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(test_get_file)?file_handle:null),(function (file_handle__$1){
return promesa.protocols._promise((function (){
if(cljs.core.truth_(file_handle__$1)){
frontend.fs.nfs.add_nfs_file_handle_BANG_(basename_handle_path,file_handle__$1);
} else {
}

if(cljs.core.truth_(file_handle__$1)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file_handle__$1.getFile(),(function (local_file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(local_file.text(),(function (local_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.get_write_chan_length(),(function (pending_writes){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(frontend.util.get_file_ext(path)),(function (ext){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(repo,path) : frontend.db.get_file.call(null,repo,path)),(function (db_content){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.contents_matched_QMARK_(local_content,(function (){var or__4253__auto__ = db_content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})()),(function (contents_matched_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(local_content)?(((((!(clojure.string.blank_QMARK_(db_content)))) && (((cljs.core.not(new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960).cljs$core$IFn$_invoke$arity$1(opts))) && (((cljs.core.not(contents_matched_QMARK_)) && ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["excalidraw",null,"css",null,"edn",null], null), null),ext)))) && ((((!(clojure.string.includes_QMARK_(path,"/.recycle/")))) && ((pending_writes === (0)))))))))))))?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(local_content),(function (local_content__$1){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","not-matched-from-disk","file/not-matched-from-disk",1915939272),path,local_content__$1,content], null)));
}));
})):promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.verify_permission(repo,file_handle__$1,true),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.writeFile(file_handle__$1,content),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file_handle__$1.getFile(),(function (file){
return promesa.protocols._promise((cljs.core.truth_(file)?(function (){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$4){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.encrypt.encrypted_db_QMARK_(frontend.state.get_current_repo()))?frontend.encrypt.decrypt.cljs$core$IFn$_invoke$arity$1(content):content),(function (content__$1){
return promesa.protocols._promise((frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_file_content_BANG_.cljs$core$IFn$_invoke$arity$3(repo,path,content__$1) : frontend.db.set_file_content_BANG_.call(null,repo,path,content__$1)));
}));
}));

return frontend.fs.nfs.nfs_saved_handler(repo,path,file);
})()
:null));
}));
}));
}));
}))):null));
}));
}));
}));
}));
}));
}));
})),(function (e){
return console.error(e);
}));
} else {
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(handle_path__$1),(function (handle){
return promesa.protocols._promise((cljs.core.truth_(handle)?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$3){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.nfs.verify_permission(repo,handle,true),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(handle.getFileHandle(basename,({"create": true})),(function (file_handle__$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file_handle__$2.getFile(),(function (file){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file.text(),(function (text){
return promesa.protocols._promise(((clojure.string.blank_QMARK_(text))?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto____$4){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.set_item_BANG_(basename_handle_path,file_handle__$2),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.writeFile(file_handle__$2,content),(function (___$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(file_handle__$2.getFile(),(function (file__$1){
return promesa.protocols._promise((cljs.core.truth_(file__$1)?frontend.fs.nfs.nfs_saved_handler(repo,path,file__$1):null));
}));
}));
}));
})):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["The file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," already exists, please save your changes and click the refresh button to reload it."].join(''),new cljs.core.Keyword(null,"warning","warning",-1685650671))));
}));
}));
}));
}));
})):cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error: directory handle not exists: ",handle_path__$1], 0))));
}));
})),(function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Write local file failed: ",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null)], 0));

return console.error(error);
}));
}
})()
);
}));
}));
})));
}));
}));
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$open_dir$arity$2 = (function (_this,ok_handler){
var self__ = this;
var _this__$1 = this;
return module$frontend$utils.openDirectory(({"recursive": true}),ok_handler);
}));

(frontend.fs.nfs.Nfs.prototype.frontend$fs$protocol$Fs$read_file$arity$4 = (function (_this,dir,path,_options){
var self__ = this;
var _this__$1 = this;
var handle_path = ["handle",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_item(handle_path),(function (handle){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var and__4251__auto__ = handle;
if(cljs.core.truth_(and__4251__auto__)){
return handle.getFile();
} else {
return and__4251__auto__;
}
})(),(function (local_file){
return promesa.protocols._promise((function (){var and__4251__auto__ = local_file;
if(cljs.core.truth_(and__4251__auto__)){
return local_file.text();
} else {
return and__4251__auto__;
}
})());
}));
}));
}));
}));

(frontend.fs.nfs.Nfs.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.nfs.Nfs.cljs$lang$type = true);

(frontend.fs.nfs.Nfs.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"frontend.fs.nfs/Nfs",null,(1),null));
}));

(frontend.fs.nfs.Nfs.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"frontend.fs.nfs/Nfs");
}));

/**
 * Positional factory function for frontend.fs.nfs/Nfs.
 */
frontend.fs.nfs.__GT_Nfs = (function frontend$fs$nfs$__GT_Nfs(){
return (new frontend.fs.nfs.Nfs(null,null,null));
});

/**
 * Factory function for frontend.fs.nfs/Nfs, taking a map of keywords to field values.
 */
frontend.fs.nfs.map__GT_Nfs = (function frontend$fs$nfs$map__GT_Nfs(G__93940){
var extmap__4542__auto__ = (function (){var G__94067 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__93940);
if(cljs.core.record_QMARK_(G__93940)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__94067);
} else {
return G__94067;
}
})();
return (new frontend.fs.nfs.Nfs(null,cljs.core.not_empty(extmap__4542__auto__),null));
});


//# sourceMappingURL=frontend.fs.nfs.js.map
