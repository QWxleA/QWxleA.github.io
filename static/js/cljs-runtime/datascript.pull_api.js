goog.provide('datascript.pull_api');



datascript.pull_api.first_seq = (function datascript$pull_api$first_seq(xs){
if((xs == null)){
return null;
} else {
return cljs.core._first(xs);
}
});
datascript.pull_api.next_seq = (function datascript$pull_api$next_seq(xs){
if((xs == null)){
return null;
} else {
return cljs.core._next(xs);
}
});
datascript.pull_api.conj_seq = (function datascript$pull_api$conj_seq(xs,x){
if((xs == null)){
return (new cljs.core.List(null,x,null,(1),null));
} else {
return cljs.core._conj(xs,x);
}
});
datascript.pull_api.assoc_some_BANG_ = (function datascript$pull_api$assoc_some_BANG_(m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
datascript.pull_api.conj_some_BANG_ = (function datascript$pull_api$conj_some_BANG_(xs,v){
if((v == null)){
return xs;
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(xs,v);
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
datascript.pull_api.Context = (function (db,visitor,__meta,__extmap,__hash){
this.db = db;
this.visitor = visitor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.pull_api.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71357,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71361 = k71357;
var G__71361__$1 = (((G__71361 instanceof cljs.core.Keyword))?G__71361.fqn:null);
switch (G__71361__$1) {
case "db":
return self__.db;

break;
case "visitor":
return self__.visitor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71357,else__4505__auto__);

}
}));

(datascript.pull_api.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71362){
var vec__71365 = p__71362;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71365,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71365,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.pull_api.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.pull-api.Context{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db","db",993250759),self__.db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"visitor","visitor",-1026865865),self__.visitor],null))], null),self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71356){
var self__ = this;
var G__71356__$1 = this;
return (new cljs.core.RecordIter((0),G__71356__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"visitor","visitor",-1026865865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1727735959 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.pull_api.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71358,other71359){
var self__ = this;
var this71358__$1 = this;
return (((!((other71359 == null)))) && ((((this71358__$1.constructor === other71359.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71358__$1.db,other71359.db)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71358__$1.visitor,other71359.visitor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71358__$1.__extmap,other71359.__extmap)))))))));
}));

(datascript.pull_api.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),null,new cljs.core.Keyword(null,"visitor","visitor",-1026865865),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.pull_api.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71357){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71375 = k71357;
var G__71375__$1 = (((G__71375 instanceof cljs.core.Keyword))?G__71375.fqn:null);
switch (G__71375__$1) {
case "db":
case "visitor":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71357);

}
}));

(datascript.pull_api.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71356){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71376 = cljs.core.keyword_identical_QMARK_;
var expr__71377 = k__4511__auto__;
if(cljs.core.truth_((pred__71376.cljs$core$IFn$_invoke$arity$2 ? pred__71376.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),expr__71377) : pred__71376.call(null,new cljs.core.Keyword(null,"db","db",993250759),expr__71377)))){
return (new datascript.pull_api.Context(G__71356,self__.visitor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71376.cljs$core$IFn$_invoke$arity$2 ? pred__71376.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visitor","visitor",-1026865865),expr__71377) : pred__71376.call(null,new cljs.core.Keyword(null,"visitor","visitor",-1026865865),expr__71377)))){
return (new datascript.pull_api.Context(self__.db,G__71356,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71356),null));
}
}
}));

(datascript.pull_api.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db","db",993250759),self__.db,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"visitor","visitor",-1026865865),self__.visitor,null))], null),self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71356){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.pull_api.Context(self__.db,self__.visitor,G__71356,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.pull_api.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"visitor","visitor",613665662,null)], null);
}));

(datascript.pull_api.Context.cljs$lang$type = true);

(datascript.pull_api.Context.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.pull-api/Context",null,(1),null));
}));

(datascript.pull_api.Context.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.pull-api/Context");
}));

/**
 * Positional factory function for datascript.pull-api/Context.
 */
datascript.pull_api.__GT_Context = (function datascript$pull_api$__GT_Context(db,visitor){
return (new datascript.pull_api.Context(db,visitor,null,null,null));
});

/**
 * Factory function for datascript.pull-api/Context, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_Context = (function datascript$pull_api$map__GT_Context(G__71360){
var extmap__4542__auto__ = (function (){var G__71382 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71360,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visitor","visitor",-1026865865)], 0));
if(cljs.core.record_QMARK_(G__71360)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71382);
} else {
return G__71382;
}
})();
return (new datascript.pull_api.Context(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(G__71360),new cljs.core.Keyword(null,"visitor","visitor",-1026865865).cljs$core$IFn$_invoke$arity$1(G__71360),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.pull_api.visit = (function datascript$pull_api$visit(context,pattern,e,a,v){
var temp__5724__auto__ = context.visitor;
if((temp__5724__auto__ == null)){
return null;
} else {
var visitor = temp__5724__auto__;
return (visitor.cljs$core$IFn$_invoke$arity$4 ? visitor.cljs$core$IFn$_invoke$arity$4(pattern,e,a,v) : visitor.call(null,pattern,e,a,v));
}
});

/**
 * @interface
 */
datascript.pull_api.IFrame = function(){};

