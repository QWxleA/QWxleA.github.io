goog.provide('frontend.extensions.pdf.highlights');
frontend.extensions.pdf.highlights.dd = (function frontend$extensions$pdf$highlights$dd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71861 = arguments.length;
var i__4865__auto___71862 = (0);
while(true){
if((i__4865__auto___71862 < len__4864__auto___71861)){
args__4870__auto__.push((arguments[i__4865__auto___71862]));

var G__71863 = (i__4865__auto___71862 + (1));
i__4865__auto___71862 = G__71863;
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
(frontend.extensions.pdf.highlights.dd.cljs$lang$applyTo = (function (seq71530){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71530));
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
var temp__5720__auto___71864 = new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(temp__5720__auto___71864)){
var current_71865 = temp__5720__auto___71864;
var active_hl_71866 = new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var page_key_71867 = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(current_71865);
var last_page_71868 = (function (){var and__4251__auto__ = page_key_71867;
if(cljs.core.truth_(and__4251__auto__)){
return frontend.util.safe_parse_int(frontend.storage.get(["ls-pdf-last-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_key_71867)].join('')));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = last_page_71868;
if(cljs.core.truth_(and__4251__auto__)){
return (active_hl_71866 == null);
} else {
return and__4251__auto__;
}
})())){
(viewer.currentPageNumber = last_page_71868);
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
var temp__5720__auto___71869 = (function (){var and__4251__auto__ = cljs.core.fn_QMARK_(window.interact);
if(and__4251__auto__){
return rum.core.deref(el_ref);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto___71869)){
var el_71870 = temp__5720__auto___71869;
interact(el_71870).draggable(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move","move",-2110884309),(function (e){
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
frontend.extensions.pdf.highlights.pdf_highlights_ctx_menu = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__71539,p__71540){
var map__71541 = p__71539;
var map__71541__$1 = cljs.core.__destructure_map(map__71541);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71541__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71541__$1,new cljs.core.Keyword(null,"point","point",1813198264));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71541__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var map__71542 = p__71540;
var map__71542__$1 = cljs.core.__destructure_map(map__71542);
var clear_ctx_tip_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71542__$1,new cljs.core.Keyword(null,"clear-ctx-tip!","clear-ctx-tip!",516093238));
var add_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71542__$1,new cljs.core.Keyword(null,"add-hl!","add-hl!",-832546833));
var upd_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71542__$1,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274));
var del_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71542__$1,new cljs.core.Keyword(null,"del-hl!","del-hl!",-703533207));
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
var G__71544_71871 = action__$1;
switch (G__71544_71871) {
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
var properties_71873 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),action__$1], null);
if(cljs.core.not(id)){
var highlight_71874__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.fn_QMARK_(highlight))?(highlight.cljs$core$IFn$_invoke$arity$0 ? highlight.cljs$core$IFn$_invoke$arity$0() : highlight.call(null)):highlight),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),frontend.extensions.pdf.utils.gen_uuid(),new cljs.core.Keyword(null,"properties","properties",685819552),properties_71873], null)], 0));
(add_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_hl_BANG_.cljs$core$IFn$_invoke$arity$1(highlight_71874__$1) : add_hl_BANG_.call(null,highlight_71874__$1));

frontend.extensions.pdf.utils.clear_all_selection();

