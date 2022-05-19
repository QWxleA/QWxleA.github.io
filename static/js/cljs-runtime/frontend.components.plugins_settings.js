goog.provide('frontend.components.plugins_settings');
frontend.components.plugins_settings.edit_settings_file = rum.core.lazy_build(rum.core.build_defc,(function (pid,p__68035){
var map__68036 = p__68035;
var map__68036__$1 = cljs.core.__destructure_map(map__68036);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68036__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.plugin.open_settings_file_in_default_app_BANG_(pid);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","hover:underline",class$], null))},["Edit settings.json"]);
}),null,"frontend.components.plugins-settings/edit-settings-file");
frontend.components.plugins_settings.render_item_input = rum.core.lazy_build(rum.core.build_defc,(function (val,p__68045,update_setting_BANG_){
var map__68047 = p__68045;
var map__68047__$1 = cljs.core.__destructure_map(map__68047);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"title","title",636505583));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var inputAs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"inputAs","inputAs",1243305598));
return daiquiri.core.create_element("div",{'className':"desc-item as-input"},[daiquiri.core.create_element("h2",null,[(function (){var attrs68049 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs68049))?daiquiri.interpreter.element_attributes(attrs68049):null),((cljs.core.map_QMARK_(attrs68049))?null:[daiquiri.interpreter.interpret(attrs68049)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs68052 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs68052))?daiquiri.interpreter.element_attributes(attrs68052):null),((cljs.core.map_QMARK_(attrs68052))?null:[daiquiri.interpreter.interpret(attrs68052)]));
})()]),daiquiri.core.create_element("label",{'className':"form-control"},[(function (){var attrs68053 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs68053))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs68053], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs68053))?null:[daiquiri.interpreter.interpret(attrs68053)]));
})(),(function (){var input_as = frontend.util.safe_lower_case((function (){var or__4253__auto__ = inputAs;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.name(type);
}
})());
var input_as__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_as,"string"))?new cljs.core.Keyword(null,"text","text",-1790561697):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(input_as));
return daiquiri.core.create_element("input",{'type':cljs.core.name(input_as__$1),'defaultValue':(function (){var or__4253__auto__ = val;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
})(),'onChange':rum.core.mark_sync_update(goog.functions.debounce((function (p1__68042_SHARP_){
var G__68056 = key;
var G__68057 = frontend.util.evalue(p1__68042_SHARP_);
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__68056,G__68057) : update_setting_BANG_.call(null,G__68056,G__68057));
}),(1000))),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-input","form-input",-226883230),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),input_as__$1)))], null)], null))], null))},[]);
})()])]);
}),null,"frontend.components.plugins-settings/render-item-input");
frontend.components.plugins_settings.render_item_toggle = rum.core.lazy_build(rum.core.build_defc,(function (val,p__68083,update_setting_BANG_){
var map__68084 = p__68083;
var map__68084__$1 = cljs.core.__destructure_map(map__68084);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68084__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68084__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68084__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68084__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var val__$1 = ((cljs.core.boolean_QMARK_(val))?val:cljs.core.boolean$(default$));
return daiquiri.core.create_element("div",{'className':"desc-item as-toggle"},[daiquiri.core.create_element("h2",null,[(function (){var attrs68126 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs68126))?daiquiri.interpreter.element_attributes(attrs68126):null),((cljs.core.map_QMARK_(attrs68126))?null:[daiquiri.interpreter.interpret(attrs68126)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs68127 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs68127))?daiquiri.interpreter.element_attributes(attrs68127):null),((cljs.core.map_QMARK_(attrs68127))?null:[daiquiri.interpreter.interpret(attrs68127)]));
})()]),(function (){var attrs68112 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),val__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__68133 = key;
var G__68134 = (!(val__$1));
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__68133,G__68134) : update_setting_BANG_.call(null,G__68133,G__68134));
})], null));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs68112))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control"], null)], null),attrs68112], 0))):{'className':"form-control"}),((cljs.core.map_QMARK_(attrs68112))?[(function (){var attrs68122 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs68122))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs68122], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs68122))?null:[daiquiri.interpreter.interpret(attrs68122)]));
})()]:[daiquiri.interpreter.interpret(attrs68112),(function (){var attrs68125 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs68125))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs68125], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs68125))?null:[daiquiri.interpreter.interpret(attrs68125)]));
})()]));
})()]);
}),null,"frontend.components.plugins-settings/render-item-toggle");
frontend.components.plugins_settings.render_item_enum = rum.core.lazy_build(rum.core.build_defc,(function (val,p__68148,update_setting_BANG_){
var map__68149 = p__68148;
var map__68149__$1 = cljs.core.__destructure_map(map__68149);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68149__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68149__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68149__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68149__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var enumChoices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68149__$1,new cljs.core.Keyword(null,"enumChoices","enumChoices",-177859500));
var enumPicker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68149__$1,new cljs.core.Keyword(null,"enumPicker","enumPicker",-719781503));
var val__$1 = (function (){var or__4253__auto__ = val;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
})();
var vals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,((cljs.core.sequential_QMARK_(val__$1))?val__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val__$1], null)));
var options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),v,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_(vals,v)], null);
}),enumChoices);
var picker = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(enumPicker);
return daiquiri.core.create_element("div",{'className':"desc-item as-enum"},[daiquiri.core.create_element("h2",null,[(function (){var attrs68162 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs68162))?daiquiri.interpreter.element_attributes(attrs68162):null),((cljs.core.map_QMARK_(attrs68162))?null:[daiquiri.interpreter.interpret(attrs68162)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs68168 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs68168))?daiquiri.interpreter.element_attributes(attrs68168):null),((cljs.core.map_QMARK_(attrs68168))?null:[daiquiri.interpreter.interpret(attrs68168)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radio","radio",1323726374),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null], null), null),picker))?new cljs.core.Keyword(null,"div.wrap","div.wrap",1832950772):new cljs.core.Keyword(null,"label.wrap","label.wrap",-1504723647)),(function (){var attrs68174 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs68174))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs68174], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs68174))?null:[daiquiri.interpreter.interpret(attrs68174)]));
})(),(function (){var G__68188 = picker;
var G__68188__$1 = (((G__68188 instanceof cljs.core.Keyword))?G__68188.fqn:null);
switch (G__68188__$1) {
case "radio":
return frontend.ui.radio_list(options,(function (p1__68142_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__68142_SHARP_) : update_setting_BANG_.call(null,key,p1__68142_SHARP_));
}),null);

break;
case "checkbox":
return frontend.ui.checkbox_list(options,(function (p1__68143_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__68143_SHARP_) : update_setting_BANG_.call(null,key,p1__68143_SHARP_));
}),null);

break;
default:
return frontend.ui.select(options,(function (p1__68144_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__68144_SHARP_) : update_setting_BANG_.call(null,key,p1__68144_SHARP_));
}),null);

}
})()], null))])]);
}),null,"frontend.components.plugins-settings/render-item-enum");
frontend.components.plugins_settings.render_item_object = rum.core.lazy_build(rum.core.build_defc,(function (_val,p__68196,pid){
var map__68197 = p__68196;
var map__68197__$1 = cljs.core.__destructure_map(map__68197);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68197__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68197__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68197__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var _default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68197__$1,new cljs.core.Keyword(null,"_default","_default",308892991));
return daiquiri.core.create_element("div",{'className':"desc-item as-object"},[daiquiri.core.create_element("h2",null,[(function (){var attrs68203 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs68203))?daiquiri.interpreter.element_attributes(attrs68203):null),((cljs.core.map_QMARK_(attrs68203))?null:[daiquiri.interpreter.interpret(attrs68203)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs68205 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs68205))?daiquiri.interpreter.element_attributes(attrs68205):null),((cljs.core.map_QMARK_(attrs68205))?null:[daiquiri.interpreter.interpret(attrs68205)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[(function (){var attrs68210 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs68210))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs68210], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs68210))?null:[daiquiri.interpreter.interpret(attrs68210)]));
})(),daiquiri.core.create_element("div",{'className':"pl-1"},[frontend.components.plugins_settings.edit_settings_file(pid,null)])])]);
}),null,"frontend.components.plugins-settings/render-item-object");
frontend.components.plugins_settings.settings_container = rum.core.lazy_build(rum.core.build_defc,(function (schema,pl){
var _settings = pl.settings;
var pid = pl.id;
var vec__68216 = rum.core.use_state(cljs_bean.core.__GT_clj(_settings.toJSON()));
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68216,(0),null);
var set_settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68216,(1),null);
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
return daiquiri.core.create_element("div",{'className':"cp__plugins-settings-inner"},[daiquiri.core.create_element("span",{'className':"edit-file"},[frontend.components.plugins_settings.edit_settings_file(pid,null)]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$components$plugins_settings$iter__68237(s__68238){
return (new cljs.core.LazySeq(null,(function (){
var s__68238__$1 = s__68238;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__68238__$1);
if(temp__5720__auto__){
var s__68238__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68238__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68238__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68240 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68239 = (0);
while(true){
if((i__68239 < size__4651__auto__)){
var desc = cljs.core._nth(c__4650__auto__,i__68239);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
cljs.core.chunk_append(b__68240,(function (){var pred__68245 = cljs.core.contains_QMARK_;
var expr__68246 = type;
if(cljs.core.truth_((function (){var G__68249 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__68250 = expr__68246;
return (pred__68245.cljs$core$IFn$_invoke$arity$2 ? pred__68245.cljs$core$IFn$_invoke$arity$2(G__68249,G__68250) : pred__68245.call(null,G__68249,G__68250));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__68252 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__68253 = expr__68246;
return (pred__68245.cljs$core$IFn$_invoke$arity$2 ? pred__68245.cljs$core$IFn$_invoke$arity$2(G__68252,G__68253) : pred__68245.call(null,G__68252,G__68253));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__68258 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__68259 = expr__68246;
return (pred__68245.cljs$core$IFn$_invoke$arity$2 ? pred__68245.cljs$core$IFn$_invoke$arity$2(G__68258,G__68259) : pred__68245.call(null,G__68258,G__68259));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__68261 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__68262 = expr__68246;
return (pred__68245.cljs$core$IFn$_invoke$arity$2 ? pred__68245.cljs$core$IFn$_invoke$arity$2(G__68261,G__68262) : pred__68245.call(null,G__68261,G__68262));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})());

var G__68340 = (i__68239 + (1));
i__68239 = G__68340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68240),frontend$components$plugins_settings$iter__68237(cljs.core.chunk_rest(s__68238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68240),null);
}
} else {
var desc = cljs.core.first(s__68238__$2);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
return cljs.core.cons((function (){var pred__68265 = cljs.core.contains_QMARK_;
var expr__68266 = type;
if(cljs.core.truth_((function (){var G__68268 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__68269 = expr__68266;
return (pred__68265.cljs$core$IFn$_invoke$arity$2 ? pred__68265.cljs$core$IFn$_invoke$arity$2(G__68268,G__68269) : pred__68265.call(null,G__68268,G__68269));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__68272 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__68273 = expr__68266;
return (pred__68265.cljs$core$IFn$_invoke$arity$2 ? pred__68265.cljs$core$IFn$_invoke$arity$2(G__68272,G__68273) : pred__68265.call(null,G__68272,G__68273));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__68274 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__68275 = expr__68266;
return (pred__68265.cljs$core$IFn$_invoke$arity$2 ? pred__68265.cljs$core$IFn$_invoke$arity$2(G__68274,G__68275) : pred__68265.call(null,G__68274,G__68275));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__68277 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__68278 = expr__68266;
return (pred__68265.cljs$core$IFn$_invoke$arity$2 ? pred__68265.cljs$core$IFn$_invoke$arity$2(G__68277,G__68278) : pred__68265.call(null,G__68277,G__68278));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})(),frontend$components$plugins_settings$iter__68237(cljs.core.rest(s__68238__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(schema);
})())]);
} else {
return daiquiri.core.create_element("h2",{'className':"font-bold text-lg py-4 warning"},["No Settings Schema!"]);
}
}),null,"frontend.components.plugins-settings/settings-container");

//# sourceMappingURL=frontend.components.plugins_settings.js.map
