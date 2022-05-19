goog.provide('frontend.components.block');
goog.scope(function(){
  frontend.components.block.goog$module$goog$object = goog.module.get('goog.object');
  frontend.components.block.goog$module$shadow$loader = goog.module.get('shadow.loader');
});
var module$node_modules$$capacitor$share$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$share$dist$plugin_cjs", {});
frontend.components.block.safe_read_string = (function frontend$components$block$safe_read_string(var_args){
var G__69331 = arguments.length;
switch (G__69331) {
case 1:
return frontend.components.block.safe_read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.components.block.safe_read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.block.safe_read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return frontend.components.block.safe_read_string.cljs$core$IFn$_invoke$arity$2(s,true);
}));

(frontend.components.block.safe_read_string.cljs$core$IFn$_invoke$arity$2 = (function (s,warn_QMARK_){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}catch (e69332){var e = e69332;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.block",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-string-error","read-string-error",-337329605),e,new cljs.core.Keyword(null,"string","string",-1989541586),s,new cljs.core.Keyword(null,"line","line",212345235),77], null)),null);

if(cljs.core.truth_(warn_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"read-string failed"], null),s], null);
} else {
return null;
}
}}));

(frontend.components.block.safe_read_string.cljs$lang$maxFixedArity = 2);

if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_dragging_QMARK_ !== 'undefined')){
} else {
frontend.components.block._STAR_dragging_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_dragging_block !== 'undefined')){
} else {
frontend.components.block._STAR_dragging_block = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_drag_to_block !== 'undefined')){
} else {
frontend.components.block._STAR_drag_to_block = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.block._STAR_move_to = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block.max_depth_of_links !== 'undefined')){
} else {
frontend.components.block.max_depth_of_links = (5);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_blocks_container_id !== 'undefined')){
} else {
frontend.components.block._STAR_blocks_container_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.components.block.remove_nils = (function frontend$components$block$remove_nils(col){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,col);
});
frontend.components.block.vec_cat = (function frontend$components$block$vec_cat(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70438 = arguments.length;
var i__4865__auto___70439 = (0);
while(true){
if((i__4865__auto___70439 < len__4864__auto___70438)){
args__4870__auto__.push((arguments[i__4865__auto___70439]));

var G__70440 = (i__4865__auto___70439 + (1));
i__4865__auto___70439 = G__70440;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.vec(frontend.components.block.remove_nils(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,args)));
}));

(frontend.components.block.vec_cat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.components.block.vec_cat.cljs$lang$applyTo = (function (seq69338){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69338));
}));

frontend.components.block.__GT_elem = (function frontend$components$block$__GT_elem(var_args){
var G__69344 = arguments.length;
switch (G__69344) {
case 2:
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2 = (function (elem,items){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(elem,null,items);
}));

(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3 = (function (elem,attrs,items){
var elem__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(elem);
if(cljs.core.truth_(attrs)){
return cljs.core.vec(cljs.core.cons(elem__$1,cljs.core.cons(attrs,cljs.core.seq(items))));
} else {
return cljs.core.vec(cljs.core.cons(elem__$1,cljs.core.seq(items)));
}
}));

(frontend.components.block.__GT_elem.cljs$lang$maxFixedArity = 3);

frontend.components.block.join_lines = (function frontend$components$block$join_lines(l){
return clojure.string.trim(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,l));
});
frontend.components.block.string_of_url = (function frontend$components$block$string_of_url(url){
try{if(((cljs.core.vector_QMARK_(url)) && ((cljs.core.count(url) === 2)))){
try{var url_0__69350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__69350 === "File")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
return clojure.string.replace(clojure.string.replace(s,"file://",""),"file:","");
} else {
throw cljs.core.match.backtrack;

}
}catch (e69354){if((e69354 instanceof Error)){
var e__58854__auto__ = e69354;
if((e__58854__auto__ === cljs.core.match.backtrack)){
try{var url_0__69350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__69350 === "Complex")){
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
var map__69356 = m;
var map__69356__$1 = cljs.core.__destructure_map(map__69356);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69356__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69356__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"file")){
return link;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join('');
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e69355){if((e69355 instanceof Error)){
var e__58854__auto____$1 = e69355;
if((e__58854__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$1;
}
} else {
throw e69355;

}
}} else {
throw e__58854__auto__;
}
} else {
throw e69354;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69353){if((e69353 instanceof Error)){
var e__58854__auto__ = e69353;
if((e__58854__auto__ === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')));
} else {
throw e__58854__auto__;
}
} else {
throw e69353;

}
}});
frontend.components.block.get_file_absolute_path = (function frontend$components$block$get_file_absolute_path(config,path){
var path__$1 = clojure.string.replace(path,"file:","");
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
var current_file = (function (){var and__4251__auto__ = block_id;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__69359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__69359) : frontend.db.entity.call(null,G__69359));
})())));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(current_file)){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(current_file,/\//);
var parts_2 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path__$1,/\//);
var current_dir = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((1),parts));
if(cljs.core.truth_((cljs.core.truth_(frontend.util.win32_QMARK_)?module$frontend$utils.win32(path__$1):frontend.util.starts_with_QMARK_(path__$1,"/")))){
return path__$1;
} else {
if((((!(frontend.util.starts_with_QMARK_(path__$1,"..")))) && ((!(frontend.util.starts_with_QMARK_(path__$1,".")))))){
return [current_dir,"/",path__$1].join('');
} else {
var parts__$1 = (function (){var acc = cljs.core.PersistentVector.EMPTY;
var parts__$1 = cljs.core.reverse(parts);
var col = cljs.core.reverse(parts_2);
while(true){
if(cljs.core.empty_QMARK_(col)){
return acc;
} else {
var vec__69364 = (function (){var G__69367 = cljs.core.first(col);
switch (G__69367) {
case "..":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parts__$1),cljs.core.rest(parts__$1)], null);

break;
case ".":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",parts__$1], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(col),cljs.core.rest(parts__$1)], null);

}
})();
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69364,(0),null);
var parts__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69364,(1),null);
var G__70443 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,part);
var G__70444 = parts__$2;
var G__70445 = cljs.core.rest(col);
acc = G__70443;
parts__$1 = G__70444;
col = G__70445;
continue;
}
break;
}
})();
var parts__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__69358_SHARP_){
return clojure.string.blank_QMARK_(p1__69358_SHARP_);
}),parts__$1);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(parts__$2));

}
}
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block._STAR_resizing_image_QMARK_ !== 'undefined')){
} else {
frontend.components.block._STAR_resizing_image_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.block.resizable_image = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,title,src,metadata,full_text,local_QMARK_){
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.block","size","frontend.components.block/size",1026310526));
return daiquiri.interpreter.interpret((function (){var G__69379 = (function (){var G__69380 = ((cljs.core.not(frontend.mobile.util.native_ios_QMARK_()))?(function (){var G__69382 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"resize image-resize",new cljs.core.Keyword(null,"onSizeChanged","onSizeChanged",171770512),(function (value){
if(((cljs.core.not(cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_))) && ((((!((cljs.core.deref(size) == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.deref(size))))))){
cljs.core.reset_BANG_(frontend.components.block._STAR_resizing_image_QMARK_,true);
} else {
}

return cljs.core.reset_BANG_(size,value);
}),new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),(function (){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(size);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_);
} else {
return and__4251__auto__;
}
})())){
var temp__5720__auto___70446 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5720__auto___70446)){
var block_id_70447 = temp__5720__auto___70446;
var size_70448__$1 = cljs_bean.core.__GT_clj(cljs.core.deref(size));
frontend.handler.editor.resize_image_BANG_(block_id_70447,metadata,full_text,size_70448__$1);
} else {
}
} else {
}

if(cljs.core.truth_(cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_))){
return setTimeout((function (){
return cljs.core.reset_BANG_(frontend.components.block._STAR_resizing_image_QMARK_,false);
}),(200));
} else {
return null;
}
}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
if(cljs.core.truth_(cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_))){
return frontend.util.stop(e);
} else {
return null;
}
})], null);
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(frontend.util.mobile_QMARK_());
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69382,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(metadata)], null));
} else {
return G__69382;
}
})():cljs.core.PersistentArrayMap.EMPTY);
var G__69381 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.asset-container","div.asset-container",1221095823),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"resize-asset-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.rounded-sm.shadow-xl.relative","img.rounded-sm.shadow-xl.relative",1747413719),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loading","loading",-737050189),"lazy",new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"title","title",636505583),title], null),metadata], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ctl","span.ctl",489888085),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.delete","a.delete",-702827467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Delete this image",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
var confirm_fn = frontend.ui.make_confirm_modal(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","confirm-delete","asset/confirm-delete",-559860835),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("text","image","text/image",-63229909)], 0)).toLocaleLowerCase()], 0)),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),(cljs.core.truth_(local_QMARK_)?new cljs.core.Keyword("asset","physical-delete","asset/physical-delete",1598822051):""),new cljs.core.Keyword(null,"sub-checkbox?","sub-checkbox?",-671905753),local_QMARK_,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),(function (_e,p__69383){
var map__69384 = p__69383;
var map__69384__$1 = cljs.core.__destructure_map(map__69384);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69384__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var sub_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69384__$1,new cljs.core.Keyword(null,"sub-selected","sub-selected",-1251753428));
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

return frontend.handler.editor.delete_asset_of_block_BANG_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id,new cljs.core.Keyword(null,"local?","local?",-1422786101),local_QMARK_,new cljs.core.Keyword(null,"delete-local?","delete-local?",1716577572),cljs.core.first(sub_selected),new cljs.core.Keyword(null,"repo","repo",-1999060679),frontend.state.get_current_repo(),new cljs.core.Keyword(null,"href","href",-793805698),src,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"full-text","full-text",1432444182),full_text], null));
})], null));
frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(confirm_fn);

return frontend.util.stop(e);
} else {
return null;
}
})], null),frontend.components.svg.trash_sm], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.delete.ml-1","a.delete.ml-1",1634350830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"maximize image",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var images = document.querySelectorAll(".asset-container img");
var images__$1 = cljs.core.to_array(images);
var images__$2 = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((images__$1).length),(1)))))?(function (){var _image = e.target.closest(".asset-container");
var image = _image.querySelector("img");
return cljs.core.cons(image,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__69368_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(image,p1__69368_SHARP_);
}),images__$1));
})():images__$1);
var images__$3 = (function (){var iter__4652__auto__ = (function frontend$components$block$iter__69385(s__69386){
return (new cljs.core.LazySeq(null,(function (){
var s__69386__$1 = s__69386;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69386__$1);
if(temp__5720__auto__){
var s__69386__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69386__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__69386__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__69388 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__69387 = (0);
while(true){
if((i__69387 < size__4651__auto__)){
var it = cljs.core._nth(c__4650__auto__,i__69387);
cljs.core.chunk_append(b__69388,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),it.src,new cljs.core.Keyword(null,"w","w",354169001),it.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),it.naturalHeight], null));

var G__70449 = (i__69387 + (1));
i__69387 = G__70449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69388),frontend$components$block$iter__69385(cljs.core.chunk_rest(s__69386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69388),null);
}
} else {
var it = cljs.core.first(s__69386__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),it.src,new cljs.core.Keyword(null,"w","w",354169001),it.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),it.naturalHeight], null),frontend$components$block$iter__69385(cljs.core.rest(s__69386__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(images__$2);
})();
if(cljs.core.seq(images__$3)){
return frontend.extensions.lightbox.preview_images_BANG_(images__$3);
} else {
return null;
}
})], null),frontend.components.svg.maximize.cljs$core$IFn$_invoke$arity$0()], null)], null)], null);
return (frontend.ui.resize_consumer.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.resize_consumer.cljs$core$IFn$_invoke$arity$2(G__69380,G__69381) : frontend.ui.resize_consumer.call(null,G__69380,G__69381));
})();
return (frontend.ui.resize_provider.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.resize_provider.cljs$core$IFn$_invoke$arity$1(G__69379) : frontend.ui.resize_provider.call(null,G__69379));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.block","size","frontend.components.block/size",1026310526)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.components.block._STAR_resizing_image_QMARK_,false);

return state;
})], null)], null),"frontend.components.block/resizable-image");
frontend.components.block.audio_cp = rum.core.lazy_build(rum.core.build_defc,(function (src){
return daiquiri.core.create_element("audio",{'src':src,'controls':true},[]);
}),null,"frontend.components.block/audio-cp");
frontend.components.block.asset_link = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,title,href,metadata,full_text){
var src = new cljs.core.Keyword("frontend.components.block","src","frontend.components.block/src",807373780).cljs$core$IFn$_invoke$arity$1(state);
var granted_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nfs","user-granted?","nfs/user-granted?",-1655101253),frontend.state.get_current_repo()], null));
var href__$1 = frontend.config.get_local_asset_absolute_path(href);
if(cljs.core.truth_((function (){var or__4253__auto__ = granted_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return frontend.mobile.util.is_native_platform_QMARK_();
}
}
})())){
promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.make_asset_url(href__$1),(function (p1__69389_SHARP_){
return cljs.core.reset_BANG_(src,p1__69389_SHARP_);
}));
} else {
}

if(cljs.core.truth_(cljs.core.deref(src))){
var ext = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.get_file_ext(cljs.core.deref(src)));
var share_fn = (function (event){
frontend.util.stop(event);

if(cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2([frontend.config.get_repo_dir(frontend.state.get_current_repo()),href__$1].join(''),(function (url){
return promesa.protocols._promise(module$node_modules$$capacitor$share$dist$plugin_cjs.Share.share(({"url": url, "title": "Open file with your favorite app"})));
}));
}));
} else {
return null;
}
});
if(cljs.core.contains_QMARK_(frontend.config.audio_formats,ext)){
return frontend.components.block.audio_cp(cljs.core.deref(src));
} else {
if(cljs.core.contains_QMARK_(frontend.config.img_formats(),ext)){
return frontend.components.block.resizable_image(config,title,cljs.core.deref(src),metadata,full_text,true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext,new cljs.core.Keyword(null,"pdf","pdf",1586765132))){
return daiquiri.core.create_element("a",{'href':cljs.core.deref(src),'onClick':share_fn,'className':"asset-ref is-pdf"},[daiquiri.interpreter.interpret(title)]);
} else {
return daiquiri.core.create_element("a",{'ref':cljs.core.deref(src),'onClick':share_fn,'className':"asset-ref is-doc"},[daiquiri.interpreter.interpret(title)]);

}
}
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.block","src","frontend.components.block/src",807373780))], null),"frontend.components.block/asset-link");
frontend.components.block.ar_url__GT_http_url = (function frontend$components$block$ar_url__GT_http_url(href){
return clojure.string.replace(href,/^ar:\/\//,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.get_arweave_gateway()),"/"].join(''));
});
frontend.components.block.image_link = (function frontend$components$block$image_link(config,url,href,label,metadata,full_text){
var metadata__$1 = ((clojure.string.blank_QMARK_(metadata))?null:frontend.components.block.safe_read_string.cljs$core$IFn$_invoke$arity$2(metadata,false));
var title = cljs.core.second(cljs.core.first(label));
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),full_text], null),(cljs.core.truth_((function (){var and__4251__auto__ = logseq.graph_parser.config.local_asset_QMARK_(href);
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(frontend.state.get_current_repo());
} else {
return and__4251__auto__;
}
})())?frontend.components.block.asset_link(config,title,href,metadata__$1,full_text):(function (){var href__$1 = ((frontend.util.starts_with_QMARK_(href,"http"))?href:((frontend.util.starts_with_QMARK_(href,"ar"))?frontend.components.block.ar_url__GT_http_url(href):((frontend.config.publishing_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(href,(1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Embed_data",cljs.core.first(url)))?href:frontend.components.block.get_file_absolute_path(config,href)
))));
return frontend.components.block.resizable_image(config,title,href__$1,metadata__$1,full_text,false);
})()));
});
frontend.components.block.repetition_to_string = (function frontend$components$block$repetition_to_string(p__69390){
var vec__69391 = p__69390;
var vec__69394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69391,(0),null);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69394,(0),null);
var vec__69397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69391,(1),null);
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69397,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69391,(2),null);
var kind__$1 = (function (){var G__69400 = kind;
switch (G__69400) {
case "Dotted":
return ".";

break;
case "Plus":
return "+";

break;
case "DoublePlus":
return "++";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69400)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(duration)))].join('');
});
frontend.components.block.timestamp_to_string = (function frontend$components$block$timestamp_to_string(p__69401){
var map__69402 = p__69401;
var map__69402__$1 = cljs.core.__destructure_map(map__69402);
var _active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69402__$1,new cljs.core.Keyword(null,"_active","_active",2003964672));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69402__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69402__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69402__$1,new cljs.core.Keyword(null,"repetition","repetition",1938392115));
var wday = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69402__$1,new cljs.core.Keyword(null,"wday","wday",-543142502));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69402__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var map__69403 = date;
var map__69403__$1 = cljs.core.__destructure_map(map__69403);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69403__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69403__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69403__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var map__69404 = time;
var map__69404__$1 = cljs.core.__destructure_map(map__69404);
var hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69404__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69404__$1,new cljs.core.Keyword(null,"min","min",444991522));
var vec__69405 = (cljs.core.truth_(active)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",">"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null));
var open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69405,(0),null);
var close = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69405,(1),null);
var repetition__$1 = (cljs.core.truth_(repetition)?[" ",frontend.components.block.repetition_to_string(repetition)].join(''):"");
var hour__$1 = (cljs.core.truth_(hour)?frontend.util.zero_pad(hour):null);
var min__$1 = (cljs.core.truth_(min)?frontend.util.zero_pad(min):null);
var time__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = hour__$1;
if(cljs.core.truth_(and__4251__auto__)){
return min__$1;
} else {
return and__4251__auto__;
}
})())?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(" %s:%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hour__$1,min__$1], 0)):(cljs.core.truth_(hour__$1)?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(" %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hour__$1], 0)):""
));
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s%s-%s-%s %s%s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([open,cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),frontend.util.zero_pad(month),frontend.util.zero_pad(day),wday,time__$1,repetition__$1,close], 0));
});
frontend.components.block.timestamp = (function frontend$components$block$timestamp(p__69408,kind){
var map__69409 = p__69408;
var map__69409__$1 = cljs.core.__destructure_map(map__69409);
var t = map__69409__$1;
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69409__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var _date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69409__$1,new cljs.core.Keyword(null,"_date","_date",-937395064));
var _time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69409__$1,new cljs.core.Keyword(null,"_time","_time",-1976647311));
var _repetition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69409__$1,new cljs.core.Keyword(null,"_repetition","_repetition",922325838));
var _wday = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69409__$1,new cljs.core.Keyword(null,"_wday","_wday",-1455464025));
var prefix = (function (){var G__69410 = kind;
switch (G__69410) {
case "Scheduled":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-calendar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null)], null);

break;
case "Deadline":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-calendar-times-o",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null)], null);

break;
case "Date":
return null;

break;
case "Closed":
return null;

break;
case "Started":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fa fa-clock-o",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null)], null);

break;
case "Start":
return "From: ";

break;
case "Stop":
return "To: ";

break;
default:
return null;

}
})();
var class$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,"Closed"))?"line-through":null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.timestamp","span.timestamp",1207246744),(function (){var G__69411 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)], null);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69411,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
} else {
return G__69411;
}
})(),prefix,frontend.components.block.timestamp_to_string(t)], null);
});
frontend.components.block.range = (function frontend$components$block$range(p__69412,stopped_QMARK_){
var map__69413 = p__69412;
var map__69413__$1 = cljs.core.__destructure_map(map__69413);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69413__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69413__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"timestamp-range",new cljs.core.Keyword(null,"stopped","stopped",-1490414640),stopped_QMARK_], null),frontend.components.block.timestamp(start,"Start"),frontend.components.block.timestamp(stop,"Stop")], null);
});
/**
 * The inner div of page reference component
 * 
 * page-name-in-block is the overridable name of the page (legacy)
 * 
 * All page-names are sanitized except page-name-in-block
 */
frontend.components.block.page_inner = rum.core.lazy_build(rum.core.build_defc,(function (config,page_name_in_block,page_name,redirect_page_name,page_entity,contents_page_QMARK_,children,html_export_QMARK_,label){
var tag_QMARK_ = new cljs.core.Keyword(null,"tag?","tag?",1714008252).cljs$core$IFn$_invoke$arity$1(config);
return daiquiri.core.create_element("a",{'data-ref':page_name,'onMouseDown':(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
var temp__5720__auto___70452 = (function (){var G__69414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),redirect_page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__69414) : frontend.db.entity.call(null,G__69414));
})();
if(cljs.core.truth_(temp__5720__auto___70452)){
var page_entity_70453__$1 = temp__5720__auto___70452;
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity_70453__$1),new cljs.core.Keyword(null,"page","page",849072397));
} else {
}
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(redirect_page_name,page_name)){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(redirect_page_name);
} else {
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),page_name_in_block], null));

}
}

if(cljs.core.truth_((function (){var and__4251__auto__ = contents_page_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__4251__auto____$1)){
return frontend.state.get_left_sidebar_open_QMARK_();
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return frontend.handler.ui.close_left_sidebar_BANG_();
} else {
return null;
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(tag_QMARK_)?"tag":"page-ref")], null))},[((((cljs.core.coll_QMARK_(children)) && (cljs.core.seq(children))))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$block$iter__69415(s__69416){
return (new cljs.core.LazySeq(null,(function (){
var s__69416__$1 = s__69416;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69416__$1);
if(temp__5720__auto__){
var s__69416__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69416__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__69416__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__69418 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__69417 = (0);
while(true){
if((i__69417 < size__4651__auto__)){
var child = cljs.core._nth(c__4650__auto__,i__69417);
cljs.core.chunk_append(b__69418,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(child),"Label"))?daiquiri.interpreter.interpret(cljs.core.last(child)):(function (){var map__69419 = cljs.core.last(child);
var map__69419__$1 = cljs.core.__destructure_map(map__69419);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69419__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69419__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var page_name__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
return rum.core.with_key((function (){var G__69424 = html_export_QMARK_;
var G__69425 = page_name__$1;
var G__69426 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"children","children",-940561982),children__$1);
var G__69427 = null;
return (frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4 ? frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4(G__69424,G__69425,G__69426,G__69427) : frontend.components.block.page_reference.call(null,G__69424,G__69425,G__69426,G__69427));
})(),page_name__$1);
})()));

var G__70454 = (i__69417 + (1));
i__69417 = G__70454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69418),frontend$components$block$iter__69415(cljs.core.chunk_rest(s__69416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69418),null);
}
} else {
var child = cljs.core.first(s__69416__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(child),"Label"))?daiquiri.interpreter.interpret(cljs.core.last(child)):(function (){var map__69428 = cljs.core.last(child);
var map__69428__$1 = cljs.core.__destructure_map(map__69428);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69428__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var page_name__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
return rum.core.with_key((function (){var G__69433 = html_export_QMARK_;
var G__69434 = page_name__$1;
var G__69435 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"children","children",-940561982),children__$1);
var G__69436 = null;
return (frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4 ? frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4(G__69433,G__69434,G__69435,G__69436) : frontend.components.block.page_reference.call(null,G__69433,G__69434,G__69435,G__69436));
})(),page_name__$1);
})()),frontend$components$block$iter__69415(cljs.core.rest(s__69416__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(children);
})()):(cljs.core.truth_((function (){var and__4251__auto__ = label;
if(cljs.core.truth_(and__4251__auto__)){
return ((typeof label === 'string') && ((!(clojure.string.blank_QMARK_(label)))));
} else {
return and__4251__auto__;
}
})())?daiquiri.interpreter.interpret(label):((cljs.core.coll_QMARK_(label))?daiquiri.interpreter.interpret(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span","span",1394872991),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)))):(function (){var original_name = frontend.util.get_page_original_name(page_entity);
var s = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_page_name_sanity_lc(original_name),page_name_in_block))?page_name_in_block:original_name);
var _ = (cljs.core.truth_(page_entity)?null:console.warn("page-inner's page-entity is nil, given page-name: ",page_name," page-name-in-block: ",page_name_in_block));
if(cljs.core.truth_(tag_QMARK_)){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return daiquiri.interpreter.interpret(s);
}
})()
)))]);
}),null,"frontend.components.block/page-inner");
frontend.components.block.page_preview_trigger = rum.core.lazy_build(rum.core.build_defc,(function (p__69437,page_name){
var map__69438 = p__69437;
var map__69438__$1 = cljs.core.__destructure_map(map__69438);
var config = map__69438__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69438__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69438__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var tippy_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69438__$1,new cljs.core.Keyword(null,"tippy-position","tippy-position",765440303));
var tippy_distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69438__$1,new cljs.core.Keyword(null,"tippy-distance","tippy-distance",1779929100));
var fixed_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69438__$1,new cljs.core.Keyword(null,"fixed-position?","fixed-position?",-918460562));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69438__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var manual_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69438__$1,new cljs.core.Keyword(null,"manual?","manual?",1839586876));
var _STAR_tippy_ref = rum.core.create_ref();
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var redirect_page_name = (function (){var or__4253__auto__ = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2(page_name__$1,new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return page_name__$1;
}
})();
var page_original_name = frontend.db.model.get_page_original_name(redirect_page_name);
var _ = frontend.components.block.html_template = rum.core.lazy_build(rum.core.build_defc,(function (){
var _STAR_el_popup = rum.core.use_ref(null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var el_popup = rum.core.deref(_STAR_el_popup);
var cb = (function (e){
if(cljs.core.truth_(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return null;
} else {
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.which,(27));
if(and__4251__auto__){
var temp__5720__auto__ = rum.core.deref(_STAR_tippy_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var tp = temp__5720__auto__;
return tp.hideTooltip();
} else {
return null;
}
} else {
return and__4251__auto__;
}
}
});
setTimeout((function (){
return el_popup.focus();
}));

el_popup.addEventListener("keyup",cb);

return (function (){
return el_popup.removeEventListener("keyup",cb);
});
}),cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(redirect_page_name)){
return daiquiri.core.create_element("div",{'ref':_STAR_el_popup,'tabIndex':(-1),'style':{'width':(600),'textAlign':"left",'fontWeight':(500),'maxHeight':(600),'paddingBottom':(64)},'className':"tippy-wrapper overflow-y-auto p-4 outline-none"},[((((typeof page_original_name === 'string') && (clojure.string.includes_QMARK_(page_original_name,"/"))))?(function (){var attrs69466 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-2.opacity-30","span.mx-2.opacity-30",541053943),"/"], null),(function (){var iter__4652__auto__ = (function frontend$components$block$iter__69468(s__69469){
return (new cljs.core.LazySeq(null,(function (){
var s__69469__$1 = s__69469;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69469__$1);
if(temp__5720__auto__){
var s__69469__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69469__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__69469__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__69471 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__69470 = (0);
while(true){
if((i__69470 < size__4651__auto__)){
var page = cljs.core._nth(c__4650__auto__,i__69470);
cljs.core.chunk_append(b__69471,(cljs.core.truth_((function (){var and__4251__auto__ = typeof page === 'string';
if(and__4251__auto__){
return page;
} else {
return and__4251__auto__;
}
})())?(function (){var G__69473 = false;
var G__69474 = page;
var G__69475 = cljs.core.PersistentArrayMap.EMPTY;
var G__69476 = null;
return (frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4 ? frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4(G__69473,G__69474,G__69475,G__69476) : frontend.components.block.page_reference.call(null,G__69473,G__69474,G__69475,G__69476));
})():null));

var G__70455 = (i__69470 + (1));
i__69470 = G__70455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69471),frontend$components$block$iter__69468(cljs.core.chunk_rest(s__69469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69471),null);
}
} else {
var page = cljs.core.first(s__69469__$2);
return cljs.core.cons((cljs.core.truth_((function (){var and__4251__auto__ = typeof page === 'string';
if(and__4251__auto__){
return page;
} else {
return and__4251__auto__;
}
})())?(function (){var G__69477 = false;
var G__69478 = page;
var G__69479 = cljs.core.PersistentArrayMap.EMPTY;
var G__69480 = null;
return (frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4 ? frontend.components.block.page_reference.cljs$core$IFn$_invoke$arity$4(G__69477,G__69478,G__69479,G__69480) : frontend.components.block.page_reference.call(null,G__69477,G__69478,G__69479,G__69480));
})():null),frontend$components$block$iter__69468(cljs.core.rest(s__69469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(clojure.string.split.cljs$core$IFn$_invoke$arity$2(page_original_name,/\//));
})());
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs69466))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["my-2"], null)], null),attrs69466], 0))):{'className':"my-2"}),((cljs.core.map_QMARK_(attrs69466))?null:[daiquiri.interpreter.interpret(attrs69466)]));
})():(function (){var attrs69467 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name__$1,redirect_page_name))?page_original_name:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.mr-2","span.text-sm.mr-2",231096639),"Alias:"], null),page_original_name], null));
return daiquiri.core.create_element("h2",((cljs.core.map_QMARK_(attrs69467))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-bold","text-lg"], null)], null),attrs69467], 0))):{'className':"font-bold text-lg"}),((cljs.core.map_QMARK_(attrs69467))?null:[daiquiri.interpreter.interpret(attrs69467)]));
})()),(function (){var page = (function (){var G__69482 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(redirect_page_name) : frontend.util.page_name_sanity_lc.call(null,redirect_page_name))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__69482) : frontend.db.entity.call(null,G__69482));
})();
frontend.handler.editor.insert_first_page_block_if_not_exists_BANG_.cljs$core$IFn$_invoke$arity$2(redirect_page_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false], null));

return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.state.get_page_blocks_cp();
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
var G__69490 = frontend.state.get_current_repo();
var G__69491 = page;
var G__69492 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),sidebar_QMARK_,new cljs.core.Keyword(null,"preview?","preview?",590561578),true], null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__69490,G__69491,G__69492) : f.call(null,G__69490,G__69491,G__69492));
} else {
return null;
}
})());
})()]);
} else {
return null;
}
}),null,"frontend.components.block/html-template");
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(manual_QMARK_);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return open_QMARK_;
}
})())){
return frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_tippy_ref,new cljs.core.Keyword(null,"html","html",-998796897),frontend.components.block.html_template,new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null),new cljs.core.Keyword(null,"fixed-position?","fixed-position?",-918460562),fixed_position_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__4253__auto__ = tippy_position;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "top";
}
})(),new cljs.core.Keyword(null,"distance","distance",-1671893894),(function (){var or__4253__auto__ = tippy_distance;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})(),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preventOverflow","preventOverflow",276572465),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"boundariesElement","boundariesElement",-501812857),"viewport"], null)], null)], null)], null),children);
} else {
return daiquiri.interpreter.interpret(children);
}
}),null,"frontend.components.block/page-preview-trigger");
/**
 * Accepts {:block/name sanitized / unsanitized page-name}
 */
