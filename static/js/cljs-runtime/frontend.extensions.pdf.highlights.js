goog.provide('frontend.extensions.pdf.highlights');
frontend.extensions.pdf.highlights.dd = (function frontend$extensions$pdf$highlights$dd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72285 = arguments.length;
var i__4865__auto___72286 = (0);
while(true){
if((i__4865__auto___72286 < len__4864__auto___72285)){
args__4870__auto__.push((arguments[i__4865__auto___72286]));

var G__72287 = (i__4865__auto___72286 + (1));
i__4865__auto___72286 = G__72287;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return frontend.extensions.pdf.highlights.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(frontend.extensions.pdf.highlights.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.debug,args);
}));

(frontend.extensions.pdf.highlights.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.extensions.pdf.highlights.dd.cljs$lang$applyTo = (function (seq71900){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71900));
}));

frontend.extensions.pdf.highlights._STAR_area_mode_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.extensions.pdf.highlights._STAR_highlight_mode_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.extensions.pdf.highlights._STAR_highlight_last_color = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yellow","yellow",-881035449));
frontend.extensions.pdf.highlights._STAR_area_dashed_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,false)(frontend.storage.get("ls-pdf-area-is-dashed")));
frontend.extensions.pdf.highlights.reset_current_pdf_BANG_ = (function frontend$extensions$pdf$highlights$reset_current_pdf_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);
});
frontend.extensions.pdf.highlights.pdf_highlight_finder = rum.core.lazy_build(rum.core.build_defcs,(function (state,viewer){
if(cljs.core.truth_(viewer)){
var temp__5720__auto__ = frontend.state.sub(new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267));
if(cljs.core.truth_(temp__5720__auto__)){
var ref_hl = temp__5720__auto__;
setTimeout((function (){
return frontend.extensions.pdf.utils.scroll_to_highlight(viewer,ref_hl);
}),(100));

return setTimeout((function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267),null);
}),(1000));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive], null),"frontend.extensions.pdf.highlights/pdf-highlight-finder");
frontend.extensions.pdf.highlights.pdf_page_finder = rum.core.lazy_build(rum.core.build_defc,(function (viewer){
if(cljs.core.truth_(viewer)){
var temp__5720__auto___72288 = new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(temp__5720__auto___72288)){
var current_72289 = temp__5720__auto___72288;
var active_hl_72290 = new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var page_key_72291 = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(current_72289);
var last_page_72292 = (function (){var and__4251__auto__ = page_key_72291;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.util.safe_parse_int(frontend.storage.get(["ls-pdf-last-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_key_72291)].join('')));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = last_page_72292;
if(cljs.core.truth_(and__4251__auto__)){
return (active_hl_72290 == null);
} else {
return and__4251__auto__;
}
})())){
(viewer.currentPageNumber = last_page_72292);
} else {
}
} else {
}
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.extensions.pdf.highlights/pdf-page-finder");
frontend.extensions.pdf.highlights.pdf_resizer = rum.core.lazy_build(rum.core.build_defc,(function (viewer){
var el_ref = rum.core.use_ref(null);
var adjust_main_size_BANG_ = frontend.util.debounce.cljs$core$IFn$_invoke$arity$2((200),(function (width){
var root_el = document.documentElement;
root_el.style.setProperty("--ph-view-container-width",width);

return (frontend.extensions.pdf.utils.adjust_viewer_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.extensions.pdf.utils.adjust_viewer_size_BANG_.cljs$core$IFn$_invoke$arity$1(viewer) : frontend.extensions.pdf.utils.adjust_viewer_size_BANG_.call(null,viewer));
}));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto___72293 = (function (){var and__4251__auto__ = cljs.core.fn_QMARK_(window.interact);
if(and__4251__auto__){
return rum.core.deref(el_ref);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto___72293)){
var el_72294 = temp__5720__auto___72293;
interact(el_72294).draggable(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
var width = document.documentElement.clientWidth;
var offset = e.rect.left;
var el_ratio = (offset / width).toFixed((6));
var target_el = document.getElementById("pdf-layout-container");
if(cljs.core.truth_(target_el)){
var width__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4339__auto__ = (function (){var x__4336__auto__ = (el_ratio * (100));
var y__4337__auto__ = (20);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var y__4340__auto__ = (80);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})()),"vw"].join('');
target_el.style.setProperty("width",width__$1);

return (adjust_main_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? adjust_main_size_BANG_.cljs$core$IFn$_invoke$arity$1(width__$1) : adjust_main_size_BANG_.call(null,width__$1));
} else {
return null;
}
})], null)], null))).styleCursor(false).on("dragstart",(function (){
return document.documentElement.classList.add("is-resizing-buf");
})).on("dragend",(function (){
return document.documentElement.classList.remove("is-resizing-buf");
}));
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("span",{'ref':el_ref,'className':"extensions__pdf-resizer"},[]);
}),null,"frontend.extensions.pdf.highlights/pdf-resizer");
frontend.extensions.pdf.highlights.pdf_highlights_ctx_menu = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__71936,p__71937){
var map__71938 = p__71936;
var map__71938__$1 = cljs.core.__destructure_map(map__71938);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71938__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71938__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71938__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var map__71939 = p__71937;
var map__71939__$1 = cljs.core.__destructure_map(map__71939);
var clear_ctx_tip_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71939__$1,new cljs.core.Keyword(null,"clear-ctx-tip!","clear-ctx-tip!",516093238));
var add_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71939__$1,new cljs.core.Keyword(null,"add-hl!","add-hl!",-832546833));
var upd_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71939__$1,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274));
var del_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71939__$1,new cljs.core.Keyword(null,"del-hl!","del-hl!",-703533207));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var cb = (function (){
return (clear_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_ctx_tip_BANG_.call(null));
});
setTimeout((function (){
return document.addEventListener("click",cb);
}));

return (function (){
return document.removeEventListener("click",cb);
});
}),cljs.core.PersistentVector.EMPTY);

var _STAR_el = rum.core.use_ref(null);
var cnt = viewer.container;
var head_height = (0);
var top = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) + cnt.scrollTop) - head_height);
var left = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) + cnt.scrollLeft);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(highlight);
var new_QMARK_ = (id == null);
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(highlight);
var action_fn_BANG_ = (function (action,clear_QMARK_){
var temp__5720__auto__ = (function (){var and__4251__auto__ = action;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.name(action);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var action__$1 = temp__5720__auto__;
var G__71948_72295 = action__$1;
switch (G__71948_72295) {
case "ref":
frontend.extensions.pdf.assets.copy_hl_ref_BANG_(highlight);

break;
case "copy":
frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return range.toString();
}
})());

frontend.extensions.pdf.utils.clear_all_selection();

break;
case "link":
frontend.extensions.pdf.assets.goto_block_ref_BANG_(highlight);

break;
case "del":
(del_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? del_hl_BANG_.cljs$core$IFn$_invoke$arity$1(highlight) : del_hl_BANG_.call(null,highlight));

frontend.extensions.pdf.assets.del_ref_block_BANG_(highlight);

frontend.extensions.pdf.assets.unlink_hl_area_image$(viewer,new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),highlight);

break;
default:
var properties_72297 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),action__$1], null);
if(cljs.core.not(id)){
var highlight_72298__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.fn_QMARK_(highlight))?(highlight.cljs$core$IFn$_invoke$arity$0 ? highlight.cljs$core$IFn$_invoke$arity$0() : highlight.call(null)):highlight),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),frontend.extensions.pdf.utils.gen_uuid(),new cljs.core.Keyword(null,"properties","properties",685819552),properties_72297], null)], 0));
(add_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_hl_BANG_.cljs$core$IFn$_invoke$arity$1(highlight_72298__$1) : add_hl_BANG_.call(null,highlight_72298__$1));

frontend.extensions.pdf.utils.clear_all_selection();

frontend.extensions.pdf.assets.copy_hl_ref_BANG_(highlight_72298__$1);
} else {
var G__71956_72299 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(highlight,new cljs.core.Keyword(null,"properties","properties",685819552),properties_72297);
(upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1(G__71956_72299) : upd_hl_BANG_.call(null,G__71956_72299));
}

cljs.core.reset_BANG_(frontend.extensions.pdf.highlights._STAR_highlight_last_color,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(action__$1));

}

