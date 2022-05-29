goog.provide('frontend.components.plugins');
frontend.components.plugins.installed_themes = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var _STAR_cursor = new cljs.core.Keyword("frontend.components.plugins","cursor","frontend.components.plugins/cursor",-841365704).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_themes = new cljs.core.Keyword("frontend.components.plugins","themes","frontend.components.plugins/themes",607722898).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",{'tabIndex':(-1),'className':"cp__themes-installed"},[(function (){var attrs58325 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"themes","themes",-702786642)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs58325))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mb-4","text-2xl","p-1"], null)], null),attrs58325], 0))):{'className':"mb-4 text-2xl p-1"}),((cljs.core.map_QMARK_(attrs58325))?null:[daiquiri.interpreter.interpret(attrs58325)]));
})(),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
var current_selected_QMARK_ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(opt);
var group_first_QMARK_ = new cljs.core.Keyword(null,"group-first","group-first",1023924108).cljs$core$IFn$_invoke$arity$1(opt);
var plg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(opt)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opt))].join('')], null),(cljs.core.truth_((function (){var and__5041__auto__ = group_first_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0));
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.flex.px-3.py-1.5.rounded-sm.justify-between","div.it.flex.px-3.py-1.5.rounded-sm.justify-between",1407568914),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-selected","is-selected",-334199992),current_selected_QMARK_,new cljs.core.Keyword(null,"is-active","is-active",-1424968720),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.deref(_STAR_cursor))], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
LSPluginCore.selectTheme(cljs_bean.core.__GT_js(opt));

return frontend.state.close_modal_BANG_();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.text-xs","div.flex.items-center.text-xs",505827359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-60","div.opacity-60",-1650446509),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plg);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "Logseq";
}
})())," \u2022"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name.ml-1","div.name.ml-1",1330505409),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opt)], null)], null),(cljs.core.truth_((function (){var or__5043__auto__ = group_first_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return current_selected_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),(cljs.core.truth_(group_first_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-60","small.opacity-60",1913667792),new cljs.core.Keyword(null,"group-desc","group-desc",-883642045).cljs$core$IFn$_invoke$arity$1(opt)], null):null),(cljs.core.truth_(current_selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.inline-flex.ml-1.opacity-60","small.inline-flex.ml-1.opacity-60",1954839558),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("check")], null):null)], null):null)], null)], null);
}),cljs.core.deref(_STAR_themes)))]);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("frontend.components.plugins","themes","frontend.components.plugins/themes",607722898)),rum.core.local.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword("frontend.components.plugins","cursor","frontend.components.plugins/cursor",-841365704)),rum.core.local.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword("frontend.components.plugins","total","frontend.components.plugins/total",1120620758)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var _STAR_themes = new cljs.core.Keyword("frontend.components.plugins","themes","frontend.components.plugins/themes",607722898).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_cursor = new cljs.core.Keyword("frontend.components.plugins","cursor","frontend.components.plugins/cursor",-841365704).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_total = new cljs.core.Keyword("frontend.components.plugins","total","frontend.components.plugins/total",1120620758).cljs$core$IFn$_invoke$arity$1(state);
var mode = frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
var all_themes = frontend.state.sub(new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197));
var themes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__58319_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__58319_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58318_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p1__58318_SHARP_),mode);
}),all_themes));
var no_mode_themes = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opt,new cljs.core.Keyword(null,"group-first","group-first",1023924108),(idx === (0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"group-desc","group-desc",-883642045),(((idx === (0)))?"light & dark themes":null)], 0));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__58321_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__58321_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58320_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p1__58320_SHARP_),null);
}),all_themes)));
var selected = frontend.state.sub(new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220));
var themes__$1 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(opt),selected);
if(selected_QMARK_){
cljs.core.reset_BANG_(_STAR_cursor,(idx + (1)));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opt,new cljs.core.Keyword(null,"mode","mode",654403691),mode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),selected_QMARK_], 0));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(themes,no_mode_themes));
var themes__$2 = cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Default",clojure.string.capitalize(mode),"Theme"], null)),new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"description","description",-1428560544),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Logseq default",mode,"theme."], null)),new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"selected","selected",574897764),(selected == null),new cljs.core.Keyword(null,"group-first","group-first",1023924108),true,new cljs.core.Keyword(null,"group-desc","group-desc",-883642045),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)," themes"].join('')], null),themes__$1);
cljs.core.reset_BANG_(_STAR_themes,themes__$2);

cljs.core.reset_BANG_(_STAR_total,cljs.core.count(themes__$2));

return state;
})], null),frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
var _STAR_cursor = new cljs.core.Keyword("frontend.components.plugins","cursor","frontend.components.plugins/cursor",-841365704).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_total = new cljs.core.Keyword("frontend.components.plugins","total","frontend.components.plugins/total",1120620758).cljs$core$IFn$_invoke$arity$1(state);
var target = rum.core.dom_node(state);
target.focus();

return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 3, [(38),(function (_e){
return cljs.core.reset_BANG_(_STAR_cursor,(((cljs.core.deref(_STAR_cursor) === (0)))?(cljs.core.deref(_STAR_total) - (1)):(cljs.core.deref(_STAR_cursor) - (1))));
}),(40),(function (_e){
return cljs.core.reset_BANG_(_STAR_cursor,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cursor),(cljs.core.deref(_STAR_total) - (1))))?(0):(cljs.core.deref(_STAR_cursor) + (1))));
}),(13),(function (){
var temp__5720__auto__ = target.querySelector(".is-active");
if(cljs.core.truth_(temp__5720__auto__)){
var active = temp__5720__auto__;
return active.click();
} else {
return null;
}
})], null));
}))], null),"frontend.components.plugins/installed-themes");
frontend.components.plugins.unpacked_plugin_loader = rum.core.lazy_build(rum.core.build_defc,(function (unpacked_pkg_path){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var err_handle = (function (e){
var G__58435_58869 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((e["name"]));
var G__58435_58870__$1 = (((G__58435_58869 instanceof cljs.core.Keyword))?G__58435_58869.fqn:null);
switch (G__58435_58870__$1) {
case "IllegalPluginPackageError":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Illegal Logseq plugin package.",new cljs.core.Keyword(null,"error","error",-978969032));

break;
case "ExistedImportedPluginPackageError":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Existed Imported plugin package.",new cljs.core.Keyword(null,"error","error",-978969032));

break;
default:

}

return frontend.handler.plugin.reset_unpacked_state();
});
var reg_handle = (function (){
return frontend.handler.plugin.reset_unpacked_state();
});
if(cljs.core.truth_(unpacked_pkg_path)){
var G__58439_58872 = LSPluginCore;
G__58439_58872.once("error",err_handle);

G__58439_58872.once("registered",reg_handle);

G__58439_58872.register(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),unpacked_pkg_path], null)));

} else {
}

return (function (){
var G__58443 = LSPluginCore;
G__58443.off("error",err_handle);

G__58443.off("registered",reg_handle);

return G__58443;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unpacked_pkg_path], null));

