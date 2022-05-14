goog.provide('rewrite_cljc.node.reader_macro');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_cljc.node.protocols.InnerNode}
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
rewrite_cljc.node.reader_macro.ReaderNode = (function (tag,prefix,suffix,sexpr_fn,sexpr_count,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.suffix = suffix;
this.sexpr_fn = sexpr_fn;
this.sexpr_count = sexpr_count;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.reader_macro.ReaderNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k92475,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__92481 = k92475;
var G__92481__$1 = (((G__92481 instanceof cljs.core.Keyword))?G__92481.fqn:null);
switch (G__92481__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "suffix":
return self__.suffix;

break;
case "sexpr-fn":
return self__.sexpr_fn;

break;
case "sexpr-count":
return self__.sexpr_count;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k92475,else__4505__auto__);

}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__92482){
var vec__92483 = p__92482;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92483,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92483,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-cljc.node.reader-macro.ReaderNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),self__.sexpr_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),self__.sexpr_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__92474){
var self__ = this;
var G__92474__$1 = this;
return (new cljs.core.RecordIter((0),G__92474__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1059008633 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this92476,other92477){
var self__ = this;
var this92476__$1 = this;
return (((!((other92477 == null)))) && ((((this92476__$1.constructor === other92477.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92476__$1.tag,other92477.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92476__$1.prefix,other92477.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92476__$1.suffix,other92477.suffix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92476__$1.sexpr_fn,other92477.sexpr_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92476__$1.sexpr_count,other92477.sexpr_count)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92476__$1.children,other92477.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92476__$1.__extmap,other92477.__extmap)))))))))))))))));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not(self__.sexpr_fn);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.sexpr_fn)){
var G__92490 = rewrite_cljc.node.protocols.sexprs(self__.children);
return (self__.sexpr_fn.cljs$core$IFn$_invoke$arity$1 ? self__.sexpr_fn.cljs$core$IFn$_invoke$arity$1(G__92490) : self__.sexpr_fn.call(null,G__92490));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((rewrite_cljc.node.protocols.sum_lengths(self__.children) + (1)) + cljs.core.count(self__.prefix)) + cljs.core.count(self__.suffix));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.suffix)].join('');
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.sexpr_count)){
rewrite_cljc.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,self__.sexpr_count);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.count(self__.prefix) + (1));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k92475){
var self__ = this;
var this__4509__auto____$1 = this;
var G__92500 = k92475;
var G__92500__$1 = (((G__92500 instanceof cljs.core.Keyword))?G__92500.fqn:null);
switch (G__92500__$1) {
case "tag":
case "prefix":
case "suffix":
case "sexpr-fn":
case "sexpr-count":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k92475);

}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__92474){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__92502 = cljs.core.keyword_identical_QMARK_;
var expr__92503 = k__4511__auto__;
if(cljs.core.truth_((pred__92502.cljs$core$IFn$_invoke$arity$2 ? pred__92502.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__92503) : pred__92502.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__92503)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(G__92474,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__92502.cljs$core$IFn$_invoke$arity$2 ? pred__92502.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__92503) : pred__92502.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__92503)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,G__92474,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__92502.cljs$core$IFn$_invoke$arity$2 ? pred__92502.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__92503) : pred__92502.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__92503)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,G__92474,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__92502.cljs$core$IFn$_invoke$arity$2 ? pred__92502.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),expr__92503) : pred__92502.call(null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),expr__92503)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,G__92474,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__92502.cljs$core$IFn$_invoke$arity$2 ? pred__92502.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),expr__92503) : pred__92502.call(null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),expr__92503)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,G__92474,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__92502.cljs$core$IFn$_invoke$arity$2 ? pred__92502.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__92503) : pred__92502.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__92503)))){
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,G__92474,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__92474),null));
}
}
}
}
}
}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),self__.sexpr_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),self__.sexpr_count,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__92474){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,G__92474,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_cljc.node.reader_macro.ReaderNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"sexpr-fn","sexpr-fn",425590113,null),new cljs.core.Symbol(null,"sexpr-count","sexpr-count",-1763900812,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.reader_macro.ReaderNode.cljs$lang$type = true);

(rewrite_cljc.node.reader_macro.ReaderNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.reader-macro/ReaderNode",null,(1),null));
}));