var and__4251__auto__ = clear_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return setTimeout((function (){
return (clear_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$0 ? clear_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$0() : clear_ctx_tip_BANG_.call(null));
}),(68));
} else {
return and__4251__auto__;
}
} else {
return null;
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(frontend.extensions.pdf.highlights._STAR_highlight_mode_QMARK_);
if(cljs.core.truth_(and__4251__auto__)){
return new_QMARK_;
} else {
return and__4251__auto__;
}
})())){
action_fn_BANG_(cljs.core.deref(frontend.extensions.pdf.highlights._STAR_highlight_last_color),true);
} else {
var el_72300 = rum.core.deref(_STAR_el);
var map__71959_72301 = frontend.util.calc_delta_rect_offset(el_72300,el_72300.closest(".extensions__pdf-viewer"));
var map__71959_72302__$1 = cljs.core.__destructure_map(map__71959_72301);
var x_72303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71959_72302__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_72304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71959_72302__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
(el_72300.style.transform = ["translate3d(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((x_72303 < (0)))?(x_72303 - (5)):(0))),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y_72304 < (0)))?(y_72304 - (5)):(0))),"px",",0)"].join(''));
}

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("ul",{'ref':_STAR_el,'style':{'top':top,'left':left,'visibility':(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(frontend.extensions.pdf.highlights._STAR_highlight_mode_QMARK_);
if(cljs.core.truth_(and__4251__auto__)){
return new_QMARK_;
} else {
return and__4251__auto__;
}
})())?"hidden":"visible")},'onClick':(function (e){
var temp__5720__auto__ = e.target.dataset.action;
if(cljs.core.truth_(temp__5720__auto__)){
var action = temp__5720__auto__;
return action_fn_BANG_(action,true);
} else {
return null;
}
}),'className':"extensions__pdf-hls-ctx-menu"},[daiquiri.core.create_element("li",{'className':"item-colors"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$extensions$pdf$highlights$iter__71966(s__71967){
return (new cljs.core.LazySeq(null,(function (){
var s__71967__$1 = s__71967;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__71967__$1);
if(temp__5720__auto__){
var s__71967__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71967__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__71967__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__71969 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__71968 = (0);
while(true){
if((i__71968 < size__4651__auto__)){
var it = cljs.core._nth(c__4650__auto__,i__71968);
cljs.core.chunk_append(b__71969,daiquiri.core.create_element("a",{'key':it,'data-color':it,'data-action':it},[daiquiri.interpreter.interpret(it)]));

var G__72306 = (i__71968 + (1));
i__71968 = G__72306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71969),frontend$extensions$pdf$highlights$iter__71966(cljs.core.chunk_rest(s__71967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71969),null);
}
} else {
var it = cljs.core.first(s__71967__$2);
return cljs.core.cons(daiquiri.core.create_element("a",{'key':it,'data-color':it,'data-action':it},[daiquiri.interpreter.interpret(it)]),frontend$extensions$pdf$highlights$iter__71966(cljs.core.rest(s__71967__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yellow","blue","green","red","purple"], null));
})())]),daiquiri.interpreter.interpret((function (){var and__4251__auto__ = id;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"ref"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","copy-ref","pdf/copy-ref",1111581184)], 0))], null);
} else {
return and__4251__auto__;
}
})()),daiquiri.interpreter.interpret((function (){var and__4251__auto__ = cljs.core.not(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(content));
if(and__4251__auto__){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"copy"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","copy-text","pdf/copy-text",-1645704266)], 0))], null);
} else {
return and__4251__auto__;
}
})()),daiquiri.interpreter.interpret((function (){var and__4251__auto__ = id;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"link"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","linked-ref","pdf/linked-ref",-925157547)], 0))], null);
} else {
return and__4251__auto__;
}
})()),daiquiri.interpreter.interpret((function (){var and__4251__auto__ = id;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item","li.item",1019267471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-action","data-action",821237678),"del"], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"delete","delete",-1768633620)], 0))], null);
} else {
return and__4251__auto__;
}
})())]);
}),null,"frontend.extensions.pdf.highlights/pdf-highlights-ctx-menu");
frontend.extensions.pdf.highlights.pdf_highlights_text_region = rum.core.lazy_build(rum.core.build_defc,(function (viewer,vw_hl,hl,p__71970){
var map__71971 = p__71970;
var map__71971__$1 = cljs.core.__destructure_map(map__71971);
var show_ctx_tip_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71971__$1,new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502));
var map__71972 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(vw_hl);
var map__71972__$1 = cljs.core.__destructure_map(map__71972);
var rects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71972__$1,new cljs.core.Keyword(null,"rects","rects",1714526167));
var map__71973 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(hl);
var map__71973__$1 = cljs.core.__destructure_map(map__71973);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71973__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var open_tip_BANG_ = (function (e){
e.preventDefault();

var x = e.clientX;
var y = e.clientY;
var G__71974 = viewer;
var G__71975 = hl;
var G__71976 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$3 ? show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$3(G__71974,G__71975,G__71976) : show_ctx_tip_BANG_.call(null,G__71974,G__71975,G__71976));
});
return daiquiri.core.create_element("div",{'onClick':open_tip_BANG_,'onContextMenu':open_tip_BANG_,'className':"extensions__pdf-hls-text-region"},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,rect){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hls-text-region-item","div.hls-text-region-item",-1046800817),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"style","style",-496642736),rect,new cljs.core.Keyword(null,"data-color","data-color",-1132407184),color], null)], null);
}),rects))]);
}),null,"frontend.extensions.pdf.highlights/pdf-highlights-text-region");
frontend.extensions.pdf.highlights.pdf_highlight_area_region = rum.core.lazy_build(rum.core.build_defc,(function (viewer,vw_hl,hl,p__71981){
var map__71982 = p__71981;
var map__71982__$1 = cljs.core.__destructure_map(map__71982);
var show_ctx_tip_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71982__$1,new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502));
var upd_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71982__$1,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274));
var _STAR_el = rum.core.use_ref(null);
var _STAR_dirty = rum.core.use_ref(null);
var open_tip_BANG_ = (function (e){
e.preventDefault();

if(cljs.core.truth_(rum.core.deref(_STAR_dirty))){
return null;
} else {
var x = e.clientX;
var y = e.clientY;
var G__71985 = viewer;
var G__71986 = hl;
var G__71987 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$3 ? show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$3(G__71985,G__71986,G__71987) : show_ctx_tip_BANG_.call(null,G__71985,G__71986,G__71987));
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var el = rum.core.deref(_STAR_el);
var it = interact(el).resizable(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),true,new cljs.core.Keyword(null,"right","right",-452581833),true,new cljs.core.Keyword(null,"top","top",-1856271961),true,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),true], null),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),(function (_e){
return rum.core.set_ref_BANG_(_STAR_dirty,true);
}),new cljs.core.Keyword(null,"end","end",-268185958),(function (e){
var vw_pos = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(vw_hl);
var target = e.target;
var vw_rect = e.rect;
var vec__71989 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71977_SHARP_){
var val = target.getAttribute(["data-",cljs.core.name(p1__71977_SHARP_)].join(''));
if((!((val == null)))){
return parseFloat(val);
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71989,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71989,(1),null);
var to_top = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),new cljs.core.Keyword(null,"top","top",-1856271961)], null)) + dy);
var to_left = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),new cljs.core.Keyword(null,"left","left",-399115937)], null)) + dx);
var to_w = vw_rect.width;
var to_h = vw_rect.height;
var to_vw_pos = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(vw_pos,new cljs.core.Keyword(null,"bounding","bounding",-2125178263),cljs.core.assoc,new cljs.core.Keyword(null,"top","top",-1856271961),to_top,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to_left,new cljs.core.Keyword(null,"width","width",-384071477),to_w,new cljs.core.Keyword(null,"height","height",1025178622),to_h], 0));
var to_sc_pos = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,to_vw_pos);
var hl_SINGLEQUOTE__72308 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.Keyword(null,"position","position",-2011731912),to_sc_pos);
var hl_SINGLEQUOTE__72309__$1 = cljs.core.assoc_in(hl_SINGLEQUOTE__72308,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null),Date.now());
promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.assets.persist_hl_area_image$(viewer,new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),hl_SINGLEQUOTE__72309__$1,hl,new cljs.core.Keyword(null,"bounding","bounding",-2125178263).cljs$core$IFn$_invoke$arity$1(to_vw_pos)),(function (){
return setTimeout((function (){
(target.style.transform = "translate(0, 0)");

target.removeAttribute("data-x");

target.removeAttribute("data-y");

return (upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1(hl_SINGLEQUOTE__72309__$1) : upd_hl_BANG_.call(null,hl_SINGLEQUOTE__72309__$1));
}),(200));
}));

return setTimeout((function (){
return rum.core.set_ref_BANG_(_STAR_dirty,false);
}));
}),new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
var target = e.target;
var x = target.getAttribute("data-x");
var y = target.getAttribute("data-y");
var bx = (((!((x == null))))?parseFloat(x):(0));
var by = (((!((y == null))))?parseFloat(y):(0));
(target.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.rect.width),"px"].join(''));

(target.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.rect.height),"px"].join(''));

var ax = (bx + e.deltaRect.left);
var ay = (by + e.deltaRect.top);
(target.style.transform = ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ax),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ay),"px)"].join(''));

target.setAttribute("data-x",ax);

return target.setAttribute("data-y",ay);
})], null),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interact.modifiers.restrictSize(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"height","height",1025178622),(25)], null)], null)))], null),new cljs.core.Keyword(null,"inertia","inertia",-1478343701),true], null)));
return (function (){
return it.unset();
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hl], null));

