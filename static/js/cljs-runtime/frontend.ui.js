goog.provide('frontend.ui');
goog.scope(function(){
  frontend.ui.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react_resize_context$dist$index=shadow.js.require("module$node_modules$react_resize_context$dist$index", {});
var module$node_modules$react_textarea_autosize$dist$react_textarea_autosize_browser_cjs=shadow.js.require("module$node_modules$react_textarea_autosize$dist$react_textarea_autosize_browser_cjs", {});
var module$node_modules$react_tippy$dist$react_tippy=shadow.js.require("module$node_modules$react_tippy$dist$react_tippy", {});
var module$node_modules$react_transition_group$cjs$index=shadow.js.require("module$node_modules$react_transition_group$cjs$index", {});
var module$node_modules$$logseq$react_tweet_embed$dist$tweet_embed=shadow.js.require("module$node_modules$$logseq$react_tweet_embed$dist$tweet_embed", {});
var module$node_modules$react_visibility_sensor$dist$visibility_sensor=shadow.js.require("module$node_modules$react_visibility_sensor$dist$visibility_sensor", {});
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.transition_group !== 'undefined')){
} else {
frontend.ui.transition_group = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(module$node_modules$react_transition_group$cjs$index.TransitionGroup);
}
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.css_transition !== 'undefined')){
} else {
frontend.ui.css_transition = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(module$node_modules$react_transition_group$cjs$index.CSSTransition);
}
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.textarea !== 'undefined')){
} else {
frontend.ui.textarea = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.ui.goog$module$goog$object.get(module$node_modules$react_textarea_autosize$dist$react_textarea_autosize_browser_cjs,"default"));
}
frontend.ui.resize_provider = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.ui.goog$module$goog$object.get(module$node_modules$react_resize_context$dist$index,"ResizeProvider"));
frontend.ui.resize_consumer = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.ui.goog$module$goog$object.get(module$node_modules$react_resize_context$dist$index,"ResizeConsumer"));
frontend.ui.Tippy = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.ui.goog$module$goog$object.get(module$node_modules$react_tippy$dist$react_tippy,"Tooltip"));
frontend.ui.ReactTweetEmbed = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(module$node_modules$$logseq$react_tweet_embed$dist$tweet_embed);
frontend.ui.visibility_sensor = frontend.rum.adapt_class.cljs$core$IFn$_invoke$arity$1(frontend.ui.goog$module$goog$object.get(module$node_modules$react_visibility_sensor$dist$visibility_sensor,"default"));
frontend.ui.reset_ios_whole_page_offset_BANG_ = (function frontend$ui$reset_ios_whole_page_offset_BANG_(){
var and__4251__auto__ = frontend.util.ios_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = frontend.util.safari_QMARK_();
if(and__4251__auto____$1){
return window.scrollTo((0),(0));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.icon_size !== 'undefined')){
} else {
frontend.ui.icon_size = (cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())?(23):(20));
}
frontend.ui.ls_textarea = rum.core.lazy_build(rum.core.build_defc,(function (p__65643){
var map__65644 = p__65643;
var map__65644__$1 = cljs.core.__destructure_map(map__65644);
var props = map__65644__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65644__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var skip_composition_QMARK_ = (function (){var or__4253__auto__ = frontend.state.sub(new cljs.core.Keyword("editor","show-page-search?","editor/show-page-search?",653141106));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = frontend.state.sub(new cljs.core.Keyword("editor","show-block-search?","editor/show-block-search?",706500659));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return frontend.state.sub(new cljs.core.Keyword("editor","show-template-search?","editor/show-template-search?",1482009583));
}
}
})();
var on_composition = (function (e){
if(cljs.core.truth_(skip_composition_QMARK_)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
} else {
var G__65649 = e.type;
switch (G__65649) {
case "compositionend":
frontend.state.set_editor_in_composition_BANG_(false);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));

break;
default:
return frontend.state.set_editor_in_composition_BANG_(true);

}
}
});
var props__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
if(cljs.core.truth_(frontend.state.editor_in_composition_QMARK_())){
return null;
} else {
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-composition-start","on-composition-start",-1518620253),on_composition,new cljs.core.Keyword(null,"on-composition-update","on-composition-update",-337521083),on_composition,new cljs.core.Keyword(null,"on-composition-end","on-composition-end",581757376),on_composition], 0));
return daiquiri.interpreter.interpret((frontend.ui.textarea.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.textarea.cljs$core$IFn$_invoke$arity$1(props__$1) : frontend.ui.textarea.call(null,props__$1)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var el_66516 = rum.core.dom_node(state);
el_66516.addEventListener("mouseup",(function (p1__65639_SHARP_){
var start = frontend.util.get_selection_start(el_66516);
var end = frontend.util.get_selection_end(el_66516);
if(cljs.core.truth_((function (){var and__4251__auto__ = start;
if(cljs.core.truth_(and__4251__auto__)){
return end;
} else {
return and__4251__auto__;
}
})())){
var temp__5720__auto__ = (function (){var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end);
if(and__4251__auto__){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"caret","caret",-1275001854),frontend.util.cursor.get_caret_pos.cljs$core$IFn$_invoke$arity$1(el_66516),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end,new cljs.core.Keyword(null,"text","text",-1790561697),el_66516.value.substring(start,end),new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),p1__65639_SHARP_.x,new cljs.core.Keyword(null,"y","y",-1757859776),p1__65639_SHARP_.y], null)], null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var e = temp__5720__auto__;
return frontend.handler.plugin.hook_plugin_editor.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-selection-end","input-selection-end",214372173),cljs_bean.core.__GT_js(e));
} else {
return null;
}
} else {
return null;
}
}));

return state;
})], null)], null),"frontend.ui/ls-textarea");
frontend.ui.dropdown_content_wrapper = rum.core.lazy_build(rum.core.build_defc,(function (state,content,class$){
var class$__$1 = (function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.util.hiccup__GT_class("origin-top-right.absolute.right-0.mt-2.rounded-md.shadow-lg");
}
})();
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-wrapper",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__65664 = state;
switch (G__65664) {
case "entering":
return "transition ease-out duration-100 transform opacity-0 scale-95";

break;
case "entered":
return "transition ease-out duration-100 transform opacity-100 scale-100";

break;
case "exiting":
return "transition ease-in duration-75 transform opacity-100 scale-100";

break;
case "exited":
return "transition ease-in duration-75 transform opacity-0 scale-95";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65664)].join('')));

}
})())].join('')], null))},[daiquiri.interpreter.interpret(content)]);
}),null,"frontend.ui/dropdown-content-wrapper");
frontend.ui.dropdown = rum.core.lazy_build(rum.core.build_defcs,(function() { 
var G__66520__delegate = function (state,content_fn,modal_content_fn,p__65687){
var vec__65701 = p__65687;
var map__65704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65701,(0),null);
var map__65704__$1 = cljs.core.__destructure_map(map__65704);
var modal_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"modal-class","modal-class",226435127));
var z_index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65704__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090),(999));
var map__65730 = state;
var map__65730__$1 = cljs.core.__destructure_map(map__65730);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65730__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var modal_content = (modal_content_fn.cljs$core$IFn$_invoke$arity$1 ? modal_content_fn.cljs$core$IFn$_invoke$arity$1(state) : modal_content_fn.call(null,state));
return daiquiri.core.create_element("div",{'style':{'zIndex':z_index},'className':"relative ui__dropdown-trigger"},[daiquiri.interpreter.interpret((content_fn.cljs$core$IFn$_invoke$arity$1 ? content_fn.cljs$core$IFn$_invoke$arity$1(state) : content_fn.call(null,state))),daiquiri.interpreter.interpret((function (){var G__65736 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.deref(open_QMARK_),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__65737 = (function (dropdown_state){
if(cljs.core.truth_(cljs.core.deref(open_QMARK_))){
return frontend.ui.dropdown_content_wrapper(dropdown_state,modal_content,modal_class);
} else {
return null;
}
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__65736,G__65737) : frontend.ui.css_transition.call(null,G__65736,G__65737));
})())]);
};
var G__66520 = function (state,content_fn,modal_content_fn,var_args){
var p__65687 = null;
if (arguments.length > 3) {
var G__66528__i = 0, G__66528__a = new Array(arguments.length -  3);
while (G__66528__i < G__66528__a.length) {G__66528__a[G__66528__i] = arguments[G__66528__i + 3]; ++G__66528__i;}
  p__65687 = new cljs.core.IndexedSeq(G__66528__a,0,null);
} 
return G__66520__delegate.call(this,state,content_fn,modal_content_fn,p__65687);};
G__66520.cljs$lang$maxFixedArity = 3;
G__66520.cljs$lang$applyTo = (function (arglist__66529){
var state = cljs.core.first(arglist__66529);
arglist__66529 = cljs.core.next(arglist__66529);
var content_fn = cljs.core.first(arglist__66529);
arglist__66529 = cljs.core.next(arglist__66529);
var modal_content_fn = cljs.core.first(arglist__66529);
var p__65687 = cljs.core.rest(arglist__66529);
return G__66520__delegate(state,content_fn,modal_content_fn,p__65687);
});
G__66520.cljs$core$IFn$_invoke$arity$variadic = G__66520__delegate;
return G__66520;
})()
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.mixins.modal(new cljs.core.Keyword(null,"open?","open?",1238443125))], null),"frontend.ui/dropdown");
frontend.ui.menu_link = rum.core.lazy_build(rum.core.build_defc,(function (options,child){
var attrs65746 = options;
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs65746))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block","px-4","py-2","text-sm","transition","ease-in-out","duration-150","cursor","menu-link"], null)], null),attrs65746], 0))):{'className':"block px-4 py-2 text-sm transition ease-in-out duration-150 cursor menu-link"}),((cljs.core.map_QMARK_(attrs65746))?[daiquiri.interpreter.interpret(child)]:[daiquiri.interpreter.interpret(attrs65746),daiquiri.interpreter.interpret(child)]));
}),null,"frontend.ui/menu-link");
frontend.ui.dropdown_with_links = rum.core.lazy_build(rum.core.build_defc,(function (content_fn,links,p__65753){
var map__65754 = p__65753;
var map__65754__$1 = cljs.core.__destructure_map(map__65754);
var opts = map__65754__$1;
var links_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65754__$1,new cljs.core.Keyword(null,"links-header","links-header",-1729119536));
var links_footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65754__$1,new cljs.core.Keyword(null,"links-footer","links-footer",1890937614));
return frontend.ui.dropdown(content_fn,(function (p__65831){
var map__65832 = p__65831;
var map__65832__$1 = cljs.core.__destructure_map(map__65832);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65832__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-1.rounded-md.shadow-xs","div.py-1.rounded-md.shadow-xs",1383490521),(cljs.core.truth_(links_header)?links_header:null),(function (){var iter__4652__auto__ = (function frontend$ui$iter__65833(s__65834){
return (new cljs.core.LazySeq(null,(function (){
var s__65834__$1 = s__65834;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__65834__$1);
if(temp__5720__auto__){
var s__65834__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65834__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__65834__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__65836 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__65835 = (0);
while(true){
if((i__65835 < size__4651__auto__)){
var map__65840 = cljs.core._nth(c__4650__auto__,i__65835);
var map__65840__$1 = cljs.core.__destructure_map(map__65840);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword(null,"options","options",99638489));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var hover_detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65840__$1,new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248));
cljs.core.chunk_append(b__65836,(function (){var new_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),hover_detail,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__65835,map__65840,map__65840__$1,options,title,icon,hr,hover_detail,c__4650__auto__,size__4651__auto__,b__65836,s__65834__$2,temp__5720__auto__,map__65832,map__65832__$1,close_fn,map__65754,map__65754__$1,opts,links_header,links_footer){
return (function (e){
var temp__5720__auto___66550__$1 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5720__auto___66550__$1)){
var on_click_fn_66551 = temp__5720__auto___66550__$1;
(on_click_fn_66551.cljs$core$IFn$_invoke$arity$1 ? on_click_fn_66551.cljs$core$IFn$_invoke$arity$1(e) : on_click_fn_66551.call(null,e));
} else {
}

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
});})(i__65835,map__65840,map__65840__$1,options,title,icon,hr,hover_detail,c__4650__auto__,size__4651__auto__,b__65836,s__65834__$2,temp__5720__auto__,map__65832,map__65832__$1,close_fn,map__65754,map__65754__$1,opts,links_header,links_footer))
], null)], 0));
var child = (cljs.core.truth_(hr)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),(cljs.core.truth_(icon)?icon:null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"8px"], null)], null),title], null)], null));
if(cljs.core.truth_(hr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.my-1","hr.my-1",-305187328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"dropdown-hr"], null)], null);
} else {
return rum.core.with_key(frontend.ui.menu_link(new_options,child),title);
}
})());

