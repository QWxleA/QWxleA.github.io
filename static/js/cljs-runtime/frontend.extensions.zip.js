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
var seq__94447_94475 = cljs.core.seq(file_name__GT_content);
var chunk__94448_94476 = null;
var count__94449_94477 = (0);
var i__94450_94478 = (0);
while(true){
if((i__94450_94478 < count__94449_94477)){
var vec__94459_94479 = chunk__94448_94476.cljs$core$IIndexed$_nth$arity$2(null,i__94450_94478);
var file_name_94480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94459_94479,(0),null);
var content_94481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94459_94479,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_94480,src_filepath,""),/^\/+/,""),content_94481);


var G__94482 = seq__94447_94475;
var G__94483 = chunk__94448_94476;
var G__94484 = count__94449_94477;
var G__94485 = (i__94450_94478 + (1));
seq__94447_94475 = G__94482;
chunk__94448_94476 = G__94483;
count__94449_94477 = G__94484;
i__94450_94478 = G__94485;
continue;
} else {
var temp__5720__auto___94486 = cljs.core.seq(seq__94447_94475);
if(temp__5720__auto___94486){
var seq__94447_94487__$1 = temp__5720__auto___94486;
if(cljs.core.chunked_seq_QMARK_(seq__94447_94487__$1)){
var c__4679__auto___94488 = cljs.core.chunk_first(seq__94447_94487__$1);
var G__94489 = cljs.core.chunk_rest(seq__94447_94487__$1);
var G__94490 = c__4679__auto___94488;
var G__94491 = cljs.core.count(c__4679__auto___94488);
var G__94492 = (0);
seq__94447_94475 = G__94489;
chunk__94448_94476 = G__94490;
count__94449_94477 = G__94491;
i__94450_94478 = G__94492;
continue;
} else {
var vec__94463_94493 = cljs.core.first(seq__94447_94487__$1);
var file_name_94494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94463_94493,(0),null);
var content_94495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94463_94493,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_94494,src_filepath,""),/^\/+/,""),content_94495);


var G__94523 = cljs.core.next(seq__94447_94487__$1);
var G__94524 = null;
var G__94525 = (0);
var G__94526 = (0);
seq__94447_94475 = G__94523;
chunk__94448_94476 = G__94524;
count__94449_94477 = G__94525;
i__94450_94478 = G__94526;
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