frontend.components.block.page_cp = rum.core.lazy_build(rum.core.build_defc,(function (p__69499,page){
var map__69500 = p__69499;
var map__69500__$1 = cljs.core.__destructure_map(map__69500);
var config = map__69500__$1;
var html_export_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69500__$1,new cljs.core.Keyword(null,"html-export?","html-export?",504770426));
var redirect_page_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69500__$1,new cljs.core.Keyword(null,"redirect-page-name","redirect-page-name",906009314));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69500__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var contents_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69500__$1,new cljs.core.Keyword(null,"contents-page?","contents-page?",2137383699));
var preview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69500__$1,new cljs.core.Keyword(null,"preview?","preview?",590561578));
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5720__auto__)){
var page_name_in_block = temp__5720__auto__;
var page_name_in_block__$1 = logseq.graph_parser.util.remove_boundary_slashes(page_name_in_block);
var page_name = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name_in_block__$1) : frontend.util.page_name_sanity_lc.call(null,page_name_in_block__$1));
var page_entity = (function (){var G__69503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__69503) : frontend.db.entity.call(null,G__69503));
})();
var redirect_page_name__$1 = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
if(and__4251__auto__){
var and__4251__auto____$1 = new cljs.core.Keyword("org-mode","insert-file-link?","org-mode/insert-file-link?",-1472433842).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(and__4251__auto____$1)){
return redirect_page_name;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(config));
}
})();
var inner = frontend.components.block.page_inner(config,page_name_in_block__$1,page_name,redirect_page_name__$1,page_entity,contents_page_QMARK_,children,html_export_QMARK_,label);
if(cljs.core.truth_(new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363).cljs$core$IFn$_invoke$arity$1(config))){
var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
}
} else {
if(((cljs.core.not(frontend.util.mobile_QMARK_())) && (cljs.core.not(preview_QMARK_)))){
return frontend.components.block.page_preview_trigger(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"children","children",-940561982),inner),page_name);
} else {
return inner;

}
}
} else {
return null;
}
})());
}),null,"frontend.components.block/page-cp");
frontend.components.block.asset_reference = rum.core.lazy_build(rum.core.build_defc,(function (config,title,path){
var repo_path = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var full_path = (cljs.core.truth_(frontend.util.absolute_path_QMARK_(path))?path:frontend.util.node_path.join(repo_path,frontend.config.get_local_asset_absolute_path(path)));
var ext_name = frontend.util.get_file_ext(full_path);
var title_or_path = ((typeof title === 'string')?title:((cljs.core.seq(title))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span","span",1394872991),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,title) : frontend.components.block.map_inline.call(null,config,title))):path
));
return daiquiri.core.create_element("div",{'data-ext':ext_name,'className':"asset-ref-wrap"},[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pdf",ext_name))?daiquiri.core.create_element("a",{'onMouseDown':(function (e){
var temp__5720__auto__ = frontend.extensions.pdf.assets.inflate_asset(full_path);
if(cljs.core.truth_(temp__5720__auto__)){
var current = temp__5720__auto__;
frontend.util.stop(e);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),current);
} else {
return null;
}
}),'className':"asset-ref is-pdf"},[daiquiri.interpreter.interpret(title_or_path)]):daiquiri.core.create_element("a",{'target':"_blank",'href':full_path,'className':"asset-ref"},[daiquiri.interpreter.interpret(title_or_path)])),(function (){var G__69508 = ext_name;
switch (G__69508) {
case "mp4":
case "ogg":
case "webm":
case "mov":
return daiquiri.core.create_element("video",{'src':full_path,'controls':true},[]);

break;
default:
return null;

}
})()]);
}),null,"frontend.components.block/asset-reference");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.block !== 'undefined') && (typeof frontend.components.block.excalidraw_loaded_QMARK_ !== 'undefined')){
} else {
frontend.components.block.excalidraw_loaded_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.block.excalidraw = rum.core.lazy_build(rum.core.build_defc,(function (file,block_uuid){
var loaded_QMARK_ = rum.core.react(frontend.components.block.excalidraw_loaded_QMARK_);
var draw_component = (cljs.core.truth_(loaded_QMARK_)?(((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.excalidraw !== 'undefined') && (typeof frontend.extensions.excalidraw.draw !== 'undefined'))?(new cljs.core.Var((function (){
return frontend.extensions.excalidraw.draw;
}),cljs.core.with_meta(new cljs.core.Symbol("frontend.extensions.excalidraw","draw","frontend.extensions.excalidraw/draw",-213308303,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null):null);
if(cljs.core.truth_(draw_component)){
return daiquiri.interpreter.interpret((function (){var G__69557 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_uuid], null);
return (draw_component.cljs$core$IFn$_invoke$arity$1 ? draw_component.cljs$core$IFn$_invoke$arity$1(G__69557) : draw_component.call(null,G__69557));
})());
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.components.block.goog$module$shadow$loader.load(new cljs.core.Keyword(null,"excalidraw","excalidraw",-397772502)),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(frontend.components.block.excalidraw_loaded_QMARK_,true));
}));
}));

return state;
})], null)], null),"frontend.components.block/excalidraw");
frontend.components.block.page_reference = rum.core.lazy_build(rum.core.build_defc,(function (html_export_QMARK_,s,config,label){
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
var nested_link_QMARK_ = new cljs.core.Keyword(null,"nested-link?","nested-link?",637882262).cljs$core$IFn$_invoke$arity$1(config);
var contents_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("contents",clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config))));
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(clojure.string.ends_with_QMARK_(s,".excalidraw")){
return daiquiri.core.create_element("div",{'onClick':(function (e){
return e.stopPropagation();
}),'className':"draw"},[frontend.components.block.excalidraw(s,block_uuid)]);
} else {
return daiquiri.core.create_element("span",{'data-ref':s,'className':"page-reference"},[(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = show_brackets_QMARK_;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return nested_link_QMARK_;
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not(html_export_QMARK_)) && ((!(contents_page_QMARK_))));
} else {
return and__4251__auto__;
}
})())?daiquiri.core.create_element("span",{'className':"text-gray-500 bracket"},["[["]):null),(function (){var s__$1 = clojure.string.trim(s);
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"label","label",1718410804),frontend.format.mldoc.plain__GT_text(label),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"contents-page?","contents-page?",2137383699),contents_page_QMARK_], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),s__$1], null));
})(),(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = show_brackets_QMARK_;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return nested_link_QMARK_;
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not(html_export_QMARK_)) && ((!(contents_page_QMARK_))));
} else {
return and__4251__auto__;
}
})())?daiquiri.core.create_element("span",{'className':"text-gray-500 bracket"},["]]"]):null)]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/page-reference");
frontend.components.block.latex_environment_content = (function frontend$components$block$latex_environment_content(name,option,content){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(name),"equation")){
return content;
} else {
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("\\begin%s\n%s\\end{%s}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"}",cljs.core.str.cljs$core$IFn$_invoke$arity$1(option)].join(''),content,name], 0));
}
});
frontend.components.block.edit_parent_block = (function frontend$components$block$edit_parent_block(e,config){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
return null;
} else {
e.stopPropagation();

return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config));
}
});
frontend.components.block.block_embed = rum.core.lazy_build(rum.core.build_defc,(function (config,uuid){
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = (function (){var G__69631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__69631) : frontend.db.entity.call(null,G__69631));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
var blocks = (function (){var G__69633 = frontend.state.get_current_repo();
var G__69634 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var G__69635 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(G__69633,G__69634,G__69635) : frontend.db.get_paginated_blocks.call(null,G__69633,G__69634,G__69635));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-level.embed-block.bg-base-2","div.color-level.embed-block.bg-base-2",1638223737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2)], null),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (p1__69616_SHARP_){
return frontend.components.block.edit_parent_block(p1__69616_SHARP_,config);
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return e.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-3.pt-1.pb-2","div.px-3.pt-1.pb-2",1111501289),(function (){var G__69636 = blocks;
var G__69637 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"embed-id","embed-id",717000009),uuid,new cljs.core.Keyword(null,"embed?","embed?",-922305920),true,new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354),new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"ref?","ref?",1932693720),false], 0));
return (frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2(G__69636,G__69637) : frontend.components.block.blocks_container.call(null,G__69636,G__69637));
})()], null)], null);
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.block/block-embed");
frontend.components.block.page_embed = rum.core.lazy_build(rum.core.build_defc,(function (config,page_name){
var page_name__$1 = (function (){var G__69647 = clojure.string.trim(page_name);
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__69647) : frontend.util.page_name_sanity_lc.call(null,G__69647));
})();
var current_page = frontend.state.get_current_page();
return daiquiri.core.create_element("div",{'onDoubleClick':(function (p1__69645_SHARP_){
return frontend.components.block.edit_parent_block(p1__69645_SHARP_,config);
}),'onMouseDown':(function (p1__69646_SHARP_){
return p1__69646_SHARP_.stopPropagation();
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["color-level","embed","embed-page","bg-base-2",(cljs.core.truth_(new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(config))?"in-sidebar":null)], null))},[daiquiri.core.create_element("section",{'className':"flex items-center p-1 embed-header"},[(function (){var attrs69652 = frontend.components.svg.page;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs69652))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mr-3"], null)], null),attrs69652], 0))):{'className':"mr-3"}),((cljs.core.map_QMARK_(attrs69652))?null:[daiquiri.interpreter.interpret(attrs69652)]));
})(),frontend.components.block.page_cp(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null))]),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__69654 = (function (){var or__4253__auto__ = current_page;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__69654) : frontend.util.page_name_sanity_lc.call(null,G__69654));
})(),page_name__$1)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__69655 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"id","id",-1388402092),"");
return (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(G__69655) : frontend.util.page_name_sanity_lc.call(null,G__69655));
})(),page_name__$1))))?(function (){var page = frontend.db.model.get_page(page_name__$1);
var blocks = (function (){var G__69656 = frontend.state.get_current_repo();
var G__69657 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$2(G__69656,G__69657) : frontend.db.get_paginated_blocks.call(null,G__69656,G__69657));
})();
return daiquiri.interpreter.interpret((function (){var G__69663 = blocks;
var G__69664 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),page_name__$1,new cljs.core.Keyword(null,"embed?","embed?",-922305920),true,new cljs.core.Keyword(null,"page-embed?","page-embed?",-1714518279),true,new cljs.core.Keyword(null,"ref?","ref?",1932693720),false], 0));
return (frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2(G__69663,G__69664) : frontend.components.block.blocks_container.call(null,G__69663,G__69664));
})());
})():null)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.block/page-embed");
frontend.components.block.get_label_text = (function frontend$components$block$get_label_text(label){
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(label));
if(and__4251__auto__){
var label__$1 = cljs.core.first(label);
typeof cljs.core.last(label__$1) === 'string';

return decodeURIComponent(cljs.core.last(label__$1));
} else {
return and__4251__auto__;
}
});
frontend.components.block.get_page = (function frontend$components$block$get_page(label){
var temp__5720__auto__ = frontend.components.block.get_label_text(label);
if(cljs.core.truth_(temp__5720__auto__)){
var label_text = temp__5720__auto__;
var G__69691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(label_text) : frontend.util.page_name_sanity_lc.call(null,label_text))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__69691) : frontend.db.entity.call(null,G__69691));
} else {
return null;
}
});
frontend.components.block.macro__GT_text = (function frontend$components$block$macro__GT_text(name,arguments$){
if(((cljs.core.seq(arguments$)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arguments$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["null"], null))))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{{%s %s}}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$)], 0));
} else {
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{{%s}}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
}
});
frontend.components.block.block_reference = rum.core.lazy_build(rum.core.build_defc,(function (config,id,label){
if(cljs.core.truth_((function (){var and__4251__auto__ = (!(clojure.string.blank_QMARK_(id)));
if(and__4251__auto__){
return frontend.util.uuid_string_QMARK_(id);
} else {
return and__4251__auto__;
}
})())){
var block_id = cljs.core.uuid(id);
var block = (frontend.db.pull_block.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull_block.cljs$core$IFn$_invoke$arity$1(block_id) : frontend.db.pull_block.call(null,block_id));
var block_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"ls-type","ls-type",1383834313)], null)));
var hl_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"hl-type","hl-type",992471876)], null));
var repo = frontend.state.get_current_repo();
if(cljs.core.truth_((function (){var and__4251__auto__ = block;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
} else {
return and__4251__auto__;
}
})())){
var title = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-ref"], null),(function (){var G__69701 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853),true);
var G__69702 = block;
var G__69703 = null;
var G__69704 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
var G__69705 = new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config);
return (frontend.components.block.block_content.cljs$core$IFn$_invoke$arity$5 ? frontend.components.block.block_content.cljs$core$IFn$_invoke$arity$5(G__69701,G__69702,G__69703,G__69704,G__69705) : frontend.components.block.block_content.call(null,G__69701,G__69702,G__69703,G__69704,G__69705));
})()], null);
var inner = (cljs.core.truth_(label)?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span.block-ref","span.block-ref",1894783192),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label))):title);
return daiquiri.core.create_element("div",{'data-type':cljs.core.name((function (){var or__4253__auto__ = block_type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})()),'data-hl-type':hl_type,'onMouseDown':(function (e){
if(frontend.util.right_click_QMARK_(e)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("block-ref","context","block-ref/context",-2102048446),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"block-ref","block-ref",362929756),block_id], null));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = frontend.components.block.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not(e.target.closest(".blank"));
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return (!(frontend.util.right_click_QMARK_(e)));
} else {
return and__4251__auto__;
}
})())){
frontend.util.stop(e);

if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
} else {
var block_type__$1 = block_type;
var ocr_69708 = frontend.util.electron_QMARK_();
try{if(cljs.core.keyword_identical_QMARK_(block_type__$1,new cljs.core.Keyword(null,"annotation","annotation",-344661666))){
try{if((ocr_69708 === true)){
return frontend.extensions.pdf.assets.open_block_ref_BANG_(block);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69721){if((e69721 instanceof Error)){
var e__58854__auto__ = e69721;
if((e__58854__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto__;
}
} else {
throw e69721;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69711){if((e69711 instanceof Error)){
var e__58854__auto__ = e69711;
if((e__58854__auto__ === cljs.core.match.backtrack)){
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(id);
} else {
throw e__58854__auto__;
}
} else {
throw e69711;

}
}}
} else {
return null;
}
}
}),'className':"block-ref-wrap inline"},[((((cljs.core.not(frontend.util.mobile_QMARK_())) && (((cljs.core.not(new cljs.core.Keyword(null,"preview?","preview?",590561578).cljs$core$IFn$_invoke$arity$1(config))) && ((block_type == null))))))?frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tippy-wrapper.overflow-y-auto.p-4","div.tippy-wrapper.overflow-y-auto.p-4",-831405813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(735),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"max-height","max-height",-612563804),(600)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69742 = config;
var G__69743 = repo;
var G__69744 = block_id;
var G__69745 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),true], null);
return (frontend.components.block.breadcrumb.cljs$core$IFn$_invoke$arity$4 ? frontend.components.block.breadcrumb.cljs$core$IFn$_invoke$arity$4(G__69742,G__69743,G__69744,G__69745) : frontend.components.block.breadcrumb.call(null,G__69742,G__69743,G__69744,G__69745));
})(),(function (){var G__69746 = (frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_and_children.cljs$core$IFn$_invoke$arity$2(repo,block_id) : frontend.db.get_block_and_children.call(null,repo,block_id));
var G__69747 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preview?","preview?",590561578),true], 0));
return (frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.blocks_container.cljs$core$IFn$_invoke$arity$2(G__69746,G__69747) : frontend.components.block.blocks_container.call(null,G__69746,G__69747));
})()], null)], null);
}),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null)], null),inner):daiquiri.interpreter.interpret(inner))]);
} else {
return daiquiri.core.create_element("span",{'title':"Block ref invalid",'className':"warning mr-1"},[daiquiri.interpreter.interpret(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("((%s))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)))]);
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.block/block-reference");
frontend.components.block.inline_text = (function frontend$components$block$inline_text(var_args){
var G__69749 = arguments.length;
switch (G__69749) {
case 2:
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2 = (function (format,v){
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,format,v);
}));

(frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3 = (function (config,format,v){
if(typeof v === 'string'){
var inline_list = logseq.graph_parser.mldoc.inline__GT_edn(v,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline.mr-1","div.inline.mr-1",1595393315),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,inline_list) : frontend.components.block.map_inline.call(null,config,inline_list))], null);
} else {
return null;
}
}));

(frontend.components.block.inline_text.cljs$lang$maxFixedArity = 3);

frontend.components.block.render_macro = (function frontend$components$block$render_macro(config,name,arguments$,macro_content,format){
if(cljs.core.truth_(macro_content)){
var ast = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,frontend.format.mldoc.__GT_edn(macro_content,logseq.graph_parser.mldoc.default_config.cljs$core$IFn$_invoke$arity$1(format)));
var paragraph_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ast))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Paragraph",cljs.core.ffirst(ast))));
if((((!(paragraph_QMARK_))) && (frontend.format.mldoc.block_with_title_QMARK_(cljs.core.ffirst(ast))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__69755 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","format","block/format",-1212045901),format);
var G__69756 = ast;
return (frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(G__69755,G__69756) : frontend.components.block.markup_elements_cp.call(null,G__69755,G__69756));
})()], null);
} else {
return frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2(format,macro_content);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),["Unsupported macro name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),frontend.components.block.macro__GT_text(name,arguments$)], null);
}
});
frontend.components.block.nested_link = rum.core.lazy_build(rum.core.build_defc,(function (config,html_export_QMARK_,link){
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
var map__69780 = link;
var map__69780__$1 = cljs.core.__destructure_map(map__69780);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69780__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs69766 = ((((show_brackets_QMARK_) && (((cljs.core.not(html_export_QMARK_)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),"contents"))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500","span.text-gray-500",811795480),"[["], null):null);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs69766))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page-reference","nested"], null)], null),attrs69766], 0))):{'className':"page-reference nested"}),((cljs.core.map_QMARK_(attrs69766))?[(function (){var page_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"children","children",-940561982),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-link?","nested-link?",637882262),true], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
})(),((((show_brackets_QMARK_) && (((cljs.core.not(html_export_QMARK_)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),"contents"))))))))?daiquiri.core.create_element("span",{'className':"text-gray-500"},["]]"]):null)]:[daiquiri.interpreter.interpret(attrs69766),(function (){var page_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(content,(2),(cljs.core.count(content) - (2)));
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"children","children",-940561982),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-link?","nested-link?",637882262),true], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name], null));
})(),((((show_brackets_QMARK_) && (((cljs.core.not(html_export_QMARK_)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),"contents"))))))))?daiquiri.core.create_element("span",{'className':"text-gray-500"},["]]"]):null)]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/nested-link");
frontend.components.block.show_link_QMARK_ = (function frontend$components$block$show_link_QMARK_(config,metadata,s,full_text){
var media_formats = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,frontend.config.media_formats));
var metadata_show = new cljs.core.Keyword(null,"show","show",-576705889).cljs$core$IFn$_invoke$arity$1(frontend.components.block.safe_read_string.cljs$core$IFn$_invoke$arity$1(metadata));
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null));
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"org","org",1495985),format);
if(and__4251__auto__){
var or__4253__auto__ = (function (){var and__4251__auto____$1 = (metadata_show == null);
if(and__4251__auto____$1){
var or__4253__auto__ = logseq.graph_parser.config.local_asset_QMARK_(s);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return logseq.graph_parser.text.media_link_QMARK_(media_formats,s);
}
} else {
return and__4251__auto____$1;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.boolean$(metadata_show) === true;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = clojure.string.starts_with_QMARK_(clojure.string.triml(full_text),"!");
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto__ = ((clojure.string.starts_with_QMARK_(full_text,"http://")) || (clojure.string.starts_with_QMARK_(full_text,"https://")));
if(and__4251__auto__){
return logseq.graph_parser.text.media_link_QMARK_(media_formats,s);
} else {
return and__4251__auto__;
}
}
}
});
frontend.components.block.relative_assets_path__GT_absolute_path = (function frontend$components$block$relative_assets_path__GT_absolute_path(path){
if(cljs.core.truth_(frontend.util.absolute_path_QMARK_(path))){
return path;
} else {
return frontend.util.node_path.join(frontend.config.get_repo_dir(frontend.state.get_current_repo()),frontend.config.get_local_asset_absolute_path(path));
}
});
frontend.components.block.audio_link = rum.core.lazy_build(rum.core.build_defc,(function (config,url,href,_label,metadata,full_text){
if(cljs.core.truth_((function (){var and__4251__auto__ = logseq.graph_parser.config.local_asset_QMARK_(href);
if(cljs.core.truth_(and__4251__auto__)){
return frontend.config.local_db_QMARK_(frontend.state.get_current_repo());
} else {
return and__4251__auto__;
}
})())){
return frontend.components.block.asset_link(config,null,href,metadata,full_text);
} else {
var href__$1 = ((frontend.util.starts_with_QMARK_(href,"http"))?href:((frontend.util.starts_with_QMARK_(href,"ar"))?frontend.components.block.ar_url__GT_http_url(href):((frontend.config.publishing_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(href,(1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Embed_data",cljs.core.first(url)))?href:frontend.components.block.get_file_absolute_path(config,href)
))));
return frontend.components.block.audio_cp(href__$1);
}
}),null,"frontend.components.block/audio-link");
frontend.components.block.media_link = (function frontend$components$block$media_link(config,url,s,label,metadata,full_text){
var ext = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.get_file_ext(s));
var label_text = frontend.components.block.get_label_text(label);
if(cljs.core.contains_QMARK_(frontend.config.audio_formats,ext)){
return frontend.components.block.audio_link(config,url,s,label,metadata,full_text);
} else {
if(cljs.core.contains_QMARK_(frontend.config.doc_formats(),ext)){
return frontend.components.block.asset_link(config,label_text,s,metadata,full_text);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext,new cljs.core.Keyword(null,"pdf","pdf",1586765132))){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.asset-ref.is-pdf","a.asset-ref.is-pdf",-297856376),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:void(0);",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (_event){
var temp__5720__auto__ = frontend.extensions.pdf.assets.inflate_asset(s);
if(cljs.core.truth_(temp__5720__auto__)){
var current = temp__5720__auto__;
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),current);
} else {
return null;
}
})], null),label_text], null);
} else {
if(cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())){
return frontend.components.block.asset_link(config,label_text,s,metadata,full_text);
} else {
return null;
}
}
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"webm","webm",-1239807004),null,new cljs.core.Keyword(null,"mp4","mp4",1038217575),null,new cljs.core.Keyword(null,"mov","mov",605355799),null], null), null),ext)))){
return frontend.components.block.image_link(config,url,s,label,metadata,full_text);
} else {
return frontend.components.block.asset_reference(config,label,s);

}
}
}
}
});
frontend.components.block.search_link_cp = (function frontend$components$block$search_link_cp(config,url,s,label,title,metadata,full_text){
if(clojure.string.blank_QMARK_(s)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Invalid link"], null),full_text], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(s))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_((function (){var G__69803 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1));
return (frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1(G__69803) : frontend.format.mldoc.anchorLink.call(null,G__69803));
})());
})], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.first(s))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.last(s))))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_((function (){var G__69804 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1));
return (frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1 ? frontend.format.mldoc.anchorLink.cljs$core$IFn$_invoke$arity$1(G__69804) : frontend.format.mldoc.anchorLink.call(null,G__69804));
})());
})], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
if(logseq.graph_parser.text.block_ref_QMARK_(s)){
var id = logseq.graph_parser.text.get_block_ref(s);
return frontend.components.block.block_reference(config,id,label);
} else {
if((!(clojure.string.includes_QMARK_(s,".")))){
return frontend.components.block.page_reference(new cljs.core.Keyword(null,"html-export?","html-export?",504770426).cljs$core$IFn$_invoke$arity$1(config),s,config,label);
} else {
if(cljs.core.truth_(logseq.graph_parser.util.url_QMARK_(s))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),s,new cljs.core.Keyword(null,"data-href","data-href",299087184),s,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));
} else {
if(cljs.core.truth_(frontend.components.block.show_link_QMARK_(config,metadata,s,full_text))){
return frontend.components.block.media_link(config,url,s,label,metadata,full_text);
} else {
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var path = ((clojure.string.starts_with_QMARK_(s,"file://"))?clojure.string.replace(s,"file://",""):((clojure.string.starts_with_QMARK_(s,"/"))?s:frontend.components.block.relative_assets_path__GT_absolute_path(s)
));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),(function (){var G__69806 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),new cljs.core.Keyword(null,"data-href","data-href",299087184),path,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69806,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__69806;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));
} else {
return frontend.components.block.page_reference(new cljs.core.Keyword(null,"html-export?","html-export?",504770426).cljs$core$IFn$_invoke$arity$1(config),s,config,label);

}
}
}
}
}
}
}
}
});
frontend.components.block.link_cp = (function frontend$components$block$link_cp(config,html_export_QMARK_,link){
var map__69810 = link;
var map__69810__$1 = cljs.core.__destructure_map(map__69810);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69810__$1,new cljs.core.Keyword(null,"url","url",276297046));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69810__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69810__$1,new cljs.core.Keyword(null,"title","title",636505583));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69810__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var full_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69810__$1,new cljs.core.Keyword(null,"full_text","full_text",1634289075));
try{if(((cljs.core.vector_QMARK_(url)) && ((cljs.core.count(url) === 2)))){
try{var url_0__69812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__69812 === "Block_ref")){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
var label_STAR_ = ((cljs.core.seq(frontend.format.mldoc.plain__GT_text(label)))?label:null);
var map__69828 = config;
var map__69828__$1 = cljs.core.__destructure_map(map__69828);
var link_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69828__$1,new cljs.core.Keyword(null,"link-depth","link-depth",-293752026));
var link_depth__$1 = (function (){var or__4253__auto__ = link_depth;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})();
if((link_depth__$1 > frontend.components.block.max_depth_of_links)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning.text-sm","p.warning.text-sm",37937796),"Block ref nesting is too deep"], null);
} else {
return frontend.components.block.block_reference(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"reference?","reference?",983881698),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"link-depth","link-depth",-293752026),(link_depth__$1 + (1)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], 0)),id,label_STAR_);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e69824){if((e69824 instanceof Error)){
var e__58854__auto__ = e69824;
if((e__58854__auto__ === cljs.core.match.backtrack)){
try{var url_0__69812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__69812 === "Page_ref")){
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"org","org",1495985));
if(and__4251__auto__){
var and__4251__auto____$1 = frontend.components.block.show_link_QMARK_(config,null,page,page);
if(cljs.core.truth_(and__4251__auto____$1)){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["mp4",null,"webm",null,"ogg",null,"pdf",null], null), null),frontend.util.get_file_ext(page))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return frontend.components.block.image_link(config,url,page,null,metadata,full_text);
} else {
var label_STAR_ = ((cljs.core.seq(frontend.format.mldoc.plain__GT_text(label)))?label:null);
if(((typeof page === 'string') && (clojure.string.blank_QMARK_(page)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page], 0))], null);
} else {
return frontend.components.block.page_reference(new cljs.core.Keyword(null,"html-export?","html-export?",504770426).cljs$core$IFn$_invoke$arity$1(config),page,config,label_STAR_);
}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e69825){if((e69825 instanceof Error)){
var e__58854__auto____$1 = e69825;
if((e__58854__auto____$1 === cljs.core.match.backtrack)){
try{var url_0__69812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__69812 === "Embed_data")){
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
return frontend.components.block.image_link(config,url,src,null,metadata,full_text);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69826){if((e69826 instanceof Error)){
var e__58854__auto____$2 = e69826;
if((e__58854__auto____$2 === cljs.core.match.backtrack)){
try{var url_0__69812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(0));
if((url_0__69812 === "Search")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(url,(1));
return frontend.components.block.search_link_cp(config,url,s,label,title,metadata,full_text);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69827){if((e69827 instanceof Error)){
var e__58854__auto____$3 = e69827;
if((e__58854__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$3;
}
} else {
throw e69827;

}
}} else {
throw e__58854__auto____$2;
}
} else {
throw e69826;

}
}} else {
throw e__58854__auto____$1;
}
} else {
throw e69825;

}
}} else {
throw e__58854__auto__;
}
} else {
throw e69824;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69814){if((e69814 instanceof Error)){
var e__58854__auto__ = e69814;
if((e__58854__auto__ === cljs.core.match.backtrack)){
var href = frontend.components.block.string_of_url(url);
var vec__69815 = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Complex",cljs.core.first(url));
if(and__4251__auto__){
return url;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("File",cljs.core.first(url));
if(and__4251__auto__){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["file",cljs.core.second(url)], null);
} else {
return and__4251__auto__;
}
}
})();
var protocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69815,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69815,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null)),new cljs.core.Keyword(null,"org","org",1495985));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Complex",protocol);
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(path)),"id");
if(and__4251__auto____$2){
var and__4251__auto____$3 = typeof new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(path) === 'string';
if(and__4251__auto____$3){
return frontend.util.uuid_string_QMARK_(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(path));
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var id = cljs.core.uuid(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(path));
var block = (function (){var G__69818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__69818) : frontend.db.entity.call(null,G__69818));
})();
if(cljs.core.truth_(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block))){
var page = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block);
return frontend.components.block.page_reference(html_export_QMARK_,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page),config,label);
} else {
return frontend.components.block.block_reference(config,new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(path),label);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"file")){
if(cljs.core.truth_(frontend.components.block.show_link_QMARK_(config,metadata,href,full_text))){
return frontend.components.block.media_link(config,url,href,label,metadata,full_text);
} else {
var redirect_page_name = ((typeof path === 'string')?logseq.graph_parser.text.get_page_name(path):null);
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"redirect-page-name","redirect-page-name",906009314),redirect_page_name);
var label_text = frontend.components.block.get_label_text(label);
var page = ((clojure.string.blank_QMARK_(label_text))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var G__69819 = clojure.string.replace(href,"file:","");
var G__69820 = false;
return (frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$2(G__69819,G__69820) : frontend.db.get_file_page.call(null,G__69819,G__69820));
})()], null):frontend.components.block.get_page(label));
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
if(cljs.core.truth_((function (){var and__4251__auto__ = page;
if(cljs.core.truth_(and__4251__auto__)){
var temp__5720__auto__ = frontend.util.get_file_ext(href);
if(cljs.core.truth_(temp__5720__auto__)){
var ext = temp__5720__auto__;
return logseq.graph_parser.config.mldoc_support_QMARK_(ext);
} else {
return null;
}
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.page-reference","span.page-reference",390731266),((show_brackets_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500","span.text-gray-500",811795480),"[["], null):null),frontend.components.block.page_cp(config__$1,page),((show_brackets_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-gray-500","span.text-gray-500",811795480),"]]"], null):null)], null);
} else {
var href_STAR_ = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.block.relative_assets_path__GT_absolute_path(href):href);
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a","a",-2123407586),(function (){var G__69821 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(href_STAR_)].join(''),new cljs.core.Keyword(null,"data-href","data-href",299087184),href_STAR_,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69821,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__69821;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$1,label) : frontend.components.block.map_inline.call(null,config__$1,label)));
}
}
} else {
if(cljs.core.truth_(frontend.components.block.show_link_QMARK_(config,metadata,href,full_text))){
return frontend.components.block.media_link(config,url,href,label,metadata,full_text);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"ar")){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a.external-link","a.external-link",-654902016),(function (){var G__69822 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),frontend.components.block.ar_url__GT_http_url(href),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69822,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__69822;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));
} else {
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"a.external-link","a.external-link",-654902016),(function (){var G__69823 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
if(cljs.core.truth_(title)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69823,new cljs.core.Keyword(null,"title","title",636505583),title);
} else {
return G__69823;
}
})(),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,label) : frontend.components.block.map_inline.call(null,config,label)));

}
}
}
}
} else {
throw e__58854__auto__;
}
} else {
throw e69814;

}
}});
frontend.components.block.macro_query_cp = (function frontend$components$block$macro_query_cp(config,arguments$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dsl-query","div.dsl-query",-33442931),(function (){var query = clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$));
if(clojure.string.blank_QMARK_(query)){
return null;
} else {
var G__69829 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662),true);
var G__69830 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),frontend.commands.query_doc,new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.px-2.py-1.query-title.text-sm.rounded-md.shadow-xs","span.font-medium.px-2.py-1.query-title.text-sm.rounded-md.shadow-xs",-644821628),["Query: ",query].join('')], null)),new cljs.core.Keyword(null,"query","query",-1288509510),query], null);
return (frontend.components.block.custom_query.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.custom_query.cljs$core$IFn$_invoke$arity$2(G__69829,G__69830) : frontend.components.block.custom_query.call(null,G__69829,G__69830));
}
})()], null);
});
frontend.components.block.macro_function_cp = (function frontend$components$block$macro_function_cp(config,arguments$){
var or__4253__auto__ = (cljs.core.truth_(new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(config))?(function (){var temp__5720__auto__ = rum.core.react(new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(temp__5720__auto__)){
var query_result = temp__5720__auto__;
var fn_string = cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.query.normalize_query_function(frontend.handler.common.safe_read_string(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("(fn [result] %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(arguments$)], 0)),"failed to parse function"),query_result));
var f = frontend.extensions.sci.eval_string(fn_string);
if(cljs.core.fn_QMARK_(f)){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(query_result) : f.call(null,query_result));
}catch (e69831){if((e69831 instanceof Error)){
var e = e69831;
return console.error(e);
} else {
throw e69831;

}
}} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.warning","span.warning",-711839668),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{function %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(arguments$)], 0))], null);
}
});
frontend.components.block.macro_embed_cp = (function frontend$components$block$macro_embed_cp(config,arguments$){
var a = cljs.core.first(arguments$);
var map__69832 = config;
var map__69832__$1 = cljs.core.__destructure_map(map__69832);
var link_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69832__$1,new cljs.core.Keyword(null,"link-depth","link-depth",-293752026));
var link_depth__$1 = (function (){var or__4253__auto__ = link_depth;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})();
if((a == null)){
return null;
} else {
if((link_depth__$1 > frontend.components.block.max_depth_of_links)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning.text-sm","p.warning.text-sm",37937796),"Embed depth is too deep"], null);
} else {
if(((clojure.string.starts_with_QMARK_(a,"[[")) && (clojure.string.ends_with_QMARK_(a,"]]")))){
var page_name = logseq.graph_parser.text.get_page_name(a);
if(clojure.string.blank_QMARK_(page_name)){
return null;
} else {
return frontend.components.block.page_embed(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"link-depth","link-depth",-293752026),(link_depth__$1 + (1))),page_name);
}
} else {
if(((clojure.string.starts_with_QMARK_(a,"((")) && (clojure.string.ends_with_QMARK_(a,"))")))){
var temp__5720__auto__ = clojure.string.trim(clojure.string.replace(clojure.string.replace(a,"((",""),"))",""));
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
var temp__5720__auto____$1 = (function (){var and__4251__auto__ = s;
if(cljs.core.truth_(and__4251__auto__)){
var s__$1 = clojure.string.trim(s);
var and__4251__auto____$1 = frontend.util.uuid_string_QMARK_(s__$1);
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.uuid(s__$1);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return frontend.components.block.block_embed(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"link-depth","link-depth",-293752026),(link_depth__$1 + (1))),id);
} else {
return null;
}
} else {
return null;
}
} else {
return null;

}
}
}
}
});
frontend.components.block.macro_vimeo_cp = (function frontend$components$block$macro_vimeo_cp(_config,arguments$){
var temp__5720__auto__ = cljs.core.first(arguments$);
if(cljs.core.truth_(temp__5720__auto__)){
var url = temp__5720__auto__;
var Vimeo_regex = /^((?:https?:)?\/\/)?((?:www).)?((?:player.vimeo.com|vimeo.com)?)((?:\/video\/)?)([\w-]+)(\S+)?$/;
var temp__5720__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_re_find(Vimeo_regex,url),(5));
if(cljs.core.truth_(temp__5720__auto____$1)){
var vimeo_id = temp__5720__auto____$1;
if(clojure.string.blank_QMARK_(vimeo_id)){
return null;
} else {
var width = (function (){var x__4339__auto__ = (frontend.util.get_width() - (96));
var y__4340__auto__ = (560);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var height = ((width * ((315) / (560))) | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"allow-full-screen","allow-full-screen",-1219396017),"allowfullscreen",new cljs.core.Keyword(null,"allow","allow",-1857325745),"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope",new cljs.core.Keyword(null,"frame-border","frame-border",-1868748185),"0",new cljs.core.Keyword(null,"src","src",-1651076051),["https://player.vimeo.com/video/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vimeo_id)].join(''),new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"width","width",-384071477),width], null)], null);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.macro_bilibili_cp = (function frontend$components$block$macro_bilibili_cp(_config,arguments$){
var temp__5720__auto__ = cljs.core.first(arguments$);
if(cljs.core.truth_(temp__5720__auto__)){
var url = temp__5720__auto__;
var id_regex = /https?:\/\/www\.bilibili\.com\/video\/([^? ]+)/;
var temp__5720__auto____$1 = (((cljs.core.count(url) <= (15)))?url:cljs.core.last(frontend.util.safe_re_find(id_regex,url))
);
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
if(clojure.string.blank_QMARK_(id)){
return null;
} else {
var width = (function (){var x__4339__auto__ = (frontend.util.get_width() - (96));
var y__4340__auto__ = (560);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var height = ((width * ((315) / (560))) | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"allowfullscreen","allowfullscreen",-1595290361),true,new cljs.core.Keyword(null,"framespacing","framespacing",-63114747),"0",new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),"no",new cljs.core.Keyword(null,"border","border",1444987323),"0",new cljs.core.Keyword(null,"scrolling","scrolling",349011090),"no",new cljs.core.Keyword(null,"src","src",-1651076051),["https://player.bilibili.com/player.html?bvid=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"&high_quality=1"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(function (){var x__4336__auto__ = (500);
var y__4337__auto__ = height;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})()], null)], null);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.macro_else_cp = (function frontend$components$block$macro_else_cp(name,config,arguments$){
var temp__5718__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5718__auto__)){
var block_uuid = temp__5718__auto__;
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var macro_content = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1((function (){var G__69835 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__69836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__69836) : frontend.db.entity.call(null,G__69836));
})()));
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__69835) : frontend.db.entity.call(null,G__69835));
})())),name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_macros(),name);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_macros(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name));
}
}
})();
var macro_content__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"img"))?(function (){var G__69837 = cljs.core.count(arguments$);
switch (G__69837) {
case (1):
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[:img {:src \"%s\"}]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(arguments$)], 0));

break;
case (4):
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1)));
if(cljs.core.truth_(and__4251__auto__)){
return frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(2)));
} else {
return and__4251__auto__;
}
})())){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[:img.%s {:src \"%s\" :style {:width %s :height %s}}]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(3)),cljs.core.first(arguments$),frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1))),frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(2)))], 0));
} else {
return null;
}

break;
case (3):
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1)));
if(cljs.core.truth_(and__4251__auto__)){
return frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(2)));
} else {
return and__4251__auto__;
}
})())){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[:img {:src \"%s\" :style {:width %s :height %s}}]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(arguments$),frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1))),frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(2)))], 0));
} else {
return null;
}

break;
case (2):
if(cljs.core.truth_(frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1))))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[:img {:src \"%s\" :style {:width %s}}]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(arguments$),frontend.util.safe_parse_int(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1)))], 0));
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["right",null,"center",null,"left",null], null), null),clojure.string.lower_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1))))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[:img.%s {:src \"%s\"}]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.lower_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arguments$,(1))),cljs.core.first(arguments$)], 0));
} else {
return macro_content;

}
}

