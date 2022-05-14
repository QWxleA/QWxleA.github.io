goog.provide('rewrite_cljc.node.regex');

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
rewrite_cljc.node.regex.RegexNode = (function (pattern,__meta,__extmap,__hash){
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k92579,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__92587 = k92579;
var G__92587__$1 = (((G__92587 instanceof cljs.core.Keyword))?G__92587.fqn:null);
switch (G__92587__$1) {
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k92579,else__4505__auto__);

}
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__92592){
var vec__92593 = p__92592;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92593,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92593,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-cljc.node.regex.RegexNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__92578){
var self__ = this;
var G__92578__$1 = this;
return (new cljs.core.RecordIter((0),G__92578__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_cljc.node.regex.RegexNode(self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1889556795 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this92580,other92581){
var self__ = this;
var this92580__$1 = this;
return (((!((other92581 == null)))) && ((((this92580__$1.constructor === other92581.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92580__$1.pattern,other92581.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92580__$1.__extmap,other92581.__extmap)))))));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"regex","regex",939488856);
}));

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),(new cljs.core.List(null,self__.pattern,null,(1),null)),(2),null));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(rewrite_cljc.node.regex.RegexNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.pattern),"\""].join('');
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_cljc.node.regex.RegexNode(self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k92579){
var self__ = this;
var this__4509__auto____$1 = this;
var G__92610 = k92579;
var G__92610__$1 = (((G__92610 instanceof cljs.core.Keyword))?G__92610.fqn:null);
switch (G__92610__$1) {
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k92579);

}
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__92578){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__92611 = cljs.core.keyword_identical_QMARK_;
var expr__92612 = k__4511__auto__;
if(cljs.core.truth_((pred__92611.cljs$core$IFn$_invoke$arity$2 ? pred__92611.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__92612) : pred__92611.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__92612)))){
return (new rewrite_cljc.node.regex.RegexNode(G__92578,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.regex.RegexNode(self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__92578),null));
}
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__92578){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_cljc.node.regex.RegexNode(self__.pattern,G__92578,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.regex.RegexNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_cljc.node.regex.RegexNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(rewrite_cljc.node.regex.RegexNode.cljs$lang$type = true);

(rewrite_cljc.node.regex.RegexNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.regex/RegexNode",null,(1),null));
}));

(rewrite_cljc.node.regex.RegexNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-cljc.node.regex/RegexNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.regex/RegexNode.
 */
rewrite_cljc.node.regex.__GT_RegexNode = (function rewrite_cljc$node$regex$__GT_RegexNode(pattern){
return (new rewrite_cljc.node.regex.RegexNode(pattern,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.regex/RegexNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.regex.map__GT_RegexNode = (function rewrite_cljc$node$regex$map__GT_RegexNode(G__92582){
var extmap__4542__auto__ = (function (){var G__92620 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__92582,new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.record_QMARK_(G__92582)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__92620);
} else {
return G__92620;
}
})();
return (new rewrite_cljc.node.regex.RegexNode(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__92582),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.regex.RegexNode);
/**
 * Create node representing a regex with `pattern-string`
 */
rewrite_cljc.node.regex.regex_node = (function rewrite_cljc$node$regex$regex_node(pattern_string){
return rewrite_cljc.node.regex.__GT_RegexNode(pattern_string);
});

//# sourceMappingURL=rewrite_cljc.node.regex.js.map