frontend.extensions.pdf.assets.copy_hl_ref_BANG_(highlight_71874__$1);
} else {
var G__71545_71875 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(highlight,new cljs.core.Keyword(null,"properties","properties",685819552),properties_71873);
(upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1(G__71545_71875) : upd_hl_BANG_.call(null,G__71545_71875));
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
var el_71876 = rum.core.deref(_STAR_el);
var map__71546_71877 = frontend.util.calc_delta_rect_offset(el_71876,el_71876.closest(".extensions__pdf-viewer"));
var map__71546_71878__$1 = cljs.core.__destructure_map(map__71546_71877);
var x_71879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71546_71878__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_71880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71546_71878__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
(el_71876.style.transform = ["translate3d(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((x_71879 < (0)))?(x_71879 - (5)):(0))),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y_71880 < (0)))?(y_71880 - (5)):(0))),"px",",0)"].join(''));
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
}),'className':"extensions__pdf-hls-ctx-menu"},[daiquiri.core.create_element("li",{'className':"item-colors"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$extensions$pdf$highlights$iter__71547(s__71548){
return (new cljs.core.LazySeq(null,(function (){
var s__71548__$1 = s__71548;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__71548__$1);
if(temp__5720__auto__){
var s__71548__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71548__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__71548__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__71550 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__71549 = (0);
while(true){
if((i__71549 < size__4651__auto__)){
var it = cljs.core._nth(c__4650__auto__,i__71549);
cljs.core.chunk_append(b__71550,daiquiri.core.create_element("a",{'key':it,'data-color':it,'data-action':it},[daiquiri.interpreter.interpret(it)]));

var G__71881 = (i__71549 + (1));
i__71549 = G__71881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71550),frontend$extensions$pdf$highlights$iter__71547(cljs.core.chunk_rest(s__71548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71550),null);
}
} else {
var it = cljs.core.first(s__71548__$2);
return cljs.core.cons(daiquiri.core.create_element("a",{'key':it,'data-color':it,'data-action':it},[daiquiri.interpreter.interpret(it)]),frontend$extensions$pdf$highlights$iter__71547(cljs.core.rest(s__71548__$2)));
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
frontend.extensions.pdf.highlights.pdf_highlights_text_region = rum.core.lazy_build(rum.core.build_defc,(function (viewer,vw_hl,hl,p__71551){
var map__71552 = p__71551;
var map__71552__$1 = cljs.core.__destructure_map(map__71552);
var show_ctx_tip_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71552__$1,new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502));
var map__71553 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(vw_hl);
var map__71553__$1 = cljs.core.__destructure_map(map__71553);
var rects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71553__$1,new cljs.core.Keyword(null,"rects","rects",1714526167));
var map__71554 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(hl);
var map__71554__$1 = cljs.core.__destructure_map(map__71554);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71554__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var open_tip_BANG_ = (function (e){
e.preventDefault();

var x = e.clientX;
var y = e.clientY;
var G__71555 = viewer;
var G__71556 = hl;
var G__71557 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$3 ? show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$3(G__71555,G__71556,G__71557) : show_ctx_tip_BANG_.call(null,G__71555,G__71556,G__71557));
});
return daiquiri.core.create_element("div",{'onClick':open_tip_BANG_,'onContextMenu':open_tip_BANG_,'className':"extensions__pdf-hls-text-region"},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,rect){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hls-text-region-item","div.hls-text-region-item",-1046800817),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"style","style",-496642736),rect,new cljs.core.Keyword(null,"data-color","data-color",-1132407184),color], null)], null);
}),rects))]);
}),null,"frontend.extensions.pdf.highlights/pdf-highlights-text-region");
frontend.extensions.pdf.highlights.pdf_highlight_area_region = rum.core.lazy_build(rum.core.build_defc,(function (viewer,vw_hl,hl,p__71559){
var map__71560 = p__71559;
var map__71560__$1 = cljs.core.__destructure_map(map__71560);
var show_ctx_tip_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71560__$1,new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502));
var upd_hl_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71560__$1,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274));
var _STAR_el = rum.core.use_ref(null);
var _STAR_dirty = rum.core.use_ref(null);
var open_tip_BANG_ = (function (e){
e.preventDefault();

if(cljs.core.truth_(rum.core.deref(_STAR_dirty))){
return null;
} else {
var x = e.clientX;
var y = e.clientY;
var G__71561 = viewer;
var G__71562 = hl;
var G__71563 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$3 ? show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$3(G__71561,G__71562,G__71563) : show_ctx_tip_BANG_.call(null,G__71561,G__71562,G__71563));
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
var vec__71564 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71558_SHARP_){
var val = target.getAttribute(["data-",cljs.core.name(p1__71558_SHARP_)].join(''));
if((!((val == null)))){
return parseFloat(val);
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71564,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71564,(1),null);
var to_top = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),new cljs.core.Keyword(null,"top","top",-1856271961)], null)) + dy);
var to_left = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vw_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),new cljs.core.Keyword(null,"left","left",-399115937)], null)) + dx);
var to_w = vw_rect.width;
var to_h = vw_rect.height;
var to_vw_pos = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(vw_pos,new cljs.core.Keyword(null,"bounding","bounding",-2125178263),cljs.core.assoc,new cljs.core.Keyword(null,"top","top",-1856271961),to_top,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to_left,new cljs.core.Keyword(null,"width","width",-384071477),to_w,new cljs.core.Keyword(null,"height","height",1025178622),to_h], 0));
var to_sc_pos = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,to_vw_pos);
var hl_SINGLEQUOTE__71883 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.Keyword(null,"position","position",-2011731912),to_sc_pos);
var hl_SINGLEQUOTE__71884__$1 = cljs.core.assoc_in(hl_SINGLEQUOTE__71883,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null),Date.now());
promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.assets.persist_hl_area_image$(viewer,new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),hl_SINGLEQUOTE__71884__$1,hl,new cljs.core.Keyword(null,"bounding","bounding",-2125178263).cljs$core$IFn$_invoke$arity$1(to_vw_pos)),(function (){
return setTimeout((function (){
(target.style.transform = "translate(0, 0)");

target.removeAttribute("data-x");

target.removeAttribute("data-y");

return (upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1 ? upd_hl_BANG_.cljs$core$IFn$_invoke$arity$1(hl_SINGLEQUOTE__71884__$1) : upd_hl_BANG_.call(null,hl_SINGLEQUOTE__71884__$1));
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
var map__71573 = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(hl);
var map__71573__$1 = cljs.core.__destructure_map(map__71573);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71573__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-hls-area-region","div.extensions__pdf-hls-area-region",-850888181),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el,new cljs.core.Keyword(null,"style","style",-496642736),vw_bounding,new cljs.core.Keyword(null,"data-color","data-color",-1132407184),color,new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_tip_BANG_,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),open_tip_BANG_], null)], null);
} else {
return null;
}
})());
}),null,"frontend.extensions.pdf.highlights/pdf-highlight-area-region");
frontend.extensions.pdf.highlights.pdf_highlights_region_container = rum.core.lazy_build(rum.core.build_defc,(function (viewer,page_hls,ops){
return daiquiri.core.create_element("div",{'className':"hls-region-container"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$extensions$pdf$highlights$iter__71575(s__71576){
return (new cljs.core.LazySeq(null,(function (){
var s__71576__$1 = s__71576;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__71576__$1);
if(temp__5720__auto__){
var s__71576__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71576__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__71576__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__71578 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__71577 = (0);
while(true){
if((i__71577 < size__4651__auto__)){
var hl = cljs.core._nth(c__4650__auto__,i__71577);
cljs.core.chunk_append(b__71578,(function (){var vw_hl = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (i__71577,hl,c__4650__auto__,size__4651__auto__,b__71578,s__71576__$2,temp__5720__auto__){
return (function (p1__71574_SHARP_){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,p1__71574_SHARP_);
});})(i__71577,hl,c__4650__auto__,size__4651__auto__,b__71578,s__71576__$2,temp__5720__auto__))
);
return rum.core.with_key((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)))?frontend.extensions.pdf.highlights.pdf_highlight_area_region(viewer,vw_hl,hl,ops):frontend.extensions.pdf.highlights.pdf_highlights_text_region(viewer,vw_hl,hl,ops)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl));
})());

var G__71886 = (i__71577 + (1));
i__71577 = G__71886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71578),frontend$extensions$pdf$highlights$iter__71575(cljs.core.chunk_rest(s__71576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71578),null);
}
} else {
var hl = cljs.core.first(s__71576__$2);
return cljs.core.cons((function (){var vw_hl = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),((function (hl,s__71576__$2,temp__5720__auto__){
return (function (p1__71574_SHARP_){
return frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer,p1__71574_SHARP_);
});})(hl,s__71576__$2,temp__5720__auto__))
);
return rum.core.with_key((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(hl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"image","image",-58725096)], null)))?frontend.extensions.pdf.highlights.pdf_highlight_area_region(viewer,vw_hl,hl,ops):frontend.extensions.pdf.highlights.pdf_highlights_text_region(viewer,vw_hl,hl,ops)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl));
})(),frontend$extensions$pdf$highlights$iter__71575(cljs.core.rest(s__71576__$2)));
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
frontend.extensions.pdf.highlights.pdf_highlight_area_selection = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__71585){
var map__71586 = p__71585;
var map__71586__$1 = cljs.core.__destructure_map(map__71586);
var show_ctx_tip_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71586__$1,new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502));
var viewer_clt = viewer.viewer.classList;
var cnt_el = viewer.container;
var _STAR_el = rum.core.use_ref(null);
var _STAR_sta_el = rum.core.use_ref(null);
var _STAR_cnt_rect = rum.core.use_ref(null);
var vec__71589 = rum.core.use_state(null);
var start_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71589,(0),null);
var set_start_coord_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71589,(1),null);
var vec__71592 = rum.core.use_state(null);
var end_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71592,(0),null);
var set_end_coord_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71592,(1),null);
var vec__71595 = frontend.rum.use_atom(frontend.extensions.pdf.highlights._STAR_area_mode_QMARK_);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71595,(0),null);
var set_area_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71595,(1),null);
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
var disable_text_selection_BANG_ = (function (p1__71583_SHARP_){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(viewer_clt,(cljs.core.truth_(p1__71583_SHARP_)?"add":"remove"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["disabled-text-selection"], 0));
});
var fn_move = rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((function (e){
var G__71601 = calc_coords(e.pageX,e.pageY);
return (set_end_coord_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_end_coord_BANG_.cljs$core$IFn$_invoke$arity$1(G__71601) : set_end_coord_BANG_.call(null,G__71601));
}),cljs.core.PersistentVector.EMPTY);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = cnt_el;
if(cljs.core.truth_(temp__5720__auto__)){
var root = temp__5720__auto__;
var fn_start = (function (e){
if(cljs.core.truth_(should_start(e))){
rum.core.set_ref_BANG_(_STAR_sta_el,e.target);

var G__71603_71887 = calc_coords(e.pageX,e.pageY);
(set_start_coord_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_start_coord_BANG_.cljs$core$IFn$_invoke$arity$1(G__71603_71887) : set_start_coord_BANG_.call(null,G__71603_71887));

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
var end_71888 = calc_coords(e.pageX,e.pageY);
var pos_71889 = calc_pos(start_coord,end_71888);
if((((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(pos_71889) > (10))) && ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(pos_71889) > (10))))){
var temp__5720__auto___71890__$2 = start_el.closest(".page");
if(cljs.core.truth_(temp__5720__auto___71890__$2)){
var page_el_71891 = temp__5720__auto___71890__$2;
var page_number_71892 = (page_el_71891.dataset.pageNumber | (0));
var page_pos_71893 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pos_71889,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(pos_71889) - page_el_71891.offsetTop),new cljs.core.Keyword(null,"left","left",-399115937),(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(pos_71889) - page_el_71891.offsetLeft)], null)], 0));
var vw_pos_71894 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bounding","bounding",-2125178263),page_pos_71893,new cljs.core.Keyword(null,"rects","rects",1714526167),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"page","page",849072397),page_number_71892], null);
var sc_pos_71895 = frontend.extensions.pdf.utils.vw_to_scaled_pos(viewer,vw_pos_71894);
var point_71896 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null);
var hl_71897 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"page","page",849072397),page_number_71892,new cljs.core.Keyword(null,"position","position",-2011731912),sc_pos_71895,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"[:span]",new cljs.core.Keyword(null,"image","image",-58725096),Date.now()], null),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentArrayMap.EMPTY], null);
var G__71606_71898 = viewer;
var G__71607_71899 = hl_71897;
var G__71608_71900 = point_71896;
var G__71609_71901 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550),(function (){
return reset_coords();
})], null);
(show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$4 ? show_ctx_tip_BANG_.cljs$core$IFn$_invoke$arity$4(G__71606_71898,G__71607_71899,G__71608_71900,G__71609_71901) : show_ctx_tip_BANG_.call(null,G__71606_71898,G__71607_71899,G__71608_71900,G__71609_71901));

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
var G__71610_71902 = root;
G__71610_71902.addEventListener("mousedown",fn_start);