break;
default:
return macro_content;

}
})():(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.seq(arguments$);
if(and__4251__auto__){
return macro_content;
} else {
return and__4251__auto__;
}
})())?frontend.format.block.macro_subs(macro_content,arguments$):macro_content
));
var macro_content__$2 = (cljs.core.truth_(macro_content__$1)?frontend.template.resolve_dynamic_template_BANG_(macro_content__$1):null);
return frontend.components.block.render_macro(config,name,arguments$,macro_content__$2,format);
} else {
var macro_content = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_macros(),name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_macros(),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name));
}
})();
var format = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
return frontend.components.block.render_macro(config,name,arguments$,macro_content,format);
}
});
frontend.components.block.namespace_hierarchy_aux = rum.core.lazy_build(rum.core.build_defc,(function (config,namespace,children){
return daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$block$iter__69838(s__69839){
return (new cljs.core.LazySeq(null,(function (){
var s__69839__$1 = s__69839;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69839__$1);
if(temp__5720__auto__){
var s__69839__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69839__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__69839__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__69841 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__69840 = (0);
while(true){
if((i__69840 < size__4651__auto__)){
var child = cljs.core._nth(c__4650__auto__,i__69840);
cljs.core.chunk_append(b__69841,daiquiri.core.create_element("li",{'key':["namespace-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child))].join('')},[(function (){var shorten_name = (function (){var G__69849 = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(child);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(child);
}
})();
var G__69849__$1 = (((G__69849 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__69849,"/"));
if((G__69849__$1 == null)){
return null;
} else {
return cljs.core.last(G__69849__$1);
}
})();
return frontend.components.block.page_cp(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),shorten_name], null),child);
})(),((cljs.core.seq(new cljs.core.Keyword("namespace","children","namespace/children",-2095628387).cljs$core$IFn$_invoke$arity$1(child)))?daiquiri.interpreter.interpret((function (){var G__69854 = config;
var G__69855 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(child);
var G__69856 = new cljs.core.Keyword("namespace","children","namespace/children",-2095628387).cljs$core$IFn$_invoke$arity$1(child);
return (frontend.components.block.namespace_hierarchy_aux.cljs$core$IFn$_invoke$arity$3 ? frontend.components.block.namespace_hierarchy_aux.cljs$core$IFn$_invoke$arity$3(G__69854,G__69855,G__69856) : frontend.components.block.namespace_hierarchy_aux.call(null,G__69854,G__69855,G__69856));
})()):null)]));

var G__70578 = (i__69840 + (1));
i__69840 = G__70578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69841),frontend$components$block$iter__69838(cljs.core.chunk_rest(s__69839__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69841),null);
}
} else {
var child = cljs.core.first(s__69839__$2);
return cljs.core.cons(daiquiri.core.create_element("li",{'key':["namespace-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child))].join('')},[(function (){var shorten_name = (function (){var G__69857 = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(child);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(child);
}
})();
var G__69857__$1 = (((G__69857 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__69857,"/"));
if((G__69857__$1 == null)){
return null;
} else {
return cljs.core.last(G__69857__$1);
}
})();
return frontend.components.block.page_cp(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),shorten_name], null),child);
})(),((cljs.core.seq(new cljs.core.Keyword("namespace","children","namespace/children",-2095628387).cljs$core$IFn$_invoke$arity$1(child)))?daiquiri.interpreter.interpret((function (){var G__69865 = config;
var G__69866 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(child);
var G__69867 = new cljs.core.Keyword("namespace","children","namespace/children",-2095628387).cljs$core$IFn$_invoke$arity$1(child);
return (frontend.components.block.namespace_hierarchy_aux.cljs$core$IFn$_invoke$arity$3 ? frontend.components.block.namespace_hierarchy_aux.cljs$core$IFn$_invoke$arity$3(G__69865,G__69866,G__69867) : frontend.components.block.namespace_hierarchy_aux.call(null,G__69865,G__69866,G__69867));
})()):null)]),frontend$components$block$iter__69838(cljs.core.rest(s__69839__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(children);
})())]);
}),null,"frontend.components.block/namespace-hierarchy-aux");
frontend.components.block.namespace_hierarchy = rum.core.lazy_build(rum.core.build_defc,(function (config,namespace,children){
return daiquiri.core.create_element("div",{'className':"namespace"},[daiquiri.core.create_element("div",{'className':"font-medium flex flex-row items-center pb-2"},[daiquiri.core.create_element("span",{'className':"text-sm mr-1"},["Namespace "]),frontend.components.block.page_cp(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),namespace], null))]),frontend.components.block.namespace_hierarchy_aux(config,namespace,children)]);
}),null,"frontend.components.block/namespace-hierarchy");
frontend.components.block.macro_cp = (function frontend$components$block$macro_cp(config,options){
var map__69875 = options;
var map__69875__$1 = cljs.core.__destructure_map(map__69875);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69875__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
var arguments$__$1 = (((((cljs.core.count(arguments$) >= (2))) && (((clojure.string.starts_with_QMARK_(cljs.core.first(arguments$),"[[")) && (clojure.string.ends_with_QMARK_(cljs.core.last(arguments$),"]]"))))))?(function (){var title = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arguments$);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [title], null);
})():arguments$);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"query")){
return frontend.components.block.macro_query_cp(config,arguments$__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"function")){
return frontend.components.block.macro_function_cp(config,arguments$__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"namespace")){
var namespace = cljs.core.first(arguments$__$1);
if(clojure.string.blank_QMARK_(namespace)){
return null;
} else {
var namespace__$1 = clojure.string.lower_case(logseq.graph_parser.text.page_ref_un_brackets_BANG_(namespace));
var children = frontend.db.model.get_namespace_hierarchy(frontend.state.get_current_repo(),namespace__$1);
return frontend.components.block.namespace_hierarchy(config,namespace__$1,children);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"youtube")){
var temp__5720__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var url = temp__5720__auto__;
var YouTube_regex = /^((?:https?:)?\/\/)?((?:www|m).)?((?:youtube.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/;
var temp__5720__auto____$1 = ((((11) === cljs.core.count(url)))?url:cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_re_find(YouTube_regex,url),(5))
);
if(cljs.core.truth_(temp__5720__auto____$1)){
var youtube_id = temp__5720__auto____$1;
if(clojure.string.blank_QMARK_(youtube_id)){
return null;
} else {
return frontend.extensions.video.youtube.youtube_video(youtube_id);
}
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"youtube-timestamp")){
var temp__5720__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var timestamp = temp__5720__auto__;
var temp__5720__auto____$1 = frontend.extensions.video.youtube.parse_timestamp(timestamp);
if(cljs.core.truth_(temp__5720__auto____$1)){
var seconds = temp__5720__auto____$1;
return frontend.extensions.video.youtube.timestamp(seconds);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"zotero-imported-file")){
var vec__69877 = arguments$__$1;
var item_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69877,(0),null);
var filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69877,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = item_key;
if(cljs.core.truth_(and__4251__auto__)){
return filename;
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.extensions.zotero.zotero_imported_file(item_key,filename)], null);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"zotero-linked-file")){
var temp__5720__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var path = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.extensions.zotero.zotero_linked_file(path)], null);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"vimeo")){
return frontend.components.block.macro_vimeo_cp(config,arguments$__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"bilibili")){
return frontend.components.block.macro_bilibili_cp(config,arguments$__$1);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["twitter",null,"tweet",null], null), null),name)){
var temp__5720__auto__ = cljs.core.first(arguments$__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var url = temp__5720__auto__;
var id_regex = /\/status\/(\d+)/;
var temp__5720__auto____$1 = (((cljs.core.count(url) <= (15)))?url:cljs.core.last(frontend.util.safe_re_find(id_regex,url))
);
if(cljs.core.truth_(temp__5720__auto____$1)){
var id = temp__5720__auto____$1;
return frontend.ui.tweet_embed(id);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"embed")){
return frontend.components.block.macro_embed_cp(config,arguments$__$1);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.handler.plugin.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"renderer");
} else {
return and__4251__auto__;
}
})())){
var temp__5720__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(temp__5720__auto__)){
var block_uuid = temp__5720__auto__;
return frontend.components.plugins.hook_ui_slot(new cljs.core.Keyword(null,"macro-renderer-slotted","macro-renderer-slotted",-1582637864),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),block_uuid));
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.macro.macros),name))){
var fexpr__69884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.macro.macros),name);
return (fexpr__69884.cljs$core$IFn$_invoke$arity$2 ? fexpr__69884.cljs$core$IFn$_invoke$arity$2(config,options) : fexpr__69884.call(null,config,options));
} else {
return frontend.components.block.macro_else_cp(name,config,arguments$__$1);

}
}
}
}
}
}
}
}
}
}
}
}
}
});
frontend.components.block.emphasis_cp = (function frontend$components$block$emphasis_cp(config,kind,data){
var elem = (function (){var G__69885 = kind;
switch (G__69885) {
case "Bold":
return new cljs.core.Keyword(null,"b","b",1482224470);

break;
case "Italic":
return new cljs.core.Keyword(null,"i","i",-1386841315);

break;
case "Underline":
return new cljs.core.Keyword(null,"ins","ins",-1021983570);

break;
case "Strike_through":
return new cljs.core.Keyword(null,"del","del",574975584);

break;
case "Highlight":
return new cljs.core.Keyword(null,"mark","mark",-373816345);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69885)].join('')));

}
})();
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(elem,(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,data) : frontend.components.block.map_inline.call(null,config,data)));
});
frontend.components.block.inline = (function frontend$components$block$inline(p__69886,item){
var map__69887 = p__69886;
var map__69887__$1 = cljs.core.__destructure_map(map__69887);
var config = map__69887__$1;
var html_export_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69887__$1,new cljs.core.Keyword(null,"html-export?","html-export?",504770426));
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Plain")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return s;
} else {
throw cljs.core.match.backtrack;

}
}catch (e69944){if((e69944 instanceof Error)){
var e__58854__auto__ = e69944;
if((e__58854__auto__ === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Spaces")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return s;
} else {
throw cljs.core.match.backtrack;

}
}catch (e69945){if((e69945 instanceof Error)){
var e__58854__auto____$1 = e69945;
if((e__58854__auto____$1 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Superscript")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sup","sup",-2039492346),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.map_inline.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e69946){if((e69946 instanceof Error)){
var e__58854__auto____$2 = e69946;
if((e__58854__auto____$2 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Subscript")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.map_inline.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e69947){if((e69947 instanceof Error)){
var e__58854__auto____$3 = e69947;
if((e__58854__auto____$3 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Tag")){
var temp__5720__auto__ = logseq.graph_parser.block.get_tag(item);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
var s__$1 = logseq.graph_parser.text.page_ref_un_brackets_BANG_(s);
return frontend.components.block.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"tag?","tag?",1714008252),true),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),s__$1], null));
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e69948){if((e69948 instanceof Error)){
var e__58854__auto____$4 = e69948;
if((e__58854__auto____$4 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Emphasis")){
try{var item_1__69891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__69891)) && ((cljs.core.count(item_1__69891) === 2)))){
try{var item_1__69891_0__69892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69891,(0));
if(((cljs.core.vector_QMARK_(item_1__69891_0__69892)) && ((cljs.core.count(item_1__69891_0__69892) === 1)))){
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69891_0__69892,(0));
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69891,(1));
return frontend.components.block.emphasis_cp(config,kind,data);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69963){if((e69963 instanceof Error)){
var e__58854__auto____$5 = e69963;
if((e__58854__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$5;
}
} else {
throw e69963;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69962){if((e69962 instanceof Error)){
var e__58854__auto____$5 = e69962;
if((e__58854__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$5;
}
} else {
throw e69962;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69949){if((e69949 instanceof Error)){
var e__58854__auto____$5 = e69949;
if((e__58854__auto____$5 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Entity")){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(e)], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69950){if((e69950 instanceof Error)){
var e__58854__auto____$6 = e69950;
if((e__58854__auto____$6 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Latex_Fragment")){
try{var item_1__69891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__69891)) && ((cljs.core.count(item_1__69891) === 2)))){
var display = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69891,(0));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69891,(1));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(s,false,true);
} else {
return frontend.extensions.latex.latex(cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0()),s,false,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(display,"Inline"));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e69961){if((e69961 instanceof Error)){
var e__58854__auto____$7 = e69961;
if((e__58854__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$7;
}
} else {
throw e69961;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69951){if((e69951 instanceof Error)){
var e__58854__auto____$7 = e69951;
if((e__58854__auto____$7 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Target")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),s], null),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69952){if((e69952 instanceof Error)){
var e__58854__auto____$8 = e69952;
if((e__58854__auto____$8 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Radio_Target")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),s], null),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69953){if((e69953 instanceof Error)){
var e__58854__auto____$9 = e69953;
if((e__58854__auto____$9 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Email")){
var address = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var map__69960 = address;
var map__69960__$1 = cljs.core.__destructure_map(map__69960);
var local_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69960__$1,new cljs.core.Keyword(null,"local_part","local_part",-1705904558));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69960__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var address__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_part),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",address__$1].join('')], null),address__$1], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69954){if((e69954 instanceof Error)){
var e__58854__auto____$10 = e69954;
if((e__58854__auto____$10 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Nested_link")){
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.nested_link(config,html_export_QMARK_,link);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69955){if((e69955 instanceof Error)){
var e__58854__auto____$11 = e69955;
if((e__58854__auto____$11 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Link")){
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.link_cp(config,html_export_QMARK_,link);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69956){if((e69956 instanceof Error)){
var e__58854__auto____$12 = e69956;
if((e__58854__auto____$12 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Verbatim")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69957){if((e69957 instanceof Error)){
var e__58854__auto____$13 = e69957;
if((e__58854__auto____$13 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Code")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),s], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69958){if((e69958 instanceof Error)){
var e__58854__auto____$14 = e69958;
if((e__58854__auto____$14 === cljs.core.match.backtrack)){
try{var item_0__69890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69890 === "Inline_Source_Block")){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69959){if((e69959 instanceof Error)){
var e__58854__auto____$15 = e69959;
if((e__58854__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$15;
}
} else {
throw e69959;

}
}} else {
throw e__58854__auto____$14;
}
} else {
throw e69958;

}
}} else {
throw e__58854__auto____$13;
}
} else {
throw e69957;

}
}} else {
throw e__58854__auto____$12;
}
} else {
throw e69956;

}
}} else {
throw e__58854__auto____$11;
}
} else {
throw e69955;

}
}} else {
throw e__58854__auto____$10;
}
} else {
throw e69954;

}
}} else {
throw e__58854__auto____$9;
}
} else {
throw e69953;

}
}} else {
throw e__58854__auto____$8;
}
} else {
throw e69952;

}
}} else {
throw e__58854__auto____$7;
}
} else {
throw e69951;

}
}} else {
throw e__58854__auto____$6;
}
} else {
throw e69950;

}
}} else {
throw e__58854__auto____$5;
}
} else {
throw e69949;

}
}} else {
throw e__58854__auto____$4;
}
} else {
throw e69948;

}
}} else {
throw e__58854__auto____$3;
}
} else {
throw e69947;

}
}} else {
throw e__58854__auto____$2;
}
} else {
throw e69946;

}
}} else {
throw e__58854__auto____$1;
}
} else {
throw e69945;

}
}} else {
throw e__58854__auto__;
}
} else {
throw e69944;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69914){if((e69914 instanceof Error)){
var e__58854__auto__ = e69914;
if((e__58854__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 3)))){
try{var item_0__69897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69897 === "Export_Snippet")){
try{var item_1__69898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__69898 === "html")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),s], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e69943){if((e69943 instanceof Error)){
var e__58854__auto____$1 = e69943;
if((e__58854__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$1;
}
} else {
throw e69943;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69942){if((e69942 instanceof Error)){
var e__58854__auto____$1 = e69942;
if((e__58854__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$1;
}
} else {
throw e69942;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69915){if((e69915 instanceof Error)){
var e__58854__auto____$1 = e69915;
if((e__58854__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__69900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69900 === "Inline_Hiccup")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Invalid hiccup"], null),s], null),frontend.security.remove_javascript_links_in_href(frontend.components.block.safe_read_string.cljs$core$IFn$_invoke$arity$1(s)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e69940){if((e69940 instanceof Error)){
var e__58854__auto____$2 = e69940;
if((e__58854__auto____$2 === cljs.core.match.backtrack)){
try{var item_0__69900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69900 === "Inline_Html")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),s], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e69941){if((e69941 instanceof Error)){
var e__58854__auto____$3 = e69941;
if((e__58854__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$3;
}
} else {
throw e69941;

}
}} else {
throw e__58854__auto____$2;
}
} else {
throw e69940;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69916){if((e69916 instanceof Error)){
var e__58854__auto____$2 = e69916;
if((e__58854__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 1)))){
try{var item_0__69902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69902 === "Break_Line")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69938){if((e69938 instanceof Error)){
var e__58854__auto____$3 = e69938;
if((e__58854__auto____$3 === cljs.core.match.backtrack)){
try{var item_0__69902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69902 === "Hard_Break_Line")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69939){if((e69939 instanceof Error)){
var e__58854__auto____$4 = e69939;
if((e__58854__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$4;
}
} else {
throw e69939;

}
}} else {
throw e__58854__auto____$3;
}
} else {
throw e69938;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69917){if((e69917 instanceof Error)){
var e__58854__auto____$3 = e69917;
if((e__58854__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__69903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69903 === "Timestamp")){
try{var item_1__69904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__69904)) && ((cljs.core.count(item_1__69904) === 2)))){
try{var item_1__69904_0__69905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(0));
if((item_1__69904_0__69905 === "Scheduled")){
var _timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(1));
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e69929){if((e69929 instanceof Error)){
var e__58854__auto____$4 = e69929;
if((e__58854__auto____$4 === cljs.core.match.backtrack)){
try{var item_1__69904_0__69905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(0));
if((item_1__69904_0__69905 === "Deadline")){
var _timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(1));
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e69930){if((e69930 instanceof Error)){
var e__58854__auto____$5 = e69930;
if((e__58854__auto____$5 === cljs.core.match.backtrack)){
try{var item_1__69904_0__69905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(0));
if((item_1__69904_0__69905 === "Date")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(1));
return frontend.components.block.timestamp(t,"Date");
} else {
throw cljs.core.match.backtrack;

}
}catch (e69931){if((e69931 instanceof Error)){
var e__58854__auto____$6 = e69931;
if((e__58854__auto____$6 === cljs.core.match.backtrack)){
try{var item_1__69904_0__69905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(0));
if((item_1__69904_0__69905 === "Closed")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(1));
return frontend.components.block.timestamp(t,"Closed");
} else {
throw cljs.core.match.backtrack;

}
}catch (e69932){if((e69932 instanceof Error)){
var e__58854__auto____$7 = e69932;
if((e__58854__auto____$7 === cljs.core.match.backtrack)){
try{var item_1__69904_0__69905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(0));
if((item_1__69904_0__69905 === "Range")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(1));
return frontend.components.block.range(t,false);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69933){if((e69933 instanceof Error)){
var e__58854__auto____$8 = e69933;
if((e__58854__auto____$8 === cljs.core.match.backtrack)){
try{var item_1__69904_0__69905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(0));
if((item_1__69904_0__69905 === "Clock")){
try{var item_1__69904_1__69906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(1));
if(((cljs.core.vector_QMARK_(item_1__69904_1__69906)) && ((cljs.core.count(item_1__69904_1__69906) === 2)))){
try{var item_1__69904_1__69906_0__69907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904_1__69906,(0));
if((item_1__69904_1__69906_0__69907 === "Stopped")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904_1__69906,(1));
return frontend.components.block.range(t,true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69936){if((e69936 instanceof Error)){
var e__58854__auto____$9 = e69936;
if((e__58854__auto____$9 === cljs.core.match.backtrack)){
try{var item_1__69904_1__69906_0__69907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904_1__69906,(0));
if((item_1__69904_1__69906_0__69907 === "Started")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904_1__69906,(1));
return frontend.components.block.timestamp(t,"Started");
} else {
throw cljs.core.match.backtrack;

}
}catch (e69937){if((e69937 instanceof Error)){
var e__58854__auto____$10 = e69937;
if((e__58854__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$10;
}
} else {
throw e69937;

}
}} else {
throw e__58854__auto____$9;
}
} else {
throw e69936;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69935){if((e69935 instanceof Error)){
var e__58854__auto____$9 = e69935;
if((e__58854__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$9;
}
} else {
throw e69935;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69934){if((e69934 instanceof Error)){
var e__58854__auto____$9 = e69934;
if((e__58854__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$9;
}
} else {
throw e69934;

}
}} else {
throw e__58854__auto____$8;
}
} else {
throw e69933;

}
}} else {
throw e__58854__auto____$7;
}
} else {
throw e69932;

}
}} else {
throw e__58854__auto____$6;
}
} else {
throw e69931;

}
}} else {
throw e__58854__auto____$5;
}
} else {
throw e69930;

}
}} else {
throw e__58854__auto____$4;
}
} else {
throw e69929;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69928){if((e69928 instanceof Error)){
var e__58854__auto____$4 = e69928;
if((e__58854__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$4;
}
} else {
throw e69928;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69919){if((e69919 instanceof Error)){
var e__58854__auto____$4 = e69919;
if((e__58854__auto____$4 === cljs.core.match.backtrack)){
try{var item_0__69903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69903 === "Cookie")){
try{var item_1__69904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__69904)) && ((cljs.core.count(item_1__69904) === 2)))){
try{var item_1__69904_0__69909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(0));
if((item_1__69904_0__69909 === "Percent")){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cookie-percent"], null),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[d%%]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69927){if((e69927 instanceof Error)){
var e__58854__auto____$5 = e69927;
if((e__58854__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$5;
}
} else {
throw e69927;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69924){if((e69924 instanceof Error)){
var e__58854__auto____$5 = e69924;
if((e__58854__auto____$5 === cljs.core.match.backtrack)){
try{var item_1__69904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(((cljs.core.vector_QMARK_(item_1__69904)) && ((cljs.core.count(item_1__69904) === 3)))){
try{var item_1__69904_0__69911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(0));
if((item_1__69904_0__69911 === "Absolute")){
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(1));
var total = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item_1__69904,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cookie-absolute"], null),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%d/%d]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current,total], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69926){if((e69926 instanceof Error)){
var e__58854__auto____$6 = e69926;
if((e__58854__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$6;
}
} else {
throw e69926;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69925){if((e69925 instanceof Error)){
var e__58854__auto____$6 = e69925;
if((e__58854__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$6;
}
} else {
throw e69925;

}
}} else {
throw e__58854__auto____$5;
}
} else {
throw e69924;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69920){if((e69920 instanceof Error)){
var e__58854__auto____$5 = e69920;
if((e__58854__auto____$5 === cljs.core.match.backtrack)){
try{var item_0__69903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69903 === "Footnote_Reference")){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var map__69923 = options;
var map__69923__$1 = cljs.core.__destructure_map(map__69923);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69923__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var encode_name = frontend.util.url_encode(name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.fn","sup.fn",403400163),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["fnr.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encode_name)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"footref",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_(["fn.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encode_name)].join(''));
})], null),name], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69921){if((e69921 instanceof Error)){
var e__58854__auto____$6 = e69921;
if((e__58854__auto____$6 === cljs.core.match.backtrack)){
try{var item_0__69903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__69903 === "Macro")){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.macro_cp(config,options);
} else {
throw cljs.core.match.backtrack;

}
}catch (e69922){if((e69922 instanceof Error)){
var e__58854__auto____$7 = e69922;
if((e__58854__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$7;
}
} else {
throw e69922;

}
}} else {
throw e__58854__auto____$6;
}
} else {
throw e69921;

}
}} else {
throw e__58854__auto____$5;
}
} else {
throw e69920;

}
}} else {
throw e__58854__auto____$4;
}
} else {
throw e69919;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e69918){if((e69918 instanceof Error)){
var e__58854__auto____$4 = e69918;
if((e__58854__auto____$4 === cljs.core.match.backtrack)){
return "";
} else {
throw e__58854__auto____$4;
}
} else {
throw e69918;

}
}} else {
throw e__58854__auto____$3;
}
} else {
throw e69917;

}
}} else {
throw e__58854__auto____$2;
}
} else {
throw e69916;

}
}} else {
throw e__58854__auto____$1;
}
} else {
throw e69915;

}
}} else {
throw e__58854__auto__;
}
} else {
throw e69914;

}
}});
frontend.components.block.block_child = rum.core.lazy_build(rum.core.build_defc,(function (block){
return daiquiri.interpreter.interpret(block);
}),null,"frontend.components.block/block-child");
frontend.components.block.dnd_same_block_QMARK_ = (function frontend$components$block$dnd_same_block_QMARK_(uuid){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.components.block._STAR_dragging_block)),uuid);
});
frontend.components.block.bullet_drag_start = (function frontend$components$block$bullet_drag_start(event,block,uuid,block_id){
frontend.handler.editor.highlight_block_BANG_(uuid);

frontend.components.block.goog$module$goog$object.get(event,"dataTransfer").setData("block-uuid",uuid);

frontend.components.block.goog$module$goog$object.get(event,"dataTransfer").setData("block-dom-id",block_id);

cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_QMARK_,true);

return cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_block,block);
});
frontend.components.block.bullet_on_click = (function frontend$components$block$bullet_on_click(e,block,uuid){
if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block","block",664686210));

return frontend.util.stop(e);
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(uuid);
}
});
frontend.components.block.toggle_block_children = (function frontend$components$block$toggle_block_children(_e,children){
var block_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),children);
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.some(frontend.handler.editor.collapsable_QMARK_,block_ids))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.collapse_block_BANG_,block_ids):cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.expand_block_BANG_,block_ids)));
});
frontend.components.block.block_children = rum.core.lazy_build(rum.core.build_defc,(function (config,children,collapsed_QMARK_){
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var query_QMARK_ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
var children__$1 = (function (){var and__4251__auto__ = cljs.core.coll_QMARK_(children);
if(and__4251__auto__){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,children);
} else {
return and__4251__auto__;
}
})();
if(((cljs.core.coll_QMARK_(children__$1)) && (((cljs.core.seq(children__$1)) && (cljs.core.not(collapsed_QMARK_)))))){
var doc_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
return daiquiri.core.create_element("div",{'style':{'marginLeft':(cljs.core.truth_(doc_mode_QMARK_)?(18):(29))},'className':"block-children-container flex"},[daiquiri.core.create_element("div",{'onClick':(function (event){
return frontend.components.block.toggle_block_children(event,children__$1);
}),'className':"block-children-left-border"},[]),daiquiri.core.create_element("div",{'style':{'display':(cljs.core.truth_(collapsed_QMARK_)?"none":"")},'className':"block-children w-full"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$block$iter__69964(s__69965){
return (new cljs.core.LazySeq(null,(function (){
var s__69965__$1 = s__69965;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69965__$1);
if(temp__5720__auto__){
var s__69965__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69965__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__69965__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__69967 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__69966 = (0);
while(true){
if((i__69966 < size__4651__auto__)){
var child = cljs.core._nth(c__4650__auto__,i__69966);
cljs.core.chunk_append(b__69967,((cljs.core.map_QMARK_(child))?(function (){var child__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.Keyword("block","meta","block/meta",1064819153));
var config__$1 = (function (){var G__69968 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child__$1)),new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354)], 0));
if(cljs.core.truth_((function (){var or__4253__auto__ = ref_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return query_QMARK_;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69968,new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933),true);
} else {
return G__69968;
}
})();
return rum.core.with_key((frontend.components.block.block_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.block_container.cljs$core$IFn$_invoke$arity$2(config__$1,child__$1) : frontend.components.block.block_container.call(null,config__$1,child__$1)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child__$1));
})():null));

var G__70624 = (i__69966 + (1));
i__69966 = G__70624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69967),frontend$components$block$iter__69964(cljs.core.chunk_rest(s__69965__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69967),null);
}
} else {
var child = cljs.core.first(s__69965__$2);
return cljs.core.cons(((cljs.core.map_QMARK_(child))?(function (){var child__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.Keyword("block","meta","block/meta",1064819153));
var config__$1 = (function (){var G__69969 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child__$1)),new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354)], 0));
if(cljs.core.truth_((function (){var or__4253__auto__ = ref_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return query_QMARK_;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69969,new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933),true);
} else {
return G__69969;
}
})();
return rum.core.with_key((frontend.components.block.block_container.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.block_container.cljs$core$IFn$_invoke$arity$2(config__$1,child__$1) : frontend.components.block.block_container.call(null,config__$1,child__$1)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child__$1));
})():null),frontend$components$block$iter__69964(cljs.core.rest(s__69965__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(children__$1);
})())])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/block-children");
frontend.components.block.block_content_empty_QMARK_ = (function frontend$components$block$block_content_empty_QMARK_(p__69971){
var map__69972 = p__69971;
var map__69972__$1 = cljs.core.__destructure_map(map__69972);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69972__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69972__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69972__$1,new cljs.core.Keyword("block","body","block/body",2004112880));
return ((((cljs.core.empty_QMARK_(properties)) || (frontend.util.property.properties_built_in_QMARK_(properties)))) && (((cljs.core.empty_QMARK_(title)) && (cljs.core.every_QMARK_((function (p1__69970_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__69970_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Horizontal_Rule"], null));
}),body)))));
});
frontend.components.block.block_control = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,block,uuid,block_id,collapsed_QMARK_,_STAR_control_show_QMARK_,edit_QMARK_){
var doc_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
var control_show_QMARK_ = frontend.util.react(_STAR_control_show_QMARK_);
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var empty_content_QMARK_ = frontend.components.block.block_content_empty_QMARK_(block);
return daiquiri.core.create_element("div",{'style':{'height':(24),'marginTop':(0),'float':"left"},'className':"mr-1 flex flex-row items-center sm:mr-2"},[daiquiri.core.create_element("a",{'id':["control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),'onClick':(function (event){
frontend.util.stop(event);

frontend.state.clear_edit_BANG_();

if(cljs.core.truth_(ref_QMARK_)){
return frontend.state.toggle_collapsed_block_BANG_(uuid);
} else {
if(cljs.core.truth_(collapsed_QMARK_)){
return frontend.handler.editor.expand_block_BANG_(uuid);
} else {
return frontend.handler.editor.collapse_block_BANG_(uuid);
}
}
}),'className':"block-control"},[daiquiri.core.create_element("span",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(control_show_QMARK_)?"control-show cursor-pointer":"control-hide")], null))},[frontend.ui.rotating_arrow(collapsed_QMARK_)])]),(function (){var bullet = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return frontend.components.block.bullet_on_click(event,block,uuid);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet-container.cursor","span.bullet-container.cursor",-1172876867),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["dot-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (event){
return frontend.components.block.bullet_drag_start(event,block,uuid,block_id);
}),new cljs.core.Keyword(null,"blockid","blockid",-664467760),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(collapsed_QMARK_)?"bullet-closed":null)," ",(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(collapsed_QMARK_);
} else {
return and__4251__auto__;
}
})())?"hide-inner-bullet":null)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bullet","span.bullet",1911638461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blockid","blockid",-664467760),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)], null)], null)], null)], null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = frontend.mobile.util.is_native_platform_QMARK_();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("ui","show-empty-bullets?","ui/show-empty-bullets?",1453722088).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(doc_mode_QMARK_);
} else {
return and__4251__auto__;
}
})())){
return daiquiri.interpreter.interpret(bullet);
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = ((empty_content_QMARK_) && (((cljs.core.not(edit_QMARK_)) && (((cljs.core.not(new cljs.core.Keyword("block","top?","block/top?",-1838733025).cljs$core$IFn$_invoke$arity$1(block))) && (((cljs.core.not(new cljs.core.Keyword("block","bottom?","block/bottom?",-1886197289).cljs$core$IFn$_invoke$arity$1(block))) && (cljs.core.not(frontend.util.react(_STAR_control_show_QMARK_))))))))));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = doc_mode_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not(collapsed_QMARK_)) && (cljs.core.not(frontend.util.react(_STAR_control_show_QMARK_))));
} else {
return and__4251__auto__;
}
}
})())){
return daiquiri.core.create_element("span",{'className':"bullet-container"},null);
} else {
return daiquiri.interpreter.interpret(bullet);

}
}
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/block-control");
frontend.components.block.dnd_separator = rum.core.lazy_build(rum.core.build_defc,(function (move_to,block_content_QMARK_){
return daiquiri.core.create_element("div",{'className':"relative"},[daiquiri.core.create_element("div",{'style':{'left':(function (){var G__69975 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"nested","nested",18943849)))?(40):(20));
if(cljs.core.truth_(block_content_QMARK_)){
return (G__69975 - (34));
} else {
return G__69975;
}
})(),'top':(0),'width':"100%",'zIndex':(3)},'className':"dnd-separator absolute"},[])]);
}),null,"frontend.components.block/dnd-separator");
frontend.components.block.block_checkbox = (function frontend$components$block$block_checkbox(block,class$){
var marker = new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block);
var vec__69976 = (((marker == null))?null:((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["TODO",null,"NOW",null,"LATER",null,"DOING",null,"IN-PROGRESS",null,"WAITING",null,"WAIT",null], null), null),marker))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$,false], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DONE",marker))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," checked"].join(''),true], null):null)));
var class$__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69976,(0),null);
var checked_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69976,(1),null);
if(cljs.core.truth_(class$__$1)){
return frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(-2),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5)], null),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return frontend.util.stop_propagation(e);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_e){
if(cljs.core.truth_(checked_QMARK_)){
return frontend.handler.editor.uncheck(block);
} else {
return frontend.handler.editor.check(block);
}
})], null));
} else {
return null;
}
});
frontend.components.block.list_checkbox = (function frontend$components$block$list_checkbox(config,checked_QMARK_){
return frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(6)], null),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
var target = event.target;
var block = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config);
var item_content = target.nextSibling.data;
var item_full_content = [(cljs.core.truth_(checked_QMARK_)?"[X]":"[ ]")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_content)].join('');
var new_item_full_content = [(cljs.core.truth_(checked_QMARK_)?"[ ]":"[X]")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_content)].join('');
return frontend.handler.editor.toggle_list_checkbox(block,item_full_content,new_item_full_content);
})], null));
});
frontend.components.block.marker_switch = (function frontend$components$block$marker_switch(p__69979){
var map__69980 = p__69979;
var map__69980__$1 = cljs.core.__destructure_map(map__69980);
var block = map__69980__$1;
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69980__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["TODO",null,"NOW",null,"LATER",null,"DOING",null], null), null),marker)){
var set_marker_fn = (function (new_marker){
return (function (e){
frontend.util.stop(e);

return frontend.handler.editor.set_marker.cljs$core$IFn$_invoke$arity$2(block,new_marker);
});
});
var next_marker = (function (){var G__69981 = marker;
switch (G__69981) {
case "NOW":
return "LATER";

break;
case "LATER":
return "NOW";

break;
case "TODO":
return "DOING";

break;
case "DOING":
return "TODO";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69981)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["marker-switch block-marker ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker)].join(''),new cljs.core.Keyword(null,"title","title",636505583),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Change from %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([marker,next_marker], 0)),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),set_marker_fn(next_marker)], null),marker], null);
} else {
return null;
}
});
frontend.components.block.marker_cp = (function frontend$components$block$marker_cp(p__69982){
var map__69983 = p__69982;
var map__69983__$1 = cljs.core.__destructure_map(map__69983);
var _block = map__69983__$1;
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69983__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69983__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
if(cljs.core.truth_(pre_block_QMARK_)){
return null;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IN-PROGRESS",null,"WAITING",null,"WAIT",null], null), null),marker)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["task-status block-marker ",clojure.string.lower_case(marker)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),3.5], null)], null),clojure.string.upper_case(marker)], null);
} else {
return null;
}
}
});
frontend.components.block.set_priority = rum.core.lazy_build(rum.core.build_defc,(function (block,priority){
var attrs69993 = (function (){var priorities = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__69984_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,p1__69984_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C"], null)));
var iter__4652__auto__ = (function frontend$components$block$iter__69994(s__69995){
return (new cljs.core.LazySeq(null,(function (){
var s__69995__$1 = s__69995;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69995__$1);
if(temp__5720__auto__){
var s__69995__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69995__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__69995__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__69997 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__69996 = (0);
while(true){
if((i__69996 < size__4651__auto__)){
var p = cljs.core._nth(c__4650__auto__,i__69996);
cljs.core.chunk_append(b__69997,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mr-2.text-base.tooltip-priority","a.mr-2.text-base.tooltip-priority",1672342386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"priority","priority",1431093715),p,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__69996,p,c__4650__auto__,size__4651__auto__,b__69997,s__69995__$2,temp__5720__auto__,priorities){
return (function (){
return frontend.handler.editor.set_priority(block,p);
});})(i__69996,p,c__4650__auto__,size__4651__auto__,b__69997,s__69995__$2,temp__5720__auto__,priorities))
], null)], null));

var G__70642 = (i__69996 + (1));
i__69996 = G__70642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69997),frontend$components$block$iter__69994(cljs.core.chunk_rest(s__69995__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69997),null);
}
} else {
var p = cljs.core.first(s__69995__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mr-2.text-base.tooltip-priority","a.mr-2.text-base.tooltip-priority",1672342386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"priority","priority",1431093715),p,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (p,s__69995__$2,temp__5720__auto__,priorities){
return (function (){
return frontend.handler.editor.set_priority(block,p);
});})(p,s__69995__$2,temp__5720__auto__,priorities))
], null)], null),frontend$components$block$iter__69994(cljs.core.rest(s__69995__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(priorities);
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs69993))?daiquiri.interpreter.element_attributes(attrs69993):null),((cljs.core.map_QMARK_(attrs69993))?null:[daiquiri.interpreter.interpret(attrs69993)]));
}),null,"frontend.components.block/set-priority");
frontend.components.block.priority_text = rum.core.lazy_build(rum.core.build_defc,(function (priority){
return daiquiri.core.create_element("a",{'href':reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),priority], null)),'style':{'marginRight':3.5},'className':"opacity-50 hover:opacity-100 priority"},[daiquiri.interpreter.interpret(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[#%s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(priority)], 0)))]);
}),null,"frontend.components.block/priority-text");
frontend.components.block.priority_cp = (function frontend$components$block$priority_cp(p__69998){
var map__69999 = p__69998;
var map__69999__$1 = cljs.core.__destructure_map(map__69999);
var block = map__69999__$1;
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69999__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69999__$1,new cljs.core.Keyword("block","priority","block/priority",1491369544));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(pre_block_QMARK_);
if(and__4251__auto__){
return priority;
} else {
return and__4251__auto__;
}
})())){
return frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"html","html",-998796897),frontend.components.block.set_priority(block,priority)], null),frontend.components.block.priority_text(priority));
} else {
return null;
}
});
frontend.components.block.block_tags_cp = (function frontend$components$block$block_tags_cp(p__70000){
var map__70001 = p__70000;
var map__70001__$1 = cljs.core.__destructure_map(map__70001);
var _block = map__70001__$1;
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70001__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70001__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340));
if(((cljs.core.not(pre_block_QMARK_)) && (cljs.core.seq(tags)))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-tags"], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tag){
var temp__5720__auto__ = (function (){var G__70002 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__70002) : frontend.db.entity.call(null,G__70002));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var page = temp__5720__auto__;
var tag__$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag.mx-1","a.tag.mx-1",2141343974),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-ref","data-ref",-1090558888),tag__$1,new cljs.core.Keyword(null,"key","key",-1516042587),["tag-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag__$1))].join(''),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),tag__$1], null))], null),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag__$1)].join('')], null);
} else {
return null;
}
}),tags));
} else {
return null;
}
});
frontend.components.block.build_block_title = (function frontend$components$block$build_block_title(config,p__70004){
var map__70005 = p__70004;
var map__70005__$1 = cljs.core.__destructure_map(map__70005);
var t = map__70005__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70005__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70005__$1,new cljs.core.Keyword("block","marker","block/marker",1231576318));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70005__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70005__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70005__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70005__$1,new cljs.core.Keyword("block","heading-level","block/heading-level",661361785));
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"block","block",664686210),t);
var slide_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config__$1));
var block_ref_QMARK_ = new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853).cljs$core$IFn$_invoke$arity$1(config__$1);
var block_type = (function (){var or__4253__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ls-type","ls-type",1383834313).cljs$core$IFn$_invoke$arity$1(properties));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var html_export_QMARK_ = new cljs.core.Keyword(null,"html-export?","html-export?",504770426).cljs$core$IFn$_invoke$arity$1(config__$1);
var checkbox = ((((cljs.core.not(pre_block_QMARK_)) && (cljs.core.not(html_export_QMARK_))))?frontend.components.block.block_checkbox(t,"mr-1 cursor"):null);
var marker_switch = ((((cljs.core.not(pre_block_QMARK_)) && (cljs.core.not(html_export_QMARK_))))?frontend.components.block.marker_switch(t):null);
var marker_cp = frontend.components.block.marker_cp(t);
var priority = frontend.components.block.priority_cp(t);
var tags = frontend.components.block.block_tags_cp(t);
var bg_color = new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(properties);
var heading_level__$1 = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = heading_level;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = (heading_level <= (6));
if(and__4251__auto____$1){
return heading_level;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.Keyword(null,"heading","heading",-1312171873));
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = (level <= (6));
if(and__4251__auto____$1){
return level;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
})();
var elem = (cljs.core.truth_(heading_level__$1)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading_level__$1),(cljs.core.truth_(block_ref_QMARK_)?".inline":null)].join('')):new cljs.core.Keyword(null,"span.inline","span.inline",-247819147));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-hl-type","data-hl-type",890635169),new cljs.core.Keyword(null,"hl-type","hl-type",992471876).cljs$core$IFn$_invoke$arity$1(properties)], null),(cljs.core.truth_((function (){var and__4251__auto__ = marker;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(clojure.string.blank_QMARK_(marker)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("nil",marker)));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.lower_case(marker)], null):null),(cljs.core.truth_(bg_color)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),bg_color,new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(6),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(6),new cljs.core.Keyword(null,"color","color",1011675173),"#FFFFFF"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"with-bg-color"], null):null)], 0)),frontend.components.block.remove_nils(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((slide_QMARK_)?null:checkbox),((slide_QMARK_)?null:marker_switch),marker_cp,priority], null),(cljs.core.truth_(title)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$1,title) : frontend.components.block.map_inline.call(null,config__$1,title)),(cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_type,new cljs.core.Keyword(null,"default","default",-1987822328));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.prefix-link","a.prefix-link",-2061567145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__70003_SHARP_){
var G__70006 = block_type;
var G__70006__$1 = (((G__70006 instanceof cljs.core.Keyword))?G__70006.fqn:null);
switch (G__70006__$1) {
case "annotation":
return frontend.extensions.pdf.assets.open_block_ref_BANG_(t);

break;
default:
return p1__70003_SHARP_.preventDefault();

}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hl-page","span.hl-page",-1375814803),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.forbid-edit","strong.forbid-edit",1321731345),["P",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"hl-page","hl-page",949012424).cljs$core$IFn$_invoke$arity$1(properties);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "?";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.blank","label.blank",13437060)," "], null)], null),(function (){var temp__5720__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area","area",472007256),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hl-type","hl-type",992471876).cljs$core$IFn$_invoke$arity$1(properties)));
if(and__4251__auto__){
return new cljs.core.Keyword(null,"hl-stamp","hl-stamp",-695479513).cljs$core$IFn$_invoke$arity$1(properties);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var st = temp__5720__auto__;
return frontend.extensions.pdf.assets.area_display(t,st);
} else {
return null;
}
})()], null):null)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-50","span.opacity-50",949060710),"Click here to start writing, type '/' to see all the commands."], null)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tags], null)], 0))));
});
frontend.components.block.span_comma = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("span",null,[", "]);
}),null,"frontend.components.block/span-comma");
frontend.components.block.property_cp = rum.core.lazy_build(rum.core.build_defc,(function (config,block,k,v){
var date = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462));
if(and__4251__auto__){
return frontend.date.get_locale_string(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
} else {
return and__4251__auto__;
}
})();
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("span",{'className':"page-property-key font-medium"},[cljs.core.name(k)]),daiquiri.core.create_element("span",{'className':"mr-1"},[":"]),((cljs.core.int_QMARK_(v))?daiquiri.interpreter.interpret(v):(cljs.core.truth_(date)?daiquiri.interpreter.interpret(date):((cljs.core.coll_QMARK_(v))?(function (){var v__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,v));
var vals = (function (){var iter__4652__auto__ = (function frontend$components$block$iter__70011(s__70012){
return (new cljs.core.LazySeq(null,(function (){
var s__70012__$1 = s__70012;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70012__$1);
if(temp__5720__auto__){
var s__70012__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70012__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70012__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70014 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70013 = (0);
while(true){
if((i__70013 < size__4651__auto__)){
var v_item = cljs.core._nth(c__4650__auto__,i__70013);
cljs.core.chunk_append(b__70014,frontend.components.block.page_cp(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),v_item], null)));

var G__70660 = (i__70013 + (1));
i__70013 = G__70660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70014),frontend$components$block$iter__70011(cljs.core.chunk_rest(s__70012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70014),null);
}
} else {
var v_item = cljs.core.first(s__70012__$2);
return cljs.core.cons(frontend.components.block.page_cp(config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),v_item], null)),frontend$components$block$iter__70011(cljs.core.rest(s__70012__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(v__$1);
})();
var elems = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(frontend.components.block.span_comma(),vals);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$block$iter__70015(s__70016){
return (new cljs.core.LazySeq(null,(function (){
var s__70016__$1 = s__70016;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70016__$1);
if(temp__5720__auto__){
var s__70016__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70016__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70016__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70018 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70017 = (0);
while(true){
if((i__70017 < size__4651__auto__)){
var elem = cljs.core._nth(c__4650__auto__,i__70017);
cljs.core.chunk_append(b__70018,rum.core.with_key(elem,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));

var G__70661 = (i__70017 + (1));
i__70017 = G__70661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70018),frontend$components$block$iter__70015(cljs.core.chunk_rest(s__70016__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70018),null);
}
} else {
var elem = cljs.core.first(s__70016__$2);
return cljs.core.cons(rum.core.with_key(elem,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),frontend$components$block$iter__70015(cljs.core.rest(s__70016__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(elems);
})());
})():((((typeof v === 'string') && (logseq.graph_parser.util.wrapped_by_quotes_QMARK_(v))))?logseq.graph_parser.util.unquote_string(v):daiquiri.interpreter.interpret(frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))
))))]);
}),null,"frontend.components.block/property-cp");
frontend.components.block.properties_cp = rum.core.lazy_build(rum.core.build_defc,(function (config,block){
var properties = clojure.walk.keywordize_keys(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(block));
var properties_order = new cljs.core.Keyword("block","properties-order","block/properties-order",-968493873).cljs$core$IFn$_invoke$arity$1(block);
var properties__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,properties,frontend.util.property.built_in_properties());
var properties_order__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(frontend.util.property.built_in_properties(),properties_order);
var pre_block_QMARK_ = new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block);
var properties__$2 = (cljs.core.truth_(pre_block_QMARK_)?(function (){var repo = frontend.state.get_current_repo();
var properties__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(properties__$1,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filters","filters",974726919)], 0));
var aliases = (function (){var G__70021 = repo;
var G__70022 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__70023 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__70023) : frontend.db.pull.call(null,G__70023));
})());
return (frontend.db.get_page_alias_names.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_page_alias_names.cljs$core$IFn$_invoke$arity$2(G__70021,G__70022) : frontend.db.get_page_alias_names.call(null,G__70021,G__70022));
})();
if(cljs.core.seq(aliases)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(properties__$2))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(properties__$2,new cljs.core.Keyword(null,"alias","alias",-2039751630),(function (c){
return frontend.util.distinct_by(clojure.string.lower_case,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(c,aliases));
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(properties__$2,new cljs.core.Keyword(null,"alias","alias",-2039751630),aliases);
}
} else {
return properties__$2;
}
})():properties__$1);
var properties_order__$2 = (cljs.core.truth_(pre_block_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filters","filters",974726919),null,new cljs.core.Keyword(null,"title","title",636505583),null], null), null),properties_order__$1):properties_order__$1);
var properties__$3 = ((cljs.core.seq(properties_order__$2))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties__$2,k)], null);
}),properties_order__$2):properties__$2);
if(cljs.core.seq(properties__$3)){
return daiquiri.core.create_element("div",{'title':(cljs.core.truth_(pre_block_QMARK_)?"Click to edit this page's properties":"Click to edit this block's properties"),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block-properties",(cljs.core.truth_(pre_block_QMARK_)?"page-properties":null)], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$block$iter__70024(s__70025){
return (new cljs.core.LazySeq(null,(function (){
var s__70025__$1 = s__70025;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70025__$1);
if(temp__5720__auto__){
var s__70025__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70025__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70025__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70027 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70026 = (0);
while(true){
if((i__70026 < size__4651__auto__)){
var vec__70028 = cljs.core._nth(c__4650__auto__,i__70026);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70028,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70028,(1),null);
cljs.core.chunk_append(b__70027,rum.core.with_key(frontend.components.block.property_cp(config,block,k,v),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));

var G__70663 = (i__70026 + (1));
i__70026 = G__70663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70027),frontend$components$block$iter__70024(cljs.core.chunk_rest(s__70025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70027),null);
}
} else {
var vec__70031 = cljs.core.first(s__70025__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70031,(1),null);
return cljs.core.cons(rum.core.with_key(frontend.components.block.property_cp(config,block,k,v),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),frontend$components$block$iter__70024(cljs.core.rest(s__70025__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(properties__$3);
})())]);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = pre_block_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return properties__$3;
} else {
return and__4251__auto__;
}
})())){
return daiquiri.core.create_element("span",{'className':"opacity-50"},["Properties"]);
} else {
return null;

}
}
}),null,"frontend.components.block/properties-cp");
frontend.components.block.timestamp_cp = rum.core.lazy_build(rum.core.build_defcs,(function (state,block,typ,ast){
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.block","show?","frontend.components.block/show?",970334526));
return daiquiri.core.create_element("div",{'className':"flex flex-col timestamp"},[daiquiri.core.create_element("div",{'className':"text-sm flex flex-row"},[daiquiri.core.create_element("div",{'className':"opacity-50 font-medium timestamp-label"},[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ),": "].join('')]),daiquiri.core.create_element("a",{'onMouseDown':(function (e){
frontend.util.stop(e);

if(cljs.core.truth_(cljs.core.deref(show_QMARK_))){
cljs.core.reset_BANG_(show_QMARK_,false);

cljs.core.reset_BANG_(frontend.commands._STAR_current_command,null);

frontend.state.set_editor_show_date_picker_BANG_(false);

return frontend.state.set_timestamp_block_BANG_(null);
} else {
cljs.core.reset_BANG_(show_QMARK_,true);

cljs.core.reset_BANG_(frontend.commands._STAR_current_command,typ);

frontend.state.set_editor_show_date_picker_BANG_(true);

return frontend.state.set_timestamp_block_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"typ","typ",-1304536900),typ,new cljs.core.Keyword(null,"show?","show?",1543842127),show_QMARK_], null));
}
}),'className':"opacity-80 hover:opacity-100"},[daiquiri.core.create_element("span",{'className':"time-start"},["<"]),(function (){var attrs70036 = frontend.handler.repeated.timestamp__GT_text.cljs$core$IFn$_invoke$arity$1(ast);
return daiquiri.core.create_element("time",((cljs.core.map_QMARK_(attrs70036))?daiquiri.interpreter.element_attributes(attrs70036):null),((cljs.core.map_QMARK_(attrs70036))?null:[daiquiri.interpreter.interpret(attrs70036)]));
})(),daiquiri.core.create_element("span",{'className':"time-stop"},[">"])])]),((cljs.core.deref(show_QMARK_) === true)?(function (){var ts = frontend.handler.repeated.timestamp__GT_map(ast);
return daiquiri.core.create_element("div",{'className':"my-4"},[frontend.components.datetime.date_picker(null,null,ts)]);
})():null)]);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.block","show?","frontend.components.block/show?",970334526)),rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("frontend.components.block","pos","frontend.components.block/pos",-802939909)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var temp__5720__auto___70667 = new cljs.core.Keyword("frontend.components.block","show?","frontend.components.block/show?",970334526).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto___70667)){
var show_QMARK__70668 = temp__5720__auto___70667;
cljs.core.reset_BANG_(show_QMARK__70668,false);
} else {
}