var datascript$pull_api$IFrame$_merge$dyn_71690 = (function (this$,result){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (datascript.pull_api._merge[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__4551__auto__.call(null,this$,result));
} else {
var m__4549__auto__ = (datascript.pull_api._merge["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__4549__auto__.call(null,this$,result));
} else {
throw cljs.core.missing_protocol("IFrame.-merge",this$);
}
}
});
datascript.pull_api._merge = (function datascript$pull_api$_merge(this$,result){
if((((!((this$ == null)))) && ((!((this$.datascript$pull_api$IFrame$_merge$arity$2 == null)))))){
return this$.datascript$pull_api$IFrame$_merge$arity$2(this$,result);
} else {
return datascript$pull_api$IFrame$_merge$dyn_71690(this$,result);
}
});

var datascript$pull_api$IFrame$_run$dyn_71692 = (function (this$,context){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (datascript.pull_api._run[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,context) : m__4551__auto__.call(null,this$,context));
} else {
var m__4549__auto__ = (datascript.pull_api._run["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,context) : m__4549__auto__.call(null,this$,context));
} else {
throw cljs.core.missing_protocol("IFrame.-run",this$);
}
}
});
datascript.pull_api._run = (function datascript$pull_api$_run(this$,context){
if((((!((this$ == null)))) && ((!((this$.datascript$pull_api$IFrame$_run$arity$2 == null)))))){
return this$.datascript$pull_api$IFrame$_run$arity$2(this$,context);
} else {
return datascript$pull_api$IFrame$_run$dyn_71692(this$,context);
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
datascript.pull_api.ResultFrame = (function (value,datoms,__meta,__extmap,__hash){
this.value = value;
this.datoms = datoms;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.ResultFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71384,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71388 = k71384;
var G__71388__$1 = (((G__71388 instanceof cljs.core.Keyword))?G__71388.fqn:null);
switch (G__71388__$1) {
case "value":
return self__.value;

break;
case "datoms":
return self__.datoms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71384,else__4505__auto__);

}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71389){
var vec__71390 = p__71389;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71390,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71390,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.pull-api.ResultFrame{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71383){
var self__ = this;
var G__71383__$1 = this;
return (new cljs.core.RecordIter((0),G__71383__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (836381841 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71385,other71386){
var self__ = this;
var this71385__$1 = this;
return (((!((other71386 == null)))) && ((((this71385__$1.constructor === other71386.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71385__$1.value,other71386.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71385__$1.datoms,other71386.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71385__$1.__extmap,other71386.__extmap)))))))));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71384){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71397 = k71384;
var G__71397__$1 = (((G__71397 instanceof cljs.core.Keyword))?G__71397.fqn:null);
switch (G__71397__$1) {
case "value":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71384);

}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71383){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71403 = cljs.core.keyword_identical_QMARK_;
var expr__71404 = k__4511__auto__;
if(cljs.core.truth_((pred__71403.cljs$core$IFn$_invoke$arity$2 ? pred__71403.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__71404) : pred__71403.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__71404)))){
return (new datascript.pull_api.ResultFrame(G__71383,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71403.cljs$core$IFn$_invoke$arity$2 ? pred__71403.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__71404) : pred__71403.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__71404)))){
return (new datascript.pull_api.ResultFrame(self__.value,G__71383,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71383),null));
}
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71383){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,G__71383,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.pull_api.ResultFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null);
}));

(datascript.pull_api.ResultFrame.cljs$lang$type = true);

(datascript.pull_api.ResultFrame.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.pull-api/ResultFrame",null,(1),null));
}));

(datascript.pull_api.ResultFrame.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.pull-api/ResultFrame");
}));

/**
 * Positional factory function for datascript.pull-api/ResultFrame.
 */
datascript.pull_api.__GT_ResultFrame = (function datascript$pull_api$__GT_ResultFrame(value,datoms){
return (new datascript.pull_api.ResultFrame(value,datoms,null,null,null));
});

/**
 * Factory function for datascript.pull-api/ResultFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_ResultFrame = (function datascript$pull_api$map__GT_ResultFrame(G__71387){
var extmap__4542__auto__ = (function (){var G__71411 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71387,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__71387)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71411);
} else {
return G__71411;
}
})();
return (new datascript.pull_api.ResultFrame(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__71387),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__71387),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.MultivalAttrFrame = (function (acc,attr,datoms,__meta,__extmap,__hash){
this.acc = acc;
this.attr = attr;
this.datoms = datoms;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71416,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71424 = k71416;
var G__71424__$1 = (((G__71424 instanceof cljs.core.Keyword))?G__71424.fqn:null);
switch (G__71424__$1) {
case "acc":
return self__.acc;

break;
case "attr":
return self__.attr;

break;
case "datoms":
return self__.datoms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71416,else__4505__auto__);

}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71425){
var vec__71426 = p__71425;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71426,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71426,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.pull-api.MultivalAttrFrame{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71415){
var self__ = this;
var G__71415__$1 = this;
return (new cljs.core.RecordIter((0),G__71415__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1829867699 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71417,other71418){
var self__ = this;
var this71417__$1 = this;
return (((!((other71418 == null)))) && ((((this71417__$1.constructor === other71418.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71417__$1.acc,other71418.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71417__$1.attr,other71418.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71417__$1.datoms,other71418.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71417__$1.__extmap,other71418.__extmap)))))))))));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71416){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71430 = k71416;
var G__71430__$1 = (((G__71430 instanceof cljs.core.Keyword))?G__71430.fqn:null);
switch (G__71430__$1) {
case "acc":
case "attr":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71416);

}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71415){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71438 = cljs.core.keyword_identical_QMARK_;
var expr__71439 = k__4511__auto__;
if(cljs.core.truth_((pred__71438.cljs$core$IFn$_invoke$arity$2 ? pred__71438.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__71439) : pred__71438.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__71439)))){
return (new datascript.pull_api.MultivalAttrFrame(G__71415,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71438.cljs$core$IFn$_invoke$arity$2 ? pred__71438.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__71439) : pred__71438.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__71439)))){
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,G__71415,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71438.cljs$core$IFn$_invoke$arity$2 ? pred__71438.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__71439) : pred__71438.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__71439)))){
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,G__71415,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71415),null));
}
}
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71415){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,G__71415,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.MultivalAttrFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var acc__$1 = self__.acc;
var datoms__$1 = self__.datoms;
while(true){
var datom = datascript.pull_api.first_seq(datoms__$1);
if((((datom == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame((function (){var G__71443 = cljs.core.not_empty(cljs.core.persistent_BANG_(acc__$1));
var fexpr__71442 = self__.attr.xform;
return (fexpr__71442.cljs$core$IFn$_invoke$arity$1 ? fexpr__71442.cljs$core$IFn$_invoke$arity$1(G__71443) : fexpr__71442.call(null,G__71443));
})(),(function (){var or__4253__auto__ = datoms__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = self__.attr.limit;
if(cljs.core.truth_(and__4251__auto__)){
return (cljs.core.count(acc__$1) >= self__.attr.limit);
} else {
return and__4251__auto__;
}
})())){
var datoms__$2 = datoms__$1;
while(true){
var datom__$1 = datascript.pull_api.first_seq(datoms__$2);
if((((datom__$1 == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom__$1.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.persistent_BANG_(acc__$1),(function (){var or__4253__auto__ = datoms__$2;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
var G__71706 = datascript.pull_api.next_seq(datoms__$2);
datoms__$2 = G__71706;
continue;
}
break;
}
} else {
var G__71708 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datom.v);
var G__71709 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__71708;
datoms__$1 = G__71709;
continue;

}
}
break;
}
}));

(datascript.pull_api.MultivalAttrFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null);
}));

(datascript.pull_api.MultivalAttrFrame.cljs$lang$type = true);

(datascript.pull_api.MultivalAttrFrame.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.pull-api/MultivalAttrFrame",null,(1),null));
}));

(datascript.pull_api.MultivalAttrFrame.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.pull-api/MultivalAttrFrame");
}));

/**
 * Positional factory function for datascript.pull-api/MultivalAttrFrame.
 */