var G__66553 = (i__65835 + (1));
i__65835 = G__66553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65836),frontend$ui$iter__65833(cljs.core.chunk_rest(s__65834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65836),null);
}
} else {
var map__65844 = cljs.core.first(s__65834__$2);
var map__65844__$1 = cljs.core.__destructure_map(map__65844);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65844__$1,new cljs.core.Keyword(null,"options","options",99638489));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65844__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65844__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65844__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var hover_detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65844__$1,new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248));
return cljs.core.cons((function (){var new_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),hover_detail,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__65844,map__65844__$1,options,title,icon,hr,hover_detail,s__65834__$2,temp__5720__auto__,map__65832,map__65832__$1,close_fn,map__65754,map__65754__$1,opts,links_header,links_footer){
return (function (e){
var temp__5720__auto___66557__$1 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5720__auto___66557__$1)){
var on_click_fn_66558 = temp__5720__auto___66557__$1;
(on_click_fn_66558.cljs$core$IFn$_invoke$arity$1 ? on_click_fn_66558.cljs$core$IFn$_invoke$arity$1(e) : on_click_fn_66558.call(null,e));
} else {
}

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
});})(map__65844,map__65844__$1,options,title,icon,hr,hover_detail,s__65834__$2,temp__5720__auto__,map__65832,map__65832__$1,close_fn,map__65754,map__65754__$1,opts,links_header,links_footer))
], null)], 0));
var child = (cljs.core.truth_(hr)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),(cljs.core.truth_(icon)?icon:null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"8px"], null)], null),title], null)], null));
if(cljs.core.truth_(hr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.my-1","hr.my-1",-305187328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"dropdown-hr"], null)], null);
} else {
return rum.core.with_key(frontend.ui.menu_link(new_options,child),title);
}
})(),frontend$ui$iter__65833(cljs.core.rest(s__65834__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(((cljs.core.fn_QMARK_(links))?(links.cljs$core$IFn$_invoke$arity$0 ? links.cljs$core$IFn$_invoke$arity$0() : links.call(null)):links));
})(),(cljs.core.truth_(links_footer)?links_footer:null)], null);
}),opts);
}),null,"frontend.ui/dropdown-with-links");
frontend.ui.button = (function frontend$ui$button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66559 = arguments.length;
var i__4865__auto___66560 = (0);
while(true){
if((i__4865__auto___66560 < len__4864__auto___66559)){
args__4870__auto__.push((arguments[i__4865__auto___66560]));

var G__66562 = (i__4865__auto___66560 + (1));
i__4865__auto___66560 = G__66562;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic = (function (text,p__65858){
var map__65859 = p__65858;
var map__65859__$1 = cljs.core.__destructure_map(map__65859);
var option = map__65859__$1;
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65859__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65859__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65859__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var intent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65859__$1,new cljs.core.Keyword(null,"intent","intent",-390846953));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65859__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var small_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65859__$1,new cljs.core.Keyword(null,"small?","small?",95242445),false);
var large_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65859__$1,new cljs.core.Keyword(null,"large?","large?",1460879088),false);
var klass = (cljs.core.truth_(intent)?null:".bg-indigo-600.hover:bg-indigo-700.focus:border-indigo-700.active:bg-indigo-700.text-center");
var klass__$1 = (cljs.core.truth_(background)?clojure.string.replace(klass,"indigo",background):klass);
var klass__$2 = (cljs.core.truth_(small_QMARK_)?[klass__$1,".px-2.py-1"].join(''):klass__$1);
var klass__$3 = (cljs.core.truth_(large_QMARK_)?[klass__$2,".text-base"].join(''):klass__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui__button","button.ui__button",-558040867),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),[frontend.util.hiccup__GT_class(klass__$3)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(option,new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"small?","small?",95242445),new cljs.core.Keyword(null,"large?","large?",1460879088)], 0)),(cljs.core.truth_(href)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.util.open_url(href);

if(cljs.core.fn_QMARK_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
return null;
}
})], null):null)], 0)),text], null);
}));

(frontend.ui.button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.ui.button.cljs$lang$applyTo = (function (seq65852){
var G__65853 = cljs.core.first(seq65852);
var seq65852__$1 = cljs.core.next(seq65852);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65853,seq65852__$1);
}));

frontend.ui.notification_content = rum.core.lazy_build(rum.core.build_defc,(function (state,content,status,uid){
if(cljs.core.truth_((function (){var and__4251__auto__ = content;
if(cljs.core.truth_(and__4251__auto__)){
return status;
} else {
return and__4251__auto__;
}
})())){
var vec__65877 = (function (){var G__65880 = status;
var G__65880__$1 = (((G__65880 instanceof cljs.core.Keyword))?G__65880.fqn:null);
switch (G__65880__$1) {
case "success":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-gray-900 dark:text-gray-300 ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-6.w-6.text-green-400","svg.h-6.w-6.text-green-400",254577367),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null)], null);

break;
case "warning":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-gray-900 dark:text-gray-300 ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-6.w-6.text-yellow-500","svg.h-6.w-6.text-yellow-500",-1918698968),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-red-500",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-6.w-6.text-red-500","svg.h-6.w-6.text-red-500",253105373),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd"], null)], null)], null)], null);

}
})();
var color_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65877,(0),null);
var svg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65877,(1),null);
return daiquiri.core.create_element("div",{'style':daiquiri.interpreter.element_attributes(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,"exiting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,"exited"))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(-1)], null):null)),'className':"ui__notifications-content"},[daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["max-w-sm","w-full","shadow-lg","rounded-lg","pointer-events-auto","notification-area",(function (){var G__65897 = state;
switch (G__65897) {
case "entering":
return "transition ease-out duration-300 transform opacity-0 translate-y-2 sm:translate-x-0";

break;
case "entered":
return "transition ease-out duration-300 transform translate-y-0 opacity-100 sm:translate-x-0";

break;
case "exiting":
return "transition ease-in duration-100 opacity-100";

break;
case "exited":
return "transition ease-in duration-100 opacity-0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65897)].join('')));

}
})()], null))},[daiquiri.core.create_element("div",{'style':{'maxHeight':"calc(100vh - 200px)",'overflowY':"scroll",'overflowX':"hidden"},'className':"rounded-lg shadow-xs"},[daiquiri.core.create_element("div",{'className':"p-4"},[daiquiri.core.create_element("div",{'className':"flex items-start"},[(function (){var attrs65911 = svg;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs65911))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-shrink-0"], null)], null),attrs65911], 0))):{'className':"flex-shrink-0"}),((cljs.core.map_QMARK_(attrs65911))?null:[daiquiri.interpreter.interpret(attrs65911)]));
})(),daiquiri.core.create_element("div",{'className':"ml-3 w-0 flex-1"},[daiquiri.core.create_element("div",{'style':{'margin':(0)},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","leading-5","font-medium","whitespace-pre-line",color_class], null))},[daiquiri.interpreter.interpret(content)])]),daiquiri.core.create_element("div",{'className':"ml-4 flex-shrink-0 flex"},[daiquiri.core.create_element("button",{'onClick':(function (){
return frontend.handler.notification.clear_BANG_(uid);
}),'className':"inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"},[daiquiri.core.create_element("svg",{'fill':"currentColor",'viewBox':"0 0 20 20",'className':"h-5 w-5"},[daiquiri.core.create_element("path",{'clipRule':"evenodd",'d':"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",'fillRule':"evenodd"},null)])])])])])])])]);
} else {
return null;
}
}),null,"frontend.ui/notification-content");
frontend.ui.notification = rum.core.lazy_build(rum.core.build_defc,(function (){
var contents = frontend.state.sub(new cljs.core.Keyword("notification","contents","notification/contents",-1760740618));
return daiquiri.interpreter.interpret((function (){var G__66021 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"notifications ui__notifications"], null);
var G__66022 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (el){
var k = cljs.core.first(el);
var v = cljs.core.second(el);
var G__66025 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),(100),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(k)], null);
var G__66026 = (function (state){
return frontend.ui.notification_content(state,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(v),k);
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__66025,G__66026) : frontend.ui.css_transition.call(null,G__66025,G__66026));
}),contents));
return (frontend.ui.transition_group.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.transition_group.cljs$core$IFn$_invoke$arity$2(G__66021,G__66022) : frontend.ui.transition_group.call(null,G__66021,G__66022));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.ui/notification");
frontend.ui.checkbox = (function frontend$ui$checkbox(option){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-checkbox.h-4.w-4.transition.duration-150.ease-in-out","input.form-checkbox.h-4.w-4.transition.duration-150.ease-in-out",-1809567774),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null),option], 0))], null);
});
frontend.ui.main_node = (function frontend$ui$main_node(){
return goog.dom.getElement("main-content-container");
});
frontend.ui.get_scroll_top = (function frontend$ui$get_scroll_top(){
return frontend.ui.main_node().scrollTop;
});
frontend.ui.get_dynamic_style_node = (function frontend$ui$get_dynamic_style_node(){
return document.getElementById("dynamic-style-scope");
});
frontend.ui.inject_document_devices_envs_BANG_ = (function frontend$ui$inject_document_devices_envs_BANG_(){
var cl = document.documentElement.classList;
if(cljs.core.truth_(frontend.util.mac_QMARK_)){
cl.add("is-mac");
} else {
}

if(cljs.core.truth_(frontend.util.win32_QMARK_)){
cl.add("is-win32");
} else {
}

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
cl.add("is-electron");
} else {
}

if(cljs.core.truth_(frontend.util.ios_QMARK_())){
cl.add("is-ios");
} else {
}

if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
cl.add("is-mobile");
} else {
}