return state;
})], null)], null),"frontend.components.block/timestamp-cp");
frontend.components.block.target_forbidden_edit_QMARK_ = (function frontend$components$block$target_forbidden_edit_QMARK_(target){
var or__4253__auto__ = dommy.core.has_class_QMARK_(target,"forbid-edit");
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = dommy.core.has_class_QMARK_(target,"bullet");
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = dommy.core.has_class_QMARK_(target,"logbook");
if(or__4253__auto____$2){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = frontend.util.link_QMARK_(target);
if(or__4253__auto____$3){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = frontend.util.time_QMARK_(target);
if(or__4253__auto____$4){
return or__4253__auto____$4;
} else {
var or__4253__auto____$5 = frontend.util.input_QMARK_(target);
if(cljs.core.truth_(or__4253__auto____$5)){
return or__4253__auto____$5;
} else {
var or__4253__auto____$6 = frontend.util.audio_QMARK_(target);
if(or__4253__auto____$6){
return or__4253__auto____$6;
} else {
var or__4253__auto____$7 = frontend.util.video_QMARK_(target);
if(or__4253__auto____$7){
return or__4253__auto____$7;
} else {
var or__4253__auto____$8 = frontend.util.details_or_summary_QMARK_(target);
if(cljs.core.truth_(or__4253__auto____$8)){
return or__4253__auto____$8;
} else {
return ((((frontend.util.sup_QMARK_(target)) && (dommy.core.has_class_QMARK_(target,"fn")))) || (dommy.core.has_class_QMARK_(target,"image-resize")));
}
}
}
}
}
}
}
}
}
});
frontend.components.block.block_content_on_mouse_down = (function frontend$components$block$block_content_on_mouse_down(e,block,block_id,_content,edit_input_id){
e.stopPropagation();

var target = frontend.components.block.goog$module$goog$object.get(e,"target");
var button = frontend.components.block.goog$module$goog$object.get(e,"buttons");
var shift_QMARK_ = frontend.components.block.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null),button)){
if(frontend.components.block.target_forbidden_edit_QMARK_(target)){
return null;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = shift_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.state.get_selection_start_block();
} else {
return and__4251__auto__;
}
})())){
return frontend.handler.editor.highlight_selection_area_BANG_(block_id);
} else {
frontend.handler.editor.clear_selection_BANG_();

frontend.handler.editor.unhighlight_blocks_BANG_();

var f = (function (){
var block__$1 = (function (){var or__4253__auto__ = (function (){var G__70040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__70040) : frontend.db.pull.call(null,G__70040));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return block;
}
})();
var cursor_range = frontend.util.caret_range(goog.dom.getElement(block_id));
var map__70039 = block__$1;
var map__70039__$1 = cljs.core.__destructure_map(map__70039);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70039__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70039__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var content__$1 = frontend.util.drawer.remove_logbook(frontend.util.property.remove_built_in_properties(format,content));
var map__70041_70669 = frontend.handler.editor.get_state();
var map__70041_70670__$1 = cljs.core.__destructure_map(map__70041_70669);
var state_70671 = map__70041_70670__$1;
var value_70672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70041_70670__$1,new cljs.core.Keyword(null,"value","value",305978217));
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2(state_70671,value_70672);

return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5(edit_input_id,content__$1,block__$1,cursor_range,false);
});
if(cljs.core.truth_(frontend.util.ios_QMARK_())){
f();
} else {
setTimeout(f,(5));
}

