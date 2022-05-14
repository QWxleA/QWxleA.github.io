goog.provide('datascript.parser');




/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

var datascript$parser$ITraversable$_collect$dyn_72174 = (function (_,pred,acc){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (datascript.parser._collect[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__4551__auto__.call(null,_,pred,acc));
} else {
var m__4549__auto__ = (datascript.parser._collect["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__4549__auto__.call(null,_,pred,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect",_);
}
}
});
datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
return datascript$parser$ITraversable$_collect$dyn_72174(_,pred,acc);
}
});

var datascript$parser$ITraversable$_collect_vars$dyn_72178 = (function (_,acc){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__4551__auto__.call(null,_,acc));
} else {
var m__4549__auto__ = (datascript.parser._collect_vars["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__4549__auto__.call(null,_,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect-vars",_);
}
}
});
datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
return datascript$parser$ITraversable$_collect_vars$dyn_72178(_,acc);
}
});

var datascript$parser$ITraversable$_postwalk$dyn_72179 = (function (_,f){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (datascript.parser._postwalk[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4551__auto__.call(null,_,f));
} else {
var m__4549__auto__ = (datascript.parser._postwalk["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4549__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("ITraversable.-postwalk",_);
}
}
});
datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
return datascript$parser$ITraversable$_postwalk$dyn_72179(_,f);
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),size)));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__71015_SHARP_,p2__71014_SHARP_){
var temp__5718__auto__ = (parse_el.cljs$core$IFn$_invoke$arity$1 ? parse_el.cljs$core$IFn$_invoke$arity$1(p2__71014_SHARP_) : parse_el.call(null,p2__71014_SHARP_));
if(cljs.core.truth_(temp__5718__auto__)){
var parsed = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__71015_SHARP_,parsed);
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__71018 = arguments.length;
switch (G__71018) {
case 2:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form,cljs.core.PersistentVector.EMPTY);
}));

(datascript.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(form) : pred.call(null,form)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect(form,pred,acc);
} else {
if(datascript.db.seqable_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,form__$1){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
}));

(datascript.parser.collect.cljs$lang$maxFixedArity = 3);

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__4253__auto__ = cljs.core.empty_QMARK_(coll);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
var G__71029 = datascript.parser._postwalk(form,f);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__71029) : f.call(null,G__71029));
} else {
if(cljs.core.map_QMARK_(form)){
var G__71030 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form__$1,p__71031){
var vec__71032 = p__71031;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71032,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71032,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,k,(datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(v,f) : datascript.parser.postwalk.call(null,v,f)));
}),form,form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__71030) : f.call(null,G__71030));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__71035 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71022_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__71022_SHARP_,f) : datascript.parser.postwalk.call(null,p1__71022_SHARP_,f));
}),form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__71035) : f.call(null,G__71035));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__71036 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71025_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__71025_SHARP_,f) : datascript.parser.postwalk.call(null,p1__71025_SHARP_,f));
}),form));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__71036) : f.call(null,G__71036));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form));

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta(obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__4253__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return obj;
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71046,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71050 = k71046;
switch (G__71050) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71046,else__4505__auto__);

}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71051){
var vec__71056 = p__71051;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71056,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71056,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Placeholder{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71045){
var self__ = this;
var G__71045__$1 = this;
return (new cljs.core.RecordIter((0),G__71045__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71047,other71048){
var self__ = this;
var this71047__$1 = this;
return (((!((other71048 == null)))) && ((((this71047__$1.constructor === other71048.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71047__$1.__extmap,other71048.__extmap)))));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71046){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k71046);
}));

(datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71045){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71065 = cljs.core.keyword_identical_QMARK_;
var expr__71066 = k__4511__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71045),null));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71045){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Placeholder(G__71045,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71042){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71043,acc71044){
var self__ = this;
var ___69689__auto____$1 = this;
return acc71044;
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71044){
var self__ = this;
var ___69689__auto____$1 = this;
return acc71044;
}));

(datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.Placeholder.cljs$lang$type = true);

(datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Placeholder",null,(1),null));
}));

(datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Placeholder");
}));

/**
 * Positional factory function for datascript.parser/Placeholder.
 */
datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

/**
 * Factory function for datascript.parser/Placeholder, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__71049){
var extmap__4542__auto__ = (function (){var G__71068 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__71049);
if(cljs.core.record_QMARK_(G__71049)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71068);
} else {
return G__71068;
}
})();
return (new datascript.parser.Placeholder(null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71073,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71082 = k71073;
var G__71082__$1 = (((G__71082 instanceof cljs.core.Keyword))?G__71082.fqn:null);
switch (G__71082__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71073,else__4505__auto__);

}
}));

(datascript.parser.Variable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71083){
var vec__71084 = p__71083;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71084,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71084,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Variable{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71072){
var self__ = this;
var G__71072__$1 = this;
return (new cljs.core.RecordIter((0),G__71072__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71074,other71075){
var self__ = this;
var this71074__$1 = this;
return (((!((other71075 == null)))) && ((((this71074__$1.constructor === other71075.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71074__$1.symbol,other71075.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71074__$1.__extmap,other71075.__extmap)))))));
}));

(datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71073){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71089 = k71073;
var G__71089__$1 = (((G__71089 instanceof cljs.core.Keyword))?G__71089.fqn:null);
switch (G__71089__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71073);

}
}));

(datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71072){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71091 = cljs.core.keyword_identical_QMARK_;
var expr__71092 = k__4511__auto__;
if(cljs.core.truth_((pred__71091.cljs$core$IFn$_invoke$arity$2 ? pred__71091.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__71092) : pred__71091.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__71092)))){
return (new datascript.parser.Variable(G__71072,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71072),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71072){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__71072,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71069){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk(self__.symbol,f71069),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71070,acc71071){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71070,self__.symbol,acc71071);
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71071){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71071,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc71071,self__.symbol));
}));

(datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.Variable.cljs$lang$type = true);

(datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Variable",null,(1),null));
}));

(datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Variable");
}));

/**
 * Positional factory function for datascript.parser/Variable.
 */
datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/Variable, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__71076){
var extmap__4542__auto__ = (function (){var G__71097 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71076,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__71076)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71097);
} else {
return G__71097;
}
})();
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__71076),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71102,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71106 = k71102;
var G__71106__$1 = (((G__71106 instanceof cljs.core.Keyword))?G__71106.fqn:null);
switch (G__71106__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71102,else__4505__auto__);

}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71110){
var vec__71111 = p__71110;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71111,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71111,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.SrcVar{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71101){
var self__ = this;
var G__71101__$1 = this;
return (new cljs.core.RecordIter((0),G__71101__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71103,other71104){
var self__ = this;
var this71103__$1 = this;
return (((!((other71104 == null)))) && ((((this71103__$1.constructor === other71104.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71103__$1.symbol,other71104.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71103__$1.__extmap,other71104.__extmap)))))));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71102){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71130 = k71102;
var G__71130__$1 = (((G__71130 instanceof cljs.core.Keyword))?G__71130.fqn:null);
switch (G__71130__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71102);

}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71101){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71135 = cljs.core.keyword_identical_QMARK_;
var expr__71136 = k__4511__auto__;
if(cljs.core.truth_((pred__71135.cljs$core$IFn$_invoke$arity$2 ? pred__71135.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__71136) : pred__71135.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__71136)))){
return (new datascript.parser.SrcVar(G__71101,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71101),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71101){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__71101,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71098){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk(self__.symbol,f71098),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71099,acc71100){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71099,self__.symbol,acc71100);
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71100){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71100,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc71100,self__.symbol));
}));

(datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.SrcVar.cljs$lang$type = true);

(datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/SrcVar",null,(1),null));
}));

(datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/SrcVar");
}));

/**
 * Positional factory function for datascript.parser/SrcVar.
 */
datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/SrcVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__71105){
var extmap__4542__auto__ = (function (){var G__71161 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71105,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__71105)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71161);
} else {
return G__71161;
}
})();
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__71105),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71166,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71174 = k71166;
switch (G__71174) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71166,else__4505__auto__);

}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71176){
var vec__71177 = p__71176;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71177,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71177,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71165){
var self__ = this;
var G__71165__$1 = this;
return (new cljs.core.RecordIter((0),G__71165__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71167,other71168){
var self__ = this;
var this71167__$1 = this;
return (((!((other71168 == null)))) && ((((this71167__$1.constructor === other71168.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71167__$1.__extmap,other71168.__extmap)))));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71166){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k71166);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71165){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71183 = cljs.core.keyword_identical_QMARK_;
var expr__71184 = k__4511__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71165),null));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71165){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__71165,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71162){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71163,acc71164){
var self__ = this;
var ___69689__auto____$1 = this;
return acc71164;
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71164){
var self__ = this;
var ___69689__auto____$1 = this;
return acc71164;
}));

(datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.DefaultSrc.cljs$lang$type = true);

(datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/DefaultSrc",null,(1),null));
}));

(datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/DefaultSrc");
}));

/**
 * Positional factory function for datascript.parser/DefaultSrc.
 */
datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

/**
 * Factory function for datascript.parser/DefaultSrc, taking a map of keywords to field values.
 */
datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__71173){
var extmap__4542__auto__ = (function (){var G__71190 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__71173);
if(cljs.core.record_QMARK_(G__71173)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71190);
} else {
return G__71190;
}
})();
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71195,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71199 = k71195;
switch (G__71199) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71195,else__4505__auto__);

}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71200){
var vec__71201 = p__71200;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71201,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71201,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.RulesVar{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71194){
var self__ = this;
var G__71194__$1 = this;
return (new cljs.core.RecordIter((0),G__71194__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71196,other71197){
var self__ = this;
var this71196__$1 = this;
return (((!((other71197 == null)))) && ((((this71196__$1.constructor === other71197.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71196__$1.__extmap,other71197.__extmap)))));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71195){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k71195);
}));

(datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71194){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71215 = cljs.core.keyword_identical_QMARK_;
var expr__71216 = k__4511__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71194),null));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71194){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.RulesVar(G__71194,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71191){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71192,acc71193){
var self__ = this;
var ___69689__auto____$1 = this;
return acc71193;
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71193){
var self__ = this;
var ___69689__auto____$1 = this;
return acc71193;
}));

(datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.RulesVar.cljs$lang$type = true);

(datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/RulesVar",null,(1),null));
}));

(datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/RulesVar");
}));

/**
 * Positional factory function for datascript.parser/RulesVar.
 */
datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

