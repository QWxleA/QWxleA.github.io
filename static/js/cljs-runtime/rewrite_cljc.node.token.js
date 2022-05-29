goog.provide('rewrite_cljc.node.token');

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
 * @implements {rewrite_cljc.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_cljc.node.token.TokenNode = (function (value,string_value,__meta,__extmap,__hash){
this.value = value;
this.string_value = string_value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.token.TokenNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78225,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78230 = k78225;
var G__78230__$1 = (((G__78230 instanceof cljs.core.Keyword))?G__78230.fqn:null);
switch (G__78230__$1) {
case "value":
return self__.value;

break;
case "string-value":
return self__.string_value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78225,else__5343__auto__);

}
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78238){
var vec__78239 = p__78238;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78239,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78239,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.token.TokenNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78224){
var self__ = this;
var G__78224__$1 = this;
return (new cljs.core.RecordIter((0),G__78224__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string-value","string-value",1109600561)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1030563333 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78226,other78227){
var self__ = this;
var this78226__$1 = this;
return (((!((other78227 == null)))) && ((((this78226__$1.constructor === other78227.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78226__$1.value,other78227.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78226__$1.string_value,other78227.string_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78226__$1.__extmap,other78227.__extmap)))))))));
}));

(rewrite_cljc.node.token.TokenNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.token.TokenNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_cljc.node.token.TokenNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.token.TokenNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(rewrite_cljc.node.token.TokenNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count(self__.string_value);
}));

(rewrite_cljc.node.token.TokenNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.string_value;
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78225){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78275 = k78225;
var G__78275__$1 = (((G__78275 instanceof cljs.core.Keyword))?G__78275.fqn:null);
switch (G__78275__$1) {
case "value":
case "string-value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78225);

}
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78224){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78276 = cljs.core.keyword_identical_QMARK_;
var expr__78277 = k__5349__auto__;
if(cljs.core.truth_((pred__78276.cljs$core$IFn$_invoke$arity$2 ? pred__78276.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__78277) : pred__78276.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__78277)))){
return (new rewrite_cljc.node.token.TokenNode(G__78224,self__.string_value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__78276.cljs$core$IFn$_invoke$arity$2 ? pred__78276.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__78277) : pred__78276.call(null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__78277)))){
return (new rewrite_cljc.node.token.TokenNode(self__.value,G__78224,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78224),null));
}
}
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78224){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.token.TokenNode(self__.value,self__.string_value,G__78224,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.token.TokenNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.token.TokenNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"string-value","string-value",-1544835208,null)], null);
}));

(rewrite_cljc.node.token.TokenNode.cljs$lang$type = true);

(rewrite_cljc.node.token.TokenNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.token/TokenNode",null,(1),null));
}));

(rewrite_cljc.node.token.TokenNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.token/TokenNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.token/TokenNode.
 */
rewrite_cljc.node.token.__GT_TokenNode = (function rewrite_cljc$node$token$__GT_TokenNode(value,string_value){
return (new rewrite_cljc.node.token.TokenNode(value,string_value,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.token/TokenNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.token.map__GT_TokenNode = (function rewrite_cljc$node$token$map__GT_TokenNode(G__78228){
var extmap__5382__auto__ = (function (){var G__78283 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__78228,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string-value","string-value",1109600561)], 0));
if(cljs.core.record_QMARK_(G__78228)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78283);
} else {
return G__78283;
}
})();
return (new rewrite_cljc.node.token.TokenNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__78228),new cljs.core.Keyword(null,"string-value","string-value",1109600561).cljs$core$IFn$_invoke$arity$1(G__78228),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.token.TokenNode);
/**
 * Create node for an unspecified token of `value`.
 */
rewrite_cljc.node.token.token_node = (function rewrite_cljc$node$token$token_node(var_args){
var G__78288 = arguments.length;
switch (G__78288) {
case 1:
return rewrite_cljc.node.token.token_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.node.token.token_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.node.token.token_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return rewrite_cljc.node.token.token_node.cljs$core$IFn$_invoke$arity$2(value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

(rewrite_cljc.node.token.token_node.cljs$core$IFn$_invoke$arity$2 = (function (value,string_value){
return rewrite_cljc.node.token.__GT_TokenNode(value,string_value);
}));

(rewrite_cljc.node.token.token_node.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_cljc.node.token.js.map