if(cljs.core.truth_(block_id)){
return frontend.state.set_selection_start_block_BANG_(block_id);
} else {
return null;
}
}
}
} else {
return null;
}
});
frontend.components.block.dnd_separator_wrapper = rum.core.lazy_build(rum.core.build_defc,(function (block,block_id,slide_QMARK_,top_QMARK_,block_content_QMARK_){
var dragging_QMARK_ = rum.core.react(frontend.components.block._STAR_dragging_QMARK_);
var drag_to_block = rum.core.react(frontend.components.block._STAR_drag_to_block);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_id,drag_to_block);
if(and__4251__auto__){
var and__4251__auto____$1 = dragging_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return ((cljs.core.not(slide_QMARK_)) && (cljs.core.not(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var move_to = rum.core.react(frontend.components.block._STAR_move_to);
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var and__4251__auto__ = top_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = ((cljs.core.not(top_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"top","top",-1856271961))));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var and__4251__auto__ = block_content_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"nested","nested",18943849));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return ((cljs.core.not(block_content_QMARK_)) && (((cljs.core.seq(new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(block))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(move_to,new cljs.core.Keyword(null,"nested","nested",18943849))))));
}
}
}
})())){
return null;
} else {
return frontend.components.block.dnd_separator(move_to,block_content_QMARK_);
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/dnd-separator-wrapper");
frontend.components.block.clock_summary_cp = (function frontend$components$block$clock_summary_cp(block,body){
if(((frontend.state.enable_timetracking_QMARK_()) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block),"DONE")) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["TODO",null,"LATER",null], null), null),new cljs.core.Keyword("block","marker","block/marker",1231576318).cljs$core$IFn$_invoke$arity$1(block))))))){
var summary = frontend.util.clock.clock_summary(body,true);
if(cljs.core.truth_((function (){var and__4251__auto__ = summary;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(summary,"0m")) && ((!(clojure.string.blank_QMARK_(summary)))));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(100)], null)], null),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),(function (){
var temp__5720__auto__ = frontend.util.drawer.get_logbook(body);
if(cljs.core.truth_(temp__5720__auto__)){
var logbook = temp__5720__auto__;
var clocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__70042_SHARP_){
return clojure.string.starts_with_QMARK_(p1__70042_SHARP_,"CLOCK:");
}),cljs.core.last(logbook)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold.mb-2","div.font-bold.mb-2",2058752701),"LOGBOOK:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function frontend$components$block$clock_summary_cp_$_iter__70043(s__70044){
return (new cljs.core.LazySeq(null,(function (){
var s__70044__$1 = s__70044;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__70044__$1);
if(temp__5720__auto____$1){
var s__70044__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70044__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70044__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70046 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70045 = (0);
while(true){
if((i__70045 < size__4651__auto__)){
var clock = cljs.core._nth(c__4650__auto__,i__70045);
cljs.core.chunk_append(b__70046,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),clock], null));

var G__70673 = (i__70045 + (1));
i__70045 = G__70673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70046),frontend$components$block$clock_summary_cp_$_iter__70043(cljs.core.chunk_rest(s__70044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70046),null);
}
} else {
var clock = cljs.core.first(s__70044__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),clock], null),frontend$components$block$clock_summary_cp_$_iter__70043(cljs.core.rest(s__70044__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.reverse(clocks)));
})()], null)], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.time-spent.ml-1","div.text-sm.time-spent.ml-1",908707952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.fade-link","a.fade-link",-804169045),summary], null)], null))], null);
} else {
return null;
}
} else {
return null;
}
});
frontend.components.block.block_content = rum.core.lazy_build(rum.core.build_defc,(function (config,p__70050,edit_input_id,block_id,slide_QMARK_){
var map__70051 = p__70050;
var map__70051__$1 = cljs.core.__destructure_map(map__70051);
var block = map__70051__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70051__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70051__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70051__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70051__$1,new cljs.core.Keyword("block","properties","block/properties",708347145));
var scheduled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70051__$1,new cljs.core.Keyword("block","scheduled","block/scheduled",584810412));
var deadline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70051__$1,new cljs.core.Keyword("block","deadline","block/deadline",660945231));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70051__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70051__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var map__70052 = (cljs.core.truth_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block))?block:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(uuid,format,pre_block_QMARK_,content)], 0)));
var map__70052__$1 = cljs.core.__destructure_map(map__70052);
var block__$1 = map__70052__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70052__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70052__$1,new cljs.core.Keyword("block","body","block/body",2004112880));
var collapsed_QMARK_ = frontend.util.collapsed_QMARK_(block__$1);
var block_ref_QMARK_ = new cljs.core.Keyword(null,"block-ref?","block-ref?",1391145853).cljs$core$IFn$_invoke$arity$1(config);
var block_ref_with_title_QMARK_ = (function (){var and__4251__auto__ = block_ref_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(title);
} else {
return and__4251__auto__;
}
})();
var block_type = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"ls-type","ls-type",1383834313).cljs$core$IFn$_invoke$arity$1(properties);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var content__$1 = ((typeof content === 'string')?clojure.string.trim(content):"");
var mouse_down_key = (cljs.core.truth_(frontend.util.ios_QMARK_())?new cljs.core.Keyword(null,"on-click","on-click",1632826543):new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var attrs = (function (){var G__70053 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blockid","blockid",-664467760),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"data-type","data-type",-326421468),cljs.core.name(block_type),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null);
if(cljs.core.not(block_ref_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70053,mouse_down_key,(function (e){
return frontend.components.block.block_content_on_mouse_down(e,block__$1,block_id,content__$1,edit_input_id);
}));
} else {
return G__70053;
}
})();
var attrs70049 = (function (){var G__70054 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["block-content-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (e){
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.in_selection_mode_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return (((!(clojure.string.includes_QMARK_(content__$1,"```")))) && (cljs.core.not(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))));
} else {
return and__4251__auto__;
}
})())){
return (frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.util.clear_selection_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.util.clear_selection_BANG_.call(null));
} else {
return null;
}
})], null);
if(cljs.core.not(slide_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__70054,attrs], 0));
} else {
return G__70054;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs70049))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block-content","inline"], null)], null),attrs70049], 0))):{'className':"block-content inline"}),((cljs.core.map_QMARK_(attrs70049))?[daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("div",{'className':"flex flex-row justify-between"},[(function (){var attrs70057 = ((cljs.core.seq(title))?frontend.components.block.build_block_title(config,block__$1):null
);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs70057))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs70057], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs70057))?null:[daiquiri.interpreter.interpret(attrs70057)]));
})(),daiquiri.interpreter.interpret(frontend.components.block.clock_summary_cp(block__$1,body))]),((cljs.core.seq(children))?frontend.components.block.dnd_separator_wrapper(block__$1,block_id,slide_QMARK_,false,true):null),(cljs.core.truth_(deadline)?daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.handler.block.get_deadline_ast(block__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var deadline_ast = temp__5720__auto__;
return frontend.components.block.timestamp_cp(block__$1,"DEADLINE",deadline_ast);
} else {
return null;
}
})()):null),(cljs.core.truth_(scheduled)?daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.handler.block.get_scheduled_ast(block__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var scheduled_ast = temp__5720__auto__;
return frontend.components.block.timestamp_cp(block__$1,"SCHEDULED",scheduled_ast);
} else {
return null;
}
})()):null),(((function (){var and__4251__auto__ = cljs.core.seq(properties);
if(and__4251__auto__){
var and__4251__auto____$1 = (function (){var hidden_QMARK_ = frontend.util.property.properties_built_in_QMARK_(properties);
return cljs.core.not(hidden_QMARK_);
})();
if(and__4251__auto____$1){
return ((cljs.core.not((function (){var and__4251__auto____$2 = block_ref_QMARK_;
if(cljs.core.truth_(and__4251__auto____$2)){
return ((cljs.core.seq(title)) || (cljs.core.seq(body)));
} else {
return and__4251__auto____$2;
}
})())) && (cljs.core.not(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?frontend.components.block.properties_cp(config,block__$1):null),((((cljs.core.not(block_ref_with_title_QMARK_)) && (cljs.core.seq(body))))?daiquiri.core.create_element("div",{'style':{'display':(cljs.core.truth_((function (){var and__4251__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(title);
} else {
return and__4251__auto__;
}
})())?"none":"")},'className':"block-body"},[(function (){var body__$1 = frontend.format.block.trim_break_lines_BANG_(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block__$1));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$block$iter__70058(s__70059){
return (new cljs.core.LazySeq(null,(function (){
var s__70059__$1 = s__70059;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70059__$1);
if(temp__5720__auto__){
var s__70059__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70059__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70059__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70061 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70060 = (0);
while(true){
if((i__70060 < size__4651__auto__)){
var vec__70062 = cljs.core._nth(c__4650__auto__,i__70060);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70062,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70062,(1),null);
cljs.core.chunk_append(b__70061,(function (){var temp__5720__auto____$1 = (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(config,child) : frontend.components.block.markup_element_cp.call(null,config,child));
if(cljs.core.truth_(temp__5720__auto____$1)){
var block__$2 = temp__5720__auto____$1;
return rum.core.with_key(frontend.components.block.block_child(block__$2),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));
} else {
return null;
}
})());

var G__70674 = (i__70060 + (1));
i__70060 = G__70674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70061),frontend$components$block$iter__70058(cljs.core.chunk_rest(s__70059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70061),null);
}
} else {
var vec__70065 = cljs.core.first(s__70059__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70065,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70065,(1),null);
return cljs.core.cons((function (){var temp__5720__auto____$1 = (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(config,child) : frontend.components.block.markup_element_cp.call(null,config,child));
if(cljs.core.truth_(temp__5720__auto____$1)){
var block__$2 = temp__5720__auto____$1;
return rum.core.with_key(frontend.components.block.block_child(block__$2),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));
} else {
return null;
}
})(),frontend$components$block$iter__70058(cljs.core.rest(s__70059__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(body__$1));
})());
})()]):null),(function (){var G__70068 = new cljs.core.Keyword("block","warning","block/warning",2131709542).cljs$core$IFn$_invoke$arity$1(block__$1);
var G__70068__$1 = (((G__70068 instanceof cljs.core.Keyword))?G__70068.fqn:null);
switch (G__70068__$1) {
case "multiple-blocks":
return daiquiri.core.create_element("p",{'className':"warning text-sm"},["Full content is not displayed, Logseq doesn't support multiple unordered lists or headings in a block."]);

break;
default:
return null;

}
})()])]:[daiquiri.interpreter.interpret(attrs70049),daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("div",{'className':"flex flex-row justify-between"},[(function (){var attrs70071 = ((cljs.core.seq(title))?frontend.components.block.build_block_title(config,block__$1):null
);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs70071))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs70071], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs70071))?null:[daiquiri.interpreter.interpret(attrs70071)]));
})(),daiquiri.interpreter.interpret(frontend.components.block.clock_summary_cp(block__$1,body))]),((cljs.core.seq(children))?frontend.components.block.dnd_separator_wrapper(block__$1,block_id,slide_QMARK_,false,true):null),(cljs.core.truth_(deadline)?daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.handler.block.get_deadline_ast(block__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var deadline_ast = temp__5720__auto__;
return frontend.components.block.timestamp_cp(block__$1,"DEADLINE",deadline_ast);
} else {
return null;
}
})()):null),(cljs.core.truth_(scheduled)?daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = frontend.handler.block.get_scheduled_ast(block__$1);
if(cljs.core.truth_(temp__5720__auto__)){
var scheduled_ast = temp__5720__auto__;
return frontend.components.block.timestamp_cp(block__$1,"SCHEDULED",scheduled_ast);
} else {
return null;
}
})()):null),(((function (){var and__4251__auto__ = cljs.core.seq(properties);
if(and__4251__auto__){
var and__4251__auto____$1 = (function (){var hidden_QMARK_ = frontend.util.property.properties_built_in_QMARK_(properties);
return cljs.core.not(hidden_QMARK_);
})();
if(and__4251__auto____$1){
return ((cljs.core.not((function (){var and__4251__auto____$2 = block_ref_QMARK_;
if(cljs.core.truth_(and__4251__auto____$2)){
return ((cljs.core.seq(title)) || (cljs.core.seq(body)));
} else {
return and__4251__auto____$2;
}
})())) && (cljs.core.not(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?frontend.components.block.properties_cp(config,block__$1):null),((((cljs.core.not(block_ref_with_title_QMARK_)) && (cljs.core.seq(body))))?daiquiri.core.create_element("div",{'style':{'display':(cljs.core.truth_((function (){var and__4251__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(title);
} else {
return and__4251__auto__;
}
})())?"none":"")},'className':"block-body"},[(function (){var body__$1 = frontend.format.block.trim_break_lines_BANG_(new cljs.core.Keyword("block","body","block/body",2004112880).cljs$core$IFn$_invoke$arity$1(block__$1));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$block$iter__70072(s__70073){
return (new cljs.core.LazySeq(null,(function (){
var s__70073__$1 = s__70073;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70073__$1);
if(temp__5720__auto__){
var s__70073__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70073__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70073__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70075 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70074 = (0);
while(true){
if((i__70074 < size__4651__auto__)){
var vec__70076 = cljs.core._nth(c__4650__auto__,i__70074);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70076,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70076,(1),null);
cljs.core.chunk_append(b__70075,(function (){var temp__5720__auto____$1 = (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(config,child) : frontend.components.block.markup_element_cp.call(null,config,child));
if(cljs.core.truth_(temp__5720__auto____$1)){
var block__$2 = temp__5720__auto____$1;
return rum.core.with_key(frontend.components.block.block_child(block__$2),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));
} else {
return null;
}
})());

var G__70676 = (i__70074 + (1));
i__70074 = G__70676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70075),frontend$components$block$iter__70072(cljs.core.chunk_rest(s__70073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70075),null);
}
} else {
var vec__70079 = cljs.core.first(s__70073__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70079,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70079,(1),null);
return cljs.core.cons((function (){var temp__5720__auto____$1 = (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(config,child) : frontend.components.block.markup_element_cp.call(null,config,child));
if(cljs.core.truth_(temp__5720__auto____$1)){
var block__$2 = temp__5720__auto____$1;
return rum.core.with_key(frontend.components.block.block_child(block__$2),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));
} else {
return null;
}
})(),frontend$components$block$iter__70072(cljs.core.rest(s__70073__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(body__$1));
})());
})()]):null),(function (){var G__70082 = new cljs.core.Keyword("block","warning","block/warning",2131709542).cljs$core$IFn$_invoke$arity$1(block__$1);
var G__70082__$1 = (((G__70082 instanceof cljs.core.Keyword))?G__70082.fqn:null);
switch (G__70082__$1) {
case "multiple-blocks":
return daiquiri.core.create_element("p",{'className':"warning text-sm"},["Full content is not displayed, Logseq doesn't support multiple unordered lists or headings in a block."]);

break;
default:
return null;

}
})()])]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.block/block-content");
frontend.components.block.block_refs_count = rum.core.lazy_build(rum.core.build_defc,(function (block,_STAR_hide_block_refs_QMARK_){
var block_refs_count = cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block));
if((block_refs_count > (0))){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("a",{'title':"Open block references",'style':{'marginTop':(-1)},'onClick':(function (e){
if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_hide_block_refs_QMARK_,cljs.core.not);
}
}),'className':"open-block-ref-link bg-base-2 text-sm ml-2 fade-link"},[block_refs_count])]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.block/block-refs-count");
frontend.components.block.block_content_or_editor = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,p__70083,edit_input_id,block_id,heading_level,edit_QMARK_){
var map__70084 = p__70083;
var map__70084__$1 = cljs.core.__destructure_map(map__70084);
var block = map__70084__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70084__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70084__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var _STAR_hide_block_refs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"hide-block-refs?","hide-block-refs?",850709151));
var editor_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"editor-box","editor-box",708759870));
var editor_id = ["editor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(edit_input_id)].join('');
var slide_QMARK_ = new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_((function (){var and__4251__auto__ = edit_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return editor_box;
} else {
return and__4251__auto__;
}
})())){
return daiquiri.core.create_element("div",{'id':editor_id,'className':"editor-wrapper"},[frontend.ui.catch_error(frontend.ui.block_error("Something wrong in the editor",cljs.core.PersistentArrayMap.EMPTY),(function (){var G__70088 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"block-id","block-id",-70582834),uuid,new cljs.core.Keyword(null,"block-parent-id","block-parent-id",801282550),block_id,new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"heading-level","heading-level",563433452),heading_level,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (value,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"esc","esc",-1671924121))){
frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.editor.get_state(),value);

var select_QMARK_ = (!(clojure.string.includes_QMARK_(value,"```")));
return frontend.handler.editor.escape_editing.cljs$core$IFn$_invoke$arity$1(select_QMARK_);
} else {
return null;
}
})], null);
var G__70089 = edit_input_id;
var G__70090 = config;
return (editor_box.cljs$core$IFn$_invoke$arity$3 ? editor_box.cljs$core$IFn$_invoke$arity$3(G__70088,G__70089,G__70090) : editor_box.call(null,G__70088,G__70089,G__70090));
})())]);
} else {
var refs_count = cljs.core.count(new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block));
return daiquiri.core.create_element("div",{'className':"flex flex-col block-content-wrapper"},[daiquiri.core.create_element("div",{'className':"flex flex-row"},[daiquiri.core.create_element("div",{'style':{'display':(cljs.core.truth_(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))?"block":"flex")},'className':"flex-1 w-full"},[frontend.ui.catch_error(frontend.ui.block_error("Block Render Error:",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"section-attrs","section-attrs",1373816150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$4(edit_input_id,new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),block,"");
})], null)], null)),frontend.components.block.block_content(config,block,edit_input_id,block_id,slide_QMARK_))]),(function (){var attrs70091 = (cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354).cljs$core$IFn$_invoke$arity$1(config);
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.opacity-30.hover:opacity-100.svg-small.inline","a.opacity-30.hover:opacity-100.svg-small.inline",-362010986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
frontend.util.stop(e);

var temp__5720__auto__ = new cljs.core.Keyword(null,"embed-parent","embed-parent",1172681354).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5720__auto__)){
var block__$1 = temp__5720__auto__;
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block__$1,new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1));
} else {
return null;
}
})], null),frontend.components.svg.edit], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs70091))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center"], null)], null),attrs70091], 0))):{'className':"flex flex-row items-center"}),((cljs.core.map_QMARK_(attrs70091))?[frontend.components.block.block_refs_count(block,_STAR_hide_block_refs_QMARK_)]:[daiquiri.interpreter.interpret(attrs70091),frontend.components.block.block_refs_count(block,_STAR_hide_block_refs_QMARK_)]));
})()]),((((cljs.core.not(cljs.core.deref(_STAR_hide_block_refs_QMARK_))) && ((refs_count > (0)))))?(function (){var refs_cp = frontend.state.get_component(new cljs.core.Keyword("block","linked-references","block/linked-references",-2022711478));
return daiquiri.interpreter.interpret((refs_cp.cljs$core$IFn$_invoke$arity$1 ? refs_cp.cljs$core$IFn$_invoke$arity$1(uuid) : refs_cp.call(null,uuid)));
})():null)]);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(true,new cljs.core.Keyword(null,"hide-block-refs?","hide-block-refs?",850709151))], null),"frontend.components.block/block-content-or-editor");
frontend.components.block.non_dragging_QMARK_ = (function frontend$components$block$non_dragging_QMARK_(e){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.block.goog$module$goog$object.get(e,"buttons"),(1))) && ((((!(dommy.core.has_class_QMARK_(frontend.components.block.goog$module$goog$object.get(e,"target"),"bullet-container")))) && ((((!(dommy.core.has_class_QMARK_(frontend.components.block.goog$module$goog$object.get(e,"target"),"bullet")))) && (cljs.core.not(cljs.core.deref(frontend.components.block._STAR_dragging_QMARK_))))))));
});
frontend.components.block.breadcrumb_fragment = rum.core.lazy_build(rum.core.build_defc,(function (config,block,label,opts){
return daiquiri.core.create_element("a",{'onMouseDown':(function (e){
if(cljs.core.truth_(frontend.components.block.goog$module$goog$object.get(e,"shiftKey"))){
frontend.util.stop(e);

return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block-ref","block-ref",362929756));
} else {
if(frontend.util.atom_QMARK_(new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122).cljs$core$IFn$_invoke$arity$1(opts))){
frontend.util.stop(e);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
if((!((new cljs.core.Keyword(null,"sidebar-key","sidebar-key",2034878565).cljs$core$IFn$_invoke$arity$1(config) == null)))){
frontend.util.stop(e);

return frontend.state.sidebar_replace_block_BANG_(new cljs.core.Keyword(null,"sidebar-key","sidebar-key",2034878565).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))?new cljs.core.Keyword(null,"page","page",849072397):new cljs.core.Keyword(null,"block","block",664686210))], null));
} else {
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));

}
}
}
})},[daiquiri.interpreter.interpret(label)]);
}),null,"frontend.components.block/breadcrumb-fragment");
frontend.components.block.breadcrumb_separator = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("span",{'className':"mx-2 opacity-50"},["\u27A4"]);
}),null,"frontend.components.block/breadcrumb-separator");
frontend.components.block.breadcrumb = (function frontend$components$block$breadcrumb(config,repo,block_id,p__70094){
var map__70095 = p__70094;
var map__70095__$1 = cljs.core.__destructure_map(map__70095);
var opts = map__70095__$1;
var show_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70095__$1,new cljs.core.Keyword(null,"show-page?","show-page?",792494155),true);
var indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var level_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70095__$1,new cljs.core.Keyword(null,"level-limit","level-limit",-1660435238),(3));
var _navigating_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"_navigating-block","_navigating-block",-946999864));
var parents = (function (){var G__70096 = repo;
var G__70097 = block_id;
var G__70098 = (level_limit + (1));
return (frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_block_parents.cljs$core$IFn$_invoke$arity$3(G__70096,G__70097,G__70098) : frontend.db.get_block_parents.call(null,G__70096,G__70097,G__70098));
})();
var page = (frontend.db.get_block_page.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_block_page.cljs$core$IFn$_invoke$arity$2(repo,block_id) : frontend.db.get_block_page.call(null,repo,block_id));
var page_name = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
var page_original_name = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page);
var show_QMARK_ = (function (){var or__4253__auto__ = cljs.core.seq(parents);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = show_page_QMARK_;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return page_name;
}
}
})();
var parents__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(cljs.core.first(parents))))?cljs.core.rest(parents):parents);
var more_QMARK_ = (cljs.core.count(parents__$1) > level_limit);
var parents__$2 = ((more_QMARK_)?cljs.core.take_last(level_limit,parents__$1):parents__$1);
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363),true);
if(cljs.core.truth_(show_QMARK_)){
var page_name_props = (cljs.core.truth_(show_page_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,frontend.components.block.page_cp(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config__$1,new cljs.core.Keyword(null,"breadcrumb?","breadcrumb?",-1793266363),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var or__4253__auto__ = page_original_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return page_name;
}
})()], null)], null):null);
var parents_props = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$block$breadcrumb_$_iter__70099(s__70100){
return (new cljs.core.LazySeq(null,(function (){
var s__70100__$1 = s__70100;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70100__$1);
if(temp__5720__auto__){
var s__70100__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70100__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70100__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70102 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70101 = (0);
while(true){
if((i__70101 < size__4651__auto__)){
var map__70103 = cljs.core._nth(c__4650__auto__,i__70101);
var map__70103__$1 = cljs.core.__destructure_map(map__70103);
var block = map__70103__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70103__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70103__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70103__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
cljs.core.chunk_append(b__70102,(cljs.core.truth_(name)?null:(function (){var map__70104 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(uuid,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block),content);
var map__70104__$1 = cljs.core.__destructure_map(map__70104);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70104__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70104__$1,new cljs.core.Keyword("block","body","block/body",2004112880));
var config__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,((cljs.core.seq(title))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span","span",1394872991),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$2,title) : frontend.components.block.map_inline.call(null,config__$2,title))):frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config__$2,body) : frontend.components.block.markup_elements_cp.call(null,config__$2,body))))], null);
})()));

var G__70678 = (i__70101 + (1));
i__70101 = G__70678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70102),frontend$components$block$breadcrumb_$_iter__70099(cljs.core.chunk_rest(s__70100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70102),null);
}
} else {
var map__70105 = cljs.core.first(s__70100__$2);
var map__70105__$1 = cljs.core.__destructure_map(map__70105);
var block = map__70105__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70105__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70105__$1,new cljs.core.Keyword("block","name","block/name",1619760316));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70105__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
return cljs.core.cons((cljs.core.truth_(name)?null:(function (){var map__70106 = frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(uuid,new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block),content);
var map__70106__$1 = cljs.core.__destructure_map(map__70106);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70106__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70106__$1,new cljs.core.Keyword("block","body","block/body",2004112880));
var config__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,((cljs.core.seq(title))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"span","span",1394872991),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config__$2,title) : frontend.components.block.map_inline.call(null,config__$2,title))):frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config__$2,body) : frontend.components.block.markup_elements_cp.call(null,config__$2,body))))], null);
})()),frontend$components$block$breadcrumb_$_iter__70099(cljs.core.rest(s__70100__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(parents__$2);
})());
var breadcrumb = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(frontend.components.block.breadcrumb_separator(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.vector_QMARK_(x)){
var vec__70107 = x;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70107,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70107,(1),null);
return frontend.components.block.breadcrumb_fragment(config__$1,block,label,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70","span.opacity-70",1907592405),"\u22EF"], null);
}
}),cljs.core.filterv(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name_props], null),((more_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"more","more",-2058821800)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,parents_props)], 0)))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.breadcrumb.block-parents.flex-row.flex-1","div.breadcrumb.block-parents.flex-row.flex-1",499695762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.seq(breadcrumb))?[(cljs.core.truth_(new cljs.core.Keyword(null,"search?","search?",785472524).cljs$core$IFn$_invoke$arity$1(config__$1))?null:" my-2"),(cljs.core.truth_(indent_QMARK_)?" ml-4":null)].join(''):null)], null),breadcrumb], null);
} else {
return null;
}
});
frontend.components.block.block_drag_over = (function frontend$components$block$block_drag_over(event,uuid,top_QMARK_,block_id,_STAR_move_to){
frontend.util.stop(event);

if(frontend.components.block.dnd_same_block_QMARK_(uuid)){
return null;
} else {
var over_block = goog.dom.getElement(block_id);
var rect = module$frontend$utils.getOffsetRect(over_block);
var element_top = frontend.components.block.goog$module$goog$object.get(rect,"top");
var element_left = frontend.components.block.goog$module$goog$object.get(rect,"left");
var x_offset = (event.pageX - element_left);
var cursor_top = frontend.components.block.goog$module$goog$object.get(event,"clientY");
var move_to_value = (cljs.core.truth_((function (){var and__4251__auto__ = top_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (Math.abs((cursor_top - element_top)) <= (16));
} else {
return and__4251__auto__;
}
})())?new cljs.core.Keyword(null,"top","top",-1856271961):(((x_offset > (50)))?new cljs.core.Keyword(null,"nested","nested",18943849):new cljs.core.Keyword(null,"sibling","sibling",-1183865000)
));
cljs.core.reset_BANG_(frontend.components.block._STAR_drag_to_block,block_id);

return cljs.core.reset_BANG_(_STAR_move_to,move_to_value);
}
});
frontend.components.block.block_drag_leave = (function frontend$components$block$block_drag_leave(_STAR_move_to){
return cljs.core.reset_BANG_(_STAR_move_to,null);
});
frontend.components.block.block_drop = (function frontend$components$block$block_drop(event,uuid,target_block,_STAR_move_to){
frontend.util.stop(event);

if(frontend.components.block.dnd_same_block_QMARK_(uuid)){
} else {
var block_uuids_70679 = frontend.state.get_selection_block_ids();
var lookup_refs_70680 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
}),block_uuids_70679);
var selected_70681 = (function (){var G__70110 = frontend.state.get_current_repo();
var G__70111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__70112 = lookup_refs_70680;
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__70110,G__70111,G__70112) : frontend.db.pull_many.call(null,G__70110,G__70111,G__70112));
})();
var blocks_70682 = ((cljs.core.seq(selected_70681))?selected_70681:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(frontend.components.block._STAR_dragging_block)], null));
frontend.handler.dnd.move_blocks(event,blocks_70682,target_block,cljs.core.deref(_STAR_move_to));
}

cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_QMARK_,false);

cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_block,null);

cljs.core.reset_BANG_(frontend.components.block._STAR_drag_to_block,null);

cljs.core.reset_BANG_(_STAR_move_to,null);

return frontend.handler.editor.unhighlight_blocks_BANG_();
});
frontend.components.block.block_drag_end = (function frontend$components$block$block_drag_end(_event,_STAR_move_to){
cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_QMARK_,false);

cljs.core.reset_BANG_(frontend.components.block._STAR_dragging_block,null);

cljs.core.reset_BANG_(frontend.components.block._STAR_drag_to_block,null);

cljs.core.reset_BANG_(_STAR_move_to,null);

return frontend.handler.editor.unhighlight_blocks_BANG_();
});
frontend.components.block.block_mouse_over = (function frontend$components$block$block_mouse_over(uuid,e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_){
frontend.util.stop(e);

if(cljs.core.truth_((function (){var or__4253__auto__ = frontend.db.model.block_collapsed_QMARK_.cljs$core$IFn$_invoke$arity$1(uuid);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.handler.editor.collapsable_QMARK_.cljs$core$IFn$_invoke$arity$2(uuid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"semantic?","semantic?",-1258468577),true], null));
}
})())){
cljs.core.reset_BANG_(_STAR_control_show_QMARK_,true);
} else {
}

var temp__5720__auto___70683 = goog.dom.getElement(block_id);
if(cljs.core.truth_(temp__5720__auto___70683)){
var parent_70684 = temp__5720__auto___70683;
var node_70685 = parent_70684.querySelector(".bullet-container");
if(cljs.core.truth_(doc_mode_QMARK_)){
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(node_70685,"hide-inner-bullet");
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.state.in_selection_mode_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.components.block.non_dragging_QMARK_(e);
} else {
return and__4251__auto__;
}
})())){
frontend.util.stop(e);

return frontend.handler.editor.highlight_selection_area_BANG_(block_id);
} else {
return null;
}
});
frontend.components.block.block_mouse_leave = (function frontend$components$block$block_mouse_leave(e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_){
frontend.util.stop(e);

cljs.core.reset_BANG_(_STAR_control_show_QMARK_,false);

if(cljs.core.truth_(doc_mode_QMARK_)){
var temp__5720__auto___70686 = goog.dom.getElement(block_id);
if(cljs.core.truth_(temp__5720__auto___70686)){
var parent_70687 = temp__5720__auto___70686;
var temp__5720__auto___70688__$1 = parent_70687.querySelector(".bullet-container");
if(cljs.core.truth_(temp__5720__auto___70688__$1)){
var node_70689 = temp__5720__auto___70688__$1;
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node_70689,"hide-inner-bullet");
} else {
}
} else {
}
} else {
}

if(((frontend.components.block.non_dragging_QMARK_(e)) && (cljs.core.not(cljs.core.deref(frontend.components.block._STAR_resizing_image_QMARK_))))){
return frontend.state.into_selection_mode_BANG_();
} else {
return null;
}
});
frontend.components.block.on_drag_and_mouse_attrs = (function frontend$components$block$on_drag_and_mouse_attrs(block,uuid,top_QMARK_,block_id,_STAR_move_to){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (event){
return frontend.components.block.block_drag_over(event,uuid,top_QMARK_,block_id,_STAR_move_to);
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (_event){
return frontend.components.block.block_drag_leave(_STAR_move_to);
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (event){
return frontend.components.block.block_drop(event,uuid,block,_STAR_move_to);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (event){
return frontend.components.block.block_drag_end(event,_STAR_move_to);
})], null);
});
frontend.components.block.build_refs_data_value = (function frontend$components$block$build_refs_data_value(refs){
var refs__$1 = frontend.db.model.get_page_names_by_ids.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),refs)));
return logseq.graph_parser.text.build_data_value(refs__$1);
});
frontend.components.block.get_children_refs = (function frontend$components$block$get_children_refs(children){
var refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (m){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_(m);
if(and__4251__auto__){
return new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(m);
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(refs,cljs.core.concat,new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(m));
} else {
}

return m;
}),children);

return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(refs));
});
frontend.components.block.root_block_QMARK_ = (function frontend$components$block$root_block_QMARK_(config,block){
var and__4251__auto__ = new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = frontend.util.collapsed_QMARK_(block);
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
frontend.components.block.block_container_inner = rum.core.lazy_build(rum.core.build_defc,(function (state,repo,config,block){
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var custom_query_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config));
var ref_or_custom_query_QMARK_ = (function (){var or__4253__auto__ = ref_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return custom_query_QMARK_;
}
})();
var _STAR_navigating_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.block","navigating-block","frontend.components.block/navigating-block",1869853175));
var navigating_block = rum.core.react(_STAR_navigating_block);
var navigated_QMARK_ = (function (){var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),navigating_block);
if(and__4251__auto__){
return navigating_block;
} else {
return and__4251__auto__;
}
})();
var block__$1 = (cljs.core.truth_(navigated_QMARK_)?(function (){var block__$1 = (function (){var G__70117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),navigating_block], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__70117) : frontend.db.pull.call(null,G__70117));
})();
var blocks = (function (){var G__70118 = repo;
var G__70119 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1);
var G__70120 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1)], null);
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(G__70118,G__70119,G__70120) : frontend.db.get_paginated_blocks.call(null,G__70118,G__70119,G__70120));
})();
var tree = frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(blocks,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
return cljs.core.first(tree);
})():block);
var map__70116 = block__$1;
var map__70116__$1 = cljs.core.__destructure_map(map__70116);
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70116__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70116__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70116__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70116__$1,new cljs.core.Keyword("block","content","block/content",-161885195));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70116__$1,new cljs.core.Keyword("block","refs","block/refs",-1214495349));
var top_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70116__$1,new cljs.core.Keyword("block","top?","block/top?",-1838733025));
var heading_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70116__$1,new cljs.core.Keyword("block","heading-level","block/heading-level",661361785));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70116__$1,new cljs.core.Keyword("block","type","block/type",1537584409));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70116__$1,new cljs.core.Keyword("block","level","block/level",1182509971));
var pre_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70116__$1,new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521));
var config__$1 = (cljs.core.truth_(navigated_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(navigating_block)):config);
var block__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1,frontend.format.block.parse_title_and_body.cljs$core$IFn$_invoke$arity$4(uuid,format,pre_block_QMARK_,content)], 0));
var blocks_container_id = new cljs.core.Keyword(null,"blocks-container-id","blocks-container-id",-1500434340).cljs$core$IFn$_invoke$arity$1(config__$1);
var config__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(config__$1,new cljs.core.Keyword(null,"block","block",664686210),cljs.core.merge,block__$2);
var config__$3 = (((new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(config__$2) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$2,new cljs.core.Keyword(null,"query-result","query-result",-833644142),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):config__$2);
var heading_QMARK_ = (function (){var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"heading","heading",-1312171873));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = heading_level;
if(cljs.core.truth_(and__4251__auto__)){
return (heading_level <= (6));
} else {
return and__4251__auto__;
}
}
})();
var _STAR_control_show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.block","control-show?","frontend.components.block/control-show?",1638613539));
var db_collapsed_QMARK_ = frontend.util.collapsed_QMARK_(block__$2);
var collapsed_QMARK_ = (cljs.core.truth_((function (){var or__4253__auto__ = ref_or_custom_query_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.components.block.root_block_QMARK_(config__$3,block__$2);
}
})())?frontend.state.sub_collapsed(uuid):db_collapsed_QMARK_
);
var children__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = ref_or_custom_query_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(collapsed_QMARK_);
} else {
return and__4251__auto__;
}
})())?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("block","level","block/level",1182509971),(new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block__$2) + (1)));
}),frontend.db.model.sub_block_direct_children(repo,uuid)):children);
var breadcrumb_show_QMARK_ = new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369).cljs$core$IFn$_invoke$arity$1(config__$3);
var slide_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config__$3));
var doc_mode_QMARK_ = new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config__$3);
var embed_QMARK_ = new cljs.core.Keyword(null,"embed?","embed?",-922305920).cljs$core$IFn$_invoke$arity$1(config__$3);
var reference_QMARK_ = new cljs.core.Keyword(null,"reference?","reference?",983881698).cljs$core$IFn$_invoke$arity$1(config__$3);
var block_id = ["ls-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blocks_container_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join('');
var has_child_QMARK_ = cljs.core.first(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1((function (){var G__70121 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$2);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__70121) : frontend.db.entity.call(null,G__70121));
})()));
var attrs = frontend.components.block.on_drag_and_mouse_attrs(block__$2,uuid,top_QMARK_,block_id,frontend.components.block._STAR_move_to);
var children_refs = frontend.components.block.get_children_refs(children__$1);
var data_refs = frontend.components.block.build_refs_data_value(children_refs);
var data_refs_self = frontend.components.block.build_refs_data_value(refs);
var edit_input_id = ["edit-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blocks_container_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join('');
var edit_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),edit_input_id], null));
var card_QMARK_ = clojure.string.includes_QMARK_(data_refs_self,"\"card\"");
var review_cards_QMARK_ = new cljs.core.Keyword(null,"review-cards?","review-cards?",-1467055076).cljs$core$IFn$_invoke$arity$1(config__$3);
var attrs70115 = (function (){var G__70122 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),block_id,new cljs.core.Keyword(null,"data-refs","data-refs",1124640924),data_refs,new cljs.core.Keyword(null,"data-refs-self","data-refs-self",-1646359402),data_refs_self,new cljs.core.Keyword(null,"data-collapsed","data-collapsed",1225882164),(function (){var and__4251__auto__ = collapsed_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return has_child_QMARK_;
} else {
return and__4251__auto__;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),(cljs.core.truth_(pre_block_QMARK_)?" pre-block":null),((((card_QMARK_) && (cljs.core.not(review_cards_QMARK_))))?" shadow-xl":null),(cljs.core.truth_(new cljs.core.Keyword("ui","selected?","ui/selected?",-742546136).cljs$core$IFn$_invoke$arity$1(block__$2))?" selected noselect":null)].join(''),new cljs.core.Keyword(null,"blockid","blockid",-664467760),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),new cljs.core.Keyword(null,"haschild","haschild",1809599360),cljs.core.str.cljs$core$IFn$_invoke$arity$1(has_child_QMARK_)], null);
var G__70122__$1 = (cljs.core.truth_(level)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70122,new cljs.core.Keyword(null,"level","level",1290497552),level):G__70122);
var G__70122__$2 = (((!(slide_QMARK_)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__70122__$1,attrs], 0)):G__70122__$1);
var G__70122__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = reference_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return embed_QMARK_;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70122__$2,new cljs.core.Keyword(null,"data-transclude","data-transclude",-1499995699),true):G__70122__$2);
var G__70122__$4 = (cljs.core.truth_(embed_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70122__$3,new cljs.core.Keyword(null,"data-embed","data-embed",-1493193393),true):G__70122__$3);
if(custom_query_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70122__$4,new cljs.core.Keyword(null,"data-query","data-query",369270450),true);
} else {
return G__70122__$4;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs70115))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ls-block"], null)], null),attrs70115], 0))):{'className':"ls-block"}),((cljs.core.map_QMARK_(attrs70115))?[(cljs.core.truth_((function (){var and__4251__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return breadcrumb_show_QMARK_;
} else {
return and__4251__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.components.block.breadcrumb(config__$3,repo,uuid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-page?","show-page?",792494155),false,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block], null))):null),(cljs.core.truth_(top_QMARK_)?frontend.components.block.dnd_separator_wrapper(block__$2,block_id,slide_QMARK_,true,false):null),daiquiri.core.create_element("div",{'onMouseOver':(function (e){
return frontend.components.block.block_mouse_over(uuid,e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_);
}),'onMouseLeave':(function (e){
return frontend.components.block.block_mouse_leave(e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","pr-2",(cljs.core.truth_((function (){var and__4251__auto__ = heading_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block__$2));
} else {
return and__4251__auto__;
}
})())?"items-baseline":"")], null))},[(((!(slide_QMARK_)))?frontend.components.block.block_control(config__$3,block__$2,uuid,block_id,collapsed_QMARK_,_STAR_control_show_QMARK_,edit_QMARK_):null),frontend.components.block.block_content_or_editor(config__$3,block__$2,edit_input_id,block_id,heading_level,edit_QMARK_)]),frontend.components.block.block_children(config__$3,children__$1,collapsed_QMARK_),frontend.components.block.dnd_separator_wrapper(block__$2,block_id,slide_QMARK_,false,false)]:[daiquiri.interpreter.interpret(attrs70115),(cljs.core.truth_((function (){var and__4251__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return breadcrumb_show_QMARK_;
} else {
return and__4251__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.components.block.breadcrumb(config__$3,repo,uuid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-page?","show-page?",792494155),false,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block], null))):null),(cljs.core.truth_(top_QMARK_)?frontend.components.block.dnd_separator_wrapper(block__$2,block_id,slide_QMARK_,true,false):null),daiquiri.core.create_element("div",{'onMouseOver':(function (e){
return frontend.components.block.block_mouse_over(uuid,e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_);
}),'onMouseLeave':(function (e){
return frontend.components.block.block_mouse_leave(e,_STAR_control_show_QMARK_,block_id,doc_mode_QMARK_);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","pr-2",(cljs.core.truth_((function (){var and__4251__auto__ = heading_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block__$2));
} else {
return and__4251__auto__;
}
})())?"items-baseline":"")], null))},[(((!(slide_QMARK_)))?frontend.components.block.block_control(config__$3,block__$2,uuid,block_id,collapsed_QMARK_,_STAR_control_show_QMARK_,edit_QMARK_):null),frontend.components.block.block_content_or_editor(config__$3,block__$2,edit_input_id,block_id,heading_level,edit_QMARK_)]),frontend.components.block.block_children(config__$3,children__$1,collapsed_QMARK_),frontend.components.block.dnd_separator_wrapper(block__$2,block_id,slide_QMARK_,false,false)]));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.db_mixins.query], null),"frontend.components.block/block-container-inner");
frontend.components.block.block_container = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,block){
var repo = frontend.state.get_current_repo();
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var custom_query_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_((function (){var and__4251__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(custom_query_QMARK_))) && (cljs.core.not(new cljs.core.Keyword(null,"ref-query-child?","ref-query-child?",317345933).cljs$core$IFn$_invoke$arity$1(config))));
} else {
return and__4251__auto__;
}
})())){
return frontend.ui.lazy_visible((function (){
return frontend.components.block.block_container_inner(state,repo,config,block);
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-height?","reset-height?",1975120568),false], null));
} else {
return frontend.components.block.block_container_inner(state,repo,config,block);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var vec__70123 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70123,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70123,(1),null);
var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(frontend.components.block.root_block_QMARK_(config,block))){
frontend.state.set_collapsed_block_BANG_(block_id,false);
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
}
})())){
frontend.state.set_collapsed_block_BANG_(block_id,frontend.handler.editor.block_default_collapsed_QMARK_(block,config));
} else {

}
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("frontend.components.block","control-show?","frontend.components.block/control-show?",1638613539),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.components.block","navigating-block","frontend.components.block/navigating-block",1869853175),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))], 0));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
var compare_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","content","block/content",-161885195),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword("block","left","block/left",-443712566),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Keyword("block","_refs","block/_refs",830218531),new cljs.core.Keyword("ui","selected?","ui/selected?",-742546136)], null);
var config_compare_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-cloze?","show-cloze?",1773680872)], null);
var b1 = cljs.core.second(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state));
var b2 = cljs.core.second(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
var result = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(b1,compare_keys),cljs.core.select_keys(b2,compare_keys))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state)),config_compare_keys),cljs.core.select_keys(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)),config_compare_keys))));
return cljs.core.boolean$(result);
})], null)], null),"frontend.components.block/block-container");
frontend.components.block.divide_lists = (function frontend$components$block$divide_lists(p__70126){
var vec__70127 = p__70126;
var seq__70128 = cljs.core.seq(vec__70127);
var first__70129 = cljs.core.first(seq__70128);
var seq__70128__$1 = cljs.core.next(seq__70128);
var f = first__70129;
var l = seq__70128__$1;
var l__$1 = l;
var ordered_QMARK_ = new cljs.core.Keyword(null,"ordered","ordered",1187041426).cljs$core$IFn$_invoke$arity$1(f);
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null)], null);
while(true){
if(cljs.core.seq(l__$1)){
var cur = cljs.core.first(l__$1);
var cur_ordered_QMARK_ = new cljs.core.Keyword(null,"ordered","ordered",1187041426).cljs$core$IFn$_invoke$arity$1(cur);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ordered_QMARK_,cur_ordered_QMARK_)){
var G__70690 = cljs.core.rest(l__$1);
var G__70691 = cur_ordered_QMARK_;
var G__70692 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,(cljs.core.count(result) - (1)),cljs.core.conj,cur);
l__$1 = G__70690;
ordered_QMARK_ = G__70691;
result = G__70692;
continue;
} else {
var G__70693 = cljs.core.rest(l__$1);
var G__70694 = cur_ordered_QMARK_;
var G__70695 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur], null));
l__$1 = G__70693;
ordered_QMARK_ = G__70694;
result = G__70695;
continue;
}
} else {
return result;
}
break;
}
});
frontend.components.block.list_element = (function frontend$components$block$list_element(l){
try{if(((cljs.core.vector_QMARK_(l)) && ((cljs.core.count(l) >= (1))))){
try{var l_left__70131 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(l,(0),(1));
if(((cljs.core.vector_QMARK_(l_left__70131)) && ((cljs.core.count(l_left__70131) === (1))))){
var l1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l_left__70131,(0));
var _tl = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(l,(1));
var map__70140 = l1;
var map__70140__$1 = cljs.core.__destructure_map(map__70140);
var ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70140__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70140__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.seq(name)){
return new cljs.core.Keyword(null,"dl","dl",-2140151713);
} else {
if(cljs.core.truth_(ordered)){
return new cljs.core.Keyword(null,"ol","ol",932524051);
} else {
return new cljs.core.Keyword(null,"ul","ul",-1349521403);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70139){if((e70139 instanceof Error)){
var e__58854__auto__ = e70139;
if((e__58854__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto__;
}
} else {
throw e70139;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70138){if((e70138 instanceof Error)){
var e__58854__auto__ = e70138;
if((e__58854__auto__ === cljs.core.match.backtrack)){
return new cljs.core.Keyword(null,"ul","ul",-1349521403);
} else {
throw e__58854__auto__;
}
} else {
throw e70138;

}
}});
frontend.components.block.list_item = (function frontend$components$block$list_item(config,p__70142){
var map__70143 = p__70142;
var map__70143__$1 = cljs.core.__destructure_map(map__70143);
var _list = map__70143__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70143__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70143__$1,new cljs.core.Keyword(null,"content","content",15833224));
var checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70143__$1,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70143__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70143__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var content__$1 = ((cljs.core.empty_QMARK_(content))?null:(function (){try{if(((cljs.core.vector_QMARK_(content)) && ((cljs.core.count(content) >= (1))))){
try{var content_left__70146 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(content,(0),(1));
if(((cljs.core.vector_QMARK_(content_left__70146)) && ((cljs.core.count(content_left__70146) === (1))))){
try{var content_left__70146_0__70148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content_left__70146,(0));
if(((cljs.core.vector_QMARK_(content_left__70146_0__70148)) && ((cljs.core.count(content_left__70146_0__70148) === 2)))){
try{var content_left__70146_0__70148_0__70149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content_left__70146_0__70148,(0));
if((content_left__70146_0__70148_0__70149 === "Paragraph")){
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content_left__70146_0__70148,(1));
var rest = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(content,(1));
return frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,i) : frontend.components.block.map_inline.call(null,config,i)),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,rest) : frontend.components.block.markup_elements_cp.call(null,config,rest))], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e70154){if((e70154 instanceof Error)){
var e__58854__auto__ = e70154;
if((e__58854__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto__;
}
} else {
throw e70154;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70153){if((e70153 instanceof Error)){
var e__58854__auto__ = e70153;
if((e__58854__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto__;
}
} else {
throw e70153;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70152){if((e70152 instanceof Error)){
var e__58854__auto__ = e70152;
if((e__58854__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto__;
}
} else {
throw e70152;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70151){if((e70151 instanceof Error)){
var e__58854__auto__ = e70151;
if((e__58854__auto__ === cljs.core.match.backtrack)){
return (frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,content) : frontend.components.block.markup_elements_cp.call(null,config,content));
} else {
throw e__58854__auto__;
}
} else {
throw e70151;

}
}})());
var checked_QMARK_ = (!((checkbox == null)));
var items__$1 = ((cljs.core.seq(items))?frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(items),(function (){var iter__4652__auto__ = (function frontend$components$block$list_item_$_iter__70159(s__70160){
return (new cljs.core.LazySeq(null,(function (){
var s__70160__$1 = s__70160;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70160__$1);
if(temp__5720__auto__){
var s__70160__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70160__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70160__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70162 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70161 = (0);
while(true){
if((i__70161 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__70161);
cljs.core.chunk_append(b__70162,(frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2(config,item) : frontend.components.block.list_item.call(null,config,item)));

var G__70696 = (i__70161 + (1));
i__70161 = G__70696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70162),frontend$components$block$list_item_$_iter__70159(cljs.core.chunk_rest(s__70160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70162),null);
}
} else {
var item = cljs.core.first(s__70160__$2);
return cljs.core.cons((frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.list_item.cljs$core$IFn$_invoke$arity$2(config,item) : frontend.components.block.list_item.call(null,config,item)),frontend$components$block$list_item_$_iter__70159(cljs.core.rest(s__70160__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(items);
})()):null);
if(cljs.core.seq(name)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dt","dt",-368444759),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,name) : frontend.components.block.map_inline.call(null,config,name))], null),frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dd","dd",-1340437629),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items__$1], null)], 0)))], null);
} else {
if((checkbox == null)){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__70164 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null);
if(cljs.core.truth_(number)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70164,new cljs.core.Keyword(null,"value","value",305978217),number);
} else {
return G__70164;
}
})(),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),content__$1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items__$1], null)], 0)));
} else {
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"p","p",151049309),frontend.components.block.list_checkbox(config,checkbox),content__$1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items__$1], null)], 0)));
}

}
});
frontend.components.block.table = (function frontend$components$block$table(config,p__70168){
var map__70169 = p__70168;
var map__70169__$1 = cljs.core.__destructure_map(map__70169);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70169__$1,new cljs.core.Keyword(null,"header","header",119441134));
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70169__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var col_groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70169__$1,new cljs.core.Keyword(null,"col_groups","col_groups",409146122));
var tr = (function (elm,cols){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(elm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"class","class",-2030961996),"org-left"], null),(frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.map_inline.cljs$core$IFn$_invoke$arity$2(config,col) : frontend.components.block.map_inline.call(null,config,col)));
}),cols));
});
var tb_col_groups = (function (){try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (number){
var col_elem = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"org-left"], null)], null);
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colgroup","colgroup",651118645),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(number,col_elem));
}),col_groups);
}catch (e70170){if((e70170 instanceof Error)){
var _e = e70170;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e70170;

}
}})();
var head = (cljs.core.truth_(header)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),tr(new cljs.core.Keyword(null,"th","th",-545608566),header)], null):null);
var groups__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (group){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__70167_SHARP_){
return tr(new cljs.core.Keyword(null,"td","td",1479933353),p1__70167_SHARP_);
}),group));
}),groups);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-wrapper","div.table-wrapper",-440600779),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(function (){var x__4339__auto__ = (700);
var y__4340__auto__ = frontend.components.block.goog$module$goog$object.get(window,"innerWidth");
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})()], null)], null),frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-auto",new cljs.core.Keyword(null,"border","border",1444987323),(2),new cljs.core.Keyword(null,"cell-spacing","cell-spacing",769666488),(0),new cljs.core.Keyword(null,"cell-padding","cell-padding",978029542),(6),new cljs.core.Keyword(null,"rules","rules",1198912366),"groups",new cljs.core.Keyword(null,"frame","frame",-1711082588),"hsides"], null),frontend.components.block.vec_cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tb_col_groups,cljs.core.cons(head,groups__$1)], 0)))], null);
});
frontend.components.block.logbook_cp = (function frontend$components$block$logbook_cp(log){
var clocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__70176_SHARP_){
return clojure.string.starts_with_QMARK_(p1__70176_SHARP_,"CLOCK:");
}),log);
var clocks__$1 = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.str,clocks));
if(cljs.core.seq(clocks__$1)){
var tr = (function (elm,cols){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(elm,col);
}),cols));
});
var head = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.overflow-x-scroll","thead.overflow-x-scroll",-1443349947),tr(new cljs.core.Keyword(null,"th.py-0","th.py-0",-1646316549),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Type","Start","End","Span"], null))], null);
var clock_tbody = frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tbody.overflow-scroll.sm:overflow-auto","tbody.overflow-scroll.sm:overflow-auto",-1641803105),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (clock){
var cols = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clock,/: |--|=>/));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__70181_SHARP_){
return tr(new cljs.core.Keyword(null,"td.py-0","td.py-0",822181071),p1__70181_SHARP_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cols], null));
}),clocks__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-scroll.sm:overflow-auto","div.overflow-x-scroll.sm:overflow-auto",-2014695040),frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"table.m-0","table.m-0",617884663),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"logbook-table",new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"max-content"], null),new cljs.core.Keyword(null,"cell-spacing","cell-spacing",769666488),(15)], null),cljs.core.cons(head,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clock_tbody], null)))], null);
} else {
return null;
}
});
frontend.components.block.map_inline = (function frontend$components$block$map_inline(config,col){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70183_SHARP_){
return frontend.components.block.inline(config,p1__70183_SHARP_);
}),col);
});
frontend.components.block.built_in_custom_query_QMARK_ = (function frontend$components$block$built_in_custom_query_QMARK_(title){
var repo = frontend.state.get_current_repo();
var queries = frontend.state.sub(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo,new cljs.core.Keyword(null,"default-queries","default-queries",1508774260),new cljs.core.Keyword(null,"journals","journals",-1915761091)], null));
if(cljs.core.seq(queries)){
return cljs.core.boolean$(cljs.core.some((function (p1__70186_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__70186_SHARP_,title);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583),queries)));
} else {
return null;
}
});
frontend.components.block.trigger_custom_query_BANG_ = (function frontend$components$block$trigger_custom_query_BANG_(state){
var vec__70194 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70194,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70194,(1),null);
var repo = frontend.state.get_current_repo();
var result_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var query_atom = (cljs.core.truth_(new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662).cljs$core$IFn$_invoke$arity$1(config))?(function (){var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query);
var form = frontend.components.block.safe_read_string.cljs$core$IFn$_invoke$arity$2(q,false);
if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return (form instanceof cljs.core.Symbol);
} else {
return and__4251__auto__;
}
})())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.block_search(repo,clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(30)], null)),(function (blocks){
return promesa.protocols._promise(((cljs.core.seq(blocks))?(function (){var result = (function (){var G__70197 = frontend.state.get_current_repo();
var G__70198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__70199 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b))], null);
}),blocks);
return (frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3 ? frontend.db.pull_many.cljs$core$IFn$_invoke$arity$3(G__70197,G__70198,G__70199) : frontend.db.pull_many.call(null,G__70197,G__70198,G__70199));
})();
return cljs.core.reset_BANG_(result_atom,result);
})():null));
}));
}));
} else {
if((form instanceof cljs.core.Symbol)){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
} else {
return frontend.db.query_dsl.query(frontend.state.get_current_repo(),q);

}
}
})():(frontend.db.custom_query.cljs$core$IFn$_invoke$arity$1 ? frontend.db.custom_query.cljs$core$IFn$_invoke$arity$1(query) : frontend.db.custom_query.call(null,query)));
var query_atom__$1 = (((query_atom instanceof cljs.core.Atom))?query_atom:result_atom);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"query-atom","query-atom",-1533727884),query_atom__$1);
});
frontend.components.block.custom_query_STAR_ = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,p__70204){
var map__70205 = p__70204;
var map__70205__$1 = cljs.core.__destructure_map(map__70205);
var q = map__70205__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70205__$1,new cljs.core.Keyword(null,"title","title",636505583));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70205__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70205__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70205__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70205__$1,new cljs.core.Keyword(null,"children?","children?",-1199594108));
var breadcrumb_show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70205__$1,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369));
var dsl_query_QMARK_ = new cljs.core.Keyword(null,"dsl-query?","dsl-query?",-1061528662).cljs$core$IFn$_invoke$arity$1(config);
var query_atom = new cljs.core.Keyword(null,"query-atom","query-atom",-1533727884).cljs$core$IFn$_invoke$arity$1(state);
var current_block_uuid = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
}
})();
var current_block = (function (){var G__70206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),current_block_uuid], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__70206) : frontend.db.entity.call(null,G__70206));
})();
var remove_blocks = (cljs.core.truth_(current_block_uuid)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_block_uuid], null):null);
var query_result = (function (){var and__4251__auto__ = query_atom;
if(cljs.core.truth_(and__4251__auto__)){
return rum.core.react(query_atom);
} else {
return and__4251__auto__;
}
})();
var table_QMARK_ = (function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-table","query-table",2095143554)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((typeof query === 'string') && (clojure.string.ends_with_QMARK_(clojure.string.trim(query),"table")));
}
})();
var transformed_query_result = (cljs.core.truth_(query_result)?(frontend.db.custom_query_result_transform.cljs$core$IFn$_invoke$arity$3 ? frontend.db.custom_query_result_transform.cljs$core$IFn$_invoke$arity$3(query_result,remove_blocks,q) : frontend.db.custom_query_result_transform.call(null,query_result,remove_blocks,q)):null);
var not_grouped_by_page_QMARK_ = (function (){var or__4253__auto__ = table_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((cljs.core.boolean$(new cljs.core.Keyword(null,"result-transform","result-transform",1904908186).cljs$core$IFn$_invoke$arity$1(q))) || (((typeof query === 'string') && (clojure.string.includes_QMARK_(query,"(by-page false)")))));
}
})();
var result = (cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(transformed_query_result));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(not_grouped_by_page_QMARK_);
} else {
return and__4251__auto__;
}
})())?frontend.db.utils.group_by_page(transformed_query_result):transformed_query_result);
var _ = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"query-result","query-result",-833644142).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5720__auto__)){
var query_result__$1 = temp__5720__auto__;
var result__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"template","template",-702405684)], null)) == null)));
}),result);
return cljs.core.reset_BANG_(query_result__$1,result__$1);
} else {
return null;
}
})();
var view_f = (function (){var and__4251__auto__ = view;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.extensions.sci.eval_string(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([view], 0)));
} else {
return and__4251__auto__;
}
})();
var only_blocks_QMARK_ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(result));
var blocks_grouped_by_page_QMARK_ = (function (){var and__4251__auto__ = cljs.core.seq(result);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.not(not_grouped_by_page_QMARK_);
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core.coll_QMARK_(cljs.core.first(result));
if(and__4251__auto____$2){
var and__4251__auto____$3 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(result));
if(cljs.core.truth_(and__4251__auto____$3)){
var and__4251__auto____$4 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.second(cljs.core.first(result))));
if(cljs.core.truth_(and__4251__auto____$4)){
return true;
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
var built_in_QMARK_ = frontend.components.block.built_in_custom_query_QMARK_(title);
var page_list_QMARK_ = (function (){var and__4251__auto__ = cljs.core.seq(result);
if(and__4251__auto__){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(cljs.core.first(result));
} else {
return and__4251__auto__;
}
})();
var nested_query_QMARK_ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(nested_query_QMARK_)){
var attrs70209 = (cljs.core.truth_(dsl_query_QMARK_)?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{query %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0)):"{{query hidden}}");
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs70209))?daiquiri.interpreter.element_attributes(attrs70209):null),((cljs.core.map_QMARK_(attrs70209))?null:[daiquiri.interpreter.interpret(attrs70209)]));
} else {
var attrs70210 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.EMPTY);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs70210))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["custom-query","mt-4"], null)], null),attrs70210], 0))):{'className':"custom-query mt-4"}),((cljs.core.map_QMARK_(attrs70210))?[(cljs.core.truth_((function (){var and__4251__auto__ = built_in_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.empty_QMARK_(result);
} else {
return and__4251__auto__;
}
})())?null:frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.custom-query-title","div.custom-query-title",-542963762),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title-text","span.title-text",-1943630076),((cljs.core.vector_QMARK_(title))?title:((typeof title === 'string')?frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3(config,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null),new cljs.core.Keyword(null,"markdown","markdown",1227225089)),title):title
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60.text-sm.ml-2.results-count","span.opacity-60.text-sm.ml-2.results-count",330902893),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(transformed_query_result))," results"].join('')], null)], null),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(current_block)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.align-items.mt-2","div.flex.flex-row.align-items.mt-2",797823388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return frontend.util.stop(e);
})], null),(cljs.core.truth_(page_list_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-2","div.mx-2",1012214686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm","span.text-sm",1152322665),"Table view"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(table_QMARK_,(function (){
return frontend.handler.editor.set_block_property_BANG_(current_block_uuid,"query-table",cljs.core.not(table_QMARK_));
}),true)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mx-2.block.fade-link","a.mx-2.block.fade-link",-492124150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var all_keys = frontend.components.query_table.get_keys(result,page_list_QMARK_);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),current_block,all_keys], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.table-query-properties","span.table-query-properties",-510931416),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.mr-1","span.text-sm.mr-1",2106775780),"Set properties"], null),frontend.components.svg.settings_sm], null)], null)], null):null),(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.seq(result);
if(and__4251__auto__){
return view_f;
} else {
return and__4251__auto__;
}
})())?(function (){var result__$1 = (function (){try{return frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic(view_f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
}catch (e70220){if((e70220 instanceof Error)){
var error = e70220;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.block",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"custom-view-failed","custom-view-failed",-1564949541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"result","result",1415092211),result], null),new cljs.core.Keyword(null,"line","line",212345235),2725], null)),null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Custom view failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
} else {
throw e70220;

}
}})();
return frontend.util.hiccup_keywordize(result__$1);
})():(cljs.core.truth_(page_list_QMARK_)?frontend.components.query_table.result_table(config,current_block,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page?","page?",644039860),true], null),frontend.components.block.map_inline,frontend.components.block.page_cp,frontend.components.block.__GT_elem,frontend.components.block.inline_text):(cljs.core.truth_(table_QMARK_)?frontend.components.query_table.result_table(config,current_block,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page?","page?",644039860),false], null),frontend.components.block.map_inline,frontend.components.block.page_cp,frontend.components.block.__GT_elem,frontend.components.block.inline_text):(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.seq(result);
if(and__4251__auto__){
var or__4253__auto__ = only_blocks_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return blocks_grouped_by_page_QMARK_;
}
} else {
return and__4251__auto__;
}
})())?(function (){var G__70221 = result;
var G__70222 = (function (){var G__70224 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),(((!((breadcrumb_show_QMARK_ == null))))?breadcrumb_show_QMARK_:true),new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),blocks_grouped_by_page_QMARK_,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true], 0));
if(cljs.core.truth_(children_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70224,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true);
} else {
return G__70224;
}
})();
var G__70223 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null);
return (frontend.components.block.__GT_hiccup.cljs$core$IFn$_invoke$arity$3 ? frontend.components.block.__GT_hiccup.cljs$core$IFn$_invoke$arity$3(G__70221,G__70222,G__70223) : frontend.components.block.__GT_hiccup.call(null,G__70221,G__70222,G__70223));
})():((cljs.core.seq(result))?(function (){var result__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4652__auto__ = (function frontend$components$block$iter__70225(s__70226){
return (new cljs.core.LazySeq(null,(function (){
var s__70226__$1 = s__70226;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70226__$1);
if(temp__5720__auto__){
var s__70226__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70226__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70226__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70228 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70227 = (0);
while(true){
if((i__70227 < size__4651__auto__)){
var record = cljs.core._nth(c__4650__auto__,i__70227);
cljs.core.chunk_append(b__70228,((cljs.core.map_QMARK_(record))?[frontend.util.pp_str(record),"\n"].join(''):record));

var G__70716 = (i__70227 + (1));
i__70227 = G__70716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70228),frontend$components$block$iter__70225(cljs.core.chunk_rest(s__70226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70228),null);
}
} else {
var record = cljs.core.first(s__70226__$2);
return cljs.core.cons(((cljs.core.map_QMARK_(record))?[frontend.util.pp_str(record),"\n"].join(''):record),frontend$components$block$iter__70225(cljs.core.rest(s__70226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(result);
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),result__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.mt-2.ml-2.font-medium.opacity-50","div.text-sm.mt-2.ml-2.font-medium.opacity-50",847707529),"Empty"], null)
)))))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),collapsed_QMARK_,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null)))]:[daiquiri.interpreter.interpret(attrs70210),(cljs.core.truth_((function (){var and__4251__auto__ = built_in_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.empty_QMARK_(result);
} else {
return and__4251__auto__;
}
})())?null:frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.custom-query-title","div.custom-query-title",-542963762),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title-text","span.title-text",-1943630076),((cljs.core.vector_QMARK_(title))?title:((typeof title === 'string')?frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$3(config,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","format","block/format",-1212045901)], null),new cljs.core.Keyword(null,"markdown","markdown",1227225089)),title):title
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60.text-sm.ml-2.results-count","span.opacity-60.text-sm.ml-2.results-count",330902893),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(transformed_query_result))," results"].join('')], null)], null),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(current_block)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.align-items.mt-2","div.flex.flex-row.align-items.mt-2",797823388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return frontend.util.stop(e);
})], null),(cljs.core.truth_(page_list_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-2","div.mx-2",1012214686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm","span.text-sm",1152322665),"Table view"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(table_QMARK_,(function (){
return frontend.handler.editor.set_block_property_BANG_(current_block_uuid,"query-table",cljs.core.not(table_QMARK_));
}),true)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.mx-2.block.fade-link","a.mx-2.block.fade-link",-492124150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var all_keys = frontend.components.query_table.get_keys(result,page_list_QMARK_);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),current_block,all_keys], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.table-query-properties","span.table-query-properties",-510931416),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.mr-1","span.text-sm.mr-1",2106775780),"Set properties"], null),frontend.components.svg.settings_sm], null)], null)], null):null),(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.seq(result);
if(and__4251__auto__){
return view_f;
} else {
return and__4251__auto__;
}
})())?(function (){var result__$1 = (function (){try{return frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic(view_f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
}catch (e70240){if((e70240 instanceof Error)){
var error = e70240;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.block",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"custom-view-failed","custom-view-failed",-1564949541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"result","result",1415092211),result], null),new cljs.core.Keyword(null,"line","line",212345235),2725], null)),null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Custom view failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
} else {
throw e70240;

}
}})();
return frontend.util.hiccup_keywordize(result__$1);
})():(cljs.core.truth_(page_list_QMARK_)?frontend.components.query_table.result_table(config,current_block,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page?","page?",644039860),true], null),frontend.components.block.map_inline,frontend.components.block.page_cp,frontend.components.block.__GT_elem,frontend.components.block.inline_text):(cljs.core.truth_(table_QMARK_)?frontend.components.query_table.result_table(config,current_block,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page?","page?",644039860),false], null),frontend.components.block.map_inline,frontend.components.block.page_cp,frontend.components.block.__GT_elem,frontend.components.block.inline_text):(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.seq(result);
if(and__4251__auto__){
var or__4253__auto__ = only_blocks_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return blocks_grouped_by_page_QMARK_;
}
} else {
return and__4251__auto__;
}
})())?(function (){var G__70241 = result;
var G__70242 = (function (){var G__70244 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),(((!((breadcrumb_show_QMARK_ == null))))?breadcrumb_show_QMARK_:true),new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448),blocks_grouped_by_page_QMARK_,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true], 0));
if(cljs.core.truth_(children_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70244,new cljs.core.Keyword(null,"ref?","ref?",1932693720),true);
} else {
return G__70244;
}
})();
var G__70243 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.25rem",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.25rem"], null)], null);
return (frontend.components.block.__GT_hiccup.cljs$core$IFn$_invoke$arity$3 ? frontend.components.block.__GT_hiccup.cljs$core$IFn$_invoke$arity$3(G__70241,G__70242,G__70243) : frontend.components.block.__GT_hiccup.call(null,G__70241,G__70242,G__70243));
})():((cljs.core.seq(result))?(function (){var result__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4652__auto__ = (function frontend$components$block$iter__70245(s__70246){
return (new cljs.core.LazySeq(null,(function (){
var s__70246__$1 = s__70246;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70246__$1);
if(temp__5720__auto__){
var s__70246__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70246__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70246__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70248 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70247 = (0);
while(true){
if((i__70247 < size__4651__auto__)){
var record = cljs.core._nth(c__4650__auto__,i__70247);
cljs.core.chunk_append(b__70248,((cljs.core.map_QMARK_(record))?[frontend.util.pp_str(record),"\n"].join(''):record));

var G__70721 = (i__70247 + (1));
i__70247 = G__70721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70248),frontend$components$block$iter__70245(cljs.core.chunk_rest(s__70246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70248),null);
}
} else {
var record = cljs.core.first(s__70246__$2);
return cljs.core.cons(((cljs.core.map_QMARK_(record))?[frontend.util.pp_str(record),"\n"].join(''):record),frontend$components$block$iter__70245(cljs.core.rest(s__70246__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(result);
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),result__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.mt-2.ml-2.font-medium.opacity-50","div.text-sm.mt-2.ml-2.font-medium.opacity-50",847707529),"Empty"], null)
)))))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),collapsed_QMARK_,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null)))]));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),frontend.components.block.trigger_custom_query_BANG_,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var temp__5720__auto___70722 = cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5720__auto___70722)){
var query_70723 = temp__5720__auto___70722;
frontend.state.add_custom_query_component_BANG_(query_70723,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
} else {
}

return state;
}),new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),(function (_old_state,state){
return frontend.components.block.trigger_custom_query_BANG_(state);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var temp__5720__auto___70724 = cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5720__auto___70724)){
var query_70725 = temp__5720__auto___70724;
frontend.state.remove_custom_query_component_BANG_(query_70725);

var G__70249_70726 = frontend.state.get_current_repo();
var G__70250_70727 = query_70725;
(frontend.db.remove_custom_query_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.remove_custom_query_BANG_.cljs$core$IFn$_invoke$arity$2(G__70249_70726,G__70250_70727) : frontend.db.remove_custom_query_BANG_.call(null,G__70249_70726,G__70250_70727));
} else {
}