if(cljs.core.truth_(unpacked_pkg_path)){
return daiquiri.core.create_element("strong",{'className':"inline-flex px-3"},["Loading ..."]);
} else {
return null;
}
}),null,"frontend.components.plugins/unpacked-plugin-loader");
frontend.components.plugins.category_tabs = rum.core.lazy_build(rum.core.build_defc,(function (t,category,on_action){
var attrs58461 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("puzzle"),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plugins","plugins",1900073717)) : t.call(null,new cljs.core.Keyword(null,"plugins","plugins",1900073717)))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_action.cljs$core$IFn$_invoke$arity$1 ? on_action.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plugins","plugins",1900073717)) : on_action.call(null,new cljs.core.Keyword(null,"plugins","plugins",1900073717)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"plugins","plugins",1900073717)))?"active":"")], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58461))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["secondary-tabs","categories"], null)], null),attrs58461], 0))):{'className':"secondary-tabs categories"}),((cljs.core.map_QMARK_(attrs58461))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("palette"),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642)) : t.call(null,new cljs.core.Keyword(null,"themes","themes",-702786642)))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_action.cljs$core$IFn$_invoke$arity$1 ? on_action.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642)) : on_action.call(null,new cljs.core.Keyword(null,"themes","themes",-702786642)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"themes","themes",-702786642)))?"active":"")], 0)))]:[daiquiri.interpreter.interpret(attrs58461),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("palette"),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642)) : t.call(null,new cljs.core.Keyword(null,"themes","themes",-702786642)))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_action.cljs$core$IFn$_invoke$arity$1 ? on_action.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642)) : on_action.call(null,new cljs.core.Keyword(null,"themes","themes",-702786642)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"themes","themes",-702786642)))?"active":"")], 0)))]));
}),null,"frontend.components.plugins/category-tabs");
frontend.components.plugins.local_markdown_display = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__58471 = frontend.state.sub(new cljs.core.Keyword("plugin","active-readme","plugin/active-readme",-677043988));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58471,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58471,(1),null);
return daiquiri.core.create_element("div",{'onClick':(function (e){
var temp__5720__auto__ = e.target;
if(cljs.core.truth_(temp__5720__auto__)){
var target = temp__5720__auto__;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(target.nodeName),"a")) && ((!(clojure.string.blank_QMARK_(target.getAttribute("href"))))))){
apis.openExternal(target.getAttribute("href"));

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
}),'className':"cp__plugins-details"},[daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"repository","repository",1489835364).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
var temp__5720__auto____$1 = ((typeof repo === 'string')?repo:new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo));
if(cljs.core.truth_(temp__5720__auto____$1)){
var repo__$1 = temp__5720__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.rounded-md.bg-base-3","div.p-4.rounded-md.bg-base-3",1387249382),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),repo__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),frontend.components.svg.github.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(25),new cljs.core.Keyword(null,"height","height",1025178622),(25)], null))], null),repo__$1], null)], null)], null);
} else {
return null;
}
} else {
return null;
}
})()),daiquiri.core.create_element("div",{'style':{'minHeight':"60vw",'maxWidth':(900)},'dangerouslySetInnerHTML':{'__html':content},'className':"p-1 bg-transparent border-none ls-block"},[])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.plugins/local-markdown-display");
frontend.components.plugins.remote_readme_display = rum.core.lazy_build(rum.core.build_defc,(function (repo,_content){
var src = ["lsp://logseq.com/marketplace.html?repo=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)].join('');
return daiquiri.core.create_element("iframe",{'src':src,'className':"lsp-frame-readme"},[]);
}),null,"frontend.components.plugins/remote-readme-display");
frontend.components.plugins.security_warning = (function frontend$components$plugins$security_warning(){
return frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-4xl","div.max-w-4xl",-367160273),"Plugins can access your graph and your local files, issue network requests.\n      They can also cause data corruption or loss. We're working on proper access rules for your graphs.\n      Meanwhile, make sure you have regular backups of your graphs and only install the plugins when you can read and\n      understand the source code."], null));
});
frontend.components.plugins.card_ctls_of_market = rum.core.lazy_build(rum.core.build_defc,(function (item,stat,installed_QMARK_,installing_or_updating_QMARK_){
return daiquiri.core.create_element("div",{'className':"ctl"},[daiquiri.core.create_element("ul",{'className':"l flex items-center"},[(function (){var attrs58500 = frontend.components.svg.star.cljs$core$IFn$_invoke$arity$1((16));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs58500))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","text-sm","items-center","pr-3"], null)], null),attrs58500], 0))):{'className':"flex text-sm items-center pr-3"}),((cljs.core.map_QMARK_(attrs58500))?[(function (){var attrs58501 = new cljs.core.Keyword(null,"stargazers_count","stargazers_count",-984649909).cljs$core$IFn$_invoke$arity$1(stat);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58501))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs58501], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs58501))?null:[daiquiri.interpreter.interpret(attrs58501)]));
})()]:[daiquiri.interpreter.interpret(attrs58500),(function (){var attrs58503 = new cljs.core.Keyword(null,"stargazers_count","stargazers_count",-984649909).cljs$core$IFn$_invoke$arity$1(stat);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58503))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs58503], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs58503))?null:[daiquiri.interpreter.interpret(attrs58503)]));
})()]));
})(),daiquiri.interpreter.interpret((function (){var temp__5720__auto__ = (function (){var and__5041__auto__ = stat;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"total_downloads","total_downloads",-1370933259).cljs$core$IFn$_invoke$arity$1(stat);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var downloads = temp__5720__auto__;
if(cljs.core.truth_((function (){var and__5041__auto__ = downloads;
if(cljs.core.truth_(and__5041__auto__)){
return (downloads > (0));
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.text-sm.items-center.pr-3","li.flex.text-sm.items-center.pr-3",1837860767),frontend.components.svg.cloud_down.cljs$core$IFn$_invoke$arity$1((16)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1","span.pl-1",-1236384439),downloads], null)], null);
} else {
return null;
}
} else {
return null;
}
})())]),daiquiri.core.create_element("div",{'className':"r flex items-center"},[daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.plugin.install_marketplace_plugin(item);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5043__auto__ = installed_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return installing_or_updating_QMARK_;
}
})(),new cljs.core.Keyword(null,"installing","installing",506071602),installing_or_updating_QMARK_], null)], null))], null))},[(cljs.core.truth_(installed_QMARK_)?daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0))):(cljs.core.truth_(installing_or_updating_QMARK_)?daiquiri.core.create_element("span",{'className':"flex items-center"},[(function (){var attrs58507 = frontend.components.svg.loading;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs58507))?daiquiri.interpreter.element_attributes(attrs58507):null),((cljs.core.map_QMARK_(attrs58507))?null:[daiquiri.interpreter.interpret(attrs58507)]));
})(),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581)], 0)))]):daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","install","plugin/install",-432957003)], 0)))))])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/card-ctls-of-market");
frontend.components.plugins.card_ctls_of_installed = rum.core.lazy_build(rum.core.build_defc,(function (id,name,url,sponsors,unpacked_QMARK_,disabled_QMARK_,installing_or_updating_QMARK_,has_other_pending_QMARK_,new_version,item){
return daiquiri.core.create_element("div",{'className':"ctl"},[daiquiri.core.create_element("div",{'className':"l"},[daiquiri.core.create_element("div",{'className':"de"},[(function (){var attrs58522 = frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("settings");
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58522))?daiquiri.interpreter.element_attributes(attrs58522):null),((cljs.core.map_QMARK_(attrs58522))?null:[daiquiri.interpreter.interpret(attrs58522)]));
})(),daiquiri.core.create_element("ul",{'className':"menu-list"},[daiquiri.core.create_element("li",{'onClick':(function (){
return frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$2(id,false);
})},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-settings","plugin/open-settings",755186792)], 0)))]),daiquiri.core.create_element("li",{'onClick':(function (){
return apis.openPath(url);
})},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-package","plugin/open-package",-735283330)], 0)))]),daiquiri.core.create_element("li",{'onClick':(function (){
var confirm_fn = frontend.ui.make_confirm_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","delete-alert","plugin/delete-alert",918910734),name], 0)),new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),(function (_,p__58523){
var map__58524 = p__58523;
var map__58524__$1 = cljs.core.__destructure_map(map__58524);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58524__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

return frontend.handler.plugin.unregister_plugin(id);
})], null));
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2(confirm_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
})},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","uninstall","plugin/uninstall",233071235)], 0)))])])]),((cljs.core.seq(sponsors))?daiquiri.core.create_element("div",{'className':"de sponsors"},[(function (){var attrs58525 = frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("coffee");
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58525))?daiquiri.interpreter.element_attributes(attrs58525):null),((cljs.core.map_QMARK_(attrs58525))?null:[daiquiri.interpreter.interpret(attrs58525)]));
})(),daiquiri.core.create_element("ul",{'className':"menu-list"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__58527(s__58528){
return (new cljs.core.LazySeq(null,(function (){
var s__58528__$1 = s__58528;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58528__$1);
if(temp__5720__auto__){
var s__58528__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58528__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58528__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58530 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58529 = (0);
while(true){
if((i__58529 < size__5519__auto__)){
var link = cljs.core._nth(c__5518__auto__,i__58529);
cljs.core.chunk_append(b__58530,daiquiri.core.create_element("li",null,[daiquiri.core.create_element("a",{'href':link,'target':"_blank"},[(function (){var attrs58536 = link;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58536))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs58536], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs58536))?[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("external-link"))]:[daiquiri.interpreter.interpret(attrs58536),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("external-link"))]));
})()])]));