/**
 * Factory function for datascript.parser/RulesVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__71198){
var extmap__4542__auto__ = (function (){var G__71218 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__71198);
if(cljs.core.record_QMARK_(G__71198)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71218);
} else {
return G__71218;
}
})();
return (new datascript.parser.RulesVar(null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71223,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71231 = k71223;
var G__71231__$1 = (((G__71231 instanceof cljs.core.Keyword))?G__71231.fqn:null);
switch (G__71231__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71223,else__4505__auto__);

}
}));

(datascript.parser.Constant.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71232){
var vec__71233 = p__71232;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71233,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71233,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Constant{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71222){
var self__ = this;
var G__71222__$1 = this;
return (new cljs.core.RecordIter((0),G__71222__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71224,other71225){
var self__ = this;
var this71224__$1 = this;
return (((!((other71225 == null)))) && ((((this71224__$1.constructor === other71225.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71224__$1.value,other71225.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71224__$1.__extmap,other71225.__extmap)))))));
}));

(datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71223){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71237 = k71223;
var G__71237__$1 = (((G__71237 instanceof cljs.core.Keyword))?G__71237.fqn:null);
switch (G__71237__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71223);

}
}));

(datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71222){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71238 = cljs.core.keyword_identical_QMARK_;
var expr__71239 = k__4511__auto__;
if(cljs.core.truth_((pred__71238.cljs$core$IFn$_invoke$arity$2 ? pred__71238.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__71239) : pred__71238.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__71239)))){
return (new datascript.parser.Constant(G__71222,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71222),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71222){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__71222,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71219){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk(self__.value,f71219),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71220,acc71221){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71220,self__.value,acc71221);
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71221){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71221,self__.value) : datascript.parser.collect_vars_acc.call(null,acc71221,self__.value));
}));

(datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(datascript.parser.Constant.cljs$lang$type = true);

(datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Constant",null,(1),null));
}));

(datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Constant");
}));

/**
 * Positional factory function for datascript.parser/Constant.
 */
datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

/**
 * Factory function for datascript.parser/Constant, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__71226){
var extmap__4542__auto__ = (function (){var G__71241 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71226,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__71226)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71241);
} else {
return G__71241;
}
})();
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__71226),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71248,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71259 = k71248;
var G__71259__$1 = (((G__71259 instanceof cljs.core.Keyword))?G__71259.fqn:null);
switch (G__71259__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71248,else__4505__auto__);

}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71263){
var vec__71264 = p__71263;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71264,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71264,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71247){
var self__ = this;
var G__71247__$1 = this;
return (new cljs.core.RecordIter((0),G__71247__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71249,other71250){
var self__ = this;
var this71249__$1 = this;
return (((!((other71250 == null)))) && ((((this71249__$1.constructor === other71250.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71249__$1.symbol,other71250.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71249__$1.__extmap,other71250.__extmap)))))));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71248){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71273 = k71248;
var G__71273__$1 = (((G__71273 instanceof cljs.core.Keyword))?G__71273.fqn:null);
switch (G__71273__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71248);

}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71247){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71274 = cljs.core.keyword_identical_QMARK_;
var expr__71275 = k__4511__auto__;
if(cljs.core.truth_((pred__71274.cljs$core$IFn$_invoke$arity$2 ? pred__71274.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__71275) : pred__71274.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__71275)))){
return (new datascript.parser.PlainSymbol(G__71247,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71247),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71247){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__71247,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71244){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk(self__.symbol,f71244),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71245,acc71246){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71245,self__.symbol,acc71246);
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71246){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71246,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc71246,self__.symbol));
}));

(datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.PlainSymbol.cljs$lang$type = true);

(datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/PlainSymbol",null,(1),null));
}));

(datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/PlainSymbol");
}));

/**
 * Positional factory function for datascript.parser/PlainSymbol.
 */
datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/PlainSymbol, taking a map of keywords to field values.
 */
datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__71256){
var extmap__4542__auto__ = (function (){var G__71279 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71256,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__71256)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71279);
} else {
return G__71279;
}
})();
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__71256),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"?")))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_var_required = (function datascript$parser$parse_var_required(form){
var or__4253__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse var, expected symbol starting with ?, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-var","parser/rule-var",-1584354459),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"$")))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"?")))){
return null;
} else {
return (new datascript.parser.Constant(form,null,null,null));
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if((((form instanceof cljs.core.Symbol)) && (((cljs.core.not(datascript.parser.parse_variable(form))) && (((cljs.core.not(datascript.parser.parse_src_var(form))) && (((cljs.core.not(datascript.parser.parse_rules_var(form))) && (cljs.core.not(datascript.parser.parse_placeholder(form))))))))))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol(form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__4253__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return datascript.parser.parse_constant(form);
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71290,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71298 = k71290;
var G__71298__$1 = (((G__71298 instanceof cljs.core.Keyword))?G__71298.fqn:null);
switch (G__71298__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71290,else__4505__auto__);

}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71299){
var vec__71300 = p__71299;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71300,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71300,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.RuleVars{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71289){
var self__ = this;
var G__71289__$1 = this;
return (new cljs.core.RecordIter((0),G__71289__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71291,other71292){
var self__ = this;
var this71291__$1 = this;
return (((!((other71292 == null)))) && ((((this71291__$1.constructor === other71292.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71291__$1.required,other71292.required)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71291__$1.free,other71292.free)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71291__$1.__extmap,other71292.__extmap)))))))));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71290){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71313 = k71290;
var G__71313__$1 = (((G__71313 instanceof cljs.core.Keyword))?G__71313.fqn:null);
switch (G__71313__$1) {
case "required":
case "free":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71290);

}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71289){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71317 = cljs.core.keyword_identical_QMARK_;
var expr__71318 = k__4511__auto__;
if(cljs.core.truth_((pred__71317.cljs$core$IFn$_invoke$arity$2 ? pred__71317.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),expr__71318) : pred__71317.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__71318)))){
return (new datascript.parser.RuleVars(G__71289,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71317.cljs$core$IFn$_invoke$arity$2 ? pred__71317.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"free","free",801364328),expr__71318) : pred__71317.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__71318)))){
return (new datascript.parser.RuleVars(self__.required,G__71289,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71289),null));
}
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"free","free",801364328),self__.free,null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71289){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__71289,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71286){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk(self__.required,f71286),datascript.parser.postwalk(self__.free,f71286),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71287,acc71288){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71287,self__.free,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71287,self__.required,acc71288));
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71288){
var self__ = this;
var ___69689__auto____$1 = this;
var G__71323 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71288,self__.required) : datascript.parser.collect_vars_acc.call(null,acc71288,self__.required));
var G__71324 = self__.free;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71323,G__71324) : datascript.parser.collect_vars_acc.call(null,G__71323,G__71324));
}));

(datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
}));

(datascript.parser.RuleVars.cljs$lang$type = true);

(datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleVars",null,(1),null));
}));

(datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/RuleVars");
}));

/**
 * Positional factory function for datascript.parser/RuleVars.
 */
datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleVars, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__71294){
var extmap__4542__auto__ = (function (){var G__71330 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71294,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"free","free",801364328)], 0));
if(cljs.core.record_QMARK_(G__71294)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71330);
} else {
return G__71330;
}
})();
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__71294),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__71294),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__71334 = ((cljs.core.sequential_QMARK_(cljs.core.first(form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.next(form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71334,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71334,(1),null);
var required_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_var_required,required);
var free_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_var_required,rest);
if(((cljs.core.empty_QMARK_(required_STAR_)) && (cljs.core.empty_QMARK_(free_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Rule variables should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null):null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars)));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count(new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71345,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71351 = k71345;
switch (G__71351) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71345,else__4505__auto__);

}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71352){
var vec__71353 = p__71352;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71353,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71353,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71344){
var self__ = this;
var G__71344__$1 = this;
return (new cljs.core.RecordIter((0),G__71344__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71346,other71347){
var self__ = this;
var this71346__$1 = this;
return (((!((other71347 == null)))) && ((((this71346__$1.constructor === other71347.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71346__$1.__extmap,other71347.__extmap)))));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71345){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k71345);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71344){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71393 = cljs.core.keyword_identical_QMARK_;
var expr__71394 = k__4511__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71344),null));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71344){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__71344,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71341){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71342,acc71343){
var self__ = this;
var ___69689__auto____$1 = this;
return acc71343;
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71343){
var self__ = this;
var ___69689__auto____$1 = this;
return acc71343;
}));

(datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.BindIgnore.cljs$lang$type = true);

(datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/BindIgnore",null,(1),null));
}));

(datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/BindIgnore");
}));

/**
 * Positional factory function for datascript.parser/BindIgnore.
 */
datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

/**
 * Factory function for datascript.parser/BindIgnore, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__71348){
var extmap__4542__auto__ = (function (){var G__71396 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__71348);
if(cljs.core.record_QMARK_(G__71348)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71396);
} else {
return G__71396;
}
})();
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71402,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71409 = k71402;
var G__71409__$1 = (((G__71409 instanceof cljs.core.Keyword))?G__71409.fqn:null);
switch (G__71409__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71402,else__4505__auto__);

}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71410){
var vec__71412 = p__71410;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71412,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71412,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.BindScalar{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71401){
var self__ = this;
var G__71401__$1 = this;
return (new cljs.core.RecordIter((0),G__71401__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71406,other71407){
var self__ = this;
var this71406__$1 = this;
return (((!((other71407 == null)))) && ((((this71406__$1.constructor === other71407.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71406__$1.variable,other71407.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71406__$1.__extmap,other71407.__extmap)))))));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71402){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71420 = k71402;
var G__71420__$1 = (((G__71420 instanceof cljs.core.Keyword))?G__71420.fqn:null);
switch (G__71420__$1) {
case "variable":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71402);

}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71401){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71421 = cljs.core.keyword_identical_QMARK_;
var expr__71422 = k__4511__auto__;
if(cljs.core.truth_((pred__71421.cljs$core$IFn$_invoke$arity$2 ? pred__71421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variable","variable",-281346492),expr__71422) : pred__71421.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__71422)))){
return (new datascript.parser.BindScalar(G__71401,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71401),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71401){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__71401,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71398){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk(self__.variable,f71398),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71399,acc71400){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71399,self__.variable,acc71400);
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71400){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71400,self__.variable) : datascript.parser.collect_vars_acc.call(null,acc71400,self__.variable));
}));

(datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
}));

(datascript.parser.BindScalar.cljs$lang$type = true);

(datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/BindScalar",null,(1),null));
}));

(datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/BindScalar");
}));

/**
 * Positional factory function for datascript.parser/BindScalar.
 */
datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

/**
 * Factory function for datascript.parser/BindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__71408){
var extmap__4542__auto__ = (function (){var G__71429 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71408,new cljs.core.Keyword(null,"variable","variable",-281346492));
if(cljs.core.record_QMARK_(G__71408)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71429);
} else {
return G__71429;
}
})();
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__71408),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71435,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71444 = k71435;
var G__71444__$1 = (((G__71444 instanceof cljs.core.Keyword))?G__71444.fqn:null);
switch (G__71444__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71435,else__4505__auto__);

}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71451){
var vec__71452 = p__71451;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71452,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71452,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.BindTuple{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71434){
var self__ = this;
var G__71434__$1 = this;
return (new cljs.core.RecordIter((0),G__71434__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71436,other71437){
var self__ = this;
var this71436__$1 = this;
return (((!((other71437 == null)))) && ((((this71436__$1.constructor === other71437.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71436__$1.bindings,other71437.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71436__$1.__extmap,other71437.__extmap)))))));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71435){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71464 = k71435;
var G__71464__$1 = (((G__71464 instanceof cljs.core.Keyword))?G__71464.fqn:null);
switch (G__71464__$1) {
case "bindings":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71435);

}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71434){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71465 = cljs.core.keyword_identical_QMARK_;
var expr__71466 = k__4511__auto__;
if(cljs.core.truth_((pred__71465.cljs$core$IFn$_invoke$arity$2 ? pred__71465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__71466) : pred__71465.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__71466)))){
return (new datascript.parser.BindTuple(G__71434,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71434),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71434){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__71434,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71431){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk(self__.bindings,f71431),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71432,acc71433){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71432,self__.bindings,acc71433);
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71433){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71433,self__.bindings) : datascript.parser.collect_vars_acc.call(null,acc71433,self__.bindings));
}));

(datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(datascript.parser.BindTuple.cljs$lang$type = true);

(datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/BindTuple",null,(1),null));
}));

(datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/BindTuple");
}));

/**
 * Positional factory function for datascript.parser/BindTuple.
 */
datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

/**
 * Factory function for datascript.parser/BindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__71441){
var extmap__4542__auto__ = (function (){var G__71470 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71441,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
if(cljs.core.record_QMARK_(G__71441)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71470);
} else {
return G__71470;
}
})();
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__71441),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71475,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71480 = k71475;
var G__71480__$1 = (((G__71480 instanceof cljs.core.Keyword))?G__71480.fqn:null);
switch (G__71480__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71475,else__4505__auto__);

}
}));

(datascript.parser.BindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71481){
var vec__71482 = p__71481;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71482,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71482,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.BindColl{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71474){
var self__ = this;
var G__71474__$1 = this;
return (new cljs.core.RecordIter((0),G__71474__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71476,other71477){
var self__ = this;
var this71476__$1 = this;
return (((!((other71477 == null)))) && ((((this71476__$1.constructor === other71477.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71476__$1.binding,other71477.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71476__$1.__extmap,other71477.__extmap)))))));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71475){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71495 = k71475;
var G__71495__$1 = (((G__71495 instanceof cljs.core.Keyword))?G__71495.fqn:null);
switch (G__71495__$1) {
case "binding":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71475);

}
}));

(datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71474){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71496 = cljs.core.keyword_identical_QMARK_;
var expr__71497 = k__4511__auto__;
if(cljs.core.truth_((pred__71496.cljs$core$IFn$_invoke$arity$2 ? pred__71496.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binding","binding",539932593),expr__71497) : pred__71496.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__71497)))){
return (new datascript.parser.BindColl(G__71474,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71474),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71474){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__71474,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71471){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk(self__.binding,f71471),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71472,acc71473){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71472,self__.binding,acc71473);
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71473){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71473,self__.binding) : datascript.parser.collect_vars_acc.call(null,acc71473,self__.binding));
}));

(datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
}));

(datascript.parser.BindColl.cljs$lang$type = true);

(datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/BindColl",null,(1),null));
}));

(datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/BindColl");
}));

/**
 * Positional factory function for datascript.parser/BindColl.
 */
datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

/**
 * Factory function for datascript.parser/BindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__71478){
var extmap__4542__auto__ = (function (){var G__71499 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71478,new cljs.core.Keyword(null,"binding","binding",539932593));
if(cljs.core.record_QMARK_(G__71478)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71499);
} else {
return G__71499;
}
})();
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__71478),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source((new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__5720__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(temp__5720__auto__)){
var var$ = temp__5720__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(((datascript.parser.of_size_QMARK_(form,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),new cljs.core.Symbol(null,"...","...",-1926939749,null))))){
var temp__5718__auto__ = (function (){var G__71506 = cljs.core.first(form);
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(G__71506) : datascript.parser.parse_binding.call(null,G__71506));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var sub_bind = temp__5718__auto__;
return datascript.parser.with_source((new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse collection binding",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__4253__auto__ = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(form) : datascript.parser.parse_binding.call(null,form));
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__5720__auto__ = datascript.parser.parse_seq(datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__5720__auto__)){
var sub_bindings = temp__5720__auto__;
if((!(cljs.core.empty_QMARK_(sub_bindings)))){
return datascript.parser.with_source((new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Tuple binding cannot be empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(((datascript.parser.of_size_QMARK_(form,(1))) && (cljs.core.sequential_QMARK_(cljs.core.first(form))))){
return datascript.parser.with_source((new datascript.parser.BindColl(datascript.parser.parse_bind_tuple(cljs.core.first(form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__4253__auto__ = datascript.parser.parse_bind_coll(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.parser.parse_bind_rel(form);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = datascript.parser.parse_bind_tuple(form);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = datascript.parser.parse_bind_scalar(form);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

var datascript$parser$IFindVars$_find_vars$dyn_72294 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (datascript.parser._find_vars[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (datascript.parser._find_vars["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindVars.-find-vars",this$);
}
}
});
datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
return datascript$parser$IFindVars$_find_vars$dyn_72294(this$);
}
});

(datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
}));

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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(cljs.core.last(self__.args));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71528,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71544 = k71528;
var G__71544__$1 = (((G__71544 instanceof cljs.core.Keyword))?G__71544.fqn:null);
switch (G__71544__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71528,else__4505__auto__);

}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71547){
var vec__71555 = p__71547;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71555,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71555,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Aggregate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71527){
var self__ = this;
var G__71527__$1 = this;
return (new cljs.core.RecordIter((0),G__71527__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71529,other71530){
var self__ = this;
var this71529__$1 = this;
return (((!((other71530 == null)))) && ((((this71529__$1.constructor === other71530.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71529__$1.fn,other71530.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71529__$1.args,other71530.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71529__$1.__extmap,other71530.__extmap)))))))));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71528){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71560 = k71528;
var G__71560__$1 = (((G__71560 instanceof cljs.core.Keyword))?G__71560.fqn:null);
switch (G__71560__$1) {
case "fn":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71528);

}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71527){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71569 = cljs.core.keyword_identical_QMARK_;
var expr__71570 = k__4511__auto__;
if(cljs.core.truth_((pred__71569.cljs$core$IFn$_invoke$arity$2 ? pred__71569.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__71570) : pred__71569.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__71570)))){
return (new datascript.parser.Aggregate(G__71527,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71569.cljs$core$IFn$_invoke$arity$2 ? pred__71569.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__71570) : pred__71569.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__71570)))){
return (new datascript.parser.Aggregate(self__.fn,G__71527,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71527),null));
}
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71527){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__71527,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71524){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk(self__.fn,f71524),datascript.parser.postwalk(self__.args,f71524),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71525,acc71526){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71525,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71525,self__.fn,acc71526));
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71526){
var self__ = this;
var ___69689__auto____$1 = this;
var G__71578 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71526,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc71526,self__.fn));
var G__71579 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71578,G__71579) : datascript.parser.collect_vars_acc.call(null,G__71578,G__71579));
}));

(datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.Aggregate.cljs$lang$type = true);

(datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Aggregate",null,(1),null));
}));

(datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Aggregate");
}));

/**
 * Positional factory function for datascript.parser/Aggregate.
 */
datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Aggregate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__71532){
var extmap__4542__auto__ = (function (){var G__71581 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71532,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__71532)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71581);
} else {
return G__71581;
}
})();
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__71532),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__71532),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(self__.variable);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71590,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71594 = k71590;
var G__71594__$1 = (((G__71594 instanceof cljs.core.Keyword))?G__71594.fqn:null);
switch (G__71594__$1) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71590,else__4505__auto__);

}
}));

(datascript.parser.Pull.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71595){
var vec__71596 = p__71595;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71596,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71596,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Pull{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71589){
var self__ = this;
var G__71589__$1 = this;
return (new cljs.core.RecordIter((0),G__71589__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71591,other71592){
var self__ = this;
var this71591__$1 = this;
return (((!((other71592 == null)))) && ((((this71591__$1.constructor === other71592.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71591__$1.source,other71592.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71591__$1.variable,other71592.variable)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71591__$1.pattern,other71592.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71591__$1.__extmap,other71592.__extmap)))))))))));
}));

(datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Pull.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71590){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71603 = k71590;
var G__71603__$1 = (((G__71603 instanceof cljs.core.Keyword))?G__71603.fqn:null);
switch (G__71603__$1) {
case "source":
case "variable":
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71590);

}
}));

(datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71589){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71604 = cljs.core.keyword_identical_QMARK_;
var expr__71605 = k__4511__auto__;
if(cljs.core.truth_((pred__71604.cljs$core$IFn$_invoke$arity$2 ? pred__71604.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__71605) : pred__71604.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__71605)))){
return (new datascript.parser.Pull(G__71589,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71604.cljs$core$IFn$_invoke$arity$2 ? pred__71604.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variable","variable",-281346492),expr__71605) : pred__71604.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__71605)))){
return (new datascript.parser.Pull(self__.source,G__71589,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71604.cljs$core$IFn$_invoke$arity$2 ? pred__71604.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__71605) : pred__71604.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__71605)))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__71589,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71589),null));
}
}
}
}));

(datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71589){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__71589,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71586){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk(self__.source,f71586),datascript.parser.postwalk(self__.variable,f71586),datascript.parser.postwalk(self__.pattern,f71586),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71587,acc71588){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71587,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71587,self__.variable,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71587,self__.source,acc71588)));
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71588){
var self__ = this;
var ___69689__auto____$1 = this;
var G__71613 = (function (){var G__71615 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71588,self__.source) : datascript.parser.collect_vars_acc.call(null,acc71588,self__.source));
var G__71616 = self__.variable;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71615,G__71616) : datascript.parser.collect_vars_acc.call(null,G__71615,G__71616));
})();
var G__71614 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71613,G__71614) : datascript.parser.collect_vars_acc.call(null,G__71613,G__71614));
}));

(datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(datascript.parser.Pull.cljs$lang$type = true);

(datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Pull",null,(1),null));
}));

(datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Pull");
}));

/**
 * Positional factory function for datascript.parser/Pull.
 */
datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pull, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__71593){
var extmap__4542__auto__ = (function (){var G__71623 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71593,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], 0));
if(cljs.core.record_QMARK_(G__71593)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71623);
} else {
return G__71623;
}
})();
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__71593),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__71593),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__71593),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

var datascript$parser$IFindElements$find_elements$dyn_72326 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (datascript.parser.find_elements[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (datascript.parser.find_elements["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindElements.find-elements",this$);
}
}
});
datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
return datascript$parser$IFindElements$find_elements$dyn_72326(this$);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71629,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71643 = k71629;
var G__71643__$1 = (((G__71643 instanceof cljs.core.Keyword))?G__71643.fqn:null);
switch (G__71643__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71629,else__4505__auto__);

}
}));

(datascript.parser.FindRel.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71644){
var vec__71645 = p__71644;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71645,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71645,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.FindRel{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71628){
var self__ = this;
var G__71628__$1 = this;
return (new cljs.core.RecordIter((0),G__71628__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71630,other71631){
var self__ = this;
var this71630__$1 = this;
return (((!((other71631 == null)))) && ((((this71630__$1.constructor === other71631.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71630__$1.elements,other71631.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71630__$1.__extmap,other71631.__extmap)))))));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindRel.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71629){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71649 = k71629;
var G__71649__$1 = (((G__71649 instanceof cljs.core.Keyword))?G__71649.fqn:null);
switch (G__71649__$1) {
case "elements":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71629);

}
}));

(datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71628){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71650 = cljs.core.keyword_identical_QMARK_;
var expr__71651 = k__4511__auto__;
if(cljs.core.truth_((pred__71650.cljs$core$IFn$_invoke$arity$2 ? pred__71650.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elements","elements",657646735),expr__71651) : pred__71650.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__71651)))){
return (new datascript.parser.FindRel(G__71628,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71628),null));
}
}));

(datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71628){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__71628,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71625){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk(self__.elements,f71625),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71626,acc71627){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71626,self__.elements,acc71627);
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71627){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71627,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc71627,self__.elements));
}));

(datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
}));

(datascript.parser.FindRel.cljs$lang$type = true);

(datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/FindRel",null,(1),null));
}));

(datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/FindRel");
}));

/**
 * Positional factory function for datascript.parser/FindRel.
 */
datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindRel, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__71637){
var extmap__4542__auto__ = (function (){var G__71659 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71637,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.record_QMARK_(G__71637)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71659);
} else {
return G__71659;
}
})();
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__71637),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71667,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71671 = k71667;
var G__71671__$1 = (((G__71671 instanceof cljs.core.Keyword))?G__71671.fqn:null);
switch (G__71671__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71667,else__4505__auto__);

}
}));

(datascript.parser.FindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71672){
var vec__71673 = p__71672;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71673,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71673,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.FindColl{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71666){
var self__ = this;
var G__71666__$1 = this;
return (new cljs.core.RecordIter((0),G__71666__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71668,other71669){
var self__ = this;
var this71668__$1 = this;
return (((!((other71669 == null)))) && ((((this71668__$1.constructor === other71669.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71668__$1.element,other71669.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71668__$1.__extmap,other71669.__extmap)))))));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindColl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71667){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71676 = k71667;
var G__71676__$1 = (((G__71676 instanceof cljs.core.Keyword))?G__71676.fqn:null);
switch (G__71676__$1) {
case "element":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71667);

}
}));

(datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71666){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71677 = cljs.core.keyword_identical_QMARK_;
var expr__71678 = k__4511__auto__;
if(cljs.core.truth_((pred__71677.cljs$core$IFn$_invoke$arity$2 ? pred__71677.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),expr__71678) : pred__71677.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__71678)))){
return (new datascript.parser.FindColl(G__71666,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71666),null));
}
}));

(datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71666){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__71666,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71663){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk(self__.element,f71663),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71664,acc71665){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71664,self__.element,acc71665);
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71665){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71665,self__.element) : datascript.parser.collect_vars_acc.call(null,acc71665,self__.element));
}));

(datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
}));

(datascript.parser.FindColl.cljs$lang$type = true);

(datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/FindColl",null,(1),null));
}));

(datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/FindColl");
}));

/**
 * Positional factory function for datascript.parser/FindColl.
 */
datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__71670){
var extmap__4542__auto__ = (function (){var G__71682 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71670,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core.record_QMARK_(G__71670)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71682);
} else {
return G__71682;
}
})();
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__71670),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71687,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71693 = k71687;
var G__71693__$1 = (((G__71693 instanceof cljs.core.Keyword))?G__71693.fqn:null);
switch (G__71693__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71687,else__4505__auto__);

}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71695){
var vec__71696 = p__71695;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71696,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71696,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.FindScalar{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71686){
var self__ = this;
var G__71686__$1 = this;
return (new cljs.core.RecordIter((0),G__71686__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71688,other71689){
var self__ = this;
var this71688__$1 = this;
return (((!((other71689 == null)))) && ((((this71688__$1.constructor === other71689.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71688__$1.element,other71689.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71688__$1.__extmap,other71689.__extmap)))))));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71687){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71701 = k71687;
var G__71701__$1 = (((G__71701 instanceof cljs.core.Keyword))?G__71701.fqn:null);
switch (G__71701__$1) {
case "element":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71687);

}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71686){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71702 = cljs.core.keyword_identical_QMARK_;
var expr__71703 = k__4511__auto__;
if(cljs.core.truth_((pred__71702.cljs$core$IFn$_invoke$arity$2 ? pred__71702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),expr__71703) : pred__71702.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__71703)))){
return (new datascript.parser.FindScalar(G__71686,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71686),null));
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71686){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__71686,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71683){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk(self__.element,f71683),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71684,acc71685){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71684,self__.element,acc71685);
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71685){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71685,self__.element) : datascript.parser.collect_vars_acc.call(null,acc71685,self__.element));
}));

(datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
}));

(datascript.parser.FindScalar.cljs$lang$type = true);

(datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/FindScalar",null,(1),null));
}));

(datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/FindScalar");
}));

/**
 * Positional factory function for datascript.parser/FindScalar.
 */
datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__71691){
var extmap__4542__auto__ = (function (){var G__71707 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71691,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core.record_QMARK_(G__71691)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71707);
} else {
return G__71707;
}
})();
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__71691),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71714,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71719 = k71714;
var G__71719__$1 = (((G__71719 instanceof cljs.core.Keyword))?G__71719.fqn:null);
switch (G__71719__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71714,else__4505__auto__);

}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71720){
var vec__71721 = p__71720;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71721,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71721,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.FindTuple{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71713){
var self__ = this;
var G__71713__$1 = this;
return (new cljs.core.RecordIter((0),G__71713__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71715,other71716){
var self__ = this;
var this71715__$1 = this;
return (((!((other71716 == null)))) && ((((this71715__$1.constructor === other71716.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71715__$1.elements,other71716.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71715__$1.__extmap,other71716.__extmap)))))));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71714){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71726 = k71714;
var G__71726__$1 = (((G__71726 instanceof cljs.core.Keyword))?G__71726.fqn:null);
switch (G__71726__$1) {
case "elements":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71714);

}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71713){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71727 = cljs.core.keyword_identical_QMARK_;
var expr__71728 = k__4511__auto__;
if(cljs.core.truth_((pred__71727.cljs$core$IFn$_invoke$arity$2 ? pred__71727.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elements","elements",657646735),expr__71728) : pred__71727.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__71728)))){
return (new datascript.parser.FindTuple(G__71713,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71713),null));
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71713){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__71713,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71710){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk(self__.elements,f71710),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71711,acc71712){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71711,self__.elements,acc71712);
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71712){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71712,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc71712,self__.elements));
}));

(datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
}));

(datascript.parser.FindTuple.cljs$lang$type = true);

(datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/FindTuple",null,(1),null));
}));

(datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/FindTuple");
}));

/**
 * Positional factory function for datascript.parser/FindTuple.
 */
datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__71717){
var extmap__4542__auto__ = (function (){var G__71731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71717,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.record_QMARK_(G__71717)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71731);
} else {
return G__71731;
}
})();
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__71717),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(datascript.parser._find_vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.find_elements(find)], 0));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if(((cljs.core.sequential_QMARK_(form)) && ((cljs.core.count(form) >= (2))))){
var vec__71733 = form;
var seq__71734 = cljs.core.seq(vec__71733);
var first__71735 = cljs.core.first(seq__71734);
var seq__71734__$1 = cljs.core.next(seq__71734);
var fn = first__71735;
var args = seq__71734__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4251__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return args_STAR_;
} else {
return and__4251__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null))))){
if((cljs.core.count(form) >= (3))){
var vec__71736 = form;
var seq__71737 = cljs.core.seq(vec__71736);
var first__71738 = cljs.core.first(seq__71737);
var seq__71737__$1 = cljs.core.next(seq__71737);
var _ = first__71738;
var first__71738__$1 = cljs.core.first(seq__71737__$1);
var seq__71737__$2 = cljs.core.next(seq__71737__$1);
var fn = first__71738__$1;
var args = seq__71737__$2;
var fn_STAR_ = datascript.parser.parse_variable(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4251__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return args_STAR_;
} else {
return and__4251__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Symbol(null,"pull","pull",779986722,null))))){
if(((((3) <= cljs.core.count(form))) && ((cljs.core.count(form) <= (4))))){
var long_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(4));
var src = ((long_QMARK_)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__71751 = ((long_QMARK_)?cljs.core.nnext(form):cljs.core.next(form));
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71751,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71751,(1),null);
var src_STAR_ = datascript.parser.parse_src_var(src);
var var_STAR_ = datascript.parser.parse_variable(var$);
var pattern_STAR_ = (function (){var or__4253__auto__ = datascript.parser.parse_variable(pattern);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.parser.parse_plain_variable(pattern);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return datascript.parser.parse_constant(pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = src_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__4251__auto____$1)){
return pattern_STAR_;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__4253__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.parser.parse_pull_expr(form);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = datascript.parser.parse_aggregate_custom(form);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return datascript.parser.parse_aggregate(form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__71774 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,form);
if((G__71774 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__71774,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
if(((cljs.core.sequential_QMARK_(inner)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inner),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(inner),new cljs.core.Symbol(null,"...","...",-1926939749,null))))))){
var G__71776 = datascript.parser.parse_find_elem(cljs.core.first(inner));
if((G__71776 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__71776,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if(((cljs.core.sequential_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),new cljs.core.Symbol(null,".",".",1975675962,null))))))){
var G__71777 = datascript.parser.parse_find_elem(cljs.core.first(form));
if((G__71777 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__71777,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
var G__71778 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,inner);
if((G__71778 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__71778,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__4253__auto__ = datascript.parser.parse_find_rel(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.parser.parse_find_coll(form);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = datascript.parser.parse_find_scalar(form);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = datascript.parser.parse_find_tuple(form);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.ReturnMap = (function (type,symbols,__meta,__extmap,__hash){
this.type = type;
this.symbols = symbols;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71783,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71788 = k71783;
var G__71788__$1 = (((G__71788 instanceof cljs.core.Keyword))?G__71788.fqn:null);
switch (G__71788__$1) {
case "type":
return self__.type;

break;
case "symbols":
return self__.symbols;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71783,else__4505__auto__);

}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71789){
var vec__71790 = p__71789;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71790,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71790,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.ReturnMap{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols],null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71782){
var self__ = this;
var G__71782__$1 = this;
return (new cljs.core.RecordIter((0),G__71782__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbols","symbols",1211743)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-2025547471 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71784,other71785){
var self__ = this;
var this71784__$1 = this;
return (((!((other71785 == null)))) && ((((this71784__$1.constructor === other71785.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71784__$1.type,other71785.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71784__$1.symbols,other71785.symbols)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71784__$1.__extmap,other71785.__extmap)))))))));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"symbols","symbols",1211743),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71783){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71799 = k71783;
var G__71799__$1 = (((G__71799 instanceof cljs.core.Keyword))?G__71799.fqn:null);
switch (G__71799__$1) {
case "type":
case "symbols":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71783);

}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71782){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71800 = cljs.core.keyword_identical_QMARK_;
var expr__71801 = k__4511__auto__;
if(cljs.core.truth_((pred__71800.cljs$core$IFn$_invoke$arity$2 ? pred__71800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__71801) : pred__71800.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__71801)))){
return (new datascript.parser.ReturnMap(G__71782,self__.symbols,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71800.cljs$core$IFn$_invoke$arity$2 ? pred__71800.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__71801) : pred__71800.call(null,new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__71801)))){
return (new datascript.parser.ReturnMap(self__.type,G__71782,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71782),null));
}
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols,null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71782){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,G__71782,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71779){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.ReturnMap(datascript.parser.postwalk(self__.type,f71779),datascript.parser.postwalk(self__.symbols,f71779),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71780,acc71781){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71780,self__.symbols,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71780,self__.type,acc71781));
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71781){
var self__ = this;
var ___69689__auto____$1 = this;
var G__71807 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71781,self__.type) : datascript.parser.collect_vars_acc.call(null,acc71781,self__.type));
var G__71808 = self__.symbols;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71807,G__71808) : datascript.parser.collect_vars_acc.call(null,G__71807,G__71808));
}));