G__71610_71902.addEventListener("mouseup",fn_end,({"once": true}));


return (function (){
var G__71611 = root;
G__71611.removeEventListener("mousedown",fn_start);

G__71611.removeEventListener("mouseup",fn_end);

return G__71611;
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
frontend.extensions.pdf.highlights.pdf_highlights = rum.core.lazy_build(rum.core.build_defc,(function (el,viewer,initial_hls,loaded_pages,p__71618){
var map__71619 = p__71618;
var map__71619__$1 = cljs.core.__destructure_map(map__71619);
var set_dirty_hls_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71619__$1,new cljs.core.Keyword(null,"set-dirty-hls!","set-dirty-hls!",-1468393512));
var doc = el.ownerDocument;
var win = doc.defaultView;
var _STAR_mounted = rum.core.use_ref(false);
var vec__71620 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),null,new cljs.core.Keyword(null,"point","point",1813198264),null], null));
var sel_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71620,(0),null);
var set_sel_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71620,(1),null);
var vec__71623 = rum.core.use_state(initial_hls);
var highlights = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71623,(0),null);
var set_highlights_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71623,(1),null);
var vec__71626 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),null,new cljs.core.Keyword(null,"vw-pos","vw-pos",1025034976),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"point","point",1813198264),null,new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550),null], null));
var tip_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71626,(0),null);
var set_tip_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71626,(1),null);
var clear_ctx_tip_BANG_ = rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((function (){
var reset_fn = new cljs.core.Keyword(null,"reset-fn","reset-fn",-690887550).cljs$core$IFn$_invoke$arity$1(tip_state);
var G__71629_71903 = cljs.core.PersistentArrayMap.EMPTY;
(set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71629_71903) : set_tip_state_BANG_.call(null,G__71629_71903));

var and__4251__auto__ = cljs.core.fn_QMARK_(reset_fn);
if(and__4251__auto__){
return (reset_fn.cljs$core$IFn$_invoke$arity$0 ? reset_fn.cljs$core$IFn$_invoke$arity$0() : reset_fn.call(null));
} else {
return and__4251__auto__;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tip_state], null));
var show_ctx_tip_BANG_ = (function() { 
var G__71904__delegate = function (viewer__$1,hl,point,ops){
var vw_pos = frontend.extensions.pdf.utils.scaled_to_vw_pos(viewer__$1,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(hl));
var G__71630 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),hl,new cljs.core.Keyword(null,"vw-pos","vw-pos",1025034976),vw_pos,new cljs.core.Keyword(null,"point","point",1813198264),point], null),ops));
return (set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71630) : set_tip_state_BANG_.call(null,G__71630));
};
var G__71904 = function (viewer__$1,hl,point,var_args){
var ops = null;
if (arguments.length > 3) {
var G__71905__i = 0, G__71905__a = new Array(arguments.length -  3);
while (G__71905__i < G__71905__a.length) {G__71905__a[G__71905__i] = arguments[G__71905__i + 3]; ++G__71905__i;}
  ops = new cljs.core.IndexedSeq(G__71905__a,0,null);
} 
return G__71904__delegate.call(this,viewer__$1,hl,point,ops);};
G__71904.cljs$lang$maxFixedArity = 3;
G__71904.cljs$lang$applyTo = (function (arglist__71906){
var viewer__$1 = cljs.core.first(arglist__71906);
arglist__71906 = cljs.core.next(arglist__71906);
var hl = cljs.core.first(arglist__71906);
arglist__71906 = cljs.core.next(arglist__71906);
var point = cljs.core.first(arglist__71906);
var ops = cljs.core.rest(arglist__71906);
return G__71904__delegate(viewer__$1,hl,point,ops);
});
G__71904.cljs$core$IFn$_invoke$arity$variadic = G__71904__delegate;
return G__71904;
})()
;
var add_hl_BANG_ = (function (hl){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl))){
var highlights_71907__$1 = frontend.extensions.pdf.utils.fix_nested_js(highlights);
var G__71631_71908 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(highlights_71907__$1,hl);
(set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__71631_71908) : set_highlights_BANG_.call(null,G__71631_71908));

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
var temp__5720__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__71614_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__71614_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(highlights__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var vec__71633 = temp__5720__auto__;
var target_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71633,(0),null);
var G__71636_71909 = cljs.core.assoc_in(highlights__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_idx], null),hl);
(set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__71636_71909) : set_highlights_BANG_.call(null,G__71636_71909));

