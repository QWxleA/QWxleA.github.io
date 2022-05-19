goog.provide('frontend.image');
goog.scope(function(){
  frontend.image.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.image.reverse_QMARK_ = (function frontend$image$reverse_QMARK_(exif_orientation){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(7),null,(6),null,(5),null,(8),null], null), null),exif_orientation);
});
frontend.image.re_scale = (function frontend$image$re_scale(exif_orientation,width,height,max_width,max_height){
var vec__64585 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64585,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64585,(1),null);
var ratio = (width__$1 / height__$1);
var to_width = (((width__$1 > max_width))?max_width:width__$1);
var to_height = (((height__$1 > max_height))?max_height:height__$1);
var new_ratio = (to_width / to_height);
var vec__64588 = (((new_ratio > ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ratio * to_height),to_height], null):(((new_ratio < ratio))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,(to_width / ratio)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null)
));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64588,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64588,(1),null);
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
var vec__64592 = frontend.image.re_scale(exif_orientation,width,height,max_width,max_height);
var to_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64592,(0),null);
var to_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64592,(1),null);
frontend.image.goog$module$goog$object.set(ctx,"imageSmoothingEnabled",false);

(off_canvas.width = to_width);

(off_canvas.height = to_height);

var vec__64595_64637 = ((frontend.image.reverse_QMARK_(exif_orientation))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_height,to_width], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_width,to_height], null));
var width_64638__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64595_64637,(0),null);
var height_64639__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64595_64637,(1),null);
var G__64598_64641 = exif_orientation;
switch (G__64598_64641) {
case (2):
ctx.transform((-1),(0),(0),(1),width_64638__$1,(0));

break;
case (3):
ctx.transform((-1),(0),(0),(-1),width_64638__$1,height_64639__$1);

break;
case (4):
ctx.transform((1),(0),(0),(-1),(0),height_64639__$1);

break;
case (5):
ctx.transform((0),(1),(1),(0),(0),(0));

break;
case (6):
ctx.transform((0),(1),(-1),(0),height_64639__$1,(0));

break;
case (7):
ctx.transform((0),(-1),(-1),(0),height_64639__$1,width_64638__$1);

break;
case (8):
ctx.transform((0),(-1),(1),(0),(0),width_64638__$1);

break;
default:
ctx.transform((1),(0),(0),(1),(0),(0));

}

ctx.drawImage(img,(0),(0),width_64638__$1,height_64639__$1);

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
var len__4864__auto___64645 = arguments.length;
var i__4865__auto___64646 = (0);
while(true){
if((i__4865__auto___64646 < len__4864__auto___64645)){
args__4870__auto__.push((arguments[i__4865__auto___64646]));

var G__64647 = (i__4865__auto___64646 + (1));
i__4865__auto___64646 = G__64647;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(frontend.image.upload.cljs$core$IFn$_invoke$arity$variadic = (function (files,file_handler,p__64603){
var map__64604 = p__64603;
var map__64604__$1 = cljs.core.__destructure_map(map__64604);
var files_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64604__$1,new cljs.core.Keyword(null,"files-limit","files-limit",-171817242),(1));
var seq__64606 = cljs.core.seq(cljs.core.take.cljs$core$IFn$_invoke$arity$2(files_limit,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(files)));
var chunk__64607 = null;
var count__64608 = (0);
var i__64609 = (0);
while(true){
if((i__64609 < count__64608)){
var file = chunk__64607.cljs$core$IIndexed$_nth$arity$2(null,i__64609);
var file_type_64648 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_64649 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_64650 = [ymd_64649,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_64648.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_64650,file_type_64648) : file_handler.call(null,file,file_name_64650,file_type_64648));
} else {
}


var G__64651 = seq__64606;
var G__64652 = chunk__64607;
var G__64653 = count__64608;
var G__64654 = (i__64609 + (1));
seq__64606 = G__64651;
chunk__64607 = G__64652;
count__64608 = G__64653;
i__64609 = G__64654;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64606);
if(temp__5720__auto__){
var seq__64606__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64606__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64606__$1);
var G__64655 = cljs.core.chunk_rest(seq__64606__$1);
var G__64656 = c__4679__auto__;
var G__64657 = cljs.core.count(c__4679__auto__);
var G__64658 = (0);
seq__64606 = G__64655;
chunk__64607 = G__64656;
count__64608 = G__64657;
i__64609 = G__64658;
continue;
} else {
var file = cljs.core.first(seq__64606__$1);
var file_type_64659 = frontend.image.goog$module$goog$object.get(file,"type");
var ymd_64660 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.vals(frontend.date.year_month_day_padded.cljs$core$IFn$_invoke$arity$0()));
var file_name_64661 = [ymd_64660,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.image.goog$module$goog$object.get(file,"name"))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),file_type_64659.indexOf("image/"))){
(file_handler.cljs$core$IFn$_invoke$arity$3 ? file_handler.cljs$core$IFn$_invoke$arity$3(file,file_name_64661,file_type_64659) : file_handler.call(null,file,file_name_64661,file_type_64659));
} else {
}


var G__64664 = cljs.core.next(seq__64606__$1);
var G__64665 = null;
var G__64666 = (0);
var G__64667 = (0);
seq__64606 = G__64664;
chunk__64607 = G__64665;
count__64608 = G__64666;
i__64609 = G__64667;
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
(frontend.image.upload.cljs$lang$applyTo = (function (seq64600){
var G__64601 = cljs.core.first(seq64600);
var seq64600__$1 = cljs.core.next(seq64600);
var G__64602 = cljs.core.first(seq64600__$1);
var seq64600__$2 = cljs.core.next(seq64600__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64601,G__64602,seq64600__$2);
}));


//# sourceMappingURL=frontend.image.js.map