if(frontend.util.safari_QMARK_()){
cl.add("is-safari");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
cl.add("is-native-ios");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())){
cl.add("is-native-android");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_iphone_QMARK_())){
cl.add("is-native-iphone");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_iphone_without_notch_QMARK_())){
cl.add("is-native-iphone-without-notch");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_ipad_QMARK_())){
cl.add("is-native-ipad");
} else {
}

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
window.apis.on("full-screen",(function (p1__66039_SHARP_){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(cl,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__66039_SHARP_,"enter"))?"add":"remove"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["is-fullscreen"], 0));
}));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"getAppBaseInfo","getAppBaseInfo",-1406218507)], 0)),(function (p1__66041_SHARP_){
var map__66047 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__66041_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__66047__$1 = cljs.core.__destructure_map(map__66047);
var isFullScreen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66047__$1,new cljs.core.Keyword(null,"isFullScreen","isFullScreen",-1879720011));
var and__4251__auto__ = isFullScreen;
if(cljs.core.truth_(and__4251__auto__)){
return cl.add("is-fullscreen");
} else {
return and__4251__auto__;
}
}));
} else {
return null;
}
});
frontend.ui.inject_dynamic_style_node_BANG_ = (function frontend$ui$inject_dynamic_style_node_BANG_(){
var style = frontend.ui.get_dynamic_style_node();
if((style == null)){
var node = document.createElement("style");
(node.id = "dynamic-style-scope");

return document.head.appendChild(node);
} else {
return style;
}
});
frontend.ui.setup_patch_ios_visual_viewport_state_BANG_ = (function frontend$ui$setup_patch_ios_visual_viewport_state_BANG_(){
var temp__5720__auto___66591 = (function (){var and__4251__auto__ = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__4251__auto__)){
return frontend.util.safari_QMARK_();
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.mobile.util.native_ios_QMARK_();
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return window.visualViewport;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto___66591)){
var vp_66592 = temp__5720__auto___66591;
var raf_pending_QMARK__66593 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var set_raf_pending_BANG__66594 = (function (p1__66053_SHARP_){
return cljs.core.reset_BANG_(raf_pending_QMARK__66593,p1__66053_SHARP_);
});
var on_viewport_changed_66595 = (function (){
var update_vw_state = goog.functions.debounce((function (){
frontend.state.set_visual_viewport_state(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),vp_66592.height,new cljs.core.Keyword(null,"page-top","page-top",68258296),vp_66592.pageTop,new cljs.core.Keyword(null,"offset-top","offset-top",91937233),vp_66592.offsetTop], null));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","visual-viewport-pending?","ui/visual-viewport-pending?",-1615690256),false);
}),(20));
if(cljs.core.truth_(cljs.core.deref(raf_pending_QMARK__66593))){
return null;
} else {
var f = (function (){
set_raf_pending_BANG__66594(false);

return (update_vw_state.cljs$core$IFn$_invoke$arity$0 ? update_vw_state.cljs$core$IFn$_invoke$arity$0() : update_vw_state.call(null));
});
set_raf_pending_BANG__66594(true);

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","visual-viewport-pending?","ui/visual-viewport-pending?",-1615690256),true);

return window.requestAnimationFrame(f);
}
});
vp_66592.addEventListener("resize",on_viewport_changed_66595);

vp_66592.addEventListener("scroll",on_viewport_changed_66595);

} else {
}

return (function (){
return cljs.core.List.EMPTY;
});
});
frontend.ui.setup_system_theme_effect_BANG_ = (function frontend$ui$setup_system_theme_effect_BANG_(){
var schemaMedia = window.matchMedia("(prefers-color-scheme: dark)");
schemaMedia.addEventListener("change",frontend.state.sync_system_theme_BANG_);

frontend.state.sync_system_theme_BANG_();

return (function (){
return schemaMedia.removeEventListener("change",frontend.state.sync_system_theme_BANG_);
});
});
frontend.ui.set_global_active_keystroke = (function frontend$ui$set_global_active_keystroke(val){
return document.body.setAttribute("data-active-keystroke",val);
});
frontend.ui.setup_active_keystroke_BANG_ = (function frontend$ui$setup_active_keystroke_BANG_(){
var active_keystroke = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var heads = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),null,new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null,new cljs.core.Keyword(null,"control","control",1892578036),null], null), null);
var handle_global_keystroke = (function (down_QMARK_,e){
var handler_66603 = (cljs.core.truth_(down_QMARK_)?cljs.core.conj:cljs.core.disj);
var keystroke_66604 = e.key;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_keystroke,handler_66603,keystroke_66604);

if(cljs.core.contains_QMARK_(heads,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(e.key)))){
return frontend.ui.set_global_active_keystroke(clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",cljs.core.deref(active_keystroke)));
} else {
return null;
}
});
var keydown_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handle_global_keystroke,true);
var keyup_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handle_global_keystroke,false);
var clear_all = (function (){
frontend.ui.set_global_active_keystroke("");

return cljs.core.reset_BANG_(active_keystroke,cljs.core.PersistentHashSet.EMPTY);
});
window.addEventListener("keydown",keydown_handler);

window.addEventListener("keyup",keyup_handler);

window.addEventListener("blur",clear_all);

window.addEventListener("visibilitychange",clear_all);

return (function (){
window.removeEventListener("keydown",keydown_handler);

window.removeEventListener("keyup",keyup_handler);

window.removeEventListener("blur",clear_all);

return window.removeEventListener("visibilitychange",clear_all);
});
});
if((typeof frontend !== 'undefined') && (typeof frontend.ui !== 'undefined') && (typeof frontend.ui.last_scroll_top !== 'undefined')){
} else {
frontend.ui.last_scroll_top = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.ui.scroll_down_QMARK_ = (function frontend$ui$scroll_down_QMARK_(){
var scroll_top = frontend.ui.get_scroll_top();
var down_QMARK_ = (scroll_top >= cljs.core.deref(frontend.ui.last_scroll_top));
cljs.core.reset_BANG_(frontend.ui.last_scroll_top,scroll_top);

return down_QMARK_;
});
frontend.ui.bottom_reached_QMARK_ = (function frontend$ui$bottom_reached_QMARK_(node,threshold){
var full_height = frontend.ui.goog$module$goog$object.get(node,"scrollHeight");
var scroll_top = frontend.ui.goog$module$goog$object.get(node,"scrollTop");
var client_height = frontend.ui.goog$module$goog$object.get(node,"clientHeight");
return (((full_height - scroll_top) - client_height) <= threshold);
});
frontend.ui.on_scroll = (function frontend$ui$on_scroll(node,p__66104){
var map__66105 = p__66104;
var map__66105__$1 = cljs.core.__destructure_map(map__66105);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var on_top_reached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"on-top-reached","on-top-reached",1295153037));
var threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66105__$1,new cljs.core.Keyword(null,"threshold","threshold",204221583),(500));
var bottom_reached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66105__$1,new cljs.core.Keyword(null,"bottom-reached","bottom-reached",-2132308834));
var scroll_top = frontend.ui.goog$module$goog$object.get(node,"scrollTop");
var bottom_reached_QMARK_ = ((cljs.core.fn_QMARK_(bottom_reached))?(bottom_reached.cljs$core$IFn$_invoke$arity$0 ? bottom_reached.cljs$core$IFn$_invoke$arity$0() : bottom_reached.call(null)):frontend.ui.bottom_reached_QMARK_(node,threshold));
var top_reached_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(scroll_top,(0));
var down_QMARK_ = frontend.ui.scroll_down_QMARK_();
if(cljs.core.truth_((function (){var and__4251__auto__ = down_QMARK_;
if(and__4251__auto__){
var and__4251__auto____$1 = bottom_reached_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return on_load;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
(on_load.cljs$core$IFn$_invoke$arity$0 ? on_load.cljs$core$IFn$_invoke$arity$0() : on_load.call(null));
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = (!(down_QMARK_));
if(and__4251__auto__){
var and__4251__auto____$1 = top_reached_QMARK_;
if(and__4251__auto____$1){
return on_top_reached;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return (on_top_reached.cljs$core$IFn$_invoke$arity$0 ? on_top_reached.cljs$core$IFn$_invoke$arity$0() : on_top_reached.call(null));
} else {
return null;
}
});
/**
 * Attach scroll and resize listeners.
 */
frontend.ui.attach_listeners = (function frontend$ui$attach_listeners(state){
var list_element_id = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2));
var node = document.getElementById(list_element_id);
var debounced_on_scroll = goog.functions.debounce((function (){
return frontend.ui.on_scroll(node,opts);
}),(100));
return frontend.mixins.listen(state,node,new cljs.core.Keyword(null,"scroll","scroll",971553779),debounced_on_scroll);
});
/**
 * Render an infinite list.
 */
frontend.ui.infinite_list = rum.core.lazy_build(rum.core.build_defcs,(function (state,_list_element_id,body,p__66133){
var map__66134 = p__66133;
var map__66134__$1 = cljs.core.__destructure_map(map__66134);
var on_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66134__$1,new cljs.core.Keyword(null,"on-load","on-load",1415151594));
var has_more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66134__$1,new cljs.core.Keyword(null,"has-more","has-more",-320006781));
var more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66134__$1,new cljs.core.Keyword(null,"more","more",-2058821800));
var more_class = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66134__$1,new cljs.core.Keyword(null,"more-class","more-class",-869337192),"text-sm");
var attrs66131 = body;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs66131))?daiquiri.interpreter.element_attributes(attrs66131):null),((cljs.core.map_QMARK_(attrs66131))?[(cljs.core.truth_(has_more)?daiquiri.core.create_element("div",{'className':"w-full p-4"},[daiquiri.core.create_element("a",{'onClick':on_load,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fade-link","text-link","font-bold",more_class], null))},[daiquiri.interpreter.interpret((function (){var or__4253__auto__ = more;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","earlier","page/earlier",-61115488)], 0));
}
})())])]):null)]:[daiquiri.interpreter.interpret(attrs66131),(cljs.core.truth_(has_more)?daiquiri.core.create_element("div",{'className':"w-full p-4"},[daiquiri.core.create_element("a",{'onClick':on_load,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fade-link","text-link","font-bold",more_class], null))},[daiquiri.interpreter.interpret((function (){var or__4253__auto__ = more;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","earlier","page/earlier",-61115488)], 0));
}
})())])]):null)]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1(frontend.ui.attach_listeners)], null),"frontend.ui/infinite-list");
frontend.ui.auto_complete = rum.core.lazy_build(rum.core.build_defcs,(function (state,matched,p__66151){
var map__66152 = p__66151;
var map__66152__$1 = cljs.core.__destructure_map(map__66152);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66152__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_shift_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66152__$1,new cljs.core.Keyword(null,"on-shift-chosen","on-shift-chosen",-310778328));
var get_group_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66152__$1,new cljs.core.Keyword(null,"get-group-name","get-group-name",-160379696));
var empty_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66152__$1,new cljs.core.Keyword(null,"empty-placeholder","empty-placeholder",-68202085));
var item_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66152__$1,new cljs.core.Keyword(null,"item-render","item-render",253627868));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66152__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
return daiquiri.core.create_element("div",{'id':"ui__ac",'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null))},[((cljs.core.seq(matched))?daiquiri.core.create_element("div",{'id':"ui__ac-inner",'className':"hide-scrollbar"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$ui$iter__66164(s__66165){
return (new cljs.core.LazySeq(null,(function (){
var s__66165__$1 = s__66165;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__66165__$1);
if(temp__5720__auto__){
var s__66165__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66165__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__66165__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__66167 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__66166 = (0);
while(true){
if((i__66166 < size__4651__auto__)){
var vec__66170 = cljs.core._nth(c__4650__auto__,i__66166);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66170,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66170,(1),null);
cljs.core.chunk_append(b__66167,daiquiri.core.create_element(daiquiri.core.fragment,{'key':idx},[(function (){var item_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),(function (){var chosen_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_idx),idx);
return frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["ac-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((chosen_QMARK_)?"chosen":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__66166,chosen_QMARK_,vec__66170,idx,item,c__4650__auto__,size__4651__auto__,b__66167,s__66165__$2,temp__5720__auto__,current_idx,map__66152,map__66152__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$){
return (function (e){
frontend.util.stop(e);

if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.ui.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(and__4251__auto__)){
return on_shift_chosen;
} else {
return and__4251__auto__;
}
})())){
return (on_shift_chosen.cljs$core$IFn$_invoke$arity$1 ? on_shift_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_shift_chosen.call(null,item));
} else {
return (on_chosen.cljs$core$IFn$_invoke$arity$1 ? on_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_chosen.call(null,item));
}
});})(i__66166,chosen_QMARK_,vec__66170,idx,item,c__4650__auto__,size__4651__auto__,b__66167,s__66165__$2,temp__5720__auto__,current_idx,map__66152,map__66152__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$))
], null),(cljs.core.truth_(item_render)?(item_render.cljs$core$IFn$_invoke$arity$2 ? item_render.cljs$core$IFn$_invoke$arity$2(item,chosen_QMARK_) : item_render.call(null,item,chosen_QMARK_)):item));
})()], null);
if(cljs.core.truth_(get_group_name)){
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (get_group_name.cljs$core$IFn$_invoke$arity$1 ? get_group_name.cljs$core$IFn$_invoke$arity$1(item) : get_group_name.call(null,item));
if(cljs.core.truth_(temp__5718__auto__)){
var group_name = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__ac-group-name","div.ui__ac-group-name",1988705321),group_name], null),item_cp], null);
} else {
return item_cp;
}
})());
} else {
return daiquiri.interpreter.interpret(item_cp);
}
})()]));

