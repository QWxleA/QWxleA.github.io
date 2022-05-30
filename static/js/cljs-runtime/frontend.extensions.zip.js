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
var seq__49658_49679 = cljs.core.seq(file_name__GT_content);
var chunk__49659_49680 = null;
var count__49660_49681 = (0);
var i__49661_49682 = (0);
while(true){
if((i__49661_49682 < count__49660_49681)){
var vec__49670_49683 = chunk__49659_49680.cljs$core$IIndexed$_nth$arity$2(null,i__49661_49682);
var file_name_49684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49670_49683,(0),null);
var content_49685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49670_49683,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_49684,src_filepath,""),/^\/+/,""),content_49685);


var G__49686 = seq__49658_49679;
var G__49687 = chunk__49659_49680;
var G__49688 = count__49660_49681;
var G__49689 = (i__49661_49682 + (1));
seq__49658_49679 = G__49686;
chunk__49659_49680 = G__49687;
count__49660_49681 = G__49688;
i__49661_49682 = G__49689;
continue;
} else {
var temp__5720__auto___49690 = cljs.core.seq(seq__49658_49679);
if(temp__5720__auto___49690){
var seq__49658_49691__$1 = temp__5720__auto___49690;
if(cljs.core.chunked_seq_QMARK_(seq__49658_49691__$1)){
var c__5565__auto___49692 = cljs.core.chunk_first(seq__49658_49691__$1);
var G__49693 = cljs.core.chunk_rest(seq__49658_49691__$1);
var G__49694 = c__5565__auto___49692;
var G__49695 = cljs.core.count(c__5565__auto___49692);
var G__49696 = (0);
seq__49658_49679 = G__49693;
chunk__49659_49680 = G__49694;
count__49660_49681 = G__49695;
i__49661_49682 = G__49696;
continue;
} else {
var vec__49673_49697 = cljs.core.first(seq__49658_49691__$1);
var file_name_49698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49673_49697,(0),null);
var content_49699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49673_49697,(1),null);
folder.file(clojure.string.replace(clojure.string.replace(file_name_49698,src_filepath,""),/^\/+/,""),content_49699);


var G__49700 = cljs.core.next(seq__49658_49691__$1);
var G__49701 = null;
var G__49702 = (0);
var G__49703 = (0);
seq__49658_49679 = G__49700;
chunk__49659_49680 = G__49701;
count__49660_49681 = G__49702;
i__49661_49682 = G__49703;
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
