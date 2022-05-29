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
var seq__49661_49697 = cljs.core.seq(file_name__GT_content);
var chunk__49662_49698 = null;
var count__49663_49699 = (0);
var i__49664_49700 = (0);
while(true){
if((i__49664_49700 < count__49663_49699)){
var vec__49672_49701 = chunk__49662_49698.cljs$core$IIndexed$_nth$arity$2(null,i__49664_49700);
var file_name_49702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49672_49701,(0),null);
var content_49703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49672_49701,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_49702,src_filepath,""),/^\/+/,""),content_49703);


var G__49704 = seq__49661_49697;
var G__49705 = chunk__49662_49698;
var G__49706 = count__49663_49699;
var G__49707 = (i__49664_49700 + (1));
seq__49661_49697 = G__49704;
chunk__49662_49698 = G__49705;
count__49663_49699 = G__49706;
i__49664_49700 = G__49707;
continue;
} else {
var temp__5720__auto___49708 = cljs.core.seq(seq__49661_49697);
if(temp__5720__auto___49708){
var seq__49661_49709__$1 = temp__5720__auto___49708;
if(cljs.core.chunked_seq_QMARK_(seq__49661_49709__$1)){
var c__5565__auto___49710 = cljs.core.chunk_first(seq__49661_49709__$1);
var G__49711 = cljs.core.chunk_rest(seq__49661_49709__$1);
var G__49712 = c__5565__auto___49710;
var G__49713 = cljs.core.count(c__5565__auto___49710);
var G__49714 = (0);
seq__49661_49697 = G__49711;
chunk__49662_49698 = G__49712;
count__49663_49699 = G__49713;
i__49664_49700 = G__49714;
continue;
} else {
var vec__49675_49715 = cljs.core.first(seq__49661_49709__$1);
var file_name_49716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49675_49715,(0),null);
var content_49717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49675_49715,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_49716,src_filepath,""),/^\/+/,""),content_49717);


var G__49718 = cljs.core.next(seq__49661_49709__$1);
var G__49719 = null;
var G__49720 = (0);
var G__49721 = (0);
seq__49661_49697 = G__49718;
chunk__49662_49698 = G__49719;
count__49663_49699 = G__49720;
i__49664_49700 = G__49721;
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
