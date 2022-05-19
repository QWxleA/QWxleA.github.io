goog.provide('frontend.search.node');

/**
* @constructor
 * @implements {frontend.search.protocol.Engine}
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
frontend.search.node.Node = (function (repo,__meta,__extmap,__hash){
this.repo = repo;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.search.node.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(frontend.search.node.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k57299,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__57308 = k57299;
var G__57308__$1 = (((G__57308 instanceof cljs.core.Keyword))?G__57308.fqn:null);
switch (G__57308__$1) {
case "repo":
return self__.repo;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57299,else__4505__auto__);

}
}));

(frontend.search.node.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__57311){
var vec__57312 = p__57311;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57312,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57312,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.search.node.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#frontend.search.node.Node{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null))], null),self__.__extmap));
}));

(frontend.search.node.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57298){
var self__ = this;
var G__57298__$1 = this;
return (new cljs.core.RecordIter((0),G__57298__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.search.node.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(frontend.search.node.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new frontend.search.node.Node(self__.repo,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.search.node.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(frontend.search.node.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1167415074 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(frontend.search.node.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57300,other57301){
var self__ = this;
var this57300__$1 = this;
return (((!((other57301 == null)))) && ((((this57300__$1.constructor === other57301.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57300__$1.repo,other57301.repo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57300__$1.__extmap,other57301.__extmap)))))));
}));

(frontend.search.node.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new frontend.search.node.Node(self__.repo,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(frontend.search.node.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k57299){
var self__ = this;
var this__4509__auto____$1 = this;
var G__57317 = k57299;
var G__57317__$1 = (((G__57317 instanceof cljs.core.Keyword))?G__57317.fqn:null);
switch (G__57317__$1) {
case "repo":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57299);

}
}));

(frontend.search.node.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__57298){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__57318 = cljs.core.keyword_identical_QMARK_;
var expr__57319 = k__4511__auto__;
if(cljs.core.truth_((pred__57318.cljs$core$IFn$_invoke$arity$2 ? pred__57318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__57319) : pred__57318.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__57319)))){
return (new frontend.search.node.Node(G__57298,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.search.node.Node(self__.repo,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__57298),null));
}
}));

(frontend.search.node.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null))], null),self__.__extmap));
}));

(frontend.search.node.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__57298){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.search.node.Node(self__.repo,G__57298,self__.__extmap,self__.__hash));
}));

(frontend.search.node.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$query$arity$3 = (function (_this,q,opts){
var self__ = this;
var _this__$1 = this;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["search-blocks",self__.repo,q,opts], 0)),(function (result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs_bean.core.__GT_clj(result),(function (result__$1){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57326){
var map__57327 = p__57326;
var map__57327__$1 = cljs.core.__destructure_map(map__57327);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57327__$1,new cljs.core.Keyword(null,"content","content",15833224));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57327__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57327__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","content","block/content",-161885195),content,new cljs.core.Keyword("block","page","block/page",822314108),page], null);
}),result__$1));
}));
}));
}));
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$cache_stale_QMARK_$arity$2 = (function (_this,repo__$1){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["searchVersionChanged?",repo__$1], 0));
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var indice = frontend.search.db.build_blocks_indice(self__.repo);
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rebuild-blocks-indice",self__.repo,indice], 0));
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 = (function (_this,data){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["transact-blocks",self__.repo,cljs_bean.core.__GT_js(data)], 0));
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["truncate-blocks",self__.repo], 0));
}));

(frontend.search.node.Node.prototype.frontend$search$protocol$Engine$remove_db_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remove-db",self__.repo], 0));
}));

(frontend.search.node.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"repo","repo",-358529152,null)], null);
}));

(frontend.search.node.Node.cljs$lang$type = true);

(frontend.search.node.Node.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"frontend.search.node/Node",null,(1),null));
}));

(frontend.search.node.Node.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"frontend.search.node/Node");
}));

/**
 * Positional factory function for frontend.search.node/Node.
 */
frontend.search.node.__GT_Node = (function frontend$search$node$__GT_Node(repo){
return (new frontend.search.node.Node(repo,null,null,null));
});

/**
 * Factory function for frontend.search.node/Node, taking a map of keywords to field values.
 */
frontend.search.node.map__GT_Node = (function frontend$search$node$map__GT_Node(G__57302){
var extmap__4542__auto__ = (function (){var G__57334 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57302,new cljs.core.Keyword(null,"repo","repo",-1999060679));
if(cljs.core.record_QMARK_(G__57302)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57334);
} else {
return G__57334;
}
})();
return (new frontend.search.node.Node(new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__57302),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


//# sourceMappingURL=frontend.search.node.js.map
