goog.provide('datascript.parser');




/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

var datascript$parser$ITraversable$_collect$dyn_57992 = (function (_,pred,acc){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (datascript.parser._collect[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__5391__auto__.call(null,_,pred,acc));
} else {
var m__5389__auto__ = (datascript.parser._collect["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__5389__auto__.call(null,_,pred,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect",_);
}
}
});
datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
return datascript$parser$ITraversable$_collect$dyn_57992(_,pred,acc);
}
});

var datascript$parser$ITraversable$_collect_vars$dyn_57993 = (function (_,acc){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__5391__auto__.call(null,_,acc));
} else {
var m__5389__auto__ = (datascript.parser._collect_vars["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__5389__auto__.call(null,_,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect-vars",_);
}
}
});
datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
return datascript$parser$ITraversable$_collect_vars$dyn_57993(_,acc);
}
});

var datascript$parser$ITraversable$_postwalk$dyn_57994 = (function (_,f){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (datascript.parser._postwalk[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5391__auto__.call(null,_,f));
} else {
var m__5389__auto__ = (datascript.parser._postwalk["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5389__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("ITraversable.-postwalk",_);
}
}
});
datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
return datascript$parser$ITraversable$_postwalk$dyn_57994(_,f);
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),size)));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56915_SHARP_,p2__56914_SHARP_){
var temp__5718__auto__ = (parse_el.cljs$core$IFn$_invoke$arity$1 ? parse_el.cljs$core$IFn$_invoke$arity$1(p2__56914_SHARP_) : parse_el.call(null,p2__56914_SHARP_));
if(cljs.core.truth_(temp__5718__auto__)){
var parsed = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__56915_SHARP_,parsed);
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__56921 = arguments.length;
switch (G__56921) {
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
var or__5043__auto__ = cljs.core.empty_QMARK_(coll);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
var G__56926 = datascript.parser._postwalk(form,f);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56926) : f.call(null,G__56926));
} else {
if(cljs.core.map_QMARK_(form)){
var G__56928 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form__$1,p__56929){
var vec__56930 = p__56929;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56930,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,k,(datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(v,f) : datascript.parser.postwalk.call(null,v,f)));
}),form,form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56928) : f.call(null,G__56928));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__56933 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56923_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__56923_SHARP_,f) : datascript.parser.postwalk.call(null,p1__56923_SHARP_,f));
}),form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56933) : f.call(null,G__56933));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__56934 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56924_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__56924_SHARP_,f) : datascript.parser.postwalk.call(null,p1__56924_SHARP_,f));
}),form));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56934) : f.call(null,G__56934));
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
var or__5043__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k56939,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__56943 = k56939;
switch (G__56943) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56939,else__5343__auto__);

}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__56944){
var vec__56945 = p__56944;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56945,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56945,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Placeholder{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56938){
var self__ = this;
var G__56938__$1 = this;
return (new cljs.core.RecordIter((0),G__56938__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56940,other56941){
var self__ = this;
var this56940__$1 = this;
return (((!((other56941 == null)))) && ((((this56940__$1.constructor === other56941.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56940__$1.__extmap,other56941.__extmap)))));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k56939){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k56939);
}));

(datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__56938){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__56948 = cljs.core.keyword_identical_QMARK_;
var expr__56949 = k__5349__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__56938),null));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__56938){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Placeholder(G__56938,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f56935){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred56936,acc56937){
var self__ = this;
var ___55567__auto____$1 = this;
return acc56937;
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc56937){
var self__ = this;
var ___55567__auto____$1 = this;
return acc56937;
}));

(datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.Placeholder.cljs$lang$type = true);

(datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Placeholder",null,(1),null));
}));

(datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Placeholder");
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
datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__56942){
var extmap__5382__auto__ = (function (){var G__56955 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__56942);
if(cljs.core.record_QMARK_(G__56942)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56955);
} else {
return G__56955;
}
})();
return (new datascript.parser.Placeholder(null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k56960,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__56970 = k56960;
var G__56970__$1 = (((G__56970 instanceof cljs.core.Keyword))?G__56970.fqn:null);
switch (G__56970__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56960,else__5343__auto__);

}
}));

(datascript.parser.Variable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__56971){
var vec__56972 = p__56971;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56972,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56972,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Variable{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56959){
var self__ = this;
var G__56959__$1 = this;
return (new cljs.core.RecordIter((0),G__56959__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56961,other56962){
var self__ = this;
var this56961__$1 = this;
return (((!((other56962 == null)))) && ((((this56961__$1.constructor === other56962.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56961__$1.symbol,other56962.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56961__$1.__extmap,other56962.__extmap)))))));
}));

(datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k56960){
var self__ = this;
var this__5347__auto____$1 = this;
var G__56980 = k56960;
var G__56980__$1 = (((G__56980 instanceof cljs.core.Keyword))?G__56980.fqn:null);
switch (G__56980__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56960);

}
}));

(datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__56959){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__56981 = cljs.core.keyword_identical_QMARK_;
var expr__56982 = k__5349__auto__;
if(cljs.core.truth_((pred__56981.cljs$core$IFn$_invoke$arity$2 ? pred__56981.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__56982) : pred__56981.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__56982)))){
return (new datascript.parser.Variable(G__56959,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__56959),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__56959){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__56959,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f56956){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk(self__.symbol,f56956),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred56957,acc56958){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred56957,self__.symbol,acc56958);
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc56958){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc56958,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc56958,self__.symbol));
}));

(datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.Variable.cljs$lang$type = true);

(datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Variable",null,(1),null));
}));

(datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Variable");
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
datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__56963){
var extmap__5382__auto__ = (function (){var G__56993 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56963,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__56963)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56993);
} else {
return G__56993;
}
})();
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__56963),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k56998,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57002 = k56998;
var G__57002__$1 = (((G__57002 instanceof cljs.core.Keyword))?G__57002.fqn:null);
switch (G__57002__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56998,else__5343__auto__);

}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57004){
var vec__57006 = p__57004;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57006,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57006,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.SrcVar{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56997){
var self__ = this;
var G__56997__$1 = this;
return (new cljs.core.RecordIter((0),G__56997__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56999,other57000){
var self__ = this;
var this56999__$1 = this;
return (((!((other57000 == null)))) && ((((this56999__$1.constructor === other57000.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56999__$1.symbol,other57000.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56999__$1.__extmap,other57000.__extmap)))))));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k56998){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57020 = k56998;
var G__57020__$1 = (((G__57020 instanceof cljs.core.Keyword))?G__57020.fqn:null);
switch (G__57020__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k56998);

}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__56997){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57021 = cljs.core.keyword_identical_QMARK_;
var expr__57022 = k__5349__auto__;
if(cljs.core.truth_((pred__57021.cljs$core$IFn$_invoke$arity$2 ? pred__57021.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__57022) : pred__57021.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__57022)))){
return (new datascript.parser.SrcVar(G__56997,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__56997),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__56997){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__56997,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f56994){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk(self__.symbol,f56994),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred56995,acc56996){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred56995,self__.symbol,acc56996);
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc56996){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc56996,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc56996,self__.symbol));
}));

(datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.SrcVar.cljs$lang$type = true);

(datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/SrcVar",null,(1),null));
}));

(datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/SrcVar");
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
datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__57001){
var extmap__5382__auto__ = (function (){var G__57034 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57001,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__57001)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57034);
} else {
return G__57034;
}
})();
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__57001),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57039,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57044 = k57039;
switch (G__57044) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57039,else__5343__auto__);

}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57048){
var vec__57049 = p__57048;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57049,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57049,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57038){
var self__ = this;
var G__57038__$1 = this;
return (new cljs.core.RecordIter((0),G__57038__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57040,other57041){
var self__ = this;
var this57040__$1 = this;
return (((!((other57041 == null)))) && ((((this57040__$1.constructor === other57041.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57040__$1.__extmap,other57041.__extmap)))));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57039){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k57039);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57038){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57075 = cljs.core.keyword_identical_QMARK_;
var expr__57076 = k__5349__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57038),null));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57038){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__57038,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57035){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57036,acc57037){
var self__ = this;
var ___55567__auto____$1 = this;
return acc57037;
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57037){
var self__ = this;
var ___55567__auto____$1 = this;
return acc57037;
}));

(datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.DefaultSrc.cljs$lang$type = true);

(datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/DefaultSrc",null,(1),null));
}));

(datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/DefaultSrc");
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
datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__57043){
var extmap__5382__auto__ = (function (){var G__57080 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__57043);
if(cljs.core.record_QMARK_(G__57043)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57080);
} else {
return G__57080;
}
})();
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57085,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57089 = k57085;
switch (G__57089) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57085,else__5343__auto__);

}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57090){
var vec__57091 = p__57090;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57091,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57091,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.RulesVar{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57084){
var self__ = this;
var G__57084__$1 = this;
return (new cljs.core.RecordIter((0),G__57084__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57086,other57087){
var self__ = this;
var this57086__$1 = this;
return (((!((other57087 == null)))) && ((((this57086__$1.constructor === other57087.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57086__$1.__extmap,other57087.__extmap)))));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57085){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k57085);
}));

(datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57084){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57101 = cljs.core.keyword_identical_QMARK_;
var expr__57102 = k__5349__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57084),null));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57084){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.RulesVar(G__57084,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57081){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57082,acc57083){
var self__ = this;
var ___55567__auto____$1 = this;
return acc57083;
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57083){
var self__ = this;
var ___55567__auto____$1 = this;
return acc57083;
}));

(datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.RulesVar.cljs$lang$type = true);

(datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/RulesVar",null,(1),null));
}));

(datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/RulesVar");
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
datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__57088){
var extmap__5382__auto__ = (function (){var G__57109 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__57088);
if(cljs.core.record_QMARK_(G__57088)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57109);
} else {
return G__57109;
}
})();
return (new datascript.parser.RulesVar(null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57114,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57120 = k57114;
var G__57120__$1 = (((G__57120 instanceof cljs.core.Keyword))?G__57120.fqn:null);
switch (G__57120__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57114,else__5343__auto__);

}
}));

