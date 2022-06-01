goog.provide('frontend.modules.outliner.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.modules.outliner.core","block-map","frontend.modules.outliner.core/block-map",1235967790),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49920){
return cljs.core.map_QMARK_(G__49920);
}),(function (G__49920){
return cljs.core.contains_QMARK_(G__49920,new cljs.core.Keyword("db","id","db/id",-1388397098));
}),(function (G__49920){
return cljs.core.contains_QMARK_(G__49920,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
})], null),(function (G__49920){
return ((cljs.core.map_QMARK_(G__49920)) && (((cljs.core.contains_QMARK_(G__49920,new cljs.core.Keyword("db","id","db/id",-1388397098))) && (cljs.core.contains_QMARK_(G__49920,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552))))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("db","id","db/id",-1388397098))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.modules.outliner.core","block-map-or-entity","frontend.modules.outliner.core/block-map-or-entity",1526834445),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Symbol("datascript.impl.entity","entity?","datascript.impl.entity/entity?",1686472137,null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("frontend.modules.outliner.core","block-map","frontend.modules.outliner.core/block-map",1235967790)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("datascript.impl.entity","entity?","datascript.impl.entity/entity?",1686472137,null),new cljs.core.Keyword("frontend.modules.outliner.core","block-map","frontend.modules.outliner.core/block-map",1235967790)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.impl.entity.entity_QMARK_,new cljs.core.Keyword("frontend.modules.outliner.core","block-map","frontend.modules.outliner.core/block-map",1235967790)], null),null));

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
frontend.modules.outliner.core.Block = (function (data,__meta,__extmap,__hash){
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.modules.outliner.core.Block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k49922,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__49926 = k49922;
var G__49926__$1 = (((G__49926 instanceof cljs.core.Keyword))?G__49926.fqn:null);
switch (G__49926__$1) {
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49922,else__5343__auto__);

}
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__49927){
var vec__49928 = p__49927;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49928,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49928,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.modules.outliner.core.Block{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49921){
var self__ = this;
var G__49921__$1 = this;
return (new cljs.core.RecordIter((0),G__49921__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.modules.outliner.core.Block(self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1889080954 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49923,other49924){
var self__ = this;
var this49923__$1 = this;
return (((!((other49924 == null)))) && ((((this49923__$1.constructor === other49924.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49923__$1.data,other49924.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49923__$1.__extmap,other49924.__extmap)))))));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.modules.outliner.core.Block(self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k49922){
var self__ = this;
var this__5347__auto____$1 = this;
var G__49931 = k49922;
var G__49931__$1 = (((G__49931 instanceof cljs.core.Keyword))?G__49931.fqn:null);
switch (G__49931__$1) {
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49922);

}
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__49921){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__49936 = cljs.core.keyword_identical_QMARK_;
var expr__49937 = k__5349__auto__;
if(cljs.core.truth_((pred__49936.cljs$core$IFn$_invoke$arity$2 ? pred__49936.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__49937) : pred__49936.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__49937)))){
return (new frontend.modules.outliner.core.Block(G__49921,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.modules.outliner.core.Block(self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__49921),null));
}
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__49921){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.modules.outliner.core.Block(self__.data,G__49921,self__.__extmap,self__.__hash));
}));

(frontend.modules.outliner.core.Block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.modules.outliner.core.Block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(frontend.modules.outliner.core.Block.cljs$lang$type = true);

(frontend.modules.outliner.core.Block.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.modules.outliner.core/Block",null,(1),null));
}));

(frontend.modules.outliner.core.Block.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.modules.outliner.core/Block");
}));

/**
 * Positional factory function for frontend.modules.outliner.core/Block.
 */
frontend.modules.outliner.core.__GT_Block = (function frontend$modules$outliner$core$__GT_Block(data){
return (new frontend.modules.outliner.core.Block(data,null,null,null));
});

/**
 * Factory function for frontend.modules.outliner.core/Block, taking a map of keywords to field values.
 */
frontend.modules.outliner.core.map__GT_Block = (function frontend$modules$outliner$core$map__GT_Block(G__49925){
var extmap__5382__auto__ = (function (){var G__49945 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49925,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.record_QMARK_(G__49925)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49945);
} else {
return G__49945;
}
})();
return (new frontend.modules.outliner.core.Block(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__49925),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

frontend.modules.outliner.core.block = (function frontend$modules$outliner$core$block(m){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("block data must be map, got: %s %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(m),m], 0))),"\n","(map? m)"].join('')));
}

return frontend.modules.outliner.core.__GT_Block(m);
});
frontend.modules.outliner.core.get_data = (function frontend$modules$outliner$core$get_data(block){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(block);
});
frontend.modules.outliner.core.get_block_by_id = (function frontend$modules$outliner$core$get_block_by_id(id){
var c = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(false);
var r = frontend.db.outliner.get_by_id(c,frontend.modules.outliner.utils.__GT_block_lookup_ref(id));
if(cljs.core.truth_(r)){
return frontend.modules.outliner.core.__GT_Block(r);
} else {
return null;
}
});
frontend.modules.outliner.core.get_by_parent__AMPERSAND__left = (function frontend$modules$outliner$core$get_by_parent__AMPERSAND__left(parent_uuid,left_uuid){
var parent_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__49952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),parent_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49952) : frontend.db.entity.call(null,G__49952));
})());
var left_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__49953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),left_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49953) : frontend.db.entity.call(null,G__49953));
})());
var G__49954 = frontend.db.model.get_by_parent__AMPERSAND__left(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0(),parent_id,left_id);
var G__49954__$1 = (((G__49954 == null))?null:new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__49954));
var G__49954__$2 = (((G__49954__$1 == null))?null:(frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__49954__$1) : frontend.db.pull.call(null,G__49954__$1)));
if((G__49954__$2 == null)){
return null;
} else {
return frontend.modules.outliner.core.block(G__49954__$2);
}
});
frontend.modules.outliner.core.block_with_timestamps = (function frontend$modules$outliner$core$block_with_timestamps(block){
var updated_at = frontend.util.time_ms();
var block__$1 = (function (){var G__49955 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),updated_at);
if((new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(block) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49955,new cljs.core.Keyword("block","created-at","block/created-at",1440015),updated_at);
} else {
return G__49955;
}
})();
return block__$1;
});
frontend.modules.outliner.core.remove_orphaned_page_refs_BANG_ = (function frontend$modules$outliner$core$remove_orphaned_page_refs_BANG_(db_id,txs_state,old_refs,new_refs){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_refs,new_refs)){
var new_refs__$1 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
var or__5043__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__49981 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__49981) : frontend.db.entity.call(null,G__49981));
})());
} else {
return and__5041__auto__;
}
}
}),new_refs));
var old_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.contains_QMARK_(new_refs__$1,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(e));
}),frontend.db.model.get_entities_by_ids.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),old_refs)))));
var orphaned_pages = ((cljs.core.seq(old_pages))?frontend.db.model.get_orphaned_pages(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages","pages",-285406513),old_pages,new cljs.core.Keyword(null,"empty-ref-f","empty-ref-f",666507359),(function (page){
var refs = new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(page);
return (((cljs.core.count(refs) === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([db_id]),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),refs)))));
})], null)):null);
if(cljs.core.seq(orphaned_pages)){
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], null);
}),orphaned_pages);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(txs_state,(function (state){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(state,tx));
}));
} else {
return null;
}
} else {
return null;
}
});
(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_id$arity$1 = (function (this$){
var this$__$1 = this;
var or__5043__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
return block_id;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var db_id = temp__5720__auto__;
var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1((frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(db_id) : frontend.db.pull.call(null,db_id)));
if(cljs.core.truth_(uuid)){
return uuid;
} else {
var new_id = frontend.db.new_block_id();
var G__49982_50496 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),db_id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_id], null)], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(G__49982_50496) : frontend.db.transact_BANG_.call(null,G__49982_50496));

