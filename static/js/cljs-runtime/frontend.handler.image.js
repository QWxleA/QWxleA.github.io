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
var seq__63260 = cljs.core.seq(local_images);
var chunk__63261 = null;
var count__63262 = (0);
var i__63263 = (0);
while(true){
if((i__63263 < count__63262)){
var img = chunk__63261.cljs$core$IIndexed$_nth$arity$2(null,i__63263);
frontend.handler.image.goog$module$goog$object.set(img,"onerror",((function (seq__63260,chunk__63261,count__63262,i__63263,img,images,get_src,local_images){
return (function (){
return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","none");
});})(seq__63260,chunk__63261,count__63262,i__63263,img,images,get_src,local_images))
);

var path_63350 = get_src(img);
var path_63351__$1 = clojure.string.replace_first(path_63350,"file:","");
var path_63352__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path_63351__$1),"."))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path_63351__$1,(1)):path_63351__$1);
frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3(frontend.config.get_repo_dir(frontend.state.get_current_repo()),path_63352__$2,cljs.core.PersistentArrayMap.EMPTY),((function (seq__63260,chunk__63261,count__63262,i__63263,path_63350,path_63351__$1,path_63352__$2,img,images,get_src,local_images){
return (function (blob){
var blob__$1 = (new Blob([blob],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"image"], null))));
var img_url = frontend.image.create_object_url(blob__$1);
frontend.handler.image.goog$module$goog$object.set(img,"src",img_url);

return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","initial");
});})(seq__63260,chunk__63261,count__63262,i__63263,path_63350,path_63351__$1,path_63352__$2,img,images,get_src,local_images))
,((function (seq__63260,chunk__63261,count__63262,i__63263,path_63350,path_63351__$1,path_63352__$2,img,images,get_src,local_images){
return (function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Can't read local image file: "], 0));

return console.dir(error);
});})(seq__63260,chunk__63261,count__63262,i__63263,path_63350,path_63351__$1,path_63352__$2,img,images,get_src,local_images))
);


var G__63363 = seq__63260;
var G__63364 = chunk__63261;
var G__63365 = count__63262;
var G__63366 = (i__63263 + (1));
seq__63260 = G__63363;
chunk__63261 = G__63364;
count__63262 = G__63365;
i__63263 = G__63366;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__63260);
if(temp__5720__auto__){
var seq__63260__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63260__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63260__$1);
var G__63368 = cljs.core.chunk_rest(seq__63260__$1);
var G__63369 = c__4679__auto__;
var G__63370 = cljs.core.count(c__4679__auto__);
var G__63371 = (0);
seq__63260 = G__63368;
chunk__63261 = G__63369;
count__63262 = G__63370;
i__63263 = G__63371;
continue;
} else {
var img = cljs.core.first(seq__63260__$1);
frontend.handler.image.goog$module$goog$object.set(img,"onerror",((function (seq__63260,chunk__63261,count__63262,i__63263,img,seq__63260__$1,temp__5720__auto__,images,get_src,local_images){
return (function (){
return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","none");
});})(seq__63260,chunk__63261,count__63262,i__63263,img,seq__63260__$1,temp__5720__auto__,images,get_src,local_images))
);

var path_63372 = get_src(img);
var path_63373__$1 = clojure.string.replace_first(path_63372,"file:","");
var path_63374__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path_63373__$1),"."))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path_63373__$1,(1)):path_63373__$1);
frontend.util.p_handle.cljs$core$IFn$_invoke$arity$3(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$3(frontend.config.get_repo_dir(frontend.state.get_current_repo()),path_63374__$2,cljs.core.PersistentArrayMap.EMPTY),((function (seq__63260,chunk__63261,count__63262,i__63263,path_63372,path_63373__$1,path_63374__$2,img,seq__63260__$1,temp__5720__auto__,images,get_src,local_images){
return (function (blob){
var blob__$1 = (new Blob([blob],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"image"], null))));
var img_url = frontend.image.create_object_url(blob__$1);
frontend.handler.image.goog$module$goog$object.set(img,"src",img_url);

return frontend.handler.image.goog$module$goog$object.set(frontend.handler.image.goog$module$goog$object.get(img,"style"),"display","initial");
});})(seq__63260,chunk__63261,count__63262,i__63263,path_63372,path_63373__$1,path_63374__$2,img,seq__63260__$1,temp__5720__auto__,images,get_src,local_images))
,((function (seq__63260,chunk__63261,count__63262,i__63263,path_63372,path_63373__$1,path_63374__$2,img,seq__63260__$1,temp__5720__auto__,images,get_src,local_images){
return (function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Can't read local image file: "], 0));

return console.dir(error);
});})(seq__63260,chunk__63261,count__63262,i__63263,path_63372,path_63373__$1,path_63374__$2,img,seq__63260__$1,temp__5720__auto__,images,get_src,local_images))
);


var G__63384 = cljs.core.next(seq__63260__$1);
var G__63385 = null;
var G__63386 = (0);
var G__63387 = (0);
seq__63260 = G__63384;
chunk__63261 = G__63385;
count__63262 = G__63386;
i__63263 = G__63387;
continue;
}
} else {
return null;
}
}
break;
}
}catch (e63259){if((e63259 instanceof Error)){
var _e = e63259;
return null;
} else {
throw e63259;

}
}}
});
frontend.handler.image.request_presigned_url = (function frontend$handler$image$request_presigned_url(file,filename,mime_type,uploading_QMARK_,url_handler,on_processing){
if((frontend.handler.image.goog$module$goog$object.get(file,"size") > (((12) * (1024)) * (1024)))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sorry, we don't support any file that's larger than 12MB."], null),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
cljs.core.reset_BANG_(uploading_QMARK_,true);

return frontend.util.post([frontend.config.api,"presigned_url"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),mime_type], null),(function (p__63296){
var map__63297 = p__63296;
var map__63297__$1 = cljs.core.__destructure_map(map__63297);
var resp = map__63297__$1;
var presigned_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63297__$1,new cljs.core.Keyword(null,"presigned-url","presigned-url",90607137));
var s3_object_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63297__$1,new cljs.core.Keyword(null,"s3-object-key","s3-object-key",-2006382897));
if(cljs.core.truth_(presigned_url)){
return frontend.util.upload(presigned_url,file,(function (_result){
return frontend.util.post([frontend.config.api,"signed_url"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s3-object-key","s3-object-key",-2006382897),s3_object_key], null),(function (p__63302){
var map__63303 = p__63302;
var map__63303__$1 = cljs.core.__destructure_map(map__63303);
var signed_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63303__$1,new cljs.core.Keyword(null,"signed-url","signed-url",1201672543));
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