(datascript.parser.Constant.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57125){
var vec__57126 = p__57125;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57126,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57126,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Constant{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57113){
var self__ = this;
var G__57113__$1 = this;
return (new cljs.core.RecordIter((0),G__57113__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57115,other57116){
var self__ = this;
var this57115__$1 = this;
return (((!((other57116 == null)))) && ((((this57115__$1.constructor === other57116.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57115__$1.value,other57116.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57115__$1.__extmap,other57116.__extmap)))))));
}));

(datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57114){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57130 = k57114;
var G__57130__$1 = (((G__57130 instanceof cljs.core.Keyword))?G__57130.fqn:null);
switch (G__57130__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57114);

}
}));

(datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57113){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57131 = cljs.core.keyword_identical_QMARK_;
var expr__57132 = k__5349__auto__;
if(cljs.core.truth_((pred__57131.cljs$core$IFn$_invoke$arity$2 ? pred__57131.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__57132) : pred__57131.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__57132)))){
return (new datascript.parser.Constant(G__57113,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57113),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57113){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__57113,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57110){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk(self__.value,f57110),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57111,acc57112){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57111,self__.value,acc57112);
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57112){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57112,self__.value) : datascript.parser.collect_vars_acc.call(null,acc57112,self__.value));
}));

(datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(datascript.parser.Constant.cljs$lang$type = true);

(datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Constant",null,(1),null));
}));

(datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Constant");
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
datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__57117){
var extmap__5382__auto__ = (function (){var G__57138 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57117,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__57117)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57138);
} else {
return G__57138;
}
})();
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__57117),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57143,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57148 = k57143;
var G__57148__$1 = (((G__57148 instanceof cljs.core.Keyword))?G__57148.fqn:null);
switch (G__57148__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57143,else__5343__auto__);

}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57150){
var vec__57151 = p__57150;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57151,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57151,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57142){
var self__ = this;
var G__57142__$1 = this;
return (new cljs.core.RecordIter((0),G__57142__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57144,other57145){
var self__ = this;
var this57144__$1 = this;
return (((!((other57145 == null)))) && ((((this57144__$1.constructor === other57145.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57144__$1.symbol,other57145.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57144__$1.__extmap,other57145.__extmap)))))));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57143){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57180 = k57143;
var G__57180__$1 = (((G__57180 instanceof cljs.core.Keyword))?G__57180.fqn:null);
switch (G__57180__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57143);

}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57142){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57182 = cljs.core.keyword_identical_QMARK_;
var expr__57183 = k__5349__auto__;
if(cljs.core.truth_((pred__57182.cljs$core$IFn$_invoke$arity$2 ? pred__57182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__57183) : pred__57182.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__57183)))){
return (new datascript.parser.PlainSymbol(G__57142,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57142),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57142){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__57142,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57139){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk(self__.symbol,f57139),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57140,acc57141){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57140,self__.symbol,acc57141);
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57141){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57141,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc57141,self__.symbol));
}));

(datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.PlainSymbol.cljs$lang$type = true);

(datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/PlainSymbol",null,(1),null));
}));

(datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/PlainSymbol");
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
datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__57146){
var extmap__5382__auto__ = (function (){var G__57189 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57146,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__57146)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57189);
} else {
return G__57189;
}
})();
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__57146),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var or__5043__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var or__5043__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
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
(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57202,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57214 = k57202;
var G__57214__$1 = (((G__57214 instanceof cljs.core.Keyword))?G__57214.fqn:null);
switch (G__57214__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57202,else__5343__auto__);

}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57217){
var vec__57218 = p__57217;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57218,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57218,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.RuleVars{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57201){
var self__ = this;
var G__57201__$1 = this;
return (new cljs.core.RecordIter((0),G__57201__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57203,other57204){
var self__ = this;
var this57203__$1 = this;
return (((!((other57204 == null)))) && ((((this57203__$1.constructor === other57204.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57203__$1.required,other57204.required)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57203__$1.free,other57204.free)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57203__$1.__extmap,other57204.__extmap)))))))));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57202){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57232 = k57202;
var G__57232__$1 = (((G__57232 instanceof cljs.core.Keyword))?G__57232.fqn:null);
switch (G__57232__$1) {
case "required":
case "free":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57202);

}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57201){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57235 = cljs.core.keyword_identical_QMARK_;
var expr__57236 = k__5349__auto__;
if(cljs.core.truth_((pred__57235.cljs$core$IFn$_invoke$arity$2 ? pred__57235.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),expr__57236) : pred__57235.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__57236)))){
return (new datascript.parser.RuleVars(G__57201,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57235.cljs$core$IFn$_invoke$arity$2 ? pred__57235.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"free","free",801364328),expr__57236) : pred__57235.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__57236)))){
return (new datascript.parser.RuleVars(self__.required,G__57201,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57201),null));
}
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"free","free",801364328),self__.free,null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57201){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__57201,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57198){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk(self__.required,f57198),datascript.parser.postwalk(self__.free,f57198),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57199,acc57200){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57199,self__.free,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57199,self__.required,acc57200));
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57200){
var self__ = this;
var ___55567__auto____$1 = this;
var G__57240 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57200,self__.required) : datascript.parser.collect_vars_acc.call(null,acc57200,self__.required));
var G__57241 = self__.free;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57240,G__57241) : datascript.parser.collect_vars_acc.call(null,G__57240,G__57241));
}));

(datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
}));

(datascript.parser.RuleVars.cljs$lang$type = true);

(datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleVars",null,(1),null));
}));

(datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/RuleVars");
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
datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__57208){
var extmap__5382__auto__ = (function (){var G__57242 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57208,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"free","free",801364328)], 0));
if(cljs.core.record_QMARK_(G__57208)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57242);
} else {
return G__57242;
}
})();
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__57208),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__57208),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__57247 = ((cljs.core.sequential_QMARK_(cljs.core.first(form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.next(form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57247,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57247,(1),null);
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
(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57256,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57260 = k57256;
switch (G__57260) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57256,else__5343__auto__);

}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57261){
var vec__57262 = p__57261;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57262,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57262,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57255){
var self__ = this;
var G__57255__$1 = this;
return (new cljs.core.RecordIter((0),G__57255__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57257,other57258){
var self__ = this;
var this57257__$1 = this;
return (((!((other57258 == null)))) && ((((this57257__$1.constructor === other57258.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57257__$1.__extmap,other57258.__extmap)))));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57256){
var self__ = this;
var this__5347__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k57256);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57255){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57272 = cljs.core.keyword_identical_QMARK_;
var expr__57273 = k__5349__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57255),null));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57255){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__57255,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57252){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57253,acc57254){
var self__ = this;
var ___55567__auto____$1 = this;
return acc57254;
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57254){
var self__ = this;
var ___55567__auto____$1 = this;
return acc57254;
}));

(datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.BindIgnore.cljs$lang$type = true);

(datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/BindIgnore",null,(1),null));
}));

(datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/BindIgnore");
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
datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__57259){
var extmap__5382__auto__ = (function (){var G__57279 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__57259);
if(cljs.core.record_QMARK_(G__57259)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57279);
} else {
return G__57279;
}
})();
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57284,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57288 = k57284;
var G__57288__$1 = (((G__57288 instanceof cljs.core.Keyword))?G__57288.fqn:null);
switch (G__57288__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57284,else__5343__auto__);

}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57289){
var vec__57290 = p__57289;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57290,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57290,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.BindScalar{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57283){
var self__ = this;
var G__57283__$1 = this;
return (new cljs.core.RecordIter((0),G__57283__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57285,other57286){
var self__ = this;
var this57285__$1 = this;
return (((!((other57286 == null)))) && ((((this57285__$1.constructor === other57286.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57285__$1.variable,other57286.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57285__$1.__extmap,other57286.__extmap)))))));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57284){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57322 = k57284;
var G__57322__$1 = (((G__57322 instanceof cljs.core.Keyword))?G__57322.fqn:null);
switch (G__57322__$1) {
case "variable":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57284);

}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57283){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57323 = cljs.core.keyword_identical_QMARK_;
var expr__57324 = k__5349__auto__;
if(cljs.core.truth_((pred__57323.cljs$core$IFn$_invoke$arity$2 ? pred__57323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variable","variable",-281346492),expr__57324) : pred__57323.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__57324)))){
return (new datascript.parser.BindScalar(G__57283,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57283),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57283){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__57283,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57280){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk(self__.variable,f57280),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57281,acc57282){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57281,self__.variable,acc57282);
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57282){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57282,self__.variable) : datascript.parser.collect_vars_acc.call(null,acc57282,self__.variable));
}));

(datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
}));

(datascript.parser.BindScalar.cljs$lang$type = true);

(datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/BindScalar",null,(1),null));
}));

(datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/BindScalar");
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
datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__57287){
var extmap__5382__auto__ = (function (){var G__57335 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57287,new cljs.core.Keyword(null,"variable","variable",-281346492));
if(cljs.core.record_QMARK_(G__57287)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57335);
} else {
return G__57335;
}
})();
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__57287),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57341,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57350 = k57341;
var G__57350__$1 = (((G__57350 instanceof cljs.core.Keyword))?G__57350.fqn:null);
switch (G__57350__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57341,else__5343__auto__);

}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57352){
var vec__57353 = p__57352;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57353,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57353,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.BindTuple{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57340){
var self__ = this;
var G__57340__$1 = this;
return (new cljs.core.RecordIter((0),G__57340__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57342,other57343){
var self__ = this;
var this57342__$1 = this;
return (((!((other57343 == null)))) && ((((this57342__$1.constructor === other57343.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57342__$1.bindings,other57343.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57342__$1.__extmap,other57343.__extmap)))))));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57341){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57360 = k57341;
var G__57360__$1 = (((G__57360 instanceof cljs.core.Keyword))?G__57360.fqn:null);
switch (G__57360__$1) {
case "bindings":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57341);

}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57340){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57361 = cljs.core.keyword_identical_QMARK_;
var expr__57362 = k__5349__auto__;
if(cljs.core.truth_((pred__57361.cljs$core$IFn$_invoke$arity$2 ? pred__57361.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__57362) : pred__57361.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__57362)))){
return (new datascript.parser.BindTuple(G__57340,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57340),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57340){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__57340,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57337){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk(self__.bindings,f57337),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57338,acc57339){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57338,self__.bindings,acc57339);
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57339){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57339,self__.bindings) : datascript.parser.collect_vars_acc.call(null,acc57339,self__.bindings));
}));

(datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(datascript.parser.BindTuple.cljs$lang$type = true);

(datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/BindTuple",null,(1),null));
}));

(datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/BindTuple");
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
datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__57344){
var extmap__5382__auto__ = (function (){var G__57368 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57344,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
if(cljs.core.record_QMARK_(G__57344)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57368);
} else {
return G__57368;
}
})();
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__57344),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57373,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57377 = k57373;
var G__57377__$1 = (((G__57377 instanceof cljs.core.Keyword))?G__57377.fqn:null);
switch (G__57377__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57373,else__5343__auto__);

}
}));

(datascript.parser.BindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57384){
var vec__57385 = p__57384;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57385,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57385,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.BindColl{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57372){
var self__ = this;
var G__57372__$1 = this;
return (new cljs.core.RecordIter((0),G__57372__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57374,other57375){
var self__ = this;
var this57374__$1 = this;
return (((!((other57375 == null)))) && ((((this57374__$1.constructor === other57375.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57374__$1.binding,other57375.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57374__$1.__extmap,other57375.__extmap)))))));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57373){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57395 = k57373;
var G__57395__$1 = (((G__57395 instanceof cljs.core.Keyword))?G__57395.fqn:null);
switch (G__57395__$1) {
case "binding":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57373);

}
}));

(datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57372){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57396 = cljs.core.keyword_identical_QMARK_;
var expr__57397 = k__5349__auto__;
if(cljs.core.truth_((pred__57396.cljs$core$IFn$_invoke$arity$2 ? pred__57396.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binding","binding",539932593),expr__57397) : pred__57396.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__57397)))){
return (new datascript.parser.BindColl(G__57372,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57372),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57372){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__57372,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57369){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk(self__.binding,f57369),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57370,acc57371){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57370,self__.binding,acc57371);
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57371){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57371,self__.binding) : datascript.parser.collect_vars_acc.call(null,acc57371,self__.binding));
}));

(datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
}));

(datascript.parser.BindColl.cljs$lang$type = true);

(datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/BindColl",null,(1),null));
}));

(datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/BindColl");
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
datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__57376){
var extmap__5382__auto__ = (function (){var G__57409 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57376,new cljs.core.Keyword(null,"binding","binding",539932593));
if(cljs.core.record_QMARK_(G__57376)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57409);
} else {
return G__57409;
}
})();
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__57376),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var temp__5718__auto__ = (function (){var G__57410 = cljs.core.first(form);
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(G__57410) : datascript.parser.parse_binding.call(null,G__57410));
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
var or__5043__auto__ = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var or__5043__auto__ = datascript.parser.parse_bind_coll(form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.parser.parse_bind_rel(form);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = datascript.parser.parse_bind_tuple(form);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = datascript.parser.parse_bind_scalar(form);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
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

var datascript$parser$IFindVars$_find_vars$dyn_58126 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (datascript.parser._find_vars[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (datascript.parser._find_vars["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindVars.-find-vars",this$);
}
}
});
datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
return datascript$parser$IFindVars$_find_vars$dyn_58126(this$);
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

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57415,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57420 = k57415;
var G__57420__$1 = (((G__57420 instanceof cljs.core.Keyword))?G__57420.fqn:null);
switch (G__57420__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57415,else__5343__auto__);

}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57421){
var vec__57422 = p__57421;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57422,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57422,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Aggregate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57414){
var self__ = this;
var G__57414__$1 = this;
return (new cljs.core.RecordIter((0),G__57414__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57416,other57417){
var self__ = this;
var this57416__$1 = this;
return (((!((other57417 == null)))) && ((((this57416__$1.constructor === other57417.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57416__$1.fn,other57417.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57416__$1.args,other57417.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57416__$1.__extmap,other57417.__extmap)))))))));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57415){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57432 = k57415;
var G__57432__$1 = (((G__57432 instanceof cljs.core.Keyword))?G__57432.fqn:null);
switch (G__57432__$1) {
case "fn":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57415);

}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57414){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57435 = cljs.core.keyword_identical_QMARK_;
var expr__57436 = k__5349__auto__;
if(cljs.core.truth_((pred__57435.cljs$core$IFn$_invoke$arity$2 ? pred__57435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57436) : pred__57435.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57436)))){
return (new datascript.parser.Aggregate(G__57414,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57435.cljs$core$IFn$_invoke$arity$2 ? pred__57435.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__57436) : pred__57435.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__57436)))){
return (new datascript.parser.Aggregate(self__.fn,G__57414,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57414),null));
}
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57414){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__57414,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57411){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk(self__.fn,f57411),datascript.parser.postwalk(self__.args,f57411),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57412,acc57413){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57412,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57412,self__.fn,acc57413));
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57413){
var self__ = this;
var ___55567__auto____$1 = this;
var G__57438 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57413,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc57413,self__.fn));
var G__57439 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57438,G__57439) : datascript.parser.collect_vars_acc.call(null,G__57438,G__57439));
}));

(datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.Aggregate.cljs$lang$type = true);

(datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Aggregate",null,(1),null));
}));

(datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Aggregate");
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
datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__57418){
var extmap__5382__auto__ = (function (){var G__57440 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57418,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__57418)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57440);
} else {
return G__57440;
}
})();
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57418),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__57418),null,cljs.core.not_empty(extmap__5382__auto__),null));
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

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57445,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57449 = k57445;
var G__57449__$1 = (((G__57449 instanceof cljs.core.Keyword))?G__57449.fqn:null);
switch (G__57449__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57445,else__5343__auto__);

}
}));

(datascript.parser.Pull.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57450){
var vec__57451 = p__57450;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57451,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57451,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Pull{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57444){
var self__ = this;
var G__57444__$1 = this;
return (new cljs.core.RecordIter((0),G__57444__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57446,other57447){
var self__ = this;
var this57446__$1 = this;
return (((!((other57447 == null)))) && ((((this57446__$1.constructor === other57447.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57446__$1.source,other57447.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57446__$1.variable,other57447.variable)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57446__$1.pattern,other57447.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57446__$1.__extmap,other57447.__extmap)))))))))));
}));

(datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Pull.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57445){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57456 = k57445;
var G__57456__$1 = (((G__57456 instanceof cljs.core.Keyword))?G__57456.fqn:null);
switch (G__57456__$1) {
case "source":
case "variable":
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57445);

}
}));

(datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57444){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57457 = cljs.core.keyword_identical_QMARK_;
var expr__57458 = k__5349__auto__;
if(cljs.core.truth_((pred__57457.cljs$core$IFn$_invoke$arity$2 ? pred__57457.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__57458) : pred__57457.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__57458)))){
return (new datascript.parser.Pull(G__57444,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57457.cljs$core$IFn$_invoke$arity$2 ? pred__57457.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variable","variable",-281346492),expr__57458) : pred__57457.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__57458)))){
return (new datascript.parser.Pull(self__.source,G__57444,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57457.cljs$core$IFn$_invoke$arity$2 ? pred__57457.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57458) : pred__57457.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57458)))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__57444,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57444),null));
}
}
}
}));

(datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57444){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__57444,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57441){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk(self__.source,f57441),datascript.parser.postwalk(self__.variable,f57441),datascript.parser.postwalk(self__.pattern,f57441),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57442,acc57443){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57442,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57442,self__.variable,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57442,self__.source,acc57443)));
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57443){
var self__ = this;
var ___55567__auto____$1 = this;
var G__57463 = (function (){var G__57465 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57443,self__.source) : datascript.parser.collect_vars_acc.call(null,acc57443,self__.source));
var G__57466 = self__.variable;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57465,G__57466) : datascript.parser.collect_vars_acc.call(null,G__57465,G__57466));
})();
var G__57464 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57463,G__57464) : datascript.parser.collect_vars_acc.call(null,G__57463,G__57464));
}));

(datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(datascript.parser.Pull.cljs$lang$type = true);

(datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Pull",null,(1),null));
}));

(datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Pull");
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
datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__57448){
var extmap__5382__auto__ = (function (){var G__57468 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57448,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], 0));
if(cljs.core.record_QMARK_(G__57448)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57468);
} else {
return G__57468;
}
})();
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__57448),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__57448),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__57448),null,cljs.core.not_empty(extmap__5382__auto__),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

var datascript$parser$IFindElements$find_elements$dyn_58155 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (datascript.parser.find_elements[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (datascript.parser.find_elements["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindElements.find-elements",this$);
}
}
});
datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
return datascript$parser$IFindElements$find_elements$dyn_58155(this$);
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
(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57474,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57483 = k57474;
var G__57483__$1 = (((G__57483 instanceof cljs.core.Keyword))?G__57483.fqn:null);
switch (G__57483__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57474,else__5343__auto__);

}
}));

(datascript.parser.FindRel.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57485){
var vec__57486 = p__57485;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57486,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57486,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.FindRel{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57473){
var self__ = this;
var G__57473__$1 = this;
return (new cljs.core.RecordIter((0),G__57473__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57475,other57476){
var self__ = this;
var this57475__$1 = this;
return (((!((other57476 == null)))) && ((((this57475__$1.constructor === other57476.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57475__$1.elements,other57476.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57475__$1.__extmap,other57476.__extmap)))))));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindRel.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57474){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57489 = k57474;
var G__57489__$1 = (((G__57489 instanceof cljs.core.Keyword))?G__57489.fqn:null);
switch (G__57489__$1) {
case "elements":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57474);

}
}));

(datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57473){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57490 = cljs.core.keyword_identical_QMARK_;
var expr__57491 = k__5349__auto__;
if(cljs.core.truth_((pred__57490.cljs$core$IFn$_invoke$arity$2 ? pred__57490.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elements","elements",657646735),expr__57491) : pred__57490.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__57491)))){
return (new datascript.parser.FindRel(G__57473,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57473),null));
}
}));

(datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57473){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__57473,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57470){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk(self__.elements,f57470),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57471,acc57472){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57471,self__.elements,acc57472);
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57472){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57472,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc57472,self__.elements));
}));

(datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
}));

(datascript.parser.FindRel.cljs$lang$type = true);

(datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/FindRel",null,(1),null));
}));

(datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/FindRel");
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
datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__57478){
var extmap__5382__auto__ = (function (){var G__57493 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57478,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.record_QMARK_(G__57478)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57493);
} else {
return G__57493;
}
})();
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__57478),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57498,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57502 = k57498;
var G__57502__$1 = (((G__57502 instanceof cljs.core.Keyword))?G__57502.fqn:null);
switch (G__57502__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57498,else__5343__auto__);

}
}));

(datascript.parser.FindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57503){
var vec__57504 = p__57503;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57504,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57504,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.FindColl{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57497){
var self__ = this;
var G__57497__$1 = this;
return (new cljs.core.RecordIter((0),G__57497__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57499,other57500){
var self__ = this;
var this57499__$1 = this;
return (((!((other57500 == null)))) && ((((this57499__$1.constructor === other57500.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57499__$1.element,other57500.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57499__$1.__extmap,other57500.__extmap)))))));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindColl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57498){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57507 = k57498;
var G__57507__$1 = (((G__57507 instanceof cljs.core.Keyword))?G__57507.fqn:null);
switch (G__57507__$1) {
case "element":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57498);

}
}));

(datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57497){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57508 = cljs.core.keyword_identical_QMARK_;
var expr__57509 = k__5349__auto__;
if(cljs.core.truth_((pred__57508.cljs$core$IFn$_invoke$arity$2 ? pred__57508.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),expr__57509) : pred__57508.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__57509)))){
return (new datascript.parser.FindColl(G__57497,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57497),null));
}
}));

(datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57497){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__57497,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57494){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk(self__.element,f57494),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57495,acc57496){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57495,self__.element,acc57496);
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57496){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57496,self__.element) : datascript.parser.collect_vars_acc.call(null,acc57496,self__.element));
}));

(datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
}));

(datascript.parser.FindColl.cljs$lang$type = true);

(datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/FindColl",null,(1),null));
}));

(datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/FindColl");
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
datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__57501){
var extmap__5382__auto__ = (function (){var G__57513 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57501,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core.record_QMARK_(G__57501)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57513);
} else {
return G__57513;
}
})();
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__57501),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57518,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57522 = k57518;
var G__57522__$1 = (((G__57522 instanceof cljs.core.Keyword))?G__57522.fqn:null);
switch (G__57522__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57518,else__5343__auto__);

}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57524){
var vec__57525 = p__57524;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57525,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57525,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.FindScalar{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57517){
var self__ = this;
var G__57517__$1 = this;
return (new cljs.core.RecordIter((0),G__57517__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57519,other57520){
var self__ = this;
var this57519__$1 = this;
return (((!((other57520 == null)))) && ((((this57519__$1.constructor === other57520.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57519__$1.element,other57520.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57519__$1.__extmap,other57520.__extmap)))))));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57518){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57532 = k57518;
var G__57532__$1 = (((G__57532 instanceof cljs.core.Keyword))?G__57532.fqn:null);
switch (G__57532__$1) {
case "element":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57518);

}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57517){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57533 = cljs.core.keyword_identical_QMARK_;
var expr__57534 = k__5349__auto__;
if(cljs.core.truth_((pred__57533.cljs$core$IFn$_invoke$arity$2 ? pred__57533.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),expr__57534) : pred__57533.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__57534)))){
return (new datascript.parser.FindScalar(G__57517,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57517),null));
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57517){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__57517,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57514){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk(self__.element,f57514),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57515,acc57516){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57515,self__.element,acc57516);
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57516){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57516,self__.element) : datascript.parser.collect_vars_acc.call(null,acc57516,self__.element));
}));

(datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
}));

(datascript.parser.FindScalar.cljs$lang$type = true);

(datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/FindScalar",null,(1),null));
}));

(datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/FindScalar");
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
datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__57521){
var extmap__5382__auto__ = (function (){var G__57540 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57521,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core.record_QMARK_(G__57521)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57540);
} else {
return G__57540;
}
})();
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__57521),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57549,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57565 = k57549;
var G__57565__$1 = (((G__57565 instanceof cljs.core.Keyword))?G__57565.fqn:null);
switch (G__57565__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57549,else__5343__auto__);

}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57570){
var vec__57571 = p__57570;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57571,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57571,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.FindTuple{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57548){
var self__ = this;
var G__57548__$1 = this;
return (new cljs.core.RecordIter((0),G__57548__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57550,other57551){
var self__ = this;
var this57550__$1 = this;
return (((!((other57551 == null)))) && ((((this57550__$1.constructor === other57551.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57550__$1.elements,other57551.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57550__$1.__extmap,other57551.__extmap)))))));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57549){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57580 = k57549;
var G__57580__$1 = (((G__57580 instanceof cljs.core.Keyword))?G__57580.fqn:null);
switch (G__57580__$1) {
case "elements":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57549);

}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57548){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57581 = cljs.core.keyword_identical_QMARK_;
var expr__57582 = k__5349__auto__;
if(cljs.core.truth_((pred__57581.cljs$core$IFn$_invoke$arity$2 ? pred__57581.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elements","elements",657646735),expr__57582) : pred__57581.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__57582)))){
return (new datascript.parser.FindTuple(G__57548,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57548),null));
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57548){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__57548,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57545){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk(self__.elements,f57545),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57546,acc57547){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57546,self__.elements,acc57547);
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57547){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57547,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc57547,self__.elements));
}));

(datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
}));

(datascript.parser.FindTuple.cljs$lang$type = true);

(datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/FindTuple",null,(1),null));
}));

(datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/FindTuple");
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
datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__57556){
var extmap__5382__auto__ = (function (){var G__57590 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57556,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.record_QMARK_(G__57556)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57590);
} else {
return G__57590;
}
})();
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__57556),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var vec__57591 = form;
var seq__57592 = cljs.core.seq(vec__57591);
var first__57593 = cljs.core.first(seq__57592);
var seq__57592__$1 = cljs.core.next(seq__57592);
var fn = first__57593;
var args = seq__57592__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__5041__auto__ = fn_STAR_;
if(cljs.core.truth_(and__5041__auto__)){
return args_STAR_;
} else {
return and__5041__auto__;
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
var vec__57597 = form;
var seq__57598 = cljs.core.seq(vec__57597);
var first__57599 = cljs.core.first(seq__57598);
var seq__57598__$1 = cljs.core.next(seq__57598);
var _ = first__57599;
var first__57599__$1 = cljs.core.first(seq__57598__$1);
var seq__57598__$2 = cljs.core.next(seq__57598__$1);
var fn = first__57599__$1;
var args = seq__57598__$2;
var fn_STAR_ = datascript.parser.parse_variable(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__5041__auto__ = fn_STAR_;
if(cljs.core.truth_(and__5041__auto__)){
return args_STAR_;
} else {
return and__5041__auto__;
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
var vec__57602 = ((long_QMARK_)?cljs.core.nnext(form):cljs.core.next(form));
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57602,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57602,(1),null);
var src_STAR_ = datascript.parser.parse_src_var(src);
var var_STAR_ = datascript.parser.parse_variable(var$);
var pattern_STAR_ = (function (){var or__5043__auto__ = datascript.parser.parse_variable(pattern);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.parser.parse_plain_variable(pattern);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return datascript.parser.parse_constant(pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = src_STAR_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__5041__auto____$1)){
return pattern_STAR_;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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
var or__5043__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.parser.parse_pull_expr(form);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = datascript.parser.parse_aggregate_custom(form);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return datascript.parser.parse_aggregate(form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__57605 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,form);
if((G__57605 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__57605,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
if(((cljs.core.sequential_QMARK_(inner)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inner),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(inner),new cljs.core.Symbol(null,"...","...",-1926939749,null))))))){
var G__57606 = datascript.parser.parse_find_elem(cljs.core.first(inner));
if((G__57606 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__57606,null,null,null));
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
var G__57607 = datascript.parser.parse_find_elem(cljs.core.first(form));
if((G__57607 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__57607,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
var G__57608 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,inner);
if((G__57608 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__57608,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__5043__auto__ = datascript.parser.parse_find_rel(form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.parser.parse_find_coll(form);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = datascript.parser.parse_find_scalar(form);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = datascript.parser.parse_find_tuple(form);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
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
(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57613,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57617 = k57613;
var G__57617__$1 = (((G__57617 instanceof cljs.core.Keyword))?G__57617.fqn:null);
switch (G__57617__$1) {
case "type":
return self__.type;

break;
case "symbols":
return self__.symbols;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57613,else__5343__auto__);

}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57618){
var vec__57619 = p__57618;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57619,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57619,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.ReturnMap{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols],null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57612){
var self__ = this;
var G__57612__$1 = this;
return (new cljs.core.RecordIter((0),G__57612__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbols","symbols",1211743)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-2025547471 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57614,other57615){
var self__ = this;
var this57614__$1 = this;
return (((!((other57615 == null)))) && ((((this57614__$1.constructor === other57615.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57614__$1.type,other57615.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57614__$1.symbols,other57615.symbols)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57614__$1.__extmap,other57615.__extmap)))))))));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"symbols","symbols",1211743),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57613){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57622 = k57613;
var G__57622__$1 = (((G__57622 instanceof cljs.core.Keyword))?G__57622.fqn:null);
switch (G__57622__$1) {
case "type":
case "symbols":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57613);

}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57612){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57623 = cljs.core.keyword_identical_QMARK_;
var expr__57624 = k__5349__auto__;
if(cljs.core.truth_((pred__57623.cljs$core$IFn$_invoke$arity$2 ? pred__57623.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__57624) : pred__57623.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__57624)))){
return (new datascript.parser.ReturnMap(G__57612,self__.symbols,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57623.cljs$core$IFn$_invoke$arity$2 ? pred__57623.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__57624) : pred__57623.call(null,new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__57624)))){
return (new datascript.parser.ReturnMap(self__.type,G__57612,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57612),null));
}
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols,null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57612){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,G__57612,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57609){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.ReturnMap(datascript.parser.postwalk(self__.type,f57609),datascript.parser.postwalk(self__.symbols,f57609),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57610,acc57611){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57610,self__.symbols,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57610,self__.type,acc57611));
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57611){
var self__ = this;
var ___55567__auto____$1 = this;
var G__57626 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57611,self__.type) : datascript.parser.collect_vars_acc.call(null,acc57611,self__.type));
var G__57627 = self__.symbols;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57626,G__57627) : datascript.parser.collect_vars_acc.call(null,G__57626,G__57627));
}));