return new_id;
}
} else {
return null;
}
}
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_parent_id$arity$1 = (function (this$){
var this$__$1 = this;
return frontend.modules.outliner.utils.__GT_block_id(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null)));
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_set_parent_id$arity$2 = (function (this$,parent_id){
var this$__$1 = this;
frontend.modules.outliner.utils.check_block_id(parent_id);

return cljs.core.update.cljs$core$IFn$_invoke$arity$5(this$__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),parent_id], null));
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_left_id$arity$1 = (function (this$){
var this$__$1 = this;
return frontend.modules.outliner.utils.__GT_block_id(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("block","left","block/left",-443712566)], null)));
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_set_left_id$arity$2 = (function (this$,left_id){
var this$__$1 = this;
frontend.modules.outliner.utils.check_block_id(left_id);

return cljs.core.update.cljs$core$IFn$_invoke$arity$5(this$__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc,new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),left_id], null));
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_parent$arity$1 = (function (this$){
var this$__$1 = this;
var temp__5720__auto__ = frontend.modules.outliner.tree._get_parent_id(this$__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var parent_id = temp__5720__auto__;
return frontend.modules.outliner.core.get_block_by_id(parent_id);
} else {
return null;
}
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_left$arity$1 = (function (this$){
var this$__$1 = this;
var left_id = frontend.modules.outliner.tree._get_left_id(this$__$1);
return frontend.modules.outliner.core.get_block_by_id(left_id);
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_right$arity$1 = (function (this$){
var this$__$1 = this;
var left_id = frontend.modules.outliner.tree._get_id(this$__$1);
var parent_id = frontend.modules.outliner.tree._get_parent_id(this$__$1);
return frontend.modules.outliner.core.get_by_parent__AMPERSAND__left(parent_id,left_id);
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_down$arity$1 = (function (this$){
var this$__$1 = this;
var parent_id = frontend.modules.outliner.tree._get_id(this$__$1);
return frontend.modules.outliner.core.get_by_parent__AMPERSAND__left(parent_id,parent_id);
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_save$arity$2 = (function (this$,txs_state){
var this$__$1 = this;
if(frontend.modules.outliner.datascript.outliner_txs_state_QMARK_(txs_state)){
} else {
throw (new Error(["Assert failed: ","db should be satisfied outliner-tx-state?","\n","(ds/outliner-txs-state? txs-state)"].join('')));
}

var m = logseq.graph_parser.util.remove_nils(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1.data,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword("block","top?","block/top?",-1838733025),new cljs.core.Keyword("block","bottom?","block/bottom?",-1886197289),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","body","block/body",2004112880),new cljs.core.Keyword("block","level","block/level",1182509971)], 0)));
var m__$1 = ((frontend.state.enable_block_timestamps_QMARK_())?frontend.modules.outliner.core.block_with_timestamps(m):m);
var other_tx = new cljs.core.Keyword("db","other-tx","db/other-tx",337296620).cljs$core$IFn$_invoke$arity$1(m__$1);
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(this$__$1.data);
var block_entity = (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(id) : frontend.db.entity.call(null,id));
var old_refs = new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block_entity);
var new_refs = new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(m__$1);
if(cljs.core.seq(other_tx)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(txs_state,(function (txs){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,other_tx));
}));
} else {
}

if(cljs.core.truth_(id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(txs_state,(function (txs){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attribute){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,attribute], null);
}),frontend.db_schema.retract_attributes)));
}));

var temp__5720__auto___50539 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_entity);
if(cljs.core.truth_(temp__5720__auto___50539)){
var e_50540 = temp__5720__auto___50539;
var m_50541__$2 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e_50540),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),frontend.util.time_ms()], null);
var m_50542__$3 = (cljs.core.truth_(new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(e_50540))?m_50541__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m_50541__$2,new cljs.core.Keyword("block","created-at","block/created-at",1440015),frontend.util.time_ms()));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(txs_state,cljs.core.conj,m_50542__$3);

frontend.modules.outliner.core.remove_orphaned_page_refs_BANG_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_entity),txs_state,old_refs,new_refs);
} else {
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(txs_state,cljs.core.conj,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,new cljs.core.Keyword("db","other-tx","db/other-tx",337296620)));

return this$__$1;
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_del$arity$3 = (function (this$,txs_state,children_QMARK_){
var this$__$1 = this;
if(frontend.modules.outliner.datascript.outliner_txs_state_QMARK_(txs_state)){
} else {
throw (new Error(["Assert failed: ","db should be satisfied outliner-tx-state?","\n","(ds/outliner-txs-state? txs-state)"].join('')));
}

var block_id = frontend.modules.outliner.tree._get_id(this$__$1);
var ids = cljs.core.set((cljs.core.truth_(children_QMARK_)?(function (){var children = (function (){var G__49983 = frontend.state.get_current_repo();
var G__49984 = block_id;
return (frontend.db.get_block_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_children.cljs$core$IFn$_invoke$arity$2(G__49983,G__49984) : frontend.db.get_block_children.call(null,G__49983,G__49984));
})();
var children_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),children);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children_ids,block_id);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null)));
var txs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null)], null);
}),ids);
var txs__$1 = ((cljs.core.not(children_QMARK_))?(function (){var immediate_children = (function (){var G__49985 = frontend.state.get_current_repo();
var G__49986 = block_id;
return (frontend.db.get_block_immediate_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_immediate_children.cljs$core$IFn$_invoke$arity$2(G__49985,G__49986) : frontend.db.get_block_immediate_children.call(null,G__49985,G__49986));
})();
if(cljs.core.seq(immediate_children)){
var left_id = frontend.modules.outliner.tree._get_id(frontend.modules.outliner.tree._get_left(this$__$1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,child){
var parent = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),left_id], null);
var G__49987 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword("block","parent","block/parent",-918309064),parent], null);
if((idx === (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49987,new cljs.core.Keyword("block","left","block/left",-443712566),parent);
} else {
return G__49987;
}
}),immediate_children));
} else {
return txs;
}
})():txs);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(txs_state,cljs.core.concat,txs__$1);

return block_id;
}));

