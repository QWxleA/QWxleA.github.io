goog.provide('frontend.extensions.zotero');
frontend.extensions.zotero.term_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
frontend.extensions.zotero.debounce_chan_mult = cljs.core.async.mult(frontend.extensions.zotero.api.debounce(frontend.extensions.zotero.term_chan,(500)));
frontend.extensions.zotero.zotero_search_item = rum.core.lazy_build(rum.core.build_defc,(function (p__58141,id){
var map__58142 = p__58141;
var map__58142__$1 = cljs.core.__destructure_map(map__58142);
var item = map__58142__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58142__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vec__58143 = rum.core.use_state(false);
var is_creating_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58143,(0),null);
var set_is_creating_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58143,(1),null);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
var type = new cljs.core.Keyword(null,"item-type","item-type",-73995695).cljs$core$IFn$_invoke$arity$1(data);
var abstract$ = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968).cljs$core$IFn$_invoke$arity$1(data),(0),(200)),"..."].join('');
return daiquiri.core.create_element("div",{'onClick':(function (){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58155){
var state_val_58156 = (state_58155[(1)]);
if((state_val_58156 === (1))){
var inst_58146 = (set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_is_creating_page_BANG_.call(null,true));
var inst_58147 = [new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027)];
var inst_58148 = [id];
var inst_58149 = cljs.core.PersistentHashMap.fromArrays(inst_58147,inst_58148);
var inst_58150 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(item,inst_58149);
var state_58155__$1 = (function (){var statearr_58157 = state_58155;
(statearr_58157[(7)] = inst_58146);

return statearr_58157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58155__$1,(2),inst_58150);
} else {
if((state_val_58156 === (2))){
var inst_58152 = (state_58155[(2)]);
var inst_58153 = (set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_is_creating_page_BANG_.call(null,false));
var state_58155__$1 = (function (){var statearr_58158 = state_58155;
(statearr_58158[(8)] = inst_58152);

return statearr_58158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58155__$1,inst_58153);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58159 = [null,null,null,null,null,null,null,null,null];
(statearr_58159[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58159[(1)] = (1));

return statearr_58159;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58155){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58155);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58160){var ex__27576__auto__ = e58160;
var statearr_58161_58705 = state_58155;
(statearr_58161_58705[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58155[(4)]))){
var statearr_58162_58706 = state_58155;
(statearr_58162_58706[(1)] = cljs.core.first((state_58155[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58707 = state_58155;
state_58155 = G__58707;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58155){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58163 = f__27596__auto__();
(statearr_58163[(6)] = c__27595__auto__);

return statearr_58163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}),'className':"zotero-search-item px-2 py-4 border-b cursor-pointer border-solid last:border-none relative"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold.mb-1.mr-1","span.font-bold.mb-1.mr-1",469152989),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zotero-search-item-type.text-xs.p-1.rounded","span.zotero-search-item-type.text-xs.p-1.rounded",1831300718),type], null)], null)], null),(function (){var attrs58164 = abstract$;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58164))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs58164], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs58164))?null:[attrs58164]));
})()], null)),(cljs.core.truth_(is_creating_page)?daiquiri.core.create_element("div",{'className':"zotero-search-item-loading-indicator"},[(function (){var attrs58165 = frontend.components.svg.refresh;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs58165))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["animate-spin-reverse"], null)], null),attrs58165], 0))):{'className':"animate-spin-reverse"}),((cljs.core.map_QMARK_(attrs58165))?null:[daiquiri.interpreter.interpret(attrs58165)]));
})()]):null)]);
}),null,"frontend.extensions.zotero/zotero-search-item");
frontend.extensions.zotero.zotero_search = rum.core.lazy_build(rum.core.build_defc,(function (id){
var vec__58166 = rum.core.use_state("");
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58166,(0),null);
var set_term_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58166,(1),null);
var vec__58169 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var search_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58169,(0),null);
var set_search_result_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58169,(1),null);
var vec__58172 = rum.core.use_state("");
var prev_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58172,(0),null);
var set_prev_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58172,(1),null);
var vec__58175 = rum.core.use_state("");
var next_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58175,(0),null);
var set_next_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58175,(1),null);
var vec__58178 = rum.core.use_state("");
var prev_search_term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58178,(0),null);
var set_prev_search_term_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58178,(1),null);
var vec__58181 = rum.core.use_state(null);
var search_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58181,(0),null);
var set_search_error_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58181,(1),null);
var vec__58184 = rum.core.use_state(false);
var is_searching = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58184,(0),null);
var set_is_searching_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58184,(1),null);
var search_fn = (function (s_term,start){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58216){
var state_val_58217 = (state_58216[(1)]);
if((state_val_58217 === (1))){
var inst_58188 = clojure.string.blank_QMARK_(s_term);
var state_58216__$1 = state_58216;
if(inst_58188){
var statearr_58218_58708 = state_58216__$1;
(statearr_58218_58708[(1)] = (2));

} else {
var statearr_58219_58709 = state_58216__$1;
(statearr_58219_58709[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58217 === (2))){
var state_58216__$1 = state_58216;
var statearr_58220_58710 = state_58216__$1;
(statearr_58220_58710[(2)] = null);

(statearr_58220_58710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58217 === (3))){
var inst_58191 = (set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_is_searching_BANG_.call(null,true));
var inst_58193 = frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2(s_term,start);
var state_58216__$1 = (function (){var statearr_58221 = state_58216;
(statearr_58221[(7)] = inst_58191);

return statearr_58221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58216__$1,(5),inst_58193);
} else {
if((state_val_58217 === (4))){
var inst_58214 = (state_58216[(2)]);
var state_58216__$1 = state_58216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58216__$1,inst_58214);
} else {
if((state_val_58217 === (5))){
var inst_58196 = (state_58216[(8)]);
var inst_58195 = (state_58216[(2)]);
var inst_58196__$1 = cljs.core.__destructure_map(inst_58195);
var inst_58197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58196__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_58198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58196__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_58199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58196__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_58200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58196__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_58201 = inst_58197 === false;
var state_58216__$1 = (function (){var statearr_58222 = state_58216;
(statearr_58222[(8)] = inst_58196__$1);

(statearr_58222[(9)] = inst_58198);

(statearr_58222[(10)] = inst_58199);

(statearr_58222[(11)] = inst_58200);

return statearr_58222;
})();
if(cljs.core.truth_(inst_58201)){
var statearr_58224_58711 = state_58216__$1;
(statearr_58224_58711[(1)] = (6));

} else {
var statearr_58225_58712 = state_58216__$1;
(statearr_58225_58712[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58217 === (6))){
var inst_58196 = (state_58216[(8)]);
var inst_58203 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_58196);
var inst_58204 = (set_search_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_error_BANG_.cljs$core$IFn$_invoke$arity$1(inst_58203) : set_search_error_BANG_.call(null,inst_58203));
var state_58216__$1 = state_58216;
var statearr_58226_58713 = state_58216__$1;
(statearr_58226_58713[(2)] = inst_58204);

(statearr_58226_58713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58217 === (7))){
var inst_58198 = (state_58216[(9)]);
var inst_58199 = (state_58216[(10)]);
var inst_58200 = (state_58216[(11)]);
var inst_58206 = (set_prev_search_term_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prev_search_term_BANG_.cljs$core$IFn$_invoke$arity$1(s_term) : set_prev_search_term_BANG_.call(null,s_term));
var inst_58207 = (set_next_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_next_page_BANG_.cljs$core$IFn$_invoke$arity$1(inst_58198) : set_next_page_BANG_.call(null,inst_58198));
var inst_58208 = (set_prev_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prev_page_BANG_.cljs$core$IFn$_invoke$arity$1(inst_58199) : set_prev_page_BANG_.call(null,inst_58199));
var inst_58209 = (set_search_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_result_BANG_.cljs$core$IFn$_invoke$arity$1(inst_58200) : set_search_result_BANG_.call(null,inst_58200));
var state_58216__$1 = (function (){var statearr_58227 = state_58216;
(statearr_58227[(12)] = inst_58208);

(statearr_58227[(13)] = inst_58206);

(statearr_58227[(14)] = inst_58207);

return statearr_58227;
})();
var statearr_58228_58714 = state_58216__$1;
(statearr_58228_58714[(2)] = inst_58209);

(statearr_58228_58714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58217 === (8))){
var inst_58211 = (state_58216[(2)]);
var inst_58212 = (set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_is_searching_BANG_.call(null,false));
var state_58216__$1 = (function (){var statearr_58229 = state_58216;
(statearr_58229[(15)] = inst_58211);

return statearr_58229;
})();
var statearr_58230_58715 = state_58216__$1;
(statearr_58230_58715[(2)] = inst_58212);

(statearr_58230_58715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58231[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58231[(1)] = (1));

return statearr_58231;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58216){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58216);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58232){var ex__27576__auto__ = e58232;
var statearr_58233_58716 = state_58216;
(statearr_58233_58716[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58216[(4)]))){
var statearr_58234_58717 = state_58216;
(statearr_58234_58717[(1)] = cljs.core.first((state_58216[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58719 = state_58216;
state_58216 = G__58719;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58216){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58235 = f__27596__auto__();
(statearr_58235[(6)] = c__27595__auto__);

return statearr_58235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var d_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.debounce_chan_mult,d_chan);

var c__27595__auto___58720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58246){
var state_val_58247 = (state_58246[(1)]);
if((state_val_58247 === (1))){
var state_58246__$1 = state_58246;
var statearr_58248_58721 = state_58246__$1;
(statearr_58248_58721[(2)] = null);

(statearr_58248_58721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58247 === (2))){
var state_58246__$1 = state_58246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58246__$1,(4),d_chan);
} else {
if((state_val_58247 === (3))){
var inst_58244 = (state_58246[(2)]);
var state_58246__$1 = state_58246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58246__$1,inst_58244);
} else {
if((state_val_58247 === (4))){
var inst_58238 = (state_58246[(2)]);
var inst_58239 = search_fn(inst_58238,"0");
var state_58246__$1 = state_58246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58246__$1,(5),inst_58239);
} else {
if((state_val_58247 === (5))){
var inst_58241 = (state_58246[(2)]);
var state_58246__$1 = (function (){var statearr_58249 = state_58246;
(statearr_58249[(7)] = inst_58241);

return statearr_58249;
})();
var statearr_58250_58722 = state_58246__$1;
(statearr_58250_58722[(2)] = null);

(statearr_58250_58722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58251 = [null,null,null,null,null,null,null,null];
(statearr_58251[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58251[(1)] = (1));

return statearr_58251;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58246){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58246);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58252){var ex__27576__auto__ = e58252;
var statearr_58253_58725 = state_58246;
(statearr_58253_58725[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58246[(4)]))){
var statearr_58254_58726 = state_58246;
(statearr_58254_58726[(1)] = cljs.core.first((state_58246[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58727 = state_58246;
state_58246 = G__58727;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58246){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58255 = f__27596__auto__();
(statearr_58255[(6)] = c__27595__auto___58720);

return statearr_58255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return (function (){
return cljs.core.async.untap(frontend.extensions.zotero.debounce_chan_mult,d_chan);
});
}),cljs.core.PersistentVector.EMPTY);

if(frontend.extensions.zotero.setting.valid_QMARK_()){
} else {
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"zotero-setting","zotero-setting",-1619504499)], null));

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Please setup Zotero API key and user/group id first!",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
}

return daiquiri.core.create_element("div",{'id':"zotero-search",'style':{'width':(720)},'className':"zotero-search p-4"},[daiquiri.core.create_element("div",{'className':"flex items-center mb-2"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.p-2.border.mr-2.flex-1.focus:outline-none","input.p-2.border.mr-2.flex-1.focus:outline-none",467501052),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search for your Zotero journal article (title, author, text, anything)",new cljs.core.Keyword(null,"value","value",305978217),term,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var c__27595__auto___58730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58261){
var state_val_58262 = (state_58261[(1)]);
if((state_val_58262 === (1))){
var inst_58257 = frontend.util.evalue(e);
var state_58261__$1 = state_58261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58261__$1,(2),frontend.extensions.zotero.term_chan,inst_58257);
} else {
if((state_val_58262 === (2))){
var inst_58259 = (state_58261[(2)]);
var state_58261__$1 = state_58261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58261__$1,inst_58259);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58263 = [null,null,null,null,null,null,null];
(statearr_58263[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58263[(1)] = (1));

return statearr_58263;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58261){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58261);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58264){var ex__27576__auto__ = e58264;
var statearr_58265_58731 = state_58261;
(statearr_58265_58731[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58261[(4)]))){
var statearr_58266_58733 = state_58261;
(statearr_58266_58733[(1)] = cljs.core.first((state_58261[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58735 = state_58261;
state_58261 = G__58735;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58261){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58267 = f__27596__auto__();
(statearr_58267[(6)] = c__27595__auto___58730);

return statearr_58267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


var G__58268 = frontend.util.evalue(e);
return (set_term_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_term_BANG_.cljs$core$IFn$_invoke$arity$1(G__58268) : set_term_BANG_.call(null,G__58268));
})], null)], null),daiquiri.core.create_element("span",{'style':{'visibility':(cljs.core.truth_(is_searching)?"visible":"hidden")},'className':"animate-spin-reverse"},[daiquiri.interpreter.interpret(frontend.components.svg.refresh)])], null))]),daiquiri.core.create_element("div",{'className':"h-2 text-sm text-red-400 mb-2"},[(cljs.core.truth_(search_error)?["Search error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_error)].join(''):"")]),(function (){var attrs58256 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return rum.core.with_key(frontend.extensions.zotero.zotero_search_item(item,id),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
}),search_result);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58256))?daiquiri.interpreter.element_attributes(attrs58256):null),((cljs.core.map_QMARK_(attrs58256))?[((clojure.string.blank_QMARK_(prev_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("prev",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58284){
var state_val_58285 = (state_58284[(1)]);
if((state_val_58285 === (1))){
var inst_58280 = search_fn(prev_search_term,prev_page);
var state_58284__$1 = state_58284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58284__$1,(2),inst_58280);
} else {
if((state_val_58285 === (2))){
var inst_58282 = (state_58284[(2)]);
var state_58284__$1 = state_58284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58284__$1,inst_58282);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58286 = [null,null,null,null,null,null,null];
(statearr_58286[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58286[(1)] = (1));

return statearr_58286;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58284){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58284);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58287){var ex__27576__auto__ = e58287;
var statearr_58288_58738 = state_58284;
(statearr_58288_58738[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58284[(4)]))){
var statearr_58289_58739 = state_58284;
(statearr_58289_58739[(1)] = cljs.core.first((state_58284[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58740 = state_58284;
state_58284 = G__58740;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58284){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58290 = f__27596__auto__();
(statearr_58290[(6)] = c__27595__auto__);

return statearr_58290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0)))),((clojure.string.blank_QMARK_(next_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58306){
var state_val_58307 = (state_58306[(1)]);
if((state_val_58307 === (1))){
var inst_58302 = search_fn(prev_search_term,next_page);
var state_58306__$1 = state_58306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58306__$1,(2),inst_58302);
} else {
if((state_val_58307 === (2))){
var inst_58304 = (state_58306[(2)]);
var state_58306__$1 = state_58306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58306__$1,inst_58304);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58312 = [null,null,null,null,null,null,null];
(statearr_58312[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58312[(1)] = (1));

return statearr_58312;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58306){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58306);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58313){var ex__27576__auto__ = e58313;
var statearr_58314_58743 = state_58306;
(statearr_58314_58743[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58306[(4)]))){
var statearr_58315_58744 = state_58306;
(statearr_58315_58744[(1)] = cljs.core.first((state_58306[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58745 = state_58306;
state_58306 = G__58745;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58306){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58317 = f__27596__auto__();
(statearr_58317[(6)] = c__27595__auto__);

return statearr_58317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0))))]:[daiquiri.interpreter.interpret(attrs58256),((clojure.string.blank_QMARK_(prev_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("prev",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58343){
var state_val_58344 = (state_58343[(1)]);
if((state_val_58344 === (1))){
var inst_58339 = search_fn(prev_search_term,prev_page);
var state_58343__$1 = state_58343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58343__$1,(2),inst_58339);
} else {
if((state_val_58344 === (2))){
var inst_58341 = (state_58343[(2)]);
var state_58343__$1 = state_58343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58343__$1,inst_58341);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58345 = [null,null,null,null,null,null,null];
(statearr_58345[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58345[(1)] = (1));

return statearr_58345;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58343){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58343);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58346){var ex__27576__auto__ = e58346;
var statearr_58347_58746 = state_58343;
(statearr_58347_58746[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58343[(4)]))){
var statearr_58348_58747 = state_58343;
(statearr_58348_58747[(1)] = cljs.core.first((state_58343[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58748 = state_58343;
state_58343 = G__58748;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58343){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58353 = f__27596__auto__();
(statearr_58353[(6)] = c__27595__auto__);

return statearr_58353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0)))),((clojure.string.blank_QMARK_(next_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58369){
var state_val_58370 = (state_58369[(1)]);
if((state_val_58370 === (1))){
var inst_58365 = search_fn(prev_search_term,next_page);
var state_58369__$1 = state_58369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58369__$1,(2),inst_58365);
} else {
if((state_val_58370 === (2))){
var inst_58367 = (state_58369[(2)]);
var state_58369__$1 = state_58369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58369__$1,inst_58367);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58375 = [null,null,null,null,null,null,null];
(statearr_58375[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58375[(1)] = (1));

return statearr_58375;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58369){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58369);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58376){var ex__27576__auto__ = e58376;
var statearr_58381_58751 = state_58369;
(statearr_58381_58751[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58369[(4)]))){
var statearr_58382_58752 = state_58369;
(statearr_58382_58752[(1)] = cljs.core.first((state_58369[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58753 = state_58369;
state_58369 = G__58753;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58369){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58387 = f__27596__auto__();
(statearr_58387[(6)] = c__27595__auto__);

return statearr_58387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0))))]));
})()]);
}),null,"frontend.extensions.zotero/zotero-search");
frontend.extensions.zotero.user_or_group_setting = rum.core.lazy_build(rum.core.build_defcs,(function (state){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_type"},["Zotero user or group?"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("select",{'value':cljs.core.name(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type","type",1174270348))),'onChange':rum.core.mark_sync_update((function (e){
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(frontend.util.evalue(e)));
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"type","type",1174270348),type);
})),'className':"form-select"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$extensions$zotero$iter__58396(s__58397){
return (new cljs.core.LazySeq(null,(function (){
var s__58397__$1 = s__58397;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58397__$1);
if(temp__5720__auto__){
var s__58397__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58397__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58397__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58399 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58398 = (0);
while(true){
if((i__58398 < size__5519__auto__)){
var type = cljs.core._nth(c__5518__auto__,i__58398);
cljs.core.chunk_append(b__58399,daiquiri.core.create_element("option",{'key':type,'value':type},[clojure.string.capitalize(type)]));

var G__58756 = (i__58398 + (1));
i__58398 = G__58756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58399),frontend$extensions$zotero$iter__58396(cljs.core.chunk_rest(s__58397__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58399),null);
}
} else {
var type = cljs.core.first(s__58397__$2);
return cljs.core.cons(daiquiri.core.create_element("option",{'key':type,'value':type},[clojure.string.capitalize(type)]),frontend$extensions$zotero$iter__58396(cljs.core.rest(s__58397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"group","group",582596132)], null)));
})())])])])]),daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_type_id"},["User or Group ID"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type-id","type-id",2030062700)),'placeholder':"User/Group id",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"type-id","type-id",2030062700),frontend.util.evalue(e));
}),'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795).cljs$core$IFn$_invoke$arity$1(state),frontend.util.evalue(e));
})),'className':"form-input block"},[])])])]),(((((!(clojure.string.blank_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795).cljs$core$IFn$_invoke$arity$1(state))))))) && (cljs.core.not(cljs.core.re_matches(/^\d+$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795).cljs$core$IFn$_invoke$arity$1(state))))))))?daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500","p.text-red-500",1193745313),"User ID is different from username and can be found on the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.zotero.org/settings/keys",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"https://www.zotero.org/settings/keys"], null)," page, it's a number of digits"], null))):null)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type-id","type-id",2030062700)),new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795)),rum.core.reactive], null),"frontend.extensions.zotero/user-or-group-setting");
frontend.extensions.zotero.overwrite_mode_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_overwrite_mode"},["Overwrite existing item page?"]),daiquiri.core.create_element("div",null,[(function (){var attrs58412 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58412))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs58412], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs58412))?null:[daiquiri.interpreter.interpret(attrs58412)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409)))?daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500","p.text-red-500",1193745313),"Dangerous! This will delete and recreate Zotero existing page! Make sure to backup your notes first in case something goes wrong. Make sure you don't put any personal item in previous Zotero page and it's OK to overwrite the page!"], null))):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/overwrite-mode-setting");
frontend.extensions.zotero.attachment_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_include_attachment_links"},["Include attachment links?"]),daiquiri.core.create_element("div",null,[(function (){var attrs58417 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58417))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs58417], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs58417))?null:[daiquiri.interpreter.interpret(attrs58417)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_attachments_block_text"},["Attachment under block of:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244)),'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_linked_attachment_base_directory"},["Zotero linked attachment base directory",daiquiri.core.create_element("a",{'title':"If you store attached files in Zotero \u2014 the default \u2014 this setting does not affect you. It only applies to linked files. If you're using the ZotFile plugin to help with a linked-file workflow, you should configure it to store linked files within the base directory you've configured. Click to learn more.",'href':"https://www.zotero.org/support/preferences/advanced#linked_attachment_base_directory",'target':"_blank",'className':"ml-2"},[daiquiri.interpreter.interpret(frontend.components.svg.info())])]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)),'placeholder':"/Users/Sarah/Dropbox",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/attachment-setting");
frontend.extensions.zotero.prefer_citekey_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'title':"Make sure to install Better BibTeX and pin your item first",'className':"title w-72",'htmlFor':"zotero_prefer_citekey"},["Use citekey as your page title?"]),daiquiri.core.create_element("div",null,[(function (){var attrs58434 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58434))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs58434], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs58434))?null:[daiquiri.interpreter.interpret(attrs58434)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/prefer-citekey-setting");
frontend.extensions.zotero.api_key_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_api_key"},["Zotero API key"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.api_key(),'placeholder':"Please enter your Zotero API key",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_api_key(frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/api-key-setting");
frontend.extensions.zotero.notes_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_include_notes"},["Include notes?"]),daiquiri.core.create_element("div",null,[(function (){var attrs58456 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58456))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs58456], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs58456))?null:[daiquiri.interpreter.interpret(attrs58456)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title",'htmlFor':"zotero_notes_block_text"},["Notes under block of:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518)),'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/notes-setting");
frontend.extensions.zotero.page_prefix_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title",'htmlFor':"zotero_page_prefix"},["Insert page name with prefix:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"page-insert-prefix","page-insert-prefix",1646035089)),'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"page-insert-prefix","page-insert-prefix",1646035089),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/page-prefix-setting");
frontend.extensions.zotero.extra_tags_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'title':"Extra tags to add for every imported page. Separate by comma, or leave it empty.",'className':"title",'htmlFor':"zotero_extra_tags"},["Extra tags to add:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"extra-tags","extra-tags",-1152617311)),'placeholder':"tag1,tag2,tag3",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"extra-tags","extra-tags",-1152617311),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/extra-tags-setting");
frontend.extensions.zotero.data_directory_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title",'htmlFor':"zotero_data_directory"},["Zotero data directory",daiquiri.core.create_element("a",{'title':"Set Zotero data directory to open pdf attachment in Logseq. Click to learn more.",'href':"https://www.zotero.org/support/zotero_data",'target':"_blank",'className':"ml-2"},[daiquiri.interpreter.interpret(frontend.components.svg.info())])]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088)),'placeholder':"/Users/<username>/Zotero",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/data-directory-setting");
frontend.extensions.zotero.profile_name_dialog_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,profile_STAR_,close_fn){
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.extensions.zotero","input","frontend.extensions.zotero/input",168338460));
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"sm:flex sm:items-start"},[daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h3",{'id':"modal-headline",'className':"text-lg leading-6 font-medium"},["Please enter your profile name"])])]),daiquiri.core.create_element("input",{'autoFocus':true,'defaultValue':"",'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(input,frontend.util.evalue(e));
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},[]),daiquiri.core.create_element("div",{'className':"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},[daiquiri.core.create_element("span",{'className':"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},[daiquiri.core.create_element("button",{'type':"button",'onClick':(function (){
var profile_name = clojure.string.trim(cljs.core.deref(input));
if(clojure.string.blank_QMARK_(profile_name)){
} else {
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.add_profile(profile_name),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.set_profile(profile_name),(function (___$1){
return promesa.protocols._promise(cljs.core.reset_BANG_(profile_STAR_,profile_name));
}));
}));
}));
}

