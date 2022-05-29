goog.provide('rewrite_cljc.node.stringz');
rewrite_cljc.node.stringz.wrap_string = (function rewrite_cljc$node$stringz$wrap_string(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
rewrite_cljc.node.stringz.join_lines = (function rewrite_cljc$node$stringz$join_lines(lines){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines);
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
 * @implements {rewrite_cljc.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_cljc.node.stringz.StringNode = (function (lines,__meta,__extmap,__hash){
this.lines = lines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.stringz.StringNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k78145,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__78152 = k78145;
var G__78152__$1 = (((G__78152 instanceof cljs.core.Keyword))?G__78152.fqn:null);
switch (G__78152__$1) {
case "lines":
return self__.lines;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k78145,else__5343__auto__);

}
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__78154){
var vec__78156 = p__78154;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78156,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78156,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#rewrite-cljc.node.stringz.StringNode{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lines","lines",-700165781),self__.lines],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__78144){
var self__ = this;
var G__78144__$1 = this;
return (new cljs.core.RecordIter((0),G__78144__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new rewrite_cljc.node.stringz.StringNode(self__.lines,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1500543875 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this78146,other78147){
var self__ = this;
var this78146__$1 = this;
return (((!((other78147 == null)))) && ((((this78146__$1.constructor === other78147.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78146__$1.lines,other78147.lines)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this78146__$1.__extmap,other78147.__extmap)))))));
}));

(rewrite_cljc.node.stringz.StringNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.stringz.StringNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.next(self__.lines)){
return new cljs.core.Keyword(null,"multi-line","multi-line",240640676);
} else {
return new cljs.core.Keyword(null,"token","token",-1211463215);
}
}));

(rewrite_cljc.node.stringz.StringNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.stringz.StringNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_cljc.node.stringz.join_lines(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.edn.read_string,rewrite_cljc.node.stringz.wrap_string),self__.lines));
}));

(rewrite_cljc.node.stringz.StringNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((2) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.lines)));
}));

(rewrite_cljc.node.stringz.StringNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_cljc.node.stringz.wrap_string(rewrite_cljc.node.stringz.join_lines(self__.lines));
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",-700165781),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new rewrite_cljc.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k78145){
var self__ = this;
var this__5347__auto____$1 = this;
var G__78174 = k78145;
var G__78174__$1 = (((G__78174 instanceof cljs.core.Keyword))?G__78174.fqn:null);
switch (G__78174__$1) {
case "lines":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k78145);

}
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__78144){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__78176 = cljs.core.keyword_identical_QMARK_;
var expr__78177 = k__5349__auto__;
if(cljs.core.truth_((pred__78176.cljs$core$IFn$_invoke$arity$2 ? pred__78176.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lines","lines",-700165781),expr__78177) : pred__78176.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781),expr__78177)))){
return (new rewrite_cljc.node.stringz.StringNode(G__78144,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__78144),null));
}
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"lines","lines",-700165781),self__.lines,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__78144){
var self__ = this;
var this__5339__auto____$1 = this;
return (new rewrite_cljc.node.stringz.StringNode(self__.lines,G__78144,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.stringz.StringNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(rewrite_cljc.node.stringz.StringNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lines","lines",940365746,null)], null);
}));

(rewrite_cljc.node.stringz.StringNode.cljs$lang$type = true);

(rewrite_cljc.node.stringz.StringNode.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.stringz/StringNode",null,(1),null));
}));

(rewrite_cljc.node.stringz.StringNode.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"rewrite-cljc.node.stringz/StringNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.stringz/StringNode.
 */
rewrite_cljc.node.stringz.__GT_StringNode = (function rewrite_cljc$node$stringz$__GT_StringNode(lines){
return (new rewrite_cljc.node.stringz.StringNode(lines,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.stringz/StringNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.stringz.map__GT_StringNode = (function rewrite_cljc$node$stringz$map__GT_StringNode(G__78149){
var extmap__5382__auto__ = (function (){var G__78184 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__78149,new cljs.core.Keyword(null,"lines","lines",-700165781));
if(cljs.core.record_QMARK_(G__78149)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__78184);
} else {
return G__78184;
}
})();
return (new rewrite_cljc.node.stringz.StringNode(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(G__78149),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.stringz.StringNode);
/**
 * Create node representing a string value where `lines`
 * can be a sequence of strings or a single string.
 */
rewrite_cljc.node.stringz.string_node = (function rewrite_cljc$node$stringz$string_node(lines){
if(typeof lines === 'string'){
return rewrite_cljc.node.stringz.__GT_StringNode(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lines], null));
} else {
return rewrite_cljc.node.stringz.__GT_StringNode(lines);
}
});

//# sourceMappingURL=rewrite_cljc.node.stringz.js.map