(frontend.modules.outliner.core.Block.prototype.frontend$modules$outliner$tree$INode$_get_children$arity$1 = (function (this$){
var this$__$1 = this;
var parent_id = frontend.modules.outliner.tree._get_id(this$__$1);
var children = frontend.db.model.get_block_immediate_children(frontend.state.get_current_repo(),parent_id);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.core.block,children);
}));
frontend.modules.outliner.core.get_right_node = (function frontend$modules$outliner$core$get_right_node(node){
if(frontend.modules.outliner.tree.satisfied_inode_QMARK_(node)){
} else {
throw (new Error("Assert failed: (tree/satisfied-inode? node)"));
}

return frontend.modules.outliner.tree._get_right(node);
});
frontend.modules.outliner.core.get_right_sibling = (function frontend$modules$outliner$core$get_right_sibling(db_id){
if(cljs.core.truth_(db_id)){
return frontend.db.model.get_right_sibling(frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$0(),db_id);
} else {
return null;
}
});
frontend.modules.outliner.core.assoc_level_aux = (function frontend$modules$outliner$core$assoc_level_aux(tree_vec,children_key,init_level){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,children_key);
var children_SINGLEQUOTE_ = (function (){var G__49988 = children;
var G__49989 = children_key;
var G__49990 = (init_level + (1));
return (frontend.modules.outliner.core.assoc_level_aux.cljs$core$IFn$_invoke$arity$3 ? frontend.modules.outliner.core.assoc_level_aux.cljs$core$IFn$_invoke$arity$3(G__49988,G__49989,G__49990) : frontend.modules.outliner.core.assoc_level_aux.call(null,G__49988,G__49989,G__49990));
})();
var G__49991 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","level","block/level",1182509971),init_level);
if(cljs.core.seq(children_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49991,children_key,children_SINGLEQUOTE_);
} else {
return G__49991;
}
}),tree_vec);
});
frontend.modules.outliner.core.assoc_level = (function frontend$modules$outliner$core$assoc_level(children_key,tree_vec){
return frontend.modules.outliner.core.assoc_level_aux(tree_vec,children_key,(1));
});
frontend.modules.outliner.core.assign_temp_id = (function frontend$modules$outliner$core$assign_temp_id(blocks,replace_empty_target_QMARK_,target_block){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,block){
var db_id = (cljs.core.truth_((function (){var and__5041__auto__ = replace_empty_target_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (idx === (0));
} else {
return and__5041__auto__;
}
})())?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block):((- idx) - (1)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("db","id","db/id",-1388397098),db_id);
}),blocks);
});
frontend.modules.outliner.core.find_outdented_block_prev_hop = (function frontend$modules$outliner$core$find_outdented_block_prev_hop(outdented_block,blocks){
var blocks__$1 = cljs.core.reverse(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__49992_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(outdented_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__49992_SHARP_));
}),blocks));
var blocks__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__49993_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(outdented_block)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(p1__49993_SHARP_)));
}),blocks__$1);
if(cljs.core.seq(blocks__$2)){
var blocks__$3 = blocks__$2;
var matched = cljs.core.first(blocks__$3);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks__$3)),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(matched))){
var G__50551 = cljs.core.rest(blocks__$3);
var G__50552 = cljs.core.first(blocks__$3);
blocks__$3 = G__50551;
matched = G__50552;
continue;
} else {
return matched;
}
break;
}
} else {
return null;
}
});
frontend.modules.outliner.core.compute_block_parent = (function frontend$modules$outliner$core$compute_block_parent(block,parent,target_block,prev_hop,top_level_QMARK_,sibling_QMARK_,get_new_id){
if(cljs.core.truth_(prev_hop)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(prev_hop));
} else {
if(cljs.core.truth_(top_level_QMARK_)){
if(cljs.core.truth_(sibling_QMARK_)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block));
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
}
} else {
return (get_new_id.cljs$core$IFn$_invoke$arity$2 ? get_new_id.cljs$core$IFn$_invoke$arity$2(block,parent) : get_new_id.call(null,block,parent));

}
}
});
frontend.modules.outliner.core.compute_block_left = (function frontend$modules$outliner$core$compute_block_left(blocks,block,left,target_block,prev_hop,idx,replace_empty_target_QMARK_,left_exists_in_blocks_QMARK_,get_new_id){
if((idx === (0))){
if(cljs.core.truth_(replace_empty_target_QMARK_)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(target_block));
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = prev_hop;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(left_exists_in_blocks_QMARK_);
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(prev_hop));
} else {
var or__5043__auto__ = (get_new_id.cljs$core$IFn$_invoke$arity$2 ? get_new_id.cljs$core$IFn$_invoke$arity$2(block,left) : get_new_id.call(null,block,left));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__49994 = block;
var G__49995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,(idx - (1)));
return (get_new_id.cljs$core$IFn$_invoke$arity$2 ? get_new_id.cljs$core$IFn$_invoke$arity$2(G__49994,G__49995) : get_new_id.call(null,G__49994,G__49995));
}

}
}
});
frontend.modules.outliner.core.get_left_nodes = (function frontend$modules$outliner$core$get_left_nodes(node,limit){
var parent = frontend.modules.outliner.tree._get_parent(node);
var node__$1 = node;
var limit__$1 = limit;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if((limit__$1 === (0))){
return result;
} else {
var temp__5718__auto__ = frontend.modules.outliner.tree._get_left(node__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var left = temp__5718__auto__;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,parent)))){
var G__50554 = left;
var G__50555 = (limit__$1 - (1));
var G__50556 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,frontend.modules.outliner.tree._get_id(left));
node__$1 = G__50554;
limit__$1 = G__50555;
result = G__50556;
continue;
} else {
return result;
}
} else {
return result;
}
}
break;
}
});
frontend.modules.outliner.core.page_first_child_QMARK_ = (function frontend$modules$outliner$core$page_first_child_QMARK_(block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
});
frontend.modules.outliner.core.page_block_QMARK_ = (function frontend$modules$outliner$core$page_block_QMARK_(block){
return (!((new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block) == null)));
});
/**
 * Converts a `tree-vec` to blocks with `:block/level`.
 *   A `tree-vec` example:
 *   [{:id 1, :children [{:id 2,
 *                     :children [{:id 3}]}]}
 * {:id 4, :children [{:id 5}
 *                    {:id 6}]}]
 */
frontend.modules.outliner.core.tree_vec_flatten = (function frontend$modules$outliner$core$tree_vec_flatten(var_args){
var G__49999 = arguments.length;
switch (G__49999) {
case 1:
return frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$1 = (function (tree_vec){
return frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2(tree_vec,new cljs.core.Keyword(null,"children","children",-940561982));
}));

(frontend.modules.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2 = (function (tree_vec,children_key){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49997_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49997_SHARP_,new cljs.core.Keyword("block","children","block/children",-1040716209));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__49996_SHARP_){
return cljs.core.tree_seq(cljs.core.map_QMARK_,children_key,p1__49996_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.modules.outliner.core.assoc_level(children_key,tree_vec)], 0)));
}));

(frontend.modules.outliner.core.tree_vec_flatten.cljs$lang$maxFixedArity = 2);

/**
 * Save the `block`.
 */
frontend.modules.outliner.core.save_block = (function frontend$modules$outliner$core$save_block(block_SINGLEQUOTE_){
if(cljs.core.map_QMARK_(block_SINGLEQUOTE_)){
} else {
throw (new Error("Assert failed: (map? block')"));
}

var txs_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
frontend.modules.outliner.tree._save(frontend.modules.outliner.core.block(block_SINGLEQUOTE_),txs_state);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.deref(txs_state)], null);
});
/**
 * Calculate `:block/level` for all the `blocks`. Blocks should be sorted already.
 */
