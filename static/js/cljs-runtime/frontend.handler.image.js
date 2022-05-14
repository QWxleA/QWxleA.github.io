goog.provide('frontend.handler.image');
goog.scope(function(){
  frontend.handler.image.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.image.render_local_images_BANG_ = (function frontend$handler$image$render_local_images_BANG_(){
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.mobile.util.native_ios_QMARK_();
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(frontend.state.get_current_repo());
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
try{var images = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByTagName("img"));
var get_src = (function (image){
return image.getAttribute("src");
});
var local_images = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (image){
var src = get_src(image);
var and__4251__auto__ = src;
if(cljs.core.truth_(and__4251__auto__)){
return (!(((frontend.util.starts_with_QMARK_(src,"http://")) || (((frontend.util.starts_with_QMARK_(src,"https://")) || (((frontend.util.starts_with_QMARK_(src,"blob:")) || (frontend.util.starts_with_QMARK_(src,"data:")))))))));
} else {
return and__4251__auto__;
}
}),images);
var seq__94630 = cljs.core.seq(local_images);
var chunk__94631 = null;
var count__94632 = (0);
var i__94633 = (0);
while(true){
if((i__94633 < count__94632)){
var img = chunk__94631.cljs$core$IIndexed$_nth$arity$2(null,i__94633);
frontend.handler.image.goog$module$goog$object.set(img,"onerror",((function (seq__94630,chunk__94631,count__94632,i__94633,img,images,get_src,local_images){
return (function (){
return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","none");
});})(seq__94630,chunk__94631,count__94632,i__94633,img,images,get_src,local_images))
);

var path_94682 = get_src(img);
var path_94683__$1 = clojure.string.replace_first(path_94682,"file:","");
var path_94684__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path_94683__$1),"."))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path_94683__$1,(1)):path_94683__$1);
frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3(frontend.config.get_repo_dir(frontend.state.get_current_repo()),path_94684__$2,cljs.core.PersistentArrayMap.EMPTY),((function (seq__94630,chunk__94631,count__94632,i__94633,path_94682,path_94683__$1,path_94684__$2,img,images,get_src,local_images){
return (function (blob){
var blob__$1 = (new Blob([blob],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"image"], null))));
var img_url = frontend.image.create_object_url(blob__$1);
frontend.handler.image.goog$module$goog$object.set(img,"src",img_url);

return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","initial");
});})(seq__94630,chunk__94631,count__94632,i__94633,path_94682,path_94683__$1,path_94684__$2,img,images,get_src,local_images))
,((function (seq__94630,chunk__94631,count__94632,i__94633,path_94682,path_94683__$1,path_94684__$2,img,images,get_src,local_images){
return (function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Can't read local image file: "], 0));

return console.dir(error);
});})(seq__94630,chunk__94631,count__94632,i__94633,path_94682,path_94683__$1,path_94684__$2,img,images,get_src,local_images))
);


var G__94685 = seq__94630;
var G__94686 = chunk__94631;
var G__94687 = count__94632;
var G__94688 = (i__94633 + (1));
seq__94630 = G__94685;
chunk__94631 = G__94686;
count__94632 = G__94687;
i__94633 = G__94688;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__94630);
if(temp__5720__auto__){
var seq__94630__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__94630__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__94630__$1);
var G__94689 = cljs.core.chunk_rest(seq__94630__$1);
var G__94690 = c__4679__auto__;
var G__94691 = cljs.core.count(c__4679__auto__);
var G__94692 = (0);
seq__94630 = G__94689;
chunk__94631 = G__94690;
count__94632 = G__94691;
i__94633 = G__94692;
continue;
} else {
var img = cljs.core.first(seq__94630__$1);
frontend.handler.image.goog$module$goog$object.set(img,"onerror",((function (seq__94630,chunk__94631,count__94632,i__94633,img,seq__94630__$1,temp__5720__auto__,images,get_src,local_images){
return (function (){
return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","none");
});})(seq__94630,chunk__94631,count__94632,i__94633,img,seq__94630__$1,temp__5720__auto__,images,get_src,local_images))
);

var path_94693 = get_src(img);
var path_94694__$1 = clojure.string.replace_first(path_94693,"file:","");
var path_94695__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path_94694__$1),"."))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path_94694__$1,(1)):path_94694__$1);
frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3(frontend.config.get_repo_dir(frontend.state.get_current_repo()),path_94695__$2,cljs.core.PersistentArrayMap.EMPTY),((function (seq__94630,chunk__94631,count__94632,i__94633,path_94693,path_94694__$1,path_94695__$2,img,seq__94630__$1,temp__5720__auto__,images,get_src,local_images){
return (function (blob){
var blob__$1 = (new Blob([blob],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"image"], null))));
var img_url = frontend.image.create_object_url(blob__$1);
frontend.handler.image.goog$module$goog$object.set(img,"src",img_url);

return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","initial");
});})(seq__94630,chunk__94631,count__94632,i__94633,path_94693,path_94694__$1,path_94695__$2,img,seq__94630__$1,temp__5720__auto__,images,get_src,local_images))
,((function (seq__94630,chunk__94631,count__94632,i__94633,path_94693,path_94694__$1,path_94695__$2,img,seq__94630__$1,temp__5720__auto__,images,get_src,local_images){
return (function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Can't read local image file: "], 0));

return console.dir(error);
});})(seq__94630,chunk__94631,count__94632,i__94633,path_94693,path_94694__$1,path_94695__$2,img,seq__94630__$1,temp__5720__auto__,images,get_src,local_images))
);


