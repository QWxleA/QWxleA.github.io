goog.provide('reitit.trie');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.core.set(x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,x);

}
}
});

/**
* @constructor
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
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k74530,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__74535 = k74530;
var G__74535__$1 = (((G__74535 instanceof cljs.core.Keyword))?G__74535.fqn:null);
switch (G__74535__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74530,else__5343__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__74537){
var vec__74539 = p__74537;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74539,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74539,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#reitit.trie.Wild{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74529){
var self__ = this;
var G__74529__$1 = this;
return (new cljs.core.RecordIter((0),G__74529__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74531,other74532){
var self__ = this;
var this74531__$1 = this;
return (((!((other74532 == null)))) && ((((this74531__$1.constructor === other74532.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74531__$1.value,other74532.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74531__$1.__extmap,other74532.__extmap)))))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k74530){
var self__ = this;
var this__5347__auto____$1 = this;
var G__74542 = k74530;
var G__74542__$1 = (((G__74542 instanceof cljs.core.Keyword))?G__74542.fqn:null);
switch (G__74542__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74530);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__74529){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__74543 = cljs.core.keyword_identical_QMARK_;
var expr__74544 = k__5349__auto__;
if(cljs.core.truth_((pred__74543.cljs$core$IFn$_invoke$arity$2 ? pred__74543.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__74544) : pred__74543.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__74544)))){
return (new reitit.trie.Wild(G__74529,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__74529),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__74529){
var self__ = this;
var this__5339__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__74529,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__74534){
var extmap__5382__auto__ = (function (){var G__74547 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__74534,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__74534)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74547);
} else {
return G__74547;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__74534),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


/**
* @constructor
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
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k74552,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__74557 = k74552;
var G__74557__$1 = (((G__74557 instanceof cljs.core.Keyword))?G__74557.fqn:null);
switch (G__74557__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74552,else__5343__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__74558){
var vec__74559 = p__74558;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74559,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74559,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#reitit.trie.CatchAll{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74551){
var self__ = this;
var G__74551__$1 = this;
return (new cljs.core.RecordIter((0),G__74551__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74553,other74554){
var self__ = this;
var this74553__$1 = this;
return (((!((other74554 == null)))) && ((((this74553__$1.constructor === other74554.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74553__$1.value,other74554.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74553__$1.__extmap,other74554.__extmap)))))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k74552){
var self__ = this;
var this__5347__auto____$1 = this;
var G__74562 = k74552;
var G__74562__$1 = (((G__74562 instanceof cljs.core.Keyword))?G__74562.fqn:null);
switch (G__74562__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74552);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__74551){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__74563 = cljs.core.keyword_identical_QMARK_;
var expr__74564 = k__5349__auto__;
if(cljs.core.truth_((pred__74563.cljs$core$IFn$_invoke$arity$2 ? pred__74563.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__74564) : pred__74563.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__74564)))){
return (new reitit.trie.CatchAll(G__74551,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__74551),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__74551){
var self__ = this;
var this__5339__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__74551,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__74555){
var extmap__5382__auto__ = (function (){var G__74566 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__74555,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__74555)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74566);
} else {
return G__74566;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__74555),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


/**
* @constructor
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
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k74568,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__74572 = k74568;
var G__74572__$1 = (((G__74572 instanceof cljs.core.Keyword))?G__74572.fqn:null);
switch (G__74572__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74568,else__5343__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__74573){
var vec__74574 = p__74573;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74574,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74574,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#reitit.trie.Match{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74567){
var self__ = this;
var G__74567__$1 = this;
return (new cljs.core.RecordIter((0),G__74567__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74569,other74570){
var self__ = this;
var this74569__$1 = this;
return (((!((other74570 == null)))) && ((((this74569__$1.constructor === other74570.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74569__$1.params,other74570.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74569__$1.data,other74570.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74569__$1.__extmap,other74570.__extmap)))))))));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k74568){
var self__ = this;
var this__5347__auto____$1 = this;
var G__74577 = k74568;
var G__74577__$1 = (((G__74577 instanceof cljs.core.Keyword))?G__74577.fqn:null);
switch (G__74577__$1) {
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74568);

}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__74567){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__74578 = cljs.core.keyword_identical_QMARK_;
var expr__74579 = k__5349__auto__;
if(cljs.core.truth_((pred__74578.cljs$core$IFn$_invoke$arity$2 ? pred__74578.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__74579) : pred__74578.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__74579)))){
return (new reitit.trie.Match(G__74567,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74578.cljs$core$IFn$_invoke$arity$2 ? pred__74578.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__74579) : pred__74578.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__74579)))){
return (new reitit.trie.Match(self__.params,G__74567,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__74567),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__74567){
var self__ = this;
var this__5339__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__74567,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__74571){
var extmap__5382__auto__ = (function (){var G__74581 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74571,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__74571)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74581);
} else {
return G__74581;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__74571),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__74571),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


/**
* @constructor
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
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k74583,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__74587 = k74583;
var G__74587__$1 = (((G__74587 instanceof cljs.core.Keyword))?G__74587.fqn:null);
switch (G__74587__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74583,else__5343__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__74588){
var vec__74589 = p__74588;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74589,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74589,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#reitit.trie.Node{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74582){
var self__ = this;
var G__74582__$1 = this;
return (new cljs.core.RecordIter((0),G__74582__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74584,other74585){
var self__ = this;
var this74584__$1 = this;
return (((!((other74585 == null)))) && ((((this74584__$1.constructor === other74585.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74584__$1.children,other74585.children)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74584__$1.wilds,other74585.wilds)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74584__$1.catch_all,other74585.catch_all)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74584__$1.params,other74585.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74584__$1.data,other74585.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74584__$1.__extmap,other74585.__extmap)))))))))))))));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k74583){
var self__ = this;
var this__5347__auto____$1 = this;
var G__74592 = k74583;
var G__74592__$1 = (((G__74592 instanceof cljs.core.Keyword))?G__74592.fqn:null);
switch (G__74592__$1) {
case "children":
case "wilds":
case "catch-all":
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74583);

}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__74582){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__74593 = cljs.core.keyword_identical_QMARK_;
var expr__74594 = k__5349__auto__;
if(cljs.core.truth_((pred__74593.cljs$core$IFn$_invoke$arity$2 ? pred__74593.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__74594) : pred__74593.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__74594)))){
return (new reitit.trie.Node(G__74582,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74593.cljs$core$IFn$_invoke$arity$2 ? pred__74593.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__74594) : pred__74593.call(null,new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__74594)))){
return (new reitit.trie.Node(self__.children,G__74582,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74593.cljs$core$IFn$_invoke$arity$2 ? pred__74593.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__74594) : pred__74593.call(null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__74594)))){
return (new reitit.trie.Node(self__.children,self__.wilds,G__74582,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74593.cljs$core$IFn$_invoke$arity$2 ? pred__74593.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__74594) : pred__74593.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__74594)))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__74582,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74593.cljs$core$IFn$_invoke$arity$2 ? pred__74593.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__74594) : pred__74593.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__74594)))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__74582,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__74582),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__74582){
var self__ = this;
var this__5339__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__74582,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__74586){
var extmap__5382__auto__ = (function (){var G__74596 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74586,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__74586)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74596);
} else {
return G__74596;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__74586),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__74586),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__74586),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__74586),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__74586),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

var reitit$trie$Matcher$match$dyn_74794 = (function (this$,i,max,path){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie.match[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__5391__auto__.call(null,this$,i,max,path));
} else {
var m__5389__auto__ = (reitit.trie.match["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__5389__auto__.call(null,this$,i,max,path));
} else {
throw cljs.core.missing_protocol("Matcher.match",this$);
}
}
});
reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
return reitit$trie$Matcher$match$dyn_74794(this$,i,max,path);
}
});

var reitit$trie$Matcher$view$dyn_74795 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie.view[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (reitit.trie.view["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.view",this$);
}
}
});
reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
return reitit$trie$Matcher$view$dyn_74795(this$);
}
});

var reitit$trie$Matcher$depth$dyn_74796 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie.depth[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (reitit.trie.depth["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.depth",this$);
}
}
});
reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
return reitit$trie$Matcher$depth$dyn_74796(this$);
}
});

var reitit$trie$Matcher$length$dyn_74797 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie.length[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (reitit.trie.length["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.length",this$);
}
}
});
reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
return reitit$trie$Matcher$length$dyn_74797(this$);
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

var reitit$trie$TrieCompiler$data_matcher$dyn_74798 = (function (this$,params,data){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__5391__auto__.call(null,this$,params,data));
} else {
var m__5389__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__5389__auto__.call(null,this$,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.data-matcher",this$);
}
}
});
reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
return reitit$trie$TrieCompiler$data_matcher$dyn_74798(this$,params,data);
}
});

var reitit$trie$TrieCompiler$static_matcher$dyn_74801 = (function (this$,path,matcher){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__5391__auto__.call(null,this$,path,matcher));
} else {
var m__5389__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__5389__auto__.call(null,this$,path,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.static-matcher",this$);
}
}
});
reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
return reitit$trie$TrieCompiler$static_matcher$dyn_74801(this$,path,matcher);
}
});

var reitit$trie$TrieCompiler$wild_matcher$dyn_74804 = (function (this$,key,end,matcher){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__5391__auto__.call(null,this$,key,end,matcher));
} else {
var m__5389__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__5389__auto__.call(null,this$,key,end,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.wild-matcher",this$);
}
}
});
reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
return reitit$trie$TrieCompiler$wild_matcher$dyn_74804(this$,key,end,matcher);
}
});

var reitit$trie$TrieCompiler$catch_all_matcher$dyn_74807 = (function (this$,key,params,data){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__5391__auto__.call(null,this$,key,params,data));
} else {
var m__5389__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__5389__auto__.call(null,this$,key,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.catch-all-matcher",this$);
}
}
});
reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
return reitit$trie$TrieCompiler$catch_all_matcher$dyn_74807(this$,key,params,data);
}
});

var reitit$trie$TrieCompiler$linear_matcher$dyn_74808 = (function (this$,matchers,ordered_QMARK_){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__5391__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
var m__5389__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__5389__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
throw cljs.core.missing_protocol("TrieCompiler.linear-matcher",this$);
}
}
});
reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
return reitit$trie$TrieCompiler$linear_matcher$dyn_74808(this$,matchers,ordered_QMARK_);
}
});

var reitit$trie$TrieCompiler$_pretty$dyn_74809 = (function (this$,matcher){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie._pretty[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5391__auto__.call(null,this$,matcher));
} else {
var m__5389__auto__ = (reitit.trie._pretty["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5389__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-pretty",this$);
}
}
});
reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_pretty$dyn_74809(this$,matcher);
}
});

var reitit$trie$TrieCompiler$_path_matcher$dyn_74813 = (function (this$,matcher){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5391__auto__.call(null,this$,matcher));
} else {
var m__5389__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5389__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-path-matcher",this$);
}
}
});
reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_path_matcher$dyn_74813(this$,matcher);
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__5131__auto__ = cljs.core.count(s1);
var y__5132__auto__ = cljs.core.count(s2);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),max);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s2,i))){
if((!((i === (0))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),i);
} else {
return null;
}
} else {
var G__74815 = (i + (1));
i = G__74815;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5718__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__74597){
var map__74598 = p__74597;
var map__74598__$1 = cljs.core.__destructure_map(map__74598);
var syntax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74598__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.count(s))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ss,_static(from,to));
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,to);
if(cljs.core.truth_((function (){var and__5041__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",c);
} else {
return and__5041__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__5043__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"}",to);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(to + (1))))){
var G__74824 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__74825 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__74826 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__74824;
from = G__74825;
to = G__74826;
continue;
} else {
var G__74827 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__74828 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__74829 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__74827;
from = G__74828;
to = G__74829;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",c);
} else {
return and__5041__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__5043__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"/",to);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.count(s);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(to_SINGLEQUOTE_ - to))){
var G__74830 = ss;
var G__74831 = from;
var G__74832 = (to + (1));
ss = G__74830;
from = G__74831;
to = G__74832;
continue;
} else {
var G__74833 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__74834 = cljs.core.long$(to_SINGLEQUOTE_);
var G__74835 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__74833;
from = G__74834;
to = G__74835;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",c);
} else {
return and__5041__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count(s);
var G__74838 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__74839 = cljs.core.long$(to_SINGLEQUOTE_);
var G__74840 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__74838;
from = G__74839;
to = G__74840;
continue;
} else {
var G__74841 = ss;
var G__74842 = from;
var G__74843 = (to + (1));
ss = G__74841;
from = G__74842;
to = G__74843;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path(reitit.trie.split_path(s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__74599,p__74600){
var vec__74601 = p__74599;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74601,(0),null);
var p1s = vec__74601;
var vec__74604 = p__74600;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74604,(0),null);
var p2s = vec__74604;
var _split = (function (p){
var temp__5718__auto__ = (function (){var and__5041__auto__ = p;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cp),cljs.core.count(p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not(cp)))){
return _split(p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__74607){
var vec__74608 = p__74607;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74608,(0),null);
var pps = vec__74608;
var i = (function (){var and__5041__auto__ = p;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = i;
if(cljs.core.truth_(and__5041__auto__)){
return (i > (0));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null),cljs.core.rest(pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__74611){
var vec__74612 = p__74611;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74612,(0),null);
var ps = vec__74612;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5718__auto__ = (function (){var and__5041__auto__ = typeof p1 === 'string';
if(and__5041__auto__){
var and__5041__auto____$1 = typeof p2 === 'string';
if(and__5041__auto____$1){
return reitit.trie.common_prefix(p1,p2);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var cp = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut(cp,p1s),_tailcut(cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
var parts1 = reitit.trie.split_path(path1,opts);
var parts2 = reitit.trie.split_path(path2,opts);
while(true){
var vec__74624 = reitit.trie._slice_start(parts1,parts2);
var vec__74627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74624,(0),null);
var seq__74628 = cljs.core.seq(vec__74627);
var first__74629 = cljs.core.first(seq__74628);
var seq__74628__$1 = cljs.core.next(seq__74628);
var s1 = first__74629;
var ss1 = seq__74628__$1;
var vec__74630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74624,(1),null);
var seq__74631 = cljs.core.seq(vec__74630);
var first__74632 = cljs.core.first(seq__74631);
var seq__74631__$1 = cljs.core.next(seq__74631);
var s2 = first__74632;
var ss2 = seq__74631__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_(s1)) || (reitit.trie.catch_all_QMARK_(s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_(s1)) || (reitit.trie.wild_QMARK_(s2)))){
var G__74861 = reitit.trie._slice_end(s1,ss1);
var G__74862 = reitit.trie._slice_end(s2,ss2);
parts1 = G__74861;
parts2 = G__74862;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__74863 = ss1;
var G__74864 = ss2;
parts1 = G__74863;
parts2 = G__74864;
continue;

}
}
}
}
}
break;
}
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m], 0)));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__74633,fp,params,data){
var vec__74634 = p__74633;
var seq__74635 = cljs.core.seq(vec__74634);
var first__74636 = cljs.core.first(seq__74635);
var seq__74635__$1 = cljs.core.next(seq__74635);
var path = first__74636;
var ps = seq__74635__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"data","data",-232669377),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),(function (n){
var G__74637 = (function (){var or__5043__auto__ = n;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__74638 = ps;
var G__74639 = fp;
var G__74640 = params;
var G__74641 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__74637,G__74638,G__74639,G__74640,G__74641) : reitit.trie._insert.call(null,G__74637,G__74638,G__74639,G__74640,G__74641));
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((clojure.string.blank_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null,node,ps,fp,params,data)):(function (){var or__5043__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p__74642){
var vec__74643 = p__74642;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74643,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74643,(1),null);
var temp__5718__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5718__auto__)){
var cp = temp__5718__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__74646 = n;
var G__74647 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__74648 = fp;
var G__74649 = params;
var G__74650 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__74646,G__74647,G__74648,G__74649,G__74650) : reitit.trie._insert.call(null,G__74646,G__74647,G__74648,G__74649,G__74650));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,((cp).length));
var n_SINGLEQUOTE_ = (function (){var G__74651 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__74652 = ps;
var G__74653 = fp;
var G__74654 = params;
var G__74655 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__74651,G__74652,G__74653,G__74654,G__74655) : reitit.trie._insert.call(null,G__74651,G__74652,G__74653,G__74654,G__74655));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__74656 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__74657 = null;
var G__74658 = null;
var G__74659 = null;
var G__74660 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__74656,G__74657,G__74658,G__74659,G__74660) : reitit.trie._insert.call(null,G__74656,G__74657,G__74658,G__74659,G__74660));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),(function (){var G__74661 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__74662 = ps;
var G__74663 = fp;
var G__74664 = params;
var G__74665 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__74661,G__74662,G__74663,G__74664,G__74665) : reitit.trie._insert.call(null,G__74661,G__74662,G__74663,G__74664,G__74665));
})());
}
})()
))));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child], 0)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie74666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie74666 = (function (meta74667){
this.meta74667 = meta74667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie74666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74668,meta74667__$1){
var self__ = this;
var _74668__$1 = this;
return (new reitit.trie.t_reitit$trie74666(meta74667__$1));
}));

(reitit.trie.t_reitit$trie74666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74668){
var self__ = this;
var _74668__$1 = this;
return self__.meta74667;
}));

(reitit.trie.t_reitit$trie74666.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie74666.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie74669 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie74669 = (function (meta74667,_,params,data,match,meta74670){
this.meta74667 = meta74667;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta74670 = meta74670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie74669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74671,meta74670__$1){
var self__ = this;
var _74671__$1 = this;
return (new reitit.trie.t_reitit$trie74669(self__.meta74667,self__._,self__.params,self__.data,self__.match,meta74670__$1));
}));

(reitit.trie.t_reitit$trie74669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74671){
var self__ = this;
var _74671__$1 = this;
return self__.meta74670;
}));

(reitit.trie.t_reitit$trie74669.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie74669.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie74669.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie74669.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie74669.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie74669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74667","meta74667",-1502593863,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie74666","reitit.trie/t_reitit$trie74666",-1726932433,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta74670","meta74670",1715332289,null)], null);
}));

(reitit.trie.t_reitit$trie74669.cljs$lang$type = true);

(reitit.trie.t_reitit$trie74669.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie74669");

(reitit.trie.t_reitit$trie74669.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.trie/t_reitit$trie74669");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie74669.
 */