return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"bounding","bounding",-2125178263)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var vw_bounding = temp__5720__auto__;
var map__71995 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(hl);
var map__71995__$1 = cljs.core.__destructure_map(map__71995);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71995__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-hls-area-region","div.extensions__pdf-hls-area-region",-850888181),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"style","style",-496642736),vw_bounding,new cljs.core.Keyword(null,"data-color","data-color",-1132407184),color,new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_tip_BANG_,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),open_tip_BANG_], null)], null);
} else {
return null;
}
})());
}),null,"frontend.extensions.pdf.highlights/pdf-highlight-area-region");
frontend.extensions.pdf.highlights.pdf_highlights_region_container = rum.core.lazy_build(rum.core.build_defc,(function (viewer,page_hls,ops){
return daiquiri.core.create_element("div",{'className':"hls-region-container"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$extensions$pdf$highlights$iter__71998(s__71999){
return (new cljs.core.LazySeq(null,(function (){
var s__71999__$1 = s__71999;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__71999__$1);
if(temp__5720__auto__){
var s__71999__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71999__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__71999__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72001 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72000 = (0);
while(true){
if((i__72000 < size__4651__auto__)){
var hl = cljs.core._nth(c__4650__auto__,i__72000);
cljs.core.chunk_append(b__72001,(function (){var vw_hl = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (i__72000,hl,c__4650__auto__,size__4651__auto__,b__72001,s__71999__$2,temp__5720__auto__){
return (function (p1__71996_SHARP_){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,p1__71996_SHARP_);
});})(i__72000,hl,c__4650__auto__,size__4651__auto__,b__72001,s__71999__$2,temp__5720__auto__))
);
return rum.core.with_key((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)))?frontend.extensions.pdf.highlights.pdf_highlight_area_region(viewer,vw_hl,hl,ops):frontend.extensions.pdf.highlights.pdf_highlights_text_region(viewer,vw_hl,hl,ops)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl));
})());

var G__72310 = (i__72000 + (1));
i__72000 = G__72310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72001),frontend$extensions$pdf$highlights$iter__71998(cljs.core.chunk_rest(s__71999__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72001),null);
}
} else {
var hl = cljs.core.first(s__71999__$2);
return cljs.core.cons((function (){var vw_hl = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (hl,s__71999__$2,temp__5720__auto__){
return (function (p1__71996_SHARP_){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,p1__71996_SHARP_);
});})(hl,s__71999__$2,temp__5720__auto__))
);
return rum.core.with_key((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)))?frontend.extensions.pdf.highlights.pdf_highlight_area_region(viewer,vw_hl,hl,ops):frontend.extensions.pdf.highlights.pdf_highlights_text_region(viewer,vw_hl,hl,ops)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl));
})(),frontend$extensions$pdf$highlights$iter__71998(cljs.core.rest(s__71999__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(page_hls);
})())]);
}),null,"frontend.extensions.pdf.highlights/pdf-highlights-region-container");
frontend.extensions.pdf.highlights.pdf_highlight_area_selection = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__72011){
var map__72012 = p__72011;
var map__72012__$1 = cljs.core.__destructure_map(map__72012);
var show_ctx_tip_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72012__$1,new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502));
var viewer_clt = viewer.viewer.classList;
var cnt_el = viewer.container;
var _STAR_el = rum.core.use_ref(null);
var _STAR_sta_el = rum.core.use_ref(null);
var _STAR_cnt_rect = rum.core.use_ref(null);
var vec__72013 = rum.core.use_state(null);
var start_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72013,(0),null);
var set_start_coord_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72013,(1),null);
var vec__72016 = rum.core.use_state(null);
var end_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72016,(0),null);
var set_end_coord_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72016,(1),null);
var vec__72019 = frontend.rum.use_atom(frontend.extensions.pdf.highlights._STAR_area_mode_QMARK_);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72019,(0),null);
var set_area_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72019,(1),null);
var should_start = (function (e){
var target = e.target;
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(target.classList.contains("extensions__pdf-hls-area-region"));
if(and__4251__auto__){
return target.closest(".page");
} else {
return and__4251__auto__;
}
})())){
var and__4251__auto__ = e;
if(cljs.core.truth_(and__4251__auto__)){
var or__4253__auto__ = e.metaKey;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var and__4251__auto____$1 = frontend.util.win32_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return e.shiftKey;
} else {
return and__4251__auto____$1;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core.deref(frontend.extensions.pdf.highlights._STAR_area_mode_QMARK_);
}
}
} else {
return and__4251__auto__;
}
} else {
return null;
}
});
var reset_coords = (function (){
(set_start_coord_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_start_coord_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_start_coord_BANG_.call(null,null));

(set_end_coord_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_end_coord_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_end_coord_BANG_.call(null,null));

return rum.core.set_ref_BANG_(_STAR_sta_el,null);
});
var calc_coords = (function (page_x,page_y){
if(cljs.core.truth_(cnt_el)){
var cnt_rect = rum.core.deref(_STAR_cnt_rect);
var cnt_rect__$1 = (function (){var or__4253__auto__ = cnt_rect;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs_bean.core.__GT_clj(cnt_el.getBoundingClientRect().toJSON());
}
})();
var ___$1 = rum.core.set_ref_BANG_(_STAR_cnt_rect,cnt_rect__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((page_x - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cnt_rect__$1)) + cnt_el.scrollLeft),new cljs.core.Keyword(null,"y","y",-1757859776),((page_y - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cnt_rect__$1)) + cnt_el.scrollTop)], null);
} else {
return null;
}
});
var calc_pos = (function (start,end){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(function (){var x__4339__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start);
var y__4340__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})(),new cljs.core.Keyword(null,"top","top",-1856271961),(function (){var x__4339__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start);
var y__4340__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end);
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})(),new cljs.core.Keyword(null,"width","width",-384071477),Math.abs((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start))),new cljs.core.Keyword(null,"height","height",1025178622),Math.abs((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start)))], null);
});
var disable_text_selection_BANG_ = (function (p1__72006_SHARP_){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(viewer_clt,(cljs.core.truth_(p1__72006_SHARP_)?"add":"remove"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["disabled-text-selection"], 0));
});
var fn_move = rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((function (e){
var G__72024 = calc_coords(e.pageX,e.pageY);
return (set_end_coord_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_end_coord_BANG_.cljs$core$IFn$_invoke$arity$1(G__72024) : set_end_coord_BANG_.call(null,G__72024));
}),cljs.core.PersistentVector.EMPTY);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = cnt_el;
if(cljs.core.truth_(temp__5720__auto__)){
var root = temp__5720__auto__;
var fn_start = (function (e){
if(cljs.core.truth_(should_start(e))){
rum.core.set_ref_BANG_(_STAR_sta_el,e.target);

var G__72029_72311 = calc_coords(e.pageX,e.pageY);
(set_start_coord_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_start_coord_BANG_.cljs$core$IFn$_invoke$arity$1(G__72029_72311) : set_start_coord_BANG_.call(null,G__72029_72311));

disable_text_selection_BANG_(true);

return root.addEventListener("mousemove",fn_move);
} else {
return reset_coords();
}
});
var fn_end = (function (e){
var temp__5720__auto____$1 = rum.core.deref(_STAR_sta_el);
if(cljs.core.truth_(temp__5720__auto____$1)){
var start_el = temp__5720__auto____$1;
var end_72312 = calc_coords(e.pageX,e.pageY);
var pos_72313 = calc_pos(start_coord,end_72312);
if((((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(pos_72313) > (10))) && ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(pos_72313) > (10))))){
var temp__5720__auto___72314__$2 = start_el.closest(".page");
if(cljs.core.truth_(temp__5720__auto___72314__$2)){
var page_el_72315 = temp__5720__auto___72314__$2;
var page_number_72316 = (page_el_72315.dataset.pageNumber | (0));
var page_pos_72317 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pos_72313,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(pos_72313) - page_el_72315.offsetTop),new cljs.core.Keyword(null,"left","left",-399115937),(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(pos_72313) - page_el_72315.offsetLeft)], null)], 0));
var vw_pos_72318 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),page_pos_72317,new cljs.core.Keyword(null,"rects","rects",1714526167),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"page","page",849072397),page_number_72316], null);
var sc_pos_72319 = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,vw_pos_72318);
var point_72320 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null);
var hl_72321 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"page","page",849072397),page_number_72316,new cljs.core.Keyword(null,"position","position",-2011731912),sc_pos_72319,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"[:span]",new cljs.core.Keyword(null,"image","image",-58725096),Date.now()], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
var G__72030_72322 = viewer;
var G__72031_72323 = hl_72321;
var G__72032_72324 = point_72320;
var G__72033_72325 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550),(function (){
return reset_coords();
})], null);
(show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$4 ? show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$4(G__72030_72322,G__72031_72323,G__72032_72324,G__72033_72325) : show_ctx_tip_BANG_.call(null,G__72030_72322,G__72031_72323,G__72032_72324,G__72033_72325));

(set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_area_mode_BANG_.call(null,false));
} else {
}
} else {
reset_coords();
}

disable_text_selection_BANG_(false);

return root.removeEventListener("mousemove",fn_move);
} else {
return null;
}
});
var G__72034_72326 = root;
G__72034_72326.addEventListener("mousedown",fn_start);

G__72034_72326.addEventListener("mouseup",fn_end,({"once": true}));