var G__58873 = (i__58529 + (1));
i__58529 = G__58873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58530),frontend$components$plugins$iter__58527(cljs.core.chunk_rest(s__58528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58530),null);
}
} else {
var link = cljs.core.first(s__58528__$2);
return cljs.core.cons(daiquiri.core.create_element("li",null,[daiquiri.core.create_element("a",{'href':link,'target':"_blank"},[(function (){var attrs58536 = link;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58536))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs58536], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs58536))?[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("external-link"))]:[daiquiri.interpreter.interpret(attrs58536),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("external-link"))]));
})()])]),frontend$components$plugins$iter__58527(cljs.core.rest(s__58528__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(sponsors);
})())])]):null)]),(function (){var attrs58521 = (cljs.core.truth_((function (){var and__5041__auto__ = unpacked_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(LSPluginCore,"reload",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","reload","plugin/reload",-389898430)], 0))], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58521))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r","flex","items-center"], null)], null),attrs58521], 0))):{'className':"r flex items-center"}),((cljs.core.map_QMARK_(attrs58521))?[((cljs.core.not(unpacked_QMARK_))?daiquiri.core.create_element("div",{'className':"updates-actions"},[daiquiri.core.create_element("a",{'onClick':(function (){
if(cljs.core.truth_(has_other_pending_QMARK_)){
return null;
} else {
return frontend.handler.plugin.check_or_update_marketplace_plugin(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),cljs.core.not(new_version)),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));
}));
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),installing_or_updating_QMARK_], null)], null))], null))},[(cljs.core.truth_(installing_or_updating_QMARK_)?daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updating","plugin/updating",1642276684)], 0))):(cljs.core.truth_(new_version)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update","plugin/update",2040056703)], 0)))," \uD83D\uDC49 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_version)].join(''):daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","check-update","plugin/check-update",1581546124)], 0)))))])]):null),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(cljs.core.not(disabled_QMARK_),(function (){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(LSPluginCore,(cljs.core.truth_(disabled_QMARK_)?"enable":"disable"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}),true))]:[daiquiri.interpreter.interpret(attrs58521),((cljs.core.not(unpacked_QMARK_))?daiquiri.core.create_element("div",{'className':"updates-actions"},[daiquiri.core.create_element("a",{'onClick':(function (){
if(cljs.core.truth_(has_other_pending_QMARK_)){
return null;
} else {
return frontend.handler.plugin.check_or_update_marketplace_plugin(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),cljs.core.not(new_version)),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));
}));
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),installing_or_updating_QMARK_], null)], null))], null))},[(cljs.core.truth_(installing_or_updating_QMARK_)?daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updating","plugin/updating",1642276684)], 0))):(cljs.core.truth_(new_version)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update","plugin/update",2040056703)], 0)))," \uD83D\uDC49 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_version)].join(''):daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","check-update","plugin/check-update",1581546124)], 0)))))])]):null),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(cljs.core.not(disabled_QMARK_),(function (){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(LSPluginCore,(cljs.core.truth_(disabled_QMARK_)?"enable":"disable"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}),true))]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/card-ctls-of-installed");
frontend.components.plugins.plugin_item_card = rum.core.lazy_build(rum.core.build_defc,(function (t,p__58565,disabled_QMARK_,market_QMARK_,_STAR_search_key,has_other_pending_QMARK_,installing_or_updating_QMARK_,installed_QMARK_,stat,coming_update){
var map__58566 = p__58565;
var map__58566__$1 = cljs.core.__destructure_map(map__58566);
var item = map__58566__$1;
var sponsors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"sponsors","sponsors",-2122570439));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"version","version",425292698));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"title","title",636505583));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var iir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"iir","iir",-231680811));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58566__$1,new cljs.core.Keyword(null,"url","url",276297046));
var name__$1 = (function (){var or__5043__auto__ = title;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = name;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "Untitled";
}
}
})();
var unpacked_QMARK_ = cljs.core.not(iir);
var new_version = frontend.state.coming_update_new_version_QMARK_(coming_update);
return daiquiri.core.create_element("div",{'key':["lsp-card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__plugins-item-card",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"market","market",-1425134471),market_QMARK_,new cljs.core.Keyword(null,"installed","installed",553977691),installed_QMARK_,new cljs.core.Keyword(null,"updating","updating",1454028951),installing_or_updating_QMARK_,new cljs.core.Keyword(null,"has-new-version","has-new-version",1406719631),new_version], null)], null))], null))},[daiquiri.core.create_element("div",{'onClick':(function (){
return frontend.handler.plugin.open_readme_BANG_(url,item,(cljs.core.truth_(repo)?frontend.components.plugins.remote_readme_display:frontend.components.plugins.local_markdown_display));
}),'className':"l link-block"},[(cljs.core.truth_((function (){var and__5041__auto__ = icon;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(icon)));
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("img",{'src':(cljs.core.truth_(market_QMARK_)?frontend.handler.plugin.pkg_asset(id,icon):icon),'className':"icon"},[]):daiquiri.interpreter.interpret(frontend.components.svg.folder)),((((cljs.core.not(market_QMARK_)) && (unpacked_QMARK_)))?(function (){var attrs58568 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)) : t.call(null,new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58568))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-center","text-xs","text-red-500","pt-2"], null)], null),attrs58568], 0))):{'className':"flex justify-center text-xs text-red-500 pt-2"}),((cljs.core.map_QMARK_(attrs58568))?null:[daiquiri.interpreter.interpret(attrs58568)]));
})():null)]),daiquiri.core.create_element("div",{'className':"r"},[daiquiri.core.create_element("h3",{'className':"head text-xl font-bold pt-1 5"},[(function (){var attrs58573 = name__$1;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58573))?daiquiri.interpreter.element_attributes(attrs58573):null),((cljs.core.map_QMARK_(attrs58573))?null:[daiquiri.interpreter.interpret(attrs58573)]));
})(),((cljs.core.not(market_QMARK_))?(function (){var attrs58574 = version;
return daiquiri.core.create_element("sup",((cljs.core.map_QMARK_(attrs58574))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inline-block","px-1","text-xs","opacity-50"], null)], null),attrs58574], 0))):{'className':"inline-block px-1 text-xs opacity-50"}),((cljs.core.map_QMARK_(attrs58574))?null:[daiquiri.interpreter.interpret(attrs58574)]));
})():null)]),daiquiri.core.create_element("div",{'className':"desc text-xs opacity-70"},[(function (){var attrs58601 = description;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs58601))?daiquiri.interpreter.element_attributes(attrs58601):null),((cljs.core.map_QMARK_(attrs58601))?null:[daiquiri.interpreter.interpret(attrs58601)]));
})()]),daiquiri.core.create_element("div",{'className':"flag"},[daiquiri.core.create_element("p",{'className':"text-xs pr-2 flex justify-between"},[daiquiri.core.create_element("small",{'onClick':(function (){
var temp__5720__auto__ = document.querySelector(".cp__plugins-page .search-ctls input");
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
cljs.core.reset_BANG_(_STAR_search_key,["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(author)].join(''));

return el.select();
} else {
return null;
}
})},[daiquiri.interpreter.interpret(author)]),daiquiri.core.create_element("small",{'onClick':(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Copied!",new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.util.copy_to_clipboard_BANG_.cljs$core$IFn$_invoke$arity$1(id);
})},[["ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')])])]),(function (){var attrs58572 = (cljs.core.truth_(repo)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex","a.flex",-995526906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),frontend.handler.plugin.gh_repo_url(repo)], null),frontend.components.svg.github.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null))], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58572))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flag","is-top","opacity-50"], null)], null),attrs58572], 0))):{'className':"flag is-top opacity-50"}),((cljs.core.map_QMARK_(attrs58572))?null:[daiquiri.interpreter.interpret(attrs58572)]));
})(),(cljs.core.truth_(market_QMARK_)?frontend.components.plugins.card_ctls_of_market(item,stat,installed_QMARK_,installing_or_updating_QMARK_):frontend.components.plugins.card_ctls_of_installed(id,name__$1,url,sponsors,unpacked_QMARK_,disabled_QMARK_,installing_or_updating_QMARK_,has_other_pending_QMARK_,new_version,item))])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/plugin-item-card");
frontend.components.plugins.panel_tab_search = rum.core.lazy_build(rum.core.build_defc,(function (search_key,_STAR_search_key,_STAR_search_ref){
return daiquiri.core.create_element("div",{'className':"search-ctls"},[(function (){var attrs58644 = frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("search");
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs58644))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["absolute","s1"], null)], null),attrs58644], 0))):{'className':"absolute s1"}),((cljs.core.map_QMARK_(attrs58644))?null:[daiquiri.interpreter.interpret(attrs58644)]));
})(),((clojure.string.blank_QMARK_(search_key))?null:daiquiri.core.create_element("small",{'onClick':(function (){
var temp__5720__auto__ = rum.core.deref(_STAR_search_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var target = temp__5720__auto__;
cljs.core.reset_BANG_(_STAR_search_key,null);

return target.focus();
} else {
return null;
}
}),'className':"absolute s2"},[daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("x"))])),daiquiri.core.create_element("input",{'placeholder':"Search plugins",'ref':_STAR_search_ref,'autoFocus':true,'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
frontend.util.stop(e);

if(clojure.string.blank_QMARK_(search_key)){
var G__58656 = document.querySelector(".cp__plugins-page");
if((G__58656 == null)){
return null;
} else {
return G__58656.focus();
}
} else {
return cljs.core.reset_BANG_(_STAR_search_key,null);
}
} else {
return null;
}
}),'onChange':rum.core.mark_sync_update((function (p1__58641_SHARP_){
var target = p1__58641_SHARP_.target;
return cljs.core.reset_BANG_(_STAR_search_key,frontend.util.trim_safe(target.value));
})),'value':(function (){var or__5043__auto__ = search_key;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),'className':"form-input is-small"},[])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/panel-tab-search");
frontend.components.plugins.panel_tab_developer = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","contribute","plugin/contribute",1070040335)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/marketplace",new cljs.core.Keyword(null,"class","class",-2030961996),"contribute",new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], 0)));
}),null,"frontend.components.plugins/panel-tab-developer");
frontend.components.plugins.user_proxy_settings_panel = rum.core.lazy_build(rum.core.build_defc,(function (p__58661){
var map__58662 = p__58661;
var map__58662__$1 = cljs.core.__destructure_map(map__58662);
var agent_opts = map__58662__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58662__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var vec__58663 = rum.core.use_state(agent_opts);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58663,(0),null);
var set_opts_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58663,(1),null);
var vec__58666 = rum.core.use_state(false);
var testing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58666,(0),null);
var set_testing_QMARK__BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58666,(1),null);
var _STAR_test_input = rum.core.create_ref();
var disabled_QMARK_ = clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(opts));
return daiquiri.core.create_element("div",{'className':"cp__settings-network-proxy-panel"},[(function (){var attrs58669 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","network-proxy","settings-page/network-proxy",-895413144)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs58669))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mb-2","text-2xl","font-bold"], null)], null),attrs58669], 0))):{'className':"mb-2 text-2xl font-bold"}),((cljs.core.map_QMARK_(attrs58669))?null:[daiquiri.interpreter.interpret(attrs58669)]));
})(),daiquiri.core.create_element("div",{'className':"p-2"},[daiquiri.core.create_element("p",null,[daiquiri.core.create_element("label",null,[(function (){var attrs58675 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348)], 0));
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58675))?daiquiri.interpreter.element_attributes(attrs58675):null),((cljs.core.map_QMARK_(attrs58675))?null:[daiquiri.interpreter.interpret(attrs58675)]));
})(),frontend.ui.select(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Disabled",new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"selected","selected",574897764),disabled_QMARK_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"http",new cljs.core.Keyword(null,"value","value",305978217),"http",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"http")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"https",new cljs.core.Keyword(null,"value","value",305978217),"https",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"socks5",new cljs.core.Keyword(null,"value","value",305978217),"socks5",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"socks5")], null)], null),(function (p1__58657_SHARP_){
var G__58677 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"protocol","protocol",652470118),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("disabled",frontend.util.safe_lower_case(p1__58657_SHARP_)))?null:p1__58657_SHARP_));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__58677) : set_opts_BANG_.call(null,G__58677));
}),null)])]),daiquiri.core.create_element("p",{'className':"flex"},[daiquiri.core.create_element("label",{'className':"pr-4"},[(function (){var attrs58678 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"host","host",-1558485167)], 0));
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58678))?daiquiri.interpreter.element_attributes(attrs58678):null),((cljs.core.map_QMARK_(attrs58678))?null:[daiquiri.interpreter.interpret(attrs58678)]));
})(),daiquiri.core.create_element("input",{'value':new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts),'disabled':disabled_QMARK_,'onChange':rum.core.mark_sync_update((function (p1__58658_SHARP_){
var G__58679 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"host","host",-1558485167),frontend.util.trim_safe(frontend.util.evalue(p1__58658_SHARP_)));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__58679) : set_opts_BANG_.call(null,G__58679));
})),'className':"form-input is-small"},[])]),daiquiri.core.create_element("label",null,[(function (){var attrs58680 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"port","port",1534937262)], 0));
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58680))?daiquiri.interpreter.element_attributes(attrs58680):null),((cljs.core.map_QMARK_(attrs58680))?null:[daiquiri.interpreter.interpret(attrs58680)]));
})(),daiquiri.core.create_element("input",{'value':new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(opts),'type':"number",'disabled':disabled_QMARK_,'onChange':rum.core.mark_sync_update((function (p1__58659_SHARP_){
var G__58683 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"port","port",1534937262),frontend.util.trim_safe(frontend.util.evalue(p1__58659_SHARP_)));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__58683) : set_opts_BANG_.call(null,G__58683));
})),'className':"form-input is-small"},[])])]),daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("p",{'className':"flex items-center space-x-2"},[daiquiri.core.create_element("span",{'className':"w-60"},[daiquiri.core.create_element("input",{'ref':_STAR_test_input,'placeholder':"http://",'onChange':rum.core.mark_sync_update((function (p1__58660_SHARP_){
var G__58684 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"test","test",577538877),frontend.util.trim_safe(frontend.util.evalue(p1__58660_SHARP_)));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__58684) : set_opts_BANG_.call(null,G__58684));
})),'value':new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(opts),'className':"form-input is-small"},[])]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(testing_QMARK_)?frontend.ui.loading("Testing"):"Test URL"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"large?","large?",1460879088),false,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 15px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var val = frontend.util.trim_safe(rum.core.deref(_STAR_test_input).value);
if(((cljs.core.not(testing_QMARK_)) && ((!(clojure.string.blank_QMARK_(val)))))){
(set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_testing_QMARK__BANG_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"setHttpsAgent","setHttpsAgent",1817420724),opts], 0)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"testProxyUrl","testProxyUrl",-814931268),val], 0)),(function (___$1){
return promesa.protocols._promise(null);
}));
}));
})),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"error","error",-978969032));
})),(function (){
return (set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_testing_QMARK__BANG_.call(null,false));
}));
} else {
return null;
}
})], 0)))]),(function (){var attrs58674 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save","save",1850079149)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"setHttpsAgent","setHttpsAgent",1817420724),opts], 0)),(function (_){
return promesa.protocols._promise((function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null),opts);

return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"https-proxy-panel","https-proxy-panel",-1589308406));
})()
);
}));
}));
})], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs58674))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-2"], null)], null),attrs58674], 0))):{'className':"pt-2"}),((cljs.core.map_QMARK_(attrs58674))?null:[daiquiri.interpreter.interpret(attrs58674)]));
})()])]);
}),null,"frontend.components.plugins/user-proxy-settings-panel");
frontend.components.plugins.panel_control_tabs = rum.core.lazy_build(rum.core.build_defc,(function (search_key,_STAR_search_key,category,_STAR_category,sort_by,_STAR_sort_by,filter_by,_STAR_filter_by,selected_unpacked_pkg,market_QMARK_,develop_mode_QMARK_,reload_market_fn,agent_opts){
var _STAR_search_ref = rum.core.create_ref();
return daiquiri.core.create_element("div",{'className':"mb-2 flex justify-between control-tabs relative"},[daiquiri.core.create_element("div",{'className':"flex items-center l"},[frontend.components.plugins.category_tabs(frontend.context.i18n.t,category,(function (p1__58693_SHARP_){
return cljs.core.reset_BANG_(_STAR_category,p1__58693_SHARP_);
})),(cljs.core.truth_((function (){var and__5041__auto__ = develop_mode_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(market_QMARK_);
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("div",null,[frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","unpacked-tips","plugin/unpacked-tips",-460131094)], 0))], null),new cljs.core.Keyword(null,"arrow","arrow",1071351425),true], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("upload"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","load-unpacked","plugin/load-unpacked",507641009)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"class","class",-2030961996),"load-unpacked",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.plugin.load_unpacked_plugin], 0))),frontend.components.plugins.unpacked_plugin_loader(selected_unpacked_pkg)]):null)]),(function (){var attrs58704 = (function (){var map__58718 = agent_opts;
var map__58718__$1 = cljs.core.__destructure_map(map__58718);
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword(null,"port","port",1534937262));
if(cljs.core.every_QMARK_(cljs.core.not_empty,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [protocol,host,port], null))){
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.text-indigo-500","span.flex.items-center.text-indigo-500",1098756579),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("world-download"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('')], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),agent_opts], null));
})], 0));
} else {
return null;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58704))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","r"], null)], null),attrs58704], 0))):{'className':"flex items-center r"}),((cljs.core.map_QMARK_(attrs58704))?[frontend.components.plugins.panel_tab_search(search_key,_STAR_search_key,_STAR_search_ref),(function (){var aim_icon = (function (p1__58694_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_by,p1__58694_SHARP_)){
return "check";
} else {
return "circle";
}
});
return frontend.ui.dropdown_with_links((function (p__58728){
var map__58729 = p__58728;
var map__58729__$1 = cljs.core.__destructure_map(map__58729);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58729__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("filter")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),filter_by))?null:"picked "),"sort-or-filter-by"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"intent","intent",-390846953),"link"], 0));
}),(cljs.core.truth_(market_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all","plugin/all",-235519199)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"installed","installed",553977691));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"installed","installed",553977691)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","not-installed","plugin/not-installed",177167620)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"not-installed","not-installed",1160178735));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"not-installed","not-installed",1160178735)))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all","plugin/all",-235519199)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"enabled","enabled",1195909756)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disabled","plugin/disabled",-644208599)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"disabled","disabled",-1529784218)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"unpacked","unpacked",828895838));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"unpacked","unpacked",828895838)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update-available","plugin/update-available",-1277547790)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"update-available","update-available",-283010019));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"update-available","update-available",-283010019)))], null)], null)),null);
})(),(cljs.core.truth_(market_QMARK_)?frontend.ui.dropdown_with_links((function (p__58736){
var map__58737 = p__58736;
var map__58737__$1 = cljs.core.__destructure_map(map__58737);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("arrows-sort")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"downloads","downloads",-513600190),null,new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),sort_by))?null:"picked "),"sort-or-filter-by"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"intent","intent",-390846953),"link"], 0));
}),(function (){var aim_icon = (function (p1__58695_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_by,p1__58695_SHARP_)){
return "check";
} else {
return "circle";
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","downloads","plugin/downloads",622437555)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"downloads","downloads",-513600190));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"downloads","downloads",-513600190)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","stars","plugin/stars",-1508522616)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"stars","stars",-556837771));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"stars","stars",-556837771)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","title","plugin/title",1789469082)], 0)))," (A - Z)"].join(''),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"letters","letters",2098125298));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"letters","letters",2098125298)))], null)], null);
})(),cljs.core.PersistentArrayMap.EMPTY):null),frontend.ui.dropdown_with_links((function (p__58749){
var map__58750 = p__58749;
var map__58750__$1 = cljs.core.__destructure_map(map__58750);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58750__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("dots-vertical")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"more-do",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"intent","intent",-390846953),"link"], 0));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(market_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("rotate-clockwise"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","refresh-lists","plugin/refresh-lists",-968393268)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (reload_market_fn.cljs$core$IFn$_invoke$arity$0 ? reload_market_fn.cljs$core$IFn$_invoke$arity$0() : reload_market_fn.call(null));
})], null)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("rotate-clockwise"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","check-all-updates","plugin/check-all-updates",1407600189)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.check_enabled_for_updates(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugins","plugins",1900073717),category));
})], null)], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("world"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","network-proxy","settings-page/network-proxy",-895413144)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),agent_opts], null));
})], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(frontend.state.developer_mode_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("file-code"),"Open Preferences"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.protocols._promise(apis.openPath([cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),"/preferences.json"].join('')));
}));
}));
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("bug"),"Open ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)," ~/.logseq"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.protocols._promise(apis.openPath(root));
}));
}));
})], null)], null)], null):null)], 0)),cljs.core.PersistentArrayMap.EMPTY),frontend.components.plugins.panel_tab_developer()]:[daiquiri.interpreter.interpret(attrs58704),frontend.components.plugins.panel_tab_search(search_key,_STAR_search_key,_STAR_search_ref),(function (){var aim_icon = (function (p1__58694_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_by,p1__58694_SHARP_)){
return "check";
} else {
return "circle";
}
});
return frontend.ui.dropdown_with_links((function (p__58757){
var map__58758 = p__58757;
var map__58758__$1 = cljs.core.__destructure_map(map__58758);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58758__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("filter")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),filter_by))?null:"picked "),"sort-or-filter-by"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"intent","intent",-390846953),"link"], 0));
}),(cljs.core.truth_(market_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all","plugin/all",-235519199)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"installed","installed",553977691));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"installed","installed",553977691)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","not-installed","plugin/not-installed",177167620)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"not-installed","not-installed",1160178735));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"not-installed","not-installed",1160178735)))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all","plugin/all",-235519199)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"enabled","enabled",1195909756)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disabled","plugin/disabled",-644208599)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"disabled","disabled",-1529784218)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"unpacked","unpacked",828895838));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"unpacked","unpacked",828895838)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update-available","plugin/update-available",-1277547790)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"update-available","update-available",-283010019));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"update-available","update-available",-283010019)))], null)], null)),null);
})(),(cljs.core.truth_(market_QMARK_)?frontend.ui.dropdown_with_links((function (p__58761){
var map__58762 = p__58761;
var map__58762__$1 = cljs.core.__destructure_map(map__58762);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("arrows-sort")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"downloads","downloads",-513600190),null,new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),sort_by))?null:"picked "),"sort-or-filter-by"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"intent","intent",-390846953),"link"], 0));
}),(function (){var aim_icon = (function (p1__58695_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_by,p1__58695_SHARP_)){
return "check";
} else {
return "circle";
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","downloads","plugin/downloads",622437555)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"downloads","downloads",-513600190));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"downloads","downloads",-513600190)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","stars","plugin/stars",-1508522616)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"stars","stars",-556837771));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"stars","stars",-556837771)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","title","plugin/title",1789469082)], 0)))," (A - Z)"].join(''),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"letters","letters",2098125298));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(aim_icon(new cljs.core.Keyword(null,"letters","letters",2098125298)))], null)], null);
})(),cljs.core.PersistentArrayMap.EMPTY):null),frontend.ui.dropdown_with_links((function (p__58765){
var map__58766 = p__58765;
var map__58766__$1 = cljs.core.__destructure_map(map__58766);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58766__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("dots-vertical")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"more-do",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"intent","intent",-390846953),"link"], 0));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(market_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("rotate-clockwise"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","refresh-lists","plugin/refresh-lists",-968393268)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (reload_market_fn.cljs$core$IFn$_invoke$arity$0 ? reload_market_fn.cljs$core$IFn$_invoke$arity$0() : reload_market_fn.call(null));
})], null)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("rotate-clockwise"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","check-all-updates","plugin/check-all-updates",1407600189)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.check_enabled_for_updates(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugins","plugins",1900073717),category));
})], null)], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("world"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","network-proxy","settings-page/network-proxy",-895413144)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),agent_opts], null));
})], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(frontend.state.developer_mode_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("file-code"),"Open Preferences"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.protocols._promise(apis.openPath([cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),"/preferences.json"].join('')));
}));
}));
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("bug"),"Open ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)," ~/.logseq"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.protocols._promise(apis.openPath(root));
}));
}));
})], null)], null)], null):null)], 0)),cljs.core.PersistentArrayMap.EMPTY),frontend.components.plugins.panel_tab_developer()]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/panel-control-tabs");
frontend.components.plugins.marketplace_plugins = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var pkgs = frontend.state.sub(new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798));
var stats = frontend.state.sub(new cljs.core.Keyword("plugin","marketplace-stats","plugin/marketplace-stats",1801405730));
var installed_plugins = frontend.state.sub(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034));
var installing = frontend.state.sub(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581));
var online_QMARK_ = frontend.state.sub(new cljs.core.Keyword("network","online?","network/online?",1306822774));
var develop_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878));
var agent_opts = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
var _STAR_search_key = new cljs.core.Keyword("frontend.components.plugins","search-key","frontend.components.plugins/search-key",1754546424).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_category = new cljs.core.Keyword("frontend.components.plugins","category","frontend.components.plugins/category",1292709236).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_sort_by = new cljs.core.Keyword("frontend.components.plugins","sort-by","frontend.components.plugins/sort-by",1336057821).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_filter_by = new cljs.core.Keyword("frontend.components.plugins","filter-by","frontend.components.plugins/filter-by",-1578178539).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_fetching = new cljs.core.Keyword("frontend.components.plugins","fetching","frontend.components.plugins/fetching",-330343025).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_error = new cljs.core.Keyword("frontend.components.plugins","error","frontend.components.plugins/error",1422088124).cljs$core$IFn$_invoke$arity$1(state);
var filtered_pkgs = ((cljs.core.seq(pkgs))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_category),new cljs.core.Keyword(null,"themes","themes",-702786642)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58768_SHARP_){
return new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__58768_SHARP_);
}),pkgs):cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58769_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__58769_SHARP_));
}),pkgs)):null);
var filtered_pkgs__$1 = ((((cljs.core.seq(filtered_pkgs)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(_STAR_filter_by)))))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58770_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"installed","installed",553977691),cljs.core.deref(_STAR_filter_by)))?cljs.core.identity:cljs.core.not),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.contains_QMARK_(installed_plugins,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58770_SHARP_)))], null));
}),filtered_pkgs):filtered_pkgs);
var filtered_pkgs__$2 = (((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_search_key)))))?(function (){var temp__5718__auto__ = (function (){var and__5041__auto__ = clojure.string.starts_with_QMARK_(cljs.core.deref(_STAR_search_key),"@");
if(and__5041__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_search_key),(1));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var author = temp__5718__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58771_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(author,new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(p1__58771_SHARP_));
}),filtered_pkgs__$1);
} else {
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(filtered_pkgs__$1,cljs.core.deref(_STAR_search_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),(30),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"title","title",636505583)], 0));
}
})():filtered_pkgs__$1);
var filtered_pkgs__$3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58772_SHARP_){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stats,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58772_SHARP_)));
if(cljs.core.truth_(temp__5718__auto__)){
var stat = temp__5718__auto__;
var downloads = new cljs.core.Keyword(null,"total_downloads","total_downloads",-1370933259).cljs$core$IFn$_invoke$arity$1(stat);
var stars = new cljs.core.Keyword(null,"stargazers_count","stargazers_count",-984649909).cljs$core$IFn$_invoke$arity$1(stat);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__58772_SHARP_,new cljs.core.Keyword(null,"stat","stat",-1370599836),stat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stars","stars",-556837771),stars,new cljs.core.Keyword(null,"downloads","downloads",-513600190),downloads], 0));
} else {
return p1__58772_SHARP_;
}
}),filtered_pkgs__$2);
var sorted_pkgs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__58784 = cljs.core.deref(_STAR_sort_by);
var G__58784__$1 = (((G__58784 instanceof cljs.core.Keyword))?G__58784.fqn:null);
switch (G__58784__$1) {
case "letters":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__58773_SHARP_){
return frontend.util.safe_lower_case((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__58773_SHARP_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__58773_SHARP_);
}
})());
})], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_STAR_sort_by),(function (p1__58775_SHARP_,p2__58774_SHARP_){
return cljs.core.compare(p2__58774_SHARP_,p1__58775_SHARP_);
})], null);

}
})(),filtered_pkgs__$3));
return daiquiri.core.create_element("div",{'className':"cp__plugins-marketplace"},[frontend.components.plugins.panel_control_tabs(cljs.core.deref(_STAR_search_key),_STAR_search_key,cljs.core.deref(_STAR_category),_STAR_category,cljs.core.deref(_STAR_sort_by),_STAR_sort_by,cljs.core.deref(_STAR_filter_by),_STAR_filter_by,null,true,develop_mode_QMARK_,new cljs.core.Keyword("frontend.components.plugins","reload","frontend.components.plugins/reload",-1021433549).cljs$core$IFn$_invoke$arity$1(state),agent_opts),((cljs.core.not(online_QMARK_))?(function (){var attrs58785 = frontend.components.svg.offline.cljs$core$IFn$_invoke$arity$1((30));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs58785))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-center","pt-20","opacity-50"], null)], null),attrs58785], 0))):{'className':"flex justify-center pt-20 opacity-50"}),((cljs.core.map_QMARK_(attrs58785))?null:[daiquiri.interpreter.interpret(attrs58785)]));
})():(cljs.core.truth_(cljs.core.deref(_STAR_fetching))?(function (){var attrs58786 = frontend.components.svg.loading;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs58786))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-center","pt-20"], null)], null),attrs58786], 0))):{'className':"flex justify-center pt-20"}),((cljs.core.map_QMARK_(attrs58786))?null:[daiquiri.interpreter.interpret(attrs58786)]));
})():(cljs.core.truth_(cljs.core.deref(_STAR_error))?daiquiri.core.create_element("p",{'className':"flex justify-center pt-20 opacity-50"},["Remote error: ",daiquiri.interpreter.interpret(cljs.core.deref(_STAR_error).message)]):daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__plugins-marketplace-cnt",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-installing","has-installing",853601088),cljs.core.boolean$(installing)], null)], null))], null))},[daiquiri.core.create_element("div",{'className':"cp__plugins-item-lists grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__58787(s__58788){
return (new cljs.core.LazySeq(null,(function (){
var s__58788__$1 = s__58788;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58788__$1);
if(temp__5720__auto__){
var s__58788__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58788__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58788__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58790 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58789 = (0);
while(true){
if((i__58789 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__58789);
cljs.core.chunk_append(b__58790,rum.core.with_key((function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
var stat = new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(item);
return frontend.components.plugins.plugin_item_card(frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),true,_STAR_search_key,installing,(function (){var and__5041__auto__ = installing;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(installing)),pid);
} else {
return and__5041__auto__;
}
})(),cljs.core.contains_QMARK_(installed_plugins,pid),stat,null);
})(),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)));

var G__58875 = (i__58789 + (1));
i__58789 = G__58875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58790),frontend$components$plugins$iter__58787(cljs.core.chunk_rest(s__58788__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58790),null);
}
} else {
var item = cljs.core.first(s__58788__$2);
return cljs.core.cons(rum.core.with_key((function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
var stat = new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(item);
return frontend.components.plugins.plugin_item_card(frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),true,_STAR_search_key,installing,(function (){var and__5041__auto__ = installing;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(installing)),pid);
} else {
return and__5041__auto__;
}
})(),cljs.core.contains_QMARK_(installed_plugins,pid),stat,null);
})(),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),frontend$components$plugins$iter__58787(cljs.core.rest(s__58788__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(sorted_pkgs);
})())])])
)))]);
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.plugins","fetching","frontend.components.plugins/fetching",-330343025)),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.plugins","search-key","frontend.components.plugins/search-key",1754546424)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword("frontend.components.plugins","category","frontend.components.plugins/category",1292709236)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"downloads","downloads",-513600190),new cljs.core.Keyword("frontend.components.plugins","sort-by","frontend.components.plugins/sort-by",1336057821)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("frontend.components.plugins","filter-by","frontend.components.plugins/filter-by",-1578178539)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.plugins","error","frontend.components.plugins/error",1422088124)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (s){
var reload_fn = (function (force_refresh_QMARK_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Keyword("frontend.components.plugins","fetching","frontend.components.plugins/fetching",-330343025).cljs$core$IFn$_invoke$arity$1(s)))){
return null;
} else {
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.plugins","fetching","frontend.components.plugins/fetching",-330343025).cljs$core$IFn$_invoke$arity$1(s),true);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.plugins","error","frontend.components.plugins/error",1422088124).cljs$core$IFn$_invoke$arity$1(s),null);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.load_marketplace_plugins(force_refresh_QMARK_),(function (){
return frontend.handler.plugin.load_marketplace_stats(false);
})),(function (p1__58767_SHARP_){
console.error(p1__58767_SHARP_);

return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.plugins","error","frontend.components.plugins/error",1422088124).cljs$core$IFn$_invoke$arity$1(s),p1__58767_SHARP_);
})),(function (){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.plugins","fetching","frontend.components.plugins/fetching",-330343025).cljs$core$IFn$_invoke$arity$1(s),false);
}));
}
});
reload_fn(false);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("frontend.components.plugins","reload","frontend.components.plugins/reload",-1021433549),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reload_fn,true));
})], null)], null),"frontend.components.plugins/marketplace-plugins");
frontend.components.plugins.installed_plugins = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var installed_plugins = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034)], null));
var installed_plugins__$1 = cljs.core.vals(installed_plugins);
var updating = frontend.state.sub(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581));
var develop_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878));
var selected_unpacked_pkg = frontend.state.sub(new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185));
var coming_updates = frontend.state.sub(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263));
var agent_opts = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
var _STAR_filter_by = new cljs.core.Keyword("frontend.components.plugins","filter-by","frontend.components.plugins/filter-by",-1578178539).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_sort_by = new cljs.core.Keyword("frontend.components.plugins","sort-by","frontend.components.plugins/sort-by",1336057821).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_search_key = new cljs.core.Keyword("frontend.components.plugins","search-key","frontend.components.plugins/search-key",1754546424).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_category = new cljs.core.Keyword("frontend.components.plugins","category","frontend.components.plugins/category",1292709236).cljs$core$IFn$_invoke$arity$1(state);
var default_filter_by_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(_STAR_filter_by));
var filtered_plugins = ((cljs.core.seq(installed_plugins__$1))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_category),new cljs.core.Keyword(null,"themes","themes",-702786642)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58791_SHARP_){
return new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__58791_SHARP_);
}),installed_plugins__$1):cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58792_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__58792_SHARP_));
}),installed_plugins__$1)):null);
var filtered_plugins__$1 = (((!(default_filter_by_QMARK_)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (it){
var disabled = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(it,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null));
var G__58797 = cljs.core.deref(_STAR_filter_by);
var G__58797__$1 = (((G__58797 instanceof cljs.core.Keyword))?G__58797.fqn:null);
switch (G__58797__$1) {
case "enabled":
return cljs.core.not(disabled);

break;
case "disabled":
return disabled;

break;
case "unpacked":
return cljs.core.not(new cljs.core.Keyword(null,"iir","iir",-231680811).cljs$core$IFn$_invoke$arity$1(it));

break;
case "update-available":
return frontend.state.plugin_update_available_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it));

break;
default:
return true;

}
}),filtered_plugins):filtered_plugins);
var filtered_plugins__$2 = (((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_search_key)))))?(function (){var temp__5718__auto__ = (function (){var and__5041__auto__ = clojure.string.starts_with_QMARK_(cljs.core.deref(_STAR_search_key),"@");
if(and__5041__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_search_key),(1));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var author = temp__5718__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58793_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(author,new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(p1__58793_SHARP_));
}),filtered_plugins__$1);
} else {
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(filtered_plugins__$1,cljs.core.deref(_STAR_search_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),(30),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"name","name",1843675177)], 0));
}
})():filtered_plugins__$1);
var sorted_plugins = ((default_filter_by_QMARK_)?cljs.core.flatten((function (p1__58796_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__58796_SHARP_,(0),(function (coll){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iir","iir",-231680811),coll);
}));
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__58795_SHARP_,p2__58794_SHARP_){
var k = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p2__58794_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)))?(1):(0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__58795_SHARP_,k,cljs.core.conj,p2__58794_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),filtered_plugins__$2))):filtered_plugins__$2);
return daiquiri.core.create_element("div",{'className':"cp__plugins-installed"},[frontend.components.plugins.panel_control_tabs(cljs.core.deref(_STAR_search_key),_STAR_search_key,cljs.core.deref(_STAR_category),_STAR_category,cljs.core.deref(_STAR_sort_by),_STAR_sort_by,cljs.core.deref(_STAR_filter_by),_STAR_filter_by,selected_unpacked_pkg,false,develop_mode_QMARK_,null,agent_opts),daiquiri.core.create_element("div",{'className':"cp__plugins-item-lists grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__58798(s__58799){
return (new cljs.core.LazySeq(null,(function (){
var s__58799__$1 = s__58799;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58799__$1);
if(temp__5720__auto__){
var s__58799__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58799__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58799__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58801 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58800 = (0);
while(true){
if((i__58800 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__58800);
cljs.core.chunk_append(b__58801,rum.core.with_key((function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
return frontend.components.plugins.plugin_item_card(frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),false,_STAR_search_key,updating,(function (){var and__5041__auto__ = updating;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(updating)),pid);
} else {
return and__5041__auto__;
}
})(),true,null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coming_updates,pid));
})(),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)));

var G__58877 = (i__58800 + (1));
i__58800 = G__58877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58801),frontend$components$plugins$iter__58798(cljs.core.chunk_rest(s__58799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58801),null);
}
} else {
var item = cljs.core.first(s__58799__$2);
return cljs.core.cons(rum.core.with_key((function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
return frontend.components.plugins.plugin_item_card(frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),false,_STAR_search_key,updating,(function (){var and__5041__auto__ = updating;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(updating)),pid);
} else {
return and__5041__auto__;
}
})(),true,null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coming_updates,pid));
})(),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),frontend$components$plugins$iter__58798(cljs.core.rest(s__58799__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(sorted_plugins);
})())])]);
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.plugins","search-key","frontend.components.plugins/search-key",1754546424)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("frontend.components.plugins","filter-by","frontend.components.plugins/filter-by",-1578178539)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("frontend.components.plugins","sort-by","frontend.components.plugins/sort-by",1336057821)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword("frontend.components.plugins","category","frontend.components.plugins/category",1292709236))], null),"frontend.components.plugins/installed-plugins");
frontend.components.plugins.waiting_coming_updates = rum.core.lazy_build(rum.core.build_defcs,(function (_s){
var _ = frontend.state.sub(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263));
var downloading_QMARK_ = frontend.state.sub(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608));
var unchecked = frontend.state.sub(new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111));
var updates = frontend.state.all_available_coming_updates();
return daiquiri.core.create_element("div",{'className':"cp__plugins-waiting-updates"},[(function (){var attrs58802 = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Found %s updates",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(updates)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs58802))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mb-4","text-2xl","p-1"], null)], null),attrs58802], 0))):{'className':"mb-4 text-2xl p-1"}),((cljs.core.map_QMARK_(attrs58802))?null:[daiquiri.interpreter.interpret(attrs58802)]));
})(),((cljs.core.seq(updates))?daiquiri.core.create_element("ul",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(downloading_QMARK_)?"downloading":null)], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__58806(s__58807){
return (new cljs.core.LazySeq(null,(function (){
var s__58807__$1 = s__58807;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58807__$1);
if(temp__5720__auto__){
var s__58807__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58807__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58807__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58809 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58808 = (0);
while(true){
if((i__58808 < size__5519__auto__)){
var it = cljs.core._nth(c__5518__auto__,i__58808);
var k = ["lsp-it-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))].join('');
var c_QMARK_ = (!(cljs.core.contains_QMARK_(unchecked,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))));
var notes = frontend.util.trim_safe(new cljs.core.Keyword(null,"latest-notes","latest-notes",-368663386).cljs$core$IFn$_invoke$arity$1(it));
cljs.core.chunk_append(b__58809,daiquiri.core.create_element("li",{'key':k,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center",((c_QMARK_)?"checked":null)], null))},[daiquiri.core.create_element("label",{'className':"flex-1",'htmlFor':k},[daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"checked","checked",-50955819),c_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__58808,k,c_QMARK_,notes,it,c__5518__auto__,size__5519__auto__,b__58809,s__58807__$2,temp__5720__auto__,_,downloading_QMARK_,unchecked,updates){
return (function (e){
if(cljs.core.truth_(downloading_QMARK_)){
return null;
} else {
return frontend.state.set_unchecked_update(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it),cljs.core.not(frontend.util.echecked_QMARK_(e)));
}
});})(i__58808,k,c_QMARK_,notes,it,c__5518__auto__,size__5519__auto__,b__58809,s__58807__$2,temp__5720__auto__,_,downloading_QMARK_,unchecked,updates))
], null))),(function (){var attrs58811 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(it);
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58811))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-3"], null)], null),attrs58811], 0))):{'className':"px-3"}),((cljs.core.map_QMARK_(attrs58811))?[daiquiri.core.create_element("sup",null,[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))," \uD83D\uDC49 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(it))].join('')])]:[daiquiri.interpreter.interpret(attrs58811),daiquiri.core.create_element("sup",null,[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))," \uD83D\uDC49 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(it))].join('')])]));
})()]),(function (){var attrs58810 = ((clojure.string.blank_QMARK_(notes))?null:frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),notes], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-30.hover:opacity-80","span.opacity-30.hover:opacity-80",825778773),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("info-circle")], null)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58810))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-4"], null)], null),attrs58810], 0))):{'className':"px-4"}),((cljs.core.map_QMARK_(attrs58810))?null:[daiquiri.interpreter.interpret(attrs58810)]));
})()]));

