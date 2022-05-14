goog.provide('frontend.image');
goog.scope(function(){
  frontend.image.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.image.reverse_QMARK_ = (function frontend$image$reverse_QMARK_(exif_orientation){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(7),null,(6),null,(5),null,(8),null], null), null),exif_orientation);
});
frontend.image.re_scale = (function frontend$image$re_scale(exif_orientation,width,height,max_width,max_height){
var vec__96527 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96527,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96527,(1),null);
var ratio = (width__$1 / height__$1);
var to_width = (((width__$1 > max_width))?max_width:width__$1);
var to_height = (((height__$1 > max_height))?max_height:height__$1);
var new_ratio = (to_width / to_height);
var vec__96530 = (((new_ratio > ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ratio * to_height),to_height], null):(((new_ratio < ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,(to_width / ratio)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null)
));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96530,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96530,(1),null);
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
var vec__96540 = frontend.image.re_scale(exif_orientation,width,height,max_width,max_height);
var to_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96540,(0),null);
var to_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96540,(1),null);
frontend.image.goog$module$goog$object.set(ctx,"imageSmoothingEnabled",false);

(off_canvas.width = to_width);

(off_canvas.height = to_height);

var vec__96545_96608 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_height,to_width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null));
var width_96609__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96545_96608,(0),null);
var height_96610__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96545_96608,(1),null);
var G__96548_96611 = exif_orientation;
switch (G__96548_96611) {
case (2):
ctx.transform((-1),(0),(0),(1),width_96609__$1,(0));

break;
case (3):
ctx.transform((-1),(0),(0),(-1),width_96609__$1,height_96610__$1);

break;
case (4):
ctx.transform((1),(0),(0),(-1),(0),height_96610__$1);

break;
case (5):
ctx.transform((0),(1),(1),(0),(0),(0));

break;
case (6):
ctx.transform((0),(1),(-1),(0),height_96610__$1,(0));

break;
case (7):
ctx.transform((0),(-1),(-1),(0),height_96610__$1,width_96609__$1);

break;
case (8):
ctx.transform((0),(-1),(1),(0),(0),width_96609__$1);

break;
default:
ctx.transform((1),(0),(0),(1),(0),(0));

}

ctx.drawImage(img,(0),(0),width_96609__$1,height_96610__$1);

return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(off_canvas) : cb.call(null,off_canvas));
});
frontend.image.get_orientation = (function frontend$image$get_orientation(img,cb,max_width,max_height){
return module$frontend$exif.getEXIFOrientation(img,(function (orientation){
return frontend.image.fix_orientation(img,orientation,cb,max_width,max_height);
}));
});
frontend.image.create_object_url = (function frontend$image$create_object_url(file){
return (function (){var or__4253__auto__ = window.URL;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return window.webkitURL;
}
})().createObjectURL(file);
});
frontend.image.upload = (function frontend$image$upload(var_args){
var args__4870__auto__ = [];
var len__4864__auto___96615 = arguments.length;
var i__4865__auto___96616 = (0);
while(true){
if((i__4865__auto___96616 < len__4864__auto___96615)){
args__4870__auto__.push((arguments[i__4865__auto___96616]));

var G__96617 = (i__4865__auto___96616 + (1));
i__4865__auto___96616 = G__96617;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic = (function (files,file_handler,p__96560){
var map__96561 = p__96560;
var map__96561__$1 = cljs.core.__destructure_map(map__96561);
var files_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96561__$1,new cljs.core.Keyword(null,"files-limit","files-limit",-171817242),(1));
var seq__96573 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(files_limit,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(files)));
var chunk__96577 = null;
var count__96578 = (0);
var i__96579 = (0);
while(true){
if((i__96579 < count__96578)){
var file = chunk__96577.cljs$core$IIndexed$_nth$arity$2(null,i__96579);
var file_type_96620 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_96621 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_96622 = [ymd_96621,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_96620.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_96622,file_type_96620) : file_handler.call(null,file,file_name_96622,file_type_96620));
} else {
}


var G__96624 = seq__96573;
var G__96625 = chunk__96577;
var G__96626 = count__96578;
var G__96627 = (i__96579 + (1));
seq__96573 = G__96624;
chunk__96577 = G__96625;
count__96578 = G__96626;
i__96579 = G__96627;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__96573);
if(temp__5720__auto__){
var seq__96573__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__96573__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__96573__$1);
var G__96628 = cljs.core.chunk_rest(seq__96573__$1);
var G__96629 = c__4679__auto__;
var G__96630 = cljs.core.count(c__4679__auto__);
var G__96631 = (0);
seq__96573 = G__96628;
chunk__96577 = G__96629;
count__96578 = G__96630;
i__96579 = G__96631;
continue;
} else {
var file = cljs.core.first(seq__96573__$1);
var file_type_96632 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_96633 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_96634 = [ymd_96633,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_96632.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_96634,file_type_96632) : file_handler.call(null,file,file_name_96634,file_type_96632));
} else {
}


var G__96635 = cljs.core.next(seq__96573__$1);
var G__96636 = null;
var G__96637 = (0);
var G__96638 = (0);
seq__96573 = G__96635;
chunk__96577 = G__96636;
count__96578 = G__96637;
i__96579 = G__96638;
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
(frontend.image.upload.cljs$lang$applyTo = (function (seq96553){
var G__96554 = cljs.core.first(seq96553);
var seq96553__$1 = cljs.core.next(seq96553);
var G__96555 = cljs.core.first(seq96553__$1);
var seq96553__$2 = cljs.core.next(seq96553__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96554,G__96555,seq96553__$2);
}));


//# sourceMappingURL=frontend.image.js.map