frontend.modules.outliner.core.blocks_with_level = (function frontend$modules$outliner$core$blocks_with_level(blocks){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

var blocks__$1 = ((cljs.core.sequential_QMARK_(blocks))?blocks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks], null));
var root = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(blocks__$1),new cljs.core.Keyword("block","level","block/level",1182509971),(1));
var m = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null);
var blocks__$2 = cljs.core.rest(blocks__$1);
while(true){
if(cljs.core.empty_QMARK_(blocks__$2)){
return m;
} else {
var block = cljs.core.first(blocks__$2);
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
var parent_level = (cljs.core.truth_(parent)?new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (m,blocks__$2,block,parent,blocks__$1,root){
return (function (x){
return ((((cljs.core.map_QMARK_(parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent))))) || (((cljs.core.vector_QMARK_(parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(x),cljs.core.second(parent))))));
});})(m,blocks__$2,block,parent,blocks__$1,root))
,m))):null);
var level = (cljs.core.truth_(parent_level)?(parent_level + (1)):(1));
var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","level","block/level",1182509971),level);
var m_SINGLEQUOTE_ = cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,block__$1));
var G__50570 = m_SINGLEQUOTE_;
var G__50571 = cljs.core.rest(blocks__$2);
m = G__50570;
blocks__$2 = G__50571;
continue;
}
break;
}
});
/**
 * Get only the top level blocks.
 */
frontend.modules.outliner.core.get_top_level_blocks = (function frontend$modules$outliner$core$get_top_level_blocks(blocks){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

var level_blocks = frontend.modules.outliner.core.blocks_with_level(blocks);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(b));
}),level_blocks);
});
/**
 * Get `node`'s right siblings.
 */
frontend.modules.outliner.core.get_right_siblings = (function frontend$modules$outliner$core$get_right_siblings(node){
if(frontend.modules.outliner.tree.satisfied_inode_QMARK_(node)){
} else {
throw (new Error("Assert failed: (tree/satisfied-inode? node)"));
}

var temp__5720__auto__ = frontend.modules.outliner.tree._get_parent(node);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var children = frontend.modules.outliner.tree._get_children(parent);
return cljs.core.rest(cljs.core.last(cljs.core.split_with((function (p1__50000_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.tree._get_id(node),frontend.modules.outliner.tree._get_id(p1__50000_SHARP_));
}),children)));
} else {
return null;
}
});
frontend.modules.outliner.core.insert_blocks_aux = (function frontend$modules$outliner$core$insert_blocks_aux(blocks,target_block,p__50015){
var map__50016 = p__50015;
var map__50016__$1 = cljs.core.__destructure_map(map__50016);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50016__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50016__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50016__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var move_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50016__$1,new cljs.core.Keyword(null,"move?","move?",-1908971187));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50016__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var block_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks);
var ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks));
var uuids = cljs.core.zipmap(block_uuids,(cljs.core.truth_(keep_uuid_QMARK_)?block_uuids:cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid)));
var uuids__$1 = (cljs.core.truth_(replace_empty_target_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(uuids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block)):uuids);
var id__GT_new_uuid = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var temp__5720__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuids__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))], null);
} else {
return null;
}
}),blocks));
var target_page = (function (){var or__5043__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(target_block));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
}
})();
var get_new_id = (function (block,lookup){
if(((cljs.core.map_QMARK_(lookup)) || (cljs.core.vector_QMARK_(lookup)))){
var temp__5720__auto__ = ((((cljs.core.vector_QMARK_(lookup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(lookup),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuids__$1,cljs.core.last(lookup)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_new_uuid,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(lookup)));
if(cljs.core.truth_(temp__5720__auto__)){
var uuid = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
} else {
return null;
}
} else {
if(cljs.core.integer_QMARK_(lookup)){
return lookup;
} else {
throw (new Error(["[insert-blocks] illegal lookup: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lookup),", block: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block)].join('')));

}
}
});
var indent_outdent_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__50024){
var map__50025 = p__50024;
var map__50025__$1 = cljs.core.__destructure_map(map__50025);
var block = map__50025__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50025__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50025__$1,new cljs.core.Keyword("block","left","block/left",-443712566));
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuids__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5720__auto__)){
var uuid = temp__5720__auto__;
var top_level_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block),(1));
var outdented_block_QMARK_ = ((indent_outdent_QMARK_) && (((top_level_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block))))));
var prev_hop = ((outdented_block_QMARK_)?frontend.modules.outliner.core.find_outdented_block_prev_hop(block,blocks):null);
var left_exists_in_blocks_QMARK_ = cljs.core.contains_QMARK_(ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block)));
var parent__$1 = frontend.modules.outliner.core.compute_block_parent(block,parent,target_block,prev_hop,top_level_QMARK_,sibling_QMARK_,get_new_id);
var left__$1 = frontend.modules.outliner.core.compute_block_left(blocks,block,left,target_block,prev_hop,idx,replace_empty_target_QMARK_,left_exists_in_blocks_QMARK_,get_new_id);
var G__50030 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","page","block/page",822314108),target_page,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent__$1,new cljs.core.Keyword("block","left","block/left",-443712566),left__$1], null)], 0));
if(cljs.core.not(move_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50030,new cljs.core.Keyword("db","id","db/id",-1388397098));
} else {
return G__50030;
}
} else {
return null;
}
}),blocks);
});
/**
 * Insert blocks as children (or siblings) of target-node.
 *   Args:
 *  `blocks`: blocks should be sorted already.
 *  `target-block`: where `blocks` will be inserted.
 *  Options:
 *    `sibling?`: as siblings (true) or children (false).
 *    `keep-uuid?`: whether to replace `:block/uuid` from the parameter `blocks`.
 *                  For example, if `blocks` are from internal copy, the uuids
 *                  need to be changed, but there's no need for drag & drop.
 *    `outliner-op`: what's the current outliner operation.
 *    `replace-empty-target?`: If the `target-block` is an empty block, whether
 *                             to replace it, it defaults to be `false`.
 *  ``
 */
frontend.modules.outliner.core.insert_blocks = (function frontend$modules$outliner$core$insert_blocks(blocks,target_block,p__50051){
var map__50052 = p__50051;
var map__50052__$1 = cljs.core.__destructure_map(map__50052);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50052__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50052__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50052__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50052__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.modules.outliner.core","block-map-or-entity","frontend.modules.outliner.core/block-map-or-entity",1526834445),target_block)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.modules.outliner.core/block-map-or-entity target-block)"));
}