reitit.trie.__GT_t_reitit$trie74669 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie74669(meta74667__$1,___$2,params__$1,data__$1,match__$1,meta74670){
return (new reitit.trie.t_reitit$trie74669(meta74667__$1,___$2,params__$1,data__$1,match__$1,meta74670));
});

}

return (new reitit.trie.t_reitit$trie74669(self__.meta74667,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie74666.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie74672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie74672 = (function (meta74667,_,path,matcher,size,meta74673){
this.meta74667 = meta74667;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta74673 = meta74673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie74672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74674,meta74673__$1){
var self__ = this;
var _74674__$1 = this;
return (new reitit.trie.t_reitit$trie74672(self__.meta74667,self__._,self__.path,self__.matcher,self__.size,meta74673__$1));
}));

(reitit.trie.t_reitit$trie74672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74674){
var self__ = this;
var _74674__$1 = this;
return self__.meta74673;
}));

(reitit.trie.t_reitit$trie74672.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie74672.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,self__.size)){
return reitit.trie.match(self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(i + j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.path,j))){
var G__74886 = (j + (1));
j = G__74886;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie74672.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie74672.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie74672.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
}));

(reitit.trie.t_reitit$trie74672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74667","meta74667",-1502593863,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie74666","reitit.trie/t_reitit$trie74666",-1726932433,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta74673","meta74673",-48741100,null)], null);
}));