var G__58878 = (i__58808 + (1));
i__58808 = G__58878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58809),frontend$components$plugins$iter__58806(cljs.core.chunk_rest(s__58807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58809),null);
}
} else {
var it = cljs.core.first(s__58807__$2);
var k = ["lsp-it-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))].join('');
var c_QMARK_ = (!(cljs.core.contains_QMARK_(unchecked,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))));
var notes = frontend.util.trim_safe(new cljs.core.Keyword(null,"latest-notes","latest-notes",-368663386).cljs$core$IFn$_invoke$arity$1(it));
return cljs.core.cons(daiquiri.core.create_element("li",{'key':k,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center",((c_QMARK_)?"checked":null)], null))},[daiquiri.core.create_element("label",{'className':"flex-1",'htmlFor':k},[daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"checked","checked",-50955819),c_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (k,c_QMARK_,notes,it,s__58807__$2,temp__5720__auto__,_,downloading_QMARK_,unchecked,updates){
return (function (e){
if(cljs.core.truth_(downloading_QMARK_)){
return null;
} else {
return frontend.state.set_unchecked_update(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it),cljs.core.not(frontend.util.echecked_QMARK_(e)));
}
});})(k,c_QMARK_,notes,it,s__58807__$2,temp__5720__auto__,_,downloading_QMARK_,unchecked,updates))
], null))),(function (){var attrs58811 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(it);
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58811))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-3"], null)], null),attrs58811], 0))):{'className':"px-3"}),((cljs.core.map_QMARK_(attrs58811))?[daiquiri.core.create_element("sup",null,[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))," \uD83D\uDC49 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(it))].join('')])]:[daiquiri.interpreter.interpret(attrs58811),daiquiri.core.create_element("sup",null,[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))," \uD83D\uDC49 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(it))].join('')])]));
})()]),(function (){var attrs58810 = ((clojure.string.blank_QMARK_(notes))?null:frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),notes], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-30.hover:opacity-80","span.opacity-30.hover:opacity-80",825778773),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("info-circle")], null)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58810))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-4"], null)], null),attrs58810], 0))):{'className':"px-4"}),((cljs.core.map_QMARK_(attrs58810))?null:[daiquiri.interpreter.interpret(attrs58810)]));
})()]),frontend$components$plugins$iter__58806(cljs.core.rest(s__58807__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(updates);
})())]):daiquiri.core.create_element("div",{'className':"py-4"},[daiquiri.core.create_element("strong",{'className':"text-4xl"},["\uD83C\uDF89 All updated!"])])),((cljs.core.seq(updates))?(function (){var attrs58803 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(downloading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.loading(" Downloading...")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Update all of selected"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(downloading_QMARK_)){
return null;
} else {
frontend.handler.plugin.open_updates_downloading();

var temp__5718__auto__ = frontend.state.get_next_selected_coming_update();
if(cljs.core.truth_(temp__5718__auto__)){
var n = temp__5718__auto__;
return frontend.handler.plugin.check_or_update_marketplace_plugin(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),false),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));
}));
} else {
return frontend.handler.plugin.close_updates_downloading();
}
}
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5043__auto__ = downloading_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((cljs.core.seq(unchecked)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(unchecked),cljs.core.count(updates))));
}
})()], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58803))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-5"], null)], null),attrs58803], 0))):{'className':"pt-5"}),((cljs.core.map_QMARK_(attrs58803))?null:[daiquiri.interpreter.interpret(attrs58803)]));
})():null)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (s){
frontend.state.reset_unchecked_update();

return s;
})], null)], null),"frontend.components.plugins/waiting-coming-updates");
frontend.components.plugins.open_select_theme_BANG_ = (function frontend$components$plugins$open_select_theme_BANG_(){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.plugins.installed_themes);
});
frontend.components.plugins.hook_ui_slot = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__58879 = null;
var G__58879__2 = (function (type,payload){
return daiquiri.interpreter.interpret((frontend.components.plugins.hook_ui_slot.cljs$core$IFn$_invoke$arity$3 ? frontend.components.plugins.hook_ui_slot.cljs$core$IFn$_invoke$arity$3(type,payload,null) : frontend.components.plugins.hook_ui_slot.call(null,type,payload,null)));
});
var G__58879__3 = (function (type,payload,opts){
var rs = frontend.util.rand_str((8));
var id = ["slot__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rs)].join('');
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$3(type,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slot","slot",240229571),id,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null),null);

return (function (){
return cljs.core.List.EMPTY;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));

var attrs58812 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return frontend.util.stop(e);
})], null)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58812))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lsp-hook-ui-slot"], null)], null),attrs58812], 0))):{'className':"lsp-hook-ui-slot"}),((cljs.core.map_QMARK_(attrs58812))?null:[daiquiri.interpreter.interpret(attrs58812)]));
});
G__58879 = function(type,payload,opts){
switch(arguments.length){
case 2:
return G__58879__2.call(this,type,payload);
case 3:
return G__58879__3.call(this,type,payload,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58879.cljs$core$IFn$_invoke$arity$2 = G__58879__2;
G__58879.cljs$core$IFn$_invoke$arity$3 = G__58879__3;
return G__58879;
})()
,null,"frontend.components.plugins/hook-ui-slot");
frontend.components.plugins.ui_item_renderer = rum.core.lazy_build(rum.core.build_defc,(function (pid,type,p__58816){
var map__58817 = p__58816;
var map__58817__$1 = cljs.core.__destructure_map(map__58817);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58817__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var template = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58817__$1,new cljs.core.Keyword(null,"template","template",-702405684));
var _STAR_el = rum.core.use_ref(null);
var uni = (function (p1__58813_SHARP_){
return ["injected-ui-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58813_SHARP_)].join('');
});
var pl = LSPluginCore.registeredPlugins.get(cljs.core.name(pid));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5720__auto__ = rum.core.deref(_STAR_el);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return LSPlugin.pluginHelpers.setupInjectedUI.call(pl,({"slot": el.id, "key": key, "template": template}),({}));
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

if((!((pl == null)))){
return daiquiri.core.create_element("div",{'id':uni([cljs.core.name(key),"-",cljs.core.name(pid)].join('')),'ref':_STAR_el,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uni(cljs.core.name(type))], null))},[]);
} else {
return daiquiri.core.create_element("span",null,null);
}
}),null,"frontend.components.plugins/ui-item-renderer");
/**
 * type: :toolbar, :pagebar
 */