var target_block_SINGLEQUOTE_ = (function (){var G__50058 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__50058) : frontend.db.pull.call(null,G__50058));
})();
var _ = (((!((target_block_SINGLEQUOTE_ == null))))?null:(function(){throw (new Error(["Assert failed: ",["Invalid target: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_block)].join(''),"\n","(some? target-block')"].join('')))})());
var sibling_QMARK___$1 = ((frontend.modules.outliner.core.page_block_QMARK_(target_block_SINGLEQUOTE_))?false:sibling_QMARK_);
var move_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null,new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060),null,new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713),null], null), null),outliner_op);
var keep_uuid_QMARK___$1 = ((move_QMARK_)?true:keep_uuid_QMARK_);
var replace_empty_target_QMARK___$1 = (cljs.core.truth_((function (){var and__5041__auto__ = (!((replace_empty_target_QMARK_ == null)));
if(and__5041__auto__){
var and__5041__auto____$1 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5041__auto____$1)){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE_));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?replace_empty_target_QMARK_:(function (){var and__5041__auto__ = sibling_QMARK___$1;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE_);
if(cljs.core.truth_(and__5041__auto____$1)){
return ((clojure.string.blank_QMARK_(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(target_block_SINGLEQUOTE_))) && ((((cljs.core.count(blocks) > (1))) && ((!(move_QMARK_))))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})());
var blocks_SINGLEQUOTE_ = frontend.modules.outliner.core.blocks_with_level(blocks);
var insert_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK___$1,new cljs.core.Keyword(null,"move?","move?",-1908971187),move_QMARK_,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),outliner_op], null);
var tx = frontend.modules.outliner.core.insert_blocks_aux(blocks_SINGLEQUOTE_,target_block_SINGLEQUOTE_,insert_opts);
if(cljs.core.truth_(cljs.core.some((function (b){
return (((new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b) == null)) || ((new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(b) == null)));
}),tx))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("outliner","invalid-structure","outliner/invalid-structure",-1028533349),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50034_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50034_SHARP_,new cljs.core.Keyword("block","content","block/content",-161885195));
}),tx)], null)], null)], null));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid outliner data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),insert_opts,new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.vec(tx),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.vec(blocks),new cljs.core.Keyword(null,"target-block","target-block",348392017),target_block_SINGLEQUOTE_], null));
} else {
var uuids_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (uuid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),tx)));
var tx__$1 = ((move_QMARK_)?tx:frontend.modules.outliner.core.assign_temp_id(tx,replace_empty_target_QMARK___$1,target_block_SINGLEQUOTE_));
var target_node = frontend.modules.outliner.core.block(target_block_SINGLEQUOTE_);
var next = (cljs.core.truth_(sibling_QMARK___$1)?frontend.modules.outliner.tree._get_right(target_node):frontend.modules.outliner.tree._get_down(target_node));
var next_tx = (cljs.core.truth_((function (){var and__5041__auto__ = next;
if(cljs.core.truth_(and__5041__auto__)){
return (!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(next)))));
} else {
return and__5041__auto__;
}
})())?(function (){var temp__5720__auto__ = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(b));
}),tx__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var left = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.modules.outliner.tree._get_id(next),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left)], null)], null);
} else {
return null;
}
})():null);
var full_tx = frontend.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uuids_tx,tx__$1,next_tx], 0));
if(cljs.core.truth_((function (){var and__5041__auto__ = replace_empty_target_QMARK___$1;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.editing_QMARK_();
} else {
return and__5041__auto__;
}
})())){
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),full_tx,new cljs.core.Keyword(null,"blocks","blocks",-610462153),tx__$1], null);
}
});
frontend.modules.outliner.core.build_move_blocks_next_tx = (function frontend$modules$outliner$core$build_move_blocks_next_tx(blocks){
var id__GT_blocks = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks),blocks);
var top_level_blocks = frontend.modules.outliner.core.get_top_level_blocks(blocks);
var top_level_blocks_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),top_level_blocks));
var right_block = frontend.modules.outliner.core.get_right_sibling(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(top_level_blocks)));
if(cljs.core.truth_((function (){var and__5041__auto__ = right_block;
if(cljs.core.truth_(and__5041__auto__)){
return (!(cljs.core.contains_QMARK_(top_level_blocks_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(right_block))));
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(right_block),new cljs.core.Keyword("block","left","block/left",-443712566),(function (){var block = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(right_block);
while(true){
if(cljs.core.contains_QMARK_(top_level_blocks_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))){
var G__50601 = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_blocks,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)));
block = G__50601;
continue;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
}
break;
}
})()], null);
} else {
return null;
}
});
frontend.modules.outliner.core.find_new_left = (function frontend$modules$outliner$core$find_new_left(block,moved_ids,target_block,current_block,sibling_QMARK_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(current_block)))){
if(cljs.core.truth_(sibling_QMARK_)){
var G__50108 = cljs.core.last(moved_ids);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__50108) : frontend.db.entity.call(null,G__50108));
} else {
return target_block;
}
} else {
var left = (function (){var G__50109 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__50109) : frontend.db.entity.call(null,G__50109));
})();
if(cljs.core.contains_QMARK_(cljs.core.set(moved_ids),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left))){
return (frontend.modules.outliner.core.find_new_left.cljs$core$IFn$_invoke$arity$5 ? frontend.modules.outliner.core.find_new_left.cljs$core$IFn$_invoke$arity$5(left,moved_ids,target_block,current_block,sibling_QMARK_) : frontend.modules.outliner.core.find_new_left.call(null,left,moved_ids,target_block,current_block,sibling_QMARK_));
} else {
return left;
}
}
});
frontend.modules.outliner.core.fix_non_consecutive_blocks = (function frontend$modules$outliner$core$fix_non_consecutive_blocks(blocks,target_block,sibling_QMARK_){
var page_blocks = cljs.core.group_by(new cljs.core.Keyword("block","page","block/page",822314108),blocks);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__50116){
var vec__50117 = p__50116;
var _page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50117,(0),null);
var blocks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50117,(1),null);
var blocks__$2 = frontend.db.model.sort_page_random_blocks(blocks__$1);
var non_consecutive_blocks = frontend.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frontend.db.model.get_non_consecutive_blocks(blocks__$2),cljs.core.last(blocks__$2)));
if(cljs.core.seq(non_consecutive_blocks)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
var temp__5720__auto__ = frontend.modules.outliner.core.get_right_sibling(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5720__auto__)){
var right = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.modules.outliner.core.find_new_left(right,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks__$2)),target_block,block,sibling_QMARK_);
if(cljs.core.truth_(temp__5720__auto____$1)){
var new_left = temp__5720__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(right),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new_left)], null);
} else {
return null;
}
} else {
return null;
}
}),non_consecutive_blocks);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_blocks], 0)));
});
/**
 * Delete block from the tree.
 */
frontend.modules.outliner.core.delete_block = (function frontend$modules$outliner$core$delete_block(txs_state,block_SINGLEQUOTE_,children_QMARK_){
var node = frontend.modules.outliner.core.block(block_SINGLEQUOTE_);
var right_node = frontend.modules.outliner.tree._get_right(node);
frontend.modules.outliner.tree._del(node,txs_state,children_QMARK_);

if(frontend.modules.outliner.tree.satisfied_inode_QMARK_(right_node)){
var left_node_50617 = frontend.modules.outliner.tree._get_left(node);
var new_right_node_50618 = frontend.modules.outliner.tree._set_left_id(right_node,frontend.modules.outliner.tree._get_id(left_node_50617));
frontend.modules.outliner.tree._save(new_right_node_50618,txs_state);
} else {
}

return cljs.core.deref(txs_state);
});
/**
 * Delete blocks from the tree.
 * Args:
 *  `children?`: whether to replace `blocks'` children too. 
 */
frontend.modules.outliner.core.delete_blocks = (function frontend$modules$outliner$core$delete_blocks(blocks,p__50155){
var map__50156 = p__50155;
var map__50156__$1 = cljs.core.__destructure_map(map__50156);
var children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50156__$1,new cljs.core.Keyword(null,"children?","children?",-1199594108),true);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(blocks)], null)], null);

