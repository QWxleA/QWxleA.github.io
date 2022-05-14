goog.provide('frontend.util.page_property');
frontend.util.page_property.insert_property = (function frontend$util$page_property$insert_property(format,content,key,value){
if(((typeof content === 'string') && ((!(clojure.string.blank_QMARK_(cljs.core.name(key))))))){
var key__$1 = ((typeof key === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key):key);
var key_part = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic((function (){var G__62731 = format;
var G__62731__$1 = (((G__62731 instanceof cljs.core.Keyword))?G__62731.fqn:null);
switch (G__62731__$1) {
case "org":
return "#+%s: ";

break;
default:
return "%s:: ";

}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(key__$1)], 0));
var new_property_line = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_part),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
var lines = clojure.string.split_lines(content);
var key_exists_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var lines__$1 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
if(((clojure.string.starts_with_QMARK_(line,key_part)) && (cljs.core.not(cljs.core.deref(key_exists_QMARK_))))){
cljs.core.reset_BANG_(key_exists_QMARK_,true);

return new_property_line;
} else {
return line;
}
}),lines));
var lines__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null)))?null:lines__$1);
var lines__$3 = (cljs.core.truth_(cljs.core.deref(key_exists_QMARK_))?lines__$2:cljs.core.cons(new_property_line,lines__$2));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$3);
} else {
return null;
}
});
frontend.util.page_property.insert_properties = (function frontend$util$page_property$insert_properties(format,content,kvs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,p__62738){
var vec__62739 = p__62738;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62739,(1),null);
var k__$1 = ((typeof k === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(k)," ","-")):k);
var v__$1 = ((cljs.core.coll_QMARK_(v))?(function (){var G__62742 = cljs.core.seq(v);
var G__62742__$1 = (((G__62742 == null))?null:cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(G__62742));
if((G__62742__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",G__62742__$1);
}
})():v);
return frontend.util.page_property.insert_property(format,content__$1,k__$1,v__$1);
}),content,kvs);
});
/**
 * Sanitized page-name, unsanitized key / value
 */
frontend.util.page_property.add_property_BANG_ = (function frontend$util$page_property$add_property_BANG_(page_name,key,value){
var temp__5720__auto__ = (function (){var G__62743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),frontend.util.page_name_sanity_lc(page_name)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__62743) : frontend.db.pull.call(null,G__62743));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
var repo = frontend.state.get_current_repo();
var key__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key);
var pre_block = (function (){var G__62744 = repo;
var G__62745 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.get_pre_block.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_pre_block.cljs$core$IFn$_invoke$arity$2(G__62744,G__62745) : frontend.db.get_pre_block.call(null,G__62744,G__62745));
})();
var format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var page_id = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], null);
var org_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
var value__$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filters","filters",974726919),null], null), null),key__$1))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)):value);
if(cljs.core.truth_(pre_block)){
var properties_62809 = new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(pre_block);
var new_properties_62810 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties_62809,key__$1,value__$1);
var content_62811 = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(pre_block);
var new_content_62812 = frontend.util.page_property.insert_property(format,content_62811,key__$1,value__$1);
var block_62813 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(pre_block),new cljs.core.Keyword("block","properties","block/properties",708347145),new_properties_62810,new cljs.core.Keyword("block","content","block/content",-161885195),new_content_62812,new cljs.core.Keyword("block","page","block/page",822314108),page_id], null);
var tx_62814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page_id,new cljs.core.Keyword("block","properties","block/properties",708347145),new_properties_62810),block_62813], null);
(frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.transact_BANG_.cljs$core$IFn$_invoke$arity$1(tx_62814) : frontend.db.transact_BANG_.call(null,tx_62814));
} else {
var block_62816 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),frontend.db.new_block_id(),new cljs.core.Keyword("block","left","block/left",-443712566),page_id,new cljs.core.Keyword("block","parent","block/parent",-918309064),page_id,new cljs.core.Keyword("block","page","block/page",822314108),page_id,new cljs.core.Keyword("block","content","block/content",-161885195),((org_QMARK_)?["#+",clojure.string.upper_case(cljs.core.name(key__$1)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)].join(''):[cljs.core.name(key__$1),":: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1)].join('')),new cljs.core.Keyword("block","format","block/format",-1212045901),format,new cljs.core.Keyword("block","properties","block/properties",708347145),cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,value__$1]),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521),true], null);
var page_properties_tx_62817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page_id,new cljs.core.Keyword("block","properties","block/properties",708347145),cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,value__$1]))], null);
var transact_data__62460__auto___62821 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var opts__62461__auto___62822 = (cljs.core.truth_(transact_data__62460__auto___62821)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),page_properties_tx_62817], null),new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281),true):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604),page_properties_tx_62817], null));
if(cljs.core.truth_(transact_data__62460__auto___62821)){
frontend.modules.outliner.core.insert_blocks_BANG_(block_62816,page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));
} else {
var _STAR_transaction_data_STAR__orig_val__62750_62823 = frontend.modules.outliner.core._STAR_transaction_data_STAR_;
var _STAR_transaction_data_STAR__temp_val__62751_62824 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__temp_val__62751_62824);

try{frontend.modules.outliner.core.insert_blocks_BANG_(block_62816,page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));

var r__62462__auto___62826 = cljs.core.persistent_BANG_(frontend.modules.outliner.core._STAR_transaction_data_STAR_);
var tx__62463__auto___62827 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r__62462__auto___62826], 0));
var tx_meta__62464__auto___62828 = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),r__62462__auto___62826));
var all_tx__62465__auto___62829 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx__62463__auto___62827,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604).cljs$core$IFn$_invoke$arity$1(opts__62461__auto___62822));
var opts_SHARP___62466__auto___62830 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts__62461__auto___62822,new cljs.core.Keyword(null,"additional-tx","additional-tx",-343057604)),tx_meta__62464__auto___62828], 0));
if(cljs.core.seq(all_tx__62465__auto___62829)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nested-transaction?","nested-transaction?",-1949299281).cljs$core$IFn$_invoke$arity$1(opts__62461__auto___62822))){
} else {
var result__62467__auto___62831 = frontend.modules.outliner.datascript.transact_BANG_(all_tx__62465__auto___62829,opts_SHARP___62466__auto___62830);
new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),all_tx__62465__auto___62829,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta__62464__auto___62828,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),result__62467__auto___62831], null);
}
} else {
}
}finally {(frontend.modules.outliner.core._STAR_transaction_data_STAR_ = _STAR_transaction_data_STAR__orig_val__62750_62823);
}}
}

return frontend.modules.outliner.file.sync_to_file(page_id);
} else {
return null;
}
});

//# sourceMappingURL=frontend.util.page_property.js.map
