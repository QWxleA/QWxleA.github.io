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
(datascript.pull_api.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57105,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57118 = k57105;
var G__57118__$1 = (((G__57118 instanceof cljs.core.Keyword))?G__57118.fqn:null);
switch (G__57118__$1) {
case "db":
return self__.db;

break;
case "visitor":
return self__.visitor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57105,else__5343__auto__);

}
}));

(datascript.pull_api.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57121){
var vec__57122 = p__57121;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57122,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57122,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.Context{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db","db",993250759),self__.db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"visitor","visitor",-1026865865),self__.visitor],null))], null),self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57104){
var self__ = this;
var G__57104__$1 = this;
return (new cljs.core.RecordIter((0),G__57104__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"visitor","visitor",-1026865865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1727735959 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57106,other57107){
var self__ = this;
var this57106__$1 = this;
return (((!((other57107 == null)))) && ((((this57106__$1.constructor === other57107.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57106__$1.db,other57107.db)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57106__$1.visitor,other57107.visitor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57106__$1.__extmap,other57107.__extmap)))))))));
}));

(datascript.pull_api.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),null,new cljs.core.Keyword(null,"visitor","visitor",-1026865865),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57105){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57134 = k57105;
var G__57134__$1 = (((G__57134 instanceof cljs.core.Keyword))?G__57134.fqn:null);
switch (G__57134__$1) {
case "db":
case "visitor":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57105);

}
}));

(datascript.pull_api.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57104){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57135 = cljs.core.keyword_identical_QMARK_;
var expr__57136 = k__5349__auto__;
if(cljs.core.truth_((pred__57135.cljs$core$IFn$_invoke$arity$2 ? pred__57135.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),expr__57136) : pred__57135.call(null,new cljs.core.Keyword(null,"db","db",993250759),expr__57136)))){
return (new datascript.pull_api.Context(G__57104,self__.visitor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57135.cljs$core$IFn$_invoke$arity$2 ? pred__57135.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visitor","visitor",-1026865865),expr__57136) : pred__57135.call(null,new cljs.core.Keyword(null,"visitor","visitor",-1026865865),expr__57136)))){
return (new datascript.pull_api.Context(self__.db,G__57104,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57104),null));
}
}
}));

(datascript.pull_api.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db","db",993250759),self__.db,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"visitor","visitor",-1026865865),self__.visitor,null))], null),self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57104){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.Context(self__.db,self__.visitor,G__57104,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_api.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"visitor","visitor",613665662,null)], null);
}));

(datascript.pull_api.Context.cljs$lang$type = true);

(datascript.pull_api.Context.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/Context",null,(1),null));
}));

