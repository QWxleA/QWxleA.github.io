goog.provide('rewrite_cljc.node.comment');

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
rewrite_cljc.node.comment.CommentNode = (function (s,__meta,__extmap,__hash){
this.s = s;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.comment.CommentNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k91622,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__91629 = k91622;
var G__91629__$1 = (((G__91629 instanceof cljs.core.Keyword))?G__91629.fqn:null);
switch (G__91629__$1) {
case "s":
return self__.s;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k91622,else__4505__auto__);

}
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__91631){
var vec__91632 = p__91631;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91632,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91632,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-cljc.node.comment.CommentNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__91621){
var self__ = this;
var G__91621__$1 = this;
return (new cljs.core.RecordIter((0),G__91621__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_cljc.node.comment.CommentNode(self__.s,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (902440411 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this91623,other91624){
var self__ = this;
var this91623__$1 = this;
return (((!((other91624 == null)))) && ((((this91623__$1.constructor === other91624.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91623__$1.s,other91624.s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91623__$1.__extmap,other91624.__extmap)))))));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"comment","comment",532206069);
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((1) + cljs.core.count(self__.s));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [";",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.s)].join('');
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_cljc.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k91622){
var self__ = this;
var this__4509__auto____$1 = this;
var G__91642 = k91622;
var G__91642__$1 = (((G__91642 instanceof cljs.core.Keyword))?G__91642.fqn:null);
switch (G__91642__$1) {
case "s":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k91622);

}
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__91621){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__91643 = cljs.core.keyword_identical_QMARK_;
var expr__91644 = k__4511__auto__;
if(cljs.core.truth_((pred__91643.cljs$core$IFn$_invoke$arity$2 ? pred__91643.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),expr__91644) : pred__91643.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__91644)))){
return (new rewrite_cljc.node.comment.CommentNode(G__91621,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.comment.CommentNode(self__.s,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__91621),null));
}
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__91621){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_cljc.node.comment.CommentNode(self__.s,G__91621,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.comment.CommentNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_cljc.node.comment.CommentNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
}));

(rewrite_cljc.node.comment.CommentNode.cljs$lang$type = true);

(rewrite_cljc.node.comment.CommentNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.comment/CommentNode",null,(1),null));
}));

(rewrite_cljc.node.comment.CommentNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-cljc.node.comment/CommentNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.comment/CommentNode.
 */
rewrite_cljc.node.comment.__GT_CommentNode = (function rewrite_cljc$node$comment$__GT_CommentNode(s){
return (new rewrite_cljc.node.comment.CommentNode(s,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.comment/CommentNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.comment.map__GT_CommentNode = (function rewrite_cljc$node$comment$map__GT_CommentNode(G__91626){
var extmap__4542__auto__ = (function (){var G__91646 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__91626,new cljs.core.Keyword(null,"s","s",1705939918));
if(cljs.core.record_QMARK_(G__91626)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__91646);
} else {
return G__91646;
}
})();
return (new rewrite_cljc.node.comment.CommentNode(new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__91626),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.comment.CommentNode);
/**
 * Create node representing a comment with text `s`.
 */
rewrite_cljc.node.comment.comment_node = (function rewrite_cljc$node$comment$comment_node(s){
if(cljs.core.truth_(cljs.core.re_matches(/[^\r\n]*[\r\n]?/,s))){
} else {
throw (new Error("Assert failed: (re-matches #\"[^\\r\\n]*[\\r\\n]?\" s)"));
}

return rewrite_cljc.node.comment.__GT_CommentNode(s);
});
/**
 * Returns true if `node` is a comment.
 */
rewrite_cljc.node.comment.comment_QMARK_ = (function rewrite_cljc$node$comment$comment_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.protocols.tag(node),new cljs.core.Keyword(null,"comment","comment",532206069));
});

//# sourceMappingURL=rewrite_cljc.node.comment.js.map