return frontend.state.close_modal_BANG_();
}),'className':"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-720 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5 ui__modal-enter"},["Submit"])]),daiquiri.core.create_element("span",{'className':"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},[daiquiri.core.create_element("button",{'type':"button",'onClick':close_fn,'className':"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"},["Cancel"])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.extensions.zotero","input","frontend.extensions.zotero/input",168338460))], null),"frontend.extensions.zotero/profile-name-dialog-inner");
frontend.extensions.zotero.zotero_profile_selector = rum.core.lazy_build(rum.core.build_defc,(function (profile_STAR_){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"mr-32",'htmlFor':"profile-select"},["Choose a profile:"]),daiquiri.core.create_element("span",{'className':"justify-evenly"},[daiquiri.core.create_element("select",{'value':cljs.core.deref(profile_STAR_),'onChange':rum.core.mark_sync_update((function (e){
var temp__5720__auto__ = frontend.util.evalue(e);
if(cljs.core.truth_(temp__5720__auto__)){
var profile = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.set_profile(profile),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(profile_STAR_,profile));
}));
}));
} else {
return null;
}
}))},[daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null);
}),frontend.extensions.zotero.setting.all_profiles()))]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("New profile",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"class","class",-2030961996),"ml-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (close_fn){
return frontend.extensions.zotero.profile_name_dialog_inner(profile_STAR_,close_fn);
}));
})], 0))),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Delete profile!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"background","background",-863952629),"red",new cljs.core.Keyword(null,"class","class",-2030961996),"ml-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___28360__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.remove_profile(cljs.core.deref(profile_STAR_)),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(profile_STAR_,frontend.extensions.zotero.setting.profile()));
}));
}));
})], 0)))])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/zotero-profile-selector");
frontend.extensions.zotero.add_all_items = rum.core.lazy_build(rum.core.build_defcs,(function (state){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_import_all"},["Add all zotero items"]),(function (){var attrs58615 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58639){
var state_val_58640 = (state_58639[(1)]);
if((state_val_58640 === (1))){
var inst_58616 = new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state);
var inst_58617 = cljs.core.reset_BANG_(inst_58616,"Fetching..");
var inst_58618 = frontend.extensions.zotero.api.all_top_items_count();
var state_58639__$1 = (function (){var statearr_58642 = state_58639;
(statearr_58642[(7)] = inst_58617);

return statearr_58642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58639__$1,(2),inst_58618);
} else {
if((state_val_58640 === (2))){
var inst_58620 = (state_58639[(8)]);
var inst_58620__$1 = (state_58639[(2)]);
var inst_58621 = new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state);
var inst_58622 = cljs.core.reset_BANG_(inst_58621,"Add all");
var inst_58623 = ["This will import all your zotero items and add total number of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58620__$1)," pages. Do you wish to continue?"].join('');
var inst_58624 = window.confirm(inst_58623);
var state_58639__$1 = (function (){var statearr_58643 = state_58639;
(statearr_58643[(9)] = inst_58622);

(statearr_58643[(8)] = inst_58620__$1);

return statearr_58643;
})();
if(cljs.core.truth_(inst_58624)){
var statearr_58645_58776 = state_58639__$1;
(statearr_58645_58776[(1)] = (3));

} else {
var statearr_58646_58777 = state_58639__$1;
(statearr_58646_58777[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58640 === (3))){
var inst_58620 = (state_58639[(8)]);
var inst_58626 = new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state);
var inst_58627 = cljs.core.reset_BANG_(inst_58626,inst_58620);
var inst_58628 = new cljs.core.Keyword("frontend.extensions.zotero","progress","frontend.extensions.zotero/progress",-1187409602).cljs$core$IFn$_invoke$arity$1(state);
var inst_58629 = frontend.extensions.zotero.handler.add_all(inst_58628);
var state_58639__$1 = (function (){var statearr_58647 = state_58639;
(statearr_58647[(10)] = inst_58627);

return statearr_58647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58639__$1,(6),inst_58629);
} else {
if((state_val_58640 === (4))){
var state_58639__$1 = state_58639;
var statearr_58648_58778 = state_58639__$1;
(statearr_58648_58778[(2)] = null);

(statearr_58648_58778[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58640 === (5))){
var inst_58637 = (state_58639[(2)]);
var state_58639__$1 = state_58639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58639__$1,inst_58637);
} else {
if((state_val_58640 === (6))){
var inst_58631 = (state_58639[(2)]);
var inst_58632 = new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state);
var inst_58633 = cljs.core.reset_BANG_(inst_58632,false);
var inst_58634 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Successfully added all items!",new cljs.core.Keyword(null,"success","success",1890645906));
var state_58639__$1 = (function (){var statearr_58649 = state_58639;
(statearr_58649[(11)] = inst_58633);

(statearr_58649[(12)] = inst_58631);

return statearr_58649;
})();
var statearr_58650_58779 = state_58639__$1;
(statearr_58650_58779[(2)] = inst_58634);

(statearr_58650_58779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$state_machine__27573__auto____0 = (function (){
var statearr_58651 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58651[(0)] = frontend$extensions$zotero$state_machine__27573__auto__);

(statearr_58651[(1)] = (1));

return statearr_58651;
});
var frontend$extensions$zotero$state_machine__27573__auto____1 = (function (state_58639){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58639);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58652){var ex__27576__auto__ = e58652;
var statearr_58653_58781 = state_58639;
(statearr_58653_58781[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58639[(4)]))){
var statearr_58654_58782 = state_58639;
(statearr_58654_58782[(1)] = cljs.core.first((state_58639[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58783 = state_58639;
state_58639 = G__58783;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__27573__auto__ = function(state_58639){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__27573__auto____1.call(this,state_58639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__27573__auto____0;
frontend$extensions$zotero$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__27573__auto____1;
return frontend$extensions$zotero$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58655 = f__27596__auto__();
(statearr_58655[(6)] = c__27595__auto__);

return statearr_58655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58615))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1","sm:mt-0","sm:col-span-2"], null)], null),attrs58615], 0))):{'className':"mt-1 sm:mt-0 sm:col-span-2"}),((cljs.core.map_QMARK_(attrs58615))?null:[daiquiri.interpreter.interpret(attrs58615)]));
})()]),daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),"If you have a lot of items in Zotero, adding them all can slow down Logseq. You can type /zotero to import specific item on demand instead.")),(cljs.core.truth_(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("div",{'className':"bg-greenred-200 py-3 rounded-lg col-span-full"},[daiquiri.core.create_element("progress",{'max':(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state)) + (30)),'value':cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","progress","frontend.extensions.zotero/progress",-1187409602).cljs$core$IFn$_invoke$arity$1(state)),'className':"w-full"},[]),"Importing items from Zotero....Please wait..."])]):null)]);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.extensions.zotero","progress","frontend.extensions.zotero/progress",-1187409602)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901)),rum.core.local.cljs$core$IFn$_invoke$arity$2("Add all",new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561)),rum.core.reactive], null),"frontend.extensions.zotero/add-all-items");
frontend.extensions.zotero.setting_rows = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[frontend.extensions.zotero.api_key_setting(),frontend.extensions.zotero.user_or_group_setting(),frontend.extensions.zotero.prefer_citekey_setting(),frontend.extensions.zotero.attachment_setting(),frontend.extensions.zotero.notes_setting(),frontend.extensions.zotero.page_prefix_setting(),frontend.extensions.zotero.extra_tags_setting(),frontend.extensions.zotero.data_directory_setting(),frontend.extensions.zotero.overwrite_mode_setting()]);
}),null,"frontend.extensions.zotero/setting-rows");
frontend.extensions.zotero.settings = rum.core.lazy_build(rum.core.build_defcs,(function (state){
return daiquiri.core.create_element("div",{'className':"zotero-settings"},[daiquiri.core.create_element("h1",{'className':"mb-4 text-4xl font-bold mb-8"},["Zotero Settings"]),frontend.extensions.zotero.zotero_profile_selector(new cljs.core.Keyword("frontend.extensions.zotero","profile","frontend.extensions.zotero/profile",100514749).cljs$core$IFn$_invoke$arity$1(state)),rum.core.with_key(frontend.extensions.zotero.setting_rows(),cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","profile","frontend.extensions.zotero/profile",100514749).cljs$core$IFn$_invoke$arity$1(state))),frontend.extensions.zotero.add_all_items()]);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.all_profiles(),new cljs.core.Keyword("frontend.extensions.zotero","all-profiles","frontend.extensions.zotero/all-profiles",1393094078)),rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.profile(),new cljs.core.Keyword("frontend.extensions.zotero","profile","frontend.extensions.zotero/profile",100514749)),rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,_new_state){
var all_profiles = frontend.extensions.zotero.setting.all_profiles();
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(all_profiles,cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","all-profiles","frontend.extensions.zotero/all-profiles",1393094078).cljs$core$IFn$_invoke$arity$1(old_state)));
})], null)], null),"frontend.extensions.zotero/settings");
frontend.extensions.zotero.open_button = (function frontend$extensions$zotero$open_button(full_path){
if(clojure.string.ends_with_QMARK_(clojure.string.lower_case(full_path),"pdf")){
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("open",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5720__auto__ = frontend.extensions.pdf.assets.inflate_asset(full_path);
if(cljs.core.truth_(temp__5720__auto__)){
var current = temp__5720__auto__;
frontend.util.stop(e);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),current);
} else {
return null;
}
})], 0));
} else {
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("open",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),full_path], 0));
}
});
frontend.extensions.zotero.zotero_imported_file = rum.core.lazy_build(rum.core.build_defc,(function (item_key,filename){
if(clojure.string.blank_QMARK_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088)))){
return daiquiri.core.create_element("p",{'className':"warning"},["This is a zotero imported file, setting Zotero data directory would allow you to open the file in Logseq"]);
} else {
var filename__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(filename);
var full_path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__58689 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088));
var G__58690 = "storage";
var G__58691 = item_key;
var G__58692 = filename__$1;
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4(G__58689,G__58690,G__58691,G__58692) : frontend.util.node_path.join.call(null,G__58689,G__58690,G__58691,G__58692));
})())].join('');
return daiquiri.interpreter.interpret(frontend.extensions.zotero.open_button(full_path));
}
}),null,"frontend.extensions.zotero/zotero-imported-file");
frontend.extensions.zotero.zotero_linked_file = rum.core.lazy_build(rum.core.build_defc,(function (path){
if(clojure.string.blank_QMARK_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)))){
return daiquiri.core.create_element("p",{'className':"warning"},["This is a zotero linked file, setting Zotero linked attachment base directory would allow you to open the file in Logseq"]);
} else {
var path__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(path);
var full_path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__58700 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118));
var G__58701 = clojure.string.replace_first(path__$1,"attachments:","");
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__58700,G__58701) : frontend.util.node_path.join.call(null,G__58700,G__58701));
})())].join('');
return daiquiri.interpreter.interpret(frontend.extensions.zotero.open_button(full_path));
}
}),null,"frontend.extensions.zotero/zotero-linked-file");

//# sourceMappingURL=frontend.extensions.zotero.js.map
