goog.provide('frontend.image');
goog.scope(function(){
  frontend.image.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.image.reverse_QMARK_ = (function frontend$image$reverse_QMARK_(exif_orientation){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(7),null,(6),null,(5),null,(8),null], null), null),exif_orientation);
});
frontend.image.re_scale = (function frontend$image$re_scale(exif_orientation,width,height,max_width,max_height){
var vec__50260 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50260,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50260,(1),null);
var ratio = (width__$1 / height__$1);
var to_width = (((width__$1 > max_width))?max_width:width__$1);
var to_height = (((height__$1 > max_height))?max_height:height__$1);
var new_ratio = (to_width / to_height);
var vec__50263 = (((new_ratio > ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ratio * to_height),to_height], null):(((new_ratio < ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,(to_width / ratio)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null)
));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50263,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50263,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w | (0)),(h | (0))], null);
});
/**
 * Given image and exif orientation, ensure the photo is displayed
 *   rightside up
 */
frontend.image.fix_orientation = (function frontend$image$fix_orientation(img,exif_orientation,cb,max_width,max_height){
var off_canvas = document.createElement("canvas");
var ctx = off_canvas.getContext("2d");
var width = frontend.image.goog$module$goog$object.get(img,"width");
var height = frontend.image.goog$module$goog$object.get(img,"height");
var vec__50276 = frontend.image.re_scale(exif_orientation,width,height,max_width,max_height);
var to_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50276,(0),null);
var to_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50276,(1),null);
frontend.image.goog$module$goog$object.set(ctx,"imageSmoothingEnabled",false);

(off_canvas.width = to_width);

(off_canvas.height = to_height);

var vec__50282_50337 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_height,to_width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null));
var width_50338__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50282_50337,(0),null);
var height_50339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50282_50337,(1),null);
var G__50285_50356 = exif_orientation;
switch (G__50285_50356) {
case (2):
ctx.transform((-1),(0),(0),(1),width_50338__$1,(0));

break;
case (3):
ctx.transform((-1),(0),(0),(-1),width_50338__$1,height_50339__$1);

break;
case (4):
ctx.transform((1),(0),(0),(-1),(0),height_50339__$1);

break;
case (5):
ctx.transform((0),(1),(1),(0),(0),(0));

break;
case (6):
ctx.transform((0),(1),(-1),(0),height_50339__$1,(0));

break;
case (7):
ctx.transform((0),(-1),(-1),(0),height_50339__$1,width_50338__$1);

break;
case (8):
ctx.transform((0),(-1),(1),(0),(0),width_50338__$1);

break;
default:
ctx.transform((1),(0),(0),(1),(0),(0));

}

ctx.drawImage(img,(0),(0),width_50338__$1,height_50339__$1);

return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(off_canvas) : cb.call(null,off_canvas));
});
frontend.image.get_orientation = (function frontend$image$get_orientation(img,cb,max_width,max_height){
return module$frontend$exif.getEXIFOrientation(img,(function (orientation){
return frontend.image.fix_orientation(img,orientation,cb,max_width,max_height);
}));
});
frontend.image.create_object_url = (function frontend$image$create_object_url(file){
return (function (){var or__5043__auto__ = window.URL;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return window.webkitURL;
}
})().createObjectURL(file);
});
frontend.image.upload = (function frontend$image$upload(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50358 = arguments.length;
var i__5767__auto___50359 = (0);
while(true){
if((i__5767__auto___50359 < len__5766__auto___50358)){
args__5772__auto__.push((arguments[i__5767__auto___50359]));

var G__50360 = (i__5767__auto___50359 + (1));
i__5767__auto___50359 = G__50360;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic = (function (files,file_handler,p__50299){
var map__50300 = p__50299;
var map__50300__$1 = cljs.core.__destructure_map(map__50300);
var files_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50300__$1,new cljs.core.Keyword(null,"files-limit","files-limit",-171817242),(1));
var seq__50301 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(files_limit,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(files)));
var chunk__50302 = null;
var count__50303 = (0);
var i__50304 = (0);
while(true){
if((i__50304 < count__50303)){
var file = chunk__50302.cljs$core$IIndexed$_nth$arity$2(null,i__50304);
var file_type_50362 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_50363 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_50364 = [ymd_50363,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_50362.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_50364,file_type_50362) : file_handler.call(null,file,file_name_50364,file_type_50362));
} else {
}


var G__50380 = seq__50301;
var G__50381 = chunk__50302;
var G__50382 = count__50303;
var G__50383 = (i__50304 + (1));
seq__50301 = G__50380;
chunk__50302 = G__50381;
count__50303 = G__50382;
i__50304 = G__50383;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50301);
if(temp__5720__auto__){
var seq__50301__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50301__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__50301__$1);
var G__50384 = cljs.core.chunk_rest(seq__50301__$1);
var G__50385 = c__5565__auto__;
var G__50386 = cljs.core.count(c__5565__auto__);
var G__50387 = (0);
seq__50301 = G__50384;
chunk__50302 = G__50385;
count__50303 = G__50386;
i__50304 = G__50387;
continue;
} else {
var file = cljs.core.first(seq__50301__$1);
var file_type_50388 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_50389 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_50390 = [ymd_50389,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_50388.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_50390,file_type_50388) : file_handler.call(null,file,file_name_50390,file_type_50388));
} else {
}


var G__50392 = cljs.core.next(seq__50301__$1);
var G__50393 = null;
var G__50394 = (0);
var G__50395 = (0);
seq__50301 = G__50392;
chunk__50302 = G__50393;
count__50303 = G__50394;
i__50304 = G__50395;
continue;
}
} else {
return null;
}
}
break;
}
}));

(frontend.image.upload.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(frontend.image.upload.cljs$lang$applyTo = (function (seq50292){
var G__50293 = cljs.core.first(seq50292);
var seq50292__$1 = cljs.core.next(seq50292);
var G__50294 = cljs.core.first(seq50292__$1);
var seq50292__$2 = cljs.core.next(seq50292__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50293,G__50294,seq50292__$2);
}));


//# sourceMappingURL=frontend.image.js.map