(datascript.pull_api.Context.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/Context");
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
datascript.pull_api.map__GT_Context = (function datascript$pull_api$map__GT_Context(G__57108){
var extmap__5382__auto__ = (function (){var G__57147 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57108,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visitor","visitor",-1026865865)], 0));
if(cljs.core.record_QMARK_(G__57108)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57147);
} else {
return G__57147;
}
})();
return (new datascript.pull_api.Context(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(G__57108),new cljs.core.Keyword(null,"visitor","visitor",-1026865865).cljs$core$IFn$_invoke$arity$1(G__57108),null,cljs.core.not_empty(extmap__5382__auto__),null));
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

var datascript$pull_api$IFrame$_merge$dyn_57460 = (function (this$,result){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (datascript.pull_api._merge[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5391__auto__.call(null,this$,result));
} else {
var m__5389__auto__ = (datascript.pull_api._merge["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5389__auto__.call(null,this$,result));
} else {
throw cljs.core.missing_protocol("IFrame.-merge",this$);
}
}
});
datascript.pull_api._merge = (function datascript$pull_api$_merge(this$,result){
if((((!((this$ == null)))) && ((!((this$.datascript$pull_api$IFrame$_merge$arity$2 == null)))))){
return this$.datascript$pull_api$IFrame$_merge$arity$2(this$,result);
} else {
return datascript$pull_api$IFrame$_merge$dyn_57460(this$,result);
}
});

var datascript$pull_api$IFrame$_run$dyn_57461 = (function (this$,context){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (datascript.pull_api._run[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,context) : m__5391__auto__.call(null,this$,context));
} else {
var m__5389__auto__ = (datascript.pull_api._run["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,context) : m__5389__auto__.call(null,this$,context));
} else {
throw cljs.core.missing_protocol("IFrame.-run",this$);
}
}
});
datascript.pull_api._run = (function datascript$pull_api$_run(this$,context){
if((((!((this$ == null)))) && ((!((this$.datascript$pull_api$IFrame$_run$arity$2 == null)))))){
return this$.datascript$pull_api$IFrame$_run$arity$2(this$,context);
} else {
return datascript$pull_api$IFrame$_run$dyn_57461(this$,context);
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
(datascript.pull_api.ResultFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57155,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57159 = k57155;
var G__57159__$1 = (((G__57159 instanceof cljs.core.Keyword))?G__57159.fqn:null);
switch (G__57159__$1) {
case "value":
return self__.value;

break;
case "datoms":
return self__.datoms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57155,else__5343__auto__);

}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57160){
var vec__57161 = p__57160;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57161,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57161,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.ResultFrame{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57154){
var self__ = this;
var G__57154__$1 = this;
return (new cljs.core.RecordIter((0),G__57154__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (836381841 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57156,other57157){
var self__ = this;
var this57156__$1 = this;
return (((!((other57157 == null)))) && ((((this57156__$1.constructor === other57157.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57156__$1.value,other57157.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57156__$1.datoms,other57157.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57156__$1.__extmap,other57157.__extmap)))))))));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57155){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57170 = k57155;
var G__57170__$1 = (((G__57170 instanceof cljs.core.Keyword))?G__57170.fqn:null);
switch (G__57170__$1) {
case "value":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57155);

}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57154){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57171 = cljs.core.keyword_identical_QMARK_;
var expr__57172 = k__5349__auto__;
if(cljs.core.truth_((pred__57171.cljs$core$IFn$_invoke$arity$2 ? pred__57171.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__57172) : pred__57171.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__57172)))){
return (new datascript.pull_api.ResultFrame(G__57154,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57171.cljs$core$IFn$_invoke$arity$2 ? pred__57171.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57172) : pred__57171.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57172)))){
return (new datascript.pull_api.ResultFrame(self__.value,G__57154,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57154),null));
}
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57154){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,G__57154,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_api.ResultFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null);
}));

(datascript.pull_api.ResultFrame.cljs$lang$type = true);

(datascript.pull_api.ResultFrame.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/ResultFrame",null,(1),null));
}));