datascript.pull_api.__GT_MultivalAttrFrame = (function datascript$pull_api$__GT_MultivalAttrFrame(acc,attr,datoms){
return (new datascript.pull_api.MultivalAttrFrame(acc,attr,datoms,null,null,null));
});

/**
 * Factory function for datascript.pull-api/MultivalAttrFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_MultivalAttrFrame = (function datascript$pull_api$map__GT_MultivalAttrFrame(G__71419){
var extmap__4542__auto__ = (function (){var G__71445 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71419,new cljs.core.Keyword(null,"acc","acc",838566312),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__71419)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71445);
} else {
return G__71445;
}
})();
return (new datascript.pull_api.MultivalAttrFrame(new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__71419),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__71419),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__71419),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.MultivalRefAttrFrame = (function (seen,recursion_limits,acc,pattern,attr,datoms,__meta,__extmap,__hash){
this.seen = seen;
this.recursion_limits = recursion_limits;
this.acc = acc;
this.pattern = pattern;
this.attr = attr;
this.datoms = datoms;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71447,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71455 = k71447;
var G__71455__$1 = (((G__71455 instanceof cljs.core.Keyword))?G__71455.fqn:null);
switch (G__71455__$1) {
case "seen":
return self__.seen;

break;
case "recursion-limits":
return self__.recursion_limits;

break;
case "acc":
return self__.acc;

break;
case "pattern":
return self__.pattern;

break;
case "attr":
return self__.attr;

break;
case "datoms":
return self__.datoms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71447,else__4505__auto__);

}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71456){
var vec__71457 = p__71456;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71457,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71457,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.pull-api.MultivalRefAttrFrame{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71446){
var self__ = this;
var G__71446__$1 = this;
return (new cljs.core.RecordIter((0),G__71446__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1769511936 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71448,other71449){
var self__ = this;
var this71448__$1 = this;
return (((!((other71449 == null)))) && ((((this71448__$1.constructor === other71449.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71448__$1.seen,other71449.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71448__$1.recursion_limits,other71449.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71448__$1.acc,other71449.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71448__$1.pattern,other71449.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71448__$1.attr,other71449.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71448__$1.datoms,other71449.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71448__$1.__extmap,other71449.__extmap)))))))))))))))));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71447){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71460 = k71447;
var G__71460__$1 = (((G__71460 instanceof cljs.core.Keyword))?G__71460.fqn:null);
switch (G__71460__$1) {
case "seen":
case "recursion-limits":
case "acc":
case "pattern":
case "attr":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71447);

}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71446){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71461 = cljs.core.keyword_identical_QMARK_;
var expr__71462 = k__4511__auto__;
if(cljs.core.truth_((pred__71461.cljs$core$IFn$_invoke$arity$2 ? pred__71461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__71462) : pred__71461.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__71462)))){
return (new datascript.pull_api.MultivalRefAttrFrame(G__71446,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71461.cljs$core$IFn$_invoke$arity$2 ? pred__71461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__71462) : pred__71461.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__71462)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,G__71446,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71461.cljs$core$IFn$_invoke$arity$2 ? pred__71461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__71462) : pred__71461.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__71462)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,G__71446,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71461.cljs$core$IFn$_invoke$arity$2 ? pred__71461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__71462) : pred__71461.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__71462)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,G__71446,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71461.cljs$core$IFn$_invoke$arity$2 ? pred__71461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__71462) : pred__71461.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__71462)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__71446,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71461.cljs$core$IFn$_invoke$arity$2 ? pred__71461.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__71462) : pred__71461.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__71462)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__71446,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71446),null));
}
}
}
}
}
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71446){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,G__71446,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.MultivalRefAttrFrame.prototype.datascript$pull_api$IFrame$_merge$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,datascript.pull_api.conj_some_BANG_(self__.acc,result.value),self__.pattern,self__.attr,datascript.pull_api.next_seq(self__.datoms),null,null,null));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var datom = datascript.pull_api.first_seq(self__.datoms);
if((((datom == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame((function (){var G__71469 = cljs.core.not_empty(cljs.core.persistent_BANG_(self__.acc));
var fexpr__71468 = self__.attr.xform;
return (fexpr__71468.cljs$core$IFn$_invoke$arity$1 ? fexpr__71468.cljs$core$IFn$_invoke$arity$1(G__71469) : fexpr__71468.call(null,G__71469));
})(),(function (){var or__4253__auto__ = self__.datoms;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = self__.attr.limit;
if(cljs.core.truth_(and__4251__auto__)){
return (cljs.core.count(self__.acc) >= self__.attr.limit);
} else {
return and__4251__auto__;
}
})())){
var datoms__$1 = self__.datoms;
while(true){
var datom__$1 = datascript.pull_api.first_seq(datoms__$1);
if((((datom__$1 == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom__$1.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.persistent_BANG_(self__.acc),(function (){var or__4253__auto__ = datoms__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
var G__71725 = datascript.pull_api.next_seq(datoms__$1);
datoms__$1 = G__71725;
continue;
}
break;
}
} else {
var id = (cljs.core.truth_(self__.attr.reverse_QMARK_)?datom.e:datom.v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,(datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(context,self__.seen,self__.recursion_limits,self__.pattern,self__.attr,id) : datascript.pull_api.ref_frame.call(null,context,self__.seen,self__.recursion_limits,self__.pattern,self__.attr,id))], null);

}
}
}));

(datascript.pull_api.MultivalRefAttrFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seen","seen",1121531738,null),new cljs.core.Symbol(null,"recursion-limits","recursion-limits",-891577955,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null);
}));

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$type = true);

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.pull-api/MultivalRefAttrFrame",null,(1),null));
}));

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.pull-api/MultivalRefAttrFrame");
}));

/**
 * Positional factory function for datascript.pull-api/MultivalRefAttrFrame.
 */