(reitit.trie.t_reitit$trie74672.cljs$lang$type = true);

(reitit.trie.t_reitit$trie74672.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie74672");

(reitit.trie.t_reitit$trie74672.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.trie/t_reitit$trie74672");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie74672.
 */
reitit.trie.__GT_t_reitit$trie74672 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie74672(meta74667__$1,___$2,path__$1,matcher__$1,size__$1,meta74673){
return (new reitit.trie.t_reitit$trie74672(meta74667__$1,___$2,path__$1,matcher__$1,size__$1,meta74673));
});

}

return (new reitit.trie.t_reitit$trie74672(self__.meta74667,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie74666.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie74675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie74675 = (function (meta74667,_,key,end,matcher,meta74676){
this.meta74667 = meta74667;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta74676 = meta74676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie74675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74677,meta74676__$1){
var self__ = this;
var _74677__$1 = this;
return (new reitit.trie.t_reitit$trie74675(self__.meta74667,self__._,self__.key,self__.end,self__.matcher,meta74676__$1));
}));

(reitit.trie.t_reitit$trie74675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74677){
var self__ = this;
var _74677__$1 = this;
return self__.meta74676;
}));

(reitit.trie.t_reitit$trie74675.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie74675.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5718__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__74683 = cljs.core._EQ_;
var expr__74684 = c;
if(cljs.core.truth_((pred__74683.cljs$core$IFn$_invoke$arity$2 ? pred__74683.cljs$core$IFn$_invoke$arity$2(self__.end,expr__74684) : pred__74683.call(null,self__.end,expr__74684)))){
var temp__5718__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__74686 = "%";
var G__74687 = expr__74684;
return (pred__74683.cljs$core$IFn$_invoke$arity$2 ? pred__74683.cljs$core$IFn$_invoke$arity$2(G__74686,G__74687) : pred__74683.call(null,G__74686,G__74687));
})())){
var G__74890 = true;
var G__74891 = (j + (1));
percent_QMARK_ = G__74890;
j = G__74891;
continue;
} else {
var G__74892 = percent_QMARK_;
var G__74893 = (j + (1));
percent_QMARK_ = G__74892;
j = G__74893;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie74675.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie74675.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie74675.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie74675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74667","meta74667",-1502593863,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie74666","reitit.trie/t_reitit$trie74666",-1726932433,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta74676","meta74676",947215867,null)], null);
}));

