goog.provide('frontend.components.plugins_settings');
frontend.components.plugins_settings.edit_settings_file = rum.core.lazy_build(rum.core.build_defc,(function (pid,p__56817){
var map__56818 = p__56817;
var map__56818__$1 = cljs.core.__destructure_map(map__56818);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56818__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.plugin.open_settings_file_in_default_app_BANG_(pid);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","hover:underline",class$], null))},["Edit settings.json"]);
}),null,"frontend.components.plugins-settings/edit-settings-file");
frontend.components.plugins_settings.render_item_input = rum.core.lazy_build(rum.core.build_defc,(function (val,p__56837,update_setting_BANG_){
var map__56839 = p__56837;
var map__56839__$1 = cljs.core.__destructure_map(map__56839);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56839__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56839__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56839__$1,new cljs.core.Keyword(null,"title","title",636505583));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56839__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56839__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var inputAs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56839__$1,new cljs.core.Keyword(null,"inputAs","inputAs",1243305598));
return daiquiri.core.create_element("div",{'className':"desc-item as-input"},[daiquiri.core.create_element("h2",null,[(function (){var attrs56842 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs56842))?daiquiri.interpreter.element_attributes(attrs56842):null),((cljs.core.map_QMARK_(attrs56842))?null:[daiquiri.interpreter.interpret(attrs56842)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs56845 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs56845))?daiquiri.interpreter.element_attributes(attrs56845):null),((cljs.core.map_QMARK_(attrs56845))?null:[daiquiri.interpreter.interpret(attrs56845)]));
})()]),daiquiri.core.create_element("label",{'className':"form-control"},[(function (){var attrs56851 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs56851))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs56851], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs56851))?null:[daiquiri.interpreter.interpret(attrs56851)]));
})(),(function (){var input_as = frontend.util.safe_lower_case((function (){var or__5043__auto__ = inputAs;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.name(type);
}
})());
var input_as__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_as,"string"))?new cljs.core.Keyword(null,"text","text",-1790561697):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(input_as));
return daiquiri.core.create_element("input",{'type':cljs.core.name(input_as__$1),'defaultValue':(function (){var or__5043__auto__ = val;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
})(),'onChange':rum.core.mark_sync_update(goog.functions.debounce((function (p1__56832_SHARP_){
var G__56860 = key;
var G__56861 = frontend.util.evalue(p1__56832_SHARP_);
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__56860,G__56861) : update_setting_BANG_.call(null,G__56860,G__56861));
}),(1000))),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-input","form-input",-226883230),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),input_as__$1)))], null)], null))], null))},[]);
})()])]);
}),null,"frontend.components.plugins-settings/render-item-input");
frontend.components.plugins_settings.render_item_toggle = rum.core.lazy_build(rum.core.build_defc,(function (val,p__56870,update_setting_BANG_){
var map__56871 = p__56870;
var map__56871__$1 = cljs.core.__destructure_map(map__56871);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56871__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56871__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56871__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56871__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var val__$1 = ((cljs.core.boolean_QMARK_(val))?val:cljs.core.boolean$(default$));
return daiquiri.core.create_element("div",{'className':"desc-item as-toggle"},[daiquiri.core.create_element("h2",null,[(function (){var attrs56887 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs56887))?daiquiri.interpreter.element_attributes(attrs56887):null),((cljs.core.map_QMARK_(attrs56887))?null:[daiquiri.interpreter.interpret(attrs56887)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs56889 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs56889))?daiquiri.interpreter.element_attributes(attrs56889):null),((cljs.core.map_QMARK_(attrs56889))?null:[daiquiri.interpreter.interpret(attrs56889)]));
})()]),(function (){var attrs56882 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),val__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__56892 = key;
var G__56893 = (!(val__$1));
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__56892,G__56893) : update_setting_BANG_.call(null,G__56892,G__56893));
})], null));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs56882))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control"], null)], null),attrs56882], 0))):{'className':"form-control"}),((cljs.core.map_QMARK_(attrs56882))?[(function (){var attrs56883 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs56883))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs56883], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs56883))?null:[daiquiri.interpreter.interpret(attrs56883)]));
})()]:[daiquiri.interpreter.interpret(attrs56882),(function (){var attrs56886 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs56886))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs56886], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs56886))?null:[daiquiri.interpreter.interpret(attrs56886)]));
})()]));
})()]);
}),null,"frontend.components.plugins-settings/render-item-toggle");
frontend.components.plugins_settings.render_item_enum = rum.core.lazy_build(rum.core.build_defc,(function (val,p__56912,update_setting_BANG_){
var map__56913 = p__56912;
var map__56913__$1 = cljs.core.__destructure_map(map__56913);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56913__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56913__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56913__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56913__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var enumChoices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56913__$1,new cljs.core.Keyword(null,"enumChoices","enumChoices",-177859500));
var enumPicker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56913__$1,new cljs.core.Keyword(null,"enumPicker","enumPicker",-719781503));
var val__$1 = (function (){var or__5043__auto__ = val;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
})();
var vals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,((cljs.core.sequential_QMARK_(val__$1))?val__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val__$1], null)));
var options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),v,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_(vals,v)], null);
}),enumChoices);
var picker = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(enumPicker);
return daiquiri.core.create_element("div",{'className':"desc-item as-enum"},[daiquiri.core.create_element("h2",null,[(function (){var attrs56923 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs56923))?daiquiri.interpreter.element_attributes(attrs56923):null),((cljs.core.map_QMARK_(attrs56923))?null:[daiquiri.interpreter.interpret(attrs56923)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs56925 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs56925))?daiquiri.interpreter.element_attributes(attrs56925):null),((cljs.core.map_QMARK_(attrs56925))?null:[daiquiri.interpreter.interpret(attrs56925)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radio","radio",1323726374),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null], null), null),picker))?new cljs.core.Keyword(null,"div.wrap","div.wrap",1832950772):new cljs.core.Keyword(null,"label.wrap","label.wrap",-1504723647)),(function (){var attrs56949 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs56949))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs56949], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs56949))?null:[daiquiri.interpreter.interpret(attrs56949)]));
})(),(function (){var G__56955 = picker;
var G__56955__$1 = (((G__56955 instanceof cljs.core.Keyword))?G__56955.fqn:null);
switch (G__56955__$1) {
case "radio":
return frontend.ui.radio_list(options,(function (p1__56905_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__56905_SHARP_) : update_setting_BANG_.call(null,key,p1__56905_SHARP_));
}),null);

break;
case "checkbox":
return frontend.ui.checkbox_list(options,(function (p1__56906_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__56906_SHARP_) : update_setting_BANG_.call(null,key,p1__56906_SHARP_));
}),null);

break;
default:
return frontend.ui.select(options,(function (p1__56907_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__56907_SHARP_) : update_setting_BANG_.call(null,key,p1__56907_SHARP_));
}),null);

}
})()], null))])]);
}),null,"frontend.components.plugins-settings/render-item-enum");
frontend.components.plugins_settings.render_item_object = rum.core.lazy_build(rum.core.build_defc,(function (_val,p__56964,pid){
var map__56967 = p__56964;
var map__56967__$1 = cljs.core.__destructure_map(map__56967);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var _default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"_default","_default",308892991));
return daiquiri.core.create_element("div",{'className':"desc-item as-object"},[daiquiri.core.create_element("h2",null,[(function (){var attrs56973 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs56973))?daiquiri.interpreter.element_attributes(attrs56973):null),((cljs.core.map_QMARK_(attrs56973))?null:[daiquiri.interpreter.interpret(attrs56973)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs56975 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs56975))?daiquiri.interpreter.element_attributes(attrs56975):null),((cljs.core.map_QMARK_(attrs56975))?null:[daiquiri.interpreter.interpret(attrs56975)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[(function (){var attrs56976 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs56976))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs56976], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs56976))?null:[daiquiri.interpreter.interpret(attrs56976)]));
})(),daiquiri.core.create_element("div",{'className':"pl-1"},[frontend.components.plugins_settings.edit_settings_file(pid,null)])])]);
}),null,"frontend.components.plugins-settings/render-item-object");
frontend.components.plugins_settings.settings_container = rum.core.lazy_build(rum.core.build_defc,(function (schema,pl){
var _settings = pl.settings;
var pid = pl.id;
var vec__56984 = rum.core.use_state(cljs_bean.core.__GT_clj(_settings.toJSON()));
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56984,(0),null);
var set_settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56984,(1),null);
var update_setting_BANG_ = (function (k,v){
return _settings.set(cljs.core.name(k),cljs_bean.core.__GT_js(v));
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var on_change = (function (s){
var temp__5720__auto__ = cljs_bean.core.__GT_clj(s);
if(cljs.core.truth_(temp__5720__auto__)){
var s__$1 = temp__5720__auto__;
return (set_settings.cljs$core$IFn$_invoke$arity$1 ? set_settings.cljs$core$IFn$_invoke$arity$1(s__$1) : set_settings.call(null,s__$1));
} else {
return null;
}
});
_settings.on("change",on_change);

return (function (){
return _settings.off("change",on_change);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid], null));

if(cljs.core.seq(schema)){
return daiquiri.core.create_element("div",{'className':"cp__plugins-settings-inner"},[daiquiri.core.create_element("span",{'className':"edit-file"},[frontend.components.plugins_settings.edit_settings_file(pid,null)]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins_settings$iter__56998(s__56999){
return (new cljs.core.LazySeq(null,(function (){
var s__56999__$1 = s__56999;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__56999__$1);
if(temp__5720__auto__){
var s__56999__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56999__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__56999__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__57001 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__57000 = (0);
while(true){
if((i__57000 < size__5519__auto__)){
var desc = cljs.core._nth(c__5518__auto__,i__57000);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
cljs.core.chunk_append(b__57001,(function (){var pred__57002 = cljs.core.contains_QMARK_;
var expr__57003 = type;
if(cljs.core.truth_((function (){var G__57005 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__57006 = expr__57003;
return (pred__57002.cljs$core$IFn$_invoke$arity$2 ? pred__57002.cljs$core$IFn$_invoke$arity$2(G__57005,G__57006) : pred__57002.call(null,G__57005,G__57006));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__57007 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__57008 = expr__57003;
return (pred__57002.cljs$core$IFn$_invoke$arity$2 ? pred__57002.cljs$core$IFn$_invoke$arity$2(G__57007,G__57008) : pred__57002.call(null,G__57007,G__57008));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__57009 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__57010 = expr__57003;
return (pred__57002.cljs$core$IFn$_invoke$arity$2 ? pred__57002.cljs$core$IFn$_invoke$arity$2(G__57009,G__57010) : pred__57002.call(null,G__57009,G__57010));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__57011 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__57012 = expr__57003;
return (pred__57002.cljs$core$IFn$_invoke$arity$2 ? pred__57002.cljs$core$IFn$_invoke$arity$2(G__57011,G__57012) : pred__57002.call(null,G__57011,G__57012));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})());

var G__57061 = (i__57000 + (1));
i__57000 = G__57061;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57001),frontend$components$plugins_settings$iter__56998(cljs.core.chunk_rest(s__56999__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57001),null);
}
} else {
var desc = cljs.core.first(s__56999__$2);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
return cljs.core.cons((function (){var pred__57013 = cljs.core.contains_QMARK_;
var expr__57014 = type;
if(cljs.core.truth_((function (){var G__57016 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__57017 = expr__57014;
return (pred__57013.cljs$core$IFn$_invoke$arity$2 ? pred__57013.cljs$core$IFn$_invoke$arity$2(G__57016,G__57017) : pred__57013.call(null,G__57016,G__57017));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__57019 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__57020 = expr__57014;
return (pred__57013.cljs$core$IFn$_invoke$arity$2 ? pred__57013.cljs$core$IFn$_invoke$arity$2(G__57019,G__57020) : pred__57013.call(null,G__57019,G__57020));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__57021 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__57022 = expr__57014;
return (pred__57013.cljs$core$IFn$_invoke$arity$2 ? pred__57013.cljs$core$IFn$_invoke$arity$2(G__57021,G__57022) : pred__57013.call(null,G__57021,G__57022));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__57023 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__57024 = expr__57014;
return (pred__57013.cljs$core$IFn$_invoke$arity$2 ? pred__57013.cljs$core$IFn$_invoke$arity$2(G__57023,G__57024) : pred__57013.call(null,G__57023,G__57024));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})(),frontend$components$plugins_settings$iter__56998(cljs.core.rest(s__56999__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(schema);
})())]);
} else {
return daiquiri.core.create_element("h2",{'className':"font-bold text-lg py-4 warning"},["No Settings Schema!"]);
}
}),null,"frontend.components.plugins-settings/settings-container");

//# sourceMappingURL=frontend.components.plugins_settings.js.map