return state;
})], null)], null),"frontend.components.block/custom-query*");
frontend.components.block.custom_query = rum.core.lazy_build(rum.core.build_defc,(function (config,q){
return frontend.ui.catch_error(frontend.ui.block_error("Query Error:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(q)], null)),frontend.ui.lazy_visible((function (){
return frontend.components.block.custom_query_STAR_(config,q);
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-height?","reset-height?",1975120568),true], null)));
}),null,"frontend.components.block/custom-query");
frontend.components.block.admonition = (function frontend$components$block$admonition(config,type,result){
var temp__5720__auto__ = (function (){var G__70251 = clojure.string.lower_case(cljs.core.name(type));
switch (G__70251) {
case "note":
return frontend.components.svg.note;

break;
case "tip":
return frontend.components.svg.tip;

break;
case "important":
return frontend.components.svg.important;

break;
case "caution":
return frontend.components.svg.caution;

break;
case "warning":
return frontend.components.svg.warning;

break;
case "pinned":
return frontend.components.svg.pinned;

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var icon = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.admonitionblock.align-items","div.flex.flex-row.admonitionblock.align-items",-513234862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pr-4.admonition-icon.flex.flex-col.justify-center","div.pr-4.admonition-icon.flex.flex-col.justify-center",-1325303445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),clojure.string.upper_case(type)], null),(icon.cljs$core$IFn$_invoke$arity$0 ? icon.cljs$core$IFn$_invoke$arity$0() : icon.call(null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-4.text-lg","div.ml-4.text-lg",525424974),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,result) : frontend.components.block.markup_elements_cp.call(null,config,result))], null)], null);
} else {
return null;
}
});
frontend.components.block.src_cp = rum.core.lazy_build(rum.core.build_defc,(function (config,options,html_export_QMARK_){
if(cljs.core.truth_(options)){
var map__70252 = options;
var map__70252__$1 = cljs.core.__destructure_map(map__70252);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70252__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70252__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var attr = (cljs.core.truth_(language)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),language], null):null);
var code = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lines);
if(cljs.core.truth_(html_export_QMARK_)){
return daiquiri.interpreter.interpret(frontend.extensions.highlight.html_export(attr,code));
} else {
var language__$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["cljc",null,"cljs",null,"clj",null,"edn",null], null), null),language))?"clojure":language);
if(cljs.core.truth_(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))){
return frontend.extensions.highlight.highlight(cljs.core.str.cljs$core$IFn$_invoke$arity$1(medley.core.random_uuid()),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(language__$1)].join(''),new cljs.core.Keyword(null,"data-lang","data-lang",969460304),language__$1], null),code);
} else {
return daiquiri.core.create_element("div",null,[frontend.components.lazy_editor.editor(config,cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0()),attr,code,options),(function (){var options__$1 = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(options);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(language__$1,"clojure")) && (cljs.core.contains_QMARK_(cljs.core.set(options__$1),":results")))){
return daiquiri.interpreter.interpret(frontend.extensions.sci.eval_result(code));
} else {
return null;
}
})()]);
}

}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.block/src-cp");
frontend.components.block.markup_element_cp = (function frontend$components$block$markup_element_cp(p__70255,item){
var map__70256 = p__70255;
var map__70256__$1 = cljs.core.__destructure_map(map__70256);
var config = map__70256__$1;
var html_export_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70256__$1,new cljs.core.Keyword(null,"html-export?","html-export?",504770426));
var format = (function (){var or__4253__auto__ = new cljs.core.Keyword("block","format","block/format",-1212045901).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})();
try{try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 3)))){
try{var item_0__70259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70259 === "Drawer")){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,"logbook");
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"logbook");
if(and__4251__auto__){
var and__4251__auto____$1 = frontend.state.enable_timetracking_QMARK_();
if(and__4251__auto____$1){
var or__4253__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logbook","settings","logbook/settings",824968896),new cljs.core.Keyword(null,"enabled-in-all-blocks","enabled-in-all-blocks",198719485)], null));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logbook","settings","logbook/settings",824968896),new cljs.core.Keyword(null,"enabled-in-timestamped-blocks","enabled-in-timestamped-blocks",-1770816511)], null),true))){
var or__4253__auto____$2 = new cljs.core.Keyword("block","scheduled","block/scheduled",584810412).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return new cljs.core.Keyword("block","deadline","block/deadline",660945231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(config));
}
} else {
return null;
}
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.drawer","div.drawer",757685167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-drawer-name","data-drawer-name",532418125),name], null),frontend.ui.foldable(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50.font-medium.logbook","div.opacity-50.font-medium.logbook",-155596154),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(":%s:",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.upper_case(name)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50.font-medium","div.opacity-50.font-medium",-1010985565),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"logbook"))?frontend.components.block.logbook_cp(lines):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lines)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),":END:"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873),true], null))], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70370){if((e70370 instanceof Error)){
var e__58854__auto__ = e70370;
if((e__58854__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto__;
}
} else {
throw e70370;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70300){if((e70300 instanceof Error)){
var e__58854__auto__ = e70300;
if((e__58854__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__70262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70262 === "Properties")){
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.properties","div.properties",1966377833),(function (){var iter__4652__auto__ = (function frontend$components$block$markup_element_cp_$_iter__70352(s__70353){
return (new cljs.core.LazySeq(null,(function (){
var s__70353__$1 = s__70353;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70353__$1);
if(temp__5720__auto__){
var s__70353__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70353__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70353__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70355 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70354 = (0);
while(true){
if((i__70354 < size__4651__auto__)){
var vec__70356 = cljs.core._nth(c__4650__auto__,i__70354);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70356,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70356,(1),null);
cljs.core.chunk_append(b__70355,(((((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"macros","macros",811339431))) && (cljs.core.empty_QMARK_(v)))))) && ((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"title","title",636505583))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"filters","filters",974726919)))))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property","div.property",-952342101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.mr-1","span.font-medium.mr-1",-1994988386),[cljs.core.name(k),": "].join('')], null),((cljs.core.coll_QMARK_(v))?(function (){var vals = (function (){var iter__4652__auto__ = ((function (i__70354,vec__70356,k,v,c__4650__auto__,size__4651__auto__,b__70355,s__70353__$2,temp__5720__auto__,m,item_0__70262,e__58854__auto__,format,map__70256,map__70256__$1,config,html_export_QMARK_){
return (function frontend$components$block$markup_element_cp_$_iter__70352_$_iter__70359(s__70360){
return (new cljs.core.LazySeq(null,((function (i__70354,vec__70356,k,v,c__4650__auto__,size__4651__auto__,b__70355,s__70353__$2,temp__5720__auto__,m,item_0__70262,e__58854__auto__,format,map__70256,map__70256__$1,config,html_export_QMARK_){
return (function (){
var s__70360__$1 = s__70360;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__70360__$1);
if(temp__5720__auto____$1){
var s__70360__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70360__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__70360__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__70362 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__70361 = (0);
while(true){
if((i__70361 < size__4651__auto____$1)){
var item__$1 = cljs.core._nth(c__4650__auto____$1,i__70361);
cljs.core.chunk_append(b__70362,((cljs.core.coll_QMARK_(v))?(function (){var config__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"alias","alias",-2039751630)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","alias?","block/alias?",-551896044),true):null);
return frontend.components.block.page_cp(config__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null));
})():frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2(format,item__$1)));

var G__70742 = (i__70361 + (1));
i__70361 = G__70742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70362),frontend$components$block$markup_element_cp_$_iter__70352_$_iter__70359(cljs.core.chunk_rest(s__70360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70362),null);
}
} else {
var item__$1 = cljs.core.first(s__70360__$2);
return cljs.core.cons(((cljs.core.coll_QMARK_(v))?(function (){var config__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"alias","alias",-2039751630)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","alias?","block/alias?",-551896044),true):null);
return frontend.components.block.page_cp(config__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null));
})():frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2(format,item__$1)),frontend$components$block$markup_element_cp_$_iter__70352_$_iter__70359(cljs.core.rest(s__70360__$2)));
}
} else {
return null;
}
break;
}
});})(i__70354,vec__70356,k,v,c__4650__auto__,size__4651__auto__,b__70355,s__70353__$2,temp__5720__auto__,m,item_0__70262,e__58854__auto__,format,map__70256,map__70256__$1,config,html_export_QMARK_))
,null,null));
});})(i__70354,vec__70356,k,v,c__4650__auto__,size__4651__auto__,b__70355,s__70353__$2,temp__5720__auto__,m,item_0__70262,e__58854__auto__,format,map__70256,map__70256__$1,config,html_export_QMARK_))
;
return iter__4652__auto__(v);
})();
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals);
})():frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2(format,v))], null):null));

