goog.provide('frontend.external.roam');
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.all_refed_uids !== 'undefined')){
} else {
frontend.external.roam.all_refed_uids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.uid__GT_uuid !== 'undefined')){
} else {
frontend.external.roam.uid__GT_uuid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.external.roam.reset_state_BANG_ = (function frontend$external$roam$reset_state_BANG_(){
cljs.core.reset_BANG_(frontend.external.roam.all_refed_uids,cljs.core.PersistentHashSet.EMPTY);

return cljs.core.reset_BANG_(frontend.external.roam.uid__GT_uuid,cljs.core.PersistentArrayMap.EMPTY);
});
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.uid_pattern !== 'undefined')){
} else {
frontend.external.roam.uid_pattern = /\(\(([a-zA-Z0-9_\\-]{6,24})\)\)/;
}
if((typeof frontend !== 'undefined') && (typeof frontend.external !== 'undefined') && (typeof frontend.external.roam !== 'undefined') && (typeof frontend.external.roam.macro_pattern !== 'undefined')){
} else {
frontend.external.roam.macro_pattern = /\{\{([^{}]+)\}\}/;
}
frontend.external.roam.uid_transform = (function frontend$external$roam$uid_transform(text){
return clojure.string.replace(text,frontend.external.roam.uid_pattern,(function (p__75371){
var vec__75372 = p__75371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75372,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75372,(1),null);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.external.roam.uid__GT_uuid),uid,uid);
return ["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"))"].join('');
}));
});
frontend.external.roam.macro_transform = (function frontend$external$roam$macro_transform(text){
return clojure.string.replace(text,frontend.external.roam.macro_pattern,(function (p__75375){
var vec__75376 = p__75375;
var original = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75376,(0),null);
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75376,(1),null);
var vec__75379 = logseq.graph_parser.util.split_first(":",text__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75379,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75379,(1),null);
if(cljs.core.truth_(name)){
var name__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(name);
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{%s %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name__$1,arg], 0));
} else {
return original;
}
}));
});
frontend.external.roam.fenced_code_transform = (function frontend$external$roam$fenced_code_transform(text){
return clojure.string.replace(text,/```/,"\n```");
});
frontend.external.roam.load_all_refed_uids_BANG_ = (function frontend$external$roam$load_all_refed_uids_BANG_(data){
var full_text = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
clojure.walk.postwalk((function (f){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_(f);
if(and__4251__auto__){
return new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(f);
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(full_text,(function (v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(f))].join('');
}));
} else {
}

return f;
}),data);

var uids = cljs.core.set(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.re_seq(frontend.external.roam.uid_pattern,cljs.core.deref(full_text)))));
cljs.core.reset_BANG_(frontend.external.roam.all_refed_uids,uids);

var seq__75382 = cljs.core.seq(uids);
var chunk__75383 = null;
var count__75384 = (0);
var i__75385 = (0);
while(true){
if((i__75385 < count__75384)){
var uid = chunk__75383.cljs$core$IIndexed$_nth$arity$2(null,i__75385);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.external.roam.uid__GT_uuid,cljs.core.assoc,uid,medley.core.random_uuid());


var G__75414 = seq__75382;
var G__75415 = chunk__75383;
var G__75416 = count__75384;
var G__75417 = (i__75385 + (1));
seq__75382 = G__75414;
chunk__75383 = G__75415;
count__75384 = G__75416;
i__75385 = G__75417;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__75382);
if(temp__5720__auto__){
var seq__75382__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75382__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__75382__$1);
var G__75418 = cljs.core.chunk_rest(seq__75382__$1);
var G__75419 = c__4679__auto__;
var G__75420 = cljs.core.count(c__4679__auto__);
var G__75421 = (0);
seq__75382 = G__75418;
chunk__75383 = G__75419;
count__75384 = G__75420;
i__75385 = G__75421;
continue;
} else {
var uid = cljs.core.first(seq__75382__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.external.roam.uid__GT_uuid,cljs.core.assoc,uid,medley.core.random_uuid());


var G__75422 = cljs.core.next(seq__75382__$1);
var G__75423 = null;
var G__75424 = (0);
var G__75425 = (0);
seq__75382 = G__75422;
chunk__75383 = G__75423;
count__75384 = G__75424;
i__75385 = G__75425;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.external.roam.transform = (function frontend$external$roam$transform(text){
return frontend.external.roam.fenced_code_transform(frontend.external.roam.macro_transform(frontend.external.roam.uid_transform(clojure.string.replace(clojure.string.replace(text,"{{[[TODO]]}}","TODO"),"{{[[DONE]]}}","DONE"))));
});
frontend.external.roam.child__GT_text = (function frontend$external$roam$child__GT_text(p__75386,level){
var map__75387 = p__75386;
var map__75387__$1 = cljs.core.__destructure_map(map__75387);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75387__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75387__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75387__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.external.roam.uid__GT_uuid),uid);
if(cljs.core.truth_(and__4251__auto__)){
return uid;
} else {
return and__4251__auto__;
}
})())){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.external.roam.uid__GT_uuid,cljs.core.assoc,uid,medley.core.random_uuid());
}

