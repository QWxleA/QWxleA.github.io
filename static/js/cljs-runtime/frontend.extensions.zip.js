goog.provide('frontend.extensions.zip');
var module$node_modules$jszip$lib$index=shadow.js.require("module$node_modules$jszip$lib$index", {});
frontend.extensions.zip.make_file = (function frontend$extensions$zip$make_file(content,file_name,args){
var blob_content = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
var last_modified = (function (){var or__4253__auto__ = (content["lastModified"]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new Date());
}
})();
var args__$1 = cljs.core.clj__GT_js(args);
(args__$1["lastModified"] = last_modified);

return (new File(blob_content,file_name,args__$1));
});
frontend.extensions.zip.make_zip = (function frontend$extensions$zip$make_zip(zip_filename,file_name__GT_content,repo){
var zip = (new module$node_modules$jszip$lib$index());
var zip_foldername = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(zip_filename,(clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(zip_filename,"/") + (1)));
var src_filepath = clojure.string.replace(repo,frontend.config.local_db_prefix,"");
var folder = zip.folder(zip_foldername);
var seq__64333_64350 = cljs.core.seq(file_name__GT_content);
var chunk__64334_64351 = null;
var count__64335_64352 = (0);
var i__64336_64353 = (0);
while(true){
if((i__64336_64353 < count__64335_64352)){
var vec__64343_64357 = chunk__64334_64351.cljs$core$IIndexed$_nth$arity$2(null,i__64336_64353);
var file_name_64358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64343_64357,(0),null);
var content_64359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64343_64357,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_64358,src_filepath,""),/^\/+/,""),content_64359);


var G__64360 = seq__64333_64350;
var G__64361 = chunk__64334_64351;
var G__64362 = count__64335_64352;
var G__64363 = (i__64336_64353 + (1));
seq__64333_64350 = G__64360;
chunk__64334_64351 = G__64361;
count__64335_64352 = G__64362;
i__64336_64353 = G__64363;
continue;
} else {
var temp__5720__auto___64364 = cljs.core.seq(seq__64333_64350);
if(temp__5720__auto___64364){
var seq__64333_64365__$1 = temp__5720__auto___64364;
if(cljs.core.chunked_seq_QMARK_(seq__64333_64365__$1)){
var c__4679__auto___64366 = cljs.core.chunk_first(seq__64333_64365__$1);
var G__64367 = cljs.core.chunk_rest(seq__64333_64365__$1);
var G__64368 = c__4679__auto___64366;
var G__64369 = cljs.core.count(c__4679__auto___64366);
var G__64370 = (0);
seq__64333_64350 = G__64367;
chunk__64334_64351 = G__64368;
count__64335_64352 = G__64369;
i__64336_64353 = G__64370;
continue;
} else {
var vec__64346_64371 = cljs.core.first(seq__64333_64365__$1);
var file_name_64372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64346_64371,(0),null);
var content_64373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64346_64371,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_64372,src_filepath,""),/^\/+/,""),content_64373);


var G__64410 = cljs.core.next(seq__64333_64365__$1);
var G__64411 = null;
var G__64412 = (0);
var G__64413 = (0);
seq__64333_64350 = G__64410;
chunk__64334_64351 = G__64411;
count__64335_64352 = G__64412;
i__64336_64353 = G__64413;
continue;
}
} else {
}
}
break;
}

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(zip.generateAsync(({"type": "blob"})),(function (zip_blob){
return promesa.protocols._promise(frontend.extensions.zip.make_file(zip_blob,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(zip_filename),".zip"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"application/zip"], null)));
}));
}));
});

//# sourceMappingURL=frontend.extensions.zip.js.map