var G__66622 = (i__66166 + (1));
i__66166 = G__66622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66167),frontend$ui$iter__66164(cljs.core.chunk_rest(s__66165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66167),null);
}
} else {
var vec__66177 = cljs.core.first(s__66165__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66177,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66177,(1),null);
return cljs.core.cons(daiquiri.core.create_element(daiquiri.core.fragment,{'key':idx},[(function (){var item_cp = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),(function (){var chosen_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_idx),idx);
return frontend.ui.menu_link(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["ac-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((chosen_QMARK_)?"chosen":null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (chosen_QMARK_,vec__66177,idx,item,s__66165__$2,temp__5720__auto__,current_idx,map__66152,map__66152__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$){
return (function (e){
frontend.util.stop(e);

if(cljs.core.truth_((function (){var and__4251__auto__ = frontend.ui.goog$module$goog$object.get(e,"shiftKey");
if(cljs.core.truth_(and__4251__auto__)){
return on_shift_chosen;
} else {
return and__4251__auto__;
}
})())){
return (on_shift_chosen.cljs$core$IFn$_invoke$arity$1 ? on_shift_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_shift_chosen.call(null,item));
} else {
return (on_chosen.cljs$core$IFn$_invoke$arity$1 ? on_chosen.cljs$core$IFn$_invoke$arity$1(item) : on_chosen.call(null,item));
}
});})(chosen_QMARK_,vec__66177,idx,item,s__66165__$2,temp__5720__auto__,current_idx,map__66152,map__66152__$1,on_chosen,on_shift_chosen,get_group_name,empty_placeholder,item_render,class$))
], null),(cljs.core.truth_(item_render)?(item_render.cljs$core$IFn$_invoke$arity$2 ? item_render.cljs$core$IFn$_invoke$arity$2(item,chosen_QMARK_) : item_render.call(null,item,chosen_QMARK_)):item));
})()], null);
if(cljs.core.truth_(get_group_name)){
return daiquiri.interpreter.interpret((function (){var temp__5718__auto__ = (get_group_name.cljs$core$IFn$_invoke$arity$1 ? get_group_name.cljs$core$IFn$_invoke$arity$1(item) : get_group_name.call(null,item));
if(cljs.core.truth_(temp__5718__auto__)){
var group_name = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__ac-group-name","div.ui__ac-group-name",1988705321),group_name], null),item_cp], null);
} else {
return item_cp;
}
})());
} else {
return daiquiri.interpreter.interpret(item_cp);
}
})()]),frontend$ui$iter__66164(cljs.core.rest(s__66165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(matched));
})())]):(cljs.core.truth_(empty_placeholder)?daiquiri.interpreter.interpret(empty_placeholder):null))]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612)),frontend.modules.shortcut.core.mixin(new cljs.core.Keyword("shortcut.handler","auto-complete","shortcut.handler/auto-complete",1783376094))], null),"frontend.ui/auto-complete");
frontend.ui.datepicker = frontend.ui.date_picker.date_picker;
frontend.ui.toggle = (function frontend$ui$toggle(var_args){
var G__66181 = arguments.length;
switch (G__66181) {
case 2:
return frontend.ui.toggle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$2 = (function (on_QMARK_,on_click){
return frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(on_QMARK_,on_click,false);
}));

(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3 = (function (on_QMARK_,on_click,small_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ui__toggle","a.ui__toggle",307271518),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(small_QMARK_)?"is-small":"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.wrapper.transition-colors.ease-in-out.duration-200","span.wrapper.transition-colors.ease-in-out.duration-200",805399991),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aria-checked","aria-checked",980530562),(cljs.core.truth_(on_QMARK_)?"true":"false"),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),"0",new cljs.core.Keyword(null,"role","role",-736691072),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(on_QMARK_)?"bg-indigo-600":"bg-gray-300")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.switcher.transform.transition.ease-in-out.duration-200","span.switcher.transform.transition.ease-in-out.duration-200",-1989927127),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(on_QMARK_)?(cljs.core.truth_(small_QMARK_)?"translate-x-4":"translate-x-5"):"translate-x-0"),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null)], null)], null);
}));

(frontend.ui.toggle.cljs$lang$maxFixedArity = 3);

frontend.ui.render_keyboard_shortcut = (function frontend$ui$render_keyboard_shortcut(sequence){
var sequence__$1 = ((typeof sequence === 'string')?clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(clojure.string.trim(sequence)),/ |\+/):sequence);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.keyboard-shortcut","span.keyboard-shortcut",-1239684213),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,key){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"meta","meta",1499536964),key)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("meta",key))))?frontend.util.meta_key_name():cljs.core.name(key))], null);
}),sequence__$1)], null);
});
frontend.ui.keyboard_shortcut_from_config = (function frontend$ui$keyboard_shortcut_from_config(shortcut_name){
var default_binding = new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.config.all_default_keyboard_shortcuts,shortcut_name));
var custom_binding = (cljs.core.truth_(frontend.state.shortcuts())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.shortcuts(),shortcut_name):null);
var binding = (function (){var or__4253__auto__ = custom_binding;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default_binding;
}
})();
return frontend.modules.shortcut.data_helper.decorate_binding(binding);
});
frontend.ui.modal_overlay = rum.core.lazy_build(rum.core.build_defc,(function (state,close_fn){
return daiquiri.core.create_element("div",{'onClick':close_fn,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__modal-overlay",(function (){var G__66182 = state;
switch (G__66182) {
case "entering":
return "ease-out duration-300 opacity-0";

break;
case "entered":
return "ease-out duration-300 opacity-100";

break;
case "exiting":
return "ease-in duration-200 opacity-100";

break;
case "exited":
return "ease-in duration-200 opacity-0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66182)].join('')));

}
})()], null))},[daiquiri.core.create_element("div",{'className':"absolute inset-0 opacity-75"},null)]);
}),null,"frontend.ui/modal-overlay");
frontend.ui.modal_panel_content = rum.core.lazy_build(rum.core.build_defc,(function (panel_content,close_fn){
return daiquiri.interpreter.interpret((panel_content.cljs$core$IFn$_invoke$arity$1 ? panel_content.cljs$core$IFn$_invoke$arity$1(close_fn) : panel_content.call(null,close_fn)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.mixins.component_editing_mode], null),"frontend.ui/modal-panel-content");
frontend.ui.modal_panel = rum.core.lazy_build(rum.core.build_defc,(function (show_QMARK_,panel_content,transition_state,close_fn,fullscreen_QMARK_,close_btn_QMARK_){
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__modal-panel","transform","transition-all","sm:min-w-lg","sm",(function (){var G__66189 = transition_state;
switch (G__66189) {
case "entering":
return "ease-out duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95";

break;
case "entered":
return "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100";

break;
case "exiting":
return "ease-in duration-200 opacity-100 translate-y-0 sm:scale-100";

break;
case "exited":
return "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66189)].join('')));

}
})()], null))},[(function (){var attrs66190 = ((close_btn_QMARK_ === false)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ui__modal-close.opacity-60.hover:opacity-100","a.ui__modal-close.opacity-60.hover:opacity-100",-1960269236),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-6.w-6","svg.h-6.w-6",1735621584),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M6 18L18 6M6 6l12 12",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs66190))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["absolute","top-0","right-0","pt-2","pr-2"], null)], null),attrs66190], 0))):{'className':"absolute top-0 right-0 pt-2 pr-2"}),((cljs.core.map_QMARK_(attrs66190))?null:[daiquiri.interpreter.interpret(attrs66190)]));
})(),(cljs.core.truth_(show_QMARK_)?daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fullscreen_QMARK_)?"":"panel-content")], null))},[frontend.ui.modal_panel_content(panel_content,close_fn)]):null)]);
}),null,"frontend.ui/modal-panel");
frontend.ui.modal = rum.core.lazy_build(rum.core.build_defc,(function (){
var modal_panel_content = frontend.state.sub(new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448));
var fullscreen_QMARK_ = frontend.state.sub(new cljs.core.Keyword("modal","fullscreen?","modal/fullscreen?",-1344472297));
var close_btn_QMARK_ = frontend.state.sub(new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151));
var show_QMARK_ = frontend.state.sub(new cljs.core.Keyword("modal","show?","modal/show?",1441869594));
var label = frontend.state.sub(new cljs.core.Keyword("modal","label","modal/label",-1776753955));
var close_fn = (function (){
frontend.state.close_modal_BANG_();

return frontend.state.close_settings_BANG_();
});
var modal_panel_content__$1 = (function (){var or__4253__auto__ = modal_panel_content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (_close){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
}
})();
return daiquiri.core.create_element("div",{'style':{'zIndex':(cljs.core.truth_(show_QMARK_)?(999):(-1))},'label':label,'className':"ui__modal"},[daiquiri.interpreter.interpret((function (){var G__66193 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__66194 = (function (state){
return frontend.ui.modal_overlay(state,close_fn);
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__66193,G__66194) : frontend.ui.css_transition.call(null,G__66193,G__66194));
})()),daiquiri.interpreter.interpret((function (){var G__66197 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__66198 = (function (state){
return frontend.ui.modal_panel(show_QMARK_,modal_panel_content__$1,state,close_fn,fullscreen_QMARK_,close_btn_QMARK_);
});
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__66197,G__66198) : frontend.ui.css_transition.call(null,G__66197,G__66198));
})())]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
frontend.mixins.hide_when_esc_or_outside.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
var G__66199 = rum.core.dom_node(state).querySelector("button.ui__modal-close");
if((G__66199 == null)){
return null;
} else {
return G__66199.click();
}
}),new cljs.core.Keyword(null,"outside?","outside?",-1930213908),false], 0));