frontend.components.plugins.hook_ui_items = rum.core.lazy_build(rum.core.build_defcs,(function (_state,type){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868)], null)))){
var items = frontend.state.get_plugins_ui_items_with_type(type);
if(cljs.core.seq(items)){
return daiquiri.core.create_element("div",{'data-type':cljs.core.name(type),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-items-container"], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__58818(s__58819){
return (new cljs.core.LazySeq(null,(function (){
var s__58819__$1 = s__58819;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58819__$1);
if(temp__5720__auto__){
var s__58819__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58819__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58819__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58821 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58820 = (0);
while(true){
if((i__58820 < size__5519__auto__)){
var vec__58822 = cljs.core._nth(c__5518__auto__,i__58820);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58822,(0),null);
var map__58825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58822,(1),null);
var map__58825__$1 = cljs.core.__destructure_map(map__58825);
var opts = map__58825__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58825__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58822,(2),null);
cljs.core.chunk_append(b__58821,rum.core.with_key(frontend.components.plugins.ui_item_renderer(pid,type,opts),key));

var G__58880 = (i__58820 + (1));
i__58820 = G__58880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58821),frontend$components$plugins$iter__58818(cljs.core.chunk_rest(s__58819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58821),null);
}
} else {
var vec__58826 = cljs.core.first(s__58819__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58826,(0),null);
var map__58829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58826,(1),null);
var map__58829__$1 = cljs.core.__destructure_map(map__58829);
var opts = map__58829__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58829__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58826,(2),null);
return cljs.core.cons(rum.core.with_key(frontend.components.plugins.ui_item_renderer(pid,type,opts),key),frontend$components$plugins$iter__58818(cljs.core.rest(s__58819__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(items);
})())]);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.plugins/hook-ui-items");
frontend.components.plugins.hook_ui_fenced_code = rum.core.lazy_build(rum.core.build_defcs,(function (_state,content,p__58830){
var map__58831 = p__58830;
var map__58831__$1 = cljs.core.__destructure_map(map__58831);
var _opts = map__58831__$1;
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58831__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58831__$1,new cljs.core.Keyword(null,"edit","edit",-1641834166));
return daiquiri.core.create_element("div",{'onMouseDown':(function (e){
if(edit === false){
return frontend.util.stop(e);
} else {
return null;
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"not-edit","not-edit",-1875881710),edit === false], null)], null))], null))},[((cljs.core.fn_QMARK_(render))?React.createElement(render,({"content": content})):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.plugins/hook-ui-fenced-code");
frontend.components.plugins.plugins_page = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__58832 = rum.core.use_state(new cljs.core.Keyword(null,"installed","installed",553977691));
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58832,(0),null);
var set_active_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58832,(1),null);
var market_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,new cljs.core.Keyword(null,"marketplace","marketplace",236355452));
var _STAR_el_ref = rum.core.create_ref();
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'ref':_STAR_el_ref,'tabIndex':"-1",'className':"cp__plugins-page"},[(function (){var attrs58835 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"plugins","plugins",1900073717)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs58835))?daiquiri.interpreter.element_attributes(attrs58835):null),((cljs.core.map_QMARK_(attrs58835))?null:[daiquiri.interpreter.interpret(attrs58835)]));
})(),daiquiri.interpreter.interpret(frontend.components.plugins.security_warning()),daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("div",{'className':"tabs flex items-center justify-center"},[(function (){var attrs58840 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.it","span.it",1011288927),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"installed","installed",553977691)) : set_active_BANG_.call(null,new cljs.core.Keyword(null,"installed","installed",553977691)));
}),new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"class","class",-2030961996),(((!(market_QMARK_)))?"active":"")], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58840))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tabs-inner","flex","items-center"], null)], null),attrs58840], 0))):{'className':"tabs-inner flex items-center"}),((cljs.core.map_QMARK_(attrs58840))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mk","span.mk",-317106419),frontend.components.svg.apps.cljs$core$IFn$_invoke$arity$1((16)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","marketplace","plugin/marketplace",-1095225687)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"marketplace","marketplace",236355452)) : set_active_BANG_.call(null,new cljs.core.Keyword(null,"marketplace","marketplace",236355452)));
}),new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"class","class",-2030961996),((market_QMARK_)?"active":"")], 0)))]:[daiquiri.interpreter.interpret(attrs58840),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mk","span.mk",-317106419),frontend.components.svg.apps.cljs$core$IFn$_invoke$arity$1((16)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","marketplace","plugin/marketplace",-1095225687)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"marketplace","marketplace",236355452)) : set_active_BANG_.call(null,new cljs.core.Keyword(null,"marketplace","marketplace",236355452)));
}),new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"class","class",-2030961996),((market_QMARK_)?"active":"")], 0)))]));
})()]),(function (){var attrs58839 = ((market_QMARK_)?frontend.components.plugins.marketplace_plugins():frontend.components.plugins.installed_plugins());
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58839))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panels"], null)], null),attrs58839], 0))):{'className':"panels"}),((cljs.core.map_QMARK_(attrs58839))?null:[daiquiri.interpreter.interpret(attrs58839)]));
})()]);
}),null,"frontend.components.plugins/plugins-page");
frontend.components.plugins.focused_settings_content = rum.core.lazy_build(rum.core.build_defcs,(function (_state,title){
var _STAR_cache = new cljs.core.Keyword("frontend.components.plugins","cache","frontend.components.plugins/cache",366972046).cljs$core$IFn$_invoke$arity$1(_state);
var focused = frontend.state.sub(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137));
var nav_QMARK_ = frontend.state.sub(new cljs.core.Keyword("plugin","navs-settings?","plugin/navs-settings?",-615901808));
var _ = frontend.state.sub(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034));
var ___$1 = setTimeout((function (){
return cljs.core.reset_BANG_(_STAR_cache,focused);
}),(100));
return daiquiri.core.create_element("div",{'className':"cp__plugins-settings cp__settings-main"},[daiquiri.core.create_element("header",null,[(function (){var attrs58841 = frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("puzzle");
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs58841))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs58841], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs58841))?[[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = title;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings-of-plugins","settings-of-plugins",-1896805353)], 0));
}
})())].join('')]:[daiquiri.interpreter.interpret(attrs58841),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = title;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings-of-plugins","settings-of-plugins",-1896805353)], 0));
}
})())].join('')]));
})()]),daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__settings-inner","md:flex",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-aside","no-aside",71744870),cljs.core.not(nav_QMARK_)], null)], null))], null))},[(cljs.core.truth_(nav_QMARK_)?daiquiri.core.create_element("aside",{'style':{'minWidth':"10rem"},'className':"md:w-64"},[(function (){var plugins = frontend.handler.plugin.get_enabled_plugins_if_setting_schema();
return daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__58843(s__58844){
return (new cljs.core.LazySeq(null,(function (){
var s__58844__$1 = s__58844;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58844__$1);
if(temp__5720__auto__){
var s__58844__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58844__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58844__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58846 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58845 = (0);
while(true){
if((i__58845 < size__5519__auto__)){
var map__58847 = cljs.core._nth(c__5518__auto__,i__58845);
var map__58847__$1 = cljs.core.__destructure_map(map__58847);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58847__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58847__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58847__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58847__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__58846,daiquiri.core.create_element("li",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,focused)], null)], null))], null))},[daiquiri.core.create_element("a",{'onClick':((function (i__58845,map__58847,map__58847__$1,id,name,title__$1,icon,c__5518__auto__,size__5519__auto__,b__58846,s__58844__$2,temp__5720__auto__,plugins,_STAR_cache,focused,nav_QMARK_,_,___$1){
return (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),id);
});})(i__58845,map__58847,map__58847__$1,id,name,title__$1,icon,c__5518__auto__,size__5519__auto__,b__58846,s__58844__$2,temp__5720__auto__,plugins,_STAR_cache,focused,nav_QMARK_,_,___$1))
,'className':"flex items-center"},[(cljs.core.truth_((function (){var and__5041__auto__ = icon;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(icon)));
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("img",{'src':icon,'className':"icon"},[]):daiquiri.interpreter.interpret(frontend.components.svg.folder)),(function (){var attrs58848 = (function (){var or__5043__auto__ = title__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58848))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs58848], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs58848))?null:[daiquiri.interpreter.interpret(attrs58848)]));
})()])]));