var G__94696 = cljs.core.next(seq__94630__$1);
var G__94697 = null;
var G__94698 = (0);
var G__94699 = (0);
seq__94630 = G__94696;
chunk__94631 = G__94697;
count__94632 = G__94698;
i__94633 = G__94699;
continue;
}
} else {
return null;
}
}
break;
}
}catch (e94625){if((e94625 instanceof Error)){
var _e = e94625;
return null;
} else {
throw e94625;

}
}}
});
frontend.handler.image.request_presigned_url = (function frontend$handler$image$request_presigned_url(file,filename,mime_type,uploading_QMARK_,url_handler,on_processing){
if((frontend.handler.image.goog$module$goog$object.get(file,"size") > (((12) * (1024)) * (1024)))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sorry, we don't support any file that's larger than 12MB."], null),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
cljs.core.reset_BANG_(uploading_QMARK_,true);

return frontend.util.post([frontend.config.api,"presigned_url"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),mime_type], null),(function (p__94671){
var map__94672 = p__94671;
var map__94672__$1 = cljs.core.__destructure_map(map__94672);
var resp = map__94672__$1;
var presigned_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94672__$1,new cljs.core.Keyword(null,"presigned-url","presigned-url",90607137));
var s3_object_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94672__$1,new cljs.core.Keyword(null,"s3-object-key","s3-object-key",-2006382897));
if(cljs.core.truth_(presigned_url)){
return frontend.util.upload(presigned_url,file,(function (_result){
return frontend.util.post([frontend.config.api,"signed_url"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s3-object-key","s3-object-key",-2006382897),s3_object_key], null),(function (p__94673){
var map__94674 = p__94673;
var map__94674__$1 = cljs.core.__destructure_map(map__94674);
var signed_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94674__$1,new cljs.core.Keyword(null,"signed-url","signed-url",1201672543));
cljs.core.reset_BANG_(uploading_QMARK_,false);

if(cljs.core.truth_(signed_url)){
return (url_handler.cljs$core$IFn$_invoke$arity$1 ? url_handler.cljs$core$IFn$_invoke$arity$1(signed_url) : url_handler.call(null,signed_url));
} else {
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Something error, can't get a valid signed url."], 0));
}
}),(function (_error){
cljs.core.reset_BANG_(uploading_QMARK_,false);

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Something error, can't get a valid signed url."], 0));
}));
}),(function (error){
cljs.core.reset_BANG_(uploading_QMARK_,false);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["upload failed."], 0));

return console.dir(error);
}),(function (e){
return (on_processing.cljs$core$IFn$_invoke$arity$1 ? on_processing.cljs$core$IFn$_invoke$arity$1(e) : on_processing.call(null,e));
}));
} else {
cljs.core.reset_BANG_(uploading_QMARK_,false);

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["failed to get any presigned url, resp: ",resp], 0));
}
}),(function (_error){
return cljs.core.reset_BANG_(uploading_QMARK_,false);
}));

}
});

//# sourceMappingURL=frontend.handler.image.js.map