(reitit.trie.t_reitit$trie74675.cljs$lang$type = true);

(reitit.trie.t_reitit$trie74675.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie74675");

(reitit.trie.t_reitit$trie74675.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.trie/t_reitit$trie74675");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie74675.
 */
reitit.trie.__GT_t_reitit$trie74675 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie74675(meta74667__$1,___$2,key__$1,end__$1,matcher__$1,meta74676){
return (new reitit.trie.t_reitit$trie74675(meta74667__$1,___$2,key__$1,end__$1,matcher__$1,meta74676));
});

}

return (new reitit.trie.t_reitit$trie74675(self__.meta74667,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie74666.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie74688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie74688 = (function (meta74667,_,key,params,data,match,meta74689){
this.meta74667 = meta74667;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta74689 = meta74689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie74688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74690,meta74689__$1){
var self__ = this;
var _74690__$1 = this;
return (new reitit.trie.t_reitit$trie74688(self__.meta74667,self__._,self__.key,self__.params,self__.data,self__.match,meta74689__$1));
}));

(reitit.trie.t_reitit$trie74688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74690){
var self__ = this;
var _74690__$1 = this;
return self__.meta74689;
}));

(reitit.trie.t_reitit$trie74688.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie74688.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param(self__.match,self__.key,reitit.trie.decode(path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie74688.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie74688.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie74688.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie74688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74667","meta74667",-1502593863,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie74666","reitit.trie/t_reitit$trie74666",-1726932433,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta74689","meta74689",1885590917,null)], null);
}));