return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [(13),(function (state__$1,_e){
var G__66200 = rum.core.dom_node(state__$1).querySelector("button.ui__modal-enter");
if((G__66200 == null)){
return null;
} else {
return G__66200.click();
}
})], null));
}))], null),"frontend.ui/modal");
frontend.ui.make_confirm_modal = (function frontend$ui$make_confirm_modal(p__66202){
var map__66203 = p__66202;
var map__66203__$1 = cljs.core.__destructure_map(map__66203);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sub_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288));
var sub_checkbox_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"sub-checkbox?","sub-checkbox?",-671905753));
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66203__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),(function (){
return cljs.core.List.EMPTY;
}));
var on_confirm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66203__$1,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038));
return (function (close_fn){
var _STAR_sub_checkbox_selected = (function (){var and__4251__auto__ = sub_checkbox_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
} else {
return and__4251__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__confirm-modal","div.ui__confirm-modal",975358362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["is-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:flex.sm:items-start","div.sm:flex.sm:items-start",-437342012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100.sm:mx-0.sm:h-10.sm:w-10","div.mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100.sm:mx-0.sm:h-10.sm:w-10",-669226852),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-6.w-6.text-red-600","svg.h-6.w-6.text-red-600",-1189650644),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"d","d",1972142424),"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left","div.mt-3.text-center.sm:mt-0.sm:ml-4.sm:text-left",-1344715931),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.headline.text-lg.leading-6.font-medium","h2.headline.text-lg.leading-6.font-medium",1093036727),(((title instanceof cljs.core.Keyword))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title], 0)):title)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.sublabel","label.sublabel",644574517),(cljs.core.truth_(sub_checkbox_QMARK_)?frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var checked = e.target.checked;
return cljs.core.reset_BANG_(_STAR_sub_checkbox_selected,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [checked], null));
})], null)):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.subline.text-gray-400","h3.subline.text-gray-400",-1915997625),(((sub_title instanceof cljs.core.Keyword))?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_title], 0)):sub_title)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-5.sm:mt-4.sm:flex.sm:flex-row-reverse","div.mt-5.sm:mt-4.sm:flex.sm:flex-row-reverse",-1307936908),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.w-full.rounded-md.shadow-sm.sm:ml-3.sm:w-auto","span.flex.w-full.rounded-md.shadow-sm.sm:ml-3.sm:w-auto",-1268089695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-indigo-600.text-base.leading-6.font-medium.text-white.shadow-sm.hover:bg-indigo-500.focus:outline-none.focus:border-indigo-700.focus:shadow-outline-indigo.transition.ease-in-out.duration-150.sm:text-sm.sm:leading-5","button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-indigo-600.text-base.leading-6.font-medium.text-white.shadow-sm.hover:bg-indigo-500.focus:outline-none.focus:border-indigo-700.focus:shadow-outline-indigo.transition.ease-in-out.duration-150.sm:text-sm.sm:leading-5",-1650114762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__66201_SHARP_){
var and__4251__auto__ = cljs.core.fn_QMARK_(on_confirm);
if(and__4251__auto__){
var G__66204 = p1__66201_SHARP_;
var G__66205 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),close_fn,new cljs.core.Keyword(null,"sub-selected","sub-selected",-1251753428),(function (){var and__4251__auto____$1 = _STAR_sub_checkbox_selected;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.deref(_STAR_sub_checkbox_selected);
} else {
return and__4251__auto____$1;
}
})()], null);
return (on_confirm.cljs$core$IFn$_invoke$arity$2 ? on_confirm.cljs$core$IFn$_invoke$arity$2(G__66204,G__66205) : on_confirm.call(null,G__66204,G__66205));
} else {
return and__4251__auto__;
}
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mt-3.flex.w-full.rounded-md.shadow-sm.sm:mt-0.sm:w-auto","span.mt-3.flex.w-full.rounded-md.shadow-sm.sm:mt-0.sm:w-auto",287579251),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.inline-flex.justify-center.w-full.rounded-md.border.border-gray-300.px-4.py-2.bg-white.text-base.leading-6.font-medium.text-gray-700.shadow-sm.hover:text-gray-500.focus:outline-none.focus:border-blue-300.focus:shadow-outline-blue.transition.ease-in-out.duration-150.sm:text-sm.sm:leading-5","button.inline-flex.justify-center.w-full.rounded-md.border.border-gray-300.px-4.py-2.bg-white.text-base.leading-6.font-medium.text-gray-700.shadow-sm.hover:text-gray-500.focus:outline-none.focus:border-blue-300.focus:shadow-outline-blue.transition.ease-in-out.duration-150.sm:text-sm.sm:leading-5",1735989148),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(on_cancel,close_fn)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], 0))], null)], null)], null)], null);
});
});
frontend.ui.sub_modal = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = cljs.core.seq(frontend.state.sub(new cljs.core.Keyword("modal","subsets","modal/subsets",627467906)));
if(temp__5720__auto__){
var modals = temp__5720__auto__;
var iter__4652__auto__ = (function frontend$ui$iter__66234(s__66235){
return (new cljs.core.LazySeq(null,(function (){
var s__66235__$1 = s__66235;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__66235__$1);
if(temp__5720__auto____$1){
var s__66235__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__66235__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__66235__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__66237 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__66236 = (0);
while(true){
if((i__66236 < size__4651__auto__)){
var vec__66255 = cljs.core._nth(c__4650__auto__,i__66236);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66255,(0),null);
var modal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66255,(1),null);
cljs.core.chunk_append(b__66237,(function (){var id = new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(modal);
var modal_panel_content = new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448).cljs$core$IFn$_invoke$arity$1(modal);
var close_btn_QMARK_ = new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151).cljs$core$IFn$_invoke$arity$1(modal);
var show_QMARK_ = new cljs.core.Keyword("modal","show?","modal/show?",1441869594).cljs$core$IFn$_invoke$arity$1(modal);
var label = new cljs.core.Keyword("modal","label","modal/label",-1776753955).cljs$core$IFn$_invoke$arity$1(modal);
var close_fn = ((function (i__66236,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,vec__66255,idx,modal,c__4650__auto__,size__4651__auto__,b__66237,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__){
return (function (){
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(id);
});})(i__66236,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,vec__66255,idx,modal,c__4650__auto__,size__4651__auto__,b__66237,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__))
;
var modal_panel_content__$1 = (function (){var or__4253__auto__ = modal_panel_content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((function (i__66236,or__4253__auto__,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,vec__66255,idx,modal,c__4650__auto__,size__4651__auto__,b__66237,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__){
return (function (_close){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
;})(i__66236,or__4253__auto__,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,vec__66255,idx,modal,c__4650__auto__,size__4651__auto__,b__66237,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__))
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__modal.is-sub-modal","div.ui__modal.is-sub-modal",1533892698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(cljs.core.truth_(show_QMARK_)?((999) + idx):(-1))], null),new cljs.core.Keyword(null,"label","label",1718410804),label], null),(function (){var G__66259 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__66260 = ((function (i__66236,G__66259,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,modal_panel_content__$1,vec__66255,idx,modal,c__4650__auto__,size__4651__auto__,b__66237,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__){
return (function (state){
return frontend.ui.modal_overlay(state,close_fn);
});})(i__66236,G__66259,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,modal_panel_content__$1,vec__66255,idx,modal,c__4650__auto__,size__4651__auto__,b__66237,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__))
;
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__66259,G__66260) : frontend.ui.css_transition.call(null,G__66259,G__66260));
})(),(function (){var G__66262 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__66263 = ((function (i__66236,G__66262,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,modal_panel_content__$1,vec__66255,idx,modal,c__4650__auto__,size__4651__auto__,b__66237,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__){
return (function (state){
return frontend.ui.modal_panel(show_QMARK_,modal_panel_content__$1,state,close_fn,false,close_btn_QMARK_);
});})(i__66236,G__66262,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,modal_panel_content__$1,vec__66255,idx,modal,c__4650__auto__,size__4651__auto__,b__66237,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__))
;
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__66262,G__66263) : frontend.ui.css_transition.call(null,G__66262,G__66263));
})()], null);
})());