return frontend.extensions.pdf.assets.update_hl_area_block_BANG_(hl);
} else {
return null;
}
});
var del_hl_BANG_ = (function (hl){
var temp__5720__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hl);
if(cljs.core.truth_(temp__5720__auto__)){
var id = temp__5720__auto__;
var G__71637 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__71615_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__71615_SHARP_));
}),highlights));
return (set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlights_BANG_.cljs$core$IFn$_invoke$arity$1(G__71637) : set_highlights_BANG_.call(null,G__71637));
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
var G__71639 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),true], null);
return (set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71639) : set_sel_state_BANG_.call(null,G__71639));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = sel_range;
if(cljs.core.truth_(and__4251__auto__)){
return el.contains(sel_range.commonAncestorContainer);
} else {
return and__4251__auto__;
}
})())){
var G__71640 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),false,new cljs.core.Keyword(null,"range","range",1639692286),sel_range,new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null)], null);
return (set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_sel_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71640) : set_sel_state_BANG_.call(null,G__71640));
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
var and__4251__auto___71910 = cljs.core.deref(_STAR_dirty);
if(cljs.core.truth_(and__4251__auto___71910)){
fn_selection_ok(e);
} else {
}

return document.removeEventListener("selectionchange",fn_dirty);
}),({"once": true}));
});
var fn_resize = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.adjust_viewer_size_BANG_,viewer);
var G__71642_71911 = el;
G__71642_71911.addEventListener("mousedown",fn_selection);


var G__71643_71912 = win;
G__71643_71912.addEventListener("resize",fn_resize);