var G__70745 = (i__70354 + (1));
i__70354 = G__70745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70355),frontend$components$block$markup_element_cp_$_iter__70352(cljs.core.chunk_rest(s__70353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70355),null);
}
} else {
var vec__70363 = cljs.core.first(s__70353__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70363,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70363,(1),null);
return cljs.core.cons((((((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"macros","macros",811339431))) && (cljs.core.empty_QMARK_(v)))))) && ((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"title","title",636505583))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"filters","filters",974726919)))))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.property","div.property",-952342101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium.mr-1","span.font-medium.mr-1",-1994988386),[cljs.core.name(k),": "].join('')], null),((cljs.core.coll_QMARK_(v))?(function (){var vals = (function (){var iter__4652__auto__ = ((function (vec__70363,k,v,s__70353__$2,temp__5720__auto__,m,item_0__70262,e__58854__auto__,format,map__70256,map__70256__$1,config,html_export_QMARK_){
return (function frontend$components$block$markup_element_cp_$_iter__70352_$_iter__70366(s__70367){
return (new cljs.core.LazySeq(null,(function (){
var s__70367__$1 = s__70367;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__70367__$1);
if(temp__5720__auto____$1){
var s__70367__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70367__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70367__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70369 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70368 = (0);
while(true){
if((i__70368 < size__4651__auto__)){
var item__$1 = cljs.core._nth(c__4650__auto__,i__70368);
cljs.core.chunk_append(b__70369,((cljs.core.coll_QMARK_(v))?(function (){var config__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"alias","alias",-2039751630)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","alias?","block/alias?",-551896044),true):null);
return frontend.components.block.page_cp(config__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null));
})():frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2(format,item__$1)));

var G__70746 = (i__70368 + (1));
i__70368 = G__70746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70369),frontend$components$block$markup_element_cp_$_iter__70352_$_iter__70366(cljs.core.chunk_rest(s__70367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70369),null);
}
} else {
var item__$1 = cljs.core.first(s__70367__$2);
return cljs.core.cons(((cljs.core.coll_QMARK_(v))?(function (){var config__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"alias","alias",-2039751630)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","alias?","block/alias?",-551896044),true):null);
return frontend.components.block.page_cp(config__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","name","block/name",1619760316),item__$1], null));
})():frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2(format,item__$1)),frontend$components$block$markup_element_cp_$_iter__70352_$_iter__70366(cljs.core.rest(s__70367__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__70363,k,v,s__70353__$2,temp__5720__auto__,m,item_0__70262,e__58854__auto__,format,map__70256,map__70256__$1,config,html_export_QMARK_))
;
return iter__4652__auto__(v);
})();
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", "], null),vals);
})():frontend.components.block.inline_text.cljs$core$IFn$_invoke$arity$2(format,v))], null):null),frontend$components$block$markup_element_cp_$_iter__70352(cljs.core.rest(s__70353__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"roam_alias","roam_alias",1142779686),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"roam_tags","roam_tags",-1245571020)], 0)));
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70351){if((e70351 instanceof Error)){
var e__58854__auto____$1 = e70351;
if((e__58854__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$1;
}
} else {
throw e70351;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70301){if((e70301 instanceof Error)){
var e__58854__auto____$1 = e70301;
if((e__58854__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 3)))){
try{var item_0__70264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70264 === "Directive")){
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file-level-property","div.file-level-property",1092497644),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["caption",null], null), null),clojure.string.lower_case(key)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-medium","span.font-medium",1169799421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold","span.font-bold",-460884588),clojure.string.upper_case(key)], null),[": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null):null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70350){if((e70350 instanceof Error)){
var e__58854__auto____$2 = e70350;
if((e__58854__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$2;
}
} else {
throw e70350;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70302){if((e70302 instanceof Error)){
var e__58854__auto____$2 = e70302;
if((e__58854__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__70267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70267 === "Paragraph")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.truth_(frontend.util.safe_re_find(/\"Export_Snippet\" \"embed\"/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(l)))){
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.map_inline(config,l));
} else {
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div.is-paragraph","div.is-paragraph",1619857502),frontend.components.block.map_inline(config,l));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70349){if((e70349 instanceof Error)){
var e__58854__auto____$3 = e70349;
if((e__58854__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$3;
}
} else {
throw e70349;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70303){if((e70303 instanceof Error)){
var e__58854__auto____$3 = e70303;
if((e__58854__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 1)))){
try{var item_0__70269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70269 === "Horizontal_Rule")){
if(cljs.core.truth_(new cljs.core.Keyword(null,"slide?","slide?",1648217264).cljs$core$IFn$_invoke$arity$1(config))){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70348){if((e70348 instanceof Error)){
var e__58854__auto____$4 = e70348;
if((e__58854__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$4;
}
} else {
throw e70348;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70304){if((e70304 instanceof Error)){
var e__58854__auto____$4 = e70304;
if((e__58854__auto____$4 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__70270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70270 === "Heading")){
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.block_container(config,h);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70337){if((e70337 instanceof Error)){
var e__58854__auto____$5 = e70337;
if((e__58854__auto____$5 === cljs.core.match.backtrack)){
try{var item_0__70270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70270 === "List")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var lists = frontend.components.block.divide_lists(l);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lists))){
var l__$1 = cljs.core.first(lists);
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(l__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70253_SHARP_){
return frontend.components.block.list_item(config,p1__70253_SHARP_);
}),l__$1));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group","div.list-group",1215632197),(function (){var iter__4652__auto__ = (function frontend$components$block$markup_element_cp_$_iter__70344(s__70345){
return (new cljs.core.LazySeq(null,(function (){
var s__70345__$1 = s__70345;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70345__$1);
if(temp__5720__auto__){
var s__70345__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70345__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70345__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70347 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70346 = (0);
while(true){
if((i__70346 < size__4651__auto__)){
var l__$1 = cljs.core._nth(c__4650__auto__,i__70346);
cljs.core.chunk_append(b__70347,frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(l__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__70346,l__$1,c__4650__auto__,size__4651__auto__,b__70347,s__70345__$2,temp__5720__auto__,lists,l,item_0__70270,e__58854__auto____$5,e__58854__auto____$4,e__58854__auto____$3,e__58854__auto____$2,e__58854__auto____$1,e__58854__auto__,format,map__70256,map__70256__$1,config,html_export_QMARK_){
return (function (p1__70254_SHARP_){
return frontend.components.block.list_item(config,p1__70254_SHARP_);
});})(i__70346,l__$1,c__4650__auto__,size__4651__auto__,b__70347,s__70345__$2,temp__5720__auto__,lists,l,item_0__70270,e__58854__auto____$5,e__58854__auto____$4,e__58854__auto____$3,e__58854__auto____$2,e__58854__auto____$1,e__58854__auto__,format,map__70256,map__70256__$1,config,html_export_QMARK_))
,l__$1)));

var G__70753 = (i__70346 + (1));
i__70346 = G__70753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70347),frontend$components$block$markup_element_cp_$_iter__70344(cljs.core.chunk_rest(s__70345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70347),null);
}
} else {
var l__$1 = cljs.core.first(s__70345__$2);
return cljs.core.cons(frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(frontend.components.block.list_element(l__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (l__$1,s__70345__$2,temp__5720__auto__,lists,l,item_0__70270,e__58854__auto____$5,e__58854__auto____$4,e__58854__auto____$3,e__58854__auto____$2,e__58854__auto____$1,e__58854__auto__,format,map__70256,map__70256__$1,config,html_export_QMARK_){
return (function (p1__70254_SHARP_){
return frontend.components.block.list_item(config,p1__70254_SHARP_);
});})(l__$1,s__70345__$2,temp__5720__auto__,lists,l,item_0__70270,e__58854__auto____$5,e__58854__auto____$4,e__58854__auto____$3,e__58854__auto____$2,e__58854__auto____$1,e__58854__auto__,format,map__70256,map__70256__$1,config,html_export_QMARK_))
,l__$1)),frontend$components$block$markup_element_cp_$_iter__70344(cljs.core.rest(s__70345__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(lists);
})()], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70338){if((e70338 instanceof Error)){
var e__58854__auto____$6 = e70338;
if((e__58854__auto____$6 === cljs.core.match.backtrack)){
try{var item_0__70270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70270 === "Table")){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.table(config,t);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70339){if((e70339 instanceof Error)){
var e__58854__auto____$7 = e70339;
if((e__58854__auto____$7 === cljs.core.match.backtrack)){
try{var item_0__70270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70270 === "Math")){
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(s,true,true);
} else {
return frontend.extensions.latex.latex(cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0()),s,true,true);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70340){if((e70340 instanceof Error)){
var e__58854__auto____$8 = e70340;
if((e__58854__auto____$8 === cljs.core.match.backtrack)){
try{var item_0__70270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70270 === "Example")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.pre-wrap-white-space","pre.pre-wrap-white-space",-614870903),frontend.components.block.join_lines(l)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70341){if((e70341 instanceof Error)){
var e__58854__auto____$9 = e70341;
if((e__58854__auto____$9 === cljs.core.match.backtrack)){
try{var item_0__70270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70270 === "Quote")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blockquote","blockquote",372264190),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.markup_elements_cp.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e70342){if((e70342 instanceof Error)){
var e__58854__auto____$10 = e70342;
if((e__58854__auto____$10 === cljs.core.match.backtrack)){
try{var item_0__70270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70270 === "Raw_Html")){
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.raw_html","div.raw_html",-267032220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),content], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70343){if((e70343 instanceof Error)){
var e__58854__auto____$11 = e70343;
if((e__58854__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$11;
}
} else {
throw e70343;

}
}} else {
throw e__58854__auto____$10;
}
} else {
throw e70342;

}
}} else {
throw e__58854__auto____$9;
}
} else {
throw e70341;

}
}} else {
throw e__58854__auto____$8;
}
} else {
throw e70340;

}
}} else {
throw e__58854__auto____$7;
}
} else {
throw e70339;

}
}} else {
throw e__58854__auto____$6;
}
} else {
throw e70338;

}
}} else {
throw e__58854__auto____$5;
}
} else {
throw e70337;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70305){if((e70305 instanceof Error)){
var e__58854__auto____$5 = e70305;
if((e__58854__auto____$5 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 4)))){
try{var item_0__70272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70272 === "Export")){
try{var item_1__70273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__70273 === "html")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
if(cljs.core.not(html_export_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.export_html","div.export_html",950208651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),content], null)], null)], null);
} else {
return null;
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70336){if((e70336 instanceof Error)){
var e__58854__auto____$6 = e70336;
if((e__58854__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$6;
}
} else {
throw e70336;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70335){if((e70335 instanceof Error)){
var e__58854__auto____$6 = e70335;
if((e__58854__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$6;
}
} else {
throw e70335;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70306){if((e70306 instanceof Error)){
var e__58854__auto____$6 = e70306;
if((e__58854__auto____$6 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__70276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70276 === "Hiccup")){
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warning","div.warning",-131852872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Invalid hiccup"], null),content], null),frontend.security.remove_javascript_links_in_href(frontend.components.block.safe_read_string.cljs$core$IFn$_invoke$arity$1(content)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e70334){if((e70334 instanceof Error)){
var e__58854__auto____$7 = e70334;
if((e__58854__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$7;
}
} else {
throw e70334;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70307){if((e70307 instanceof Error)){
var e__58854__auto____$7 = e70307;
if((e__58854__auto____$7 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 4)))){
try{var item_0__70278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70278 === "Export")){
try{var item_1__70279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__70279 === "latex")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(content,true,false);
} else {
return frontend.extensions.latex.latex(cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0()),content,true,false);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70333){if((e70333 instanceof Error)){
var e__58854__auto____$8 = e70333;
if((e__58854__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$8;
}
} else {
throw e70333;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70332){if((e70332 instanceof Error)){
var e__58854__auto____$8 = e70332;
if((e__58854__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$8;
}
} else {
throw e70332;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70308){if((e70308 instanceof Error)){
var e__58854__auto____$8 = e70308;
if((e__58854__auto____$8 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 5)))){
try{var item_0__70282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70282 === "Custom")){
try{var item_1__70283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__70283 === "query")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var _result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
try{var query = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(content);
return frontend.components.block.custom_query(config,query);
}catch (e70331){var e = e70331;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.block",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-string-error","read-string-error",-337329605),e,new cljs.core.Keyword(null,"line","line",212345235),2948], null)),null);

return frontend.ui.block_error("Invalid query:",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),content], null));
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70323){if((e70323 instanceof Error)){
var e__58854__auto____$9 = e70323;
if((e__58854__auto____$9 === cljs.core.match.backtrack)){
try{var item_1__70283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__70283 === "note")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.admonition(config,"note",result);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70324){if((e70324 instanceof Error)){
var e__58854__auto____$10 = e70324;
if((e__58854__auto____$10 === cljs.core.match.backtrack)){
try{var item_1__70283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__70283 === "tip")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.admonition(config,"tip",result);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70325){if((e70325 instanceof Error)){
var e__58854__auto____$11 = e70325;
if((e__58854__auto____$11 === cljs.core.match.backtrack)){
try{var item_1__70283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__70283 === "important")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.admonition(config,"important",result);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70326){if((e70326 instanceof Error)){
var e__58854__auto____$12 = e70326;
if((e__58854__auto____$12 === cljs.core.match.backtrack)){
try{var item_1__70283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__70283 === "caution")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.admonition(config,"caution",result);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70327){if((e70327 instanceof Error)){
var e__58854__auto____$13 = e70327;
if((e__58854__auto____$13 === cljs.core.match.backtrack)){
try{var item_1__70283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__70283 === "warning")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.admonition(config,"warning",result);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70328){if((e70328 instanceof Error)){
var e__58854__auto____$14 = e70328;
if((e__58854__auto____$14 === cljs.core.match.backtrack)){
try{var item_1__70283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__70283 === "pinned")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.admonition(config,"pinned",result);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70329){if((e70329 instanceof Error)){
var e__58854__auto____$15 = e70329;
if((e__58854__auto____$15 === cljs.core.match.backtrack)){
try{var item_1__70283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if((item_1__70283 === "center")){
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.markup_elements_cp.call(null,config,l)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e70330){if((e70330 instanceof Error)){
var e__58854__auto____$16 = e70330;
if((e__58854__auto____$16 === cljs.core.match.backtrack)){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(4));
return frontend.components.block.__GT_elem.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),name], null),(frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_elements_cp.cljs$core$IFn$_invoke$arity$2(config,l) : frontend.components.block.markup_elements_cp.call(null,config,l)));
} else {
throw e__58854__auto____$16;
}
} else {
throw e70330;

}
}} else {
throw e__58854__auto____$15;
}
} else {
throw e70329;

}
}} else {
throw e__58854__auto____$14;
}
} else {
throw e70328;

}
}} else {
throw e__58854__auto____$13;
}
} else {
throw e70327;

}
}} else {
throw e__58854__auto____$12;
}
} else {
throw e70326;

}
}} else {
throw e__58854__auto____$11;
}
} else {
throw e70325;

}
}} else {
throw e__58854__auto____$10;
}
} else {
throw e70324;

}
}} else {
throw e__58854__auto____$9;
}
} else {
throw e70323;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70322){if((e70322 instanceof Error)){
var e__58854__auto____$9 = e70322;
if((e__58854__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$9;
}
} else {
throw e70322;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70309){if((e70309 instanceof Error)){
var e__58854__auto____$9 = e70309;
if((e__58854__auto____$9 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__70287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70287 === "Latex_Fragment")){
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.latex-fragment","p.latex-fragment",2044866246),frontend.components.block.inline(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Latex_Fragment",l], null))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70321){if((e70321 instanceof Error)){
var e__58854__auto____$10 = e70321;
if((e__58854__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$10;
}
} else {
throw e70321;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70310){if((e70310 instanceof Error)){
var e__58854__auto____$10 = e70310;
if((e__58854__auto____$10 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 4)))){
try{var item_0__70289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70289 === "Latex_Environment")){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
var content__$1 = frontend.components.block.latex_environment_content(name,option,content);
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(content__$1,true,true);
} else {
return frontend.extensions.latex.latex(cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0()),content__$1,true,true);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70320){if((e70320 instanceof Error)){
var e__58854__auto____$11 = e70320;
if((e__58854__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$11;
}
} else {
throw e70320;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70311){if((e70311 instanceof Error)){
var e__58854__auto____$11 = e70311;
if((e__58854__auto____$11 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__70293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70293 === "Displayed_Math")){
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
if(cljs.core.truth_(html_export_QMARK_)){
return frontend.extensions.latex.html_export(content,true,true);
} else {
return frontend.extensions.latex.latex(cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.squuid.cljs$core$IFn$_invoke$arity$0()),content,true,true);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e70319){if((e70319 instanceof Error)){
var e__58854__auto____$12 = e70319;
if((e__58854__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$12;
}
} else {
throw e70319;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70312){if((e70312 instanceof Error)){
var e__58854__auto____$12 = e70312;
if((e__58854__auto____$12 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 3)))){
try{var item_0__70295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70295 === "Footnote_Definition")){
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
var definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
var id = frontend.util.url_encode(name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footdef","div.footdef",1989065599),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footpara","div.footpara",-1143244552),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__70317 = config;
var G__70318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Paragraph",definition], null);
return (frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2 ? frontend.components.block.markup_element_cp.cljs$core$IFn$_invoke$arity$2(G__70317,G__70318) : frontend.components.block.markup_element_cp.call(null,G__70317,G__70318));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ml-1","a.ml-1",1979802547),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),["fn.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"footnum",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.jump_to_anchor_BANG_(["fnr.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup.fn","sup.fn",403400163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\u21A9\uFE0E"].join('')], null)], null))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70316){if((e70316 instanceof Error)){
var e__58854__auto____$13 = e70316;
if((e__58854__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$13;
}
} else {
throw e70316;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70313){if((e70313 instanceof Error)){
var e__58854__auto____$13 = e70313;
if((e__58854__auto____$13 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(item)) && ((cljs.core.count(item) === 2)))){
try{var item_0__70298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(0));
if((item_0__70298 === "Src")){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__fenced-code-block","div.cp__fenced-code-block",-1897501160),(function (){var temp__5718__auto__ = frontend.handler.plugin.hook_fenced_code_by_type(frontend.util.safe_lower_case(new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(options)));
if(cljs.core.truth_(temp__5718__auto__)){
var opts = temp__5718__auto__;
return frontend.components.plugins.hook_ui_fenced_code(clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(options)),opts);
} else {
return frontend.components.block.src_cp(config,options,html_export_QMARK_);
}
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e70315){if((e70315 instanceof Error)){
var e__58854__auto____$14 = e70315;
if((e__58854__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__58854__auto____$14;
}
} else {
throw e70315;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e70314){if((e70314 instanceof Error)){
var e__58854__auto____$14 = e70314;
if((e__58854__auto____$14 === cljs.core.match.backtrack)){
return "";
} else {
throw e__58854__auto____$14;
}
} else {
throw e70314;

}
}} else {
throw e__58854__auto____$13;
}
} else {
throw e70313;

}
}} else {
throw e__58854__auto____$12;
}
} else {
throw e70312;

}
}} else {
throw e__58854__auto____$11;
}
} else {
throw e70311;

}
}} else {
throw e__58854__auto____$10;
}
} else {
throw e70310;

}
}} else {
throw e__58854__auto____$9;
}
} else {
throw e70309;

}
}} else {
throw e__58854__auto____$8;
}
} else {
throw e70308;

}
}} else {
throw e__58854__auto____$7;
}
} else {
throw e70307;

}
}} else {
throw e__58854__auto____$6;
}
} else {
throw e70306;

}
}} else {
throw e__58854__auto____$5;
}
} else {
throw e70305;

}
}} else {
throw e__58854__auto____$4;
}
} else {
throw e70304;

}
}} else {
throw e__58854__auto____$3;
}
} else {
throw e70303;

}
}} else {
throw e__58854__auto____$2;
}
} else {
throw e70302;

}
}} else {
throw e__58854__auto____$1;
}
} else {
throw e70301;

}
}} else {
throw e__58854__auto__;
}
} else {
throw e70300;

}
}}catch (e70257){if((e70257 instanceof Error)){
var e = e70257;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Convert to html failed, error: ",e], 0));

return "";
} else {
throw e70257;

}
}});
frontend.components.block.markup_elements_cp = (function frontend$components$block$markup_elements_cp(config,col){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70371_SHARP_){
return frontend.components.block.markup_element_cp(config,p1__70371_SHARP_);
}),col);
});
frontend.components.block.block_item = (function frontend$components$block$block_item(config,blocks,idx,item){
var item__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("block","meta","block/meta",1064819153)),new cljs.core.Keyword("block","top?","block/top?",-1838733025),(idx === (0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","bottom?","block/bottom?",-1886197289),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(blocks),(idx + (1)))], 0));
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item__$1));
return rum.core.with_key(frontend.components.block.block_container(config__$1,item__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item__$1)));
});
frontend.components.block.block_list = (function frontend$components$block$block_list(config,blocks){
var iter__4652__auto__ = (function frontend$components$block$block_list_$_iter__70372(s__70373){
return (new cljs.core.LazySeq(null,(function (){
var s__70373__$1 = s__70373;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70373__$1);
if(temp__5720__auto__){
var s__70373__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70373__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70373__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70375 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70374 = (0);
while(true){
if((i__70374 < size__4651__auto__)){
var vec__70376 = cljs.core._nth(c__4650__auto__,i__70374);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70376,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70376,(1),null);
cljs.core.chunk_append(b__70375,frontend.components.block.block_item(config,blocks,idx,item));

var G__70774 = (i__70374 + (1));
i__70374 = G__70774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70375),frontend$components$block$block_list_$_iter__70372(cljs.core.chunk_rest(s__70373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70375),null);
}
} else {
var vec__70379 = cljs.core.first(s__70373__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70379,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70379,(1),null);
return cljs.core.cons(frontend.components.block.block_item(config,blocks,idx,item),frontend$components$block$block_list_$_iter__70372(cljs.core.rest(s__70373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(blocks));
});
frontend.components.block.custom_query_or_ref_QMARK_ = (function frontend$components$block$custom_query_or_ref_QMARK_(config){
var ref_QMARK_ = new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config);
var custom_query_QMARK_ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
var or__4253__auto__ = custom_query_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ref_QMARK_;
}
});
frontend.components.block.load_more_blocks_BANG_ = (function frontend$components$block$load_more_blocks_BANG_(config,flat_blocks){
var temp__5720__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5720__auto__)){
var db_id = temp__5720__auto__;
var last_block_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(flat_blocks));
return frontend.handler.block.load_more_BANG_(db_id,last_block_id);
} else {
return null;
}
});
frontend.components.block.lazy_blocks = rum.core.lazy_build(rum.core.build_defcs,(function (state,config,flat_blocks,blocks__GT_vec_tree){
var db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(config);
var selected_blocks = cljs.core.set(frontend.state.get_selection_block_ids());
var flat_blocks__$1 = ((cljs.core.seq(selected_blocks))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("ui","selected?","ui/selected?",-742546136),cljs.core.contains_QMARK_(selected_blocks,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b)));
}),flat_blocks):flat_blocks);
var blocks = (blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$1 ? blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$1(flat_blocks__$1) : blocks__GT_vec_tree.call(null,flat_blocks__$1));
if(cljs.core.not(db_id)){
return daiquiri.interpreter.interpret(frontend.components.block.block_list(config,blocks));
} else {
var bottom_reached = (function (){
if(((frontend.util.time_ms() - new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(config)) > (100))){
return frontend.components.block.load_more_blocks_BANG_(config,flat_blocks__$1);
} else {
return null;
}
});
var has_more_QMARK_ = (((cljs.core.count(flat_blocks__$1) > frontend.db.model.initial_blocks_length)) && ((!((frontend.db.model.get_next_open_block.cljs$core$IFn$_invoke$arity$3((frontend.db.get_db.cljs$core$IFn$_invoke$arity$0 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$0() : frontend.db.get_db.call(null)),cljs.core.last(flat_blocks__$1),db_id) == null)))));
var dom_id = ["lazy-blocks-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("frontend.components.block","id","frontend.components.block/id",-939019741).cljs$core$IFn$_invoke$arity$1(state))].join('');
return daiquiri.core.create_element("div",{'id':dom_id},[frontend.ui.infinite_list("main-content-container",frontend.components.block.block_list(config,blocks),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-load","on-load",1415151594),bottom_reached,new cljs.core.Keyword(null,"bottom-reached","bottom-reached",-2132308834),(function (){
var temp__5720__auto__ = goog.dom.getElement(dom_id);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
return frontend.ui.bottom_reached_QMARK_(node,(1000));
} else {
return null;
}
}),new cljs.core.Keyword(null,"has-more","has-more",-320006781),has_more_QMARK_,new cljs.core.Keyword(null,"more","more",-2058821800),(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"preview?","preview?",590561578).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(config);
}
})())?"More":frontend.ui.loading("Loading"))], null))]);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.block","id","frontend.components.block/id",-939019741),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
})], null)], null),"frontend.components.block/lazy-blocks");
frontend.components.block.blocks_container = rum.core.lazy_build(rum.core.build_defcs,(function (state,blocks,config){
var _STAR_init_blocks_container_id = new cljs.core.Keyword("frontend.components.block","init-blocks-container-id","frontend.components.block/init-blocks-container-id",882492668).cljs$core$IFn$_invoke$arity$1(state);
var blocks_container_id = (cljs.core.truth_(cljs.core.deref(_STAR_init_blocks_container_id))?cljs.core.deref(_STAR_init_blocks_container_id):(function (){var id_SINGLEQUOTE_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.block._STAR_blocks_container_id,cljs.core.inc);
cljs.core.reset_BANG_(_STAR_init_blocks_container_id,id_SINGLEQUOTE_);

return id_SINGLEQUOTE_;
})());
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"blocks-container-id","blocks-container-id",-1500434340),blocks_container_id);
var doc_mode_QMARK_ = new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.seq(blocks)){
var blocks__GT_vec_tree = (function (p1__70382_SHARP_){
if(cljs.core.truth_(frontend.components.block.custom_query_or_ref_QMARK_(config__$1))){
return p1__70382_SHARP_;
} else {
return frontend.modules.outliner.tree.blocks__GT_vec_tree.cljs$core$IFn$_invoke$arity$2(p1__70382_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config__$1));
}
});
var flat_blocks = cljs.core.vec(blocks);
var config__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386),frontend.util.time_ms());
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blocks-container","flex-1",(cljs.core.truth_(doc_mode_QMARK_)?"document-mode":null)], null))},[frontend.components.block.lazy_blocks(config__$2,flat_blocks,blocks__GT_vec_tree)]);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.block","init-blocks-container-id","frontend.components.block/init-blocks-container-id",882492668),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
})], null)], null),"frontend.components.block/blocks-container");
frontend.components.block.breadcrumb_with_container = rum.core.lazy_build(rum.core.build_defcs,(function (state,blocks,config){
var repo = frontend.state.get_current_repo();
var _STAR_navigating_block = new cljs.core.Keyword("frontend.components.block","navigating-block","frontend.components.block/navigating-block",1869853175).cljs$core$IFn$_invoke$arity$1(state);
var navigating_block = rum.core.react(_STAR_navigating_block);
var block = cljs.core.first(blocks);
var navigated_QMARK_ = (function (){var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),navigating_block);
if(and__4251__auto__){
return navigating_block;
} else {
return and__4251__auto__;
}
})();
var blocks__$1 = (cljs.core.truth_(navigated_QMARK_)?(function (){var block__$1 = (function (){var G__70384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),navigating_block], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__70384) : frontend.db.pull.call(null,G__70384));
})();
var G__70385 = repo;
var G__70386 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1);
var G__70387 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scoped-block-id","scoped-block-id",-2061689117),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1)], null);
return (frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3 ? frontend.db.get_paginated_blocks.cljs$core$IFn$_invoke$arity$3(G__70385,G__70386,G__70387) : frontend.db.get_paginated_blocks.call(null,G__70385,G__70386,G__70387));
})():blocks);
var attrs70383 = (cljs.core.truth_(new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369).cljs$core$IFn$_invoke$arity$1(config))?frontend.components.block.breadcrumb(config,frontend.state.get_current_repo(),navigating_block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-page?","show-page?",792494155),false,new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block], null)):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs70383))?daiquiri.interpreter.element_attributes(attrs70383):null),((cljs.core.map_QMARK_(attrs70383))?[frontend.components.block.blocks_container(blocks__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block], 0)))]:[daiquiri.interpreter.interpret(attrs70383),frontend.components.block.blocks_container(blocks__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"breadcrumb-show?","breadcrumb-show?",-869903369),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"navigating-block","navigating-block",-576280122),_STAR_navigating_block], 0)))]));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.block","navigating-block","frontend.components.block/navigating-block",1869853175),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))));
})], null)], null),"frontend.components.block/breadcrumb-with-container");
frontend.components.block.__GT_hiccup = (function frontend$components$block$__GT_hiccup(blocks,config,option){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(function (){var G__70388 = option;
if(cljs.core.truth_(new cljs.core.Keyword("document","mode?","document/mode?",-994203479).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70388,new cljs.core.Keyword(null,"class","class",-2030961996),"doc-mode");
} else {
return G__70388;
}
})(),(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448).cljs$core$IFn$_invoke$arity$1(config);
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),(function (){var blocks__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),cljs.core.first),cljs.core._GT_,blocks);
var iter__4652__auto__ = (function frontend$components$block$__GT_hiccup_$_iter__70389(s__70390){
return (new cljs.core.LazySeq(null,(function (){
var s__70390__$1 = s__70390;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70390__$1);
if(temp__5720__auto__){
var s__70390__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70390__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70390__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70392 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70391 = (0);
while(true){
if((i__70391 < size__4651__auto__)){
var vec__70393 = cljs.core._nth(c__4650__auto__,i__70391);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70393,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70393,(1),null);
cljs.core.chunk_append(b__70392,(function (){var alias_QMARK_ = new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(page);
var page__$1 = (function (){var G__70396 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__70396) : frontend.db.entity.call(null,G__70396));
})();
var parent_blocks = cljs.core.group_by(new cljs.core.Keyword("block","parent","block/parent",-918309064),blocks__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2","div.my-2",-846842446),(function (){var G__70397 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))].join('')], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70397,new cljs.core.Keyword(null,"class","class",-2030961996),"color-level px-2 sm:px-7 py-2 rounded");
} else {
return G__70397;
}
})(),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.page_cp(config,page__$1),(cljs.core.truth_(alias_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.opacity-50","span.text-sm.font-medium.opacity-50",1280125801)," Alias"], null):null)], null),(function (){var iter__4652__auto__ = ((function (i__70391,alias_QMARK_,page__$1,parent_blocks,vec__70393,page,blocks__$2,c__4650__auto__,size__4651__auto__,b__70392,s__70390__$2,temp__5720__auto__,blocks__$1){
return (function frontend$components$block$__GT_hiccup_$_iter__70389_$_iter__70398(s__70399){
return (new cljs.core.LazySeq(null,((function (i__70391,alias_QMARK_,page__$1,parent_blocks,vec__70393,page,blocks__$2,c__4650__auto__,size__4651__auto__,b__70392,s__70390__$2,temp__5720__auto__,blocks__$1){
return (function (){
var s__70399__$1 = s__70399;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__70399__$1);
if(temp__5720__auto____$1){
var s__70399__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70399__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__70399__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__70401 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__70400 = (0);
while(true){
if((i__70400 < size__4651__auto____$1)){
var vec__70402 = cljs.core._nth(c__4650__auto____$1,i__70400);
var _parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70402,(0),null);
var blocks__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70402,(1),null);
cljs.core.chunk_append(b__70401,frontend.components.block.breadcrumb_with_container(blocks__$3,config));

var G__70780 = (i__70400 + (1));
i__70400 = G__70780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70401),frontend$components$block$__GT_hiccup_$_iter__70389_$_iter__70398(cljs.core.chunk_rest(s__70399__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70401),null);
}
} else {
var vec__70405 = cljs.core.first(s__70399__$2);
var _parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70405,(0),null);
var blocks__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70405,(1),null);
return cljs.core.cons(frontend.components.block.breadcrumb_with_container(blocks__$3,config),frontend$components$block$__GT_hiccup_$_iter__70389_$_iter__70398(cljs.core.rest(s__70399__$2)));
}
} else {
return null;
}
break;
}
});})(i__70391,alias_QMARK_,page__$1,parent_blocks,vec__70393,page,blocks__$2,c__4650__auto__,size__4651__auto__,b__70392,s__70390__$2,temp__5720__auto__,blocks__$1))
,null,null));
});})(i__70391,alias_QMARK_,page__$1,parent_blocks,vec__70393,page,blocks__$2,c__4650__auto__,size__4651__auto__,b__70392,s__70390__$2,temp__5720__auto__,blocks__$1))
;
return iter__4652__auto__(parent_blocks);
})(),cljs.core.PersistentArrayMap.EMPTY)], null);
})());

var G__70781 = (i__70391 + (1));
i__70391 = G__70781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70392),frontend$components$block$__GT_hiccup_$_iter__70389(cljs.core.chunk_rest(s__70390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70392),null);
}
} else {
var vec__70408 = cljs.core.first(s__70390__$2);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70408,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70408,(1),null);
return cljs.core.cons((function (){var alias_QMARK_ = new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(page);
var page__$1 = (function (){var G__70411 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__70411) : frontend.db.entity.call(null,G__70411));
})();
var parent_blocks = cljs.core.group_by(new cljs.core.Keyword("block","parent","block/parent",-918309064),blocks__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2","div.my-2",-846842446),(function (){var G__70412 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))].join('')], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70412,new cljs.core.Keyword(null,"class","class",-2030961996),"color-level px-2 sm:px-7 py-2 rounded");
} else {
return G__70412;
}
})(),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.page_cp(config,page__$1),(cljs.core.truth_(alias_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.opacity-50","span.text-sm.font-medium.opacity-50",1280125801)," Alias"], null):null)], null),(function (){var iter__4652__auto__ = ((function (alias_QMARK_,page__$1,parent_blocks,vec__70408,page,blocks__$2,s__70390__$2,temp__5720__auto__,blocks__$1){
return (function frontend$components$block$__GT_hiccup_$_iter__70389_$_iter__70413(s__70414){
return (new cljs.core.LazySeq(null,(function (){
var s__70414__$1 = s__70414;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__70414__$1);
if(temp__5720__auto____$1){
var s__70414__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70414__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70414__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70416 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70415 = (0);
while(true){
if((i__70415 < size__4651__auto__)){
var vec__70417 = cljs.core._nth(c__4650__auto__,i__70415);
var _parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70417,(0),null);
var blocks__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70417,(1),null);
cljs.core.chunk_append(b__70416,frontend.components.block.breadcrumb_with_container(blocks__$3,config));

var G__70783 = (i__70415 + (1));
i__70415 = G__70783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70416),frontend$components$block$__GT_hiccup_$_iter__70389_$_iter__70413(cljs.core.chunk_rest(s__70414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70416),null);
}
} else {
var vec__70420 = cljs.core.first(s__70414__$2);
var _parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70420,(0),null);
var blocks__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70420,(1),null);
return cljs.core.cons(frontend.components.block.breadcrumb_with_container(blocks__$3,config),frontend$components$block$__GT_hiccup_$_iter__70389_$_iter__70413(cljs.core.rest(s__70414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(alias_QMARK_,page__$1,parent_blocks,vec__70408,page,blocks__$2,s__70390__$2,temp__5720__auto__,blocks__$1))
;
return iter__4652__auto__(parent_blocks);
})(),cljs.core.PersistentArrayMap.EMPTY)], null);
})(),frontend$components$block$__GT_hiccup_$_iter__70389(cljs.core.rest(s__70390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(blocks__$1);
})()], null):(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"group-by-page?","group-by-page?",1520059448).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.vector_QMARK_(cljs.core.first(blocks));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),(function (){var blocks__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),cljs.core.first),cljs.core._GT_,blocks);
var iter__4652__auto__ = (function frontend$components$block$__GT_hiccup_$_iter__70423(s__70424){
return (new cljs.core.LazySeq(null,(function (){
var s__70424__$1 = s__70424;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__70424__$1);
if(temp__5720__auto__){
var s__70424__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70424__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70424__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70426 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70425 = (0);
while(true){
if((i__70425 < size__4651__auto__)){
var vec__70427 = cljs.core._nth(c__4650__auto__,i__70425);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70427,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70427,(1),null);
cljs.core.chunk_append(b__70426,(function (){var alias_QMARK_ = new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(page);
var page__$1 = (function (){var G__70430 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__70430) : frontend.db.entity.call(null,G__70430));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2","div.my-2",-846842446),(function (){var G__70431 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))].join('')], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70431,new cljs.core.Keyword(null,"class","class",-2030961996),"color-level px-2 sm:px-7 py-2 rounded");
} else {
return G__70431;
}
})(),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.page_cp(config,page__$1),(cljs.core.truth_(alias_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.opacity-50","span.text-sm.font-medium.opacity-50",1280125801)," Alias"], null):null)], null),frontend.components.block.blocks_container(blocks__$2,config),cljs.core.PersistentArrayMap.EMPTY)], null);
})());

var G__70785 = (i__70425 + (1));
i__70425 = G__70785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70426),frontend$components$block$__GT_hiccup_$_iter__70423(cljs.core.chunk_rest(s__70424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70426),null);
}
} else {
var vec__70432 = cljs.core.first(s__70424__$2);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70432,(0),null);
var blocks__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70432,(1),null);
return cljs.core.cons((function (){var alias_QMARK_ = new cljs.core.Keyword("block","alias?","block/alias?",-551896044).cljs$core$IFn$_invoke$arity$1(page);
var page__$1 = (function (){var G__70435 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__70435) : frontend.db.entity.call(null,G__70435));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-2","div.my-2",-846842446),(function (){var G__70436 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page__$1))].join('')], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70436,new cljs.core.Keyword(null,"class","class",-2030961996),"color-level px-2 sm:px-7 py-2 rounded");
} else {
return G__70436;
}
})(),frontend.ui.foldable(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.block.page_cp(config,page__$1),(cljs.core.truth_(alias_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.font-medium.opacity-50","span.text-sm.font-medium.opacity-50",1280125801)," Alias"], null):null)], null),frontend.components.block.blocks_container(blocks__$2,config),cljs.core.PersistentArrayMap.EMPTY)], null);
})(),frontend$components$block$__GT_hiccup_$_iter__70423(cljs.core.rest(s__70424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(blocks__$1);
})()], null):frontend.components.block.blocks_container(blocks,config)
))], null);
});

//# sourceMappingURL=frontend.components.block.js.map
