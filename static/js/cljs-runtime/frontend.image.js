goog.provide('frontend.image');
goog.scope(function(){
  frontend.image.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.image.reverse_QMARK_ = (function frontend$image$reverse_QMARK_(exif_orientation){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(7),null,(6),null,(5),null,(8),null], null), null),exif_orientation);
});
frontend.image.re_scale = (function frontend$image$re_scale(exif_orientation,width,height,max_width,max_height){
var vec__50181 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50181,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50181,(1),null);
var ratio = (width__$1 / height__$1);
var to_width = (((width__$1 > max_width))?max_width:width__$1);
var to_height = (((height__$1 > max_height))?max_height:height__$1);
var new_ratio = (to_width / to_height);
var vec__50184 = (((new_ratio > ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ratio * to_height),to_height], null):(((new_ratio < ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,(to_width / ratio)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null)
));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50184,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50184,(1),null);
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
var vec__50189 = frontend.image.re_scale(exif_orientation,width,height,max_width,max_height);
var to_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50189,(0),null);
var to_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50189,(1),null);
frontend.image.goog$module$goog$object.set(ctx,"imageSmoothingEnabled",false);

(off_canvas.width = to_width);

(off_canvas.height = to_height);

var vec__50192_50238 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_height,to_width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null));
var width_50239__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50192_50238,(0),null);
var height_50240__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50192_50238,(1),null);
var G__50195_50241 = exif_orientation;
switch (G__50195_50241) {
case (2):
ctx.transform((-1),(0),(0),(1),width_50239__$1,(0));

break;
case (3):
ctx.transform((-1),(0),(0),(-1),width_50239__$1,height_50240__$1);

break;
case (4):
ctx.transform((1),(0),(0),(-1),(0),height_50240__$1);

break;
case (5):
ctx.transform((0),(1),(1),(0),(0),(0));

break;
case (6):
ctx.transform((0),(1),(-1),(0),height_50240__$1,(0));

break;
case (7):
ctx.transform((0),(-1),(-1),(0),height_50240__$1,width_50239__$1);

break;
case (8):
ctx.transform((0),(-1),(1),(0),(0),width_50239__$1);

break;
default:
ctx.transform((1),(0),(0),(1),(0),(0));

}

ctx.drawImage(img,(0),(0),width_50239__$1,height_50240__$1);

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
var len__5766__auto___50244 = arguments.length;
var i__5767__auto___50245 = (0);
while(true){
if((i__5767__auto___50245 < len__5766__auto___50244)){
args__5772__auto__.push((arguments[i__5767__auto___50245]));

var G__50246 = (i__5767__auto___50245 + (1));
i__5767__auto___50245 = G__50246;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic = (function (files,file_handler,p__50212){
var map__50214 = p__50212;
var map__50214__$1 = cljs.core.__destructure_map(map__50214);
var files_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50214__$1,new cljs.core.Keyword(null,"files-limit","files-limit",-171817242),(1));
var seq__50215 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(files_limit,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(files)));
var chunk__50216 = null;
var count__50217 = (0);
var i__50218 = (0);
while(true){
if((i__50218 < count__50217)){
var file = chunk__50216.cljs$core$IIndexed$_nth$arity$2(null,i__50218);
var file_type_50248 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_50249 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_50250 = [ymd_50249,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_50248.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_50250,file_type_50248) : file_handler.call(null,file,file_name_50250,file_type_50248));
} else {
}


var G__50251 = seq__50215;
var G__50252 = chunk__50216;
var G__50253 = count__50217;
var G__50254 = (i__50218 + (1));
seq__50215 = G__50251;
chunk__50216 = G__50252;
count__50217 = G__50253;
i__50218 = G__50254;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50215);
if(temp__5720__auto__){
var seq__50215__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50215__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__50215__$1);
var G__50255 = cljs.core.chunk_rest(seq__50215__$1);
var G__50256 = c__5565__auto__;
var G__50257 = cljs.core.count(c__5565__auto__);
var G__50258 = (0);
seq__50215 = G__50255;
chunk__50216 = G__50256;
count__50217 = G__50257;
i__50218 = G__50258;
continue;
} else {
var file = cljs.core.first(seq__50215__$1);
var file_type_50259 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_50260 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_50261 = [ymd_50260,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_50259.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_50261,file_type_50259) : file_handler.call(null,file,file_name_50261,file_type_50259));
} else {
}


var G__50264 = cljs.core.next(seq__50215__$1);
var G__50265 = null;
var G__50266 = (0);
var G__50267 = (0);
seq__50215 = G__50264;
chunk__50216 = G__50265;
count__50217 = G__50266;
i__50218 = G__50267;
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
(frontend.image.upload.cljs$lang$applyTo = (function (seq50204){
var G__50205 = cljs.core.first(seq50204);
var seq50204__$1 = cljs.core.next(seq50204);
var G__50206 = cljs.core.first(seq50204__$1);
var seq50204__$2 = cljs.core.next(seq50204__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50205,G__50206,seq50204__$2);
}));


//# sourceMappingURL=frontend.image.js.map
