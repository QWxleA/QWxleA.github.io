goog.provide('frontend.components.plugins_settings');
frontend.components.plugins_settings.edit_settings_file = rum.core.lazy_build(rum.core.build_defc,(function (pid,p__57876){
var map__57877 = p__57876;
var map__57877__$1 = cljs.core.__destructure_map(map__57877);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57877__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.plugin.open_settings_file_in_default_app_BANG_(pid);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","hover:underline",class$], null))},["Edit settings.json"]);
}),null,"frontend.components.plugins-settings/edit-settings-file");
frontend.components.plugins_settings.render_item_input = rum.core.lazy_build(rum.core.build_defc,(function (val,p__57881,update_setting_BANG_){
var map__57882 = p__57881;
var map__57882__$1 = cljs.core.__destructure_map(map__57882);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57882__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57882__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57882__$1,new cljs.core.Keyword(null,"title","title",636505583));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57882__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57882__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var inputAs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57882__$1,new cljs.core.Keyword(null,"inputAs","inputAs",1243305598));
return daiquiri.core.create_element("div",{'className':"desc-item as-input"},[daiquiri.core.create_element("h2",null,[(function (){var attrs57885 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs57885))?daiquiri.interpreter.element_attributes(attrs57885):null),((cljs.core.map_QMARK_(attrs57885))?null:[daiquiri.interpreter.interpret(attrs57885)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs57886 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs57886))?daiquiri.interpreter.element_attributes(attrs57886):null),((cljs.core.map_QMARK_(attrs57886))?null:[daiquiri.interpreter.interpret(attrs57886)]));
})()]),daiquiri.core.create_element("label",{'className':"form-control"},[(function (){var attrs57887 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs57887))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs57887], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs57887))?null:[daiquiri.interpreter.interpret(attrs57887)]));
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
})(),'onChange':rum.core.mark_sync_update(goog.functions.debounce((function (p1__57879_SHARP_){
var G__57889 = key;
var G__57890 = frontend.util.evalue(p1__57879_SHARP_);
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__57889,G__57890) : update_setting_BANG_.call(null,G__57889,G__57890));
}),(1000))),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-input","form-input",-226883230),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),input_as__$1)))], null)], null))], null))},[]);
})()])]);
}),null,"frontend.components.plugins-settings/render-item-input");
frontend.components.plugins_settings.render_item_toggle = rum.core.lazy_build(rum.core.build_defc,(function (val,p__57895,update_setting_BANG_){
var map__57897 = p__57895;
var map__57897__$1 = cljs.core.__destructure_map(map__57897);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57897__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57897__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57897__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57897__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var val__$1 = ((cljs.core.boolean_QMARK_(val))?val:cljs.core.boolean$(default$));
return daiquiri.core.create_element("div",{'className':"desc-item as-toggle"},[daiquiri.core.create_element("h2",null,[(function (){var attrs57926 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs57926))?daiquiri.interpreter.element_attributes(attrs57926):null),((cljs.core.map_QMARK_(attrs57926))?null:[daiquiri.interpreter.interpret(attrs57926)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs57928 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs57928))?daiquiri.interpreter.element_attributes(attrs57928):null),((cljs.core.map_QMARK_(attrs57928))?null:[daiquiri.interpreter.interpret(attrs57928)]));
})()]),(function (){var attrs57906 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),val__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__57963 = key;
var G__57965 = (!(val__$1));
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__57963,G__57965) : update_setting_BANG_.call(null,G__57963,G__57965));
})], null));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs57906))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control"], null)], null),attrs57906], 0))):{'className':"form-control"}),((cljs.core.map_QMARK_(attrs57906))?[(function (){var attrs57910 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs57910))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs57910], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs57910))?null:[daiquiri.interpreter.interpret(attrs57910)]));
})()]:[daiquiri.interpreter.interpret(attrs57906),(function (){var attrs57917 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs57917))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs57917], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs57917))?null:[daiquiri.interpreter.interpret(attrs57917)]));
})()]));
})()]);
}),null,"frontend.components.plugins-settings/render-item-toggle");
frontend.components.plugins_settings.render_item_enum = rum.core.lazy_build(rum.core.build_defc,(function (val,p__57983,update_setting_BANG_){
var map__57984 = p__57983;
var map__57984__$1 = cljs.core.__destructure_map(map__57984);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57984__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57984__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57984__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57984__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var enumChoices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57984__$1,new cljs.core.Keyword(null,"enumChoices","enumChoices",-177859500));
var enumPicker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57984__$1,new cljs.core.Keyword(null,"enumPicker","enumPicker",-719781503));
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
return daiquiri.core.create_element("div",{'className':"desc-item as-enum"},[daiquiri.core.create_element("h2",null,[(function (){var attrs58004 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs58004))?daiquiri.interpreter.element_attributes(attrs58004):null),((cljs.core.map_QMARK_(attrs58004))?null:[daiquiri.interpreter.interpret(attrs58004)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs58006 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58006))?daiquiri.interpreter.element_attributes(attrs58006):null),((cljs.core.map_QMARK_(attrs58006))?null:[daiquiri.interpreter.interpret(attrs58006)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radio","radio",1323726374),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null], null), null),picker))?new cljs.core.Keyword(null,"div.wrap","div.wrap",1832950772):new cljs.core.Keyword(null,"label.wrap","label.wrap",-1504723647)),(function (){var attrs58009 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs58009))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs58009], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs58009))?null:[daiquiri.interpreter.interpret(attrs58009)]));
})(),(function (){var G__58038 = picker;
var G__58038__$1 = (((G__58038 instanceof cljs.core.Keyword))?G__58038.fqn:null);
switch (G__58038__$1) {
case "radio":
return frontend.ui.radio_list(options,(function (p1__57974_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__57974_SHARP_) : update_setting_BANG_.call(null,key,p1__57974_SHARP_));
}),null);

break;
case "checkbox":
return frontend.ui.checkbox_list(options,(function (p1__57975_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__57975_SHARP_) : update_setting_BANG_.call(null,key,p1__57975_SHARP_));
}),null);

break;
default:
return frontend.ui.select(options,(function (p1__57976_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__57976_SHARP_) : update_setting_BANG_.call(null,key,p1__57976_SHARP_));
}),null);

}
})()], null))])]);
}),null,"frontend.components.plugins-settings/render-item-enum");
frontend.components.plugins_settings.render_item_object = rum.core.lazy_build(rum.core.build_defc,(function (_val,p__58062,pid){
var map__58066 = p__58062;
var map__58066__$1 = cljs.core.__destructure_map(map__58066);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58066__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58066__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58066__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var _default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58066__$1,new cljs.core.Keyword(null,"_default","_default",308892991));
return daiquiri.core.create_element("div",{'className':"desc-item as-object"},[daiquiri.core.create_element("h2",null,[(function (){var attrs58072 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs58072))?daiquiri.interpreter.element_attributes(attrs58072):null),((cljs.core.map_QMARK_(attrs58072))?null:[daiquiri.interpreter.interpret(attrs58072)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs58075 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs58075))?daiquiri.interpreter.element_attributes(attrs58075):null),((cljs.core.map_QMARK_(attrs58075))?null:[daiquiri.interpreter.interpret(attrs58075)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[(function (){var attrs58092 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs58092))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs58092], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs58092))?null:[daiquiri.interpreter.interpret(attrs58092)]));
})(),daiquiri.core.create_element("div",{'className':"pl-1"},[frontend.components.plugins_settings.edit_settings_file(pid,null)])])]);
}),null,"frontend.components.plugins-settings/render-item-object");
frontend.components.plugins_settings.settings_container = rum.core.lazy_build(rum.core.build_defc,(function (schema,pl){
var _settings = pl.settings;
var pid = pl.id;
var vec__58104 = rum.core.use_state(cljs_bean.core.__GT_clj(_settings.toJSON()));
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58104,(0),null);
var set_settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58104,(1),null);
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
return daiquiri.core.create_element("div",{'className':"cp__plugins-settings-inner"},[daiquiri.core.create_element("span",{'className':"edit-file"},[frontend.components.plugins_settings.edit_settings_file(pid,null)]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins_settings$iter__58115(s__58116){
return (new cljs.core.LazySeq(null,(function (){
var s__58116__$1 = s__58116;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58116__$1);
if(temp__5720__auto__){
var s__58116__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58116__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58116__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58118 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58117 = (0);
while(true){
if((i__58117 < size__5519__auto__)){
var desc = cljs.core._nth(c__5518__auto__,i__58117);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
cljs.core.chunk_append(b__58118,(function (){var pred__58119 = cljs.core.contains_QMARK_;
var expr__58120 = type;
if(cljs.core.truth_((function (){var G__58122 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__58123 = expr__58120;
return (pred__58119.cljs$core$IFn$_invoke$arity$2 ? pred__58119.cljs$core$IFn$_invoke$arity$2(G__58122,G__58123) : pred__58119.call(null,G__58122,G__58123));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__58124 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__58125 = expr__58120;
return (pred__58119.cljs$core$IFn$_invoke$arity$2 ? pred__58119.cljs$core$IFn$_invoke$arity$2(G__58124,G__58125) : pred__58119.call(null,G__58124,G__58125));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__58126 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__58127 = expr__58120;
return (pred__58119.cljs$core$IFn$_invoke$arity$2 ? pred__58119.cljs$core$IFn$_invoke$arity$2(G__58126,G__58127) : pred__58119.call(null,G__58126,G__58127));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__58128 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__58129 = expr__58120;
return (pred__58119.cljs$core$IFn$_invoke$arity$2 ? pred__58119.cljs$core$IFn$_invoke$arity$2(G__58128,G__58129) : pred__58119.call(null,G__58128,G__58129));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})());

var G__58223 = (i__58117 + (1));
i__58117 = G__58223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58118),frontend$components$plugins_settings$iter__58115(cljs.core.chunk_rest(s__58116__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58118),null);
}
} else {
var desc = cljs.core.first(s__58116__$2);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
return cljs.core.cons((function (){var pred__58130 = cljs.core.contains_QMARK_;
var expr__58131 = type;
if(cljs.core.truth_((function (){var G__58133 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__58134 = expr__58131;
return (pred__58130.cljs$core$IFn$_invoke$arity$2 ? pred__58130.cljs$core$IFn$_invoke$arity$2(G__58133,G__58134) : pred__58130.call(null,G__58133,G__58134));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__58135 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__58136 = expr__58131;
return (pred__58130.cljs$core$IFn$_invoke$arity$2 ? pred__58130.cljs$core$IFn$_invoke$arity$2(G__58135,G__58136) : pred__58130.call(null,G__58135,G__58136));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__58137 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__58138 = expr__58131;
return (pred__58130.cljs$core$IFn$_invoke$arity$2 ? pred__58130.cljs$core$IFn$_invoke$arity$2(G__58137,G__58138) : pred__58130.call(null,G__58137,G__58138));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__58139 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__58140 = expr__58131;
return (pred__58130.cljs$core$IFn$_invoke$arity$2 ? pred__58130.cljs$core$IFn$_invoke$arity$2(G__58139,G__58140) : pred__58130.call(null,G__58139,G__58140));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})(),frontend$components$plugins_settings$iter__58115(cljs.core.rest(s__58116__$2)));
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
