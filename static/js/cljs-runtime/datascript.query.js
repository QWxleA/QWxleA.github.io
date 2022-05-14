goog.provide('datascript.query');
datascript.query._STAR_query_cache_STAR_ = datascript.lru.cache((100));



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
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k72134,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__72138 = k72134;
var G__72138__$1 = (((G__72138 instanceof cljs.core.Keyword))?G__72138.fqn:null);
switch (G__72138__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72134,else__4505__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__72143){
var vec__72144 = p__72143;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72144,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72144,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.query.Context{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72133){
var self__ = this;
var G__72133__$1 = this;
return (new cljs.core.RecordIter((0),G__72133__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72135,other72136){
var self__ = this;
var this72135__$1 = this;
return (((!((other72136 == null)))) && ((((this72135__$1.constructor === other72136.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72135__$1.rels,other72136.rels)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72135__$1.sources,other72136.sources)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72135__$1.rules,other72136.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72135__$1.__extmap,other72136.__extmap)))))))))));
}));

(datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k72134){
var self__ = this;
var this__4509__auto____$1 = this;
var G__72153 = k72134;
var G__72153__$1 = (((G__72153 instanceof cljs.core.Keyword))?G__72153.fqn:null);
switch (G__72153__$1) {
case "rels":
case "sources":
case "rules":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72134);

}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__72133){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__72154 = cljs.core.keyword_identical_QMARK_;
var expr__72155 = k__4511__auto__;
if(cljs.core.truth_((pred__72154.cljs$core$IFn$_invoke$arity$2 ? pred__72154.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rels","rels",1770187185),expr__72155) : pred__72154.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__72155)))){
return (new datascript.query.Context(G__72133,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72154.cljs$core$IFn$_invoke$arity$2 ? pred__72154.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424),expr__72155) : pred__72154.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__72155)))){
return (new datascript.query.Context(self__.rels,G__72133,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72154.cljs$core$IFn$_invoke$arity$2 ? pred__72154.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366),expr__72155) : pred__72154.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__72155)))){
return (new datascript.query.Context(self__.rels,self__.sources,G__72133,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__72133),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__72133){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__72133,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
}));

(datascript.query.Context.cljs$lang$type = true);

(datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
}));

(datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.query/Context");
}));

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__72137){
var extmap__4542__auto__ = (function (){var G__72158 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72137,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__72137)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72158);
} else {
return G__72158;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__72137),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__72137),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__72137),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k72160,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__72169 = k72160;
var G__72169__$1 = (((G__72169 instanceof cljs.core.Keyword))?G__72169.fqn:null);
switch (G__72169__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72160,else__4505__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__72173){
var vec__72175 = p__72173;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72175,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72175,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.query.Relation{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72159){
var self__ = this;
var G__72159__$1 = this;
return (new cljs.core.RecordIter((0),G__72159__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72161,other72162){
var self__ = this;
var this72161__$1 = this;
return (((!((other72162 == null)))) && ((((this72161__$1.constructor === other72162.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72161__$1.attrs,other72162.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72161__$1.tuples,other72162.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72161__$1.__extmap,other72162.__extmap)))))))));
}));

(datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k72160){
var self__ = this;
var this__4509__auto____$1 = this;
var G__72189 = k72160;
var G__72189__$1 = (((G__72189 instanceof cljs.core.Keyword))?G__72189.fqn:null);
switch (G__72189__$1) {
case "attrs":
case "tuples":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72160);

}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__72159){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__72191 = cljs.core.keyword_identical_QMARK_;
var expr__72192 = k__4511__auto__;
if(cljs.core.truth_((pred__72191.cljs$core$IFn$_invoke$arity$2 ? pred__72191.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__72192) : pred__72191.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__72192)))){
return (new datascript.query.Relation(G__72159,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72191.cljs$core$IFn$_invoke$arity$2 ? pred__72191.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__72192) : pred__72191.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__72192)))){
return (new datascript.query.Relation(self__.attrs,G__72159,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__72159),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__72159){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__72159,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
}));

(datascript.query.Relation.cljs$lang$type = true);

(datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
}));

(datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.query/Relation");
}));

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__72166){
var extmap__4542__auto__ = (function (){var G__72195 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72166,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__72166)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72195);
} else {
return G__72195;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__72166),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__72166),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72562 = arguments.length;
var i__4865__auto___72563 = (0);
while(true){
if((i__4865__auto___72563 < len__4864__auto___72562)){
args__4870__auto__.push((arguments[i__4865__auto___72563]));

var G__72564 = (i__4865__auto___72563 + (1));
i__4865__auto___72563 = G__72564;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
}));

(datascript.query.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.concatv.cljs$lang$applyTo = (function (seq72197){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72197));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__72203 = arguments.length;
switch (G__72203) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___72567 = arguments.length;
var i__4865__auto___72568 = (0);
while(true){
if((i__4865__auto___72568 < len__4864__auto___72567)){
args_arr__4885__auto__.push((arguments[i__4865__auto___72568]));

var G__72569 = (i__4865__auto___72568 + (1));
i__4865__auto___72568 = G__72569;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
}));

(datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
}));

