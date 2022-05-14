goog.provide('frontend.fs.bfs');

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
frontend.fs.bfs.Bfs = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.bfs.Bfs.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k88257,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__88262 = k88257;
switch (G__88262) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k88257,else__4505__auto__);

}
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__88265){
var vec__88266 = p__88265;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88266,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88266,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#frontend.fs.bfs.Bfs{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88256){
var self__ = this;
var G__88256__$1 = this;
return (new cljs.core.RecordIter((0),G__88256__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new frontend.fs.bfs.Bfs(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1484378302 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this88258,other88259){
var self__ = this;
var this88258__$1 = this;
return (((!((other88259 == null)))) && ((((this88258__$1.constructor === other88259.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88258__$1.__extmap,other88259.__extmap)))));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new frontend.fs.bfs.Bfs(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k88257){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k88257);
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__88256){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__88281 = cljs.core.keyword_identical_QMARK_;
var expr__88282 = k__4511__auto__;
return (new frontend.fs.bfs.Bfs(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__88256),null));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__88256){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.fs.bfs.Bfs(G__88256,self__.__extmap,self__.__hash));
}));

(frontend.fs.bfs.Bfs.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$mkdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = window.pfs;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(frontend.util.electron_QMARK_());
} else {
return and__4251__auto__;
}
})())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(window.pfs.mkdir(dir),(function (error){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mkdir error: ",error], 0));
}));
} else {
return null;
}
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$unlink_BANG_$arity$4 = (function (_this,_repo,path,opts){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(window.pfs)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___50821__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.pfs.stat(path),(function (stat){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stat.type,"file"))?window.pfs.unlink(path,opts):promesa.core.rejected("Unlinking a directory is not allowed")));
}));
}));
} else {
return null;
}
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$get_files$arity$3 = (function (_this,_path_or_handle,_ok_handler){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$rename_BANG_$arity$4 = (function (_this,_repo,old_path,new_path){
var self__ = this;
var _this__$1 = this;
return window.pfs.rename(old_path,new_path);
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$readdir$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(window.pfs)){
return window.pfs.readdir(dir);
} else {
return null;
}
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$stat$arity$3 = (function (_this,dir,path){
var self__ = this;
var _this__$1 = this;
return window.pfs.stat([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$watch_dir_BANG_$arity$2 = (function (_this,_dir){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$rmdir_BANG_$arity$2 = (function (_this,dir){
var self__ = this;
var _this__$1 = this;
return window.workerThread.rimraf(dir);
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$write_file_BANG_$arity$6 = (function (_this,_repo,dir,path,content,_opts){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return null;
} else {
return window.pfs.writeFile([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),content);
}
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$open_dir$arity$2 = (function (_this,_ok_handler){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.fs.bfs.Bfs.prototype.frontend$fs$protocol$Fs$read_file$arity$4 = (function (_this,dir,path,options){
var self__ = this;
var _this__$1 = this;
return window.pfs.readFile([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),cljs.core.clj__GT_js(options));
}));

(frontend.fs.bfs.Bfs.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.bfs.Bfs.cljs$lang$type = true);

(frontend.fs.bfs.Bfs.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"frontend.fs.bfs/Bfs",null,(1),null));
}));

(frontend.fs.bfs.Bfs.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"frontend.fs.bfs/Bfs");
}));

/**
 * Positional factory function for frontend.fs.bfs/Bfs.
 */
frontend.fs.bfs.__GT_Bfs = (function frontend$fs$bfs$__GT_Bfs(){
return (new frontend.fs.bfs.Bfs(null,null,null));
});

/**
 * Factory function for frontend.fs.bfs/Bfs, taking a map of keywords to field values.
 */
frontend.fs.bfs.map__GT_Bfs = (function frontend$fs$bfs$map__GT_Bfs(G__88261){
var extmap__4542__auto__ = (function (){var G__88318 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__88261);
if(cljs.core.record_QMARK_(G__88261)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__88318);
} else {
return G__88318;
}
})();
return (new frontend.fs.bfs.Bfs(null,cljs.core.not_empty(extmap__4542__auto__),null));
});


//# sourceMappingURL=frontend.fs.bfs.js.map