datascript.pull_api.__GT_MultivalRefAttrFrame = (function datascript$pull_api$__GT_MultivalRefAttrFrame(seen,recursion_limits,acc,pattern,attr,datoms){
return (new datascript.pull_api.MultivalRefAttrFrame(seen,recursion_limits,acc,pattern,attr,datoms,null,null,null));
});

/**
 * Factory function for datascript.pull-api/MultivalRefAttrFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_MultivalRefAttrFrame = (function datascript$pull_api$map__GT_MultivalRefAttrFrame(G__71450){
var extmap__4542__auto__ = (function (){var G__71479 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71450,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__71450)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71479);
} else {
return G__71479;
}
})();
return (new datascript.pull_api.MultivalRefAttrFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__71450),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__71450),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__71450),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__71450),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__71450),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__71450),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.AttrsFrame = (function (seen,recursion_limits,acc,pattern,attr,attrs,datoms,id,__meta,__extmap,__hash){
this.seen = seen;
this.recursion_limits = recursion_limits;
this.acc = acc;
this.pattern = pattern;
this.attr = attr;
this.attrs = attrs;
this.datoms = datoms;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.AttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71486,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71490 = k71486;
var G__71490__$1 = (((G__71490 instanceof cljs.core.Keyword))?G__71490.fqn:null);
switch (G__71490__$1) {
case "seen":
return self__.seen;

break;
case "recursion-limits":
return self__.recursion_limits;

break;
case "acc":
return self__.acc;

break;
case "pattern":
return self__.pattern;

break;
case "attr":
return self__.attr;

break;
case "attrs":
return self__.attrs;

break;
case "datoms":
return self__.datoms;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71486,else__4505__auto__);

}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71491){
var vec__71492 = p__71491;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71492,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71492,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.pull-api.AttrsFrame{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71485){
var self__ = this;
var G__71485__$1 = this;
return (new cljs.core.RecordIter((0),G__71485__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1127179791 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71487,other71488){
var self__ = this;
var this71487__$1 = this;
return (((!((other71488 == null)))) && ((((this71487__$1.constructor === other71488.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71487__$1.seen,other71488.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71487__$1.recursion_limits,other71488.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71487__$1.acc,other71488.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71487__$1.pattern,other71488.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71487__$1.attr,other71488.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71487__$1.attrs,other71488.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71487__$1.datoms,other71488.datoms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71487__$1.id,other71488.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71487__$1.__extmap,other71488.__extmap)))))))))))))))))))));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71486){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71500 = k71486;
var G__71500__$1 = (((G__71500 instanceof cljs.core.Keyword))?G__71500.fqn:null);
switch (G__71500__$1) {
case "seen":
case "recursion-limits":
case "acc":
case "pattern":
case "attr":
case "attrs":
case "datoms":
case "id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71486);

}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71485){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71503 = cljs.core.keyword_identical_QMARK_;
var expr__71504 = k__4511__auto__;
if(cljs.core.truth_((pred__71503.cljs$core$IFn$_invoke$arity$2 ? pred__71503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__71504) : pred__71503.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__71504)))){
return (new datascript.pull_api.AttrsFrame(G__71485,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71503.cljs$core$IFn$_invoke$arity$2 ? pred__71503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__71504) : pred__71503.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__71504)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,G__71485,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71503.cljs$core$IFn$_invoke$arity$2 ? pred__71503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__71504) : pred__71503.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__71504)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,G__71485,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71503.cljs$core$IFn$_invoke$arity$2 ? pred__71503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__71504) : pred__71503.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__71504)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,G__71485,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71503.cljs$core$IFn$_invoke$arity$2 ? pred__71503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__71504) : pred__71503.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__71504)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__71485,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71503.cljs$core$IFn$_invoke$arity$2 ? pred__71503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__71504) : pred__71503.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__71504)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__71485,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71503.cljs$core$IFn$_invoke$arity$2 ? pred__71503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__71504) : pred__71503.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__71504)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,G__71485,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71503.cljs$core$IFn$_invoke$arity$2 ? pred__71503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__71504) : pred__71503.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__71504)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,G__71485,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71485),null));
}
}
}
}
}
}
}
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null))], null),self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71485){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,G__71485,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$_merge$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,datascript.pull_api.assoc_some_BANG_(self__.acc,self__.attr.as,result.value),self__.pattern,datascript.pull_api.first_seq(self__.attrs),datascript.pull_api.next_seq(self__.attrs),cljs.core.not_empty((function (){var or__4253__auto__ = result.datoms;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return datascript.pull_api.next_seq(self__.datoms);
}
})()),self__.id,null,null,null));
}));

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var acc__$1 = self__.acc;
var attr__$1 = self__.attr;
var attrs__$1 = self__.attrs;
var datoms__$1 = self__.datoms;
while(true){
if((((datoms__$1 == null)) && ((attr__$1 == null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71548 = self__.seen;
var G__71549 = self__.recursion_limits;
var G__71550 = acc__$1;
var G__71551 = self__.pattern;
var G__71552 = datascript.pull_api.first_seq(self__.pattern.reverse_attrs);
var G__71553 = datascript.pull_api.next_seq(self__.pattern.reverse_attrs);
var G__71554 = self__.id;
return (datascript.pull_api.__GT_ReverseAttrsFrame.cljs$core$IFn$_invoke$arity$7 ? datascript.pull_api.__GT_ReverseAttrsFrame.cljs$core$IFn$_invoke$arity$7(G__71548,G__71549,G__71550,G__71551,G__71552,G__71553,G__71554) : datascript.pull_api.__GT_ReverseAttrsFrame.call(null,G__71548,G__71549,G__71550,G__71551,G__71552,G__71553,G__71554));
})()], null);
} else {
if((((!((attr__$1 == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr__$1.name)))){
var G__71739 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,(function (){var fexpr__71558 = attr__$1.xform;
return (fexpr__71558.cljs$core$IFn$_invoke$arity$1 ? fexpr__71558.cljs$core$IFn$_invoke$arity$1(self__.id) : fexpr__71558.call(null,self__.id));
})());
var G__71740 = datascript.pull_api.first_seq(attrs__$1);
var G__71741 = datascript.pull_api.next_seq(attrs__$1);
var G__71742 = datoms__$1;
acc__$1 = G__71739;
attr__$1 = G__71740;
attrs__$1 = G__71741;
datoms__$1 = G__71742;
continue;
} else {
var datom = datascript.pull_api.first_seq(datoms__$1);
var cmp = (cljs.core.truth_((function (){var and__4251__auto__ = datom;
if(cljs.core.truth_(and__4251__auto__)){
return attr__$1;
} else {
return and__4251__auto__;
}
})())?cljs.core.compare(attr__$1.name,datom.a):null);
var attr_ahead_QMARK_ = (function (){var or__4253__auto__ = (attr__$1 == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = cmp;
if(cljs.core.truth_(and__4251__auto__)){
return (cmp > (0));
} else {
return and__4251__auto__;
}
}
})();
var datom_ahead_QMARK_ = (function (){var or__4253__auto__ = (datom == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = cmp;
if(cljs.core.truth_(and__4251__auto__)){
return (cmp < (0));
} else {
return and__4251__auto__;
}
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = self__.pattern.wildcard_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = (!((datom == null)));
if(and__4251__auto____$1){
return attr_ahead_QMARK_;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var datom_attr = datascript.lru._get(datascript.db.unfiltered_db(context.db).pull_attrs,datom.a,((function (acc__$1,attr__$1,attrs__$1,datoms__$1,datom,cmp,attr_ahead_QMARK_,datom_ahead_QMARK_,this$__$1){
return (function (){
return datascript.pull_parser.parse_attr_name(context.db,datom.a);
});})(acc__$1,attr__$1,attrs__$1,datoms__$1,datom,cmp,attr_ahead_QMARK_,datom_ahead_QMARK_,this$__$1))
);
var G__71743 = acc__$1;
var G__71744 = datom_attr;
var G__71745 = (cljs.core.truth_(attr__$1)?datascript.pull_api.conj_seq(attrs__$1,attr__$1):null);
var G__71746 = datoms__$1;
acc__$1 = G__71743;
attr__$1 = G__71744;
attrs__$1 = G__71745;
datoms__$1 = G__71746;
continue;
} else {
if(cljs.core.truth_(attr_ahead_QMARK_)){
var G__71747 = acc__$1;
var G__71748 = attr__$1;
var G__71749 = attrs__$1;
var G__71750 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__71747;
attr__$1 = G__71748;
attrs__$1 = G__71749;
datoms__$1 = G__71750;
continue;
} else {
datascript.pull_api.visit(context,new cljs.core.Keyword("db.pull","attr","db.pull/attr",-533298746),self__.id,attr__$1.name,null);

if(cljs.core.truth_((function (){var and__4251__auto__ = datom_ahead_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (attr__$1 == null);
} else {
return and__4251__auto__;
}
})())){
var G__71754 = acc__$1;
var G__71755 = datascript.pull_api.first_seq(attrs__$1);
var G__71756 = datascript.pull_api.next_seq(attrs__$1);
var G__71757 = datoms__$1;
acc__$1 = G__71754;
attr__$1 = G__71755;
attrs__$1 = G__71756;
datoms__$1 = G__71757;
continue;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = datom_ahead_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (!((new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1) == null)));
} else {
return and__4251__auto__;
}
})())){
var G__71758 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1));
var G__71759 = datascript.pull_api.first_seq(attrs__$1);
var G__71760 = datascript.pull_api.next_seq(attrs__$1);
var G__71761 = datoms__$1;
acc__$1 = G__71758;
attr__$1 = G__71759;
attrs__$1 = G__71760;
datoms__$1 = G__71761;
continue;
} else {
if(cljs.core.truth_(datom_ahead_QMARK_)){
var temp__5722__auto__ = (function (){var fexpr__71559 = attr__$1.xform;
return (fexpr__71559.cljs$core$IFn$_invoke$arity$1 ? fexpr__71559.cljs$core$IFn$_invoke$arity$1(null) : fexpr__71559.call(null,null));
})();
if((temp__5722__auto__ == null)){
var G__71762 = acc__$1;
var G__71763 = datascript.pull_api.first_seq(attrs__$1);
var G__71764 = datascript.pull_api.next_seq(attrs__$1);
var G__71765 = datoms__$1;
acc__$1 = G__71762;
attr__$1 = G__71763;
attrs__$1 = G__71764;
datoms__$1 = G__71765;
continue;
} else {
var value = temp__5722__auto__;
var G__71766 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,value);
var G__71767 = datascript.pull_api.first_seq(attrs__$1);
var G__71768 = datascript.pull_api.next_seq(attrs__$1);
var G__71769 = datoms__$1;
acc__$1 = G__71766;
attr__$1 = G__71767;
attrs__$1 = G__71768;
datoms__$1 = G__71769;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = attr__$1.multival_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return attr__$1.ref_QMARK_;
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),self__.pattern,attr__$1,datoms__$1,null,null,null))], null);
} else {
if(cljs.core.truth_(attr__$1.multival_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalAttrFrame(cljs.core.transient$(cljs.core.PersistentVector.EMPTY),attr__$1,datoms__$1,null,null,null))], null);
} else {
if(cljs.core.truth_(attr__$1.ref_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(function (){var G__71561 = context;
var G__71562 = self__.seen;
var G__71563 = self__.recursion_limits;
var G__71564 = self__.pattern;
var G__71565 = attr__$1;
var G__71566 = datom.v;
return (datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(G__71561,G__71562,G__71563,G__71564,G__71565,G__71566) : datascript.pull_api.ref_frame.call(null,G__71561,G__71562,G__71563,G__71564,G__71565,G__71566));
})()], null);
} else {
var G__71770 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,(function (){var G__71568 = datom.v;
var fexpr__71567 = attr__$1.xform;
return (fexpr__71567.cljs$core$IFn$_invoke$arity$1 ? fexpr__71567.cljs$core$IFn$_invoke$arity$1(G__71568) : fexpr__71567.call(null,G__71568));
})());
var G__71771 = datascript.pull_api.first_seq(attrs__$1);
var G__71772 = datascript.pull_api.next_seq(attrs__$1);
var G__71773 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__71770;
attr__$1 = G__71771;
attrs__$1 = G__71772;
datoms__$1 = G__71773;
continue;

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

(datascript.pull_api.AttrsFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seen","seen",1121531738,null),new cljs.core.Symbol(null,"recursion-limits","recursion-limits",-891577955,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullPattern","PullPattern",1378528189,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
}));

(datascript.pull_api.AttrsFrame.cljs$lang$type = true);

(datascript.pull_api.AttrsFrame.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.pull-api/AttrsFrame",null,(1),null));
}));

(datascript.pull_api.AttrsFrame.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.pull-api/AttrsFrame");
}));

/**
 * Positional factory function for datascript.pull-api/AttrsFrame.
 */