return (function (){
var G__71644_71913 = el;
G__71644_71913.removeEventListener("mousedown",fn_selection);


var G__71645 = win;
G__71645.removeEventListener("resize",fn_resize);

return G__71645;
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
var G__71647 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),hl_fn,new cljs.core.Keyword(null,"range","range",1639692286),sel_range,new cljs.core.Keyword(null,"point","point",1813198264),point], null);
return (set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_tip_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71647) : set_tip_state_BANG_.call(null,G__71647));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(sel_state)], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto___71914 = (function (){var and__4251__auto__ = cljs.core.sequential_QMARK_(highlights);
if(and__4251__auto__){
return cljs.core.group_by(new cljs.core.Keyword(null,"page","page",849072397),highlights);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto___71914)){
var grouped_hls_71915 = temp__5720__auto___71914;
var seq__71648_71916 = cljs.core.seq(loaded_pages);
var chunk__71649_71917 = null;
var count__71650_71918 = (0);
var i__71651_71919 = (0);
while(true){
if((i__71651_71919 < count__71650_71918)){
var page_71920 = chunk__71649_71917.cljs$core$IIndexed$_nth$arity$2(null,i__71651_71919);
var temp__5720__auto___71921__$1 = frontend.extensions.pdf.utils.resolve_hls_layer_BANG_(viewer,page_71920);
if(cljs.core.truth_(temp__5720__auto___71921__$1)){
var hls_layer_71922 = temp__5720__auto___71921__$1;
var page_hls_71923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_hls_71915,page_71920);
rum.core.mount(frontend.extensions.pdf.highlights.pdf_highlights_region_container(viewer,page_hls_71923,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502),show_ctx_tip_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null)),hls_layer_71922);
} else {
}


var G__71924 = seq__71648_71916;
var G__71925 = chunk__71649_71917;
var G__71926 = count__71650_71918;
var G__71927 = (i__71651_71919 + (1));
seq__71648_71916 = G__71924;
chunk__71649_71917 = G__71925;
count__71650_71918 = G__71926;
i__71651_71919 = G__71927;
continue;
} else {
var temp__5720__auto___71928__$1 = cljs.core.seq(seq__71648_71916);
if(temp__5720__auto___71928__$1){
var seq__71648_71929__$1 = temp__5720__auto___71928__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71648_71929__$1)){
var c__4679__auto___71930 = cljs.core.chunk_first(seq__71648_71929__$1);
var G__71931 = cljs.core.chunk_rest(seq__71648_71929__$1);
var G__71932 = c__4679__auto___71930;
var G__71933 = cljs.core.count(c__4679__auto___71930);
var G__71934 = (0);
seq__71648_71916 = G__71931;
chunk__71649_71917 = G__71932;
count__71650_71918 = G__71933;
i__71651_71919 = G__71934;
continue;
} else {
var page_71935 = cljs.core.first(seq__71648_71929__$1);
var temp__5720__auto___71936__$2 = frontend.extensions.pdf.utils.resolve_hls_layer_BANG_(viewer,page_71935);
if(cljs.core.truth_(temp__5720__auto___71936__$2)){
var hls_layer_71937 = temp__5720__auto___71936__$2;
var page_hls_71938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_hls_71915,page_71935);
rum.core.mount(frontend.extensions.pdf.highlights.pdf_highlights_region_container(viewer,page_hls_71938,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-ctx-tip!","show-ctx-tip!",2057477502),show_ctx_tip_BANG_,new cljs.core.Keyword(null,"upd-hl!","upd-hl!",-275023274),upd_hl_BANG_], null)),hls_layer_71937);
} else {
}


var G__71939 = cljs.core.next(seq__71648_71929__$1);
var G__71940 = null;
var G__71941 = (0);
var G__71942 = (0);
seq__71648_71916 = G__71939;
chunk__71649_71917 = G__71940;
count__71650_71918 = G__71941;
i__71651_71919 = G__71942;
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
frontend.extensions.pdf.highlights.pdf_settings = rum.core.lazy_build(rum.core.build_defc,(function (_viewer,theme,p__71663){
var map__71664 = p__71663;
var map__71664__$1 = cljs.core.__destructure_map(map__71664);
var hide_settings_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71664__$1,new cljs.core.Keyword(null,"hide-settings!","hide-settings!",-226708021));
var select_theme_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71664__$1,new cljs.core.Keyword(null,"select-theme!","select-theme!",1638110696));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71664__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var _STAR_el_popup = rum.core.use_ref(null);
var vec__71669 = frontend.rum.use_atom(frontend.extensions.pdf.highlights._STAR_area_dashed_QMARK_);
var area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71669,(0),null);
var set_area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71669,(1),null);
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
}),'className':"extensions__pdf-settings hls-popup-wrap visible"},[daiquiri.core.create_element("div",{'ref':_STAR_el_popup,'tabIndex':(-1),'className':"extensions__pdf-settings-inner hls-popup-box"},[(function (){var attrs71676 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (it){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.flex.items-center.justify-center","button.flex.items-center.justify-center",-1757945011),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),it,new cljs.core.Keyword(null,"class","class",-2030961996),it,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(select_theme_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_theme_BANG_.cljs$core$IFn$_invoke$arity$1(it) : select_theme_BANG_.call(null,it));

return (hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_settings_BANG_.call(null));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,it))?frontend.components.svg.check.cljs$core$IFn$_invoke$arity$0():null)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["light","warm","dark"], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71676))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-settings-item","theme-picker"], null)], null),attrs71676], 0))):{'className':"extensions__pdf-settings-item theme-picker"}),((cljs.core.map_QMARK_(attrs71676))?null:[daiquiri.interpreter.interpret(attrs71676)]));
})(),daiquiri.core.create_element("div",{'className':"extensions__pdf-settings-item toggle-input"},[(function (){var attrs71677 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","toggle-dashed","pdf/toggle-dashed",431816058)) : t.call(null,new cljs.core.Keyword("pdf","toggle-dashed","pdf/toggle-dashed",431816058)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs71677))?daiquiri.interpreter.element_attributes(attrs71677):null),((cljs.core.map_QMARK_(attrs71677))?null:[daiquiri.interpreter.interpret(attrs71677)]));
})(),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(area_dashed_QMARK_,(function (){
var G__71680 = cljs.core.not(area_dashed_QMARK_);
return (set_area_dashed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_area_dashed_QMARK_.cljs$core$IFn$_invoke$arity$1(G__71680) : set_area_dashed_QMARK_.call(null,G__71680));
}),true))])])]);
}),null,"frontend.extensions.pdf.highlights/pdf-settings");
frontend.extensions.pdf.highlights.pdf_outline_item = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__71686,p__71687){
var map__71688 = p__71686;
var map__71688__$1 = cljs.core.__destructure_map(map__71688);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71688__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71688__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71688__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var dest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71688__$1,new cljs.core.Keyword(null,"dest","dest",-34569477));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71688__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var map__71689 = p__71687;
var map__71689__$1 = cljs.core.__destructure_map(map__71689);
var ops = map__71689__$1;
var upt_outline_node_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71689__$1,new cljs.core.Keyword(null,"upt-outline-node!","upt-outline-node!",-1463872689));
var has_child_QMARK_ = cljs.core.seq(items);
var expanded_QMARK_ = cljs.core.boolean$(expanded);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-outline-item",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-children","has-children",-934485512),has_child_QMARK_,new cljs.core.Keyword(null,"is-expand","is-expand",-1852164794),expanded_QMARK_], null)], null))], null))},[daiquiri.core.create_element("div",{'className':"inner"},[daiquiri.core.create_element("a",{'href':"javascript:void(0);",'data-dest':JSON.stringify(cljs_bean.core.__GT_js(dest)),'onClick':(function (e){
var target = e.target;
if(cljs.core.truth_(target.closest("i"))){
var path = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71685_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/\d+/,p1__71685_SHARP_))){
return (p1__71685_SHARP_ | (0));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__71685_SHARP_);
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(parent,/\-/));
e.preventDefault();

var G__71697 = path;
var G__71698 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),(!(expanded_QMARK_))], null);
return (upt_outline_node_BANG_.cljs$core$IFn$_invoke$arity$2 ? upt_outline_node_BANG_.cljs$core$IFn$_invoke$arity$2(G__71697,G__71698) : upt_outline_node_BANG_.call(null,G__71697,G__71698));
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
})},[(function (){var attrs71699 = frontend.components.svg.arrow_right_v2;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs71699))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["arrow"], null)], null),attrs71699], 0))):{'className':"arrow"}),((cljs.core.map_QMARK_(attrs71699))?null:[daiquiri.interpreter.interpret(attrs71699)]));
})(),(function (){var attrs71700 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs71700))?daiquiri.interpreter.element_attributes(attrs71700):null),((cljs.core.map_QMARK_(attrs71700))?null:[daiquiri.interpreter.interpret(attrs71700)]));
})()])]),((((has_child_QMARK_) && (expanded_QMARK_)))?(function (){var attrs71696 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,itm){
var parent__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent),"-items-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
return rum.core.with_key((function (){var G__71701 = viewer;
var G__71702 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([itm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent__$1], null)], 0));
var G__71703 = ops;
return (frontend.extensions.pdf.highlights.pdf_outline_item.cljs$core$IFn$_invoke$arity$3 ? frontend.extensions.pdf.highlights.pdf_outline_item.cljs$core$IFn$_invoke$arity$3(G__71701,G__71702,G__71703) : frontend.extensions.pdf.highlights.pdf_outline_item.call(null,G__71701,G__71702,G__71703));
})(),parent__$1);
}),items);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71696))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["children"], null)], null),attrs71696], 0))):{'className':"children"}),((cljs.core.map_QMARK_(attrs71696))?null:[daiquiri.interpreter.interpret(attrs71696)]));
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
var vec__71719 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var outline_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71719,(0),null);
var set_outline_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71719,(1),null);
var upt_outline_node_BANG_ = rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((function (path,attrs){
var G__71722 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(outline_data,path,cljs.core.merge,attrs);
return (set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__71722) : set_outline_data_BANG_.call(null,G__71722));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [outline_data], null));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(pdf_doc.getOutline(),(function (data){
return promesa.protocols._promise((function (){
var temp__5720__auto___71948__$1 = (function (){var and__4251__auto__ = data;
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
if(cljs.core.truth_(temp__5720__auto___71948__$1)){
var data_71949__$1 = temp__5720__auto___71948__$1;
} else {
}

var G__71724 = cljs_bean.core.__GT_clj(data);
return (set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__71724) : set_outline_data_BANG_.call(null,G__71724));
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
return daiquiri.core.create_element("div",{'id':"pdf-docinfo",'className':"extensions__pdf-doc-info"},[daiquiri.core.create_element("div",{'className':"inner-text"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$extensions$pdf$highlights$iter__71739(s__71740){
return (new cljs.core.LazySeq(null,(function (){
var s__71740__$1 = s__71740;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__71740__$1);
if(temp__5720__auto__){
var s__71740__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71740__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__71740__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__71742 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__71741 = (0);
while(true){
if((i__71741 < size__4651__auto__)){
var vec__71743 = cljs.core._nth(c__4650__auto__,i__71741);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71743,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71743,(1),null);
var k__$1 = [clojure.string.replace_first(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),/^\:/,""),"::"].join('');
cljs.core.chunk_append(b__71742,daiquiri.core.create_element("p",{'key':k__$1},[(function (){var attrs71746 = k__$1;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs71746))?daiquiri.interpreter.element_attributes(attrs71746):null),((cljs.core.map_QMARK_(attrs71746))?null:[attrs71746]));
})(),"  ",daiquiri.core.create_element("i",null,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))])]));

var G__71950 = (i__71741 + (1));
i__71741 = G__71950;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71742),frontend$extensions$pdf$highlights$iter__71739(cljs.core.chunk_rest(s__71740__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71742),null);
}
} else {
var vec__71753 = cljs.core.first(s__71740__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71753,(1),null);
var k__$1 = [clojure.string.replace_first(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),/^\:/,""),"::"].join('');
return cljs.core.cons(daiquiri.core.create_element("p",{'key':k__$1},[(function (){var attrs71746 = k__$1;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs71746))?daiquiri.interpreter.element_attributes(attrs71746):null),((cljs.core.map_QMARK_(attrs71746))?null:[attrs71746]));
})(),"  ",daiquiri.core.create_element("i",null,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))])]),frontend$extensions$pdf$highlights$iter__71739(cljs.core.rest(s__71740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(info);
})())]),(function (){var attrs71738 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Copy all",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var text = document.querySelector("#pdf-docinfo > .inner-text").innerText;
var text__$1 = clojure.string.replace(text,/[\n\t]+/,"\n");
frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1(text__$1);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Copied!",new cljs.core.Keyword(null,"success","success",1890645906));

return (close_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? close_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : close_fn_BANG_.call(null));
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71738))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","justify-center","pt-2","pb--2"], null)], null),attrs71738], 0))):{'className':"flex items-center justify-center pt-2 pb--2"}),((cljs.core.map_QMARK_(attrs71738))?null:[daiquiri.interpreter.interpret(attrs71738)]));
})()]);
}),null,"frontend.extensions.pdf.highlights/docinfo-display");
frontend.extensions.pdf.highlights.make_docinfo_in_modal = (function frontend$extensions$pdf$highlights$make_docinfo_in_modal(info){
return (function (close_fn_BANG_){
return frontend.extensions.pdf.highlights.docinfo_display(info,close_fn_BANG_);
});
});
frontend.extensions.pdf.highlights.pdf_toolbar = rum.core.lazy_build(rum.core.build_defc,(function (viewer){
var vec__71761 = frontend.rum.use_atom(frontend.extensions.pdf.highlights._STAR_area_mode_QMARK_);
var area_mode_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71761,(0),null);
var set_area_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71761,(1),null);
var vec__71764 = rum.core.use_state(false);
var outline_visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71764,(0),null);
var set_outline_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71764,(1),null);
var vec__71767 = frontend.rum.use_atom(frontend.extensions.pdf.highlights._STAR_highlight_mode_QMARK_);
var highlight_mode_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71767,(0),null);
var set_highlight_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71767,(1),null);
var vec__71770 = rum.core.use_state(false);
var settings_visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71770,(0),null);
var set_settings_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71770,(1),null);
var _STAR_page_ref = rum.core.use_ref(null);
var vec__71773 = rum.core.use_state((1));
var current_page_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71773,(0),null);
var set_current_page_num_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71773,(1),null);
var vec__71776 = rum.core.use_state((1));
var total_page_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71776,(0),null);
var set_total_page_num_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71776,(1),null);
var vec__71779 = rum.core.use_state((function (){var or__4253__auto__ = frontend.storage.get("ls-pdf-viewer-theme");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "light";
}
})());
var viewer_theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71779,(0),null);
var set_viewer_theme_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71779,(1),null);
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