var G__66658 = (i__66236 + (1));
i__66236 = G__66658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66237),frontend$ui$iter__66234(cljs.core.chunk_rest(s__66235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66237),null);
}
} else {
var vec__66268 = cljs.core.first(s__66235__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66268,(0),null);
var modal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66268,(1),null);
return cljs.core.cons((function (){var id = new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(modal);
var modal_panel_content = new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448).cljs$core$IFn$_invoke$arity$1(modal);
var close_btn_QMARK_ = new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151).cljs$core$IFn$_invoke$arity$1(modal);
var show_QMARK_ = new cljs.core.Keyword("modal","show?","modal/show?",1441869594).cljs$core$IFn$_invoke$arity$1(modal);
var label = new cljs.core.Keyword("modal","label","modal/label",-1776753955).cljs$core$IFn$_invoke$arity$1(modal);
var close_fn = ((function (id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,vec__66268,idx,modal,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__){
return (function (){
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(id);
});})(id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,vec__66268,idx,modal,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__))
;
var modal_panel_content__$1 = (function (){var or__4253__auto__ = modal_panel_content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((function (or__4253__auto__,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,vec__66268,idx,modal,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__){
return (function (_close){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
;})(or__4253__auto__,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,vec__66268,idx,modal,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__))
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__modal.is-sub-modal","div.ui__modal.is-sub-modal",1533892698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(cljs.core.truth_(show_QMARK_)?((999) + idx):(-1))], null),new cljs.core.Keyword(null,"label","label",1718410804),label], null),(function (){var G__66278 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__66279 = ((function (G__66278,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,modal_panel_content__$1,vec__66268,idx,modal,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__){
return (function (state){
return frontend.ui.modal_overlay(state,close_fn);
});})(G__66278,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,modal_panel_content__$1,vec__66268,idx,modal,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__))
;
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__66278,G__66279) : frontend.ui.css_transition.call(null,G__66278,G__66279));
})(),(function (){var G__66281 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),show_QMARK_,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0)], null);
var G__66282 = ((function (G__66281,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,modal_panel_content__$1,vec__66268,idx,modal,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__){
return (function (state){
return frontend.ui.modal_panel(show_QMARK_,modal_panel_content__$1,state,close_fn,false,close_btn_QMARK_);
});})(G__66281,id,modal_panel_content,close_btn_QMARK_,show_QMARK_,label,close_fn,modal_panel_content__$1,vec__66268,idx,modal,s__66235__$2,temp__5720__auto____$1,modals,temp__5720__auto__))
;
return (frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.css_transition.cljs$core$IFn$_invoke$arity$2(G__66281,G__66282) : frontend.ui.css_transition.call(null,G__66281,G__66282));
})()], null);
})(),frontend$ui$iter__66234(cljs.core.rest(s__66235__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(modals));
} else {
return null;
}
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.ui/sub-modal");
frontend.ui.loading = (function frontend$ui$loading(content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.flex.items-center","span.icon.flex.items-center",-1264305839),frontend.components.svg.loading], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text.pl-2","span.text.pl-2",-2100749954),content], null)], null);
});
frontend.ui.rotating_arrow = rum.core.lazy_build(rum.core.build_defc,(function (collapsed_QMARK_){
return daiquiri.core.create_element("span",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(collapsed_QMARK_)?"rotating-arrow collapsed":"rotating-arrow not-collapsed")], null))},[frontend.components.svg.caret_right()]);
}),null,"frontend.ui/rotating-arrow");
frontend.ui.foldable = rum.core.lazy_build(rum.core.build_defcs,(function (state,header,content,p__66338){
var map__66340 = p__66338;
var map__66340__$1 = cljs.core.__destructure_map(map__66340);
var title_trigger_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66340__$1,new cljs.core.Keyword(null,"title-trigger?","title-trigger?",-613599873));
var control_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","control?","frontend.ui/control?",1642964409));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","collapsed?","frontend.ui/collapsed?",-772841586));
var on_mouse_down = (function (e){
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(collapsed_QMARK_,cljs.core.not);
});
return daiquiri.core.create_element("div",{'className':"flex flex-col"},[daiquiri.core.create_element("div",{'className':"content"},[(function (){var attrs66346 = (function (){var G__66363 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.reset_BANG_(control_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return cljs.core.reset_BANG_(control_QMARK_,false);
})], null);
if(cljs.core.truth_(title_trigger_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__66363,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"cursor"], 0));
} else {
return G__66363;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs66346))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1","flex-row","foldable-title"], null)], null),attrs66346], 0))):{'className':"flex-1 flex-row foldable-title"}),((cljs.core.map_QMARK_(attrs66346))?[(function (){var attrs66355 = (cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.block-control.opacity-50.hover:opacity-100.mr-2","a.block-control.opacity-50.hover:opacity-100.mr-2",-1668360838),(function (){var G__66366 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(14),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-30)], null)], null);
if(cljs.core.not(title_trigger_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66366,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down);
} else {
return G__66366;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.deref(control_QMARK_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.deref(collapsed_QMARK_);
}
})())?"control-show cursor-pointer":"control-hide")], null),frontend.ui.rotating_arrow(cljs.core.deref(collapsed_QMARK_))], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs66355))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center"], null)], null),attrs66355], 0))):{'className':"flex flex-row items-center"}),((cljs.core.map_QMARK_(attrs66355))?[((cljs.core.fn_QMARK_(header))?daiquiri.interpreter.interpret((function (){var G__66372 = cljs.core.deref(collapsed_QMARK_);
return (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(G__66372) : header.call(null,G__66372));
})()):daiquiri.interpreter.interpret(header))]:[daiquiri.interpreter.interpret(attrs66355),((cljs.core.fn_QMARK_(header))?daiquiri.interpreter.interpret((function (){var G__66375 = cljs.core.deref(collapsed_QMARK_);
return (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(G__66375) : header.call(null,G__66375));
})()):daiquiri.interpreter.interpret(header))]));
})()]:[daiquiri.interpreter.interpret(attrs66346),(function (){var attrs66361 = (cljs.core.truth_(frontend.mobile.util.is_native_platform_QMARK_())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.block-control.opacity-50.hover:opacity-100.mr-2","a.block-control.opacity-50.hover:opacity-100.mr-2",-1668360838),(function (){var G__66376 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(14),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-30)], null)], null);
if(cljs.core.not(title_trigger_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66376,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down);
} else {
return G__66376;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.deref(control_QMARK_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.deref(collapsed_QMARK_);
}
})())?"control-show cursor-pointer":"control-hide")], null),frontend.ui.rotating_arrow(cljs.core.deref(collapsed_QMARK_))], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs66361))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center"], null)], null),attrs66361], 0))):{'className':"flex flex-row items-center"}),((cljs.core.map_QMARK_(attrs66361))?[((cljs.core.fn_QMARK_(header))?daiquiri.interpreter.interpret((function (){var G__66379 = cljs.core.deref(collapsed_QMARK_);
return (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(G__66379) : header.call(null,G__66379));
})()):daiquiri.interpreter.interpret(header))]:[daiquiri.interpreter.interpret(attrs66361),((cljs.core.fn_QMARK_(header))?daiquiri.interpreter.interpret((function (){var G__66383 = cljs.core.deref(collapsed_QMARK_);
return (header.cljs$core$IFn$_invoke$arity$1 ? header.cljs$core$IFn$_invoke$arity$1(G__66383) : header.call(null,G__66383));
})()):daiquiri.interpreter.interpret(header))]));
})()]));
})()]),daiquiri.core.create_element("div",{'onMouseDown':(function (e){
return e.stopPropagation();
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref(collapsed_QMARK_))?"hidden":"initial")], null))},[((cljs.core.fn_QMARK_(content))?((cljs.core.not(cljs.core.deref(collapsed_QMARK_)))?daiquiri.interpreter.interpret((content.cljs$core$IFn$_invoke$arity$0 ? content.cljs$core$IFn$_invoke$arity$0() : content.call(null))):null):daiquiri.interpreter.interpret(content))])]);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.db_mixins.query,rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.ui","control?","frontend.ui/control?",1642964409)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.ui","collapsed?","frontend.ui/collapsed?",-772841586)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var args_66695 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
if(new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823).cljs$core$IFn$_invoke$arity$1(cljs.core.last(args_66695)) === true){
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","collapsed?","frontend.ui/collapsed?",-772841586)),true);
} else {
}

return state;
})], null)], null),"frontend.ui/foldable");
frontend.ui.admonition = (function frontend$ui$admonition(type,content){
var type__$1 = cljs.core.name(type);
var temp__5720__auto__ = (function (){var G__66384 = clojure.string.lower_case(type__$1);
switch (G__66384) {
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.admonitionblock.align-items","div.flex.flex-row.admonitionblock.align-items",-513234862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),type__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pr-4.admonition-icon.flex.flex-col.justify-center","div.pr-4.admonition-icon.flex.flex-col.justify-center",-1325303445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),clojure.string.upper_case(type__$1)], null),(icon.cljs$core$IFn$_invoke$arity$0 ? icon.cljs$core$IFn$_invoke$arity$0() : icon.call(null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-4.text-lg","div.ml-4.text-lg",525424974),content], null)], null);
} else {
return null;
}
});
frontend.ui.catch_error = rum.core.lazy_build(rum.core.build_defcs,(function (p__66387,error_view,view){
var map__66388 = p__66387;
var map__66388__$1 = cljs.core.__destructure_map(map__66388);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66388__$1,new cljs.core.Keyword("frontend.ui","error","frontend.ui/error",-2009366008));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66388__$1,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248));
if((!((error == null)))){
return daiquiri.interpreter.interpret(error_view);
} else {
return daiquiri.interpreter.interpret(view);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),(function (state,error,_info){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),718], null)),error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.ui","error","frontend.ui/error",-2009366008),error);
})], null)], null),"frontend.ui/catch-error");
frontend.ui.catch_error_and_notify = rum.core.lazy_build(rum.core.build_defcs,(function (p__66390,error_view,view){
var map__66391 = p__66390;
var map__66391__$1 = cljs.core.__destructure_map(map__66391);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66391__$1,new cljs.core.Keyword("frontend.ui","error","frontend.ui/error",-2009366008));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66391__$1,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248));
if((!((error == null)))){
return daiquiri.interpreter.interpret(error_view);
} else {
return daiquiri.interpreter.interpret(view);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),(function (state,error,_info){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),728], null)),error);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Error caught by UI!\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''),new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.ui","error","frontend.ui/error",-2009366008),error);
})], null)], null),"frontend.ui/catch-error-and-notify");
/**
 * Well styled error message for blocks
 */