/** @this {Function} */
(datascript.query.zip.cljs$lang$applyTo = (function (seq72200){
var G__72201 = cljs.core.first(seq72200);
var seq72200__$1 = cljs.core.next(seq72200);
var G__72202 = cljs.core.first(seq72200__$1);
var seq72200__$2 = cljs.core.next(seq72200__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72201,G__72202,seq72200__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (((cljs.core.every_QMARK_((function (p1__72204_SHARP_){
return cljs.core.contains_QMARK_(b,p1__72204_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__72205_SHARP_){
return cljs.core.contains_QMARK_(b,p1__72205_SHARP_);
}),cljs.core.keys(a))))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__72207){
var vec__72208 = p__72207;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72208,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72208,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__72211){
var vec__72212 = p__72211;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72212,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72212,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__4741__auto___72586 = l1;
var i_72587 = (0);
while(true){
if((i_72587 < n__4741__auto___72586)){
(res[i_72587] = (t1[(idxs1[i_72587])]));

var G__72588 = (i_72587 + (1));
i_72587 = G__72588;
continue;
} else {
}
break;
}

var n__4741__auto___72589 = l2;
var i_72590 = (0);
while(true){
if((i_72590 < n__4741__auto___72589)){
(res[(l1 + i_72590)] = (t2[(idxs2[i_72590])]));

var G__72591 = (i_72590 + (1));
i_72590 = G__72591;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__72217 = a;
var map__72217__$1 = cljs.core.__destructure_map(map__72217);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72217__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72217__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__72218 = b;
var map__72218__$1 = cljs.core.__destructure_map(map__72218);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72218__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72218__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__4652__auto__ = (function datascript$query$sum_rel_$_iter__72219(s__72220){
return (new cljs.core.LazySeq(null,(function (){
var s__72220__$1 = s__72220;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72220__$1);
if(temp__5720__auto__){
var s__72220__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72220__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72220__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72222 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72221 = (0);
while(true){
if((i__72221 < size__4651__auto__)){
var vec__72224 = cljs.core._nth(c__4650__auto__,i__72221);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72224,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72224,(1),null);
cljs.core.chunk_append(b__72222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__72593 = (i__72221 + (1));
i__72221 = G__72593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72222),datascript$query$sum_rel_$_iter__72219(cljs.core.chunk_rest(s__72220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72222),null);
}
} else {
var vec__72227 = cljs.core.first(s__72220__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72227,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72227,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__72219(cljs.core.rest(s__72220__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__72230_72596 = cljs.core.seq(idxb__GT_idxa);
var chunk__72231_72597 = null;
var count__72232_72598 = (0);
var i__72233_72599 = (0);
while(true){
if((i__72233_72599 < count__72232_72598)){
var vec__72241_72600 = chunk__72231_72597.cljs$core$IIndexed$_nth$arity$2(null,i__72233_72599);
var idx_b_72601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72241_72600,(0),null);
var idx_a_72602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72241_72600,(1),null);
(tuple_SINGLEQUOTE_[idx_a_72602] = (tuple_b[idx_b_72601]));


var G__72603 = seq__72230_72596;
var G__72604 = chunk__72231_72597;
var G__72605 = count__72232_72598;
var G__72606 = (i__72233_72599 + (1));
seq__72230_72596 = G__72603;
chunk__72231_72597 = G__72604;
count__72232_72598 = G__72605;
i__72233_72599 = G__72606;
continue;
} else {
var temp__5720__auto___72607 = cljs.core.seq(seq__72230_72596);
if(temp__5720__auto___72607){
var seq__72230_72608__$1 = temp__5720__auto___72607;
if(cljs.core.chunked_seq_QMARK_(seq__72230_72608__$1)){
var c__4679__auto___72609 = cljs.core.chunk_first(seq__72230_72608__$1);
var G__72610 = cljs.core.chunk_rest(seq__72230_72608__$1);
var G__72611 = c__4679__auto___72609;
var G__72612 = cljs.core.count(c__4679__auto___72609);
var G__72613 = (0);
seq__72230_72596 = G__72610;
chunk__72231_72597 = G__72611;
count__72232_72598 = G__72612;
i__72233_72599 = G__72613;
continue;
} else {
var vec__72244_72614 = cljs.core.first(seq__72230_72608__$1);
var idx_b_72615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72244_72614,(0),null);
var idx_a_72616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72244_72614,(1),null);
(tuple_SINGLEQUOTE_[idx_a_72616] = (tuple_b[idx_b_72615]));


var G__72617 = cljs.core.next(seq__72230_72608__$1);
var G__72618 = null;
var G__72619 = (0);
var G__72620 = (0);
seq__72230_72596 = G__72617;
chunk__72231_72597 = G__72618;
count__72232_72598 = G__72619;
i__72233_72599 = G__72620;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
}),cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap(cljs.core.keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a,attrs_b], 0))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__72248 = (function (){var G__72250 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__72251 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__72250,G__72251) : datascript.query.sum_rel.call(null,G__72250,G__72251));
})();
var G__72249 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__72248,G__72249) : datascript.query.sum_rel.call(null,G__72248,G__72249));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__72253 = arguments.length;
switch (G__72253) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
}));

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
}),acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
}));

(datascript.query.prod_rel.cljs$lang$maxFixedArity = 2);

datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
datascript.parser.parse_rules(rules__$1);

return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

var datascript$query$IBinding$in__GT_rel$dyn_72623 = (function (binding,value){
var x__4550__auto__ = (((binding == null))?null:binding);
var m__4551__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4551__auto__.call(null,binding,value));
} else {
var m__4549__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4549__auto__.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
});
datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
return datascript$query$IBinding$in__GT_rel$dyn_72623(binding,value);
}
});

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
}));

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
}));

(datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72256_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__72256_SHARP_);
}),coll));

}
}
}));

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(binding__$1.bindings))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not enough elements in a collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to bind tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__72257_SHARP_,p2__72258_SHARP_){
return datascript.query.in__GT_rel(p1__72257_SHARP_,p2__72258_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__72260){
var vec__72261 = p__72260;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72261,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72261,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
var cb = cljs.core.count(bindings);
var cv = cljs.core.count(values);
if((cb < cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Extra inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72264_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__72264_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
if((cb > cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Too few inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72265_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__72265_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));

}
}
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
} else {
return (function (tuple){
return (tuple[idx]);
});
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map((function (p1__72267_SHARP_){
return (p1__72267_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__72267_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__72267_SHARP_.call(null,tuple));
})));
});
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5722__auto__ = cljs.core.first(tuples__$1);
if((temp__5722__auto__ == null)){
return cljs.core.persistent_BANG_(hash_table);
} else {
var tuple = temp__5722__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__72644 = cljs.core.next(tuples__$1);
var G__72645 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__72644;
hash_table = G__72645;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72270_SHARP_){
return datascript.query.getter_fn(attrs1,p1__72270_SHARP_);
}),common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72271_SHARP_){
return datascript.query.getter_fn(attrs2,p1__72271_SHARP_);
}),common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5722__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5722__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
}),acc,tuples1__$1);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__72277 = a;
var map__72277__$1 = cljs.core.__destructure_map(map__72277);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72277__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__72278 = b;
var map__72278__$1 = cljs.core.__destructure_map(map__72278);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72278__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys(attrs_a,attrs_b);
var getters_b = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72273_SHARP_){
return datascript.query.getter_fn(attrs_b,p1__72273_SHARP_);
}),attrs);
var key_fn_b = datascript.query.tuple_key_fn(getters_b);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var getters_a = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72274_SHARP_){
return datascript.query.getter_fn(attrs_a,p1__72274_SHARP_);
}),attrs);
var key_fn_a = datascript.query.tuple_key_fn(getters_a);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv((function (p1__72275_SHARP_){
return ((function (){var G__72279 = (key_fn_a.cljs$core$IFn$_invoke$arity$1 ? key_fn_a.cljs$core$IFn$_invoke$arity$1(p1__72275_SHARP_) : key_fn_a.call(null,p1__72275_SHARP_));
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__72279) : hash.call(null,G__72279));
})() == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72280_SHARP_){
if((p1__72280_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__72280_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__72281){
var vec__72282 = p__72281;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72282,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72282,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4251__auto__ = tuple__$1;
if(cljs.core.truth_(and__4251__auto__)){
return pattern__$1;
} else {
return and__4251__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))){
var G__72657 = cljs.core.next(tuple__$1);
var G__72658 = cljs.core.next(pattern__$1);
tuple__$1 = G__72657;
pattern__$1 = G__72658;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72286_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__72286_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__72287){
var vec__72288 = p__72287;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72288,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72288,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5722__auto__ = cljs.core.first(rels__$1);
if((temp__5722__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5722__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__72659 = cljs.core.next(rels__$1);
var G__72660 = datascript.query.hash_join(rel,new_rel__$1);
var G__72661 = acc;
rels__$1 = G__72659;
new_rel__$1 = G__72660;
acc = G__72661;
continue;
} else {
var G__72662 = cljs.core.next(rels__$1);
var G__72663 = new_rel__$1;
var G__72664 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__72662;
new_rel__$1 = G__72663;
acc = G__72664;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__72293_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__72293_SHARP_),sym)){
return p1__72293_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5724__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5724__auto__ == null)){
return null;
} else {
var rel = temp__5724__auto__;
var temp__5724__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5724__auto____$1 == null)){
return null;
} else {
var tuple = temp__5724__auto____$1;
return (tuple[(function (){var fexpr__72295 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__72295.cljs$core$IFn$_invoke$arity$1 ? fexpr__72295.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__72295.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__72296_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__72296_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72297_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__72297_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__72298_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__72298_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__4741__auto___72667 = len;
var i_72668 = (0);
while(true){
if((i_72668 < n__4741__auto___72667)){
var arg_72669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_72668);
if((arg_72669 instanceof cljs.core.Symbol)){
var temp__5722__auto___72674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_72669);
if((temp__5722__auto___72674 == null)){
(tuples_args[i_72668] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_72669));
} else {
var source_72676 = temp__5722__auto___72674;
(static_args[i_72668] = source_72676);
}
} else {
(static_args[i_72668] = arg_72669);
}

var G__72677 = (i_72668 + (1));
i_72668 = G__72677;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__4741__auto___72678 = len;
var i_72679 = (0);
while(true){
if((i_72679 < n__4741__auto___72678)){
var temp__5724__auto___72680 = (tuples_args[i_72679]);
if((temp__5724__auto___72680 == null)){
} else {
var tuple_idx_72684 = temp__5724__auto___72680;
var v_72685 = (tuple[tuple_idx_72684]);
(args__$1[i_72679] = v_72685);
}

var G__72686 = (i_72679 + (1));
i_72679 = G__72686;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__4741__auto___72687 = len;
var i_72688 = (0);
while(true){
if((i_72688 < n__4741__auto___72687)){
var temp__5724__auto___72689 = (tuples_args[i_72688]);
if((temp__5724__auto___72689 == null)){
} else {
var tuple_idx_72690 = temp__5724__auto___72689;
var v_72691 = (tuple[tuple_idx_72690]);
(static_args[i_72688] = v_72691);
}

var G__72692 = (i_72688 + (1));
i_72688 = G__72692;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__72302 = clause;
var vec__72305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72302,(0),null);
var seq__72306 = cljs.core.seq(vec__72305);
var first__72307 = cljs.core.first(seq__72306);
var seq__72306__$1 = cljs.core.next(seq__72306);
var f = first__72307;
var args = seq__72306__$1;
var pred = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.query_fns,f);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown predicate '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__72308 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72308,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72308,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__72301_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__72301_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__72312 = clause;
var vec__72315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72312,(0),null);
var seq__72316 = cljs.core.seq(vec__72315);
var first__72317 = cljs.core.first(seq__72316);
var seq__72316__$1 = cljs.core.next(seq__72316);
var f = first__72317;
var args = seq__72316__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72312,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.query_fns,f);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown function '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__72318 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72318,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72318,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__4652__auto__ = (function datascript$query$bind_by_fn_$_iter__72322(s__72323){
return (new cljs.core.LazySeq(null,(function (){
var s__72323__$1 = s__72323;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72323__$1);
if(temp__5720__auto__){
var s__72323__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72323__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72323__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72325 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72324 = (0);
while(true){
if((i__72324 < size__4651__auto__)){
var tuple = cljs.core._nth(c__4650__auto__,i__72324);
var val = tuple_fn(tuple);
if((!((val == null)))){
cljs.core.chunk_append(b__72325,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__72706 = (i__72324 + (1));
i__72324 = G__72706;
continue;
} else {
var G__72707 = (i__72324 + (1));
i__72324 = G__72707;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72325),datascript$query$bind_by_fn_$_iter__72322(cljs.core.chunk_rest(s__72323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72325),null);
}
} else {
var tuple = cljs.core.first(s__72323__$2);
var val = tuple_fn(tuple);
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__72322(cljs.core.rest(s__72323__$2)));
} else {
var G__72712 = cljs.core.rest(s__72323__$2);
s__72323__$1 = G__72712;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
if((!(cljs.core.sequential_QMARK_(clause)))){
return false;
} else {
var head = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause));
if((!((head instanceof cljs.core.Symbol)))){
return false;
} else {
if(datascript.query.free_var_QMARK_(head)){
return false;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null], null), null),head)){
return false;
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),head)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause], null));
} else {
return true;

}
}
}
}
}
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__72329 = clause;
var seq__72330 = cljs.core.seq(vec__72329);
var first__72331 = cljs.core.first(seq__72330);
var seq__72330__$1 = cljs.core.next(seq__72330);
var rule = first__72331;
var call_args = seq__72330__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4652__auto__ = (function datascript$query$expand_rule_$_iter__72332(s__72333){
return (new cljs.core.LazySeq(null,(function (){
var s__72333__$1 = s__72333;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72333__$1);
if(temp__5720__auto__){
var s__72333__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72333__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72333__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72335 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72334 = (0);
while(true){
if((i__72334 < size__4651__auto__)){
var branch = cljs.core._nth(c__4650__auto__,i__72334);
var vec__72337 = branch;
var seq__72338 = cljs.core.seq(vec__72337);
var first__72339 = cljs.core.first(seq__72338);
var seq__72338__$1 = cljs.core.next(seq__72338);
var vec__72340 = first__72339;
var seq__72341 = cljs.core.seq(vec__72340);
var first__72342 = cljs.core.first(seq__72341);
var seq__72341__$1 = cljs.core.next(seq__72341);
var _ = first__72342;
var rule_args = seq__72341__$1;
var clauses = seq__72338__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__72335,clojure.walk.postwalk(((function (i__72334,vec__72337,seq__72338,first__72339,seq__72338__$1,vec__72340,seq__72341,first__72342,seq__72341__$1,_,rule_args,clauses,replacements,branch,c__4650__auto__,size__4651__auto__,b__72335,s__72333__$2,temp__5720__auto__,vec__72329,seq__72330,first__72331,seq__72330__$1,rule,call_args,seqid,branches){
return (function (p1__72328_SHARP_){
if(datascript.query.free_var_QMARK_(p1__72328_SHARP_)){
var x__68327__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__72328_SHARP_) : replacements.call(null,p1__72328_SHARP_));
if((x__68327__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__72328_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__68327__auto__;
}
} else {
return p1__72328_SHARP_;
}
});})(i__72334,vec__72337,seq__72338,first__72339,seq__72338__$1,vec__72340,seq__72341,first__72342,seq__72341__$1,_,rule_args,clauses,replacements,branch,c__4650__auto__,size__4651__auto__,b__72335,s__72333__$2,temp__5720__auto__,vec__72329,seq__72330,first__72331,seq__72330__$1,rule,call_args,seqid,branches))
,clauses));

var G__72727 = (i__72334 + (1));
i__72334 = G__72727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72335),datascript$query$expand_rule_$_iter__72332(cljs.core.chunk_rest(s__72333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72335),null);
}
} else {
var branch = cljs.core.first(s__72333__$2);
var vec__72343 = branch;
var seq__72344 = cljs.core.seq(vec__72343);
var first__72345 = cljs.core.first(seq__72344);
var seq__72344__$1 = cljs.core.next(seq__72344);
var vec__72346 = first__72345;
var seq__72347 = cljs.core.seq(vec__72346);
var first__72348 = cljs.core.first(seq__72347);
var seq__72347__$1 = cljs.core.next(seq__72347);
var _ = first__72348;
var rule_args = seq__72347__$1;
var clauses = seq__72344__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__72343,seq__72344,first__72345,seq__72344__$1,vec__72346,seq__72347,first__72348,seq__72347__$1,_,rule_args,clauses,replacements,branch,s__72333__$2,temp__5720__auto__,vec__72329,seq__72330,first__72331,seq__72330__$1,rule,call_args,seqid,branches){
return (function (p1__72328_SHARP_){
if(datascript.query.free_var_QMARK_(p1__72328_SHARP_)){
var x__68327__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__72328_SHARP_) : replacements.call(null,p1__72328_SHARP_));
if((x__68327__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__72328_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__68327__auto__;
}
} else {
return p1__72328_SHARP_;
}
});})(vec__72343,seq__72344,first__72345,seq__72344__$1,vec__72346,seq__72347,first__72348,seq__72347__$1,_,rule_args,clauses,replacements,branch,s__72333__$2,temp__5720__auto__,vec__72329,seq__72330,first__72331,seq__72330__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__72332(cljs.core.rest(s__72333__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__72350){
var vec__72351 = p__72350;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72351,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72351,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__72355 = rule_clause;
var seq__72356 = cljs.core.seq(vec__72355);
var first__72357 = cljs.core.first(seq__72356);
var seq__72356__$1 = cljs.core.next(seq__72356);
var rule = first__72357;
var call_args = seq__72356__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__4652__auto__ = (function datascript$query$rule_gen_guards_$_iter__72358(s__72359){
return (new cljs.core.LazySeq(null,(function (){
var s__72359__$1 = s__72359;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72359__$1);
if(temp__5720__auto__){
var s__72359__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72359__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72359__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72361 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72360 = (0);
while(true){
if((i__72360 < size__4651__auto__)){
var prev_args = cljs.core._nth(c__4650__auto__,i__72360);
var vec__72362 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72362,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72362,(1),null);
cljs.core.chunk_append(b__72361,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__72730 = (i__72360 + (1));
i__72360 = G__72730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72361),datascript$query$rule_gen_guards_$_iter__72358(cljs.core.chunk_rest(s__72359__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72361),null);
}
} else {
var prev_args = cljs.core.first(s__72359__$2);
var vec__72365 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72365,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72365,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__72358(cljs.core.rest(s__72359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (p1__72369_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__72369_SHARP_) : pred.call(null,p1__72369_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__72369_SHARP_);
} else {
}

return p1__72369_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__72370){
var vec__72371 = p__72370;
var vec__72374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72371,(0),null);
var seq__72375 = cljs.core.seq(vec__72374);
var first__72376 = cljs.core.first(seq__72375);
var seq__72375__$1 = cljs.core.next(seq__72375);
var _ = first__72376;
var vars = seq__72375__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});
var empty_rels_QMARK_ = (function (context__$1){
return cljs.core.some((function (p1__72377_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__72377_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5722__auto__ = cljs.core.first(stack);
if((temp__5722__auto__ == null)){
return rel;
} else {
var frame = temp__5722__auto__;
var vec__72399 = cljs.core.split_with(((function (stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__72379_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__72379_SHARP_)));
});})(stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72399,(0),null);
var vec__72402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72399,(1),null);
var seq__72403 = cljs.core.seq(vec__72402);
var first__72404 = cljs.core.first(seq__72403);
var seq__72403__$1 = cljs.core.next(seq__72403);
var rule_clause = first__72404;
var next_clauses = seq__72403__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__72744 = cljs.core.next(stack);
var G__72745 = datascript.query.sum_rel(rel,new_rel);
stack = G__72744;
rel = G__72745;
continue;
} else {
var vec__72405 = rule_clause;
var seq__72406 = cljs.core.seq(vec__72405);
var first__72407 = cljs.core.first(seq__72406);
var seq__72406__$1 = cljs.core.next(seq__72406);
var rule = first__72407;
var call_args = seq__72406__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__72408 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72408,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72408,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__72405,seq__72406,first__72407,seq__72406__$1,rule,call_args,guards,vec__72408,active_gs,pending_gs,vec__72399,clauses,vec__72402,seq__72403,first__72404,seq__72403__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__72380_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__72380_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__72405,seq__72406,first__72407,seq__72406__$1,rule,call_args,guards,vec__72408,active_gs,pending_gs,vec__72399,clauses,vec__72402,seq__72403,first__72404,seq__72403__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__72749 = cljs.core.next(stack);
var G__72750 = rel;
stack = G__72749;
rel = G__72750;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__72751 = cljs.core.next(stack);
var G__72752 = rel;
stack = G__72751;
rel = G__72752;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__72753 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4652__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__72405,seq__72406,first__72407,seq__72406__$1,rule,call_args,guards,vec__72408,active_gs,pending_gs,vec__72399,clauses,vec__72402,seq__72403,first__72404,seq__72403__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__72411(s__72412){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__72405,seq__72406,first__72407,seq__72406__$1,rule,call_args,guards,vec__72408,active_gs,pending_gs,vec__72399,clauses,vec__72402,seq__72403,first__72404,seq__72403__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__72412__$1 = s__72412;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72412__$1);
if(temp__5720__auto__){
var s__72412__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72412__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72412__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72414 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72413 = (0);
while(true){
if((i__72413 < size__4651__auto__)){
var branch = cljs.core._nth(c__4650__auto__,i__72413);
cljs.core.chunk_append(b__72414,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__72757 = (i__72413 + (1));
i__72413 = G__72757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72414),datascript$query$solve_rule_$_iter__72411(cljs.core.chunk_rest(s__72412__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72414),null);
}
} else {
var branch = cljs.core.first(s__72412__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__72411(cljs.core.rest(s__72412__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__72405,seq__72406,first__72407,seq__72406__$1,rule,call_args,guards,vec__72408,active_gs,pending_gs,vec__72399,clauses,vec__72402,seq__72403,first__72404,seq__72403__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__72405,seq__72406,first__72407,seq__72406__$1,rule,call_args,guards,vec__72408,active_gs,pending_gs,vec__72399,clauses,vec__72402,seq__72403,first__72404,seq__72403__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4652__auto__(branches);
})(),cljs.core.next(stack));
var G__72754 = rel;
stack = G__72753;
rel = G__72754;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__72416 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72416,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72416,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72416,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72416,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4253__auto__ = datascript.query.lookup_ref_QMARK_(e);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return datascript.query.attr_QMARK_(e);
}
})())?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__4251__auto__ = v;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = datascript.query.attr_QMARK_(a);
if(and__4251__auto____$1){
var and__4251__auto____$2 = datascript.db.ref_QMARK_(source,a);
if(and__4251__auto____$2){
var or__4253__auto__ = datascript.query.lookup_ref_QMARK_(v);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return datascript.query.attr_QMARK_(v);
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__72420 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72420,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72420,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72420,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72420,(3),null);
var G__72423 = cljs.core.PersistentHashSet.EMPTY;
var G__72423__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__72423,e):G__72423);
var G__72423__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__72423__$1,tx):G__72423__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__72423__$2,v);
} else {
return G__72423__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5724__auto__ = cljs.core.not_empty(cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5724__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5724__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__72424_SHARP_){
return datascript.query.limit_rel(p1__72424_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.bound_vars = (function datascript$query$bound_vars(context){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__72426_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__72426_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
});
datascript.query.check_bound = (function datascript$query$check_bound(bound,vars,form){
if(clojure.set.subset_QMARK_(vars,bound)){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query.check_free_same = (function datascript$query$check_free_same(bound,branches,form){
var free = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72427_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(datascript.query.collect_vars(p1__72427_SHARP_),bound);
}),branches);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,free))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([free], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),free], null));
}
});
datascript.query.check_free_subset = (function datascript$query$check_free_subset(bound,vars,branches){
var free = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(bound,vars));
var seq__72429 = cljs.core.seq(branches);
var chunk__72430 = null;
var count__72431 = (0);
var i__72432 = (0);
while(true){
if((i__72432 < count__72431)){
var branch = chunk__72430.cljs$core$IIndexed$_nth$arity$2(null,i__72432);
var temp__5724__auto___72763 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5724__auto___72763 == null)){
} else {
var missing_72764 = temp__5724__auto___72763;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_72764], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_72764], null));
}


