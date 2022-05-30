goog.provide('frontend.idb');
goog.scope(function(){
  frontend.idb.goog$module$goog$object = goog.module.get('goog.object');
});
var module$frontend$idbkv=shadow.js.require("module$frontend$idbkv", {});
if((typeof frontend !== 'undefined') && (typeof frontend.idb !== 'undefined') && (typeof frontend.idb.store !== 'undefined')){
} else {
frontend.idb.store = (new module$frontend$idbkv.Store("localforage","keyvaluepairs",(2)));
}
frontend.idb.clear_idb_BANG_ = (function frontend$idb$clear_idb_BANG_(){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$idbkv.clear(frontend.idb.store),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.indexedDB.databases(),(function (dbs){
return promesa.protocols._promise((function (){var seq__42743 = cljs.core.seq(dbs);
var chunk__42744 = null;
var count__42745 = (0);
var i__42746 = (0);
while(true){
if((i__42746 < count__42745)){
var db = chunk__42744.cljs$core$IIndexed$_nth$arity$2(null,i__42746);
window.indexedDB.deleteDatabase(frontend.idb.goog$module$goog$object.get(db,"name"));


var G__42748 = seq__42743;
var G__42749 = chunk__42744;
var G__42750 = count__42745;
var G__42751 = (i__42746 + (1));
seq__42743 = G__42748;
chunk__42744 = G__42749;
count__42745 = G__42750;
i__42746 = G__42751;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42743);
if(temp__5720__auto__){
var seq__42743__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42743__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42743__$1);
var G__42752 = cljs.core.chunk_rest(seq__42743__$1);
var G__42753 = c__5565__auto__;
var G__42754 = cljs.core.count(c__5565__auto__);
var G__42755 = (0);
seq__42743 = G__42752;
chunk__42744 = G__42753;
count__42745 = G__42754;
i__42746 = G__42755;
continue;
} else {
var db = cljs.core.first(seq__42743__$1);
window.indexedDB.deleteDatabase(frontend.idb.goog$module$goog$object.get(db,"name"));


var G__42756 = cljs.core.next(seq__42743__$1);
var G__42757 = null;
var G__42758 = (0);
var G__42759 = (0);
seq__42743 = G__42756;
chunk__42744 = G__42757;
count__42745 = G__42758;
i__42746 = G__42759;
continue;
}
} else {
return null;
}
}
break;
}
})());
}));
}));
})),(function (_e){
return null;
}));
});
frontend.idb.clear_local_storage_and_idb_BANG_ = (function frontend$idb$clear_local_storage_and_idb_BANG_(){
frontend.storage.clear();

return frontend.idb.clear_idb_BANG_();
});
frontend.idb.remove_item_BANG_ = (function frontend$idb$remove_item_BANG_(key){
if(cljs.core.truth_(key)){
return module$frontend$idbkv.del(key,frontend.idb.store);
} else {
return null;
}
});
frontend.idb.set_item_BANG_ = (function frontend$idb$set_item_BANG_(key,value){
if(cljs.core.truth_(key)){
return module$frontend$idbkv.set(key,value,frontend.idb.store);
} else {
return null;
}
});
frontend.idb.set_batch_BANG_ = (function frontend$idb$set_batch_BANG_(items){
if(cljs.core.seq(items)){
return module$frontend$idbkv.setBatch(cljs.core.clj__GT_js(items),frontend.idb.store);
} else {
return null;
}
});
frontend.idb.get_item = (function frontend$idb$get_item(key){
if(cljs.core.truth_(key)){
return module$frontend$idbkv.get(key,frontend.idb.store);
} else {
return null;
}
});
frontend.idb.get_keys = (function frontend$idb$get_keys(){
return module$frontend$idbkv.keys(frontend.idb.store);
});
frontend.idb.get_nfs_dbs = (function frontend$idb$get_nfs_dbs(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_keys(),(function (ks){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42747_SHARP_){
return clojure.string.replace_first(p1__42747_SHARP_,frontend.config.idb_db_prefix,"");
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (k){
return clojure.string.starts_with_QMARK_(k,[frontend.config.idb_db_prefix,frontend.config.local_db_prefix].join(''));
}),ks)));
}));
}));
});
frontend.idb.clear_local_db_BANG_ = (function frontend$idb$clear_local_db_BANG_(repo){
if(cljs.core.truth_(repo)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_keys(),(function (ks){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (k){
return clojure.string.starts_with_QMARK_(k,[frontend.config.local_handle,"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)].join(''));
}),ks),(function (ks__$1){
return promesa.protocols._promise(((cljs.core.seq(ks__$1))?promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return frontend.idb.remove_item_BANG_(key);
}),ks__$1)):null));
}));
}));
}));
} else {
return null;
}
});

//# sourceMappingURL=frontend.idb.js.map
