goog.provide('frontend.format.mldoc');
goog.scope(function(){
  frontend.format.mldoc.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$mldoc$index=shadow.js.require("module$node_modules$mldoc$index", {});
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.anchorLink !== 'undefined')){
} else {
frontend.format.mldoc.anchorLink = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"anchorLink");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.parseOPML !== 'undefined')){
} else {
frontend.format.mldoc.parseOPML = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseOPML");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.parseAndExportMarkdown !== 'undefined')){
} else {
frontend.format.mldoc.parseAndExportMarkdown = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseAndExportMarkdown");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.parseAndExportOPML !== 'undefined')){
} else {
frontend.format.mldoc.parseAndExportOPML = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseAndExportOPML");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.export$ !== 'undefined')){
} else {
frontend.format.mldoc.export$ = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"export");
}
frontend.format.mldoc.parse_opml = (function frontend$format$mldoc$parse_opml(content){
return (frontend.format.mldoc.parseOPML.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.parseOPML.cljs$core$IFn$_invoke$arity$1(content) : frontend.format.mldoc.parseOPML.call(null,content));
});
frontend.format.mldoc.parse_export_markdown = (function frontend$format$mldoc$parse_export_markdown(content,config,references){
var G__73354 = content;
var G__73355 = config;
var G__73356 = (function (){var or__4253__auto__ = references;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return logseq.graph_parser.mldoc.default_references;
}
})();
return (frontend.format.mldoc.parseAndExportMarkdown.cljs$core$IFn$_invoke$arity$3 ? frontend.format.mldoc.parseAndExportMarkdown.cljs$core$IFn$_invoke$arity$3(G__73354,G__73355,G__73356) : frontend.format.mldoc.parseAndExportMarkdown.call(null,G__73354,G__73355,G__73356));
});
frontend.format.mldoc.parse_export_opml = (function frontend$format$mldoc$parse_export_opml(content,config,title,references){
var G__73357 = content;
var G__73358 = config;
var G__73359 = title;
var G__73360 = (function (){var or__4253__auto__ = references;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return logseq.graph_parser.mldoc.default_references;
}
})();
return (frontend.format.mldoc.parseAndExportOPML.cljs$core$IFn$_invoke$arity$4 ? frontend.format.mldoc.parseAndExportOPML.cljs$core$IFn$_invoke$arity$4(G__73357,G__73358,G__73359,G__73360) : frontend.format.mldoc.parseAndExportOPML.call(null,G__73357,G__73358,G__73359,G__73360));
});
frontend.format.mldoc.block_with_title_QMARK_ = (function frontend$format$mldoc$block_with_title_QMARK_(type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Raw_Html",null,"Hiccup",null,"Paragraph",null,"Heading",null], null), null),type);
});
frontend.format.mldoc.opml__GT_edn = (function frontend$format$mldoc$opml__GT_edn(content){
try{if(clojure.string.blank_QMARK_(content)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vec__73362 = logseq.graph_parser.util.json__GT_clj(frontend.format.mldoc.parse_opml(content));
var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73362,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73362,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers,logseq.graph_parser.mldoc.collect_page_properties(blocks,logseq.graph_parser.mldoc.parse_property,frontend.state.get_config.cljs$core$IFn$_invoke$arity$0())], null);
}
}catch (e73361){if((e73361 instanceof Error)){
var e = e73361;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.format.mldoc",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edn","convert-failed","edn/convert-failed",-1289012926),e,new cljs.core.Keyword(null,"line","line",212345235),49], null)),null);

return cljs.core.PersistentVector.EMPTY;
} else {
throw e73361;

}
}});
/**
 * Wrapper around gp-mldoc/->edn which provides config state
 */