(datascript.parser.ReturnMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"symbols","symbols",1641743270,null)], null);
}));

(datascript.parser.ReturnMap.cljs$lang$type = true);

(datascript.parser.ReturnMap.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/ReturnMap",null,(1),null));
}));

(datascript.parser.ReturnMap.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/ReturnMap");
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
datascript.parser.map__GT_ReturnMap = (function datascript$parser$map__GT_ReturnMap(G__57616){
var extmap__5382__auto__ = (function (){var G__57628 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57616,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbols","symbols",1211743)], 0));
if(cljs.core.record_QMARK_(G__57616)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57628);
} else {
return G__57628;
}
})();
return (new datascript.parser.ReturnMap(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__57616),new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(G__57616),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

datascript.parser.parse_return_map = (function datascript$parser$parse_return_map(type,form){
if((((!(cljs.core.empty_QMARK_(form)))) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,form)))){
var G__57629 = type;
var G__57629__$1 = (((G__57629 instanceof cljs.core.Keyword))?G__57629.fqn:null);
switch (G__57629__$1) {
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
var or__5043__auto__ = datascript.parser.parse_seq(datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :with clause, expected [ variable+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5718__auto__ = (function (){var or__5043__auto__ = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.parser.parse_rules_var(form);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
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
var or__5043__auto__ = datascript.parser.parse_seq(datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57634,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57638 = k57634;
var G__57638__$1 = (((G__57638 instanceof cljs.core.Keyword))?G__57638.fqn:null);
switch (G__57638__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57634,else__5343__auto__);

}
}));

(datascript.parser.Pattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57639){
var vec__57640 = p__57639;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57640,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57640,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Pattern{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57633){
var self__ = this;
var G__57633__$1 = this;
return (new cljs.core.RecordIter((0),G__57633__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57635,other57636){
var self__ = this;
var this57635__$1 = this;
return (((!((other57636 == null)))) && ((((this57635__$1.constructor === other57636.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57635__$1.source,other57636.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57635__$1.pattern,other57636.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57635__$1.__extmap,other57636.__extmap)))))))));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57634){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57643 = k57634;
var G__57643__$1 = (((G__57643 instanceof cljs.core.Keyword))?G__57643.fqn:null);
switch (G__57643__$1) {
case "source":
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57634);

}
}));

(datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57633){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57644 = cljs.core.keyword_identical_QMARK_;
var expr__57645 = k__5349__auto__;
if(cljs.core.truth_((pred__57644.cljs$core$IFn$_invoke$arity$2 ? pred__57644.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__57645) : pred__57644.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__57645)))){
return (new datascript.parser.Pattern(G__57633,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57644.cljs$core$IFn$_invoke$arity$2 ? pred__57644.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57645) : pred__57644.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__57645)))){
return (new datascript.parser.Pattern(self__.source,G__57633,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57633),null));
}
}
}));

(datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57633){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__57633,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57630){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk(self__.source,f57630),datascript.parser.postwalk(self__.pattern,f57630),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57631,acc57632){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57631,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57631,self__.source,acc57632));
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57632){
var self__ = this;
var ___55567__auto____$1 = this;
var G__57647 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57632,self__.source) : datascript.parser.collect_vars_acc.call(null,acc57632,self__.source));
var G__57648 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57647,G__57648) : datascript.parser.collect_vars_acc.call(null,G__57647,G__57648));
}));

(datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(datascript.parser.Pattern.cljs$lang$type = true);

(datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Pattern",null,(1),null));
}));

(datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Pattern");
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
datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__57637){
var extmap__5382__auto__ = (function (){var G__57649 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57637,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pattern","pattern",242135423)], 0));
if(cljs.core.record_QMARK_(G__57637)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57649);
} else {
return G__57649;
}
})();
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__57637),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__57637),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57654,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57658 = k57654;
var G__57658__$1 = (((G__57658 instanceof cljs.core.Keyword))?G__57658.fqn:null);
switch (G__57658__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57654,else__5343__auto__);

}
}));

(datascript.parser.Predicate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57659){
var vec__57660 = p__57659;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57660,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57660,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Predicate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57653){
var self__ = this;
var G__57653__$1 = this;
return (new cljs.core.RecordIter((0),G__57653__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57655,other57656){
var self__ = this;
var this57655__$1 = this;
return (((!((other57656 == null)))) && ((((this57655__$1.constructor === other57656.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57655__$1.fn,other57656.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57655__$1.args,other57656.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57655__$1.__extmap,other57656.__extmap)))))))));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57654){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57663 = k57654;
var G__57663__$1 = (((G__57663 instanceof cljs.core.Keyword))?G__57663.fqn:null);
switch (G__57663__$1) {
case "fn":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57654);

}
}));

(datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57653){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57664 = cljs.core.keyword_identical_QMARK_;
var expr__57665 = k__5349__auto__;
if(cljs.core.truth_((pred__57664.cljs$core$IFn$_invoke$arity$2 ? pred__57664.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57665) : pred__57664.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57665)))){
return (new datascript.parser.Predicate(G__57653,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57664.cljs$core$IFn$_invoke$arity$2 ? pred__57664.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__57665) : pred__57664.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__57665)))){
return (new datascript.parser.Predicate(self__.fn,G__57653,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57653),null));
}
}
}));

(datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57653){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__57653,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57650){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk(self__.fn,f57650),datascript.parser.postwalk(self__.args,f57650),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57651,acc57652){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57651,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57651,self__.fn,acc57652));
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57652){
var self__ = this;
var ___55567__auto____$1 = this;
var G__57667 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57652,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc57652,self__.fn));
var G__57668 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57667,G__57668) : datascript.parser.collect_vars_acc.call(null,G__57667,G__57668));
}));

(datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.Predicate.cljs$lang$type = true);

(datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Predicate",null,(1),null));
}));

(datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Predicate");
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
datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__57657){
var extmap__5382__auto__ = (function (){var G__57669 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57657,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__57657)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57669);
} else {
return G__57669;
}
})();
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57657),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__57657),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57674,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57678 = k57674;
var G__57678__$1 = (((G__57678 instanceof cljs.core.Keyword))?G__57678.fqn:null);
switch (G__57678__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57674,else__5343__auto__);

}
}));

(datascript.parser.Function.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57679){
var vec__57680 = p__57679;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57680,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57680,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Function{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57673){
var self__ = this;
var G__57673__$1 = this;
return (new cljs.core.RecordIter((0),G__57673__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57675,other57676){
var self__ = this;
var this57675__$1 = this;
return (((!((other57676 == null)))) && ((((this57675__$1.constructor === other57676.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57675__$1.fn,other57676.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57675__$1.args,other57676.args)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57675__$1.binding,other57676.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57675__$1.__extmap,other57676.__extmap)))))))))));
}));

(datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Function.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57674){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57683 = k57674;
var G__57683__$1 = (((G__57683 instanceof cljs.core.Keyword))?G__57683.fqn:null);
switch (G__57683__$1) {
case "fn":
case "args":
case "binding":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57674);

}
}));

(datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57673){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57684 = cljs.core.keyword_identical_QMARK_;
var expr__57685 = k__5349__auto__;
if(cljs.core.truth_((pred__57684.cljs$core$IFn$_invoke$arity$2 ? pred__57684.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57685) : pred__57684.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__57685)))){
return (new datascript.parser.Function(G__57673,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57684.cljs$core$IFn$_invoke$arity$2 ? pred__57684.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__57685) : pred__57684.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__57685)))){
return (new datascript.parser.Function(self__.fn,G__57673,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57684.cljs$core$IFn$_invoke$arity$2 ? pred__57684.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binding","binding",539932593),expr__57685) : pred__57684.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__57685)))){
return (new datascript.parser.Function(self__.fn,self__.args,G__57673,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57673),null));
}
}
}
}));

(datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57673){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__57673,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57670){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Function(datascript.parser.postwalk(self__.fn,f57670),datascript.parser.postwalk(self__.args,f57670),datascript.parser.postwalk(self__.binding,f57670),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57671,acc57672){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57671,self__.binding,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57671,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57671,self__.fn,acc57672)));
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57672){
var self__ = this;
var ___55567__auto____$1 = this;
var G__57687 = (function (){var G__57689 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57672,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc57672,self__.fn));
var G__57690 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57689,G__57690) : datascript.parser.collect_vars_acc.call(null,G__57689,G__57690));
})();
var G__57688 = self__.binding;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57687,G__57688) : datascript.parser.collect_vars_acc.call(null,G__57687,G__57688));
}));

(datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
}));

(datascript.parser.Function.cljs$lang$type = true);

(datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Function",null,(1),null));
}));

(datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Function");
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
datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__57677){
var extmap__5382__auto__ = (function (){var G__57691 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57677,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], 0));
if(cljs.core.record_QMARK_(G__57677)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57691);
} else {
return G__57691;
}
})();
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__57677),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__57677),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__57677),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57696,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57700 = k57696;
var G__57700__$1 = (((G__57700 instanceof cljs.core.Keyword))?G__57700.fqn:null);
switch (G__57700__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57696,else__5343__auto__);

}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57701){
var vec__57702 = p__57701;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57702,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57702,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57695){
var self__ = this;
var G__57695__$1 = this;
return (new cljs.core.RecordIter((0),G__57695__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57697,other57698){
var self__ = this;
var this57697__$1 = this;
return (((!((other57698 == null)))) && ((((this57697__$1.constructor === other57698.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57697__$1.source,other57698.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57697__$1.name,other57698.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57697__$1.args,other57698.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57697__$1.__extmap,other57698.__extmap)))))))))));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57696){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57705 = k57696;
var G__57705__$1 = (((G__57705 instanceof cljs.core.Keyword))?G__57705.fqn:null);
switch (G__57705__$1) {
case "source":
case "name":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57696);

}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57695){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57706 = cljs.core.keyword_identical_QMARK_;
var expr__57707 = k__5349__auto__;
if(cljs.core.truth_((pred__57706.cljs$core$IFn$_invoke$arity$2 ? pred__57706.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__57707) : pred__57706.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__57707)))){
return (new datascript.parser.RuleExpr(G__57695,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57706.cljs$core$IFn$_invoke$arity$2 ? pred__57706.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__57707) : pred__57706.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__57707)))){
return (new datascript.parser.RuleExpr(self__.source,G__57695,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57706.cljs$core$IFn$_invoke$arity$2 ? pred__57706.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__57707) : pred__57706.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__57707)))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__57695,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57695),null));
}
}
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57695){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__57695,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57692){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk(self__.source,f57692),datascript.parser.postwalk(self__.name,f57692),datascript.parser.postwalk(self__.args,f57692),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57693,acc57694){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57693,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57693,self__.name,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57693,self__.source,acc57694)));
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57694){
var self__ = this;
var ___55567__auto____$1 = this;
var G__57709 = (function (){var G__57711 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57694,self__.source) : datascript.parser.collect_vars_acc.call(null,acc57694,self__.source));
var G__57712 = self__.name;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57711,G__57712) : datascript.parser.collect_vars_acc.call(null,G__57711,G__57712));
})();
var G__57710 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57709,G__57710) : datascript.parser.collect_vars_acc.call(null,G__57709,G__57710));
}));

(datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.RuleExpr.cljs$lang$type = true);

(datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleExpr",null,(1),null));
}));

(datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/RuleExpr");
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
datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__57699){
var extmap__5382__auto__ = (function (){var G__57713 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57699,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__57699)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57713);
} else {
return G__57713;
}
})();
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__57699),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__57699),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__57699),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57718,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57722 = k57718;
var G__57722__$1 = (((G__57722 instanceof cljs.core.Keyword))?G__57722.fqn:null);
switch (G__57722__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57718,else__5343__auto__);

}
}));

(datascript.parser.Not.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57723){
var vec__57724 = p__57723;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57724,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57724,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Not{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57717){
var self__ = this;
var G__57717__$1 = this;
return (new cljs.core.RecordIter((0),G__57717__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57719,other57720){
var self__ = this;
var this57719__$1 = this;
return (((!((other57720 == null)))) && ((((this57719__$1.constructor === other57720.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57719__$1.source,other57720.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57719__$1.vars,other57720.vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57719__$1.clauses,other57720.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57719__$1.__extmap,other57720.__extmap)))))))))));
}));

(datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Not.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57718){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57727 = k57718;
var G__57727__$1 = (((G__57727 instanceof cljs.core.Keyword))?G__57727.fqn:null);
switch (G__57727__$1) {
case "source":
case "vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57718);

}
}));

(datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57717){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57728 = cljs.core.keyword_identical_QMARK_;
var expr__57729 = k__5349__auto__;
if(cljs.core.truth_((pred__57728.cljs$core$IFn$_invoke$arity$2 ? pred__57728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__57729) : pred__57728.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__57729)))){
return (new datascript.parser.Not(G__57717,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57728.cljs$core$IFn$_invoke$arity$2 ? pred__57728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__57729) : pred__57728.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__57729)))){
return (new datascript.parser.Not(self__.source,G__57717,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57728.cljs$core$IFn$_invoke$arity$2 ? pred__57728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__57729) : pred__57728.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__57729)))){
return (new datascript.parser.Not(self__.source,self__.vars,G__57717,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57717),null));
}
}
}
}));

(datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57717){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__57717,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57714){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Not(datascript.parser.postwalk(self__.source,f57714),datascript.parser.postwalk(self__.vars,f57714),datascript.parser.postwalk(self__.clauses,f57714),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57715,acc57716){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57715,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57715,self__.vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57715,self__.source,acc57716)));
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57716){
var self__ = this;
var ___55567__auto____$1 = this;
var G__57735 = (function (){var G__57738 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57716,self__.source) : datascript.parser.collect_vars_acc.call(null,acc57716,self__.source));
var G__57739 = self__.vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57738,G__57739) : datascript.parser.collect_vars_acc.call(null,G__57738,G__57739));
})();
var G__57736 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57735,G__57736) : datascript.parser.collect_vars_acc.call(null,G__57735,G__57736));
}));

(datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.Not.cljs$lang$type = true);

(datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Not",null,(1),null));
}));

(datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Not");
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
datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__57721){
var extmap__5382__auto__ = (function (){var G__57751 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57721,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__57721)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57751);
} else {
return G__57751;
}
})();
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__57721),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__57721),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__57721),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57764,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57768 = k57764;
var G__57768__$1 = (((G__57768 instanceof cljs.core.Keyword))?G__57768.fqn:null);
switch (G__57768__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57764,else__5343__auto__);

}
}));

(datascript.parser.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57769){
var vec__57770 = p__57769;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57770,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57770,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Or{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57763){
var self__ = this;
var G__57763__$1 = this;
return (new cljs.core.RecordIter((0),G__57763__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57765,other57766){
var self__ = this;
var this57765__$1 = this;
return (((!((other57766 == null)))) && ((((this57765__$1.constructor === other57766.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57765__$1.source,other57766.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57765__$1.rule_vars,other57766.rule_vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57765__$1.clauses,other57766.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57765__$1.__extmap,other57766.__extmap)))))))))));
}));

(datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Or.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57764){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57773 = k57764;
var G__57773__$1 = (((G__57773 instanceof cljs.core.Keyword))?G__57773.fqn:null);
switch (G__57773__$1) {
case "source":
case "rule-vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57764);

}
}));

(datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57763){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57775 = cljs.core.keyword_identical_QMARK_;
var expr__57776 = k__5349__auto__;
if(cljs.core.truth_((pred__57775.cljs$core$IFn$_invoke$arity$2 ? pred__57775.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__57776) : pred__57775.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__57776)))){
return (new datascript.parser.Or(G__57763,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57775.cljs$core$IFn$_invoke$arity$2 ? pred__57775.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__57776) : pred__57775.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__57776)))){
return (new datascript.parser.Or(self__.source,G__57763,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57775.cljs$core$IFn$_invoke$arity$2 ? pred__57775.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__57776) : pred__57775.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__57776)))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__57763,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57763),null));
}
}
}
}));

(datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57763){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__57763,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57760){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Or(datascript.parser.postwalk(self__.source,f57760),datascript.parser.postwalk(self__.rule_vars,f57760),datascript.parser.postwalk(self__.clauses,f57760),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57761,acc57762){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57761,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57761,self__.rule_vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57761,self__.source,acc57762)));
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57762){
var self__ = this;
var ___55567__auto____$1 = this;
var G__57785 = (function (){var G__57787 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57762,self__.source) : datascript.parser.collect_vars_acc.call(null,acc57762,self__.source));
var G__57788 = self__.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57787,G__57788) : datascript.parser.collect_vars_acc.call(null,G__57787,G__57788));
})();
var G__57786 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57785,G__57786) : datascript.parser.collect_vars_acc.call(null,G__57785,G__57786));
}));

(datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.Or.cljs$lang$type = true);

(datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Or",null,(1),null));
}));

(datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Or");
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
datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__57767){
var extmap__5382__auto__ = (function (){var G__57789 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57767,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__57767)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57789);
} else {
return G__57789;
}
})();
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__57767),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__57767),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__57767),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57794,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57798 = k57794;
var G__57798__$1 = (((G__57798 instanceof cljs.core.Keyword))?G__57798.fqn:null);
switch (G__57798__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57794,else__5343__auto__);

}
}));

(datascript.parser.And.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57799){
var vec__57800 = p__57799;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57800,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57800,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.And{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57793){
var self__ = this;
var G__57793__$1 = this;
return (new cljs.core.RecordIter((0),G__57793__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57795,other57796){
var self__ = this;
var this57795__$1 = this;
return (((!((other57796 == null)))) && ((((this57795__$1.constructor === other57796.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57795__$1.clauses,other57796.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57795__$1.__extmap,other57796.__extmap)))))));
}));

(datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.And.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57794){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57803 = k57794;
var G__57803__$1 = (((G__57803 instanceof cljs.core.Keyword))?G__57803.fqn:null);
switch (G__57803__$1) {
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57794);

}
}));

(datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57793){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57804 = cljs.core.keyword_identical_QMARK_;
var expr__57805 = k__5349__auto__;
if(cljs.core.truth_((pred__57804.cljs$core$IFn$_invoke$arity$2 ? pred__57804.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__57805) : pred__57804.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__57805)))){
return (new datascript.parser.And(G__57793,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57793),null));
}
}));

(datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57793){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__57793,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57790){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.And(datascript.parser.postwalk(self__.clauses,f57790),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57791,acc57792){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57791,self__.clauses,acc57792);
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57792){
var self__ = this;
var ___55567__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc57792,self__.clauses) : datascript.parser.collect_vars_acc.call(null,acc57792,self__.clauses));
}));

(datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.And.cljs$lang$type = true);

(datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/And",null,(1),null));
}));

(datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/And");
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
datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__57797){
var extmap__5382__auto__ = (function (){var G__57807 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57797,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
if(cljs.core.record_QMARK_(G__57797)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57807);
} else {
return G__57807;
}
})();
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__57797),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__5043__auto__ = datascript.parser.parse_placeholder(form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
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
var vec__57810 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57810,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57810,(1),null);
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
var vec__57816 = form;
var seq__57817 = cljs.core.seq(vec__57816);
var first__57818 = cljs.core.first(seq__57817);
var seq__57817__$1 = cljs.core.next(seq__57817);
var fn = first__57818;
var args = seq__57817__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__5043__auto__ = datascript.parser.parse_plain_symbol(fn);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return datascript.parser.parse_variable(fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = fn_STAR_;
if(cljs.core.truth_(and__5041__auto__)){
return args_STAR_;
} else {
return and__5041__auto__;
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
var vec__57819 = temp__5720__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57819,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57819,(1),null);
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
var vec__57822 = form;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57822,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57822,(1),null);
var temp__5720__auto__ = datascript.parser.parse_call(call);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__57825 = temp__5720__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57825,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57825,(1),null);
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
var vec__57830 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57830,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57830,(1),null);
var vec__57833 = next_form;
var seq__57834 = cljs.core.seq(vec__57833);
var first__57835 = cljs.core.first(seq__57834);
var seq__57834__$1 = cljs.core.next(seq__57834);
var name = first__57835;
var args = seq__57834__$1;
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
var G__57836 = acc;
var G__57837 = form.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__57836,G__57837) : datascript.parser.collect_vars_acc.call(null,G__57836,G__57837));
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
var vec__57839 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57839,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57839,(1),null);
var vec__57842 = next_form;
var seq__57843 = cljs.core.seq(vec__57842);
var first__57844 = cljs.core.first(seq__57843);
var seq__57843__$1 = cljs.core.next(seq__57843);
var sym = first__57844;
var clauses = seq__57843__$1;
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
var vec__57845 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57845,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57845,(1),null);
var vec__57848 = next_form;
var seq__57849 = cljs.core.seq(vec__57848);
var first__57850 = cljs.core.first(seq__57849);
var seq__57849__$1 = cljs.core.next(seq__57849);
var sym = first__57850;
var first__57850__$1 = cljs.core.first(seq__57849__$1);
var seq__57849__$2 = cljs.core.next(seq__57849__$1);
var vars = first__57850__$1;
var clauses = seq__57849__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,vars);
var clauses_STAR_ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_((function (){var and__5041__auto__ = vars_STAR_;
if(cljs.core.truth_(and__5041__auto__)){
return clauses_STAR_;
} else {
return and__5041__auto__;
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
var map__57851 = clause;
var map__57851__$1 = cljs.core.__destructure_map(map__57851);
var map__57852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57851__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__57852__$1 = cljs.core.__destructure_map(map__57852);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57852__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57852__$1,new cljs.core.Keyword(null,"free","free",801364328));
datascript.parser.validate_join_vars(required,free,form);

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first(form))))){
var clauses_STAR_ = (function (){var G__57855 = cljs.core.next(form);
return (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(G__57855) : datascript.parser.parse_clauses.call(null,G__57855));
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
var vec__57856 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57856,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57856,(1),null);
var vec__57860 = next_form;
var seq__57861 = cljs.core.seq(vec__57860);
var first__57862 = cljs.core.first(seq__57861);
var seq__57861__$1 = cljs.core.next(seq__57861);
var sym = first__57862;
var clauses = seq__57861__$1;
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
var vec__57863 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57863,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57863,(1),null);
var vec__57866 = next_form;
var seq__57867 = cljs.core.seq(vec__57866);
var first__57868 = cljs.core.first(seq__57867);
var seq__57867__$1 = cljs.core.next(seq__57867);
var sym = first__57868;
var first__57868__$1 = cljs.core.first(seq__57867__$1);
var seq__57867__$2 = cljs.core.next(seq__57867__$1);
var vars = first__57868__$1;
var clauses = seq__57867__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__5041__auto__ = vars_STAR_;
if(cljs.core.truth_(and__5041__auto__)){
return clauses_STAR_;
} else {
return and__5041__auto__;
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
var or__5043__auto__ = datascript.parser.parse_not(form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.parser.parse_not_join(form);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = datascript.parser.parse_or(form);
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
var or__5043__auto____$3 = datascript.parser.parse_or_join(form);
if(cljs.core.truth_(or__5043__auto____$3)){
return or__5043__auto____$3;
} else {
var or__5043__auto____$4 = datascript.parser.parse_pred(form);
if(cljs.core.truth_(or__5043__auto____$4)){
return or__5043__auto____$4;
} else {
var or__5043__auto____$5 = datascript.parser.parse_fn(form);
if(cljs.core.truth_(or__5043__auto____$5)){
return or__5043__auto____$5;
} else {
var or__5043__auto____$6 = datascript.parser.parse_rule_expr(form);
if(cljs.core.truth_(or__5043__auto____$6)){
return or__5043__auto____$6;
} else {
var or__5043__auto____$7 = datascript.parser.parse_pattern(form);
if(cljs.core.truth_(or__5043__auto____$7)){
return or__5043__auto____$7;
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
var or__5043__auto__ = datascript.parser.parse_clauses(form);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57874,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57878 = k57874;
var G__57878__$1 = (((G__57878 instanceof cljs.core.Keyword))?G__57878.fqn:null);
switch (G__57878__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57874,else__5343__auto__);

}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57883){
var vec__57884 = p__57883;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57884,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57884,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57873){
var self__ = this;
var G__57873__$1 = this;
return (new cljs.core.RecordIter((0),G__57873__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57875,other57876){
var self__ = this;
var this57875__$1 = this;
return (((!((other57876 == null)))) && ((((this57875__$1.constructor === other57876.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57875__$1.vars,other57876.vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57875__$1.clauses,other57876.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57875__$1.__extmap,other57876.__extmap)))))))));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57874){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57892 = k57874;
var G__57892__$1 = (((G__57892 instanceof cljs.core.Keyword))?G__57892.fqn:null);
switch (G__57892__$1) {
case "vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57874);

}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57873){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57899 = cljs.core.keyword_identical_QMARK_;
var expr__57900 = k__5349__auto__;
if(cljs.core.truth_((pred__57899.cljs$core$IFn$_invoke$arity$2 ? pred__57899.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__57900) : pred__57899.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__57900)))){
return (new datascript.parser.RuleBranch(G__57873,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57899.cljs$core$IFn$_invoke$arity$2 ? pred__57899.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__57900) : pred__57899.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__57900)))){
return (new datascript.parser.RuleBranch(self__.vars,G__57873,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57873),null));
}
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57873){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__57873,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57870){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk(self__.vars,f57870),datascript.parser.postwalk(self__.clauses,f57870),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57871,acc57872){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57871,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57871,self__.vars,acc57872));
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57872){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc57872,self__.vars),self__.clauses);
}));

(datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.RuleBranch.cljs$lang$type = true);

(datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleBranch",null,(1),null));
}));

(datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/RuleBranch");
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
datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__57877){
var extmap__5382__auto__ = (function (){var G__57903 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57877,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__57877)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57903);
} else {
return G__57903;
}
})();
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__57877),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__57877),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57908,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57914 = k57908;
var G__57914__$1 = (((G__57914 instanceof cljs.core.Keyword))?G__57914.fqn:null);
switch (G__57914__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57908,else__5343__auto__);

}
}));

(datascript.parser.Rule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57915){
var vec__57916 = p__57915;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57916,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57916,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Rule{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57907){
var self__ = this;
var G__57907__$1 = this;
return (new cljs.core.RecordIter((0),G__57907__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57909,other57910){
var self__ = this;
var this57909__$1 = this;
return (((!((other57910 == null)))) && ((((this57909__$1.constructor === other57910.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57909__$1.name,other57910.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57909__$1.branches,other57910.branches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57909__$1.__extmap,other57910.__extmap)))))))));
}));

(datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Rule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57908){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57921 = k57908;
var G__57921__$1 = (((G__57921 instanceof cljs.core.Keyword))?G__57921.fqn:null);
switch (G__57921__$1) {
case "name":
case "branches":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57908);

}
}));

(datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57907){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57925 = cljs.core.keyword_identical_QMARK_;
var expr__57926 = k__5349__auto__;
if(cljs.core.truth_((pred__57925.cljs$core$IFn$_invoke$arity$2 ? pred__57925.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__57926) : pred__57925.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__57926)))){
return (new datascript.parser.Rule(G__57907,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57925.cljs$core$IFn$_invoke$arity$2 ? pred__57925.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__57926) : pred__57925.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__57926)))){
return (new datascript.parser.Rule(self__.name,G__57907,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57907),null));
}
}
}));

(datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches,null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57907){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__57907,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57904){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk(self__.name,f57904),datascript.parser.postwalk(self__.branches,f57904),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57905,acc57906){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57905,self__.branches,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57905,self__.name,acc57906));
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57906){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc57906,self__.name),self__.branches);
}));

(datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
}));

(datascript.parser.Rule.cljs$lang$type = true);

(datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Rule",null,(1),null));
}));

(datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Rule");
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
datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__57911){
var extmap__5382__auto__ = (function (){var G__57944 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57911,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"branches","branches",-1240337268)], 0));
if(cljs.core.record_QMARK_(G__57911)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57944);
} else {
return G__57944;
}
})();
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__57911),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__57911),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__57945 = form;
var seq__57946 = cljs.core.seq(vec__57945);
var first__57947 = cljs.core.first(seq__57946);
var seq__57946__$1 = cljs.core.next(seq__57946);
var head = first__57947;
var clauses = seq__57946__$1;
if(cljs.core.sequential_QMARK_(head)){
var vec__57948 = head;
var seq__57949 = cljs.core.seq(vec__57948);
var first__57950 = cljs.core.first(seq__57949);
var seq__57949__$1 = cljs.core.next(seq__57949);
var name = first__57950;
var vars = seq__57949__$1;
var name_STAR_ = (function (){var or__5043__auto__ = datascript.parser.parse_plain_symbol(name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule name, expected plain-symbol",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = (function (){var or__5043__auto__ = cljs.core.not_empty(datascript.parser.parse_clauses(clauses));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var seq__57951 = cljs.core.seq(cljs.core.next(branches));
var chunk__57953 = null;
var count__57954 = (0);
var i__57955 = (0);
while(true){
if((i__57955 < count__57954)){
var b = chunk__57953.cljs$core$IIndexed$_nth$arity$2(null,i__57955);
var vars_58387 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_58387))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Arity mismatch for rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name)], 0)),"': ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))," vs. ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_58387)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__58388 = seq__57951;
var G__58389 = chunk__57953;
var G__58390 = count__57954;
var G__58391 = (i__57955 + (1));
seq__57951 = G__58388;
chunk__57953 = G__58389;
count__57954 = G__58390;
i__57955 = G__58391;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__57951);
if(temp__5720__auto__){
var seq__57951__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57951__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__57951__$1);
var G__58392 = cljs.core.chunk_rest(seq__57951__$1);
var G__58393 = c__5565__auto__;
var G__58394 = cljs.core.count(c__5565__auto__);
var G__58395 = (0);
seq__57951 = G__58392;
chunk__57953 = G__58393;
count__57954 = G__58394;
i__57955 = G__58395;
continue;
} else {
var b = cljs.core.first(seq__57951__$1);
var vars_58396 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_58396))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Arity mismatch for rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name)], 0)),"': ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))," vs. ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_58396)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__58397 = cljs.core.next(seq__57951__$1);
var G__58398 = null;
var G__58399 = (0);
var G__58400 = (0);
seq__57951 = G__58397;
chunk__57953 = G__58398;
count__57954 = G__58399;
i__57955 = G__58400;
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
return cljs.core.vec((function (){var iter__5520__auto__ = (function datascript$parser$parse_rules_$_iter__57958(s__57959){
return (new cljs.core.LazySeq(null,(function (){
var s__57959__$1 = s__57959;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__57959__$1);
if(temp__5720__auto__){
var s__57959__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57959__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__57959__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__57961 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__57960 = (0);
while(true){
if((i__57960 < size__5519__auto__)){
var vec__57962 = cljs.core._nth(c__5518__auto__,i__57960);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57962,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57962,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__57960,vec__57962,name,branches,c__5518__auto__,size__5519__auto__,b__57961,s__57959__$2,temp__5720__auto__){
return (function (p1__57957_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__57957_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__57957_SHARP_),null,null,null));
});})(i__57960,vec__57962,name,branches,c__5518__auto__,size__5519__auto__,b__57961,s__57959__$2,temp__5720__auto__))
,branches);
cljs.core.chunk_append(b__57961,(function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__58401 = (i__57960 + (1));
i__57960 = G__58401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57961),datascript$parser$parse_rules_$_iter__57958(cljs.core.chunk_rest(s__57959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57961),null);
}
} else {
var vec__57965 = cljs.core.first(s__57959__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57965,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57965,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__57965,name,branches,s__57959__$2,temp__5720__auto__){
return (function (p1__57957_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__57957_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__57957_SHARP_),null,null,null));
});})(vec__57965,name,branches,s__57959__$2,temp__5720__auto__))
,branches);
return cljs.core.cons((function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__57958(cljs.core.rest(s__57959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq(datascript.parser.parse_rule,form)));
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
(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k57972,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__57976 = k57972;
var G__57976__$1 = (((G__57976 instanceof cljs.core.Keyword))?G__57976.fqn:null);
switch (G__57976__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k57972,else__5343__auto__);

}
}));

(datascript.parser.Query.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__57977){
var vec__57978 = p__57977;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57978,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57978,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#datascript.parser.Query{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),self__.qreturn_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57971){
var self__ = this;
var G__57971__$1 = this;
return (new cljs.core.RecordIter((0),G__57971__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this57973,other57974){
var self__ = this;
var this57973__$1 = this;
return (((!((other57974 == null)))) && ((((this57973__$1.constructor === other57974.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57973__$1.qfind,other57974.qfind)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57973__$1.qwith,other57974.qwith)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57973__$1.qreturn_map,other57974.qreturn_map)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57973__$1.qin,other57974.qin)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57973__$1.qwhere,other57974.qwhere)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this57973__$1.__extmap,other57974.__extmap)))))))))))))));
}));

(datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),null,new cljs.core.Keyword(null,"qin","qin",1372651151),null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),null,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(datascript.parser.Query.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k57972){
var self__ = this;
var this__5347__auto____$1 = this;
var G__57981 = k57972;
var G__57981__$1 = (((G__57981 instanceof cljs.core.Keyword))?G__57981.fqn:null);
switch (G__57981__$1) {
case "qfind":
case "qwith":
case "qreturn-map":
case "qin":
case "qwhere":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k57972);

}
}));

(datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__57971){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__57982 = cljs.core.keyword_identical_QMARK_;
var expr__57983 = k__5349__auto__;
if(cljs.core.truth_((pred__57982.cljs$core$IFn$_invoke$arity$2 ? pred__57982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__57983) : pred__57982.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__57983)))){
return (new datascript.parser.Query(G__57971,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57982.cljs$core$IFn$_invoke$arity$2 ? pred__57982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__57983) : pred__57982.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__57983)))){
return (new datascript.parser.Query(self__.qfind,G__57971,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57982.cljs$core$IFn$_invoke$arity$2 ? pred__57982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),expr__57983) : pred__57982.call(null,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),expr__57983)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,G__57971,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57982.cljs$core$IFn$_invoke$arity$2 ? pred__57982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qin","qin",1372651151),expr__57983) : pred__57982.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151),expr__57983)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,G__57971,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__57982.cljs$core$IFn$_invoke$arity$2 ? pred__57982.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__57983) : pred__57982.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__57983)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,G__57971,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__57971),null));
}
}
}
}
}
}));

(datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),self__.qreturn_map,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere,null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__57971){
var self__ = this;
var this__5339__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,G__57971,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__55564__auto__,f57968){
var self__ = this;
var this__55564__auto____$1 = this;
var new__55565__auto__ = (new datascript.parser.Query(datascript.parser.postwalk(self__.qfind,f57968),datascript.parser.postwalk(self__.qwith,f57968),datascript.parser.postwalk(self__.qreturn_map,f57968),datascript.parser.postwalk(self__.qin,f57968),datascript.parser.postwalk(self__.qwhere,f57968),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__55564__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__55566__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__55565__auto__,meta__55566__auto__);
} else {
return new__55565__auto__;
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___55567__auto__,pred57969,acc57970){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57969,self__.qwhere,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57969,self__.qin,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57969,self__.qreturn_map,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57969,self__.qwith,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred57969,self__.qfind,acc57970)))));
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___55567__auto__,acc57970){
var self__ = this;
var ___55567__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc57970,self__.qfind),self__.qwith),self__.qreturn_map),self__.qin),self__.qwhere);
}));

(datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qfind","qfind",-1125102797,null),new cljs.core.Symbol(null,"qwith","qwith",1594722135,null),new cljs.core.Symbol(null,"qreturn-map","qreturn-map",-813219775,null),new cljs.core.Symbol(null,"qin","qin",-1281784618,null),new cljs.core.Symbol(null,"qwhere","qwhere",-4535851,null)], null);
}));

(datascript.parser.Query.cljs$lang$type = true);

(datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"datascript.parser/Query",null,(1),null));
}));

(datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"datascript.parser/Query");
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
datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__57975){
var extmap__5382__auto__ = (function (){var G__57985 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57975,new cljs.core.Keyword(null,"qfind","qfind",1529332972),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], 0));
if(cljs.core.record_QMARK_(G__57975)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__57985);
} else {
return G__57985;
}
})();
return (new datascript.parser.Query(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(G__57975),new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(G__57975),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(G__57975),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(G__57975),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(G__57975),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var G__58405 = parsed;
var G__58406 = q;
var G__58407 = cljs.core.next(qs);
parsed = G__58405;
key = G__58406;
qs = G__58407;
continue;
} else {
var G__58408 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__58409 = key;
var G__58410 = cljs.core.next(qs);
parsed = G__58408;
key = G__58409;
qs = G__58410;
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
var find_vars_58411 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_58412 = cljs.core.set(new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_58413 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_58414 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_58415 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(find_vars_58411,with_vars_58412),clojure.set.union.cljs$core$IFn$_invoke$arity$2(where_vars_58414,in_vars_58413));
var shared_58416 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(find_vars_58411,with_vars_58412);
if(cljs.core.empty_QMARK_(unknown_58415)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Query for unknown vars: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_58415)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_58415,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_(shared_58416)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":find and :with should not use same variables: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_58416)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_58416,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var temp__5724__auto___58418 = new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q);
if((temp__5724__auto___58418 == null)){
} else {
var return_map_58419 = temp__5724__auto___58418;
if((new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindScalar)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(return_map_58419)], 0))," does not work with single-scalar :find"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if((new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindColl)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(return_map_58419)], 0))," does not work with collection :find"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}
}

var temp__5724__auto___58420 = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q));
if((temp__5724__auto___58420 == null)){
} else {
var return_symbols_58421 = temp__5724__auto___58420;
var find_elements_58422 = datascript.parser.find_elements(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(return_symbols_58421),cljs.core.count(find_elements_58422))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Count of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q))], 0))," must match count of :find"].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"return-map","return-map",1620104901),cljs.core.cons(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q)),return_symbols_58421),new cljs.core.Keyword(null,"find","find",496279456),find_elements_58422,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}

if(((1) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(form_map),new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(form_map),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(form_map)], null))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Only one of :keys/:syms/:strs must be present",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

var in_vars_58424 = datascript.parser.collect_vars(new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_58425 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__57986_SHARP_){
return (p1__57986_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_58426 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__57987_SHARP_){
return (p1__57987_SHARP_ instanceof datascript.parser.RulesVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__5041__auto__ = datascript.parser.distinct_QMARK_(in_vars_58424);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = datascript.parser.distinct_QMARK_(in_sources_58425);
if(cljs.core.truth_(and__5041__auto____$1)){
return datascript.parser.distinct_QMARK_(in_rules_58426);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Vars used in :in should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_58427 = datascript.parser.collect_vars(new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_(with_vars_58427))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Vars used in :with should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_58428 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__57988_SHARP_){
return (p1__57988_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_58429 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__57989_SHARP_){
return (p1__57989_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_58430 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(where_sources_58429,in_sources_58428);
if(cljs.core.empty_QMARK_(unknown_58430)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Where uses unknown source vars: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_58430)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_58430,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__57990_SHARP_){
return (p1__57990_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__57991_SHARP_){
return (p1__57991_SHARP_ instanceof datascript.parser.RulesVar);
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
})(),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),(function (){var or__5043__auto__ = datascript.parser.parse_return_map(new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = datascript.parser.parse_return_map(new cljs.core.Keyword(null,"syms","syms",-1575891762),new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return datascript.parser.parse_return_map(new cljs.core.Keyword(null,"strs","strs",1175537277),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(qm));
}
}
})(),new cljs.core.Keyword(null,"qin","qin",1372651151),datascript.parser.parse_in((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return datascript.parser.default_in(qwhere);
}
})()),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),qwhere], null));
datascript.parser.validate_query(res,q,qm);

return res;
});

//# sourceMappingURL=datascript.parser.js.map