(datascript.pull_api.ResultFrame.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/ResultFrame");
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
datascript.pull_api.map__GT_ResultFrame = (function datascript$pull_api$map__GT_ResultFrame(G__57158){
var extmap__5382__auto__ = (function (){var G__57174 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57158,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__57158)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57174);
} else {
return G__57174;
}
})();
return (new datascript.pull_api.ResultFrame(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__57158),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__57158),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57176,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57181 = k57176;
var G__57181__$1 = (((G__57181 instanceof cljs.core.Keyword))?G__57181.fqn:null);
switch (G__57181__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57176,else__5343__auto__);

}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57185){
var vec__57186 = p__57185;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57186,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57186,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.MultivalAttrFrame{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57175){
var self__ = this;
var G__57175__$1 = this;
return (new cljs.core.RecordIter((0),G__57175__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1829867699 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57177,other57178){
var self__ = this;
var this57177__$1 = this;
return (((!((other57178 == null)))) && ((((this57177__$1.constructor === other57178.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57177__$1.acc,other57178.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57177__$1.attr,other57178.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57177__$1.datoms,other57178.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57177__$1.__extmap,other57178.__extmap)))))))))));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57176){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57190 = k57176;
var G__57190__$1 = (((G__57190 instanceof cljs.core.Keyword))?G__57190.fqn:null);
switch (G__57190__$1) {
case "acc":
case "attr":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57176);

}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57175){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57191 = cljs.core.keyword_identical_QMARK_;
var expr__57192 = k__5349__auto__;
if(cljs.core.truth_((pred__57191.cljs$core$IFn$_invoke$arity$2 ? pred__57191.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__57192) : pred__57191.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__57192)))){
return (new datascript.pull_api.MultivalAttrFrame(G__57175,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57191.cljs$core$IFn$_invoke$arity$2 ? pred__57191.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57192) : pred__57191.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57192)))){
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,G__57175,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57191.cljs$core$IFn$_invoke$arity$2 ? pred__57191.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57192) : pred__57191.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57192)))){
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,G__57175,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57175),null));
}
}
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57175){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,G__57175,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame((function (){var G__57195 = cljs.core.not_empty(cljs.core.persistent_BANG_(acc__$1));
var fexpr__57194 = self__.attr.xform;
return (fexpr__57194.cljs$core$IFn$_invoke$arity$1 ? fexpr__57194.cljs$core$IFn$_invoke$arity$1(G__57195) : fexpr__57194.call(null,G__57195));
})(),(function (){var or__5043__auto__ = datoms__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = self__.attr.limit;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(acc__$1) >= self__.attr.limit);
} else {
return and__5041__auto__;
}
})())){
var datoms__$2 = datoms__$1;
while(true){
var datom__$1 = datascript.pull_api.first_seq(datoms__$2);
if((((datom__$1 == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom__$1.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.persistent_BANG_(acc__$1),(function (){var or__5043__auto__ = datoms__$2;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
var G__57479 = datascript.pull_api.next_seq(datoms__$2);
datoms__$2 = G__57479;
continue;
}
break;
}
} else {
var G__57480 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datom.v);
var G__57481 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__57480;
datoms__$1 = G__57481;
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

(datascript.pull_api.MultivalAttrFrame.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/MultivalAttrFrame",null,(1),null));
}));

(datascript.pull_api.MultivalAttrFrame.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/MultivalAttrFrame");
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
datascript.pull_api.map__GT_MultivalAttrFrame = (function datascript$pull_api$map__GT_MultivalAttrFrame(G__57179){
var extmap__5382__auto__ = (function (){var G__57216 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57179,new cljs.core.Keyword(null,"acc","acc",838566312),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__57179)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57216);
} else {
return G__57216;
}
})();
return (new datascript.pull_api.MultivalAttrFrame(new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__57179),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__57179),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__57179),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57222,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57226 = k57222;
var G__57226__$1 = (((G__57226 instanceof cljs.core.Keyword))?G__57226.fqn:null);
switch (G__57226__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57222,else__5343__auto__);

}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57227){
var vec__57228 = p__57227;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57228,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57228,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.MultivalRefAttrFrame{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57221){
var self__ = this;
var G__57221__$1 = this;
return (new cljs.core.RecordIter((0),G__57221__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1769511936 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57223,other57224){
var self__ = this;
var this57223__$1 = this;
return (((!((other57224 == null)))) && ((((this57223__$1.constructor === other57224.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57223__$1.seen,other57224.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57223__$1.recursion_limits,other57224.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57223__$1.acc,other57224.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57223__$1.pattern,other57224.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57223__$1.attr,other57224.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57223__$1.datoms,other57224.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57223__$1.__extmap,other57224.__extmap)))))))))))))))));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57222){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57243 = k57222;
var G__57243__$1 = (((G__57243 instanceof cljs.core.Keyword))?G__57243.fqn:null);
switch (G__57243__$1) {
case "seen":
case "recursion-limits":
case "acc":
case "pattern":
case "attr":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57222);

}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57221){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57244 = cljs.core.keyword_identical_QMARK_;
var expr__57245 = k__5349__auto__;
if(cljs.core.truth_((pred__57244.cljs$core$IFn$_invoke$arity$2 ? pred__57244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57245) : pred__57244.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57245)))){
return (new datascript.pull_api.MultivalRefAttrFrame(G__57221,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57244.cljs$core$IFn$_invoke$arity$2 ? pred__57244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57245) : pred__57244.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57245)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,G__57221,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57244.cljs$core$IFn$_invoke$arity$2 ? pred__57244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__57245) : pred__57244.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__57245)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,G__57221,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57244.cljs$core$IFn$_invoke$arity$2 ? pred__57244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57245) : pred__57244.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57245)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,G__57221,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57244.cljs$core$IFn$_invoke$arity$2 ? pred__57244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57245) : pred__57244.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57245)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__57221,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57244.cljs$core$IFn$_invoke$arity$2 ? pred__57244.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57245) : pred__57244.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57245)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__57221,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57221),null));
}
}
}
}
}
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57221){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,G__57221,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame((function (){var G__57251 = cljs.core.not_empty(cljs.core.persistent_BANG_(self__.acc));
var fexpr__57250 = self__.attr.xform;
return (fexpr__57250.cljs$core$IFn$_invoke$arity$1 ? fexpr__57250.cljs$core$IFn$_invoke$arity$1(G__57251) : fexpr__57250.call(null,G__57251));
})(),(function (){var or__5043__auto__ = self__.datoms;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = self__.attr.limit;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(self__.acc) >= self__.attr.limit);
} else {
return and__5041__auto__;
}
})())){
var datoms__$1 = self__.datoms;
while(true){
var datom__$1 = datascript.pull_api.first_seq(datoms__$1);
if((((datom__$1 == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom__$1.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.persistent_BANG_(self__.acc),(function (){var or__5043__auto__ = datoms__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
var G__57511 = datascript.pull_api.next_seq(datoms__$1);
datoms__$1 = G__57511;
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

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/MultivalRefAttrFrame",null,(1),null));
}));

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/MultivalRefAttrFrame");
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
datascript.pull_api.map__GT_MultivalRefAttrFrame = (function datascript$pull_api$map__GT_MultivalRefAttrFrame(G__57225){
var extmap__5382__auto__ = (function (){var G__57265 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57225,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__57225)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57265);
} else {
return G__57265;
}
})();
return (new datascript.pull_api.MultivalRefAttrFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__57225),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__57225),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__57225),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__57225),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__57225),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__57225),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.pull_api.AttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57267,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57271 = k57267;
var G__57271__$1 = (((G__57271 instanceof cljs.core.Keyword))?G__57271.fqn:null);
switch (G__57271__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57267,else__5343__auto__);

}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57275){
var vec__57276 = p__57275;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57276,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57276,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.AttrsFrame{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57266){
var self__ = this;
var G__57266__$1 = this;
return (new cljs.core.RecordIter((0),G__57266__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1127179791 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57268,other57269){
var self__ = this;
var this57268__$1 = this;
return (((!((other57269 == null)))) && ((((this57268__$1.constructor === other57269.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57268__$1.seen,other57269.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57268__$1.recursion_limits,other57269.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57268__$1.acc,other57269.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57268__$1.pattern,other57269.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57268__$1.attr,other57269.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57268__$1.attrs,other57269.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57268__$1.datoms,other57269.datoms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57268__$1.id,other57269.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57268__$1.__extmap,other57269.__extmap)))))))))))))))))))));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57267){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57293 = k57267;
var G__57293__$1 = (((G__57293 instanceof cljs.core.Keyword))?G__57293.fqn:null);
switch (G__57293__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k57267);

}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57266){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57294 = cljs.core.keyword_identical_QMARK_;
var expr__57295 = k__5349__auto__;
if(cljs.core.truth_((pred__57294.cljs$core$IFn$_invoke$arity$2 ? pred__57294.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57295) : pred__57294.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57295)))){
return (new datascript.pull_api.AttrsFrame(G__57266,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57294.cljs$core$IFn$_invoke$arity$2 ? pred__57294.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57295) : pred__57294.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57295)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,G__57266,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57294.cljs$core$IFn$_invoke$arity$2 ? pred__57294.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__57295) : pred__57294.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__57295)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,G__57266,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57294.cljs$core$IFn$_invoke$arity$2 ? pred__57294.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57295) : pred__57294.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57295)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,G__57266,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57294.cljs$core$IFn$_invoke$arity$2 ? pred__57294.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57295) : pred__57294.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57295)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__57266,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57294.cljs$core$IFn$_invoke$arity$2 ? pred__57294.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57295) : pred__57294.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57295)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__57266,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57294.cljs$core$IFn$_invoke$arity$2 ? pred__57294.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57295) : pred__57294.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__57295)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,G__57266,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57294.cljs$core$IFn$_invoke$arity$2 ? pred__57294.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__57295) : pred__57294.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__57295)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,G__57266,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57266),null));
}
}
}
}
}
}
}
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null))], null),self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57266){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,G__57266,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$_merge$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,datascript.pull_api.assoc_some_BANG_(self__.acc,self__.attr.as,result.value),self__.pattern,datascript.pull_api.first_seq(self__.attrs),datascript.pull_api.next_seq(self__.attrs),cljs.core.not_empty((function (){var or__5043__auto__ = result.datoms;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57314 = self__.seen;
var G__57315 = self__.recursion_limits;
var G__57316 = acc__$1;
var G__57317 = self__.pattern;
var G__57318 = datascript.pull_api.first_seq(self__.pattern.reverse_attrs);
var G__57319 = datascript.pull_api.next_seq(self__.pattern.reverse_attrs);
var G__57320 = self__.id;
return (datascript.pull_api.__GT_ReverseAttrsFrame.cljs$core$IFn$_invoke$arity$7 ? datascript.pull_api.__GT_ReverseAttrsFrame.cljs$core$IFn$_invoke$arity$7(G__57314,G__57315,G__57316,G__57317,G__57318,G__57319,G__57320) : datascript.pull_api.__GT_ReverseAttrsFrame.call(null,G__57314,G__57315,G__57316,G__57317,G__57318,G__57319,G__57320));
})()], null);
} else {
if((((!((attr__$1 == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr__$1.name)))){
var G__57528 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,(function (){var fexpr__57321 = attr__$1.xform;
return (fexpr__57321.cljs$core$IFn$_invoke$arity$1 ? fexpr__57321.cljs$core$IFn$_invoke$arity$1(self__.id) : fexpr__57321.call(null,self__.id));
})());
var G__57529 = datascript.pull_api.first_seq(attrs__$1);
var G__57530 = datascript.pull_api.next_seq(attrs__$1);
var G__57531 = datoms__$1;
acc__$1 = G__57528;
attr__$1 = G__57529;
attrs__$1 = G__57530;
datoms__$1 = G__57531;
continue;
} else {
var datom = datascript.pull_api.first_seq(datoms__$1);
var cmp = (cljs.core.truth_((function (){var and__5041__auto__ = datom;
if(cljs.core.truth_(and__5041__auto__)){
return attr__$1;
} else {
return and__5041__auto__;
}
})())?cljs.core.compare(attr__$1.name,datom.a):null);
var attr_ahead_QMARK_ = (function (){var or__5043__auto__ = (attr__$1 == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = cmp;
if(cljs.core.truth_(and__5041__auto__)){
return (cmp > (0));
} else {
return and__5041__auto__;
}
}
})();
var datom_ahead_QMARK_ = (function (){var or__5043__auto__ = (datom == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = cmp;
if(cljs.core.truth_(and__5041__auto__)){
return (cmp < (0));
} else {
return and__5041__auto__;
}
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = self__.pattern.wildcard_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (!((datom == null)));
if(and__5041__auto____$1){
return attr_ahead_QMARK_;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var datom_attr = datascript.lru._get(datascript.db.unfiltered_db(context.db).pull_attrs,datom.a,((function (acc__$1,attr__$1,attrs__$1,datoms__$1,datom,cmp,attr_ahead_QMARK_,datom_ahead_QMARK_,this$__$1){
return (function (){
return datascript.pull_parser.parse_attr_name(context.db,datom.a);
});})(acc__$1,attr__$1,attrs__$1,datoms__$1,datom,cmp,attr_ahead_QMARK_,datom_ahead_QMARK_,this$__$1))
);
var G__57536 = acc__$1;
var G__57537 = datom_attr;
var G__57538 = (cljs.core.truth_(attr__$1)?datascript.pull_api.conj_seq(attrs__$1,attr__$1):null);
var G__57539 = datoms__$1;
acc__$1 = G__57536;
attr__$1 = G__57537;
attrs__$1 = G__57538;
datoms__$1 = G__57539;
continue;
} else {
if(cljs.core.truth_(attr_ahead_QMARK_)){
var G__57541 = acc__$1;
var G__57542 = attr__$1;
var G__57543 = attrs__$1;
var G__57544 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__57541;
attr__$1 = G__57542;
attrs__$1 = G__57543;
datoms__$1 = G__57544;
continue;
} else {
datascript.pull_api.visit(context,new cljs.core.Keyword("db.pull","attr","db.pull/attr",-533298746),self__.id,attr__$1.name,null);

if(cljs.core.truth_((function (){var and__5041__auto__ = datom_ahead_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (attr__$1 == null);
} else {
return and__5041__auto__;
}
})())){
var G__57552 = acc__$1;
var G__57553 = datascript.pull_api.first_seq(attrs__$1);
var G__57554 = datascript.pull_api.next_seq(attrs__$1);
var G__57555 = datoms__$1;
acc__$1 = G__57552;
attr__$1 = G__57553;
attrs__$1 = G__57554;
datoms__$1 = G__57555;
continue;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = datom_ahead_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (!((new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1) == null)));
} else {
return and__5041__auto__;
}
})())){
var G__57557 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1));
var G__57558 = datascript.pull_api.first_seq(attrs__$1);
var G__57559 = datascript.pull_api.next_seq(attrs__$1);
var G__57560 = datoms__$1;
acc__$1 = G__57557;
attr__$1 = G__57558;
attrs__$1 = G__57559;
datoms__$1 = G__57560;
continue;
} else {
if(cljs.core.truth_(datom_ahead_QMARK_)){
var temp__5722__auto__ = (function (){var fexpr__57326 = attr__$1.xform;
return (fexpr__57326.cljs$core$IFn$_invoke$arity$1 ? fexpr__57326.cljs$core$IFn$_invoke$arity$1(null) : fexpr__57326.call(null,null));
})();
if((temp__5722__auto__ == null)){
var G__57561 = acc__$1;
var G__57562 = datascript.pull_api.first_seq(attrs__$1);
var G__57563 = datascript.pull_api.next_seq(attrs__$1);
var G__57564 = datoms__$1;
acc__$1 = G__57561;
attr__$1 = G__57562;
attrs__$1 = G__57563;
datoms__$1 = G__57564;
continue;
} else {
var value = temp__5722__auto__;
var G__57566 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,value);
var G__57567 = datascript.pull_api.first_seq(attrs__$1);
var G__57568 = datascript.pull_api.next_seq(attrs__$1);
var G__57569 = datoms__$1;
acc__$1 = G__57566;
attr__$1 = G__57567;
attrs__$1 = G__57568;
datoms__$1 = G__57569;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = attr__$1.multival_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return attr__$1.ref_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),self__.pattern,attr__$1,datoms__$1,null,null,null))], null);
} else {
if(cljs.core.truth_(attr__$1.multival_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalAttrFrame(cljs.core.transient$(cljs.core.PersistentVector.EMPTY),attr__$1,datoms__$1,null,null,null))], null);
} else {
if(cljs.core.truth_(attr__$1.ref_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(function (){var G__57327 = context;
var G__57328 = self__.seen;
var G__57329 = self__.recursion_limits;
var G__57330 = self__.pattern;
var G__57331 = attr__$1;
var G__57332 = datom.v;
return (datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(G__57327,G__57328,G__57329,G__57330,G__57331,G__57332) : datascript.pull_api.ref_frame.call(null,G__57327,G__57328,G__57329,G__57330,G__57331,G__57332));
})()], null);
} else {
var G__57574 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,(function (){var G__57334 = datom.v;
var fexpr__57333 = attr__$1.xform;
return (fexpr__57333.cljs$core$IFn$_invoke$arity$1 ? fexpr__57333.cljs$core$IFn$_invoke$arity$1(G__57334) : fexpr__57333.call(null,G__57334));
})());
var G__57575 = datascript.pull_api.first_seq(attrs__$1);
var G__57576 = datascript.pull_api.next_seq(attrs__$1);
var G__57577 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__57574;
attr__$1 = G__57575;
attrs__$1 = G__57576;
datoms__$1 = G__57577;
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