(rewrite_cljc.node.reader_macro.ReaderNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-cljc.node.reader-macro/ReaderNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.reader-macro/ReaderNode.
 */
rewrite_cljc.node.reader_macro.__GT_ReaderNode = (function rewrite_cljc$node$reader_macro$__GT_ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children){
return (new rewrite_cljc.node.reader_macro.ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.reader-macro/ReaderNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.reader_macro.map__GT_ReaderNode = (function rewrite_cljc$node$reader_macro$map__GT_ReaderNode(G__92478){
var extmap__4542__auto__ = (function (){var G__92513 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__92478,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__92478)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__92513);
} else {
return G__92513;
}
})();
return (new rewrite_cljc.node.reader_macro.ReaderNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__92478),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__92478),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__92478),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414).cljs$core$IFn$_invoke$arity$1(G__92478),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957).cljs$core$IFn$_invoke$arity$1(G__92478),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__92478),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_cljc.node.protocols.InnerNode}
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
rewrite_cljc.node.reader_macro.ReaderMacroNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k92517,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__92537 = k92517;
var G__92537__$1 = (((G__92537 instanceof cljs.core.Keyword))?G__92537.fqn:null);
switch (G__92537__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k92517,else__4505__auto__);

}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__92538){
var vec__92539 = p__92538;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92539,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92539,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-cljc.node.reader-macro.ReaderMacroNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__92516){
var self__ = this;
var G__92516__$1 = this;
return (new cljs.core.RecordIter((0),G__92516__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1341303833 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this92518,other92519){
var self__ = this;
var this92518__$1 = this;
return (((!((other92519 == null)))) && ((((this92518__$1.constructor === other92519.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92518__$1.children,other92519.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92518__$1.__extmap,other92519.__extmap)))))));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),(new cljs.core.List(null,this$__$1.rewrite_cljc$node$protocols$Node$string$arity$1(null),null,(1),null)),(2),null));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (rewrite_cljc.node.protocols.sum_lengths(self__.children) + (1));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_cljc.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(2));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k92517){
var self__ = this;
var this__4509__auto____$1 = this;
var G__92551 = k92517;
var G__92551__$1 = (((G__92551 instanceof cljs.core.Keyword))?G__92551.fqn:null);
switch (G__92551__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k92517);

}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__92516){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__92552 = cljs.core.keyword_identical_QMARK_;
var expr__92553 = k__4511__auto__;
if(cljs.core.truth_((pred__92552.cljs$core$IFn$_invoke$arity$2 ? pred__92552.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__92553) : pred__92552.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__92553)))){
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(G__92516,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__92516),null));
}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__92516){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(self__.children,G__92516,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.cljs$lang$type = true);

(rewrite_cljc.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.reader-macro/ReaderMacroNode",null,(1),null));
}));

(rewrite_cljc.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-cljc.node.reader-macro/ReaderMacroNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.reader-macro/ReaderMacroNode.
 */
rewrite_cljc.node.reader_macro.__GT_ReaderMacroNode = (function rewrite_cljc$node$reader_macro$__GT_ReaderMacroNode(children){
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.reader-macro/ReaderMacroNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.reader_macro.map__GT_ReaderMacroNode = (function rewrite_cljc$node$reader_macro$map__GT_ReaderMacroNode(G__92525){
var extmap__4542__auto__ = (function (){var G__92556 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__92525,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__92525)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__92556);
} else {
return G__92556;
}
})();
return (new rewrite_cljc.node.reader_macro.ReaderMacroNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__92525),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {rewrite_cljc.node.protocols.InnerNode}
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
rewrite_cljc.node.reader_macro.DerefNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.reader_macro.DerefNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k92562,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__92568 = k92562;
var G__92568__$1 = (((G__92568 instanceof cljs.core.Keyword))?G__92568.fqn:null);
switch (G__92568__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k92562,else__4505__auto__);

}
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__92573){
var vec__92574 = p__92573;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92574,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92574,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-cljc.node.reader-macro.DerefNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__92561){
var self__ = this;
var G__92561__$1 = this;
return (new cljs.core.RecordIter((0),G__92561__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.DerefNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1221493761 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this92563,other92564){
var self__ = this;
var this92563__$1 = this;
return (((!((other92564 == null)))) && ((((this92563__$1.constructor === other92564.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92563__$1.children,other92564.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92563__$1.__extmap,other92564.__extmap)))))));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"deref","deref",-145586795);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"deref","deref",1494944732,null),rewrite_cljc.node.protocols.sexprs(self__.children));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (rewrite_cljc.node.protocols.sum_lengths(self__.children) + (1));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_cljc.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_cljc.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(1));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k92562){
var self__ = this;
var this__4509__auto____$1 = this;
var G__92615 = k92562;
var G__92615__$1 = (((G__92615 instanceof cljs.core.Keyword))?G__92615.fqn:null);
switch (G__92615__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k92562);

}
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__92561){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__92617 = cljs.core.keyword_identical_QMARK_;
var expr__92618 = k__4511__auto__;
if(cljs.core.truth_((pred__92617.cljs$core$IFn$_invoke$arity$2 ? pred__92617.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__92618) : pred__92617.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__92618)))){
return (new rewrite_cljc.node.reader_macro.DerefNode(G__92561,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__92561),null));
}
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__92561){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_cljc.node.reader_macro.DerefNode(self__.children,G__92561,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.reader_macro.DerefNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_cljc.node.reader_macro.DerefNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.reader_macro.DerefNode.cljs$lang$type = true);

(rewrite_cljc.node.reader_macro.DerefNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.reader-macro/DerefNode",null,(1),null));
}));