datascript.pull_api.__GT_AttrsFrame = (function datascript$pull_api$__GT_AttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,datoms,id){
return (new datascript.pull_api.AttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,datoms,id,null,null,null));
});

/**
 * Factory function for datascript.pull-api/AttrsFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_AttrsFrame = (function datascript$pull_api$map__GT_AttrsFrame(G__71489){
var extmap__4542__auto__ = (function (){var G__71572 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71489,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
if(cljs.core.record_QMARK_(G__71489)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71572);
} else {
return G__71572;
}
})();
return (new datascript.pull_api.AttrsFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__71489),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__71489),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__71489),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__71489),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__71489),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__71489),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__71489),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__71489),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.ReverseAttrsFrame = (function (seen,recursion_limits,acc,pattern,attr,attrs,id,__meta,__extmap,__hash){
this.seen = seen;
this.recursion_limits = recursion_limits;
this.acc = acc;
this.pattern = pattern;
this.attr = attr;
this.attrs = attrs;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71574,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71580 = k71574;
var G__71580__$1 = (((G__71580 instanceof cljs.core.Keyword))?G__71580.fqn:null);
switch (G__71580__$1) {
case "seen":
return self__.seen;

break;
case "recursion-limits":
return self__.recursion_limits;

break;
case "acc":
return self__.acc;

break;
case "pattern":
return self__.pattern;

break;
case "attr":
return self__.attr;

break;
case "attrs":
return self__.attrs;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71574,else__4505__auto__);

}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71582){
var vec__71583 = p__71582;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71583,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71583,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.pull-api.ReverseAttrsFrame{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71573){
var self__ = this;
var G__71573__$1 = this;
return (new cljs.core.RecordIter((0),G__71573__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (470210558 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71575,other71576){
var self__ = this;
var this71575__$1 = this;
return (((!((other71576 == null)))) && ((((this71575__$1.constructor === other71576.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71575__$1.seen,other71576.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71575__$1.recursion_limits,other71576.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71575__$1.acc,other71576.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71575__$1.pattern,other71576.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71575__$1.attr,other71576.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71575__$1.attrs,other71576.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71575__$1.id,other71576.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71575__$1.__extmap,other71576.__extmap)))))))))))))))))));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71574){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71599 = k71574;
var G__71599__$1 = (((G__71599 instanceof cljs.core.Keyword))?G__71599.fqn:null);
switch (G__71599__$1) {
case "seen":
case "recursion-limits":
case "acc":
case "pattern":
case "attr":
case "attrs":
case "id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71574);

}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71573){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71600 = cljs.core.keyword_identical_QMARK_;
var expr__71601 = k__4511__auto__;
if(cljs.core.truth_((pred__71600.cljs$core$IFn$_invoke$arity$2 ? pred__71600.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__71601) : pred__71600.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__71601)))){
return (new datascript.pull_api.ReverseAttrsFrame(G__71573,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71600.cljs$core$IFn$_invoke$arity$2 ? pred__71600.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__71601) : pred__71600.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__71601)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,G__71573,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71600.cljs$core$IFn$_invoke$arity$2 ? pred__71600.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__71601) : pred__71600.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__71601)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,G__71573,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71600.cljs$core$IFn$_invoke$arity$2 ? pred__71600.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__71601) : pred__71600.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__71601)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,G__71573,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71600.cljs$core$IFn$_invoke$arity$2 ? pred__71600.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__71601) : pred__71600.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__71601)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__71573,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71600.cljs$core$IFn$_invoke$arity$2 ? pred__71600.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__71601) : pred__71600.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__71601)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__71573,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71600.cljs$core$IFn$_invoke$arity$2 ? pred__71600.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__71601) : pred__71600.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__71601)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,G__71573,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71573),null));
}
}
}
}
}
}
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null))], null),self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71573){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,G__71573,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.ReverseAttrsFrame.prototype.datascript$pull_api$IFrame$_merge$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,datascript.pull_api.assoc_some_BANG_(self__.acc,self__.attr.as,result.value),self__.pattern,datascript.pull_api.first_seq(self__.attrs),datascript.pull_api.next_seq(self__.attrs),self__.id,null,null,null));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var acc__$1 = self__.acc;
var attr__$1 = self__.attr;
var attrs__$1 = self__.attrs;
while(true){
if((attr__$1 == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.not_empty(cljs.core.persistent_BANG_(acc__$1)),null,null,null,null))], null);
} else {
var name = attr__$1.name;
var db = context.db;
var datoms = (((db instanceof datascript.db.DB))?me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db.avet,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),name,self__.id,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),name,self__.id,(2147483647))):datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,name,self__.id], null)));
datascript.pull_api.visit(context,new cljs.core.Keyword("db.pull","reverse","db.pull/reverse",1999788297),null,name,self__.id);

if(((cljs.core.empty_QMARK_(datoms)) && ((!((new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1) == null)))))){
var G__71793 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1));
var G__71794 = datascript.pull_api.first_seq(attrs__$1);
var G__71795 = datascript.pull_api.next_seq(attrs__$1);
acc__$1 = G__71793;
attr__$1 = G__71794;
attrs__$1 = G__71795;
continue;
} else {
if(cljs.core.empty_QMARK_(datoms)){
var G__71796 = acc__$1;
var G__71797 = datascript.pull_api.first_seq(attrs__$1);
var G__71798 = datascript.pull_api.next_seq(attrs__$1);
acc__$1 = G__71796;
attr__$1 = G__71797;
attrs__$1 = G__71798;
continue;
} else {
if(cljs.core.truth_(attr__$1.component_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,self__.id,null,null,null)),(function (){var G__71617 = context;
var G__71618 = self__.seen;
var G__71619 = self__.recursion_limits;
var G__71620 = self__.pattern;
var G__71621 = attr__$1;
var G__71622 = datascript.pull_api.first_seq(datoms).e;
return (datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(G__71617,G__71618,G__71619,G__71620,G__71621,G__71622) : datascript.pull_api.ref_frame.call(null,G__71617,G__71618,G__71619,G__71620,G__71621,G__71622));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),self__.pattern,attr__$1,datoms,null,null,null))], null);

}
}
}
}
break;
}
}));

(datascript.pull_api.ReverseAttrsFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seen","seen",1121531738,null),new cljs.core.Symbol(null,"recursion-limits","recursion-limits",-891577955,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
}));

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$type = true);

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.pull-api/ReverseAttrsFrame",null,(1),null));
}));

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.pull-api/ReverseAttrsFrame");
}));

/**
 * Positional factory function for datascript.pull-api/ReverseAttrsFrame.
 */