var G__72765 = seq__72429;
var G__72766 = chunk__72430;
var G__72767 = count__72431;
var G__72768 = (i__72432 + (1));
seq__72429 = G__72765;
chunk__72430 = G__72766;
count__72431 = G__72767;
i__72432 = G__72768;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__72429);
if(temp__5720__auto__){
var seq__72429__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72429__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__72429__$1);
var G__72769 = cljs.core.chunk_rest(seq__72429__$1);
var G__72770 = c__4679__auto__;
var G__72771 = cljs.core.count(c__4679__auto__);
var G__72772 = (0);
seq__72429 = G__72769;
chunk__72430 = G__72770;
count__72431 = G__72771;
i__72432 = G__72772;
continue;
} else {
var branch = cljs.core.first(seq__72429__$1);
var temp__5724__auto___72773 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5724__auto___72773 == null)){
} else {
var missing_72774 = temp__5724__auto___72773;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_72774], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_72774], null));
}


var G__72775 = cljs.core.next(seq__72429__$1);
var G__72776 = null;
var G__72777 = (0);
var G__72778 = (0);
seq__72429 = G__72775;
chunk__72430 = G__72776;
count__72431 = G__72777;
i__72432 = G__72778;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__72440 = arguments.length;
switch (G__72440) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
}));

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__72442 = datascript.query.looks_like_QMARK_;
var expr__72443 = clause;
if(cljs.core.truth_((function (){var G__72445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__72446 = expr__72443;
return (pred__72442.cljs$core$IFn$_invoke$arity$2 ? pred__72442.cljs$core$IFn$_invoke$arity$2(G__72445,G__72446) : pred__72442.call(null,G__72445,G__72446));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__72447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__72448 = expr__72443;
return (pred__72442.cljs$core$IFn$_invoke$arity$2 ? pred__72442.cljs$core$IFn$_invoke$arity$2(G__72447,G__72448) : pred__72442.call(null,G__72447,G__72448));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__72449 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__72450 = expr__72443;
return (pred__72442.cljs$core$IFn$_invoke$arity$2 ? pred__72442.cljs$core$IFn$_invoke$arity$2(G__72449,G__72450) : pred__72442.call(null,G__72449,G__72450));
})())){
var vec__72451 = clause;
var seq__72452 = cljs.core.seq(vec__72451);
var first__72453 = cljs.core.first(seq__72452);
var seq__72452__$1 = cljs.core.next(seq__72452);
var source_sym = first__72453;
var rest = seq__72452__$1;
var _STAR_implicit_source_STAR__orig_val__72454 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__72455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__72455);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__72454);
}} else {
if(cljs.core.truth_((function (){var G__72456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__72457 = expr__72443;
return (pred__72442.cljs$core$IFn$_invoke$arity$2 ? pred__72442.cljs$core$IFn$_invoke$arity$2(G__72456,G__72457) : pred__72442.call(null,G__72456,G__72457));
})())){
var vec__72458 = clause;
var seq__72459 = cljs.core.seq(vec__72458);
var first__72460 = cljs.core.first(seq__72459);
var seq__72459__$1 = cljs.core.next(seq__72459);
var _ = first__72460;
var branches = seq__72459__$1;
var ___$1 = datascript.query.check_free_same(datascript.query.bound_vars(context),branches,clause);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__72458,seq__72459,first__72460,seq__72459__$1,_,branches,___$1,pred__72442,expr__72443){
return (function (p1__72435_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__72435_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__72435_SHARP_));
});})(context,clause,orig_clause,vec__72458,seq__72459,first__72460,seq__72459__$1,_,branches,___$1,pred__72442,expr__72443))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__72458,seq__72459,first__72460,seq__72459__$1,_,branches,___$1,contexts,pred__72442,expr__72443){
return (function (p1__72436_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__72436_SHARP_));
});})(context,clause,orig_clause,vec__72458,seq__72459,first__72460,seq__72459__$1,_,branches,___$1,contexts,pred__72442,expr__72443))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__72462 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__72463 = expr__72443;
return (pred__72442.cljs$core$IFn$_invoke$arity$2 ? pred__72442.cljs$core$IFn$_invoke$arity$2(G__72462,G__72463) : pred__72442.call(null,G__72462,G__72463));
})())){
var vec__72464 = clause;
var seq__72465 = cljs.core.seq(vec__72464);
var first__72466 = cljs.core.first(seq__72465);
var seq__72465__$1 = cljs.core.next(seq__72465);
var _ = first__72466;
var first__72466__$1 = cljs.core.first(seq__72465__$1);
var seq__72465__$2 = cljs.core.next(seq__72465__$1);
var vec__72467 = first__72466__$1;
var seq__72468 = cljs.core.seq(vec__72467);
var first__72469 = cljs.core.first(seq__72468);
var seq__72468__$1 = cljs.core.next(seq__72468);
var req_vars = first__72469;
var vars = seq__72468__$1;
var branches = seq__72465__$2;
var bound = datascript.query.bound_vars(context);
datascript.query.check_bound(bound,req_vars,orig_clause);

datascript.query.check_free_subset(bound,vars,branches);

var G__72783 = context;
var G__72784 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__72785 = clause;
context = G__72783;
clause = G__72784;
orig_clause = G__72785;
continue;
} else {
if(cljs.core.truth_((function (){var G__72470 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__72471 = expr__72443;
return (pred__72442.cljs$core$IFn$_invoke$arity$2 ? pred__72442.cljs$core$IFn$_invoke$arity$2(G__72470,G__72471) : pred__72442.call(null,G__72470,G__72471));
})())){
var vec__72472 = clause;
var seq__72473 = cljs.core.seq(vec__72472);
var first__72474 = cljs.core.first(seq__72473);
var seq__72473__$1 = cljs.core.next(seq__72473);
var _ = first__72474;
var first__72474__$1 = cljs.core.first(seq__72473__$1);
var seq__72473__$2 = cljs.core.next(seq__72473__$1);
var vars = first__72474__$1;
var branches = seq__72473__$2;
var vars__$1 = cljs.core.set(vars);
var ___$1 = datascript.query.check_free_subset(datascript.query.bound_vars(context),vars__$1,branches);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__72472,seq__72473,first__72474,seq__72473__$1,_,first__72474__$1,seq__72473__$2,vars,branches,vars__$1,___$1,join_context,pred__72442,expr__72443){
return (function (p1__72437_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__72437_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__72437_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__72472,seq__72473,first__72474,seq__72473__$1,_,first__72474__$1,seq__72473__$2,vars,branches,vars__$1,___$1,join_context,pred__72442,expr__72443))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__72472,seq__72473,first__72474,seq__72473__$1,_,first__72474__$1,seq__72473__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__72442,expr__72443){
return (function (p1__72438_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__72438_SHARP_));
});})(context,clause,orig_clause,vec__72472,seq__72473,first__72474,seq__72473__$1,_,first__72474__$1,seq__72473__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__72442,expr__72443))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__72475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__72476 = expr__72443;
return (pred__72442.cljs$core$IFn$_invoke$arity$2 ? pred__72442.cljs$core$IFn$_invoke$arity$2(G__72475,G__72476) : pred__72442.call(null,G__72475,G__72476));
})())){
var vec__72477 = clause;
var seq__72478 = cljs.core.seq(vec__72477);
var first__72479 = cljs.core.first(seq__72478);
var seq__72478__$1 = cljs.core.next(seq__72478);
var _ = first__72479;
var clauses = seq__72478__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__72480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__72481 = expr__72443;
return (pred__72442.cljs$core$IFn$_invoke$arity$2 ? pred__72442.cljs$core$IFn$_invoke$arity$2(G__72480,G__72481) : pred__72442.call(null,G__72480,G__72481));
})())){
var vec__72483 = clause;
var seq__72484 = cljs.core.seq(vec__72483);
var first__72485 = cljs.core.first(seq__72484);
var seq__72484__$1 = cljs.core.next(seq__72484);
var _ = first__72485;
var clauses = seq__72484__$1;
var bound = datascript.query.bound_vars(context);
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__72486 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__72487 = expr__72443;
return (pred__72442.cljs$core$IFn$_invoke$arity$2 ? pred__72442.cljs$core$IFn$_invoke$arity$2(G__72486,G__72487) : pred__72442.call(null,G__72486,G__72487));
})())){
var vec__72488 = clause;
var seq__72489 = cljs.core.seq(vec__72488);
var first__72490 = cljs.core.first(seq__72489);
var seq__72489__$1 = cljs.core.next(seq__72489);
var _ = first__72490;
var first__72490__$1 = cljs.core.first(seq__72489__$1);
var seq__72489__$2 = cljs.core.next(seq__72489__$1);
var vars = first__72490__$1;
var clauses = seq__72489__$2;
var bound = datascript.query.bound_vars(context);
var ___$1 = datascript.query.check_bound(bound,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__72491 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__72492 = expr__72443;
return (pred__72442.cljs$core$IFn$_invoke$arity$2 ? pred__72442.cljs$core$IFn$_invoke$arity$2(G__72491,G__72492) : pred__72442.call(null,G__72491,G__72492));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__72493 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__72494 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__72494);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__72493);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__72443)].join('')));
}
}
}
}
}
}
}
}
}
}
break;
}
}));

(datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3);

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_(context,clause)){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
var _STAR_implicit_source_STAR__orig_val__72497 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__72498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__72498);

try{var G__72499 = context;
var G__72500 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__72499,G__72500) : datascript.query.resolve_clause.call(null,G__72499,G__72500));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__72497);
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__72501 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__72502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__72502);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__72501);
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__72506 = arguments.length;
switch (G__72506) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
}));

(datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var rel = cljs.core.first(rels);
if((rel == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))){
return cljs.core.PersistentVector.EMPTY;
} else {
var keep_attrs = cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__72791 = acc;
var G__72792 = cljs.core.next(rels);
var G__72793 = symbols;
acc = G__72791;
rels = G__72792;
symbols = G__72793;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel){
return (function (p1__72503_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__72503_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel))
,symbols));
var len = cljs.core.count(symbols);
var G__72794 = (function (){var iter__4652__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel){
return (function datascript$query$iter__72507(s__72508){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel){
return (function (){
var s__72508__$1 = s__72508;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72508__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var t1 = cljs.core.first(xs__6277__auto__);
var iterys__4648__auto__ = ((function (s__72508__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel){
return (function datascript$query$iter__72507_$_iter__72509(s__72510){
return (new cljs.core.LazySeq(null,((function (s__72508__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel){
return (function (){
var s__72510__$1 = s__72510;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__72510__$1);
if(temp__5720__auto____$1){
var s__72510__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__72510__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72510__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72512 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72511 = (0);
while(true){
if((i__72511 < size__4651__auto__)){
var t2 = cljs.core._nth(c__4650__auto__,i__72511);
cljs.core.chunk_append(b__72512,(function (){var res = cljs.core.aclone(t1);
var n__4741__auto___72797 = len;
var i_72798 = (0);
while(true){
if((i_72798 < n__4741__auto___72797)){
var temp__5724__auto___72799 = (copy_map[i_72798]);
if((temp__5724__auto___72799 == null)){
} else {
var idx_72800 = temp__5724__auto___72799;
(res[i_72798] = (t2[idx_72800]));
}

var G__72801 = (i_72798 + (1));
i_72798 = G__72801;
continue;
} else {
}
break;
}

return res;
})());

var G__72802 = (i__72511 + (1));
i__72511 = G__72802;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72512),datascript$query$iter__72507_$_iter__72509(cljs.core.chunk_rest(s__72510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72512),null);
}
} else {
var t2 = cljs.core.first(s__72510__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__4741__auto___72803 = len;
var i_72804 = (0);
while(true){
if((i_72804 < n__4741__auto___72803)){
var temp__5724__auto___72805 = (copy_map[i_72804]);
if((temp__5724__auto___72805 == null)){
} else {
var idx_72806 = temp__5724__auto___72805;
(res[i_72804] = (t2[idx_72806]));
}

var G__72807 = (i_72804 + (1));
i_72804 = G__72807;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__72507_$_iter__72509(cljs.core.rest(s__72510__$2)));
}
} else {
return null;
}
break;
}
});})(s__72508__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel))
,null,null));
});})(s__72508__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,datascript$query$iter__72507(cljs.core.rest(s__72508__$1)));
} else {
var G__72808 = cljs.core.rest(s__72508__$1);
s__72508__$1 = G__72808;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel))
;
return iter__4652__auto__(acc);
})();
var G__72795 = cljs.core.next(rels);
var G__72796 = symbols;
acc = G__72794;
rels = G__72795;
symbols = G__72796;
continue;

}
}
}
break;
}
}));