return (function (){
var G__72035 = root;
G__72035.removeEventListener("mousedown",fn_start);

G__72035.removeEventListener("mouseup",fn_end);

return G__72035;
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_coord], null));

return daiquiri.core.create_element("div",{'ref':_STAR_el,'className':"extensions__pdf-area-selection"},[(cljs.core.truth_((function (){var and__4251__auto__ = start_coord;
if(cljs.core.truth_(and__4251__auto__)){
return end_coord;
} else {
return and__4251__auto__;
}
})())?daiquiri.core.create_element("div",{'style':daiquiri.interpreter.element_attributes(calc_pos(start_coord,end_coord)),'className':"shadow-rect"},[]):null)]);
}),null,"frontend.extensions.pdf.highlights/pdf-highlight-area-selection");
frontend.extensions.pdf.highlights.pdf_highlights = rum.core.lazy_build(rum.core.build_defc,(function (el,viewer,initial_hls,loaded_pages,p__72047){
var map__72048 = p__72047;
var map__72048__$1 = cljs.core.__destructure_map(map__72048);
var set_dirty_hls_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72048__$1,new cljs.core.Keyword(null,"set-dirty-hls!","set-dirty-hls!",-1468393512));
var doc = el.ownerDocument;
var win = doc.defaultView;
var _STAR_mounted = rum.core.use_ref(false);
var vec__72049 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null,new cljs.core.Keyword(null,"point","point",1813198264),null], null));
var sel_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72049,(0),null);
var set_sel_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72049,(1),null);
var vec__72052 = rum.core.use_state(initial_hls);
var highlights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72052,(0),null);
var set_highlights_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72052,(1),null);
var vec__72055 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),null,new cljs.core.Keyword(null,"vw-pos","vw-pos",1025034976),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"point","point",1813198264),null,new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550),null], null));
var tip_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72055,(0),null);
var set_tip_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72055,(1),null);
var clear_ctx_tip_BANG_ = rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((function (){
var reset_fn = new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550).cljs$core$IFn$_invoke$arity$1(tip_state);
var G__72059_72327 = cljs.core.PersistentArrayMap.EMPTY;
(set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72059_72327) : set_tip_state_BANG_.call(null,G__72059_72327));

var and__4251__auto__ = cljs.core.fn_QMARK_(reset_fn);
if(and__4251__auto__){
return (reset_fn.cljs$core$IFn$_invoke$arity$0 ? reset_fn.cljs$core$IFn$_invoke$arity$0() : reset_fn.call(null));
} else {
return and__4251__auto__;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tip_state], null));
var show_ctx_tip_BANG_ = (function() { 
var G__72328__delegate = function (viewer__$1,hl,point,ops){
var vw_pos = frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer__$1,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(hl));
var G__72065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),hl,new cljs.core.Keyword(null,"vw-pos","vw-pos",1025034976),vw_pos,new cljs.core.Keyword(null,"point","point",1813198264),point], null),ops));
return (set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72065) : set_tip_state_BANG_.call(null,G__72065));
};
var G__72328 = function (viewer__$1,hl,point,var_args){
var ops = null;
if (arguments.length > 3) {
var G__72329__i = 0, G__72329__a = new Array(arguments.length -  3);
while (G__72329__i < G__72329__a.length) {G__72329__a[G__72329__i] = arguments[G__72329__i + 3]; ++G__72329__i;}
  ops = new cljs.core.IndexedSeq(G__72329__a,0,null);
} 
return G__72328__delegate.call(this,viewer__$1,hl,point,ops);};
G__72328.cljs$lang$maxFixedArity = 3;
G__72328.cljs$lang$applyTo = (function (arglist__72330){
var viewer__$1 = cljs.core.first(arglist__72330);
arglist__72330 = cljs.core.next(arglist__72330);
var hl = cljs.core.first(arglist__72330);
arglist__72330 = cljs.core.next(arglist__72330);
var point = cljs.core.first(arglist__72330);
var ops = cljs.core.rest(arglist__72330);
return G__72328__delegate(viewer__$1,hl,point,ops);
});
G__72328.cljs$core$IFn$_invoke$arity$variadic = G__72328__delegate;
return G__72328;
})()
;
var add_hl_BANG_ = (function (hl){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl))){
var highlights_72331__$1 = frontend.extensions.pdf.utils.fix_nested_js(highlights);
var G__72066_72332 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(highlights_72331__$1,hl);
(set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__72066_72332) : set_highlights_BANG_.call(null,G__72066_72332));

var temp__5720__auto__ = (function (){var and__4251__auto__ = frontend.extensions.pdf.assets.area_highlight_QMARK_(hl);
if(cljs.core.truth_(and__4251__auto__)){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(hl));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var vw_pos = temp__5720__auto__;
return frontend.extensions.pdf.assets.persist_hl_area_image$(viewer,new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),hl,null,new cljs.core.Keyword(null,"bounding","bounding",-2125178263).cljs$core$IFn$_invoke$arity$1(vw_pos));
} else {
return null;
}
} else {
return null;
}
});
var upd_hl_BANG_ = (function (hl){
var highlights__$1 = frontend.extensions.pdf.utils.fix_nested_js(highlights);
var temp__5720__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__72040_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__72040_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(highlights__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var vec__72072 = temp__5720__auto__;
var target_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72072,(0),null);
var G__72075_72333 = cljs.core.assoc_in(highlights__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_idx], null),hl);
(set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__72075_72333) : set_highlights_BANG_.call(null,G__72075_72333));

return frontend.extensions.pdf.assets.update_hl_area_block_BANG_(hl);
} else {
return null;
}
});
var del_hl_BANG_ = (function (hl){
var temp__5720__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl);
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
var G__72076 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__72041_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__72041_SHARP_));
}),highlights));
return (set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__72076) : set_highlights_BANG_.call(null,G__72076));
} else {
return null;
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(rum.core.deref(_STAR_mounted))){
return (set_dirty_hls_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_dirty_hls_BANG_.cljs$core$IFn$_invoke$arity$1(highlights) : set_dirty_hls_BANG_.call(null,highlights));
} else {
return rum.core.set_ref_BANG_(_STAR_mounted,true);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlights], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var fn_selection_ok = (function (e){
var selection = document.getSelection();
var sel_range = selection.getRangeAt((0));
if(cljs.core.truth_(selection.isCollapsed)){
var G__72078 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),true], null);
return (set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72078) : set_sel_state_BANG_.call(null,G__72078));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = sel_range;
if(cljs.core.truth_(and__4251__auto__)){
return el.contains(sel_range.commonAncestorContainer);
} else {
return and__4251__auto__;
}
})())){
var G__72080 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),false,new cljs.core.Keyword(null,"range","range",1639692286),sel_range,new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null)], null);
return (set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72080) : set_sel_state_BANG_.call(null,G__72080));
} else {
return null;
}
}
});
var fn_selection = (function (){
var _STAR_dirty = cljs.core.volatile_BANG_(false);
var fn_dirty = (function (){
return cljs.core.vreset_BANG_(_STAR_dirty,true);
});
document.addEventListener("selectionchange",fn_dirty);

return document.addEventListener("mouseup",(function (e){
var and__4251__auto___72334 = cljs.core.deref(_STAR_dirty);
if(cljs.core.truth_(and__4251__auto___72334)){
fn_selection_ok(e);
} else {
}

return document.removeEventListener("selectionchange",fn_dirty);
}),({"once": true}));
});
var fn_resize = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.adjust_viewer_size_BANG_,viewer);
var G__72085_72335 = el;
G__72085_72335.addEventListener("mousedown",fn_selection);


var G__72086_72336 = win;
G__72086_72336.addEventListener("resize",fn_resize);