datascript.pull_api.__GT_ReverseAttrsFrame = (function datascript$pull_api$__GT_ReverseAttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,id){
return (new datascript.pull_api.ReverseAttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,id,null,null,null));
});

/**
 * Factory function for datascript.pull-api/ReverseAttrsFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_ReverseAttrsFrame = (function datascript$pull_api$map__GT_ReverseAttrsFrame(G__71577){
var extmap__4542__auto__ = (function (){var G__71624 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71577,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
if(cljs.core.record_QMARK_(G__71577)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71624);
} else {
return G__71624;
}
})();
return (new datascript.pull_api.ReverseAttrsFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__71577),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__71577),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__71577),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__71577),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__71577),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__71577),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__71577),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.pull_api.ref_frame = (function datascript$pull_api$ref_frame(context,seen,recursion_limits,pattern,attr,id){
if(((cljs.core.not(attr.recursive_QMARK_)) && (cljs.core.not(attr.component_QMARK_)))){
var G__71632 = context;
var G__71633 = seen;
var G__71634 = recursion_limits;
var G__71635 = attr.pattern;
var G__71636 = id;
return (datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5 ? datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5(G__71632,G__71633,G__71634,G__71635,G__71636) : datascript.pull_api.attrs_frame.call(null,G__71632,G__71633,G__71634,G__71635,G__71636));
} else {
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(id) : seen.call(null,id)))){
return (new datascript.pull_api.ResultFrame(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),id], null),null,null,null,null));
} else {
var lim = (recursion_limits.cljs$core$IFn$_invoke$arity$1 ? recursion_limits.cljs$core$IFn$_invoke$arity$1(attr) : recursion_limits.call(null,attr));
if(cljs.core.truth_((function (){var and__4251__auto__ = lim;
if(cljs.core.truth_(and__4251__auto__)){
return (lim <= (0));
} else {
return and__4251__auto__;
}
})())){
return (new datascript.pull_api.ResultFrame(null,null,null,null,null));
} else {
var seen_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,id);
var recursion_limits_SINGLEQUOTE_ = (cljs.core.truth_(lim)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(recursion_limits,attr,cljs.core.dec):(cljs.core.truth_(attr.recursion_limit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(recursion_limits,attr,(attr.recursion_limit - (1))):recursion_limits
));
var G__71638 = context;
var G__71639 = seen_SINGLEQUOTE_;
var G__71640 = recursion_limits_SINGLEQUOTE_;
var G__71641 = (cljs.core.truth_(attr.recursive_QMARK_)?pattern:attr.pattern);
var G__71642 = id;
return (datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5 ? datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5(G__71638,G__71639,G__71640,G__71641,G__71642) : datascript.pull_api.attrs_frame.call(null,G__71638,G__71639,G__71640,G__71641,G__71642));

}
}
}
});
datascript.pull_api.attrs_frame = (function datascript$pull_api$attrs_frame(context,seen,recursion_limits,pattern,id){
var db = context.db;
var datoms = (cljs.core.truth_((function (){var and__4251__auto__ = pattern.wildcard_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (db instanceof datascript.db.DB);
} else {
return and__4251__auto__;
}
})())?me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db.eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,null,null,(2147483647))):(cljs.core.truth_(pattern.wildcard_QMARK_)?datascript.db._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)):(((pattern.first_attr == null))?null:(function (){var from = pattern.first_attr.name;
var to = pattern.last_attr.name;
if((db instanceof datascript.db.DB)){
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db.eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,from,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,to,null,(2147483647)));
} else {
return datascript.db._seek_datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));

}
})())));
if(cljs.core.truth_(pattern.wildcard_QMARK_)){
datascript.pull_api.visit(context,new cljs.core.Keyword("db.pull","wildcard","db.pull/wildcard",116316031),id,null,null);
} else {
}

return (new datascript.pull_api.AttrsFrame(seen,recursion_limits,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),pattern,datascript.pull_api.first_seq(pattern.attrs),datascript.pull_api.next_seq(pattern.attrs),datoms,id,null,null,null));
});
datascript.pull_api.pull_impl = (function datascript$pull_api$pull_impl(parsed_opts,id){
var map__71648 = parsed_opts;
var map__71648__$1 = cljs.core.__destructure_map(map__71648);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71648__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71648__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var temp__5724__auto__ = datascript.db.entid(context.db,id);
if((temp__5724__auto__ == null)){
return null;
} else {
var eid = temp__5724__auto__;
var stack = (new cljs.core.List(null,datascript.pull_api.attrs_frame(context,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,pattern,eid),null,(1),null));
while(true){
var last = datascript.pull_api.first_seq(stack);
var stack_SINGLEQUOTE_ = datascript.pull_api.next_seq(stack);
if((!((last instanceof datascript.pull_api.ResultFrame)))){
var G__71803 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.conj_seq,stack_SINGLEQUOTE_,datascript.pull_api._run(last,context));
stack = G__71803;
continue;
} else {
if((stack_SINGLEQUOTE_ == null)){
return last.value;
} else {
var penultimate = datascript.pull_api.first_seq(stack_SINGLEQUOTE_);
var stack_SINGLEQUOTE__SINGLEQUOTE_ = datascript.pull_api.next_seq(stack_SINGLEQUOTE_);
var G__71804 = datascript.pull_api.conj_seq(stack_SINGLEQUOTE__SINGLEQUOTE_,datascript.pull_api._merge(penultimate,last));
stack = G__71804;
continue;

}
}
break;
}
}
});
datascript.pull_api.parse_opts = (function datascript$pull_api$parse_opts(var_args){
var G__71654 = arguments.length;
switch (G__71654) {
case 2:
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2 = (function (db,pattern){
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3(db,pattern,null);
}));

(datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3 = (function (db,pattern,p__71655){
var map__71656 = p__71655;
var map__71656__$1 = cljs.core.__destructure_map(map__71656);
var visitor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71656__$1,new cljs.core.Keyword(null,"visitor","visitor",-1026865865));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),datascript.lru._get(datascript.db.unfiltered_db(db).pull_patterns,pattern,(function (){
return datascript.pull_parser.parse_pattern(db,pattern);
})),new cljs.core.Keyword(null,"context","context",-830191113),(new datascript.pull_api.Context(db,visitor,null,null,null))], null);
}));

(datascript.pull_api.parse_opts.cljs$lang$maxFixedArity = 3);

/**
 * Supported opts:
 * 
 * :visitor a fn of 4 arguments, will be called for every entity/attribute pull touches
 * 
 * (:db.pull/attr     e   a   nil) - when pulling a normal attribute, no matter if it has value or not
 * (:db.pull/wildcard e   nil nil) - when pulling every attribute on an entity
 * (:db.pull/reverse  nil a   v  ) - when pulling reverse attribute
 */
datascript.pull_api.pull = (function datascript$pull_api$pull(var_args){
var G__71658 = arguments.length;
switch (G__71658) {
case 3:
return datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$3 = (function (db,pattern,id){
return datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$4(db,pattern,id,cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$4 = (function (db,pattern,id,opts){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var parsed_opts = datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3(db,pattern,opts);
return datascript.pull_api.pull_impl(parsed_opts,id);
}));

(datascript.pull_api.pull.cljs$lang$maxFixedArity = 4);

datascript.pull_api.pull_many = (function datascript$pull_api$pull_many(var_args){
var G__71662 = arguments.length;
switch (G__71662) {
case 3:
return datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$3 = (function (db,pattern,ids){
return datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$4(db,pattern,ids,cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$4 = (function (db,pattern,ids,opts){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var parsed_opts = datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3(db,pattern,opts);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71660_SHARP_){
return datascript.pull_api.pull_impl(parsed_opts,p1__71660_SHARP_);
}),ids);
}));

(datascript.pull_api.pull_many.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=datascript.pull_api.js.map