(rewrite_cljc.node.reader_macro.DerefNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-cljc.node.reader-macro/DerefNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.reader-macro/DerefNode.
 */
rewrite_cljc.node.reader_macro.__GT_DerefNode = (function rewrite_cljc$node$reader_macro$__GT_DerefNode(children){
return (new rewrite_cljc.node.reader_macro.DerefNode(children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.reader-macro/DerefNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.reader_macro.map__GT_DerefNode = (function rewrite_cljc$node$reader_macro$map__GT_DerefNode(G__92566){
var extmap__4542__auto__ = (function (){var G__92623 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__92566,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__92566)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__92623);
} else {
return G__92623;
}
})();
return (new rewrite_cljc.node.reader_macro.DerefNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__92566),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.reader_macro.ReaderNode);
rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.reader_macro.ReaderMacroNode);
rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.reader_macro.DerefNode);
rewrite_cljc.node.reader_macro.__GT_node = (function rewrite_cljc$node$reader_macro$__GT_node(tag,prefix,suffix,sexpr_fn,sexpr_count,children){
if(cljs.core.truth_(sexpr_count)){
rewrite_cljc.node.protocols.assert_sexpr_count(children,sexpr_count);
} else {
}

return rewrite_cljc.node.reader_macro.__GT_ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children);
});
/**
 * Create node representing a var
 * where `children` is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.reader_macro.var_node = (function rewrite_cljc$node$reader_macro$var_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_cljc.node.reader_macro.__GT_node(new cljs.core.Keyword(null,"var","var",-769682797),"'","",((function (children){
return (function (p1__92625_SHARP_){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),p1__92625_SHARP_);
});})(children))
,(1),children);
} else {
var G__92667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__92667;
continue;
}
break;
}
});
/**
 * Create node representing an inline evaluation (i.e. `#=...`)
 * where `children` is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.reader_macro.eval_node = (function rewrite_cljc$node$reader_macro$eval_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_cljc.node.reader_macro.__GT_node(new cljs.core.Keyword(null,"eval","eval",-1103567905),"=","",((function (children){
return (function (p1__92628_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"eval","eval",536963622,null),(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),p1__92628_SHARP_),null,(1),null)),(2),null));
});})(children))
,(1),children);
} else {
var G__92672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__92672;
continue;
}
break;
}
});
/**
 * Create node representing a reader macro (i.e. `#... ...`) with `children`. 
 */
rewrite_cljc.node.reader_macro.reader_macro_node = (function rewrite_cljc$node$reader_macro$reader_macro_node(var_args){
var G__92630 = arguments.length;
switch (G__92630) {
case 1:
return rewrite_cljc.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_cljc.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_cljc.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
return rewrite_cljc.node.reader_macro.__GT_ReaderMacroNode(children);
}));

(rewrite_cljc.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$2 = (function (macro_node,form_node){
return rewrite_cljc.node.reader_macro.__GT_ReaderMacroNode(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [macro_node,rewrite_cljc.node.whitespace.spaces((1)),form_node], null));
}));

(rewrite_cljc.node.reader_macro.reader_macro_node.cljs$lang$maxFixedArity = 2);

/**
 * Create node representing the dereferencing of a form (i.e. `@...`)
 * where `children` is either a sequence of nodes or a single node.
 */
rewrite_cljc.node.reader_macro.deref_node = (function rewrite_cljc$node$reader_macro$deref_node(children){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_cljc.node.reader_macro.__GT_DerefNode(children);
} else {
return rewrite_cljc.node.reader_macro.__GT_DerefNode(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null));
}
});

//# sourceMappingURL=rewrite_cljc.node.reader_macro.js.map