return (function (){
var G__72087_72337 = el;
G__72087_72337.removeEventListener("mousedown",fn_selection);


var G__72088 = win;
G__72088.removeEventListener("resize",fn_resize);

return G__72088;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = (function (){var and__4251__auto__ = cljs.core.not(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523).cljs$core$IFn$_invoke$arity$1(sel_state));
if(and__4251__auto__){
return new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(sel_state);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var sel_range = temp__5720__auto__;
var point = new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(sel_state);
var hl_fn = (function (){
var temp__5720__auto____$1 = frontend.extensions.pdf.utils.get_page_from_range(sel_range);
if(cljs.core.truth_(temp__5720__auto____$1)){
var page_info = temp__5720__auto____$1;
var temp__5720__auto____$2 = frontend.extensions.pdf.utils.get_range_rects_LT__page_cnt(sel_range,new cljs.core.Keyword(null,"page-el","page-el",-124721580).cljs$core$IFn$_invoke$arity$1(page_info));
if(cljs.core.truth_(temp__5720__auto____$2)){
var sel_rects = temp__5720__auto____$2;
var page = (new cljs.core.Keyword(null,"page-number","page-number",556880104).cljs$core$IFn$_invoke$arity$1(page_info) | (0));
var bounding = frontend.extensions.pdf.utils.get_bounding_rect(sel_rects);
var vw_pos = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),bounding,new cljs.core.Keyword(null,"rects","rects",1714526167),sel_rects,new cljs.core.Keyword(null,"page","page",849072397),page], null);
var sc_pos = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,vw_pos);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"position","position",-2011731912),sc_pos,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),sel_range.toString()], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
} else {
return null;
}
} else {
return null;
}
});
var G__72091 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),hl_fn,new cljs.core.Keyword(null,"range","range",1639692286),sel_range,new cljs.core.Keyword(null,"point","point",1813198264),point], null);
return (set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72091) : set_tip_state_BANG_.call(null,G__72091));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(sel_state)], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto___72338 = (function (){var and__4251__auto__ = cljs.core.sequential_QMARK_(highlights);
if(and__4251__auto__){
return cljs.core.group_by(new cljs.core.Keyword(null,"page","page",849072397),highlights);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto___72338)){
var grouped_hls_72339 = temp__5720__auto___72338;
var seq__72092_72340 = cljs.core.seq(loaded_pages);
var chunk__72093_72341 = null;
var count__72094_72342 = (0);
var i__72095_72343 = (0);
while(true){
if((i__72095_72343 < count__72094_72342)){
var page_72344 = chunk__72093_72341.cljs$core$IIndexed$_nth$arity$2(null,i__72095_72343);
var temp__5720__auto___72345__$1 = frontend.extensions.pdf.utils.resolve_hls_layer_BANG_(viewer,page_72344);
if(cljs.core.truth_(temp__5720__auto___72345__$1)){
var hls_layer_72346 = temp__5720__auto___72345__$1;
var page_hls_72347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_hls_72339,page_72344);
rum.core.mount(frontend.extensions.pdf.highlights.pdf_highlights_region_container(viewer,page_hls_72347,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502),show_ctx_tip_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null)),hls_layer_72346);
} else {
}


var G__72348 = seq__72092_72340;
var G__72349 = chunk__72093_72341;
var G__72350 = count__72094_72342;
var G__72351 = (i__72095_72343 + (1));
seq__72092_72340 = G__72348;
chunk__72093_72341 = G__72349;
count__72094_72342 = G__72350;
i__72095_72343 = G__72351;
continue;
} else {
var temp__5720__auto___72352__$1 = cljs.core.seq(seq__72092_72340);
if(temp__5720__auto___72352__$1){
var seq__72092_72353__$1 = temp__5720__auto___72352__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72092_72353__$1)){
var c__4679__auto___72354 = cljs.core.chunk_first(seq__72092_72353__$1);
var G__72355 = cljs.core.chunk_rest(seq__72092_72353__$1);
var G__72356 = c__4679__auto___72354;
var G__72357 = cljs.core.count(c__4679__auto___72354);
var G__72358 = (0);
seq__72092_72340 = G__72355;
chunk__72093_72341 = G__72356;
count__72094_72342 = G__72357;
i__72095_72343 = G__72358;
continue;
} else {
var page_72359 = cljs.core.first(seq__72092_72353__$1);
var temp__5720__auto___72360__$2 = frontend.extensions.pdf.utils.resolve_hls_layer_BANG_(viewer,page_72359);
if(cljs.core.truth_(temp__5720__auto___72360__$2)){
var hls_layer_72361 = temp__5720__auto___72360__$2;
var page_hls_72362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_hls_72339,page_72359);
rum.core.mount(frontend.extensions.pdf.highlights.pdf_highlights_region_container(viewer,page_hls_72362,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502),show_ctx_tip_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null)),hls_layer_72361);
} else {
}


var G__72363 = cljs.core.next(seq__72092_72353__$1);
var G__72364 = null;
var G__72365 = (0);
var G__72366 = (0);
seq__72092_72340 = G__72363;
chunk__72093_72341 = G__72364;
count__72094_72342 = G__72365;
i__72095_72343 = G__72366;
continue;
}
} else {
}
}
break;
}
} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_pages,highlights], null));

return daiquiri.core.create_element("div",{'className':"extensions__pdf-highlights-cnt"},[(cljs.core.truth_(new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(tip_state))?ReactDOM.createPortal(frontend.extensions.pdf.highlights.pdf_highlights_ctx_menu(viewer,tip_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clear-ctx-tip!","clear-ctx-tip!",516093238),clear_ctx_tip_BANG_,new cljs.core.Keyword(null,"add-hl!","add-hl!",-832546833),add_hl_BANG_,new cljs.core.Keyword(null,"del-hl!","del-hl!",-703533207),del_hl_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null)),el.querySelector(".pp-holder")):null),frontend.extensions.pdf.highlights.pdf_highlight_finder(viewer),frontend.extensions.pdf.highlights.pdf_page_finder(viewer),frontend.extensions.pdf.highlights.pdf_highlight_area_selection(viewer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clear-ctx-tip!","clear-ctx-tip!",516093238),clear_ctx_tip_BANG_,new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502),show_ctx_tip_BANG_,new cljs.core.Keyword(null,"add-hl!","add-hl!",-832546833),add_hl_BANG_], null))]);
}),null,"frontend.extensions.pdf.highlights/pdf-highlights");
frontend.extensions.pdf.highlights.pdf_settings = rum.core.lazy_build(rum.core.build_defc,(function (_viewer,theme,p__72104){
var map__72105 = p__72104;
var map__72105__$1 = cljs.core.__destructure_map(map__72105);
var hide_settings_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72105__$1,new cljs.core.Keyword(null,"hide-settings!","hide-settings!",-226708021));
var select_theme_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72105__$1,new cljs.core.Keyword(null,"select-theme!","select-theme!",1638110696));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72105__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var _STAR_el_popup = rum.core.use_ref(null);
var vec__72106 = frontend.rum.use_atom(frontend.extensions.pdf.highlights._STAR_area_dashed_QMARK_);
var area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72106,(0),null);
var set_area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72106,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var el_popup = rum.core.deref(_STAR_el_popup);
var cb = (function (e){
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.which,(27));
if(and__4251__auto__){
return (hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_settings_BANG_.call(null));
} else {
return and__4251__auto__;
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

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.storage.set("ls-pdf-area-is-dashed",cljs.core.boolean$(area_dashed_QMARK_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [area_dashed_QMARK_], null));

return daiquiri.core.create_element("div",{'onClick':(function (e){
var target = e.target;
if(cljs.core.truth_(rum.core.deref(_STAR_el_popup).contains(target))){
return null;
} else {
return (hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_settings_BANG_.call(null));
}
}),'className':"extensions__pdf-settings hls-popup-wrap visible"},[daiquiri.core.create_element("div",{'ref':_STAR_el_popup,'tabIndex':(-1),'className':"extensions__pdf-settings-inner hls-popup-box"},[(function (){var attrs72114 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (it){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.flex.items-center.justify-center","button.flex.items-center.justify-center",-1757945011),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),it,new cljs.core.Keyword(null,"class","class",-2030961996),it,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(select_theme_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_theme_BANG_.cljs$core$IFn$_invoke$arity$1(it) : select_theme_BANG_.call(null,it));

return (hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_settings_BANG_.call(null));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,it))?frontend.components.svg.check.cljs$core$IFn$_invoke$arity$0():null)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["light","warm","dark"], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs72114))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-settings-item","theme-picker"], null)], null),attrs72114], 0))):{'className':"extensions__pdf-settings-item theme-picker"}),((cljs.core.map_QMARK_(attrs72114))?null:[daiquiri.interpreter.interpret(attrs72114)]));
})(),daiquiri.core.create_element("div",{'className':"extensions__pdf-settings-item toggle-input"},[(function (){var attrs72115 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","toggle-dashed","pdf/toggle-dashed",431816058)) : t.call(null,new cljs.core.Keyword("pdf","toggle-dashed","pdf/toggle-dashed",431816058)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs72115))?daiquiri.interpreter.element_attributes(attrs72115):null),((cljs.core.map_QMARK_(attrs72115))?null:[daiquiri.interpreter.interpret(attrs72115)]));
})(),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(area_dashed_QMARK_,(function (){
var G__72117 = cljs.core.not(area_dashed_QMARK_);
return (set_area_dashed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_area_dashed_QMARK_.cljs$core$IFn$_invoke$arity$1(G__72117) : set_area_dashed_QMARK_.call(null,G__72117));
}),true))])])]);
}),null,"frontend.extensions.pdf.highlights/pdf-settings");
frontend.extensions.pdf.highlights.pdf_outline_item = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__72121,p__72122){
var map__72123 = p__72121;
var map__72123__$1 = cljs.core.__destructure_map(map__72123);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72123__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72123__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72123__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var dest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72123__$1,new cljs.core.Keyword(null,"dest","dest",-34569477));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72123__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var map__72124 = p__72122;
var map__72124__$1 = cljs.core.__destructure_map(map__72124);
var ops = map__72124__$1;
var upt_outline_node_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72124__$1,new cljs.core.Keyword(null,"upt-outline-node!","upt-outline-node!",-1463872689));
var has_child_QMARK_ = cljs.core.seq(items);
var expanded_QMARK_ = cljs.core.boolean$(expanded);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-outline-item",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-children","has-children",-934485512),has_child_QMARK_,new cljs.core.Keyword(null,"is-expand","is-expand",-1852164794),expanded_QMARK_], null)], null))], null))},[daiquiri.core.create_element("div",{'className':"inner"},[daiquiri.core.create_element("a",{'href':"javascript:void(0);",'data-dest':JSON.stringify(cljs_bean.core.__GT_js(dest)),'onClick':(function (e){
var target = e.target;
if(cljs.core.truth_(target.closest("i"))){
var path = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72118_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/\d+/,p1__72118_SHARP_))){
return (p1__72118_SHARP_ | (0));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__72118_SHARP_);
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(parent,/\-/));
e.preventDefault();

var G__72132 = path;
var G__72133 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),(!(expanded_QMARK_))], null);
return (upt_outline_node_BANG_.cljs$core$IFn$_invoke$arity$2 ? upt_outline_node_BANG_.cljs$core$IFn$_invoke$arity$2(G__72132,G__72133) : upt_outline_node_BANG_.call(null,G__72132,G__72133));
} else {
var temp__5720__auto__ = (function (){var and__4251__auto__ = dest;
if(cljs.core.truth_(and__4251__auto__)){
return cljs_bean.core.__GT_js(dest);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var dest__$1 = temp__5720__auto__;
return viewer.linkService.goToDestination(dest__$1);
} else {
return null;
}
}
})},[(function (){var attrs72134 = frontend.components.svg.arrow_right_v2;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs72134))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["arrow"], null)], null),attrs72134], 0))):{'className':"arrow"}),((cljs.core.map_QMARK_(attrs72134))?null:[daiquiri.interpreter.interpret(attrs72134)]));
})(),(function (){var attrs72136 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs72136))?daiquiri.interpreter.element_attributes(attrs72136):null),((cljs.core.map_QMARK_(attrs72136))?null:[daiquiri.interpreter.interpret(attrs72136)]));
})()])]),((((has_child_QMARK_) && (expanded_QMARK_)))?(function (){var attrs72131 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,itm){
var parent__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent),"-items-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
return rum.core.with_key((function (){var G__72137 = viewer;
var G__72138 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([itm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent__$1], null)], 0));
var G__72139 = ops;
return (frontend.extensions.pdf.highlights.pdf_outline_item.cljs$core$IFn$_invoke$arity$3 ? frontend.extensions.pdf.highlights.pdf_outline_item.cljs$core$IFn$_invoke$arity$3(G__72137,G__72138,G__72139) : frontend.extensions.pdf.highlights.pdf_outline_item.call(null,G__72137,G__72138,G__72139));
})(),parent__$1);
}),items);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs72131))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["children"], null)], null),attrs72131], 0))):{'className':"children"}),((cljs.core.map_QMARK_(attrs72131))?null:[daiquiri.interpreter.interpret(attrs72131)]));
})():null)]);
}),null,"frontend.extensions.pdf.highlights/pdf-outline-item");
frontend.extensions.pdf.highlights.pdf_outline = rum.core.lazy_build(rum.core.build_defc,(function (viewer,visible_QMARK_,set_visible_BANG_){
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = (function (){var and__4251__auto__ = viewer;
if(cljs.core.truth_(and__4251__auto__)){
return viewer.pdfDocument;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var pdf_doc = temp__5720__auto__;
var _STAR_el_outline = rum.core.use_ref(null);
var vec__72145 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var outline_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72145,(0),null);
var set_outline_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72145,(1),null);
var upt_outline_node_BANG_ = rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((function (path,attrs){
var G__72148 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(outline_data,path,cljs.core.merge,attrs);
return (set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__72148) : set_outline_data_BANG_.call(null,G__72148));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [outline_data], null));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(pdf_doc.getOutline(),(function (data){
return promesa.protocols._promise((function (){
var temp__5720__auto___72367__$1 = (function (){var and__4251__auto__ = data;
if(cljs.core.truth_(and__4251__auto__)){
return data.map((function (it){
(it.href = viewer.linkService.getDestinationHash(it.dest));

(it.expanded = false);

return it;
}));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto___72367__$1)){
var data_72368__$1 = temp__5720__auto___72367__$1;
} else {
}

var G__72149 = cljs_bean.core.__GT_clj(data);
return (set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__72149) : set_outline_data_BANG_.call(null,G__72149));
})()
);
}));
})),(function (e){
return console.error("[Load outline Error]",e);
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdf_doc], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var el_outline = rum.core.deref(_STAR_el_outline);
var cb = (function (e){
var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.which,(27));
if(and__4251__auto__){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_visible_BANG_.call(null,false));
} else {
return and__4251__auto__;
}
});
setTimeout((function (){
return el_outline.focus();
}));

