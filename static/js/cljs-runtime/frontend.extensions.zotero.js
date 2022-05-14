goog.provide('frontend.extensions.zotero');
frontend.extensions.zotero.term_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
frontend.extensions.zotero.debounce_chan_mult = cljs.core.async.mult(frontend.extensions.zotero.api.debounce(frontend.extensions.zotero.term_chan,(500)));
frontend.extensions.zotero.zotero_search_item = rum.core.lazy_build(rum.core.build_defc,(function (p__68146,id){
var map__68147 = p__68146;
var map__68147__$1 = cljs.core.__destructure_map(map__68147);
var item = map__68147__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68147__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vec__68148 = rum.core.use_state(false);
var is_creating_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68148,(0),null);
var set_is_creating_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68148,(1),null);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data);
var type = new cljs.core.Keyword(null,"item-type","item-type",-73995695).cljs$core$IFn$_invoke$arity$1(data);
var abstract$ = [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968).cljs$core$IFn$_invoke$arity$1(data),(0),(200)),"..."].join('');
return daiquiri.core.create_element("div",{'onClick':(function (){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68160){
var state_val_68161 = (state_68160[(1)]);
if((state_val_68161 === (1))){
var inst_68151 = (set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_is_creating_page_BANG_.call(null,true));
var inst_68152 = [new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027)];
var inst_68153 = [id];
var inst_68154 = cljs.core.PersistentHashMap.fromArrays(inst_68152,inst_68153);
var inst_68155 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(item,inst_68154);
var state_68160__$1 = (function (){var statearr_68165 = state_68160;
(statearr_68165[(7)] = inst_68151);

return statearr_68165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68160__$1,(2),inst_68155);
} else {
if((state_val_68161 === (2))){
var inst_68157 = (state_68160[(2)]);
var inst_68158 = (set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_creating_page_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_is_creating_page_BANG_.call(null,false));
var state_68160__$1 = (function (){var statearr_68166 = state_68160;
(statearr_68166[(8)] = inst_68157);

return statearr_68166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68160__$1,inst_68158);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68167 = [null,null,null,null,null,null,null,null,null];
(statearr_68167[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68167[(1)] = (1));

return statearr_68167;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68160){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68160);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68168){var ex__41842__auto__ = e68168;
var statearr_68171_68754 = state_68160;
(statearr_68171_68754[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68160[(4)]))){
var statearr_68172_68755 = state_68160;
(statearr_68172_68755[(1)] = cljs.core.first((state_68160[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68756 = state_68160;
state_68160 = G__68756;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68160){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68173 = f__41862__auto__();
(statearr_68173[(6)] = c__41861__auto__);

return statearr_68173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}),'className':"zotero-search-item px-2 py-4 border-b cursor-pointer border-solid last:border-none relative"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold.mb-1.mr-1","span.font-bold.mb-1.mr-1",469152989),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.zotero-search-item-type.text-xs.p-1.rounded","span.zotero-search-item-type.text-xs.p-1.rounded",1831300718),type], null)], null)], null),(function (){var attrs68174 = abstract$;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68174))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs68174], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs68174))?null:[attrs68174]));
})()], null)),(cljs.core.truth_(is_creating_page)?daiquiri.core.create_element("div",{'className':"zotero-search-item-loading-indicator"},[(function (){var attrs68179 = frontend.components.svg.refresh;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs68179))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["animate-spin-reverse"], null)], null),attrs68179], 0))):{'className':"animate-spin-reverse"}),((cljs.core.map_QMARK_(attrs68179))?null:[daiquiri.interpreter.interpret(attrs68179)]));
})()]):null)]);
}),null,"frontend.extensions.zotero/zotero-search-item");
frontend.extensions.zotero.zotero_search = rum.core.lazy_build(rum.core.build_defc,(function (id){
var vec__68191 = rum.core.use_state("");
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68191,(0),null);
var set_term_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68191,(1),null);
var vec__68194 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var search_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68194,(0),null);
var set_search_result_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68194,(1),null);
var vec__68197 = rum.core.use_state("");
var prev_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68197,(0),null);
var set_prev_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68197,(1),null);
var vec__68200 = rum.core.use_state("");
var next_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68200,(0),null);
var set_next_page_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68200,(1),null);
var vec__68203 = rum.core.use_state("");
var prev_search_term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68203,(0),null);
var set_prev_search_term_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68203,(1),null);
var vec__68206 = rum.core.use_state(null);
var search_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68206,(0),null);
var set_search_error_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68206,(1),null);
var vec__68209 = rum.core.use_state(false);
var is_searching = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68209,(0),null);
var set_is_searching_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68209,(1),null);
var search_fn = (function (s_term,start){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68251){
var state_val_68252 = (state_68251[(1)]);
if((state_val_68252 === (1))){
var inst_68223 = clojure.string.blank_QMARK_(s_term);
var state_68251__$1 = state_68251;
if(inst_68223){
var statearr_68253_68759 = state_68251__$1;
(statearr_68253_68759[(1)] = (2));

} else {
var statearr_68254_68760 = state_68251__$1;
(statearr_68254_68760[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68252 === (2))){
var state_68251__$1 = state_68251;
var statearr_68255_68761 = state_68251__$1;
(statearr_68255_68761[(2)] = null);

(statearr_68255_68761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68252 === (3))){
var inst_68226 = (set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_is_searching_BANG_.call(null,true));
var inst_68228 = frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2(s_term,start);
var state_68251__$1 = (function (){var statearr_68256 = state_68251;
(statearr_68256[(7)] = inst_68226);

return statearr_68256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68251__$1,(5),inst_68228);
} else {
if((state_val_68252 === (4))){
var inst_68249 = (state_68251[(2)]);
var state_68251__$1 = state_68251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68251__$1,inst_68249);
} else {
if((state_val_68252 === (5))){
var inst_68231 = (state_68251[(8)]);
var inst_68230 = (state_68251[(2)]);
var inst_68231__$1 = cljs.core.__destructure_map(inst_68230);
var inst_68232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68231__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_68233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68231__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_68234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68231__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_68235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68231__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_68236 = inst_68232 === false;
var state_68251__$1 = (function (){var statearr_68257 = state_68251;
(statearr_68257[(9)] = inst_68234);

(statearr_68257[(10)] = inst_68235);

(statearr_68257[(8)] = inst_68231__$1);

(statearr_68257[(11)] = inst_68233);

return statearr_68257;
})();
if(cljs.core.truth_(inst_68236)){
var statearr_68258_68762 = state_68251__$1;
(statearr_68258_68762[(1)] = (6));

} else {
var statearr_68259_68763 = state_68251__$1;
(statearr_68259_68763[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68252 === (6))){
var inst_68231 = (state_68251[(8)]);
var inst_68238 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_68231);
var inst_68239 = (set_search_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_error_BANG_.cljs$core$IFn$_invoke$arity$1(inst_68238) : set_search_error_BANG_.call(null,inst_68238));
var state_68251__$1 = state_68251;
var statearr_68260_68764 = state_68251__$1;
(statearr_68260_68764[(2)] = inst_68239);

(statearr_68260_68764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68252 === (7))){
var inst_68234 = (state_68251[(9)]);
var inst_68235 = (state_68251[(10)]);
var inst_68233 = (state_68251[(11)]);
var inst_68241 = (set_prev_search_term_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prev_search_term_BANG_.cljs$core$IFn$_invoke$arity$1(s_term) : set_prev_search_term_BANG_.call(null,s_term));
var inst_68242 = (set_next_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_next_page_BANG_.cljs$core$IFn$_invoke$arity$1(inst_68233) : set_next_page_BANG_.call(null,inst_68233));
var inst_68243 = (set_prev_page_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_prev_page_BANG_.cljs$core$IFn$_invoke$arity$1(inst_68234) : set_prev_page_BANG_.call(null,inst_68234));
var inst_68244 = (set_search_result_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_result_BANG_.cljs$core$IFn$_invoke$arity$1(inst_68235) : set_search_result_BANG_.call(null,inst_68235));
var state_68251__$1 = (function (){var statearr_68261 = state_68251;
(statearr_68261[(12)] = inst_68242);

(statearr_68261[(13)] = inst_68241);

(statearr_68261[(14)] = inst_68243);

return statearr_68261;
})();
var statearr_68262_68767 = state_68251__$1;
(statearr_68262_68767[(2)] = inst_68244);

(statearr_68262_68767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68252 === (8))){
var inst_68246 = (state_68251[(2)]);
var inst_68247 = (set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_is_searching_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_is_searching_BANG_.call(null,false));
var state_68251__$1 = (function (){var statearr_68263 = state_68251;
(statearr_68263[(15)] = inst_68246);

return statearr_68263;
})();
var statearr_68264_68768 = state_68251__$1;
(statearr_68264_68768[(2)] = inst_68247);

(statearr_68264_68768[(1)] = (4));


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
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68265[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68265[(1)] = (1));

return statearr_68265;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68251){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68251);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68267){var ex__41842__auto__ = e68267;
var statearr_68268_68769 = state_68251;
(statearr_68268_68769[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68251[(4)]))){
var statearr_68269_68770 = state_68251;
(statearr_68269_68770[(1)] = cljs.core.first((state_68251[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68771 = state_68251;
state_68251 = G__68771;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68251){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68270 = f__41862__auto__();
(statearr_68270[(6)] = c__41861__auto__);

return statearr_68270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var d_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.debounce_chan_mult,d_chan);

var c__41861__auto___68772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68281){
var state_val_68282 = (state_68281[(1)]);
if((state_val_68282 === (1))){
var state_68281__$1 = state_68281;
var statearr_68284_68773 = state_68281__$1;
(statearr_68284_68773[(2)] = null);

(statearr_68284_68773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68282 === (2))){
var state_68281__$1 = state_68281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68281__$1,(4),d_chan);
} else {
if((state_val_68282 === (3))){
var inst_68279 = (state_68281[(2)]);
var state_68281__$1 = state_68281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68281__$1,inst_68279);
} else {
if((state_val_68282 === (4))){
var inst_68273 = (state_68281[(2)]);
var inst_68274 = search_fn(inst_68273,"0");
var state_68281__$1 = state_68281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68281__$1,(5),inst_68274);
} else {
if((state_val_68282 === (5))){
var inst_68276 = (state_68281[(2)]);
var state_68281__$1 = (function (){var statearr_68286 = state_68281;
(statearr_68286[(7)] = inst_68276);

return statearr_68286;
})();
var statearr_68287_68774 = state_68281__$1;
(statearr_68287_68774[(2)] = null);

(statearr_68287_68774[(1)] = (2));


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
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68288 = [null,null,null,null,null,null,null,null];
(statearr_68288[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68288[(1)] = (1));

return statearr_68288;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68281){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68281);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68289){var ex__41842__auto__ = e68289;
var statearr_68290_68775 = state_68281;
(statearr_68290_68775[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68281[(4)]))){
var statearr_68291_68776 = state_68281;
(statearr_68291_68776[(1)] = cljs.core.first((state_68281[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68777 = state_68281;
state_68281 = G__68777;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68281){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68292 = f__41862__auto__();
(statearr_68292[(6)] = c__41861__auto___68772);

return statearr_68292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
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
var c__41861__auto___68780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68300){
var state_val_68301 = (state_68300[(1)]);
if((state_val_68301 === (1))){
var inst_68296 = frontend.util.evalue(e);
var state_68300__$1 = state_68300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68300__$1,(2),frontend.extensions.zotero.term_chan,inst_68296);
} else {
if((state_val_68301 === (2))){
var inst_68298 = (state_68300[(2)]);
var state_68300__$1 = state_68300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68300__$1,inst_68298);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68304 = [null,null,null,null,null,null,null];
(statearr_68304[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68304[(1)] = (1));

return statearr_68304;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68300){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68300);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68306){var ex__41842__auto__ = e68306;
var statearr_68307_68781 = state_68300;
(statearr_68307_68781[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68300[(4)]))){
var statearr_68308_68782 = state_68300;
(statearr_68308_68782[(1)] = cljs.core.first((state_68300[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68783 = state_68300;
state_68300 = G__68783;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68300){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68309 = f__41862__auto__();
(statearr_68309[(6)] = c__41861__auto___68780);

return statearr_68309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));


var G__68310 = frontend.util.evalue(e);
return (set_term_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_term_BANG_.cljs$core$IFn$_invoke$arity$1(G__68310) : set_term_BANG_.call(null,G__68310));
})], null)], null),daiquiri.core.create_element("span",{'style':{'visibility':(cljs.core.truth_(is_searching)?"visible":"hidden")},'className':"animate-spin-reverse"},[daiquiri.interpreter.interpret(frontend.components.svg.refresh)])], null))]),daiquiri.core.create_element("div",{'className':"h-2 text-sm text-red-400 mb-2"},[(cljs.core.truth_(search_error)?["Search error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_error)].join(''):"")]),(function (){var attrs68295 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return rum.core.with_key(frontend.extensions.zotero.zotero_search_item(item,id),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item));
}),search_result);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68295))?daiquiri.interpreter.element_attributes(attrs68295):null),((cljs.core.map_QMARK_(attrs68295))?[((clojure.string.blank_QMARK_(prev_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("prev",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68326){
var state_val_68327 = (state_68326[(1)]);
if((state_val_68327 === (1))){
var inst_68322 = search_fn(prev_search_term,prev_page);
var state_68326__$1 = state_68326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68326__$1,(2),inst_68322);
} else {
if((state_val_68327 === (2))){
var inst_68324 = (state_68326[(2)]);
var state_68326__$1 = state_68326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68326__$1,inst_68324);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68328 = [null,null,null,null,null,null,null];
(statearr_68328[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68328[(1)] = (1));

return statearr_68328;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68326){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68326);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68329){var ex__41842__auto__ = e68329;
var statearr_68330_68786 = state_68326;
(statearr_68330_68786[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68326[(4)]))){
var statearr_68331_68787 = state_68326;
(statearr_68331_68787[(1)] = cljs.core.first((state_68326[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68788 = state_68326;
state_68326 = G__68788;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68326){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68332 = f__41862__auto__();
(statearr_68332[(6)] = c__41861__auto__);

return statearr_68332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
})], 0)))),((clojure.string.blank_QMARK_(next_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68348){
var state_val_68349 = (state_68348[(1)]);
if((state_val_68349 === (1))){
var inst_68344 = search_fn(prev_search_term,next_page);
var state_68348__$1 = state_68348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68348__$1,(2),inst_68344);
} else {
if((state_val_68349 === (2))){
var inst_68346 = (state_68348[(2)]);
var state_68348__$1 = state_68348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68348__$1,inst_68346);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68351 = [null,null,null,null,null,null,null];
(statearr_68351[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68351[(1)] = (1));

return statearr_68351;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68348){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68348);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68353){var ex__41842__auto__ = e68353;
var statearr_68354_68789 = state_68348;
(statearr_68354_68789[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68348[(4)]))){
var statearr_68355_68790 = state_68348;
(statearr_68355_68790[(1)] = cljs.core.first((state_68348[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68791 = state_68348;
state_68348 = G__68791;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68348){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68356 = f__41862__auto__();
(statearr_68356[(6)] = c__41861__auto__);

return statearr_68356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
})], 0))))]:[daiquiri.interpreter.interpret(attrs68295),((clojure.string.blank_QMARK_(prev_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("prev",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68375){
var state_val_68376 = (state_68375[(1)]);
if((state_val_68376 === (1))){
var inst_68371 = search_fn(prev_search_term,prev_page);
var state_68375__$1 = state_68375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68375__$1,(2),inst_68371);
} else {
if((state_val_68376 === (2))){
var inst_68373 = (state_68375[(2)]);
var state_68375__$1 = state_68375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68375__$1,inst_68373);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68378 = [null,null,null,null,null,null,null];
(statearr_68378[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68378[(1)] = (1));

return statearr_68378;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68375){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68375);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68379){var ex__41842__auto__ = e68379;
var statearr_68380_68793 = state_68375;
(statearr_68380_68793[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68375[(4)]))){
var statearr_68381_68795 = state_68375;
(statearr_68381_68795[(1)] = cljs.core.first((state_68375[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68796 = state_68375;
state_68375 = G__68796;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68375){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68384 = f__41862__auto__();
(statearr_68384[(6)] = c__41861__auto__);

return statearr_68384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
})], 0)))),((clojure.string.blank_QMARK_(next_page))?null:daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("next",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(goog.dom.getElement("zotero-search").parentNode.scrollTop = (0));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68402){
var state_val_68403 = (state_68402[(1)]);
if((state_val_68403 === (1))){
var inst_68398 = search_fn(prev_search_term,next_page);
var state_68402__$1 = state_68402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68402__$1,(2),inst_68398);
} else {
if((state_val_68403 === (2))){
var inst_68400 = (state_68402[(2)]);
var state_68402__$1 = state_68402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68402__$1,inst_68400);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68408 = [null,null,null,null,null,null,null];
(statearr_68408[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68408[(1)] = (1));

return statearr_68408;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68402){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68402);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68409){var ex__41842__auto__ = e68409;
var statearr_68410_68797 = state_68402;
(statearr_68410_68797[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68402[(4)]))){
var statearr_68411_68798 = state_68402;
(statearr_68411_68798[(1)] = cljs.core.first((state_68402[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68799 = state_68402;
state_68402 = G__68799;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68402){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68412 = f__41862__auto__();
(statearr_68412[(6)] = c__41861__auto__);

return statearr_68412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
})], 0))))]));
})()]);
}),null,"frontend.extensions.zotero/zotero-search");
frontend.extensions.zotero.user_or_group_setting = rum.core.lazy_build(rum.core.build_defcs,(function (state){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_type"},["Zotero user or group?"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("select",{'value':cljs.core.name(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type","type",1174270348))),'onChange':rum.core.mark_sync_update((function (e){
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(frontend.util.evalue(e)));
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"type","type",1174270348),type);
})),'className':"form-select"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$extensions$zotero$iter__68423(s__68424){
return (new cljs.core.LazySeq(null,(function (){
var s__68424__$1 = s__68424;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__68424__$1);
if(temp__5720__auto__){
var s__68424__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68424__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68424__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68426 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68425 = (0);
while(true){
if((i__68425 < size__4651__auto__)){
var type = cljs.core._nth(c__4650__auto__,i__68425);
cljs.core.chunk_append(b__68426,daiquiri.core.create_element("option",{'key':type,'value':type},[clojure.string.capitalize(type)]));

var G__68802 = (i__68425 + (1));
i__68425 = G__68802;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68426),frontend$extensions$zotero$iter__68423(cljs.core.chunk_rest(s__68424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68426),null);
}
} else {
var type = cljs.core.first(s__68424__$2);
return cljs.core.cons(daiquiri.core.create_element("option",{'key':type,'value':type},[clojure.string.capitalize(type)]),frontend$extensions$zotero$iter__68423(cljs.core.rest(s__68424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"group","group",582596132)], null)));
})())])])])]),daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_type_id"},["User or Group ID"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type-id","type-id",2030062700)),'placeholder':"User/Group id",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"type-id","type-id",2030062700),frontend.util.evalue(e));
}),'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795).cljs$core$IFn$_invoke$arity$1(state),frontend.util.evalue(e));
})),'className':"form-input block"},[])])])]),(((((!(clojure.string.blank_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795).cljs$core$IFn$_invoke$arity$1(state))))))) && (cljs.core.not(cljs.core.re_matches(/^\d+$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795).cljs$core$IFn$_invoke$arity$1(state))))))))?daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500","p.text-red-500",1193745313),"User ID is different from username and can be found on the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.zotero.org/settings/keys",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"https://www.zotero.org/settings/keys"], null)," page, it's a number of digits"], null))):null)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type-id","type-id",2030062700)),new cljs.core.Keyword("frontend.extensions.zotero","type-id","frontend.extensions.zotero/type-id",1314510795)),rum.core.reactive], null),"frontend.extensions.zotero/user-or-group-setting");
frontend.extensions.zotero.overwrite_mode_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_overwrite_mode"},["Overwrite existing item page?"]),daiquiri.core.create_element("div",null,[(function (){var attrs68444 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68444))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs68444], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs68444))?null:[daiquiri.interpreter.interpret(attrs68444)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409)))?daiquiri.interpreter.interpret(frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500","p.text-red-500",1193745313),"Dangerous! This will delete and recreate Zotero existing page! Make sure to backup your notes first in case something goes wrong. Make sure you don't put any personal item in previous Zotero page and it's OK to overwrite the page!"], null))):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/overwrite-mode-setting");
frontend.extensions.zotero.attachment_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_include_attachment_links"},["Include attachment links?"]),daiquiri.core.create_element("div",null,[(function (){var attrs68462 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68462))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs68462], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs68462))?null:[daiquiri.interpreter.interpret(attrs68462)]));
})()])]),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_attachments_block_text"},["Attachment under block of:"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244)),'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null),(cljs.core.truth_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115)))?daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_linked_attachment_base_directory"},["Zotero linked attachment base directory",daiquiri.core.create_element("a",{'title':"If you store attached files in Zotero \u2014 the default \u2014 this setting does not affect you. It only applies to linked files. If you're using the ZotFile plugin to help with a linked-file workflow, you should configure it to store linked files within the base directory you've configured. Click to learn more.",'href':"https://www.zotero.org/support/preferences/advanced#linked_attachment_base_directory",'target':"_blank",'className':"ml-2"},[daiquiri.interpreter.interpret(frontend.components.svg.info())])]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)),'placeholder':"/Users/Sarah/Dropbox",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118),frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]):null)]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/attachment-setting");
frontend.extensions.zotero.prefer_citekey_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'title':"Make sure to install Better BibTeX and pin your item first",'className':"title w-72",'htmlFor':"zotero_prefer_citekey"},["Use citekey as your page title?"]),daiquiri.core.create_element("div",null,[(function (){var attrs68488 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"prefer-citekey?","prefer-citekey?",2120866291))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68488))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs68488], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs68488))?null:[daiquiri.interpreter.interpret(attrs68488)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/prefer-citekey-setting");
frontend.extensions.zotero.api_key_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_api_key"},["Zotero API key"]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md"},[daiquiri.core.create_element("input",{'defaultValue':frontend.extensions.zotero.setting.api_key(),'placeholder':"Please enter your Zotero API key",'onBlur':(function (e){
return frontend.extensions.zotero.setting.set_api_key(frontend.util.evalue(e));
}),'className':"form-input block"},[])])])]);
}),null,"frontend.extensions.zotero/api-key-setting");
frontend.extensions.zotero.notes_setting = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_include_notes"},["Include notes?"]),daiquiri.core.create_element("div",null,[(function (){var attrs68517 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915)),(function (){
return frontend.extensions.zotero.setting.set_setting_BANG_(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915),cljs.core.not(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915))));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68517))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs68517], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs68517))?null:[daiquiri.interpreter.interpret(attrs68517)]));
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
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
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
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.setting.remove_profile(cljs.core.deref(profile_STAR_)),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(profile_STAR_,frontend.extensions.zotero.setting.profile()));
}));
}));
})], 0)))])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.extensions.zotero/zotero-profile-selector");
frontend.extensions.zotero.add_all_items = rum.core.lazy_build(rum.core.build_defcs,(function (state){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("div",{'className':"row"},[daiquiri.core.create_element("label",{'className':"title w-72",'htmlFor':"zotero_import_all"},["Add all zotero items"]),(function (){var attrs68670 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_68696){
var state_val_68698 = (state_68696[(1)]);
if((state_val_68698 === (1))){
var inst_68673 = new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state);
var inst_68674 = cljs.core.reset_BANG_(inst_68673,"Fetching..");
var inst_68675 = frontend.extensions.zotero.api.all_top_items_count();
var state_68696__$1 = (function (){var statearr_68700 = state_68696;
(statearr_68700[(7)] = inst_68674);

return statearr_68700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68696__$1,(2),inst_68675);
} else {
if((state_val_68698 === (2))){
var inst_68677 = (state_68696[(8)]);
var inst_68677__$1 = (state_68696[(2)]);
var inst_68678 = new cljs.core.Keyword("frontend.extensions.zotero","fetching-button","frontend.extensions.zotero/fetching-button",-1071148561).cljs$core$IFn$_invoke$arity$1(state);
var inst_68679 = cljs.core.reset_BANG_(inst_68678,"Add all");
var inst_68680 = ["This will import all your zotero items and add total number of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_68677__$1)," pages. Do you wish to continue?"].join('');
var inst_68681 = window.confirm(inst_68680);
var state_68696__$1 = (function (){var statearr_68702 = state_68696;
(statearr_68702[(9)] = inst_68679);

(statearr_68702[(8)] = inst_68677__$1);

return statearr_68702;
})();
if(cljs.core.truth_(inst_68681)){
var statearr_68703_68817 = state_68696__$1;
(statearr_68703_68817[(1)] = (3));

} else {
var statearr_68704_68818 = state_68696__$1;
(statearr_68704_68818[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68698 === (3))){
var inst_68677 = (state_68696[(8)]);
var inst_68683 = new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state);
var inst_68684 = cljs.core.reset_BANG_(inst_68683,inst_68677);
var inst_68685 = new cljs.core.Keyword("frontend.extensions.zotero","progress","frontend.extensions.zotero/progress",-1187409602).cljs$core$IFn$_invoke$arity$1(state);
var inst_68686 = frontend.extensions.zotero.handler.add_all(inst_68685);
var state_68696__$1 = (function (){var statearr_68706 = state_68696;
(statearr_68706[(10)] = inst_68684);

return statearr_68706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68696__$1,(6),inst_68686);
} else {
if((state_val_68698 === (4))){
var state_68696__$1 = state_68696;
var statearr_68708_68819 = state_68696__$1;
(statearr_68708_68819[(2)] = null);

(statearr_68708_68819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68698 === (5))){
var inst_68694 = (state_68696[(2)]);
var state_68696__$1 = state_68696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68696__$1,inst_68694);
} else {
if((state_val_68698 === (6))){
var inst_68688 = (state_68696[(2)]);
var inst_68689 = new cljs.core.Keyword("frontend.extensions.zotero","total","frontend.extensions.zotero/total",-611409901).cljs$core$IFn$_invoke$arity$1(state);
var inst_68690 = cljs.core.reset_BANG_(inst_68689,false);
var inst_68691 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Successfully added all items!",new cljs.core.Keyword(null,"success","success",1890645906));
var state_68696__$1 = (function (){var statearr_68709 = state_68696;
(statearr_68709[(11)] = inst_68690);

(statearr_68709[(12)] = inst_68688);

return statearr_68709;
})();
var statearr_68710_68821 = state_68696__$1;
(statearr_68710_68821[(2)] = inst_68691);

(statearr_68710_68821[(1)] = (5));


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
var frontend$extensions$zotero$state_machine__41839__auto__ = null;
var frontend$extensions$zotero$state_machine__41839__auto____0 = (function (){
var statearr_68712 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68712[(0)] = frontend$extensions$zotero$state_machine__41839__auto__);

(statearr_68712[(1)] = (1));

return statearr_68712;
});
var frontend$extensions$zotero$state_machine__41839__auto____1 = (function (state_68696){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_68696);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e68714){var ex__41842__auto__ = e68714;
var statearr_68715_68823 = state_68696;
(statearr_68715_68823[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_68696[(4)]))){
var statearr_68717_68824 = state_68696;
(statearr_68717_68824[(1)] = cljs.core.first((state_68696[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68825 = state_68696;
state_68696 = G__68825;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$state_machine__41839__auto__ = function(state_68696){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$state_machine__41839__auto____1.call(this,state_68696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$state_machine__41839__auto____0;
frontend$extensions$zotero$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$state_machine__41839__auto____1;
return frontend$extensions$zotero$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_68719 = f__41862__auto__();
(statearr_68719[(6)] = c__41861__auto__);

return statearr_68719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs68670))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1","sm:mt-0","sm:col-span-2"], null)], null),attrs68670], 0))):{'className':"mt-1 sm:mt-0 sm:col-span-2"}),((cljs.core.map_QMARK_(attrs68670))?null:[daiquiri.interpreter.interpret(attrs68670)]));
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
var full_path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68735 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-data-directory","zotero-data-directory",-218308088));
var G__68736 = "storage";
var G__68737 = item_key;
var G__68738 = filename__$1;
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$4(G__68735,G__68736,G__68737,G__68738) : frontend.util.node_path.join.call(null,G__68735,G__68736,G__68737,G__68738));
})())].join('');
return daiquiri.interpreter.interpret(frontend.extensions.zotero.open_button(full_path));
}
}),null,"frontend.extensions.zotero/zotero-imported-file");
frontend.extensions.zotero.zotero_linked_file = rum.core.lazy_build(rum.core.build_defc,(function (path){
if(clojure.string.blank_QMARK_(frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118)))){
return daiquiri.core.create_element("p",{'className':"warning"},["This is a zotero linked file, setting Zotero linked attachment base directory would allow you to open the file in Logseq"]);
} else {
var path__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(path);
var full_path = ["file://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68746 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"zotero-linked-attachment-base-directory","zotero-linked-attachment-base-directory",-799816118));
var G__68747 = clojure.string.replace_first(path__$1,"attachments:","");
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__68746,G__68747) : frontend.util.node_path.join.call(null,G__68746,G__68747));
})())].join('');
return daiquiri.interpreter.interpret(frontend.extensions.zotero.open_button(full_path));
}
}),null,"frontend.extensions.zotero/zotero-linked-file");

//# sourceMappingURL=frontend.extensions.zotero.js.map