var children_text = (function (){var G__75388 = children;
var G__75389 = (level + (1));
return (frontend.external.roam.children__GT_text.cljs$core$IFn$_invoke$arity$2 ? frontend.external.roam.children__GT_text.cljs$core$IFn$_invoke$arity$2(G__75388,G__75389) : frontend.external.roam.children__GT_text.call(null,G__75388,G__75389));
})();
var level_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,"\t"))),(((level === (0)))?"-":" -")].join('');
var properties = ((cljs.core.contains_QMARK_(cljs.core.deref(frontend.external.roam.all_refed_uids),uid))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("id:: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.external.roam.uid__GT_uuid),uid))], 0))),"\n"].join(''):null);
if(cljs.core.truth_(string)){
return [level_pattern," ",clojure.string.triml(string),"\n",properties,cljs.core.str.cljs$core$IFn$_invoke$arity$1(children_text)].join('');
} else {
return children_text;
}
});
frontend.external.roam.children__GT_text = (function frontend$external$roam$children__GT_text(children,level){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75390_SHARP_){
return frontend.external.roam.child__GT_text(p1__75390_SHARP_,level);
}),children)));
});
frontend.external.roam.json__GT_edn = (function frontend$external$roam$json__GT_edn(raw_string){
return cljs_bean.core.__GT_clj(JSON.parse(raw_string));
});
frontend.external.roam.__GT_file = (function frontend$external$roam$__GT_file(page_data){
var map__75391 = page_data;
var map__75391__$1 = cljs.core.__destructure_map(map__75391);
var create_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75391__$1,new cljs.core.Keyword(null,"create-time","create-time",875410581));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75391__$1,new cljs.core.Keyword(null,"title","title",636505583));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75391__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var edit_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75391__$1,new cljs.core.Keyword(null,"edit-time","edit-time",-1528280702));
var initial_level = (1);
var text = ((cljs.core.seq(children))?(function (){var temp__5720__auto__ = frontend.external.roam.children__GT_text(children,(initial_level - (1)));
if(cljs.core.truth_(temp__5720__auto__)){
var text = temp__5720__auto__;
var journal_QMARK_ = frontend.date.valid_journal_title_QMARK_(title);
var front_matter = (cljs.core.truth_(journal_QMARK_)?"":frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("---\ntitle: %s\n---\n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title], 0)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(front_matter),frontend.external.roam.transform(text)].join('');
} else {
return null;
}
})():null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (!(clojure.string.blank_QMARK_(title)));
if(and__4251__auto__){
return text;
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"created-at","created-at",-89248644),create_time,new cljs.core.Keyword(null,"last-modified-at","last-modified-at",478765450),edit_time,new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
} else {
return null;
}
});
frontend.external.roam.__GT_files = (function frontend$external$roam$__GT_files(edn_data){
frontend.external.roam.load_all_refed_uids_BANG_(edn_data);

var files = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.external.roam.__GT_file,edn_data);
var files__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__75392_SHARP_){
return (new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__75392_SHARP_) == null);
}),files);
var files__$2 = cljs.core.group_by((function (f){
return clojure.string.lower_case(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(f));
}),files__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__75393){
var vec__75394 = p__75393;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75394,(0),null);
var vec__75397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75394,(1),null);
var seq__75398 = cljs.core.seq(vec__75397);
var first__75399 = cljs.core.first(seq__75398);
var seq__75398__$1 = cljs.core.next(seq__75398);
var fst = first__75399;
var others = seq__75398__$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fst,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.cons(fst,others)))));
}),files__$2);
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
 * @implements {frontend.external.protocol.External}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.external.roam.Roam = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.external.roam.Roam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(frontend.external.roam.Roam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k75401,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__75405 = k75401;
switch (G__75405) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k75401,else__4505__auto__);

}
}));

(frontend.external.roam.Roam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__75406){
var vec__75407 = p__75406;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75407,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75407,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.external.roam.Roam.prototype.frontend$external$protocol$External$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.external.roam.Roam.prototype.frontend$external$protocol$External$toMarkdownFiles$arity$3 = (function (_this,content,_config){
var self__ = this;
var _this__$1 = this;
return frontend.external.roam.__GT_files(frontend.external.roam.json__GT_edn(content));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#frontend.external.roam.Roam{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75400){
var self__ = this;
var G__75400__$1 = this;
return (new cljs.core.RecordIter((0),G__75400__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(frontend.external.roam.Roam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new frontend.external.roam.Roam(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.external.roam.Roam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1836119154 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(frontend.external.roam.Roam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this75402,other75403){
var self__ = this;
var this75402__$1 = this;
return (((!((other75403 == null)))) && ((((this75402__$1.constructor === other75403.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75402__$1.__extmap,other75403.__extmap)))));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new frontend.external.roam.Roam(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(frontend.external.roam.Roam.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k75401){
var self__ = this;
var this__4509__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k75401);
}));

(frontend.external.roam.Roam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__75400){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__75410 = cljs.core.keyword_identical_QMARK_;
var expr__75411 = k__4511__auto__;
return (new frontend.external.roam.Roam(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__75400),null));
}));

(frontend.external.roam.Roam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.external.roam.Roam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__75400){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.external.roam.Roam(G__75400,self__.__extmap,self__.__hash));
}));

(frontend.external.roam.Roam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(frontend.external.roam.Roam.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.external.roam.Roam.cljs$lang$type = true);

(frontend.external.roam.Roam.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"frontend.external.roam/Roam",null,(1),null));
}));

(frontend.external.roam.Roam.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"frontend.external.roam/Roam");
}));

/**
 * Positional factory function for frontend.external.roam/Roam.
 */
frontend.external.roam.__GT_Roam = (function frontend$external$roam$__GT_Roam(){
return (new frontend.external.roam.Roam(null,null,null));
});

/**
 * Factory function for frontend.external.roam/Roam, taking a map of keywords to field values.
 */
frontend.external.roam.map__GT_Roam = (function frontend$external$roam$map__GT_Roam(G__75404){
var extmap__4542__auto__ = (function (){var G__75413 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__75404);
if(cljs.core.record_QMARK_(G__75404)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__75413);
} else {
return G__75413;
}
})();
return (new frontend.external.roam.Roam(null,cljs.core.not_empty(extmap__4542__auto__),null));
});


//# sourceMappingURL=frontend.external.roam.js.map
