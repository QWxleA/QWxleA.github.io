goog.provide('frontend.extensions.zip');
var module$node_modules$jszip$lib$index=shadow.js.require("module$node_modules$jszip$lib$index", {});
frontend.extensions.zip.make_file = (function frontend$extensions$zip$make_file(content,file_name,args){
var blob_content = cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
var last_modified = (function (){var or__5043__auto__ = (content["lastModified"]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
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
var seq__49932_49956 = cljs.core.seq(file_name__GT_content);
var chunk__49933_49957 = null;
var count__49934_49958 = (0);
var i__49935_49959 = (0);
while(true){
if((i__49935_49959 < count__49934_49958)){
var vec__49946_49960 = chunk__49933_49957.cljs$core$IIndexed$_nth$arity$2(null,i__49935_49959);
var file_name_49961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49946_49960,(0),null);
var content_49962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49946_49960,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_49961,src_filepath,""),/^\/+/,""),content_49962);


var G__49963 = seq__49932_49956;
var G__49964 = chunk__49933_49957;
var G__49965 = count__49934_49958;
var G__49966 = (i__49935_49959 + (1));
seq__49932_49956 = G__49963;
chunk__49933_49957 = G__49964;
count__49934_49958 = G__49965;
i__49935_49959 = G__49966;
continue;
} else {
var temp__5720__auto___49967 = cljs.core.seq(seq__49932_49956);
if(temp__5720__auto___49967){
var seq__49932_49968__$1 = temp__5720__auto___49967;
if(cljs.core.chunked_seq_QMARK_(seq__49932_49968__$1)){
var c__5565__auto___49969 = cljs.core.chunk_first(seq__49932_49968__$1);
var G__49970 = cljs.core.chunk_rest(seq__49932_49968__$1);
var G__49971 = c__5565__auto___49969;
var G__49972 = cljs.core.count(c__5565__auto___49969);
var G__49973 = (0);
seq__49932_49956 = G__49970;
chunk__49933_49957 = G__49971;
count__49934_49958 = G__49972;
i__49935_49959 = G__49973;
continue;
} else {
var vec__49949_49974 = cljs.core.first(seq__49932_49968__$1);
var file_name_49975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49949_49974,(0),null);
var content_49976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49949_49974,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_49975,src_filepath,""),/^\/+/,""),content_49976);


var G__49977 = cljs.core.next(seq__49932_49968__$1);
var G__49978 = null;
var G__49979 = (0);
var G__49980 = (0);
seq__49932_49956 = G__49977;
chunk__49933_49957 = G__49978;
count__49934_49958 = G__49979;
i__49935_49959 = G__49980;
continue;
}
} else {
}
}
break;
}

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(zip.generateAsync(({"type": "blob"})),(function (zip_blob){
return promesa.protocols._promise(frontend.extensions.zip.make_file(zip_blob,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(zip_filename),".zip"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"application/zip"], null)));
}));
}));
});

//# sourceMappingURL=frontend.extensions.zip.js.map