(reitit.trie.t_reitit$trie74688.cljs$lang$type = true);

(reitit.trie.t_reitit$trie74688.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie74688");

(reitit.trie.t_reitit$trie74688.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.trie/t_reitit$trie74688");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie74688.
 */
reitit.trie.__GT_t_reitit$trie74688 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie74688(meta74667__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta74689){
return (new reitit.trie.t_reitit$trie74688(meta74667__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta74689));
});

}

return (new reitit.trie.t_reitit$trie74688(self__.meta74667,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie74666.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie74691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie74691 = (function (meta74667,_,matchers,ordered_QMARK_,size,meta74692){
this.meta74667 = meta74667;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta74692 = meta74692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie74691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74693,meta74692__$1){
var self__ = this;
var _74693__$1 = this;
return (new reitit.trie.t_reitit$trie74691(self__.meta74667,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta74692__$1));
}));

(reitit.trie.t_reitit$trie74691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74693){
var self__ = this;
var _74693__$1 = this;
return self__.meta74692;
}));

(reitit.trie.t_reitit$trie74691.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie74691.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__5043__auto__ = reitit.trie.match(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__74907 = (j + (1));
j = G__74907;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie74691.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie74691.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie74691.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie74691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74667","meta74667",-1502593863,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie74666","reitit.trie/t_reitit$trie74666",-1726932433,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta74692","meta74692",-1411530460,null)], null);
}));