var txs_state = frontend.modules.outliner.datascript.new_outliner_txs_state();
var block_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b)], null);
}),blocks);
var start_block = cljs.core.first(blocks);
var end_block = cljs.core.last(frontend.modules.outliner.core.get_top_level_blocks(blocks));
var start_node = frontend.modules.outliner.core.block(start_block);
var end_node = frontend.modules.outliner.core.block(end_block);
var end_node_parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var G__50166 = frontend.state.get_current_repo();
var G__50167 = frontend.modules.outliner.tree._get_id(end_node);
var G__50168 = (1000);
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3(G__50166,G__50167,G__50168) : frontend.db.get_block_parents.call(null,G__50166,G__50167,G__50168));
})()));
var self_block_QMARK_ = cljs.core.contains_QMARK_(end_node_parents,frontend.modules.outliner.tree._get_id(start_node));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(blocks))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_node,end_node)) || (self_block_QMARK_))))){
frontend.modules.outliner.core.delete_block(txs_state,start_block,children_QMARK_);
} else {
var sibling_QMARK__50625 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.tree._get_parent_id(start_node),frontend.modules.outliner.tree._get_parent_id(end_node));
var right_node_50626 = frontend.modules.outliner.tree._get_right(end_node);
if(frontend.modules.outliner.tree.satisfied_inode_QMARK_(right_node_50626)){
var left_node_id_50639 = ((sibling_QMARK__50625)?frontend.modules.outliner.tree._get_id(frontend.modules.outliner.tree._get_left(start_node)):(function (){var end_node_left_nodes = frontend.modules.outliner.core.get_left_nodes(end_node,cljs.core.count(block_ids));
var parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var G__50181 = frontend.state.get_current_repo();
var G__50182 = frontend.modules.outliner.tree._get_id(start_node);
var G__50183 = (1000);
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3(G__50181,G__50182,G__50183) : frontend.db.get_block_parents.call(null,G__50181,G__50182,G__50183));
})()));
var result = cljs.core.first(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(end_node_left_nodes),parents));
if(cljs.core.truth_(result)){
} else {
var G__50186_50640 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parents","parents",-2027538891),parents,new cljs.core.Keyword(null,"end-node-left-nodes","end-node-left-nodes",-1488251110),end_node_left_nodes], null);
(frontend.util.pprint.cljs$core$IFn$_invoke$arity$1 ? frontend.util.pprint.cljs$core$IFn$_invoke$arity$1(G__50186_50640) : frontend.util.pprint.call(null,G__50186_50640));
}

return result;
})());
if(cljs.core.truth_(left_node_id_50639)){
} else {
throw (new Error(["Assert failed: ","Can't find the left-node-id","\n","left-node-id"].join('')));
}

var new_right_node_50643 = frontend.modules.outliner.tree._set_left_id(right_node_50626,left_node_id_50639);
frontend.modules.outliner.tree._save(new_right_node_50643,txs_state);
} else {
}

var seq__50202_50644 = cljs.core.seq(block_ids);
var chunk__50203_50645 = null;
var count__50204_50646 = (0);
var i__50205_50647 = (0);
while(true){
if((i__50205_50647 < count__50204_50646)){
var id_50648 = chunk__50203_50645.cljs$core$IIndexed$_nth$arity$2(null,i__50205_50647);
var node_50649 = frontend.modules.outliner.core.block((frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(id_50648) : frontend.db.pull.call(null,id_50648)));
frontend.modules.outliner.tree._del(node_50649,txs_state,true);


var G__50650 = seq__50202_50644;
var G__50651 = chunk__50203_50645;
var G__50652 = count__50204_50646;
var G__50653 = (i__50205_50647 + (1));
seq__50202_50644 = G__50650;
chunk__50203_50645 = G__50651;
count__50204_50646 = G__50652;
i__50205_50647 = G__50653;
continue;
} else {
var temp__5720__auto___50655 = cljs.core.seq(seq__50202_50644);
if(temp__5720__auto___50655){
var seq__50202_50656__$1 = temp__5720__auto___50655;
if(cljs.core.chunked_seq_QMARK_(seq__50202_50656__$1)){
var c__5565__auto___50657 = cljs.core.chunk_first(seq__50202_50656__$1);
var G__50658 = cljs.core.chunk_rest(seq__50202_50656__$1);
var G__50659 = c__5565__auto___50657;
var G__50660 = cljs.core.count(c__5565__auto___50657);
var G__50661 = (0);
seq__50202_50644 = G__50658;
chunk__50203_50645 = G__50659;
count__50204_50646 = G__50660;
i__50205_50647 = G__50661;
continue;
} else {
var id_50662 = cljs.core.first(seq__50202_50656__$1);
var node_50663 = frontend.modules.outliner.core.block((frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(id_50662) : frontend.db.pull.call(null,id_50662)));
frontend.modules.outliner.tree._del(node_50663,txs_state,true);


var G__50664 = cljs.core.next(seq__50202_50656__$1);
var G__50665 = null;
var G__50666 = (0);
var G__50667 = (0);
seq__50202_50644 = G__50664;
chunk__50203_50645 = G__50665;
count__50204_50646 = G__50666;
i__50205_50647 = G__50667;
continue;
}
} else {
}
}
break;
}

var fix_non_consecutive_tx_50668 = frontend.modules.outliner.core.fix_non_consecutive_blocks(blocks,null,false);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(txs_state,cljs.core.concat,fix_non_consecutive_tx_50668);
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.deref(txs_state)], null);
});
/**
 * Move `blocks` to `target-block` as siblings or children.
 */
frontend.modules.outliner.core.move_blocks = (function frontend$modules$outliner$core$move_blocks(blocks,target_block,p__50244){
var map__50247 = p__50244;
var map__50247__$1 = cljs.core.__destructure_map(map__50247);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50247__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(blocks),cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.modules.outliner.core","block-map-or-entity","frontend.modules.outliner.core/block-map-or-entity",1526834445),target_block)], null)], null);

if((!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block))))){
var parents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),(function (){var G__50250 = frontend.state.get_current_repo();
var G__50251 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block);
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$2(G__50250,G__50251) : frontend.db.get_block_parents.call(null,G__50250,G__50251));
})()));
var move_parents_to_child_QMARK_ = cljs.core.some(parents,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks));
if(cljs.core.truth_(move_parents_to_child_QMARK_)){
return null;
} else {
var blocks__$1 = frontend.modules.outliner.core.get_top_level_blocks(blocks);
var first_block = cljs.core.first(blocks__$1);
var map__50252 = frontend.modules.outliner.core.insert_blocks(blocks__$1,target_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),(function (){var or__5043__auto__ = outliner_op;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999);
}
})()], null));
var map__50252__$1 = cljs.core.__destructure_map(map__50252);
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50252__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
if(cljs.core.seq(tx_data)){
var first_block_page = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(first_block));
var target_page = (function (){var or__5043__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(target_block));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
}
})();
var not_same_page_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(first_block_page,target_page);
var move_blocks_next_tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.modules.outliner.core.build_move_blocks_next_tx(blocks__$1)], null);
var children_page_tx = ((not_same_page_QMARK_)?(function (){var children_ids = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__50230_SHARP_){
var G__50254 = frontend.state.get_current_repo();
var G__50255 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__50230_SHARP_);
return (frontend.db.get_block_children_ids.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_children_ids.cljs$core$IFn$_invoke$arity$2(G__50254,G__50255) : frontend.db.get_block_children_ids.call(null,G__50254,G__50255));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks__$1], 0));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (uuid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword("block","page","block/page",822314108),target_page], null);
}),children_ids);
})():null);
var fix_non_consecutive_tx = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),move_blocks_next_tx)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b));
}),frontend.modules.outliner.core.fix_non_consecutive_blocks(blocks__$1,target_block,sibling_QMARK_));
var full_tx = frontend.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx_data,move_blocks_next_tx,children_page_tx,fix_non_consecutive_tx], 0));
var tx_meta = (function (){var G__50257 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks__$1),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block)], null);
if(not_same_page_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__50257,new cljs.core.Keyword(null,"from-page","from-page",75165656),first_block_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-page","target-page",-920102649),target_page], 0));
} else {
return G__50257;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),full_tx,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null);
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Move blocks up/down.
 */