(datascript.parser.ReturnMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"symbols","symbols",1641743270,null)], null);
}));

(datascript.parser.ReturnMap.cljs$lang$type = true);

(datascript.parser.ReturnMap.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/ReturnMap",null,(1),null));
}));

(datascript.parser.ReturnMap.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/ReturnMap");
}));

/**
 * Positional factory function for datascript.parser/ReturnMap.
 */
datascript.parser.__GT_ReturnMap = (function datascript$parser$__GT_ReturnMap(type,symbols){
return (new datascript.parser.ReturnMap(type,symbols,null,null,null));
});

/**
 * Factory function for datascript.parser/ReturnMap, taking a map of keywords to field values.
 */
datascript.parser.map__GT_ReturnMap = (function datascript$parser$map__GT_ReturnMap(G__71787){
var extmap__4542__auto__ = (function (){var G__71810 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71787,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbols","symbols",1211743)], 0));
if(cljs.core.record_QMARK_(G__71787)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71810);
} else {
return G__71810;
}
})();
return (new datascript.parser.ReturnMap(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__71787),new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(G__71787),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.parser.parse_return_map = (function datascript$parser$parse_return_map(type,form){
if((((!(cljs.core.empty_QMARK_(form)))) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,form)))){
var G__71811 = type;
var G__71811__$1 = (((G__71811 instanceof cljs.core.Keyword))?G__71811.fqn:null);
switch (G__71811__$1) {
case "keys":
return (new datascript.parser.ReturnMap(type,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,form),null,null,null));

break;
case "syms":
return (new datascript.parser.ReturnMap(type,cljs.core.vec(form),null,null,null));

break;
case "strs":
return (new datascript.parser.ReturnMap(type,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,form),null,null,null));

break;
default:
return null;

}
} else {
return null;
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__4253__auto__ = datascript.parser.parse_seq(datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :with clause, expected [ variable+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5718__auto__ = (function (){var or__4253__auto__ = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.parser.parse_rules_var(form);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return datascript.parser.parse_plain_variable(form);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var var$ = temp__5718__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding(form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__4253__auto__ = datascript.parser.parse_seq(datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71816,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71820 = k71816;
var G__71820__$1 = (((G__71820 instanceof cljs.core.Keyword))?G__71820.fqn:null);
switch (G__71820__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71816,else__4505__auto__);

}
}));

(datascript.parser.Pattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71821){
var vec__71822 = p__71821;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71822,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71822,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Pattern{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71815){
var self__ = this;
var G__71815__$1 = this;
return (new cljs.core.RecordIter((0),G__71815__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71817,other71818){
var self__ = this;
var this71817__$1 = this;
return (((!((other71818 == null)))) && ((((this71817__$1.constructor === other71818.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71817__$1.source,other71818.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71817__$1.pattern,other71818.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71817__$1.__extmap,other71818.__extmap)))))))));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71816){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71825 = k71816;
var G__71825__$1 = (((G__71825 instanceof cljs.core.Keyword))?G__71825.fqn:null);
switch (G__71825__$1) {
case "source":
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71816);

}
}));

(datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71815){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71826 = cljs.core.keyword_identical_QMARK_;
var expr__71827 = k__4511__auto__;
if(cljs.core.truth_((pred__71826.cljs$core$IFn$_invoke$arity$2 ? pred__71826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__71827) : pred__71826.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__71827)))){
return (new datascript.parser.Pattern(G__71815,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71826.cljs$core$IFn$_invoke$arity$2 ? pred__71826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__71827) : pred__71826.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__71827)))){
return (new datascript.parser.Pattern(self__.source,G__71815,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71815),null));
}
}
}));

(datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71815){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__71815,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71812){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk(self__.source,f71812),datascript.parser.postwalk(self__.pattern,f71812),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71813,acc71814){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71813,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71813,self__.source,acc71814));
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71814){
var self__ = this;
var ___69689__auto____$1 = this;
var G__71829 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71814,self__.source) : datascript.parser.collect_vars_acc.call(null,acc71814,self__.source));
var G__71830 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71829,G__71830) : datascript.parser.collect_vars_acc.call(null,G__71829,G__71830));
}));

(datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(datascript.parser.Pattern.cljs$lang$type = true);

(datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Pattern",null,(1),null));
}));

(datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Pattern");
}));

/**
 * Positional factory function for datascript.parser/Pattern.
 */
datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pattern, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__71819){
var extmap__4542__auto__ = (function (){var G__71831 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71819,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pattern","pattern",242135423)], 0));
if(cljs.core.record_QMARK_(G__71819)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71831);
} else {
return G__71831;
}
})();
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__71819),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__71819),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71836,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71840 = k71836;
var G__71840__$1 = (((G__71840 instanceof cljs.core.Keyword))?G__71840.fqn:null);
switch (G__71840__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71836,else__4505__auto__);

}
}));

(datascript.parser.Predicate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71841){
var vec__71842 = p__71841;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71842,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71842,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Predicate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71835){
var self__ = this;
var G__71835__$1 = this;
return (new cljs.core.RecordIter((0),G__71835__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71837,other71838){
var self__ = this;
var this71837__$1 = this;
return (((!((other71838 == null)))) && ((((this71837__$1.constructor === other71838.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71837__$1.fn,other71838.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71837__$1.args,other71838.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71837__$1.__extmap,other71838.__extmap)))))))));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71836){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71845 = k71836;
var G__71845__$1 = (((G__71845 instanceof cljs.core.Keyword))?G__71845.fqn:null);
switch (G__71845__$1) {
case "fn":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71836);

}
}));

(datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71835){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71846 = cljs.core.keyword_identical_QMARK_;
var expr__71847 = k__4511__auto__;
if(cljs.core.truth_((pred__71846.cljs$core$IFn$_invoke$arity$2 ? pred__71846.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__71847) : pred__71846.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__71847)))){
return (new datascript.parser.Predicate(G__71835,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71846.cljs$core$IFn$_invoke$arity$2 ? pred__71846.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__71847) : pred__71846.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__71847)))){
return (new datascript.parser.Predicate(self__.fn,G__71835,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71835),null));
}
}
}));

(datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71835){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__71835,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71832){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk(self__.fn,f71832),datascript.parser.postwalk(self__.args,f71832),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71833,acc71834){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71833,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71833,self__.fn,acc71834));
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71834){
var self__ = this;
var ___69689__auto____$1 = this;
var G__71849 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71834,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc71834,self__.fn));
var G__71850 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71849,G__71850) : datascript.parser.collect_vars_acc.call(null,G__71849,G__71850));
}));

(datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.Predicate.cljs$lang$type = true);

(datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Predicate",null,(1),null));
}));

(datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Predicate");
}));

/**
 * Positional factory function for datascript.parser/Predicate.
 */
datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Predicate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__71839){
var extmap__4542__auto__ = (function (){var G__71851 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71839,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__71839)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71851);
} else {
return G__71851;
}
})();
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__71839),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__71839),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71856,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71860 = k71856;
var G__71860__$1 = (((G__71860 instanceof cljs.core.Keyword))?G__71860.fqn:null);
switch (G__71860__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71856,else__4505__auto__);

}
}));

(datascript.parser.Function.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71861){
var vec__71862 = p__71861;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71862,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71862,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Function{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71855){
var self__ = this;
var G__71855__$1 = this;
return (new cljs.core.RecordIter((0),G__71855__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71857,other71858){
var self__ = this;
var this71857__$1 = this;
return (((!((other71858 == null)))) && ((((this71857__$1.constructor === other71858.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71857__$1.fn,other71858.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71857__$1.args,other71858.args)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71857__$1.binding,other71858.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71857__$1.__extmap,other71858.__extmap)))))))))));
}));

(datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Function.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71856){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71865 = k71856;
var G__71865__$1 = (((G__71865 instanceof cljs.core.Keyword))?G__71865.fqn:null);
switch (G__71865__$1) {
case "fn":
case "args":
case "binding":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71856);

}
}));

(datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71855){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71866 = cljs.core.keyword_identical_QMARK_;
var expr__71867 = k__4511__auto__;
if(cljs.core.truth_((pred__71866.cljs$core$IFn$_invoke$arity$2 ? pred__71866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__71867) : pred__71866.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__71867)))){
return (new datascript.parser.Function(G__71855,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71866.cljs$core$IFn$_invoke$arity$2 ? pred__71866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__71867) : pred__71866.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__71867)))){
return (new datascript.parser.Function(self__.fn,G__71855,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71866.cljs$core$IFn$_invoke$arity$2 ? pred__71866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binding","binding",539932593),expr__71867) : pred__71866.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__71867)))){
return (new datascript.parser.Function(self__.fn,self__.args,G__71855,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71855),null));
}
}
}
}));

(datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71855){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__71855,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71852){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Function(datascript.parser.postwalk(self__.fn,f71852),datascript.parser.postwalk(self__.args,f71852),datascript.parser.postwalk(self__.binding,f71852),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71853,acc71854){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71853,self__.binding,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71853,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71853,self__.fn,acc71854)));
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71854){
var self__ = this;
var ___69689__auto____$1 = this;
var G__71869 = (function (){var G__71871 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71854,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc71854,self__.fn));
var G__71872 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71871,G__71872) : datascript.parser.collect_vars_acc.call(null,G__71871,G__71872));
})();
var G__71870 = self__.binding;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71869,G__71870) : datascript.parser.collect_vars_acc.call(null,G__71869,G__71870));
}));

(datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
}));

(datascript.parser.Function.cljs$lang$type = true);

(datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Function",null,(1),null));
}));

(datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Function");
}));

/**
 * Positional factory function for datascript.parser/Function.
 */
datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

/**
 * Factory function for datascript.parser/Function, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__71859){
var extmap__4542__auto__ = (function (){var G__71873 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71859,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], 0));
if(cljs.core.record_QMARK_(G__71859)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71873);
} else {
return G__71873;
}
})();
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__71859),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__71859),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__71859),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71878,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71882 = k71878;
var G__71882__$1 = (((G__71882 instanceof cljs.core.Keyword))?G__71882.fqn:null);
switch (G__71882__$1) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71878,else__4505__auto__);

}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71883){
var vec__71884 = p__71883;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71884,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71884,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71877){
var self__ = this;
var G__71877__$1 = this;
return (new cljs.core.RecordIter((0),G__71877__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71879,other71880){
var self__ = this;
var this71879__$1 = this;
return (((!((other71880 == null)))) && ((((this71879__$1.constructor === other71880.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71879__$1.source,other71880.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71879__$1.name,other71880.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71879__$1.args,other71880.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71879__$1.__extmap,other71880.__extmap)))))))))));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71878){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71887 = k71878;
var G__71887__$1 = (((G__71887 instanceof cljs.core.Keyword))?G__71887.fqn:null);
switch (G__71887__$1) {
case "source":
case "name":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71878);

}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71877){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71888 = cljs.core.keyword_identical_QMARK_;
var expr__71889 = k__4511__auto__;
if(cljs.core.truth_((pred__71888.cljs$core$IFn$_invoke$arity$2 ? pred__71888.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__71889) : pred__71888.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__71889)))){
return (new datascript.parser.RuleExpr(G__71877,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71888.cljs$core$IFn$_invoke$arity$2 ? pred__71888.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__71889) : pred__71888.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__71889)))){
return (new datascript.parser.RuleExpr(self__.source,G__71877,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71888.cljs$core$IFn$_invoke$arity$2 ? pred__71888.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__71889) : pred__71888.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__71889)))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__71877,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71877),null));
}
}
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71877){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__71877,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71874){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk(self__.source,f71874),datascript.parser.postwalk(self__.name,f71874),datascript.parser.postwalk(self__.args,f71874),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71875,acc71876){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71875,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71875,self__.name,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71875,self__.source,acc71876)));
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71876){
var self__ = this;
var ___69689__auto____$1 = this;
var G__71891 = (function (){var G__71893 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71876,self__.source) : datascript.parser.collect_vars_acc.call(null,acc71876,self__.source));
var G__71894 = self__.name;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71893,G__71894) : datascript.parser.collect_vars_acc.call(null,G__71893,G__71894));
})();
var G__71892 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71891,G__71892) : datascript.parser.collect_vars_acc.call(null,G__71891,G__71892));
}));

(datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.RuleExpr.cljs$lang$type = true);

(datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleExpr",null,(1),null));
}));

(datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/RuleExpr");
}));

/**
 * Positional factory function for datascript.parser/RuleExpr.
 */
datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleExpr, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__71881){
var extmap__4542__auto__ = (function (){var G__71895 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71881,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__71881)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71895);
} else {
return G__71895;
}
})();
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__71881),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__71881),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__71881),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71900,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71904 = k71900;
var G__71904__$1 = (((G__71904 instanceof cljs.core.Keyword))?G__71904.fqn:null);
switch (G__71904__$1) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71900,else__4505__auto__);

}
}));

(datascript.parser.Not.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71905){
var vec__71906 = p__71905;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71906,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71906,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Not{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71899){
var self__ = this;
var G__71899__$1 = this;
return (new cljs.core.RecordIter((0),G__71899__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71901,other71902){
var self__ = this;
var this71901__$1 = this;
return (((!((other71902 == null)))) && ((((this71901__$1.constructor === other71902.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71901__$1.source,other71902.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71901__$1.vars,other71902.vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71901__$1.clauses,other71902.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71901__$1.__extmap,other71902.__extmap)))))))))));
}));

(datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Not.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71900){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71909 = k71900;
var G__71909__$1 = (((G__71909 instanceof cljs.core.Keyword))?G__71909.fqn:null);
switch (G__71909__$1) {
case "source":
case "vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71900);

}
}));

(datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71899){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71910 = cljs.core.keyword_identical_QMARK_;
var expr__71911 = k__4511__auto__;
if(cljs.core.truth_((pred__71910.cljs$core$IFn$_invoke$arity$2 ? pred__71910.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__71911) : pred__71910.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__71911)))){
return (new datascript.parser.Not(G__71899,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71910.cljs$core$IFn$_invoke$arity$2 ? pred__71910.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__71911) : pred__71910.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__71911)))){
return (new datascript.parser.Not(self__.source,G__71899,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71910.cljs$core$IFn$_invoke$arity$2 ? pred__71910.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__71911) : pred__71910.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__71911)))){
return (new datascript.parser.Not(self__.source,self__.vars,G__71899,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71899),null));
}
}
}
}));

(datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71899){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__71899,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71896){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Not(datascript.parser.postwalk(self__.source,f71896),datascript.parser.postwalk(self__.vars,f71896),datascript.parser.postwalk(self__.clauses,f71896),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71897,acc71898){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71897,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71897,self__.vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71897,self__.source,acc71898)));
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71898){
var self__ = this;
var ___69689__auto____$1 = this;
var G__71913 = (function (){var G__71915 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71898,self__.source) : datascript.parser.collect_vars_acc.call(null,acc71898,self__.source));
var G__71916 = self__.vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71915,G__71916) : datascript.parser.collect_vars_acc.call(null,G__71915,G__71916));
})();
var G__71914 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71913,G__71914) : datascript.parser.collect_vars_acc.call(null,G__71913,G__71914));
}));

(datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.Not.cljs$lang$type = true);

(datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Not",null,(1),null));
}));

(datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Not");
}));

/**
 * Positional factory function for datascript.parser/Not.
 */
datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Not, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__71903){
var extmap__4542__auto__ = (function (){var G__71917 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71903,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__71903)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71917);
} else {
return G__71917;
}
})();
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__71903),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__71903),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__71903),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71922,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71926 = k71922;
var G__71926__$1 = (((G__71926 instanceof cljs.core.Keyword))?G__71926.fqn:null);
switch (G__71926__$1) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71922,else__4505__auto__);

}
}));

(datascript.parser.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71927){
var vec__71928 = p__71927;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71928,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71928,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Or{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71921){
var self__ = this;
var G__71921__$1 = this;
return (new cljs.core.RecordIter((0),G__71921__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71923,other71924){
var self__ = this;
var this71923__$1 = this;
return (((!((other71924 == null)))) && ((((this71923__$1.constructor === other71924.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71923__$1.source,other71924.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71923__$1.rule_vars,other71924.rule_vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71923__$1.clauses,other71924.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71923__$1.__extmap,other71924.__extmap)))))))))));
}));

(datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Or.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71922){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71931 = k71922;
var G__71931__$1 = (((G__71931 instanceof cljs.core.Keyword))?G__71931.fqn:null);
switch (G__71931__$1) {
case "source":
case "rule-vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71922);

}
}));

(datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71921){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71932 = cljs.core.keyword_identical_QMARK_;
var expr__71933 = k__4511__auto__;
if(cljs.core.truth_((pred__71932.cljs$core$IFn$_invoke$arity$2 ? pred__71932.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__71933) : pred__71932.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__71933)))){
return (new datascript.parser.Or(G__71921,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71932.cljs$core$IFn$_invoke$arity$2 ? pred__71932.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__71933) : pred__71932.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__71933)))){
return (new datascript.parser.Or(self__.source,G__71921,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__71932.cljs$core$IFn$_invoke$arity$2 ? pred__71932.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__71933) : pred__71932.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__71933)))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__71921,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71921),null));
}
}
}
}));

(datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71921){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__71921,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71918){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Or(datascript.parser.postwalk(self__.source,f71918),datascript.parser.postwalk(self__.rule_vars,f71918),datascript.parser.postwalk(self__.clauses,f71918),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71919,acc71920){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71919,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71919,self__.rule_vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71919,self__.source,acc71920)));
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71920){
var self__ = this;
var ___69689__auto____$1 = this;
var G__71935 = (function (){var G__71937 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71920,self__.source) : datascript.parser.collect_vars_acc.call(null,acc71920,self__.source));
var G__71938 = self__.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71937,G__71938) : datascript.parser.collect_vars_acc.call(null,G__71937,G__71938));
})();
var G__71936 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71935,G__71936) : datascript.parser.collect_vars_acc.call(null,G__71935,G__71936));
}));

(datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.Or.cljs$lang$type = true);

(datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Or",null,(1),null));
}));

(datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Or");
}));

/**
 * Positional factory function for datascript.parser/Or.
 */
datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Or, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__71925){
var extmap__4542__auto__ = (function (){var G__71939 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__71925,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__71925)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71939);
} else {
return G__71939;
}
})();
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__71925),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__71925),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__71925),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k71944,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__71948 = k71944;
var G__71948__$1 = (((G__71948 instanceof cljs.core.Keyword))?G__71948.fqn:null);
switch (G__71948__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71944,else__4505__auto__);

}
}));

(datascript.parser.And.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__71949){
var vec__71950 = p__71949;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71950,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71950,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.And{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71943){
var self__ = this;
var G__71943__$1 = this;
return (new cljs.core.RecordIter((0),G__71943__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71945,other71946){
var self__ = this;
var this71945__$1 = this;
return (((!((other71946 == null)))) && ((((this71945__$1.constructor === other71946.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71945__$1.clauses,other71946.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71945__$1.__extmap,other71946.__extmap)))))));
}));

(datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.And.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k71944){
var self__ = this;
var this__4509__auto____$1 = this;
var G__71953 = k71944;
var G__71953__$1 = (((G__71953 instanceof cljs.core.Keyword))?G__71953.fqn:null);
switch (G__71953__$1) {
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k71944);

}
}));

(datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__71943){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__71954 = cljs.core.keyword_identical_QMARK_;
var expr__71955 = k__4511__auto__;
if(cljs.core.truth_((pred__71954.cljs$core$IFn$_invoke$arity$2 ? pred__71954.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__71955) : pred__71954.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__71955)))){
return (new datascript.parser.And(G__71943,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__71943),null));
}
}));

(datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__71943){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__71943,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f71940){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.And(datascript.parser.postwalk(self__.clauses,f71940),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred71941,acc71942){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred71941,self__.clauses,acc71942);
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc71942){
var self__ = this;
var ___69689__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc71942,self__.clauses) : datascript.parser.collect_vars_acc.call(null,acc71942,self__.clauses));
}));

(datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.And.cljs$lang$type = true);

(datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/And",null,(1),null));
}));

(datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/And");
}));

/**
 * Positional factory function for datascript.parser/And.
 */
datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/And, taking a map of keywords to field values.
 */
datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__71947){
var extmap__4542__auto__ = (function (){var G__71957 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__71947,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
if(cljs.core.record_QMARK_(G__71947)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71957);
} else {
return G__71957;
}
})();
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__71947),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__4253__auto__ = datascript.parser.parse_placeholder(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return datascript.parser.parse_constant(form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_(form)){
var temp__5718__auto__ = datascript.parser.parse_src_var(cljs.core.first(form));
if(cljs.core.truth_(temp__5718__auto__)){
var source_STAR_ = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next(form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__71958 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71958,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71958,(1),null);
var temp__5720__auto____$1 = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__5720__auto____$1)){
var pattern_STAR_ = temp__5720__auto____$1;
if((!(cljs.core.empty_QMARK_(pattern_STAR_)))){
return datascript.parser.with_source((new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Pattern could not be empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__71961 = form;
var seq__71962 = cljs.core.seq(vec__71961);
var first__71963 = cljs.core.first(seq__71962);
var seq__71962__$1 = cljs.core.next(seq__71962);
var fn = first__71963;
var args = seq__71962__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__4253__auto__ = datascript.parser.parse_plain_symbol(fn);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return datascript.parser.parse_variable(fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__4251__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return args_STAR_;
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(datascript.parser.of_size_QMARK_(form,(1))){
var temp__5720__auto__ = datascript.parser.parse_call(cljs.core.first(form));
if(cljs.core.truth_(temp__5720__auto__)){
var vec__71964 = temp__5720__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71964,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71964,(1),null);
return datascript.parser.with_source((new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(datascript.parser.of_size_QMARK_(form,(2))){
var vec__71967 = form;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71967,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71967,(1),null);
var temp__5720__auto__ = datascript.parser.parse_call(call);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__71970 = temp__5720__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71970,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71970,(1),null);
var temp__5720__auto____$1 = datascript.parser.parse_binding(binding);
if(cljs.core.truth_(temp__5720__auto____$1)){
var binding_STAR_ = temp__5720__auto____$1;
return datascript.parser.with_source((new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__71973 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71973,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71973,(1),null);
var vec__71976 = next_form;
var seq__71977 = cljs.core.seq(vec__71976);
var first__71978 = cljs.core.first(seq__71977);
var seq__71977__$1 = cljs.core.next(seq__71977);
var name = first__71978;
var args = seq__71977__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol(name);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_(args)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("rule-expr requires at least one argument",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,form.vars);
} else {
if((form instanceof datascript.parser.Or)){
var G__71979 = acc;
var G__71980 = form.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__71979,G__71980) : datascript.parser.collect_vars_acc.call(null,G__71979,G__71980));
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars(form,acc);
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc(cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(datascript.parser.collect_vars(form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(required,free,form){
if(((cljs.core.empty_QMARK_(required)) && (cljs.core.empty_QMARK_(free)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Join variables should not be empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__71982 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71982,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71982,(1),null);
var vec__71985 = next_form;
var seq__71986 = cljs.core.seq(vec__71985);
var first__71987 = cljs.core.first(seq__71986);
var seq__71986__$1 = cljs.core.next(seq__71986);
var sym = first__71987;
var clauses = seq__71986__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__5718__auto__ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(temp__5718__auto__)){
var clauses_STAR_ = temp__5718__auto__;
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct(clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__71988 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71988,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71988,(1),null);
var vec__71991 = next_form;
var seq__71992 = cljs.core.seq(vec__71991);
var first__71993 = cljs.core.first(seq__71992);
var seq__71992__$1 = cljs.core.next(seq__71992);
var sym = first__71993;
var first__71993__$1 = cljs.core.first(seq__71992__$1);
var seq__71992__$2 = cljs.core.next(seq__71992__$1);
var vars = first__71993__$1;
var clauses = seq__71992__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,vars);
var clauses_STAR_ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_((function (){var and__4251__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return clauses_STAR_;
} else {
return and__4251__auto__;
}
})())){
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__71994 = clause;
var map__71994__$1 = cljs.core.__destructure_map(map__71994);
var map__71995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71994__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__71995__$1 = cljs.core.__destructure_map(map__71995);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71995__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71995__$1,new cljs.core.Keyword(null,"free","free",801364328));
datascript.parser.validate_join_vars(required,free,form);

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first(form))))){
var clauses_STAR_ = (function (){var G__71996 = cljs.core.next(form);
return (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(G__71996) : datascript.parser.parse_clauses.call(null,G__71996));
})();
if(cljs.core.truth_(cljs.core.not_empty(clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'and' clause, expected [ 'and' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__71997 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71997,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71997,(1),null);
var vec__72000 = next_form;
var seq__72001 = cljs.core.seq(vec__72000);
var first__72002 = cljs.core.first(seq__72001);
var seq__72001__$1 = cljs.core.next(seq__72001);
var sym = first__72002;
var clauses = seq__72001__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__5718__auto__ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__5718__auto__)){
var clauses_STAR_ = temp__5718__auto__;
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct(clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__72003 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72003,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72003,(1),null);
var vec__72006 = next_form;
var seq__72007 = cljs.core.seq(vec__72006);
var first__72008 = cljs.core.first(seq__72007);
var seq__72007__$1 = cljs.core.next(seq__72007);
var sym = first__72008;
var first__72008__$1 = cljs.core.first(seq__72007__$1);
var seq__72007__$2 = cljs.core.next(seq__72007__$1);
var vars = first__72008__$1;
var clauses = seq__72007__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__4251__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4251__auto__)){
return clauses_STAR_;
} else {
return and__4251__auto__;
}
})())){
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__4253__auto__ = datascript.parser.parse_not(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.parser.parse_not_join(form);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = datascript.parser.parse_or(form);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = datascript.parser.parse_or_join(form);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = datascript.parser.parse_pred(form);
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = datascript.parser.parse_fn(form);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = datascript.parser.parse_rule_expr(form);
if(cljs.core.truth_(or__4253__auto____$6)){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = datascript.parser.parse_pattern(form);
if(cljs.core.truth_(or__4253__auto____$7)){
return or__4253__auto____$7;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq(datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__4253__auto__ = datascript.parser.parse_clauses(form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :where clause, expected [clause+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k72014,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__72018 = k72014;
var G__72018__$1 = (((G__72018 instanceof cljs.core.Keyword))?G__72018.fqn:null);
switch (G__72018__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72014,else__4505__auto__);

}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__72019){
var vec__72020 = p__72019;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72020,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72020,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72013){
var self__ = this;
var G__72013__$1 = this;
return (new cljs.core.RecordIter((0),G__72013__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72015,other72016){
var self__ = this;
var this72015__$1 = this;
return (((!((other72016 == null)))) && ((((this72015__$1.constructor === other72016.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72015__$1.vars,other72016.vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72015__$1.clauses,other72016.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72015__$1.__extmap,other72016.__extmap)))))))));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k72014){
var self__ = this;
var this__4509__auto____$1 = this;
var G__72023 = k72014;
var G__72023__$1 = (((G__72023 instanceof cljs.core.Keyword))?G__72023.fqn:null);
switch (G__72023__$1) {
case "vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72014);

}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__72013){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__72024 = cljs.core.keyword_identical_QMARK_;
var expr__72025 = k__4511__auto__;
if(cljs.core.truth_((pred__72024.cljs$core$IFn$_invoke$arity$2 ? pred__72024.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__72025) : pred__72024.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__72025)))){
return (new datascript.parser.RuleBranch(G__72013,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72024.cljs$core$IFn$_invoke$arity$2 ? pred__72024.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__72025) : pred__72024.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__72025)))){
return (new datascript.parser.RuleBranch(self__.vars,G__72013,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__72013),null));
}
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__72013){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__72013,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f72010){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk(self__.vars,f72010),datascript.parser.postwalk(self__.clauses,f72010),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred72011,acc72012){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred72011,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred72011,self__.vars,acc72012));
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc72012){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc72012,self__.vars),self__.clauses);
}));

(datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.RuleBranch.cljs$lang$type = true);

(datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleBranch",null,(1),null));
}));

(datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/RuleBranch");
}));

/**
 * Positional factory function for datascript.parser/RuleBranch.
 */
datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleBranch, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__72017){
var extmap__4542__auto__ = (function (){var G__72027 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72017,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__72017)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72027);
} else {
return G__72027;
}
})();
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__72017),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__72017),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k72033,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__72042 = k72033;
var G__72042__$1 = (((G__72042 instanceof cljs.core.Keyword))?G__72042.fqn:null);
switch (G__72042__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72033,else__4505__auto__);

}
}));

(datascript.parser.Rule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__72043){
var vec__72044 = p__72043;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72044,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72044,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Rule{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72032){
var self__ = this;
var G__72032__$1 = this;
return (new cljs.core.RecordIter((0),G__72032__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72034,other72035){
var self__ = this;
var this72034__$1 = this;
return (((!((other72035 == null)))) && ((((this72034__$1.constructor === other72035.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72034__$1.name,other72035.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72034__$1.branches,other72035.branches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72034__$1.__extmap,other72035.__extmap)))))))));
}));

(datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Rule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k72033){
var self__ = this;
var this__4509__auto____$1 = this;
var G__72056 = k72033;
var G__72056__$1 = (((G__72056 instanceof cljs.core.Keyword))?G__72056.fqn:null);
switch (G__72056__$1) {
case "name":
case "branches":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72033);

}
}));

(datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__72032){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__72057 = cljs.core.keyword_identical_QMARK_;
var expr__72058 = k__4511__auto__;
if(cljs.core.truth_((pred__72057.cljs$core$IFn$_invoke$arity$2 ? pred__72057.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__72058) : pred__72057.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__72058)))){
return (new datascript.parser.Rule(G__72032,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72057.cljs$core$IFn$_invoke$arity$2 ? pred__72057.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__72058) : pred__72057.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__72058)))){
return (new datascript.parser.Rule(self__.name,G__72032,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__72032),null));
}
}
}));

(datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches,null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__72032){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__72032,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f72028){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk(self__.name,f72028),datascript.parser.postwalk(self__.branches,f72028),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred72029,acc72030){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred72029,self__.branches,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred72029,self__.name,acc72030));
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc72030){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc72030,self__.name),self__.branches);
}));

(datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
}));

(datascript.parser.Rule.cljs$lang$type = true);

(datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Rule",null,(1),null));
}));

(datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Rule");
}));

/**
 * Positional factory function for datascript.parser/Rule.
 */
datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