el_outline.addEventListener("keyup",cb);

return (function (){
return el_outline.removeEventListener("keyup",cb);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-outline-wrap.hls-popup-wrap","div.extensions__pdf-outline-wrap.hls-popup-wrap",-2047991158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),visible_QMARK_], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var target = e.target;
if(cljs.core.truth_(rum.core.deref(_STAR_el_outline).contains(target))){
return null;
} else {
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_visible_BANG_.call(null,false));
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-outline.hls-popup-box","div.extensions__pdf-outline.hls-popup-box",-1104419662),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_outline,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),((cljs.core.seq(outline_data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,itm){
return rum.core.with_key(frontend.extensions.pdf.highlights.pdf_outline_item(viewer,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([itm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),idx], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"upt-outline-node!","upt-outline-node!",-1463872689),upt_outline_node_BANG_], null)),idx);
}),outline_data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.is-empty","section.is-empty",-877953899),"No outlines"], null))], null)], null);
} else {
return null;
}
})());
}),null,"frontend.extensions.pdf.highlights/pdf-outline");
frontend.extensions.pdf.highlights.docinfo_display = rum.core.lazy_build(rum.core.build_defc,(function (info,close_fn_BANG_){
return daiquiri.core.create_element("div",{'id':"pdf-docinfo",'className':"extensions__pdf-doc-info"},[daiquiri.core.create_element("div",{'className':"inner-text"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$extensions$pdf$highlights$iter__72155(s__72156){
return (new cljs.core.LazySeq(null,(function (){
var s__72156__$1 = s__72156;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__72156__$1);
if(temp__5720__auto__){
var s__72156__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72156__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72156__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72158 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72157 = (0);
while(true){
if((i__72157 < size__4651__auto__)){
var vec__72159 = cljs.core._nth(c__4650__auto__,i__72157);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72159,(1),null);
var k__$1 = [clojure.string.replace_first(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),/^\:/,""),"::"].join('');
cljs.core.chunk_append(b__72158,daiquiri.core.create_element("p",{'key':k__$1},[(function (){var attrs72162 = k__$1;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs72162))?daiquiri.interpreter.element_attributes(attrs72162):null),((cljs.core.map_QMARK_(attrs72162))?null:[attrs72162]));
})(),"  ",daiquiri.core.create_element("i",null,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))])]));

var G__72369 = (i__72157 + (1));
i__72157 = G__72369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72158),frontend$extensions$pdf$highlights$iter__72155(cljs.core.chunk_rest(s__72156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72158),null);
}
} else {
var vec__72164 = cljs.core.first(s__72156__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72164,(1),null);
var k__$1 = [clojure.string.replace_first(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),/^\:/,""),"::"].join('');
return cljs.core.cons(daiquiri.core.create_element("p",{'key':k__$1},[(function (){var attrs72162 = k__$1;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs72162))?daiquiri.interpreter.element_attributes(attrs72162):null),((cljs.core.map_QMARK_(attrs72162))?null:[attrs72162]));
})(),"  ",daiquiri.core.create_element("i",null,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))])]),frontend$extensions$pdf$highlights$iter__72155(cljs.core.rest(s__72156__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(info);
})())]),(function (){var attrs72154 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Copy all",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var text = document.querySelector("#pdf-docinfo > .inner-text").innerText;
var text__$1 = clojure.string.replace(text,/[\n\t]+/,"\n");
frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1(text__$1);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Copied!",new cljs.core.Keyword(null,"success","success",1890645906));

return (close_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? close_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : close_fn_BANG_.call(null));
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs72154))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","justify-center","pt-2","pb--2"], null)], null),attrs72154], 0))):{'className':"flex items-center justify-center pt-2 pb--2"}),((cljs.core.map_QMARK_(attrs72154))?null:[daiquiri.interpreter.interpret(attrs72154)]));
})()]);
}),null,"frontend.extensions.pdf.highlights/docinfo-display");
frontend.extensions.pdf.highlights.make_docinfo_in_modal = (function frontend$extensions$pdf$highlights$make_docinfo_in_modal(info){
return (function (close_fn_BANG_){
return frontend.extensions.pdf.highlights.docinfo_display(info,close_fn_BANG_);
});
});
frontend.extensions.pdf.highlights.pdf_toolbar = rum.core.lazy_build(rum.core.build_defc,(function (viewer){
var vec__72175 = frontend.rum.use_atom(frontend.extensions.pdf.highlights._STAR_area_mode_QMARK_);
var area_mode_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72175,(0),null);
var set_area_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72175,(1),null);
var vec__72178 = rum.core.use_state(false);
var outline_visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72178,(0),null);
var set_outline_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72178,(1),null);
var vec__72181 = frontend.rum.use_atom(frontend.extensions.pdf.highlights._STAR_highlight_mode_QMARK_);
var highlight_mode_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72181,(0),null);
var set_highlight_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72181,(1),null);
var vec__72184 = rum.core.use_state(false);
var settings_visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72184,(0),null);
var set_settings_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72184,(1),null);
var _STAR_page_ref = rum.core.use_ref(null);
var vec__72187 = rum.core.use_state((1));
var current_page_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72187,(0),null);
var set_current_page_num_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72187,(1),null);
var vec__72190 = rum.core.use_state((1));
var total_page_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72190,(0),null);
var set_total_page_num_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72190,(1),null);
var vec__72193 = rum.core.use_state((function (){var or__4253__auto__ = frontend.storage.get("ls-pdf-viewer-theme");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "light";
}
})());
var viewer_theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72193,(0),null);
var set_viewer_theme_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72193,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = document.getElementById("pdf-layout-container");
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
(el.dataset.theme = viewer_theme);