frontend.modules.outliner.core.move_blocks_up_down = (function frontend$modules$outliner$core$move_blocks_up_down(blocks,up_QMARK_){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(cljs.core.boolean_QMARK_(up_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? up?)"));
}

var first_block = (function (){var G__50266 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__50266) : frontend.db.entity.call(null,G__50266));
})();
var first_block_parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(first_block);
var left_left = new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(first_block));
var top_level_blocks = frontend.modules.outliner.core.get_top_level_blocks(blocks);
var last_top_block = cljs.core.last(top_level_blocks);
var last_top_block_parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(last_top_block);
var right = frontend.modules.outliner.core.get_right_sibling(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_top_block));
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060)], null);
if(cljs.core.truth_((function (){var and__5041__auto__ = up_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return left_left;
} else {
return and__5041__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(left_left),first_block_parent)){
return frontend.modules.outliner.core.move_blocks(blocks,left_left,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_left),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(first_block_parent))){
return frontend.modules.outliner.core.move_blocks(blocks,left_left,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(first_block),first_block_parent)){
var target_children = new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(left_left);
if(cljs.core.seq(target_children)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(left_left),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(first_block_parent))){
var target_block = cljs.core.last(frontend.db.model.sort_by_left.cljs$core$IFn$_invoke$arity$2(target_children,left_left));
return frontend.modules.outliner.core.move_blocks(blocks,target_block,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
} else {
return null;
}
} else {
return frontend.modules.outliner.core.move_blocks(blocks,left_left,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
}
} else {
return null;

}
}
}
} else {
if(cljs.core.not(up_QMARK_)){
if(cljs.core.truth_(right)){
return frontend.modules.outliner.core.move_blocks(blocks,right,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
} else {
if(cljs.core.truth_(last_top_block_parent)){
var temp__5720__auto__ = frontend.modules.outliner.core.get_right_sibling(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_top_block_parent));
if(cljs.core.truth_(temp__5720__auto__)){
var parent_right = temp__5720__auto__;
return frontend.modules.outliner.core.move_blocks(blocks,parent_right,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;

}
}
});
/**
 * Indent or outdent `blocks`.
 */
frontend.modules.outliner.core.indent_outdent_blocks = (function frontend$modules$outliner$core$indent_outdent_blocks(blocks,indent_QMARK_){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(cljs.core.boolean_QMARK_(indent_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? indent?)"));
}

var first_block = (function (){var G__50286 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__50286) : frontend.db.entity.call(null,G__50286));
})();
var left = (function (){var G__50289 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","left","block/left",-443712566).cljs$core$IFn$_invoke$arity$1(first_block));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__50289) : frontend.db.entity.call(null,G__50289));
})();
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(first_block);
var db = (frontend.db.get_db.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_db.call(null));
var top_level_blocks = frontend.modules.outliner.core.get_top_level_blocks(blocks);
var concat_tx_fn = (function() { 
var G__50690__delegate = function (results){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.util.concat_without_nil,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),results)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(cljs.core.first(results))], null);
};
var G__50690 = function (var_args){
var results = null;
if (arguments.length > 0) {
var G__50692__i = 0, G__50692__a = new Array(arguments.length -  0);
while (G__50692__i < G__50692__a.length) {G__50692__a[G__50692__i] = arguments[G__50692__i + 0]; ++G__50692__i;}
  results = new cljs.core.IndexedSeq(G__50692__a,0,null);
} 
return G__50690__delegate.call(this,results);};
G__50690.cljs$lang$maxFixedArity = 0;
G__50690.cljs$lang$applyTo = (function (arglist__50693){
var results = cljs.core.seq(arglist__50693);
return G__50690__delegate(results);
});
G__50690.cljs$core$IFn$_invoke$arity$variadic = G__50690__delegate;
return G__50690;
})()
;
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713)], null);
if(cljs.core.truth_(indent_QMARK_)){
if(cljs.core.truth_((function (){var and__5041__auto__ = left;
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.modules.outliner.core.page_first_child_QMARK_(first_block)));
} else {
return and__5041__auto__;
}
})())){
var last_direct_child_id = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),false);
var blocks_SINGLEQUOTE_ = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left));
}),top_level_blocks);
if(cljs.core.seq(blocks_SINGLEQUOTE_)){
if(cljs.core.truth_(last_direct_child_id)){
var last_direct_child = (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(last_direct_child_id) : frontend.db.entity.call(null,last_direct_child_id));
var result = frontend.modules.outliner.core.move_blocks(blocks_SINGLEQUOTE_,last_direct_child,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
var collapsed_tx = (cljs.core.truth_(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(left))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),false], null)], null)], null):null);
return concat_tx_fn(result,collapsed_tx);
} else {
return frontend.modules.outliner.core.move_blocks(blocks_SINGLEQUOTE_,left,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
}
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = parent;
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.modules.outliner.core.page_block_QMARK_((function (){var G__50309 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__50309) : frontend.db.entity.call(null,G__50309));
})())));
} else {
return and__5041__auto__;
}
})())){
var blocks_SINGLEQUOTE_ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent)));
}),top_level_blocks);
var result = frontend.modules.outliner.core.move_blocks(blocks_SINGLEQUOTE_,parent,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
if(cljs.core.truth_(frontend.state.logical_outdenting_QMARK_())){
return result;
} else {
var last_top_block = (function (){var G__50313 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(blocks_SINGLEQUOTE_));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__50313) : frontend.db.pull.call(null,G__50313));
})();
var right_siblings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),frontend.modules.outliner.core.get_right_siblings(frontend.modules.outliner.core.block(last_top_block)));
if(cljs.core.seq(right_siblings)){
var result2 = (function (){var temp__5718__auto__ = frontend.db.model.get_block_last_direct_child.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_top_block),false);
if(cljs.core.truth_(temp__5718__auto__)){
var last_direct_child_id = temp__5718__auto__;
return frontend.modules.outliner.core.move_blocks(right_siblings,(frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(last_direct_child_id) : frontend.db.entity.call(null,last_direct_child_id)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
} else {
return frontend.modules.outliner.core.move_blocks(right_siblings,last_top_block,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
}
})();
return concat_tx_fn(result,result2);
} else {
return result;
}
}
} else {
return null;
}
}
});
/**
 * Stores transaction-data that are generated by one or more write-operations,
 *   see also `frontend.modules.outliner.transaction/save-transactions`
 */