frontend.ui.block_error = rum.core.lazy_build(rum.core.build_defc,(function (title,p__66395){
var map__66397 = p__66395;
var map__66397__$1 = cljs.core.__destructure_map(map__66397);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66397__$1,new cljs.core.Keyword(null,"content","content",15833224));
var section_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66397__$1,new cljs.core.Keyword(null,"section-attrs","section-attrs",1373816150));
var attrs66392 = section_attrs;
return daiquiri.core.create_element("section",((cljs.core.map_QMARK_(attrs66392))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","mt-1","p-1","cursor-pointer","block-content-fallback-ui"], null)], null),attrs66392], 0))):{'className':"border mt-1 p-1 cursor-pointer block-content-fallback-ui"}),((cljs.core.map_QMARK_(attrs66392))?[daiquiri.core.create_element("div",{'className':"flex justify-between items-center px-1"},[(function (){var attrs66399 = title;
return daiquiri.core.create_element("h5",((cljs.core.map_QMARK_(attrs66399))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-red-600","pb-1"], null)], null),attrs66399], 0))):{'className':"text-red-600 pb-1"}),((cljs.core.map_QMARK_(attrs66399))?null:[daiquiri.interpreter.interpret(attrs66399)]));
})(),daiquiri.core.create_element("a",{'href':"https://github.com/logseq/logseq/issues/new?labels=from:in-app&template=bug_report.yaml",'target':"_blank",'className':"text-xs opacity-50 hover:opacity-80"},["report issue"])]),(cljs.core.truth_(content)?(function (){var attrs66393 = content;
return daiquiri.core.create_element("pre",((cljs.core.map_QMARK_(attrs66393))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m-0","text-sm"], null)], null),attrs66393], 0))):{'className':"m-0 text-sm"}),((cljs.core.map_QMARK_(attrs66393))?null:[daiquiri.interpreter.interpret(attrs66393)]));
})():null)]:[daiquiri.interpreter.interpret(attrs66392),daiquiri.core.create_element("div",{'className':"flex justify-between items-center px-1"},[(function (){var attrs66404 = title;
return daiquiri.core.create_element("h5",((cljs.core.map_QMARK_(attrs66404))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-red-600","pb-1"], null)], null),attrs66404], 0))):{'className':"text-red-600 pb-1"}),((cljs.core.map_QMARK_(attrs66404))?null:[daiquiri.interpreter.interpret(attrs66404)]));
})(),daiquiri.core.create_element("a",{'href':"https://github.com/logseq/logseq/issues/new?labels=from:in-app&template=bug_report.yaml",'target':"_blank",'className':"text-xs opacity-50 hover:opacity-80"},["report issue"])]),(cljs.core.truth_(content)?(function (){var attrs66394 = content;
return daiquiri.core.create_element("pre",((cljs.core.map_QMARK_(attrs66394))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m-0","text-sm"], null)], null),attrs66394], 0))):{'className':"m-0 text-sm"}),((cljs.core.map_QMARK_(attrs66394))?null:[daiquiri.interpreter.interpret(attrs66394)]));
})():null)]));
}),null,"frontend.ui/block-error");
/**
 * Well styled error message for higher level components. Currently same as
 *   block-error but this could change
 */
frontend.ui.component_error = frontend.ui.block_error;
frontend.ui.select = rum.core.lazy_build(rum.core.build_defc,(function (options,on_change,class$){
return daiquiri.core.create_element("select",{'style':{'padding':"0 0 0 6px"},'onChange':rum.core.mark_sync_update((function (e){
var value = frontend.util.evalue(e);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
})),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1","block","text-base","leading-6","border-gray-300","focus:outline-none","focus:shadow-outline-blue","focus:border-blue-300","sm:text-sm","sm:leading-5","ml-1","sm:ml-4","w-12","sm:w-20",(function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "form-select";
}
})()], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$ui$iter__66410(s__66411){
return (new cljs.core.LazySeq(null,(function (){
var s__66411__$1 = s__66411;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__66411__$1);
if(temp__5720__auto__){
var s__66411__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66411__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__66411__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__66413 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__66412 = (0);
while(true){
if((i__66412 < size__4651__auto__)){
var map__66414 = cljs.core._nth(c__4650__auto__,i__66412);
var map__66414__$1 = cljs.core.__destructure_map(map__66414);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66414__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66414__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66414__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
cljs.core.chunk_append(b__66413,(function (){var attrs66409 = (function (){var G__66415 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"default-value","default-value",232220170),(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return label;
}
})()], null);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66415,new cljs.core.Keyword(null,"selected","selected",574897764),selected);
} else {
return G__66415;
}
})();
return daiquiri.core.create_element("option",((cljs.core.map_QMARK_(attrs66409))?daiquiri.interpreter.element_attributes(attrs66409):null),((cljs.core.map_QMARK_(attrs66409))?[daiquiri.interpreter.interpret(label)]:[daiquiri.interpreter.interpret(attrs66409),daiquiri.interpreter.interpret(label)]));
})());

var G__66719 = (i__66412 + (1));
i__66412 = G__66719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66413),frontend$ui$iter__66410(cljs.core.chunk_rest(s__66411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66413),null);
}
} else {
var map__66416 = cljs.core.first(s__66411__$2);
var map__66416__$1 = cljs.core.__destructure_map(map__66416);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66416__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66416__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66416__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.cons((function (){var attrs66409 = (function (){var G__66417 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),label,new cljs.core.Keyword(null,"default-value","default-value",232220170),(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return label;
}
})()], null);
if(cljs.core.truth_(selected)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66417,new cljs.core.Keyword(null,"selected","selected",574897764),selected);
} else {
return G__66417;
}
})();
return daiquiri.core.create_element("option",((cljs.core.map_QMARK_(attrs66409))?daiquiri.interpreter.element_attributes(attrs66409):null),((cljs.core.map_QMARK_(attrs66409))?[daiquiri.interpreter.interpret(label)]:[daiquiri.interpreter.interpret(attrs66409),daiquiri.interpreter.interpret(label)]));
})(),frontend$ui$iter__66410(cljs.core.rest(s__66411__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(options);
})())]);
}),null,"frontend.ui/select");
frontend.ui.radio_list = rum.core.lazy_build(rum.core.build_defc,(function (options,on_change,class$){
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__radio-list",class$], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$ui$iter__66419(s__66420){
return (new cljs.core.LazySeq(null,(function (){
var s__66420__$1 = s__66420;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__66420__$1);
if(temp__5720__auto__){
var s__66420__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66420__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__66420__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__66422 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__66421 = (0);
while(true){
if((i__66421 < size__4651__auto__)){
var map__66423 = cljs.core._nth(c__4650__auto__,i__66421);
var map__66423__$1 = cljs.core.__destructure_map(map__66423);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66423__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66423__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66423__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
cljs.core.chunk_append(b__66422,daiquiri.core.create_element("label",{'key':["radio-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('')},[daiquiri.core.create_element("input",{'value':value,'type':"radio",'onChange':rum.core.mark_sync_update(((function (i__66421,map__66423,map__66423__$1,label,value,selected,c__4650__auto__,size__4651__auto__,b__66422,s__66420__$2,temp__5720__auto__){
return (function (p1__66418_SHARP_){
var G__66424 = frontend.util.evalue(p1__66418_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__66424) : on_change.call(null,G__66424));
});})(i__66421,map__66423,map__66423__$1,label,value,selected,c__4650__auto__,size__4651__auto__,b__66422,s__66420__$2,temp__5720__auto__))
),'checked':selected,'className':"form-radio"},[]),daiquiri.interpreter.interpret(label)]));

var G__66733 = (i__66421 + (1));
i__66421 = G__66733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66422),frontend$ui$iter__66419(cljs.core.chunk_rest(s__66420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66422),null);
}
} else {
var map__66425 = cljs.core.first(s__66420__$2);
var map__66425__$1 = cljs.core.__destructure_map(map__66425);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66425__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66425__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66425__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.cons(daiquiri.core.create_element("label",{'key':["radio-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('')},[daiquiri.core.create_element("input",{'value':value,'type':"radio",'onChange':rum.core.mark_sync_update(((function (map__66425,map__66425__$1,label,value,selected,s__66420__$2,temp__5720__auto__){
return (function (p1__66418_SHARP_){
var G__66426 = frontend.util.evalue(p1__66418_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__66426) : on_change.call(null,G__66426));
});})(map__66425,map__66425__$1,label,value,selected,s__66420__$2,temp__5720__auto__))
),'checked':selected,'className':"form-radio"},[]),daiquiri.interpreter.interpret(label)]),frontend$ui$iter__66419(cljs.core.rest(s__66420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(options);
})())]);
}),null,"frontend.ui/radio-list");
frontend.ui.checkbox_list = rum.core.lazy_build(rum.core.build_defc,(function (options,on_change,class$){
var checked_vals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected","selected",574897764),options)));
var on_item_change = (function (e){
var target = e.target;
var checked_QMARK_ = target.checked;
var value = target.value;
var G__66427 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(checked_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(checked_vals,value):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(checked_vals,value)));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__66427) : on_change.call(null,G__66427));
});
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui__checkbox-list",class$], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$ui$iter__66428(s__66429){
return (new cljs.core.LazySeq(null,(function (){
var s__66429__$1 = s__66429;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__66429__$1);
if(temp__5720__auto__){
var s__66429__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66429__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__66429__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__66431 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__66430 = (0);
while(true){
if((i__66430 < size__4651__auto__)){
var map__66435 = cljs.core._nth(c__4650__auto__,i__66430);
var map__66435__$1 = cljs.core.__destructure_map(map__66435);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66435__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66435__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66435__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
cljs.core.chunk_append(b__66431,daiquiri.core.create_element("label",{'key':["check-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('')},[daiquiri.core.create_element("input",{'value':value,'type':"checkbox",'onChange':rum.core.mark_sync_update(on_item_change),'checked':selected,'className':"form-checkbox"},[]),daiquiri.interpreter.interpret(label)]));

var G__66737 = (i__66430 + (1));
i__66430 = G__66737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66431),frontend$ui$iter__66428(cljs.core.chunk_rest(s__66429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66431),null);
}
} else {
var map__66443 = cljs.core.first(s__66429__$2);
var map__66443__$1 = cljs.core.__destructure_map(map__66443);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66443__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66443__$1,new cljs.core.Keyword(null,"value","value",305978217));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66443__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
return cljs.core.cons(daiquiri.core.create_element("label",{'key':["check-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('')},[daiquiri.core.create_element("input",{'value':value,'type':"checkbox",'onChange':rum.core.mark_sync_update(on_item_change),'checked':selected,'className':"form-checkbox"},[]),daiquiri.interpreter.interpret(label)]),frontend$ui$iter__66428(cljs.core.rest(s__66429__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(options);
})())]);
}),null,"frontend.ui/checkbox-list");
frontend.ui.tippy = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__66448,child){
var map__66449 = p__66448;
var map__66449__$1 = cljs.core.__destructure_map(map__66449);
var opts = map__66449__$1;
var fixed_position_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66449__$1,new cljs.core.Keyword(null,"fixed-position?","fixed-position?",-918460562));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66449__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var _STAR_mounted_QMARK_ = new cljs.core.Keyword("frontend.ui","mounted?","frontend.ui/mounted?",-515662152).cljs$core$IFn$_invoke$arity$1(state);
var mounted_QMARK_ = cljs.core.deref(_STAR_mounted_QMARK_);
var manual = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,null);
return daiquiri.interpreter.interpret((function (){var G__66456 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"unmountHTMLWhenHide","unmountHTMLWhenHide",234758660),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"onShow","onShow",-897525328),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"trigger","trigger",103466139),new cljs.core.Keyword(null,"onHide","onHide",-394246948),new cljs.core.Keyword(null,"delay","delay",-574225219)],[((manual)?open_QMARK_:cljs.core.deref(_STAR_mounted_QMARK_)),true,true,cljs.core.not(frontend.state.enable_tooltip_QMARK_()),"customized",(function (){
return cljs.core.reset_BANG_(_STAR_mounted_QMARK_,true);
}),(cljs.core.truth_(fixed_position_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flip","flip",2033871302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),new cljs.core.Keyword(null,"preventOverflow","preventOverflow",276572465),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null)], null):cljs.core.PersistentArrayMap.EMPTY),true,((manual)?"manual":"mouseenter focus"),(function (){
return cljs.core.reset_BANG_(_STAR_mounted_QMARK_,false);
}),(600)]),opts], 0)),new cljs.core.Keyword(null,"html","html",-998796897),(cljs.core.truth_((function (){var or__4253__auto__ = open_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return mounted_QMARK_;
}
})())?(function (){try{var temp__5720__auto__ = new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var html = temp__5720__auto__;
if(cljs.core.fn_QMARK_(html)){
return (html.cljs$core$IFn$_invoke$arity$0 ? html.cljs$core$IFn$_invoke$arity$0() : html.call(null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-2.py-1","div.px-2.py-1",220629592),html], null);
}
} else {
return null;
}
}catch (e66459){if((e66459 instanceof Error)){
var e = e66459;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.ui",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),e,new cljs.core.Keyword(null,"line","line",212345235),848], null)),e);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
} else {
throw e66459;

}
}})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"tippy"], null),""], null)));
var G__66457 = React.createElement(React.Fragment,{'key':"tippy-children"},daiquiri.interpreter.interpret(child));
return (frontend.ui.Tippy.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.Tippy.cljs$core$IFn$_invoke$arity$2(G__66456,G__66457) : frontend.ui.Tippy.call(null,G__66456,G__66457));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.ui","mounted?","frontend.ui/mounted?",-515662152))], null),"frontend.ui/tippy");
frontend.ui.slider = (function frontend$ui$slider(default_value,p__66461){
var map__66462 = p__66461;
var map__66462__$1 = cljs.core.__destructure_map(map__66462);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66462__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66462__$1,new cljs.core.Keyword(null,"max","max",61366548));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66462__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.cursor-pointer","input.cursor-pointer",-632859928),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),(default_value | (0)),new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__66460_SHARP_){
var value = frontend.util.evalue(p1__66460_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
})], null)], null);
});
frontend.ui.tweet_embed = rum.core.lazy_build(rum.core.build_defcs,(function (state,id){
var _STAR_loading_QMARK_ = new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",null,[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref(_STAR_loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.svg.loading," ... loading"], null)], null):null),(function (){var G__66464 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),"contents",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)),"dark"))?"dark":null)], null),new cljs.core.Keyword(null,"on-tweet-load-success","on-tweet-load-success",1698437749),(function (){
return cljs.core.reset_BANG_(_STAR_loading_QMARK_,false);
})], null);
return (frontend.ui.ReactTweetEmbed.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.ReactTweetEmbed.cljs$core$IFn$_invoke$arity$1(G__66464) : frontend.ui.ReactTweetEmbed.call(null,G__66464));
})()], null))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(true,new cljs.core.Keyword(null,"loading?","loading?",1905707049))], null),"frontend.ui/tweet-embed");
frontend.ui.icon = (function frontend$ui$icon(var_args){
var G__66471 = arguments.length;
switch (G__66471) {
case 1:
return frontend.ui.icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.ui.icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return frontend.ui.icon.cljs$core$IFn$_invoke$arity$2(class$,null);
}));