var G__71784_71951 = viewer.currentPageNumber;
(set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(G__71784_71951) : set_current_page_num_BANG_.call(null,G__71784_71951));

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
var G__71785 = cljs.core.not(settings_visible_QMARK_);
return (set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__71785) : set_settings_visible_BANG_.call(null,G__71785));
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.adjustments.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':["Area highlight (",(cljs.core.truth_(frontend.util.mac_QMARK_)?"\u2318":"Shift"),")"].join(''),'onClick':(function (){
var G__71786 = cljs.core.not(area_mode_QMARK_);
return (set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__71786) : set_area_mode_BANG_.call(null,G__71786));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",(cljs.core.truth_(area_mode_QMARK_)?"is-active":null)], null))},[daiquiri.interpreter.interpret(frontend.components.svg.icon_area.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':"Highlight mode",'onClick':(function (){
var G__71787 = cljs.core.not(highlight_mode_QMARK_);
return (set_highlight_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlight_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__71787) : set_highlight_mode_BANG_.call(null,G__71787));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",(cljs.core.truth_(highlight_mode_QMARK_)?"is-active":null)], null))},[daiquiri.interpreter.interpret(frontend.components.svg.highlighter.cljs$core$IFn$_invoke$arity$1((16)))]),daiquiri.core.create_element("a",{'title':"Zoom out",'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.zoom_out_viewer,viewer),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.zoom_out.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':"Zoom in",'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.zoom_in_viewer,viewer),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.zoom_in.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':"Outline",'onClick':(function (){
var G__71789 = cljs.core.not(outline_visible_QMARK_);
return (set_outline_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__71789) : set_outline_visible_BANG_.call(null,G__71789));
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.view_list.cljs$core$IFn$_invoke$arity$1((16)))]),daiquiri.core.create_element("a",{'title':"Document info",'onClick':(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.get_meta_data$(viewer),(function (ret){
return promesa.protocols._promise(frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.extensions.pdf.highlights.make_docinfo_in_modal(ret)));
}));
}));
}),'className':"button is-info"},[daiquiri.interpreter.interpret(frontend.components.svg.icon_info.cljs$core$IFn$_invoke$arity$0())]),daiquiri.core.create_element("a",{'title':"Annotations page",'onClick':(function (){
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.annotations.cljs$core$IFn$_invoke$arity$1((16)))]),daiquiri.core.create_element("div",{'className':"pager flex items-center ml-1"},[daiquiri.core.create_element("span",{'className':"nu flex items-center opacity-70"},[daiquiri.core.create_element("input",{'ref':_STAR_page_ref,'type':"number",'defaultValue':current_page_num,'onMouseEnter':(function (p1__71756_SHARP_){
return p1__71756_SHARP_.target.select();
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
}),new cljs.core.Keyword(null,"select-theme!","select-theme!",1638110696),(function (p1__71760_SHARP_){
return (set_viewer_theme_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_viewer_theme_BANG_.cljs$core$IFn$_invoke$arity$1(p1__71760_SHARP_) : set_viewer_theme_BANG_.call(null,p1__71760_SHARP_));
})], null));
} else {
return and__4251__auto__;
}
})())]);
}),null,"frontend.extensions.pdf.highlights/pdf-toolbar");
frontend.extensions.pdf.highlights.pdf_viewer = rum.core.lazy_build(rum.core.build_defc,(function (url,initial_hls,pdf_document,ops){
var _STAR_el_ref = rum.core.create_ref();
var vec__71801 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),null,new cljs.core.Keyword(null,"bus","bus",-1090873603),null,new cljs.core.Keyword(null,"link","link",-1769163468),null,new cljs.core.Keyword(null,"el","el",-1618201118),null], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71801,(0),null);
var set_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71801,(1),null);
var vec__71804 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565),cljs.core.PersistentVector.EMPTY], null));
var ano_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71804,(0),null);
var set_ano_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71804,(1),null);
var vec__71807 = rum.core.use_state(false);
var page_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71807,(0),null);
var set_page_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71807,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var event_bus = (new pdfjsViewer.EventBus());
var link_service = (new pdfjsViewer.PDFLinkService(({"eventBus": event_bus, "externalLinkTarget": (2)})));
var el = rum.core.deref(_STAR_el_ref);
var viewer = (new pdfjsViewer.PDFViewer(({"container": el, "eventBus": event_bus, "linkService": link_service, "enhanceTextSelection": true, "textLayerMode": (2), "removePageBorders": true})));
link_service.setDocument(pdf_document);