frontend.modules.outliner.core._STAR_transaction_data_STAR_ = null;
frontend.modules.outliner.core.op_transact_BANG_ = (function frontend$modules$outliner$core$op_transact_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50711 = arguments.length;
var i__5767__auto___50713 = (0);
while(true){
if((i__5767__auto___50713 < len__5766__auto___50711)){
args__5772__auto__.push((arguments[i__5767__auto___50713]));

var G__50717 = (i__5767__auto___50713 + (1));
i__5767__auto___50713 = G__50717;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (fn_var,args){
if(cljs.core.var_QMARK_(fn_var)){
} else {
throw (new Error("Assert failed: (var? fn-var)"));
}

if((frontend.modules.outliner.core._STAR_transaction_data_STAR_ == null)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fn_var)))," is not used in (save-transactions ...)"].join('')));
} else {
}

var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fn_var),args);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.modules.outliner.core._STAR_transaction_data_STAR_,cljs.core.select_keys(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], null)));

return result;
}));

(frontend.modules.outliner.core.op_transact_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.modules.outliner.core.op_transact_BANG_.cljs$lang$applyTo = (function (seq50334){
var G__50335 = cljs.core.first(seq50334);
var seq50334__$1 = cljs.core.next(seq50334);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50335,seq50334__$1);
}));

frontend.modules.outliner.core.save_block_BANG_ = (function frontend$modules$outliner$core$save_block_BANG_(block){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.save_block;},new cljs.core.Symbol("frontend.modules.outliner.core","save-block","frontend.modules.outliner.core/save-block",543903485,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"save-block","save-block",-2062903209,null),"frontend/modules/outliner/core.cljs",17,1,317,317,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block'","block'",-955399040,null)], null)),"Save the `block`.",(cljs.core.truth_(frontend.modules.outliner.core.save_block)?frontend.modules.outliner.core.save_block.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0));
});
frontend.modules.outliner.core.insert_blocks_BANG_ = (function frontend$modules$outliner$core$insert_blocks_BANG_(blocks,target_block,opts){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.insert_blocks;},new cljs.core.Symbol("frontend.modules.outliner.core","insert-blocks","frontend.modules.outliner.core/insert-blocks",-243340656,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"insert-blocks","insert-blocks",370749514,null),"frontend/modules/outliner/core.cljs",20,1,425,425,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),new cljs.core.Symbol(null,"target-block","target-block",1988923544,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sibling?","sibling?",554402467,null),new cljs.core.Symbol(null,"keep-uuid?","keep-uuid?",-2125963741,null),new cljs.core.Symbol(null,"outliner-op","outliner-op",-938203319,null),new cljs.core.Symbol(null,"replace-empty-target?","replace-empty-target?",716799087,null)], null)], null)], null)),"Insert blocks as children (or siblings) of target-node.\n  Args:\n    `blocks`: blocks should be sorted already.\n    `target-block`: where `blocks` will be inserted.\n    Options:\n      `sibling?`: as siblings (true) or children (false).\n      `keep-uuid?`: whether to replace `:block/uuid` from the parameter `blocks`.\n                    For example, if `blocks` are from internal copy, the uuids\n                    need to be changed, but there's no need for drag & drop.\n      `outliner-op`: what's the current outliner operation.\n      `replace-empty-target?`: If the `target-block` is an empty block, whether\n                               to replace it, it defaults to be `false`.\n    ``",(cljs.core.truth_(frontend.modules.outliner.core.insert_blocks)?frontend.modules.outliner.core.insert_blocks.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks,target_block,opts], 0));
});
frontend.modules.outliner.core.delete_blocks_BANG_ = (function frontend$modules$outliner$core$delete_blocks_BANG_(blocks,opts){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.delete_blocks;},new cljs.core.Symbol("frontend.modules.outliner.core","delete-blocks","frontend.modules.outliner.core/delete-blocks",1564878705,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"delete-blocks","delete-blocks",-228100069,null),"frontend/modules/outliner/core.cljs",20,1,546,546,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children?","children?",440937419,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"children?","children?",440937419,null),true], null)], null)], null)),"Delete blocks from the tree.\n   Args:\n    `children?`: whether to replace `blocks'` children too. ",(cljs.core.truth_(frontend.modules.outliner.core.delete_blocks)?frontend.modules.outliner.core.delete_blocks.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks,opts], 0));
});
frontend.modules.outliner.core.move_blocks_BANG_ = (function frontend$modules$outliner$core$move_blocks_BANG_(blocks,target_block,sibling_QMARK_){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.move_blocks;},new cljs.core.Symbol("frontend.modules.outliner.core","move-blocks","frontend.modules.outliner.core/move-blocks",1978756318,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"move-blocks","move-blocks",684828528,null),"frontend/modules/outliner/core.cljs",18,1,601,601,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),new cljs.core.Symbol(null,"target-block","target-block",1988923544,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sibling?","sibling?",554402467,null),new cljs.core.Symbol(null,"outliner-op","outliner-op",-938203319,null)], null)], null)], null)),"Move `blocks` to `target-block` as siblings or children.",(cljs.core.truth_(frontend.modules.outliner.core.move_blocks)?frontend.modules.outliner.core.move_blocks.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks,target_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null)], 0));
});
frontend.modules.outliner.core.move_blocks_up_down_BANG_ = (function frontend$modules$outliner$core$move_blocks_up_down_BANG_(blocks,up_QMARK_){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.move_blocks_up_down;},new cljs.core.Symbol("frontend.modules.outliner.core","move-blocks-up-down","frontend.modules.outliner.core/move-blocks-up-down",337120721,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"move-blocks-up-down","move-blocks-up-down",-1284024709,null),"frontend/modules/outliner/core.cljs",26,1,638,638,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),new cljs.core.Symbol(null,"up?","up?",1718386499,null)], null)),"Move blocks up/down.",(cljs.core.truth_(frontend.modules.outliner.core.move_blocks_up_down)?frontend.modules.outliner.core.move_blocks_up_down.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks,up_QMARK_], 0));
});
frontend.modules.outliner.core.indent_outdent_blocks_BANG_ = (function frontend$modules$outliner$core$indent_outdent_blocks_BANG_(blocks,indent_QMARK_){
return frontend.modules.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Var(function(){return frontend.modules.outliner.core.indent_outdent_blocks;},new cljs.core.Symbol("frontend.modules.outliner.core","indent-outdent-blocks","frontend.modules.outliner.core/indent-outdent-blocks",78901460,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"frontend.modules.outliner.core","frontend.modules.outliner.core",276902031,null),new cljs.core.Symbol(null,"indent-outdent-blocks","indent-outdent-blocks",1536178814,null),"frontend/modules/outliner/core.cljs",28,1,680,680,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),new cljs.core.Symbol(null,"indent?","indent?",-1273006390,null)], null)),"Indent or outdent `blocks`.",(cljs.core.truth_(frontend.modules.outliner.core.indent_outdent_blocks)?frontend.modules.outliner.core.indent_outdent_blocks.cljs$lang$test:null)])),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks,indent_QMARK_], 0));
});

//# sourceMappingURL=frontend.modules.outliner.core.js.map