frontend.storage.set("ls-pdf-viewer-theme",viewer_theme);

return (function (){
return delete el.dataset["theme"];
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer_theme], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = (function (){var and__4251__auto__ = viewer;
if(cljs.core.truth_(and__4251__auto__)){
return viewer.pdfDocument.numPages;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var total = temp__5720__auto__;
var bus = viewer.eventBus;
var page_fn = (function (evt){
var num = evt.pageNumber;
return (set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(num) : set_current_page_num_BANG_.call(null,num));
});
(set_total_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_total_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(total) : set_total_page_num_BANG_.call(null,total));

var G__72198_72370 = viewer.currentPageNumber;
(set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(G__72198_72370) : set_current_page_num_BANG_.call(null,G__72198_72370));

bus.on("pagechanging",page_fn);

return (function (){
return bus.off("pagechanging",page_fn);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var input = rum.core.deref(_STAR_page_ref);
return (input.value = current_page_num);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page_num], null));

return daiquiri.core.create_element("div",{'className':"extensions__pdf-toolbar"},[daiquiri.core.create_element("div",{'className':"inner"},[daiquiri.core.create_element("div",{'className':"r flex buttons"},[daiquiri.core.create_element("a",{'title':"More settings",'onClick':(function (){
var G__72208 = cljs.core.not(settings_visible_QMARK_);
return (set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__72208) : set_settings_visible_BANG_.call(null,G__72208));
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.adjustments.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':["Area highlight (",(cljs.core.truth_(frontend.util.mac_QMARK_)?"\u2318":"Shift"),")"].join(''),'onClick':(function (){
var G__72210 = cljs.core.not(area_mode_QMARK_);
return (set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__72210) : set_area_mode_BANG_.call(null,G__72210));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",(cljs.core.truth_(area_mode_QMARK_)?"is-active":null)], null))},[daiquiri.interpreter.interpret(frontend.components.svg.icon_area.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':"Highlight mode",'onClick':(function (){
var G__72216 = cljs.core.not(highlight_mode_QMARK_);
return (set_highlight_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlight_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__72216) : set_highlight_mode_BANG_.call(null,G__72216));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",(cljs.core.truth_(highlight_mode_QMARK_)?"is-active":null)], null))},[daiquiri.interpreter.interpret(frontend.components.svg.highlighter.cljs$core$IFn$_invoke$arity$1((16)))]),daiquiri.core.create_element("a",{'title':"Zoom out",'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.zoom_out_viewer,viewer),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.zoom_out.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':"Zoom in",'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.zoom_in_viewer,viewer),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.zoom_in.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':"Outline",'onClick':(function (){
var G__72222 = cljs.core.not(outline_visible_QMARK_);
return (set_outline_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__72222) : set_outline_visible_BANG_.call(null,G__72222));
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.view_list.cljs$core$IFn$_invoke$arity$1((16)))]),daiquiri.core.create_element("a",{'title':"Document info",'onClick':(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.get_meta_data$(viewer),(function (ret){
return promesa.protocols._promise(frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.extensions.pdf.highlights.make_docinfo_in_modal(ret)));
}));
}));
}),'className':"button is-info"},[daiquiri.interpreter.interpret(frontend.components.svg.icon_info.cljs$core$IFn$_invoke$arity$0())]),daiquiri.core.create_element("a",{'title':"Annotations page",'onClick':(function (){
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.annotations.cljs$core$IFn$_invoke$arity$1((16)))]),daiquiri.core.create_element("div",{'className':"pager flex items-center ml-1"},[daiquiri.core.create_element("span",{'className':"nu flex items-center opacity-70"},[daiquiri.core.create_element("input",{'ref':_STAR_page_ref,'type':"number",'defaultValue':current_page_num,'onMouseEnter':(function (p1__72171_SHARP_){
return p1__72171_SHARP_.target.select();
}),'onKeyUp':(function (e){
var input = e.target;
var value = frontend.util.safe_parse_int(input.value);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(13));
if(and__4251__auto__){
var and__4251__auto____$1 = value;
if(cljs.core.truth_(and__4251__auto____$1)){
return (value > (0));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return (viewer.currentPageNumber = (((value > total_page_num))?total_page_num:value));
} else {
return null;
}
})},[]),daiquiri.core.create_element("small",null,["/ ",daiquiri.interpreter.interpret(total_page_num)])]),daiquiri.core.create_element("span",{'className':"ct flex items-center"},[daiquiri.core.create_element("a",{'onClick':(function (){
return viewer.previousPage();
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.up_narrow.cljs$core$IFn$_invoke$arity$0())]),daiquiri.core.create_element("a",{'onClick':(function (){
return viewer.nextPage();
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.down_narrow.cljs$core$IFn$_invoke$arity$0())])])]),daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"close","close",1835149582)], 0)))])])]),frontend.extensions.pdf.highlights.pdf_outline(viewer,outline_visible_QMARK_,set_outline_visible_BANG_),daiquiri.interpreter.interpret((function (){var and__4251__auto__ = settings_visible_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.extensions.pdf.highlights.pdf_settings(viewer,viewer_theme,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),frontend.context.i18n.t,new cljs.core.Keyword(null,"hide-settings!","hide-settings!",-226708021),(function (){
return (set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_settings_visible_BANG_.call(null,false));
}),new cljs.core.Keyword(null,"select-theme!","select-theme!",1638110696),(function (p1__72174_SHARP_){
return (set_viewer_theme_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_viewer_theme_BANG_.cljs$core$IFn$_invoke$arity$1(p1__72174_SHARP_) : set_viewer_theme_BANG_.call(null,p1__72174_SHARP_));
})], null));
} else {
return and__4251__auto__;
}
})())]);
}),null,"frontend.extensions.pdf.highlights/pdf-toolbar");
frontend.extensions.pdf.highlights.pdf_viewer = rum.core.lazy_build(rum.core.build_defc,(function (url,initial_hls,pdf_document,ops){
var _STAR_el_ref = rum.core.create_ref();
var vec__72232 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),null,new cljs.core.Keyword(null,"bus","bus",-1090873603),null,new cljs.core.Keyword(null,"link","link",-1769163468),null,new cljs.core.Keyword(null,"el","el",-1618201118),null], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72232,(0),null);
var set_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72232,(1),null);
var vec__72235 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565),cljs.core.PersistentVector.EMPTY], null));
var ano_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72235,(0),null);
var set_ano_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72235,(1),null);
var vec__72238 = rum.core.use_state(false);
var page_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72238,(0),null);
var set_page_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72238,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var event_bus = (new pdfjsViewer.EventBus());
var link_service = (new pdfjsViewer.PDFLinkService(({"eventBus": event_bus, "externalLinkTarget": (2)})));
var el = rum.core.deref(_STAR_el_ref);
var viewer = (new pdfjsViewer.PDFViewer(({"container": el, "eventBus": event_bus, "linkService": link_service, "enhanceTextSelection": true, "textLayerMode": (2), "removePageBorders": true})));
link_service.setDocument(pdf_document);

link_service.setViewer(viewer);

(window.lsPdfViewer = viewer);

promesa.core.then.cljs$core$IFn$_invoke$arity$2(viewer.setDocument(pdf_document),(function (){
var G__72241 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer,new cljs.core.Keyword(null,"bus","bus",-1090873603),event_bus,new cljs.core.Keyword(null,"link","link",-1769163468),link_service,new cljs.core.Keyword(null,"el","el",-1618201118),el], null);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72241) : set_state_BANG_.call(null,G__72241));
}));

return (function (){
var temp__5720__auto___72376 = viewer.currentPageNumber;
if(cljs.core.truth_(temp__5720__auto___72376)){
var last_page_72377 = temp__5720__auto___72376;
frontend.storage.set(["ls-pdf-last-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(url) : frontend.util.node_path.basename.call(null,url)))].join(''),last_page_72377);
} else {
}

if(cljs.core.truth_(pdf_document)){
return pdf_document.destroy();
} else {
return null;
}
});
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto__)){
var viewer = temp__5720__auto__;
var fn_textlayer_ready = (function (p){
var G__72245 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565).cljs$core$IFn$_invoke$arity$1(ano_state),(p.pageNumber | (0)))], null);
return (set_ano_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ano_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72245) : set_ano_state_BANG_.call(null,G__72245));
});
var fn_page_ready = (function (){
(viewer.currentScaleValue = "auto");

return (set_page_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_page_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_page_ready_BANG_.call(null,true));
});
var G__72246_72378 = viewer.eventBus;
G__72246_72378.on("pagesinit",fn_page_ready);