(datascript.query._collect.cljs$lang$maxFixedArity = 3);

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

var datascript$query$IContextResolve$_context_resolve$dyn_72809 = (function (var$,context){
var x__4550__auto__ = (((var$ == null))?null:var$);
var m__4551__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4551__auto__.call(null,var$,context));
} else {
var m__4549__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4549__auto__.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
});
datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
return datascript$query$IContextResolve$_context_resolve$dyn_72809(var$,context);
}
});

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
}));

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
}));

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
}));

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
}));
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_(element)){
var f = datascript.query._context_resolve(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72516_SHARP_){
return datascript.query._context_resolve(p1__72516_SHARP_,context);
}),cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72517_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__72517_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__72518_SHARP_,p2__72519_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__72518_SHARP_) : pred.call(null,p1__72518_SHARP_)))){
return p2__72519_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72520_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__72520_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__4652__auto__ = (function datascript$query$aggregate_$_iter__72522(s__72523){
return (new cljs.core.LazySeq(null,(function (){
var s__72523__$1 = s__72523;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72523__$1);
if(temp__5720__auto__){
var s__72523__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72523__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72523__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72525 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72524 = (0);
while(true){
if((i__72524 < size__4651__auto__)){
var vec__72526 = cljs.core._nth(c__4650__auto__,i__72524);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72526,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72526,(1),null);
cljs.core.chunk_append(b__72525,datascript.query._aggregate(find_elements,context,tuples));

var G__72811 = (i__72524 + (1));
i__72524 = G__72811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72525),datascript$query$aggregate_$_iter__72522(cljs.core.chunk_rest(s__72523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72525),null);
}
} else {
var vec__72529 = cljs.core.first(s__72523__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72529,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72529,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__72522(cljs.core.rest(s__72523__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(grouped);
});
datascript.query.map_STAR_ = (function datascript$query$map_STAR_(f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__72532_SHARP_,p2__72534_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__72532_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__72534_SHARP_) : f.call(null,p2__72534_SHARP_)));
}),cljs.core.empty(xs),xs);
});
datascript.query.tuples__GT_return_map = (function datascript$query$tuples__GT_return_map(return_map,tuples){
var symbols = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(return_map);
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(symbols));
return datascript.query.map_STAR_((function (tuple){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(symbols,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,i));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
}),tuples);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

var datascript$query$IPostProcess$_post_process$dyn_72813 = (function (find,return_map,tuples){
var x__4550__auto__ = (((find == null))?null:find);
var m__4551__auto__ = (datascript.query._post_process[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__4551__auto__.call(null,find,return_map,tuples));
} else {
var m__4549__auto__ = (datascript.query._post_process["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__4549__auto__.call(null,find,return_map,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
});
datascript.query._post_process = (function datascript$query$_post_process(find,return_map,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$3 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$3(find,return_map,tuples);
} else {
return datascript$query$IPostProcess$_post_process$dyn_72813(find,return_map,tuples);
}
});

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((return_map == null)){
return tuples;
} else {
return datascript.query.tuples__GT_return_map(return_map,tuples);
}
}));

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
}));

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
}));

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((!((return_map == null)))){
return cljs.core.first(datascript.query.tuples__GT_return_map(return_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(tuples)], null)));
} else {
return cljs.core.first(tuples);
}
}));
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4652__auto__ = (function datascript$query$pull_$_iter__72537(s__72538){
return (new cljs.core.LazySeq(null,(function (){
var s__72538__$1 = s__72538;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72538__$1);
if(temp__5720__auto__){
var s__72538__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72538__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72538__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72540 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72539 = (0);
while(true){
if((i__72539 < size__4651__auto__)){
var find = cljs.core._nth(c__4650__auto__,i__72539);
cljs.core.chunk_append(b__72540,((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null));

var G__72816 = (i__72539 + (1));
i__72539 = G__72816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72540),datascript$query$pull_$_iter__72537(cljs.core.chunk_rest(s__72538__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72540),null);
}
} else {
var find = cljs.core.first(s__72538__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null),datascript$query$pull_$_iter__72537(cljs.core.rest(s__72538__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(find_elements);
})();
var iter__4652__auto__ = (function datascript$query$pull_$_iter__72541(s__72542){
return (new cljs.core.LazySeq(null,(function (){
var s__72542__$1 = s__72542;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72542__$1);
if(temp__5720__auto__){
var s__72542__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72542__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72542__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72544 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72543 = (0);
while(true){
if((i__72543 < size__4651__auto__)){
var tuple = cljs.core._nth(c__4650__auto__,i__72543);
cljs.core.chunk_append(b__72544,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__72543,tuple,c__4650__auto__,size__4651__auto__,b__72544,s__72542__$2,temp__5720__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(i__72543,tuple,c__4650__auto__,size__4651__auto__,b__72544,s__72542__$2,temp__5720__auto__,resolved))
,resolved,tuple));

var G__72817 = (i__72543 + (1));
i__72543 = G__72817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72544),datascript$query$pull_$_iter__72541(cljs.core.chunk_rest(s__72542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72544),null);
}
} else {
var tuple = cljs.core.first(s__72542__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__72542__$2,temp__5720__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(tuple,s__72542__$2,temp__5720__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__72541(cljs.core.rest(s__72542__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(resultset);
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72818 = arguments.length;
var i__4865__auto___72819 = (0);
while(true){
if((i__4865__auto___72819 < len__4864__auto___72818)){
args__4870__auto__.push((arguments[i__4865__auto___72819]));

var G__72820 = (i__4865__auto___72819 + (1));
i__4865__auto___72819 = G__72820;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.lru._get(datascript.query._STAR_query_cache_STAR_,q,(function (){
return datascript.parser.parse_query(q);
}));
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__72548 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__72548);
} else {
return G__72548;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__72549 = resultset;
var G__72549__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__72545_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__72545_SHARP_,(0),result_arity));
}),G__72549):G__72549);
var G__72549__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__72549__$1):G__72549__$1);
var G__72549__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__72549__$2):G__72549__$2);
return datascript.query._post_process(find,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(parsed_q),G__72549__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq72546){
var G__72547 = cljs.core.first(seq72546);
var seq72546__$1 = cljs.core.next(seq72546);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72547,seq72546__$1);
}));


//# sourceMappingURL=datascript.query.js.map
