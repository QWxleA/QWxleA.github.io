goog.provide('frontend.search.browser');
goog.scope(function(){
  frontend.search.browser.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.search.browser.search_blocks = (function frontend$search$browser$search_blocks(repo,q,p__56888){
var map__56889 = p__56888;
var map__56889__$1 = cljs.core.__destructure_map(map__56889);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56889__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56889__$1,new cljs.core.Keyword(null,"page","page",849072397));
var indice = (function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.search.db.indices),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.search.db.make_blocks_indice_BANG_(repo);
}
})();
var result = (cljs.core.truth_(page)?indice.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"$and","$and",-1445249338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["page",page], null),new cljs.core.PersistentArrayMap(null, 1, ["content",q], null)], null)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))):indice.search(q,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))));
var result__$1 = cljs_bean.core.__GT_clj(result);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56890){
var map__56891 = p__56890;
var map__56891__$1 = cljs.core.__destructure_map(map__56891);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56891__$1,new cljs.core.Keyword(null,"item","item",249373802));
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56891__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var map__56892 = item;
var map__56892__$1 = cljs.core.__destructure_map(map__56892);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"content","content",15833224));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var page__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"page","page",849072397));
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
(frontend.search.browser.Browser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(frontend.search.browser.Browser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k56896,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__56910 = k56896;
var G__56910__$1 = (((G__56910 instanceof cljs.core.Keyword))?G__56910.fqn:null);
switch (G__56910__$1) {
case "repo":
return self__.repo;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56896,else__4505__auto__);

}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__56918){
var vec__56919 = p__56918;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56919,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56919,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.search.browser.Browser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#frontend.search.browser.Browser{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null))], null),self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56893){
var self__ = this;
var G__56893__$1 = this;
return (new cljs.core.RecordIter((0),G__56893__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1998111184 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56897,other56899){
var self__ = this;
var this56897__$1 = this;
return (((!((other56899 == null)))) && ((((this56897__$1.constructor === other56899.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56897__$1.repo,other56899.repo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56897__$1.__extmap,other56899.__extmap)))))));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k56896){
var self__ = this;
var this__4509__auto____$1 = this;
var G__56930 = k56896;
var G__56930__$1 = (((G__56930 instanceof cljs.core.Keyword))?G__56930.fqn:null);
switch (G__56930__$1) {
case "repo":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56896);

}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__56893){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__56933 = cljs.core.keyword_identical_QMARK_;
var expr__56934 = k__4511__auto__;
if(cljs.core.truth_((pred__56933.cljs$core$IFn$_invoke$arity$2 ? pred__56933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__56934) : pred__56933.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__56934)))){
return (new frontend.search.browser.Browser(G__56893,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__56893),null));
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null))], null),self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__56893){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.search.browser.Browser(self__.repo,G__56893,self__.__extmap,self__.__hash));
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
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

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 = (function (_this,p__56938){
var self__ = this;
var map__56939 = p__56938;
var map__56939__$1 = cljs.core.__destructure_map(map__56939);
var blocks_to_remove_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939__$1,new cljs.core.Keyword(null,"blocks-to-remove-set","blocks-to-remove-set",266406009));
var blocks_to_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939__$1,new cljs.core.Keyword(null,"blocks-to-add","blocks-to-add",-814061792));
var _this__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),(function (indice){
if(cljs.core.truth_(indice)){
var seq__56940_56959 = cljs.core.seq(blocks_to_remove_set);
var chunk__56941_56960 = null;
var count__56942_56961 = (0);
var i__56943_56962 = (0);
while(true){
if((i__56943_56962 < count__56942_56961)){
var block_id_56963 = chunk__56941_56960.cljs$core$IIndexed$_nth$arity$2(null,i__56943_56962);
indice.remove(((function (seq__56940_56959,chunk__56941_56960,count__56942_56961,i__56943_56962,block_id_56963,_this__$1,map__56939,map__56939__$1,blocks_to_remove_set,blocks_to_add){
return (function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id_56963,frontend.search.browser.goog$module$goog$object.get(block,"id"));
});})(seq__56940_56959,chunk__56941_56960,count__56942_56961,i__56943_56962,block_id_56963,_this__$1,map__56939,map__56939__$1,blocks_to_remove_set,blocks_to_add))
);


var G__56964 = seq__56940_56959;
var G__56965 = chunk__56941_56960;
var G__56966 = count__56942_56961;
var G__56967 = (i__56943_56962 + (1));
seq__56940_56959 = G__56964;
chunk__56941_56960 = G__56965;
count__56942_56961 = G__56966;
i__56943_56962 = G__56967;
continue;
} else {
var temp__5720__auto___56968 = cljs.core.seq(seq__56940_56959);
if(temp__5720__auto___56968){
var seq__56940_56969__$1 = temp__5720__auto___56968;
if(cljs.core.chunked_seq_QMARK_(seq__56940_56969__$1)){
var c__4679__auto___56970 = cljs.core.chunk_first(seq__56940_56969__$1);
var G__56971 = cljs.core.chunk_rest(seq__56940_56969__$1);
var G__56972 = c__4679__auto___56970;
var G__56973 = cljs.core.count(c__4679__auto___56970);
var G__56974 = (0);
seq__56940_56959 = G__56971;
chunk__56941_56960 = G__56972;
count__56942_56961 = G__56973;
i__56943_56962 = G__56974;
continue;
} else {
var block_id_56975 = cljs.core.first(seq__56940_56969__$1);
indice.remove(((function (seq__56940_56959,chunk__56941_56960,count__56942_56961,i__56943_56962,block_id_56975,seq__56940_56969__$1,temp__5720__auto___56968,_this__$1,map__56939,map__56939__$1,blocks_to_remove_set,blocks_to_add){
return (function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id_56975,frontend.search.browser.goog$module$goog$object.get(block,"id"));
});})(seq__56940_56959,chunk__56941_56960,count__56942_56961,i__56943_56962,block_id_56975,seq__56940_56969__$1,temp__5720__auto___56968,_this__$1,map__56939,map__56939__$1,blocks_to_remove_set,blocks_to_add))
);


var G__56976 = cljs.core.next(seq__56940_56969__$1);
var G__56977 = null;
var G__56978 = (0);
var G__56979 = (0);
seq__56940_56959 = G__56976;
chunk__56941_56960 = G__56977;
count__56942_56961 = G__56978;
i__56943_56962 = G__56979;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(blocks_to_add)){
var seq__56948_56980 = cljs.core.seq(blocks_to_add);
var chunk__56949_56981 = null;
var count__56950_56982 = (0);
var i__56951_56983 = (0);
while(true){
if((i__56951_56983 < count__56950_56982)){
var block_56984 = chunk__56949_56981.cljs$core$IIndexed$_nth$arity$2(null,i__56951_56983);
indice.add(cljs_bean.core.__GT_js(block_56984));


var G__56985 = seq__56948_56980;
var G__56986 = chunk__56949_56981;
var G__56987 = count__56950_56982;
var G__56988 = (i__56951_56983 + (1));
seq__56948_56980 = G__56985;
chunk__56949_56981 = G__56986;
count__56950_56982 = G__56987;
i__56951_56983 = G__56988;
continue;
} else {
var temp__5720__auto___56989 = cljs.core.seq(seq__56948_56980);
if(temp__5720__auto___56989){
var seq__56948_56990__$1 = temp__5720__auto___56989;
if(cljs.core.chunked_seq_QMARK_(seq__56948_56990__$1)){
var c__4679__auto___56991 = cljs.core.chunk_first(seq__56948_56990__$1);
var G__56992 = cljs.core.chunk_rest(seq__56948_56990__$1);
var G__56993 = c__4679__auto___56991;
var G__56994 = cljs.core.count(c__4679__auto___56991);
var G__56995 = (0);
seq__56948_56980 = G__56992;
chunk__56949_56981 = G__56993;
count__56950_56982 = G__56994;
i__56951_56983 = G__56995;
continue;
} else {
var block_56996 = cljs.core.first(seq__56948_56990__$1);
indice.add(cljs_bean.core.__GT_js(block_56996));


var G__56997 = cljs.core.next(seq__56948_56990__$1);
var G__56998 = null;
var G__56999 = (0);
var G__57000 = (0);
seq__56948_56980 = G__56997;
chunk__56949_56981 = G__56998;
count__56950_56982 = G__56999;
i__56951_56983 = G__57000;
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

(frontend.search.browser.Browser.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"frontend.search.browser/Browser",null,(1),null));
}));

(frontend.search.browser.Browser.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"frontend.search.browser/Browser");
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
frontend.search.browser.map__GT_Browser = (function frontend$search$browser$map__GT_Browser(G__56901){
var extmap__4542__auto__ = (function (){var G__56953 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56901,new cljs.core.Keyword(null,"repo","repo",-1999060679));
if(cljs.core.record_QMARK_(G__56901)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56953);
} else {
return G__56953;
}
})();
return (new frontend.search.browser.Browser(new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__56901),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


//# sourceMappingURL=frontend.search.browser.js.map
