goog.provide('rewrite_cljc.node.namespaced_map');
rewrite_cljc.node.namespaced_map.assert_namespaced_map_children = (function rewrite_cljc$node$namespaced_map$assert_namespaced_map_children(children){
rewrite_cljc.node.protocols.assert_sexpr_count(children,(2));

var printables = rewrite_cljc.node.protocols.without_whitespace(children);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),rewrite_cljc.node.protocols.tag(cljs.core.first(printables)))){
} else {
throw (new Error(["Assert failed: ",["first form in namespaced map needs to be a token keyword.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.tag(cljs.core.first(printables)))].join(''),"\n","(= :token (node/tag (first printables)))"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),rewrite_cljc.node.protocols.tag(cljs.core.second(printables)))){
return null;
} else {
throw (new Error(["Assert failed: ","second form in namespaced map needs to be map.","\n","(= :map (node/tag (second printables)))"].join('')));
}
});
/**
 * We take inspiration from clojure tools reader by looking at bound *alias-map* to support
 *   ClojureScript. Clojure tools reader also allows this in clojure to override ns-aliases so
 *   we do that too.
 */
rewrite_cljc.node.namespaced_map.namespace_aliases = (function rewrite_cljc$node$namespaced_map$namespace_aliases(){
return cljs.tools.reader._STAR_alias_map_STAR_;
});
rewrite_cljc.node.namespaced_map.resolve_namespace = (function rewrite_cljc$node$namespaced_map$resolve_namespace(nspace_keyword){
var nspace = cljs.core.str.cljs$core$IFn$_invoke$arity$1(nspace_keyword);
var rnspace = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("::",nspace))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(cljs.core._STAR_ns_STAR_)):(cljs.core.truth_(nspace.startsWith("::"))?(function (){var G__92555 = (function (){var or__4253__auto__ = rewrite_cljc.node.namespaced_map.namespace_aliases();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":namespaced-map could not resolve namespace alias for auto resolve ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nspace_keyword)," - for ClojureScript you must bind an *alias-map*"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__92555__$1 = (((G__92555 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__92555,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nspace,(2)))));
var G__92555__$2 = (((G__92555__$1 == null))?null:cljs.core.ns_name(G__92555__$1));
if((G__92555__$2 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__92555__$2);
}
})():cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nspace,(1))));
if(cljs.core.truth_(rnspace)){
} else {
throw (new Error(["Assert failed: ",[":namespaced-map could not resolve namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nspace_keyword)].join(''),"\n","rnspace"].join('')));
}

return rnspace;
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
rewrite_cljc.node.namespaced_map.NamespacedMapNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;

return this$;
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k92558,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__92567 = k92558;
var G__92567__$1 = (((G__92567 instanceof cljs.core.Keyword))?G__92567.fqn:null);
switch (G__92567__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k92558,else__4505__auto__);

}
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__92569){
var vec__92570 = p__92569;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92570,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92570,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-cljc.node.namespaced-map.NamespacedMapNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__92557){
var self__ = this;
var G__92557__$1 = this;
return (new cljs.core.RecordIter((0),G__92557__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_cljc.node.namespaced_map.NamespacedMapNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-2127663761 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this92559,other92560){
var self__ = this;
var this92559__$1 = this;
return (((!((other92560 == null)))) && ((((this92559__$1.constructor === other92560.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92559__$1.children,other92560.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92559__$1.__extmap,other92560.__extmap)))))));
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380);
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__92584 = rewrite_cljc.node.protocols.sexprs(self__.children);
var nspace_keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92584,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92584,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function rewrite_cljc$node$namespaced_map$iter__92588(s__92589){
return (new cljs.core.LazySeq(null,(function (){
var s__92589__$1 = s__92589;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__92589__$1);
if(temp__5720__auto__){
var s__92589__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__92589__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__92589__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__92591 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__92590 = (0);
while(true){
if((i__92590 < size__4651__auto__)){
var vec__92596 = cljs.core._nth(c__4650__auto__,i__92590);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92596,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92596,(1),null);
var k_SINGLEQUOTE_ = (((!((k instanceof cljs.core.Keyword))))?k:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(k),"_"))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)):(cljs.core.truth_(cljs.core.namespace(k))?k:cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.namespaced_map.resolve_namespace(nspace_keyword),cljs.core.name(k))
)));
cljs.core.chunk_append(b__92591,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v], null));

var G__92631 = (i__92590 + (1));
i__92590 = G__92631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__92591),rewrite_cljc$node$namespaced_map$iter__92588(cljs.core.chunk_rest(s__92589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__92591),null);
}
} else {
var vec__92602 = cljs.core.first(s__92589__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92602,(1),null);
var k_SINGLEQUOTE_ = (((!((k instanceof cljs.core.Keyword))))?k:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(k),"_"))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)):(cljs.core.truth_(cljs.core.namespace(k))?k:cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.node.namespaced_map.resolve_namespace(nspace_keyword),cljs.core.name(k))
)));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v], null),rewrite_cljc$node$namespaced_map$iter__92588(cljs.core.rest(s__92589__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(m);
})());
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((1) + rewrite_cljc.node.protocols.sum_lengths(self__.children));
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_cljc.node.namespaced_map.NamespacedMapNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_cljc.node.namespaced_map.assert_namespaced_map_children(children_SINGLEQUOTE_);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k92558){
var self__ = this;
var this__4509__auto____$1 = this;
var G__92605 = k92558;
var G__92605__$1 = (((G__92605 instanceof cljs.core.Keyword))?G__92605.fqn:null);
switch (G__92605__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k92558);

}
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__92557){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__92606 = cljs.core.keyword_identical_QMARK_;
var expr__92607 = k__4511__auto__;
if(cljs.core.truth_((pred__92606.cljs$core$IFn$_invoke$arity$2 ? pred__92606.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__92607) : pred__92606.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__92607)))){
return (new rewrite_cljc.node.namespaced_map.NamespacedMapNode(G__92557,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.namespaced_map.NamespacedMapNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__92557),null));
}
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__92557){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_cljc.node.namespaced_map.NamespacedMapNode(self__.children,G__92557,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.cljs$lang$type = true);

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.namespaced-map/NamespacedMapNode",null,(1),null));
}));