(frontend.ui.icon.cljs$core$IFn$_invoke$arity$2 = (function (class$,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["ti ti-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts))?[" ",clojure.string.trim(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts))].join(''):null)].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null);
}));

(frontend.ui.icon.cljs$lang$maxFixedArity = 2);

frontend.ui.with_shortcut = rum.core.lazy_build(rum.core.build_defc,(function (shortcut_key,position,content){
var tooltip_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086));
if(cljs.core.truth_(tooltip_QMARK_)){
return frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.font-medium","div.text-sm.font-medium",-120265550),frontend.ui.keyboard_shortcut_from_config(shortcut_key)], null),new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"theme","theme",-1247880880),"monospace",new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null),new cljs.core.Keyword(null,"arrow","arrow",1071351425),true], null),content);
} else {
return daiquiri.interpreter.interpret(content);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.ui/with-shortcut");
frontend.ui.progress_bar = rum.core.lazy_build(rum.core.build_defc,(function (width){
if(cljs.core.truth_(cljs.core.integer_QMARK_)){
} else {
throw (new Error("Assert failed: integer?"));
}

if(cljs.core.truth_(width)){
} else {
throw (new Error("Assert failed: width"));
}

return daiquiri.core.create_element("div",{'className':"w-full bg-indigo-200 rounded-full h-2 5"},[daiquiri.core.create_element("div",{'style':{'width':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"%"].join('')},'transition':"width 1s",'className':"bg-indigo-600 h-2 5 rounded-full"},[])]);
}),null,"frontend.ui/progress-bar");
frontend.ui.progress_bar_with_label = rum.core.lazy_build(rum.core.build_defc,(function (width,label_left,label_right){
if(cljs.core.truth_(cljs.core.integer_QMARK_)){
} else {
throw (new Error("Assert failed: integer?"));
}

if(cljs.core.truth_(width)){
} else {
throw (new Error("Assert failed: width"));
}

return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"flex justify-between mb-1"},[(function (){var attrs66485 = label_left;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs66485))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-base"], null)], null),attrs66485], 0))):{'className':"text-base"}),((cljs.core.map_QMARK_(attrs66485))?null:[daiquiri.interpreter.interpret(attrs66485)]));
})(),(function (){var attrs66486 = label_right;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs66486))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","font-medium"], null)], null),attrs66486], 0))):{'className':"text-sm font-medium"}),((cljs.core.map_QMARK_(attrs66486))?null:[daiquiri.interpreter.interpret(attrs66486)]));
})()]),frontend.ui.progress_bar(width)]);
}),null,"frontend.ui/progress-bar-with-label");
frontend.ui.lazy_visible_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,visible_QMARK_,content_fn,_reset_height_QMARK_){
return daiquiri.core.create_element("div",{'ref':(function (p1__66490_SHARP_){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.ui","ref","frontend.ui/ref",-122429065).cljs$core$IFn$_invoke$arity$1(state),p1__66490_SHARP_);
}),'style':{'minHeight':cljs.core.deref(new cljs.core.Keyword("frontend.ui","height","frontend.ui/height",-529489906).cljs$core$IFn$_invoke$arity$1(state))},'className':"lazy-visibility"},[(cljs.core.truth_(visible_QMARK_)?((cljs.core.fn_QMARK_(content_fn))?daiquiri.interpreter.interpret((content_fn.cljs$core$IFn$_invoke$arity$0 ? content_fn.cljs$core$IFn$_invoke$arity$0() : content_fn.call(null))):null):daiquiri.core.create_element("div",{'style':{'height':(64)},'className':"shadow rounded-md p-4 w-full mx-auto"},[daiquiri.core.create_element("div",{'className':"animate-pulse flex space-x-4"},[daiquiri.core.create_element("div",{'className':"flex-1 space-y-3 py-1"},[daiquiri.core.create_element("div",{'className':"h-2 bg-base-4 rounded"},null),daiquiri.core.create_element("div",{'className':"space-y-3"},[daiquiri.core.create_element("div",{'className':"grid grid-cols-3 gap-4"},[daiquiri.core.create_element("div",{'className':"h-2 bg-base-4 rounded col-span-2"},null),daiquiri.core.create_element("div",{'className':"h-2 bg-base-4 rounded col-span-1"},null)]),daiquiri.core.create_element("div",{'className':"h-2 bg-base-4 rounded"},null)])])])]))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("frontend.ui","ref","frontend.ui/ref",-122429065),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.ui","height","frontend.ui/height",-529489906),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((26))], 0));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
if(cljs.core.truth_(cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))){
var observer_66782 = (new ResizeObserver((function (entries){
var entry = cljs.core.first(entries);
var _STAR_height = new cljs.core.Keyword("frontend.ui","height","frontend.ui/height",-529489906).cljs$core$IFn$_invoke$arity$1(state);
var height_SINGLEQUOTE_ = entry.contentRect.height;
if((((height_SINGLEQUOTE_ > cljs.core.deref(_STAR_height))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(height_SINGLEQUOTE_,(64))))){
return cljs.core.reset_BANG_(_STAR_height,height_SINGLEQUOTE_);
} else {
return null;
}
})));
observer_66782.observe(cljs.core.deref(new cljs.core.Keyword("frontend.ui","ref","frontend.ui/ref",-122429065).cljs$core$IFn$_invoke$arity$1(state)));
} else {
}

return state;
})], null)], null),"frontend.ui/lazy-visible-inner");
frontend.ui.lazy_visible = rum.core.lazy_build(rum.core.build_defcs,(function (state,content_fn,sensor_opts,reset_height_QMARK_){
if(cljs.core.truth_((function (){var or__4253__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return frontend.mobile.util.is_native_platform_QMARK_();
}
})())){
return daiquiri.interpreter.interpret((content_fn.cljs$core$IFn$_invoke$arity$0 ? content_fn.cljs$core$IFn$_invoke$arity$0() : content_fn.call(null)));
} else {
var _STAR_visible_QMARK_ = new cljs.core.Keyword("frontend.ui","visible?","frontend.ui/visible?",-171325485).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.interpreter.interpret((function (){var G__66502 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__66497_SHARP_){
return cljs.core.reset_BANG_(_STAR_visible_QMARK_,p1__66497_SHARP_);
}),new cljs.core.Keyword(null,"partialVisibility","partialVisibility",983514442),true,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(-300),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(-300)], null),new cljs.core.Keyword(null,"scrollCheck","scrollCheck",-1553641214),true,new cljs.core.Keyword(null,"scrollThrottle","scrollThrottle",2040751329),(1)], null),sensor_opts], 0));
var G__66503 = frontend.ui.lazy_visible_inner(cljs.core.deref(_STAR_visible_QMARK_),content_fn,reset_height_QMARK_);
return (frontend.ui.visibility_sensor.cljs$core$IFn$_invoke$arity$2 ? frontend.ui.visibility_sensor.cljs$core$IFn$_invoke$arity$2(G__66502,G__66503) : frontend.ui.visibility_sensor.call(null,G__66502,G__66503));
})());
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.ui","visible?","frontend.ui/visible?",-171325485))], null),"frontend.ui/lazy-visible");

//# sourceMappingURL=frontend.ui.js.map
