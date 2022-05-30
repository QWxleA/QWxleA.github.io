goog.provide('frontend.components.plugins_settings');
frontend.components.plugins_settings.edit_settings_file = rum.core.lazy_build(rum.core.build_defc,(function (pid,p__56100){
var map__56101 = p__56100;
var map__56101__$1 = cljs.core.__destructure_map(map__56101);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56101__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.plugin.open_settings_file_in_default_app_BANG_(pid);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","hover:underline",class$], null))},["Edit settings.json"]);
}),null,"frontend.components.plugins-settings/edit-settings-file");
frontend.components.plugins_settings.render_item_input = rum.core.lazy_build(rum.core.build_defc,(function (val,p__56108,update_setting_BANG_){
var map__56111 = p__56108;
var map__56111__$1 = cljs.core.__destructure_map(map__56111);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56111__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56111__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56111__$1,new cljs.core.Keyword(null,"title","title",636505583));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56111__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56111__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var inputAs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56111__$1,new cljs.core.Keyword(null,"inputAs","inputAs",1243305598));
return daiquiri.core.create_element("div",{'className':"desc-item as-input"},[daiquiri.core.create_element("h2",null,[(function (){var attrs56113 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs56113))?daiquiri.interpreter.element_attributes(attrs56113):null),((cljs.core.map_QMARK_(attrs56113))?null:[daiquiri.interpreter.interpret(attrs56113)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs56131 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs56131))?daiquiri.interpreter.element_attributes(attrs56131):null),((cljs.core.map_QMARK_(attrs56131))?null:[daiquiri.interpreter.interpret(attrs56131)]));
})()]),daiquiri.core.create_element("label",{'className':"form-control"},[(function (){var attrs56143 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs56143))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs56143], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs56143))?null:[daiquiri.interpreter.interpret(attrs56143)]));
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
})(),'onChange':rum.core.mark_sync_update(goog.functions.debounce((function (p1__56106_SHARP_){
var G__56192 = key;
var G__56193 = frontend.util.evalue(p1__56106_SHARP_);
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__56192,G__56193) : update_setting_BANG_.call(null,G__56192,G__56193));
}),(1000))),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-input","form-input",-226883230),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),input_as__$1)))], null)], null))], null))},[]);
})()])]);
}),null,"frontend.components.plugins-settings/render-item-input");
frontend.components.plugins_settings.render_item_toggle = rum.core.lazy_build(rum.core.build_defc,(function (val,p__56223,update_setting_BANG_){
var map__56224 = p__56223;
var map__56224__$1 = cljs.core.__destructure_map(map__56224);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var val__$1 = ((cljs.core.boolean_QMARK_(val))?val:cljs.core.boolean$(default$));
return daiquiri.core.create_element("div",{'className':"desc-item as-toggle"},[daiquiri.core.create_element("h2",null,[(function (){var attrs56256 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs56256))?daiquiri.interpreter.element_attributes(attrs56256):null),((cljs.core.map_QMARK_(attrs56256))?null:[daiquiri.interpreter.interpret(attrs56256)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs56261 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs56261))?daiquiri.interpreter.element_attributes(attrs56261):null),((cljs.core.map_QMARK_(attrs56261))?null:[daiquiri.interpreter.interpret(attrs56261)]));
})()]),(function (){var attrs56250 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),val__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__56274 = key;
var G__56275 = (!(val__$1));
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__56274,G__56275) : update_setting_BANG_.call(null,G__56274,G__56275));
})], null));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs56250))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control"], null)], null),attrs56250], 0))):{'className':"form-control"}),((cljs.core.map_QMARK_(attrs56250))?[(function (){var attrs56251 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs56251))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs56251], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs56251))?null:[daiquiri.interpreter.interpret(attrs56251)]));
})()]:[daiquiri.interpreter.interpret(attrs56250),(function (){var attrs56255 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs56255))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs56255], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs56255))?null:[daiquiri.interpreter.interpret(attrs56255)]));
})()]));
})()]);
}),null,"frontend.components.plugins-settings/render-item-toggle");
frontend.components.plugins_settings.render_item_enum = rum.core.lazy_build(rum.core.build_defc,(function (val,p__56280,update_setting_BANG_){
var map__56291 = p__56280;
var map__56291__$1 = cljs.core.__destructure_map(map__56291);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56291__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56291__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56291__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56291__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var enumChoices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56291__$1,new cljs.core.Keyword(null,"enumChoices","enumChoices",-177859500));
var enumPicker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56291__$1,new cljs.core.Keyword(null,"enumPicker","enumPicker",-719781503));
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
return daiquiri.core.create_element("div",{'className':"desc-item as-enum"},[daiquiri.core.create_element("h2",null,[(function (){var attrs56313 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs56313))?daiquiri.interpreter.element_attributes(attrs56313):null),((cljs.core.map_QMARK_(attrs56313))?null:[daiquiri.interpreter.interpret(attrs56313)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs56314 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs56314))?daiquiri.interpreter.element_attributes(attrs56314):null),((cljs.core.map_QMARK_(attrs56314))?null:[daiquiri.interpreter.interpret(attrs56314)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radio","radio",1323726374),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null], null), null),picker))?new cljs.core.Keyword(null,"div.wrap","div.wrap",1832950772):new cljs.core.Keyword(null,"label.wrap","label.wrap",-1504723647)),(function (){var attrs56326 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs56326))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs56326], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs56326))?null:[daiquiri.interpreter.interpret(attrs56326)]));
})(),(function (){var G__56332 = picker;
var G__56332__$1 = (((G__56332 instanceof cljs.core.Keyword))?G__56332.fqn:null);
switch (G__56332__$1) {
case "radio":
return frontend.ui.radio_list(options,(function (p1__56277_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__56277_SHARP_) : update_setting_BANG_.call(null,key,p1__56277_SHARP_));
}),null);

break;
case "checkbox":
return frontend.ui.checkbox_list(options,(function (p1__56278_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__56278_SHARP_) : update_setting_BANG_.call(null,key,p1__56278_SHARP_));
}),null);

break;
default:
return frontend.ui.select(options,(function (p1__56279_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__56279_SHARP_) : update_setting_BANG_.call(null,key,p1__56279_SHARP_));
}),null);

}
})()], null))])]);
}),null,"frontend.components.plugins-settings/render-item-enum");
frontend.components.plugins_settings.render_item_object = rum.core.lazy_build(rum.core.build_defc,(function (_val,p__56342,pid){
var map__56344 = p__56342;
var map__56344__$1 = cljs.core.__destructure_map(map__56344);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56344__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56344__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56344__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var _default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56344__$1,new cljs.core.Keyword(null,"_default","_default",308892991));
return daiquiri.core.create_element("div",{'className':"desc-item as-object"},[daiquiri.core.create_element("h2",null,[(function (){var attrs56358 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs56358))?daiquiri.interpreter.element_attributes(attrs56358):null),((cljs.core.map_QMARK_(attrs56358))?null:[daiquiri.interpreter.interpret(attrs56358)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs56363 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs56363))?daiquiri.interpreter.element_attributes(attrs56363):null),((cljs.core.map_QMARK_(attrs56363))?null:[daiquiri.interpreter.interpret(attrs56363)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[(function (){var attrs56377 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs56377))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs56377], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs56377))?null:[daiquiri.interpreter.interpret(attrs56377)]));
})(),daiquiri.core.create_element("div",{'className':"pl-1"},[frontend.components.plugins_settings.edit_settings_file(pid,null)])])]);
}),null,"frontend.components.plugins-settings/render-item-object");
frontend.components.plugins_settings.settings_container = rum.core.lazy_build(rum.core.build_defc,(function (schema,pl){
var _settings = pl.settings;
var pid = pl.id;
var vec__56382 = rum.core.use_state(cljs_bean.core.__GT_clj(_settings.toJSON()));
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56382,(0),null);
var set_settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56382,(1),null);
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
return daiquiri.core.create_element("div",{'className':"cp__plugins-settings-inner"},[daiquiri.core.create_element("span",{'className':"edit-file"},[frontend.components.plugins_settings.edit_settings_file(pid,null)]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins_settings$iter__56517(s__56518){
return (new cljs.core.LazySeq(null,(function (){
var s__56518__$1 = s__56518;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__56518__$1);
if(temp__5720__auto__){
var s__56518__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56518__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__56518__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__56520 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__56519 = (0);
while(true){
if((i__56519 < size__5519__auto__)){
var desc = cljs.core._nth(c__5518__auto__,i__56519);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
cljs.core.chunk_append(b__56520,(function (){var pred__56558 = cljs.core.contains_QMARK_;
var expr__56559 = type;
if(cljs.core.truth_((function (){var G__56561 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__56562 = expr__56559;
return (pred__56558.cljs$core$IFn$_invoke$arity$2 ? pred__56558.cljs$core$IFn$_invoke$arity$2(G__56561,G__56562) : pred__56558.call(null,G__56561,G__56562));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__56566 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__56567 = expr__56559;
return (pred__56558.cljs$core$IFn$_invoke$arity$2 ? pred__56558.cljs$core$IFn$_invoke$arity$2(G__56566,G__56567) : pred__56558.call(null,G__56566,G__56567));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__56568 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__56569 = expr__56559;
return (pred__56558.cljs$core$IFn$_invoke$arity$2 ? pred__56558.cljs$core$IFn$_invoke$arity$2(G__56568,G__56569) : pred__56558.call(null,G__56568,G__56569));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__56571 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__56572 = expr__56559;
return (pred__56558.cljs$core$IFn$_invoke$arity$2 ? pred__56558.cljs$core$IFn$_invoke$arity$2(G__56571,G__56572) : pred__56558.call(null,G__56571,G__56572));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})());

var G__56690 = (i__56519 + (1));
i__56519 = G__56690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56520),frontend$components$plugins_settings$iter__56517(cljs.core.chunk_rest(s__56518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56520),null);
}
} else {
var desc = cljs.core.first(s__56518__$2);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
return cljs.core.cons((function (){var pred__56596 = cljs.core.contains_QMARK_;
var expr__56597 = type;
if(cljs.core.truth_((function (){var G__56600 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__56601 = expr__56597;
return (pred__56596.cljs$core$IFn$_invoke$arity$2 ? pred__56596.cljs$core$IFn$_invoke$arity$2(G__56600,G__56601) : pred__56596.call(null,G__56600,G__56601));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__56603 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__56604 = expr__56597;
return (pred__56596.cljs$core$IFn$_invoke$arity$2 ? pred__56596.cljs$core$IFn$_invoke$arity$2(G__56603,G__56604) : pred__56596.call(null,G__56603,G__56604));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__56605 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__56606 = expr__56597;
return (pred__56596.cljs$core$IFn$_invoke$arity$2 ? pred__56596.cljs$core$IFn$_invoke$arity$2(G__56605,G__56606) : pred__56596.call(null,G__56605,G__56606));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__56609 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__56610 = expr__56597;
return (pred__56596.cljs$core$IFn$_invoke$arity$2 ? pred__56596.cljs$core$IFn$_invoke$arity$2(G__56609,G__56610) : pred__56596.call(null,G__56609,G__56610));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})(),frontend$components$plugins_settings$iter__56517(cljs.core.rest(s__56518__$2)));
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