var G__58881 = (i__58845 + (1));
i__58845 = G__58881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58846),frontend$components$plugins$iter__58843(cljs.core.chunk_rest(s__58844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58846),null);
}
} else {
var map__58849 = cljs.core.first(s__58844__$2);
var map__58849__$1 = cljs.core.__destructure_map(map__58849);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58849__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons(daiquiri.core.create_element("li",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,focused)], null)], null))], null))},[daiquiri.core.create_element("a",{'onClick':((function (map__58849,map__58849__$1,id,name,title__$1,icon,s__58844__$2,temp__5720__auto__,plugins,_STAR_cache,focused,nav_QMARK_,_,___$1){
return (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),id);
});})(map__58849,map__58849__$1,id,name,title__$1,icon,s__58844__$2,temp__5720__auto__,plugins,_STAR_cache,focused,nav_QMARK_,_,___$1))
,'className':"flex items-center"},[(cljs.core.truth_((function (){var and__5041__auto__ = icon;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(icon)));
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("img",{'src':icon,'className':"icon"},[]):daiquiri.interpreter.interpret(frontend.components.svg.folder)),(function (){var attrs58848 = (function (){var or__5043__auto__ = title__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58848))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs58848], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs58848))?null:[daiquiri.interpreter.interpret(attrs58848)]));
})()])]),frontend$components$plugins$iter__58843(cljs.core.rest(s__58844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(plugins);
})())]);
})()]):null),daiquiri.core.create_element("article",null,[(function (){var attrs58854 = (function (){var temp__5720__auto__ = (function (){var and__5041__auto__ = focused;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cache),focused);
if(and__5041__auto____$1){
return frontend.handler.plugin.get_plugin_inst(focused);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var pl = temp__5720__auto__;
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning.text-lg.mt-5","p.warning.text-lg.mt-5",-1216205355),"Settings schema Error!"], null),frontend.components.plugins_settings.settings_container(cljs_bean.core.__GT_clj(pl.settingsSchema),pl));
} else {
return null;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58854))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-wrap"], null)], null),attrs58854], 0))):{'className':"panel-wrap"}),((cljs.core.map_QMARK_(attrs58854))?null:[daiquiri.interpreter.interpret(attrs58854)]));
})()])])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137)),new cljs.core.Keyword("frontend.components.plugins","cache","frontend.components.plugins/cache",366972046))], null),"frontend.components.plugins/focused-settings-content");
frontend.components.plugins.custom_js_installer = rum.core.lazy_build(rum.core.build_defc,(function (p__58855){
var map__58856 = p__58855;
var map__58856__$1 = cljs.core.__destructure_map(map__58856);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58856__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58856__$1,new cljs.core.Keyword(null,"current-repo","current-repo",134812359));
var db_restoring_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58856__$1,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664));
var nfs_granted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58856__$1,new cljs.core.Keyword(null,"nfs-granted?","nfs-granted?",-649584328));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(db_restoring_QMARK_);
if(and__5041__auto__){
var or__5043__auto__ = (!(frontend.util.nfs_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return nfs_granted_QMARK_;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.ui.exec_js_if_exists__AMPERSAND__allowed_BANG_(t);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_repo,db_restoring_QMARK_,nfs_granted_QMARK_], null));

return null;
}),null,"frontend.components.plugins/custom-js-installer");
frontend.components.plugins.open_plugins_modal_BANG_ = (function frontend$components$plugins$open_plugins_modal_BANG_(){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (_close_BANG_){
return frontend.components.plugins.plugins_page();
}));
});
frontend.components.plugins.open_waiting_updates_modal_BANG_ = (function frontend$components$plugins$open_waiting_updates_modal_BANG_(){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (_close_BANG_){
return frontend.components.plugins.waiting_coming_updates();
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
});
frontend.components.plugins.open_focused_settings_modal_BANG_ = (function frontend$components$plugins$open_focused_settings_modal_BANG_(title){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (_close_BANG_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-modal.of-plugins","div.settings-modal.of-plugins",-1980465429),frontend.components.plugins.focused_settings_content(title)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center?","center?",-323116631),false,new cljs.core.Keyword(null,"id","id",-1388402092),"ls-focused-settings-modal"], null));
});

//# sourceMappingURL=frontend.components.plugins.js.map
