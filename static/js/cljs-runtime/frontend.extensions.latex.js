goog.provide('frontend.extensions.latex');
frontend.extensions.latex.loaded_QMARK_ = (function frontend$extensions$latex$loaded_QMARK_(){
return window.katex;
});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.latex !== 'undefined') && (typeof frontend.extensions.latex._STAR_loading_QMARK_ !== 'undefined')){
} else {
frontend.extensions.latex._STAR_loading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.extensions.latex.render_BANG_ = (function frontend$extensions$latex$render_BANG_(state){
var vec__66664 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66664,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66664,(1),null);
var display_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66664,(2),null);
try{return katex.render(s,goog.dom.getElement(id),({"displayMode": display_QMARK_, "throwOnError": false, "strict": false}));
}catch (e66668){if((e66668 instanceof Error)){
var e = e66668;
return console.error(e);
} else {
throw e66668;

}
}});
frontend.extensions.latex.load_and_render_BANG_ = (function frontend$extensions$latex$load_and_render_BANG_(state){
if(cljs.core.truth_(frontend.extensions.latex.loaded_QMARK_())){
cljs.core.reset_BANG_(frontend.extensions.latex._STAR_loading_QMARK_,false);

return frontend.extensions.latex.render_BANG_(state);
} else {
if(cljs.core.truth_(cljs.core.deref(frontend.extensions.latex._STAR_loading_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(frontend.extensions.latex._STAR_loading_QMARK_,true);

return frontend.loader.load.cljs$core$IFn$_invoke$arity$3(frontend.config.asset_uri("/static/js/katex.min.js"),(function (){
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2(frontend.config.asset_uri("/static/js/mhchem.min.js"),(function (){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.all((function (){var temp__5720__auto__ = (function (){var and__4251__auto__ = frontend.handler.plugin.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.seq(frontend.handler.plugin.hook_extensions_enhancer_by_type(new cljs.core.Keyword(null,"katex","katex",648363779)));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var enhancers = temp__5720__auto__;
var iter__4652__auto__ = (function frontend$extensions$latex$load_and_render_BANG__$_iter__66676(s__66677){
return (new cljs.core.LazySeq(null,(function (){
var s__66677__$1 = s__66677;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__66677__$1);
if(temp__5720__auto____$1){
var s__66677__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__66677__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__66677__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__66679 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__66678 = (0);
while(true){
if((i__66678 < size__4651__auto__)){
var map__66684 = cljs.core._nth(c__4650__auto__,i__66678);
var map__66684__$1 = cljs.core.__destructure_map(map__66684);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66684__$1,new cljs.core.Keyword(null,"enhancer","enhancer",-929020171));
cljs.core.chunk_append(b__66679,((cljs.core.fn_QMARK_(f))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(window.katex) : f.call(null,window.katex)):null));

var G__66712 = (i__66678 + (1));
i__66678 = G__66712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66679),frontend$extensions$latex$load_and_render_BANG__$_iter__66676(cljs.core.chunk_rest(s__66677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66679),null);
}
} else {
var map__66689 = cljs.core.first(s__66677__$2);
var map__66689__$1 = cljs.core.__destructure_map(map__66689);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66689__$1,new cljs.core.Keyword(null,"enhancer","enhancer",-929020171));
return cljs.core.cons(((cljs.core.fn_QMARK_(f))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(window.katex) : f.call(null,window.katex)):null),frontend$extensions$latex$load_and_render_BANG__$_iter__66676(cljs.core.rest(s__66677__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(enhancers);
} else {
return null;
}
})()),(function (){
cljs.core.reset_BANG_(frontend.extensions.latex._STAR_loading_QMARK_,false);

return frontend.extensions.latex.render_BANG_(state);
}));
}));
}),state);
}
}
});
frontend.extensions.latex.state__AMPERSAND__load_and_render_BANG_ = (function frontend$extensions$latex$state__AMPERSAND__load_and_render_BANG_(state){
setTimeout((function (){
return frontend.extensions.latex.load_and_render_BANG_(state);
}),(10));

return state;
});
frontend.extensions.latex.latex = rum.core.lazy_build(rum.core.build_defc,(function (id,s,block_QMARK_,_display_QMARK_){
var loading_QMARK_ = rum.core.react(frontend.extensions.latex._STAR_loading_QMARK_);
if(cljs.core.truth_(loading_QMARK_)){
return daiquiri.interpreter.interpret(frontend.ui.loading("Loading"));
} else {
var element = (cljs.core.truth_(block_QMARK_)?new cljs.core.Keyword(null,"div.latex","div.latex",1964645203):new cljs.core.Keyword(null,"span.latex-inline","span.latex-inline",2007517054));
return daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),"initial"], null),(function (){var attrs66702 = s;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs66702))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opacity-0"], null)], null),attrs66702], 0))):{'className':"opacity-0"}),((cljs.core.map_QMARK_(attrs66702))?null:[daiquiri.interpreter.interpret(attrs66702)]));
})()], null));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),frontend.extensions.latex.state__AMPERSAND__load_and_render_BANG_,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),frontend.extensions.latex.state__AMPERSAND__load_and_render_BANG_], null)], null),"frontend.extensions.latex/latex");
frontend.extensions.latex.html_export = (function frontend$extensions$latex$html_export(s,block_QMARK_,display_QMARK_){
var element = (cljs.core.truth_(block_QMARK_)?new cljs.core.Keyword(null,"div.latex","div.latex",1964645203):new cljs.core.Keyword(null,"span.latex-inline","span.latex-inline",2007517054));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,(cljs.core.truth_((function (){var or__4253__auto__ = block_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return display_QMARK_;
}
})())?frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("$$%s$$",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)):frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("$%s$",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0)))], null);
});

//# sourceMappingURL=frontend.extensions.latex.js.map
