goog.provide('frontend.search.browser');
goog.scope(function(){
  frontend.search.browser.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.search.browser.search_blocks = (function frontend$search$browser$search_blocks(repo,q,p__57283){
var map__57284 = p__57283;
var map__57284__$1 = cljs.core.__destructure_map(map__57284);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57284__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(20));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57284__$1,new cljs.core.Keyword(null,"page","page",849072397));
var indice = (function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.search.db.indices),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.search.db.make_blocks_indice_BANG_(repo);
}
})();
var result = (cljs.core.truth_(page)?indice.search(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"$and","$and",-1445249338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["page",page], null),new cljs.core.PersistentArrayMap(null, 1, ["content",q], null)], null)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))):indice.search(q,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null))));
var result__$1 = cljs_bean.core.__GT_clj(result);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__57285){
var map__57286 = p__57285;
var map__57286__$1 = cljs.core.__destructure_map(map__57286);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57286__$1,new cljs.core.Keyword(null,"item","item",249373802));
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57286__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var map__57287 = item;
var map__57287__$1 = cljs.core.__destructure_map(map__57287);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"content","content",15833224));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var page__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57287__$1,new cljs.core.Keyword(null,"page","page",849072397));
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

(frontend.search.browser.Browser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k57289,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__57297 = k57289;
var G__57297__$1 = (((G__57297 instanceof cljs.core.Keyword))?G__57297.fqn:null);
switch (G__57297__$1) {
case "repo":
return self__.repo;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57289,else__4505__auto__);

}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__57304){
var vec__57305 = p__57304;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57305,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57305,(1),null);
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