(datascript.pull_api.AttrsFrame.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/AttrsFrame",null,(1),null));
}));

(datascript.pull_api.AttrsFrame.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/AttrsFrame");
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
datascript.pull_api.map__GT_AttrsFrame = (function datascript$pull_api$map__GT_AttrsFrame(G__57270){
var extmap__5382__auto__ = (function (){var G__57336 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57270,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
if(cljs.core.record_QMARK_(G__57270)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57336);
} else {
return G__57336;
}
})();
return (new datascript.pull_api.AttrsFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__57270),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__57270),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__57270),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__57270),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__57270),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__57270),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__57270),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__57270),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57346,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57351 = k57346;
var G__57351__$1 = (((G__57351 instanceof cljs.core.Keyword))?G__57351.fqn:null);
switch (G__57351__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57346,else__5343__auto__);

}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57356){
var vec__57357 = p__57356;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57357,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57357,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.pull-api.ReverseAttrsFrame{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57345){
var self__ = this;
var G__57345__$1 = this;
return (new cljs.core.RecordIter((0),G__57345__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (470210558 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57347,other57348){
var self__ = this;
var this57347__$1 = this;
return (((!((other57348 == null)))) && ((((this57347__$1.constructor === other57348.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57347__$1.seen,other57348.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57347__$1.recursion_limits,other57348.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57347__$1.acc,other57348.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57347__$1.pattern,other57348.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57347__$1.attr,other57348.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57347__$1.attrs,other57348.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57347__$1.id,other57348.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57347__$1.__extmap,other57348.__extmap)))))))))))))))))));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57346){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57364 = k57346;
var G__57364__$1 = (((G__57364 instanceof cljs.core.Keyword))?G__57364.fqn:null);
switch (G__57364__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k57346);

}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57345){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57365 = cljs.core.keyword_identical_QMARK_;
var expr__57366 = k__5349__auto__;
if(cljs.core.truth_((pred__57365.cljs$core$IFn$_invoke$arity$2 ? pred__57365.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57366) : pred__57365.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__57366)))){
return (new datascript.pull_api.ReverseAttrsFrame(G__57345,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57365.cljs$core$IFn$_invoke$arity$2 ? pred__57365.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57366) : pred__57365.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__57366)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,G__57345,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57365.cljs$core$IFn$_invoke$arity$2 ? pred__57365.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__57366) : pred__57365.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__57366)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,G__57345,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57365.cljs$core$IFn$_invoke$arity$2 ? pred__57365.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57366) : pred__57365.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57366)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,G__57345,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57365.cljs$core$IFn$_invoke$arity$2 ? pred__57365.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57366) : pred__57365.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__57366)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__57345,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57365.cljs$core$IFn$_invoke$arity$2 ? pred__57365.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57366) : pred__57365.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__57366)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__57345,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57365.cljs$core$IFn$_invoke$arity$2 ? pred__57365.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__57366) : pred__57365.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__57366)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,G__57345,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57345),null));
}
}
}
}
}
}
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null))], null),self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57345){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,G__57345,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
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
var G__57584 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1));
var G__57585 = datascript.pull_api.first_seq(attrs__$1);
var G__57586 = datascript.pull_api.next_seq(attrs__$1);
acc__$1 = G__57584;
attr__$1 = G__57585;
attrs__$1 = G__57586;
continue;
} else {
if(cljs.core.empty_QMARK_(datoms)){
var G__57587 = acc__$1;
var G__57588 = datascript.pull_api.first_seq(attrs__$1);
var G__57589 = datascript.pull_api.next_seq(attrs__$1);
acc__$1 = G__57587;
attr__$1 = G__57588;
attrs__$1 = G__57589;
continue;
} else {
if(cljs.core.truth_(attr__$1.component_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,self__.id,null,null,null)),(function (){var G__57388 = context;
var G__57389 = self__.seen;
var G__57390 = self__.recursion_limits;
var G__57391 = self__.pattern;
var G__57392 = attr__$1;
var G__57393 = datascript.pull_api.first_seq(datoms).e;
return (datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(G__57388,G__57389,G__57390,G__57391,G__57392,G__57393) : datascript.pull_api.ref_frame.call(null,G__57388,G__57389,G__57390,G__57391,G__57392,G__57393));
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

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.pull-api/ReverseAttrsFrame",null,(1),null));
}));

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.pull-api/ReverseAttrsFrame");
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
datascript.pull_api.map__GT_ReverseAttrsFrame = (function datascript$pull_api$map__GT_ReverseAttrsFrame(G__57349){
var extmap__5382__auto__ = (function (){var G__57394 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57349,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
if(cljs.core.record_QMARK_(G__57349)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57394);
} else {
return G__57394;
}
})();
return (new datascript.pull_api.ReverseAttrsFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__57349),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__57349),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__57349),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__57349),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__57349),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__57349),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__57349),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