link_service.setViewer(viewer);

(window.lsPdfViewer = viewer);

promesa.core.then.cljs$core$IFn$_invoke$arity$2(viewer.setDocument(pdf_document),(function (){
var G__71816 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer,new cljs.core.Keyword(null,"bus","bus",-1090873603),event_bus,new cljs.core.Keyword(null,"link","link",-1769163468),link_service,new cljs.core.Keyword(null,"el","el",-1618201118),el], null);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71816) : set_state_BANG_.call(null,G__71816));
}));

return (function (){
var temp__5720__auto___71952 = viewer.currentPageNumber;
if(cljs.core.truth_(temp__5720__auto___71952)){
var last_page_71953 = temp__5720__auto___71952;
frontend.storage.set(["ls-pdf-last-page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(url) : frontend.util.node_path.basename.call(null,url)))].join(''),last_page_71953);
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
var G__71817 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loaded-pages","loaded-pages",1539616565).cljs$core$IFn$_invoke$arity$1(ano_state),(p.pageNumber | (0)))], null);
return (set_ano_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_ano_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71817) : set_ano_state_BANG_.call(null,G__71817));
});
var fn_page_ready = (function (){
(viewer.currentScaleValue = "auto");

return (set_page_ready_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_page_ready_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_page_ready_BANG_.call(null,true));
});
var G__71818_71954 = viewer.eventBus;
G__71818_71954.on("pagesinit",fn_page_ready);

G__71818_71954.on("textlayerrendered",fn_textlayer_ready);


return (function (){
var G__71819 = viewer.eventBus;
G__71819.off("pagesinit",fn_page_ready);

G__71819.off("textlayerrendered",fn_textlayer_ready);

return G__71819;
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
frontend.extensions.pdf.highlights.pdf_loader = rum.core.lazy_build(rum.core.build_defc,(function (p__71830){
var map__71831 = p__71830;
var map__71831__$1 = cljs.core.__destructure_map(map__71831);
var pdf_current = map__71831__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71831__$1,new cljs.core.Keyword(null,"url","url",276297046));
var hls_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71831__$1,new cljs.core.Keyword(null,"hls-file","hls-file",192681120));
var _STAR_doc_ref = rum.core.use_ref(null);
var vec__71832 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968),null,new cljs.core.Keyword(null,"status","status",-1997798413),null], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71832,(0),null);
var set_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71832,(1),null);
var vec__71835 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),null,new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948),null], null));
var hls_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71835,(0),null);
var set_hls_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71835,(1),null);
var set_dirty_hls_BANG_ = (function (latest_hls){
var G__71839 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948),latest_hls], null);
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71839) : set_hls_state_BANG_.call(null,G__71839));
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.assets.load_hls_data$(pdf_current),(function (data){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlights","highlights",945143465).cljs$core$IFn$_invoke$arity$1(data),(function (highlights){
return promesa.protocols._promise((function (){var G__71840 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),highlights], null);
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71840) : set_hls_state_BANG_.call(null,G__71840));
})());
}));
}));
})),(function (e){
console.error("[load hls error]",e);

var G__71841 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820),cljs.core.PersistentVector.EMPTY], null);
return (set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hls_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71841) : set_hls_state_BANG_.call(null,G__71841));
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
var G__71842_71955 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
(set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71842_71955) : set_state_BANG_.call(null,G__71842_71955));