frontend.format.mldoc.__GT_edn = (function frontend$format$mldoc$__GT_edn(content,config){
return logseq.graph_parser.mldoc.__GT_edn(content,config,frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
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
frontend.format.mldoc.MldocMode = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.format.mldoc.MldocMode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k73366,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__73371 = k73366;
switch (G__73371) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73366,else__4505__auto__);

}
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__73372){
var vec__73373 = p__73372;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73373,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73373,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#frontend.format.mldoc.MldocMode{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__73365){
var self__ = this;
var G__73365__$1 = this;
return (new cljs.core.RecordIter((0),G__73365__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new frontend.format.mldoc.MldocMode(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1887694766 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this73367,other73368){
var self__ = this;
var this73367__$1 = this;
return (((!((other73368 == null)))) && ((((this73367__$1.constructor === other73368.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73367__$1.__extmap,other73368.__extmap)))));
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$toEdn$arity$3 = (function (_this,content,config){
var self__ = this;
var _this__$1 = this;
return frontend.format.mldoc.__GT_edn(content,config);
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$toHtml$arity$4 = (function (_this,content,config,references){
var self__ = this;
var _this__$1 = this;
return (frontend.format.mldoc.export$.cljs$core$IFn$_invoke$arity$4 ? frontend.format.mldoc.export$.cljs$core$IFn$_invoke$arity$4("html",content,config,references) : frontend.format.mldoc.export$.call(null,"html",content,config,references));
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$loaded_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return true;
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$lazyLoad$arity$2 = (function (_this,_ok_handler){
var self__ = this;
var _this__$1 = this;
return true;
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$exportMarkdown$arity$4 = (function (_this,content,config,references){
var self__ = this;
var _this__$1 = this;
return frontend.format.mldoc.parse_export_markdown(content,config,references);
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$exportOPML$arity$5 = (function (_this,content,config,title,references){
var self__ = this;
var _this__$1 = this;
return frontend.format.mldoc.parse_export_opml(content,config,title,references);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new frontend.format.mldoc.MldocMode(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k73366){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k73366);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__73365){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__73377 = cljs.core.keyword_identical_QMARK_;
var expr__73378 = k__4511__auto__;
return (new frontend.format.mldoc.MldocMode(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__73365),null));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__73365){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.format.mldoc.MldocMode(G__73365,self__.__extmap,self__.__hash));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(frontend.format.mldoc.MldocMode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.format.mldoc.MldocMode.cljs$lang$type = true);

(frontend.format.mldoc.MldocMode.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"frontend.format.mldoc/MldocMode",null,(1),null));
}));

(frontend.format.mldoc.MldocMode.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"frontend.format.mldoc/MldocMode");
}));

/**
 * Positional factory function for frontend.format.mldoc/MldocMode.
 */
frontend.format.mldoc.__GT_MldocMode = (function frontend$format$mldoc$__GT_MldocMode(){
return (new frontend.format.mldoc.MldocMode(null,null,null));
});

/**
 * Factory function for frontend.format.mldoc/MldocMode, taking a map of keywords to field values.
 */
frontend.format.mldoc.map__GT_MldocMode = (function frontend$format$mldoc$map__GT_MldocMode(G__73369){
var extmap__4542__auto__ = (function (){var G__73383 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__73369);
if(cljs.core.record_QMARK_(G__73369)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__73383);
} else {
return G__73383;
}
})();
return (new frontend.format.mldoc.MldocMode(null,cljs.core.not_empty(extmap__4542__auto__),null));
});

frontend.format.mldoc.plain__GT_text = (function frontend$format$mldoc$plain__GT_text(plains){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,plains));
});
frontend.format.mldoc.properties_QMARK_ = (function frontend$format$mldoc$properties_QMARK_(ast){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Property_Drawer",null,"Properties",null], null), null),cljs.core.ffirst(ast));
});
frontend.format.mldoc.typ_drawer_QMARK_ = (function frontend$format$mldoc$typ_drawer_QMARK_(ast,typ){
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Drawer",null], null), null),cljs.core.ffirst(ast))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,cljs.core.second(cljs.core.first(ast)))));
});

//# sourceMappingURL=frontend.format.mldoc.js.map