(frontend.search.browser.Browser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57288){
var self__ = this;
var G__57288__$1 = this;
return (new cljs.core.RecordIter((0),G__57288__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(frontend.search.browser.Browser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57290,other57291){
var self__ = this;
var this57290__$1 = this;
return (((!((other57291 == null)))) && ((((this57290__$1.constructor === other57291.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57290__$1.repo,other57291.repo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57290__$1.__extmap,other57291.__extmap)))))));
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

(frontend.search.browser.Browser.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k57289){
var self__ = this;
var this__4509__auto____$1 = this;
var G__57321 = k57289;
var G__57321__$1 = (((G__57321 instanceof cljs.core.Keyword))?G__57321.fqn:null);
switch (G__57321__$1) {
case "repo":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57289);

}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__57288){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__57322 = cljs.core.keyword_identical_QMARK_;
var expr__57323 = k__4511__auto__;
if(cljs.core.truth_((pred__57322.cljs$core$IFn$_invoke$arity$2 ? pred__57322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__57323) : pred__57322.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__57323)))){
return (new frontend.search.browser.Browser(G__57288,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__57288),null));
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null))], null),self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__57288){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.search.browser.Browser(self__.repo,G__57288,self__.__extmap,self__.__hash));
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

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 = (function (_this,p__57328){
var self__ = this;
var map__57329 = p__57328;
var map__57329__$1 = cljs.core.__destructure_map(map__57329);
var blocks_to_remove_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57329__$1,new cljs.core.Keyword(null,"blocks-to-remove-set","blocks-to-remove-set",266406009));
var blocks_to_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57329__$1,new cljs.core.Keyword(null,"blocks-to-add","blocks-to-add",-814061792));
var _this__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.search.db.indices,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.repo,new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),(function (indice){
if(cljs.core.truth_(indice)){
var seq__57330_57345 = cljs.core.seq(blocks_to_remove_set);
var chunk__57331_57346 = null;
var count__57332_57347 = (0);
var i__57333_57348 = (0);
while(true){
if((i__57333_57348 < count__57332_57347)){
var block_id_57349 = chunk__57331_57346.cljs$core$IIndexed$_nth$arity$2(null,i__57333_57348);
indice.remove(((function (seq__57330_57345,chunk__57331_57346,count__57332_57347,i__57333_57348,block_id_57349,_this__$1,map__57329,map__57329__$1,blocks_to_remove_set,blocks_to_add){
return (function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id_57349,frontend.search.browser.goog$module$goog$object.get(block,"id"));
});})(seq__57330_57345,chunk__57331_57346,count__57332_57347,i__57333_57348,block_id_57349,_this__$1,map__57329,map__57329__$1,blocks_to_remove_set,blocks_to_add))
);


var G__57350 = seq__57330_57345;
var G__57351 = chunk__57331_57346;
var G__57352 = count__57332_57347;
var G__57353 = (i__57333_57348 + (1));
seq__57330_57345 = G__57350;
chunk__57331_57346 = G__57351;
count__57332_57347 = G__57352;
i__57333_57348 = G__57353;
continue;
} else {
var temp__5720__auto___57354 = cljs.core.seq(seq__57330_57345);
if(temp__5720__auto___57354){
var seq__57330_57355__$1 = temp__5720__auto___57354;
if(cljs.core.chunked_seq_QMARK_(seq__57330_57355__$1)){
var c__4679__auto___57356 = cljs.core.chunk_first(seq__57330_57355__$1);
var G__57357 = cljs.core.chunk_rest(seq__57330_57355__$1);
var G__57358 = c__4679__auto___57356;
var G__57359 = cljs.core.count(c__4679__auto___57356);
var G__57360 = (0);
seq__57330_57345 = G__57357;
chunk__57331_57346 = G__57358;
count__57332_57347 = G__57359;
i__57333_57348 = G__57360;
continue;
} else {
var block_id_57361 = cljs.core.first(seq__57330_57355__$1);
indice.remove(((function (seq__57330_57345,chunk__57331_57346,count__57332_57347,i__57333_57348,block_id_57361,seq__57330_57355__$1,temp__5720__auto___57354,_this__$1,map__57329,map__57329__$1,blocks_to_remove_set,blocks_to_add){
return (function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id_57361,frontend.search.browser.goog$module$goog$object.get(block,"id"));
});})(seq__57330_57345,chunk__57331_57346,count__57332_57347,i__57333_57348,block_id_57361,seq__57330_57355__$1,temp__5720__auto___57354,_this__$1,map__57329,map__57329__$1,blocks_to_remove_set,blocks_to_add))
);


var G__57362 = cljs.core.next(seq__57330_57355__$1);
var G__57363 = null;
var G__57364 = (0);
var G__57365 = (0);
seq__57330_57345 = G__57362;
chunk__57331_57346 = G__57363;
count__57332_57347 = G__57364;
i__57333_57348 = G__57365;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(blocks_to_add)){
var seq__57335_57366 = cljs.core.seq(blocks_to_add);
var chunk__57336_57367 = null;
var count__57337_57368 = (0);
var i__57338_57369 = (0);
while(true){
if((i__57338_57369 < count__57337_57368)){
var block_57370 = chunk__57336_57367.cljs$core$IIndexed$_nth$arity$2(null,i__57338_57369);
indice.add(cljs_bean.core.__GT_js(block_57370));


var G__57371 = seq__57335_57366;
var G__57372 = chunk__57336_57367;
var G__57373 = count__57337_57368;
var G__57374 = (i__57338_57369 + (1));
seq__57335_57366 = G__57371;
chunk__57336_57367 = G__57372;
count__57337_57368 = G__57373;
i__57338_57369 = G__57374;
continue;
} else {
var temp__5720__auto___57375 = cljs.core.seq(seq__57335_57366);
if(temp__5720__auto___57375){
var seq__57335_57376__$1 = temp__5720__auto___57375;
if(cljs.core.chunked_seq_QMARK_(seq__57335_57376__$1)){
var c__4679__auto___57377 = cljs.core.chunk_first(seq__57335_57376__$1);
var G__57378 = cljs.core.chunk_rest(seq__57335_57376__$1);
var G__57379 = c__4679__auto___57377;
var G__57380 = cljs.core.count(c__4679__auto___57377);
var G__57381 = (0);
seq__57335_57366 = G__57378;
chunk__57336_57367 = G__57379;
count__57337_57368 = G__57380;
i__57338_57369 = G__57381;
continue;
} else {
var block_57382 = cljs.core.first(seq__57335_57376__$1);
indice.add(cljs_bean.core.__GT_js(block_57382));


var G__57383 = cljs.core.next(seq__57335_57376__$1);
var G__57384 = null;
var G__57385 = (0);
var G__57386 = (0);
seq__57335_57366 = G__57383;
chunk__57336_57367 = G__57384;
count__57337_57368 = G__57385;
i__57338_57369 = G__57386;
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
frontend.search.browser.map__GT_Browser = (function frontend$search$browser$map__GT_Browser(G__57292){
var extmap__4542__auto__ = (function (){var G__57341 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57292,new cljs.core.Keyword(null,"repo","repo",-1999060679));
if(cljs.core.record_QMARK_(G__57292)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57341);
} else {
return G__57341;
}
})();
return (new frontend.search.browser.Browser(new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__57292),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


//# sourceMappingURL=frontend.search.browser.js.map
