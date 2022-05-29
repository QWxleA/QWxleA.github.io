goog.provide('linked.set');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
linked.set.LinkedSet = (function (linked_map){
this.linked_map = linked_map;
this.cljs$lang$protocol_mask$partition0$ = 2313556239;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
(linked.set.LinkedSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return ["[",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,this$)),"]"].join('');
}));

(linked.set.LinkedSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
}));

(linked.set.LinkedSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return coll__$1.cljs$core$ILookup$_lookup$arity$3(null,v,null);
}));

(linked.set.LinkedSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.linked_map,v)){
return v;
} else {
return not_found;
}
}));

(linked.set.LinkedSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core._write(writer,["#linked/set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coll__$1))].join(''));
}));

(linked.set.LinkedSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.meta(self__.linked_map);
}));

(linked.set.LinkedSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new linked.set.LinkedSet(self__.linked_map));
}));

(linked.set.LinkedSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._count(self__.linked_map);
}));

(linked.set.LinkedSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__5720__auto__ = cljs.core.rseq(self__.linked_map);
if(temp__5720__auto__){
var s = temp__5720__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,s);
} else {
return null;
}
}));

(linked.set.LinkedSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,coll__$1));
}));

(linked.set.LinkedSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return ((cljs.core.set_QMARK_(other)) && ((((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_((function (p1__58990_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__58990_SHARP_);
}),other)))));
}));

(linked.set.LinkedSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(linked.set.empty_linked_set,cljs.core.meta);
}));

(linked.set.LinkedSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new linked.set.LinkedSet(cljs.core._dissoc(self__.linked_map,v)));
}));

(linked.set.LinkedSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__5720__auto__ = cljs.core.seq(self__.linked_map);
if(temp__5720__auto__){
var s = temp__5720__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,s);
} else {
return null;
}
}));

(linked.set.LinkedSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var self__ = this;
var coll__$1 = this;
return (new linked.set.LinkedSet(cljs.core.with_meta(self__.linked_map,meta)));
}));

(linked.set.LinkedSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new linked.set.LinkedSet(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.linked_map,o,null)));
}));

(linked.set.LinkedSet.prototype.call = (function (unused__11779__auto__){
var self__ = this;
var self__ = this;
var G__58997 = (arguments.length - (1));
switch (G__58997) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(linked.set.LinkedSet.prototype.apply = (function (self__,args58991){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args58991)));
}));

(linked.set.LinkedSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
}));

(linked.set.LinkedSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));

(linked.set.LinkedSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"linked-map","linked-map",501278211,null)], null);
}));

(linked.set.LinkedSet.cljs$lang$type = true);

(linked.set.LinkedSet.cljs$lang$ctorStr = "linked.set/LinkedSet");

(linked.set.LinkedSet.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"linked.set/LinkedSet");
}));

/**
 * Positional factory function for linked.set/LinkedSet.
 */
linked.set.__GT_LinkedSet = (function linked$set$__GT_LinkedSet(linked_map){
return (new linked.set.LinkedSet(linked_map));
});

linked.set.empty_linked_set = (new linked.set.LinkedSet(linked.map.empty_linked_map));
linked.set.__GT_linked_set = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,linked.set.empty_linked_set);
cljs.reader.register_tag_parser_BANG_(new cljs.core.Symbol("linked","set","linked/set",833210926,null),linked.set.__GT_linked_set);

//# sourceMappingURL=linked.set.js.map
