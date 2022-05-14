goog.provide('frontend.format.adoc');
frontend.format.adoc.loaded_QMARK_ = (function frontend$format$adoc$loaded_QMARK_(){
return window.Asciidoctor;
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
 * @implements {frontend.format.protocol.Format}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.format.adoc.AdocMode = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.format.adoc.AdocMode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k73395,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__73399 = k73395;
switch (G__73399) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73395,else__4505__auto__);

}
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__73400){
var vec__73401 = p__73400;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73401,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73401,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#frontend.format.adoc.AdocMode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__73394){
var self__ = this;
var G__73394__$1 = this;
return (new cljs.core.RecordIter((0),G__73394__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new frontend.format.adoc.AdocMode(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1258796506 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this73396,other73397){
var self__ = this;
var this73396__$1 = this;
return (((!((other73397 == null)))) && ((((this73396__$1.constructor === other73397.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73396__$1.__extmap,other73397.__extmap)))));
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$toEdn$arity$3 = (function (_this,_content,_config){
var self__ = this;
var _this__$1 = this;
return null;
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$toHtml$arity$4 = (function (_this,content,_config,_references){
var self__ = this;
var _this__$1 = this;
if(cljs.core.truth_(frontend.format.adoc.loaded_QMARK_())){
var config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"showTitle","showTitle",-420376594),false,new cljs.core.Keyword(null,"hardbreaks","hardbreaks",1615031829),true,new cljs.core.Keyword(null,"icons","icons",-297140977),"font"], null)], null);
return window.Asciidoctor().convert(content,cljs.core.clj__GT_js(config));
} else {
return null;
}
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$loaded_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return (!((frontend.format.adoc.loaded_QMARK_() == null)));
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$lazyLoad$arity$2 = (function (_this,ok_handler){
var self__ = this;
var _this__$1 = this;
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2("https://cdnjs.cloudflare.com/ajax/libs/asciidoctor.js/1.5.9/asciidoctor.min.js",ok_handler);
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$exportMarkdown$arity$4 = (function (_this,_content,_config,_references){
var self__ = this;
var _this__$1 = this;
throw "not support";
}));

(frontend.format.adoc.AdocMode.prototype.frontend$format$protocol$Format$exportOPML$arity$5 = (function (_this,_content,_config,_title,_references){
var self__ = this;
var _this__$1 = this;
throw "not support";
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new frontend.format.adoc.AdocMode(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k73395){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k73395);
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__73394){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__73404 = cljs.core.keyword_identical_QMARK_;
var expr__73405 = k__4511__auto__;
return (new frontend.format.adoc.AdocMode(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__73394),null));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__73394){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.format.adoc.AdocMode(G__73394,self__.__extmap,self__.__hash));
}));

(frontend.format.adoc.AdocMode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(frontend.format.adoc.AdocMode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.format.adoc.AdocMode.cljs$lang$type = true);

(frontend.format.adoc.AdocMode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"frontend.format.adoc/AdocMode",null,(1),null));
}));

(frontend.format.adoc.AdocMode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"frontend.format.adoc/AdocMode");
}));

/**
 * Positional factory function for frontend.format.adoc/AdocMode.
 */
frontend.format.adoc.__GT_AdocMode = (function frontend$format$adoc$__GT_AdocMode(){
return (new frontend.format.adoc.AdocMode(null,null,null));
});

/**
 * Factory function for frontend.format.adoc/AdocMode, taking a map of keywords to field values.
 */
frontend.format.adoc.map__GT_AdocMode = (function frontend$format$adoc$map__GT_AdocMode(G__73398){
var extmap__4542__auto__ = (function (){var G__73409 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__73398);
if(cljs.core.record_QMARK_(G__73398)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__73409);
} else {
return G__73409;
}
})();
return (new frontend.format.adoc.AdocMode(null,cljs.core.not_empty(extmap__4542__auto__),null));
});


//# sourceMappingURL=frontend.format.adoc.js.map