return get_doc$(cljs.core.clj__GT_js(opts));
})()
,(function (p1__71825_SHARP_){
var G__71843 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968),p1__71825_SHARP_], null);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71843) : set_state_BANG_.call(null,G__71843));
})),(function (p1__71826_SHARP_){
var G__71844 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__71826_SHARP_], null);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71844) : set_state_BANG_.call(null,G__71844));
})),(function (){
var G__71845 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503)], null);
return (set_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__71845) : set_state_BANG_.call(null,G__71845));
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

var G__71846 = error.name;
switch (G__71846) {
case "MissingPDFException":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)," Is this the correct path?"].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

break;
case "InvalidPDFException":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message),"\n","Is this .pdf file corrupted?\n","Please confirm with external pdf viewer."].join(''),new cljs.core.Keyword(null,"error","error",-978969032),false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71846)].join('')));

}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state)], null));

return daiquiri.core.create_element("div",{'ref':_STAR_doc_ref,'className':"extensions__pdf-loader"},[(function (){var status_doc = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state);
var initial_hls = new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820).cljs$core$IFn$_invoke$arity$1(hls_state);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status_doc,new cljs.core.Keyword(null,"loading","loading",-737050189))) || ((initial_hls == null)))){
var attrs71847 = frontend.components.svg.loading;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71847))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-center","items-center","h-screen","text-gray-500","text-lg"], null)], null),attrs71847], 0))):{'className':"flex justify-center items-center h-screen text-gray-500 text-lg"}),((cljs.core.map_QMARK_(attrs71847))?null:[daiquiri.interpreter.interpret(attrs71847)]));
} else {
return daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.with_key(frontend.extensions.pdf.highlights.pdf_viewer(url,initial_hls,new cljs.core.Keyword(null,"pdf-document","pdf-document",-1928964968).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-dirty-hls!","set-dirty-hls!",-1468393512),set_dirty_hls_BANG_], null)),"pdf-viewer")], null));
}
})()]);
}),null,"frontend.extensions.pdf.highlights/pdf-loader");
frontend.extensions.pdf.highlights.pdf_container = rum.core.lazy_build(rum.core.build_defc,(function (p__71850){
var map__71851 = p__71850;
var map__71851__$1 = cljs.core.__destructure_map(map__71851);
var pdf_current = map__71851__$1;
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71851__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var vec__71853 = rum.core.use_state(false);
var prepared = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71853,(0),null);
var set_prepared_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71853,(1),null);
var vec__71856 = rum.core.use_state(false);
var ready = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71856,(0),null);
var set_ready_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71856,(1),null);
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

var attrs71849 = (cljs.core.truth_((function (){var and__4251__auto__ = prepared;
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
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs71849))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"pdf-layout-container",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-container"], null)], null),attrs71849], 0))):{'id':"pdf-layout-container",'className':"extensions__pdf-container"}),((cljs.core.map_QMARK_(attrs71849))?null:[daiquiri.interpreter.interpret(attrs71849)]));
}),null,"frontend.extensions.pdf.highlights/pdf-container");
frontend.extensions.pdf.highlights.playground_effects = rum.core.lazy_build(rum.core.build_defc,(function (active){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var flg = "is-pdf-active";
var cls = document.body.classList;
var and__4251__auto___71957 = active;
if(cljs.core.truth_(and__4251__auto___71957)){
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
