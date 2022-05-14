goog.provide('rewrite_cljc.node.fn');
/**
 * Construct function form.
 */
rewrite_cljc.node.fn.construct_fn = (function rewrite_cljc$node$fn$construct_fn(syms,vararg,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(syms,(cljs.core.truth_(vararg)?(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),(new cljs.core.List(null,vararg,null,(1),null)),(2),null)):null))),(new cljs.core.List(null,body,null,(1),null)),(2),null)),(3),null));
});
/**
 * Get index based on the substring following the parameter's `%`.
 * Zero means vararg.
 */
rewrite_cljc.node.fn.sym_index = (function rewrite_cljc$node$fn$sym_index(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"&")){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"")){
return (1);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,n))){
return rewrite_cljc.interop.str__GT_int(n);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("arg literal must be %, %& or %integer.",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * If symbol starting with `%`, convert to respective gensym.
 */
rewrite_cljc.node.fn.symbol__GT_gensym = (function rewrite_cljc$node$fn$symbol__GT_gensym(sym_seq,vararg_QMARK_,max_n,sym){
if((sym instanceof cljs.core.Symbol)){
var nm = cljs.core.name(sym);
if(clojure.string.starts_with_QMARK_(nm,"%")){
var i = rewrite_cljc.node.fn.sym_index(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,(1)));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))) && (cljs.core.not(cljs.core.deref(vararg_QMARK_))))){
cljs.core.reset_BANG_(vararg_QMARK_,true);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(max_n,cljs.core.max,i);

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sym_seq,i);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Walk the form and create an expand function form.
 */
rewrite_cljc.node.fn.fn_walk = (function rewrite_cljc$node$fn$fn_walk(form){
var syms = (function (){var iter__4652__auto__ = (function rewrite_cljc$node$fn$fn_walk_$_iter__92506(s__92507){
return (new cljs.core.LazySeq(null,(function (){
var s__92507__$1 = s__92507;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__92507__$1);
if(temp__5720__auto__){
var s__92507__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__92507__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__92507__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__92509 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__92508 = (0);
while(true){
if((i__92508 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__92508);
var base = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(base));
cljs.core.chunk_append(b__92509,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([s,"#"].join('')));

var G__92609 = (i__92508 + (1));
i__92508 = G__92609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__92509),rewrite_cljc$node$fn$fn_walk_$_iter__92506(cljs.core.chunk_rest(s__92507__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__92509),null);
}
} else {
var i = cljs.core.first(s__92507__$2);
var base = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(base));
return cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([s,"#"].join('')),rewrite_cljc$node$fn$fn_walk_$_iter__92506(cljs.core.rest(s__92507__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$0());
})();
var vararg_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var max_n = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var body = clojure.walk.prewalk((function (p1__92505_SHARP_){
var or__4253__auto__ = rewrite_cljc.node.fn.symbol__GT_gensym(syms,vararg_QMARK_,max_n,p1__92505_SHARP_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return p1__92505_SHARP_;
}
}),form);
return rewrite_cljc.node.fn.construct_fn(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(max_n),cljs.core.rest(syms)),(cljs.core.truth_(cljs.core.deref(vararg_QMARK_))?cljs.core.first(syms):null),body);
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
rewrite_cljc.node.fn.FnNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_cljc.node.fn.FnNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_cljc$node$protocols$Node$string$arity$1(null);
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k92522,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__92528 = k92522;
var G__92528__$1 = (((G__92528 instanceof cljs.core.Keyword))?G__92528.fqn:null);
switch (G__92528__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k92522,else__4505__auto__);

}
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__92533){
var vec__92534 = p__92533;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92534,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92534,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#rewrite-cljc.node.fn.FnNode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__92521){
var self__ = this;
var G__92521__$1 = this;
return (new cljs.core.RecordIter((0),G__92521__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new rewrite_cljc.node.fn.FnNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1601396895 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this92523,other92524){
var self__ = this;
var this92523__$1 = this;
return (((!((other92524 == null)))) && ((((this92523__$1.constructor === other92524.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92523__$1.children,other92524.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this92523__$1.__extmap,other92524.__extmap)))))));
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_cljc.node.fn.fn_walk(rewrite_cljc.node.protocols.sexprs(self__.children));
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((3) + rewrite_cljc.node.protocols.sum_lengths(self__.children));
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_cljc.node.protocols.concat_strings(self__.children)),")"].join('');
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new rewrite_cljc.node.fn.FnNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_cljc.node.fn.FnNode.prototype.rewrite_cljc$node$protocols$InnerNode$leader_length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k92522){
var self__ = this;
var this__4509__auto____$1 = this;
var G__92544 = k92522;
var G__92544__$1 = (((G__92544 instanceof cljs.core.Keyword))?G__92544.fqn:null);
switch (G__92544__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k92522);

}
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__92521){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__92545 = cljs.core.keyword_identical_QMARK_;
var expr__92546 = k__4511__auto__;
if(cljs.core.truth_((pred__92545.cljs$core$IFn$_invoke$arity$2 ? pred__92545.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__92546) : pred__92545.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__92546)))){
return (new rewrite_cljc.node.fn.FnNode(G__92521,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_cljc.node.fn.FnNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__92521),null));
}
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__92521){
var self__ = this;
var this__4501__auto____$1 = this;
return (new rewrite_cljc.node.fn.FnNode(self__.children,G__92521,self__.__extmap,self__.__hash));
}));

(rewrite_cljc.node.fn.FnNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(rewrite_cljc.node.fn.FnNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_cljc.node.fn.FnNode.cljs$lang$type = true);

(rewrite_cljc.node.fn.FnNode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"rewrite-cljc.node.fn/FnNode",null,(1),null));
}));

(rewrite_cljc.node.fn.FnNode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"rewrite-cljc.node.fn/FnNode");
}));

/**
 * Positional factory function for rewrite-cljc.node.fn/FnNode.
 */
rewrite_cljc.node.fn.__GT_FnNode = (function rewrite_cljc$node$fn$__GT_FnNode(children){
return (new rewrite_cljc.node.fn.FnNode(children,null,null,null));
});

/**
 * Factory function for rewrite-cljc.node.fn/FnNode, taking a map of keywords to field values.
 */
rewrite_cljc.node.fn.map__GT_FnNode = (function rewrite_cljc$node$fn$map__GT_FnNode(G__92526){
var extmap__4542__auto__ = (function (){var G__92577 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__92526,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__92526)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__92577);
} else {
return G__92577;
}
})();
return (new rewrite_cljc.node.fn.FnNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__92526),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

rewrite_cljc.node.protocols.make_printable_BANG_(rewrite_cljc.node.fn.FnNode);
/**
 * Create node representing an anonymous function with `children`.
 */
rewrite_cljc.node.fn.fn_node = (function rewrite_cljc$node$fn$fn_node(children){
return rewrite_cljc.node.fn.__GT_FnNode(children);
});

//# sourceMappingURL=rewrite_cljc.node.fn.js.map