(reitit.trie.t_reitit$trie74691.cljs$lang$type = true);

(reitit.trie.t_reitit$trie74691.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie74691");

(reitit.trie.t_reitit$trie74691.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.trie/t_reitit$trie74691");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie74691.
 */
reitit.trie.__GT_t_reitit$trie74691 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie74691(meta74667__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta74692){
return (new reitit.trie.t_reitit$trie74691(meta74667__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta74692));
});

}

return (new reitit.trie.t_reitit$trie74691(self__.meta74667,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie74666.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
}));

(reitit.trie.t_reitit$trie74666.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5718__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return reitit.trie.__GT_Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie74666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74667","meta74667",-1502593863,null)], null);
}));

(reitit.trie.t_reitit$trie74666.cljs$lang$type = true);

(reitit.trie.t_reitit$trie74666.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie74666");

(reitit.trie.t_reitit$trie74666.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.trie/t_reitit$trie74666");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie74666.
 */
reitit.trie.__GT_t_reitit$trie74666 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie74666(meta74667){
return (new reitit.trie.t_reitit$trie74666(meta74667));
});

}

return (new reitit.trie.t_reitit$trie74666(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__74695 = arguments.length;
switch (G__74695) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2(null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__74696){
var vec__74697 = p__74696;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74697,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74697,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__74700){
var map__74701 = p__74700;
var map__74701__$1 = cljs.core.__destructure_map(map__74701);
var opts = map__74701__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74701__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path,opts);
var params = (function (){var G__74702 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__74702) : parameters.call(null,G__74702));
})();
return reitit.trie._insert((function (){var or__5043__auto__ = node;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path(path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler();
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__74704 = arguments.length;
switch (G__74704) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(options,reitit.trie.compiler());
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__74705,compiler,cp){
var map__74706 = p__74705;
var map__74706__$1 = cljs.core.__destructure_map(map__74706);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74706__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74706__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74706__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74706__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = (function (p__74707){
var map__74708 = p__74707;
var map__74708__$1 = cljs.core.__destructure_map(map__74708);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__5043__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__74709 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74709,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__74709;
}
})(),(function (){var iter__5520__auto__ = (function reitit$trie$iter__74710(s__74711){
return (new cljs.core.LazySeq(null,(function (){
var s__74711__$1 = s__74711;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__74711__$1);
if(temp__5720__auto__){
var s__74711__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74711__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74711__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74713 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74712 = (0);
while(true){
if((i__74712 < size__5519__auto__)){
var vec__74714 = cljs.core._nth(c__5518__auto__,i__74712);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74714,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74714,(1),null);
cljs.core.chunk_append(b__74713,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__74914 = (i__74712 + (1));
i__74712 = G__74914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74713),reitit$trie$iter__74710(cljs.core.chunk_rest(s__74711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74713),null);
}
} else {
var vec__74717 = cljs.core.first(s__74711__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74717,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74717,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__74710(cljs.core.rest(s__74711__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(children);
})()),(function (){var iter__5520__auto__ = (function reitit$trie$iter__74720(s__74721){
return (new cljs.core.LazySeq(null,(function (){
var s__74721__$1 = s__74721;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__74721__$1);
if(temp__5720__auto__){
var s__74721__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74721__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74721__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74723 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74722 = (0);
while(true){
if((i__74722 < size__5519__auto__)){
var vec__74724 = cljs.core._nth(c__5518__auto__,i__74722);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74724,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74724,(1),null);
cljs.core.chunk_append(b__74723,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__74917 = (i__74722 + (1));
i__74722 = G__74917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74723),reitit$trie$iter__74720(cljs.core.chunk_rest(s__74721__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74723),null);
}
} else {
var vec__74727 = cljs.core.first(s__74721__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74727,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74727,(1),null);
return cljs.core.cons((function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__74720(cljs.core.rest(s__74721__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(wilds);
})()),(function (){var iter__5520__auto__ = (function reitit$trie$iter__74730(s__74731){
return (new cljs.core.LazySeq(null,(function (){
var s__74731__$1 = s__74731;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__74731__$1);
if(temp__5720__auto__){
var s__74731__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74731__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74731__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74733 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74732 = (0);
while(true){
if((i__74732 < size__5519__auto__)){
var vec__74734 = cljs.core._nth(c__5518__auto__,i__74732);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74734,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74734,(1),null);
cljs.core.chunk_append(b__74733,reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__74918 = (i__74732 + (1));
i__74732 = G__74918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74733),reitit$trie$iter__74730(cljs.core.chunk_rest(s__74731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74733),null);
}
} else {
var vec__74737 = cljs.core.first(s__74731__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74737,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74737,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__74730(cljs.core.rest(s__74731__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(catch_all);
})());
if((cljs.core.count(matchers) > (1))){
return reitit.trie.linear_matcher(compiler,matchers,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matchers),(1))){
return cljs.core.first(matchers);
} else {
return reitit.trie.data_matcher(compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__74741 = arguments.length;
switch (G__74741) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty(compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__74743 = arguments.length;
switch (G__74743) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher(compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.trie.js.map