datascript.pull_api.ref_frame = (function datascript$pull_api$ref_frame(context,seen,recursion_limits,pattern,attr,id){
if(((cljs.core.not(attr.recursive_QMARK_)) && (cljs.core.not(attr.component_QMARK_)))){
var G__57399 = context;
var G__57400 = seen;
var G__57401 = recursion_limits;
var G__57402 = attr.pattern;
var G__57403 = id;
return (datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5 ? datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5(G__57399,G__57400,G__57401,G__57402,G__57403) : datascript.pull_api.attrs_frame.call(null,G__57399,G__57400,G__57401,G__57402,G__57403));
} else {
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(id) : seen.call(null,id)))){
return (new datascript.pull_api.ResultFrame(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),id], null),null,null,null,null));
} else {
var lim = (recursion_limits.cljs$core$IFn$_invoke$arity$1 ? recursion_limits.cljs$core$IFn$_invoke$arity$1(attr) : recursion_limits.call(null,attr));
if(cljs.core.truth_((function (){var and__5041__auto__ = lim;
if(cljs.core.truth_(and__5041__auto__)){
return (lim <= (0));
} else {
return and__5041__auto__;
}
})())){
return (new datascript.pull_api.ResultFrame(null,null,null,null,null));
} else {
var seen_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,id);
var recursion_limits_SINGLEQUOTE_ = (cljs.core.truth_(lim)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(recursion_limits,attr,cljs.core.dec):(cljs.core.truth_(attr.recursion_limit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(recursion_limits,attr,(attr.recursion_limit - (1))):recursion_limits
));
var G__57404 = context;
var G__57405 = seen_SINGLEQUOTE_;
var G__57406 = recursion_limits_SINGLEQUOTE_;
var G__57407 = (cljs.core.truth_(attr.recursive_QMARK_)?pattern:attr.pattern);
var G__57408 = id;
return (datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5 ? datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5(G__57404,G__57405,G__57406,G__57407,G__57408) : datascript.pull_api.attrs_frame.call(null,G__57404,G__57405,G__57406,G__57407,G__57408));

}
}
}
});
datascript.pull_api.attrs_frame = (function datascript$pull_api$attrs_frame(context,seen,recursion_limits,pattern,id){
var db = context.db;
var datoms = (cljs.core.truth_((function (){var and__5041__auto__ = pattern.wildcard_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (db instanceof datascript.db.DB);
} else {
return and__5041__auto__;
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
var map__57419 = parsed_opts;
var map__57419__$1 = cljs.core.__destructure_map(map__57419);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57419__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57419__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
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
var G__57594 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.conj_seq,stack_SINGLEQUOTE_,datascript.pull_api._run(last,context));
stack = G__57594;
continue;
} else {
if((stack_SINGLEQUOTE_ == null)){
return last.value;
} else {
var penultimate = datascript.pull_api.first_seq(stack_SINGLEQUOTE_);
var stack_SINGLEQUOTE__SINGLEQUOTE_ = datascript.pull_api.next_seq(stack_SINGLEQUOTE_);
var G__57595 = datascript.pull_api.conj_seq(stack_SINGLEQUOTE__SINGLEQUOTE_,datascript.pull_api._merge(penultimate,last));
stack = G__57595;
continue;

}
}
break;
}
}
});
datascript.pull_api.parse_opts = (function datascript$pull_api$parse_opts(var_args){
var G__57426 = arguments.length;
switch (G__57426) {
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

(datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3 = (function (db,pattern,p__57427){
var map__57428 = p__57427;
var map__57428__$1 = cljs.core.__destructure_map(map__57428);
var visitor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57428__$1,new cljs.core.Keyword(null,"visitor","visitor",-1026865865));
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
var G__57430 = arguments.length;
switch (G__57430) {
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
var G__57434 = arguments.length;
switch (G__57434) {
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__57431_SHARP_){
return datascript.pull_api.pull_impl(parsed_opts,p1__57431_SHARP_);
}),ids);
}));

(datascript.pull_api.pull_many.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=datascript.pull_api.js.map