G__72246_72378.on("textlayerrendered",fn_textlayer_ready);


return (function (){
var G__72247 = viewer.eventBus;
G__72247.off("pagesinit",fn_page_ready);

G__72247.off("textlayerrendered",fn_textlayer_ready);

return G__72247;
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565).cljs$core$IFn$_invoke$arity$1(ano_state)], null));

var viewer = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",{'className':"extensions__pdf-viewer-cnt"},[daiquiri.core.create_element("div",{'ref':_STAR_el_ref,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-viewer",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-area-dashed","is-area-dashed",510137497),cljs.core.deref(frontend.extensions.pdf.highlights._STAR_area_dashed_QMARK_)], null)], null))], null))},[daiquiri.core.create_element("div",{'className':"pdfViewer"},["viewer pdf"]),daiquiri.core.create_element("div",{'className':"pp-holder"},null),(cljs.core.truth_((function (){var and__4251__auto__ = page_ready_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return viewer;
} else {
return and__4251__auto__;
}
})())?daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.with_key(frontend.extensions.pdf.highlights.pdf_highlights(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(state),viewer,initial_hls,new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565).cljs$core$IFn$_invoke$arity$1(ano_state),ops),"pdf-highlights")], null)):null)]),(cljs.core.truth_((function (){var and__4251__auto__ = page_ready_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return viewer;
} else {
return and__4251__auto__;
}
})())?daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.with_key(frontend.extensions.pdf.highlights.pdf_resizer(viewer),"pdf-resizer"),rum.core.with_key(frontend.extensions.pdf.highlights.pdf_toolbar(viewer),"pdf-toolbar")], null)):null)]);
}),null,"frontend.extensions.pdf.highlights/pdf-viewer");
frontend.extensions.pdf.highlights.pdf_loader = rum.core.lazy_build(rum.core.build_defc,(function (p__72255){
var map__72256 = p__72255;
var map__72256__$1 = cljs.core.__destructure_map(map__72256);
var pdf_current = map__72256__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72256__$1,new cljs.core.Keyword(null,"url","url",276297046));
var hls_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72256__$1,new cljs.core.Keyword(null,"hls-file","hls-file",192681120));
var _STAR_doc_ref = rum.core.use_ref(null);
var vec__72257 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968),null,new cljs.core.Keyword(null,"status","status",-1997798413),null], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72257,(0),null);
var set_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72257,(1),null);
var vec__72260 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),null,new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948),null], null));
var hls_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72260,(0),null);
var set_hls_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72260,(1),null);
var set_dirty_hls_BANG_ = (function (latest_hls){
var G__72263 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948),latest_hls], null);
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72263) : set_hls_state_BANG_.call(null,G__72263));
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.assets.load_hls_data$(pdf_current),(function (data){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlights","highlights",945143465).cljs$core$IFn$_invoke$arity$1(data),(function (highlights){
return promesa.protocols._promise((function (){var G__72264 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),highlights], null);
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72264) : set_hls_state_BANG_.call(null,G__72264));
})());
}));
}));
})),(function (e){
console.error("[load hls error]",e);

var G__72265 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),cljs.core.PersistentVector.EMPTY], null);
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72265) : set_hls_state_BANG_.call(null,G__72265));
}));

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hls_file], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948).cljs$core$IFn$_invoke$arity$1(hls_state);
if(cljs.core.truth_(temp__5720__auto__)){
var hls = temp__5720__auto__;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.assets.persist_hls_data$(pdf_current,hls),(function (e){
return console.error("[write hls error]",e);
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948).cljs$core$IFn$_invoke$arity$1(hls_state)], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var get_doc$ = (function (opts){
return pdfjsLib.getDocument(opts).promise;
});
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"ownerDocument","ownerDocument",1761316797),document,new cljs.core.Keyword(null,"cMapUrl","cMapUrl",-2054175479),"./js/pdfjs/cmaps/",new cljs.core.Keyword(null,"cMapPacked","cMapPacked",377437190),true], null);
promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2((function (){
var G__72266_72379 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
(set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72266_72379) : set_state_BANG_.call(null,G__72266_72379));

return get_doc$(cljs.core.clj__GT_js(opts));
})()
,(function (p1__72253_SHARP_){
var G__72268 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968),p1__72253_SHARP_], null);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72268) : set_state_BANG_.call(null,G__72268));
})),(function (p1__72254_SHARP_){
var G__72269 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__72254_SHARP_], null);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72269) : set_state_BANG_.call(null,G__72269));
})),(function (){
var G__72270 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503)], null);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__72270) : set_state_BANG_.call(null,G__72270));
}));

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [url], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5720__auto__)){
var error = temp__5720__auto__;
frontend.extensions.pdf.highlights.dd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[ERROR loader]",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state)], 0));

var G__72271 = error.name;
switch (G__72271) {
case "MissingPDFException":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)," Is this the correct path?"].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

break;
case "InvalidPDFException":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message),"\n","Is this .pdf file corrupted?\n","Please confirm with external pdf viewer."].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72271)].join('')));

}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state)], null));

return daiquiri.core.create_element("div",{'ref':_STAR_doc_ref,'className':"extensions__pdf-loader"},[(function (){var status_doc = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state);
var initial_hls = new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820).cljs$core$IFn$_invoke$arity$1(hls_state);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status_doc,new cljs.core.Keyword(null,"loading","loading",-737050189))) || ((initial_hls == null)))){
var attrs72272 = frontend.components.svg.loading;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs72272))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-center","items-center","h-screen","text-gray-500","text-lg"], null)], null),attrs72272], 0))):{'className':"flex justify-center items-center h-screen text-gray-500 text-lg"}),((cljs.core.map_QMARK_(attrs72272))?null:[daiquiri.interpreter.interpret(attrs72272)]));
} else {
return daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.with_key(frontend.extensions.pdf.highlights.pdf_viewer(url,initial_hls,new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-dirty-hls!","set-dirty-hls!",-1468393512),set_dirty_hls_BANG_], null)),"pdf-viewer")], null));
}
})()]);
}),null,"frontend.extensions.pdf.highlights/pdf-loader");
frontend.extensions.pdf.highlights.pdf_container = rum.core.lazy_build(rum.core.build_defc,(function (p__72275){
var map__72277 = p__72275;
var map__72277__$1 = cljs.core.__destructure_map(map__72277);
var pdf_current = map__72277__$1;
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72277__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var vec__72278 = rum.core.use_state(false);
var prepared = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72278,(0),null);
var set_prepared_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72278,(1),null);
var vec__72281 = rum.core.use_state(false);
var ready = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72281,(0),null);
var set_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72281,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.load_base_assets$(),(function (){
return (set_prepared_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prepared_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_prepared_BANG_.call(null,true));
}));
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
setTimeout((function (){
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_ready_BANG_.call(null,true));
}),(100));

return (function (){
return (set_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ready_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_ready_BANG_.call(null,false));
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [identity], null));

var attrs72274 = (cljs.core.truth_((function (){var and__4251__auto__ = prepared;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = identity;
if(cljs.core.truth_(and__4251__auto____$1)){
return ready;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?frontend.extensions.pdf.highlights.pdf_loader(pdf_current):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs72274))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"pdf-layout-container",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-container"], null)], null),attrs72274], 0))):{'id':"pdf-layout-container",'className':"extensions__pdf-container"}),((cljs.core.map_QMARK_(attrs72274))?null:[daiquiri.interpreter.interpret(attrs72274)]));
}),null,"frontend.extensions.pdf.highlights/pdf-container");
frontend.extensions.pdf.highlights.playground_effects = rum.core.lazy_build(rum.core.build_defc,(function (active){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var flg = "is-pdf-active";
var cls = document.body.classList;
var and__4251__auto___72381 = active;
if(cljs.core.truth_(and__4251__auto___72381)){
cls.add(flg);
} else {
}

return (function (){
return cls.remove(flg);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [active], null));

return null;
}),null,"frontend.extensions.pdf.highlights/playground-effects");
frontend.extensions.pdf.highlights.playground = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var pdf_current = frontend.state.sub(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477));
return daiquiri.core.create_element("div",{'className':"extensions__pdf-playground"},[frontend.extensions.pdf.highlights.playground_effects((!((pdf_current == null)))),(cljs.core.truth_(pdf_current)?ReactDOM.createPortal(frontend.extensions.pdf.highlights.pdf_container(pdf_current),document.querySelector("#app-single-container")):null)]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,frontend.modules.shortcut.core.mixin(new cljs.core.Keyword("shortcut.handler","pdf","shortcut.handler/pdf",468089398))], null),"frontend.extensions.pdf.highlights/playground");

//# sourceMappingURL=frontend.extensions.pdf.highlights.js.map