(rewrite_cljc.node.namespaced_map.NamespacedMapNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-cljc.node.namespaced-map/NamespacedMapNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.namespaced-map/NamespacedMapNode.
 */
rewrite_cljc.node.namespaced_map.__GT_NamespacedMapNode = (function rewrite_cljc$node$namespaced_map$__GT_NamespacedMapNode(children){
return (new rewrite_cljc.node.namespaced_map.NamespacedMapNode(children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.namespaced-map/NamespacedMapNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.namespaced_map.map__GT_NamespacedMapNode = (function rewrite_cljc$node$namespaced_map$map__GT_NamespacedMapNode(G__92565){
var extmap__4542__auto__ = (function (){var G__92616 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__92565,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__92565)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__92616);
} else {
return G__92616;
}
})();
return (new rewrite_cljc.node.namespaced_map.NamespacedMapNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__92565),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.namespaced_map.NamespacedMapNode);
/**
 * Create a node representing a namespaced map. There are 3 types of namespaced maps:
 * 
 * 1. prefix namespaced map
 * The prefix is a keyword which specifies to a namespace.
 * Example: `#:my.name.space{:a 1}`
 * 
 * 2. auto-resolve alias namespaced map
 * The prefix is an auto-resolve keyword specifies a namespace alias.
 * Example: `#::ns-alias{:b 3}`
 * 
 * 3. auto-resolve namespaced map
 * The prefix is `::` which specifies the current namespace.
 * Example: `#::{:c 4}`
 * 
 *   First child is the prefix, followed by optional whitespace then map node.
 *   TODO: this still seems hacky to me.
 *   Prefix must be a token-node with a keyword value. Use (keyword ':') for auto-resolve.
 */
rewrite_cljc.node.namespaced_map.namespaced_map_node = (function rewrite_cljc$node$namespaced_map$namespaced_map_node(children){
rewrite_cljc.node.namespaced_map.assert_namespaced_map_children(children);

return rewrite_cljc.node.namespaced_map.__GT_NamespacedMapNode(children);
});

//# sourceMappingURL=rewrite_cljc.node.namespaced_map.js.map