/**
 * Factory function for datascript.parser/Rule, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__72037){
var extmap__4542__auto__ = (function (){var G__72060 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72037,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"branches","branches",-1240337268)], 0));
if(cljs.core.record_QMARK_(G__72037)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72060);
} else {
return G__72060;
}
})();
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__72037),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__72037),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__72061 = form;
var seq__72062 = cljs.core.seq(vec__72061);
var first__72063 = cljs.core.first(seq__72062);
var seq__72062__$1 = cljs.core.next(seq__72062);
var head = first__72063;
var clauses = seq__72062__$1;
if(cljs.core.sequential_QMARK_(head)){
var vec__72064 = head;
var seq__72065 = cljs.core.seq(vec__72064);
var first__72066 = cljs.core.first(seq__72065);
var seq__72065__$1 = cljs.core.next(seq__72065);
var name = first__72066;
var vars = seq__72065__$1;
var name_STAR_ = (function (){var or__4253__auto__ = datascript.parser.parse_plain_symbol(name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule name, expected plain-symbol",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = (function (){var or__4253__auto__ = cljs.core.not_empty(datascript.parser.parse_clauses(clauses));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Rule branch should have clauses",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse rule head, expected [rule-name rule-vars], got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule, expected [rule-head clause+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first(branches));
var arity0 = datascript.parser.rule_vars_arity(vars0);
var seq__72067 = cljs.core.seq(cljs.core.next(branches));
var chunk__72069 = null;
var count__72070 = (0);
var i__72071 = (0);
while(true){
if((i__72071 < count__72070)){
var b = chunk__72069.cljs$core$IIndexed$_nth$arity$2(null,i__72071);
var vars_72565 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_72565))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Arity mismatch for rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name)], 0)),"': ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))," vs. ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_72565)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__72570 = seq__72067;
var G__72571 = chunk__72069;
var G__72572 = count__72070;
var G__72573 = (i__72071 + (1));
seq__72067 = G__72570;
chunk__72069 = G__72571;
count__72070 = G__72572;
i__72071 = G__72573;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__72067);
if(temp__5720__auto__){
var seq__72067__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72067__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__72067__$1);
var G__72574 = cljs.core.chunk_rest(seq__72067__$1);
var G__72575 = c__4679__auto__;
var G__72576 = cljs.core.count(c__4679__auto__);
var G__72577 = (0);
seq__72067 = G__72574;
chunk__72069 = G__72575;
count__72070 = G__72576;
i__72071 = G__72577;
continue;
} else {
var b = cljs.core.first(seq__72067__$1);
var vars_72578 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_72578))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Arity mismatch for rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name)], 0)),"': ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))," vs. ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_72578)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__72580 = cljs.core.next(seq__72067__$1);
var G__72581 = null;
var G__72582 = (0);
var G__72583 = (0);
seq__72067 = G__72580;
chunk__72069 = G__72581;
count__72070 = G__72582;
i__72071 = G__72583;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec((function (){var iter__4652__auto__ = (function datascript$parser$parse_rules_$_iter__72075(s__72076){
return (new cljs.core.LazySeq(null,(function (){
var s__72076__$1 = s__72076;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72076__$1);
if(temp__5720__auto__){
var s__72076__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72076__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72076__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72078 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72077 = (0);
while(true){
if((i__72077 < size__4651__auto__)){
var vec__72080 = cljs.core._nth(c__4650__auto__,i__72077);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72080,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72080,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__72077,vec__72080,name,branches,c__4650__auto__,size__4651__auto__,b__72078,s__72076__$2,temp__5720__auto__){
return (function (p1__72074_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__72074_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__72074_SHARP_),null,null,null));
});})(i__72077,vec__72080,name,branches,c__4650__auto__,size__4651__auto__,b__72078,s__72076__$2,temp__5720__auto__))
,branches);
cljs.core.chunk_append(b__72078,(function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__72585 = (i__72077 + (1));
i__72077 = G__72585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72078),datascript$parser$parse_rules_$_iter__72075(cljs.core.chunk_rest(s__72076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72078),null);
}
} else {
var vec__72086 = cljs.core.first(s__72076__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72086,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72086,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__72086,name,branches,s__72076__$2,temp__5720__auto__){
return (function (p1__72074_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__72074_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__72074_SHARP_),null,null,null));
});})(vec__72086,name,branches,s__72076__$2,temp__5720__auto__))
,branches);
return cljs.core.cons((function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__72075(cljs.core.rest(s__72076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq(datascript.parser.parse_rule,form)));
})());
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (qfind,qwith,qreturn_map,qin,qwhere,__meta,__extmap,__hash){
this.qfind = qfind;
this.qwith = qwith;
this.qreturn_map = qreturn_map;
this.qin = qin;
this.qwhere = qwhere;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k72097,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__72104 = k72097;
var G__72104__$1 = (((G__72104 instanceof cljs.core.Keyword))?G__72104.fqn:null);
switch (G__72104__$1) {
case "qfind":
return self__.qfind;

break;
case "qwith":
return self__.qwith;

break;
case "qreturn-map":
return self__.qreturn_map;

break;
case "qin":
return self__.qin;

break;
case "qwhere":
return self__.qwhere;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72097,else__4505__auto__);

}
}));

(datascript.parser.Query.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__72106){
var vec__72107 = p__72106;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72107,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72107,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#datascript.parser.Query{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),self__.qreturn_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72096){
var self__ = this;
var G__72096__$1 = this;
return (new cljs.core.RecordIter((0),G__72096__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72098,other72099){
var self__ = this;
var this72098__$1 = this;
return (((!((other72099 == null)))) && ((((this72098__$1.constructor === other72099.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72098__$1.qfind,other72099.qfind)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72098__$1.qwith,other72099.qwith)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72098__$1.qreturn_map,other72099.qreturn_map)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72098__$1.qin,other72099.qin)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72098__$1.qwhere,other72099.qwhere)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72098__$1.__extmap,other72099.__extmap)))))))))))))));
}));

(datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),null,new cljs.core.Keyword(null,"qin","qin",1372651151),null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),null,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(datascript.parser.Query.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k72097){
var self__ = this;
var this__4509__auto____$1 = this;
var G__72112 = k72097;
var G__72112__$1 = (((G__72112 instanceof cljs.core.Keyword))?G__72112.fqn:null);
switch (G__72112__$1) {
case "qfind":
case "qwith":
case "qreturn-map":
case "qin":
case "qwhere":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72097);

}
}));

(datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__72096){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__72113 = cljs.core.keyword_identical_QMARK_;
var expr__72114 = k__4511__auto__;
if(cljs.core.truth_((pred__72113.cljs$core$IFn$_invoke$arity$2 ? pred__72113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__72114) : pred__72113.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__72114)))){
return (new datascript.parser.Query(G__72096,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72113.cljs$core$IFn$_invoke$arity$2 ? pred__72113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__72114) : pred__72113.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__72114)))){
return (new datascript.parser.Query(self__.qfind,G__72096,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72113.cljs$core$IFn$_invoke$arity$2 ? pred__72113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),expr__72114) : pred__72113.call(null,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),expr__72114)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,G__72096,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72113.cljs$core$IFn$_invoke$arity$2 ? pred__72113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qin","qin",1372651151),expr__72114) : pred__72113.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151),expr__72114)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,G__72096,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72113.cljs$core$IFn$_invoke$arity$2 ? pred__72113.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__72114) : pred__72113.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__72114)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,G__72096,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__72096),null));
}
}
}
}
}
}));

(datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),self__.qreturn_map,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere,null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__72096){
var self__ = this;
var this__4501__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,G__72096,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__69686__auto__,f72093){
var self__ = this;
var this__69686__auto____$1 = this;
var new__69687__auto__ = (new datascript.parser.Query(datascript.parser.postwalk(self__.qfind,f72093),datascript.parser.postwalk(self__.qwith,f72093),datascript.parser.postwalk(self__.qreturn_map,f72093),datascript.parser.postwalk(self__.qin,f72093),datascript.parser.postwalk(self__.qwhere,f72093),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__69686__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__69688__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__69687__auto__,meta__69688__auto__);
} else {
return new__69687__auto__;
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___69689__auto__,pred72094,acc72095){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred72094,self__.qwhere,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred72094,self__.qin,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred72094,self__.qreturn_map,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred72094,self__.qwith,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred72094,self__.qfind,acc72095)))));
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___69689__auto__,acc72095){
var self__ = this;
var ___69689__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc72095,self__.qfind),self__.qwith),self__.qreturn_map),self__.qin),self__.qwhere);
}));

(datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qfind","qfind",-1125102797,null),new cljs.core.Symbol(null,"qwith","qwith",1594722135,null),new cljs.core.Symbol(null,"qreturn-map","qreturn-map",-813219775,null),new cljs.core.Symbol(null,"qin","qin",-1281784618,null),new cljs.core.Symbol(null,"qwhere","qwhere",-4535851,null)], null);
}));

(datascript.parser.Query.cljs$lang$type = true);

(datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"datascript.parser/Query",null,(1),null));
}));

(datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"datascript.parser/Query");
}));

/**
 * Positional factory function for datascript.parser/Query.
 */
datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(qfind,qwith,qreturn_map,qin,qwhere){
return (new datascript.parser.Query(qfind,qwith,qreturn_map,qin,qwhere,null,null,null));
});

/**
 * Factory function for datascript.parser/Query, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__72103){
var extmap__4542__auto__ = (function (){var G__72116 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72103,new cljs.core.Keyword(null,"qfind","qfind",1529332972),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], 0));
if(cljs.core.record_QMARK_(G__72103)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72116);
} else {
return G__72116;
}
})();
return (new datascript.parser.Query(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(G__72103),new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(G__72103),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(G__72103),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(G__72103),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(G__72103),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__5718__auto__ = cljs.core.first(qs);
if(cljs.core.truth_(temp__5718__auto__)){
var q = temp__5718__auto__;
if((q instanceof cljs.core.Keyword)){
var G__72626 = parsed;
var G__72627 = q;
var G__72628 = cljs.core.next(qs);
parsed = G__72626;
key = G__72627;
qs = G__72628;
continue;
} else {
var G__72629 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__72630 = key;
var G__72631 = cljs.core.next(qs);
parsed = G__72629;
key = G__72630;
qs = G__72631;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.explicit_input = (function datascript$parser$explicit_input(parsed){
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(parsed);
if((parsed instanceof datascript.parser.Pattern)){
return source;
} else {
if((!((source == null)))){
if((!((source instanceof datascript.parser.DefaultSrc)))){
return source;
} else {
return null;
}
} else {
return null;
}
}
});
datascript.parser.default_in = (function datascript$parser$default_in(qwhere){
if((!(cljs.core.empty_QMARK_(datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(datascript.parser.explicit_input,qwhere))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form,form_map){
var find_vars_72632 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_72633 = cljs.core.set(new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_72634 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_72635 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_72636 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(find_vars_72632,with_vars_72633),clojure.set.union.cljs$core$IFn$_invoke$arity$2(where_vars_72635,in_vars_72634));
var shared_72637 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(find_vars_72632,with_vars_72633);
if(cljs.core.empty_QMARK_(unknown_72636)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Query for unknown vars: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_72636)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_72636,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_(shared_72637)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":find and :with should not use same variables: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_72637)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_72637,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var temp__5724__auto___72638 = new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q);
if((temp__5724__auto___72638 == null)){
} else {
var return_map_72639 = temp__5724__auto___72638;
if((new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindScalar)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(return_map_72639)], 0))," does not work with single-scalar :find"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if((new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindColl)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(return_map_72639)], 0))," does not work with collection :find"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}
}

var temp__5724__auto___72640 = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q));
if((temp__5724__auto___72640 == null)){
} else {
var return_symbols_72641 = temp__5724__auto___72640;
var find_elements_72643 = datascript.parser.find_elements(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(return_symbols_72641),cljs.core.count(find_elements_72643))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Count of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q))], 0))," must match count of :find"].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"return-map","return-map",1620104901),cljs.core.cons(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q)),return_symbols_72641),new cljs.core.Keyword(null,"find","find",496279456),find_elements_72643,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}

if(((1) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(form_map),new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(form_map),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(form_map)], null))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Only one of :keys/:syms/:strs must be present",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

var in_vars_72646 = datascript.parser.collect_vars(new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_72647 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__72117_SHARP_){
return (p1__72117_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_72648 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__72118_SHARP_){
return (p1__72118_SHARP_ instanceof datascript.parser.RulesVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__4251__auto__ = datascript.parser.distinct_QMARK_(in_vars_72646);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = datascript.parser.distinct_QMARK_(in_sources_72647);
if(cljs.core.truth_(and__4251__auto____$1)){
return datascript.parser.distinct_QMARK_(in_rules_72648);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Vars used in :in should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_72649 = datascript.parser.collect_vars(new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_(with_vars_72649))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Vars used in :with should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_72651 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__72119_SHARP_){
return (p1__72119_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_72652 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__72120_SHARP_){
return (p1__72120_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_72653 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(where_sources_72652,in_sources_72651);
if(cljs.core.empty_QMARK_(unknown_72653)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Where uses unknown source vars: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_72653)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_72653,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__72121_SHARP_){
return (p1__72121_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__72122_SHARP_){
return (p1__72122_SHARP_ instanceof datascript.parser.RulesVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if((((!(cljs.core.empty_QMARK_(rule_exprs)))) && (cljs.core.empty_QMARK_(rules_vars)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing rules var '%' in :in",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_(q))?q:((cljs.core.sequential_QMARK_(q))?datascript.parser.query__GT_map(q):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Query should be a vector or a map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var qwhere = datascript.parser.parse_where(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY));
var res = datascript.parser.map__GT_Query(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),datascript.parser.parse_find(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"qwith","qwith",-45809392),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__5720__auto__)){
var with$ = temp__5720__auto__;
return datascript.parser.parse_with(with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),(function (){var or__4253__auto__ = datascript.parser.parse_return_map(new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = datascript.parser.parse_return_map(new cljs.core.Keyword(null,"syms","syms",-1575891762),new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return datascript.parser.parse_return_map(new cljs.core.Keyword(null,"strs","strs",1175537277),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(qm));
}
}
})(),new cljs.core.Keyword(null,"qin","qin",1372651151),datascript.parser.parse_in((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return datascript.parser.default_in(qwhere);
}
})()),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),qwhere], null));
datascript.parser.validate_query(res,q,qm);

return res;
});

//# sourceMappingURL=datascript.parser.js.map
