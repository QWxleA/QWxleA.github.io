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
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$frontend$idbkv.clear(frontend.idb.store),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(window.indexedDB.databases(),(function (dbs){
return promesa.protocols._promise((function (){var seq__93505 = cljs.core.seq(dbs);
var chunk__93507 = null;
var count__93508 = (0);
var i__93509 = (0);
while(true){
if((i__93509 < count__93508)){
var db = chunk__93507.cljs$core$IIndexed$_nth$arity$2(null,i__93509);
window.indexedDB.deleteDatabase(frontend.idb.goog$module$goog$object.get(db,"name"));


var G__93527 = seq__93505;
var G__93528 = chunk__93507;
var G__93529 = count__93508;
var G__93530 = (i__93509 + (1));
seq__93505 = G__93527;
chunk__93507 = G__93528;
count__93508 = G__93529;
i__93509 = G__93530;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__93505);
if(temp__5720__auto__){
var seq__93505__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__93505__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__93505__$1);
var G__93534 = cljs.core.chunk_rest(seq__93505__$1);
var G__93535 = c__4679__auto__;
var G__93536 = cljs.core.count(c__4679__auto__);
var G__93537 = (0);
seq__93505 = G__93534;
chunk__93507 = G__93535;
count__93508 = G__93536;
i__93509 = G__93537;
continue;
} else {
var db = cljs.core.first(seq__93505__$1);
window.indexedDB.deleteDatabase(frontend.idb.goog$module$goog$object.get(db,"name"));


var G__93538 = cljs.core.next(seq__93505__$1);
var G__93539 = null;
var G__93540 = (0);
var G__93541 = (0);
seq__93505 = G__93538;
chunk__93507 = G__93539;
count__93508 = G__93540;
i__93509 = G__93541;
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.get_keys(),(function (ks){
return promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__93512_SHARP_){
return clojure.string.replace_first(p1__93512_SHARP_,frontend.config.idb_db_prefix,"");
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (k){
return clojure.string.starts_with_QMARK_(k,[frontend.config.idb_db_prefix,frontend.config.local_db_prefix].join(''));
}),ks)));
}));
}));
});
frontend.idb.clear_local_db_BANG_ = (function frontend$idb$clear_local_db_BANG_(repo){
if(cljs.core.truth_(repo)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
