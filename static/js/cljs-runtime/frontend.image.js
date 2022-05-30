goog.provide('frontend.image');
goog.scope(function(){
  frontend.image.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.image.reverse_QMARK_ = (function frontend$image$reverse_QMARK_(exif_orientation){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(7),null,(6),null,(5),null,(8),null], null), null),exif_orientation);
});
frontend.image.re_scale = (function frontend$image$re_scale(exif_orientation,width,height,max_width,max_height){
var vec__49935 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49935,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49935,(1),null);
var ratio = (width__$1 / height__$1);
var to_width = (((width__$1 > max_width))?max_width:width__$1);
var to_height = (((height__$1 > max_height))?max_height:height__$1);
var new_ratio = (to_width / to_height);
var vec__49938 = (((new_ratio > ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ratio * to_height),to_height], null):(((new_ratio < ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,(to_width / ratio)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null)
));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49938,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49938,(1),null);
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
var vec__49943 = frontend.image.re_scale(exif_orientation,width,height,max_width,max_height);
var to_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49943,(0),null);
var to_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49943,(1),null);
frontend.image.goog$module$goog$object.set(ctx,"imageSmoothingEnabled",false);

(off_canvas.width = to_width);

(off_canvas.height = to_height);

var vec__49948_50036 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_height,to_width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null));
var width_50037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49948_50036,(0),null);
var height_50038__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49948_50036,(1),null);
var G__49951_50039 = exif_orientation;
switch (G__49951_50039) {
case (2):
ctx.transform((-1),(0),(0),(1),width_50037__$1,(0));

break;
case (3):
ctx.transform((-1),(0),(0),(-1),width_50037__$1,height_50038__$1);

break;
case (4):
ctx.transform((1),(0),(0),(-1),(0),height_50038__$1);

break;
case (5):
ctx.transform((0),(1),(1),(0),(0),(0));

break;
case (6):
ctx.transform((0),(1),(-1),(0),height_50038__$1,(0));

break;
case (7):
ctx.transform((0),(-1),(-1),(0),height_50038__$1,width_50037__$1);

break;
case (8):
ctx.transform((0),(-1),(1),(0),(0),width_50037__$1);

break;
default:
ctx.transform((1),(0),(0),(1),(0),(0));

}

ctx.drawImage(img,(0),(0),width_50037__$1,height_50038__$1);

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
var len__5766__auto___50049 = arguments.length;
var i__5767__auto___50050 = (0);
while(true){
if((i__5767__auto___50050 < len__5766__auto___50049)){
args__5772__auto__.push((arguments[i__5767__auto___50050]));

var G__50051 = (i__5767__auto___50050 + (1));
i__5767__auto___50050 = G__50051;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic = (function (files,file_handler,p__49968){
var map__49969 = p__49968;
var map__49969__$1 = cljs.core.__destructure_map(map__49969);
var files_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49969__$1,new cljs.core.Keyword(null,"files-limit","files-limit",-171817242),(1));
var seq__49971 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(files_limit,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(files)));
var chunk__49972 = null;
var count__49973 = (0);
var i__49974 = (0);
while(true){
if((i__49974 < count__49973)){
var file = chunk__49972.cljs$core$IIndexed$_nth$arity$2(null,i__49974);
var file_type_50059 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_50060 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_50061 = [ymd_50060,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_50059.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_50061,file_type_50059) : file_handler.call(null,file,file_name_50061,file_type_50059));
} else {
}


var G__50066 = seq__49971;
var G__50067 = chunk__49972;
var G__50068 = count__49973;
var G__50069 = (i__49974 + (1));
seq__49971 = G__50066;
chunk__49972 = G__50067;
count__49973 = G__50068;
i__49974 = G__50069;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49971);
if(temp__5720__auto__){
var seq__49971__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49971__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__49971__$1);
var G__50070 = cljs.core.chunk_rest(seq__49971__$1);
var G__50071 = c__5565__auto__;
var G__50072 = cljs.core.count(c__5565__auto__);
var G__50073 = (0);
seq__49971 = G__50070;
chunk__49972 = G__50071;
count__49973 = G__50072;
i__49974 = G__50073;
continue;
} else {
var file = cljs.core.first(seq__49971__$1);
var file_type_50074 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_50075 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_50076 = [ymd_50075,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_50074.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_50076,file_type_50074) : file_handler.call(null,file,file_name_50076,file_type_50074));
} else {
}


var G__50077 = cljs.core.next(seq__49971__$1);
var G__50078 = null;
var G__50079 = (0);
var G__50080 = (0);
seq__49971 = G__50077;
chunk__49972 = G__50078;
count__49973 = G__50079;
i__49974 = G__50080;
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
(frontend.image.upload.cljs$lang$applyTo = (function (seq49956){
var G__49957 = cljs.core.first(seq49956);
var seq49956__$1 = cljs.core.next(seq49956);
var G__49958 = cljs.core.first(seq49956__$1);
var seq49956__$2 = cljs.core.next(seq49956__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49957,G__49958,seq49956__$2);
}));


//# sourceMappingURL=frontend.image.js.map
