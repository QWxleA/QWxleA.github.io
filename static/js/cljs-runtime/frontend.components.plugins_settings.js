goog.provide('frontend.components.plugins_settings');
frontend.components.plugins_settings.edit_settings_file = rum.core.lazy_build(rum.core.build_defc,(function (pid,p__48784){
var map__48785 = p__48784;
var map__48785__$1 = cljs.core.__destructure_map(map__48785);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48785__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.plugin.open_settings_file_in_default_app_BANG_(pid);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","hover:underline",class$], null))},["Edit settings.json"]);
}),null,"frontend.components.plugins-settings/edit-settings-file");
frontend.components.plugins_settings.render_item_input = rum.core.lazy_build(rum.core.build_defc,(function (val,p__48790,update_setting_BANG_){
var map__48791 = p__48790;
var map__48791__$1 = cljs.core.__destructure_map(map__48791);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48791__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48791__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48791__$1,new cljs.core.Keyword(null,"title","title",636505583));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48791__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48791__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var inputAs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48791__$1,new cljs.core.Keyword(null,"inputAs","inputAs",1243305598));
return daiquiri.core.create_element("div",{'className':"desc-item as-input"},[daiquiri.core.create_element("h2",null,[(function (){var attrs48793 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs48793))?daiquiri.interpreter.element_attributes(attrs48793):null),((cljs.core.map_QMARK_(attrs48793))?null:[daiquiri.interpreter.interpret(attrs48793)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs48795 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs48795))?daiquiri.interpreter.element_attributes(attrs48795):null),((cljs.core.map_QMARK_(attrs48795))?null:[daiquiri.interpreter.interpret(attrs48795)]));
})()]),daiquiri.core.create_element("label",{'className':"form-control"},[(function (){var attrs48800 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs48800))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs48800], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs48800))?null:[daiquiri.interpreter.interpret(attrs48800)]));
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
})(),'onChange':rum.core.mark_sync_update(goog.functions.debounce((function (p1__48789_SHARP_){
var G__48807 = key;
var G__48808 = frontend.util.evalue(p1__48789_SHARP_);
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__48807,G__48808) : update_setting_BANG_.call(null,G__48807,G__48808));
}),(1000))),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-input","form-input",-226883230),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),input_as__$1)))], null)], null))], null))},[]);
})()])]);
}),null,"frontend.components.plugins-settings/render-item-input");
frontend.components.plugins_settings.render_item_toggle = rum.core.lazy_build(rum.core.build_defc,(function (val,p__48816,update_setting_BANG_){
var map__48817 = p__48816;
var map__48817__$1 = cljs.core.__destructure_map(map__48817);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48817__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48817__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48817__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48817__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var val__$1 = ((cljs.core.boolean_QMARK_(val))?val:cljs.core.boolean$(default$));
return daiquiri.core.create_element("div",{'className':"desc-item as-toggle"},[daiquiri.core.create_element("h2",null,[(function (){var attrs48832 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs48832))?daiquiri.interpreter.element_attributes(attrs48832):null),((cljs.core.map_QMARK_(attrs48832))?null:[daiquiri.interpreter.interpret(attrs48832)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs48834 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs48834))?daiquiri.interpreter.element_attributes(attrs48834):null),((cljs.core.map_QMARK_(attrs48834))?null:[daiquiri.interpreter.interpret(attrs48834)]));
})()]),(function (){var attrs48828 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),val__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__48842 = key;
var G__48843 = (!(val__$1));
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__48842,G__48843) : update_setting_BANG_.call(null,G__48842,G__48843));
})], null));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs48828))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control"], null)], null),attrs48828], 0))):{'className':"form-control"}),((cljs.core.map_QMARK_(attrs48828))?[(function (){var attrs48830 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs48830))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs48830], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs48830))?null:[daiquiri.interpreter.interpret(attrs48830)]));
})()]:[daiquiri.interpreter.interpret(attrs48828),(function (){var attrs48831 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs48831))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs48831], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs48831))?null:[daiquiri.interpreter.interpret(attrs48831)]));
})()]));
})()]);
}),null,"frontend.components.plugins-settings/render-item-toggle");
frontend.components.plugins_settings.render_item_enum = rum.core.lazy_build(rum.core.build_defc,(function (val,p__48859,update_setting_BANG_){
var map__48860 = p__48859;
var map__48860__$1 = cljs.core.__destructure_map(map__48860);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48860__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48860__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48860__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48860__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var enumChoices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48860__$1,new cljs.core.Keyword(null,"enumChoices","enumChoices",-177859500));
var enumPicker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48860__$1,new cljs.core.Keyword(null,"enumPicker","enumPicker",-719781503));
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
return daiquiri.core.create_element("div",{'className':"desc-item as-enum"},[daiquiri.core.create_element("h2",null,[(function (){var attrs48866 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs48866))?daiquiri.interpreter.element_attributes(attrs48866):null),((cljs.core.map_QMARK_(attrs48866))?null:[daiquiri.interpreter.interpret(attrs48866)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs48867 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs48867))?daiquiri.interpreter.element_attributes(attrs48867):null),((cljs.core.map_QMARK_(attrs48867))?null:[daiquiri.interpreter.interpret(attrs48867)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radio","radio",1323726374),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null], null), null),picker))?new cljs.core.Keyword(null,"div.wrap","div.wrap",1832950772):new cljs.core.Keyword(null,"label.wrap","label.wrap",-1504723647)),(function (){var attrs48873 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs48873))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs48873], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs48873))?null:[daiquiri.interpreter.interpret(attrs48873)]));
})(),(function (){var G__48884 = picker;
var G__48884__$1 = (((G__48884 instanceof cljs.core.Keyword))?G__48884.fqn:null);
switch (G__48884__$1) {
case "radio":
return frontend.ui.radio_list(options,(function (p1__48855_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__48855_SHARP_) : update_setting_BANG_.call(null,key,p1__48855_SHARP_));
}),null);

break;
case "checkbox":
return frontend.ui.checkbox_list(options,(function (p1__48856_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__48856_SHARP_) : update_setting_BANG_.call(null,key,p1__48856_SHARP_));
}),null);

break;
default:
return frontend.ui.select(options,(function (p1__48858_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__48858_SHARP_) : update_setting_BANG_.call(null,key,p1__48858_SHARP_));
}),null);

}
})()], null))])]);
}),null,"frontend.components.plugins-settings/render-item-enum");
frontend.components.plugins_settings.render_item_object = rum.core.lazy_build(rum.core.build_defc,(function (_val,p__48891,pid){
var map__48893 = p__48891;
var map__48893__$1 = cljs.core.__destructure_map(map__48893);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var _default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"_default","_default",308892991));
return daiquiri.core.create_element("div",{'className':"desc-item as-object"},[daiquiri.core.create_element("h2",null,[(function (){var attrs48898 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs48898))?daiquiri.interpreter.element_attributes(attrs48898):null),((cljs.core.map_QMARK_(attrs48898))?null:[daiquiri.interpreter.interpret(attrs48898)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("caret-right")),(function (){var attrs48900 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs48900))?daiquiri.interpreter.element_attributes(attrs48900):null),((cljs.core.map_QMARK_(attrs48900))?null:[daiquiri.interpreter.interpret(attrs48900)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[(function (){var attrs48906 = description;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs48906))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","flex-1"], null)], null),attrs48906], 0))):{'className':"pl-1 flex-1"}),((cljs.core.map_QMARK_(attrs48906))?null:[daiquiri.interpreter.interpret(attrs48906)]));
})(),daiquiri.core.create_element("div",{'className':"pl-1"},[frontend.components.plugins_settings.edit_settings_file(pid,null)])])]);
}),null,"frontend.components.plugins-settings/render-item-object");
frontend.components.plugins_settings.settings_container = rum.core.lazy_build(rum.core.build_defc,(function (schema,pl){
var _settings = pl.settings;
var pid = pl.id;
var vec__48924 = rum.core.use_state(cljs_bean.core.__GT_clj(_settings.toJSON()));
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48924,(0),null);
var set_settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48924,(1),null);
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
return daiquiri.core.create_element("div",{'className':"cp__plugins-settings-inner"},[daiquiri.core.create_element("span",{'className':"edit-file"},[frontend.components.plugins_settings.edit_settings_file(pid,null)]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins_settings$iter__48938(s__48939){
return (new cljs.core.LazySeq(null,(function (){
var s__48939__$1 = s__48939;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48939__$1);
if(temp__5720__auto__){
var s__48939__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48939__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__48939__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__48941 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__48940 = (0);
while(true){
if((i__48940 < size__5519__auto__)){
var desc = cljs.core._nth(c__5518__auto__,i__48940);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
cljs.core.chunk_append(b__48941,(function (){var pred__48945 = cljs.core.contains_QMARK_;
var expr__48946 = type;
if(cljs.core.truth_((function (){var G__48949 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__48950 = expr__48946;
return (pred__48945.cljs$core$IFn$_invoke$arity$2 ? pred__48945.cljs$core$IFn$_invoke$arity$2(G__48949,G__48950) : pred__48945.call(null,G__48949,G__48950));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__48951 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__48952 = expr__48946;
return (pred__48945.cljs$core$IFn$_invoke$arity$2 ? pred__48945.cljs$core$IFn$_invoke$arity$2(G__48951,G__48952) : pred__48945.call(null,G__48951,G__48952));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__48953 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__48954 = expr__48946;
return (pred__48945.cljs$core$IFn$_invoke$arity$2 ? pred__48945.cljs$core$IFn$_invoke$arity$2(G__48953,G__48954) : pred__48945.call(null,G__48953,G__48954));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__48955 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__48956 = expr__48946;
return (pred__48945.cljs$core$IFn$_invoke$arity$2 ? pred__48945.cljs$core$IFn$_invoke$arity$2(G__48955,G__48956) : pred__48945.call(null,G__48955,G__48956));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})());

var G__49008 = (i__48940 + (1));
i__48940 = G__49008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48941),frontend$components$plugins_settings$iter__48938(cljs.core.chunk_rest(s__48939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48941),null);
}
} else {
var desc = cljs.core.first(s__48939__$2);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
return cljs.core.cons((function (){var pred__48961 = cljs.core.contains_QMARK_;
var expr__48962 = type;
if(cljs.core.truth_((function (){var G__48964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__48965 = expr__48962;
return (pred__48961.cljs$core$IFn$_invoke$arity$2 ? pred__48961.cljs$core$IFn$_invoke$arity$2(G__48964,G__48965) : pred__48961.call(null,G__48964,G__48965));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__48966 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__48967 = expr__48962;
return (pred__48961.cljs$core$IFn$_invoke$arity$2 ? pred__48961.cljs$core$IFn$_invoke$arity$2(G__48966,G__48967) : pred__48961.call(null,G__48966,G__48967));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__48968 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__48969 = expr__48962;
return (pred__48961.cljs$core$IFn$_invoke$arity$2 ? pred__48961.cljs$core$IFn$_invoke$arity$2(G__48968,G__48969) : pred__48961.call(null,G__48968,G__48969));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__48970 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__48971 = expr__48962;
return (pred__48961.cljs$core$IFn$_invoke$arity$2 ? pred__48961.cljs$core$IFn$_invoke$arity$2(G__48970,G__48971) : pred__48961.call(null,G__48970,G__48971));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc,pid);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
})(),frontend$components$plugins_settings$iter__48938(cljs.core.rest(s__48939__$2)));
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
