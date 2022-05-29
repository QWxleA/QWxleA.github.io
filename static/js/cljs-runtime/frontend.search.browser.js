goog.provide('frontend.search.browser');
goog.scope(function(){
  frontend.search.browser.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.search.browser.search_blocks = (function frontend$search$browser$search_blocks(repo,q,p__43729){
var map__43730 = p__43729;
var map__43730__$1 = cljs.core.__destructure_map(map__43730);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43730__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730__$1,new cljs.core.Keyword(null,"page","page",849072397));
var indice = (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.search.db.indices),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.search.db.make_blocks_indice_BANG_(repo);
}
})();
var result = (cljs.core.truth_(page)?indice.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"$and","$and",-1445249338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["page",page], null),new cljs.core.PersistentArrayMap(null, 1, ["content",q], null)], null)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))):indice.search(q,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))));
var result__$1 = cljs_bean.core.__GT_clj(result);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43731){
var map__43732 = p__43731;
var map__43732__$1 = cljs.core.__destructure_map(map__43732);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43732__$1,new cljs.core.Keyword(null,"item","item",249373802));
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43732__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var map__43733 = item;
var map__43733__$1 = cljs.core.__destructure_map(map__43733);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43733__$1,new cljs.core.Keyword(null,"content","content",15833224));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43733__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var page__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43733__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","content","block/content",-161885195),content,new cljs.core.Keyword("block","page","block/page",822314108),page__$1,new cljs.core.Keyword("search","matches","search/matches",2079263862),matches], null);
}),result__$1));
});

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
frontend.search.browser.Browser = (function (repo,__meta,__extmap,__hash){
this.repo = repo;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.search.browser.Browser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.search.browser.Browser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k43735,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__43741 = k43735;
var G__43741__$1 = (((G__43741 instanceof cljs.core.Keyword))?G__43741.fqn:null);
switch (G__43741__$1) {
case "repo":
return self__.repo;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43735,else__5343__auto__);

}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__43742){
var vec__43743 = p__43742;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43743,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43743,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.search.browser.Browser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.search.browser.Browser{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null))], null),self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43734){
var self__ = this;
var G__43734__$1 = this;
return (new cljs.core.RecordIter((0),G__43734__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1998111184 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43736,other43737){
var self__ = this;
var this43736__$1 = this;
return (((!((other43737 == null)))) && ((((this43736__$1.constructor === other43737.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43736__$1.repo,other43737.repo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43736__$1.__extmap,other43737.__extmap)))))));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k43735){
var self__ = this;
var this__5347__auto____$1 = this;
var G__43749 = k43735;
var G__43749__$1 = (((G__43749 instanceof cljs.core.Keyword))?G__43749.fqn:null);
switch (G__43749__$1) {
case "repo":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k43735);

}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__43734){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__43750 = cljs.core.keyword_identical_QMARK_;
var expr__43751 = k__5349__auto__;
if(cljs.core.truth_((pred__43750.cljs$core$IFn$_invoke$arity$2 ? pred__43750.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__43751) : pred__43750.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__43751)))){
return (new frontend.search.browser.Browser(G__43734,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__43734),null));
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null))], null),self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__43734){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.search.browser.Browser(self__.repo,G__43734,self__.__extmap,self__.__hash));
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$query$arity$3 = (function (_this,q,option){
var self__ = this;
var _this__$1 = this;
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(frontend.search.browser.search_blocks(self__.repo,q,option));
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var indice = frontend.search.db.make_blocks_indice_BANG_(self__.repo);
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(indice);
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$cache_stale_QMARK_$arity$2 = (function (_this,_repo){
var self__ = this;
var _this__$1 = this;
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(false);
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 = (function (_this,p__43759){
var self__ = this;
var map__43760 = p__43759;
var map__43760__$1 = cljs.core.__destructure_map(map__43760);
var blocks_to_remove_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43760__$1,new cljs.core.Keyword(null,"blocks-to-remove-set","blocks-to-remove-set",266406009));
var blocks_to_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43760__$1,new cljs.core.Keyword(null,"blocks-to-add","blocks-to-add",-814061792));
var _this__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),(function (indice){
if(cljs.core.truth_(indice)){
var seq__43765_43786 = cljs.core.seq(blocks_to_remove_set);
var chunk__43766_43787 = null;
var count__43767_43788 = (0);
var i__43768_43789 = (0);
while(true){
if((i__43768_43789 < count__43767_43788)){
var block_id_43790 = chunk__43766_43787.cljs$core$IIndexed$_nth$arity$2(null,i__43768_43789);
indice.remove(((function (seq__43765_43786,chunk__43766_43787,count__43767_43788,i__43768_43789,block_id_43790,_this__$1,map__43760,map__43760__$1,blocks_to_remove_set,blocks_to_add){
return (function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id_43790,frontend.search.browser.goog$module$goog$object.get(block,"id"));
});})(seq__43765_43786,chunk__43766_43787,count__43767_43788,i__43768_43789,block_id_43790,_this__$1,map__43760,map__43760__$1,blocks_to_remove_set,blocks_to_add))
);


var G__43791 = seq__43765_43786;
var G__43792 = chunk__43766_43787;
var G__43793 = count__43767_43788;
var G__43794 = (i__43768_43789 + (1));
seq__43765_43786 = G__43791;
chunk__43766_43787 = G__43792;
count__43767_43788 = G__43793;
i__43768_43789 = G__43794;
continue;
} else {
var temp__5720__auto___43795 = cljs.core.seq(seq__43765_43786);
if(temp__5720__auto___43795){
var seq__43765_43796__$1 = temp__5720__auto___43795;
if(cljs.core.chunked_seq_QMARK_(seq__43765_43796__$1)){
var c__5565__auto___43797 = cljs.core.chunk_first(seq__43765_43796__$1);
var G__43798 = cljs.core.chunk_rest(seq__43765_43796__$1);
var G__43799 = c__5565__auto___43797;
var G__43800 = cljs.core.count(c__5565__auto___43797);
var G__43801 = (0);
seq__43765_43786 = G__43798;
chunk__43766_43787 = G__43799;
count__43767_43788 = G__43800;
i__43768_43789 = G__43801;
continue;
} else {
var block_id_43802 = cljs.core.first(seq__43765_43796__$1);
indice.remove(((function (seq__43765_43786,chunk__43766_43787,count__43767_43788,i__43768_43789,block_id_43802,seq__43765_43796__$1,temp__5720__auto___43795,_this__$1,map__43760,map__43760__$1,blocks_to_remove_set,blocks_to_add){
return (function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id_43802,frontend.search.browser.goog$module$goog$object.get(block,"id"));
});})(seq__43765_43786,chunk__43766_43787,count__43767_43788,i__43768_43789,block_id_43802,seq__43765_43796__$1,temp__5720__auto___43795,_this__$1,map__43760,map__43760__$1,blocks_to_remove_set,blocks_to_add))
);


var G__43803 = cljs.core.next(seq__43765_43796__$1);
var G__43804 = null;
var G__43805 = (0);
var G__43806 = (0);
seq__43765_43786 = G__43803;
chunk__43766_43787 = G__43804;
count__43767_43788 = G__43805;
i__43768_43789 = G__43806;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(blocks_to_add)){
var seq__43773_43807 = cljs.core.seq(blocks_to_add);
var chunk__43774_43808 = null;
var count__43775_43809 = (0);
var i__43776_43810 = (0);
while(true){
if((i__43776_43810 < count__43775_43809)){
var block_43811 = chunk__43774_43808.cljs$core$IIndexed$_nth$arity$2(null,i__43776_43810);
indice.add(cljs_bean.core.__GT_js(block_43811));


var G__43812 = seq__43773_43807;
var G__43813 = chunk__43774_43808;
var G__43814 = count__43775_43809;
var G__43815 = (i__43776_43810 + (1));
seq__43773_43807 = G__43812;
chunk__43774_43808 = G__43813;
count__43775_43809 = G__43814;
i__43776_43810 = G__43815;
continue;
} else {
var temp__5720__auto___43816 = cljs.core.seq(seq__43773_43807);
if(temp__5720__auto___43816){
var seq__43773_43817__$1 = temp__5720__auto___43816;
if(cljs.core.chunked_seq_QMARK_(seq__43773_43817__$1)){
var c__5565__auto___43818 = cljs.core.chunk_first(seq__43773_43817__$1);
var G__43819 = cljs.core.chunk_rest(seq__43773_43817__$1);
var G__43820 = c__5565__auto___43818;
var G__43821 = cljs.core.count(c__5565__auto___43818);
var G__43822 = (0);
seq__43773_43807 = G__43819;
chunk__43774_43808 = G__43820;
count__43775_43809 = G__43821;
i__43776_43810 = G__43822;
continue;
} else {
var block_43823 = cljs.core.first(seq__43773_43817__$1);
indice.add(cljs_bean.core.__GT_js(block_43823));


var G__43824 = cljs.core.next(seq__43773_43817__$1);
var G__43825 = null;
var G__43826 = (0);
var G__43827 = (0);
seq__43773_43807 = G__43824;
chunk__43774_43808 = G__43825;
count__43775_43809 = G__43826;
i__43776_43810 = G__43827;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

return indice;
}));
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),null);
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$remove_db_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.search.browser.Browser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"repo","repo",-358529152,null)], null);
}));

(frontend.search.browser.Browser.cljs$lang$type = true);

(frontend.search.browser.Browser.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.search.browser/Browser",null,(1),null));
}));

(frontend.search.browser.Browser.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.search.browser/Browser");
}));

/**
 * Positional factory function for frontend.search.browser/Browser.
 */
frontend.search.browser.__GT_Browser = (function frontend$search$browser$__GT_Browser(repo){
return (new frontend.search.browser.Browser(repo,null,null,null));
});

/**
 * Factory function for frontend.search.browser/Browser, taking a map of keywords to field values.
 */
frontend.search.browser.map__GT_Browser = (function frontend$search$browser$map__GT_Browser(G__43740){
var extmap__5382__auto__ = (function (){var G__43779 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43740,new cljs.core.Keyword(null,"repo","repo",-1999060679));
if(cljs.core.record_QMARK_(G__43740)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43779);
} else {
return G__43779;
}
})();
return (new frontend.search.browser.Browser(new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__43740),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


//# sourceMappingURL=frontend.search.browser.js.map
